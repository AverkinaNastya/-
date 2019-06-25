var girlblack = new Image();
girlblack.src = 'img/girlblack1.png';
var girlgreen = new Image();
girlgreen.src = 'img/girlgreen1.png';
var doorblack_img = new Image();
doorblack_img.src = 'img/doorblack.png';
var doorgreen_img = new Image();
doorgreen_img.src = 'img/doorgreen.png';
var keyblack_img = new Image();
keyblack_img.src = 'img/keyblack.png';
var keygreen_img = new Image();
keygreen_img.src = 'img/keygreen.png';
var skeleton1 = new Image();
skeleton1.src = 'img/skeleton1.png';
var skeleton2 = new Image();
skeleton2.src = 'img/skeleton2.png';
var skeleton3 = new Image();
skeleton3.src = 'img/Skeleton3.png';
var skeleton4 = new Image();
skeleton4.src = 'img/skeleton4.png';
var wolf1 = new Image();
wolf1.src = 'img/wolf1.png';
var wolf2 = new Image();
wolf2.src = 'img/wolf2.png';
var wolf3 = new Image();
wolf3.src = 'img/wolf3.png';
var wolf4 = new Image();
wolf4.src = 'img/wolf4.png';
var mine_black = new Image();
mine_black.src = 'img/mine_black.png';
var mine_red = new Image();
mine_red.src = 'img/mine_red.png';
var lvls =  /*1 уровень*/[{
	i1 : 0,
	z1 : 0,
	i2 : 6,
	z2 : 6,
	s : [[4,0,0,1,0,2,1],
		 [1,1,0,1,0,1,1],
		 [0,0,0,0,0,1,0],
		 [1,1,1,1,1,1,0],
		 [3,1,0,0,0,0,0],
		 [0,0,0,0,0,1,0],
		 [1,1,1,1,5,1,0]],
},/*2 уровень*/ {
	i1 : 0,
	z1 : 0,
	i2 : 6,
	z2 : 0,
	s : [[0,0,0,1,0,0,0],
		 [4,1,0,1,0,1,2],
		 [0,1,0,0,0,1,1],
		 [0,6,0,1,1,6,5],
		 [0,0,0,0,0,0,0],
		 [1,0,1,1,1,1,0],
		 [0,0,0,0,1,3,0]],
},/*3 уровень*/ {
	i1 : 0,
	z1 : 2,
	i2 : 5,
	z2 : 5,
	s : [[6,0,0,0,3,0,4],
		 [0,0,1,1,1,0,1],
		 [0,1,1,6,1,0,1],
		 [0,0,0,0,0,6,1],
		 [1,1,0,1,0,0,5],
		 [2,0,1,0,0,0,6],
		 [0,0,0,0,1,6,1]],
},/*4 уровень*/ {
	i1 : 1,
	z1 : 2,
	i2 : 1,
	z2 : 4,
	s : [[1,1,6,0,0,6,1],
		 [6,0,0,0,0,0,6],
		 [0,0,1,6,0,0,3],
		 [5,0,1,0,0,1,1],
		 [0,0,0,0,0,0,0],
		 [1,1,6,0,1,6,0],
		 [2,0,0,0,1,4,0]],
},/*5 уровень*/ {
	i1 : 2,
	z1 : 2,
	i2 : 2,
	z2 : 3,
	s : [[0,6,1,1,6,0,2],
		 [5,0,6,6,0,0,6],
		 [0,0,0,0,0,0,0],
		 [6,0,1,1,0,1,0],
		 [1,0,1,3,6,0,0],
		 [1,0,1,0,1,4,0],
		 [6,0,0,0,1,6,6]],
},/*6 уровень*/ {
	i1 : 5,
	z1 : 1,
	i2 : 1,
	z2 : 5,
	s : [[0,0,0,0,0,1,6],
		 [0,1,1,6,0,0,2],
		 [0,0,6,1,0,6,1],
		 [3,6,0,0,0,0,5],
		 [1,1,0,0,0,0,0],
		 [6,0,0,1,6,6,0],
		 [1,6,0,0,0,0,4]],
	nps : [{
		type: 'skeleton',
		i: 4,
		z: 2,
		direction : 'right',
	}]
},/*7 уровень*/ {
	i1 : 0,
	z1 : 0,
	i2 : 0,
	z2 : 1,
	s : [[0,0,1,3,0,6,0],
		 [0,0,0,6,0,6,0],
		 [0,0,0,0,0,0,0],
		 [0,1,0,0,1,1,0],
		 [4,6,0,0,1,0,0],
		 [1,6,0,1,6,0,0],
		 [2,0,0,6,5,0,0]],
	nps : [{
		type: 'skeleton',
		i: 2,
		z: 0,
		direction : 'right',
	},{
		type: 'skeleton',
		i: 6,
		z: 6,
		direction : 'top',
	}]
},/*8 уровень*/ {
	i1 : 1,
	z1 : 1,
	i2 : 1,
	z2 : 2,
	s : [[4,1,1,1,6,1,2],
		 [0,0,0,6,0,6,0],
		 [0,0,0,0,0,0,0],
		 [1,6,0,1,0,0,1],
		 [0,3,6,0,0,0,6],
		 [0,1,6,0,0,1,5],
		 [0,0,0,0,0,0,0]],
	nps : [{
		type: 'skeleton',
		i: 2,
		z: 0,
		direction : 'right',
	},{
		type: 'skeleton',
		i: 4,
		z: 3,
		direction : 'bottom',
	}]
},/*9 уровень*/ {
	i1 : 4,
	z1 : 1,
	i2 : 0,
	z2 : 3,
	s : [[0,5,1,0,6,6,3],
		 [0,1,6,0,0,0,0],
		 [0,0,0,0,1,6,0],
		 [0,0,1,0,1,0,0],
		 [6,0,6,0,0,4,6],
		 [2,6,6,0,0,0,6],
		 [0,0,0,0,0,0,0]],
	nps : [{
		type: 'skeleton',
		i: 0,
		z: 0,
		direction : 'bottom',
	},{
		type: 'skeleton',
		i: 6,
		z: 6,
		direction : 'left',
	}]
},/*10 уровень*/ {
	i1 : 1,
	z1 : 3,
	i2 : 5,
	z2 : 3,
	s : [[2,0,1,1,1,0,3],
		 [6,0,0,0,0,0,6],
		 [6,0,0,6,0,0,6],
		 [0,0,0,1,0,0,0],
		 [6,0,0,6,0,0,6],
		 [1,0,0,0,0,0,0],
		 [5,0,1,1,1,1,4]],
	nps : [{
		type: 'skeleton',
		i: 3,
		z: 0,
		direction : 'right',
	},{
		type: 'skeleton',
		i: 3,
		z: 6,
		direction : 'left',
	}]
},/*11 уровень*/ {
	i1 : 0,
	z1 : 0,
	i2 : 2,
	z2 : 3,
	s : [[0,1,1,1,0,0,6,6],
		 [0,0,0,0,0,6,0,0],
		 [6,1,0,0,6,0,5,6],
		 [0,1,0,1,1,6,0,0],
		 [4,6,0,0,0,0,0,0],
		 [0,0,0,0,1,0,2,6],
		 [6,3,1,6,1,1,6,1]],
},/*12 уровень*/ {
	i1 : 0,
	z1 : 0,
	i2 : 3,
	z2 : 0,
	s : [[0,0,0,0,6,3,6,1],
		 [1,1,1,0,0,0,0,6],
		 [0,0,0,0,0,1,0,1],
		 [0,6,1,6,6,4,0,1],
		 [0,0,0,0,0,0,0,6],
		 [6,6,1,0,0,6,0,5],
		 [0,0,0,0,1,6,1,0],
		 [2,6,0,0,0,0,6,6]],
},/*13 уровень*/ {
	i1 : 7,
	z1 : 3,
	i2 : 7,
	z2 : 4,
	s : [[1,3,1,6,1,1,6,2],
		 [1,0,0,0,0,6,1,0],
		 [6,0,1,6,0,0,6,0],
		 [0,0,1,0,0,0,0,0],
		 [5,6,0,0,0,6,0,0],
		 [1,6,0,0,6,0,0,1],
		 [6,4,0,1,1,0,1,1],
		 [1,6,6,0,0,0,0,6]],
},/*14 уровень*/ {
	i1 : 1,
	z1 : 1,
	i2 : 6,
	z2 : 6,
	s : [[6,3,6,0,0,1,6,1],
		 [1,0,0,0,0,1,4,6],
		 [6,0,6,6,0,0,0,6],
		 [6,0,0,1,6,0,6,1],
		 [1,6,0,6,0,0,0,2],
		 [1,0,0,0,1,0,6,1],
		 [1,1,6,0,0,0,0,6],
		 [5,0,0,0,0,1,1,1]],
},/*15 уровень*/ {
	i1 : 3,
	z1 : 2,
	i2 : 3,
	z2 : 6,
	s : [[1,0,0,6,1,6,1,1],
		 [6,1,0,0,0,0,0,6],
		 [0,0,0,0,6,0,6,2],
		 [3,1,0,0,6,0,0,0],
		 [1,4,6,0,1,0,1,1],
		 [1,0,0,0,1,6,1,5],
		 [6,0,1,0,6,0,0,0],
		 [0,0,1,0,0,0,1,6]],
},/*16 уровень*/ {
	i1 : 1,
	z1 : 2,
	i2 : 2,
	z2 : 3,
	s : [[1,1,1,0,6,0,1,6],
		 [3,6,0,0,0,0,6,4],
		 [0,1,0,0,6,0,6,0],
		 [0,0,0,6,1,0,1,0],
		 [1,6,0,0,0,0,0,0],
		 [1,1,0,6,0,6,0,1],
		 [1,6,0,0,1,0,0,5],
		 [6,2,0,0,6,0,1,6]],
	nps : [{
		type: 'wolf',
		i: 4,
		z: 2,
		direction : 'right',
	}]
},/*17 уровень*/ {
	i1 : 3,
	z1 : 2,
	i2 : 5,
	z2 : 1,
	s : [[1,6,0,0,0,6,1,6],
		 [6,3,0,1,0,0,0,0],
		 [0,1,0,1,0,1,0,2],
		 [0,0,0,1,0,0,0,0],
		 [6,6,1,6,0,0,0,6],
		 [6,0,0,4,1,0,0,0],
		 [1,0,6,1,0,0,1,5],
		 [6,0,0,0,0,0,0,6]],
	nps : [{
		type: 'wolf',
		i: 1,
		z: 4,
		direction : 'right',
	},{
		type: 'wolf',
		i: 3,
		z: 4,
		direction : 'right',
	}]
},/*18 уровень*/ {
	i1 : 1,
	z1 : 6,
	i2 : 5,
	z2 : 2,
	s : [[5,0,6,0,3,1,6,1],
		 [6,0,1,0,6,0,0,6],
		 [0,0,6,0,0,0,1,0],
		 [1,0,0,0,0,0,0,0],
		 [0,0,6,0,0,1,6,6],
		 [0,1,0,0,0,0,0,0],
		 [0,2,1,6,0,1,0,1],
		 [1,6,0,0,0,4,0,0]],
	nps : [{
		type: 'wolf',
		i: 3,
		z: 7,
		direction : 'left',
	},{
		type: 'wolf',
		i: 5,
		z: 7,
		direction : 'left',
	}]
},/*19 уровень*/ {
	i1 : 1,
	z1 : 4,
	i2 : 7,
	z2 : 4,
	s : [[0,0,0,1,1,0,0,3],
		 [4,1,0,1,0,0,6,1],
		 [6,0,0,6,6,0,0,0],
		 [2,1,0,0,0,0,6,1],
		 [0,6,1,0,0,0,0,0],
		 [0,0,0,0,6,1,0,6],
		 [6,0,1,1,0,1,5,6],
		 [6,0,0,0,0,1,6,1]],
	nps : [{
		type: 'wolf',
		i: 3,
		z: 2,
		direction : 'right',
	},{
		type: 'wolf',
		i: 5,
		z: 3,
		direction : 'left',
	}]
},/*20 уровень*/ {
	i1 : 6,
	z1 : 3,
	i2 : 6,
	z2 : 4,
	s : [[2,6,0,1,6,4,1,0],
		 [0,0,0,6,0,0,6,0],
		 [1,1,0,0,1,0,0,0],
		 [0,0,6,0,1,1,6,0],
		 [0,0,0,0,0,0,0,0],
		 [0,1,0,1,0,6,0,0],
		 [0,6,0,0,0,0,1,0],
		 [0,3,1,1,1,6,5,0]],
	nps : [{
		type: 'wolf',
		i: 3,
		z: 0,
		direction : 'bottom',
	},{
		type: 'wolf',
		i: 0,
		z: 7,
		direction : 'bottom',
	}]
},/*21 уровень*/ {
	i1 : 0,
	z1 : 0,
	i2 : 6,
	z2 : 0,
	s : [[0,0,0,1,0,0,0],
		 [4,1,0,1,0,1,2],
		 [0,1,0,0,0,1,1],
		 [0,6,0,1,1,6,5],
		 [0,0,0,0,0,0,0],
		 [1,0,1,1,1,1,0],
		 [0,0,0,7,1,3,0]],
}];
var nom_lvl = 0;
var motion = 0;
var pos = 0;
var i1 = lvls[0].i1;
var i2 = lvls[0].i2;
var z1 = lvls[0].z1;
var z2 = lvls[0].z2;
var s = lvls[0].s;
var doorblack = true;
var doorgreen = true;
var keygreen = true;
var keyblack = true;
var keyblack_x;
var keyblack_y;
var keygreen_x;
var keygreen_y;
var doorblack_x;
var doorblack_y;
var doorgreen_x;
var doorgreen_y;
var nps = [];
var timer_ = false;
var x1 = z1 * 100;
var y1 = i1 * 100;
var x2 = z2*100;
var y2 = i2*100;
var mx1 = x1;
var mx2 = x2;
var my1 = y1;
var my2 = y2;
var mines = [];
var mines_nom = 0;
var text = document.getElementById('text');
var canvas = document.getElementById('c1');
canvas.width = s[0].length * 100;
canvas.height = s.length * 100;
var ctx = canvas.getContext('2d');
draw_(s,keyblack_x,keyblack_y,keygreen_x,keygreen_y);

