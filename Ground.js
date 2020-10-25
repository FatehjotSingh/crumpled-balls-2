class Ground{
    constructor() {
        var options = {
            isStatic: true,
            Density:1.2
        }

        this.body = Bodies.rectangle(width/2, 650, width, 10,options);
        this.width = width;
        this.height = 10;
        

        World.add(world,this.body);
    }

    display() {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}