game.PlayerEntity = me.Entity.extend({
   init:function (x, y, settings){
       this._super(me.Entity, 'init', [x, y, {
           image: "mario",
           spritewidth: "128",
           spriteheigth: "128",
           width: 128,
           height: 128,
           getShape: function(){
               return (new me.Rect(0, 0, 128, 128)).toPolygon();
           }
       }]);
       this.body.setVelocity(5, 20);
   },
   update:function(delta) {
        if(me.isKeyPressed("right")){
            this.body.vel.x += this.body.accel.x * me.timer.tick;
        }else{
            this.body.vel.x = 0;
        }
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
   }
});