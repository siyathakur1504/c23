class ground{
    constructor(x,y,width,height){
        var option= {
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,height,option);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        fill("grey")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

}