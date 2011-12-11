var Level = function( name, dimensions, mines ) {

	this.name = name;
	this.dimensions = vec3.assign( vec3.create(), dimensions );
	this.mines = mines;

};

var Settings = {

	levels : {

		easy : new Level( 'easy', 5, 10 ),
		medium : new Level( 'medium', 7, 33 ),
		hard : new Level( 'hard', 10, 99 ),
		custom : new Level( 'custom', 10, 99 )

	},

	currentLevel : null,
	mode : 'sweep', // [ 'classic', 'sweep' ]

	animations : true,
	recenter : true,

	init : function() {

		this.currentLevel = this.levels.easy;

	},

	getKey : function() {

		return this.mode + this.currentLevel.name;

	},

	setFromMenu : function() {

		this.currentLevel = Menu.level;
		this.mode = Menu.mode;

		this.animations = Menu.animations;
		this.recenter = Menu.recenter;

	}

};
