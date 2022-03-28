import {IUser} from "../types/auth"
export const authenticate = (user:IUser,next:()=>void)=>{
    localStorage.setItem('user',JSON.stringify(user));
    next();
}
export const isAuthenticate = ()=>{
    if(!localStorage.getItem('user'))return;
    return JSON.parse(localStorage.getItem('user')as string);
}