function draw_() {
	canvas.width = s[0].length * 100;
	canvas.height = s.length * 100;	
	document.getElementById('text').style.height = canvas.height + 'px';
	document.getElementById('menu').style.height = canvas.height - 50 + 'px';
	document.getElementById('menu').style.paddingLeft = ((canvas.width - 300)/2) + 'px';
	document.getElementById('menu').style.paddingRight = ((canvas.width - 300)/2) + 'px';  


	if (nom_lvl < 10) {
		canvas.style.backgroundColor = '#FF6347';
	} else if (nom_lvl < 20){
		canvas.style.backgroundColor = '#53b553';
	} else if (nom_lvl < 30){
		canvas.style.backgroundColor = '#66A1D2';
	}


	for (var y = 0; y < s.length; y++) {
		for (var t = 0; t < s[y].length; t++) {
			if (s[y][t] == 1){
				if (nom_lvl < 10) {
					square_(y,t);
				} else if (nom_lvl < 20) {
					trees_(y,t);
				} else if (nom_lvl < 30) {
					seaweed(y,t);
				}
			}
			if (s[y][t] == 2) {
				keyblack_x = t*100;
				keyblack_y = y*100;
			}
			if (s[y][t] == 3) {
				keygreen_x = t*100;
				keygreen_y = y*100;
			}
			if (s[y][t] == 4) {
				doorblack_x = t * 100;
				doorblack_y = y * 100;
			}
			if (s[y][t] == 5) {
				doorgreen_x = t * 100;
				doorgreen_y = y * 100;
			}
			if (s[y][t] == 6) {
				if (nom_lvl < 10) {
					spikes_(y,t);
				}	else if (nom_lvl < 20) {
					pond(y,t);
				} else if (nom_lvl < 30) {
					sea_urchin(y,t);
				}
			}
			if (s[y][t] == 7) {
				mines[mines_nom] = new Object();
				mines[mines_nom].i = y;
				mines[mines_nom].z = t;
				mines[mines_nom].x = mines[mines_nom].z * 100;
				mines[mines_nom].y = mines[mines_nom].i * 100;
				mines[mines_nom].state = true;
				mines[mines_nom].color = 'black';
				mines_nom += 1;
			}
		}
	}
}
function square_(y,t){
	ctx.fillStyle = 'brown';
	ctx.fillRect(t*100,y*100,100,100);
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'black';
	ctx.strokeRect(t*100,y*100,100,100);
	ctx.fillRect(t*100,y*100 + 33, 100,1);
	ctx.fillRect(t*100,y*100 + 66, 100,1);
	ctx.fillRect(t*100+58,y*100,1,33);
	ctx.fillRect(t*100+58,y*100+66,1,33);
	ctx.fillRect(t*100+30,y*100+33,1,33);
	ctx.fillRect(t*100+80,y*100+33,1,33);
}

