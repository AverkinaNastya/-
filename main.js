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
var spike_img = new Image();
spike_img.src = 'img/spikes.png';
var lvls = [{
	i1 : 0,
	z1 : 0,
	i2 : 6,
	z2 : 6,
	s : [[4,0,0,1,0,2,1],
		 [1,1,0,1,0,1,1],
		 [0,0,0,0,0,1,6],
		 [1,1,1,1,1,1,0],
		 [3,1,0,0,0,0,0],
		 [0,0,0,0,0,1,0],
		 [1,1,1,1,5,1,0]],
	doorblack : true,
	doorgreen : true,
	keygreen : true,
	keyblack : true,
}, {
	i1 : 0,
	z1 : 0,
	i2 : 6,
	z2 : 0,
	s : [[0,0,0,1,0,0,0],
		 [0,1,0,1,0,1,2],
		 [4,1,0,0,0,1,1],
		 [0,1,0,1,1,1,5],
		 [0,0,0,0,0,0,0],
		 [1,0,1,1,1,1,0],
		 [0,0,0,0,1,3,0]],
	doorblack : true,
	doorgreen : true,
	keygreen : true,
	keyblack : true,
}];
var nom_lvl = 0;
var motion = 0;
var pos = 0;
var spike_x;
var spike_y;
var canvas = document.getElementById('c1');
canvas.width = lvls[nom_lvl].s[0].length * 100;
canvas.height = lvls[nom_lvl].s.length * 100;
var ctx = canvas.getContext('2d');
draw_(lvls[nom_lvl].s,lvls[nom_lvl].keyblack_x,lvls[nom_lvl].keyblack_y,lvls[nom_lvl].keygreen_x,lvls[nom_lvl].keygreen_y, spike_x, spike_x);

