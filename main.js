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
var lvls = [{
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
}, {
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
}, {
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
}, {
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
}, {
	i1 : 2,
	z1 : 2,
	i2 : 2,
	z2 : 3,
	s : [[1,6,1,1,6,0,2],
		 [5,0,6,6,0,0,6],
		 [0,0,0,0,0,0,0],
		 [6,0,1,6,0,1,0],
		 [1,0,1,3,6,0,0],
		 [6,0,1,0,1,0,6],
		 [0,0,0,0,1,4,6]],
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
var x1 = z1 * 100;
var y1 = i1 * 100;
var x2 = z2*100;
var y2 = i2*100;
var mx1 = x1;
var mx2 = x2;
var my1 = y1;
var my2 = y2;
var canvas = document.getElementById('c1');
canvas.width = s[0].length * 100;
canvas.height = s.length * 100;
var ctx = canvas.getContext('2d');
draw_(s,keyblack_x,keyblack_y,keygreen_x,keygreen_y);


function draw_() {
	for (var y = 0; y < s.length; y++) {
		for (var t = 0; t < s[y].length; t++) {
			if (s[y][t] == 1){
				square_(y,t);
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
				spikes_(y,t);
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

function sh(keyCode) {
	if ((keyCode*1 == 97)||(keyCode*1 == 1092)||(keyCode*1 == 100)||(keyCode*1 == 1074)){
		left_right(keyCode);
	}
	if ((keyCode*1 == 119)||(keyCode*1 == 1094)||(keyCode*1 == 115)||(keyCode*1 == 1099)){
		top_bottom(keyCode);
	}
	function left_right() {
		if ((keyCode*1 == 97)||(keyCode*1 == 1092)) {
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
		if ((keyCode*1 == 119)||(keyCode*1 == 1094)) {
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
			girlblack.src = 'img/girlblack1.png';
			girlgreen.src = 'img/girlgreen1.png';

			motion = 0;
			pos = 0;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			draw_(s);
}

setInterval(function(){
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
			ctx.clearRect(0,0,canvas.width,canvas.height);
			draw_(s);
		}
	}
	if ((s[i1][z1] == 6)||(s[i2][z2] == 6)||((x1 == x2)&&(y1 == y2))) {
		repeat_(nom_lvl);
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