import axios from "axios";

///hier gebruik ik voor api call van Axios
const client = axios.create({
    baseURL : "http://localhost:8001"
})

//hier maak ik een query voor api
//en om een promis te maken gebruik ik van async await
export async function getProducts(){
    const {data }= await client("/products")
return data;
}
export async function getIdProduct(id :string | number) {
    const{data} = await client(`/products/${id}`)
    return data;/// niet vergeten in eleke function return de data.
}

export async function login(username :string , password :string) {
    const{data} = await client({
        method: "POST",
        url: "/login",
        data:{
        username,
        password
        }
    })
    return data;/// niet vergeten in eleke function return de data.
}
