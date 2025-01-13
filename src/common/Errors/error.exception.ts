import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";
import path from "path";


@Catch()
export class FilterError implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const request:Request=host.switchToHttp().getRequest();
        const response:Response=host.switchToHttp().getResponse();
        let message:string;
        let status:number | any;
        const ifExist:string[]=exception.message.split(" :: ");
        const ifExist2:any=exception.response;

        if(ifExist2 && ifExist2.message){
            message=ifExist2.message;
            status=ifExist2.StatusCode ? ifExist2.StatusCode : 400;
        }
        else if(ifExist.length==2){
            message=ifExist[1];
            status=ifExist[0];
        }
        else{
            message="INTERNAL SERVER ERROR";
            status=500;
        }

        response.status(status).json({
            message:message,
            timeStamp:new Date(),
            path:request.url,
            method:request.method,
            status:status
        });
    }
}