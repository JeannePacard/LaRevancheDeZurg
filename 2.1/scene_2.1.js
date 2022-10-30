(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "scene_2.1_atlas_1",
      frames: [
        [0, 450, 1188, 186],
        [0, 638, 966, 186],
        [1072, 0, 317, 388],
        [0, 0, 1070, 448],
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

  (lib.CachedBmp_10 = function () {
    this.initialize(ss["scene_2.1_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_9 = function () {
    this.initialize(ss["scene_2.1_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_8 = function () {
    this.initialize(ss["scene_2.1_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_7 = function () {
    this.initialize(ss["scene_2.1_atlas_1"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_6 = function () {
    this.initialize(img.CachedBmp_6);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 3842, 2935);

  (lib.CachedBmp_5 = function () {
    this.initialize(img.CachedBmp_5);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 3842, 2935);

  (lib.CachedBmp_4 = function () {
    this.initialize(img.CachedBmp_4);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2496, 609);

  (lib.CachedBmp_3 = function () {
    this.initialize(img.CachedBmp_3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2496, 609);

  (lib.CachedBmp_2 = function () {
    this.initialize(img.CachedBmp_2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2496, 898);

  (lib.CachedBmp_1 = function () {
    this.initialize(img.CachedBmp_1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2496, 898); // helper functions:

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
    this.instance = new lib.CachedBmp_10();
    this.instance.setTransform(-297, -46.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole7,
    new cjs.Rectangle(-297, -46.5, 594, 93),
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
    this.instance = new lib.CachedBmp_9();
    this.instance.setTransform(-241.5, -46.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole6,
    new cjs.Rectangle(-241.5, -46.5, 483, 93),
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
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E6E6E6")
      .s()
      .p(
        "EAC9Ag+QgtgEglgaQgmgZgVgoQiHj8ikjeQkDlgkEiwQj7iplLncQjZk3jZmFQglhCAVhKQAWhJBDgkMArkgXmQBEglBJAXQBKAXAjBEQDEGCB9FUQC+IDgdEXQggEtAIKbQAFGSASHLQACAugUApQgUApglAbQlJDslICgQnTDllKAAQgtAAgrgFg"
      );
    this.shape.setTransform(181.0373, 211.4596);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "AlMFyQiLiaAAjYQAAjYCLiZQCKiZDCAAQDDAACLCZQCKCZAADYQAADYiKCaQiLCZjDAAQjCAAiKiZg"
      );
    this.shape_1.setTransform(331.575, 130.725);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole4,
    new cjs.Rectangle(0, 0, 378.8, 423),
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
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "AnnHpQjLjLAAkeQAAhCAMg/QAkjMCbiaQDKjLEdAAQEeAADLDLQCaCaAlDMQALA/AABCQAAEejKDLQjLDKkeAAQkdAAjKjKg"
      );
    this.shape.setTransform(69.1, 69.1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole3,
    new cjs.Rectangle(0, 0, 138.2, 138.2),
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
    this.instance = new lib.CachedBmp_7();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole1,
    new cjs.Rectangle(0, 0, 535, 224),
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
    this.shape.graphics.f("#FF0000").s().p("EiVijLmMAq5gvcMEAMHspIzYJcg");
    this.shape.setTransform(993.325, 1642.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_9,
    new cjs.Rectangle(36.2, 36.2, 1914.3, 3213.5),
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
    this.shape.graphics.f("#FF0000").s().p("EiKVDRaMDZimo4MA7JAdjMkLXGRag");
    this.shape.setTransform(921.55, 1415.15);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_8,
    new cjs.Rectangle(36.2, 36.1, 1770.8, 2758.2000000000003),
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
    this.shape.graphics.f("#FF0000").s().p("ElC/CVAMKF/kp/MgIlAzXMp00D2og");
    this.shape.setTransform(2103.2, 990.275);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_7,
    new cjs.Rectangle(36.1, 36.7, 4134.299999999999, 1907.2),
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
    this.shape.graphics.f("#FF0000").s().p("EkPPAAAIAAshMIefgKQMgQ7Atjg");
    this.shape.setTransform(1772.9, 182.325);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_6,
    new cjs.Rectangle(36.9, 36.6, 3472, 291.5),
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
    this.shape.graphics.f("#FF0000").s().p("EilDAK2IAA18MFKHAEnIAARmg");
    this.shape.setTransform(1092.7, 107.85);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_5,
    new cjs.Rectangle(36.3, 36.8, 2112.7999999999997, 142.2),
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
    this.shape.graphics.f("#FF0000").s().p("EiStjFpMAqFguFMD7WHeRIzCJMg");
    this.shape.setTransform(938.95, 1559.875);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_4,
    new cjs.Rectangle(0, 0, 1877.9, 3119.8),
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
    this.shape.graphics.f("#FF0000").s().p("EiHvDLkMDVdmdBMA6CAcuMkGWGGNg");
    this.shape.setTransform(868.775, 1340.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_3,
    new cjs.Rectangle(0, 0, 1737.6, 2681.2),
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
    this.shape.graphics.f("#FF0000").s().p("Ek55CQRMJzzkghMgIVAxuMpjIDuzg");
    this.shape.setTransform(2008.975, 923.275);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_2,
    new cjs.Rectangle(0, 0, 4018, 1846.6),
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
    this.shape.graphics.f("#FF0000").s().p("EkHRAAAIAAshMIOjgKQMgQbAtjg");
    this.shape.setTransform(1685.025, 145.75);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_1,
    new cjs.Rectangle(0, 0, 3370.1, 291.5),
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
    this.shape.graphics.f("#FF0000").s().p("Eid2AK2IAA18ME7tAEmIAARng");
    this.shape.setTransform(1010.25, 71.1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path,
    new cjs.Rectangle(0, 0, 2020.5, 142.2),
    null
  );

  (lib.Path_19 = function (mode, startPosition, loop, reversed) {
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
      .f("#CCCCCC")
      .s()
      .p(
        "AqzYmQk/iCj2jsQj2jtiHkyQiLk9gBlcQABlaCLk+QCHkyD2jtQD2jsE/iCQFLiGFoAAQFpAAFLCGQE/CCD2DsQD2DtCHEyQCLE+ABFaQgBFciLE9QiHEyj2DtQj2Dsk/CCQlKCGlqAAQloAAlLiGg"
      );
    this.shape.setTransform(177.75, 170.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_19,
    new cjs.Rectangle(0, 0, 355.5, 341.6),
    null
  );

  (lib.Path_17 = function (mode, startPosition, loop, reversed) {
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
      .f("#CCCCCC")
      .s()
      .p(
        "AqzYlQk/iBj2jtQj2jsiHkzQiLk8gBlcQABlbCLk9QCHkzD2jsQD2jsE/iCQFLiGFoAAQFpAAFLCGQE/CCD2DsQD2DsCHEzQCLE9ABFbQgBFciLE8QiHEzj2DsQj2Dtk/CBQlLCHlpAAQloAAlLiHg"
      );
    this.shape.setTransform(177.75, 170.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_17,
    new cjs.Rectangle(0, 0, 355.5, 341.6),
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
    this.shape.setTransform(960.1, 539.975);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Rectangle,
    new cjs.Rectangle(0, 0, 1920.2, 1080),
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
    this.instance = new lib.CachedBmp_8();
    this.instance.setTransform(111.1, 59.5, 0.5, 0.5);

    this.instance_1 = new lib.Path_17();
    this.instance_1.setTransform(177.8, 170.8, 1, 1, 0, 0, 0, 177.8, 170.8);
    this.instance_1.alpha = 0.2383;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole5,
    new cjs.Rectangle(0, 0, 355.5, 341.6),
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
    this.instance = new lib.Path();
    this.instance.setTransform(7.5, 23.15, 0.0073, 0.0073, 0, 0, 0, 1015.1, 75);
    this.instance.alpha = 0.6992;

    this.instance_1 = new lib.Path_1();
    this.instance_1.setTransform(
      26.75,
      23.65,
      0.0073,
      0.0073,
      0,
      0,
      0,
      1703.1,
      156.7
    );
    this.instance_1.alpha = 0.6992;

    this.instance_2 = new lib.Path_2();
    this.instance_2.setTransform(
      29.45,
      16.45,
      0.0073,
      0.0073,
      0,
      0,
      0,
      2037,
      933.3
    );
    this.instance_2.alpha = 0.6992;

    this.instance_3 = new lib.Path_3();
    this.instance_3.setTransform(
      21.2,
      14.1,
      0.0073,
      0.0073,
      0,
      0,
      0,
      878.8,
      1355.7
    );
    this.instance_3.alpha = 0.6992;

    this.instance_4 = new lib.Path_4();
    this.instance_4.setTransform(
      8.75,
      11.65,
      0.0073,
      0.0073,
      0,
      0,
      0,
      953.8,
      1573.7
    );
    this.instance_4.alpha = 0.6992;

    this.instance_5 = new lib.Path_5();
    this.instance_5.setTransform(
      7.85,
      23.1,
      0.0073,
      0.0073,
      0,
      0,
      0,
      1090,
      115.8
    );
    this.instance_5.alpha = 0.6992;

    this.instance_6 = new lib.Path_6();
    this.instance_6.setTransform(
      26.35,
      23.6,
      0.0073,
      0.0073,
      0,
      0,
      0,
      1798.5,
      184
    );
    this.instance_6.alpha = 0.6992;

    this.instance_7 = new lib.Path_7();
    this.instance_7.setTransform(
      29,
      16.65,
      0.0073,
      0.0073,
      0,
      0,
      0,
      2132.3,
      1001.5
    );
    this.instance_7.alpha = 0.6992;

    this.instance_8 = new lib.Path_8();
    this.instance_8.setTransform(
      21.1,
      14.3,
      0.0073,
      0.0073,
      0,
      0,
      0,
      933.3,
      1423.8
    );
    this.instance_8.alpha = 0.6992;

    this.instance_9 = new lib.Path_9();
    this.instance_9.setTransform(
      8.85,
      11.95,
      0.0073,
      0.0073,
      0,
      0,
      0,
      1001.5,
      1648.6
    );
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
    lib.Symbole2,
    new cjs.Rectangle(0.1, 0.1, 43.9, 24.599999999999998),
    null
  );

  // stage content:
  (lib.scene_21 = function (mode, startPosition, loop, reversed) {
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

    this.actionFrames = [49];
    // timeline functions:
    this.frame_49 = function () {
      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);

      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_2.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("../3.1/scene_3.1.html", "_self");
      });
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_3.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("../3.2/scene_3.2.html", "_self");
      });

      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1)
    );

    // reussite
    this.movieClip_2 = new lib.Symbole6();
    this.movieClip_2.name = "movieClip_2";
    this.movieClip_2.setTransform(562.5, 539.5);
    this.movieClip_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_2).wait(49).to({ _off: false }, 0).wait(1)
    );

    // echec
    this.movieClip_3 = new lib.Symbole7();
    this.movieClip_3.name = "movieClip_3";
    this.movieClip_3.setTransform(1347, 540);
    this.movieClip_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_3).wait(49).to({ _off: false }, 0).wait(1)
    );

    // FOND
    this.movieClip_1 = new lib.Rectangle();
    this.movieClip_1.name = "movieClip_1";
    this.movieClip_1.setTransform(960, 746.55, 1, 1, 0, 0, 0, 960.1, 540);
    this.movieClip_1.alpha = 0.7188;
    this.movieClip_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_1).wait(49).to({ _off: false }, 0).wait(1)
    );

    // FLASH
    this.instance = new lib.Symbole3();
    this.instance.setTransform(
      1145.45,
      579.8,
      0.2424,
      0.2424,
      0,
      0,
      0,
      65.4,
      77.8
    );
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(19)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 69.1,
            regY: 69.1,
            scaleX: 2.7353,
            scaleY: 2.7353,
            x: 1208.65,
            y: 361.4,
            alpha: 0.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 5.2281,
            scaleY: 5.2281,
            x: 1226.95,
            y: 369.1,
            alpha: 0.7429,
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 7.721, scaleY: 7.721, x: 1245.3, y: 376.8, alpha: 0.7857 },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 10.2138,
            scaleY: 10.2138,
            x: 1263.6,
            y: 384.5,
            alpha: 0.8286,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 12.7067,
            scaleY: 12.7067,
            x: 1282,
            y: 392.25,
            alpha: 0.8714,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 15.1995,
            scaleY: 15.1995,
            x: 1300.3,
            y: 399.95,
            alpha: 0.9143,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 17.6924,
            scaleY: 17.6924,
            x: 1318.65,
            y: 407.65,
            alpha: 0.9571,
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 20.1852, scaleY: 20.1852, x: 1337, y: 415.3, alpha: 1 },
          0
        )
        .wait(1)
        .to({ scaleX: 21.0994, scaleY: 21.1416, x: 1349.45, y: 436.3 }, 0)
        .wait(1)
        .to({ scaleX: 22.0136, scaleY: 22.0981, x: 1362, y: 457.25 }, 0)
        .wait(1)
        .to({ scaleX: 22.9279, scaleY: 23.0545, x: 1374.45, y: 478.25 }, 0)
        .wait(1)
        .to({ scaleX: 23.8421, scaleY: 24.0109, x: 1386.95, y: 499.25 }, 0)
        .wait(1)
        .to({ scaleX: 21.3812, scaleY: 21.5581, x: 1384.35, y: 541.25 }, 0)
        .wait(1)
        .to({ scaleX: 18.9203, scaleY: 19.1052, x: 1381.7, y: 583.25 }, 0)
        .wait(1)
        .to({ scaleX: 16.4594, scaleY: 16.6524, x: 1379.1, y: 625.3 }, 0)
        .wait(1)
        .to({ scaleX: 13.9985, scaleY: 14.1996, x: 1376.5, y: 667.3 }, 0)
        .wait(1)
        .to({ scaleX: 11.5376, scaleY: 11.7468, x: 1373.9, y: 709.3 }, 0)
        .wait(1)
        .to({ scaleX: 9.0766, scaleY: 9.2939, x: 1371.3, y: 751.25 }, 0)
        .wait(1)
        .to({ scaleX: 6.6157, scaleY: 6.8411, x: 1368.7, y: 793.3 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 4.3541,
            scaleY: 4.6171,
            x: 1362.7,
            y: 829.65,
            alpha: 0.6667,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 2.0926,
            scaleY: 2.393,
            x: 1356.7,
            y: 865.95,
            alpha: 0.3333,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.169,
            scaleY: 0.169,
            skewY: 180,
            x: 1350.7,
            y: 902.35,
            alpha: 0,
          },
          0
        )
        .wait(9)
    );

    // BRAS
    this.instance_1 = new lib.Symbole1();
    this.instance_1.setTransform(912.45, 739.1, 1, 1, 0, 0, 0, 33, 133.9);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to(
          { regX: 267.5, regY: 112, rotation: -3.114, x: 1145.4, y: 704.45 },
          0
        )
        .wait(1)
        .to({ rotation: -6.228, x: 1143.15, y: 691.9 }, 0)
        .wait(1)
        .to({ rotation: -9.342, x: 1140.3, y: 679.4 }, 0)
        .wait(1)
        .to({ rotation: -12.4561, x: 1136.65, y: 667.1 }, 0)
        .wait(1)
        .to({ rotation: -15.5701, x: 1132.45, y: 655.05 }, 0)
        .wait(1)
        .to({ rotation: -18.6841, x: 1127.55, y: 643.2 }, 0)
        .wait(1)
        .to({ rotation: -21.7981, x: 1122, y: 631.65 }, 0)
        .wait(1)
        .to({ rotation: -24.9121, x: 1115.9, y: 620.4 }, 0)
        .wait(1)
        .to({ rotation: -28.0261, x: 1109.1, y: 609.5 }, 0)
        .wait(1)
        .to({ rotation: -31.1402, x: 1101.8, y: 599 }, 0)
        .wait(1)
        .to({ rotation: -34.2542, x: 1093.9, y: 588.95 }, 0)
        .wait(1)
        .to({ rotation: -37.3682, x: 1085.5, y: 579.3 }, 0)
        .wait(1)
        .to({ rotation: -40.4822, x: 1076.55, y: 570.15 }, 0)
        .wait(11)
        .to({ rotation: -37.0731, x: 1086.3, y: 580.2 }, 0)
        .wait(1)
        .to({ rotation: -33.664, x: 1095.5, y: 590.8 }, 0)
        .wait(1)
        .to({ rotation: -30.2549, x: 1103.95, y: 601.95 }, 0)
        .wait(1)
        .to({ rotation: -26.8458, x: 1111.75, y: 613.65 }, 0)
        .wait(1)
        .to({ rotation: -23.4367, x: 1118.9, y: 625.7 }, 0)
        .wait(1)
        .to({ rotation: -20.0276, x: 1125.2, y: 638.2 }, 0)
        .wait(1)
        .to({ rotation: -16.6185, x: 1130.85, y: 651 }, 0)
        .wait(1)
        .to({ rotation: -13.2094, x: 1135.7, y: 664.2 }, 0)
        .wait(1)
        .to({ rotation: -9.8003, x: 1139.75, y: 677.55 }, 0)
        .wait(1)
        .to({ rotation: -6.3912, x: 1143, y: 691.2 }, 0)
        .wait(1)
        .to({ rotation: -2.9821, x: 1145.5, y: 705 }, 0)
        .wait(1)
        .to({ rotation: 0.427, x: 1147.05, y: 718.95 }, 0)
        .wait(1)
        .to({ rotation: 3.8361, x: 1147.85, y: 732.9 }, 0)
        .wait(1)
        .to({ rotation: 7.2452, y: 746.95 }, 0)
        .wait(1)
        .to({ rotation: 10.6543, x: 1146.95, y: 760.9 }, 0)
        .wait(1)
        .to({ rotation: 14.0634, x: 1145.25, y: 774.85 }, 0)
        .wait(1)
        .to({ rotation: 17.4725, x: 1142.65, y: 788.6 }, 0)
        .wait(1)
        .to({ rotation: 20.8816, x: 1139.35, y: 802.25 }, 0)
        .wait(1)
        .to({ rotation: 24.2907, x: 1135.15, y: 815.6 }, 0)
        .wait(1)
        .to({ rotation: 27.6998, x: 1130.25, y: 828.7 }, 0)
        .wait(1)
        .to({ rotation: 31.1089, x: 1124.55, y: 841.5 }, 0)
        .wait(1)
        .to({ rotation: 34.518, x: 1118.05, y: 854 }, 0)
        .wait(5)
    );

    // FLASH_BUZZ
    this.instance_2 = new lib.Symbole2();
    this.instance_2.setTransform(1230.2, 438.15, 1, 1, 0, 0, 0, 14.4, 23.2);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 22,
            regY: 12.4,
            scaleX: 8.8889,
            scaleY: 8.8889,
            x: 1287.35,
            y: 337.4,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 16.7778, scaleY: 16.7778, x: 1336.95, y: 247.55 }, 0)
        .wait(1)
        .to({ scaleX: 24.6667, scaleY: 24.6667, x: 1386.55, y: 157.7 }, 0)
        .wait(1)
        .to({ scaleX: 32.5556, scaleY: 32.5556, x: 1436.15, y: 67.85 }, 0)
        .wait(1)
        .to({ scaleX: 40.4444, scaleY: 40.4444, x: 1485.8, y: -22.05 }, 0)
        .wait(1)
        .to({ scaleX: 48.3333, scaleY: 48.3333, x: 1535.4, y: -111.9 }, 0)
        .wait(1)
        .to({ scaleX: 56.2222, scaleY: 56.2222, x: 1585, y: -201.8 }, 0)
        .wait(1)
        .to({ scaleX: 64.1111, scaleY: 64.1111, x: 1634.6, y: -291.65 }, 0)
        .wait(1)
        .to({ scaleX: 72, scaleY: 72, x: 1684.2, y: -381.55 }, 0)
        .wait(1)
        .to({ x: 1673.85, y: -385.85, alpha: 0.875 }, 0)
        .wait(1)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.625 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.375 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0.125 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(23)
    );

    // BUZZ
    this.instance_3 = new lib.CachedBmp_1();
    this.instance_3.setTransform(73.4, 529.55, 0.5, 0.5);

    this.instance_4 = new lib.Path_19();
    this.instance_4.setTransform(1064.05, 640.85, 1, 1, 0, 0, 0, 177.8, 170.8);
    this.instance_4.alpha = 0.2383;

    this.instance_5 = new lib.CachedBmp_2();
    this.instance_5.setTransform(73.4, 529.55, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_4 }, { t: this.instance_3 }] })
        .to({ state: [{ t: this.instance_4 }, { t: this.instance_5 }] }, 49)
        .wait(1)
    );

    // CORPS
    this.instance_6 = new lib.Symbole4();
    this.instance_6.setTransform(758, 797.7, 1, 1, 0, 0, 0, 94.7, 264.9);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to({ regX: 189.4, regY: 211.5, x: 852.7, y: 744.3 }, 0)
        .wait(38)
        .to({ rotation: 2.7812, x: 855.15, y: 748.95 }, 0)
        .wait(1)
        .to({ rotation: 5.5624, x: 857.4, y: 753.7 }, 0)
        .wait(1)
        .to({ rotation: 8.3436, x: 859.4, y: 758.6 }, 0)
        .wait(1)
        .to({ rotation: 11.1249, x: 861.2, y: 763.55 }, 0)
        .wait(1)
        .to({ rotation: 13.9061, x: 862.7, y: 768.6 }, 0)
        .wait(1)
        .to({ rotation: 16.6873, x: 863.95, y: 773.75 }, 0)
        .wait(1)
        .to({ rotation: 19.4685, x: 865, y: 778.85 }, 0)
        .wait(5)
    );

    // BUZZ
    this.instance_7 = new lib.CachedBmp_3();
    this.instance_7.setTransform(69.7, 664.7, 0.5, 0.5);

    this.instance_8 = new lib.CachedBmp_4();
    this.instance_8.setTransform(69.7, 664.7, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_7 }] })
        .to({ state: [{ t: this.instance_8 }] }, 49)
        .wait(1)
    );

    // TETE
    this.instance_9 = new lib.Symbole5();
    this.instance_9.setTransform(992.35, 692.15, 1, 1, 0, 0, 0, 109.8, 231.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(1)
        .to({ regX: 177.8, regY: 170.8, x: 1060.35, y: 631.45 }, 0)
        .wait(38)
        .to({ rotation: 8.5714, x: 1068.6, y: 642.25 }, 0)
        .wait(1)
        .to({ rotation: 17.1427, x: 1075.2, y: 654.15 }, 0)
        .wait(1)
        .to({ rotation: 25.7141, x: 1079.95, y: 666.95 }, 0)
        .wait(1)
        .to({ rotation: 34.2854, x: 1082.7, y: 680.25 }, 0)
        .wait(1)
        .to({ rotation: 42.8568, x: 1083.5, y: 693.9 }, 0)
        .wait(1)
        .to({ rotation: 51.4281, x: 1082.15, y: 707.45 }, 0)
        .wait(1)
        .to({ rotation: 59.9995, x: 1078.9, y: 720.7 }, 0)
        .wait(1)
        .to({ rotation: 72.2447, x: 1070.85, y: 738.4 }, 0)
        .wait(1)
        .to({ rotation: 84.4899, x: 1059.25, y: 754 }, 0)
        .wait(3)
    );

    // DECORS
    this.instance_10 = new lib.CachedBmp_5();
    this.instance_10.setTransform(0, -381.05, 0.5, 0.5);

    this.instance_11 = new lib.CachedBmp_6();
    this.instance_11.setTransform(0, -381.05, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_10 }] })
        .to({ state: [{ t: this.instance_11 }] }, 49)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(700, -731.4, 2567.5, 2889.3);
  // library properties:
  lib.properties = {
    id: "3C7F511086CC442F80A9CFB7D4551BE9",
    width: 1920,
    height: 1080,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/CachedBmp_6.png?1666895206316", id: "CachedBmp_6" },
      { src: "images/CachedBmp_5.png?1666895206316", id: "CachedBmp_5" },
      { src: "images/CachedBmp_4.png?1666895206316", id: "CachedBmp_4" },
      { src: "images/CachedBmp_3.png?1666895206316", id: "CachedBmp_3" },
      { src: "images/CachedBmp_2.png?1666895206316", id: "CachedBmp_2" },
      { src: "images/CachedBmp_1.png?1666895206316", id: "CachedBmp_1" },
      {
        src: "images/scene_2.1_atlas_1.png?1666895206279",
        id: "scene_2.1_atlas_1",
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
  an.compositions["3C7F511086CC442F80A9CFB7D4551BE9"] = {
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
