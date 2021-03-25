class Block {
    constructor(x,y,width,height) {
      var options = {
        'isStatic' : false,
        'friction':1.0,
        'restitution': 0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
       if(this.body.speed < 6){
            var pos =this.body.position;
            push();
            rectMode(CENTER);
            fill("turquoise");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
        }
    }

    score(){
        if(this.visibility < 0 && this.visibility > -105){
            score++;
        }
    }
}