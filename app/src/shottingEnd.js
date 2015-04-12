export class ShottingEnd{
  heading = 'Shooting an end';

  numberOfArrows = 6;
  endNumber =1;
  distance = 30;
  shots = [];

  rounds = [];
  ends = [];
  endNumber = 0;

  archers = [{
    Name: "Paul McKee",
    email: "Paul.mckee@email.com",
    rounds: this.rounds,
  }];


  scores =  [
    {score: 10, colour:"gold"},
    {score: 9, colour:"gold"},
    {score: 8, colour:"red"},
    {score: 7, colour:"red"},
    {score: 6, colour:"blue"},
    {score: 5, colour:"blue"},
    {score: 4, colour:"black"},
    {score: 3, colour:"black"},
    {score: 2, colour:"white"},
    {score: 1, colour:"white"},
    //{score: 0, colour:"black"}
    ];


  get fullName(){
    return '${this.firstName} ${this.lastName}';
  };

  activate(arg1, arg2,  queryString, routeConfig){

    this.archers = [{
      Name: "Paul McKee",
      email: "Paul.mckee@email.com",
      rounds: this.rounds,
    }];

    this.ends.push({
      shots: this.shots,
      total: 0
    });

    this.rounds.push({
      name:'Club shoot 22-Feb-2014',
      type: {
        arrows: 6,
        distance: 30,
        face: 'small',
        type:'MR'
        },
      ends: this.ends,
      total:0
    });


    this.target = {
  			  x: 200,
  			  y: 200,
  			  r: 200 / 2,
  			}
  }



  Complete(){
    alert(`All ${this.numberOfArrows} arrow shot.`);
  }


  drawTarget(canvas){

    var ctx = canvas.getContext("2d")
		this.target.x = canvas.width / 2;
    this.target.y  = canvas.height / 2;
    this.target.r  =canvas.width /2;

		for (var i = this.scores.length - 1; i >= 0; i--) {
			this.scores[i].radius = (this.target.r/this.scores.length)*(i+1);

			ctx.beginPath()
			ctx.fillStyle = this.scores[i].colour
			ctx.arc(this.target.x, this.target.y, this.scores[i].radius, 0, Math.PI*2, false)
			ctx.fill()
			ctx.lineWidth = 1;
      		ctx.strokeStyle = '#003300';
			ctx.stroke();
			ctx.closePath()

		};

	};


 addShot(e)
 {
   var canvas = e.currentTarget;

   var x1 = e.pageX - canvas.getBoundingClientRect().left
   var y1 = e.pageY - canvas.getBoundingClientRect().top

   var w = canvas.width
   var h = canvas.height
   var Radius = w/2;


 		// 	var shot = {
 		// 		x :  x1-window.scrollX,
 		// 	  y : y1-window.scrollY,
 		// 	  score : 0,
 		// 	};
       //


			var shot = {
				x : e.offsetX,
			  y : e.offsetY,
			  score : 0
			};


 			console.log ("----- Mouse down (start)-------");
 			console.log	('e.pageX ,e.pageY' , e.pageX  , e.pageY);
 			console.log	('shot.x, shot.y' , shot.x , shot.y);
 			console.log	('x canvas,y canvas' , canvas.getBoundingClientRect().left,canvas.getBoundingClientRect().top);
 			console.log	('y1 > Radius*2' ,shot.y , Radius*2);
 			console.log ("----- Mouse down (end)-------");

 			if (shot.x < 0 || shot.y <0 || shot.x > Radius*2 || shot.y > Radius*2) return;

 			shot.TargetCenterX = canvas.offsetWidth /2; //this.target.x; //e.x;
 			shot.TargetCenterY = canvas.offsetHeight /2; //this.target.y; //e.y;
 		// 	shot.radius = Math.sqrt(
 		// 				Math.pow((shot.x-e.x), 2) +
 		// 				Math.pow((shot.y-e.y), 2)
 		// 			);

       shot.radius = Math.sqrt(
 						Math.pow((shot.x-shot.TargetCenterX), 2) +
 						Math.pow((shot.y-shot.TargetCenterY), 2)
 					);

 			for (var i = this.scores.length - 1; i >= 0; i--) {

 			    if (shot.radius < this.scores[i].radius && shot.score < this.scores[i].score) {
 			    		shot.score = this.scores[i].score;
 			    }
 			}

 		    this.archers[0].rounds[0].ends[this.endNumber].shots.push(shot);
 		    //RefreshShotsList(this.archers);
 		    this.drawTarget(canvas);
 		    this.ShowShotsOnTarget(canvas, this.archers[0].rounds[0].ends[this.endNumber].shots);
 		};


    resizeCanvas() {

      canvas.width = $('#canvas').parent().width();//window.innerWidth;
      canvas.height =canvas.width;// window.innerWidth;//window.innerHeight;

  		this.drawTarget(canvas);
      this.ShowShotsOnTarget(canvas, this.shots);

  		//RefreshShotsList(archers);
  		//ShowShotsOnTarget(archers[0].rounds[0].ends[endNumber].shots);

  };


  ShowShotsOnTarget(canvas, shots){
      var context = canvas.getContext("2d")

      for (var i = shots.length - 1; i >= 0; i--) {
        var x = (shots[i].x/shots[i].TargetCenterX) * this.target.r;
        var y = ((shots[i].y/shots[i].TargetCenterX) * this.target.r) + (this.target.y - this.target.r);
        console.log	(this.target.y , this.target.r);

        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(x-4,y);
        context.lineTo(x+4,y);
        context.moveTo(x,y-4);
        context.lineTo(x,y+4);
        context.strokeStyle = "grey";//"rgb(255,255,255)";
        context.stroke();
        context.closePath()

      };

  };

}