function spikes_(y,t) {
	ctx.fillStyle = 'grey';
	ctx.beginPath();
	for (var ys = 0; ys < 100; ys+=25) {
		for (var xs = 0; xs < 100; xs+=25) {
			ctx.moveTo(t*100+xs,y*100+25+ys);
			ctx.lineTo(t*100+12.5+xs,y*100+ys);
			ctx.lineTo(t*100+25+xs,y*100+25+ys);
			ctx.lineTo(t*100+xs,y*100+25+ys);
			ctx.fill();
			ctx.stroke();
			
		}
	}
}

function trees_(y,t) {
	for (var i = 0; i < 100; i+=50) {
		for (var x = 0; x < 100; x+=50) {
			var m = Math.floor(Math.random() * 3 + 0);
			switch (m){
				case 0: ctx.fillStyle = '#32CD32';
						ctx.strokeStyle = '#006400';
						ctx.beginPath();
						ctx.moveTo(t*100+x+10,y*100+i+20);
						ctx.lineTo(t*100+x+25,y*100+i);
						ctx.lineTo(t*100+x+40,y*100+i+20);
						ctx.lineTo(t*100+x+10,y*100+i+20);
						ctx.fill();
						ctx.stroke();
						ctx.beginPath();
						ctx.moveTo(t*100+x,y*100+i+40);
						ctx.lineTo(t*100+x+25,y*100+i+20);
						ctx.lineTo(t*100+x+50,y*100+i+40);
						ctx.lineTo(t*100+x,y*100+i+40);
						ctx.fill();
						ctx.stroke();
						ctx.fillStyle = '#8B4513';
						ctx.strokeStyle = 'black';
						ctx.fillRect(t*100+x+20,y*100+i+40,10,10);
				break;
				case 1: ctx.fillStyle = '#32CD32';
						ctx.strokeStyle = '#006400';
						ctx.beginPath();
						ctx.arc(t*100+x+25,y*100+i+15,15,0,Math.PI * 2);
						ctx.fill();
						ctx.stroke();
						ctx.beginPath();
						ctx.fillStyle = '#8B4513';
						ctx.strokeStyle = 'black';
						ctx.fillRect(t*100+x+20,y*100+i+30,10,20);	
				break;	
				case 2: ctx.fillStyle = '#32CD32';
						ctx.strokeStyle = '#006400';
						ctx.beginPath();
						ctx.moveTo(t*100+x+25,y*100+i);
						ctx.lineTo(t*100+x+40,y*100+i+20);
						ctx.lineTo(t*100+x+40,y*100+i+30);
						ctx.lineTo(t*100+x+30,y*100+i+40);
						ctx.lineTo(t*100+x+20,y*100+i+40);
						ctx.lineTo(t*100+x+10,y*100+i+30);
						ctx.lineTo(t*100+x+10,y*100+i+20);
						ctx.lineTo(t*100+x+25,y*100+i);
						ctx.fill();
						ctx.stroke();
						ctx.fillStyle = '#8B4513';
						ctx.strokeStyle = 'black';
						ctx.fillRect(t*100+x+20,y*100+i+40,10,10);
			}
			
		}
	}
}

