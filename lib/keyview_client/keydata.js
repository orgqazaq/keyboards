var KeyView = {};
KeyView.diffs = {
	qazaq_basic: {
		AE05: { 3: 'new' },
		AE11: { 3: 'new' },
		AD05: { 3: 'new' },
		AD06: { 2: 'new', 3: 'new' },
		AD07: { 2: 'new', 3: 'new' },
		AD08: { 2: 'new', 3: 'new' },
		AD09: { 2: 'new', 3: 'new' },
		AC01: { 2: 'new', 3: 'new' },
		AC02: { 2: 'new', 3: 'new' },
		AC05: { 2: 'new', 3: 'new' },
		AB03: { 2: 'new', 3: 'new' },
		AB06: { 2: 'new', 3: 'new' },
		AB10: { 3: 'mov' }
		
	},
	qazaq_intl: {
		TLDE: { 2: 'dup' },
		AE01: { 3: 'rem' },
		AE02: { 2: 'rem' },
		AE04: { 3: 'mov', 2: 'dup' },
		AE05: { 3: 'mov', 2: 'rem' },
		AE06: { 3: 'mov', 2: 'rem' },
		AE07: { 3: 'dup', 2: 'rem' },
		AE08: { 3: 'dup', 2: 'mov' },
		AE09: { 3: 'dup' },
		AE10: { 3: 'dup' },
		AE11: { 3: 'dup', 2: 'mov' },
		AD01: { 3: 'dup' },
		AD02: { 3: 'dup', 2: 'dup' },
		AD04: { 3: 'rem' },
		AD05: { 3: 'ddk', 2: 'ddk' },
		AD08: { 2: 'ddk' },
		AC04: { 3: 'ddk', 2: 'rem' },
		AC06: { 3: 'ddk', 2: 'ddk' },
		AC07: { 3: 'dup', 2: 'dup' },
		AC08: { 3: 'rem', 2: 'dup' },
		AB04: { 3: 'mov' },
		AB05: { 2: 'mov' },
		AB07: { 2: 'rem' },
		AB08: { 3: 'rem' },
		AB09: { 3: 'mov' }
	},
	us: {
		TLDE: { 2: 'dup' },
		AE01: { 0: 'rem' },
		AE02: { 2: 'rem' },
		AE04: { 3: 'mov', 2: 'dup' },
		AE05: { 3: 'mov', 2: 'rem' },
		AE06: { 3: 'mov', 2: 'rem' },
		AE07: { 3: 'dup', 2: 'rem' },
		AE08: { 3: 'dup', 2: 'mov' },
		AE09: { 3: 'dup' },
		AE10: { 3: 'dup' },
		AE11: { 3: 'dup', 2: 'mov' },
		AD01: { 3: 'dup' },
		AD02: { 3: 'dup', 2: 'dup' },
		AD04: { 3: 'rem' },
		AD05: { 3: 'ddk', 2: 'ddk' },
		AD08: { 2: 'ddk' },
		AC04: { 3: 'ddk', 2: 'rem' },
		AC06: { 3: 'ddk', 2: 'ddk' },
		AC07: { 3: 'dup', 2: 'dup' },
		AC08: { 3: 'rem', 2: 'dup' },
		AB04: { 3: 'mov' },
		AB05: { 2: 'mov' },
		AB07: { 2: 'rem' },
		AB08: { 3: 'rem' },
		AB09: { 3: 'mov' }
	},
	qazaq_old: {
		TLDE: { 0: 'con', 1: 'con'},
		AE01: { 1: 'con'},
		AE02: { 0: 'con', 1: 'con'},
		AE03: { 0: 'con', 1: 'con'},
		AE04: { 0: 'con', 1: 'con'},
		AE05: { 0: 'con', 1: 'con'},
		AE06: { 0: 'con', 1: 'con'},
		AE07: { 0: 'con', 1: 'con'},
		AE08: { 0: 'con', 1: 'con'},
		AE09: { 0: 'con', 1: 'con'},
		AE10: { 0: 'con', 1: 'con'},
		AE11: { 0: 'con', 1: 'con'},
		AE12: { 0: 'con', 1: 'con'},
		AD11: { 0: 'con', 1: 'con'},
		AD12: { 0: 'con', 1: 'con'},
		AC10: { 0: 'con', 1: 'con'},
		AC11: { 0: 'con', 1: 'con'},
		AB08: { 0: 'con', 1: 'con'},
		AB09: { 0: 'con', 1: 'con'},
		AB10: { 1: 'con'},
		BKSL: { 0: 'con' }
	}
}

KeyView.logs = {
	qazaq_basic: {
		AE05: { 
			3:{ 
				'en':'Added the {{EURO SIGN}} Sign for Currency Accessibility.',
				'kz':'Валюта қол жетімділігі үшін {{EURO SIGN}} белгісі қосылды.',
				'qz':'Valata qol jetimdiligi úshin {{EURO SIGN}} belgisi qosyldy.'
			}
		},
		AE11: { 
			3:{ 
				'en':'Added the {{YEN SIGN}} Sign for Currency Accessibility.',
				'kz':'Валюта қол жетімділігі үшін {{YEN SIGN}} белгісі қосылды.',
				'qz':'Valata qol jetimdiligi úshin {{YEN SIGN}} belgisi qosyldy.'
			} 
		},
		AD05: { 
			3:{ 
				'en':'Added the {{TENGE SIGN}} Sign for National Currency Accessibility.',
				'kz':'Ұлттық валютаға қол жетімділік үшін {{TENGE SIGN}} белгісі қосылды.',
				'qz':'Ulttyq valataǵa qol jetimdilik úshin {{TENGE SIGN}} belgisi qosyldy.'
			} 
		},
		AD06: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER Y WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER Y}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER Y WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER Y}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER Y WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER Y}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER Y WITH ACUTE}} supplement to {{LATIN SMALL LETTER Y}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER Y WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER Y}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER Y WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER Y}} -ge qosyldy.'
			}  
		},
		AD07: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER U WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER U}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER U WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER U}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER U WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER U}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER U WITH ACUTE}} supplement to {{LATIN SMALL LETTER U}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER U WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER U}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER U WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER U}} -ge qosyldy.'
			}  
		},
		AD08: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER I WITH DOT ABOVE}} supplement to {{LATIN CAPITAL LETTER I}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER I WITH DOT ABOVE}} қосымшасы {{LATIN CAPITAL LETTER I}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER I WITH DOT ABOVE}} qosymshasy {{LATIN CAPITAL LETTER I}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER DOTLESS I}} supplement to {{LATIN SMALL LETTER I}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER DOTLESS I}} қосымшасы {{LATIN SMALL LETTER I}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER DOTLESS I}} qosymshasy {{LATIN SMALL LETTER I}} -ge qosyldy.'
			}  
		},
		AD09: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER O WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER O}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER O WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER O}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER O WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER O}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER O WITH ACUTE}} supplement to {{LATIN SMALL LETTER O}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER O WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER O}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER O WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER O}} -ge qosyldy.'
			}  
		},
		AC01: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER A WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER A}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER A WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER A}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER A WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER A}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER A}} supplement to {{LATIN SMALL LETTER A WITH ACUTE}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER A}} қосымшасы {{LATIN SMALL LETTER A WITH ACUTE}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER A}} qosymshasy {{LATIN SMALL LETTER A WITH ACUTE}} -ge qosyldy.'
			}  
		},
		AC02: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER S WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER S}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER S WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER S}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER S WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER S}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER S WITH ACUTE}} supplement to {{LATIN SMALL LETTER S}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER S WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER S}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER S WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER S}} -ge qosyldy.'
			}  
		},
		AC05: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER G WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER G}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER G WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER G}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER G WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER G}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER G WITH ACUTE}} supplement to {{LATIN SMALL LETTER G}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER G WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER G}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER G WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER G}} -ge qosyldy.'
			}  
		},
		AB03: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER C WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER C}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER C WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER C}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER C WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER C}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER C WITH ACUTE}} supplement to {{LATIN SMALL LETTER C}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER C WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER C}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER C WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER C}} -ge qosyldy.'
			}  
		},
		AB06: { 
			2:{ 
				'en':'Added {{LATIN CAPITAL LETTER N WITH ACUTE}} supplement to {{LATIN CAPITAL LETTER N}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN CAPITAL LETTER N WITH ACUTE}} қосымшасы {{LATIN CAPITAL LETTER N}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN CAPITAL LETTER N WITH ACUTE}} qosymshasy {{LATIN CAPITAL LETTER N}} -ge qosyldy.'
			},
			3:{ 
				'en':'Added {{LATIN SMALL LETTER N WITH ACUTE}} supplement to {{LATIN SMALL LETTER N}} due to proximity.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER N WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER N}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER N WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER N}} -ge qosyldy.'
			}  
		},
		AB10: { 
			
			3:{ 
				'en':'Moved {{NUMERO SIGN}} away from {{SOLIDUS}} due to conflict.',
				'kz':'Жақындыққа байланысты {{LATIN SMALL LETTER N WITH ACUTE}} қосымшасы {{LATIN SMALL LETTER N}} -ге қосылды.',
				'qz':'Jaqyndyqqa baılanysty {{LATIN SMALL LETTER N WITH ACUTE}} qosymshasy {{LATIN SMALL LETTER N}} -ge qosyldy.'
			}  
		}
	},
	qazaq_old: {
		TLDE: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER IO}} with established symbol {{TILDE}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER IO}} белгісі бар {{TILDE}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER IO}} belgisi bar {{TILDE}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER IO}} with established symbol {{GRAVE ACCENT}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER IO}} белгісі бар {{GRAVE ACCENT}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER IO}} belgisi bar {{GRAVE ACCENT}} qaqtyǵysy.'
			}
		},
		AE01: { 
			1:{ 
				'en':'Conflict of {{QUOTATION MARK}} with established symbol {{DIGIT ONE}}.',
				'kz':'Белгіленген {{QUOTATION MARK}} белгісі бар {{DIGIT ONE}} қақтығысы.',
				'qz':'Belgilengen {{QUOTATION MARK}} belgisi bar {{DIGIT ONE}} qaqtyǵysy.'
			}
		},
		AE02: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER SCHWA}} with established symbol {{COMMERCIAL AT}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER SCHWA}} белгісі бар {{COMMERCIAL AT}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER SCHWA}} belgisi bar {{COMMERCIAL AT}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER SCHWA}} with established symbol {{DIGIT TWO}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER SCHWA}} белгісі бар {{DIGIT TWO}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER SCHWA}} belgisi bar {{DIGIT TWO}} qaqtyǵysy.'
			}
		},
		AE03: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I}} with established symbol {{NUMBER SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I}} белгісі бар {{NUMBER SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I}} belgisi bar {{NUMBER SIGN}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I}} with established symbol {{DIGIT THREE}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I}} белгісі бар {{DIGIT THREE}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I}} belgisi bar {{DIGIT THREE}} qaqtyǵysy.'
			}
		},
		AE04: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER EN WITH DESCENDER}} with established symbol {{DOLLAR SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER EN WITH DESCENDER}} белгісі бар {{DOLLAR SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER EN WITH DESCENDER}} belgisi bar {{DOLLAR SIGN}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER EN WITH DESCENDER}} with established symbol {{DIGIT FOUR}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER EN WITH DESCENDER}} белгісі бар {{DIGIT FOUR}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER EN WITH DESCENDER}} belgisi bar {{DIGIT FOUR}} qaqtyǵysy.'
			}
		},
		AE05: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER GHE WITH STROKE}} with established symbol {{PERCENT SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER GHE WITH STROKE}} белгісі бар {{PERCENT SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER GHE WITH STROKE}} belgisi bar {{PERCENT SIGN}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER GHE WITH STROKE}} with established symbol {{DIGIT FIVE}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER GHE WITH STROKE}} белгісі бар {{DIGIT FIVE}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER GHE WITH STROKE}} belgisi bar {{DIGIT FIVE}} qaqtyǵysy.'
			}
		},
		AE06: { 
			0:{ 
				'en':'Conflict of {{SEMICOLON}} with established symbol {{CIRCUMFLEX ACCENT}}.',
				'kz':'Белгіленген {{SEMICOLON}} белгісі бар {{CIRCUMFLEX ACCENT}} қақтығысы.',
				'qz':'Belgilengen {{SEMICOLON}} belgisi bar {{CIRCUMFLEX ACCENT}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{COMMA}} with established symbol {{DIGIT SIX}}.',
				'kz':'Белгіленген {{COMMA}} белгісі бар {{DIGIT SIX}} қақтығысы.',
				'qz':'Belgilengen {{COMMA}} belgisi bar {{DIGIT SIX}} qaqtyǵysy.'
			}
		},
		AE07: { 
			0:{ 
				'en':'Conflict of {{SEMICOLON}} with established symbol {{AMPERSAND}}.',
				'kz':'Белгіленген {{SEMICOLON}} белгісі бар {{AMPERSAND}} қақтығысы.',
				'qz':'Belgilengen {{SEMICOLON}} belgisi bar {{AMPERSAND}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{FULL STOP}} with established symbol {{DIGIT SEVEN}}.',
				'kz':'Белгіленген {{FULL STOP}} белгісі бар {{DIGIT SEVEN}} қақтығысы.',
				'qz':'Belgilengen {{FULL STOP}} belgisi bar {{DIGIT SEVEN}} qaqtyǵysy.'
			}
		},
		AE08: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER STRAIGHT U}} with established symbol {{ASTERISK}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER STRAIGHT U}} белгісі бар {{ASTERISK}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER STRAIGHT U}} belgisi bar {{ASTERISK}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER STRAIGHT U}} with established symbol {{DIGIT EIGHT}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER STRAIGHT U}} белгісі бар {{DIGIT EIGHT}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER STRAIGHT U}} belgisi bar {{DIGIT EIGHT}} qaqtyǵysy.'
			}
		},
		AE09: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER STRAIGHT U WITH STROKE}} with established symbol {{LEFT PARENTHESIS}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER STRAIGHT U WITH STROKE}} белгісі бар {{LEFT PARENTHESIS}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER STRAIGHT U WITH STROKE}} belgisi bar {{LEFT PARENTHESIS}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE}} with established symbol {{DIGIT NINE}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE}} белгісі бар {{DIGIT NINE}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE}} belgisi bar {{DIGIT NINE}} qaqtyǵysy.'
			}
		},
		AE10: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER KA WITH DESCENDER}} with established symbol {{RIGHT PARENTHESIS}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER KA WITH DESCENDER}} белгісі бар {{RIGHT PARENTHESIS}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER KA WITH DESCENDER}} belgisi bar {{RIGHT PARENTHESIS}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER KA WITH DESCENDER}} with established symbol {{DIGIT ZERO}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER KA WITH DESCENDER}} белгісі бар {{DIGIT ZERO}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER KA WITH DESCENDER}} belgisi bar {{DIGIT ZERO}} qaqtyǵysy.'
			}
		},
		AE11: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER BARRED O}} with established symbol {{LOW LINE}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER BARRED O}} белгісі бар {{LOW LINE}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER BARRED O}} belgisi bar {{LOW LINE}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER BARRED O}} with established symbol {{HYPHEN-MINUS}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER BARRED O}} белгісі бар {{HYPHEN-MINUS}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER BARRED O}} belgisi bar {{HYPHEN-MINUS}} qaqtyǵysy.'
			}
		},
		AE12: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER SHHA}} with established symbol {{PLUS SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER SHHA}} белгісі бар {{PLUS SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER SHHA}} belgisi bar {{PLUS SIGN}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER SHHA}} with established symbol {{EQUALS SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER SHHA}} белгісі бар {{EQUALS SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER SHHA}} belgisi bar {{EQUALS SIGN}} qaqtyǵysy.'
			}
		},
		AD11: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER HA}} with established symbol {{LEFT CURLY BRACKET}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER HA}} белгісі бар {{LEFT CURLY BRACKET}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER HA}} belgisi bar {{LEFT CURLY BRACKET}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER HA}} with established symbol {{LEFT SQUARE BRACKET}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER HA}} белгісі бар {{LEFT SQUARE BRACKET}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER HA}} belgisi bar {{LEFT SQUARE BRACKET}} qaqtyǵysy.'
			}
		},
		AD12: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER HARD SIGN}} with established symbol {{RIGHT CURLY BRACKET}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER HARD SIGN}} белгісі бар {{RIGHT CURLY BRACKET}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER HARD SIGN}} belgisi bar {{RIGHT CURLY BRACKET}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER HARD SIGN}} with established symbol {{RIGHT SQUARE BRACKET}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER HARD SIGN}} белгісі бар {{RIGHT SQUARE BRACKET}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER HARD SIGN}} belgisi bar {{RIGHT SQUARE BRACKET}} qaqtyǵysy.'
			}
		},
		BKSL: { 
			0:{ 
				'en':'Conflict of {{SOLIDUS}} with established symbol {{VERTICAL LINE}}.',
				'kz':'Белгіленген {{SOLIDUS}} белгісі бар {{VERTICAL LINE}} қақтығысы.',
				'qz':'Belgilengen {{SOLIDUS}} belgisi bar {{VERTICAL LINE}} qaqtyǵysy.'
			}
		},
		AC10: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER ZHE}} with established symbol {{COLON}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER ZHE}} белгісі бар {{COLON}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER ZHE}} belgisi bar {{COLON}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER ZHE}} with established symbol {{SEMICOLON}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER ZHE}} белгісі бар {{SEMICOLON}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER ZHE}} belgisi bar {{SEMICOLON}} qaqtyǵysy.'
			}
		},
		AC11: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER E}} with established symbol {{QUOTATION MARK}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER E}} белгісі бар {{QUOTATION MARK}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER E}} belgisi bar {{QUOTATION MARK}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER E}} with established symbol {{APOSTROPHE}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER E}} белгісі бар {{APOSTROPHE}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER E}} belgisi bar {{APOSTROPHE}} qaqtyǵysy.'
			}
		},
		AB08: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER BE}} with established symbol {{LESS-THAN SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER BE}} белгісі бар {{LESS-THAN SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER BE}} belgisi bar {{LESS-THAN SIGN}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER BE}} with established symbol {{COMMA}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER BE}} белгісі бар {{COMMA}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER BE}} belgisi bar {{COMMA}} qaqtyǵysy.'
			}
		},
		AB09: { 
			0:{ 
				'en':'Conflict of {{CYRILLIC CAPITAL LETTER YU}} with established symbol {{GREATER-THAN SIGN}}.',
				'kz':'Белгіленген {{CYRILLIC CAPITAL LETTER YU}} белгісі бар {{GREATER-THAN SIGN}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC CAPITAL LETTER YU}} belgisi bar {{GREATER-THAN SIGN}} qaqtyǵysy.'
			},
			1:{ 
				'en':'Conflict of {{CYRILLIC SMALL LETTER YU}} with established symbol {{FULL STOP}}.',
				'kz':'Белгіленген {{CYRILLIC SMALL LETTER YU}} белгісі бар {{FULL STOP}} қақтығысы.',
				'qz':'Belgilengen {{CYRILLIC SMALL LETTER YU}} belgisi bar {{FULL STOP}} qaqtyǵysy.'
			}
		},
		AB10: { 
			1:{ 
				'en':'Conflict of {{NUMERO SIGN}} with established symbol {{SOLIDUS}}.',
				'kz':'Белгіленген {{NUMERO SIGN}} белгісі бар {{SOLIDUS}} қақтығысы.',
				'qz':'Belgilengen {{NUMERO SIGN}} belgisi bar {{SOLIDUS}} qaqtyǵysy.'
			}
		},
	}
}

