//
var hm_app = {};
hm_app.config = {
   exclude: true
};
hm_app.config_b = {
   exclude: true
};
hm_app.LAYOUTS = {

},
hm_app.EXCLUDES = [" "],
hm_app.SAMPLE_TEXT = [
    "This is the first sample text. It's an awesome sample text, but the other ones are also very nice.",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "A heat map is a graphical representation of data where the values taken by a variable in a two-dimensional table are represented as colors. Fractal maps and tree maps both often use a similar system of color-coding to represent the values taken by a variable in a hierarchy. The term is also used to mean its thematic application as a choropleth map.",
    "Heat maps originated in 2D displays of the values in a data matrix. Larger values were represented by small dark gray or black squares (pixels) and smaller values by lighter squares. Sneath (1957) displayed the results of a cluster analysis by permuting the rows and the columns of a matrix to place similar values near each other according to the clustering. Jacques Bertin used a similar representation to display data that conformed to a Guttman scale. The idea for joining cluster trees to the rows and columns of the data matrix originated with Robert Ling in 1973. Ling used overstruck printer characters to represent different shades of gray, one character-width per pixel."
];

$(function () {


	hm_app.init = function initialize() {
		var cfg = arguments[0] || {};
		hm_app.configure(cfg);
		repainter(tf_a, hm_app, hm_app.config, hm_app.heatmap, hm_app.coordinates)
		repainter(tf_b, hm_app, hm_app.config_b, hm_app.heatmap_b, hm_app.coordinates_b)
	};

	hm_app.configure = function configure(cfg) {

		var config = {};
		//
		config.element = $(".keyboard_third_heatmap .ind_kb").eq(0)[0];//"keyboard";
		//config.set_canvas = $(".keyboard_third_heatmap .kb_canvas");
		config.radius = 30//cfg.radius || 25;
		config.visible = true;
		config.opacity = 40;
		config.gradient = cfg.gradient;

		hm_app.coordinates = hm_app.LAYOUTS["qazaq_old"];

		var heatmap = h337.create(config);
		hm_app.heatmap = heatmap;

		var config_b = JSON.parse(JSON.stringify(config));
		config_b.element = $(".keyboard_third_heatmap .ind_kb").eq(1)[0];
		hm_app.coordinates_b = hm_app.LAYOUTS["qazaq_basic"];

		var heatmap_b = h337.create(config_b);
		hm_app.heatmap_b = heatmap_b;

	};

	function interactions(_this, app, config, heatmap, lastval, coordinates){
		//
		var currentValue = _this[0].value;
		if (Math.abs(lastval.length - currentValue.length) >= 1) {
			repainter(_this, app, config, heatmap, coordinates)
		} else {
			var key = (currentValue.length > lastval.length) ? (currentValue.split(lastval)[1]) : (lastval.split(currentValue)[1]);

			/*if(/^[A-Za-z]$/.test(key)){
				key = key.toUpperCase();
			}*/
			if(config.exclude && app.EXCLUDES.indexOf(key) == -1){
				var coord = coordinates[key]
				if (coord) {
					for (var s = 0; s < coord.length; s+=2) {
						heatmap.store.addDataPoint.apply(heatmap.store,coord.slice(s, s+2));
					}
				}
			}
		}

		lastval = currentValue;
		//
	}

	function repainter(tf, app, config, heatmap, coordinates) {
		var data = [];
		var max = 0;
		var temp = {};
		var currentText = tf.val();
		var currentLength = currentText.length;
		//var coordinates = hm_app.coordinates;

		for(var i=0; i < currentLength; i++){

			var key = currentText.charAt(i);
			/*if(/^[A-Za-z]$/.test(key)){ ??
				key = key.toUpperCase();
			}*/
			if(config.exclude && app.EXCLUDES.indexOf(key) == -1){
				var coord;
				coord = coordinates[key] || false;
				if(coord){
					for(var s = 0; s < coord.length; s += 2) {
						var joined = coord.slice(s, s+2).join(";");
						if(!temp[joined])
							temp[joined] = 0;

						temp[joined] += 1;
					}
				}
			}
		}

		for(var k in temp){
			var xy = k.split(";");
			var val = temp[k];

			data.push({x: xy[0], y: xy[1], count: val});

			if(val > max)
				max = val;
		}

		heatmap.store.setDataSet({max: max, data: data});
	};

	var tf_a = $('#typefield');
	var tf_b = $('#dest');


	var gradients = [
		{ 0.45: "rgb(0,0,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow", 1.0: "rgb(255,0,0)"},
		{ 0.45: "rgb(255,255,255)", 0.70: "rgb(0,0,0)",0.9: "rgb(2,255,246)", 1.0: "rgb(3,34,66)"},
		{ 0.45: "rgb(216,136,211)", 0.55: "rgb(0,255,255)", 0.65: "rgb(233,59,233)", 0.95: "rgb(255,0,240)", 1.0: "yellow"}
	];
	var lastValue = "";
	var lastValue_b = "";

	window.onload = hm_app.init;

	$("#typefield, #dest").on("input",function(e){

		repainter(tf_a, hm_app, hm_app.config, hm_app.heatmap, hm_app.coordinates)
		repainter(tf_b, hm_app, hm_app.config_b, hm_app.heatmap_b, hm_app.coordinates_b)

		interactions(tf_a, hm_app, hm_app.config, hm_app.heatmap, lastValue, hm_app.coordinates)
		interactions(tf_b, hm_app, hm_app.config_b, hm_app.heatmap_b, lastValue_b, hm_app.coordinates_b)

	});


	//
	//
	//
	_keyview = $('.keyboard_reg');
	_keyview.KeyView({
		keyboards: ["qazaq_basic", "qazaq_old"],
		theme: "qazaq_org",
		marking: true,
		status: "combined",
		keydata: KeyView,
		key_class: 'key',
		template_class: ".details_container"
	}, function(cb){
		_keyview.find('[data-keycode="AD05"]').click()
		_keyview.find('[name="diff"]').click()
	})

	_keyview_diff = $('.keyboard_diff');
	_keyview_diff.KeyView({
		keyboards: ["qazaq_old", "qazaq_basic"],
		theme: "qazaq_org",
		marking: false,
		status: "independent",
		keydata: KeyView,
		type: "static",
		merger: true,
		key_class: 'key'
	}, function(cb){
		_keyview_diff.find('.key[data-keycode="AD08"]').click()
	});

	_keyview_heatmap = $('.keyboard_heatmap');
	_keyview_heatmap.KeyView({
		keyboards: ["qazaq_old", "qazaq_basic"],
		theme: "qazaq_org",
		marking: false,
		status: "independent",
		keydata: KeyView,
		type: "static",
		//merger: false,
		key_class: 'key',
		interact: false,
		heatmap: true,
		hm_app: hm_app
	}, function(cb){
		_keyview_heatmap.find('.key[data-keycode="AD08"]').click()
	});

	function latinize_input(_s, _t){

		var result = QazLatynConverter.Cyrl2Latyn(_s.val());
		_t[0].value = result;

	}
	
	var objData = $("#typefield");
	var convert_btn = $("#convert");
	var objDest = $("#dest");

	latinize_input(objData, objDest)

	convert_btn.on("click",function(e){

		latinize_input(objData, objDest)

	});

	$("#typefield").on("input",function(e){

		latinize_input(objData, objDest)				

	});

});