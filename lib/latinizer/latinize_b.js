var replacements = [
	["А", "а", "A", "a"],
	["Ә", "ә", "Á", "á"],
	["Б", "б", "B", "b"],
	["В", "в", "V", "v"],
	["Г", "г", "G", "g"],
	["Ғ", "ғ", "Ǵ", "ǵ"],
	["Д", "д", "D", "d"],
	["Е", "е", "E", "e"],
	["Ё", "ё", "Ó", "ó"],
	["Ж", "ж", "J", "j"],
	["З", "з", "Z", "z"],
	["И", "и", "I", "ı"],
	["Й", "й", "İ", "ı"],
	["К", "к", "K", "k"],
	["Қ", "қ", "Q", "q"],
	["Л", "л", "L", "l"],
	["М", "м", "M", "m"],
	["Н", "н", "N", "n"],
	["Ң", "ң", "Ń", "ń"],
	["О", "о", "O", "o"],
	["Ө", "ө", "Ó", "ó"],
	["П", "п", "P", "p"],
	["Р", "р", "R", "r"],
	["С", "с", "S", "s"],
	["Т", "т", "T", "t"],
	["У", "у", "Ý", "ý"],
	["Ұ", "ұ", "U", "u"],
	["Ү", "ү", "Ú", "ú"],
	["Ф", "ф", "F", "f"],
	["Х", "х", "H", "h"],
	["Һ", "һ", "H", "h"],
	["Ц", "ц", "S", "S"],
	["Ч", "ч", "Ch", "ch"],
	["Ш", "ш", "Sh", "sh"],
	["Щ", "щ", "Sh", "sh"],
	["Ъ", "ъ", "", ""],
	["Ы", "ы", "Y", "y"],
	["І", "і", "I", "i"],
	["Ь", "ь", "", ""],
	["Э", "э", "E", "e"],
	["Ю", "ю", "Iý", "ıý"],
	["Я", "я", "Ia", "ıa"]
];
//
var replacements_double = [
	/*["ью", "ю", "ıý", "ú"],
	["ья", "я", "ıa", "á"],
	["Ью", "Ю", "Iý", "Ú"],
	["Ья", "Я", "Ia", "Á"],*/
];
//

function get_closest(goal, div){

	var counts = []

	for(var val = 0; val < replacements.length * div; val+=div){
		counts.push(val)
	}

	var closest = counts.reduce(function(prev, curr) {
	  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
	});

	return closest;

}
//
String.prototype.replaceArray = function(find, replace) {
	var replaceString = this;
	var regex; 
	for (var i = 0; i < find.length; i++) {
		regex = new RegExp(find[i], "g");
		replaceString = replaceString.replace(regex, replace[i]);
	}
	return replaceString;
};
//
function replace_latinize(_t, _dir, type){
	//
	new_text = '';
	fin_rep = '';
	//
	if (type == 'single') {
		//
		var all_l = [].concat.apply([], replacements);
		//
		prev_let = '';
		//
		for (var i = 0; i < _t.length; i++) {
			//
			l = _t[i];
			//
			if (l == ' ') {
				//
				fin_rep = l;
				//
			} else {
				//
				inx = all_l.indexOf(l);
				//
				if (inx >= 0) {
					//
					gen_inx = get_closest(inx, 4);
					//
					if (_dir == "dn") {
						_rid = "up";
					} else {
						_rid = "dn";
					}
					//
					gen_list = replacements[gen_inx/4];
					//
					spe_inx = replacements[gen_inx/4].indexOf(l)
					//
					mid = Math.ceil(gen_list.length/2),
					obj = {
						dn: gen_list.slice(0, mid),
						up: gen_list.slice(mid)
					};
					//
					mid_inx = obj[_dir].indexOf(l);
					//
					fin_rep = obj[_rid][mid_inx]
					//
					if (mid_inx) {

					} else {

					}
					//
				}
				//
			}
			//
			new_text = new_text + fin_rep
			//
		}
		//
	} else {
		//
		var all_l = [].concat.apply([], replacements_double);
		inx = all_l.indexOf(l);
		gen_inx = get_closest(inx, 2);
		//
		arrayfr = replacements_double.map(function(x) {
			return x[2];
		});
		//
		arrayto = replacements_double.map(function(x) {
			return x[3];
		});
		//
		new_text = _t.replaceArray(arrayfr, arrayto);
		//
	}
	//
	return new_text
	//
}