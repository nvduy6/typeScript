import instance  from "./instance";
export const list = ()=>{
    const url = "/product";
    return instance.get(url);
}
export const remove = (id:number)=>{
    const url = `/product/${id}`;
    return instance.delete(url);
}