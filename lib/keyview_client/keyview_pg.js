// KeyView: 0.002
(function ($, window) {
	//"use strict";
	//
	//
	var $window = $(window);

	var namespace = "KeyView",
		$body = null,
		classes = {
			base: "KeyView",
			content: "KeyView-content",
			isSetup: "KeyView-setup",
			isActive: "KeyView-active"
		}

	//
	var options = {
		customClass: "",
		keyboards: [],
		theme: "",
		marking: true,
		status: '',
		template_class: '',
		keydata: {},
		merger: false,
		heatmap: false,
		key_class: '',
		interact: true,
		hm_app: {}
	};
	//
	//
	var search_timeout;
	var _input;
	var timeOut_sim_typing;
	//

	var rtime;
	var timeout = false;
	var delta = 200;
	//
	String.prototype.hexEncode = function(){
		var hex, i;

		var result = "";
		for (i=0; i<this.length; i++) {
			hex = this.charCodeAt(i).toString(16);
			result += ("000"+hex).slice(-4);
		}

		return result
	}
	String.prototype.hexDecode = function(){
		var j;
		var hexes = this.match(/.{1,4}/g) || [];
		var back = "";
		for(j = 0; j<hexes.length; j++) {
			back += String.fromCharCode(parseInt(hexes[j], 16));
		}

		return back;
	}
	//
	var pub = {
		//
		defaults: function(opts) {
			options = $.extend(options, opts || {});
			return (typeof this === 'object') ? $(this) : true;
		},
		//
		destroy: function() {
			return $(this).each(function(i, el) {
				var data = $(el).data(namespace);

				if (data) {
					data.$KeyView.removeClass( [data.customClass, classes.base, classes.isActive].join(" ") );

					data.$bar[0].remove();
					data.$bar[1].remove();
					//data.$content.contents().unwrap();

					//data.$content.off( classify(namespace) );
					data.$KeyView.off( classify(namespace) )
								  .removeData(namespace);
				}
			});
		},
		//
		set_symbols: function(_sym, _callback) {
			//
			var data = $(this).data(namespace);
			//
			var _sym_targ = data.$KeyView.find("input[name='symbols'][value='"+_sym+"']");
			//
			changeSymbols(_sym, _sym_targ, data.$KeyView, data, data)
			//
			toggleDiff(_sym, _sym_targ, data.$KeyView, data, data, 'update')
			//
			if (_callback) {
				//
				_callback();
				//
			};
			//
			//
		},
		//
		reset: function()  {
			//
			return $(this).each(function(i) {
				//
				var data = $(this).data(namespace);
				//
				if (data) {
					//
					data.$KeyView.addClass(classes.isSetup);
					//
				}
			});
		}
	};
	//
	//
	function init(opts) {
		// Local options
		opts = $.extend({}, options, opts || {});

		// Check for Body
		if ($body === null) {
			$body = $("body");
		}

		// Apply to each element
		var $items = $(this);
		for (var i = 0, count = $items.length; i < count; i++) {
			build($items.eq(i), opts);
		}
		//
		//
		//


		//
		return $items;
	}
	//
	//
	function build($KeyView, opts) {
		//
		opts = $.extend({}, opts, $KeyView.data(namespace + "-options"));
		//
		var data = $.extend({
			$KeyView: $KeyView,
			$keyboards: opts.keyboards,
			$theme: opts.theme,
			$marking: opts.marking,
			$merger: opts.merger,
			$heatmap: opts.heatmap,
			$status: opts.status,
			$keydata: opts.keydata,
			$key_class: opts.key_class,
			$template_class: opts.template_class
		}, opts);
		//
		data.$KeyView.data(namespace, data);
		//
		var geometry = setGeometry($KeyView, opts);
		var layout = setLayout($KeyView, opts);
		//
		//
		generate_keyboard($KeyView, opts, geometry, layout);
		//
		if (opts.heatmap) {

			generate_key_items_coords($KeyView, opts);

		}
		//
		pub.reset.apply($KeyView);
		//
		if (opts.interact) {

			interact($KeyView, opts, data)

		} else {
			$KeyView.addClass("no_interaction")
		}
		//
	}
	//
	function getCharFromSymbol(e) {
		return e.substring(0, 2) == "U+" ? "&#x" + e.substring(2) + ";" : KeyView.keysyms[e] >= "0300" && KeyView.keysyms[e] <= "036F" ? "&#x25CC;&#x" + KeyView.keysyms[e] + ";" : KeyView.keysyms[e] !== undefined ? "&#x" + KeyView.keysyms[e] + ";" : ""
	}
	function getCharNumFromSymbol(e) {
		return e.substring(0, 2) == "U+" ? e.substring(2) : KeyView.keysyms[e] >= "0300" && KeyView.keysyms[e] <= "036F" ? "" : KeyView.keysyms[e] !== undefined ? KeyView.keysyms[e] : ""
	}
	//
	function key_build($KeyView, opts, e, t, append_target, stat){

		var _key_class = opts.key_class

		add_padd = 2;

		if (stat == 'ind') {
			add_padd = 4;
		}

		var n = parseInt($KeyView.find(".kv_keyboard").outerWidth())-add_padd,
			r = opts.keydata.geometries[e];


		for (var i in r) {
			var s = $('<div class="row"></div>'),
				o = 0;
			s.appendTo($KeyView.find(append_target));
			for (var u in r[i]) {
				//
				if (KeyView.symbols[t][u]) {
					//
					if (KeyView.symbols[t][u]) {
						//
						var a = KeyView.symbols[t][u]
						//
					} else {
						//
						a = KeyView.symbols[KeyView.symbols[t].include][u]
						//
					};
					//
					a.length == 2 && (a = a.concat(["", ""]));
					var f = $.map(a, function(e) {
							return getCharNumFromSymbol(e)
						}),
						l = $.map(a, function(e) {
							return getCharFromSymbol(e)
						})
				} else a = ["", "", "", ""], f = ["", "", "", ""], l = [r[i][u].name || "", "", "", ""];
				//
				var c = $('<div class="'+_key_class+'" data-keycode="' + u + '" data-keys="">');
				//
				r[i][u].special ? c.addClass("special") : c.addClass("alnum"), r[i][u].merged && c.addClass("merged-" + r[i][u].merged), 
				c.appendTo(s), c.append('<table class="key-table">');
				//
				all_syms = [];
				//
				for (var h = 0; h <= 1; h++) {
					c.find(".key-table")
						.append('<tr class="level' + Math.abs(h - 2) + '">');
					for (var p = 0; p <= 1; p++) {
						var d = Math.abs(h - 1) + p * 2,
							v = $('<td class="group' + (p + 1) + '" data-symbol="' + a[d] + '">');


						v.html(l[d]);
						c.find(".level" + Math.abs(h - 2)).append(v);

						if (opts["marking"] == true ) {

							KeyView.diffs[t][u] && KeyView.diffs[t][u][h + 2 * p] && c.find(".level" + Math.abs(h - 2) + " .group" + (p + 1)).addClass(KeyView.diffs[t][u][h + 2 * p])
						}

						all_syms.push(v.text() || 'NoSymbol')
					}
				}
				//
				c.attr("data-keys",JSON.stringify(all_syms))
				//
				r[i][u].width && c.css("width", Math.round(c.width() * r[i][u].width) + "px"), o += c.outerWidth()
				//
			}
			c.css("width", c.width() + (n - o) + "px")
		}
	}

	function generate_keyboard($KeyView, opts, e, t) {

		_kb = $KeyView.find(".kv_keyboard");

		_kb.empty();
		_kb.parent().addClass(opts.theme)
		//
		if (opts.status != "independent" || !opts.status) {

			_kb.attr('data-ansi',e)
			key_build($KeyView, opts,e,t, ".kv_keyboard", 'mix')

		} else if (opts.status == "independent"){

			_kb.addClass("keyboard_ind");

			for (var i = 0; i < opts["keyboards"].length; i++) {
				
				_kb.attr('data-ansi',e)
				t_kb = opts["keyboards"][i];
				_kb.append('<div class="ind_kb kb_'+t_kb+'" data-version="'+t_kb+'"></div>');

				key_build($KeyView, opts,e,t_kb, '.kv_keyboard .kb_'+t_kb, 'ind')

			} 

			if (opts.merger || opts.heatmap) {

				if ($KeyView.find(".keys").find("canvas").length == 0) {

					$KeyView.find(".keys").prepend("<canvas class='kb_canvas'>");

				}
				var c = $KeyView.find(".kb_canvas")[0];
				c.width  = $KeyView.find(".keyview_keyboard").width();
				c.height = $KeyView.find(".keyview_keyboard").height();
			}


		}
	}
	//
	function generate_details_container($KeyView, opts, t){
		//
		details_html = $("template"+opts.template_class).html()
		//
		t.append(details_html)
		//
	}
	function generate_details(e, t, $KeyView, opts) {
		//
		//	
		has_key = false;
		//
		if ($KeyView.find('.kv_keydetails').children().length == 0) {
			//
			if (opts.type != "static" || !opts.type) {
				//
				generate_details_container($KeyView, opts, $KeyView.find('.kv_keydetails'))
				//
			}
			//
		}
		//
		var r = [".level1 .group1", ".level2 .group1", ".level1 .group2", ".level2 .group2"];
		//
		//
		for (var i in r) {
			var s = $KeyView.find(".kv_keydetails " + r[i]),
				o = t.find(r[i]).attr("data-symbol");
			//
			if (s.length > 0) {
				has_key = true;
			}
			//
			if (o) {
				//
				var u = getCharNumFromSymbol(o),
					a = parseInt(u, 16) || "",
					f = getCharFromSymbol(o);
				s.html('<div class="char">' + f + "</div>"), s.append('<div class="code">' + a + "<br>" + u + "</div>");
				var l = KeyView.unicode[u] || "";
				//
				s.append('<p class="name">' + l + "</p>"), o.substring(0, 2) == "U+" && (o = "U" + o.substring(2)), s.append('<p class="symbolname">' + o + "</p>")
			} 
		}
		//
		if (has_key) {

			$KeyView.find(".kv_keydetails").removeClass("selection_empty");

		}
		//
		//
	}
	//
	function generate_log(_e, t,$KeyView, opts) {
		//
		var r = [".level1 .group1", ".level2 .group1", ".level1 .group2", ".level2 .group2"];
		//
		var e = $KeyView.find('.symbols-select input[name="symbols"].selected').val() || opts["keyboards"][0];
		//
		kc = t.attr("data-keycode");
		//
		if (KeyView.logs[e]) {
			//
			var log_list = KeyView.logs[e][kc];
			//
			var diff_obj = KeyView.diffs[e][kc];
			//
			if (diff_obj != undefined) {

				var diff_list = Object.values(diff_obj);
				//
				$KeyView.find(".keyview_logs").empty();
				//
				var log_list_items = [];
				//
				var access_method = '';
				var access_method_list = [" Access by pressing <span>AltGr+$1</span>", " Access by pressing <span>Shift+AltGr+$1</span>", " Access by pressing <span>Shift+$1</span>"];
				//
				for (var i in log_list) {
					//
					pos_lg = [0,0];
					lang = "en";
					//
					if (i == 0) {
						// [level,group]
						pos_lg = [1,0];
						access_method = access_method_list[2];
						//
					} else if(i ==1){
						pos_lg = [0,0];
						access_method = '';
					} else if(i ==2){
						pos_lg = [1,1];
						access_method = access_method_list[1];
					} else if(i ==3){
						pos_lg = [0,1];
						access_method = access_method_list[0]
						
					}
					//
					log_list_items.push([log_list[i][lang],access_method]);
					//

				}
				//
				if (log_list_items.length == 0) {

					$KeyView.find(".keyview_logs").empty();
					$KeyView.find(".keyview_logs").addClass("logs_empty");
					$KeyView.find(".keyview_logs").removeClass("logs_inactive");

				} else {
						
					//
					function replace_bracket_content(str) {
						return function x(o) {
							return str.replace(/{([^{}]*)}/g, function (a, b) {

								var r = o[b].hexDecode();
								return typeof r === 'string' || typeof r === 'number' ? r : a;
							});
						}
					}
					//
					function swap(json){
						var ret = {};
						for(var key in json){
							ret[json[key]] = key;
						}
						return ret;
					}
					//
					var swapped = swap(KeyView.unicode);
					//
					for (var i = 0; i < log_list_items.length; i++) {
						//
						_accm = log_list_items[i][1];
						//
						//
						swap_result = replace_bracket_content(log_list_items[i][0])(swapped);
						//
						//
						rep_wrap = swap_result.replace(/{(.+?)}/g, '<span>$1</span>');
						//
						if (_accm.length > 0 && e == 'qazaq_basic') {

							access_method_keys = '<div class="acc_mtd">'+_accm.replace("$1",t.find(".level1 .group1").text())+'</div>';

						} else {

							access_method_keys = '';

						}
						//
						diff_reason = diff_list[i];
						log_item = '<div class="'+diff_reason+'">'+rep_wrap+access_method_keys+'</div>';
						$KeyView.find(".keyview_logs").append(log_item);
						//
					}
					//
					$KeyView.find(".keyview_logs").removeClass("logs_empty");
					$KeyView.find(".keyview_logs").removeClass("logs_inactive");
					//
				}
				//
			} else {
				//
				$KeyView.find(".keyview_logs").empty();
				$KeyView.find(".keyview_logs").addClass("logs_empty");
				//
			}
			//
		} 
	}
	//
	function get_safe_coords(_c,_p){ // avoids bug if content is css scaled and has a canvas overlay
		//
		p = _c[0].getBoundingClientRect();
		c = _p[0].getBoundingClientRect();
		//
		relativePos = {};
		//
		relativePos.top = Math.abs(c.top - p.top),
		relativePos.right = Math.abs(c.right - p.right),
		relativePos.bottom = Math.abs(c.bottom - p.bottom),
		relativePos.left = Math.abs(c.left - p.left);
		//
		return relativePos;
		//
	}
	//
	function generate_merger(e, t, drawtype,$KeyView, opts) {

		var c = $KeyView.find(".kb_canvas")[0];
		
		c.width  = $KeyView.find(".keyview_keyboard").width();
		c.height = $KeyView.find(".keyview_keyboard").height();

		var ctx = c.getContext("2d");


		ctx.clearRect(0, 0, c.width, c.height);
		
		if (drawtype == "clear") return;
		//
		var _parent = $(t).parents(".keyview_keyboard"),
			_child = $(t),
			relativePos = get_safe_coords(_child, _parent);
		//
		_t_w = $(t)[0].getBoundingClientRect().width;
		_t_h = $(t)[0].getBoundingClientRect().height;
		//
		var x_s = relativePos.left + _t_w / 2;
		var y_s = relativePos.top + _t_h;
		//
		//current_keycode = t.attr("data-keycode");
		current_keys = JSON.parse(t.attr("data-keys"));
		//
		translit_keys = []

		for (var i = 0; i < current_keys.length; i++) {
			
			translit_keys.push( QazLatynConverter.Cyrl2Latyn(current_keys[i]) );

		}


		split_keys = [];

		for (var i = 0; i < translit_keys.length; i++) {
			if (translit_keys[i] != "NoSymbol" ) {

				if ( translit_keys[i] != "\\" ) {

					sp_k = translit_keys[i].split('')
					if ( sp_k != translit_keys[i]) {
						for (var x = 0; x < sp_k.length; x++) {
							
							split_keys.push( sp_k[x])
						}
					} else {
						split_keys.push( translit_keys[i])
					}
				}
			} else {
				split_keys.push( translit_keys[i])
			}
		}

		kb_opp_pos = $KeyView.find(".kb_qazaq_basic").position();

		var got_coords = [];

		$KeyView.find(".kb_qazaq_basic [data-keys]").removeClass("contains");

		if (drawtype == "redraw") {

			for (var i = 0; i < split_keys.length; i++) {
				
				if (split_keys[i] != "NoSymbol") {

					if (split_keys[i] == '\\') {
					}

					$KeyView.find( ".kb_qazaq_basic [data-keys*='"+split_keys[i]+"']" ).each(function(x){

						_attrs = JSON.parse($(this).attr("data-keys"))
						
						if (_attrs.indexOf(split_keys[i]) >= 0) {
							$(this).addClass("contains");
							x_t = $(this).position().left + kb_opp_pos.left + $(this).width() / 2;
							y_t = $(this).position().top + kb_opp_pos.top;
							got_coords.push([x_t, y_t])
						}	
					})

				}

			}

		}

		bezier_offset = 80;

		function draw_lines(l_w, l_c){

			ctx.beginPath();
			ctx.lineWidth = l_w;
			ctx.strokeStyle = l_c;
			ctx.moveTo(x_s+2, y_s+2);
			ctx.bezierCurveTo(x_s+2, y_s+bezier_offset, got_coords[i][0]+2, got_coords[i][1]-bezier_offset, got_coords[i][0]+8, got_coords[i][1]+2);
			//ctx.lineTo(got_coords[i][0], got_coords[i][1]);
			ctx.stroke(); 

		}

		for (var i = 0; i < got_coords.length; i++) {
			
			if (drawtype == "redraw") {

				draw_lines(6, 'rgba(255,255,255,0.5)')
				
			}
		}
		for (var i = 0; i < got_coords.length; i++) {
			
			if (drawtype == "redraw") {

				draw_lines(2, "#191970")
				
			}
		}

	}
	//
	function deselectKey(e, _t, $KeyView, opts) {

		if (opts.merger) {
			$KeyView.find(".kv_keyboard .selected_merger").removeClass("selected_merger");
			$KeyView.find(".kv_keyboard .contains").removeClass("contains");
		}

		$KeyView.find(".kv_keyboard .selected").removeClass("selected");
		$KeyView.find(".kv_keydetails").removeData("keycode");
		$KeyView.find(".kv_keydetails td").html("");

		$KeyView.find(".kv_keydetails").addClass("selection_empty");

		$KeyView.find(".keyview_logs").empty();
		$KeyView.find(".keyview_logs").addClass("logs_empty");
		//
	}
	//
	function generate_key_items_coords($KeyView, opts){
		//
		//	returns heatmap.js accepted coords, levels and groups and additional keypresses to access key item
		//  // x y shiftx shifty altx alty
		//	"~": [35, 120, 70, 275, 100, 100],
		//
		var _key_coords = {};
		//
		var ind_keyboards = $KeyView.find(".keyboard_ind .ind_kb");
		//
		ind_keyboards.each(function(y){
			//
			var keyboard_a = $(this);//$KeyView.find(".keyboard_ind .ind_kb").eq(1);
			var keyboard_a_is = $(this).attr("data-version");
			//var keyboard_a = $KeyView.find(".ind_kb.kb_qazaq_basic");
			//
			console.log(keyboard_a)
			//
			keyboard_a.find('.'+opts.key_class).each(function(x){
				//
				_k = $(this);
				//
				if (_k.hasClass("alnum")) {
					//
					var key_symbols = _k.find("[data-symbol]");
					//
					var access_method = [];
					//
					//
					get_pos = function(_gk){
						//
						_parent = _k.parents(".ind_kb");
						_child = _gk;
						relativePos_key = get_safe_coords(_child, _parent);
						//
						_t_w = _k[0].getBoundingClientRect().width;
						_t_h = _k[0].getBoundingClientRect().height;
						//
						relativePos_key.left = relativePos_key.left + _t_w / 2;
						relativePos_key.top = relativePos_key.top + _t_h / 2;
						//
						return relativePos_key
						//
					}
					//
					var alg_gr_bound = get_pos(keyboard_a.find('[data-keycode="RALT"]'))
					var shift_bound = get_pos(keyboard_a.find('[data-keycode="LFSH"]'));
					var space_bound = get_pos(keyboard_a.find('[data-keycode="SPCE"]'));
					var alt_gr_pos = [alg_gr_bound.left, alg_gr_bound.top];
					var shift_pos = [shift_bound.left, shift_bound.top];
					var space_pos = [space_bound.left, space_bound.top];
					//
					var access_method_list = ["AltGr", "Shift+AltGr", "Shift"];
					//
					if (_k.attr('data-keycode') != "SPCE" ) {
						//
						//console.log(key_symbols)
						//console.log(_k)
						//
						rp_key = get_pos(_k);
						//
						//console.log("RELATIVE POS")
						//console.log(rp_key)
						//
						key_symbols.each(function(i){
							//
							_t = $(this);
							//
							_l_class = _t.parent().attr("class");
							_g_class = _t.attr("class");
							//
							level = _l_class.substr(_l_class.length - 1) - 1;
							group = _g_class.substr(_g_class.length - 1) - 1;
							//
							//console.log(_t.text(), level, group);
							//
							_key_coords[_t.text().toString()] = [rp_key.left, rp_key.top];
							//
							//console.log(_key_coords)
							//console.log(_key_coords[_t.text().toString()])
							//
							if (level == 1 && group == 0) {
								//
								access_method = shift_pos;//access_method_list[2];
								//
							} else if(level == 0 && group == 0){

								access_method = [];

							} else if(level == 1 && group == 1){

								access_method = shift_pos.concat(alt_gr_pos);//access_method_list[1];

							} else if(level == 0 && group == 1){

								access_method = alt_gr_pos;//access_method_list[0]

							}
							//
							_key_coords[_t.text().toString()] = _key_coords[_t.text().toString()].concat(access_method)
							//
							//console.log(access_method)
							//
						});
					} else {
						console.log("IS SPACE", space_pos)
					}

					//
					//
				}

			})
			//
			opts.hm_app.LAYOUTS[keyboard_a_is] = _key_coords;
			//
		});
		//
		//console.log(_key_coords)
		//
	}
	//
	function selectKey(e,_t,$KeyView, opts) {
		//
		//
		if (typeof e != "string") {
			var t = _t;
		} else {
			t = $KeyView.find('.kv_keyboard div[data-keycode="' + e + '"]');
		};
		//
		if (opts.type == "static") {

			if (!t.parents('.ind_kb').hasClass('kb_'+opts["keyboards"][0])) {
				return;
			}
		}
		//
		//
		var n = t.hasClass("selected");
		deselectKey(e, _t,$KeyView, opts);
		t.removeClass("hovered");
		//
		current_keycode = t.attr("data-keycode");
		//
		if (n) {

			if (opts.merger) {
				//
				generate_merger(e,t, "clear",$KeyView, opts)
				//
			}
			//
			return
		};
		//
		if (opts.merger) {
			//
			if (t.length > 1) {

				t = $KeyView.find('.kv_keyboard .kb_qazaq_old div[data-keycode="' + e + '"]');

			}
			//
		}
		//
		$KeyView.find(".kv_keyboard .selected").removeClass("selected"), 
		t.addClass("selected"),
		$KeyView.find(".kv_keydetails").data("keycode", t.data("keycode"));
		//
		
		//
		generate_details(e,t,$KeyView, opts)
		//
		if ($KeyView.find("#onoff_changes").hasClass("selected")) {

			generate_log(e,t,$KeyView, opts)

		}
		//
		if (opts.merger) {

			//$KeyView.find(".kv_keyboard .selected_merger").removeClass("selected_merger"), 
			if (current_keycode == "SPCE") {
				generate_merger(e,t, "clear",$KeyView, opts)
				return;
			} else {

				t.addClass("selected_merger");
				generate_merger(e,t, "redraw",$KeyView, opts)
			
			}

		}
		//

		
	}
	//
	function changeGeometry(e, _t, $KeyView, opts, data) {

		_t.parent().parent().find(".selected").removeClass("selected")

		_t.addClass("selected");

		var e = $KeyView.find('.symbols-select input[name="symbols"].selected').val() || opts["keyboards"][0],
			t = $KeyView.find(".kv_keyboard .selected").data("keycode");
		//
		$KeyView.find('.geometry-select .selected_button').removeClass('selected_button');
		$KeyView.find('.geometry-select input[name="geometry"].selected').parent().addClass("selected_button");
		//		
		generate_keyboard($KeyView, opts, _t.val(), e);
		
		t && selectKey(t,_t,$KeyView, opts);

	}

	function changeSymbols(e,_t,$KeyView, opts, data) {


		if (opts.status != "independent" || !opts.status) {

			if (_t.hasClass("selected")) return;

			_t.parent().parent().find(".selected").removeClass("selected");
			//
			_t.addClass("selected");
			//
			var _e = $KeyView.find('.geometry-select input[name="geometry"].selected').val() || "qwerty1";
			var t = $KeyView.find(".kv_keyboard .selected").data("keycode");
			//
			$KeyView.find('.symbols-select .selected_button').removeClass('selected_button');
			$KeyView.find('.symbols-select input[name="symbols"].selected').parent().addClass("selected_button");
			//
			generate_keyboard($KeyView, opts, _e, _t.val());

			if (opts["marking"] == true ) {
				//
				t && selectKey(t,_t,$KeyView, opts), 
				$KeyView.find(".diff-select").toggleClass("qazaq kazakh_latin"), 
				$KeyView.find(".diff-legend > div").toggle()
			}

		} 

	}

	function toggleDiff(e, _t, $KeyView, opts, data, action) {
		//
		if (opts["marking"] == true ) {
			//
			if (action == 'alter') {

				$KeyView.find(".kv_keyboard").toggleClass("diff")
				$KeyView.find(".diff-select input").toggleClass("selected")
				$KeyView.find(".diff-legend").toggle();
				$KeyView.find(".diff-legend > div").hide();
				//
				if (!$KeyView.find(".diff-select input").hasClass("selected")) {
					
					$KeyView.find(".keyview_logs").empty();
					$KeyView.find(".keyview_logs").addClass("logs_empty");
					$KeyView.find(".keyview_logs").addClass("logs_inactive");

				} else {
					//
					var _e = $KeyView.find('.'+opts.key_class+'.selected').attr("data-keycode");
					t = $KeyView.find('.kv_keyboard div[data-keycode="' + _e + '"]');
					//
					generate_log(_e,t,$KeyView, opts)
					//
					$KeyView.find(".keyview_logs").removeClass("logs_inactive");
					//
				}
				//
			}
			//
			var selected_val = $KeyView.find('.symbols-select input[name="symbols"].selected').val();
			var active_diff = $KeyView.find(".diff-legend ." + selected_val);
			//
			var diff_items = active_diff.find("[data-diff]");
			//
			//
			for (var i = 0; i < diff_items.length; i++) {
				//
				_dt = $(diff_items[i]).attr("data-diff");
				//
				//
				var indis = $KeyView.find('.'+opts.key_class).find('.'+_dt);
				//
				$(diff_items[i]).find('.indi_count').text(indis.length)
				//
			}
			//
			active_diff.show();
			//
		}
		//
	}
	
	function initHovers(e, $KeyView, opts, data) {
		$KeyView.find(".kv_keyboard").on("mouseenter mouseleave", ".alnum", function(e) {
			if (e.type == "mouseenter") {

				if (!$(this).hasClass("selected")) {

					$(this).addClass("hovered")

				}

			} else if (e.type == "mouseleave") { 
				
				$(this).removeClass("hovered")

			}
		})
	}
	//
	//
	function initClicks(e, $KeyView, opts, data) {
		//
		$KeyView.find(".kv_keyboard").on("click", ".alnum", function(e){
			selectKey(e, $(this), $KeyView, opts, data)
		});
		$KeyView.find(".geometry-select input").on("click", function(e){
			changeGeometry(e, $(this), $KeyView, opts, data)
		});
		$KeyView.find(".symbols-select input").on("click", function(e){
			changeSymbols(e, $(this), $KeyView, opts, data)
			toggleDiff(e, $(this), $KeyView, opts, data, 'update')
		});
		//
		$(window).resize(function() {
			clearTimeout(window.resizedFinished);
			window.resizedFinished = setTimeout(function(){
				t = $KeyView.find(".kv_keyboard .selected").data("keycode");
				_t = $KeyView.find(".kv_keyboard .selected")
				//
				//
				deselectKey(t, _t,$KeyView, opts);
				//
				selectKey(t, _t, $KeyView, opts, data)
				//

			}, 250);
		});
		//

		if (opts["marking"] == true ) {

			$KeyView.find(".diff-select input").on("click",function(e){
				toggleDiff(e, $(this), $KeyView, opts, data, 'alter');

			});

			/*$KeyView.find(".onoff_changes").on("click",function(e){
				toggleDiff(e, $(this), $KeyView, opts, data, 'alter');
			});*/

		}
	}
	//
	function setGeometry($KeyView, opts) {
		//
		var e = "qwerty2";
		//
		//
		$KeyView.find('.geometry-select input[name="geometry"]')
			.filter('[value="' + e + '"]')
			.addClass("selected")
			.prop("checked", true)

		$KeyView.find('.geometry-select input[name="geometry"].selected').parent().addClass('selected_button')
		//
		return e
	}

	function setLayout($KeyView,opts) {

		
		$KeyView.find('.symbols-select input[name="symbols"]').each(function() { 
			$(this).prop("checked", false);//this.checked = false; 
			$(this).parent().removeClass("selected_button");
		});
		//
		var e = $KeyView.find('.symbols-select input[name="symbols"].selected').val() || opts["keyboards"][0];
		//
		if (opts["marking"] == true ) {
			$KeyView.find(".diff-select").addClass(e)
		}
		//
		//
		$KeyView.find('.symbols-select input[value="' + e + '"]').parent().addClass('selected_button')
		$KeyView.find('.symbols-select input[value="' + e + '"]')
			.prop("checked", true)
			.addClass("selected")
		//
		return e
	}
	//
	function interact($KeyView, opts, data){
		//
		//add_keyup = '';
		//
		/*if (data.$search_accept) {
			//
			add_keyup = ''
			//
		} else {
			//
			add_keyup = ' keyup';
			//
		}*/
		//
		initHovers(null, $KeyView, opts, data);
		initClicks(null, $KeyView, opts, data);

		/*data.$KeyView_input.on('change'+add_keyup, function(e){
			//
			clearTimeout(search_timeout);
			//
			search_timeout = setTimeout(function(){
				//
				_onInputEvent(data, e);
				//
			},data.search_duration);
			//
		});
		//
		if (data.$search_accept) {
			data.$search_accept.on('click', function(e){
				//
				e.preventDefault();
				//
				if(data.$KeyView_input.val.length > 0){
					//
					data.$KeyView_input.trigger('change')
					//
				}
				//
			});
		}*/
		//
	}
	//
	//
	$.fn[namespace] = function(method, callback) {
		//
		if (pub[method]) {
			//
			pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
			//
		} else if (typeof method === 'object' || !method) {
			//
			init.apply(this, arguments);
			//
		}
		//
		
		//
		if (typeof callback == 'function') {
			//
			return callback('ok');
			//
		} 
		//
	};
	//
})( jQuery, window, document );