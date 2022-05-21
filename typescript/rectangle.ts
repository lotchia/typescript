namespace labone{
   
    class rectangle
    { 
        width:number;
        height:number;
        rectangle1(width:number, height:number)
        {
            this.width=width;
            this.height=height;
        }
         calccirmference (h:number,w:number) :number
        {
            return h+w*2;
        }
         static whoami():void
        {
            console.log(`I AM RESTANGLE`);
        }
    
    }
     class squar extends  rectangle
     {
         longsquar:number;
        constructor(longsquar:number){
        super();
        this.longsquar=longsquar;
    
    
      }
        calccirmference(h: number): number {
            return h*4;
        }
        static whoami(): void {
            console.log(`I AM SQUER`);
        }
     }
    
    
     let r:rectangle= new rectangle();
     console.log(r.calccirmference(10,20));
     rectangle.whoami();
    
     let s:squar=new squar(30);
     console.log(s.calccirmference(100));
     squar.whoami();
    }
    
    export let all :boolean =true;