import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as crypt from 'bcrypt';
import { ManageError } from 'src/common/Errors/error.custom';

interface DataToVerifyUser{
  email: string;
  password:string
}

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private UserRepository:Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    try{
      const userCreated:User=this.UserRepository.create(createUserDto);
      await this.UserRepository.save(userCreated);
      return userCreated;
    }catch(err:any){
      throw err;
    }
  }

  async findAll():Promise<User[]> {
    try{
      const usersFind:User[]= await this.UserRepository.find();
      if(!usersFind){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"Users not found",
        });
      }
      return usersFind;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async findOne(id: number) :Promise<User>{
    try{
      const userFind:User= await this.UserRepository.findOneBy({id:id});
      if(!userFind){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"User not found",
        });
      }
      return userFind;
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<string> {
    try{
      const {affected}:number| any= await this.UserRepository.update(id,updateUserDto);
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"User not found",
        });
      }
      return "Perfectly Updated"
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }

  async verifyUserByEmailAndPassword(dataUser:DataToVerifyUser):Promise<User | boolean>{
    const userFind:User=await this.UserRepository.findOneBy({
        email:dataUser.email,
    });

    if(!userFind || !await crypt.compare(dataUser.password,userFind.password)){
      return false;
    }
    return userFind;
  }

  async remove(id: number):Promise<string> {
    try{
      const {affected}:number| any= await this.UserRepository.delete(id);
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"User not found",
        });
      }
      return "Perfectly Deleted"
    }catch(err:any){
      throw ManageError.signedError(err.message);
    }
  }
}
