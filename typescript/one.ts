/////////1///////////////

 //////////////////2/////////////////a
 namespace q2{
 let x:number| string=10;
 x="o"
 let y:number | boolean=5;
 y=true;

///////generic//////
function generalidentity<T>(asd :T): T
{
     return asd;
}
 const q=generalidentity<boolean>(true);
////////enum////////

enum color
{
    red='r',
    green='g',
    yellow='y'
}

let  c :color=color.red
 console.log(c);
}

//////////////////class////
import {ipayable} from './inter.interface';
  class person implements ipayable
{
    names:string;
    age:number;
    constructor(names:string,age:number)
    {
        this.names=names
        this.age=age
    }
    says(): string
    {
        return ("say hi");
    }
    display(names:string,age:number)
    {
        return `names is ${names} age is${age}`
    }
    show() :string
    {
        return `this class person`;
    }
}
class employee extends person implements ipayable
{
   id:number;
   constructor(id:number)
   {
       super("lolla",22);
       this.id=id;
   }
   ///////////////overtiding/////////
   show(): string {
       return `this class employee`
   }
}

