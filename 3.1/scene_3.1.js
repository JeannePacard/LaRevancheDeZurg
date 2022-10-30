(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "scene_3.1_atlas_1",
      frames: [
        [0, 1414, 1154, 406],
        [1032, 0, 973, 970],
        [0, 0, 1030, 1412],
      ],
    },
    {
      name: "scene_3.1_atlas_2",
      frames: [
        [0, 407, 1240, 294],
        [0, 0, 1150, 405],
        [1242, 0, 429, 606],
      ],
    },
  ];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.CachedBmp_17 = function () {
    this.initialize(ss["scene_3.1_atlas_2"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_16 = function () {
    this.initialize(ss["scene_3.1_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_15 = function () {
    this.initialize(ss["scene_3.1_atlas_2"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_14 = function () {
    this.initialize(ss["scene_3.1_atlas_2"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_13 = function () {
    this.initialize(ss["scene_3.1_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_12 = function () {
    this.initialize(ss["scene_3.1_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_11 = function () {
    this.initialize(img.CachedBmp_11);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2457, 1027); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
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

  (lib.Symbole10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_17();
    this.instance.setTransform(-310, -73.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole10,
    new cjs.Rectangle(-310, -73.5, 620, 147),
    null
  );

  (lib.Symbole9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_16();
    this.instance.setTransform(-288.5, -101.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole9,
    new cjs.Rectangle(-288.5, -101.5, 577, 203),
    null
  );

  (lib.Symbole8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_15();
    this.instance.setTransform(-287.5, -101.25, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole8,
    new cjs.Rectangle(-287.5, -101.2, 575, 202.5),
    null
  );

  (lib.Symbole7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_14();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole7,
    new cjs.Rectangle(0, 0, 214.5, 303),
    null
  );

  (lib.Symbole6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_13();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole6,
    new cjs.Rectangle(0, 0, 486.5, 485),
    null
  );

  (lib.Symbole5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFB500")
      .s()
      .p(
        "AjfIbQgWgLgDgpQgCgdAHgcQACgHAAgHQgIjTDBmMQA9iABGh7IA9hnIAyAVQA1AYAJAUQAKAThEEHIhmF4QgbBlhgB6QgzBBgpAoIgCACQgQAagcAIQgLAEgLAAQgOAAgOgHg"
      );
    this.shape.setTransform(24.9676, 96.6179);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CB7D49")
      .s()
      .p(
        "AhYCRQgKgBgSg/QgShEAGghQAKgsBFgeQBUgdAlgQQAugUAKBDQAFAjgEAlIAAAoQgCA1gIAQQgIAVgIADIgrAQQg4AQhSAAIgKAAg"
      );
    this.shape_1.setTransform(52.1421, 14.4831);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole5,
    new cjs.Rectangle(0, 0, 65.2, 151.3),
    null
  );

  (lib.Symbole4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_12();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole4,
    new cjs.Rectangle(0, 0, 515, 706),
    null
  );

  (lib.Symbole2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.CachedBmp_11();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole2,
    new cjs.Rectangle(0, 0, 1228.5, 513.5),
    null
  );

  (lib.Rectangle = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#1E1E1E").s().p("EiWABUYMAAAiovMEsBAAAMAAACovg");
    this.shape.setTransform(960.1, 540);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Rectangle,
    new cjs.Rectangle(0, 0, 1920.2, 1080),
    null
  );

  (lib.Path_9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EhJfhkDIVF3VMB96DyIIpiEpg");
    this.shape.setTransform(507.15, 826.675);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_9,
    new cjs.Rectangle(36.8, 37, 940.8000000000001, 1579.4),
    null
  );

  (lib.Path_8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EhD+Bm7MBq6jQ0IdEOhMiDaDFSg");
    this.shape.setTransform(471.65, 714.55);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_8,
    new cjs.Rectangle(36.5, 36.8, 870.3, 1355.6000000000001),
    null
  );

  (lib.Path_7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EievBJOME9eiSbIkNZPMk1DB5Mg");
    this.shape.setTransform(1052.8, 504.925);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_7,
    new cjs.Rectangle(36.9, 36.3, 2031.9, 937.3000000000001),
    null
  );

  (lib.Path_6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EiFTAAAIAAmJMEKngFCIoVWYg");
    this.shape.setTransform(889.75, 107.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_6,
    new cjs.Rectangle(36.6, 36.3, 1706.4, 143.3),
    null
  );

  (lib.Path_5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EhRHAFVIAAqyMCiPACRIAAIpg");
    this.shape.setTransform(555.475, 71.25);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_5,
    new cjs.Rectangle(36.3, 36.3, 1038.4, 69.9),
    null
  );

  (lib.Path_4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EhIGhhIIUs2pMB7gDrCIpWEhg");
    this.shape.setTransform(461.45, 766.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_4,
    new cjs.Rectangle(0, 0, 922.9, 1533.2),
    null
  );

  (lib.Path_3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EhCtBkDMBo6jK/IchOIMiA7C/wg");
    this.shape.setTransform(426.975, 658.85);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_3,
    new cjs.Rectangle(0, 0, 854, 1317.7),
    null
  );

  (lib.Path_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EiaRBG6ME0iiNzIkFYcMksWB1Xg");
    this.shape.setTransform(987.35, 453.775);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_2,
    new cjs.Rectangle(0, 0, 1974.7, 907.6),
    null
  );

  (lib.Path_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EiBZAAAIAAmJMECygFCIoEWXg");
    this.shape.setTransform(828.15, 71.625);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_1,
    new cjs.Rectangle(0, 0, 1656.3, 143.3),
    null
  );

  (lib.Path = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("EhNkAFVIAAqxMCbJACQIAAIpg");
    this.shape.setTransform(496.5, 34.925);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path,
    new cjs.Rectangle(0, 0, 993, 69.9),
    null
  );

  (lib.Symbole1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.Path();
    this.instance.setTransform(496.5, 1536.6, 1, 1, 0, 0, 0, 496.5, 34.9);
    this.instance.alpha = 0.6992;

    this.instance_1 = new lib.Path_1();
    this.instance_1.setTransform(1773.45, 1570.25, 1, 1, 0, 0, 0, 828.1, 71.6);
    this.instance_1.alpha = 0.6992;

    this.instance_2 = new lib.Path_2();
    this.instance_2.setTransform(1954.15, 1091.45, 1, 1, 0, 0, 0, 987.4, 453.8);
    this.instance_2.alpha = 0.6992;

    this.instance_3 = new lib.Path_3();
    this.instance_3.setTransform(1405.45, 933.05, 1, 1, 0, 0, 0, 426.9, 658.9);
    this.instance_3.alpha = 0.6992;

    this.instance_4 = new lib.Path_4();
    this.instance_4.setTransform(576.85, 770, 1, 1, 0, 0, 0, 461.4, 766.6);
    this.instance_4.alpha = 0.6992;

    this.instance_5 = new lib.Path_5();
    this.instance_5.setTransform(519.2, 1533.2, 1, 1, 0, 0, 0, 555.5, 71.2);
    this.instance_5.alpha = 0.6992;

    this.instance_6 = new lib.Path_6();
    this.instance_6.setTransform(1748.5, 1566.9, 1, 1, 0, 0, 0, 889.8, 107.9);
    this.instance_6.alpha = 0.6992;

    this.instance_7 = new lib.Path_7();
    this.instance_7.setTransform(1925.5, 1102.9, 1, 1, 0, 0, 0, 1052.8, 504.9);
    this.instance_7.alpha = 0.6992;

    this.instance_8 = new lib.Path_8();
    this.instance_8.setTransform(1397.4, 948.6, 1, 1, 0, 0, 0, 471.7, 714.6);
    this.instance_8.alpha = 0.6992;

    this.instance_9 = new lib.Path_9();
    this.instance_9.setTransform(585.9, 789.6, 1, 1, 0, 0, 0, 507.2, 826.6);
    this.instance_9.alpha = 0.6992;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_9 },
            { t: this.instance_8 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole1,
    new cjs.Rectangle(0, 0, 2941.5, 1641.9),
    null
  );

  // stage content:
  (lib.scene_31 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [18];
    // timeline functions:
    this.frame_18 = function () {
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_2.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("../4.4/scene_4.4.html", "_self");
      });

      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_3.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("../4.2/scene_4.2.html", "_self");
      });

      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_1.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("../4.1/scene_4.1.html", "_self");
      });

      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1)
    );

    // SAUVER
    this.movieClip_2 = new lib.Symbole9();
    this.movieClip_2.name = "movieClip_2";
    this.movieClip_2.setTransform(1298.5, 407.45);
    this.movieClip_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_2).wait(18).to({ _off: false }, 0).wait(1)
    );

    // RISQUES
    this.movieClip_3 = new lib.Symbole10();
    this.movieClip_3.name = "movieClip_3";
    this.movieClip_3.setTransform(960, 629);
    this.movieClip_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_3).wait(18).to({ _off: false }, 0).wait(1)
    );

    // BATTERIES
    this.movieClip_1 = new lib.Symbole8();
    this.movieClip_1.name = "movieClip_1";
    this.movieClip_1.setTransform(620.5, 407.2);
    this.movieClip_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_1).wait(18).to({ _off: false }, 0).wait(1)
    );

    // FOND
    this.instance = new lib.Rectangle();
    this.instance.setTransform(960.1, 540, 1, 1, 0, 0, 0, 960.1, 540);
    this.instance.alpha = 0.7188;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(18).to({ _off: false }, 0).wait(1)
    );

    // FLASH_BUZZ
    this.instance_1 = new lib.Symbole1();
    this.instance_1.setTransform(
      307.15,
      1240.25,
      0.0556,
      0.0556,
      0,
      0,
      0,
      993.1,
      1634.8
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          {
            regX: 1470.7,
            regY: 821,
            scaleX: 0.3272,
            scaleY: 0.3272,
            x: 463.45,
            y: 974,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.5987, scaleY: 0.5987, x: 593.1, y: 753 }, 0)
        .wait(1)
        .to({ scaleX: 0.8703, scaleY: 0.8703, x: 722.85, y: 532.05 }, 0)
        .wait(1)
        .to({ scaleX: 1.1418, scaleY: 1.1418, x: 852.5, y: 311.1 }, 0)
        .wait(1)
        .to({ scaleX: 1.4134, scaleY: 1.4134, x: 982.2, y: 90.1 }, 0)
        .wait(1)
        .to({ scaleX: 1.4331, scaleY: 1.5006, x: 991.65, y: 19.1 }, 0)
        .wait(1)
        .to({ scaleX: 1.4529, scaleY: 1.5879, x: 1001.05, y: -51.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.4726, scaleY: 1.6751, x: 1010.5, y: -122.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.3023, scaleY: 1.4957, x: 929.15, y: 23.1 }, 0)
        .wait(1)
        .to({ scaleX: 1.1319, scaleY: 1.3163, x: 847.75, y: 169.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.9616, scaleY: 1.137, x: 766.4, y: 315.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.7912, scaleY: 0.9576, x: 685.05, y: 461.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.6208, scaleY: 0.7782, x: 603.7, y: 607.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.4505, scaleY: 0.5988, x: 522.3, y: 753 }, 0)
        .wait(1)
        .to({ scaleX: 0.2801, scaleY: 0.4194, x: 440.9, y: 898.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.1098, scaleY: 0.24, x: 359.55, y: 1044.95 }, 0)
        .wait(1)
        .to(
          { scaleX: 0.0606, scaleY: 0.0606, skewY: 180, x: 278.2, y: 1190.95 },
          0
        )
        .wait(2)
    );

    // WOODY_JAMBE
    this.instance_2 = new lib.Symbole7();
    this.instance_2.setTransform(1279.6, 718.55);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to(
          { regX: 107.2, regY: 151.5, rotation: -5.4906, x: 1414.9, y: 844.95 },
          0
        )
        .wait(1)
        .to({ rotation: -10.9812, x: 1424.65, y: 833.1 }, 0)
        .wait(1)
        .to({ rotation: -16.4718, x: 1450.45, y: 825.3 }, 0)
        .wait(1)
        .to({ rotation: -21.9624, x: 1477.15, y: 796 }, 0)
        .wait(1)
        .to({ rotation: -27.453, x: 1507.2, y: 769.3 }, 0)
        .wait(1)
        .to({ rotation: -32.9436, x: 1525.9, y: 739.45 }, 0)
        .wait(1)
        .to({ rotation: -38.4342, x: 1529.5, y: 733.4 }, 0)
        .wait(1)
        .to({ rotation: -43.9248, x: 1550.45, y: 711.95 }, 0)
        .wait(1)
        .to({ rotation: -49.4155, x: 1564.05, y: 681.75 }, 0)
        .wait(1)
        .to({ rotation: -54.9061, x: 1565.15, y: 660.2 }, 0)
        .wait(1)
        .to({ rotation: -60.3967, x: 1574.1, y: 635.45 }, 0)
        .wait(1)
        .to({ rotation: -65.8873, x: 1581.35, y: 603.6 }, 0)
        .wait(1)
        .to({ rotation: -71.3779, x: 1599.65, y: 575.4 }, 0)
        .wait(1)
        .to({ rotation: -76.8685, x: 1574.4, y: 547.85 }, 0)
        .wait(1)
        .to({ rotation: -82.3591, x: 1536.5, y: 538.8 }, 0)
        .wait(1)
        .to({ rotation: -87.8497, x: 1537.3, y: 523.35 }, 0)
        .wait(1)
        .to({ rotation: -93.3403, x: 1517.35, y: 510.8 }, 0)
        .wait(2)
    );

    // WOODY
    this.instance_3 = new lib.Symbole6();
    this.instance_3.setTransform(1160.85, 555.8, 1, 1, 0, 0, 0, 18.1, 172.7);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to(
          { regX: 243.2, regY: 242.5, rotation: -2.2199, x: 1396.85, y: 608.4 },
          0
        )
        .wait(1)
        .to({ rotation: -4.4397, x: 1390.6, y: 605.1 }, 0)
        .wait(1)
        .to({ rotation: -6.6596, x: 1400.85, y: 607.4 }, 0)
        .wait(1)
        .to({ rotation: -8.8795, x: 1413.65, y: 590 }, 0)
        .wait(1)
        .to({ rotation: -11.0993, x: 1431.6, y: 575.35 }, 0)
        .wait(1)
        .to({ rotation: -13.3192, x: 1440.75, y: 557.9 }, 0)
        .wait(1)
        .to({ rotation: -15.5391, x: 1430, y: 557.15 }, 0)
        .wait(1)
        .to({ rotation: -17.7589, x: 1441.3, y: 547.95 }, 0)
        .wait(1)
        .to({ rotation: -19.9788, x: 1446.6, y: 530.45 }, 0)
        .wait(1)
        .to({ rotation: -22.1986, x: 1440.4, y: 524.1 }, 0)
        .wait(1)
        .to({ rotation: -24.4185, x: 1450.65, y: 515.05 }, 0)
        .wait(1)
        .to({ rotation: -26.6384, x: 1457.75, y: 497.6 }, 0)
        .wait(1)
        .to({ rotation: -28.8582, x: 1461.7, y: 483.05 }, 0)
        .wait(1)
        .to({ rotation: -31.0781, x: 1437.3, y: 468.55 }, 0)
        .wait(1)
        .to({ rotation: -33.298, x: 1398.55, y: 473.75 }, 0)
        .wait(1)
        .to({ rotation: -35.5178, x: 1398.7, y: 473.4 }, 0)
        .wait(1)
        .to({ rotation: -37.7377, x: 1381.65, y: 473.15 }, 0)
        .wait(2)
    );

    // WOODY_BRAS
    this.instance_4 = new lib.Symbole5();
    this.instance_4.setTransform(1193.45, 480.1, 1, 1, 0, 0, 0, 32.6, 75.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(1)
        .to({ x: 1201.85, y: 471.7 }, 0)
        .wait(1)
        .to({ x: 1193.45, y: 477.3 }, 0)
        .wait(1)
        .to({ x: 1201.85, y: 488.5 }, 0)
        .wait(1)
        .to({ x: 1213.05, y: 480.1 }, 0)
        .wait(1)
        .to({ x: 1229.85, y: 474.5 }, 0)
        .wait(1)
        .to({ x: 1238.25, y: 466.1 }, 0)
        .wait(1)
        .to({ x: 1227.05, y: 474.5 }, 0)
        .wait(1)
        .to({ x: 1238.25 }, 0)
        .wait(1)
        .to({ x: 1243.85, y: 466.1 }, 0)
        .wait(1)
        .to({ x: 1238.25, y: 468.9 }, 0)
        .wait(1)
        .to({ x: 1249.45 }, 0)
        .wait(1)
        .to({ x: 1257.85, y: 460.5 }, 0)
        .wait(1)
        .to({ x: 1263.45, y: 454.9 }, 0)
        .wait(1)
        .to({ x: 1241.05, y: 449.3 }, 0)
        .wait(1)
        .to({ x: 1204.7, y: 463.3 }, 0)
        .wait(1)
        .to({ x: 1207.5, y: 471.7 }, 0)
        .wait(1)
        .to({ x: 1193.5, y: 480.1 }, 0)
        .wait(2)
    );

    // ZURG
    this.instance_5 = new lib.Symbole4();
    this.instance_5.setTransform(1017.35, 438.35, 1, 1, 0, 0, 0, 257.4, 353.1);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(1)
        .to({ regX: 257.5, regY: 353, x: 1025.85, y: 429.85 }, 0)
        .wait(1)
        .to({ x: 1017.45, y: 435.45 }, 0)
        .wait(1)
        .to({ x: 1025.85, y: 446.65 }, 0)
        .wait(1)
        .to({ x: 1037.05, y: 438.25 }, 0)
        .wait(1)
        .to({ x: 1053.85, y: 432.65 }, 0)
        .wait(1)
        .to({ x: 1062.25, y: 424.25 }, 0)
        .wait(1)
        .to({ x: 1051.05, y: 432.65 }, 0)
        .wait(1)
        .to({ x: 1062.25 }, 0)
        .wait(1)
        .to({ x: 1067.85, y: 424.25 }, 0)
        .wait(1)
        .to({ x: 1062.25, y: 427.05 }, 0)
        .wait(1)
        .to({ x: 1073.45 }, 0)
        .wait(1)
        .to({ x: 1081.85, y: 418.65 }, 0)
        .wait(1)
        .to({ x: 1087.45, y: 413.05 }, 0)
        .wait(1)
        .to({ x: 1065.05, y: 407.45 }, 0)
        .wait(1)
        .to({ x: 1028.7, y: 421.45 }, 0)
        .wait(1)
        .to({ x: 1031.5, y: 429.85 }, 0)
        .wait(1)
        .to({ x: 1017.5, y: 438.25 }, 0)
        .wait(2)
    );

    // SOL
    this.instance_6 = new lib.Symbole2();
    this.instance_6.setTransform(1333.45, 892.5, 1, 1, 0, 0, 0, 614.3, 256.8);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to({ regX: 614.2, x: 1341.75, y: 884.1 }, 0)
        .wait(1)
        .to({ x: 1333.35, y: 889.7 }, 0)
        .wait(1)
        .to({ x: 1341.75, y: 900.9 }, 0)
        .wait(1)
        .to({ x: 1352.95, y: 892.5 }, 0)
        .wait(1)
        .to({ x: 1369.75, y: 886.9 }, 0)
        .wait(1)
        .to({ x: 1378.15, y: 878.5 }, 0)
        .wait(1)
        .to({ x: 1366.95, y: 886.9 }, 0)
        .wait(1)
        .to({ x: 1378.15 }, 0)
        .wait(1)
        .to({ x: 1383.75, y: 878.5 }, 0)
        .wait(1)
        .to({ x: 1378.15, y: 881.3 }, 0)
        .wait(1)
        .to({ x: 1389.35 }, 0)
        .wait(1)
        .to({ x: 1397.75, y: 872.9 }, 0)
        .wait(1)
        .to({ x: 1403.35, y: 867.3 }, 0)
        .wait(1)
        .to({ x: 1380.95, y: 861.7 }, 0)
        .wait(1)
        .to({ x: 1344.6, y: 875.7 }, 0)
        .wait(1)
        .to({ x: 1347.4, y: 884.1 }, 0)
        .wait(1)
        .to({ x: 1333.4, y: 892.5 }, 0)
        .wait(2)
    );

    // DÉCORS
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#1E1E1E").s().p("EiWABUXMAAAiouMEsBAAAMAAACoug");
    this.shape.setTransform(959.925, 542.05);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(19));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-195.2, -958.1, 3371.5, 2210.3);
  // library properties:
  lib.properties = {
    id: "9DF2AE74ABA04E2DA8E9CB0CD16797D4",
    width: 1920,
    height: 1080,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/CachedBmp_11.png?1666895235137", id: "CachedBmp_11" },
      {
        src: "images/scene_3.1_atlas_1.png?1666895235112",
        id: "scene_3.1_atlas_1",
      },
      {
        src: "images/scene_3.1_atlas_2.png?1666895235112",
        id: "scene_3.1_atlas_2",
      },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["9DF2AE74ABA04E2DA8E9CB0CD16797D4"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
