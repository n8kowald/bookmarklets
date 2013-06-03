javascript:var items = document.querySelectorAll("[class^='span']"); 
var colors = {
	1: '#F7977A',
	2: '#FDC68A',
	3: '#FFF79A',
	4: '#A2D39C',
	5: '#7BCDC8',
	6: '#7EA7D8',
	7: '#8882BE',
	8: '#BC8DBF',
	9: '#F6989D',
	10: '#C7B299',
	11: '#736357',
	12: '#A67C52',
	13: '#754C24',
	14: '#59955C',
	15: '#75B4FF',
	16: '#2F74D0',
	17: '#8CD1E6',
	18: '#C79BF2',
	19: '#FFA4FF',
	20: '#336666',
	21: '#333366',
	22: '#336666',
	23: '#528413',
	24: '#999999'
};
// loop over each twitter bootstrap span* element
for (var i = 0; i < items.length; i++) { 
	var classes = items[i].classList,
		num = false;
	for (var c=0; c < classes.length; c++) {
		if (!classes[c] || classes[c] == 'span' || classes[c].indexOf('span') == -1) continue;
		var num = classes[c].replace(/[^0-9]/g, '');
		break;
	}
	if (!num) continue;

	items[i].style.backgroundColor = (colors[num]) ? colors[num] : 'red';
	items[i].innerHTML = '<span style="color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,0.7);font-size:14px;">span' + num + '</span>' + items[i].innerHTML;
} 
void(0);
