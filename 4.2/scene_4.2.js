(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scene_4.2_atlas_1", frames: [[1032,786,689,687],[0,1475,489,531],[1120,1475,639,273],[491,1475,627,389],[0,0,1030,1412],[1032,0,938,784]]},
		{name:"scene_4.2_atlas_2", frames: [[508,0,314,431],[393,433,304,429],[0,662,384,220],[0,317,391,343],[0,0,506,315],[824,0,189,300],[699,433,314,298]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_111 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["scene_4.2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["scene_4.2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["scene_4.2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["scene_4.2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["scene_4.2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["scene_4.2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["scene_4.2_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(img.CachedBmp_98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3842,2230);


(lib.CachedBmp_97 = function() {
	this.initialize(img.CachedBmp_97);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3842,2230);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Texte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Vous avez réussi à sauver Woody mais il est blessé.", "bold 73px 'Poppins Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 104;
	this.text.lineWidth = 1198;
	this.text.parent = this;
	this.text.setTransform(0,-103.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Texte, new cjs.Rectangle(-601.1,-105.2,1202.3000000000002,210.4), null);


(lib.Symbole18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole18, new cjs.Rectangle(0,0,157,215.5), null);


(lib.Symbole17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB500").s().p("AjfIbQgWgLgDgpQgCgdAHgcQACgHAAgHQgIjTDBmMQA9iABGh7IA9hnIAyAVQA1AYAJAUQAKAThEEHIhmF4QgbBlhgB6QgzBBgpAoIgCACQgQAagcAIQgLAEgLAAQgOAAgOgHg");
	this.shape.setTransform(17.561,68.3748,0.7085,0.7085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB7D49").s().p("AhYCRQgKgBgSg/QgShEAGghQAKgsBFgeQBUgdAlgQQAugUAKBDQAFAjgEAlIAAAoQgCA1gIAQQgIAVgIADIgrAQQg4AQhSAAIgKAAg");
	this.shape_1.setTransform(36.8131,10.1851,0.7085,0.7085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole17, new cjs.Rectangle(-0.1,0,46.2,107.1), null);


(lib.Symbole16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB500").s().p("ADqF5Qhogwj5jRQhOhBhBhGQg4g9gagpIgxhhQgXgsgygpQgCgRACgTQADgmARgMQAZgSAfAFQAQACAMAHQAFACAZADIBuALQA+AHCuB2QCkBvB/BzQBKBCA9A8IAKAXQALAcAEAdQANBdg4BIQgnAzg7AAQgoAAgygXg");
	this.shape.setTransform(33.036,28.2826,0.7085,0.7085);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole16, new cjs.Rectangle(-0.1,0,66.3,56.6), null);


(lib.Symbole15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_110();
	this.instance.setTransform(-0.15,-0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole15, new cjs.Rectangle(-0.1,0,152,214.5), null);


(lib.Symbole13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_109();
	this.instance.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole13, new cjs.Rectangle(0,0,344.5,343.5), null);


(lib.Symbole12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB7D49").s().p("Ag3CfQgNABgUgNQgrgagthDQgGgIAuhMQAvhSAjgaQAugiA+AZQAnAPBDAlQAqAQg4BGIhBBBIgmAkIgdAbQgaAXgNAGQgVALgHAAIgCAAg");
	this.shape.setTransform(127.1255,16.825,0.7083,0.7083,54.2193);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB500").s().p("AlDK7Qg8g1gnhKQg6hxAhioQAZh+A5hmQAqhLBMhdIC8jmQBKhfBJhMIBshwQA9hDBXgsQBng2ALBEQALA+hNB3QhoCThCBrQgjA5gWBKQgUBCg7DSQhxGChKCQQgtBYgoAHQgKACgKAAQg3AAg+g3g");
	this.shape_1.setTransform(53.6934,18.4949,0.7083,0.7083,54.2213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole12, new cjs.Rectangle(0,-0.3,139.4,40.5), null);


(lib.Symbole14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_108();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole14, new cjs.Rectangle(0,0,244.5,265.5), null);


(lib.Symbole11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_107();
	this.instance.setTransform(-0.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole11, new cjs.Rectangle(-0.1,0,192,110), null);


(lib.Symbole9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_105();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole9, new cjs.Rectangle(0,0,319.5,136.5), null);


(lib.Symbole7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43795B").s().p("ABJKLQhGguhUjqIhHjhQg8AFg/gTQh/gmhAh4QhYinAmi6QAMg7AYg1IAVgpIDgiRICpgFIgHBSQgEBqAQB7QAzGFDoGQQBABuCABHQBAAkAzANQhWAThkAKQg7AGgwAAQhxAAgyggg");
	this.shape.setTransform(52.8414,68.3153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AEoImIx0hWInsvnQgjhIAwhAQAxhABPAOIa2EzQAjAHAaAXQAbAWAMAiQBRDpBwC/QCxEvDNBmQBLAlAvBBQAXAhAJAZQhPAyirALQgjADgkAAQk/AAmgivg");
	this.shape_1.setTransform(168.7249,85.1111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole7, new cjs.Rectangle(0,0,303.9,157.6), null);


(lib.Symbole6copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_104();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole6copy, new cjs.Rectangle(0,0,253,157.5), null);


(lib.Symbole5copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_103();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole5copy, new cjs.Rectangle(0,0,313.5,194.5), null);


(lib.Symbole4copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B3").s().p("AgbIMQjpgMieiiQicijALjYQALjZCuiRQCuiRDoANQDpAMCdCjQCeCigMDYQgMDZitCRQifCFjSAAIglgBg");
	this.shape.setTransform(56.5,75.3287);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("AyvIMQhGgSg2gpQiEhjhIhwQhoiiA5iSQCvnCPghiQE1geFiAJQCxAEBzAKIP1PWQAxAwgXBBQgXBBhFAFQqvA7paAKQhrABhlAAQsRAAmchmg");
	this.shape_1.setTransform(169.8058,62.642);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole4copy, new cjs.Rectangle(0,0,329.3,127.9), null);


(lib.Symbole4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_102();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole4, new cjs.Rectangle(0,0,515,706), null);


(lib.Symbole3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(-0.05,-0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole3, new cjs.Rectangle(0,-0.1,469,392), null);


(lib.Symbole2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AvLE0QhSluiCipQgOgSAHgVQAHgWAWgGQIGiTHIhdQMOiiDiBTQETBlBKEOQAfBwgKB/QgKB0gpBpQgzCDiMBUQjFB1l2AeQnxAom/APIldAHQgPiWgpi4g");
	this.shape.setTransform(190.9303,64.1912);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("AmtHpQjWijgbkCQgakCCyjKQCyjLEWgcQEVgcDXCjQDWCjAbECQAaECiyDKQiyDLkWAcQgpAEgmAAQjmAAi3iLg");
	this.shape_1.setTransform(67.45,79.8255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(0,0,310.3,142.6), null);


(lib.Symbole1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Ellipse_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AqzYlQk/iBj2jtQj2jsiHkzQiLk8gBlcQABlbCLk9QCHkzD2jsQD2jsE/iCQFLiGFoAAQFpAAFLCGQE/CCD2DsQD2DsCHEzQCLE9ABFbQgBFciLE8QiHEzj2DsQj2Dtk/CBQlLCHlpAAQloAAlLiHg");
	this.shape.setTransform(177.75,170.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_6, new cjs.Rectangle(0,0,355.5,341.6), null);


(lib.buzz_bras = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_99();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buzz_bras, new cjs.Rectangle(0,0,157,149), null);


(lib.Symbole10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_106();
	this.instance.setTransform(162,154.5,0.5,0.5);

	this.instance_1 = new lib.Ellipse_6();
	this.instance_1.setTransform(246.45,246.2,0.9997,0.9997,45,0,0,178,170.9);
	this.instance_1.alpha = 0.2383;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole10, new cjs.Rectangle(-0.1,-0.4,492.8,492.79999999999995), null);


(lib.buzz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Symbole1();
	this.instance.setTransform(398.4,150.4,0.4228,0.4228,-1.5616,0,0,61.8,55);

	this.instance_1 = new lib.Symbole14();
	this.instance_1.setTransform(368.95,61.25,0.4803,0.4803,92.2142,0,0,122.7,132.2);

	this.instance_2 = new lib.Symbole2();
	this.instance_2.setTransform(228.55,170.9,0.4228,0.4228,-3.7663,0,0,154.8,72);

	this.instance_3 = new lib.Symbole4copy();
	this.instance_3.setTransform(217.15,143.35,0.3834,0.3834,33.2316,0,0,165.7,64.5);

	this.instance_4 = new lib.Symbole7();
	this.instance_4.setTransform(74.4,66.55,0.3834,0.3834,24.015,0,0,0.4,79.4);

	this.instance_5 = new lib.Symbole11();
	this.instance_5.setTransform(68.2,78.55,0.4141,0.4141,98.9868,0,0,96.5,55.4);

	this.instance_6 = new lib.Symbole3();
	this.instance_6.setTransform(348.5,166.2,0.4228,0.4228,10.5122,0,0,235.7,196.6);

	this.instance_7 = new lib.CachedBmp_100();
	this.instance_7.setTransform(349.7,14.4,0.5,0.5);

	this.instance_8 = new lib.Symbole5copy();
	this.instance_8.setTransform(101.5,165.6,0.4228,0.4228,-4.2534,0,0,50,97.8);

	this.instance_9 = new lib.Symbole6copy();
	this.instance_9.setTransform(71.6,148.45,0.4227,0.4227,-49.047,0,0,187.7,61.1);

	this.instance_10 = new lib.Symbole10();
	this.instance_10.setTransform(468.7,168.35,0.4227,0.4227,17.2054,0,0,247,247);

	this.instance_11 = new lib.Symbole9();
	this.instance_11.setTransform(435.15,235.9,0.4227,0.4227,25.6881,0,0,160.8,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buzz, new cjs.Rectangle(0.1,-0.1,567.3,291), null);


// stage content:
(lib.scene_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [79];
	// timeline functions:
	this.frame_79 = function() {
		var _this = this;
		/*
		Arrête l’animation complète.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(41));

	// Texte
	this.instance = new lib.Texte();
	this.instance.setTransform(960,540);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({alpha:1},15).wait(41));

	// Fond
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#161615").ss(1,1,1).p("EiW6hWbMEt1AAAMAAACs4Mkt1AAAg");
	this.shape.setTransform(959.825,544.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EiW6BWdMAAAis5MEt1AAAMAAACs5g");
	this.shape_1.setTransform(959.825,544.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},60).wait(60));

	// buzz_bras
	this.instance_1 = new lib.buzz_bras();
	this.instance_1.setTransform(-240.5,292.35,1,1,0,0,0,19.4,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:78.5,regY:74.5,rotation:-1.3227,x:-34.45,y:360.9},0).wait(1).to({rotation:-2.6455,x:112.45,y:378.8},0).wait(1).to({rotation:-3.9682,x:259.3,y:396.65},0).wait(1).to({rotation:-5.291,x:406.15,y:414.55},0).wait(1).to({rotation:-6.6137,x:553.05,y:432.4},0).wait(1).to({rotation:-7.9364,x:699.8,y:450.25},0).wait(1).to({rotation:-9.2592,x:846.55,y:468.05},0).wait(1).to({rotation:-10.5819,x:993.25,y:485.85},0).wait(1).to({rotation:-11.9047,x:1139.85,y:503.55},0).wait(1).to({rotation:-13.2274,x:1286.5,y:521.3},0).wait(1).to({rotation:-14.5502,x:1433.15,y:539.05},0).wait(1).to({rotation:-15.8729,x:1579.7,y:556.75},0).wait(1).to({rotation:-17.1956,x:1726.2,y:574.4},0).wait(1).to({rotation:-18.5184,x:1872.7,y:592.05},0).wait(1).to({rotation:-19.8411,x:1785.95,y:535.85},0).wait(1).to({rotation:-21.1639,x:1716.55,y:519.9},0).wait(1).to({rotation:-22.4866,x:1621.05,y:487.3},0).wait(1).to({x:1557.45,y:502.1},0).wait(1).to({rotation:0,skewX:9.799,skewY:-170.201,x:1456.45,y:522.8},0).wait(1).to({skewX:8.4406,skewY:-171.5594,x:1528.85,y:487.15},0).wait(1).to({skewX:7.0822,skewY:-172.9178,x:1694.95,y:407.4},0).wait(1).to({skewX:5.7238,skewY:-174.2762,x:1689.35,y:412.35},0).wait(1).to({skewX:4.3654,skewY:-175.6346,x:1683.85,y:417.35},0).wait(1).to({skewX:3.007,skewY:-176.993,x:1678.3,y:422.2},0).wait(1).to({skewX:4.3942,skewY:-175.6058,x:1677.45,y:426.85},0).wait(1).to({skewX:5.7815,skewY:-174.2185,x:1676.55,y:431.4},0).wait(1).to({skewX:7.1687,skewY:-172.8313,x:1675.75,y:436},0).wait(1).to({skewX:8.556,skewY:-171.444,x:1674.95,y:440.5},0).wait(1).to({skewX:9.9432,skewY:-170.0568,x:1674.25,y:445.1},0).wait(1).to({skewX:11.3304,skewY:-168.6696,x:1676.9,y:442.05},0).wait(1).to({skewX:12.7177,skewY:-167.2823,x:1679.6,y:438.95},0).wait(1).to({skewX:14.1049,skewY:-165.8951,x:1682.3,y:435.9},0).wait(1).to({skewX:15.4922,skewY:-164.5078,x:1685.05,y:432.85},0).wait(1).to({skewX:16.8794,skewY:-163.1206,x:1687.85,y:429.75},0).wait(1).to({skewX:18.2666,skewY:-161.7334,x:1681.45,y:431.15},0).wait(1).to({skewX:19.6539,skewY:-160.3461,x:1675.05,y:432.55},0).wait(1).to({skewX:21.0411,skewY:-158.9589,x:1668.8,y:433.95},0).wait(1).to({skewX:22.4284,skewY:-157.5716,x:1662.5,y:435.3},0).wait(1).to({skewX:23.8156,skewY:-156.1844,x:1656.25,y:436.65},0).wait(1).to({skewX:25.2028,skewY:-154.7972,x:1666.65,y:426.85},0).wait(1).to({skewX:26.5901,skewY:-153.4099,x:1677.05,y:417.05},0).wait(1).to({skewX:27.9773,skewY:-152.0227,x:1687.5,y:407.25},0).wait(1).to({skewX:29.3646,skewY:-150.6354,x:1698.05,y:397.45},0).wait(1).to({skewX:30.7518,skewY:-149.2482,x:1708.6,y:387.6},0).wait(1).to({skewX:32.139,skewY:-147.861,x:1714.6,y:388.85},0).wait(1).to({skewX:33.5263,skewY:-146.4737,x:1720.6,y:390.1},0).wait(1).to({skewX:34.9135,skewY:-145.0865,x:1726.7,y:391.3},0).wait(1).to({skewX:36.3008,skewY:-143.6992,x:1732.8,y:392.6},0).wait(1).to({skewX:37.688,skewY:-142.312,x:1739,y:393.8},0).wait(1).to({skewX:123.188,skewY:-56.812,x:1985.2,y:274.55},0).wait(1).to({skewX:197.7673,skewY:17.7673,x:2099.85,y:287.6},0).wait(1).to({skewX:281.123,skewY:101.123,x:2180.65,y:259.15},0).wait(1).to({skewX:345.168,skewY:165.168,x:2251.55,y:223.3},0).wait(6).to({_off:true},1).wait(60));

	// buzz
	this.instance_2 = new lib.buzz();
	this.instance_2.setTransform(-385.25,265.1,0.9999,0.9999,6.4672,0,0,228.2,138.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:299.5,regY:149,rotation:5.3481,x:-170.65,y:304.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.228,x:-25.8,y:325.75},0).wait(1).to({rotation:3.1079,x:119.1,y:346.75},0).wait(1).to({rotation:1.9878,x:264,y:367.8},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8677,x:408.75,y:388.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.2524,x:553.55,y:409.85},0).wait(1).to({rotation:-1.3725,x:698.3,y:430.85},0).wait(1).to({rotation:-2.4926,x:843.1,y:451.85},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-3.6127,x:987.8,y:472.85},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.7328,x:1132.45,y:493.85},0).wait(1).to({rotation:-5.8529,x:1277.1,y:514.8},0).wait(1).to({rotation:-6.973,x:1421.75,y:535.8},0).wait(1).to({rotation:-8.0931,x:1566.35,y:556.8},0).wait(1).to({rotation:-9.2132,x:1710.9,y:577.8},0).wait(1).to({rotation:-43.4291,x:1647.1,y:576.9},0).wait(1).to({rotation:-62.8712,x:1603.95,y:577.8},0).wait(1).to({rotation:-85.3582,x:1549.3,y:564.6},0).wait(1).to({x:1485.7,y:578.25},0).wait(1).to({rotation:-84.8035,x:1489.9,y:577.2},0).wait(1).to({rotation:-84.2488,x:1572.5,y:545.9},0).wait(1).to({rotation:-83.6941,x:1736.6,y:463.55},0).wait(1).to({rotation:-83.1393,x:1734.7,y:467.3},0).wait(1).to({rotation:-82.5846,x:1732.95,y:471.05},0).wait(1).to({rotation:-82.0299,x:1731.1,y:474.8},0).wait(1).to({rotation:-81.4752,x:1728.5,y:479.6},0).wait(1).to({rotation:-80.9205,x:1725.85,y:484.3},0).wait(1).to({rotation:-80.3658,x:1723.25,y:489.1},0).wait(1).to({rotation:-79.811,x:1720.65,y:493.85},0).wait(1).to({rotation:-79.2563,x:1718,y:498.6},0).wait(1).to({rotation:-78.7016,x:1719.8,y:497.85},0).wait(1).to({rotation:-78.1469,x:1721.7,y:497.15},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-77.5922,x:1723.6,y:496.35},0).wait(1).to({scaleX:1,scaleY:1,rotation:-77.0375,x:1725.5,y:495.65},0).wait(1).to({rotation:-76.4827,x:1727.4,y:494.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-75.928,x:1720.55,y:497.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-75.3733,x:1713.7,y:500.9},0).wait(1).to({rotation:-74.8186,x:1706.95,y:503.95},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-74.2639,x:1700.05,y:507},0).wait(1).to({scaleX:1,scaleY:1,rotation:-73.7092,x:1693.2,y:510.1},0).wait(1).to({rotation:-73.1544,x:1705.4,y:502.15},0).wait(1).to({rotation:-72.5997,x:1717.5,y:494.35},0).wait(1).to({rotation:-72.045,x:1729.65,y:486.55},0).wait(1).to({rotation:-71.4903,x:1741.8,y:478.7},0).wait(1).to({rotation:-70.9356,x:1753.95,y:470.85},0).wait(1).to({rotation:-70.3809,x:1761.3,y:471.3},0).wait(1).to({rotation:-69.8261,x:1768.6,y:471.75},0).wait(1).to({rotation:-69.2714,x:1775.9,y:472.15},0).wait(1).to({rotation:-68.7167,x:1783.2,y:472.6},0).wait(1).to({rotation:-68.162,x:1790.45,y:473},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:17.3357,x:1854.3,y:460.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:91.9165,x:1861.8,y:337.4},0).wait(1).to({rotation:175.274,x:2043.75,y:198.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:239.32,x:2162.45,y:196.4},0).wait(6).to({_off:true},1).wait(60));

	// Woody_bras_g
	this.instance_3 = new lib.Symbole12();
	this.instance_3.setTransform(1312.05,580.7,1,1,0,0,0,69.7,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:67.5,regY:18.5,x:1309.85,y:579.1},0).wait(19).to({rotation:0.5732,x:1364.25,y:564.2},0).wait(1).to({rotation:1.1465,x:1527.7,y:481.65},0).wait(1).to({rotation:1.7197,x:1531.5,y:480.5},0).wait(1).to({rotation:2.2929,x:1535.4,y:479.4},0).wait(1).to({rotation:2.8662,x:1539.2,y:478.3},0).wait(1).to({rotation:3.4394,x:1535.35,y:479.3},0).wait(1).to({rotation:4.0126,x:1531.4,y:480.35},0).wait(1).to({rotation:4.5859,x:1527.45,y:481.45},0).wait(1).to({rotation:5.1591,x:1523.5,y:482.5},0).wait(1).to({rotation:5.7323,x:1519.55,y:483.6},0).wait(1).to({rotation:6.3056,x:1523.15,y:482.15},0).wait(1).to({rotation:6.8788,x:1526.75,y:480.75},0).wait(1).to({rotation:7.452,x:1530.4,y:479.35},0).wait(1).to({rotation:8.0253,x:1533.95,y:477.9},0).wait(1).to({rotation:8.5985,x:1537.6,y:476.55},0).wait(1).to({rotation:9.1717,x:1531.9,y:479.65},0).wait(1).to({rotation:9.745,x:1526.25,y:482.8},0).wait(1).to({rotation:10.3182,x:1520.6,y:485.95},0).wait(1).to({rotation:10.8914,x:1514.95,y:489.05},0).wait(1).to({rotation:11.4647,x:1509.25,y:492.2},0).wait(1).to({rotation:12.0379,x:1521.4,y:474.05},0).wait(1).to({rotation:12.6111,x:1533.45,y:455.8},0).wait(1).to({rotation:13.1844,x:1545.6,y:437.6},0).wait(1).to({rotation:13.7576,x:1557.7,y:419.35},0).wait(1).to({rotation:14.3308,x:1569.8,y:401.15},0).wait(1).to({rotation:14.9041,x:1573.3,y:406.9},0).wait(1).to({rotation:15.4773,x:1576.75,y:412.55},0).wait(1).to({rotation:16.0505,x:1580.25,y:418.25},0).wait(1).to({rotation:16.6238,x:1583.75,y:423.95},0).wait(1).to({rotation:17.197,x:1587.3,y:429.6},0).wait(1).to({rotation:102.696,x:1881.4,y:255.35},0).wait(1).to({rotation:177.275,x:2039.25,y:315.85},0).wait(1).to({rotation:260.631,x:2048.2,y:310.1},0).wait(1).to({rotation:376.104,x:2123.3,y:162.75},0).wait(6).to({_off:true},1).wait(60));

	// WOODY
	this.instance_4 = new lib.Symbole13();
	this.instance_4.setTransform(1305.15,609.65,1,1,0,0,0,172.3,171.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:172.2,regY:171.8,x:1305.05,y:609.75},0).wait(19).to({rotation:0.5732,x:1359.45,y:594.85},0).wait(1).to({rotation:1.1465,x:1522.8,y:512.3},0).wait(1).to({rotation:1.7197,x:1526.65,y:511.2},0).wait(1).to({rotation:2.2929,x:1530.55,y:510.1},0).wait(1).to({rotation:2.8662,x:1534.4,y:509},0).wait(1).to({rotation:3.4394,x:1530.45,y:510.15},0).wait(1).to({rotation:4.0126,x:1526.5,y:511.2},0).wait(1).to({rotation:4.5859,x:1522.45,y:512.25},0).wait(1).to({rotation:5.1591,x:1518.5,y:513.35},0).wait(1).to({rotation:5.7323,x:1514.6,y:514.45},0).wait(1).to({rotation:6.3056,x:1518.15,y:513},0).wait(1).to({rotation:6.8788,x:1521.7,y:511.6},0).wait(1).to({rotation:7.452,x:1525.3,y:510.3},0).wait(1).to({rotation:8.0253,x:1528.85,y:508.85},0).wait(1).to({rotation:8.5985,x:1532.45,y:507.45},0).wait(1).to({rotation:9.1717,x:1526.8,y:510.65},0).wait(1).to({rotation:9.745,x:1521.1,y:513.75},0).wait(1).to({rotation:10.3182,x:1515.45,y:516.9},0).wait(1).to({rotation:10.8914,x:1509.8,y:520.1},0).wait(1).to({rotation:11.4647,x:1504.1,y:523.25},0).wait(1).to({rotation:12.0379,x:1516.15,y:505},0).wait(1).to({rotation:12.6111,x:1528.3,y:486.85},0).wait(1).to({rotation:13.1844,x:1540.35,y:468.65},0).wait(1).to({rotation:13.7576,x:1552.45,y:450.45},0).wait(1).to({rotation:14.3308,x:1564.55,y:432.25},0).wait(1).to({rotation:14.9041,x:1566.4,y:437.3},0).wait(1).to({rotation:15.4773,x:1568.3,y:442.35},0).wait(1).to({rotation:16.0505,x:1570.2,y:447.4},0).wait(1).to({rotation:16.6238,x:1572.1,y:452.4},0).wait(1).to({rotation:17.197,x:1574,y:457.45},0).wait(1).to({rotation:102.696,x:1852.6,y:244.35},0).wait(1).to({rotation:177.275,x:2043.45,y:289.35},0).wait(1).to({rotation:260.631,x:2065.9,y:317.2},0).wait(1).to({rotation:376.104,x:2110.25,y:175.5},0).wait(6).to({_off:true},1).wait(60));

	// WOODY_JAMBE
	this.instance_5 = new lib.Symbole15();
	this.instance_5.setTransform(1305.75,782.85,1,1,0,0,0,75.9,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:75.8,x:1305.65},0).wait(19).to({rotation:0.5732,x:1360.05,y:767.95},0).wait(1).to({rotation:1.1465,x:1523.45,y:685.45},0).wait(1).to({rotation:1.7197,x:1527.3,y:684.3},0).wait(1).to({rotation:2.2929,x:1531.15,y:683.2},0).wait(1).to({rotation:2.8662,x:1535,y:682.1},0).wait(1).to({rotation:3.4394,x:1531.3,y:683.1},0).wait(1).to({rotation:4.0126,x:1527.7,y:684.1},0).wait(1).to({rotation:4.5859,x:1524.1,y:685.05},0).wait(1).to({rotation:5.1591,x:1520.45,y:686.05},0).wait(1).to({rotation:5.7323,x:1516.8,y:687.05},0).wait(1).to({rotation:6.3056,x:1520.15,y:685.7},0).wait(1).to({rotation:6.8788,x:1523.45,y:684.45},0).wait(1).to({rotation:7.452,x:1526.75,y:683.15},0).wait(1).to({rotation:8.0253,x:1530.1,y:681.8},0).wait(1).to({rotation:8.5985,x:1533.35,y:680.5},0).wait(1).to({rotation:9.1717,x:1528.1,y:683.45},0).wait(1).to({rotation:9.745,x:1522.8,y:686.4},0).wait(1).to({rotation:10.3182,x:1517.5,y:689.35},0).wait(1).to({rotation:10.8914,x:1512.25,y:692.25},0).wait(1).to({rotation:11.4647,x:1506.95,y:695.25},0).wait(1).to({rotation:12.0379,x:1518.1,y:677.6},0).wait(1).to({rotation:12.6111,x:1529.2,y:659.95},0).wait(1).to({rotation:13.1844,x:1540.4,y:642.3},0).wait(1).to({rotation:13.7576,x:1551.5,y:624.7},0).wait(1).to({rotation:14.3308,x:1562.7,y:607.05},0).wait(1).to({rotation:14.9041,x:1554.35,y:610.6},0).wait(1).to({rotation:15.4773,x:1545.95,y:614.1},0).wait(1).to({rotation:16.0505,x:1537.55,y:617.6},0).wait(1).to({rotation:16.6238,x:1529.2,y:621.1},0).wait(1).to({rotation:17.197,x:1520.8,y:624.65},0).wait(1).to({rotation:104.417,x:1688.85,y:204.15},0).wait(1).to({rotation:190.407,x:2093.35,y:147.65},0).wait(1).to({rotation:295.9215,x:2192.2,y:450.2},0).wait(1).to({rotation:397.1991,x:1967.4,y:354.85},0).wait(6).to({_off:true},1).wait(60));

	// WOODY_Biceps
	this.instance_6 = new lib.Symbole16();
	this.instance_6.setTransform(1182.45,581,1,1,0,0,0,33,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({x:1236.85,y:566.15},0).wait(1).to({x:1400.25,y:483.6},0).wait(1).to({x:1404.1,y:482.5},0).wait(1).to({x:1407.95,y:481.4},0).wait(1).to({x:1411.8,y:480.3},0).wait(1).to({x:1408.15,y:481.25},0).wait(1).to({x:1404.5,y:482.25},0).wait(1).to({x:1400.9,y:483.25},0).wait(1).to({x:1397.25,y:484.25},0).wait(1).to({x:1393.65,y:485.25},0).wait(1).to({x:1396.95,y:483.9},0).wait(1).to({x:1400.25,y:482.6},0).wait(1).to({x:1403.55,y:481.25},0).wait(1).to({x:1406.85,y:479.95},0).wait(1).to({x:1410.2,y:478.65},0).wait(1).to({x:1404.9,y:481.6},0).wait(1).to({x:1399.6,y:484.55},0).wait(1).to({x:1394.3,y:487.5},0).wait(1).to({x:1389,y:490.45},0).wait(1).to({x:1383.75,y:493.45},0).wait(1).to({x:1387.05,y:492.1},0).wait(1).to({x:1390.35,y:490.75},0).wait(1).to({x:1393.65,y:489.45},0).wait(1).to({x:1396.95,y:488.1},0).wait(1).to({x:1400.25,y:486.8},0).wait(15).to({_off:true},1).wait(60));

	// WOODY_BRAS
	this.instance_7 = new lib.Symbole17();
	this.instance_7.setTransform(1168.8,506.65,1,1,0,0,0,23.1,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:23,x:1168.7},0).wait(19).to({rotation:-76.7257,x:1168.4,y:519.5},0).wait(1).to({x:1331.8,y:436.95},0).wait(1).to({x:1335.65,y:435.85},0).wait(1).to({x:1339.5,y:434.75},0).wait(1).to({x:1343.35,y:433.65},0).wait(1).to({x:1339.75,y:434.65},0).wait(1).to({x:1336.1,y:435.65},0).wait(1).to({x:1332.45,y:436.65},0).wait(1).to({x:1328.85,y:437.65},0).wait(1).to({x:1325.2,y:438.6},0).wait(1).to({x:1328.5,y:437.3},0).wait(1).to({x:1331.85,y:436},0).wait(1).to({x:1335.15,y:434.65},0).wait(1).to({x:1338.45,y:433.35},0).wait(1).to({x:1341.75,y:432},0).wait(1).to({x:1336.45,y:435},0).wait(1).to({x:1331.2,y:437.95},0).wait(1).to({x:1325.9,y:440.9},0).wait(1).to({x:1320.6,y:443.85},0).wait(1).to({x:1315.3,y:446.8},0).wait(1).to({x:1318.6,y:445.5},0).wait(1).to({x:1321.9,y:444.15},0).wait(1).to({x:1325.2,y:442.85},0).wait(1).to({x:1328.5,y:441.5},0).wait(1).to({x:1331.8,y:440.15},0).wait(15).to({_off:true},1).wait(60));

	// zurg_bras
	this.instance_8 = new lib.Symbole18();
	this.instance_8.setTransform(1207.45,579.7,1,1,0,0,0,78.6,107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:78.5,x:1207.35},0).wait(19).to({rotation:-44.4316,x:1258.5,y:513.55},0).wait(1).to({rotation:-70.9585,x:1250.25,y:468.85},0).wait(1).to({x:1254.1,y:467.75},0).wait(1).to({x:1257.95,y:466.65},0).wait(1).to({x:1261.8,y:465.55},0).wait(1).to({x:1258.15,y:466.55},0).wait(1).to({x:1254.5,y:467.55},0).wait(1).to({x:1250.9,y:468.5},0).wait(1).to({x:1247.25,y:469.5},0).wait(1).to({x:1243.65,y:470.5},0).wait(1).to({x:1246.95,y:469.2},0).wait(1).to({x:1250.25,y:467.85},0).wait(1).to({x:1253.55,y:466.55},0).wait(1).to({x:1256.85,y:465.2},0).wait(1).to({x:1260.2,y:463.9},0).wait(1).to({x:1254.9,y:466.85},0).wait(1).to({x:1249.6,y:469.8},0).wait(1).to({x:1244.3,y:472.8},0).wait(1).to({x:1239,y:475.75},0).wait(1).to({x:1233.75,y:478.7},0).wait(1).to({x:1237.05,y:477.35},0).wait(1).to({x:1240.35,y:476.05},0).wait(1).to({x:1243.65,y:474.7},0).wait(1).to({x:1246.95,y:473.4},0).wait(1).to({x:1250.25,y:472.05},0).wait(15).to({_off:true},1).wait(60));

	// zurg
	this.instance_9 = new lib.Symbole4();
	this.instance_9.setTransform(1082.1,624.8,0.7926,0.7926,0,0,0,257.4,353.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:257.5,regY:353,x:1082.15,y:624.7},0).wait(58).to({_off:true},1).wait(60));

	// fond
	this.instance_10 = new lib.CachedBmp_97();
	this.instance_10.setTransform(-0.7,-0.5,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_98();
	this.instance_11.setTransform(-0.7,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},59).to({state:[]},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(342.2,502.8,2021.3,611.7);
// library properties:
lib.properties = {
	id: '8DD6B1936FD247D7B79A8098A999F934',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_98.png?1666896048485", id:"CachedBmp_98"},
		{src:"images/CachedBmp_97.png?1666896048485", id:"CachedBmp_97"},
		{src:"images/scene_4.2_atlas_1.png?1666896048428", id:"scene_4.2_atlas_1"},
		{src:"images/scene_4.2_atlas_2.png?1666896048428", id:"scene_4.2_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8DD6B1936FD247D7B79A8098A999F934'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;