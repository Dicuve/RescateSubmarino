
class Grieta {

    constructor (x, y,width,height){
   
       var options=  {
           'restitution': 0.8,
           'friction': 1.0,
           'density': 0.04,
           'isStatic': true
       };
   
       this.body = Bodies.rectangle(x,y,width,height, options);
       //this.x = x;
       //this.y = y;
       this.Visiblity = 255;
       this.width = width;
       this.height = height;
       this.image = loadImage("emhbpu4c-900_preview_rev_1.png")
       World.add(world,this.body);
    }
   
    
    display (){
   

    
       var pos = this.body.position;
       var angle = this.body.angle;

       push();
       if (pos.y > 550){
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity -255;
        tint(255,this.Visiblity);
        console.log ("ok");
       }
       else {
        translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       }
       pop();    
   }
   
   };
