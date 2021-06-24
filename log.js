class Log {
    constructor(x,y,w,h,a){
        var op = {
            restitution:0.3,
            frition:0.2,
            density:1
        }
        this.body = Bodies.rectangle(x,y,w,h,op)
        Matter.Body.setAngle(this.body, a);
        this.a = a,
        this.w =w,
        this.h = h
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        fill("dodgerblue")
        rotate(angle)
        rectMode(CENTER);
        rect(0,0, this.w, this.h)
        pop()
    }
}