class Ball{
    constructor(x,y) {
        var options = {         
            friction:0.5,
            restitution:0.3,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width= 50
        this.height=50
        this.color = "blue"
        this.image = loadImage("Paper.png");
        World.add(world,this.body);
    }

    display() {
        push();
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}