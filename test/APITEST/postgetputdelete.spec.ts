import {test,expect} from "@playwright/test";
import fs from 'fs';

function jsondata (filepath:string){

return JSON.parse(fs.readFileSync(filepath,"utf-8"));

}

test("delete",async({request})=>{
    const requestbody = jsondata("data/post_request_body.json");

 const postresponse =await request.post("https://restful-booker.herokuapp.com/booking",
    { data:requestbody});

 const postresponsebody=   await postresponse.json()

const bookingid = postresponsebody.bookingid;

const getresponse =await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
const getresponsebody =await getresponse.json();
console.log(getresponsebody);

const tokenrequestbody = jsondata("data/token_request_body.json");
const authresponse =await request.post("https://restful-booker.herokuapp.com/auth",{data:tokenrequestbody});
const authresponsebody =await authresponse.json();
const token = authresponsebody.token;

const putrequestbody = jsondata("data/put_request_body.json");
const putresponce =await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{data:putrequestbody, headers: {"Cookie": `token=${token}`}});
const putresponsebody =await putresponce.json();
console.log(putresponsebody);

const deleteresponse =await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{ headers: {"Cookie": `token=${token}`}});

expect (deleteresponse.ok()).toBeTruthy();

 })

