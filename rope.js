class Rope {
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=x
        this.offsety=y

        var options={
            bodyA=body1,
            bodyB=boby2,
            pointB:{x:offsetX,y:offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
}