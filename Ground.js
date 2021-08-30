class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.rope);
    }
    display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill("white");
            imageMode(CENTER)
            rectPos(pos.x,pos.y,this.width,this.height);
    }
    }