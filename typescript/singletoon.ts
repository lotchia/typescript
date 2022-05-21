 class show
{
    firstname:string;
   
    static child :show =null;
   
  private constructor(    firstname:string )
    {
        this.firstname=firstname;
    }
   static get()
   {
       if(this.child==null)
       {
           this.child=new show("lolla")
           
       }
       return this.child;
    
   }
   
}
let first:show=show.get();
console.log(first)
let sec:show=show.get();
console.log(first==sec);


