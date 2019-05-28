var x1 = 0;
var y1 = 0;
var i1 = 0;
var z1 = 0;
var x2 = 300;
var y2 = 300;
var i2 = 3;
var z2 = 3;
var motion = 0;
var pos = 0;
var s = [[0,1,0,0],[0,1,0,1],[0,0,0,1],[1,1,0,0]];
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

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
		if ((z1 < s[i1].length)&&(z1>=0)&&(s[i1][z1] == 0)) {
			x1 += motion;
		} else	if(pos == '+'){
					z1++;
			    }else {z1--}
		if ((z2 < s[i1].length)&&(z2>=0)&&(s[i2][z2] == 0)) {
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
		if ((i1 < s.length)&&(i1>=0)&&(s[i1][z1] == 0)) {
			y1 += motion;
		} else	if(pos == '+'){
					i1++;
			    }else {i1--}
		if ((i2 < s.length)&&(i2>=0)&&(s[i2][z2] == 0)) {
			y2 += motion;
		} else	if(pos == '+'){
					i2++;
			    }else {i2--}
	}
}

setInterval(function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'black';
	ctx.fillRect(x1,y1,100,100);
	ctx.fillStyle = 'green';
	ctx.fillRect(x2,y2,100,100);	

	ctx.fillStyle = 'red';
	for (var y = 0; y < s.length; y++) {
		for (var t = 0; t < s[y].length; t++) {
			if (s[y][t] == 1){
				fillRect(t*100,i*100,100,100);
			}
		}
	}
	if ((y1 == 0)&&(y2 == 0)&&(x1 == 300)&&(x2 == 300)) {
		alert('Вы выйграли!');
	}
},50);