KeyView.keycodes = {
	evdev: {
		TLDE: 49,
		AE01: 10,
		AE02: 11,
		AE03: 12,
		AE04: 13,
		AE05: 14,
		AE06: 15,
		AE07: 16,
		AE08: 17,
		AE09: 18,
		AE10: 19,
		AE11: 20,
		AE12: 21,
		BKSP: 22,
		TAB: 23,
		AD01: 24,
		AD02: 25,
		AD03: 26,
		AD04: 27,
		AD05: 28,
		AD06: 29,
		AD07: 30,
		AD08: 31,
		AD09: 32,
		AD10: 33,
		AD11: 34,
		AD12: 35,
		BKSL: 51,
		RTRN: 36,
		CAPS: 66,
		AC01: 38,
		AC02: 39,
		AC03: 40,
		AC04: 41,
		AC05: 42,
		AC06: 43,
		AC07: 44,
		AC08: 45,
		AC09: 46,
		AC10: 47,
		AC11: 48,
		LFSH: 50,
		AB01: 52,
		AB02: 53,
		AB03: 54,
		AB04: 55,
		AB05: 56,
		AB06: 57,
		AB07: 58,
		AB08: 59,
		AB09: 60,
		AB10: 61,
		RTSH: 62,
		LALT: 64,
		LCTL: 37,
		SPCE: 65,
		RCTL: 105,
		RALT: 108,
		LWIN: 133,
		RWIN: 134,
		MENU: 135
	}
};
KeyView.geometries = {
	qwerty1: [{
		TLDE: {},
		AE01: {},
		AE02: {},
		AE03: {},
		AE04: {},
		AE05: {},
		AE06: {},
		AE07: {},
		AE08: {},
		AE09: {},
		AE10: {},
		AE11: {},
		AE12: {},
		BKSP: {
			special: true,
			name: "Backspace"
		}
	}, {
		TAB: {
			special: true,
			name: "Tab",
			width: 1.6
		},
		AD01: {},
		AD02: {},
		AD03: {},
		AD04: {},
		AD05: {},
		AD06: {},
		AD07: {},
		AD08: {},
		AD09: {},
		AD10: {},
		AD11: {},
		AD12: {},
		BKSL: {}
	}, {
		CAPS: {
			special: true,
			name: "CapsLock",
			width: 1.9
		},
		AC01: {},
		AC02: {},
		AC03: {},
		AC04: {},
		AC05: {},
		AC06: {},
		AC07: {},
		AC08: {},
		AC09: {},
		AC10: {},
		AC11: {},
		RTRN: {
			special: true,
			name: "Enter"
		}
	}, {
		LFSH: {
			special: true,
			name: "Shift",
			width: 2.38
		},
		AB01: {},
		AB02: {},
		AB03: {},
		AB04: {},
		AB05: {},
		AB06: {},
		AB07: {},
		AB08: {},
		AB09: {},
		AB10: {},
		RTSH: {
			special: true,
			name: "Shift"
		}
	}, {
		LCTL: {
			special: true,
			name: "Ctrl",
			width: 1.5
		},
		LWIN: {
			special: true,
			name: "Super",
			width: 1.2
		},
		LALT: {
			special: true,
			name: "Alt",
			width: 1.2
		},
		SPCE: {
			width: 6.3
		},
		RALT: {
			special: true,
			name: "AltGr",
			width: 1.2
		},
		RWIN: {
			special: true,
			name: "Super",
			width: 1.2
		},
		MENU: {
			special: true,
			name: "Menu",
			width: 1.2
		},
		RCTL: {
			special: true,
			name: "Ctrl"
		}
	}],
	qwerty2: [{
		TLDE: {},
		AE01: {},
		AE02: {},
		AE03: {},
		AE04: {},
		AE05: {},
		AE06: {},
		AE07: {},
		AE08: {},
		AE09: {},
		AE10: {},
		AE11: {},
		AE12: {},
		BKSP: {
			special: true,
			name: "Backspace"
		}
	}, {
		TAB: {
			special: true,
			name: "Tab",
			width: 1.6
		},
		AD01: {},
		AD02: {},
		AD03: {},
		AD04: {},
		AD05: {},
		AD06: {},
		AD07: {},
		AD08: {},
		AD09: {},
		AD10: {},
		AD11: {},
		AD12: {},
		RTRN: {
			special: true,
			merged: "top",
			name: "Enter"
		}
	}, {
		CAPS: {
			special: true,
			name: "CapsLock",
			width: 1.9
		},
		AC01: {},
		AC02: {},
		AC03: {},
		AC04: {},
		AC05: {},
		AC06: {},
		AC07: {},
		AC08: {},
		AC09: {},
		AC10: {},
		AC11: {},
		BKSL: {
			merged: "beneath"
		},
		RTRN: {
			special: true,
			merged: "bottom"
		}
	}, {
		LFSH: {
			special: true,
			name: "Shift",
			width: 2.38
		},
		AB01: {},
		AB02: {},
		AB03: {},
		AB04: {},
		AB05: {},
		AB06: {},
		AB07: {},
		AB08: {},
		AB09: {},
		AB10: {},
		RTSH: {
			special: true,
			name: "Shift"
		}
	}, {
		LCTL: {
			special: true,
			name: "Ctrl",
			width: 1.5
		},
		LWIN: {
			special: true,
			name: "Win",
			width: 1.2
		},
		LALT: {
			special: true,
			name: "Alt",
			width: 1.2
		},
		SPCE: {
			width: 6.3
		},
		RALT: {
			special: true,
			name: "AltGr",
			width: 1.2
		},
		RWIN: {
			special: true,
			name: "Win",
			width: 1.2
		},
		MENU: {
			special: true,
			name: "Menu",
			width: 1.2
		},
		RCTL: {
			special: true,
			name: "Ctrl"
		}
	}],
	qwerty3: [{
		TLDE: {},
		AE01: {},
		AE02: {},
		AE03: {},
		AE04: {},
		AE05: {},
		AE06: {},
		AE07: {},
		AE08: {},
		AE09: {},
		AE10: {},
		AE11: {},
		AE12: {},
		BKSL: {},
		BKSP: {
			special: true,
			name: "←"
		}
	}, {
		TAB: {
			special: true,
			name: "Tab",
			width: 1.6
		},
		AD01: {},
		AD02: {},
		AD03: {},
		AD04: {},
		AD05: {},
		AD06: {},
		AD07: {},
		AD08: {},
		AD09: {},
		AD10: {},
		AD11: {},
		AD12: {},
		RTRN: {
			special: true,
			merged: "top"
		}
	}, {
		CAPS: {
			special: true,
			name: "CapsLock",
			width: 1.9
		},
		AC01: {},
		AC02: {},
		AC03: {},
		AC04: {},
		AC05: {},
		AC06: {},
		AC07: {},
		AC08: {},
		AC09: {},
		AC10: {},
		AC11: {},
		RTRN: {
			special: true,
			merged: "bottom",
			name: "Enter"
		}
	}, {
		LFSH: {
			special: true,
			name: "Shift",
			width: 2.38
		},
		AB01: {},
		AB02: {},
		AB03: {},
		AB04: {},
		AB05: {},
		AB06: {},
		AB07: {},
		AB08: {},
		AB09: {},
		AB10: {},
		RTSH: {
			special: true,
			name: "Shift"
		}
	}, {
		LCTL: {
			special: true,
			name: "Ctrl",
			width: 1.5
		},
		LWIN: {
			special: true,
			name: "Win",
			width: 1.2
		},
		LALT: {
			special: true,
			name: "Alt",
			width: 1.2
		},
		SPCE: {
			width: 6.3
		},
		RALT: {
			special: true,
			name: "AltGr",
			width: 1.2
		},
		RWIN: {
			special: true,
			name: "Win",
			width: 1.2
		},
		MENU: {
			special: true,
			name: "Menu",
			width: 1.2
		},
		RCTL: {
			special: true,
			name: "Ctrl"
		}
	}]
};
KeyView.symbols = {
	us: {
		TLDE: ["grave", "asciitilde"],
		AE01: ["1", "exclam"],
		AE02: ["2", "at"],
		AE03: ["3", "numbersign"],
		AE04: ["4", "dollar"],
		AE05: ["5", "percent"],
		AE06: ["6", "asciicircum"],
		AE07: ["7", "ampersand"],
		AE08: ["8", "asterisk"],
		AE09: ["9", "parenleft"],
		AE10: ["0", "parenright"],
		AE11: ["minus", "underscore"],
		AE12: ["equal", "plus"],
		AD01: ["q", "Q"],
		AD02: ["w", "W"],
		AD03: ["e", "E"],
		AD04: ["r", "R"],
		AD05: ["t", "T"],
		AD06: ["y", "Y"],
		AD07: ["u", "U"],
		AD08: ["i", "I"],
		AD09: ["o", "O"],
		AD10: ["p", "P"],
		AD11: ["bracketleft", "braceleft"],
		AD12: ["bracketright", "braceright"],
		AC01: ["a", "A"],
		AC02: ["s", "S"],
		AC03: ["d", "D"],
		AC04: ["f", "F"],
		AC05: ["g", "G"],
		AC06: ["h", "H"],
		AC07: ["j", "J"],
		AC08: ["k", "K"],
		AC09: ["l", "L"],
		AC10: ["semicolon", "colon"],
		AC11: ["apostrophe", "quotedbl"],
		AB01: ["z", "Z"],
		AB02: ["x", "X"],
		AB03: ["c", "C"],
		AB04: ["v", "V"],
		AB05: ["b", "B"],
		AB06: ["n", "N"],
		AB07: ["m", "M"],
		AB08: ["comma", "less"],
		AB09: ["period", "greater"],
		AB10: ["slash", "question"],
		BKSL: ["backslash", "bar"],
		SPCE: ["space", "space"]
	},
	latin: {
		AE01: ["1", "exclam", "onesuperior", "exclamdown"],
		AE02: ["2", "at", "twosuperior", "oneeighth"],
		AE03: ["3", "numbersign", "threesuperior", "sterling"],
		AE04: ["4", "dollar", "onequarter", "dollar"],
		AE05: ["5", "percent", "onehalf", "threeeighths"],
		AE06: ["6", "asciicircum", "threequarters", "fiveeighths"],
		AE07: ["7", "ampersand", "braceleft", "seveneighths"],
		AE08: ["8", "asterisk", "bracketleft", "trademark"],
		AE09: ["9", "parenleft", "bracketright", "plusminus"],
		AE10: ["0", "parenright", "braceright", "degree"],
		AE11: ["minus", "underscore", "backslash", "questiondown"],
		AE12: ["equal", "plus", "dead_cedilla", "dead_ogonek"],
		AD01: ["q", "Q", "at", "Greek_OMEGA"],
		AD02: ["w", "W", "lstroke", "Lstroke"],
		AD03: ["e", "E", "e", "E"],
		AD04: ["r", "R", "paragraph", "registered"],
		AD05: ["t", "T", "tslash", "Tslash"],
		AD06: ["y", "Y", "leftarrow", "yen"],
		AD07: ["u", "U", "downarrow", "uparrow"],
		AD08: ["i", "I", "rightarrow", "idotless"],
		AD09: ["o", "O", "oslash", "Ooblique"],
		AD10: ["p", "P", "thorn", "THORN"],
		AD11: ["bracketleft", "braceleft", "dead_diaeresis", "dead_abovering"],
		AD12: ["bracketright", "braceright", "dead_tilde", "dead_macron"],
		AC01: ["a", "A", "ae", "AE"],
		AC02: ["s", "S", "ssharp", "section"],
		AC03: ["d", "D", "eth", "ETH"],
		AC04: ["f", "F", "dstroke", "ordfeminine"],
		AC05: ["g", "G", "eng", "ENG"],
		AC06: ["h", "H", "hstroke", "Hstroke"],
		AC07: ["j", "J", "j", "J"],
		AC08: ["k", "K", "kra", "ampersand"],
		AC09: ["l", "L", "lstroke", "Lstroke"],
		AC10: ["semicolon", "colon", "dead_acute", "dead_doubleacute"],
		AC11: ["apostrophe", "quotedbl", "dead_circumflex", "dead_caron"],
		TLDE: ["grave", "asciitilde", "notsign", "notsign"],
		BKSL: ["backslash", "bar", "dead_grave", "dead_breve"],
		AB01: ["z", "Z", "guillemotleft", "less"],
		AB02: ["x", "X", "guillemotright", "greater"],
		AB03: ["c", "C", "cent", "copyright"],
		AB04: ["v", "V", "leftdoublequotemark", "leftsinglequotemark"],
		AB05: ["b", "B", "rightdoublequotemark", "rightsinglequotemark"],
		AB06: ["n", "N", "n", "N"],
		AB07: ["m", "M", "mu", "masculine"],
		AB08: ["comma", "less", "horizconnector", "multiply"],
		AB09: ["period", "greater", "periodcentered", "division"],
		AB10: ["slash", "question", "dead_belowdot", "dead_abovedot"],
		SPCE: ["space", "space", "space", "space"]
	},
	kazakh_latin: {
		include: "latin",
		TLDE: [ "parenleft",               "parenright" ],
		AE01: [ "quotedbl",                "exclam" ],
		AE06: [ "comma",                   "semicolon" ],
		AE07: [ "period",                  "colon" ],
		BKSL: [ "backslash",               "slash" ],
		AB10: [ "numerosign",              "question" ],
		LSGT: [ "less",                    "greater", "bar", "brokenbar" ],

		AE02: [ "aacute",                  "Aacute" ],
		AE03: [ "iacute",                  "Iacute" ],
		AE04: [ "nacute",                  "Nacute" ],
		AE05: [ "U+01F5",                   "U+01F4" ], 
		AE08: [ "uacute",                  "Uacute" ],
		AE09: [ "yacute",                  "Yacute" ],
		AE10: [ "oacute",                  "Oacute" ], 
		AE11: [ "sacute",                  "Sacute" ], 
		AE12: [ "cacute",                  "Cacute" ], 

		AD01: [ "q",                       "Q" ],
		AD02: [ "w",                       "W" ],
		AD03: [ "e",                       "E" ],
		AD04: [ "r",                       "R" ],
		AD05: [ "t",                       "T" ],
		AD06: [ "y",                       "Y" ],
		AD07: [ "u",                       "U" ],
		AD08: [ "i",                       "I" ],
		AD09: [ "o",                       "O" ],
		AD10: [ "p",                       "P" ],
		AC01: [ "a",                       "A" ],
		AC02: [ "s",                       "S" ],
		AC03: [ "d",                       "D" ],
		AC04: [ "f",                       "F" ],
		AC05: [ "g",                       "G" ],
		AC06: [ "h",                       "H" ],
		AC07: [ "j",                       "J" ],
		AC08: [ "k",                       "K" ],
		AC09: [ "l",                       "L" ],
		AB01: [ "z",                       "Z" ],
		AB02: [ "x",                       "X" ],
		AB03: [ "c",                       "C" ],
		AB04: [ "v",                       "M" ],
		AB05: [ "b",                       "B" ],
		AB06: [ "n",                       "N" ],
		AB07: [ "m",                       "M" ]
	},
	qazaq_intl: {
		
		TLDE: [        "acute",      "asciitilde",                "acute",              "NoSymbol" ],
		AE01: [            "1",          "exclam",           "exclamdown",           "onesuperior" ],
		AE02: [            "2",              "at",          "twosuperior",      "dead_doubleacute" ],
		AE03: [            "3",      "numbersign",        "threesuperior",           "dead_macron" ],
		AE04: [            "4",          "dollar",             "currency",              "sterling" ],
		AE05: [            "5",         "percent",             "EuroSign",          "dead_cedilla" ],
		AE06: [            "6",     "asciicircum",           "onequarter",           "asciicircum" ],
		AE07: [            "7",       "ampersand",              "onehalf",             "dead_horn" ],
		AE08: [            "8",        "asterisk",        "threequarters",           "dead_ogonek" ],
		AE09: [            "9",       "parenleft",  "leftsinglequotemark",            "dead_breve" ],
		AE10: [            "0",      "parenright", "rightsinglequotemark",        "dead_abovering" ],
		AE11: [        "minus",      "underscore",                  "yen",         "dead_belowdot" ],
		AE12: [        "equal",            "plus",             "multiply",              "division" ],

		AD01: [            "q",               "Q",           "adiaeresis",            "Adiaeresis" ],
		AD02: [            "w",               "W",                "aring",                 "Aring" ],
		AD03: [            "e",               "E",               "eacute",                "Eacute" ],
		AD04: [            "r",               "R",           "registered",             "copyright" ],
		AD05: [            "t",               "T",            "TengeSign",              "NoSymbol" ],
		AD06: [            "y",               "Y",               "yacute",                "Yacute" ],
		AD07: [            "u",               "U",               "uacute",                "Uacute" ],
		AD08: [     "idotless",               "I",               "iacute",                "Iacute" ], 
		AD09: [            "o",               "O",               "oacute",                "Oacute" ],
		AD10: [            "p",               "P",           "odiaeresis",            "Odiaeresis" ],
		AD11: [  "bracketleft",       "braceleft",               "U+2039",         "guillemotleft" ],
		AD12: [ "bracketright",      "braceright",               "U+203A",        "guillemotright" ],

		AC01: [            "a",               "A",               "aacute",                "Aacute" ],
		AC02: [            "s",               "S",               "sacute",                "Sacute" ],
		AC03: [            "d",               "D"                                                  ],
		AC04: [            "f",               "F"                                                  ],
		AC05: [            "g",               "G",               "U+01F5",                "U+01F4" ],
		AC06: [            "h",               "H"                                                  ],
		AC07: [            "j",               "J"                                                  ],
		AC08: [            "k",               "K"                                                  ],
		AC09: [            "l",               "L"                                                  ],
		AC10: [    "semicolon",           "colon",           "dead_acute",            "dead_acute" ],
		AC11: [   "apostrophe",        "quotedbl", "rightsinglequotemark",  "rightdoublequotemark" ],

		BKSL: [    "backslash",             "bar",             "NoSymbol",             "paragraph" ],
		AB01: [            "z",               "Z",                   "ae",                    "AE" ],
		AB02: [            "x",               "X",                    "x",                     "X" ],
		AB03: [            "c",               "C",               "cacute",                "Cacute" ],
		AB04: [            "v",               "V",                    "v",                     "V" ],
		AB05: [            "b",               "B",                    "b",                     "B" ],
		AB06: [            "n",               "N",               "nacute",                "Nacute" ],
		AB07: [            "m",               "M",                   "mu",                    "mu" ],
		AB08: [        "comma",            "less",   "singlelowquotemark",    "doublelowquotemark" ],
		AB09: [       "period",         "greater",             "ellipsis",        "periodcentered" ],
		AB10: [        "slash",        "question",               "U+2116",          "questiondown" ],
		SPCE: [        "space",           "space",                "space",                  "space"]

	},
	qazaq_basic: {

		TLDE: [        "grave",      "asciitilde",             "NoSymbol",               "NoSymbol"],
		AE01: [            "1",          "exclam",             "NoSymbol",               "NoSymbol"],
		AE02: [            "2",              "at",             "NoSymbol",               "NoSymbol"],
		AE03: [            "3",      "numbersign",             "NoSymbol",               "NoSymbol"],
		AE04: [            "4",          "dollar",             "NoSymbol",               "NoSymbol"],
		AE05: [            "5",         "percent",             "EuroSign",               "NoSymbol"],
		AE06: [            "6",     "asciicircum",             "NoSymbol",               "NoSymbol"],
		AE07: [            "7",       "ampersand",             "NoSymbol",               "NoSymbol"],
		AE08: [            "8",        "asterisk",             "NoSymbol",               "NoSymbol"],
		AE09: [            "9",       "parenleft",             "NoSymbol",               "NoSymbol"],
		AE10: [            "0",      "parenright",             "NoSymbol",               "NoSymbol"],
		AE11: [        "minus",      "underscore",                  "yen",               "NoSymbol"],
		AE12: [        "equal",            "plus",             "NoSymbol",               "NoSymbol"],

		AD01: [            "q",               "Q",             "NoSymbol",               "NoSymbol"],
		AD02: [            "w",               "W",             "NoSymbol",               "NoSymbol"],
		AD03: [            "e",               "E",             "NoSymbol",               "NoSymbol"],
		AD04: [            "r",               "R",             "NoSymbol",               "NoSymbol"],
		AD05: [            "t",               "T",            "TengeSign",               "NoSymbol"],
		AD06: [            "y",               "Y",               "yacute",                "Yacute" ],
		AD07: [            "u",               "U",               "uacute",                "Uacute" ],
		AD08: [            "i",               "I",             "idotless",                 "U+0130"], 
		AD09: [            "o",               "O",               "oacute",                "Oacute" ],
		AD10: [            "p",               "P",             "NoSymbol",               "NoSymbol"],
		AD11: [  "bracketleft",       "braceleft",             "NoSymbol",               "NoSymbol"],
		AD12: [ "bracketright",      "braceright",             "NoSymbol",               "NoSymbol"],

		AC01: [            "a",               "A",               "aacute",                "Aacute" ],
		AC02: [            "s",               "S",               "sacute",                "Sacute" ],
		AC03: [            "d",               "D",             "NoSymbol",               "NoSymbol"],
		AC04: [            "f",               "F",             "NoSymbol",               "NoSymbol"],
		AC05: [            "g",               "G",               "U+01F5",                "U+01F4" ],
		AC06: [            "h",               "H",             "NoSymbol",               "NoSymbol"],
		AC07: [            "j",               "J",             "NoSymbol",               "NoSymbol"],
		AC08: [            "k",               "K",             "NoSymbol",               "NoSymbol"],
		AC09: [            "l",               "L",             "NoSymbol",               "NoSymbol"],
		AC10: [    "semicolon",           "colon",             "NoSymbol",               "NoSymbol"],
		AC11: [   "apostrophe",        "quotedbl",             "NoSymbol",               "NoSymbol"],

		BKSL: [    "backslash",             "bar",             "NoSymbol",               "NoSymbol"],
		AB01: [            "z",               "Z",             "NoSymbol",               "NoSymbol"],
		AB02: [            "x",               "X",             "NoSymbol",               "NoSymbol"],
		AB03: [            "c",               "C",               "cacute",                "Cacute" ],
		AB04: [            "v",               "V",             "NoSymbol",               "NoSymbol"],
		AB05: [            "b",               "B",             "NoSymbol",               "NoSymbol"],
		AB06: [            "n",               "N",               "nacute",                "Nacute" ],
		AB07: [            "m",               "M",             "NoSymbol",               "NoSymbol"],
		AB08: [        "comma",            "less",             "NoSymbol",               "NoSymbol"],
		AB09: [       "period",         "greater",             "NoSymbol",               "NoSymbol"],
		AB10: [        "slash",        "question",               "U+2116",               "NoSymbol"],
		SPCE: [        "space",           "space",                "space",                  "space"]
		
	},
	qazaq_old:{

		TLDE: [ "Cyrillic_io",             "Cyrillic_IO",             "NoSymbol",      "NoSymbol"],
		AE01: [ "quotedbl",                "exclam",                  "NoSymbol",      "NoSymbol"],
		AE02: [ "Cyrillic_schwa",          "Cyrillic_SCHWA",          "NoSymbol",      "NoSymbol"],
		AE03: [ "Ukrainian_i",             "Ukrainian_I",             "NoSymbol",      "NoSymbol"],
		AE04: [ "Cyrillic_en_descender",   "Cyrillic_EN_descender",   "NoSymbol",      "NoSymbol"],
		AE05: [ "Cyrillic_ghe_bar",        "Cyrillic_GHE_bar",        "NoSymbol",      "NoSymbol"],
		AE06: [ "comma",                   "semicolon",               "NoSymbol",      "NoSymbol"],
		AE07: [ "period",                  "colon",                   "NoSymbol",      "NoSymbol"],
		AE08: [ "Cyrillic_u_straight",     "Cyrillic_U_straight",     "NoSymbol",      "NoSymbol"],
		AE09: [ "Cyrillic_u_straight_bar", "Cyrillic_U_straight_bar", "NoSymbol",      "NoSymbol"],
		AE10: [ "Cyrillic_ka_descender",   "Cyrillic_KA_descender",   "NoSymbol",      "NoSymbol"],
		AE11: [ "Cyrillic_o_bar",          "Cyrillic_O_bar",          "NoSymbol",      "NoSymbol"],
		AE12: [ "Cyrillic_shha",           "Cyrillic_SHHA",           "NoSymbol",      "NoSymbol"],
		BKSL: [ "backslash",               "slash",                   "NoSymbol",      "NoSymbol"],
		AD01: [ "Cyrillic_shorti",         "Cyrillic_SHORTI",         "NoSymbol",      "NoSymbol"],
		AD02: [ "Cyrillic_tse",            "Cyrillic_TSE",            "NoSymbol",      "NoSymbol"],
		AD03: [ "Cyrillic_u",              "Cyrillic_U",              "NoSymbol",      "NoSymbol"],
		AD04: [ "Cyrillic_ka",             "Cyrillic_KA",             "NoSymbol",      "NoSymbol"], 
		AD05: [ "Cyrillic_ie",             "Cyrillic_IE",             "NoSymbol",      "NoSymbol"],
		AD06: [ "Cyrillic_en",             "Cyrillic_EN",             "NoSymbol",      "NoSymbol"],
		AD07: [ "Cyrillic_ghe",            "Cyrillic_GHE",            "NoSymbol",      "NoSymbol"],
		AD08: [ "Cyrillic_sha",            "Cyrillic_SHA",            "NoSymbol",      "NoSymbol"],
		AD09: [ "Cyrillic_shcha",          "Cyrillic_SHCHA",        "NoSymbol",      "NoSymbol"],
		AD10: [ "Cyrillic_ze",             "Cyrillic_ZE",             "NoSymbol",      "NoSymbol"],
		AD11: [ "Cyrillic_ha",             "Cyrillic_HA",             "NoSymbol",      "NoSymbol"],
		AD12: [ "Cyrillic_hardsign",       "Cyrillic_HARDSIGN",       "NoSymbol",      "NoSymbol"],
		AC01: [ "Cyrillic_ef",             "Cyrillic_EF",             "NoSymbol",      "NoSymbol"],
		AC02: [ "Cyrillic_yeru",           "Cyrillic_YERU",           "NoSymbol",      "NoSymbol"],
		AC03: [ "Cyrillic_ve",             "Cyrillic_VE",			  "NoSymbol",      "NoSymbol"],
		AC04: [ "Cyrillic_a",              "Cyrillic_A",              "NoSymbol",      "NoSymbol"],
		AC05: [ "Cyrillic_pe",             "Cyrillic_PE",             "NoSymbol",      "NoSymbol"],
		AC06: [ "Cyrillic_er",             "Cyrillic_ER",             "NoSymbol",      "NoSymbol"],
		AC07: [ "Cyrillic_o",              "Cyrillic_O",              "NoSymbol",      "NoSymbol"],
		AC08: [ "Cyrillic_el",             "Cyrillic_EL",             "NoSymbol",      "NoSymbol"],
		AC09: [ "Cyrillic_de",             "Cyrillic_DE",             "NoSymbol",      "NoSymbol"],
		AC10: [ "Cyrillic_zhe",            "Cyrillic_ZHE",            "NoSymbol",      "NoSymbol"],
		AC11: [ "Cyrillic_e",              "Cyrillic_E",              "NoSymbol",      "NoSymbol"],
		AB01: [ "Cyrillic_ya",             "Cyrillic_YA",             "NoSymbol",      "NoSymbol"],
		AB02: [ "Cyrillic_che",            "Cyrillic_CHE",            "NoSymbol",      "NoSymbol"],
		AB03: [ "Cyrillic_es",             "Cyrillic_ES",             "NoSymbol",      "NoSymbol"],
		AB04: [ "Cyrillic_em",             "Cyrillic_EM",             "NoSymbol",      "NoSymbol"],
		AB05: [ "Cyrillic_i",     "Cyrillic_I",     "NoSymbol",      "NoSymbol"],
		AB06: [ "Cyrillic_te",             "Cyrillic_TE",             "NoSymbol",      "NoSymbol"],
		AB07: [ "Cyrillic_softsign",       "Cyrillic_SOFTSIGN",       "NoSymbol",      "NoSymbol"],
		AB08: [ "Cyrillic_be",             "Cyrillic_BE",             "NoSymbol",      "NoSymbol"],
		AB09: [ "Cyrillic_yu",             "Cyrillic_YU",             "NoSymbol",      "NoSymbol"],
		AB10: [ "U+2116",                  "question",                "NoSymbol",      "NoSymbol"],
		SPCE: [        "space",           "space",                       "space",         "space"]
	}
};
KeyView.keysyms = {
	space: "0020",
	exclam: "0021",
	quotedbl: "0022",
	numbersign: "0023",
	dollar: "0024",
	percent: "0025",
	ampersand: "0026",
	apostrophe: "0027",
	parenleft: "0028",
	parenright: "0029",
	asterisk: "002A",
	plus: "002B",
	comma: "002C",
	minus: "002D",
	period: "002E",
	slash: "002F",
	0: "0030",
	1: "0031",
	2: "0032",
	3: "0033",
	4: "0034",
	5: "0035",
	6: "0036",
	7: "0037",
	8: "0038",
	9: "0039",
	colon: "003A",
	semicolon: "003B",
	less: "003C",
	equal: "003D",
	greater: "003E",
	question: "003F",
	at: "0040",
	A: "0041",
	B: "0042",
	C: "0043",
	D: "0044",
	E: "0045",
	F: "0046",
	G: "0047",
	H: "0048",
	I: "0049",
	J: "004A",
	K: "004B",
	L: "004C",
	M: "004D",
	N: "004E",
	O: "004F",
	P: "0050",
	Q: "0051",
	R: "0052",
	S: "0053",
	T: "0054",
	U: "0055",
	V: "0056",
	W: "0057",
	X: "0058",
	Y: "0059",
	Z: "005A",
	bracketleft: "005B",
	backslash: "005C",
	bracketright: "005D",
	asciicircum: "005E",
	underscore: "005F",
	grave: "0060",
	a: "0061",
	b: "0062",
	c: "0063",
	d: "0064",
	e: "0065",
	f: "0066",
	g: "0067",
	h: "0068",
	i: "0069",
	j: "006A",
	k: "006B",
	l: "006C",
	m: "006D",
	n: "006E",
	o: "006F",
	p: "0070",
	q: "0071",
	r: "0072",
	s: "0073",
	t: "0074",
	u: "0075",
	v: "0076",
	w: "0077",
	x: "0078",
	y: "0079",
	z: "007A",
	braceleft: "007B",
	bar: "007C",
	braceright: "007D",
	asciitilde: "007E",
	nobreakspace: "00A0",
	exclamdown: "00A1",
	cent: "00A2",
	sterling: "00A3",
	currency: "00A4",
	yen: "00A5",
	brokenbar: "00A6",
	section: "00A7",
	diaeresis: "00A8",
	copyright: "00A9",
	ordfeminine: "00AA",
	guillemotleft: "00AB",
	notsign: "00AC",
	hyphen: "00AD",
	registered: "00AE",
	macron: "00AF",
	degree: "00B0",
	plusminus: "00B1",
	twosuperior: "00B2",
	threesuperior: "00B3",
	acute: "00B4",
	mu: "00B5",
	paragraph: "00B6",
	periodcentered: "00B7",
	cedilla: "00B8",
	onesuperior: "00B9",
	masculine: "00BA",
	guillemotright: "00BB",
	onequarter: "00BC",
	onehalf: "00BD",
	threequarters: "00BE",
	questiondown: "00BF",
	Agrave: "00C0",
	Aacute: "00C1",
	Acircumflex: "00C2",
	Atilde: "00C3",
	Adiaeresis: "00C4",
	Aring: "00C5",
	AE: "00C6",
	Ccedilla: "00C7",
	Egrave: "00C8",
	Eacute: "00C9",
	Ecircumflex: "00CA",
	Ediaeresis: "00CB",
	Igrave: "00CC",
	Iacute: "00CD",
	Icircumflex: "00CE",
	Idiaeresis: "00CF",
	ETH: "00D0",
	Ntilde: "00D1",
	Ograve: "00D2",
	Oacute: "00D3",
	Ocircumflex: "00D4",
	Otilde: "00D5",
	Odiaeresis: "00D6",
	multiply: "00D7",
	Oslash: "00D8",
	Ooblique: "00D8",
	Ugrave: "00D9",
	Uacute: "00DA",
	Ucircumflex: "00DB",
	Udiaeresis: "00DC",
	Yacute: "00DD",
	THORN: "00DE",
	ssharp: "00DF",
	agrave: "00E0",
	aacute: "00E1",
	acircumflex: "00E2",
	atilde: "00E3",
	adiaeresis: "00E4",
	aring: "00E5",
	ae: "00E6",
	ccedilla: "00E7",
	egrave: "00E8",
	eacute: "00E9",
	ecircumflex: "00EA",
	ediaeresis: "00EB",
	igrave: "00EC",
	iacute: "00ED",
	icircumflex: "00EE",
	idiaeresis: "00EF",
	eth: "00F0",
	ntilde: "00F1",
	ograve: "00F2",
	oacute: "00F3",
	ocircumflex: "00F4",
	otilde: "00F5",
	odiaeresis: "00F6",
	division: "00F7",
	oslash: "00F8",
	ooblique: "00F8",
	ugrave: "00F9",
	uacute: "00FA",
	ucircumflex: "00FB",
	udiaeresis: "00FC",
	yacute: "00FD",
	thorn: "00FE",
	ydiaeresis: "00FF",
	Aogonek: "0104",
	breve: "02D8",
	Lstroke: "0141",
	Lcaron: "013D",
	Sacute: "015A",
	Scaron: "0160",
	Scedilla: "015E",
	Tcaron: "0164",
	Zacute: "0179",
	Zcaron: "017D",
	Zabovedot: "017B",
	aogonek: "0105",
	ogonek: "02DB",
	lstroke: "0142",
	lcaron: "013E",
	sacute: "015B",
	caron: "02C7",
	scaron: "0161",
	scedilla: "015F",
	tcaron: "0165",
	zacute: "017A",
	doubleacute: "02DD",
	zcaron: "017E",
	zabovedot: "017C",
	Racute: "0154",
	Abreve: "0102",
	Lacute: "0139",
	Cacute: "0106",
	Ccaron: "010C",
	Eogonek: "0118",
	Ecaron: "011A",
	Dcaron: "010E",
	Dstroke: "0110",
	Nacute: "0143",
	Ncaron: "0147",
	Odoubleacute: "0150",
	Rcaron: "0158",
	Uring: "016E",
	Udoubleacute: "0170",
	Tcedilla: "0162",
	racute: "0155",
	abreve: "0103",
	lacute: "013A",
	cacute: "0107",
	ccaron: "010D",
	eogonek: "0119",
	ecaron: "011B",
	dcaron: "010F",
	dstroke: "0111",
	nacute: "0144",
	ncaron: "0148",
	odoubleacute: "0151",
	rcaron: "0159",
	uring: "016F",
	udoubleacute: "0171",
	tcedilla: "0163",
	abovedot: "02D9",
	Hstroke: "0126",
	Hcircumflex: "0124",
	Iabovedot: "0130",
	Gbreve: "011E",
	Jcircumflex: "0134",
	hstroke: "0127",
	hcircumflex: "0125",
	idotless: "0131",
	gbreve: "011F",
	jcircumflex: "0135",
	Cabovedot: "010A",
	Ccircumflex: "0108",
	Gabovedot: "0120",
	Gcircumflex: "011C",
	Ubreve: "016C",
	Scircumflex: "015C",
	cabovedot: "010B",
	ccircumflex: "0109",
	gabovedot: "0121",
	gcircumflex: "011D",
	ubreve: "016D",
	scircumflex: "015D",
	kra: "0138",
	Rcedilla: "0156",
	Itilde: "0128",
	Lcedilla: "013B",
	Emacron: "0112",
	Gcedilla: "0122",
	Tslash: "0166",
	rcedilla: "0157",
	itilde: "0129",
	lcedilla: "013C",
	emacron: "0113",
	gcedilla: "0123",
	tslash: "0167",
	ENG: "014A",
	eng: "014B",
	Amacron: "0100",
	Iogonek: "012E",
	Eabovedot: "0116",
	Imacron: "012A",
	Ncedilla: "0145",
	Omacron: "014C",
	Kcedilla: "0136",
	Uogonek: "0172",
	Utilde: "0168",
	Umacron: "016A",
	amacron: "0101",
	iogonek: "012F",
	eabovedot: "0117",
	imacron: "012B",
	ncedilla: "0146",
	omacron: "014D",
	kcedilla: "0137",
	uogonek: "0173",
	utilde: "0169",
	umacron: "016B",
	Wcircumflex: "0174",
	wcircumflex: "0175",
	Ycircumflex: "0176",
	ycircumflex: "0177",
	Babovedot: "1E02",
	babovedot: "1E03",
	Dabovedot: "1E0A",
	dabovedot: "1E0B",
	Fabovedot: "1E1E",
	fabovedot: "1E1F",
	Mabovedot: "1E40",
	mabovedot: "1E41",
	Pabovedot: "1E56",
	pabovedot: "1E57",
	Sabovedot: "1E60",
	sabovedot: "1E61",
	Tabovedot: "1E6A",
	tabovedot: "1E6B",
	Wgrave: "1E80",
	wgrave: "1E81",
	Wacute: "1E82",
	wacute: "1E83",
	Wdiaeresis: "1E84",
	wdiaeresis: "1E85",
	Ygrave: "1EF2",
	ygrave: "1EF3",
	OE: "0152",
	oe: "0153",
	Ydiaeresis: "0178",
	dead_grave: "0300",
	dead_acute: "0301",
	dead_circumflex: "0302",
	dead_tilde: "0303",
	dead_macron: "0304",
	dead_breve: "0306",
	dead_abovedot: "0307",
	dead_diaeresis: "0308",
	dead_abovering: "030A",
	dead_doubleacute: "030B",
	dead_caron: "030C",
	dead_cedilla: "0327",
	dead_ogonek: "0328",
	dead_belowdot: "0323",
	dead_stroke: "0335",
	dead_doublegrave: "030F",
	dead_belowcomma: "0326",
	Greek_OMEGA: "03A9",
	Greek_pi: "03C0",
	lessthanequal: "2264",
	notequal: "2260",
	greaterthanequal: "2265",
	integral: "222B",
	therefore: "2234",
	variation: "221D",
	infinity: "221E",
	nabla: "2207",
	approximate: "223C",
	similarequal: "2243",
	ifonlyif: "21D4",
	implies: "21D2",
	identical: "2261",
	radical: "221A",
	includedin: "2282",
	includes: "2283",
	intersection: "2229",
	union: "222A",
	logicaland: "2227",
	logicalor: "2228",
	partialderivative: "2202",
	"function": "0192",
	leftarrow: "2190",
	uparrow: "2191",
	rightarrow: "2192",
	downarrow: "2193",
	horizconnector: "2500",
	emdash: "2014",
	endash: "2013",
	signifblank: "2423",
	ellipsis: "2026",
	doubbaselinedot: "2025",
	onethird: "2153",
	twothirds: "2154",
	onefifth: "2155",
	twofifths: "2156",
	threefifths: "2157",
	fourfifths: "2158",
	onesixth: "2159",
	fivesixths: "215A",
	careof: "2105",
	figdash: "2012",
	leftanglebracket: "27E8",
	decimalpoint: "002E",
	rightanglebracket: "27E9",
	oneeighth: "215B",
	threeeighths: "215C",
	fiveeighths: "215D",
	seveneighths: "215E",
	trademark: "2122",
	leftsinglequotemark: "2018",
	rightsinglequotemark: "2019",
	leftdoublequotemark: "201C",
	rightdoublequotemark: "201D",
	prescription: "211E",
	minutes: "2032",
	seconds: "2033",
	singlelowquotemark: "201A",
	doublelowquotemark: "201E",
	SCHWA: "018F",
	schwa: "0259",
	EuroSign: "20AC",
	TengeSign: "20B8",
	// English (US, intl., with dead keys) - en
	"Ukrainian_I":"0406", //"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"
	"Ukrainian_i":"0456", //"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I'""
	"Cyrillic_io": "0451", //"CYRILLIC SMALL LETTER IO"
	"Cyrillic_IO": "0401", //"CYRILLIC CAPITAL LETTER IO"
	"Cyrillic_schwa": "04D9", //"CYRILLIC SMALL LETTER SCHWA"
	"Cyrillic_SCHWA": "04D8", //"CYRILLIC CAPITAL LETTER SCHWA"
	"Cyrillic_en_descender": "04A3",//"CYRILLIC SMALL LETTER EN WITH DESCENDER"
	"Cyrillic_EN_descender": "04A2",//"CYRILLIC CAPITAL LETTER EN WITH DESCENDER"
	"Cyrillic_ghe_bar": "0493",//"CYRILLIC SMALL LETTER GHE WITH STROKE"
	"Cyrillic_GHE_bar": "0492",//"CYRILLIC CAPITAL LETTER GHE WITH STROKE"
	"Cyrillic_u_straight": "04AF",//"CYRILLIC SMALL LETTER STRAIGHT U"
	"Cyrillic_U_straight": "04AE",//"CYRILLIC CAPITAL LETTER STRAIGHT U"
	"Cyrillic_u_straight_bar":"04B1",//"CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE"
	"Cyrillic_U_straight_bar":"04B0",//"CYRILLIC CAPITAL LETTER STRAIGHT U WITH STROKE"
	"Cyrillic_ka_descender": "049B",//"CYRILLIC SMALL LETTER KA WITH DESCENDER"
	"Cyrillic_KA_descender": "049A",//"CYRILLIC CAPITAL LETTER KA WITH DESCENDER"
	"Cyrillic_o_bar": "04E9",//"CYRILLIC SMALL LETTER BARRED O"
	"Cyrillic_O_bar": "04E8",//"CYRILLIC CAPITAL LETTER BARRED O"
	"Cyrillic_shha": "04BB",//"CYRILLIC SMALL LETTER SHHA"
	"Cyrillic_SHHA": "04BA",//"CYRILLIC CAPITAL LETTER SHHA"
	"Cyrillic_shorti": "0439",//"CYRILLIC SMALL LETTER SHORT I"
	"Cyrillic_SHORTI": "0419",//"CYRILLIC CAPITAL LETTER SHORT I"
	"Cyrillic_tse": "0446", //"CYRILLIC SMALL LETTER TSE"
	"Cyrillic_TSE": "0426",//"CYRILLIC CAPITAL LETTER TSE"
	"Cyrillic_u": "0443",//"CYRILLIC SMALL LETTER U"
	"Cyrillic_U": "0423",//"CYRILLIC CAPITAL LETTER U"
	"Cyrillic_ka": "043A",//"CYRILLIC SMALL LETTER KA"
	"Cyrillic_KA": "041A",//"CYRILLIC CAPITAL LETTER KA"
	"Cyrillic_ie": "0435",//"CYRILLIC SMALL LETTER IE"
	"Cyrillic_IE": "0415",//"CYRILLIC CAPITAL LETTER IE"
	"Cyrillic_en": "043D",//"CYRILLIC SMALL LETTER EN"
	"Cyrillic_EN": "041D",//"CYRILLIC CAPITAL LETTER EN"
	"Cyrillic_ghe": "0433",//"CYRILLIC SMALL LETTER GHE"
	"Cyrillic_GHE": "0413",//"CYRILLIC CAPITAL LETTER GHE"
	"Cyrillic_sha": "0448",//"CYRILLIC SMALL LETTER SHA"
	"Cyrillic_SHA": "0428",//"CYRILLIC CAPITAL LETTER SHA"
	"Cyrillic_shcha": "0449",//"CYRILLIC SMALL LETTER SHCHA"
	"Cyrillic_SHCHA": "0429",//"CYRILLIC CAPITAL LETTER SHCHA"
	"Cyrillic_ze": "0437",//"CYRILLIC SMALL LETTER ZE"
	"Cyrillic_ZE": "0417",//"CYRILLIC CAPITAL LETTER ZE"
	"Cyrillic_ha": "0445",//"CYRILLIC SMALL LETTER HA"
	"Cyrillic_HA": "0425",//"CYRILLIC CAPITAL LETTER HA"
	"Cyrillic_hardsign": "044A",//"CYRILLIC SMALL LETTER HARD SIGN"
	"Cyrillic_HARDSIGN": "042A",//"CYRILLIC CAPITAL LETTER HARD SIGN"
	"Cyrillic_ef": "0444",//"CYRILLIC SMALL LETTER EF"
	"Cyrillic_EF": "0424",//"CYRILLIC CAPITAL LETTER EF"
	"Cyrillic_yeru": "044B",//"CYRILLIC SMALL LETTER YERU"
	"Cyrillic_YERU": "042B",//"CYRILLIC CAPITAL LETTER YERU"
	"Cyrillic_ve": "0432",//"CYRILLIC SMALL LETTER VE"
	"Cyrillic_VE": "0412",//"CYRILLIC CAPITAL LETTER VE"
	"Cyrillic_a": "0430",//"CYRILLIC SMALL LETTER A"
	"Cyrillic_A": "0410",//"CYRILLIC CAPITAL LETTER A"
	"Cyrillic_pe": "043F",//"CYRILLIC SMALL LETTER PE"
	"Cyrillic_PE": "041F",//"CYRILLIC CAPITAL LETTER PE"
	"Cyrillic_er": "0440",//"CYRILLIC SMALL LETTER ER"
	"Cyrillic_ER": "0420",//"CYRILLIC CAPITAL LETTER ER"
	"Cyrillic_o": "043E",//"CYRILLIC SMALL LETTER O"
	"Cyrillic_O": "041E",//"CYRILLIC CAPITAL LETTER O"
	"Cyrillic_el": "043B",//"CYRILLIC SMALL LETTER EL"
	"Cyrillic_EL": "041B",//"CYRILLIC CAPITAL LETTER EL"
	"Cyrillic_de": "0434",//"CYRILLIC SMALL LETTER DE"
	"Cyrillic_DE": "0414",//"CYRILLIC CAPITAL LETTER DE"
	"Cyrillic_zhe": "0436",//"CYRILLIC SMALL LETTER ZHE"
	"Cyrillic_ZHE": "0416",//"CYRILLIC CAPITAL LETTER ZHE"
	"Cyrillic_e": "044D",//"CYRILLIC SMALL LETTER E"
	"Cyrillic_E": "042D",//"CYRILLIC CAPITAL LETTER E"
	"Cyrillic_ya": "044F",//"CYRILLIC SMALL LETTER YA"
	"Cyrillic_YA": "042F",//"CYRILLIC CAPITAL LETTER YA"
	"Cyrillic_che": "0447",//"CYRILLIC SMALL LETTER CHE"
	"Cyrillic_CHE": "0427",//"CYRILLIC CAPITAL LETTER CHE"
	"Cyrillic_es": "0441",//"CYRILLIC SMALL LETTER ES"
	"Cyrillic_ES": "0421",//"CYRILLIC CAPITAL LETTER ES"
	"Cyrillic_em": "043C",//"CYRILLIC SMALL LETTER EM"
	"Cyrillic_EM": "041C",//"CYRILLIC CAPITAL LETTER EM"
	"Cyrillic_i": "0438",//"CYRILLIC SMALL LETTER I"
	"Cyrillic_I": "0418",//"CYRILLIC CAPITAL LETTER I"
	"Cyrillic_te": "0442",//"CYRILLIC SMALL LETTER TE"
	"Cyrillic_TE": "0422",//"CYRILLIC CAPITAL LETTER TE"
	"Cyrillic_softsign": "044C",//"CYRILLIC SMALL LETTER SOFT SIGN"
	"Cyrillic_SOFTSIGN": "042C",//"CYRILLIC CAPITAL LETTER SOFT SIGN"
	"Cyrillic_be": "0431",//"CYRILLIC SMALL LETTER BE"
	"Cyrillic_BE": "0411",//"CYRILLIC CAPITAL LETTER BE"
	"Cyrillic_yu": "044E",//"CYRILLIC SMALL LETTER YU"
	"Cyrillic_YU": "042E",//"CYRILLIC CAPITAL LETTER YU"
	"numerosign": "2116",//"NUMERO SIGN"
	

};
KeyView.unicode = {
	"0020": "SPACE",
	"0021": "EXCLAMATION MARK",
	"0022": "QUOTATION MARK",
	"0023": "NUMBER SIGN",
	"0024": "DOLLAR SIGN",
	"0025": "PERCENT SIGN",
	"0026": "AMPERSAND",
	"0027": "APOSTROPHE",
	"0028": "LEFT PARENTHESIS",
	"0029": "RIGHT PARENTHESIS",
	"002A": "ASTERISK",
	"002B": "PLUS SIGN",
	"002C": "COMMA",
	"002D": "HYPHEN-MINUS",
	"002E": "FULL STOP",
	"002F": "SOLIDUS",
	"0030": "DIGIT ZERO",
	"0031": "DIGIT ONE",
	"0032": "DIGIT TWO",
	"0033": "DIGIT THREE",
	"0034": "DIGIT FOUR",
	"0035": "DIGIT FIVE",
	"0036": "DIGIT SIX",
	"0037": "DIGIT SEVEN",
	"0038": "DIGIT EIGHT",
	"0039": "DIGIT NINE",
	"003A": "COLON",
	"003B": "SEMICOLON",
	"003C": "LESS-THAN SIGN",
	"003D": "EQUALS SIGN",
	"003E": "GREATER-THAN SIGN",
	"003F": "QUESTION MARK",
	"0040": "COMMERCIAL AT",
	"0041": "LATIN CAPITAL LETTER A",
	"0042": "LATIN CAPITAL LETTER B",
	"0043": "LATIN CAPITAL LETTER C",
	"0044": "LATIN CAPITAL LETTER D",
	"0045": "LATIN CAPITAL LETTER E",
	"0046": "LATIN CAPITAL LETTER F",
	"0047": "LATIN CAPITAL LETTER G",
	"0048": "LATIN CAPITAL LETTER H",
	"0049": "LATIN CAPITAL LETTER I",
	"004A": "LATIN CAPITAL LETTER J",
	"004B": "LATIN CAPITAL LETTER K",
	"004C": "LATIN CAPITAL LETTER L",
	"004D": "LATIN CAPITAL LETTER M",
	"004E": "LATIN CAPITAL LETTER N",
	"004F": "LATIN CAPITAL LETTER O",
	"0050": "LATIN CAPITAL LETTER P",
	"0051": "LATIN CAPITAL LETTER Q",
	"0052": "LATIN CAPITAL LETTER R",
	"0053": "LATIN CAPITAL LETTER S",
	"0054": "LATIN CAPITAL LETTER T",
	"0055": "LATIN CAPITAL LETTER U",
	"0056": "LATIN CAPITAL LETTER V",
	"0057": "LATIN CAPITAL LETTER W",
	"0058": "LATIN CAPITAL LETTER X",
	"0059": "LATIN CAPITAL LETTER Y",
	"005A": "LATIN CAPITAL LETTER Z",
	"005B": "LEFT SQUARE BRACKET",
	"005C": "REVERSE SOLIDUS",
	"005D": "RIGHT SQUARE BRACKET",
	"005E": "CIRCUMFLEX ACCENT",
	"005F": "LOW LINE",
	"0060": "GRAVE ACCENT",
	"0061": "LATIN SMALL LETTER A",
	"0062": "LATIN SMALL LETTER B",
	"0063": "LATIN SMALL LETTER C",
	"0064": "LATIN SMALL LETTER D",
	"0065": "LATIN SMALL LETTER E",
	"0066": "LATIN SMALL LETTER F",
	"0067": "LATIN SMALL LETTER G",
	"0068": "LATIN SMALL LETTER H",
	"0069": "LATIN SMALL LETTER I",
	"006A": "LATIN SMALL LETTER J",
	"006B": "LATIN SMALL LETTER K",
	"006C": "LATIN SMALL LETTER L",
	"006D": "LATIN SMALL LETTER M",
	"006E": "LATIN SMALL LETTER N",
	"006F": "LATIN SMALL LETTER O",
	"0070": "LATIN SMALL LETTER P",
	"0071": "LATIN SMALL LETTER Q",
	"0072": "LATIN SMALL LETTER R",
	"0073": "LATIN SMALL LETTER S",
	"0074": "LATIN SMALL LETTER T",
	"0075": "LATIN SMALL LETTER U",
	"0076": "LATIN SMALL LETTER V",
	"0077": "LATIN SMALL LETTER W",
	"0078": "LATIN SMALL LETTER X",
	"0079": "LATIN SMALL LETTER Y",
	"007A": "LATIN SMALL LETTER Z",
	"007B": "LEFT CURLY BRACKET",
	"007C": "VERTICAL LINE",
	"007D": "RIGHT CURLY BRACKET",
	"007E": "TILDE",
	"00A0": "NO-BREAK SPACE",
	"00A1": "INVERTED EXCLAMATION MARK",
	"00A2": "CENT SIGN",
	"00A3": "POUND SIGN",
	"00A4": "CURRENCY SIGN",
	"00A5": "YEN SIGN",
	"00A6": "BROKEN BAR",
	"00A7": "SECTION SIGN",
	"00A8": "DIAERESIS",
	"00A9": "COPYRIGHT SIGN",
	"00AA": "FEMININE ORDINAL INDICATOR",
	"00AB": "LEFT-POINTING DOUBLE ANGLE QUOTATION MARK",
	"00AC": "NOT SIGN",
	"00AD": "SOFT HYPHEN",
	"00AE": "REGISTERED SIGN",
	"00AF": "MACRON",
	"00B0": "DEGREE SIGN",
	"00B1": "PLUS-MINUS SIGN",
	"00B2": "SUPERSCRIPT TWO",
	"00B3": "SUPERSCRIPT THREE",
	"00B4": "ACUTE ACCENT",
	"00B5": "MICRO SIGN",
	"00B6": "PILCROW SIGN",
	"00B7": "MIDDLE DOT",
	"00B8": "CEDILLA",
	"00B9": "SUPERSCRIPT ONE",
	"00BA": "MASCULINE ORDINAL INDICATOR",
	"00BB": "RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK",
	"00BC": "VULGAR FRACTION ONE QUARTER",
	"00BD": "VULGAR FRACTION ONE HALF",
	"00BE": "VULGAR FRACTION THREE QUARTERS",
	"00BF": "INVERTED QUESTION MARK",
	"00C0": "LATIN CAPITAL LETTER A WITH GRAVE",
	"00C1": "LATIN CAPITAL LETTER A WITH ACUTE",
	"00C2": "LATIN CAPITAL LETTER A WITH CIRCUMFLEX",
	"00C3": "LATIN CAPITAL LETTER A WITH TILDE",
	"00C4": "LATIN CAPITAL LETTER A WITH DIAERESIS",
	"00C5": "LATIN CAPITAL LETTER A WITH RING ABOVE",
	"00C6": "LATIN CAPITAL LETTER AE",
	"00C7": "LATIN CAPITAL LETTER C WITH CEDILLA",
	"00C8": "LATIN CAPITAL LETTER E WITH GRAVE",
	"00C9": "LATIN CAPITAL LETTER E WITH ACUTE",
	"00CA": "LATIN CAPITAL LETTER E WITH CIRCUMFLEX",
	"00CB": "LATIN CAPITAL LETTER E WITH DIAERESIS",
	"00CC": "LATIN CAPITAL LETTER I WITH GRAVE",
	"00CD": "LATIN CAPITAL LETTER I WITH ACUTE",
	"00CE": "LATIN CAPITAL LETTER I WITH CIRCUMFLEX",
	"00CF": "LATIN CAPITAL LETTER I WITH DIAERESIS",
	"00D0": "LATIN CAPITAL LETTER ETH",
	"00D1": "LATIN CAPITAL LETTER N WITH TILDE",
	"00D2": "LATIN CAPITAL LETTER O WITH GRAVE",
	"00D3": "LATIN CAPITAL LETTER O WITH ACUTE",
	"00D4": "LATIN CAPITAL LETTER O WITH CIRCUMFLEX",
	"00D5": "LATIN CAPITAL LETTER O WITH TILDE",
	"00D6": "LATIN CAPITAL LETTER O WITH DIAERESIS",
	"00D7": "MULTIPLICATION SIGN",
	"00D8": "LATIN CAPITAL LETTER O WITH STROKE",
	"00D8": "LATIN CAPITAL LETTER O WITH STROKE",
	"00D9": "LATIN CAPITAL LETTER U WITH GRAVE",
	"00DA": "LATIN CAPITAL LETTER U WITH ACUTE",
	"00DB": "LATIN CAPITAL LETTER U WITH CIRCUMFLEX",
	"00DC": "LATIN CAPITAL LETTER U WITH DIAERESIS",
	"00DD": "LATIN CAPITAL LETTER Y WITH ACUTE",
	"00DE": "LATIN CAPITAL LETTER THORN",
	"00DF": "LATIN SMALL LETTER SHARP S",
	"00E0": "LATIN SMALL LETTER A WITH GRAVE",
	"00E1": "LATIN SMALL LETTER A WITH ACUTE",
	"00E2": "LATIN SMALL LETTER A WITH CIRCUMFLEX",
	"00E3": "LATIN SMALL LETTER A WITH TILDE",
	"00E4": "LATIN SMALL LETTER A WITH DIAERESIS",
	"00E5": "LATIN SMALL LETTER A WITH RING ABOVE",
	"00E6": "LATIN SMALL LETTER AE",
	"00E7": "LATIN SMALL LETTER C WITH CEDILLA",
	"00E8": "LATIN SMALL LETTER E WITH GRAVE",
	"00E9": "LATIN SMALL LETTER E WITH ACUTE",
	"00EA": "LATIN SMALL LETTER E WITH CIRCUMFLEX",
	"00EB": "LATIN SMALL LETTER E WITH DIAERESIS",
	"00EC": "LATIN SMALL LETTER I WITH GRAVE",
	"00ED": "LATIN SMALL LETTER I WITH ACUTE",
	"00EE": "LATIN SMALL LETTER I WITH CIRCUMFLEX",
	"00EF": "LATIN SMALL LETTER I WITH DIAERESIS",
	"00F0": "LATIN SMALL LETTER ETH",
	"00F1": "LATIN SMALL LETTER N WITH TILDE",
	"00F2": "LATIN SMALL LETTER O WITH GRAVE",
	"00F3": "LATIN SMALL LETTER O WITH ACUTE",
	"00F4": "LATIN SMALL LETTER O WITH CIRCUMFLEX",
	"00F5": "LATIN SMALL LETTER O WITH TILDE",
	"00F6": "LATIN SMALL LETTER O WITH DIAERESIS",
	"00F7": "DIVISION SIGN",
	"00F8": "LATIN SMALL LETTER O WITH STROKE",
	"00F8": "LATIN SMALL LETTER O WITH STROKE",
	"00F9": "LATIN SMALL LETTER U WITH GRAVE",
	"00FA": "LATIN SMALL LETTER U WITH ACUTE",
	"00FB": "LATIN SMALL LETTER U WITH CIRCUMFLEX",
	"00FC": "LATIN SMALL LETTER U WITH DIAERESIS",
	"00FD": "LATIN SMALL LETTER Y WITH ACUTE",
	"00FE": "LATIN SMALL LETTER THORN",
	"00FF": "LATIN SMALL LETTER Y WITH DIAERESIS",
	"0104": "LATIN CAPITAL LETTER A WITH OGONEK",
	"02D8": "BREVE",
	"0141": "LATIN CAPITAL LETTER L WITH STROKE",
	"013D": "LATIN CAPITAL LETTER L WITH CARON",
	"015A": "LATIN CAPITAL LETTER S WITH ACUTE",
	"0160": "LATIN CAPITAL LETTER S WITH CARON",
	"015E": "LATIN CAPITAL LETTER S WITH CEDILLA",
	"0164": "LATIN CAPITAL LETTER T WITH CARON",
	"0179": "LATIN CAPITAL LETTER Z WITH ACUTE",
	"017D": "LATIN CAPITAL LETTER Z WITH CARON",
	"017B": "LATIN CAPITAL LETTER Z WITH DOT ABOVE",
	"0105": "LATIN SMALL LETTER A WITH OGONEK",
	"02DB": "OGONEK",
	"0142": "LATIN SMALL LETTER L WITH STROKE",
	"013E": "LATIN SMALL LETTER L WITH CARON",
	"015B": "LATIN SMALL LETTER S WITH ACUTE",
	"02C7": "CARON",
	"0161": "LATIN SMALL LETTER S WITH CARON",
	"015F": "LATIN SMALL LETTER S WITH CEDILLA",
	"0165": "LATIN SMALL LETTER T WITH CARON",
	"017A": "LATIN SMALL LETTER Z WITH ACUTE",
	"02DD": "DOUBLE ACUTE ACCENT",
	"017E": "LATIN SMALL LETTER Z WITH CARON",
	"017C": "LATIN SMALL LETTER Z WITH DOT ABOVE",
	"0154": "LATIN CAPITAL LETTER R WITH ACUTE",
	"0102": "LATIN CAPITAL LETTER A WITH BREVE",
	"0139": "LATIN CAPITAL LETTER L WITH ACUTE",
	"0106": "LATIN CAPITAL LETTER C WITH ACUTE",
	"010C": "LATIN CAPITAL LETTER C WITH CARON",
	"0118": "LATIN CAPITAL LETTER E WITH OGONEK",
	"011A": "LATIN CAPITAL LETTER E WITH CARON",
	"010E": "LATIN CAPITAL LETTER D WITH CARON",
	"0110": "LATIN CAPITAL LETTER D WITH STROKE",
	"0143": "LATIN CAPITAL LETTER N WITH ACUTE",
	"0147": "LATIN CAPITAL LETTER N WITH CARON",
	"0150": "LATIN CAPITAL LETTER O WITH DOUBLE ACUTE",
	"0158": "LATIN CAPITAL LETTER R WITH CARON",
	"016E": "LATIN CAPITAL LETTER U WITH RING ABOVE",
	"0170": "LATIN CAPITAL LETTER U WITH DOUBLE ACUTE",
	"0162": "LATIN CAPITAL LETTER T WITH CEDILLA",
	"0155": "LATIN SMALL LETTER R WITH ACUTE",
	"0103": "LATIN SMALL LETTER A WITH BREVE",
	"013A": "LATIN SMALL LETTER L WITH ACUTE",
	"0107": "LATIN SMALL LETTER C WITH ACUTE",
	"010D": "LATIN SMALL LETTER C WITH CARON",
	"0119": "LATIN SMALL LETTER E WITH OGONEK",
	"011B": "LATIN SMALL LETTER E WITH CARON",
	"010F": "LATIN SMALL LETTER D WITH CARON",
	"0111": "LATIN SMALL LETTER D WITH STROKE",
	"0144": "LATIN SMALL LETTER N WITH ACUTE",
	"0148": "LATIN SMALL LETTER N WITH CARON",
	"0151": "LATIN SMALL LETTER O WITH DOUBLE ACUTE",
	"0159": "LATIN SMALL LETTER R WITH CARON",
	"016F": "LATIN SMALL LETTER U WITH RING ABOVE",
	"0171": "LATIN SMALL LETTER U WITH DOUBLE ACUTE",
	"0163": "LATIN SMALL LETTER T WITH CEDILLA",
	"02D9": "DOT ABOVE",
	"0126": "LATIN CAPITAL LETTER H WITH STROKE",
	"0124": "LATIN CAPITAL LETTER H WITH CIRCUMFLEX",
	"0130": "LATIN CAPITAL LETTER I WITH DOT ABOVE",
	"011E": "LATIN CAPITAL LETTER G WITH BREVE",
	"0134": "LATIN CAPITAL LETTER J WITH CIRCUMFLEX",
	"0127": "LATIN SMALL LETTER H WITH STROKE",
	"0125": "LATIN SMALL LETTER H WITH CIRCUMFLEX",
	"0131": "LATIN SMALL LETTER DOTLESS I",
	"011F": "LATIN SMALL LETTER G WITH BREVE",
	"01F5": "LATIN SMALL LETTER G WITH ACUTE",
	"0135": "LATIN SMALL LETTER J WITH CIRCUMFLEX",
	"010A": "LATIN CAPITAL LETTER C WITH DOT ABOVE",
	"0108": "LATIN CAPITAL LETTER C WITH CIRCUMFLEX",
	"0120": "LATIN CAPITAL LETTER G WITH DOT ABOVE",
	"01F4": "LATIN CAPITAL LETTER G WITH ACUTE",
	"011C": "LATIN CAPITAL LETTER G WITH CIRCUMFLEX",
	"016C": "LATIN CAPITAL LETTER U WITH BREVE",
	"015C": "LATIN CAPITAL LETTER S WITH CIRCUMFLEX",
	"010B": "LATIN SMALL LETTER C WITH DOT ABOVE",
	"0109": "LATIN SMALL LETTER C WITH CIRCUMFLEX",
	"0121": "LATIN SMALL LETTER G WITH DOT ABOVE",
	"011D": "LATIN SMALL LETTER G WITH CIRCUMFLEX",
	"016D": "LATIN SMALL LETTER U WITH BREVE",
	"015D": "LATIN SMALL LETTER S WITH CIRCUMFLEX",
	"0138": "LATIN SMALL LETTER KRA",
	"0156": "LATIN CAPITAL LETTER R WITH CEDILLA",
	"0128": "LATIN CAPITAL LETTER I WITH TILDE",
	"013B": "LATIN CAPITAL LETTER L WITH CEDILLA",
	"0112": "LATIN CAPITAL LETTER E WITH MACRON",
	"0122": "LATIN CAPITAL LETTER G WITH CEDILLA",
	"0166": "LATIN CAPITAL LETTER T WITH STROKE",
	"0157": "LATIN SMALL LETTER R WITH CEDILLA",
	"0129": "LATIN SMALL LETTER I WITH TILDE",
	"013C": "LATIN SMALL LETTER L WITH CEDILLA",
	"0113": "LATIN SMALL LETTER E WITH MACRON",
	"0123": "LATIN SMALL LETTER G WITH CEDILLA",
	"0167": "LATIN SMALL LETTER T WITH STROKE",
	"014A": "LATIN CAPITAL LETTER ENG",
	"014B": "LATIN SMALL LETTER ENG",
	"0100": "LATIN CAPITAL LETTER A WITH MACRON",
	"012E": "LATIN CAPITAL LETTER I WITH OGONEK",
	"0116": "LATIN CAPITAL LETTER E WITH DOT ABOVE",
	"012A": "LATIN CAPITAL LETTER I WITH MACRON",
	"0145": "LATIN CAPITAL LETTER N WITH CEDILLA",
	"014C": "LATIN CAPITAL LETTER O WITH MACRON",
	"0136": "LATIN CAPITAL LETTER K WITH CEDILLA",
	"0172": "LATIN CAPITAL LETTER U WITH OGONEK",
	"0168": "LATIN CAPITAL LETTER U WITH TILDE",
	"016A": "LATIN CAPITAL LETTER U WITH MACRON",
	"0101": "LATIN SMALL LETTER A WITH MACRON",
	"012F": "LATIN SMALL LETTER I WITH OGONEK",
	"0117": "LATIN SMALL LETTER E WITH DOT ABOVE",
	"012B": "LATIN SMALL LETTER I WITH MACRON",
	"0146": "LATIN SMALL LETTER N WITH CEDILLA",
	"014D": "LATIN SMALL LETTER O WITH MACRON",
	"0137": "LATIN SMALL LETTER K WITH CEDILLA",
	"0173": "LATIN SMALL LETTER U WITH OGONEK",
	"0169": "LATIN SMALL LETTER U WITH TILDE",
	"016B": "LATIN SMALL LETTER U WITH MACRON",
	"0174": "LATIN CAPITAL LETTER W WITH CIRCUMFLEX",
	"0175": "LATIN SMALL LETTER W WITH CIRCUMFLEX",
	"0176": "LATIN CAPITAL LETTER Y WITH CIRCUMFLEX",
	"0177": "LATIN SMALL LETTER Y WITH CIRCUMFLEX",
	"1E02": "LATIN CAPITAL LETTER B WITH DOT ABOVE",
	"1E03": "LATIN SMALL LETTER B WITH DOT ABOVE",
	"1E0A": "LATIN CAPITAL LETTER D WITH DOT ABOVE",
	"1E0B": "LATIN SMALL LETTER D WITH DOT ABOVE",
	"1E1E": "LATIN CAPITAL LETTER F WITH DOT ABOVE",
	"1E1F": "LATIN SMALL LETTER F WITH DOT ABOVE",
	"1E40": "LATIN CAPITAL LETTER M WITH DOT ABOVE",
	"1E41": "LATIN SMALL LETTER M WITH DOT ABOVE",
	"1E56": "LATIN CAPITAL LETTER P WITH DOT ABOVE",
	"1E57": "LATIN SMALL LETTER P WITH DOT ABOVE",
	"1E60": "LATIN CAPITAL LETTER S WITH DOT ABOVE",
	"1E61": "LATIN SMALL LETTER S WITH DOT ABOVE",
	"1E6A": "LATIN CAPITAL LETTER T WITH DOT ABOVE",
	"1E6B": "LATIN SMALL LETTER T WITH DOT ABOVE",
	"1E80": "LATIN CAPITAL LETTER W WITH GRAVE",
	"1E81": "LATIN SMALL LETTER W WITH GRAVE",
	"1E82": "LATIN CAPITAL LETTER W WITH ACUTE",
	"1E83": "LATIN SMALL LETTER W WITH ACUTE",
	"1E84": "LATIN CAPITAL LETTER W WITH DIAERESIS",
	"1E85": "LATIN SMALL LETTER W WITH DIAERESIS",
	"1EF2": "LATIN CAPITAL LETTER Y WITH GRAVE",
	"1EF3": "LATIN SMALL LETTER Y WITH GRAVE",
	"0152": "LATIN CAPITAL LIGATURE OE",
	"0153": "LATIN SMALL LIGATURE OE",
	"0178": "LATIN CAPITAL LETTER Y WITH DIAERESIS",
	"03A9": "GREEK CAPITAL LETTER OMEGA",
	"03C0": "GREEK SMALL LETTER PI",
	2500: "BOX DRAWINGS LIGHT HORIZONTAL",
	2264: "LESS-THAN OR EQUAL TO",
	2260: "NOT EQUAL TO",
	2265: "GREATER-THAN OR EQUAL TO",
	"222B": "INTEGRAL",
	2234: "THEREFORE",
	"221D": "PROPORTIONAL TO",
	"221E": "INFINITY",
	2207: "NABLA",
	"223C": "TILDE OPERATOR",
	2243: "ASYMPTOTICALLY EQUAL TO",
	2248: "ALMOST EQUAL TO",
	"21D4": "LEFT RIGHT DOUBLE ARROW",
	"21D2": "RIGHTWARDS DOUBLE ARROW",
	2261: "IDENTICAL TO",
	"221A": "SQUARE ROOT",
	2282: "SUBSET OF",
	2283: "SUPERSET OF",
	2229: "INTERSECTION",
	"222A": "UNION",
	2227: "LOGICAL AND",
	2228: "LOGICAL OR",
	2202: "PARTIAL DIFFERENTIAL",
	"0192": "LATIN SMALL LETTER F WITH HOOK",
	2190: "LEFTWARDS ARROW",
	2191: "UPWARDS ARROW",
	2192: "RIGHTWARDS ARROW",
	2193: "DOWNWARDS ARROW",
	2194: "LEFT RIGHT ARROW",
	2014: "EM DASH",
	2013: "EN DASH",
	2026: "HORIZONTAL ELLIPSIS",
	2025: "TWO DOT LEADER",
	2022: "BULLET",
	2153: "VULGAR FRACTION ONE THIRD",
	2154: "VULGAR FRACTION TWO THIRDS",
	2155: "VULGAR FRACTION ONE FIFTH",
	2156: "VULGAR FRACTION TWO FIFTHS",
	2157: "VULGAR FRACTION THREE FIFTHS",
	2158: "VULGAR FRACTION FOUR FIFTHS",
	2159: "VULGAR FRACTION ONE SIXTH",
	"215A": "VULGAR FRACTION FIVE SIXTHS",
	2105: "CARE OF",
	2012: "FIGURE DASH",
	"215B": "VULGAR FRACTION ONE EIGHTH",
	"215C": "VULGAR FRACTION THREE EIGHTHS",
	"215D": "VULGAR FRACTION FIVE EIGHTHS",
	"215E": "VULGAR FRACTION SEVEN EIGHTHS",
	2122: "TRADE MARK SIGN",
	2018: "LEFT SINGLE QUOTATION MARK",
	2019: "RIGHT SINGLE QUOTATION MARK",
	"201C": "LEFT DOUBLE QUOTATION MARK",
	"201D": "RIGHT DOUBLE QUOTATION MARK",
	"211E": "PRESCRIPTION TAKE",
	2030: "PER MILLE SIGN",
	2032: "PRIME",
	2033: "DOUBLE PRIME",
	"201A": "SINGLE LOW-9 QUOTATION MARK",
	"201E": "DOUBLE LOW-9 QUOTATION MARK",
	"018F": "LATIN CAPITAL LETTER SCHWA",
	"0259": "LATIN SMALL LETTER SCHWA",
	"20AC": "EURO SIGN",
	"20B8": "TENGE SIGN",
	"0456": "CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I",
	"0406": "CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I",
	"0451": "CYRILLIC SMALL LETTER IO",
	"0401": "CYRILLIC CAPITAL LETTER IO",
	"04D9": "CYRILLIC SMALL LETTER SCHWA",
	"04D8": "CYRILLIC CAPITAL LETTER SCHWA",
	"04A2": "CYRILLIC SMALL LETTER EN WITH DESCENDER",
	"04A3": "CYRILLIC CAPITAL LETTER EN WITH DESCENDER",
	"0493": "CYRILLIC SMALL LETTER GHE WITH STROKE",
	"0492": "CYRILLIC CAPITAL LETTER GHE WITH STROKE",
	"04AF": "CYRILLIC SMALL LETTER STRAIGHT U",
	"04AE": "CYRILLIC CAPITAL LETTER STRAIGHT U",
	"04B1": "CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE",
	"04B0": "CYRILLIC CAPITAL LETTER STRAIGHT U WITH STROKE",
	"049B": "CYRILLIC SMALL LETTER KA WITH DESCENDER",
	"049A": "CYRILLIC CAPITAL LETTER KA WITH DESCENDER",
	"04E9": "CYRILLIC SMALL LETTER BARRED O",
	"04E8": "CYRILLIC CAPITAL LETTER BARRED O",
	"04BB": "CYRILLIC SMALL LETTER SHHA",
	"04BA": "CYRILLIC CAPITAL LETTER SHHA",
	"0439": "CYRILLIC SMALL LETTER SHORT I",
	"0419": "CYRILLIC CAPITAL LETTER SHORT I",
	"0446": "CYRILLIC SMALL LETTER TSE",
	"0426": "CYRILLIC CAPITAL LETTER TSE",
	"0443": "CYRILLIC SMALL LETTER U",
	"0423": "CYRILLIC CAPITAL LETTER U",
	"043A": "CYRILLIC SMALL LETTER KA",
	"041A": "CYRILLIC CAPITAL LETTER KA",
	"0435": "CYRILLIC SMALL LETTER IE",
	"0415": "CYRILLIC CAPITAL LETTER IE",
	"043D": "CYRILLIC SMALL LETTER EN",
	"041D": "CYRILLIC CAPITAL LETTER EN",
	"0433": "CYRILLIC SMALL LETTER GHE",
	"0413": "CYRILLIC CAPITAL LETTER GHE",
	"0448": "CYRILLIC SMALL LETTER SHA",
	"0428": "CYRILLIC CAPITAL LETTER SHA",
	"0449": "CYRILLIC SMALL LETTER SHCHA",
	"0429": "CYRILLIC CAPITAL LETTER SHCHA",
	"0437": "CYRILLIC SMALL LETTER ZE",
	"0417": "CYRILLIC CAPITAL LETTER ZE",
	"0445": "CYRILLIC SMALL LETTER HA",
	"0425": "CYRILLIC CAPITAL LETTER HA",
	"044A": "CYRILLIC SMALL LETTER HARD SIGN",
	"042A": "CYRILLIC CAPITAL LETTER HARD SIGN",
	"0444": "CYRILLIC SMALL LETTER EF",
	"0424": "CYRILLIC CAPITAL LETTER EF",
	"044B": "CYRILLIC SMALL LETTER YERU",
	"042B": "CYRILLIC SMALL LETTER YERU",
	"0432": "CYRILLIC SMALL LETTER VE",
	"0412": "CYRILLIC CAPITAL LETTER VE",
	"0430": "CYRILLIC SMALL LETTER A",
	"0410": "CYRILLIC CAPITAL LETTER A",
	"043F": "CYRILLIC SMALL LETTER PE",
	"041F": "CYRILLIC CAPITAL LETTER PE",
	"0440": "CYRILLIC SMALL LETTER ER",
	"0420": "CYRILLIC CAPITAL LETTER ER",
	"043E": "CYRILLIC SMALL LETTER O",
	"041E": "CYRILLIC CAPITAL LETTER O",
	"041B": "CYRILLIC CAPITAL LETTER EL",
	"043B": "CYRILLIC SMALL LETTER EL",
	"0434": "CYRILLIC SMALL LETTER DE",
	"0414": "CYRILLIC CAPITAL LETTER DE",
	"0436": "CYRILLIC SMALL LETTER ZHE",
	"0416": "CYRILLIC CAPITAL LETTER ZHE",
	"044D": "CYRILLIC SMALL LETTER E",
	"042D": "CYRILLIC CAPITAL LETTER E",
	"044F": "CYRILLIC SMALL LETTER YA",
	"042F": "CYRILLIC CAPITAL LETTER YA",
	"0447": "CYRILLIC SMALL LETTER CHE",
	"0427": "CYRILLIC CAPITAL LETTER CHE",
	"0441": "CYRILLIC SMALL LETTER ES",
	"0421": "CYRILLIC CAPITAL LETTER ES",
	"043C": "CYRILLIC SMALL LETTER EM",
	"041C": "CYRILLIC CAPITAL LETTER EM",
	"0438": "CYRILLIC SMALL LETTER I",
	"0418": "CYRILLIC CAPITAL LETTER I",
	"0442": "CYRILLIC SMALL LETTER TE",
	"0422": "CYRILLIC CAPITAL LETTER TE",
	"044C": "CYRILLIC SMALL LETTER SOFT SIGN",
	"042C": "CYRILLIC CAPITAL LETTER SOFT SIGN",
	"0431": "CYRILLIC SMALL LETTER BE",
	"0411": "CYRILLIC CAPITAL LETTER BE",
	"044E": "CYRILLIC SMALL LETTER YU",
	"042E": "CYRILLIC CAPITAL LETTER YU",
	"2116":"NUMERO SIGN"
};
KeyView.charlist = [{
	name: "Basic Latin alphabet",
	chars: [
		["0041", "0042", "0043", "0044", "0045", "0046", "0047", "0048", "0049", "004A", "004B", "004C", "004D"],
		["004E", "004F", "0050", "0051", "0052", "0053", "0054", "0055", "0056", "0057", "0058", "0059", "005A"],
		["0061", "0062", "0063", "0064", "0065", "0066", "0067", "0068", "0069", "006A", "006B", "006C", "006D"],
		["006E", "006F", "0070", "0071", "0072", "0073", "0074", "0075", "0076", "0077", "0078", "0079", "007A"]
	]
}];