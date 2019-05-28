var img = new Image();
img.src = 'walls.png';
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
var s = [[4,0,0,1,0,2,1],
		 [1,1,0,1,0,1,1],
		 [0,0,0,0,0,1,0],
		 [1,1,1,1,1,1,0],
		 [3,1,0,0,0,0,0],
		 [0,0,0,0,0,1,0],
		 [1,1,1,1,5,1,0]];
var canvas = document.getElementById('c1');
canvas.width = s[0].length * 100;
canvas.height = s.length * 100;
var ctx = canvas.getContext('2d');

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

function square_(){
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
		} else {
			motion = 100;
			z1++;
			z2++;
			pos = '-';
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
		} else {
			motion = 100;
			i1++;
			i2++;
			pos = '-';
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
	if (doorblack == true) {
		ctx.fillStyle = 'LightSlateGray';
		ctx.fillRect(doorblack_x,doorblack_y,100,100);
	}
	if (keygreen == false) {
		doorgreen = false;
	}
	if (doorgreen == true) {
		ctx.fillStyle = 'Lime';
		ctx.fillRect(doorgreen_x,doorgreen_y,100,100);
	}
	ctx.clearRect(mx1, my1, 100, 100);
	ctx.clearRect(mx2, my2, 100, 100);
	mx1 = x1;
	my1 = y1;
	my2 = y2;
	mx2 = x2;
	ctx.clearRect(x1, y1, 100, 100);
	ctx.clearRect(x2, y2, 100, 100);
	ctx.fillStyle = 'black';
	ctx.fillRect(x1,y1,100,100);
	ctx.fillStyle = 'green';
	ctx.fillRect(x2,y2,100,100);
},20);