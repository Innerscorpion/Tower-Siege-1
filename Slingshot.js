class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.06,
            length:100
        }
        this.Sling=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.Sling)
    }
    display(){
        if(this.Sling.bodyA){
            line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.pointB.x,this.pointB.y)

        }
       
    }

    fly(){
        this.Sling.bodyA=null
    }
}