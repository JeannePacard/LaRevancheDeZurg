(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "scene_2.2_atlas_1",
      frames: [
        [941, 679, 1026, 258],
        [0, 786, 489, 531],
        [1120, 939, 616, 382],
        [0, 1319, 489, 531],
        [491, 939, 627, 389],
        [0, 0, 939, 784],
        [941, 0, 969, 677],
        [1120, 1323, 616, 382],
        [491, 1330, 616, 382],
      ],
    },
    {
      name: "scene_2.2_atlas_2",
      frames: [
        [618, 0, 1188, 186],
        [393, 463, 384, 220],
        [0, 384, 391, 343],
        [618, 188, 639, 273],
        [779, 463, 368, 194],
        [1259, 188, 506, 315],
        [0, 0, 616, 382],
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

  (lib.CachedBmp_71 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_70 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_69 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_68 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_67 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_66 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_65 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_64 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_63 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_62 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_61 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_60 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_59 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_58 = function () {
    this.initialize(img.CachedBmp_58);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 3842, 2935);

  (lib.CachedBmp_57 = function () {
    this.initialize(img.CachedBmp_57);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 3842, 2935);

  (lib.CachedBmp_56 = function () {
    this.initialize(img.CachedBmp_56);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 3842, 2935);

  (lib.CachedBmp_55 = function () {
    this.initialize(img.CachedBmp_55);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 3842, 2935);

  (lib.CachedBmp_54 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_53 = function () {
    this.initialize(ss["scene_2.2_atlas_1"]);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_52 = function () {
    this.initialize(ss["scene_2.2_atlas_2"]);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

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

  (lib.Symbole18 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_71();
    this.instance.setTransform(-297, -46.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole18,
    new cjs.Rectangle(-297, -46.5, 594, 93),
    null
  );

  (lib.Symbole17 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_70();
    this.instance.setTransform(-256.5, -64.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole17,
    new cjs.Rectangle(-256.5, -64.5, 513, 129),
    null
  );

  (lib.Symbole16 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#1E1E1E").s().p("Ax4V1MAAAgrpMAjxAAAMAAAArpg");
    this.shape.setTransform(114.5006, 139.7229, 1.8494, 1.0988);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole16,
    new cjs.Rectangle(-97.2, -13.7, 423.5, 306.9),
    null
  );

  (lib.Symbole15 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#1E1E1E").s().p("A3z0CMAq/gCWMAEoAqdMgq/ACUg");
    this.shape.setTransform(152.4, 143.325);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole15,
    new cjs.Rectangle(0, 0, 304.8, 286.7),
    null
  );

  (lib.Symbole14 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_69();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole14,
    new cjs.Rectangle(0, 0, 244.5, 265.5),
    null
  );

  (lib.Symbole13 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_68();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole13,
    new cjs.Rectangle(0, 0, 308, 191),
    null
  );

  (lib.Symbole12 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_67();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole12,
    new cjs.Rectangle(0, 0, 244.5, 265.5),
    null
  );

  (lib.Symbole11 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_66();
    this.instance.setTransform(-0.05, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole11,
    new cjs.Rectangle(0, 0, 192, 110),
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
    this.instance = new lib.CachedBmp_64();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole9,
    new cjs.Rectangle(0, 0, 319.5, 136.5),
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
    this.instance = new lib.CachedBmp_63();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole8,
    new cjs.Rectangle(0, 0, 184, 97),
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
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#43795B")
      .s()
      .p(
        "ABJKLQhGguhUjqIhHjhQg8AFg/gTQh/gmhAh4QhYinAmi6QAMg7AYg1IAVgpIDgiRICpgFIgHBSQgEBqAQB7QAzGFDoGQQBABuCABHQBAAkAzANQhWAThkAKQg7AGgwAAQhxAAgyggg"
      );
    this.shape.setTransform(52.8414, 68.3153);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#999999")
      .s()
      .p(
        "AEoImIx0hWInsvnQgjhIAwhAQAxhABPAOIa2EzQAjAHAaAXQAbAWAMAiQBRDpBwC/QCxEvDNBmQBLAlAvBBQAXAhAJAZQhPAyirALQgjADgkAAQk/AAmgivg"
      );
    this.shape_1.setTransform(168.7249, 85.1111);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole7,
    new cjs.Rectangle(0, 0, 303.9, 157.6),
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
    this.instance = new lib.CachedBmp_62();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole6,
    new cjs.Rectangle(0, 0, 253, 157.5),
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
    this.instance = new lib.CachedBmp_61();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole5,
    new cjs.Rectangle(0, 0, 313.5, 194.5),
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
      .f("#B3B3B3")
      .s()
      .p(
        "AgbIMQjpgMieiiQicijALjYQALjZCuiRQCuiRDoANQDpAMCdCjQCeCigMDYQgMDZitCRQifCFjSAAIglgBg"
      );
    this.shape.setTransform(56.5, 75.3287);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "AyvIMQhGgSg2gpQiEhjhIhwQhoiiA5iSQCvnCPghiQE1geFiAJQCxAEBzAKIP1PWQAxAwgXBBQgXBBhFAFQqvA7paAKQhrABhlAAQsRAAmchmg"
      );
    this.shape_1.setTransform(169.8058, 62.642);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole4,
    new cjs.Rectangle(0, 0, 329.3, 127.9),
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
    this.instance = new lib.CachedBmp_60();
    this.instance.setTransform(0, -0.05, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole3,
    new cjs.Rectangle(0, 0, 469.5, 392),
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
      .f("#E6E6E6")
      .s()
      .p(
        "AvLE0QhSluiCipQgOgSAHgVQAHgWAWgGQIGiTHIhdQMOiiDiBTQETBlBKEOQAfBwgKB/QgKB0gpBpQgzCDiMBUQjFB1l2AeQnxAom/APIldAHQgPiWgpi4g"
      );
    this.shape.setTransform(190.9303, 64.1912);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "AmtHpQjWijgbkCQgakCCyjKQCyjLEWgcQEVgcDXCjQDWCjAbECQAaECiyDKQiyDLkWAcQgpAEgmAAQjmAAi3iLg"
      );
    this.shape_1.setTransform(67.45, 79.8255);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole2,
    new cjs.Rectangle(0, 0, 310.3, 142.6),
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
    this.instance = new lib.CachedBmp_59();
    this.instance.setTransform(0, -0.15, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole1,
    new cjs.Rectangle(0, -0.1, 484.5, 338.5),
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

  (lib.Ellipse_6 = function (mode, startPosition, loop, reversed) {
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
    lib.Ellipse_6,
    new cjs.Rectangle(0, 0, 355.5, 341.6),
    null
  );

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
    this.instance = new lib.CachedBmp_65();
    this.instance.setTransform(162, 154.7, 0.5, 0.5);

    this.instance_1 = new lib.Ellipse_6();
    this.instance_1.setTransform(
      246.4,
      246.25,
      0.9999,
      0.9999,
      45,
      0,
      0,
      177.8,
      170.8
    );
    this.instance_1.alpha = 0.2383;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole10,
    new cjs.Rectangle(0, -0.2, 492.8, 492.9),
    null
  );

  // stage content:
  (lib.scene_22 = function (mode, startPosition, loop, reversed) {
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

    this.actionFrames = [63];
    // timeline functions:
    this.frame_63 = function () {
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_1.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("/LaRevancheDeZurg/4.4/scene_4.4.html", "_self");
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
      _this.movieClip_2.on("click", function () {
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
      cjs.Tween.get(this).wait(63).call(this.frame_63).wait(1)
    );

    // sauver
    this.movieClip_1 = new lib.Symbole17();
    this.movieClip_1.name = "movieClip_1";
    this.movieClip_1.setTransform(536.5, 539.45);
    this.movieClip_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_1).wait(63).to({ _off: false }, 0).wait(1)
    );

    // heure
    this.movieClip_2 = new lib.Symbole18();
    this.movieClip_2.name = "movieClip_2";
    this.movieClip_2.setTransform(1374, 540);
    this.movieClip_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_2).wait(63).to({ _off: false }, 0).wait(1)
    );

    // FOND
    this.instance = new lib.Rectangle();
    this.instance.setTransform(945, 568.55, 1, 1, 0, 0, 0, 960.1, 540);
    this.instance.alpha = 0.7188;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(63).to({ _off: false }, 0).wait(1)
    );

    // DEPLIAGE_AILE
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#1E1E1E").s().p("A3z0CMArAgCWMAEnAqdMgq/ACUg");
    this.shape.setTransform(1084.65, 324.925);

    this.instance_1 = new lib.Symbole15();
    this.instance_1.setTransform(1084.65, 324.9, 1, 1, 0, 0, 0, 152.4, 143.3);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape }] }, 48)
        .to({ state: [{ t: this.instance_1 }] }, 4)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(52)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 1054.85, y: 327 }, 0)
        .wait(1)
        .to({ x: 1025.1, y: 329.15 }, 0)
        .wait(1)
        .to({ x: 995.35, y: 331.3 }, 0)
        .wait(1)
        .to({ x: 965.6, y: 333.4 }, 0)
        .wait(1)
        .to({ x: 935.85, y: 335.55 }, 0)
        .wait(1)
        .to({ x: 906.1, y: 337.7 }, 0)
        .wait(1)
        .to({ x: 876.35, y: 339.8 }, 0)
        .wait(1)
        .to({ x: 846.6, y: 341.95 }, 0)
        .wait(1)
        .to({ x: 816.85, y: 344.1 }, 0)
        .wait(3)
    );

    // AILES
    this.instance_2 = new lib.Symbole14();
    this.instance_2.setTransform(1082, 326.75, 1, 1, 0, 0, 0, 122.3, 132.8);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(48)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 122.2, x: 1095.4 }, 0)
        .wait(1)
        .to({ x: 1108.9 }, 0)
        .wait(1)
        .to({ x: 1122.4 }, 0)
        .wait(1)
        .to({ x: 1135.9 }, 0)
        .wait(12)
    );

    // AILES
    this.instance_3 = new lib.Symbole12();
    this.instance_3.setTransform(
      1243.6,
      258.4,
      0.0316,
      0.0316,
      0,
      0,
      0,
      225,
      57.1
    );
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(48)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 122.2,
            regY: 132.8,
            scaleX: 0.132,
            scaleY: 0.132,
            x: 1230,
            y: 268.35,
            alpha: 0.1429,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.2323,
            scaleY: 0.2323,
            x: 1219.7,
            y: 275.95,
            alpha: 0.2857,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.3327,
            scaleY: 0.3327,
            x: 1209.35,
            y: 283.6,
            alpha: 0.4286,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.4331,
            scaleY: 0.4331,
            x: 1199.05,
            y: 291.15,
            alpha: 0.5714,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.5335,
            scaleY: 0.5335,
            x: 1188.75,
            y: 298.8,
            alpha: 0.7143,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.6339,
            scaleY: 0.6339,
            x: 1178.4,
            y: 306.4,
            alpha: 0.8571,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.7343, scaleY: 0.7343, x: 1168.1, y: 314, alpha: 1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8347, scaleY: 0.8347, x: 1157.75, y: 321.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.9351, scaleY: 0.9351, x: 1147.4, y: 329.25 }, 0)
        .wait(1)
        .to({ scaleX: 1.0355, scaleY: 1.0355, x: 1137.15, y: 336.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.1359, scaleY: 1.1359, x: 1126.8, y: 344.4 }, 0)
        .wait(5)
    );

    // BRAS_AVANT
    this.instance_4 = new lib.Symbole1();
    this.instance_4.setTransform(
      908.8,
      715.9,
      0.8097,
      0.8097,
      0,
      0,
      0,
      61.2,
      53.6
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(1)
        .to(
          {
            regX: 242.2,
            regY: 169.1,
            scaleX: 0.815,
            scaleY: 0.815,
            x: 1027.2,
            y: 779.95,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8204, scaleY: 0.8204, x: 999.05, y: 750.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8257, scaleY: 0.8257, x: 970.9, y: 721.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.831, scaleY: 0.831, x: 942.7, y: 691.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8364, scaleY: 0.8364, x: 914.6, y: 662.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8417, scaleY: 0.8417, x: 886.45, y: 632.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.847, scaleY: 0.847, x: 858.3, y: 603.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8524, scaleY: 0.8524, x: 830.15, y: 574.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8577, scaleY: 0.8577, x: 802.05, y: 544.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.863, scaleY: 0.863, x: 773.9, y: 515.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.8684, scaleY: 0.8684, x: 745.7, y: 485.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8737, scaleY: 0.8737, x: 717.55, y: 456.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.879, scaleY: 0.879, x: 689.45, y: 427.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 692.55, y: 411.2 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: 4.8897,
            x: 652.15,
            y: 406.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8984,
            scaleY: 0.8984,
            rotation: 9.7794,
            x: 610.7,
            y: 401.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: 14.6691,
            x: 568.15,
            y: 395.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: 19.5589,
            x: 524.7,
            y: 388.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: 24.4486,
            x: 480.4,
            y: 380.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: 29.3383,
            x: 435.3,
            y: 371.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: 34.228,
            x: 389.65,
            y: 360.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8951,
            scaleY: 0.8951,
            rotation: 32.0853,
            x: 413.2,
            y: 361.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8945,
            scaleY: 0.8945,
            rotation: 29.9425,
            x: 436.65,
            y: 362.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8939,
            scaleY: 0.8939,
            rotation: 27.7998,
            x: 459.9,
            y: 362.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8934,
            scaleY: 0.8934,
            rotation: 25.657,
            x: 483.1,
            y: 363,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8928,
            scaleY: 0.8928,
            rotation: 23.5143,
            x: 506.1,
            y: 363.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8922,
            scaleY: 0.8922,
            rotation: 21.3715,
            x: 528.95,
            y: 362.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8917,
            scaleY: 0.8917,
            rotation: 19.2288,
            x: 551.65,
            y: 362.55,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8911, scaleY: 0.8911, x: 596.1, y: 363.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8906, scaleY: 0.8906, x: 640.55, y: 364.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 0.89, x: 685.05, y: 365.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8894, scaleY: 0.8894, x: 729.45, y: 366.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8889, scaleY: 0.8889, x: 773.9, y: 367.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8883, scaleY: 0.8883, x: 818.45, y: 368.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8877, scaleY: 0.8877, x: 862.85, y: 369.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8872, scaleY: 0.8872, x: 905.85, y: 371.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8866, scaleY: 0.8866, x: 948.8, y: 373.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8861, scaleY: 0.8861, x: 991.8, y: 375.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8855, scaleY: 0.8855, x: 1034.8, y: 378.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8849, scaleY: 0.8849, x: 1077.7, y: 380.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8844, scaleY: 0.8844, x: 1120.7, y: 382.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.8838, scaleY: 0.8838, x: 1163.7, y: 384.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8832, scaleY: 0.8832, x: 1209.55, y: 381.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.8827, scaleY: 0.8827, x: 1255.4, y: 379.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8821, scaleY: 0.8821, x: 1301.3, y: 377 }, 0)
        .wait(1)
        .to({ scaleX: 0.8815, scaleY: 0.8815, x: 1347.15, y: 374.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.881, scaleY: 0.881, x: 1393, y: 372.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8804, scaleY: 0.8804, x: 1438.9, y: 369.65 }, 0)
        .wait(16)
    );

    // CUISSE_AVANT
    this.instance_5 = new lib.Symbole2();
    this.instance_5.setTransform(
      560.25,
      854.3,
      0.8097,
      0.8097,
      0,
      0,
      0,
      154.8,
      71.3
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(1)
        .to(
          {
            regX: 155.1,
            scaleX: 0.815,
            scaleY: 0.815,
            rotation: -5.7692,
            x: 558,
            y: 842.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8204,
            scaleY: 0.8204,
            rotation: -11.5384,
            x: 555.55,
            y: 831.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8257,
            scaleY: 0.8257,
            rotation: -17.3076,
            x: 553.05,
            y: 820.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.831,
            scaleY: 0.831,
            rotation: -23.0768,
            x: 550.6,
            y: 809,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8364,
            scaleY: 0.8364,
            rotation: -28.846,
            x: 548.1,
            y: 797.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8417,
            scaleY: 0.8417,
            rotation: -34.6152,
            x: 545.7,
            y: 786.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.847,
            scaleY: 0.847,
            rotation: -40.3843,
            x: 543.25,
            y: 775.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8524,
            scaleY: 0.8524,
            rotation: -46.1535,
            x: 540.8,
            y: 763.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8577,
            scaleY: 0.8577,
            rotation: -51.9227,
            x: 538.3,
            y: 752.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.863,
            scaleY: 0.863,
            rotation: -57.6919,
            x: 535.8,
            y: 741.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8683,
            scaleY: 0.8683,
            rotation: -63.4611,
            x: 533.3,
            y: 729.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8737,
            scaleY: 0.8737,
            rotation: -69.2303,
            x: 530.85,
            y: 718.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.879,
            scaleY: 0.879,
            rotation: -74.9995,
            x: 528.4,
            y: 707.15,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 528.35, y: 708.65 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -77.1424,
            x: 500.7,
            y: 693.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8984,
            scaleY: 0.8984,
            rotation: -79.2854,
            x: 472.95,
            y: 678.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -81.4283,
            x: 445.25,
            y: 663.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -83.5712,
            x: 417.55,
            y: 649,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -85.7141,
            x: 389.85,
            y: 634.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -87.8571,
            x: 362.1,
            y: 619.2,
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 0.8956, scaleY: 0.8956, rotation: -90, x: 334.4, y: 604.3 },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8951,
            scaleY: 0.8951,
            rotation: -85.7144,
            x: 341.85,
            y: 606.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8945,
            scaleY: 0.8945,
            rotation: -81.4288,
            x: 349.25,
            y: 608.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8939,
            scaleY: 0.8939,
            rotation: -77.1432,
            x: 356.75,
            y: 610.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8934,
            scaleY: 0.8934,
            rotation: -72.8576,
            x: 364.15,
            y: 612.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8928,
            scaleY: 0.8928,
            rotation: -68.572,
            x: 371.6,
            y: 614.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8922,
            scaleY: 0.8922,
            rotation: -64.2864,
            x: 379.05,
            y: 617.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8917,
            scaleY: 0.8917,
            rotation: -60.0008,
            x: 386.5,
            y: 619.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -66.4293,
            x: 446.25,
            y: 618.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8905,
            scaleY: 0.8905,
            rotation: -72.8577,
            x: 506,
            y: 618.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.89,
            scaleY: 0.89,
            rotation: -79.2862,
            x: 565.75,
            y: 618.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8894,
            scaleY: 0.8894,
            rotation: -85.7146,
            x: 625.55,
            y: 618.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8889,
            scaleY: 0.8889,
            rotation: -92.1431,
            x: 685.3,
            y: 617.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8883,
            scaleY: 0.8883,
            rotation: -98.5715,
            x: 745.05,
            y: 617.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8877,
            scaleY: 0.8877,
            rotation: -105,
            x: 804.8,
            y: 617.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8872,
            scaleY: 0.8872,
            rotation: -101.5703,
            x: 839.35,
            y: 620.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8866,
            scaleY: 0.8866,
            rotation: -98.1406,
            x: 874.05,
            y: 623.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.886,
            scaleY: 0.886,
            rotation: -94.7109,
            x: 908.55,
            y: 626.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8855,
            scaleY: 0.8855,
            rotation: -91.2813,
            x: 943.15,
            y: 629.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8849,
            scaleY: 0.8849,
            rotation: -87.8516,
            x: 977.75,
            y: 631.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8844,
            scaleY: 0.8844,
            rotation: -84.4219,
            x: 1012.35,
            y: 634.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8838,
            scaleY: 0.8838,
            rotation: -80.9922,
            x: 1046.95,
            y: 637.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8832,
            scaleY: 0.8832,
            rotation: -83.4921,
            x: 1101.65,
            y: 633.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8827,
            scaleY: 0.8827,
            rotation: -85.9919,
            x: 1156.4,
            y: 628.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8821,
            scaleY: 0.8821,
            rotation: -88.4917,
            x: 1211.05,
            y: 623.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8815,
            scaleY: 0.8815,
            rotation: -90.9916,
            x: 1265.85,
            y: 619.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.881,
            scaleY: 0.881,
            rotation: -93.4914,
            x: 1320.55,
            y: 614.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8804,
            scaleY: 0.8804,
            rotation: -95.9913,
            x: 1375.25,
            y: 609.7,
          },
          0
        )
        .wait(16)
    );

    // TORSE
    this.instance_6 = new lib.Symbole3();
    this.instance_6.setTransform(
      803.7,
      817.5,
      0.8097,
      0.8097,
      0,
      0,
      0,
      234.6,
      196.1
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to(
          {
            regX: 234.8,
            regY: 195.9,
            scaleX: 0.815,
            scaleY: 0.815,
            rotation: -6.1341,
            x: 784.85,
            y: 788.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8204,
            scaleY: 0.8204,
            rotation: -12.2683,
            x: 765.95,
            y: 760.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8257,
            scaleY: 0.8257,
            rotation: -18.4024,
            x: 747,
            y: 731.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.831,
            scaleY: 0.831,
            rotation: -24.5366,
            x: 728.05,
            y: 703.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8364,
            scaleY: 0.8364,
            rotation: -30.6707,
            x: 709.1,
            y: 674.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8417,
            scaleY: 0.8417,
            rotation: -36.8049,
            x: 690.2,
            y: 646.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.847,
            scaleY: 0.847,
            rotation: -42.939,
            x: 671.25,
            y: 617.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8524,
            scaleY: 0.8524,
            rotation: -49.0732,
            x: 652.3,
            y: 589.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8577,
            scaleY: 0.8577,
            rotation: -55.2073,
            x: 633.35,
            y: 560.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.863,
            scaleY: 0.863,
            rotation: -61.3415,
            x: 614.45,
            y: 532.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8684,
            scaleY: 0.8684,
            rotation: -67.4756,
            x: 595.5,
            y: 503.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8737,
            scaleY: 0.8737,
            rotation: -73.6098,
            x: 576.55,
            y: 475.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8791,
            scaleY: 0.8791,
            rotation: -79.7439,
            x: 557.6,
            y: 446.75,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 557.9, y: 445.7 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -79.4409,
            x: 526.1,
            y: 429.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8985,
            scaleY: 0.8985,
            rotation: -79.138,
            x: 494.15,
            y: 413.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -78.835,
            x: 462.25,
            y: 396.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -78.532,
            x: 430.35,
            y: 380.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -78.229,
            x: 398.5,
            y: 364,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -77.9261,
            x: 366.6,
            y: 347.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: -77.6231,
            x: 334.7,
            y: 331.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8951,
            scaleY: 0.8951,
            rotation: -77.3201,
            x: 350.8,
            y: 333.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8945,
            scaleY: 0.8945,
            rotation: -77.0172,
            x: 366.85,
            y: 335.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8939,
            scaleY: 0.8939,
            rotation: -76.7142,
            x: 382.9,
            y: 338.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8934,
            scaleY: 0.8934,
            rotation: -76.4112,
            x: 398.9,
            y: 340.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8928,
            scaleY: 0.8928,
            rotation: -76.1082,
            x: 415,
            y: 342.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8922,
            scaleY: 0.8922,
            rotation: -75.8053,
            x: 430.95,
            y: 344.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8917,
            scaleY: 0.8917,
            rotation: -75.5023,
            x: 447,
            y: 347.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -75.8117,
            x: 492.3,
            y: 347.2,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8906, scaleY: 0.8906, rotation: -76.1212, x: 537.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 0.89, rotation: -76.4306, x: 582.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8894, scaleY: 0.8894, rotation: -76.7401, x: 628 }, 0)
        .wait(1)
        .to({ scaleX: 0.8889, scaleY: 0.8889, rotation: -77.0495, x: 673.2 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.8883,
            scaleY: 0.8883,
            rotation: -77.359,
            x: 718.45,
            y: 347.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8877,
            scaleY: 0.8877,
            rotation: -77.6684,
            x: 763.65,
            y: 347.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8872,
            scaleY: 0.8872,
            rotation: -77.9779,
            x: 806,
            y: 350,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8866,
            scaleY: 0.8866,
            rotation: -78.2873,
            x: 848.25,
            y: 352.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.886,
            scaleY: 0.886,
            rotation: -78.5967,
            x: 890.6,
            y: 355.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8855,
            scaleY: 0.8855,
            rotation: -78.9062,
            x: 932.85,
            y: 358.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8849,
            scaleY: 0.8849,
            rotation: -79.2156,
            x: 975.2,
            y: 361.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8844,
            scaleY: 0.8844,
            rotation: -79.5251,
            x: 1017.45,
            y: 363.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8838,
            scaleY: 0.8838,
            rotation: -79.8345,
            x: 1059.75,
            y: 366.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8832,
            scaleY: 0.8832,
            rotation: -80.144,
            x: 1109.1,
            y: 365.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8827,
            scaleY: 0.8827,
            rotation: -80.4534,
            x: 1158.4,
            y: 364.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8821,
            scaleY: 0.8821,
            rotation: -80.7629,
            x: 1207.75,
            y: 363.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8815,
            scaleY: 0.8815,
            rotation: -81.0723,
            x: 1257.05,
            y: 362.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.881,
            scaleY: 0.881,
            rotation: -81.3818,
            x: 1306.4,
            y: 362,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8804,
            scaleY: 0.8804,
            rotation: -81.6912,
            x: 1355.7,
            y: 361.05,
          },
          0
        )
        .wait(16)
    );

    // DEPLIAGE_AILE
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#1E1E1E")
      .ss(1, 1, 1)
      .p("Al5HhIAAvBILzAAIAAPBg");
    this.shape_1.setTransform(1298.375, 230.575);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#1E1E1E")
      .s()
      .p("A6wV1MAAAgrpMAjwAAAMAAAArpgAO9k6IAAvCIL1AAIAAPCg");
    this.shape_2.setTransform(1164.85, 310.175);

    this.instance_7 = new lib.Symbole16();
    this.instance_7.setTransform(1165.1, 315.45, 1, 1, 0, 0, 0, 171.6, 139.7);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 48)
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 4)
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(55)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 114.5, scaleY: 0.9851, x: 1051.75, y: 314.55 }, 0)
        .wait(1)
        .to({ scaleY: 0.9701, x: 995.5, y: 313.7 }, 0)
        .wait(1)
        .to({ scaleY: 0.9552, x: 939.25, y: 312.8 }, 0)
        .wait(1)
        .to({ scaleY: 0.9402, x: 883, y: 311.9 }, 0)
        .wait(1)
        .to({ scaleY: 0.9253, x: 826.75, y: 311.05 }, 0)
        .wait(1)
        .to({ scaleY: 0.9104, x: 770.5, y: 310.2 }, 0)
        .wait(3)
    );

    // AILE_ARRIERE
    this.instance_8 = new lib.CachedBmp_52();
    this.instance_8.setTransform(1038.65, 170.5, 0.5, 0.5);

    this.instance_9 = new lib.CachedBmp_53();
    this.instance_9.setTransform(1038.65, 170.5, 0.5, 0.5);

    this.instance_10 = new lib.CachedBmp_54();
    this.instance_10.setTransform(1038.65, 170.5, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_8 }] }, 48)
        .to({ state: [{ t: this.instance_9 }] }, 14)
        .to({ state: [{ t: this.instance_10 }] }, 1)
        .wait(1)
    );

    // AILE_ARRIERE
    this.instance_11 = new lib.Symbole13();
    this.instance_11.setTransform(
      1348.45,
      298.65,
      0.0619,
      0.0619,
      0,
      0,
      0,
      285.1,
      113
    );
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(48)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 154,
            regY: 95.5,
            scaleX: 0.1369,
            scaleY: 0.1369,
            rotation: 0.4297,
            x: 1327.45,
            y: 293.5,
            alpha: 0.1429,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.2119,
            scaleY: 0.2119,
            rotation: 0.8594,
            x: 1314.55,
            y: 289.35,
            alpha: 0.2857,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.2869,
            scaleY: 0.2869,
            rotation: 1.2891,
            x: 1301.75,
            y: 285.05,
            alpha: 0.4286,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.3618,
            scaleY: 0.3618,
            rotation: 1.7189,
            x: 1288.95,
            y: 280.55,
            alpha: 0.5714,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.4368,
            scaleY: 0.4368,
            rotation: 2.1486,
            x: 1276.2,
            y: 275.95,
            alpha: 0.7143,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.5118,
            scaleY: 0.5118,
            rotation: 2.5783,
            x: 1263.45,
            y: 271.15,
            alpha: 0.8571,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.5868,
            scaleY: 0.5868,
            rotation: 3.008,
            x: 1250.75,
            y: 266.25,
            alpha: 1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.6617,
            scaleY: 0.6617,
            rotation: 3.4377,
            x: 1238,
            y: 261.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.7367,
            scaleY: 0.7367,
            rotation: 3.8674,
            x: 1225.4,
            y: 256,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8117,
            scaleY: 0.8117,
            rotation: 4.2972,
            x: 1212.8,
            y: 250.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8867,
            scaleY: 0.8867,
            rotation: 4.7269,
            x: 1200.2,
            y: 245.2,
          },
          0
        )
        .wait(5)
    );

    // CUISSE_ARRIERE
    this.instance_12 = new lib.Symbole4();
    this.instance_12.setTransform(
      594.75,
      900.35,
      0.8097,
      0.8097,
      0,
      0,
      0,
      164.7,
      63.8
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(1)
        .to(
          {
            regY: 63.9,
            scaleX: 0.815,
            scaleY: 0.815,
            rotation: -5.7692,
            x: 592.65,
            y: 889.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8204,
            scaleY: 0.8204,
            rotation: -11.5384,
            x: 590.6,
            y: 878.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8257,
            scaleY: 0.8257,
            rotation: -17.3076,
            x: 588.55,
            y: 868.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.831,
            scaleY: 0.831,
            rotation: -23.0768,
            x: 586.4,
            y: 857.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8364,
            scaleY: 0.8364,
            rotation: -28.846,
            x: 584.4,
            y: 846.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8417,
            scaleY: 0.8417,
            rotation: -34.6152,
            x: 582.35,
            y: 835.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.847,
            scaleY: 0.847,
            rotation: -40.3843,
            x: 580.2,
            y: 824.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8524,
            scaleY: 0.8524,
            rotation: -46.1535,
            x: 578.2,
            y: 814.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8577,
            scaleY: 0.8577,
            rotation: -51.9227,
            x: 576.1,
            y: 803.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.863,
            scaleY: 0.863,
            rotation: -57.6919,
            x: 574,
            y: 792.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8683,
            scaleY: 0.8683,
            rotation: -63.4611,
            x: 571.95,
            y: 781.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8737,
            scaleY: 0.8737,
            rotation: -69.2303,
            x: 569.9,
            y: 771,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.879,
            scaleY: 0.879,
            rotation: -74.9995,
            x: 567.8,
            y: 760.2,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 568.2, y: 762.15 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -77.1422,
            x: 541.35,
            y: 736.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8984,
            scaleY: 0.8984,
            rotation: -79.2848,
            x: 514.5,
            y: 711.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -81.4275,
            x: 487.65,
            y: 685.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -83.5702,
            x: 460.8,
            y: 660.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -85.7129,
            x: 433.95,
            y: 634.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -87.8555,
            x: 407.05,
            y: 609.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: -89.9982,
            x: 380.25,
            y: 583.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8951,
            scaleY: 0.8951,
            rotation: -94.2837,
            x: 401.1,
            y: 589.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8945,
            scaleY: 0.8945,
            rotation: -98.5693,
            x: 421.85,
            y: 595.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8939,
            scaleY: 0.8939,
            rotation: -102.8548,
            x: 442.75,
            y: 601,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8934,
            scaleY: 0.8934,
            rotation: -107.1404,
            x: 463.55,
            y: 606.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8928,
            scaleY: 0.8928,
            rotation: -111.4259,
            x: 484.4,
            y: 612.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8922,
            scaleY: 0.8922,
            rotation: -115.7115,
            x: 505.2,
            y: 618.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8917,
            scaleY: 0.8917,
            rotation: -119.997,
            x: 526.1,
            y: 623.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -112.2487,
            x: 547.95,
            y: 624.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8906,
            scaleY: 0.8906,
            rotation: -104.5003,
            x: 569.8,
            y: 624.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.89,
            scaleY: 0.89,
            rotation: -96.752,
            x: 591.65,
            y: 624.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8894,
            scaleY: 0.8894,
            rotation: -89.0036,
            x: 613.5,
            y: 624.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8889,
            scaleY: 0.8889,
            rotation: -81.2553,
            x: 635.35,
            y: 625.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8883,
            scaleY: 0.8883,
            rotation: -73.5069,
            x: 657.25,
            y: 625.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8877,
            scaleY: 0.8877,
            rotation: -65.7586,
            x: 679.05,
            y: 625.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8872,
            scaleY: 0.8872,
            rotation: -74.3298,
            x: 749.55,
            y: 626.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8866,
            scaleY: 0.8866,
            rotation: -82.901,
            x: 820,
            y: 627.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8861,
            scaleY: 0.8861,
            rotation: -91.4722,
            x: 890.5,
            y: 627.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8855,
            scaleY: 0.8855,
            rotation: -100.0434,
            x: 960.95,
            y: 628.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8849,
            scaleY: 0.8849,
            rotation: -108.6146,
            x: 1031.5,
            y: 629.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8844,
            scaleY: 0.8844,
            rotation: -117.1858,
            x: 1101.9,
            y: 630.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8838,
            scaleY: 0.8838,
            rotation: -125.757,
            x: 1172.45,
            y: 631.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8832,
            scaleY: 0.8832,
            rotation: -119.7589,
            x: 1205.95,
            y: 622.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8827,
            scaleY: 0.8827,
            rotation: -113.7608,
            x: 1239.45,
            y: 613.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8821,
            scaleY: 0.8821,
            rotation: -107.7626,
            x: 1273.05,
            y: 604.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8816,
            scaleY: 0.8816,
            rotation: -101.7645,
            x: 1306.5,
            y: 595.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.881,
            scaleY: 0.881,
            rotation: -95.7664,
            x: 1340,
            y: 587.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8804,
            scaleY: 0.8804,
            rotation: -89.7683,
            x: 1373.55,
            y: 578.25,
          },
          0
        )
        .wait(16)
    );

    // MOLLET_AVANT
    this.instance_13 = new lib.Symbole5();
    this.instance_13.setTransform(
      320.7,
      830.05,
      0.8097,
      0.8097,
      0,
      0,
      0,
      50.4,
      97.4
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(1)
        .to(
          {
            regX: 156.8,
            regY: 97.2,
            scaleX: 0.815,
            scaleY: 0.815,
            x: 407.35,
            y: 825.35,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8204, scaleY: 0.8204, x: 407.9, y: 820.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8257, scaleY: 0.8257, x: 408.35, y: 816.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.831, scaleY: 0.831, x: 408.9, y: 811.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8364, scaleY: 0.8364, x: 409.4, y: 807.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.8417, scaleY: 0.8417, x: 409.95, y: 802.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.847, scaleY: 0.847, x: 410.4, y: 798.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8524, scaleY: 0.8524, x: 410.95, y: 793.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8577, scaleY: 0.8577, x: 411.45, y: 789.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.863, scaleY: 0.863, x: 411.95, y: 784.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8684, scaleY: 0.8684, x: 412.45, y: 780.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8737, scaleY: 0.8737, x: 413, y: 775.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.879, scaleY: 0.879, x: 413.55, y: 771.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 411.95, y: 772.35 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -14.0389,
            x: 412.45,
            y: 769.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8985,
            scaleY: 0.8985,
            rotation: -28.0777,
            x: 407.45,
            y: 767.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -42.1166,
            x: 397.45,
            y: 768.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -56.1554,
            x: 383.15,
            y: 773.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -70.1943,
            x: 365.75,
            y: 783.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -84.2331,
            x: 346.4,
            y: 798.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: -98.272,
            x: 326.65,
            y: 819.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8951,
            scaleY: 0.8951,
            rotation: -99.9466,
            x: 329.55,
            y: 819.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8945,
            scaleY: 0.8945,
            rotation: -101.6213,
            x: 332.5,
            y: 819.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8939,
            scaleY: 0.8939,
            rotation: -103.2959,
            x: 335.4,
            y: 820.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8934,
            scaleY: 0.8934,
            rotation: -104.9706,
            x: 338.4,
            y: 820.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8928,
            scaleY: 0.8928,
            rotation: -106.6452,
            x: 341.4,
            y: 821.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8922,
            scaleY: 0.8922,
            rotation: -108.3199,
            x: 344.45,
            y: 821.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8917,
            scaleY: 0.8917,
            rotation: -109.9945,
            x: 347.5,
            y: 822.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -111.6691,
            x: 422.5,
            y: 826.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8906,
            scaleY: 0.8906,
            rotation: -113.3438,
            x: 497.6,
            y: 831.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.89,
            scaleY: 0.89,
            rotation: -115.0184,
            x: 572.75,
            y: 835.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8894,
            scaleY: 0.8894,
            rotation: -116.6931,
            x: 647.9,
            y: 840.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8889,
            scaleY: 0.8889,
            rotation: -118.3677,
            x: 723.05,
            y: 844.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8883,
            scaleY: 0.8883,
            rotation: -120.0424,
            x: 798.3,
            y: 849.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8877,
            scaleY: 0.8877,
            rotation: -121.717,
            x: 873.55,
            y: 854.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8872,
            scaleY: 0.8872,
            rotation: -114.4697,
            x: 884.55,
            y: 848.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8866,
            scaleY: 0.8866,
            rotation: -107.2224,
            x: 896.05,
            y: 844.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8861,
            scaleY: 0.8861,
            rotation: -99.9751,
            x: 908.05,
            y: 841,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8855,
            scaleY: 0.8855,
            rotation: -92.7277,
            x: 920.3,
            y: 839.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8849,
            scaleY: 0.8849,
            rotation: -85.4804,
            x: 932.6,
            y: 839.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8844,
            scaleY: 0.8844,
            rotation: -78.2331,
            x: 944.8,
            y: 840.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8838,
            scaleY: 0.8838,
            rotation: -70.9858,
            x: 956.6,
            y: 843.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8832,
            scaleY: 0.8832,
            rotation: -75.2344,
            x: 1024.65,
            y: 832.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8827,
            scaleY: 0.8827,
            rotation: -79.4831,
            x: 1092.55,
            y: 820.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8821,
            scaleY: 0.8821,
            rotation: -83.7317,
            x: 1160.4,
            y: 810.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8815,
            scaleY: 0.8815,
            rotation: -87.9804,
            x: 1228.15,
            y: 800.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.881,
            scaleY: 0.881,
            rotation: -92.229,
            x: 1295.9,
            y: 790.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8804,
            scaleY: 0.8804,
            rotation: -96.4777,
            x: 1363.75,
            y: 781.8,
          },
          0
        )
        .wait(16)
    );

    // PIED_AVANT
    this.instance_14 = new lib.Symbole6();
    this.instance_14.setTransform(
      317.6,
      764.95,
      0.8097,
      0.8097,
      0,
      0,
      0,
      188.6,
      61
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(1)
        .to(
          {
            regX: 126.5,
            regY: 78.8,
            scaleX: 0.815,
            scaleY: 0.815,
            x: 266.9,
            y: 774.5,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8204, scaleY: 0.8204, x: 266.5, y: 769.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.8257, scaleY: 0.8257, x: 266.05, y: 764.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.831, scaleY: 0.831, x: 265.65, y: 760.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8364, scaleY: 0.8364, x: 265.25, y: 755.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8417, scaleY: 0.8417, x: 264.8, y: 750.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.847, scaleY: 0.847, x: 264.4, y: 745.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8524, scaleY: 0.8524, x: 264, y: 740.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8577, scaleY: 0.8577, x: 263.6, y: 735.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.863, scaleY: 0.863, x: 263.15, y: 731.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8684, scaleY: 0.8684, x: 262.75, y: 726.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.8737, scaleY: 0.8737, x: 262.35, y: 721.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.879, scaleY: 0.879, x: 261.95, y: 716.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 256.8, y: 716.2 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -20.1796,
            x: 265.15,
            y: 774.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8985,
            scaleY: 0.8985,
            rotation: -40.3591,
            x: 279.2,
            y: 828.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -60.5387,
            x: 297.2,
            y: 876.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -80.7183,
            x: 316.8,
            y: 918.05,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -100.8979,
            x: 335.55,
            y: 952.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -121.0774,
            x: 351.1,
            y: 980.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: -141.257,
            x: 361.35,
            y: 1003.15,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8951, scaleY: 0.8951, x: 365.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.8945, scaleY: 0.8945, x: 369.2, y: 1003.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8939, scaleY: 0.8939, x: 373.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8934, scaleY: 0.8934, x: 377.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8928, scaleY: 0.8928, x: 381.05, y: 1003.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8922, scaleY: 0.8922, x: 384.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8917, scaleY: 0.8917, x: 388.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.8911, scaleY: 0.8911, x: 465.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8906, scaleY: 0.8906, x: 542.95, y: 1003 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 0.89, x: 620 }, 0)
        .wait(1)
        .to({ scaleX: 0.8894, scaleY: 0.8894, x: 697 }, 0)
        .wait(1)
        .to({ scaleX: 0.8889, scaleY: 0.8889, x: 774.05, y: 1002.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8883, scaleY: 0.8883, x: 851.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8877, scaleY: 0.8877, x: 928.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8872, scaleY: 0.8872, x: 928.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8866, scaleY: 0.8866, x: 929.5, y: 1002.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.886, scaleY: 0.886, x: 930.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.8855, scaleY: 0.8855, x: 930.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8849, scaleY: 0.8849, x: 931.7, y: 1002.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.8843, scaleY: 0.8843, x: 932.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.8838, scaleY: 0.8838, x: 933.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8832, scaleY: 0.8832, x: 1009.85, y: 995.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8826, scaleY: 0.8826, x: 1086.55, y: 988.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8821, scaleY: 0.8821, x: 1163.25, y: 981.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.8815, scaleY: 0.8815, x: 1239.95, y: 974.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.881, scaleY: 0.881, x: 1316.7, y: 967.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.8804, scaleY: 0.8804, x: 1393.4, y: 960.15 }, 0)
        .wait(16)
    );

    // MOLLET_ARRIERE
    this.instance_15 = new lib.Symbole7();
    this.instance_15.setTransform(
      297.8,
      899.1,
      0.8097,
      0.8097,
      0,
      0,
      0,
      0,
      78.8
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(1)
        .to({ regX: 151.9, scaleX: 0.815, scaleY: 0.815, x: 421.35, y: 895 }, 0)
        .wait(1)
        .to({ scaleX: 0.8204, scaleY: 0.8204, x: 421.95, y: 891 }, 0)
        .wait(1)
        .to({ scaleX: 0.8257, scaleY: 0.8257, x: 422.55, y: 886.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.831, scaleY: 0.831, x: 423.2, y: 882.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8364, scaleY: 0.8364, x: 423.8, y: 878.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8417, scaleY: 0.8417, x: 424.4, y: 874.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.847, scaleY: 0.847, x: 425, y: 870.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.8524, scaleY: 0.8524, x: 425.6, y: 866.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8577, scaleY: 0.8577, x: 426.25, y: 862.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.863, scaleY: 0.863, x: 426.8, y: 858.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8684, scaleY: 0.8684, x: 427.4, y: 854.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8737, scaleY: 0.8737, x: 428, y: 850.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.879, scaleY: 0.879, x: 428.65, y: 846.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 427.4, y: 849.3 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -12.8571,
            x: 434.5,
            y: 834,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8985,
            scaleY: 0.8985,
            rotation: -25.7143,
            x: 434.95,
            y: 820.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -38.5714,
            x: 429.3,
            y: 809.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -51.4286,
            x: 418.3,
            y: 803.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -64.2857,
            x: 403,
            y: 802.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -77.1429,
            x: 384.9,
            y: 807.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: -90,
            x: 365.2,
            y: 819.25,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8951,
            scaleY: 0.8951,
            rotation: -92.7964,
            x: 401.3,
            y: 824.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8945,
            scaleY: 0.8945,
            rotation: -95.5929,
            x: 437.45,
            y: 830.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8939,
            scaleY: 0.8939,
            rotation: -98.3893,
            x: 473.65,
            y: 836.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8934,
            scaleY: 0.8934,
            rotation: -101.1857,
            x: 509.9,
            y: 842.7,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8928,
            scaleY: 0.8928,
            rotation: -103.9821,
            x: 546.15,
            y: 849.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8922,
            scaleY: 0.8922,
            rotation: -106.7786,
            x: 582.55,
            y: 856.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8917,
            scaleY: 0.8917,
            rotation: -109.575,
            x: 619,
            y: 863.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8911,
            scaleY: 0.8911,
            rotation: -104.6317,
            x: 613.9,
            y: 860.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8905,
            scaleY: 0.8905,
            rotation: -99.6883,
            x: 609,
            y: 858.95,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.89,
            scaleY: 0.89,
            rotation: -94.745,
            x: 604.25,
            y: 858.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8894,
            scaleY: 0.8894,
            rotation: -89.8017,
            x: 599.55,
            y: 858.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8889,
            scaleY: 0.8889,
            rotation: -84.8584,
            x: 594.85,
            y: 859.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8883,
            scaleY: 0.8883,
            rotation: -79.915,
            x: 590.05,
            y: 861.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8877,
            scaleY: 0.8877,
            rotation: -74.9717,
            x: 585,
            y: 864.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8872,
            scaleY: 0.8872,
            rotation: -79.9413,
            x: 683.45,
            y: 859.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8866,
            scaleY: 0.8866,
            rotation: -84.9109,
            x: 781.6,
            y: 855.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.886,
            scaleY: 0.886,
            rotation: -89.8805,
            x: 879.7,
            y: 852.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8855,
            scaleY: 0.8855,
            rotation: -94.8502,
            x: 977.85,
            y: 850.2,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8849,
            scaleY: 0.8849,
            rotation: -99.8198,
            x: 1076.1,
            y: 849,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8843,
            scaleY: 0.8843,
            rotation: -104.7894,
            x: 1174.5,
            y: 848.85,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8837,
            scaleY: 0.8837,
            rotation: -109.759,
            x: 1273.2,
            y: 849.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8832,
            scaleY: 0.8832,
            rotation: -107.259,
            x: 1288.3,
            y: 837.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8826,
            scaleY: 0.8826,
            rotation: -104.759,
            x: 1303.45,
            y: 825.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8821,
            scaleY: 0.8821,
            rotation: -102.259,
            x: 1318.65,
            y: 813.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8815,
            scaleY: 0.8815,
            rotation: -99.759,
            x: 1333.95,
            y: 802.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8809,
            scaleY: 0.8809,
            rotation: -97.259,
            x: 1349.25,
            y: 790.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8804,
            scaleY: 0.8804,
            rotation: -94.759,
            x: 1364.6,
            y: 779.8,
          },
          0
        )
        .wait(16)
    );

    // PIED_ARRIERE
    this.instance_16 = new lib.Symbole8();
    this.instance_16.setTransform(
      261.3,
      839.4,
      0.8097,
      0.8097,
      0,
      0,
      0,
      91.9,
      48.6
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_16)
        .wait(1)
        .to(
          {
            regX: 92,
            regY: 48.5,
            scaleX: 0.815,
            scaleY: 0.815,
            x: 260.95,
            y: 834.9,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8204, scaleY: 0.8204, x: 260.45, y: 830.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8257, scaleY: 0.8257, x: 260, y: 826.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.831, scaleY: 0.831, x: 259.6, y: 821.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8364, scaleY: 0.8364, x: 259.15, y: 817.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8417, scaleY: 0.8417, x: 258.7, y: 812.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.847, scaleY: 0.847, x: 258.25, y: 808.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8524, scaleY: 0.8524, x: 257.8, y: 803.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8577, scaleY: 0.8577, x: 257.35, y: 799.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.863, scaleY: 0.863, x: 256.9, y: 795.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8684, scaleY: 0.8684, x: 256.45, y: 790.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8737, scaleY: 0.8737, x: 256.05, y: 786.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.879, scaleY: 0.879, x: 255.55, y: 781.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 250.25, y: 782.8 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.9121,
            scaleY: 0.9121,
            rotation: -19.2857,
            x: 273.9,
            y: 806.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9247,
            scaleY: 0.9247,
            rotation: -38.5714,
            x: 297.55,
            y: 830.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9372,
            scaleY: 0.9372,
            rotation: -57.8571,
            x: 321.2,
            y: 854.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9498,
            scaleY: 0.9498,
            rotation: -77.1429,
            x: 344.85,
            y: 878.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9623,
            scaleY: 0.9623,
            rotation: -96.4286,
            x: 368.55,
            y: 902.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9749,
            scaleY: 0.9749,
            rotation: -115.7143,
            x: 392.2,
            y: 926.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.9874,
            scaleY: 0.9874,
            rotation: -135,
            x: 415.8,
            y: 950.5,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 1, scaleY: 1, x: 415.85, alpha: 0 }, 0)
        .wait(1)
        .to({ scaleX: 0.9954, scaleY: 0.9954, x: 420.35, y: 949.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9908, scaleY: 0.9908, x: 424.85, y: 948.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9862, scaleY: 0.9862, x: 429.35, y: 947.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.9816, scaleY: 0.9816, x: 433.85, y: 946.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.977, scaleY: 0.977, x: 438.35, y: 945.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.9724, scaleY: 0.9724, x: 442.9, y: 944.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.9678, scaleY: 0.9678, x: 447.4, y: 943.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.9632, scaleY: 0.9632, x: 451.9, y: 942.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.9586, scaleY: 0.9586, x: 456.35, y: 941.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.954, scaleY: 0.954, x: 460.9, y: 940.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.9494, scaleY: 0.9494, x: 465.4, y: 939.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.9448, scaleY: 0.9448, x: 469.9, y: 938.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.9402, scaleY: 0.9402, x: 474.45, y: 937.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.9356, scaleY: 0.9356, x: 478.95, y: 936.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.931, scaleY: 0.931, x: 483.45, y: 935.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.9264, scaleY: 0.9264, x: 487.9, y: 934.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.9218, scaleY: 0.9218, x: 492.45, y: 933.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.9172, scaleY: 0.9172, x: 496.95, y: 932.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.9126, scaleY: 0.9126, x: 501.45, y: 931.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.908, scaleY: 0.908, x: 506, y: 930.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.9034, scaleY: 0.9034, x: 510.5, y: 929.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8988, scaleY: 0.8988, x: 514.95, y: 928.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8942, scaleY: 0.8942, x: 519.5, y: 927.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8896, scaleY: 0.8896, x: 524, y: 926.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8849, scaleY: 0.8849, x: 528.5, y: 925.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8803, scaleY: 0.8803, x: 533, y: 924 }, 0)
        .wait(16)
    );

    // PIED_ARRIERE
    this.instance_17 = new lib.Symbole11();
    this.instance_17.setTransform(400.65, 962.4, 1, 1, 0, 0, 0, 96, 55.1);
    this.instance_17._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .wait(21)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 95.9, regY: 55, x: 440, y: 968.35 }, 0)
        .wait(1)
        .to({ x: 479.5, y: 974.4 }, 0)
        .wait(1)
        .to({ x: 519, y: 980.5 }, 0)
        .wait(1)
        .to({ x: 558.5, y: 986.55 }, 0)
        .wait(1)
        .to({ x: 598, y: 992.65 }, 0)
        .wait(1)
        .to({ x: 637.5, y: 998.7 }, 0)
        .wait(1)
        .to({ x: 677, y: 1004.8 }, 0)
        .wait(1)
        .to({ x: 663.3 }, 0)
        .wait(1)
        .to({ x: 649.6 }, 0)
        .wait(1)
        .to({ x: 635.95 }, 0)
        .wait(1)
        .to({ x: 622.25 }, 0)
        .wait(1)
        .to({ x: 608.6 }, 0)
        .wait(1)
        .to({ x: 594.9 }, 0)
        .wait(1)
        .to({ x: 581.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.9908, scaleY: 0.9908, x: 687.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.9816, scaleY: 0.9816, x: 794.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.9724, scaleY: 0.9724, x: 900.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.9632, scaleY: 0.9632, x: 1007.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.954, scaleY: 0.954, x: 1113.9, y: 1004.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.9448, scaleY: 0.9448, x: 1220.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.9356, scaleY: 0.9356, x: 1326.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.9264, scaleY: 0.9264, x: 1336.3, y: 993.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.9172, scaleY: 0.9172, x: 1345.65, y: 982.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.908, scaleY: 0.908, x: 1355.05, y: 971.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8988, scaleY: 0.8988, x: 1364.35, y: 960.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8896, scaleY: 0.8896, x: 1373.7, y: 949.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.8804, scaleY: 0.8804, x: 1383.1, y: 938.4 }, 0)
        .wait(16)
    );

    // BRAS_ARRIERE
    this.instance_18 = new lib.Symbole9();
    this.instance_18.setTransform(
      1050.3,
      869.8,
      0.8097,
      0.8097,
      0,
      0,
      0,
      159.7,
      68.2
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .wait(1)
        .to(
          { regX: 159.8, scaleX: 0.815, scaleY: 0.815, x: 1023.05, y: 832.15 },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8204, scaleY: 0.8204, x: 995.7, y: 794.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.8257, scaleY: 0.8257, x: 968.35, y: 756.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.831, scaleY: 0.831, x: 941, y: 719.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8364, scaleY: 0.8364, x: 913.65, y: 681.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.8417, scaleY: 0.8417, x: 886.3, y: 643.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.847, scaleY: 0.847, x: 858.95, y: 606.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8524, scaleY: 0.8524, x: 831.6, y: 568.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8577, scaleY: 0.8577, x: 804.25, y: 530.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.863, scaleY: 0.863, x: 776.95, y: 493.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8684, scaleY: 0.8684, x: 749.6, y: 455.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8737, scaleY: 0.8737, x: 722.25, y: 417.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.879, scaleY: 0.879, x: 694.9, y: 380.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 696.5, y: 378.55 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: 6.4285,
            x: 655.35,
            y: 371.55,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8985,
            scaleY: 0.8985,
            rotation: 12.857,
            x: 614.2,
            y: 364.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: 19.2855,
            x: 573.1,
            y: 357.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: 25.7141,
            x: 531.9,
            y: 350.4,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: 32.1426,
            x: 490.75,
            y: 343.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: 38.5711,
            x: 449.6,
            y: 336.3,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: 44.9996,
            x: 408.45,
            y: 329.25,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8951, scaleY: 0.8951, x: 429.1, y: 325.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.8945, scaleY: 0.8945, x: 449.7, y: 322.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.8939, scaleY: 0.8939, x: 470.4, y: 319 }, 0)
        .wait(1)
        .to({ scaleX: 0.8934, scaleY: 0.8934, x: 491.05, y: 315.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8928, scaleY: 0.8928, x: 511.7, y: 312.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8922, scaleY: 0.8922, x: 532.3, y: 308.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8917, scaleY: 0.8917, x: 553, y: 305.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8911, scaleY: 0.8911, x: 599.05, y: 308.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8905, scaleY: 0.8905, x: 645.1, y: 312.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 0.89, x: 691.1, y: 315.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8894, scaleY: 0.8894, x: 737.15, y: 319.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8888, scaleY: 0.8888, x: 783.2, y: 323.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8883, scaleY: 0.8883, x: 829.15, y: 326.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.8877, scaleY: 0.8877, x: 875.25, y: 330.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8871, scaleY: 0.8871, x: 918.05, y: 334.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.8866, scaleY: 0.8866, x: 960.9, y: 338.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.886, scaleY: 0.886, x: 1003.65, y: 342.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.8855, scaleY: 0.8855, x: 1046.45, y: 346.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8849, scaleY: 0.8849, x: 1089.3, y: 350.4 }, 0)
        .wait(1)
        .to({ scaleX: 0.8843, scaleY: 0.8843, x: 1132.05, y: 354.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8838, scaleY: 0.8838, x: 1174.9, y: 358.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.8832, scaleY: 0.8832, x: 1222.15, y: 356.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8826, scaleY: 0.8826, x: 1269.45, y: 354.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8821, scaleY: 0.8821, x: 1316.7, y: 352.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8815, scaleY: 0.8815, x: 1364, y: 349.9 }, 0)
        .wait(1)
        .to({ scaleX: 0.8809, scaleY: 0.8809, x: 1411.25, y: 347.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8804, scaleY: 0.8804, x: 1458.55, y: 345.6 }, 0)
        .wait(16)
    );

    // TETE
    this.instance_19 = new lib.Symbole10();
    this.instance_19.setTransform(
      1025.65,
      725.55,
      0.8097,
      0.8097,
      0,
      0,
      0,
      246.4,
      246.5
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_19)
        .wait(1)
        .to(
          {
            regY: 246.2,
            scaleX: 0.815,
            scaleY: 0.815,
            rotation: -4.6153,
            x: 991.65,
            y: 686.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8204,
            scaleY: 0.8204,
            rotation: -9.2307,
            x: 957.7,
            y: 647.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8257,
            scaleY: 0.8257,
            rotation: -13.846,
            x: 923.8,
            y: 608.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.831,
            scaleY: 0.831,
            rotation: -18.4614,
            x: 889.85,
            y: 570.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8364,
            scaleY: 0.8364,
            rotation: -23.0767,
            x: 855.9,
            y: 531.45,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8417,
            scaleY: 0.8417,
            rotation: -27.6921,
            x: 821.95,
            y: 492.65,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.847,
            scaleY: 0.847,
            rotation: -32.3074,
            x: 788,
            y: 453.9,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8523,
            scaleY: 0.8523,
            rotation: -36.9228,
            x: 754,
            y: 415.15,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8577,
            scaleY: 0.8577,
            rotation: -41.5381,
            x: 720.05,
            y: 376.35,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.863,
            scaleY: 0.863,
            rotation: -46.1535,
            x: 686.15,
            y: 337.6,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8683,
            scaleY: 0.8683,
            rotation: -50.7688,
            x: 652.15,
            y: 298.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8737,
            scaleY: 0.8737,
            rotation: -55.3842,
            x: 618.25,
            y: 260.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.879,
            scaleY: 0.879,
            rotation: -59.9995,
            x: 584.3,
            y: 221.35,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8996, scaleY: 0.8996, x: 573.55, y: 197.5 }, 0)
        .wait(1)
        .to(
          {
            scaleX: 0.899,
            scaleY: 0.899,
            rotation: -62.1422,
            x: 539.4,
            y: 178.75,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8984,
            scaleY: 0.8984,
            rotation: -64.285,
            x: 505.25,
            y: 160.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8979,
            scaleY: 0.8979,
            rotation: -66.4277,
            x: 471.1,
            y: 141.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8973,
            scaleY: 0.8973,
            rotation: -68.5704,
            x: 437,
            y: 122.8,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8968,
            scaleY: 0.8968,
            rotation: -70.7131,
            x: 402.9,
            y: 104.1,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8962,
            scaleY: 0.8962,
            rotation: -72.8559,
            x: 368.75,
            y: 85.5,
          },
          0
        )
        .wait(1)
        .to(
          {
            scaleX: 0.8956,
            scaleY: 0.8956,
            rotation: -74.9986,
            x: 334.55,
            y: 66.75,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 0.8951, scaleY: 0.8951, x: 353.3, y: 69.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8945, scaleY: 0.8945, x: 372, y: 71.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8939, scaleY: 0.8939, x: 390.75, y: 73.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.8934, scaleY: 0.8934, x: 409.5, y: 75.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8928, scaleY: 0.8928, x: 428.15, y: 78.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.8922, scaleY: 0.8922, x: 446.9, y: 80.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.8917, scaleY: 0.8917, x: 465.6, y: 82.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8911, scaleY: 0.8911, x: 508.35, y: 84.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.8905, scaleY: 0.8905, x: 551.1, y: 86.6 }, 0)
        .wait(1)
        .to({ scaleX: 0.89, scaleY: 0.89, x: 593.8, y: 88.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8894, scaleY: 0.8894, x: 636.45, y: 90.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8888, scaleY: 0.8888, x: 679.2, y: 92.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.8883, scaleY: 0.8883, x: 721.95, y: 94.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.8877, scaleY: 0.8877, x: 764.65, y: 96.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.8872, scaleY: 0.8872, x: 807.3, y: 96.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.8866, scaleY: 0.8866, x: 850, y: 97.7 }, 0)
        .wait(1)
        .to({ scaleX: 0.886, scaleY: 0.886, x: 892.6, y: 98.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8855, scaleY: 0.8855, x: 935.25, y: 99.25 }, 0)
        .wait(1)
        .to({ scaleX: 0.8849, scaleY: 0.8849, x: 977.95, y: 100 }, 0)
        .wait(1)
        .to({ scaleX: 0.8843, scaleY: 0.8843, x: 1020.55, y: 100.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.8838, scaleY: 0.8838, x: 1063.2, y: 101.45 }, 0)
        .wait(1)
        .to({ scaleX: 0.8832, scaleY: 0.8832, x: 1111.15, y: 103.05 }, 0)
        .wait(1)
        .to({ scaleX: 0.8826, scaleY: 0.8826, x: 1158.95, y: 104.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8821, scaleY: 0.8821, x: 1206.8, y: 106 }, 0)
        .wait(1)
        .to({ scaleX: 0.8815, scaleY: 0.8815, x: 1254.7, y: 107.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8809, scaleY: 0.8809, x: 1302.6, y: 109.1 }, 0)
        .wait(1)
        .to({ scaleX: 0.8804, scaleY: 0.8804, x: 1350.4, y: 110.55 }, 0)
        .wait(16)
    );

    // FOND
    this.instance_20 = new lib.CachedBmp_55();
    this.instance_20.setTransform(0, -381.05, 0.5, 0.5);

    this.instance_21 = new lib.CachedBmp_56();
    this.instance_21.setTransform(0, -381.05, 0.5, 0.5);

    this.instance_22 = new lib.CachedBmp_57();
    this.instance_22.setTransform(0, -381.05, 0.5, 0.5);

    this.instance_23 = new lib.CachedBmp_58();
    this.instance_23.setTransform(0, -381.05, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_20 }] })
        .to({ state: [{ t: this.instance_21 }] }, 59)
        .to({ state: [{ t: this.instance_22 }] }, 3)
        .to({ state: [{ t: this.instance_23 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(944.9, 159, 976.1, 970);
  // library properties:
  lib.properties = {
    id: "69D95A1AEEFCD44782700315B0C39F81",
    width: 1920,
    height: 1080,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/CachedBmp_58.png?1666895550379", id: "CachedBmp_58" },
      { src: "images/CachedBmp_57.png?1666895550379", id: "CachedBmp_57" },
      { src: "images/CachedBmp_56.png?1666895550379", id: "CachedBmp_56" },
      { src: "images/CachedBmp_55.png?1666895550379", id: "CachedBmp_55" },
      {
        src: "images/scene_2.2_atlas_1.png?1666895550304",
        id: "scene_2.2_atlas_1",
      },
      {
        src: "images/scene_2.2_atlas_2.png?1666895550304",
        id: "scene_2.2_atlas_2",
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
  an.compositions["69D95A1AEEFCD44782700315B0C39F81"] = {
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
