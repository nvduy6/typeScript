import { IUser } from "../types/auth";
import instance from "./instance";
export const sigupAdd =(user:IUser)=>{
    const url = '/users';
    return instance.post(url,user);
}
export const signin = (user:IUser)=>{
    const url = "/signin";
    return instance.post(url,user);

}