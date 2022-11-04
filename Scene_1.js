(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    { name: "Scene_1_atlas_1", frames: [[0, 0, 1563, 1655]] },
    { name: "Scene_1_atlas_2", frames: [[0, 0, 1336, 1312]] },
    {
      name: "Scene_1_atlas_3",
      frames: [
        [0, 0, 932, 1412],
        [934, 0, 932, 1412],
      ],
    },
    {
      name: "Scene_1_atlas_4",
      frames: [
        [0, 1688, 1156, 318],
        [0, 991, 1191, 695],
        [0, 0, 967, 989],
        [1193, 0, 846, 628],
      ],
    },
    {
      name: "Scene_1_atlas_5",
      frames: [
        [0, 726, 1173, 151],
        [0, 230, 1188, 186],
        [0, 0, 1093, 228],
        [0, 418, 687, 306],
        [1175, 724, 242, 226],
        [1295, 308, 242, 226],
        [1190, 0, 383, 306],
        [689, 418, 604, 304],
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

  (lib.CachedBmp_35 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_34 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_33 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_32 = function () {
    this.initialize(ss["Scene_1_atlas_4"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_31 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_30 = function () {
    this.initialize(ss["Scene_1_atlas_4"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_29 = function () {
    this.initialize(ss["Scene_1_atlas_4"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_28 = function () {
    this.initialize(ss["Scene_1_atlas_3"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_27 = function () {
    this.initialize(ss["Scene_1_atlas_4"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_26 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_25 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_24 = function () {
    this.initialize(ss["Scene_1_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_23 = function () {
    this.initialize(ss["Scene_1_atlas_2"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_22 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_21 = function () {
    this.initialize(ss["Scene_1_atlas_5"]);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_20 = function () {
    this.initialize(ss["Scene_1_atlas_3"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_19 = function () {
    this.initialize(img.CachedBmp_19);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2190, 637);

  (lib.CachedBmp_18 = function () {
    this.initialize(img.CachedBmp_18);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 2124, 550);

  (lib.CachedBmp_17 = function () {
    this.initialize(img.CachedBmp_17);
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
    this.instance = new lib.CachedBmp_35();
    this.instance.setTransform(2.6, 4.35, 0.5, 0.5);

    this.instance_1 = new lib.CachedBmp_34();
    this.instance_1.setTransform(-1, -1, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole14,
    new cjs.Rectangle(-1, -1, 594, 93),
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
    this.instance = new lib.CachedBmp_33();
    this.instance.setTransform(14.8, 24.4, 0.5, 0.5);

    this.instance_1 = new lib.CachedBmp_32();
    this.instance_1.setTransform(-1, -1, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole13,
    new cjs.Rectangle(-1, -1, 578, 159),
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
    this.instance = new lib.CachedBmp_31();
    this.instance.setTransform(-0.15, 0.05, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole12,
    new cjs.Rectangle(-0.1, 0.1, 343.5, 153),
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
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFB500")
      .s()
      .p(
        "AGmFiQgdgFgagOQgGgDgGgBQjPgqlVkYQhqhWhrhkIhWhTIAggsQAkguAVgEQAVgFDwB/QCABFDWB2QBaAwBiB8QAxA+AfA0IACACQAVAVACAeQACAcgQATQgNAPgZAAIgTgCg"
      );
    this.shape.setTransform(56.5702, 90.4517, 0.9999, 0.9999, 26.2526);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CB7D49")
      .s()
      .p(
        "Ag7B/QgpgTgNhLQgIhZgHgnQgJgxBEAGQAiADAjAMIAoAKQAzAPAOALQASANACAIIAFAtQACA+gWBWQgCAJhCADIgUABQg2AAgbgNg"
      );
    this.shape_1.setTransform(12.5358, 16.9668, 0.9999, 0.9999, 26.2526);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole11,
    new cjs.Rectangle(0, -0.1, 88.4, 142.6),
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
    this.instance = new lib.CachedBmp_30();
    this.instance.setTransform(-0.05, 0.05, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole10,
    new cjs.Rectangle(0, 0.1, 595.5, 347.5),
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
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "Au0O1QlblagpnaQgFg/AAhCQAAorGJmJQGJmJIrAAQIsAAGJGJQGJGJAAIrQAABCgGA/QgpHalaFaQmJGJosAAQorAAmJmJg"
      );
    this.shape.setTransform(134.2, 134.2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole8,
    new cjs.Rectangle(0, 0, 268.4, 268.4),
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
      .f("#FF0000")
      .s()
      .p(
        "AhYBJQgSgHgHgSQgHgRAHgSQAHgQARgHICQg9QARgHASAHQARAGAHASQAIARgHARQgHARgSAHIiQA9QgJAEgJAAQgIAAgIgDg"
      );
    this.shape.setTransform(11.794, 7.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole5,
    new cjs.Rectangle(0, 0, 23.6, 15.2),
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
      .f("#FF0000")
      .s()
      .p(
        "AhYBIQgSgHgHgRQgHgRAHgRQAHgRARgHICQg9QASgHARAHQARAHAHARQAHARgHARQgHARgRAHIiQA9QgIAEgJAAQgJAAgIgEg"
      );
    this.shape.setTransform(11.775, 7.575);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole4,
    new cjs.Rectangle(0, 0, 23.6, 15.2),
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
    this.instance = new lib.CachedBmp_27();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbole1,
    new cjs.Rectangle(0, 0, 423, 314),
    null
  );

  (lib.Path_13 = function (mode, startPosition, loop, reversed) {
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
      .f("#F73408")
      .s()
      .p("AhNAkQg5gWgBgdQAAgKAFgJIAFgHIEFACQgfAcgqAWQg6AfgsAAQgUAAgSgGg");
    this.shape.setTransform(20.5, 10.2899);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_13,
    new cjs.Rectangle(6.9, 6.1, 27.200000000000003, 8.5),
    null
  );

  (lib.Path_12 = function (mode, startPosition, loop, reversed) {
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
      .f("#F73408")
      .s()
      .p("AhFADQgigggXghID4A/IAEAIQACAKgCAJQgJAdg7AGIgKABQg3gBg+g8g");
    this.shape.setTransform(19.3375, 13.2502);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_12,
    new cjs.Rectangle(6.7, 6.9, 25.3, 12.700000000000001),
    null
  );

  (lib.Ellipse = function (mode, startPosition, loop, reversed) {
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
        "EgS+As7QovjtmwmwQmwmvjtoxQj1pDAAp7QAAp5D1pFQDtovGwmwQGwmwIvjtQJFj1J5AAQJ7AAJDD1QIxDtGvGwQGwGwDtIvQD1JFAAJ5QAAJ7j1JDQjtIwmwGwQmwGwowDtQpDD1p7AAQp5AApFj1g"
      );
    this.shape.setTransform(312, 312);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Ellipse,
    new cjs.Rectangle(0, 0, 624, 624),
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
    this.shape.graphics.f("#FF0000").s().p("Av51pIEklDMAbPA0ZIiEBAg");
    this.shape.setTransform(138.15, 207.25);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_9,
    new cjs.Rectangle(36.4, 36.4, 203.6, 341.8),
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
    this.shape.graphics.f("#FF0000").s().p("AutWRMAXIgtLIGTDJMgcbAqsg");
    this.shape.setTransform(130.775, 183.65);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_8,
    new cjs.Rectangle(36.6, 37, 188.4, 293.4),
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
    this.shape.graphics.f("#FF0000").s().p("EgiWAP2MBEtgfrIg7FdMhC3AaOg");
    this.shape.setTransform(256.075, 138.075);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_7,
    new cjs.Rectangle(36.2, 36.7, 439.8, 202.8),
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
    this.shape.graphics.f("#FF0000").s().p("A82AAIAAhUMA5sgBGIhzE1g");
    this.shape.setTransform(220.75, 52.45);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_6,
    new cjs.Rectangle(36.1, 37, 369.29999999999995, 31),
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
    this.shape.graphics.f("#FF0000").s().p("AxiBKIAAiVMAjGAAgIAAB2g");
    this.shape.setTransform(148.7, 44.2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_5,
    new cjs.Rectangle(36.4, 36.7, 224.70000000000002, 15.099999999999994),
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
    this.shape.graphics.f("#FF0000").s().p("Avm1BIEfk5MAauAy3IiBA+g");
    this.shape.setTransform(99.85, 165.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_4,
    new cjs.Rectangle(0, 0, 199.7, 331.8),
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
    this.shape.graphics.f("#FF0000").s().p("AubVqMAWsgr7IGLDDMgb5Apgg");
    this.shape.setTransform(92.4, 142.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_3,
    new cjs.Rectangle(0, 0, 184.8, 285.2),
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
    this.shape.graphics.f("#FF0000").s().p("EghYAPWMBCxgerIg5FSMhA/AZZg");
    this.shape.setTransform(213.675, 98.2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_2,
    new cjs.Rectangle(0, 0, 427.4, 196.4),
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
    this.shape.graphics.f("#FF0000").s().p("A7/AAIAAhUMA3/gBGIhwE1g");
    this.shape.setTransform(179.225, 15.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_1,
    new cjs.Rectangle(0, 0, 358.5, 31),
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
    this.shape.graphics.f("#FF0000").s().p("AwyBKIAAiVMAhlAAgIAAB3g");
    this.shape.setTransform(107.45, 7.575);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path,
    new cjs.Rectangle(0, 0, 214.9, 15.2),
    null
  );

  (lib.Path_12_1 = function (mode, startPosition, loop, reversed) {
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
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF0000")
      .s()
      .p("Ag+ALQgqgWgfgcIEEgCQALALAAAPQgBAdg4AWQgSAGgVAAQgsAAg6gfg");
    this.shape_1.setTransform(20.4761, 10.6899);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_12_1,
    new cjs.Rectangle(6.9, 6.5, 27.200000000000003, 8.5),
    null
  );

  (lib.Path_11 = function (mode, startPosition, loop, reversed) {
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
      .p("Ag5A/Qg7gGgJgdQgCgJACgKIAEgIID4g/QgXAigiAgQg+A7g2AAIgLAAg");
    this.shape.setTransform(19.6625, 12.6293);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_11,
    new cjs.Rectangle(7, 6.3, 25.4, 12.7),
    null
  );

  (lib.Path_10 = function (mode, startPosition, loop, reversed) {
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
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#1E1E1E").s().p("EiWABUYMAAAiovMEsBAAAMAAACovg");
    this.shape_1.setTransform(960.1, 539.975);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Path_10,
    new cjs.Rectangle(0, 0, 1920.2, 1080),
    null
  );

  (lib.Interpoler2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_26();
    this.instance.setTransform(-60.45, -56.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-60.4, -56.5, 121, 113);

  (lib.Interpoler1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.CachedBmp_25();
    this.instance.setTransform(-60.45, -56.5, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-60.4, -56.5, 121, 113);

  (lib.tirer = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Symbole13();
    this.instance.setTransform(333, 69, 1, 1, 0, 0, 0, 288, 78.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ scaleX: 1.0012, scaleY: 1.0012, y: 69.05 }, 0)
        .wait(1)
        .to({ scaleX: 1.0024, scaleY: 1.0024 }, 0)
        .wait(1)
        .to({ scaleX: 1.0035, scaleY: 1.0035, x: 332.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0047, scaleY: 1.0047, y: 69 }, 0)
        .wait(1)
        .to({ scaleX: 1.0059, scaleY: 1.0059 }, 0)
        .wait(1)
        .to({ scaleX: 1.0071, scaleY: 1.0071 }, 0)
        .wait(1)
        .to({ scaleX: 1.0082, scaleY: 1.0082, x: 332.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0094, scaleY: 1.0094, x: 332.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0106, scaleY: 1.0106 }, 0)
        .wait(1)
        .to({ scaleX: 1.0118, scaleY: 1.0118 }, 0)
        .wait(1)
        .to({ scaleX: 1.0129, scaleY: 1.0129 }, 0)
        .wait(1)
        .to({ scaleX: 1.0141, scaleY: 1.0141, x: 332.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0153, scaleY: 1.0153 }, 0)
        .wait(1)
        .to({ scaleX: 1.0165, scaleY: 1.0165 }, 0)
        .wait(1)
        .to({ scaleX: 1.0177, scaleY: 1.0177, x: 332.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0188, scaleY: 1.0188, x: 332.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.02, scaleY: 1.02, y: 68.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0212, scaleY: 1.0212 }, 0)
        .wait(1)
        .to({ scaleX: 1.0224, scaleY: 1.0224 }, 0)
        .wait(1)
        .to({ scaleX: 1.0235, scaleY: 1.0235, y: 69 }, 0)
        .wait(1)
        .to({ scaleX: 1.0247, scaleY: 1.0247, x: 332.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.0259, scaleY: 1.0259, x: 332.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0271, scaleY: 1.0271, y: 68.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0282, scaleY: 1.0282 }, 0)
        .wait(1)
        .to({ scaleX: 1.0294, scaleY: 1.0294, x: 332.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.0306, scaleY: 1.0306 }, 0)
        .wait(1)
        .to({ scaleX: 1.0318, scaleY: 1.0318 }, 0)
        .wait(1)
        .to({ scaleX: 1.0329, scaleY: 1.0329 }, 0)
        .wait(1)
        .to({ scaleX: 1.0341, scaleY: 1.0341 }, 0)
        .wait(1)
        .to({ scaleX: 1.0353, scaleY: 1.0353 }, 0)
        .wait(1)
        .to({ scaleX: 1.0365, scaleY: 1.0365 }, 0)
        .wait(1)
        .to({ scaleX: 1.0377, scaleY: 1.0377 }, 0)
        .wait(1)
        .to({ scaleX: 1.0388, scaleY: 1.0388 }, 0)
        .wait(1)
        .to({ scaleX: 1.04, scaleY: 1.04, x: 332.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.0412, scaleY: 1.0412 }, 0)
        .wait(1)
        .to({ scaleX: 1.0424, scaleY: 1.0424 }, 0)
        .wait(1)
        .to({ scaleX: 1.0435, scaleY: 1.0435, x: 332.85, y: 68.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0447, scaleY: 1.0447 }, 0)
        .wait(1)
        .to({ scaleX: 1.0459, scaleY: 1.0459, x: 332.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.0471, scaleY: 1.0471, y: 68.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0482, scaleY: 1.0482 }, 0)
        .wait(1)
        .to({ scaleX: 1.0494, scaleY: 1.0494 }, 0)
        .wait(1)
        .to({ scaleX: 1.0506, scaleY: 1.0506, x: 332.75, y: 68.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0518, scaleY: 1.0518, x: 332.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.053, scaleY: 1.053 }, 0)
        .wait(1)
        .to({ scaleX: 1.0541, scaleY: 1.0541 }, 0)
        .wait(1)
        .to({ scaleX: 1.0553, scaleY: 1.0553 }, 0)
        .wait(1)
        .to({ scaleX: 1.0565, scaleY: 1.0565, x: 332.75 }, 0)
        .wait(1)
        .to({ scaleX: 1.0577, scaleY: 1.0577 }, 0)
        .wait(1)
        .to({ scaleX: 1.0588, scaleY: 1.0588 }, 0)
        .wait(1)
        .to({ scaleX: 1.06, scaleY: 1.06 }, 0)
        .wait(1)
        .to({ scaleX: 1.0612, scaleY: 1.0612 }, 0)
        .wait(1)
        .to({ scaleX: 1.0624, scaleY: 1.0624 }, 0)
        .wait(1)
        .to({ scaleX: 1.0635, scaleY: 1.0635 }, 0)
        .wait(1)
        .to({ scaleX: 1.0647, scaleY: 1.0647 }, 0)
        .wait(1)
        .to({ scaleX: 1.0659, scaleY: 1.0659, y: 68.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.0671, scaleY: 1.0671, x: 332.7 }, 0)
        .wait(1)
        .to({ scaleX: 1.0683, scaleY: 1.0683 }, 0)
        .wait(1)
        .to({ scaleX: 1.0694, scaleY: 1.0694, x: 332.75 }, 0)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(23.7, -16.1, 618.1999999999999, 170.1);

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
    this.instance = new lib.CachedBmp_29();
    this.instance.setTransform(0, 106.5, 0.5, 0.5);

    this.instance_1 = new lib.Path_11();
    this.instance_1.setTransform(259.75, 89.35, 1, 1, 0, 0, 0, 19.7, 12.6);
    this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,0.929)", 0, 0, 6);

    this.instance_2 = new lib.Path_12_1();
    this.instance_2.setTransform(229.45, 94.45, 1, 1, 0, 0, 0, 20.4, 10.7);
    this.instance_2.shadow = new cjs.Shadow("rgba(255,0,0,0.929)", 0, 0, 6);

    this.instance_3 = new lib.CachedBmp_28();
    this.instance_3.setTransform(48.7, 0, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.Symbole9,
    new cjs.Rectangle(0, 0, 514.7, 706),
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
    this.instance = new lib.Interpoler1("synched", 0);
    this.instance.setTransform(60.45, 56.5);

    this.instance_1 = new lib.Interpoler2("synched", 0);
    this.instance_1.setTransform(60.45, 56.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 9)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ _off: true }, 9).wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 121, 113);

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
    this.instance = new lib.Path();
    this.instance.setTransform(
      6.05,
      18.45,
      0.0551,
      0.0551,
      0,
      0,
      0,
      110.8,
      12.7
    );
    this.instance.alpha = 0.6992;

    this.instance_1 = new lib.Path_1();
    this.instance_1.setTransform(
      21.25,
      18.85,
      0.0551,
      0.0551,
      0,
      0,
      0,
      184.2,
      19.9
    );
    this.instance_1.alpha = 0.6992;

    this.instance_2 = new lib.Path_2();
    this.instance_2.setTransform(
      23.45,
      13.15,
      0.0551,
      0.0551,
      0,
      0,
      0,
      217,
      103.5
    );
    this.instance_2.alpha = 0.6992;

    this.instance_3 = new lib.Path_3();
    this.instance_3.setTransform(16.9, 11.25, 0.0551, 0.0551, 0, 0, 0, 98, 148);
    this.instance_3.alpha = 0.6992;

    this.instance_4 = new lib.Path_4();
    this.instance_4.setTransform(7, 9.3, 0.0551, 0.0551, 0, 0, 0, 102.5, 168.8);
    this.instance_4.alpha = 0.6992;

    this.instance_5 = new lib.Path_5();
    this.instance_5.setTransform(6.3, 18.4, 0.0551, 0.0551, 0, 0, 0, 150.7, 49);
    this.instance_5.alpha = 0.6992;

    this.instance_6 = new lib.Path_6();
    this.instance_6.setTransform(
      20.95,
      18.8,
      0.0551,
      0.0551,
      0,
      0,
      0,
      223.3,
      57.2
    );
    this.instance_6.alpha = 0.6992;

    this.instance_7 = new lib.Path_7();
    this.instance_7.setTransform(
      23.1,
      13.3,
      0.0551,
      0.0551,
      0,
      0,
      0,
      260.5,
      143.4
    );
    this.instance_7.alpha = 0.6992;

    this.instance_8 = new lib.Path_8();
    this.instance_8.setTransform(
      16.8,
      11.45,
      0.0551,
      0.0551,
      0,
      0,
      0,
      133.4,
      188.8
    );
    this.instance_8.alpha = 0.6992;

    this.instance_9 = new lib.Path_9();
    this.instance_9.setTransform(
      7.1,
      9.55,
      0.0551,
      0.0551,
      0,
      0,
      0,
      138.9,
      210.6
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
    lib.Symbole3,
    new cjs.Rectangle(0, 0, 35.1, 19.5),
    null
  );

  (lib.relever = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Symbole14();
    this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 296, 45.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-297, -46.5, 594, 93);

  // stage content:
  (lib.Scene_1 = function (mode, startPosition, loop, reversed) {
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

    this.actionFrames = [212];
    // timeline functions:
    this.frame_212 = function () {
      var _this = this;
      /*
		Cliquez sur l’occurrence de symbole spécifiée pour exécuter une fonction.
		*/
      _this.movieClip_1.on("click", function () {
        /*
		Charge l’URL dans une nouvelle fenêtre du navigateur.
		*/
        window.open("/LaRevancheDeZurg/2.1/scene_2.1.html", "_self");
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
        window.open("/LaRevancheDeZurg/2.2/scene_2.2.html", "_self");
      });

      var _this = this;
      /*
		Arrête l’animation complète.
		*/
      createjs.Ticker.removeEventListener("tick", stage);
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(212).call(this.frame_212).wait(1)
    );

    // TIRER
    this.movieClip_1 = new lib.tirer();
    this.movieClip_1.name = "movieClip_1";
    this.movieClip_1.setTransform(205.25, 471.5, 1, 1, 0, 0, 0, 0.5, 0.5);
    this.movieClip_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_1).wait(212).to({ _off: false }, 0).wait(1)
    );

    // SE_RELEVER
    this.movieClip_2 = new lib.relever();
    this.movieClip_2.name = "movieClip_2";
    this.movieClip_2.setTransform(1374, 540);
    this.movieClip_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.movieClip_2).wait(212).to({ _off: false }, 0).wait(1)
    );

    // FOND
    this.instance = new lib.Path_10();
    this.instance.setTransform(960, 540.85, 1, 1, 0, 0, 0, 960.1, 540);
    this.instance.alpha = 0.7188;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(212).to({ _off: false }, 0).wait(1)
    );

    // JAMBE
    this.instance_1 = new lib.Symbole12();
    this.instance_1.setTransform(1899.55, 816.05, 1, 1, 0, 0, 0, 16.3, 13.1);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(191)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          { regX: 171.6, regY: 76.6, rotation: 4.1496, x: 2007.1, y: 876.4 },
          0
        )
        .wait(1)
        .to({ rotation: 8.2993, x: 1958.55, y: 872.85 }, 0)
        .wait(1)
        .to({ rotation: 12.4489, x: 1909.25, y: 868.95 }, 0)
        .wait(1)
        .to({ rotation: 16.5985, x: 1859.25, y: 864.45 }, 0)
        .wait(1)
        .to({ rotation: 20.7482, x: 1808.5, y: 859.5 }, 0)
        .wait(1)
        .to({ rotation: 24.8978, x: 1757.2, y: 853.85 }, 0)
        .wait(1)
        .to({ rotation: 29.0474, x: 1705.25, y: 847.55 }, 0)
        .wait(1)
        .to({ rotation: 33.197, x: 1652.8, y: 840.65 }, 0)
        .wait(1)
        .to({ rotation: 37.3467, x: 1599.8, y: 832.95 }, 0)
        .wait(1)
        .to({ rotation: 41.4963, x: 1546.4, y: 824.5 }, 0)
        .wait(1)
        .to({ x: 1530.15, y: 829.75 }, 0)
        .wait(1)
        .to({ x: 1513.95, y: 834.95 }, 0)
        .wait(1)
        .to({ x: 1497.7, y: 840.15 }, 0)
        .wait(1)
        .to({ x: 1481.5, y: 845.35 }, 0)
        .wait(1)
        .to({ x: 1465.25, y: 850.6 }, 0)
        .wait(1)
        .to({ x: 1449, y: 855.8 }, 0)
        .wait(1)
        .to({ x: 1432.8, y: 861 }, 0)
        .wait(1)
        .to({ x: 1416.55, y: 866.25 }, 0)
        .wait(1)
        .to({ x: 1400.35, y: 871.45 }, 0)
        .wait(1)
        .to({ x: 1384.1, y: 876.65 }, 0)
        .wait(2)
    );

    // BRAS_WOODY
    this.instance_2 = new lib.Symbole11();
    this.instance_2.setTransform(1618.95, 594.05, 1, 1, 0, 0, 0, 12.5, 15.4);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(191)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          { regX: 55.6, regY: 71.4, rotation: -2.4712, x: 1624.05, y: 630.6 },
          0
        )
        .wait(1)
        .to({ rotation: -4.9424, x: 1585.95, y: 611 }, 0)
        .wait(1)
        .to({ rotation: -7.4136, x: 1547.75, y: 591.4 }, 0)
        .wait(1)
        .to({ rotation: -9.8848, x: 1509.45, y: 571.6 }, 0)
        .wait(1)
        .to({ rotation: -12.356, x: 1471.1, y: 551.75 }, 0)
        .wait(1)
        .to({ rotation: -14.8273, x: 1432.6, y: 531.8 }, 0)
        .wait(1)
        .to({ rotation: -17.2985, x: 1394.1, y: 511.8 }, 0)
        .wait(1)
        .to({ rotation: -19.7697, x: 1355.35, y: 491.8 }, 0)
        .wait(1)
        .to({ rotation: -22.2409, x: 1316.55, y: 471.65 }, 0)
        .wait(1)
        .to({ rotation: -24.7121, x: 1277.7, y: 451.4 }, 0)
        .wait(1)
        .to({ rotation: -17.212, x: 1272.9, y: 459.3 }, 0)
        .wait(1)
        .to({ rotation: -9.7119, x: 1267.05, y: 466.5 }, 0)
        .wait(1)
        .to({ rotation: -2.2118, x: 1260.35, y: 472.85 }, 0)
        .wait(1)
        .to({ rotation: 5.2883, x: 1252.85, y: 478.3 }, 0)
        .wait(1)
        .to({ rotation: 12.7884, x: 1244.75, y: 482.75 }, 0)
        .wait(1)
        .to({ rotation: 20.2884, x: 1236.15, y: 486.05 }, 0)
        .wait(1)
        .to({ rotation: 27.7885, x: 1227.15, y: 488.2 }, 0)
        .wait(1)
        .to({ rotation: 35.2886, x: 1217.95, y: 489.2 }, 0)
        .wait(1)
        .to({ rotation: 42.7887, x: 1208.7, y: 488.95 }, 0)
        .wait(1)
        .to({ rotation: 50.2888, x: 1199.5, y: 487.5 }, 0)
        .wait(2)
    );

    // CORPS
    this.instance_3 = new lib.Symbole10();
    this.instance_3.setTransform(1689.65, 717.05, 1, 1, 0, 0, 0, 67.7, 221.4);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(191)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          { regX: 297.7, regY: 173.8, rotation: 2.5136, x: 1885.75, y: 657.75 },
          0
        )
        .wait(1)
        .to({ rotation: 5.0271, x: 1851.35, y: 646.15 }, 0)
        .wait(1)
        .to({ rotation: 7.5407, x: 1816.6, y: 634.55 }, 0)
        .wait(1)
        .to({ rotation: 10.0542, x: 1781.4, y: 623.05 }, 0)
        .wait(1)
        .to({ rotation: 12.5678, x: 1745.65, y: 611.55 }, 0)
        .wait(1)
        .to({ rotation: 15.0814, x: 1709.55, y: 600 }, 0)
        .wait(1)
        .to({ rotation: 17.5949, x: 1672.9, y: 588.45 }, 0)
        .wait(1)
        .to({ rotation: 20.1085, x: 1635.9, y: 576.85 }, 0)
        .wait(1)
        .to({ rotation: 22.622, x: 1598.4, y: 565.2 }, 0)
        .wait(1)
        .to({ rotation: 25.1356, x: 1560.45, y: 553.45 }, 0)
        .wait(1)
        .to({ x: 1544.25, y: 558.65 }, 0)
        .wait(1)
        .to({ x: 1528, y: 563.9 }, 0)
        .wait(1)
        .to({ x: 1511.8, y: 569.1 }, 0)
        .wait(1)
        .to({ x: 1495.55, y: 574.3 }, 0)
        .wait(1)
        .to({ x: 1479.3, y: 579.55 }, 0)
        .wait(1)
        .to({ x: 1463.1, y: 584.75 }, 0)
        .wait(1)
        .to({ x: 1446.85, y: 589.95 }, 0)
        .wait(1)
        .to({ x: 1430.65, y: 595.2 }, 0)
        .wait(1)
        .to({ x: 1414.4, y: 600.4 }, 0)
        .wait(1)
        .to({ x: 1398.15, y: 605.6 }, 0)
        .wait(2)
    );

    // ZURG
    this.instance_4 = new lib.Symbole9();
    this.instance_4.setTransform(1417.6, 615.3, 1, 1, 0, 0, 0, 257.4, 353.1);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(191)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regY: 353, x: 1377.55, y: 597.5 }, 0)
        .wait(1)
        .to({ x: 1337.55, y: 579.8 }, 0)
        .wait(1)
        .to({ x: 1297.5, y: 562.1 }, 0)
        .wait(1)
        .to({ x: 1257.5, y: 544.4 }, 0)
        .wait(1)
        .to({ x: 1217.45, y: 526.7 }, 0)
        .wait(1)
        .to({ x: 1177.45, y: 509 }, 0)
        .wait(1)
        .to({ x: 1137.4, y: 491.3 }, 0)
        .wait(1)
        .to({ x: 1097.4, y: 473.6 }, 0)
        .wait(1)
        .to({ x: 1057.35, y: 455.9 }, 0)
        .wait(1)
        .to({ x: 1017.35, y: 438.25 }, 0)
        .wait(12)
    );

    // DECORS
    this.instance_5 = new lib.CachedBmp_17();
    this.instance_5.setTransform(719.15, 635.65, 0.5, 0.5);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5).wait(191).to({ _off: false }, 0).wait(22)
    );

    // FOND
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#1E1E1E").s().p("EiWABUYMAAAiovMEsBAAAMAAACovg");
    this.shape.setTransform(959.925, 542.025);
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(191).to({ _off: false }, 0).wait(22)
    );

    // TEXTE
    this.instance_6 = new lib.CachedBmp_18();
    this.instance_6.setTransform(455.8, 409.35, 0.5, 0.5);

    this.text = new cjs.Text(
      "VOUS ÊTES BLESSÉ PAR L'EXPLOSION,\nZURG PARVINT À RÉCUPÉRER WOODY",
      "bold 81px 'Poppins Black'",
      "#CCCCCC"
    );
    this.text.textAlign = "center";
    this.text.lineHeight = 115;
    this.text.parent = this;
    this.text.setTransform(972.95, 423.05);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_6 }] }, 38)
        .to({ state: [{ t: this.text }] }, 39)
        .wait(136)
    );

    // EXPLOSION
    this.instance_7 = new lib.Symbole8();
    this.instance_7.setTransform(
      548.4,
      524.75,
      0.3204,
      0.3204,
      0,
      0,
      0,
      134.1,
      134.1
    );
    this.instance_7.alpha = 0;
    this.instance_7.compositeOperation = "hard-light";
    this.instance_7._off = true;
    this.instance_7.filters = [new cjs.BlurFilter(140, 140, 1)];
    this.instance_7.cache(-2, -2, 272, 272);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(18)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 134.2,
            regY: 134.2,
            scaleX: 6.148,
            scaleY: 6.148,
            x: 549.85,
            y: 526.05,
            alpha: 0.5,
          },
          0
        )
        .wait(1)
        .to(
          { scaleX: 11.9755, scaleY: 11.9755, x: 551.2, y: 527.3, alpha: 1 },
          0
        )
        .wait(11)
        .to({ alpha: 0.8333 }, 0)
        .wait(1)
        .to({ alpha: 0.6667 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.3333 }, 0)
        .wait(1)
        .to({ alpha: 0.1667 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .to({ _off: true }, 1)
        .wait(176)
    );

    // ECRAN_NOIR
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(1, 1, 1).p("EiV/AAAMEr/AAA");
    this.shape_1.setTransform(960, 0);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
    this.shape_2.setTransform(960, 540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }, 30)
        .to({ state: [] }, 161)
        .wait(22)
    );

    // DECORS
    this.instance_8 = new lib.CachedBmp_19();
    this.instance_8.setTransform(825.25, 761.4, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8).to({ _off: true }, 31).wait(182)
    );

    // MergedLayer_1
    this.instance_9 = new lib.Symbole5();
    this.instance_9.setTransform(1372.75, 308.8, 1, 1, 0, 0, 0, 11.8, 7.6);

    this.instance_10 = new lib.Symbole5();
    this.instance_10.setTransform(1433.5, 308.8, 1, 1, 0, 0, 0, 11.8, 7.6);

    this.instance_11 = new lib.Symbole4();
    this.instance_11.setTransform(1399.6, 249.35, 1, 1, 0, 0, 0, 11.8, 7.5);

    this.instance_12 = new lib.Symbole5();
    this.instance_12.setTransform(1433.5, 308.8, 1, 1, 0, 0, 0, 11.8, 7.6);

    this.instance_13 = new lib.Symbole5();
    this.instance_13.setTransform(
      1256.3,
      383.35,
      1.3596,
      1.3596,
      0,
      0,
      0,
      11.8,
      7.6
    );

    this.instance_14 = new lib.Symbole4();
    this.instance_14.setTransform(
      1221.2,
      337.5,
      1.3941,
      1.3941,
      0,
      0,
      0,
      11.8,
      7.5
    );

    this.instance_15 = new lib.Symbole5();
    this.instance_15.setTransform(
      1256.3,
      383.35,
      1.3596,
      1.3596,
      0,
      0,
      0,
      11.8,
      7.6
    );

    this.instance_16 = new lib.Symbole5();
    this.instance_16.setTransform(
      1079.1,
      457.95,
      1.7193,
      1.7193,
      0,
      0,
      0,
      11.8,
      7.6
    );

    this.instance_17 = new lib.Symbole4();
    this.instance_17.setTransform(
      1042.85,
      425.65,
      1.7881,
      1.7881,
      0,
      0,
      0,
      11.8,
      7.5
    );

    this.instance_18 = new lib.Symbole5();
    this.instance_18.setTransform(
      1079.1,
      457.95,
      1.7193,
      1.7193,
      0,
      0,
      0,
      11.8,
      7.6
    );

    this.instance_19 = new lib.Symbole5();
    this.instance_19.setTransform(
      901.9,
      532.55,
      2.0789,
      2.0789,
      0,
      0,
      0,
      11.8,
      7.6
    );

    this.instance_20 = new lib.Symbole4();
    this.instance_20.setTransform(
      864.45,
      513.85,
      2.1822,
      2.1822,
      0,
      0,
      0,
      11.8,
      7.5
    );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              {
                t: this.instance_11,
                p: { scaleX: 1, scaleY: 1, x: 1399.6, y: 249.35, regY: 7.5 },
              },
              {
                t: this.instance_10,
                p: { scaleX: 1, scaleY: 1, x: 1433.5, y: 308.8, regY: 7.6 },
              },
              {
                t: this.instance_9,
                p: { scaleX: 1, scaleY: 1, x: 1372.75, y: 308.8, regY: 7.6 },
              },
            ],
          },
          6
        )
        .to(
          {
            state: [
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.1313,
                  scaleY: 1.1313,
                  x: 1340.15,
                  y: 278.7,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1374.45,
                  y: 333.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1320.4,
                  y: 333.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.2627,
                  scaleY: 1.2627,
                  x: 1280.7,
                  y: 308.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1315.45,
                  y: 358.5,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1268.2,
                  y: 358.5,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.3941,
                  scaleY: 1.3941,
                  x: 1221.2,
                  y: 337.5,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: { scaleX: 1, scaleY: 1, x: 1399.6, y: 249.35, regY: 7.5 },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1256.3,
                  y: 383.35,
                },
              },
              {
                t: this.instance_12,
                p: { scaleX: 1, scaleY: 1, x: 1433.5, y: 308.8, regY: 7.6 },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1215.8,
                  y: 383.35,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: { scaleX: 1, scaleY: 1, x: 1372.75, y: 308.8, regY: 7.6 },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.5254,
                  scaleY: 1.5254,
                  x: 1161.75,
                  y: 366.9,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.1313,
                  scaleY: 1.1313,
                  x: 1340.15,
                  y: 278.7,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.7,
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1197.25,
                  y: 408.35,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1374.45,
                  y: 333.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1163.5,
                  y: 408.35,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1320.4,
                  y: 333.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.6568,
                  scaleY: 1.6568,
                  x: 1102.35,
                  y: 396.3,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.2627,
                  scaleY: 1.2627,
                  x: 1280.7,
                  y: 308.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.7,
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1138.15,
                  y: 433.25,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1315.45,
                  y: 358.5,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1111.2,
                  y: 433.25,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1268.2,
                  y: 358.5,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.7881,
                  scaleY: 1.7881,
                  x: 1042.85,
                  y: 425.65,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.3941,
                  scaleY: 1.3941,
                  x: 1221.2,
                  y: 337.5,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: { scaleX: 1, scaleY: 1, x: 1399.6, y: 249.35, regY: 7.5 },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.7193, scaleY: 1.7193, x: 1079.1, y: 457.95 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.6,
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1256.3,
                  y: 383.35,
                },
              },
              {
                t: this.instance_13,
                p: { regY: 7.6, scaleX: 1, scaleY: 1, x: 1433.5, y: 308.8 },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1058.85,
                  y: 457.95,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1215.8,
                  y: 383.35,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: { scaleX: 1, scaleY: 1, x: 1372.75, y: 308.8, regY: 7.6 },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.9195,
                  scaleY: 1.9195,
                  x: 983.4,
                  y: 455.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.5254,
                  scaleY: 1.5254,
                  x: 1161.75,
                  y: 366.9,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.1313,
                  scaleY: 1.1313,
                  x: 1340.15,
                  y: 278.7,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.8392, scaleY: 1.8392, x: 1020.05, y: 482.85 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1197.25,
                  y: 408.35,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1374.45,
                  y: 333.65,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1006.55,
                  y: 482.85,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1163.5,
                  y: 408.35,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1320.4,
                  y: 333.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 2.0508,
                  scaleY: 2.0508,
                  x: 923.95,
                  y: 484.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.6568,
                  scaleY: 1.6568,
                  x: 1102.35,
                  y: 396.3,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.2627,
                  scaleY: 1.2627,
                  x: 1280.7,
                  y: 308.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.9591, scaleY: 1.9591, x: 960.95, y: 507.65 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1138.15,
                  y: 433.25,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1315.45,
                  y: 358.5,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 954.2,
                  y: 507.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1111.2,
                  y: 433.25,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1268.2,
                  y: 358.5,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_20 },
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.7881,
                  scaleY: 1.7881,
                  x: 1042.85,
                  y: 425.65,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.3941,
                  scaleY: 1.3941,
                  x: 1221.2,
                  y: 337.5,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: { scaleX: 1, scaleY: 1, x: 1399.6, y: 249.35, regY: 7.5 },
              },
              { t: this.instance_19 },
              { t: this.instance_18 },
              {
                t: this.instance_16,
                p: { scaleX: 1.3596, scaleY: 1.3596, x: 1256.3, y: 383.35 },
              },
              {
                t: this.instance_15,
                p: { regY: 7.6, scaleX: 1, scaleY: 1, x: 1433.5, y: 308.8 },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1058.85,
                  y: 457.95,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1215.8,
                  y: 383.35,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: { scaleX: 1, scaleY: 1, x: 1372.75, y: 308.8, regY: 7.6 },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.9195,
                  scaleY: 1.9195,
                  x: 983.4,
                  y: 455.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.5254,
                  scaleY: 1.5254,
                  x: 1161.75,
                  y: 366.9,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.1313,
                  scaleY: 1.1313,
                  x: 1340.15,
                  y: 278.7,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.8392, scaleY: 1.8392, x: 1020.05, y: 482.85 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1197.25,
                  y: 408.35,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1374.45,
                  y: 333.65,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1006.55,
                  y: 482.85,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1163.5,
                  y: 408.35,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1320.4,
                  y: 333.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 2.0508,
                  scaleY: 2.0508,
                  x: 923.95,
                  y: 484.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.6568,
                  scaleY: 1.6568,
                  x: 1102.35,
                  y: 396.3,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.2627,
                  scaleY: 1.2627,
                  x: 1280.7,
                  y: 308.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.9591, scaleY: 1.9591, x: 960.95, y: 507.65 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1138.15,
                  y: 433.25,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1315.45,
                  y: 358.5,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 954.2,
                  y: 507.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1111.2,
                  y: 433.25,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1268.2,
                  y: 358.5,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_20 },
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.7881,
                  scaleY: 1.7881,
                  x: 1042.85,
                  y: 425.65,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.3941,
                  scaleY: 1.3941,
                  x: 1221.2,
                  y: 337.5,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: { scaleX: 1, scaleY: 1, x: 1399.6, y: 249.35, regY: 7.5 },
              },
              { t: this.instance_19 },
              { t: this.instance_18 },
              {
                t: this.instance_16,
                p: { scaleX: 1.3596, scaleY: 1.3596, x: 1256.3, y: 383.35 },
              },
              {
                t: this.instance_15,
                p: { regY: 7.6, scaleX: 1, scaleY: 1, x: 1433.5, y: 308.8 },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1058.85,
                  y: 457.95,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1215.8,
                  y: 383.35,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: { scaleX: 1, scaleY: 1, x: 1372.75, y: 308.8, regY: 7.6 },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.9195,
                  scaleY: 1.9195,
                  x: 983.4,
                  y: 455.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.5254,
                  scaleY: 1.5254,
                  x: 1161.75,
                  y: 366.9,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.1313,
                  scaleY: 1.1313,
                  x: 1340.15,
                  y: 278.7,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.8392, scaleY: 1.8392, x: 1020.05, y: 482.85 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1197.25,
                  y: 408.35,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1374.45,
                  y: 333.65,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1006.55,
                  y: 482.85,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1163.5,
                  y: 408.35,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1320.4,
                  y: 333.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 2.0508,
                  scaleY: 2.0508,
                  x: 923.95,
                  y: 484.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.6568,
                  scaleY: 1.6568,
                  x: 1102.35,
                  y: 396.3,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.2627,
                  scaleY: 1.2627,
                  x: 1280.7,
                  y: 308.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.9591, scaleY: 1.9591, x: 960.95, y: 507.65 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1138.15,
                  y: 433.25,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1315.45,
                  y: 358.5,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 954.2,
                  y: 507.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1111.2,
                  y: 433.25,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1268.2,
                  y: 358.5,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_20 },
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.7881,
                  scaleY: 1.7881,
                  x: 1042.85,
                  y: 425.65,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.3941,
                  scaleY: 1.3941,
                  x: 1221.2,
                  y: 337.5,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: { scaleX: 1, scaleY: 1, x: 1399.6, y: 249.35, regY: 7.5 },
              },
              { t: this.instance_19 },
              { t: this.instance_18 },
              {
                t: this.instance_16,
                p: { scaleX: 1.3596, scaleY: 1.3596, x: 1256.3, y: 383.35 },
              },
              {
                t: this.instance_15,
                p: { regY: 7.6, scaleX: 1, scaleY: 1, x: 1433.5, y: 308.8 },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1058.85,
                  y: 457.95,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1215.8,
                  y: 383.35,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: { scaleX: 1, scaleY: 1, x: 1372.75, y: 308.8, regY: 7.6 },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 1.9195,
                  scaleY: 1.9195,
                  x: 983.4,
                  y: 455.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.5254,
                  scaleY: 1.5254,
                  x: 1161.75,
                  y: 366.9,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.1313,
                  scaleY: 1.1313,
                  x: 1340.15,
                  y: 278.7,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.8392, scaleY: 1.8392, x: 1020.05, y: 482.85 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1197.25,
                  y: 408.35,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1374.45,
                  y: 333.65,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1006.55,
                  y: 482.85,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1163.5,
                  y: 408.35,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.1199,
                  scaleY: 1.1199,
                  x: 1320.4,
                  y: 333.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 2.0508,
                  scaleY: 2.0508,
                  x: 923.95,
                  y: 484.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.6568,
                  scaleY: 1.6568,
                  x: 1102.35,
                  y: 396.3,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.2627,
                  scaleY: 1.2627,
                  x: 1280.7,
                  y: 308.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 1.9591, scaleY: 1.9591, x: 960.95, y: 507.65 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.7,
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1138.15,
                  y: 433.25,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1315.45,
                  y: 358.5,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 954.2,
                  y: 507.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1111.2,
                  y: 433.25,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.2398,
                  scaleY: 1.2398,
                  x: 1268.2,
                  y: 358.5,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_17,
                p: {
                  scaleX: 2.1822,
                  scaleY: 2.1822,
                  x: 864.45,
                  y: 513.85,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.7881,
                  scaleY: 1.7881,
                  x: 1042.85,
                  y: 425.65,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.3941,
                  scaleY: 1.3941,
                  x: 1221.2,
                  y: 337.5,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_16,
                p: { scaleX: 2.0789, scaleY: 2.0789, x: 901.9, y: 532.55 },
              },
              {
                t: this.instance_15,
                p: {
                  regY: 7.6,
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1079.1,
                  y: 457.95,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1256.3,
                  y: 383.35,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1058.85,
                  y: 457.95,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.3596,
                  scaleY: 1.3596,
                  x: 1215.8,
                  y: 383.35,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_14,
                p: {
                  scaleX: 1.9195,
                  scaleY: 1.9195,
                  x: 983.4,
                  y: 455.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.5254,
                  scaleY: 1.5254,
                  x: 1161.75,
                  y: 366.9,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1020.05,
                  y: 482.85,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1197.25,
                  y: 408.35,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1006.55,
                  y: 482.85,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.4795,
                  scaleY: 1.4795,
                  x: 1163.5,
                  y: 408.35,
                  regY: 7.7,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_14,
                p: {
                  scaleX: 2.0508,
                  scaleY: 2.0508,
                  x: 923.95,
                  y: 484.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.6568,
                  scaleY: 1.6568,
                  x: 1102.35,
                  y: 396.3,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 960.95,
                  y: 507.65,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1138.15,
                  y: 433.25,
                  regY: 7.7,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 954.2,
                  y: 507.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.5994,
                  scaleY: 1.5994,
                  x: 1111.2,
                  y: 433.25,
                  regY: 7.7,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_14,
                p: {
                  scaleX: 2.1822,
                  scaleY: 2.1822,
                  x: 864.45,
                  y: 513.85,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.7881,
                  scaleY: 1.7881,
                  x: 1042.85,
                  y: 425.65,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_13,
                p: {
                  regY: 7.6,
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                },
              },
              {
                t: this.instance_12,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1079.1,
                  y: 457.95,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.7193,
                  scaleY: 1.7193,
                  x: 1058.85,
                  y: 457.95,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_11,
                p: {
                  scaleX: 1.9195,
                  scaleY: 1.9195,
                  x: 983.4,
                  y: 455.05,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1020.05,
                  y: 482.85,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.8392,
                  scaleY: 1.8392,
                  x: 1006.55,
                  y: 482.85,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_11,
                p: {
                  scaleX: 2.0508,
                  scaleY: 2.0508,
                  x: 923.95,
                  y: 484.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 960.95,
                  y: 507.65,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 1.9591,
                  scaleY: 1.9591,
                  x: 954.2,
                  y: 507.65,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to(
          {
            state: [
              {
                t: this.instance_11,
                p: {
                  scaleX: 2.1822,
                  scaleY: 2.1822,
                  x: 864.45,
                  y: 513.85,
                  regY: 7.5,
                },
              },
              {
                t: this.instance_10,
                p: {
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                  regY: 7.6,
                },
              },
              {
                t: this.instance_9,
                p: {
                  scaleX: 2.0789,
                  scaleY: 2.0789,
                  x: 901.9,
                  y: 532.55,
                  regY: 7.6,
                },
              },
            ],
          },
          1
        )
        .to({ state: [] }, 1)
        .wait(182)
    );

    // BALLES_ZURG
    this.instance_21 = new lib.Symbole6();
    this.instance_21.setTransform(1413, 273.4, 1, 1, 0, 0, 0, 60.5, 56.5);
    this.instance_21.alpha = 0;
    this.instance_21._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_21)
        .wait(1)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ alpha: 0.0833 }, 0)
        .wait(1)
        .to({ alpha: 0.1667 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0.3333 }, 0)
        .wait(1)
        .to({ alpha: 0.4167 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.5833 }, 0)
        .wait(1)
        .to({ alpha: 0.6667 }, 0)
        .wait(1)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.8333 }, 0)
        .wait(1)
        .to({ alpha: 0.9167 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(17)
        .to({ _off: true }, 1)
        .wait(182)
    );

    // MECHANT_MECHANT
    this.instance_22 = new lib.CachedBmp_22();
    this.instance_22.setTransform(1345.85, 202.35, 0.5, 0.5);

    this.instance_23 = new lib.CachedBmp_21();
    this.instance_23.setTransform(1419.3, 236.5, 0.5, 0.5);

    this.instance_24 = new lib.Path_12();
    this.instance_24.setTransform(1666.3, 245.2, 1, 1, 0, 0, 0, 19.3, 13.2);
    this.instance_24.shadow = new cjs.Shadow("rgba(252,0,0,0.929)", 0, 0, 6);

    this.instance_25 = new lib.Path_13();
    this.instance_25.setTransform(1696.5, 250.3, 1, 1, 0, 0, 0, 20.5, 10.3);
    this.instance_25.shadow = new cjs.Shadow("rgba(252,0,0,0.929)", 0, 0, 6);

    this.instance_26 = new lib.CachedBmp_20();
    this.instance_26.setTransform(1411.3, 155.85, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_26 },
            { t: this.instance_25 },
            { t: this.instance_24 },
            { t: this.instance_23 },
            { t: this.instance_22 },
          ],
        })
        .to({ state: [] }, 31)
        .wait(182)
    );

    // BUZZ_BRAS
    this.instance_27 = new lib.Symbole1();
    this.instance_27.setTransform(
      798.8,
      684.5,
      1,
      1,
      10.4476,
      0,
      0,
      47.1,
      186.8
    );

    this.timeline.addTween(
      cjs.Tween.get(this.instance_27)
        .wait(1)
        .to({ regX: 211.5, regY: 157, rotation: 8.4008, x: 965.75, y: 679 }, 0)
        .wait(1)
        .to({ rotation: 6.3535, x: 965.5, y: 673.05 }, 0)
        .wait(1)
        .to({ rotation: 4.3062, x: 964.9, y: 667.1 }, 0)
        .wait(1)
        .to({ rotation: 2.2589, x: 964.2, y: 661.2 }, 0)
        .wait(1)
        .to({ rotation: 0.2116, x: 963.25, y: 655.3 }, 0)
        .wait(1)
        .to({ rotation: 0.2116 }, 0)
        .wait(24)
        .to({ _off: true }, 1)
        .wait(182)
    );

    // BUZZ_CORPS
    this.instance_28 = new lib.CachedBmp_24();
    this.instance_28.setTransform(62.3, 137.95, 0.5, 0.5);

    this.instance_29 = new lib.Ellipse();
    this.instance_29.setTransform(491.35, 447.05, 1, 1, 0, 0, 0, 312, 312);
    this.instance_29.alpha = 0.2383;

    this.instance_30 = new lib.CachedBmp_23();
    this.instance_30.setTransform(-0.2, 423.8, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_30 },
            { t: this.instance_29 },
            { t: this.instance_28 },
          ],
        })
        .to({ state: [] }, 31)
        .wait(182)
    );

    // FLASH_BUZZ
    this.instance_31 = new lib.Symbole3();
    this.instance_31.setTransform(1026.85, 536.9, 1, 1, 0, 0, 0, 12.1, 18);
    this.instance_31._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_31)
        .wait(6)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 17.5,
            regY: 9.7,
            scaleX: 8.1,
            scaleY: 8.1,
            x: 1071.45,
            y: 471.9,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 15.2, scaleY: 15.2, x: 1110.7, y: 415.3 }, 0)
        .wait(1)
        .to({ scaleX: 22.3, scaleY: 22.3, x: 1149.95, y: 358.6 }, 0)
        .wait(1)
        .to({ scaleX: 29.4, scaleY: 29.4, x: 1189.2, y: 302 }, 0)
        .wait(1)
        .to({ scaleX: 36.5, scaleY: 36.5, x: 1228.45, y: 245.35 }, 0)
        .wait(1)
        .to({ scaleX: 43.6, scaleY: 43.6, x: 1267.7, y: 188.7 }, 0)
        .wait(1)
        .to({ scaleX: 50.7, scaleY: 50.7, x: 1306.95, y: 132.1 }, 0)
        .wait(1)
        .to({ scaleX: 57.8, scaleY: 57.8, x: 1346.2, y: 75.4 }, 0)
        .wait(1)
        .to({ scaleX: 64.9, scaleY: 64.9, x: 1385.45, y: 18.8 }, 0)
        .wait(1)
        .to({ scaleX: 72, scaleY: 72, x: 1424.7, y: -37.9 }, 0)
        .wait(14)
        .to({ _off: true }, 1)
        .wait(182)
    );

    // FOND
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#1E1E1E").s().p("EiWABUYMAAAiovMEsBAAAMAAACovg");
    this.shape_3.setTransform(959.9, 540);

    this.timeline.addTween(
      cjs.Tween.get(this.shape_3).to({ _off: true }, 31).wait(182)
    );

    // stageBackground
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("rgba(0,0,0,0)")
      .ss(1, 1, 1, 3, true)
      .p("EiXjhV7MEvHAAAMAAACr3MkvHAAAg");
    this.shape_4.setTransform(960, 540);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("EiXjBV8MAAAir3MEvHAAAMAAACr3g");
    this.shape_5.setTransform(960, 540);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] })
        .wait(213)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-166.1, -609.5, 2853.7, 2817);
  // library properties:
  lib.properties = {
    id: "86B4262ECAE15B43B4A6E8AEE5ED8AF4",
    width: 1920,
    height: 1080,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/CachedBmp_19.png?1666988684445", id: "CachedBmp_19" },
      { src: "images/CachedBmp_18.png?1666988684445", id: "CachedBmp_18" },
      { src: "images/CachedBmp_17.png?1666988684445", id: "CachedBmp_17" },
      {
        src: "images/Scene_1_atlas_1.png?1666988684356",
        id: "Scene_1_atlas_1",
      },
      {
        src: "images/Scene_1_atlas_2.png?1666988684356",
        id: "Scene_1_atlas_2",
      },
      {
        src: "images/Scene_1_atlas_3.png?1666988684356",
        id: "Scene_1_atlas_3",
      },
      {
        src: "images/Scene_1_atlas_4.png?1666988684357",
        id: "Scene_1_atlas_4",
      },
      {
        src: "images/Scene_1_atlas_5.png?1666988684357",
        id: "Scene_1_atlas_5",
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
  an.compositions["86B4262ECAE15B43B4A6E8AEE5ED8AF4"] = {
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