function draw_() {
	for (var y = 0; y < lvls[nom_lvl].s.length; y++) {
		for (var t = 0; t < lvls[nom_lvl].s[y].length; t++) {
			if (lvls[nom_lvl].s[y][t] == 1){
				square_(y,t);
			}
			if (lvls[nom_lvl].s[y][t] == 2) {
				lvls[nom_lvl].keyblack_x = t*100;
				lvls[nom_lvl].keyblack_y = y*100;
			}
			if (lvls[nom_lvl].s[y][t] == 3) {
				lvls[nom_lvl].keygreen_x = t*100;
				lvls[nom_lvl].keygreen_y = y*100;
			}
			if (lvls[nom_lvl].s[y][t] == 4) {
				lvls[nom_lvl].doorblack_x = t * 100;
				lvls[nom_lvl].doorblack_y = y * 100;
			}
			if (lvls[nom_lvl].s[y][t] == 5) {
				lvls[nom_lvl].doorgreen_x = t * 100;
				lvls[nom_lvl].doorgreen_y = y * 100;
			}
			if (lvls[nom_lvl].s[y][t] == 6) {
				spike_x = t * 100;
				spike_y = y * 100;
				// ctx.drawImage(spike_img,t * 100,y * 100);
			}
		}
	}
	lvls[nom_lvl].x1 = lvls[nom_lvl].z1 * 100;
	lvls[nom_lvl].y1 = lvls[nom_lvl].i1 * 100;
	lvls[nom_lvl].x2 = lvls[nom_lvl].z2*100;
	lvls[nom_lvl].y2 = lvls[nom_lvl].i2*100;
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
			lvls[nom_lvl].z1--;
			lvls[nom_lvl].z2--;
			pos = '+';
			girlblack.src = 'img/girlblack4.png';
			girlgreen.src = 'img/girlgreen4.png';
		} else {
			motion = 100;
			lvls[nom_lvl].z1++;
			lvls[nom_lvl].z2++;
			pos = '-';
			girlblack.src = 'img/girlblack2.png';
			girlgreen.src = 'img/girlgreen2.png';
		};
		if ((lvls[nom_lvl].z1 < lvls[nom_lvl].s[lvls[nom_lvl].i1].length)&&(lvls[nom_lvl].z1>=0)&&(lvls[nom_lvl].s[lvls[nom_lvl].i1][lvls[nom_lvl].z1] != 1)) {
			lvls[nom_lvl].my1 = lvls[nom_lvl].y1;
			lvls[nom_lvl].mx1 = lvls[nom_lvl].x1;
			lvls[nom_lvl].x1 += motion;
		} else	if(pos == '+'){
					lvls[nom_lvl].z1++;
			    }else {lvls[nom_lvl].z1--}
		if ((lvls[nom_lvl].z2 < lvls[nom_lvl].s[lvls[nom_lvl].i1].length)&&(lvls[nom_lvl].z2>=0)&&(lvls[nom_lvl].s[lvls[nom_lvl].i2][lvls[nom_lvl].z2] != 1)) {
			lvls[nom_lvl].my2 = lvls[nom_lvl].y2;
			lvls[nom_lvl].mx2 = lvls[nom_lvl].x2;
			lvls[nom_lvl].x2 += motion;
		} else	if(pos == '+'){
					lvls[nom_lvl].z2++;
			    }else {lvls[nom_lvl].z2--}

	}
	function top_bottom() {
		if ((keyCode*1 == 119)||(keyCode*1 == 1094)) {
			motion = -100;
			lvls[nom_lvl].i1--;
			lvls[nom_lvl].i2--;
			pos = '+';
			girlblack.src = 'img/girlblack3.png';
			girlgreen.src = 'img/girlgreen3.png';
		} else {
			motion = 100;
			lvls[nom_lvl].i1++;
			lvls[nom_lvl].i2++;
			pos = '-';
			girlblack.src = 'img/girlblack1.png';
			girlgreen.src = 'img/girlgreen1.png';
		};
		if ((lvls[nom_lvl].i1 < lvls[nom_lvl].s.length)&&(lvls[nom_lvl].i1>=0)&&(lvls[nom_lvl].s[lvls[nom_lvl].i1][lvls[nom_lvl].z1] != 1)) {
			lvls[nom_lvl].mx1 = lvls[nom_lvl].x1;
			lvls[nom_lvl].my1 = lvls[nom_lvl].y1;
			lvls[nom_lvl].y1 += motion;
		} else	if(pos == '+'){
					lvls[nom_lvl].i1++;
			    }else {lvls[nom_lvl].i1--}
		if ((lvls[nom_lvl].i2 < lvls[nom_lvl].s.length)&&(lvls[nom_lvl].i2>=0)&&(lvls[nom_lvl].s[lvls[nom_lvl].i2][lvls[nom_lvl].z2] != 1)) {
			lvls[nom_lvl].mx2 = lvls[nom_lvl].x2;
			lvls[nom_lvl].my2 = lvls[nom_lvl].y2;
			lvls[nom_lvl].y2 += motion;
		} else	if(pos == '+'){
					lvls[nom_lvl].i2++;
			    }else {lvls[nom_lvl].i2--}
	}
}
setInterval(function(){
	if (lvls[nom_lvl].s[lvls[nom_lvl].i1][lvls[nom_lvl].z1] == 2) {
		lvls[nom_lvl].keyblack = false;
	}
	if (lvls[nom_lvl].keyblack == true) {
		ctx.clearRect(lvls[nom_lvl].keyblack_x,lvls[nom_lvl].keyblack_y,100,100);
		ctx.drawImage(keyblack_img,lvls[nom_lvl].keyblack_x + 6,lvls[nom_lvl].keyblack_y);
	}
	if (lvls[nom_lvl].s[lvls[nom_lvl].i2][lvls[nom_lvl].z2] == 3) {
		lvls[nom_lvl].keygreen = false;
	}
	if (lvls[nom_lvl].keygreen == true) {
		ctx.clearRect(lvls[nom_lvl].keygreen_x,lvls[nom_lvl].keygreen_y,100,100);
		ctx.drawImage(keygreen_img,lvls[nom_lvl].keygreen_x + 6,lvls[nom_lvl].keygreen_y);
	}
	if (lvls[nom_lvl].keyblack == false) {
		lvls[nom_lvl].doorblack = false;
	}
	ctx.clearRect(lvls[nom_lvl].doorblack_x,lvls[nom_lvl].doorblack_y,100,100);
	ctx.drawImage(doorblack_img,lvls[nom_lvl].doorblack_x + 10,lvls[nom_lvl].doorblack_y);
	ctx.clearRect(lvls[nom_lvl].doorgreen_x,lvls[nom_lvl].doorgreen_y,100,100);
	ctx.drawImage(doorgreen_img,lvls[nom_lvl].doorgreen_x + 10,lvls[nom_lvl].doorgreen_y);
	if (lvls[nom_lvl].keygreen == false) {
		lvls[nom_lvl].doorgreen = false;
	}
	
	if ((lvls[nom_lvl].doorgreen == false)&&(lvls[nom_lvl].doorblack == false)&&(lvls[nom_lvl].x1 == lvls[nom_lvl].doorblack_x)&&(lvls[nom_lvl].x2 == lvls[nom_lvl].doorgreen_x)&&(lvls[nom_lvl].y1 == lvls[nom_lvl].doorblack_y)&&(lvls[nom_lvl].y2 == lvls[nom_lvl].doorgreen_y)) {
		if (nom_lvl + 1 != lvls.length) {
			nom_lvl++;
				lvls[nom_lvl].x1 = lvls[nom_lvl].z1 * 100;
				lvls[nom_lvl].y1 = lvls[nom_lvl].i1 * 100;
				lvls[nom_lvl].x2 = lvls[nom_lvl].z2*100;
				lvls[nom_lvl].y2 = lvls[nom_lvl].i2*100;
				motion = 0;
				pos = 0;
				ctx.clearRect(0,0,canvas.width,canvas.height);
				draw_(lvls);
		}
	}
	if ((lvls[nom_lvl].x1 == lvls[nom_lvl].x2)&&(lvls[nom_lvl].y1 == lvls[nom_lvl].y2)){
			lvls[nom_lvl].x1 = lvls[nom_lvl].z1 * 100;
			lvls[nom_lvl].y1 = lvls[nom_lvl].i1 * 100;
			lvls[nom_lvl].x2 = lvls[nom_lvl].z2*100;
			lvls[nom_lvl].y2 = lvls[nom_lvl].i2*100;
			motion = 0;
			pos = 0;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			draw_(lvls);
	}

	ctx.clearRect(lvls[nom_lvl].mx1, lvls[nom_lvl].my1, 100, 100);
	ctx.clearRect(lvls[nom_lvl].mx2, lvls[nom_lvl].my2, 100, 100);
	lvls[nom_lvl].mx1 = lvls[nom_lvl].x1;
	lvls[nom_lvl].my1 = lvls[nom_lvl].y1;
	lvls[nom_lvl].my2 = lvls[nom_lvl].y2;
	lvls[nom_lvl].mx2 = lvls[nom_lvl].x2;
	ctx.clearRect(lvls[nom_lvl].x1, lvls[nom_lvl].y1, 100, 100);
	ctx.clearRect(lvls[nom_lvl].x2, lvls[nom_lvl].y2, 100, 100);
	ctx.drawImage(girlblack,lvls[nom_lvl].x1,lvls[nom_lvl].y1);
	ctx.drawImage(girlgreen,lvls[nom_lvl].x2,lvls[nom_lvl].y2);
},20);