function pond(y,t) {
	ctx.fillStyle = '#4380D3';
	ctx.strokeStyle = '#0F4FA8';
	ctx.beginPath();
	ctx.moveTo(t*100,y*100+70);
	ctx.lineTo(t*100,y*100+60);
	ctx.lineTo(t*100+20,y*100+40);
	ctx.lineTo(t*100+70,y*100+40);
	ctx.lineTo(t*100+90,y*100+60);
	ctx.lineTo(t*100+70,y*100+90);
	ctx.lineTo(t*100+10,y*100+90);
	ctx.lineTo(t*100,y*100+70);
	ctx.fill();
	ctx.stroke();

	ctx.strokeStyle = '#39E444';
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(t*100+15,y*100+90);
	ctx.lineTo(t*100+15,y*100+70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+45,y*100+90);
	ctx.lineTo(t*100+45,y*100+70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+25,y*100+60);
	ctx.lineTo(t*100+25,y*100+30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+55,y*100+60);
	ctx.lineTo(t*100+55,y*100+30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+75,y*100+60);
	ctx.lineTo(t*100+75,y*100+40);
	ctx.stroke();

	ctx.lineCap = 'round';
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#A64100';

	ctx.beginPath();
	ctx.moveTo(t*100+15,y*100+70);
	ctx.lineTo(t*100+15,y*100+40);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+45,y*100+70);
	ctx.lineTo(t*100+45,y*100+50);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+25,y*100+30);
	ctx.lineTo(t*100+25,y*100+10);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+55,y*100+30);
	ctx.lineTo(t*100+55,y*100+10);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+75,y*100+40);
	ctx.lineTo(t*100+75,y*100+20);
	ctx.stroke();
		
	ctx.lineWidth = 1;
	ctx.lineCap = 'butt';
}

