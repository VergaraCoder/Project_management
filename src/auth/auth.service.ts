import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import jwtError from 'jsonwebtoken';
import { ManageError } from 'src/common/Errors/error.custom';

interface ReturnToken{
  access_token:string,
  refresh_token:string
}

@Injectable()
export class AuthService {

  constructor(
    private jtwService:JwtService
  ){}

  create(createAuthDto: CreateAuthDto):ReturnToken {
    return{
      access_token: this.jtwService.sign(createAuthDto,{expiresIn:"10m"}),
      refresh_token: this.jtwService.sign(createAuthDto,{expiresIn:"10d"})
    }
  }

  async renovateToken(token:string){
    try{
      const data=await this.jtwService.decode(token);
      await this.jtwService.verify(token);
      return this.create(data);

    }catch(err:any){
      if(err instanceof jwtError.JsonWebTokenError){
        throw new ManageError({
          type:"UNAUTHORIZED",
          message:"THE TOKEN IS INVALID"
        });
      }
      else if(err instanceof jwtError.NotBeforeError || err instanceof jwtError.TokenExpiredError){
        throw new ManageError({
          type:"UNAUTHORIZED",
          message:"THE TOKEN IS NOT VALID"
        });
      }
      throw ManageError.signedError(err);
    }
  }
}
