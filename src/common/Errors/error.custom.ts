import { HttpException, HttpStatus } from "@nestjs/common";


export class ManageError extends Error{
    constructor({type,message}:{type: keyof typeof HttpStatus,message:string}){
        super(`${type} :: ${message}`);
    }

    public static signedError(message:string):void{
        const name:string[] | null=message.split(" :: ");
        if(name){
            throw new HttpException(name,HttpStatus[name[0]]);
        }else{
            throw new HttpException(message,HttpStatus.BAD_REQUEST);
        }
    }
}