function seaweed(y,t) {
	ctx.strokeStyle = 'green';
	ctx.lineWidth = 5;
	ctx.lineCap = 'round';

	ctx.beginPath();
	ctx.moveTo(t*100+15,y*100+40);
	ctx.lineTo(t*100+15,y*100+20);
	ctx.lineTo(t*100+25,y*100+20);
	ctx.lineTo(t*100+25,y*100);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+45,y*100);
	ctx.lineTo(t*100+45,y*100+20);
	ctx.lineTo(t*100+55,y*100+20);
	ctx.lineTo(t*100+55,y*100+40);
	ctx.lineTo(t*100+55,y*100+30);
	ctx.lineTo(t*100+90,y*100);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+5,y*100+40);
	ctx.lineTo(t*100+5,y*100+60);
	ctx.lineTo(t*100+15,y*100+70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+35,y*100+30);
	ctx.lineTo(t*100+35,y*100+50);
	ctx.lineTo(t*100+45,y*100+50);
	ctx.lineTo(t*100+55,y*100+70);
	ctx.lineTo(t*100+75,y*100+50);
	ctx.lineTo(t*100+75,y*100+30);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+5,y*100+80);
	ctx.lineTo(t*100+15,y*100+90);
	ctx.lineTo(t*100+15,y*100+100);
	ctx.lineTo(t*100+25,y*100+90);
	ctx.lineTo(t*100+25,y*100+70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+45,y*100+100);
	ctx.lineTo(t*100+45,y*100+90);
	ctx.lineTo(t*100+70,y*100+70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(t*100+75,y*100+80);
	ctx.lineTo(t*100+85,y*100+90);
	ctx.lineTo(t*100+85,y*100+100);
	ctx.lineTo(t*100+85,y*100+90);
	ctx.lineTo(t*100+95,y*100+70);
	ctx.lineTo(t*100+95,y*100+50);
	ctx.stroke();

	ctx.lineWidth = 1;
	ctx.lineCap = 'butt';
}

