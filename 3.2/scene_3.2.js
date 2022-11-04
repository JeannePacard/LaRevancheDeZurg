(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "scene_3.2_atlas_1",
      frames: [
        [0, 1414, 1156, 432],
        [0, 0, 1030, 1412],
        [1032, 0, 973, 970],
      ],
    },
    {
      name: "scene_3.2_atlas_2",
      frames: [
        [0, 0, 1240, 294],
        [0, 296, 1150, 294],
        [1673, 0, 253, 297],
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

  (lib.CachedBmp_185 = function () {
    this.initialize(ss["scene_3.2_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_184 = function () {
    this.initialize(ss["scene_3.2_atlas_2"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_183 = function () {
    this.initialize(ss["scene_3.2_atlas_2"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_182 = function () {
    this.initialize(ss["scene_3.2_atlas_2"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_181 = function () {
    this.initialize(ss["scene_3.2_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_180 = function () {
    this.initialize(ss["scene_3.2_atlas_2"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_179 = function () {
    this.initialize(ss["scene_3.2_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_178 = function () {
    this.initialize(img.CachedBmp_178);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2457, 1027);

  (lib.CachedBmp_177 = function () {
    this.initialize(img.CachedBmp_177);
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
    this.instance = new lib.CachedBmp_185();
    this.instance.setTransform(-289, -108, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole9,
    new cjs.Rectangle(-289, -108, 578, 216),
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
    this.instance = new lib.CachedBmp_184();
    this.instance.setTransform(-310, -73.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole8,
    new cjs.Rectangle(-310, -73.5, 620, 147),
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
    this.instance = new lib.CachedBmp_183();
    this.instance.setTransform(-287.5, -73.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole7,
    new cjs.Rectangle(-287.5, -73.5, 575, 147),
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
    this.instance = new lib.CachedBmp_182();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole6,
    new cjs.Rectangle(0, 0, 126.5, 148.5),
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
    this.instance = new lib.CachedBmp_181();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole5,
    new cjs.Rectangle(0, 0, 515, 706),
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
    this.instance = new lib.CachedBmp_180();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole4,
    new cjs.Rectangle(0, 0, 214.5, 303),
    null
  );

  (lib.Symbole3 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_179();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole3,
    new cjs.Rectangle(0, 0, 486.5, 485),
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
    lib.Symbole2,
    new cjs.Rectangle(0, 0, 65.2, 151.3),
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
  (lib.scene_32 = function (mode, startPosition, loop, reversed) {
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

    this.actionFrames = [19];
    // timeline functions:
    this.frame_19 = function () {
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_3.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("/LaRevancheDeZurg/4.4/scene_4.4.html", "_self");
      });
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_2.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("/LaRevancheDeZurg/4.2/scene_4.2.html", "_self");
      });
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_1.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("/LaRevancheDeZurg/4.3/scene_4.3.html", "_self");
      });

      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1)
    );

    // SAUVER
    this.movieClip_3 = new lib.Symbole9();
    this.movieClip_3.name = "movieClip_3";
    this.movieClip_3.setTransform(960, 667);
    this.movieClip_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_3).wait(19).to({ _off: false }, 0).wait(1)
    );

    // RISQUES
    this.movieClip_2 = new lib.Symbole8();
    this.movieClip_2.name = "movieClip_2";
    this.movieClip_2.setTransform(1311.5, 433);
    this.movieClip_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_2).wait(19).to({ _off: false }, 0).wait(1)
    );

    // CONFRONTER
    this.movieClip_1 = new lib.Symbole7();
    this.movieClip_1.name = "movieClip_1";
    this.movieClip_1.setTransform(591, 433);
    this.movieClip_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_1).wait(19).to({ _off: false }, 0).wait(1)
    );

    // FOND
    this.instance = new lib.Rectangle();
    this.instance.setTransform(960.1, 540, 1, 1, 0, 0, 0, 960.1, 540);
    this.instance.alpha = 0.7188;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(19).to({ _off: false }, 0).wait(1)
    );

    // WOODY_JAMBE
    this.instance_1 = new lib.Symbole4();
    this.instance_1.setTransform(1386.8, 869.95, 1, 1, 0, 0, 0, 107.2, 151.4);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ regY: 151.5, scaleX: 0.7778, x: 1294.5, y: 870.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 1202.2, y: 871.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.3333, x: 1109.95, y: 871.8 }, 0)
        .wait(1)
        .to({ skewY: 180, x: 1076.05, y: 872.65 }, 0)
        .wait(1)
        .to({ x: 833.05, y: 873.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 740.8, y: 874.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.7778, x: 648.5, y: 874.7 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 556.25, y: 875.3 }, 0)
        .wait(12)
    );

    // WOODY
    this.instance_2 = new lib.Symbole3();
    this.instance_2.setTransform(1385.95, 625.4, 1, 1, 0, 0, 0, 243.2, 242.3);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ regY: 242.5, scaleX: 0.7778, x: 1293.65, y: 626.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 1201.35, y: 626.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.3333, x: 1109.1, y: 627.35 }, 0)
        .wait(1)
        .to({ skewY: 180, x: 1049.6, y: 628.2 }, 0)
        .wait(1)
        .to({ x: 832.3, y: 629.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 740.05, y: 629.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.7778, x: 647.75, y: 630.25 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 555.5, y: 630.85 }, 0)
        .wait(12)
    );

    // WOODY_BRAS
    this.instance_3 = new lib.Symbole2();
    this.instance_3.setTransform(1193.45, 480.1, 1, 1, 0, 0, 0, 32.6, 75.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({ x: 1144.25, y: 480.5 }, 0)
        .wait(1)
        .to({ x: 1095.05, y: 480.95 }, 0)
        .wait(1)
        .to({ x: 1045.9, y: 481.4 }, 0)
        .wait(1)
        .to({ x: 996.7, y: 481.85 }, 0)
        .wait(1)
        .to({ x: 947.5, y: 482.25 }, 0)
        .wait(1)
        .to({ x: 898.35, y: 482.7 }, 0)
        .wait(1)
        .to({ x: 849.15, y: 483.15 }, 0)
        .wait(1)
        .to({ x: 800, y: 483.6 }, 0)
        .wait(12)
    );

    // TETE
    this.instance_4 = new lib.Symbole6();
    this.instance_4.setTransform(995.95, 167.55, 1, 1, 0, 0, 0, 63.2, 74.2);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(1)
        .to({ scaleX: 0.7778, x: 999.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 1002.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.3333, x: 1006.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.1961, skewY: 180, x: 1138.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.3333, x: 1017 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 1020.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.7778, x: 1024 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 1027.55 }, 0)
        .wait(2)
        .to({ x: 1027.6 }, 0)
        .wait(1)
        .to({ x: 1027.65 }, 0)
        .wait(1)
        .to({ x: 1027.7 }, 0)
        .wait(1)
        .to({ x: 1027.75 }, 0)
        .wait(2)
        .to({ x: 1027.8 }, 0)
        .wait(1)
        .to({ x: 1027.85 }, 0)
        .wait(1)
        .to({ x: 1027.9 }, 0)
        .wait(1)
        .to({ x: 1027.95 }, 0)
        .wait(2)
    );

    // ZURG
    this.instance_5 = new lib.Symbole5();
    this.instance_5.setTransform(1017.35, 438.35, 1, 1, 0, 0, 0, 257.4, 353.1);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(1)
        .to({ regX: 257.5, regY: 353, scaleX: 0.7778, x: 1017.4, y: 438.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 1017.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.3333 }, 0)
        .wait(1)
        .to({ scaleX: 0.1961, skewY: 180, x: 1132 }, 0)
        .wait(1)
        .to({ scaleX: 0.3333, x: 1017.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.5556, x: 1017.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.7778, x: 1017.2 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 1017.25 }, 0)
        .wait(1)
        .to({ x: 1017.3 }, 0)
        .wait(2)
        .to({ x: 1017.35 }, 0)
        .wait(1)
        .to({ x: 1017.4 }, 0)
        .wait(1)
        .to({ x: 1017.45 }, 0)
        .wait(2)
        .to({ x: 1017.5 }, 0)
        .wait(1)
        .to({ x: 1017.55 }, 0)
        .wait(1)
        .to({ x: 1017.6 }, 0)
        .wait(3)
    );

    // DÉCORS
    this.instance_6 = new lib.CachedBmp_177();
    this.instance_6.setTransform(719.15, 635.7, 0.5, 0.5);

    this.instance_7 = new lib.CachedBmp_178();
    this.instance_7.setTransform(719.15, 635.7, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_6 }] })
        .to({ state: [{ t: this.instance_7 }] }, 19)
        .wait(1)
    );

    // FLASH_BUZZ
    this.instance_8 = new lib.Symbole1();
    this.instance_8.setTransform(
      238.4,
      1146.15,
      0.0329,
      0.0329,
      -14.9639,
      0,
      0,
      970.8,
      1509.5
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(1)
        .to(
          {
            regX: 1470.7,
            regY: 821,
            scaleX: 0.1442,
            scaleY: 0.1442,
            rotation: -14.9826,
            x: 295.9,
            y: 1031.6,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.2555, scaleY: 0.2555, x: 343.45, y: 943.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.3667, scaleY: 0.3667, x: 391, y: 854.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.478, scaleY: 0.478, x: 438.5, y: 766.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.5892, scaleY: 0.5892, x: 486, y: 678.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.7005, scaleY: 0.7005, x: 533.55, y: 589.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.8118, scaleY: 0.8118, x: 581.05, y: 501.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.923, scaleY: 0.923, x: 628.5, y: 412.95 }, 0)
        .wait(1)
        .to({ x: 628.55 }, 0)
        .wait(1)
        .to(
          { regX: 970.5, regY: 1508.7, rotation: -14.9819, x: 347, y: 1146.3 },
          0
        )
        .wait(1)
        .to({ regX: 970.1, regY: 1507.8, x: 346.85, y: 1146.2 }, 0)
        .wait(1)
        .to(
          {
            regX: 1470.7,
            regY: 821,
            scaleX: 0.7461,
            scaleY: 0.7461,
            rotation: -14.9826,
            x: 575.2,
            y: 554.65,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.5691, scaleY: 0.5691, x: 521.1, y: 694.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.3922, scaleY: 0.3922, x: 466.95, y: 835.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.2153, scaleY: 0.2153, x: 412.7, y: 975.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.0384, scaleY: 0.0384, x: 358.65, y: 1115.7 }, 0)
        .wait(4)
    );

    // FOND
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#1E1E1E")
      .ss(1, 1, 1)
      .p("EiZ7hXJMEz3AAAMAAACuTMkz3AAAg");
    this.shape.setTransform(970, 545.65);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#1E1E1E").s().p("EiZ6BXKMAAAiuSMEz2AAAMAAACuSg");
    this.shape_1.setTransform(970, 545.65);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 19)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(184.7, 320.7, 1934.9999999999998, 1113.8);
  // library properties:
  lib.properties = {
    id: "C9F81A9B0DF0C34A8EBA04431153056E",
    width: 1920,
    height: 1080,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/CachedBmp_178.png?1666897104327", id: "CachedBmp_178" },
      { src: "images/CachedBmp_177.png?1666897104327", id: "CachedBmp_177" },
      {
        src: "images/scene_3.2_atlas_1.png?1666897104295",
        id: "scene_3.2_atlas_1",
      },
      {
        src: "images/scene_3.2_atlas_2.png?1666897104295",
        id: "scene_3.2_atlas_2",
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
  an.compositions["C9F81A9B0DF0C34A8EBA04431153056E"] = {
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
