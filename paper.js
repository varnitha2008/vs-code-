class paper{                

    construtor(x,y,r){              
        var option=  {                         
    
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body);
    }
    display(){                                          

var paperous=this.body.position;
push();
translate();
rectMode(CENTER);
stokeWeight(3);
fill("pink");
ellipse(0,0,this.r,this.r);
pop();
  




}
}
