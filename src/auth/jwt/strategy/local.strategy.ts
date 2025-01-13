import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { UsersService } from "src/users/users.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private userService:UsersService){
        super({
            usernameField:'email',
            passwordField:'password',
        });
    }

    // validate(email:string,password:string):Promise<boolean>{
    //     try{

    //     }catch(er:any){}
    // }
}