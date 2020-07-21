//console.log("hello");
class User{
    constructor(name,age,email,luCoins=0,courses=[]){
        this.name=name;
        this.age=age;
        this.email=email;
        this.luCoins=luCoins;
        this.courses=courses;
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}
class Moderator extends User{
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
    }
    removeCoins(){
        this.luCoins--;
        console.log(` Moderator has removed ${this.name} ${this.luCoins} coins`);
    }
}
class Admin extends Moderator{
    addCourse(user,courses){
        //this.courses=[];
        user.courses.push(courses);
        console.log(user);
    }
}
let user1=new User("gowthu",22,"gowthu@gmail.com");
let user2=new User("ramya",26,"ramya2gmail.com");
user2.logout();
user1.login();

let mod=new Moderator("gowthami",22,"gowthu@gmail.com");
mod.addCoins();
//mod.removeCoins();
mod.addCoins();
mod.addCoins();
mod.removeCoins();

let a1=new Admin("ramya",25,"ramya@gmail.com");
let u=[user1,user2,mod,a1];
u.forEach(ele => {
    console.log(ele);
});
a1.addCourse(user1,"JS");
a1.addCourse(user2,"BlockChain");
