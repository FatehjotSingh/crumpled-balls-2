class BinPart{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            Density:1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = "red"

        World.add(world,this.body);
    }

    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}