function sea_urchin(y,t) {
	ctx.fillStyle = 'black';
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.arc(t*100 + 50,y*100 + 50,20,0,Math.PI * 2);
	ctx.fill();
	ctx.stroke();

	for (var i = 0; i <= 100; i+=10) {
		ctx.beginPath();
		ctx.moveTo(t*100+50,y*100+50);
		ctx.lineTo(t*100+i,y*100+5);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(t*100+50,y*100+50);
		ctx.lineTo(t*100+i,y*100+95);
		ctx.stroke();
	}
	for (var i = 0; i <= 100; i+=10) {
		ctx.beginPath();
		ctx.moveTo(t*100+50,y*100+50);
		ctx.lineTo(t*100+5,y*100+i);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(t*100+50,y*100+50);
		ctx.lineTo(t*100+95,y*100+i);
		ctx.stroke();
	}
}

function sh(keyCode) {
	if ((keyCode*1 == 97)||(keyCode*1 == 1092)||(keyCode*1 == 100)||(keyCode*1 == 1074)||(keyCode*1 == 37)||(keyCode*1 == 39)){
		left_right(keyCode);
	}
	if ((keyCode*1 == 119)||(keyCode*1 == 1094)||(keyCode*1 == 115)||(keyCode*1 == 1099)||(keyCode*1 == 38)||(keyCode*1 == 40)){
		top_bottom(keyCode);
	}
	function left_right() {
		if ((keyCode*1 == 97)||(keyCode*1 == 1092)||(keyCode*1 == 37)) {
			motion = -100;
			z1--;
			z2--;
			pos = '+';
			girlblack.src = 'img/girlblack4.png';
			girlgreen.src = 'img/girlgreen4.png';
		} else {
			motion = 100;
			z1++;
			z2++;
			pos = '-';
			girlblack.src = 'img/girlblack2.png';
			girlgreen.src = 'img/girlgreen2.png';
		};
		if ((z1 < s[i1].length)&&(z1>=0)&&(s[i1][z1] != 1)) {
			my1 = y1;
			mx1 = x1;
			x1 += motion;
		} else	if(pos == '+'){
					z1++;
			    }else {z1--}
		if ((z2 < s[i1].length)&&(z2>=0)&&(s[i2][z2] != 1)) {
			my2 = y2;
			mx2 = x2;
			x2 += motion;
		} else	if(pos == '+'){
					z2++;
			    }else {z2--}

	}
	function top_bottom() {
		if ((keyCode*1 == 119)||(keyCode*1 == 1094)||(keyCode*1 == 38)) {
			motion = -100;
			i1--;
			i2--;
			pos = '+';
			girlblack.src = 'img/girlblack3.png';
			girlgreen.src = 'img/girlgreen3.png';
		} else {
			motion = 100;
			i1++;
			i2++;
			pos = '-';
			girlblack.src = 'img/girlblack1.png';
			girlgreen.src = 'img/girlgreen1.png';
		};
		if ((i1 < s.length)&&(i1>=0)&&(s[i1][z1] != 1)) {
			mx1 = x1;
			my1 = y1;
			y1 += motion;
		} else	if(pos == '+'){
					i1++;
			    }else {i1--}
		if ((i2 < s.length)&&(i2>=0)&&(s[i2][z2] != 1)) {
			mx2 = x2;
			my2 = y2;
			y2 += motion;
		} else	if(pos == '+'){
					i2++;
			    }else {i2--}
	}
	if (keyCode*1 == 27){
		menu(keyCode);
		function menu() {
				if (document.getElementById('menu').style.display != 'block'){
					document.getElementById('menu').style.display = 'block';
					for (var i = 0; i < document.getElementsByClassName('blvls').length; i++) {
						document.getElementsByClassName('blvls')[i].style.display = 'block';
					}
				} else {
					document.getElementById('menu').style.display = 'none';
					for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
						document.getElementsByTagName('button')[i].style.display = 'none';
					}
				}
			}
	} else {
				document.getElementById('menu').style.display = 'none';
				for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
					document.getElementsByTagName('button')[i].style.display = 'none';
				}
			}

	notification();
}

