var img = new Image();
img.src = 'walls.png';
var girlblack = new Image();
girlblack.src = 'img/girlblack1.png';
var girlgreen = new Image();
girlgreen.src = 'img/girlgreen1.png';  
var i1 = 0;
var z1 = 0;
var x1 = z1 * 100;
var y1 = i1 * 100;
var i2 = 6;
var z2 = 6;
var x2 = z2*100;
var y2 = i2*100;
var my1 = y1;
var my2 = y2;
var mx1 = x1;
var mx2 = x2;
var keyblack = true;
var keyblack_x;
var keyblack_y;
var keygreen = true;
var keygreen_x;
var keygreen_y;
var doorblack = true;
var doorblack_x;
var doorblack_y;
var doorgreen = true;
var doorgreen_x;
var doorgreen_y;
var motion = 0;
var pos = 0;
var lvl_1 = [[4,0,0,1,0,2,1],
		 	[1,1,0,1,0,1,1],
		 	[0,0,0,0,0,1,0],
		 	[1,1,1,1,1,1,0],
		 	[3,1,0,0,0,0,0],
		 	[0,0,0,0,0,1,0],
		 	[1,1,1,1,5,1,0]];
var lvl_2 = [[0,0,0,1,0,0,0],
		 	[0,1,0,1,0,1,2],
		 	[4,1,0,0,0,1,1],
		 	[1,1,0,1,1,1,5],
		 	[0,0,0,0,0,0,0],
		 	[1,0,1,1,1,1,0],
			[0,0,0,0,1,3,0]];
var s = lvl_1;
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
				ctx.fillStyle = 'Gray';
				ctx.fillRect(t*100,y*100,100,100);
			}
			if (s[y][t] == 3) {
				keygreen_x = t*100;
				keygreen_y = y*100;
				ctx.fillStyle = 'SeaGreen';
				ctx.fillRect(t*100,y*100,100,100);
			}
			if (s[y][t] == 4) {
				doorblack_x = t * 100;
				doorblack_y = y * 100;
				ctx.fillStyle = 'LightSlateGray';
				ctx.fillRect(t*100,y*100,100,100);
			}
			if (s[y][t] == 5) {
				doorgreen_x = t * 100;
				doorgreen_y = y * 100;
				ctx.fillStyle = 'Lime';
				ctx.fillRect(t*100,y*100,100,100);
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
setInterval(function(){
	if (s[i1][z1] == 2) {
		keyblack = false;
	}
	if (keyblack == true) {
		ctx.fillStyle = 'Gray';
		ctx.fillRect(keyblack_x,keyblack_y,100,100);
	}
	if (s[i2][z2] == 3) {
		keygreen = false;
	}
	if (keygreen == true) {
		ctx.fillStyle = 'SeaGreen';
		ctx.fillRect(keygreen_x,keygreen_y,100,100);
	}
	if (keyblack == false) {
		doorblack = false;
	}
	ctx.fillStyle = 'LightSlateGray';
	ctx.fillRect(doorblack_x,doorblack_y,100,100);
	if (keygreen == false) {
		doorgreen = false;
	}
	
	if ((doorgreen == false)&&(doorblack == false)&&(x1 == doorblack_x)&&(x2 == doorgreen_x)&&(y1 == doorblack_y)&&(y2 == doorgreen_y)) {
		setTimeout(function () {
			s = lvl_2;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			draw_(s);
			i1 = 0;
			z1 = 0;
			x1 = z1 * 100;
			y1 = i1 * 100;
			i2 = 6;
			z2 = 0;
			x2 = z2*100;
			y2 = i2*100;
			my1 = y1;
			my2 = y2;
			mx1 = x1;
			mx2 = x2;
			keyblack = true;
			keygreen = true;
			doorblack = true;
			doorgreen = true;
			motion = 0;
			pos = 0;
	}, 500);
	}
	ctx.fillStyle = 'Lime';
	ctx.fillRect(doorgreen_x,doorgreen_y,100,100);
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