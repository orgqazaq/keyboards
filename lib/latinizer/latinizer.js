// latinizer: 0.001
(function ($, window) {
	//"use strict";

	var $window = $(window);

	var namespace = "latinizer",
		$body = null,
		classes = {
			base: "latinizer",
			content: "latinizer-content",
			result: "latinizer-result",
			glyph: "char",
			glyph_base: "glyph",
			handle: "latinizer-handle",
			isSetup: "latinizer-setup",
			isActive: "latinizer-active"
		},
		events = {
			start: "touchstart." + namespace + " mousedown." + namespace,
			move: "touchmove." + namespace + " mousemove." + namespace,
			enter: "mouseenter." + namespace,
			leave: "mouseleave." + namespace,
			end: "touchend." + namespace + " mouseup." + namespace
		};
	//
	var kazakh_glyphlib = {"\u0400": ["uni0400", "0400", "Iegravecyrillic"], "\u0401": ["uni0401", "0401", "Iocyrillic"], "\u0402": ["uni0402", "0402", "Djecyrillic"], "\u0403": ["uni0403", "0403", "Gjecyrillic"], "\u0404": ["uni0404", "0404", "Ecyrillic"], "\u0405": ["uni0405", "0405", "Dzecyrillic"], "\u0406": ["uni0406", "0406", "Icyrillic"], "\u0407": ["uni0407", "0407", "Yicyrillic"], "\u0408": ["uni0408", "0408", "Jecyrillic"], "\u0409": ["uni0409", "0409", "Ljecyrillic"], "\u040a": ["uni040A_", "040A", "Njecyrillic"], "\u040b": ["uni040B_", "040B", "Tshecyrillic"], "\u040c": ["uni040C_", "040C", "Kjecyrillic"], "\u040d": ["uni040D_", "040D", "Igravecyrillic"], "\u040e": ["uni040E_", "040E", "Ushortcyrillic"], "\u040f": ["uni040F_", "040F", "Dzhecyrillic"], "\u0410": ["uni0410", "0410", "Acyrillic"], "\u0411": ["uni0411", "0411", "Becyrillic"], "\u0412": ["uni0412", "0412", "Vecyrillic"], "\u0413": ["uni0413", "0413", "Gecyrillic"], "\u0414": ["uni0414", "0414", "Decyrillic"], "\u0415": ["uni0415", "0415", "Iecyrillic"], "\u0416": ["uni0416", "0416", "Zhecyrillic"], "\u0417": ["uni0417", "0417", "Zecyrillic"], "\u0418": ["uni0418", "0418", "Iicyrillic"], "\u0419": ["uni0419", "0419", "Iishortcyrillic"], "\u041a": ["uni041A_", "041A", "Kacyrillic"], "\u041b": ["uni041B_", "041B", "Elcyrillic"], "\u041c": ["uni041C_", "041C", "Emcyrillic"], "\u041d": ["uni041D_", "041D", "Encyrillic"], "\u041e": ["uni041E_", "041E", "Ocyrillic"], "\u041f": ["uni041F_", "041F", "Pecyrillic"], "\u0420": ["uni0420", "0420", "Ercyrillic"], "\u0421": ["uni0421", "0421", "Escyrillic"], "\u0422": ["uni0422", "0422", "Tecyrillic"], "\u0423": ["uni0423", "0423", "Ucyrillic"], "\u0424": ["uni0424", "0424", "Efcyrillic"], "\u0425": ["uni0425", "0425", "Khacyrillic"], "\u0426": ["uni0426", "0426", "Tsecyrillic"], "\u0427": ["uni0427", "0427", "Checyrillic"], "\u0428": ["uni0428", "0428", "Shacyrillic"], "\u0429": ["uni0429", "0429", "Shchacyrillic"], "\u042a": ["uni042A_", "042A", "Hardsigncyrillic"], "\u042b": ["uni042B_", "042B", "Yericyrillic"], "\u042c": ["uni042C_", "042C", "Softsigncyrillic"], "\u042d": ["uni042D_", "042D", "Ereversedcyrillic"], "\u042e": ["uni042E_", "042E", "IUcyrillic"], "\u042f": ["uni042F_", "042F", "IAcyrillic"], "\u0430": ["uni0430", "0430", "acyrillic"], "\u0431": ["uni0431", "0431", "becyrillic"], "\u0432": ["uni0432", "0432", "vecyrillic"], "\u0433": ["uni0433", "0433", "gecyrillic"], "\u0434": ["uni0434", "0434", "decyrillic"], "\u0435": ["uni0435", "0435", "iecyrillic"], "\u0436": ["uni0436", "0436", "zhecyrillic"], "\u0437": ["uni0437", "0437", "zecyrillic"], "\u0438": ["uni0438", "0438", "iicyrillic"], "\u0439": ["uni0439", "0439", "iishortcyrillic"], "\u043a": ["uni043A_", "043A", "kacyrillic"], "\u043b": ["uni043B_", "043B", "elcyrillic"], "\u043c": ["uni043C_", "043C", "emcyrillic"], "\u043d": ["uni043D_", "043D", "encyrillic"], "\u043e": ["uni043E_", "043E", "ocyrillic"], "\u043f": ["uni043F_", "043F", "pecyrillic"], "\u0440": ["uni0440", "0440", "ercyrillic"], "\u0441": ["uni0441", "0441", "escyrillic"], "\u0442": ["uni0442", "0442", "tecyrillic"], "\u0443": ["uni0443", "0443", "ucyrillic"], "\u0444": ["uni0444", "0444", "efcyrillic"], "\u0445": ["uni0445", "0445", "khacyrillic"], "\u0446": ["uni0446", "0446", "tsecyrillic"], "\u0447": ["uni0447", "0447", "checyrillic"], "\u0448": ["uni0448", "0448", "shacyrillic"], "\u0449": ["uni0449", "0449", "shchacyrillic"], "\u044a": ["uni044A_", "044A", "hardsigncyrillic"], "\u044b": ["uni044B_", "044B", "yericyrillic"], "\u044c": ["uni044C_", "044C", "softsigncyrillic"], "\u044d": ["uni044D_", "044D", "ereversedcyrillic"], "\u044e": ["uni044E_", "044E", "iucyrillic"], "\u044f": ["uni044F_", "044F", "iacyrillic"], "\u0450": ["uni0450", "0450", "iegravecyrillic"], "\u0451": ["uni0451", "0451", "iocyrillic"], "\u0452": ["uni0452", "0452", "djecyrillic"], "\u0453": ["uni0453", "0453", "gjecyrillic"], "\u0454": ["uni0454", "0454", "ecyrillic"], "\u0455": ["uni0455", "0455", "dzecyrillic"], "\u0456": ["uni0456", "0456", "icyrillic"], "\u0457": ["uni0457", "0457", "yicyrillic"], "\u0458": ["uni0458", "0458", "jecyrillic"], "\u0459": ["uni0459", "0459", "ljecyrillic"], "\u045a": ["uni045A_", "045A", "njecyrillic"], "\u045b": ["uni045B_", "045B", "tshecyrillic"], "\u045c": ["uni045C_", "045C", "kjecyrillic"], "\u045d": ["uni045D_", "045D", "igravecyrillic"], "\u045e": ["uni045E_", "045E", "ushortcyrillic"], "\u045f": ["uni045F_", "045F", "dzhecyrillic"], "\u0460": ["uni0460", "0460", "Omegacyrillic"], "\u0461": ["uni0461", "0461", "omegacyrillic"], "\u0462": ["uni0462", "0462", "Yatcyrillic"], "\u0463": ["uni0463", "0463", "yatcyrillic"], "\u0464": ["uni0464", "0464", "Eiotifiedcyrillic"], "\u0465": ["uni0465", "0465", "eiotifiedcyrillic"], "\u0466": ["uni0466", "0466", "Yuslittlecyrillic"], "\u0467": ["uni0467", "0467", "yuslittlecyrillic"], "\u0468": ["uni0468", "0468", "Yuslittleiotifiedcyrillic"], "\u0469": ["uni0469", "0469", "yuslittleiotifiedcyrillic"], "\u046a": ["uni046A_", "046A", "Yusbigcyrillic"], "\u046b": ["uni046B_", "046B", "yusbigcyrillic"], "\u046c": ["uni046C_", "046C", "Yusbigiotifiedcyrillic"], "\u046d": ["uni046D_", "046D", "yusbigiotifiedcyrillic"], "\u046e": ["uni046E_", "046E", "Ksicyrillic"], "\u046f": ["uni046F_", "046F", "ksicyrillic"], "\u0470": ["uni0470", "0470", "Psicyrillic"], "\u0471": ["uni0471", "0471", "psicyrillic"], "\u0472": ["uni0472", "0472", "Fitacyrillic"], "\u0473": ["uni0473", "0473", "fitacyrillic"], "\u0474": ["uni0474", "0474", "Izhitsacyrillic"], "\u0475": ["uni0475", "0475", "izhitsacyrillic"], "\u0476": ["uni0476", "0476", "Izhitsadblgravecyrillic"], "\u0477": ["uni0477", "0477", "izhitsadblgravecyrillic"], "\u0478": ["uni0478", "0478", "Ukcyrillic"], "\u0479": ["uni0479", "0479", "ukcyrillic"], "\u047a": ["uni047A_", "047A", "Omegaroundcyrillic"], "\u047b": ["uni047B_", "047B", "omegaroundcyrillic"], "\u047c": ["uni047C_", "047C", "Omegatitlocyrillic"], "\u047d": ["uni047D_", "047D", "omegatitlocyrillic"], "\u047e": ["uni047E_", "047E", "Otcyrillic"], "\u047f": ["uni047F_", "047F", "otcyrillic"], "\u0480": ["uni0480", "0480", "Koppacyrillic"], "\u0481": ["uni0481", "0481", "koppacyrillic"], "\u0482": ["uni0482", "0482", "thousandcyrillic"], "\u0483": ["uni0483", "0483", "titlocyrilliccmb"], "\u0484": ["uni0484", "0484", "palatalizationcyrilliccmb"], "\u0485": ["uni0485", "0485", "dasiapneumatacyrilliccmb"], "\u0486": ["uni0486", "0486", "psilipneumatacyrilliccmb"], "\u0487": ["uni0487", "0487", "combiningpokrytiecyrillic"], "\u0488": ["uni0488", "0488", "combininghundredthousandssigncyrillic"], "\u0489": ["uni0489", "0489", "combiningmillionssigncyrillic"], "\u048a": ["uni048A_", "048A", "Ishorttailcyrillic"], "\u048b": ["uni048B_", "048B", "ishorttailcyrillic"], "\u048c": ["uni048C_", "048C", "Semisoftsigncyrillic"], "\u048d": ["uni048D_", "048D", "semisoftsigncyrillic"], "\u048e": ["uni048E_", "048E", "Ertickcyrillic"], "\u048f": ["uni048F_", "048F", "ertickcyrillic"], "\u0490": ["uni0490", "0490", "Gheupturncyrillic"], "\u0491": ["uni0491", "0491", "gheupturncyrillic"], "\u0492": ["uni0492", "0492", "Ghestrokecyrillic"], "\u0493": ["uni0493", "0493", "ghestrokecyrillic"], "\u0494": ["uni0494", "0494", "Ghemiddlehookcyrillic"], "\u0495": ["uni0495", "0495", "ghemiddlehookcyrillic"], "\u0496": ["uni0496", "0496", "Zhedescendercyrillic"], "\u0497": ["uni0497", "0497", "zhedescendercyrillic"], "\u0498": ["uni0498", "0498", "Zedescendercyrillic"], "\u0499": ["uni0499", "0499", "zedescendercyrillic"], "\u049a": ["uni049A_", "049A", "Kadescendercyrillic"], "\u049b": ["uni049B_", "049B", "kadescendercyrillic"], "\u049c": ["uni049C_", "049C", "Kaverticalstrokecyrillic"], "\u049d": ["uni049D_", "049D", "kaverticalstrokecyrillic"], "\u049e": ["uni049E_", "049E", "Kastrokecyrillic"], "\u049f": ["uni049F_", "049F", "kastrokecyrillic"], "\u04a0": ["uni04A_0", "04A0", "Kabashkircyrillic"], "\u04a1": ["uni04A_1", "04A1", "kabashkircyrillic"], "\u04a2": ["uni04A_2", "04A2", "Endescendercyrillic"], "\u04a3": ["uni04A_3", "04A3", "endescendercyrillic"], "\u04a4": ["uni04A_4", "04A4", "Enghecyrillic"], "\u04a5": ["uni04A_5", "04A5", "enghecyrillic"], "\u04a6": ["uni04A_6", "04A6", "Pemiddlehookcyrillic"], "\u04a7": ["uni04A_7", "04A7", "pemiddlehookcyrillic"], "\u04a8": ["uni04A_8", "04A8", "Haabkhasiancyrillic"], "\u04a9": ["uni04A_9", "04A9", "haabkhasiancyrillic"], "\u04aa": ["uni04A_A_", "04AA", "Esdescendercyrillic"], "\u04ab": ["uni04A_B_", "04AB", "esdescendercyrillic"], "\u04ac": ["uni04A_C_", "04AC", "Tedescendercyrillic"], "\u04ad": ["uni04A_D_", "04AD", "tedescendercyrillic"], "\u04ae": ["uni04A_E_", "04AE", "Ustraightcyrillic"], "\u04af": ["uni04A_F_", "04AF", "ustraightcyrillic"], "\u04b0": ["uni04B_0", "04B0", "Ustraightstrokecyrillic"], "\u04b1": ["uni04B_1", "04B1", "ustraightstrokecyrillic"], "\u04b2": ["uni04B_2", "04B2", "Hadescendercyrillic"], "\u04b3": ["uni04B_3", "04B3", "hadescendercyrillic"], "\u04b4": ["uni04B_4", "04B4", "Tetsecyrillic"], "\u04b5": ["uni04B_5", "04B5", "tetsecyrillic"], "\u04b6": ["uni04B_6", "04B6", "Chedescendercyrillic"], "\u04b7": ["uni04B_7", "04B7", "chedescendercyrillic"], "\u04b8": ["uni04B_8", "04B8", "Cheverticalstrokecyrillic"], "\u04b9": ["uni04B_9", "04B9", "cheverticalstrokecyrillic"], "\u04ba": ["uni04B_A_", "04BA", "Shhacyrillic"], "\u04bb": ["uni04B_B_", "04BB", "shhacyrillic"], "\u04bc": ["uni04B_C_", "04BC", "Cheabkhasiancyrillic"], "\u04bd": ["uni04B_D_", "04BD", "cheabkhasiancyrillic"], "\u04be": ["uni04B_E_", "04BE", "Chedescenderabkhasiancyrillic"], "\u04bf": ["uni04B_F_", "04BF", "chedescenderabkhasiancyrillic"], "\u04c0": ["uni04C_0", "04C0", "palochkacyrillic"], "\u04c1": ["uni04C_1", "04C1", "Zhebrevecyrillic"], "\u04c2": ["uni04C_2", "04C2", "zhebrevecyrillic"], "\u04c3": ["uni04C_3", "04C3", "Kahookcyrillic"], "\u04c4": ["uni04C_4", "04C4", "kahookcyrillic"], "\u04c5": ["uni04C_5", "04C5", "Eltailcyrillic"], "\u04c6": ["uni04C_6", "04C6", "eltailcyrillic"], "\u04c7": ["uni04C_7", "04C7", "Enhookcyrillic"], "\u04c8": ["uni04C_8", "04C8", "enhookcyrillic"], "\u04c9": ["uni04C_9", "04C9", "Entailcyrillic"], "\u04ca": ["uni04C_A_", "04CA", "Entailcyrillic"], "\u04cb": ["uni04C_B_", "04CB", "Chekhakassiancyrillic"], "\u04cc": ["uni04C_C_", "04CC", "chekhakassiancyrillic"], "\u04cd": ["uni04C_D_", "04CD", "Emtailcyrillic"], "\u04ce": ["uni04C_E_", "04CE", "emtailcyrillic"], "\u04cf": ["uni04C_F_", "04CF", "palochkacyrillic"], "\u04d0": ["uni04D_0", "04D0", "Abrevecyrillic"], "\u04d1": ["uni04D_1", "04D1", "abrevecyrillic"], "\u04d2": ["uni04D_2", "04D2", "Adieresiscyrillic"], "\u04d3": ["uni04D_3", "04D3", "adieresiscyrillic"], "\u04d4": ["uni04D_4", "04D4", "Aiecyrillic"], "\u04d5": ["uni04D_5", "04D5", "aiecyrillic"], "\u04d6": ["uni04D_6", "04D6", "Iebrevecyrillic"], "\u04d7": ["uni04D_7", "04D7", "iebrevecyrillic"], "\u04d8": ["uni04D_8", "04D8", "Schwacyrillic"], "\u04d9": ["uni04D_9", "04D9", "schwacyrillic"], "\u04da": ["uni04D_A_", "04DA", "Schwadieresiscyrillic"], "\u04db": ["uni04D_B_", "04DB", "schwadieresiscyrillic"], "\u04dc": ["uni04D_C_", "04DC", "Zhedieresiscyrillic"], "\u04dd": ["uni04D_D_", "04DD", "zhedieresiscyrillic"], "\u04de": ["uni04D_E_", "04DE", "Zedieresiscyrillic"], "\u04df": ["uni04D_F_", "04DF", "zedieresiscyrillic"], "\u04e0": ["uni04E_0", "04E0", "Dzeabkhasiancyrillic"], "\u04e1": ["uni04E_1", "04E1", "dzeabkhasiancyrillic"], "\u04e2": ["uni04E_2", "04E2", "Imacroncyrillic"], "\u04e3": ["uni04E_3", "04E3", "imacroncyrillic"], "\u04e4": ["uni04E_4", "04E4", "Idieresiscyrillic"], "\u04e5": ["uni04E_5", "04E5", "idieresiscyrillic"], "\u04e6": ["uni04E_6", "04E6", "Odieresiscyrillic"], "\u04e7": ["uni04E_7", "04E7", "odieresiscyrillic"], "\u04e8": ["uni04E_8", "04E8", "Obarredcyrillic"], "\u04e9": ["uni04E_9", "04E9", "obarredcyrillic"], "\u04ea": ["uni04E_A_", "04EA", "Obarreddieresiscyrillic"], "\u04eb": ["uni04E_B_", "04EB", "obarreddieresiscyrillic"], "\u04ec": ["uni04E_C_", "04EC", "Edieresiscyrillic"], "\u04ed": ["uni04E_D_", "04ED", "edieresiscyrillic"], "\u04ee": ["uni04E_E_", "04EE", "Umacroncyrillic"], "\u04ef": ["uni04E_F_", "04EF", "umacroncyrillic"], "\u04f0": ["uni04F_0", "04F0", "Udieresiscyrillic"], "\u04f1": ["uni04F_1", "04F1", "udieresiscyrillic"], "\u04f2": ["uni04F_2", "04F2", "Uhungarumlautcyrillic"], "\u04f3": ["uni04F_3", "04F3", "uhungarumlautcyrillic"], "\u04f4": ["uni04F_4", "04F4", "Chedieresiscyrillic"], "\u04f5": ["uni04F_5", "04F5", "chedieresiscyrillic"], "\u04f6": ["uni04F_6", "04F6", "Ghedieresiscyrillic"], "\u04f7": ["uni04F_7", "04F7", "ghedieresiscyrillic"], "\u04f8": ["uni04F_8", "04F8", "Yerudieresiscyrillic"], "\u04f9": ["uni04F_9", "04F9", "yerudieresiscyrillic"]};
	//
	var options = {
		tokenize: true,
		customClass: "",
		class_kern_elem: "",
		kern_classes: "",
		glyphlib: kazakh_glyphlib,
		glif_width: "",
		efo_name: "",
		masters:"",
		axes:"",
		kerning_obj: {}
	};
	//
	var rep_container = '<strong data-report="" class="report_container"></strong>';
	//
	var reports = {
		"kerning_none": {"class":"r_kerning_none", "title":"No Kerning Value", "initial":"🆚"},
		"class_none": {"class":"r_class_none", "title":"No Class Value", "initial":"🆑"}
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
					data.$latinizer.removeClass( [data.customClass, classes.base, classes.isActive].join(" ") );

					data.$latinizer.off( classify(namespace) ).removeData(namespace);
				}
			});
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
					data.$latinizer.addClass(classes.isSetup);
					//
					data.$latinizer.removeClass(classes.isSetup);
					//
				}
			});
		},
		rebuild: function(){
			return $(this).each(function(i) {
				//
				var data = $(this).data(namespace);
				//
				////console.log(data.data(name))
				//data(namespace + "-options")
				//
				//pub.destroy.apply(data.$latinizer);
				//
				//build(data.$latinizer, data, true);
				arranger(data,data.$latinizer.find('.'+classes.result), '', true);
				//
				
			});
			
		}
		//

	};
	//
	function init(opts) {
		//
		// Local options
		opts = $.extend({}, options, opts || {});
		
		// Check for Body
		if ($body === null) {
			$body = $("body");
		}

		// Apply to each element
		var $items = $(this);
		for (var i = 0, count = $items.length; i < count; i++) {
			build($items.eq(i), opts, false);
		}
		//
		return $items;
	}
	//
	function classify(text) {
		return "." + text;
	}
	//
	function update_info_tags(el, add_t) {
		//
		el_t = el.attr("title");
		el_r = el.find("strong").attr("data-report");
		//
		t_parts = []
		r_parts = []
		//
		if (el_t.length > 0) {
			//
			t_parts = el_t.split(', ');
			//
		}
		//
		if (el_r.length > 0) {
			//
			r_parts = el_r.split(' ');
			//
		}
		//
		t_add = add_t["initial"]+' '+add_t["title"];
		r_add = add_t["initial"]
		//	
		if (t_parts.indexOf(t_add) == -1) {
			//
			t_parts.push(t_add);
			//
		}
		//
		if (r_parts.indexOf(r_add) == -1) {
			//
			r_parts.push(r_add);
			//
		}
		//
		f_t = t_parts.join(", ");
		f_r = r_parts.join(" ");
		//
		el.attr("title",f_t);
		el.find("strong").attr("data-report",f_r);
		//
	}
	//
	var _ommit_reports = ["	", "\n", "space", "sigma1"];
	//
	function make_reports(data) {
		//
		for (var i = 0; i < data.$fragment_map.length; i++) {
			//
			has_error = false;
			//
			t_class = '.'+classes.glyph+data.$fragment_map[i][0]
			//
			_elem = $(t_class);
			//
			_elem.removeClass("r_*")
			//
			_elem_glyph = _elem.attr("data-glyph")
			//
			if ( _ommit_reports.indexOf(_elem_glyph) == -1 ) {
				//
				el_kerning_val = _elem.find('i').width();
				el_class_val = _elem.attr("data-class");
				//
				if( (data.$fragment_map.length - 1) != i) { // dont show kerning fault on last element
					//
					if (el_kerning_val == 0) {
						//
						has_error = true;
						//
						_elem.addClass(reports["kerning_none"]["class"])
						//
						update_info_tags(_elem, reports["kerning_none"])
						//
						//
					}
					//
				}
				//
				if (el_class_val == "undefined") {
					//
					has_error = true;
					//
					_elem.addClass(reports["class_none"]["class"])
					//
					update_info_tags(_elem, reports["class_none"])
					//
				}

				//
				if (has_error == false) {

					_elem.addClass("r_clear")
					
				}
				//
			} 
			//
		}
		//
	}
	//
	//
	function fragmentFromString(strHTML) {
		//
		return document.createRange().createContextualFragment(strHTML);
		//
	}
	//
	function get_name(data, letter){
		//
		for (var key in data.glyphlib) {
			_obj = data.glyphlib[key];
			//
			if (letter == key) {
				//
				return _obj[2]
				//
			}
		}
		//
		return undefined
		//
	}
	//
	
	//
	function arranger(data, t, splitter, resplit) {
		//
		var kern_tag_alt = '<b></b>';
		//
		console.log(data.tokenize)
		//
		if (resplit) {

			t.empty()

			delete data.$fragment_map
			delete data.$fragment_temp
			delete data.$initial_text

			data.$fragment_map = []
			data.$fragment_temp= document.createDocumentFragment();
			data.$initial_text = data.$latinizer.find('.'+classes.content).val();

			console.log('resplit', resplit, data.$initial_text)
			console.log(data.$latinizer.find('.'+classes.content).val())
			
			console.log(data.$fragment_map.length)	
		}
		//
		var a = data.$initial_text.split(splitter);
		//
		console.log(">",a)
		//
		_stream = 'dn';
		//
		if (a.length) {
			//
			if (data.$fragment_map.length == 0) { // if we have a fragment_map dont place the elements again.
				//
				t.empty()
				//
				get_px_fontsize = undefined;
				//
				res_text = ''
				//
				result_append = ''
				//get_initial_letter(data);
				//
				for (var i = 0; i < a.length; i++) {
					//
					if (data.tokenize) {

						d_glyph = get_name(data, a[i]);
						//
						stat_latn = false;
						stat_letter = false;
						//
						if (d_glyph) {
							//
							res_glyph = a[i];
							//
							res_latinized = replace_latinize(res_glyph,_stream);
							//
							stat_latn = true;
							stat_letter = true;
							//
						} else {
							
							if (a[i] == ' ') {
								//
								res_glyph = '&nbsp;';
								res_latinized = '&nbsp;';
								//
							} else {
								//
								res_glyph = a[i];
								res_latinized = a[i];
								//
								stat_letter = true;
								//
							}

						}
						//
						//
						f_string = '<div '+
										'title="" '+
										'class="'+classes.glyph_base+' '+classes.glyph+(i+1)+'" '+
										//'data-init-width="0" '+
										'data-glyph="'+d_glyph+'" '+
										'data-status="'+stat_latn+'"'+
										'data-letter="'+stat_letter+'"'+
										//'data-class-l="'+d_class[0]+'"'+
										'>'+
											'<span class="orig">'+res_glyph+'</span>'+
											'<span class="latn">'+res_latinized+'</span>'+
											//kern_tag_alt+
											//rep_container+
									'</div>'
						//
						frag = fragmentFromString(f_string);
						//
						data.$fragment_temp.appendChild(frag)
						//
						data.$fragment_map.push([i+1])
						//
						result_append = data.$fragment_temp
						//
					}else{
						//
						d_glyph = get_name(data, a[i]);
						//
						res_glyph = a[i];
						//
						if (d_glyph) {
							//
							res_latinized = replace_latinize(res_glyph, _stream, 'single');
							//
						}else{
							//
							res_latinized = res_glyph;
							//
						}
						//
						res_text = res_text + res_latinized
						//
						result_append = res_text
						//
					}
				}
				//
				result_append = replace_latinize(result_append, _stream, 'double');
				//
				$('.calc').empty()
				//
				//
				t.append(result_append)
				//
			}
			//
		}
		//
	}
	//
	
	//	
	function build($latinizer, opts, rebuild) {
		//
		var dims = [];
		//
		this.onSlideEnd = opts.onSlideEnd;
		//
		if (!$latinizer.is(classes.base)) {
			// EXTEND OPTIONS
			opts = $.extend({}, opts, $latinizer.data(namespace + "-options"));
			//
			var html = '';
			//
			var data = $.extend({
				$latinizer: $latinizer,
				$initial_text: $latinizer.find('.'+classes.content).val(),
				$inputs:'',
				$outputs:'',
				$fragment_temp: document.createDocumentFragment(),
				$fragment_map: [],
				$glyph: ''
			}, opts);
			//
			$latinizer.data(namespace, data)
			//
			arranger(data,$latinizer.find('.'+classes.result), '', rebuild);
			//
			pub.reset.apply($latinizer);
			//
			//if (data.tokenize == true) {
				//
				interact(data);
				//
			//}
		}
		//
	}
	//
	//
	function interact(data){
		//
		//
		$(data.$latinizer).find('.'+classes.content).on('input propertychange', function(){
			//
			//console.log('changed')
			data.$latinizer.latinizer("rebuild");
			//
		})
		//
		if (data.tokenize == true) {
			//
			for (var i = 0; i < data.$fragment_map.length; i++) {
				//
				elem_glyph = $('.'+classes.glyph+data.$fragment_map[i][0]);
				//
				//elem_glyph.bind(events.enter, classify(classes.handle+'-h'), function(e){
					//
					//data.$glyph = $(this);
					//
					onStart(data, elem_glyph)
					//
				//});
				//
			};
			//
		}
		//
	}
	//
	function onStart(data) {
		//
		$("."+classes.glyph_base).unbind(events.enter);
		$("."+classes.glyph_base).unbind(events.leave);
		$("."+classes.glyph_base).unbind(events.move);
		$("."+classes.glyph_base).unbind(events.end);
		//
		$("."+classes.glyph_base).bind(events.enter, function(e){
			//
			onMouseEnter(data, e)
			//
		}).bind(events.leave, function(e){
			//
			onMouseLeave(data, e)
			//
		});
		//
		$('.fonts').mouseleave(function() {
			//
			$(".kern").unbind(events.move);
			//
		});
		//
		$("html").mouseleave(function() {
			//
			$(".kern").unbind(events.move);
			//
		});
		//
	}
	//
	function onHandleDown(e, data) {
		//
		e.preventDefault();
		e.stopPropagation();
		//
	}
	//
	function find_word(data, _g){
		//
		//elem_glyph = $('.'+classes.glyph+data.$fragment_map[_g][0])
		//
		////console.log(elem_glyph)
		//
		elem_space = -1
		//
		for (var i = 0; i < data.$fragment_map.length; i++) {
			//
			elem_glyph = $('.'+classes.glyph+data.$fragment_map[i][0])//.parents("."+classes.glyph_base)
			//
			get_stat_letter = elem_glyph.attr("data-letter");
			//
			if (get_stat_letter == 'false') {
				//
				elem_space = i
				//
			}
			//
			if (i == _g) {
				//
				////console.log(i, elem_space, elem_glyph)
				//
			}
			//
		};
		//
	}
	//
	function onMouseEnter(data, e) {
		//
		e.preventDefault();
		e.stopPropagation();
		//
		t_g = $(e.target).parents("."+classes.glyph_base)
		//
		console.log(e)
		//
	}
	function onMouseLeave(data, e) {
		//
		e.preventDefault();
		e.stopPropagation();
		//
		console.log(e)
	}
	
	function onMouseUp(data, e) {
		//
		e.preventDefault();
		e.stopPropagation();
		//
	}
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
		if (typeof callback == 'function') {
			//
			return callback('ok');
			//
		} 
		//
	};
	//
	$(window).resize(function(){
		
		//$(".latinizer").latinizer("reset");
		$(".latinizer").latinizer("rebuild");

	});

})( jQuery, window, document );