function repeat_(n) {
			nom_lvl = n;
			i1 = lvls[nom_lvl].i1;
			i2 = lvls[nom_lvl].i2;
			z1 = lvls[nom_lvl].z1;
			z2 = lvls[nom_lvl].z2;
			s = lvls[nom_lvl].s;
			doorblack = true;
			doorgreen = true;
			keygreen = true;
			keyblack = true;
			x1 = z1 * 100;
			y1 = i1 * 100;
			x2 = z2*100;
			y2 = i2*100;
			mx1 = x1;
			mx2 = x2;
			my1 = y1;
			my2 = y2;
			mines = [];
			mines_nom = 0;
			girlblack.src = 'img/girlblack1.png';
			girlgreen.src = 'img/girlgreen1.png';

			motion = 0;
			pos = 0;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			draw_(s);
			_nps_(lvls[nom_lvl], nps, s);
}

function _nps_() {

		if (lvls[nom_lvl].nps != undefined) {
		nps = [];
		for (var b = 0; b < lvls[nom_lvl].nps.length; b++) {
			nps[b] = new Object();
			nps[b].direction = lvls[nom_lvl].nps[b].direction;
			nps[b].type = lvls[nom_lvl].nps[b].type;
			nps[b].i = lvls[nom_lvl].nps[b].i;
			nps[b].z = lvls[nom_lvl].nps[b].z;
			nps[b].x = nps[b].z * 100;
			nps[b].y = nps[b].i * 100;
			nps[b].mx = nps[b].z * 100;
			nps[b].my = nps[b].i * 100;	
			if (nps[b].type == 'skeleton') {
				ctx.drawImage(skeleton1,nps[b].x + 25,nps[b].y);	
			} else if (nps[b].type == 'wolf'){
				ctx.drawImage(wolf1,nps[b].x + 15, nps[b].y + 15);
			}
		}
		
		if (timer_ == false) {

			var timer_nps = setInterval(function () {
				for (var i = 0; i < nps.length; i++) {
						switch (nps[i].direction) {
						case 'right': if ((nps[i].x + 100 == canvas.width)||(s[nps[i].i][nps[i].z + 1] == 1)||(s[nps[i].i][nps[i].z + 1] == 6)) {
										nps[i].direction = 'left';
									} else {
										nps[i].mx = nps[i].x;
										nps[i].x += 100;
										nps[i].z += 1;
										if (nps[i].type == 'skeleton') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(skeleton2,nps[i].x + 25,nps[i].y);
										} else if (nps[i].type == 'wolf') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(wolf2,nps[i].x + 15, nps[i].y + 15);
										}
									}
						break;
						case 'left': if ((nps[i].x == 0)||(s[nps[i].i][nps[i].z - 1] == 1)||(s[nps[i].i][nps[i].z - 1] == 6)) {
										nps[i].direction = 'right';
									} else {
										nps[i].mx = nps[i].x;
										nps[i].x -= 100;
										nps[i].z -= 1;
										if (nps[i].type == 'skeleton') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(skeleton4,nps[i].x + 25,nps[i].y);
										} else if (nps[i].type == 'wolf') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(wolf4,nps[i].x + 15, nps[i].y + 15);
										}
									}
						break;
						case 'bottom': if ((nps[i].y + 100 == canvas.height)||(s[nps[i].i + 1][nps[i].z] == 1)||(s[nps[i].i + 1][nps[i].z] == 6)) {
										nps[i].direction = 'top';
									} else {
										nps[i].my = nps[i].y;
										nps[i].y += 100;
										nps[i].i += 1;
										if (nps[i].type == 'skeleton') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(skeleton1,nps[i].x + 25,nps[i].y);
										} else if (nps[i].type == 'wolf') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(wolf1,nps[i].x + 15, nps[i].y + 15);
										}
									}
						break;
						case 'top': if ((nps[i].y== 0)||(s[nps[i].i - 1][nps[i].z] == 1)||(s[nps[i].i - 1][nps[i].z] == 6)) {
										nps[i].direction = 'bottom';
									} else {
										nps[i].my = nps[i].y;
										nps[i].y -= 100;
										nps[i].i -= 1;
										if (nps[i].type == 'skeleton') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(skeleton3,nps[i].x + 25,nps[i].y);
										} else if (nps[i].type == 'wolf') {
											ctx.clearRect(nps[i].mx,nps[i].my,100,100);
											ctx.drawImage(wolf3,nps[i].x + 15, nps[i].y + 15);
										}
									}
						break;
						}

				}	
			},1000);
			timer_ = true;
		}
		} else {
		nps = [];
		clearInterval(timer_nps);
		};
}

