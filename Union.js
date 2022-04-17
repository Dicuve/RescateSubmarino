class Union {
 
    constructor (bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness : 0.04,
            length: 150
        };
        
        this.image = loadImage("buzo.png");
        this.pointB = pointB;
        this.union = Constraint.create(options);
        World.add(world, this.union); 

    }

    attach (body){
        this.union.bodyA = body;
    }
    
    suelta (){
        this.union.bodyA = null;
    }

    display(){

        if (this.union.bodyA ){
            var pointA = this.union.bodyA.position;
            var pointB = this.pointB;
            push();
            imageMode(CENTER);
            image(this.image, 310, 400, 300, 400);
            stroke (48,22,8);
            strokeWeight (3);
            line (pointB.x,pointB.y, pointA.x, pointA.y);
            pop ();
        }
    }

};


