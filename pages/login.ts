import {Page,Locator} from '@playwright/test';

export class Login{
//locators
private readonly page:Page;
private readonly loginbutton:Locator;
private readonly username:Locator;
private readonly password:Locator;

constructor  (page:Page){

    this.page=page;
    this.loginbutton=page.locator("login");
    this.username=page.locator("username")
    this.password=page.locator("password");
}
//action methods

async login(username:string,password:string){
   
    await this.username.fill(username);
    await this.username.fill(password);
     await this.loginbutton.click();

}

}