function mine_() {
	for (var i = 0; i < mines_nom; i++) {
		if (mines[i].state == true) {
			ctx.drawImage(mine_black,mines[i].x+20,mines[i].y+20);
		}
	}
}

function but(lvl0,lvl) {
	for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
		document.getElementsByTagName('button')[i].style.display = 'none';
	}

	document.getElementById('backwards').style.display = 'block';

	for (var i = 0; i < document.getElementsByClassName('but' + lvl0 + '_' + lvl).length; i++) {
		document.getElementsByClassName('but' + lvl0 + '_' + lvl)[i].style.display = 'block';
	}
}

function backwards() {
	for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
		document.getElementsByTagName('button')[i].style.display = 'none';
	}	
	for (var t = 0; t < document.getElementsByClassName('blvls').length; t++) {
		document.getElementsByClassName('blvls')[t].style.display = 'block';
	
	}
}

function notification() {
	text.innerHTML = '...';
	if ((s[i1][z1] == 4)&&(keyblack == true)) {
		text.innerHTML += '\nНужен чёрный ключ';
	}
	if ((s[i2][z2] == 5)&&(keygreen == true)) {
		text.innerHTML += '\nНужен зелёный ключ';
	}
}

setInterval(function(){
	if (mines.length != 0) {
		mine_();
	}
	if (s[i1][z1] == 2) {
		keyblack = false;
	}
	if (keyblack == true) {
		ctx.clearRect(keyblack_x,keyblack_y,100,100);
		ctx.drawImage(keyblack_img,keyblack_x + 6,keyblack_y);
	}
	if (s[i2][z2] == 3) {
		keygreen = false;
	}
	if (keygreen == true) {
		ctx.clearRect(keygreen_x,keygreen_y,100,100);
		ctx.drawImage(keygreen_img,keygreen_x + 6,keygreen_y);
	}
	if (keyblack == false) {
		doorblack = false;
	}
	ctx.clearRect(doorblack_x,doorblack_y,100,100);
	ctx.drawImage(doorblack_img,doorblack_x + 10,doorblack_y);
	ctx.clearRect(doorgreen_x,doorgreen_y,100,100);
	ctx.drawImage(doorgreen_img,doorgreen_x + 10,doorgreen_y);
	if (keygreen == false) {
		doorgreen = false;
	}
	if ((doorgreen == false)&&(doorblack == false)&&(x1 == doorblack_x)&&(x2 == doorgreen_x)&&(y1 == doorblack_y)&&(y2 == doorgreen_y)) {
		if (nom_lvl + 1 != lvls.length) {
			nom_lvl++;

			_nps_(lvls[nom_lvl], nps);

			i1 = lvls[nom_lvl].i1;
			i2 = lvls[nom_lvl].i2;
			z1 = lvls[nom_lvl].z1;
			z2 = lvls[nom_lvl].z2;
			s = lvls[nom_lvl].s;
			doorblack = true;
			doorgreen = true;
			keygreen = true;
			keyblack = true;
			x1 = z1 * 100;
			y1 = i1 * 100;
			x2 = z2*100;
			y2 = i2*100;
			mx1 = x1;
			mx2 = x2;
			my1 = y1;
			my2 = y2;
			motion = 0;
			pos = 0;
			mines = [];
			mines_nom = 0;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			draw_(s);
		}
	}

	if ((s[i1][z1] == 6)||(s[i2][z2] == 6)||((x1 == x2)&&(y1 == y2))) {
		repeat_(nom_lvl);
	}

	for (var i = 0; i < nps.length; i++) {
		if (((x2 == nps[i].x)&&(y2 == nps[i].y)) || ((x1 == nps[i].x)&&(y1 == nps[i].y))) {
			repeat_(nom_lvl);
		}
	}

	ctx.clearRect(mx1, my1, 100, 100);
	ctx.clearRect(mx2, my2, 100, 100);
	mx1 = x1;
	my1 = y1;
	my2 = y2;
	mx2 = x2;
	ctx.clearRect(x1, y1, 100, 100);
	ctx.clearRect(x2, y2, 100, 100);
	ctx.drawImage(girlblack,x1,y1);
	ctx.drawImage(girlgreen,x2,y2);
},20);