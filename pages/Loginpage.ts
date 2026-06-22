import {Page, Locator} from '@playwright/test'; 

export class LoginPage{
    //Locators
    private readonly page:Page;
    private readonly Loginlink:Locator;
    private readonly UsernameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly Loginbutton:Locator;

    //constructor
    constructor (page:Page){
        this.page=page;
        this.Loginlink=this.page.locator("div[data-ng-controller='headerCtrl'] ng-include:nth-child(1)");
        this.UsernameInput=this.page.getByLabel('Username', { exact: true });
        this.passwordInput =this. page.getByLabel('Password', { exact: true });
        this.Loginbutton=this. page.locator('button:has-text("LOGIN")')
    }

    //actions
 async ClickLoginLink(){
    await this.Loginlink.click();
    
 }
 async enterUsername(username:string){
    await this.UsernameInput.clear();
    await this.UsernameInput.fill(username);
 }
 async enterPassword(Password:string){
    await this.passwordInput.clear();
    await this.passwordInput.fill(Password);
 }
 async clickLoginbutton(){
    await this.Loginbutton.click();
 }

 async login(username:string,Password:string){
    this.ClickLoginLink;
    this.enterUsername(username);
    this.enterPassword(Password);
    this.clickLoginbutton;
 }
}