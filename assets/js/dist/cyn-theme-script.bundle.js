(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/photoswipe/dist/photoswipe.esm.js
  var photoswipe_esm_exports = {};
  __export(photoswipe_esm_exports, {
    default: () => PhotoSwipe
  });
  function createElement2(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    if (appendToEl) {
      appendToEl.appendChild(el);
    }
    return el;
  }
  function equalizePoints(p1, p2) {
    p1.x = p2.x;
    p1.y = p2.y;
    if (p2.id !== void 0) {
      p1.id = p2.id;
    }
    return p1;
  }
  function roundPoint(p2) {
    p2.x = Math.round(p2.x);
    p2.y = Math.round(p2.y);
  }
  function getDistanceBetween(p1, p2) {
    const x2 = Math.abs(p1.x - p2.x);
    const y2 = Math.abs(p1.y - p2.y);
    return Math.sqrt(x2 * x2 + y2 * y2);
  }
  function pointsEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }
  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  function toTransformString2(x2, y2, scale) {
    let propValue = "translate3d(".concat(x2, "px,").concat(y2 || 0, "px,0)");
    if (scale !== void 0) {
      propValue += " scale3d(".concat(scale, ",").concat(scale, ",1)");
    }
    return propValue;
  }
  function setTransform(el, x2, y2, scale) {
    el.style.transform = toTransformString2(x2, y2, scale);
  }
  function setTransitionStyle(el, prop, duration, ease) {
    el.style.transition = prop ? "".concat(prop, " ").concat(duration, "ms ").concat(ease || defaultCSSEasing) : "none";
  }
  function setWidthHeight2(el, w2, h2) {
    el.style.width = typeof w2 === "number" ? "".concat(w2, "px") : w2;
    el.style.height = typeof h2 === "number" ? "".concat(h2, "px") : h2;
  }
  function removeTransitionStyle(el) {
    setTransitionStyle(el);
  }
  function decodeImage(img) {
    if ("decode" in img) {
      return img.decode().catch(() => {
      });
    }
    if (img.complete) {
      return Promise.resolve(img);
    }
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }
  function specialKeyUsed2(e2) {
    return "button" in e2 && e2.button === 1 || e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey;
  }
  function getElementsFromOption2(option, legacySelector, parent = document) {
    let elements = [];
    if (option instanceof Element) {
      elements = [option];
    } else if (option instanceof NodeList || Array.isArray(option)) {
      elements = Array.from(option);
    } else {
      const selector = typeof option === "string" ? option : legacySelector;
      if (selector) {
        elements = Array.from(parent.querySelectorAll(selector));
      }
    }
    return elements;
  }
  function isSafari2() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  function getViewportSize2(options, pswp) {
    if (options.getViewportSizeFn) {
      const newViewportSize = options.getViewportSizeFn(options, pswp);
      if (newViewportSize) {
        return newViewportSize;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      // TODO: height on mobile is very incosistent due to toolbar
      // find a way to improve this
      //
      // document.documentElement.clientHeight - doesn't seem to work well
      y: window.innerHeight
    };
  }
  function parsePaddingOption2(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) {
      paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    } else if (options.padding) {
      paddingValue = options.padding[prop];
    } else {
      const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
      if (options[legacyPropName]) {
        paddingValue = options[legacyPropName];
      }
    }
    return Number(paddingValue) || 0;
  }
  function getPanAreaSize2(options, viewportSize, itemData, index) {
    return {
      x: viewportSize.x - parsePaddingOption2("left", options, viewportSize, itemData, index) - parsePaddingOption2("right", options, viewportSize, itemData, index),
      y: viewportSize.y - parsePaddingOption2("top", options, viewportSize, itemData, index) - parsePaddingOption2("bottom", options, viewportSize, itemData, index)
    };
  }
  function project(initialVelocity, decelerationRate) {
    return initialVelocity * decelerationRate / (1 - decelerationRate);
  }
  function getZoomPointsCenter(p2, p1, p22) {
    p2.x = (p1.x + p22.x) / 2;
    p2.y = (p1.y + p22.y) / 2;
    return p2;
  }
  function didTapOnMainContent(event2) {
    return !!/** @type {HTMLElement} */
    event2.target.closest(".pswp__container");
  }
  function addElementHTML(htmlData) {
    if (typeof htmlData === "string") {
      return htmlData;
    }
    if (!htmlData || !htmlData.isCustomSVG) {
      return "";
    }
    const svgData = htmlData;
    let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
    out = out.split("%d").join(
      /** @type {string} */
      svgData.size || 32
    );
    if (svgData.outlineID) {
      out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
    }
    out += svgData.inner;
    out += "</svg>";
    return out;
  }
  function initArrowButton(element, pswp, isNextButton) {
    element.classList.add("pswp__button--arrow");
    element.setAttribute("aria-controls", "pswp__items");
    pswp.on("change", () => {
      if (!pswp.options.loop) {
        if (isNextButton) {
          element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
        } else {
          element.disabled = !(pswp.currIndex > 0);
        }
      }
    });
  }
  function setZoomedIn(el, isZoomedIn) {
    el.classList.toggle("pswp--zoomed-in", isZoomedIn);
  }
  function getBoundsByElement(el) {
    const thumbAreaRect = el.getBoundingClientRect();
    return {
      x: thumbAreaRect.left,
      y: thumbAreaRect.top,
      w: thumbAreaRect.width
    };
  }
  function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
    const thumbAreaRect = el.getBoundingClientRect();
    const hRatio = thumbAreaRect.width / imageWidth;
    const vRatio = thumbAreaRect.height / imageHeight;
    const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
    const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
    const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
    const bounds = {
      x: thumbAreaRect.left + offsetX,
      y: thumbAreaRect.top + offsetY,
      w: imageWidth * fillZoomLevel
    };
    bounds.innerRect = {
      w: thumbAreaRect.width,
      h: thumbAreaRect.height,
      x: offsetX,
      y: offsetY
    };
    return bounds;
  }
  function getThumbBounds(index, itemData, instance) {
    const event2 = instance.dispatch("thumbBounds", {
      index,
      itemData,
      instance
    });
    if (event2.thumbBounds) {
      return event2.thumbBounds;
    }
    const {
      element
    } = itemData;
    let thumbBounds;
    let thumbnail;
    if (element && instance.options.thumbSelector !== false) {
      const thumbSelector = instance.options.thumbSelector || "img";
      thumbnail = element.matches(thumbSelector) ? element : (
        /** @type {HTMLElement | null} */
        element.querySelector(thumbSelector)
      );
    }
    thumbnail = instance.applyFilters("thumbEl", thumbnail, itemData, index);
    if (thumbnail) {
      if (!itemData.thumbCropped) {
        thumbBounds = getBoundsByElement(thumbnail);
      } else {
        thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w || 0, itemData.height || itemData.h || 0);
      }
    }
    return instance.applyFilters("thumbBounds", thumbBounds, itemData, index);
  }
  function lazyLoadData2(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    let zoomLevel;
    const {
      options
    } = instance;
    if (options) {
      zoomLevel = new ZoomLevel2(options, itemData, -1);
      let viewportSize;
      if (instance.pswp) {
        viewportSize = instance.pswp.viewportSize;
      } else {
        viewportSize = getViewportSize2(options, instance);
      }
      const panAreaSize = getPanAreaSize2(options, viewportSize, itemData, index);
      zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
      content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
  }
  function lazyLoadSlide2(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch("lazyLoadSlide", {
      index,
      itemData
    }).defaultPrevented) {
      return;
    }
    return lazyLoadData2(itemData, instance, index);
  }
  var defaultCSSEasing, LOAD_STATE2, supportsPassive, DOMEvents, PanBounds, MAX_IMAGE_WIDTH2, ZoomLevel2, Slide, PAN_END_FRICTION, VERTICAL_DRAG_FRICTION, MIN_RATIO_TO_CLOSE, MIN_NEXT_SLIDE_SPEED, DragHandler, UPPER_ZOOM_FRICTION, LOWER_ZOOM_FRICTION, ZoomHandler, TapHandler, AXIS_SWIPE_HYSTERISIS, DOUBLE_TAP_DELAY, MIN_TAP_DISTANCE, Gestures, MAIN_SCROLL_END_FRICTION, MainScroll, KeyboardKeyCodesMap, getKeyboardEventKey, Keyboard, DEFAULT_EASING, CSSAnimation, DEFAULT_NATURAL_FREQUENCY, DEFAULT_DAMPING_RATIO, SpringEaser, SpringAnimation, Animations, ScrollWheel, UIElement, arrowPrev, arrowNext, closeButton, zoomButton, loadingIndicator, counterIndicator, UI, PhotoSwipeEvent2, Eventable2, Placeholder2, Content2, MIN_SLIDES_TO_CACHE, ContentLoader, PhotoSwipeBase2, MIN_OPACITY, Opener, defaultOptions, PhotoSwipe;
  var init_photoswipe_esm = __esm({
    "node_modules/photoswipe/dist/photoswipe.esm.js"() {
      defaultCSSEasing = "cubic-bezier(.4,0,.22,1)";
      LOAD_STATE2 = {
        IDLE: "idle",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
      };
      supportsPassive = false;
      try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: () => {
            supportsPassive = true;
          }
        }));
      } catch (e2) {
      }
      DOMEvents = class {
        constructor() {
          this._pool = [];
        }
        /**
         * Adds event listeners
         *
         * @param {PoolItem['target']} target
         * @param {PoolItem['type']} type Can be multiple, separated by space.
         * @param {PoolItem['listener']} listener
         * @param {PoolItem['passive']} [passive]
         */
        add(target, type, listener, passive) {
          this._toggleListener(target, type, listener, passive);
        }
        /**
         * Removes event listeners
         *
         * @param {PoolItem['target']} target
         * @param {PoolItem['type']} type
         * @param {PoolItem['listener']} listener
         * @param {PoolItem['passive']} [passive]
         */
        remove(target, type, listener, passive) {
          this._toggleListener(target, type, listener, passive, true);
        }
        /**
         * Removes all bound events
         */
        removeAll() {
          this._pool.forEach((poolItem) => {
            this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
          });
          this._pool = [];
        }
        /**
         * Adds or removes event
         *
         * @private
         * @param {PoolItem['target']} target
         * @param {PoolItem['type']} type
         * @param {PoolItem['listener']} listener
         * @param {PoolItem['passive']} [passive]
         * @param {boolean} [unbind] Whether the event should be added or removed
         * @param {boolean} [skipPool] Whether events pool should be skipped
         */
        _toggleListener(target, type, listener, passive, unbind, skipPool) {
          if (!target) {
            return;
          }
          const methodName = unbind ? "removeEventListener" : "addEventListener";
          const types = type.split(" ");
          types.forEach((eType) => {
            if (eType) {
              if (!skipPool) {
                if (unbind) {
                  this._pool = this._pool.filter((poolItem) => {
                    return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
                  });
                } else {
                  this._pool.push({
                    target,
                    type: eType,
                    listener,
                    passive
                  });
                }
              }
              const eventOptions = supportsPassive ? {
                passive: passive || false
              } : false;
              target[methodName](eType, listener, eventOptions);
            }
          });
        }
      };
      PanBounds = class {
        /**
         * @param {Slide} slide
         */
        constructor(slide2) {
          this.slide = slide2;
          this.currZoomLevel = 1;
          this.center = /** @type {Point} */
          {
            x: 0,
            y: 0
          };
          this.max = /** @type {Point} */
          {
            x: 0,
            y: 0
          };
          this.min = /** @type {Point} */
          {
            x: 0,
            y: 0
          };
        }
        /**
         * _getItemBounds
         *
         * @param {number} currZoomLevel
         */
        update(currZoomLevel) {
          this.currZoomLevel = currZoomLevel;
          if (!this.slide.width) {
            this.reset();
          } else {
            this._updateAxis("x");
            this._updateAxis("y");
            this.slide.pswp.dispatch("calcBounds", {
              slide: this.slide
            });
          }
        }
        /**
         * _calculateItemBoundsForAxis
         *
         * @param {Axis} axis
         */
        _updateAxis(axis) {
          const {
            pswp
          } = this.slide;
          const elSize = this.slide[axis === "x" ? "width" : "height"] * this.currZoomLevel;
          const paddingProp = axis === "x" ? "left" : "top";
          const padding = parsePaddingOption2(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
          const panAreaSize = this.slide.panAreaSize[axis];
          this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
          this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];
          this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
        }
        // _getZeroBounds
        reset() {
          this.center.x = 0;
          this.center.y = 0;
          this.max.x = 0;
          this.max.y = 0;
          this.min.x = 0;
          this.min.y = 0;
        }
        /**
         * Correct pan position if it's beyond the bounds
         *
         * @param {Axis} axis x or y
         * @param {number} panOffset
         * @returns {number}
         */
        correctPan(axis, panOffset) {
          return clamp(panOffset, this.max[axis], this.min[axis]);
        }
      };
      MAX_IMAGE_WIDTH2 = 4e3;
      ZoomLevel2 = class {
        /**
         * @param {PhotoSwipeOptions} options PhotoSwipe options
         * @param {SlideData} itemData Slide data
         * @param {number} index Slide index
         * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
         */
        constructor(options, itemData, index, pswp) {
          this.pswp = pswp;
          this.options = options;
          this.itemData = itemData;
          this.index = index;
          this.panAreaSize = null;
          this.elementSize = null;
          this.fit = 1;
          this.fill = 1;
          this.vFill = 1;
          this.initial = 1;
          this.secondary = 1;
          this.max = 1;
          this.min = 1;
        }
        /**
         * Calculate initial, secondary and maximum zoom level for the specified slide.
         *
         * It should be called when either image or viewport size changes.
         *
         * @param {number} maxWidth
         * @param {number} maxHeight
         * @param {Point} panAreaSize
         */
        update(maxWidth, maxHeight, panAreaSize) {
          const elementSize = {
            x: maxWidth,
            y: maxHeight
          };
          this.elementSize = elementSize;
          this.panAreaSize = panAreaSize;
          const hRatio = panAreaSize.x / elementSize.x;
          const vRatio = panAreaSize.y / elementSize.y;
          this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
          this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
          this.vFill = Math.min(1, vRatio);
          this.initial = this._getInitial();
          this.secondary = this._getSecondary();
          this.max = Math.max(this.initial, this.secondary, this._getMax());
          this.min = Math.min(this.fit, this.initial, this.secondary);
          if (this.pswp) {
            this.pswp.dispatch("zoomLevelsUpdate", {
              zoomLevels: this,
              slideData: this.itemData
            });
          }
        }
        /**
         * Parses user-defined zoom option.
         *
         * @private
         * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
         * @returns { number | undefined }
         */
        _parseZoomLevelOption(optionPrefix) {
          const optionName = (
            /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
            optionPrefix + "ZoomLevel"
          );
          const optionValue = this.options[optionName];
          if (!optionValue) {
            return;
          }
          if (typeof optionValue === "function") {
            return optionValue(this);
          }
          if (optionValue === "fill") {
            return this.fill;
          }
          if (optionValue === "fit") {
            return this.fit;
          }
          return Number(optionValue);
        }
        /**
         * Get zoom level to which image will be zoomed after double-tap gesture,
         * or when user clicks on zoom icon,
         * or mouse-click on image itself.
         * If you return 1 image will be zoomed to its original size.
         *
         * @private
         * @return {number}
         */
        _getSecondary() {
          let currZoomLevel = this._parseZoomLevelOption("secondary");
          if (currZoomLevel) {
            return currZoomLevel;
          }
          currZoomLevel = Math.min(1, this.fit * 3);
          if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH2) {
            currZoomLevel = MAX_IMAGE_WIDTH2 / this.elementSize.x;
          }
          return currZoomLevel;
        }
        /**
         * Get initial image zoom level.
         *
         * @private
         * @return {number}
         */
        _getInitial() {
          return this._parseZoomLevelOption("initial") || this.fit;
        }
        /**
         * Maximum zoom level when user zooms
         * via zoom/pinch gesture,
         * via cmd/ctrl-wheel or via trackpad.
         *
         * @private
         * @return {number}
         */
        _getMax() {
          return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
        }
      };
      Slide = class {
        /**
         * @param {SlideData} data
         * @param {number} index
         * @param {PhotoSwipe} pswp
         */
        constructor(data, index, pswp) {
          this.data = data;
          this.index = index;
          this.pswp = pswp;
          this.isActive = index === pswp.currIndex;
          this.currentResolution = 0;
          this.panAreaSize = {
            x: 0,
            y: 0
          };
          this.pan = {
            x: 0,
            y: 0
          };
          this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
          this.zoomLevels = new ZoomLevel2(pswp.options, data, index, pswp);
          this.pswp.dispatch("gettingData", {
            slide: this,
            data: this.data,
            index
          });
          this.content = this.pswp.contentLoader.getContentBySlide(this);
          this.container = createElement2("pswp__zoom-wrap", "div");
          this.holderElement = null;
          this.currZoomLevel = 1;
          this.width = this.content.width;
          this.height = this.content.height;
          this.heavyAppended = false;
          this.bounds = new PanBounds(this);
          this.prevDisplayedWidth = -1;
          this.prevDisplayedHeight = -1;
          this.pswp.dispatch("slideInit", {
            slide: this
          });
        }
        /**
         * If this slide is active/current/visible
         *
         * @param {boolean} isActive
         */
        setIsActive(isActive) {
          if (isActive && !this.isActive) {
            this.activate();
          } else if (!isActive && this.isActive) {
            this.deactivate();
          }
        }
        /**
         * Appends slide content to DOM
         *
         * @param {HTMLElement} holderElement
         */
        append(holderElement) {
          this.holderElement = holderElement;
          this.container.style.transformOrigin = "0 0";
          if (!this.data) {
            return;
          }
          this.calculateSize();
          this.load();
          this.updateContentSize();
          this.appendHeavy();
          this.holderElement.appendChild(this.container);
          this.zoomAndPanToInitial();
          this.pswp.dispatch("firstZoomPan", {
            slide: this
          });
          this.applyCurrentZoomPan();
          this.pswp.dispatch("afterSetContent", {
            slide: this
          });
          if (this.isActive) {
            this.activate();
          }
        }
        load() {
          this.content.load(false);
          this.pswp.dispatch("slideLoad", {
            slide: this
          });
        }
        /**
         * Append "heavy" DOM elements
         *
         * This may depend on a type of slide,
         * but generally these are large images.
         */
        appendHeavy() {
          const {
            pswp
          } = this;
          const appendHeavyNearby = true;
          if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
            return;
          }
          if (this.pswp.dispatch("appendHeavy", {
            slide: this
          }).defaultPrevented) {
            return;
          }
          this.heavyAppended = true;
          this.content.append();
          this.pswp.dispatch("appendHeavyContent", {
            slide: this
          });
        }
        /**
         * Triggered when this slide is active (selected).
         *
         * If it's part of opening/closing transition -
         * activate() will trigger after the transition is ended.
         */
        activate() {
          this.isActive = true;
          this.appendHeavy();
          this.content.activate();
          this.pswp.dispatch("slideActivate", {
            slide: this
          });
        }
        /**
         * Triggered when this slide becomes inactive.
         *
         * Slide can become inactive only after it was active.
         */
        deactivate() {
          this.isActive = false;
          this.content.deactivate();
          if (this.currZoomLevel !== this.zoomLevels.initial) {
            this.calculateSize();
          }
          this.currentResolution = 0;
          this.zoomAndPanToInitial();
          this.applyCurrentZoomPan();
          this.updateContentSize();
          this.pswp.dispatch("slideDeactivate", {
            slide: this
          });
        }
        /**
         * The slide should destroy itself, it will never be used again.
         * (unbind all events and destroy internal components)
         */
        destroy() {
          this.content.hasSlide = false;
          this.content.remove();
          this.container.remove();
          this.pswp.dispatch("slideDestroy", {
            slide: this
          });
        }
        resize() {
          if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
            this.calculateSize();
            this.currentResolution = 0;
            this.zoomAndPanToInitial();
            this.applyCurrentZoomPan();
            this.updateContentSize();
          } else {
            this.calculateSize();
            this.bounds.update(this.currZoomLevel);
            this.panTo(this.pan.x, this.pan.y);
          }
        }
        /**
         * Apply size to current slide content,
         * based on the current resolution and scale.
         *
         * @param {boolean} [force] if size should be updated even if dimensions weren't changed
         */
        updateContentSize(force) {
          const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
          if (!scaleMultiplier) {
            return;
          }
          const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
          const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
          if (!this.sizeChanged(width, height) && !force) {
            return;
          }
          this.content.setDisplayedSize(width, height);
        }
        /**
         * @param {number} width
         * @param {number} height
         */
        sizeChanged(width, height) {
          if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
            this.prevDisplayedWidth = width;
            this.prevDisplayedHeight = height;
            return true;
          }
          return false;
        }
        /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
        getPlaceholderElement() {
          var _this$content$placeho;
          return (_this$content$placeho = this.content.placeholder) === null || _this$content$placeho === void 0 ? void 0 : _this$content$placeho.element;
        }
        /**
         * Zoom current slide image to...
         *
         * @param {number} destZoomLevel Destination zoom level.
         * @param {Point} [centerPoint]
         * Transform origin center point, or false if viewport center should be used.
         * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
         * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
         */
        zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
          const {
            pswp
          } = this;
          if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
            return;
          }
          pswp.dispatch("beforeZoomTo", {
            destZoomLevel,
            centerPoint,
            transitionDuration
          });
          pswp.animations.stopAllPan();
          const prevZoomLevel = this.currZoomLevel;
          if (!ignoreBounds) {
            destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
          }
          this.setZoomLevel(destZoomLevel);
          this.pan.x = this.calculateZoomToPanOffset("x", centerPoint, prevZoomLevel);
          this.pan.y = this.calculateZoomToPanOffset("y", centerPoint, prevZoomLevel);
          roundPoint(this.pan);
          const finishTransition = () => {
            this._setResolution(destZoomLevel);
            this.applyCurrentZoomPan();
          };
          if (!transitionDuration) {
            finishTransition();
          } else {
            pswp.animations.startTransition({
              isPan: true,
              name: "zoomTo",
              target: this.container,
              transform: this.getCurrentTransform(),
              onComplete: finishTransition,
              duration: transitionDuration,
              easing: pswp.options.easing
            });
          }
        }
        /**
         * @param {Point} [centerPoint]
         */
        toggleZoom(centerPoint) {
          this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
        }
        /**
         * Updates zoom level property and recalculates new pan bounds,
         * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
         *
         * @param {number} currZoomLevel
         */
        setZoomLevel(currZoomLevel) {
          this.currZoomLevel = currZoomLevel;
          this.bounds.update(this.currZoomLevel);
        }
        /**
         * Get pan position after zoom at a given `point`.
         *
         * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
         * pan bounds according to the new zoom level.
         *
         * @param {'x' | 'y'} axis
         * @param {Point} [point]
         * point based on which zoom is performed, usually refers to the current mouse position,
         * if false - viewport center will be used.
         * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
         * @returns {number}
         */
        calculateZoomToPanOffset(axis, point, prevZoomLevel) {
          const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
          if (totalPanDistance === 0) {
            return this.bounds.center[axis];
          }
          if (!point) {
            point = this.pswp.getViewportCenterPoint();
          }
          if (!prevZoomLevel) {
            prevZoomLevel = this.zoomLevels.initial;
          }
          const zoomFactor = this.currZoomLevel / prevZoomLevel;
          return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
        }
        /**
         * Apply pan and keep it within bounds.
         *
         * @param {number} panX
         * @param {number} panY
         */
        panTo(panX, panY) {
          this.pan.x = this.bounds.correctPan("x", panX);
          this.pan.y = this.bounds.correctPan("y", panY);
          this.applyCurrentZoomPan();
        }
        /**
         * If the slide in the current state can be panned by the user
         * @returns {boolean}
         */
        isPannable() {
          return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
        }
        /**
         * If the slide can be zoomed
         * @returns {boolean}
         */
        isZoomable() {
          return Boolean(this.width) && this.content.isZoomable();
        }
        /**
         * Apply transform and scale based on
         * the current pan position (this.pan) and zoom level (this.currZoomLevel)
         */
        applyCurrentZoomPan() {
          this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
          if (this === this.pswp.currSlide) {
            this.pswp.dispatch("zoomPanUpdate", {
              slide: this
            });
          }
        }
        zoomAndPanToInitial() {
          this.currZoomLevel = this.zoomLevels.initial;
          this.bounds.update(this.currZoomLevel);
          equalizePoints(this.pan, this.bounds.center);
          this.pswp.dispatch("initialZoomPan", {
            slide: this
          });
        }
        /**
         * Set translate and scale based on current resolution
         *
         * @param {number} x
         * @param {number} y
         * @param {number} zoom
         * @private
         */
        _applyZoomTransform(x2, y2, zoom) {
          zoom /= this.currentResolution || this.zoomLevels.initial;
          setTransform(this.container, x2, y2, zoom);
        }
        calculateSize() {
          const {
            pswp
          } = this;
          equalizePoints(this.panAreaSize, getPanAreaSize2(pswp.options, pswp.viewportSize, this.data, this.index));
          this.zoomLevels.update(this.width, this.height, this.panAreaSize);
          pswp.dispatch("calcSlideSize", {
            slide: this
          });
        }
        /** @returns {string} */
        getCurrentTransform() {
          const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
          return toTransformString2(this.pan.x, this.pan.y, scale);
        }
        /**
         * Set resolution and re-render the image.
         *
         * For example, if the real image size is 2000x1500,
         * and resolution is 0.5 - it will be rendered as 1000x750.
         *
         * Image with zoom level 2 and resolution 0.5 is
         * the same as image with zoom level 1 and resolution 1.
         *
         * Used to optimize animations and make
         * sure that browser renders image in the highest quality.
         * Also used by responsive images to load the correct one.
         *
         * @param {number} newResolution
         */
        _setResolution(newResolution) {
          if (newResolution === this.currentResolution) {
            return;
          }
          this.currentResolution = newResolution;
          this.updateContentSize();
          this.pswp.dispatch("resolutionChanged");
        }
      };
      PAN_END_FRICTION = 0.35;
      VERTICAL_DRAG_FRICTION = 0.6;
      MIN_RATIO_TO_CLOSE = 0.4;
      MIN_NEXT_SLIDE_SPEED = 0.5;
      DragHandler = class {
        /**
         * @param {Gestures} gestures
         */
        constructor(gestures) {
          this.gestures = gestures;
          this.pswp = gestures.pswp;
          this.startPan = {
            x: 0,
            y: 0
          };
        }
        start() {
          if (this.pswp.currSlide) {
            equalizePoints(this.startPan, this.pswp.currSlide.pan);
          }
          this.pswp.animations.stopAll();
        }
        change() {
          const {
            p1,
            prevP1,
            dragAxis
          } = this.gestures;
          const {
            currSlide
          } = this.pswp;
          if (dragAxis === "y" && this.pswp.options.closeOnVerticalDrag && currSlide && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
            const panY = currSlide.pan.y + (p1.y - prevP1.y);
            if (!this.pswp.dispatch("verticalDrag", {
              panY
            }).defaultPrevented) {
              this._setPanWithFriction("y", panY, VERTICAL_DRAG_FRICTION);
              const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
              this.pswp.applyBgOpacity(bgOpacity);
              currSlide.applyCurrentZoomPan();
            }
          } else {
            const mainScrollChanged = this._panOrMoveMainScroll("x");
            if (!mainScrollChanged) {
              this._panOrMoveMainScroll("y");
              if (currSlide) {
                roundPoint(currSlide.pan);
                currSlide.applyCurrentZoomPan();
              }
            }
          }
        }
        end() {
          const {
            velocity
          } = this.gestures;
          const {
            mainScroll,
            currSlide
          } = this.pswp;
          let indexDiff = 0;
          this.pswp.animations.stopAll();
          if (mainScroll.isShifted()) {
            const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
            const currentSlideVisibilityRatio = mainScrollShiftDiff / this.pswp.viewportSize.x;
            if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
              indexDiff = 1;
              velocity.x = Math.min(velocity.x, 0);
            } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
              indexDiff = -1;
              velocity.x = Math.max(velocity.x, 0);
            }
            mainScroll.moveIndexBy(indexDiff, true, velocity.x);
          }
          if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.max || this.gestures.isMultitouch) {
            this.gestures.zoomLevels.correctZoomPan(true);
          } else {
            this._finishPanGestureForAxis("x");
            this._finishPanGestureForAxis("y");
          }
        }
        /**
         * @private
         * @param {'x' | 'y'} axis
         */
        _finishPanGestureForAxis(axis) {
          const {
            velocity
          } = this.gestures;
          const {
            currSlide
          } = this.pswp;
          if (!currSlide) {
            return;
          }
          const {
            pan,
            bounds
          } = currSlide;
          const panPos = pan[axis];
          const restoreBgOpacity = this.pswp.bgOpacity < 1 && axis === "y";
          const decelerationRate = 0.995;
          const projectedPosition = panPos + project(velocity[axis], decelerationRate);
          if (restoreBgOpacity) {
            const vDragRatio = this._getVerticalDragRatio(panPos);
            const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
            if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
              this.pswp.close();
              return;
            }
          }
          const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
          if (panPos === correctedPanPosition) {
            return;
          }
          const dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
          const initialBgOpacity = this.pswp.bgOpacity;
          const totalPanDist = correctedPanPosition - panPos;
          this.pswp.animations.startSpring({
            name: "panGesture" + axis,
            isPan: true,
            start: panPos,
            end: correctedPanPosition,
            velocity: velocity[axis],
            dampingRatio,
            onUpdate: (pos) => {
              if (restoreBgOpacity && this.pswp.bgOpacity < 1) {
                const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
                this.pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
              }
              pan[axis] = Math.floor(pos);
              currSlide.applyCurrentZoomPan();
            }
          });
        }
        /**
         * Update position of the main scroll,
         * or/and update pan position of the current slide.
         *
         * Should return true if it changes (or can change) main scroll.
         *
         * @private
         * @param {'x' | 'y'} axis
         * @returns {boolean}
         */
        _panOrMoveMainScroll(axis) {
          const {
            p1,
            dragAxis,
            prevP1,
            isMultitouch
          } = this.gestures;
          const {
            currSlide,
            mainScroll
          } = this.pswp;
          const delta = p1[axis] - prevP1[axis];
          const newMainScrollX = mainScroll.x + delta;
          if (!delta || !currSlide) {
            return false;
          }
          if (axis === "x" && !currSlide.isPannable() && !isMultitouch) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          }
          const {
            bounds
          } = currSlide;
          const newPan = currSlide.pan[axis] + delta;
          if (this.pswp.options.allowPanToNext && dragAxis === "x" && axis === "x" && !isMultitouch) {
            const currSlideMainScrollX = mainScroll.getCurrSlideX();
            const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
            const isLeftToRight = delta > 0;
            const isRightToLeft = !isLeftToRight;
            if (newPan > bounds.min[axis] && isLeftToRight) {
              const wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
              if (wasAtMinPanPosition) {
                mainScroll.moveTo(newMainScrollX, true);
                return true;
              } else {
                this._setPanWithFriction(axis, newPan);
              }
            } else if (newPan < bounds.max[axis] && isRightToLeft) {
              const wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
              if (wasAtMaxPanPosition) {
                mainScroll.moveTo(newMainScrollX, true);
                return true;
              } else {
                this._setPanWithFriction(axis, newPan);
              }
            } else {
              if (mainScrollShiftDiff !== 0) {
                if (mainScrollShiftDiff > 0) {
                  mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
                  return true;
                } else if (mainScrollShiftDiff < 0) {
                  mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
                  return true;
                }
              } else {
                this._setPanWithFriction(axis, newPan);
              }
            }
          } else {
            if (axis === "y") {
              if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
                this._setPanWithFriction(axis, newPan);
              }
            } else {
              this._setPanWithFriction(axis, newPan);
            }
          }
          return false;
        }
        // If we move above - the ratio is negative
        // If we move below the ratio is positive
        /**
         * Relation between pan Y position and third of viewport height.
         *
         * When we are at initial position (center bounds) - the ratio is 0,
         * if position is shifted upwards - the ratio is negative,
         * if position is shifted downwards - the ratio is positive.
         *
         * @private
         * @param {number} panY The current pan Y position.
         * @returns {number}
         */
        _getVerticalDragRatio(panY) {
          var _this$pswp$currSlide$, _this$pswp$currSlide;
          return (panY - ((_this$pswp$currSlide$ = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.bounds.center.y) !== null && _this$pswp$currSlide$ !== void 0 ? _this$pswp$currSlide$ : 0)) / (this.pswp.viewportSize.y / 3);
        }
        /**
         * Set pan position of the current slide.
         * Apply friction if the position is beyond the pan bounds,
         * or if custom friction is defined.
         *
         * @private
         * @param {'x' | 'y'} axis
         * @param {number} potentialPan
         * @param {number} [customFriction] (0.1 - 1)
         */
        _setPanWithFriction(axis, potentialPan, customFriction) {
          const {
            currSlide
          } = this.pswp;
          if (!currSlide) {
            return;
          }
          const {
            pan,
            bounds
          } = currSlide;
          const correctedPan = bounds.correctPan(axis, potentialPan);
          if (correctedPan !== potentialPan || customFriction) {
            const delta = Math.round(potentialPan - pan[axis]);
            pan[axis] += delta * (customFriction || PAN_END_FRICTION);
          } else {
            pan[axis] = potentialPan;
          }
        }
      };
      UPPER_ZOOM_FRICTION = 0.05;
      LOWER_ZOOM_FRICTION = 0.15;
      ZoomHandler = class {
        /**
         * @param {Gestures} gestures
         */
        constructor(gestures) {
          this.gestures = gestures;
          this._startPan = {
            x: 0,
            y: 0
          };
          this._startZoomPoint = {
            x: 0,
            y: 0
          };
          this._zoomPoint = {
            x: 0,
            y: 0
          };
          this._wasOverFitZoomLevel = false;
          this._startZoomLevel = 1;
        }
        start() {
          const {
            currSlide
          } = this.gestures.pswp;
          if (currSlide) {
            this._startZoomLevel = currSlide.currZoomLevel;
            equalizePoints(this._startPan, currSlide.pan);
          }
          this.gestures.pswp.animations.stopAllPan();
          this._wasOverFitZoomLevel = false;
        }
        change() {
          const {
            p1,
            startP1,
            p2,
            startP2,
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          if (!currSlide) {
            return;
          }
          const minZoomLevel = currSlide.zoomLevels.min;
          const maxZoomLevel = currSlide.zoomLevels.max;
          if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
            return;
          }
          getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
          getZoomPointsCenter(this._zoomPoint, p1, p2);
          let currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel;
          if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
            this._wasOverFitZoomLevel = true;
          }
          if (currZoomLevel < minZoomLevel) {
            if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
              const bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
              if (!pswp.dispatch("pinchClose", {
                bgOpacity
              }).defaultPrevented) {
                pswp.applyBgOpacity(bgOpacity);
              }
            } else {
              currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
            }
          } else if (currZoomLevel > maxZoomLevel) {
            currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
          }
          currSlide.pan.x = this._calculatePanForZoomLevel("x", currZoomLevel);
          currSlide.pan.y = this._calculatePanForZoomLevel("y", currZoomLevel);
          currSlide.setZoomLevel(currZoomLevel);
          currSlide.applyCurrentZoomPan();
        }
        end() {
          const {
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          if ((!currSlide || currSlide.currZoomLevel < currSlide.zoomLevels.initial) && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
            pswp.close();
          } else {
            this.correctZoomPan();
          }
        }
        /**
         * @private
         * @param {'x' | 'y'} axis
         * @param {number} currZoomLevel
         * @returns {number}
         */
        _calculatePanForZoomLevel(axis, currZoomLevel) {
          const zoomFactor = currZoomLevel / this._startZoomLevel;
          return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
        }
        /**
         * Correct currZoomLevel and pan if they are
         * beyond minimum or maximum values.
         * With animation.
         *
         * @param {boolean} [ignoreGesture]
         * Wether gesture coordinates should be ignored when calculating destination pan position.
         */
        correctZoomPan(ignoreGesture) {
          const {
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          if (!(currSlide !== null && currSlide !== void 0 && currSlide.isZoomable())) {
            return;
          }
          if (this._zoomPoint.x === 0) {
            ignoreGesture = true;
          }
          const prevZoomLevel = currSlide.currZoomLevel;
          let destinationZoomLevel;
          let currZoomLevelNeedsChange = true;
          if (prevZoomLevel < currSlide.zoomLevels.initial) {
            destinationZoomLevel = currSlide.zoomLevels.initial;
          } else if (prevZoomLevel > currSlide.zoomLevels.max) {
            destinationZoomLevel = currSlide.zoomLevels.max;
          } else {
            currZoomLevelNeedsChange = false;
            destinationZoomLevel = prevZoomLevel;
          }
          const initialBgOpacity = pswp.bgOpacity;
          const restoreBgOpacity = pswp.bgOpacity < 1;
          const initialPan = equalizePoints({
            x: 0,
            y: 0
          }, currSlide.pan);
          let destinationPan = equalizePoints({
            x: 0,
            y: 0
          }, initialPan);
          if (ignoreGesture) {
            this._zoomPoint.x = 0;
            this._zoomPoint.y = 0;
            this._startZoomPoint.x = 0;
            this._startZoomPoint.y = 0;
            this._startZoomLevel = prevZoomLevel;
            equalizePoints(this._startPan, initialPan);
          }
          if (currZoomLevelNeedsChange) {
            destinationPan = {
              x: this._calculatePanForZoomLevel("x", destinationZoomLevel),
              y: this._calculatePanForZoomLevel("y", destinationZoomLevel)
            };
          }
          currSlide.setZoomLevel(destinationZoomLevel);
          destinationPan = {
            x: currSlide.bounds.correctPan("x", destinationPan.x),
            y: currSlide.bounds.correctPan("y", destinationPan.y)
          };
          currSlide.setZoomLevel(prevZoomLevel);
          const panNeedsChange = !pointsEqual(destinationPan, initialPan);
          if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
            currSlide._setResolution(destinationZoomLevel);
            currSlide.applyCurrentZoomPan();
            return;
          }
          pswp.animations.stopAllPan();
          pswp.animations.startSpring({
            isPan: true,
            start: 0,
            end: 1e3,
            velocity: 0,
            dampingRatio: 1,
            naturalFrequency: 40,
            onUpdate: (now2) => {
              now2 /= 1e3;
              if (panNeedsChange || currZoomLevelNeedsChange) {
                if (panNeedsChange) {
                  currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now2;
                  currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now2;
                }
                if (currZoomLevelNeedsChange) {
                  const newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now2;
                  currSlide.setZoomLevel(newZoomLevel);
                }
                currSlide.applyCurrentZoomPan();
              }
              if (restoreBgOpacity && pswp.bgOpacity < 1) {
                pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now2, 0, 1));
              }
            },
            onComplete: () => {
              currSlide._setResolution(destinationZoomLevel);
              currSlide.applyCurrentZoomPan();
            }
          });
        }
      };
      TapHandler = class {
        /**
         * @param {Gestures} gestures
         */
        constructor(gestures) {
          this.gestures = gestures;
        }
        /**
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        click(point, originalEvent) {
          const targetClassList = (
            /** @type {HTMLElement} */
            originalEvent.target.classList
          );
          const isImageClick = targetClassList.contains("pswp__img");
          const isBackgroundClick = targetClassList.contains("pswp__item") || targetClassList.contains("pswp__zoom-wrap");
          if (isImageClick) {
            this._doClickOrTapAction("imageClick", point, originalEvent);
          } else if (isBackgroundClick) {
            this._doClickOrTapAction("bgClick", point, originalEvent);
          }
        }
        /**
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        tap(point, originalEvent) {
          if (didTapOnMainContent(originalEvent)) {
            this._doClickOrTapAction("tap", point, originalEvent);
          }
        }
        /**
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        doubleTap(point, originalEvent) {
          if (didTapOnMainContent(originalEvent)) {
            this._doClickOrTapAction("doubleTap", point, originalEvent);
          }
        }
        /**
         * @private
         * @param {Actions} actionName
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        _doClickOrTapAction(actionName, point, originalEvent) {
          var _this$gestures$pswp$e;
          const {
            pswp
          } = this.gestures;
          const {
            currSlide
          } = pswp;
          const actionFullName = (
            /** @type {AddPostfix<Actions, 'Action'>} */
            actionName + "Action"
          );
          const optionValue = pswp.options[actionFullName];
          if (pswp.dispatch(actionFullName, {
            point,
            originalEvent
          }).defaultPrevented) {
            return;
          }
          if (typeof optionValue === "function") {
            optionValue.call(pswp, point, originalEvent);
            return;
          }
          switch (optionValue) {
            case "close":
            case "next":
              pswp[optionValue]();
              break;
            case "zoom":
              currSlide === null || currSlide === void 0 || currSlide.toggleZoom(point);
              break;
            case "zoom-or-close":
              if (currSlide !== null && currSlide !== void 0 && currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
                currSlide.toggleZoom(point);
              } else if (pswp.options.clickToCloseNonZoomable) {
                pswp.close();
              }
              break;
            case "toggle-controls":
              (_this$gestures$pswp$e = this.gestures.pswp.element) === null || _this$gestures$pswp$e === void 0 || _this$gestures$pswp$e.classList.toggle("pswp--ui-visible");
              break;
          }
        }
      };
      AXIS_SWIPE_HYSTERISIS = 10;
      DOUBLE_TAP_DELAY = 300;
      MIN_TAP_DISTANCE = 25;
      Gestures = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          this.dragAxis = null;
          this.p1 = {
            x: 0,
            y: 0
          };
          this.p2 = {
            x: 0,
            y: 0
          };
          this.prevP1 = {
            x: 0,
            y: 0
          };
          this.prevP2 = {
            x: 0,
            y: 0
          };
          this.startP1 = {
            x: 0,
            y: 0
          };
          this.startP2 = {
            x: 0,
            y: 0
          };
          this.velocity = {
            x: 0,
            y: 0
          };
          this._lastStartP1 = {
            x: 0,
            y: 0
          };
          this._intervalP1 = {
            x: 0,
            y: 0
          };
          this._numActivePoints = 0;
          this._ongoingPointers = [];
          this._touchEventEnabled = "ontouchstart" in window;
          this._pointerEventEnabled = !!window.PointerEvent;
          this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
          this._numActivePoints = 0;
          this._intervalTime = 0;
          this._velocityCalculated = false;
          this.isMultitouch = false;
          this.isDragging = false;
          this.isZooming = false;
          this.raf = null;
          this._tapTimer = null;
          if (!this.supportsTouch) {
            pswp.options.allowPanToNext = false;
          }
          this.drag = new DragHandler(this);
          this.zoomLevels = new ZoomHandler(this);
          this.tapHandler = new TapHandler(this);
          pswp.on("bindEvents", () => {
            pswp.events.add(
              pswp.scrollWrap,
              "click",
              /** @type EventListener */
              this._onClick.bind(this)
            );
            if (this._pointerEventEnabled) {
              this._bindEvents("pointer", "down", "up", "cancel");
            } else if (this._touchEventEnabled) {
              this._bindEvents("touch", "start", "end", "cancel");
              if (pswp.scrollWrap) {
                pswp.scrollWrap.ontouchmove = () => {
                };
                pswp.scrollWrap.ontouchend = () => {
                };
              }
            } else {
              this._bindEvents("mouse", "down", "up");
            }
          });
        }
        /**
         * @private
         * @param {'mouse' | 'touch' | 'pointer'} pref
         * @param {'down' | 'start'} down
         * @param {'up' | 'end'} up
         * @param {'cancel'} [cancel]
         */
        _bindEvents(pref, down, up, cancel) {
          const {
            pswp
          } = this;
          const {
            events: events2
          } = pswp;
          const cancelEvent = cancel ? pref + cancel : "";
          events2.add(
            pswp.scrollWrap,
            pref + down,
            /** @type EventListener */
            this.onPointerDown.bind(this)
          );
          events2.add(
            window,
            pref + "move",
            /** @type EventListener */
            this.onPointerMove.bind(this)
          );
          events2.add(
            window,
            pref + up,
            /** @type EventListener */
            this.onPointerUp.bind(this)
          );
          if (cancelEvent) {
            events2.add(
              pswp.scrollWrap,
              cancelEvent,
              /** @type EventListener */
              this.onPointerUp.bind(this)
            );
          }
        }
        /**
         * @param {PointerEvent} e
         */
        onPointerDown(e2) {
          const isMousePointer = e2.type === "mousedown" || e2.pointerType === "mouse";
          if (isMousePointer && e2.button > 0) {
            return;
          }
          const {
            pswp
          } = this;
          if (!pswp.opener.isOpen) {
            e2.preventDefault();
            return;
          }
          if (pswp.dispatch("pointerDown", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (isMousePointer) {
            pswp.mouseDetected();
            this._preventPointerEventBehaviour(e2, "down");
          }
          pswp.animations.stopAll();
          this._updatePoints(e2, "down");
          if (this._numActivePoints === 1) {
            this.dragAxis = null;
            equalizePoints(this.startP1, this.p1);
          }
          if (this._numActivePoints > 1) {
            this._clearTapTimer();
            this.isMultitouch = true;
          } else {
            this.isMultitouch = false;
          }
        }
        /**
         * @param {PointerEvent} e
         */
        onPointerMove(e2) {
          this._preventPointerEventBehaviour(e2, "move");
          if (!this._numActivePoints) {
            return;
          }
          this._updatePoints(e2, "move");
          if (this.pswp.dispatch("pointerMove", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (this._numActivePoints === 1 && !this.isDragging) {
            if (!this.dragAxis) {
              this._calculateDragDirection();
            }
            if (this.dragAxis && !this.isDragging) {
              if (this.isZooming) {
                this.isZooming = false;
                this.zoomLevels.end();
              }
              this.isDragging = true;
              this._clearTapTimer();
              this._updateStartPoints();
              this._intervalTime = Date.now();
              this._velocityCalculated = false;
              equalizePoints(this._intervalP1, this.p1);
              this.velocity.x = 0;
              this.velocity.y = 0;
              this.drag.start();
              this._rafStopLoop();
              this._rafRenderLoop();
            }
          } else if (this._numActivePoints > 1 && !this.isZooming) {
            this._finishDrag();
            this.isZooming = true;
            this._updateStartPoints();
            this.zoomLevels.start();
            this._rafStopLoop();
            this._rafRenderLoop();
          }
        }
        /**
         * @private
         */
        _finishDrag() {
          if (this.isDragging) {
            this.isDragging = false;
            if (!this._velocityCalculated) {
              this._updateVelocity(true);
            }
            this.drag.end();
            this.dragAxis = null;
          }
        }
        /**
         * @param {PointerEvent} e
         */
        onPointerUp(e2) {
          if (!this._numActivePoints) {
            return;
          }
          this._updatePoints(e2, "up");
          if (this.pswp.dispatch("pointerUp", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (this._numActivePoints === 0) {
            this._rafStopLoop();
            if (this.isDragging) {
              this._finishDrag();
            } else if (!this.isZooming && !this.isMultitouch) {
              this._finishTap(e2);
            }
          }
          if (this._numActivePoints < 2 && this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
            if (this._numActivePoints === 1) {
              this.dragAxis = null;
              this._updateStartPoints();
            }
          }
        }
        /**
         * @private
         */
        _rafRenderLoop() {
          if (this.isDragging || this.isZooming) {
            this._updateVelocity();
            if (this.isDragging) {
              if (!pointsEqual(this.p1, this.prevP1)) {
                this.drag.change();
              }
            } else {
              if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
                this.zoomLevels.change();
              }
            }
            this._updatePrevPoints();
            this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
          }
        }
        /**
         * Update velocity at 50ms interval
         *
         * @private
         * @param {boolean} [force]
         */
        _updateVelocity(force) {
          const time = Date.now();
          const duration = time - this._intervalTime;
          if (duration < 50 && !force) {
            return;
          }
          this.velocity.x = this._getVelocity("x", duration);
          this.velocity.y = this._getVelocity("y", duration);
          this._intervalTime = time;
          equalizePoints(this._intervalP1, this.p1);
          this._velocityCalculated = true;
        }
        /**
         * @private
         * @param {PointerEvent} e
         */
        _finishTap(e2) {
          const {
            mainScroll
          } = this.pswp;
          if (mainScroll.isShifted()) {
            mainScroll.moveIndexBy(0, true);
            return;
          }
          if (e2.type.indexOf("cancel") > 0) {
            return;
          }
          if (e2.type === "mouseup" || e2.pointerType === "mouse") {
            this.tapHandler.click(this.startP1, e2);
            return;
          }
          const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
          if (this._tapTimer) {
            this._clearTapTimer();
            if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
              this.tapHandler.doubleTap(this.startP1, e2);
            }
          } else {
            equalizePoints(this._lastStartP1, this.startP1);
            this._tapTimer = setTimeout(() => {
              this.tapHandler.tap(this.startP1, e2);
              this._clearTapTimer();
            }, tapDelay);
          }
        }
        /**
         * @private
         */
        _clearTapTimer() {
          if (this._tapTimer) {
            clearTimeout(this._tapTimer);
            this._tapTimer = null;
          }
        }
        /**
         * Get velocity for axis
         *
         * @private
         * @param {'x' | 'y'} axis
         * @param {number} duration
         * @returns {number}
         */
        _getVelocity(axis, duration) {
          const displacement = this.p1[axis] - this._intervalP1[axis];
          if (Math.abs(displacement) > 1 && duration > 5) {
            return displacement / duration;
          }
          return 0;
        }
        /**
         * @private
         */
        _rafStopLoop() {
          if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
          }
        }
        /**
         * @private
         * @param {PointerEvent} e
         * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
         */
        _preventPointerEventBehaviour(e2, pointerType) {
          const preventPointerEvent = this.pswp.applyFilters("preventPointerEvent", true, e2, pointerType);
          if (preventPointerEvent) {
            e2.preventDefault();
          }
        }
        /**
         * Parses and normalizes points from the touch, mouse or pointer event.
         * Updates p1 and p2.
         *
         * @private
         * @param {PointerEvent | TouchEvent} e
         * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
         */
        _updatePoints(e2, pointerType) {
          if (this._pointerEventEnabled) {
            const pointerEvent = (
              /** @type {PointerEvent} */
              e2
            );
            const pointerIndex = this._ongoingPointers.findIndex((ongoingPointer) => {
              return ongoingPointer.id === pointerEvent.pointerId;
            });
            if (pointerType === "up" && pointerIndex > -1) {
              this._ongoingPointers.splice(pointerIndex, 1);
            } else if (pointerType === "down" && pointerIndex === -1) {
              this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {
                x: 0,
                y: 0
              }));
            } else if (pointerIndex > -1) {
              this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
            }
            this._numActivePoints = this._ongoingPointers.length;
            if (this._numActivePoints > 0) {
              equalizePoints(this.p1, this._ongoingPointers[0]);
            }
            if (this._numActivePoints > 1) {
              equalizePoints(this.p2, this._ongoingPointers[1]);
            }
          } else {
            const touchEvent = (
              /** @type {TouchEvent} */
              e2
            );
            this._numActivePoints = 0;
            if (touchEvent.type.indexOf("touch") > -1) {
              if (touchEvent.touches && touchEvent.touches.length > 0) {
                this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
                this._numActivePoints++;
                if (touchEvent.touches.length > 1) {
                  this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
                  this._numActivePoints++;
                }
              }
            } else {
              this._convertEventPosToPoint(
                /** @type {PointerEvent} */
                e2,
                this.p1
              );
              if (pointerType === "up") {
                this._numActivePoints = 0;
              } else {
                this._numActivePoints++;
              }
            }
          }
        }
        /** update points that were used during previous rAF tick
         * @private
         */
        _updatePrevPoints() {
          equalizePoints(this.prevP1, this.p1);
          equalizePoints(this.prevP2, this.p2);
        }
        /** update points at the start of gesture
         * @private
         */
        _updateStartPoints() {
          equalizePoints(this.startP1, this.p1);
          equalizePoints(this.startP2, this.p2);
          this._updatePrevPoints();
        }
        /** @private */
        _calculateDragDirection() {
          if (this.pswp.mainScroll.isShifted()) {
            this.dragAxis = "x";
          } else {
            const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
            if (diff !== 0) {
              const axisToCheck = diff > 0 ? "x" : "y";
              if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
                this.dragAxis = axisToCheck;
              }
            }
          }
        }
        /**
         * Converts touch, pointer or mouse event
         * to PhotoSwipe point.
         *
         * @private
         * @param {Touch | PointerEvent} e
         * @param {Point} p
         * @returns {Point}
         */
        _convertEventPosToPoint(e2, p2) {
          p2.x = e2.pageX - this.pswp.offset.x;
          p2.y = e2.pageY - this.pswp.offset.y;
          if ("pointerId" in e2) {
            p2.id = e2.pointerId;
          } else if (e2.identifier !== void 0) {
            p2.id = e2.identifier;
          }
          return p2;
        }
        /**
         * @private
         * @param {PointerEvent} e
         */
        _onClick(e2) {
          if (this.pswp.mainScroll.isShifted()) {
            e2.preventDefault();
            e2.stopPropagation();
          }
        }
      };
      MAIN_SCROLL_END_FRICTION = 0.35;
      MainScroll = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          this.x = 0;
          this.slideWidth = 0;
          this._currPositionIndex = 0;
          this._prevPositionIndex = 0;
          this._containerShiftIndex = -1;
          this.itemHolders = [];
        }
        /**
         * Position the scroller and slide containers
         * according to viewport size.
         *
         * @param {boolean} [resizeSlides] Whether slides content should resized
         */
        resize(resizeSlides) {
          const {
            pswp
          } = this;
          const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
          const slideWidthChanged = newSlideWidth !== this.slideWidth;
          if (slideWidthChanged) {
            this.slideWidth = newSlideWidth;
            this.moveTo(this.getCurrSlideX());
          }
          this.itemHolders.forEach((itemHolder, index) => {
            if (slideWidthChanged) {
              setTransform(itemHolder.el, (index + this._containerShiftIndex) * this.slideWidth);
            }
            if (resizeSlides && itemHolder.slide) {
              itemHolder.slide.resize();
            }
          });
        }
        /**
         * Reset X position of the main scroller to zero
         */
        resetPosition() {
          this._currPositionIndex = 0;
          this._prevPositionIndex = 0;
          this.slideWidth = 0;
          this._containerShiftIndex = -1;
        }
        /**
         * Create and append array of three items
         * that hold data about slides in DOM
         */
        appendHolders() {
          this.itemHolders = [];
          for (let i2 = 0; i2 < 3; i2++) {
            const el = createElement2("pswp__item", "div", this.pswp.container);
            el.setAttribute("role", "group");
            el.setAttribute("aria-roledescription", "slide");
            el.setAttribute("aria-hidden", "true");
            el.style.display = i2 === 1 ? "block" : "none";
            this.itemHolders.push({
              el
              //index: -1
            });
          }
        }
        /**
         * Whether the main scroll can be horizontally swiped to the next or previous slide.
         * @returns {boolean}
         */
        canBeSwiped() {
          return this.pswp.getNumItems() > 1;
        }
        /**
         * Move main scroll by X amount of slides.
         * For example:
         *   `-1` will move to the previous slide,
         *    `0` will reset the scroll position of the current slide,
         *    `3` will move three slides forward
         *
         * If loop option is enabled - index will be automatically looped too,
         * (for example `-1` will move to the last slide of the gallery).
         *
         * @param {number} diff
         * @param {boolean} [animate]
         * @param {number} [velocityX]
         * @returns {boolean} whether index was changed or not
         */
        moveIndexBy(diff, animate, velocityX) {
          const {
            pswp
          } = this;
          let newIndex = pswp.potentialIndex + diff;
          const numSlides = pswp.getNumItems();
          if (pswp.canLoop()) {
            newIndex = pswp.getLoopedIndex(newIndex);
            const distance = (diff + numSlides) % numSlides;
            if (distance <= numSlides / 2) {
              diff = distance;
            } else {
              diff = distance - numSlides;
            }
          } else {
            if (newIndex < 0) {
              newIndex = 0;
            } else if (newIndex >= numSlides) {
              newIndex = numSlides - 1;
            }
            diff = newIndex - pswp.potentialIndex;
          }
          pswp.potentialIndex = newIndex;
          this._currPositionIndex -= diff;
          pswp.animations.stopMainScroll();
          const destinationX = this.getCurrSlideX();
          if (!animate) {
            this.moveTo(destinationX);
            this.updateCurrItem();
          } else {
            pswp.animations.startSpring({
              isMainScroll: true,
              start: this.x,
              end: destinationX,
              velocity: velocityX || 0,
              naturalFrequency: 30,
              dampingRatio: 1,
              //0.7,
              onUpdate: (x2) => {
                this.moveTo(x2);
              },
              onComplete: () => {
                this.updateCurrItem();
                pswp.appendHeavy();
              }
            });
            let currDiff = pswp.potentialIndex - pswp.currIndex;
            if (pswp.canLoop()) {
              const currDistance = (currDiff + numSlides) % numSlides;
              if (currDistance <= numSlides / 2) {
                currDiff = currDistance;
              } else {
                currDiff = currDistance - numSlides;
              }
            }
            if (Math.abs(currDiff) > 1) {
              this.updateCurrItem();
            }
          }
          return Boolean(diff);
        }
        /**
         * X position of the main scroll for the current slide
         * (ignores position during dragging)
         * @returns {number}
         */
        getCurrSlideX() {
          return this.slideWidth * this._currPositionIndex;
        }
        /**
         * Whether scroll position is shifted.
         * For example, it will return true if the scroll is being dragged or animated.
         * @returns {boolean}
         */
        isShifted() {
          return this.x !== this.getCurrSlideX();
        }
        /**
         * Update slides X positions and set their content
         */
        updateCurrItem() {
          var _this$itemHolders$;
          const {
            pswp
          } = this;
          const positionDifference = this._prevPositionIndex - this._currPositionIndex;
          if (!positionDifference) {
            return;
          }
          this._prevPositionIndex = this._currPositionIndex;
          pswp.currIndex = pswp.potentialIndex;
          let diffAbs = Math.abs(positionDifference);
          let tempHolder;
          if (diffAbs >= 3) {
            this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
            diffAbs = 3;
            this.itemHolders.forEach((itemHolder) => {
              var _itemHolder$slide;
              (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.destroy();
              itemHolder.slide = void 0;
            });
          }
          for (let i2 = 0; i2 < diffAbs; i2++) {
            if (positionDifference > 0) {
              tempHolder = this.itemHolders.shift();
              if (tempHolder) {
                this.itemHolders[2] = tempHolder;
                this._containerShiftIndex++;
                setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
                pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i2 + 2);
              }
            } else {
              tempHolder = this.itemHolders.pop();
              if (tempHolder) {
                this.itemHolders.unshift(tempHolder);
                this._containerShiftIndex--;
                setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
                pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i2 - 2);
              }
            }
          }
          if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
            this.resetPosition();
            this.resize();
          }
          pswp.animations.stopAllPan();
          this.itemHolders.forEach((itemHolder, i2) => {
            if (itemHolder.slide) {
              itemHolder.slide.setIsActive(i2 === 1);
            }
          });
          pswp.currSlide = (_this$itemHolders$ = this.itemHolders[1]) === null || _this$itemHolders$ === void 0 ? void 0 : _this$itemHolders$.slide;
          pswp.contentLoader.updateLazy(positionDifference);
          if (pswp.currSlide) {
            pswp.currSlide.applyCurrentZoomPan();
          }
          pswp.dispatch("change");
        }
        /**
         * Move the X position of the main scroll container
         *
         * @param {number} x
         * @param {boolean} [dragging]
         */
        moveTo(x2, dragging) {
          if (!this.pswp.canLoop() && dragging) {
            let newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x2) / this.slideWidth;
            newSlideIndexOffset += this.pswp.currIndex;
            const delta = Math.round(x2 - this.x);
            if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
              x2 = this.x + delta * MAIN_SCROLL_END_FRICTION;
            }
          }
          this.x = x2;
          if (this.pswp.container) {
            setTransform(this.pswp.container, x2);
          }
          this.pswp.dispatch("moveMainScroll", {
            x: x2,
            dragging: dragging !== null && dragging !== void 0 ? dragging : false
          });
        }
      };
      KeyboardKeyCodesMap = {
        Escape: 27,
        z: 90,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Tab: 9
      };
      getKeyboardEventKey = (key, isKeySupported) => {
        return isKeySupported ? key : KeyboardKeyCodesMap[key];
      };
      Keyboard = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          this._wasFocused = false;
          pswp.on("bindEvents", () => {
            if (pswp.options.trapFocus) {
              if (!pswp.options.initialPointerPos) {
                this._focusRoot();
              }
              pswp.events.add(
                document,
                "focusin",
                /** @type EventListener */
                this._onFocusIn.bind(this)
              );
            }
            pswp.events.add(
              document,
              "keydown",
              /** @type EventListener */
              this._onKeyDown.bind(this)
            );
          });
          const lastActiveElement = (
            /** @type {HTMLElement} */
            document.activeElement
          );
          pswp.on("destroy", () => {
            if (pswp.options.returnFocus && lastActiveElement && this._wasFocused) {
              lastActiveElement.focus();
            }
          });
        }
        /** @private */
        _focusRoot() {
          if (!this._wasFocused && this.pswp.element) {
            this.pswp.element.focus();
            this._wasFocused = true;
          }
        }
        /**
         * @private
         * @param {KeyboardEvent} e
         */
        _onKeyDown(e2) {
          const {
            pswp
          } = this;
          if (pswp.dispatch("keydown", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (specialKeyUsed2(e2)) {
            return;
          }
          let keydownAction;
          let axis;
          let isForward = false;
          const isKeySupported = "key" in e2;
          switch (isKeySupported ? e2.key : e2.keyCode) {
            case getKeyboardEventKey("Escape", isKeySupported):
              if (pswp.options.escKey) {
                keydownAction = "close";
              }
              break;
            case getKeyboardEventKey("z", isKeySupported):
              keydownAction = "toggleZoom";
              break;
            case getKeyboardEventKey("ArrowLeft", isKeySupported):
              axis = "x";
              break;
            case getKeyboardEventKey("ArrowUp", isKeySupported):
              axis = "y";
              break;
            case getKeyboardEventKey("ArrowRight", isKeySupported):
              axis = "x";
              isForward = true;
              break;
            case getKeyboardEventKey("ArrowDown", isKeySupported):
              isForward = true;
              axis = "y";
              break;
            case getKeyboardEventKey("Tab", isKeySupported):
              this._focusRoot();
              break;
          }
          if (axis) {
            e2.preventDefault();
            const {
              currSlide
            } = pswp;
            if (pswp.options.arrowKeys && axis === "x" && pswp.getNumItems() > 1) {
              keydownAction = isForward ? "next" : "prev";
            } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
              currSlide.pan[axis] += isForward ? -80 : 80;
              currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
            }
          }
          if (keydownAction) {
            e2.preventDefault();
            pswp[keydownAction]();
          }
        }
        /**
         * Trap focus inside photoswipe
         *
         * @private
         * @param {FocusEvent} e
         */
        _onFocusIn(e2) {
          const {
            template
          } = this.pswp;
          if (template && document !== e2.target && template !== e2.target && !template.contains(
            /** @type {Node} */
            e2.target
          )) {
            template.focus();
          }
        }
      };
      DEFAULT_EASING = "cubic-bezier(.4,0,.22,1)";
      CSSAnimation = class {
        /**
         * onComplete can be unpredictable, be careful about current state
         *
         * @param {CssAnimationProps} props
         */
        constructor(props) {
          var _props$prop;
          this.props = props;
          const {
            target,
            onComplete,
            transform,
            onFinish = () => {
            },
            duration = 333,
            easing = DEFAULT_EASING
          } = props;
          this.onFinish = onFinish;
          const prop = transform ? "transform" : "opacity";
          const propValue = (_props$prop = props[prop]) !== null && _props$prop !== void 0 ? _props$prop : "";
          this._target = target;
          this._onComplete = onComplete;
          this._finished = false;
          this._onTransitionEnd = this._onTransitionEnd.bind(this);
          this._helperTimeout = setTimeout(() => {
            setTransitionStyle(target, prop, duration, easing);
            this._helperTimeout = setTimeout(() => {
              target.addEventListener("transitionend", this._onTransitionEnd, false);
              target.addEventListener("transitioncancel", this._onTransitionEnd, false);
              this._helperTimeout = setTimeout(() => {
                this._finalizeAnimation();
              }, duration + 500);
              target.style[prop] = propValue;
            }, 30);
          }, 0);
        }
        /**
         * @private
         * @param {TransitionEvent} e
         */
        _onTransitionEnd(e2) {
          if (e2.target === this._target) {
            this._finalizeAnimation();
          }
        }
        /**
         * @private
         */
        _finalizeAnimation() {
          if (!this._finished) {
            this._finished = true;
            this.onFinish();
            if (this._onComplete) {
              this._onComplete();
            }
          }
        }
        // Destroy is called automatically onFinish
        destroy() {
          if (this._helperTimeout) {
            clearTimeout(this._helperTimeout);
          }
          removeTransitionStyle(this._target);
          this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
          this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
          if (!this._finished) {
            this._finalizeAnimation();
          }
        }
      };
      DEFAULT_NATURAL_FREQUENCY = 12;
      DEFAULT_DAMPING_RATIO = 0.75;
      SpringEaser = class {
        /**
         * @param {number} initialVelocity Initial velocity, px per ms.
         *
         * @param {number} [dampingRatio]
         * Determines how bouncy animation will be.
         * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
         * "overshoot" refers to part of animation that
         * goes beyond the final value.
         *
         * @param {number} [naturalFrequency]
         * Determines how fast animation will slow down.
         * The higher value - the stiffer the transition will be,
         * and the faster it will slow down.
         * Recommended value from 10 to 50
         */
        constructor(initialVelocity, dampingRatio, naturalFrequency) {
          this.velocity = initialVelocity * 1e3;
          this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
          this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
          this._dampedFrequency = this._naturalFrequency;
          if (this._dampingRatio < 1) {
            this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
          }
        }
        /**
         * @param {number} deltaPosition Difference between current and end position of the animation
         * @param {number} deltaTime Frame duration in milliseconds
         *
         * @returns {number} Displacement, relative to the end position.
         */
        easeFrame(deltaPosition, deltaTime) {
          let displacement = 0;
          let coeff;
          deltaTime /= 1e3;
          const naturalDumpingPow = __pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);
          if (this._dampingRatio === 1) {
            coeff = this.velocity + this._naturalFrequency * deltaPosition;
            displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
            this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
          } else if (this._dampingRatio < 1) {
            coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
            const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
            const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
            displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
            this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
          }
          return displacement;
        }
      };
      SpringAnimation = class {
        /**
         * @param {SpringAnimationProps} props
         */
        constructor(props) {
          this.props = props;
          this._raf = 0;
          const {
            start,
            end,
            velocity,
            onUpdate,
            onComplete,
            onFinish = () => {
            },
            dampingRatio,
            naturalFrequency
          } = props;
          this.onFinish = onFinish;
          const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
          let prevTime = Date.now();
          let deltaPosition = start - end;
          const animationLoop = () => {
            if (this._raf) {
              deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
              if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
                onUpdate(end);
                if (onComplete) {
                  onComplete();
                }
                this.onFinish();
              } else {
                prevTime = Date.now();
                onUpdate(deltaPosition + end);
                this._raf = requestAnimationFrame(animationLoop);
              }
            }
          };
          this._raf = requestAnimationFrame(animationLoop);
        }
        // Destroy is called automatically onFinish
        destroy() {
          if (this._raf >= 0) {
            cancelAnimationFrame(this._raf);
          }
          this._raf = 0;
        }
      };
      Animations = class {
        constructor() {
          this.activeAnimations = [];
        }
        /**
         * @param {SpringAnimationProps} props
         */
        startSpring(props) {
          this._start(props, true);
        }
        /**
         * @param {CssAnimationProps} props
         */
        startTransition(props) {
          this._start(props);
        }
        /**
         * @private
         * @param {AnimationProps} props
         * @param {boolean} [isSpring]
         * @returns {Animation}
         */
        _start(props, isSpring) {
          const animation = isSpring ? new SpringAnimation(
            /** @type SpringAnimationProps */
            props
          ) : new CSSAnimation(
            /** @type CssAnimationProps */
            props
          );
          this.activeAnimations.push(animation);
          animation.onFinish = () => this.stop(animation);
          return animation;
        }
        /**
         * @param {Animation} animation
         */
        stop(animation) {
          animation.destroy();
          const index = this.activeAnimations.indexOf(animation);
          if (index > -1) {
            this.activeAnimations.splice(index, 1);
          }
        }
        stopAll() {
          this.activeAnimations.forEach((animation) => {
            animation.destroy();
          });
          this.activeAnimations = [];
        }
        /**
         * Stop all pan or zoom transitions
         */
        stopAllPan() {
          this.activeAnimations = this.activeAnimations.filter((animation) => {
            if (animation.props.isPan) {
              animation.destroy();
              return false;
            }
            return true;
          });
        }
        stopMainScroll() {
          this.activeAnimations = this.activeAnimations.filter((animation) => {
            if (animation.props.isMainScroll) {
              animation.destroy();
              return false;
            }
            return true;
          });
        }
        /**
         * Returns true if main scroll transition is running
         */
        // isMainScrollRunning() {
        //   return this.activeAnimations.some((animation) => {
        //     return animation.props.isMainScroll;
        //   });
        // }
        /**
         * Returns true if any pan or zoom transition is running
         */
        isPanRunning() {
          return this.activeAnimations.some((animation) => {
            return animation.props.isPan;
          });
        }
      };
      ScrollWheel = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          pswp.events.add(
            pswp.element,
            "wheel",
            /** @type EventListener */
            this._onWheel.bind(this)
          );
        }
        /**
         * @private
         * @param {WheelEvent} e
         */
        _onWheel(e2) {
          e2.preventDefault();
          const {
            currSlide
          } = this.pswp;
          let {
            deltaX,
            deltaY
          } = e2;
          if (!currSlide) {
            return;
          }
          if (this.pswp.dispatch("wheel", {
            originalEvent: e2
          }).defaultPrevented) {
            return;
          }
          if (e2.ctrlKey || this.pswp.options.wheelToZoom) {
            if (currSlide.isZoomable()) {
              let zoomFactor = -deltaY;
              if (e2.deltaMode === 1) {
                zoomFactor *= 0.05;
              } else {
                zoomFactor *= e2.deltaMode ? 1 : 2e-3;
              }
              zoomFactor = __pow(2, zoomFactor);
              const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
              currSlide.zoomTo(destZoomLevel, {
                x: e2.clientX,
                y: e2.clientY
              });
            }
          } else {
            if (currSlide.isPannable()) {
              if (e2.deltaMode === 1) {
                deltaX *= 18;
                deltaY *= 18;
              }
              currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
            }
          }
        }
      };
      UIElement = class {
        /**
         * @param {PhotoSwipe} pswp
         * @param {UIElementData} data
         */
        constructor(pswp, data) {
          var _container;
          const name = data.name || data.className;
          let elementHTML = data.html;
          if (pswp.options[name] === false) {
            return;
          }
          if (typeof pswp.options[name + "SVG"] === "string") {
            elementHTML = pswp.options[name + "SVG"];
          }
          pswp.dispatch("uiElementCreate", {
            data
          });
          let className = "";
          if (data.isButton) {
            className += "pswp__button ";
            className += data.className || "pswp__button--".concat(data.name);
          } else {
            className += data.className || "pswp__".concat(data.name);
          }
          let tagName = data.isButton ? data.tagName || "button" : data.tagName || "div";
          tagName = /** @type {keyof HTMLElementTagNameMap} */
          tagName.toLowerCase();
          const element = createElement2(className, tagName);
          if (data.isButton) {
            if (tagName === "button") {
              element.type = "button";
            }
            let {
              title
            } = data;
            const {
              ariaLabel
            } = data;
            if (typeof pswp.options[name + "Title"] === "string") {
              title = pswp.options[name + "Title"];
            }
            if (title) {
              element.title = title;
            }
            const ariaText = ariaLabel || title;
            if (ariaText) {
              element.setAttribute("aria-label", ariaText);
            }
          }
          element.innerHTML = addElementHTML(elementHTML);
          if (data.onInit) {
            data.onInit(element, pswp);
          }
          if (data.onClick) {
            element.onclick = (e2) => {
              if (typeof data.onClick === "string") {
                pswp[data.onClick]();
              } else if (typeof data.onClick === "function") {
                data.onClick(e2, element, pswp);
              }
            };
          }
          const appendTo = data.appendTo || "bar";
          let container = pswp.element;
          if (appendTo === "bar") {
            if (!pswp.topBar) {
              pswp.topBar = createElement2("pswp__top-bar pswp__hide-on-close", "div", pswp.scrollWrap);
            }
            container = pswp.topBar;
          } else {
            element.classList.add("pswp__hide-on-close");
            if (appendTo === "wrapper") {
              container = pswp.scrollWrap;
            }
          }
          (_container = container) === null || _container === void 0 || _container.appendChild(pswp.applyFilters("uiElement", element, data));
        }
      };
      arrowPrev = {
        name: "arrowPrev",
        className: "pswp__button--arrow--prev",
        title: "Previous",
        order: 10,
        isButton: true,
        appendTo: "wrapper",
        html: {
          isCustomSVG: true,
          size: 60,
          inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
          outlineID: "pswp__icn-arrow"
        },
        onClick: "prev",
        onInit: initArrowButton
      };
      arrowNext = {
        name: "arrowNext",
        className: "pswp__button--arrow--next",
        title: "Next",
        order: 11,
        isButton: true,
        appendTo: "wrapper",
        html: {
          isCustomSVG: true,
          size: 60,
          inner: '<use xlink:href="#pswp__icn-arrow"/>',
          outlineID: "pswp__icn-arrow"
        },
        onClick: "next",
        onInit: (el, pswp) => {
          initArrowButton(el, pswp, true);
        }
      };
      closeButton = {
        name: "close",
        title: "Close",
        order: 20,
        isButton: true,
        html: {
          isCustomSVG: true,
          inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
          outlineID: "pswp__icn-close"
        },
        onClick: "close"
      };
      zoomButton = {
        name: "zoom",
        title: "Zoom",
        order: 10,
        isButton: true,
        html: {
          isCustomSVG: true,
          // eslint-disable-next-line max-len
          inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
          outlineID: "pswp__icn-zoom"
        },
        onClick: "toggleZoom"
      };
      loadingIndicator = {
        name: "preloader",
        appendTo: "bar",
        order: 7,
        html: {
          isCustomSVG: true,
          // eslint-disable-next-line max-len
          inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
          outlineID: "pswp__icn-loading"
        },
        onInit: (indicatorElement, pswp) => {
          let isVisible;
          let delayTimeout = null;
          const toggleIndicatorClass = (className, add) => {
            indicatorElement.classList.toggle("pswp__preloader--" + className, add);
          };
          const setIndicatorVisibility = (visible) => {
            if (isVisible !== visible) {
              isVisible = visible;
              toggleIndicatorClass("active", visible);
            }
          };
          const updatePreloaderVisibility = () => {
            var _pswp$currSlide;
            if (!((_pswp$currSlide = pswp.currSlide) !== null && _pswp$currSlide !== void 0 && _pswp$currSlide.content.isLoading())) {
              setIndicatorVisibility(false);
              if (delayTimeout) {
                clearTimeout(delayTimeout);
                delayTimeout = null;
              }
              return;
            }
            if (!delayTimeout) {
              delayTimeout = setTimeout(() => {
                var _pswp$currSlide2;
                setIndicatorVisibility(Boolean((_pswp$currSlide2 = pswp.currSlide) === null || _pswp$currSlide2 === void 0 ? void 0 : _pswp$currSlide2.content.isLoading()));
                delayTimeout = null;
              }, pswp.options.preloaderDelay);
            }
          };
          pswp.on("change", updatePreloaderVisibility);
          pswp.on("loadComplete", (e2) => {
            if (pswp.currSlide === e2.slide) {
              updatePreloaderVisibility();
            }
          });
          if (pswp.ui) {
            pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
          }
        }
      };
      counterIndicator = {
        name: "counter",
        order: 5,
        onInit: (counterElement, pswp) => {
          pswp.on("change", () => {
            counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
          });
        }
      };
      UI = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          this.isRegistered = false;
          this.uiElementsData = [];
          this.items = [];
          this.updatePreloaderVisibility = () => {
          };
          this._lastUpdatedZoomLevel = void 0;
        }
        init() {
          const {
            pswp
          } = this;
          this.isRegistered = false;
          this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
          pswp.dispatch("uiRegister");
          this.uiElementsData.sort((a2, b2) => {
            return (a2.order || 0) - (b2.order || 0);
          });
          this.items = [];
          this.isRegistered = true;
          this.uiElementsData.forEach((uiElementData) => {
            this.registerElement(uiElementData);
          });
          pswp.on("change", () => {
            var _pswp$element;
            (_pswp$element = pswp.element) === null || _pswp$element === void 0 || _pswp$element.classList.toggle("pswp--one-slide", pswp.getNumItems() === 1);
          });
          pswp.on("zoomPanUpdate", () => this._onZoomPanUpdate());
        }
        /**
         * @param {UIElementData} elementData
         */
        registerElement(elementData) {
          if (this.isRegistered) {
            this.items.push(new UIElement(this.pswp, elementData));
          } else {
            this.uiElementsData.push(elementData);
          }
        }
        /**
         * Fired each time zoom or pan position is changed.
         * Update classes that control visibility of zoom button and cursor icon.
         *
         * @private
         */
        _onZoomPanUpdate() {
          const {
            template,
            currSlide,
            options
          } = this.pswp;
          if (this.pswp.opener.isClosing || !template || !currSlide) {
            return;
          }
          let {
            currZoomLevel
          } = currSlide;
          if (!this.pswp.opener.isOpen) {
            currZoomLevel = currSlide.zoomLevels.initial;
          }
          if (currZoomLevel === this._lastUpdatedZoomLevel) {
            return;
          }
          this._lastUpdatedZoomLevel = currZoomLevel;
          const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
          if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
            setZoomedIn(template, false);
            template.classList.remove("pswp--zoom-allowed");
            return;
          }
          template.classList.add("pswp--zoom-allowed");
          const potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
          setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
          if (options.imageClickAction === "zoom" || options.imageClickAction === "zoom-or-close") {
            template.classList.add("pswp--click-to-zoom");
          }
        }
      };
      PhotoSwipeEvent2 = class {
        /**
         * @param {T} type
         * @param {PhotoSwipeEventsMap[T]} [details]
         */
        constructor(type, details) {
          this.type = type;
          this.defaultPrevented = false;
          if (details) {
            Object.assign(this, details);
          }
        }
        preventDefault() {
          this.defaultPrevented = true;
        }
      };
      Eventable2 = class {
        constructor() {
          this._listeners = {};
          this._filters = {};
          this.pswp = void 0;
          this.options = void 0;
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {PhotoSwipeFiltersMap[T]} fn
         * @param {number} priority
         */
        addFilter(name, fn, priority = 100) {
          var _this$_filters$name, _this$_filters$name2, _this$pswp;
          if (!this._filters[name]) {
            this._filters[name] = [];
          }
          (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
            fn,
            priority
          });
          (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
          (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {PhotoSwipeFiltersMap[T]} fn
         */
        removeFilter(name, fn) {
          if (this._filters[name]) {
            this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
          }
          if (this.pswp) {
            this.pswp.removeFilter(name, fn);
          }
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
         * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
         */
        applyFilters(name, ...args) {
          var _this$_filters$name3;
          (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter) => {
            args[0] = filter.fn.apply(this, args);
          });
          return args[0];
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {EventCallback<T>} fn
         */
        on(name, fn) {
          var _this$_listeners$name, _this$pswp2;
          if (!this._listeners[name]) {
            this._listeners[name] = [];
          }
          (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
          (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {EventCallback<T>} fn
         */
        off(name, fn) {
          var _this$pswp3;
          if (this._listeners[name]) {
            this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
          }
          (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {PhotoSwipeEventsMap[T]} [details]
         * @returns {AugmentedEvent<T>}
         */
        dispatch(name, details) {
          var _this$_listeners$name2;
          if (this.pswp) {
            return this.pswp.dispatch(name, details);
          }
          const event2 = (
            /** @type {AugmentedEvent<T>} */
            new PhotoSwipeEvent2(name, details)
          );
          (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
            listener.call(this, event2);
          });
          return event2;
        }
      };
      Placeholder2 = class {
        /**
         * @param {string | false} imageSrc
         * @param {HTMLElement} container
         */
        constructor(imageSrc, container) {
          this.element = createElement2("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
          if (imageSrc) {
            const imgEl = (
              /** @type {HTMLImageElement} */
              this.element
            );
            imgEl.decoding = "async";
            imgEl.alt = "";
            imgEl.src = imageSrc;
            imgEl.setAttribute("role", "presentation");
          }
          this.element.setAttribute("aria-hidden", "true");
        }
        /**
         * @param {number} width
         * @param {number} height
         */
        setDisplayedSize(width, height) {
          if (!this.element) {
            return;
          }
          if (this.element.tagName === "IMG") {
            setWidthHeight2(this.element, 250, "auto");
            this.element.style.transformOrigin = "0 0";
            this.element.style.transform = toTransformString2(0, 0, width / 250);
          } else {
            setWidthHeight2(this.element, width, height);
          }
        }
        destroy() {
          var _this$element;
          if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
            this.element.remove();
          }
          this.element = null;
        }
      };
      Content2 = class {
        /**
         * @param {SlideData} itemData Slide data
         * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
         * @param {number} index
         */
        constructor(itemData, instance, index) {
          this.instance = instance;
          this.data = itemData;
          this.index = index;
          this.element = void 0;
          this.placeholder = void 0;
          this.slide = void 0;
          this.displayedImageWidth = 0;
          this.displayedImageHeight = 0;
          this.width = Number(this.data.w) || Number(this.data.width) || 0;
          this.height = Number(this.data.h) || Number(this.data.height) || 0;
          this.isAttached = false;
          this.hasSlide = false;
          this.isDecoding = false;
          this.state = LOAD_STATE2.IDLE;
          if (this.data.type) {
            this.type = this.data.type;
          } else if (this.data.src) {
            this.type = "image";
          } else {
            this.type = "html";
          }
          this.instance.dispatch("contentInit", {
            content: this
          });
        }
        removePlaceholder() {
          if (this.placeholder && !this.keepPlaceholder()) {
            setTimeout(() => {
              if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = void 0;
              }
            }, 1e3);
          }
        }
        /**
         * Preload content
         *
         * @param {boolean} isLazy
         * @param {boolean} [reload]
         */
        load(isLazy, reload) {
          if (this.slide && this.usePlaceholder()) {
            if (!this.placeholder) {
              const placeholderSrc = this.instance.applyFilters(
                "placeholderSrc",
                // use  image-based placeholder only for the first slide,
                // as rendering (even small stretched thumbnail) is an expensive operation
                this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
                this
              );
              this.placeholder = new Placeholder2(placeholderSrc, this.slide.container);
            } else {
              const placeholderEl = this.placeholder.element;
              if (placeholderEl && !placeholderEl.parentElement) {
                this.slide.container.prepend(placeholderEl);
              }
            }
          }
          if (this.element && !reload) {
            return;
          }
          if (this.instance.dispatch("contentLoad", {
            content: this,
            isLazy
          }).defaultPrevented) {
            return;
          }
          if (this.isImageContent()) {
            this.element = createElement2("pswp__img", "img");
            if (this.displayedImageWidth) {
              this.loadImage(isLazy);
            }
          } else {
            this.element = createElement2("pswp__content", "div");
            this.element.innerHTML = this.data.html || "";
          }
          if (reload && this.slide) {
            this.slide.updateContentSize(true);
          }
        }
        /**
         * Preload image
         *
         * @param {boolean} isLazy
         */
        loadImage(isLazy) {
          var _this$data$src, _this$data$alt;
          if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy
          }).defaultPrevented) {
            return;
          }
          const imageElement = (
            /** @type HTMLImageElement */
            this.element
          );
          this.updateSrcsetSizes();
          if (this.data.srcset) {
            imageElement.srcset = this.data.srcset;
          }
          imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
          imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
          this.state = LOAD_STATE2.LOADING;
          if (imageElement.complete) {
            this.onLoaded();
          } else {
            imageElement.onload = () => {
              this.onLoaded();
            };
            imageElement.onerror = () => {
              this.onError();
            };
          }
        }
        /**
         * Assign slide to content
         *
         * @param {Slide} slide
         */
        setSlide(slide2) {
          this.slide = slide2;
          this.hasSlide = true;
          this.instance = slide2.pswp;
        }
        /**
         * Content load success handler
         */
        onLoaded() {
          this.state = LOAD_STATE2.LOADED;
          if (this.slide && this.element) {
            this.instance.dispatch("loadComplete", {
              slide: this.slide,
              content: this
            });
            if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
              this.append();
              this.slide.updateContentSize(true);
            }
            if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
              this.removePlaceholder();
            }
          }
        }
        /**
         * Content load error handler
         */
        onError() {
          this.state = LOAD_STATE2.ERROR;
          if (this.slide) {
            this.displayError();
            this.instance.dispatch("loadComplete", {
              slide: this.slide,
              isError: true,
              content: this
            });
            this.instance.dispatch("loadError", {
              slide: this.slide,
              content: this
            });
          }
        }
        /**
         * @returns {Boolean} If the content is currently loading
         */
        isLoading() {
          return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE2.LOADING, this);
        }
        /**
         * @returns {Boolean} If the content is in error state
         */
        isError() {
          return this.state === LOAD_STATE2.ERROR;
        }
        /**
         * @returns {boolean} If the content is image
         */
        isImageContent() {
          return this.type === "image";
        }
        /**
         * Update content size
         *
         * @param {Number} width
         * @param {Number} height
         */
        setDisplayedSize(width, height) {
          if (!this.element) {
            return;
          }
          if (this.placeholder) {
            this.placeholder.setDisplayedSize(width, height);
          }
          if (this.instance.dispatch("contentResize", {
            content: this,
            width,
            height
          }).defaultPrevented) {
            return;
          }
          setWidthHeight2(this.element, width, height);
          if (this.isImageContent() && !this.isError()) {
            const isInitialSizeUpdate = !this.displayedImageWidth && width;
            this.displayedImageWidth = width;
            this.displayedImageHeight = height;
            if (isInitialSizeUpdate) {
              this.loadImage(false);
            } else {
              this.updateSrcsetSizes();
            }
            if (this.slide) {
              this.instance.dispatch("imageSizeChange", {
                slide: this.slide,
                width,
                height,
                content: this
              });
            }
          }
        }
        /**
         * @returns {boolean} If the content can be zoomed
         */
        isZoomable() {
          return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE2.ERROR, this);
        }
        /**
         * Update image srcset sizes attribute based on width and height
         */
        updateSrcsetSizes() {
          if (!this.isImageContent() || !this.element || !this.data.srcset) {
            return;
          }
          const image = (
            /** @type HTMLImageElement */
            this.element
          );
          const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
          if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
            image.sizes = sizesWidth + "px";
            image.dataset.largestUsedSize = String(sizesWidth);
          }
        }
        /**
         * @returns {boolean} If content should use a placeholder (from msrc by default)
         */
        usePlaceholder() {
          return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
        }
        /**
         * Preload content with lazy-loading param
         */
        lazyLoad() {
          if (this.instance.dispatch("contentLazyLoad", {
            content: this
          }).defaultPrevented) {
            return;
          }
          this.load(true);
        }
        /**
         * @returns {boolean} If placeholder should be kept after content is loaded
         */
        keepPlaceholder() {
          return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
        }
        /**
         * Destroy the content
         */
        destroy() {
          this.hasSlide = false;
          this.slide = void 0;
          if (this.instance.dispatch("contentDestroy", {
            content: this
          }).defaultPrevented) {
            return;
          }
          this.remove();
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = void 0;
          }
          if (this.isImageContent() && this.element) {
            this.element.onload = null;
            this.element.onerror = null;
            this.element = void 0;
          }
        }
        /**
         * Display error message
         */
        displayError() {
          if (this.slide) {
            var _this$instance$option, _this$instance$option2;
            let errorMsgEl = createElement2("pswp__error-msg", "div");
            errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
            errorMsgEl = /** @type {HTMLDivElement} */
            this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
            this.element = createElement2("pswp__content pswp__error-msg-container", "div");
            this.element.appendChild(errorMsgEl);
            this.slide.container.innerText = "";
            this.slide.container.appendChild(this.element);
            this.slide.updateContentSize(true);
            this.removePlaceholder();
          }
        }
        /**
         * Append the content
         */
        append() {
          if (this.isAttached || !this.element) {
            return;
          }
          this.isAttached = true;
          if (this.state === LOAD_STATE2.ERROR) {
            this.displayError();
            return;
          }
          if (this.instance.dispatch("contentAppend", {
            content: this
          }).defaultPrevented) {
            return;
          }
          const supportsDecode = "decode" in this.element;
          if (this.isImageContent()) {
            if (supportsDecode && this.slide && (!this.slide.isActive || isSafari2())) {
              this.isDecoding = true;
              this.element.decode().catch(() => {
              }).finally(() => {
                this.isDecoding = false;
                this.appendImage();
              });
            } else {
              this.appendImage();
            }
          } else if (this.slide && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
          }
        }
        /**
         * Activate the slide,
         * active slide is generally the current one,
         * meaning the user can see it.
         */
        activate() {
          if (this.instance.dispatch("contentActivate", {
            content: this
          }).defaultPrevented || !this.slide) {
            return;
          }
          if (this.isImageContent() && this.isDecoding && !isSafari2()) {
            this.appendImage();
          } else if (this.isError()) {
            this.load(false, true);
          }
          if (this.slide.holderElement) {
            this.slide.holderElement.setAttribute("aria-hidden", "false");
          }
        }
        /**
         * Deactivate the content
         */
        deactivate() {
          this.instance.dispatch("contentDeactivate", {
            content: this
          });
          if (this.slide && this.slide.holderElement) {
            this.slide.holderElement.setAttribute("aria-hidden", "true");
          }
        }
        /**
         * Remove the content from DOM
         */
        remove() {
          this.isAttached = false;
          if (this.instance.dispatch("contentRemove", {
            content: this
          }).defaultPrevented) {
            return;
          }
          if (this.element && this.element.parentNode) {
            this.element.remove();
          }
          if (this.placeholder && this.placeholder.element) {
            this.placeholder.element.remove();
          }
        }
        /**
         * Append the image content to slide container
         */
        appendImage() {
          if (!this.isAttached) {
            return;
          }
          if (this.instance.dispatch("contentAppendImage", {
            content: this
          }).defaultPrevented) {
            return;
          }
          if (this.slide && this.element && !this.element.parentNode) {
            this.slide.container.appendChild(this.element);
          }
          if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
            this.removePlaceholder();
          }
        }
      };
      MIN_SLIDES_TO_CACHE = 5;
      ContentLoader = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
          this._cachedItems = [];
        }
        /**
         * Lazy load nearby slides based on `preload` option.
         *
         * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
         */
        updateLazy(diff) {
          const {
            pswp
          } = this;
          if (pswp.dispatch("lazyLoad").defaultPrevented) {
            return;
          }
          const {
            preload: preload2
          } = pswp.options;
          const isForward = diff === void 0 ? true : diff >= 0;
          let i2;
          for (i2 = 0; i2 <= preload2[1]; i2++) {
            this.loadSlideByIndex(pswp.currIndex + (isForward ? i2 : -i2));
          }
          for (i2 = 1; i2 <= preload2[0]; i2++) {
            this.loadSlideByIndex(pswp.currIndex + (isForward ? -i2 : i2));
          }
        }
        /**
         * @param {number} initialIndex
         */
        loadSlideByIndex(initialIndex) {
          const index = this.pswp.getLoopedIndex(initialIndex);
          let content = this.getContentByIndex(index);
          if (!content) {
            content = lazyLoadSlide2(index, this.pswp);
            if (content) {
              this.addToCache(content);
            }
          }
        }
        /**
         * @param {Slide} slide
         * @returns {Content}
         */
        getContentBySlide(slide2) {
          let content = this.getContentByIndex(slide2.index);
          if (!content) {
            content = this.pswp.createContentFromData(slide2.data, slide2.index);
            this.addToCache(content);
          }
          content.setSlide(slide2);
          return content;
        }
        /**
         * @param {Content} content
         */
        addToCache(content) {
          this.removeByIndex(content.index);
          this._cachedItems.push(content);
          if (this._cachedItems.length > this.limit) {
            const indexToRemove = this._cachedItems.findIndex((item) => {
              return !item.isAttached && !item.hasSlide;
            });
            if (indexToRemove !== -1) {
              const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
              removedItem.destroy();
            }
          }
        }
        /**
         * Removes an image from cache, does not destroy() it, just removes.
         *
         * @param {number} index
         */
        removeByIndex(index) {
          const indexToRemove = this._cachedItems.findIndex((item) => item.index === index);
          if (indexToRemove !== -1) {
            this._cachedItems.splice(indexToRemove, 1);
          }
        }
        /**
         * @param {number} index
         * @returns {Content | undefined}
         */
        getContentByIndex(index) {
          return this._cachedItems.find((content) => content.index === index);
        }
        destroy() {
          this._cachedItems.forEach((content) => content.destroy());
          this._cachedItems = [];
        }
      };
      PhotoSwipeBase2 = class extends Eventable2 {
        /**
         * Get total number of slides
         *
         * @returns {number}
         */
        getNumItems() {
          var _this$options;
          let numItems = 0;
          const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
          if (dataSource && "length" in dataSource) {
            numItems = dataSource.length;
          } else if (dataSource && "gallery" in dataSource) {
            if (!dataSource.items) {
              dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            if (dataSource.items) {
              numItems = dataSource.items.length;
            }
          }
          const event2 = this.dispatch("numItems", {
            dataSource,
            numItems
          });
          return this.applyFilters("numItems", event2.numItems, dataSource);
        }
        /**
         * @param {SlideData} slideData
         * @param {number} index
         * @returns {Content}
         */
        createContentFromData(slideData, index) {
          return new Content2(slideData, this, index);
        }
        /**
         * Get item data by index.
         *
         * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
         * For example, it may contain properties like
         * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
         *
         * @param {number} index
         * @returns {SlideData}
         */
        getItemData(index) {
          var _this$options2;
          const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
          let dataSourceItem = {};
          if (Array.isArray(dataSource)) {
            dataSourceItem = dataSource[index];
          } else if (dataSource && "gallery" in dataSource) {
            if (!dataSource.items) {
              dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
            }
            dataSourceItem = dataSource.items[index];
          }
          let itemData = dataSourceItem;
          if (itemData instanceof Element) {
            itemData = this._domElementToItemData(itemData);
          }
          const event2 = this.dispatch("itemData", {
            itemData: itemData || {},
            index
          });
          return this.applyFilters("itemData", event2.itemData, index);
        }
        /**
         * Get array of gallery DOM elements,
         * based on childSelector and gallery element.
         *
         * @param {HTMLElement} galleryElement
         * @returns {HTMLElement[]}
         */
        _getGalleryDOMElements(galleryElement) {
          var _this$options3, _this$options4;
          if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
            return getElementsFromOption2(this.options.children, this.options.childSelector, galleryElement) || [];
          }
          return [galleryElement];
        }
        /**
         * Converts DOM element to item data object.
         *
         * @param {HTMLElement} element DOM element
         * @returns {SlideData}
         */
        _domElementToItemData(element) {
          const itemData = {
            element
          };
          const linkEl = (
            /** @type {HTMLAnchorElement} */
            element.tagName === "A" ? element : element.querySelector("a")
          );
          if (linkEl) {
            itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
            if (linkEl.dataset.pswpSrcset) {
              itemData.srcset = linkEl.dataset.pswpSrcset;
            }
            itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
            itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
            itemData.w = itemData.width;
            itemData.h = itemData.height;
            if (linkEl.dataset.pswpType) {
              itemData.type = linkEl.dataset.pswpType;
            }
            const thumbnailEl = element.querySelector("img");
            if (thumbnailEl) {
              var _thumbnailEl$getAttri;
              itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
              itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
            }
            if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
              itemData.thumbCropped = true;
            }
          }
          return this.applyFilters("domItemData", itemData, element, linkEl);
        }
        /**
         * Lazy-load by slide data
         *
         * @param {SlideData} itemData Data about the slide
         * @param {number} index
         * @returns {Content} Image that is being decoded or false.
         */
        lazyLoadData(itemData, index) {
          return lazyLoadData2(itemData, this, index);
        }
      };
      MIN_OPACITY = 3e-3;
      Opener = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
          this.pswp = pswp;
          this.isClosed = true;
          this.isOpen = false;
          this.isClosing = false;
          this.isOpening = false;
          this._duration = void 0;
          this._useAnimation = false;
          this._croppedZoom = false;
          this._animateRootOpacity = false;
          this._animateBgOpacity = false;
          this._placeholder = void 0;
          this._opacityElement = void 0;
          this._cropContainer1 = void 0;
          this._cropContainer2 = void 0;
          this._thumbBounds = void 0;
          this._prepareOpen = this._prepareOpen.bind(this);
          pswp.on("firstZoomPan", this._prepareOpen);
        }
        open() {
          this._prepareOpen();
          this._start();
        }
        close() {
          if (this.isClosed || this.isClosing || this.isOpening) {
            return;
          }
          const slide2 = this.pswp.currSlide;
          this.isOpen = false;
          this.isOpening = false;
          this.isClosing = true;
          this._duration = this.pswp.options.hideAnimationDuration;
          if (slide2 && slide2.currZoomLevel * slide2.width >= this.pswp.options.maxWidthToAnimate) {
            this._duration = 0;
          }
          this._applyStartProps();
          setTimeout(() => {
            this._start();
          }, this._croppedZoom ? 30 : 0);
        }
        /** @private */
        _prepareOpen() {
          this.pswp.off("firstZoomPan", this._prepareOpen);
          if (!this.isOpening) {
            const slide2 = this.pswp.currSlide;
            this.isOpening = true;
            this.isClosing = false;
            this._duration = this.pswp.options.showAnimationDuration;
            if (slide2 && slide2.zoomLevels.initial * slide2.width >= this.pswp.options.maxWidthToAnimate) {
              this._duration = 0;
            }
            this._applyStartProps();
          }
        }
        /** @private */
        _applyStartProps() {
          const {
            pswp
          } = this;
          const slide2 = this.pswp.currSlide;
          const {
            options
          } = pswp;
          if (options.showHideAnimationType === "fade") {
            options.showHideOpacity = true;
            this._thumbBounds = void 0;
          } else if (options.showHideAnimationType === "none") {
            options.showHideOpacity = false;
            this._duration = 0;
            this._thumbBounds = void 0;
          } else if (this.isOpening && pswp._initialThumbBounds) {
            this._thumbBounds = pswp._initialThumbBounds;
          } else {
            this._thumbBounds = this.pswp.getThumbBounds();
          }
          this._placeholder = slide2 === null || slide2 === void 0 ? void 0 : slide2.getPlaceholderElement();
          pswp.animations.stopAll();
          this._useAnimation = Boolean(this._duration && this._duration > 50);
          this._animateZoom = Boolean(this._thumbBounds) && (slide2 === null || slide2 === void 0 ? void 0 : slide2.content.usePlaceholder()) && (!this.isClosing || !pswp.mainScroll.isShifted());
          if (!this._animateZoom) {
            this._animateRootOpacity = true;
            if (this.isOpening && slide2) {
              slide2.zoomAndPanToInitial();
              slide2.applyCurrentZoomPan();
            }
          } else {
            var _options$showHideOpac;
            this._animateRootOpacity = (_options$showHideOpac = options.showHideOpacity) !== null && _options$showHideOpac !== void 0 ? _options$showHideOpac : false;
          }
          this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
          this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
          if (!this._useAnimation) {
            this._duration = 0;
            this._animateZoom = false;
            this._animateBgOpacity = false;
            this._animateRootOpacity = true;
            if (this.isOpening) {
              if (pswp.element) {
                pswp.element.style.opacity = String(MIN_OPACITY);
              }
              pswp.applyBgOpacity(1);
            }
            return;
          }
          if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
            var _this$pswp$currSlide;
            this._croppedZoom = true;
            this._cropContainer1 = this.pswp.container;
            this._cropContainer2 = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.holderElement;
            if (pswp.container) {
              pswp.container.style.overflow = "hidden";
              pswp.container.style.width = pswp.viewportSize.x + "px";
            }
          } else {
            this._croppedZoom = false;
          }
          if (this.isOpening) {
            if (this._animateRootOpacity) {
              if (pswp.element) {
                pswp.element.style.opacity = String(MIN_OPACITY);
              }
              pswp.applyBgOpacity(1);
            } else {
              if (this._animateBgOpacity && pswp.bg) {
                pswp.bg.style.opacity = String(MIN_OPACITY);
              }
              if (pswp.element) {
                pswp.element.style.opacity = "1";
              }
            }
            if (this._animateZoom) {
              this._setClosedStateZoomPan();
              if (this._placeholder) {
                this._placeholder.style.willChange = "transform";
                this._placeholder.style.opacity = String(MIN_OPACITY);
              }
            }
          } else if (this.isClosing) {
            if (pswp.mainScroll.itemHolders[0]) {
              pswp.mainScroll.itemHolders[0].el.style.display = "none";
            }
            if (pswp.mainScroll.itemHolders[2]) {
              pswp.mainScroll.itemHolders[2].el.style.display = "none";
            }
            if (this._croppedZoom) {
              if (pswp.mainScroll.x !== 0) {
                pswp.mainScroll.resetPosition();
                pswp.mainScroll.resize();
              }
            }
          }
        }
        /** @private */
        _start() {
          if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") {
            new Promise((resolve) => {
              let decoded = false;
              let isDelaying = true;
              decodeImage(
                /** @type {HTMLImageElement} */
                this._placeholder
              ).finally(() => {
                decoded = true;
                if (!isDelaying) {
                  resolve(true);
                }
              });
              setTimeout(() => {
                isDelaying = false;
                if (decoded) {
                  resolve(true);
                }
              }, 50);
              setTimeout(resolve, 250);
            }).finally(() => this._initiate());
          } else {
            this._initiate();
          }
        }
        /** @private */
        _initiate() {
          var _this$pswp$element, _this$pswp$element2;
          (_this$pswp$element = this.pswp.element) === null || _this$pswp$element === void 0 || _this$pswp$element.style.setProperty("--pswp-transition-duration", this._duration + "ms");
          this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
          this.pswp.dispatch(
            /** @type {'initialZoomIn' | 'initialZoomOut'} */
            "initialZoom" + (this.isOpening ? "In" : "Out")
          );
          (_this$pswp$element2 = this.pswp.element) === null || _this$pswp$element2 === void 0 || _this$pswp$element2.classList.toggle("pswp--ui-visible", this.isOpening);
          if (this.isOpening) {
            if (this._placeholder) {
              this._placeholder.style.opacity = "1";
            }
            this._animateToOpenState();
          } else if (this.isClosing) {
            this._animateToClosedState();
          }
          if (!this._useAnimation) {
            this._onAnimationComplete();
          }
        }
        /** @private */
        _onAnimationComplete() {
          const {
            pswp
          } = this;
          this.isOpen = this.isOpening;
          this.isClosed = this.isClosing;
          this.isOpening = false;
          this.isClosing = false;
          pswp.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
          pswp.dispatch(
            /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
            "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")
          );
          if (this.isClosed) {
            pswp.destroy();
          } else if (this.isOpen) {
            var _pswp$currSlide;
            if (this._animateZoom && pswp.container) {
              pswp.container.style.overflow = "visible";
              pswp.container.style.width = "100%";
            }
            (_pswp$currSlide = pswp.currSlide) === null || _pswp$currSlide === void 0 || _pswp$currSlide.applyCurrentZoomPan();
          }
        }
        /** @private */
        _animateToOpenState() {
          const {
            pswp
          } = this;
          if (this._animateZoom) {
            if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
              this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
              this._animateTo(this._cropContainer2, "transform", "none");
            }
            if (pswp.currSlide) {
              pswp.currSlide.zoomAndPanToInitial();
              this._animateTo(pswp.currSlide.container, "transform", pswp.currSlide.getCurrentTransform());
            }
          }
          if (this._animateBgOpacity && pswp.bg) {
            this._animateTo(pswp.bg, "opacity", String(pswp.options.bgOpacity));
          }
          if (this._animateRootOpacity && pswp.element) {
            this._animateTo(pswp.element, "opacity", "1");
          }
        }
        /** @private */
        _animateToClosedState() {
          const {
            pswp
          } = this;
          if (this._animateZoom) {
            this._setClosedStateZoomPan(true);
          }
          if (this._animateBgOpacity && pswp.bgOpacity > 0.01 && pswp.bg) {
            this._animateTo(pswp.bg, "opacity", "0");
          }
          if (this._animateRootOpacity && pswp.element) {
            this._animateTo(pswp.element, "opacity", "0");
          }
        }
        /**
         * @private
         * @param {boolean} [animate]
         */
        _setClosedStateZoomPan(animate) {
          if (!this._thumbBounds) return;
          const {
            pswp
          } = this;
          const {
            innerRect
          } = this._thumbBounds;
          const {
            currSlide,
            viewportSize
          } = pswp;
          if (this._croppedZoom && innerRect && this._cropContainer1 && this._cropContainer2) {
            const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
            const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
            const containerTwoPanX = viewportSize.x - innerRect.w;
            const containerTwoPanY = viewportSize.y - innerRect.h;
            if (animate) {
              this._animateTo(this._cropContainer1, "transform", toTransformString2(containerOnePanX, containerOnePanY));
              this._animateTo(this._cropContainer2, "transform", toTransformString2(containerTwoPanX, containerTwoPanY));
            } else {
              setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
              setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
            }
          }
          if (currSlide) {
            equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
            currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
            if (animate) {
              this._animateTo(currSlide.container, "transform", currSlide.getCurrentTransform());
            } else {
              currSlide.applyCurrentZoomPan();
            }
          }
        }
        /**
         * @private
         * @param {HTMLElement} target
         * @param {'transform' | 'opacity'} prop
         * @param {string} propValue
         */
        _animateTo(target, prop, propValue) {
          if (!this._duration) {
            target.style[prop] = propValue;
            return;
          }
          const {
            animations
          } = this.pswp;
          const animProps = {
            duration: this._duration,
            easing: this.pswp.options.easing,
            onComplete: () => {
              if (!animations.activeAnimations.length) {
                this._onAnimationComplete();
              }
            },
            target
          };
          animProps[prop] = propValue;
          animations.startTransition(animProps);
        }
      };
      defaultOptions = {
        allowPanToNext: true,
        spacing: 0.1,
        loop: true,
        pinchToClose: true,
        closeOnVerticalDrag: true,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        zoomAnimationDuration: 333,
        escKey: true,
        arrowKeys: true,
        trapFocus: true,
        returnFocus: true,
        maxWidthToAnimate: 4e3,
        clickToCloseNonZoomable: true,
        imageClickAction: "zoom-or-close",
        bgClickAction: "close",
        tapAction: "toggle-controls",
        doubleTapAction: "zoom",
        indexIndicatorSep: " / ",
        preloaderDelay: 2e3,
        bgOpacity: 0.8,
        index: 0,
        errorMsg: "The image cannot be loaded",
        preload: [1, 2],
        easing: "cubic-bezier(.4,0,.22,1)"
      };
      PhotoSwipe = class extends PhotoSwipeBase2 {
        /**
         * @param {PhotoSwipeOptions} [options]
         */
        constructor(options) {
          super();
          this.options = this._prepareOptions(options || {});
          this.offset = {
            x: 0,
            y: 0
          };
          this._prevViewportSize = {
            x: 0,
            y: 0
          };
          this.viewportSize = {
            x: 0,
            y: 0
          };
          this.bgOpacity = 1;
          this.currIndex = 0;
          this.potentialIndex = 0;
          this.isOpen = false;
          this.isDestroying = false;
          this.hasMouse = false;
          this._initialItemData = {};
          this._initialThumbBounds = void 0;
          this.topBar = void 0;
          this.element = void 0;
          this.template = void 0;
          this.container = void 0;
          this.scrollWrap = void 0;
          this.currSlide = void 0;
          this.events = new DOMEvents();
          this.animations = new Animations();
          this.mainScroll = new MainScroll(this);
          this.gestures = new Gestures(this);
          this.opener = new Opener(this);
          this.keyboard = new Keyboard(this);
          this.contentLoader = new ContentLoader(this);
        }
        /** @returns {boolean} */
        init() {
          if (this.isOpen || this.isDestroying) {
            return false;
          }
          this.isOpen = true;
          this.dispatch("init");
          this.dispatch("beforeOpen");
          this._createMainStructure();
          let rootClasses = "pswp--open";
          if (this.gestures.supportsTouch) {
            rootClasses += " pswp--touch";
          }
          if (this.options.mainClass) {
            rootClasses += " " + this.options.mainClass;
          }
          if (this.element) {
            this.element.className += " " + rootClasses;
          }
          this.currIndex = this.options.index || 0;
          this.potentialIndex = this.currIndex;
          this.dispatch("firstUpdate");
          this.scrollWheel = new ScrollWheel(this);
          if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
            this.currIndex = 0;
          }
          if (!this.gestures.supportsTouch) {
            this.mouseDetected();
          }
          this.updateSize();
          this.offset.y = window.pageYOffset;
          this._initialItemData = this.getItemData(this.currIndex);
          this.dispatch("gettingData", {
            index: this.currIndex,
            data: this._initialItemData,
            slide: void 0
          });
          this._initialThumbBounds = this.getThumbBounds();
          this.dispatch("initialLayout");
          this.on("openingAnimationEnd", () => {
            const {
              itemHolders
            } = this.mainScroll;
            if (itemHolders[0]) {
              itemHolders[0].el.style.display = "block";
              this.setContent(itemHolders[0], this.currIndex - 1);
            }
            if (itemHolders[2]) {
              itemHolders[2].el.style.display = "block";
              this.setContent(itemHolders[2], this.currIndex + 1);
            }
            this.appendHeavy();
            this.contentLoader.updateLazy();
            this.events.add(window, "resize", this._handlePageResize.bind(this));
            this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
            this.dispatch("bindEvents");
          });
          if (this.mainScroll.itemHolders[1]) {
            this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
          }
          this.dispatch("change");
          this.opener.open();
          this.dispatch("afterInit");
          return true;
        }
        /**
         * Get looped slide index
         * (for example, -1 will return the last slide)
         *
         * @param {number} index
         * @returns {number}
         */
        getLoopedIndex(index) {
          const numSlides = this.getNumItems();
          if (this.options.loop) {
            if (index > numSlides - 1) {
              index -= numSlides;
            }
            if (index < 0) {
              index += numSlides;
            }
          }
          return clamp(index, 0, numSlides - 1);
        }
        appendHeavy() {
          this.mainScroll.itemHolders.forEach((itemHolder) => {
            var _itemHolder$slide;
            (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.appendHeavy();
          });
        }
        /**
         * Change the slide
         * @param {number} index New index
         */
        goTo(index) {
          this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
        }
        /**
         * Go to the next slide.
         */
        next() {
          this.goTo(this.potentialIndex + 1);
        }
        /**
         * Go to the previous slide.
         */
        prev() {
          this.goTo(this.potentialIndex - 1);
        }
        /**
         * @see slide/slide.js zoomTo
         *
         * @param {Parameters<Slide['zoomTo']>} args
         */
        zoomTo(...args) {
          var _this$currSlide;
          (_this$currSlide = this.currSlide) === null || _this$currSlide === void 0 || _this$currSlide.zoomTo(...args);
        }
        /**
         * @see slide/slide.js toggleZoom
         */
        toggleZoom() {
          var _this$currSlide2;
          (_this$currSlide2 = this.currSlide) === null || _this$currSlide2 === void 0 || _this$currSlide2.toggleZoom();
        }
        /**
         * Close the gallery.
         * After closing transition ends - destroy it
         */
        close() {
          if (!this.opener.isOpen || this.isDestroying) {
            return;
          }
          this.isDestroying = true;
          this.dispatch("close");
          this.events.removeAll();
          this.opener.close();
        }
        /**
         * Destroys the gallery:
         * - instantly closes the gallery
         * - unbinds events,
         * - cleans intervals and timeouts
         * - removes elements from DOM
         */
        destroy() {
          var _this$element;
          if (!this.isDestroying) {
            this.options.showHideAnimationType = "none";
            this.close();
            return;
          }
          this.dispatch("destroy");
          this._listeners = {};
          if (this.scrollWrap) {
            this.scrollWrap.ontouchmove = null;
            this.scrollWrap.ontouchend = null;
          }
          (_this$element = this.element) === null || _this$element === void 0 || _this$element.remove();
          this.mainScroll.itemHolders.forEach((itemHolder) => {
            var _itemHolder$slide2;
            (_itemHolder$slide2 = itemHolder.slide) === null || _itemHolder$slide2 === void 0 || _itemHolder$slide2.destroy();
          });
          this.contentLoader.destroy();
          this.events.removeAll();
        }
        /**
         * Refresh/reload content of a slide by its index
         *
         * @param {number} slideIndex
         */
        refreshSlideContent(slideIndex) {
          this.contentLoader.removeByIndex(slideIndex);
          this.mainScroll.itemHolders.forEach((itemHolder, i2) => {
            var _this$currSlide$index, _this$currSlide3;
            let potentialHolderIndex = ((_this$currSlide$index = (_this$currSlide3 = this.currSlide) === null || _this$currSlide3 === void 0 ? void 0 : _this$currSlide3.index) !== null && _this$currSlide$index !== void 0 ? _this$currSlide$index : 0) - 1 + i2;
            if (this.canLoop()) {
              potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
            }
            if (potentialHolderIndex === slideIndex) {
              this.setContent(itemHolder, slideIndex, true);
              if (i2 === 1) {
                var _itemHolder$slide3;
                this.currSlide = itemHolder.slide;
                (_itemHolder$slide3 = itemHolder.slide) === null || _itemHolder$slide3 === void 0 || _itemHolder$slide3.setIsActive(true);
              }
            }
          });
          this.dispatch("change");
        }
        /**
         * Set slide content
         *
         * @param {ItemHolder} holder mainScroll.itemHolders array item
         * @param {number} index Slide index
         * @param {boolean} [force] If content should be set even if index wasn't changed
         */
        setContent(holder, index, force) {
          if (this.canLoop()) {
            index = this.getLoopedIndex(index);
          }
          if (holder.slide) {
            if (holder.slide.index === index && !force) {
              return;
            }
            holder.slide.destroy();
            holder.slide = void 0;
          }
          if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
            return;
          }
          const itemData = this.getItemData(index);
          holder.slide = new Slide(itemData, index, this);
          if (index === this.currIndex) {
            this.currSlide = holder.slide;
          }
          holder.slide.append(holder.el);
        }
        /** @returns {Point} */
        getViewportCenterPoint() {
          return {
            x: this.viewportSize.x / 2,
            y: this.viewportSize.y / 2
          };
        }
        /**
         * Update size of all elements.
         * Executed on init and on page resize.
         *
         * @param {boolean} [force] Update size even if size of viewport was not changed.
         */
        updateSize(force) {
          if (this.isDestroying) {
            return;
          }
          const newViewportSize = getViewportSize2(this.options, this);
          if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
            return;
          }
          equalizePoints(this._prevViewportSize, newViewportSize);
          this.dispatch("beforeResize");
          equalizePoints(this.viewportSize, this._prevViewportSize);
          this._updatePageScrollOffset();
          this.dispatch("viewportSize");
          this.mainScroll.resize(this.opener.isOpen);
          if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) {
            this.mouseDetected();
          }
          this.dispatch("resize");
        }
        /**
         * @param {number} opacity
         */
        applyBgOpacity(opacity) {
          this.bgOpacity = Math.max(opacity, 0);
          if (this.bg) {
            this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
          }
        }
        /**
         * Whether mouse is detected
         */
        mouseDetected() {
          if (!this.hasMouse) {
            var _this$element2;
            this.hasMouse = true;
            (_this$element2 = this.element) === null || _this$element2 === void 0 || _this$element2.classList.add("pswp--has_mouse");
          }
        }
        /**
         * Page resize event handler
         *
         * @private
         */
        _handlePageResize() {
          this.updateSize();
          if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            setTimeout(() => {
              this.updateSize();
            }, 500);
          }
        }
        /**
         * Page scroll offset is used
         * to get correct coordinates
         * relative to PhotoSwipe viewport.
         *
         * @private
         */
        _updatePageScrollOffset() {
          this.setScrollOffset(0, window.pageYOffset);
        }
        /**
         * @param {number} x
         * @param {number} y
         */
        setScrollOffset(x2, y2) {
          this.offset.x = x2;
          this.offset.y = y2;
          this.dispatch("updateScrollOffset");
        }
        /**
         * Create main HTML structure of PhotoSwipe,
         * and add it to DOM
         *
         * @private
         */
        _createMainStructure() {
          this.element = createElement2("pswp", "div");
          this.element.setAttribute("tabindex", "-1");
          this.element.setAttribute("role", "dialog");
          this.template = this.element;
          this.bg = createElement2("pswp__bg", "div", this.element);
          this.scrollWrap = createElement2("pswp__scroll-wrap", "section", this.element);
          this.container = createElement2("pswp__container", "div", this.scrollWrap);
          this.scrollWrap.setAttribute("aria-roledescription", "carousel");
          this.container.setAttribute("aria-live", "off");
          this.container.setAttribute("id", "pswp__items");
          this.mainScroll.appendHolders();
          this.ui = new UI(this);
          this.ui.init();
          (this.options.appendToEl || document.body).appendChild(this.element);
        }
        /**
         * Get position and dimensions of small thumbnail
         *   {x:,y:,w:}
         *
         * Height is optional (calculated based on the large image)
         *
         * @returns {Bounds | undefined}
         */
        getThumbBounds() {
          return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
        }
        /**
         * If the PhotoSwipe can have continuous loop
         * @returns Boolean
         */
        canLoop() {
          return this.options.loop && this.getNumItems() > 2;
        }
        /**
         * @private
         * @param {PhotoSwipeOptions} options
         * @returns {PreparedPhotoSwipeOptions}
         */
        _prepareOptions(options) {
          if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
            options.showHideAnimationType = "none";
            options.zoomAnimationDuration = 0;
          }
          return __spreadValues(__spreadValues({}, defaultOptions), options);
        }
      };
    }
  });

  // node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/plyr/dist/plyr.min.js"(exports2, module2) {
      "object" == typeof navigator && function(e2, t2) {
        "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t2() : "function" == typeof define && define.amd ? define("Plyr", t2) : (e2 = "undefined" != typeof globalThis ? globalThis : e2 || self).Plyr = t2();
      }(exports2, function() {
        "use strict";
        function e2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, t5 || "default");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t5 ? String : Number)(e5);
            }(e4, "string");
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        function t2(e3, t3) {
          for (var i3 = 0; i3 < t3.length; i3++) {
            var s3 = t3[i3];
            s3.enumerable = s3.enumerable || false, s3.configurable = true, "value" in s3 && (s3.writable = true), Object.defineProperty(e3, s3.key, s3);
          }
        }
        function i2(e3, t3, i3) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        function s2(e3, t3) {
          var i3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var s3 = Object.getOwnPropertySymbols(e3);
            t3 && (s3 = s3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), i3.push.apply(i3, s3);
          }
          return i3;
        }
        function n2(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? s2(Object(n3), true).forEach(function(t4) {
              i2(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : s2(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        var a2 = { addCSS: true, thumbWidth: 15, watch: true };
        var l2 = function(e3) {
          return null != e3 ? e3.constructor : null;
        }, r2 = function(e3, t3) {
          return !!(e3 && t3 && e3 instanceof t3);
        }, o2 = function(e3) {
          return null == e3;
        }, c2 = function(e3) {
          return l2(e3) === Object;
        }, u2 = function(e3) {
          return l2(e3) === String;
        }, h2 = function(e3) {
          return Array.isArray(e3);
        }, d2 = function(e3) {
          return r2(e3, NodeList);
        }, m2 = { nullOrUndefined: o2, object: c2, number: function(e3) {
          return l2(e3) === Number && !Number.isNaN(e3);
        }, string: u2, boolean: function(e3) {
          return l2(e3) === Boolean;
        }, function: function(e3) {
          return l2(e3) === Function;
        }, array: h2, nodeList: d2, element: function(e3) {
          return r2(e3, Element);
        }, event: function(e3) {
          return r2(e3, Event);
        }, empty: function(e3) {
          return o2(e3) || (u2(e3) || h2(e3) || d2(e3)) && !e3.length || c2(e3) && !Object.keys(e3).length;
        } };
        function p2(e3, t3) {
          if (1 > t3) {
            var i3 = function(e4) {
              var t4 = "".concat(e4).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t4 ? Math.max(0, (t4[1] ? t4[1].length : 0) - (t4[2] ? +t4[2] : 0)) : 0;
            }(t3);
            return parseFloat(e3.toFixed(i3));
          }
          return Math.round(e3 / t3) * t3;
        }
        var g2 = function() {
          function e3(t3, i3) {
            (function(e4, t4) {
              if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            })(this, e3), m2.element(t3) ? this.element = t3 : m2.string(t3) && (this.element = document.querySelector(t3)), m2.element(this.element) && m2.empty(this.element.rangeTouch) && (this.config = n2({}, a2, {}, i3), this.init());
          }
          return function(e4, i3, s3) {
            i3 && t2(e4.prototype, i3), s3 && t2(e4, s3);
          }(e3, [{ key: "init", value: function() {
            e3.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e3.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e4) {
            var t3 = this, i3 = e4 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e5) {
              t3.element[i3](e5, function(e6) {
                return t3.set(e6);
              }, false);
            });
          } }, { key: "get", value: function(t3) {
            if (!e3.enabled || !m2.event(t3)) return null;
            var i3, s3 = t3.target, n3 = t3.changedTouches[0], a3 = parseFloat(s3.getAttribute("min")) || 0, l3 = parseFloat(s3.getAttribute("max")) || 100, r3 = parseFloat(s3.getAttribute("step")) || 1, o3 = s3.getBoundingClientRect(), c3 = 100 / o3.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i3 = 100 / o3.width * (n3.clientX - o3.left)) ? i3 = 0 : 100 < i3 && (i3 = 100), 50 > i3 ? i3 -= (100 - 2 * i3) * c3 : 50 < i3 && (i3 += 2 * (i3 - 50) * c3), a3 + p2(i3 / 100 * (l3 - a3), r3);
          } }, { key: "set", value: function(t3) {
            e3.enabled && m2.event(t3) && !t3.target.disabled && (t3.preventDefault(), t3.target.value = this.get(t3), function(e4, t4) {
              if (e4 && t4) {
                var i3 = new Event(t4, { bubbles: true });
                e4.dispatchEvent(i3);
              }
            }(t3.target, "touchend" === t3.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t3) {
            var i3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s3 = null;
            if (m2.empty(t3) || m2.string(t3) ? s3 = Array.from(document.querySelectorAll(m2.string(t3) ? t3 : 'input[type="range"]')) : m2.element(t3) ? s3 = [t3] : m2.nodeList(t3) ? s3 = Array.from(t3) : m2.array(t3) && (s3 = t3.filter(m2.element)), m2.empty(s3)) return null;
            var l3 = n2({}, a2, {}, i3);
            if (m2.string(t3) && l3.watch) {
              var r3 = new MutationObserver(function(i4) {
                Array.from(i4).forEach(function(i5) {
                  Array.from(i5.addedNodes).forEach(function(i6) {
                    m2.element(i6) && function(e4, t4) {
                      return (function() {
                        return Array.from(document.querySelectorAll(t4)).includes(this);
                      }).call(e4, t4);
                    }(i6, t3) && new e3(i6, l3);
                  });
                });
              });
              r3.observe(document.body, { childList: true, subtree: true });
            }
            return s3.map(function(t4) {
              return new e3(t4, i3);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e3;
        }();
        const f2 = (e3) => null != e3 ? e3.constructor : null, y2 = (e3, t3) => Boolean(e3 && t3 && e3 instanceof t3), b2 = (e3) => null == e3, v2 = (e3) => f2(e3) === Object, w2 = (e3) => f2(e3) === String, T2 = (e3) => "function" == typeof e3, k2 = (e3) => Array.isArray(e3), C2 = (e3) => y2(e3, NodeList), A2 = (e3) => b2(e3) || (w2(e3) || k2(e3) || C2(e3)) && !e3.length || v2(e3) && !Object.keys(e3).length;
        var S2 = { nullOrUndefined: b2, object: v2, number: (e3) => f2(e3) === Number && !Number.isNaN(e3), string: w2, boolean: (e3) => f2(e3) === Boolean, function: T2, array: k2, weakMap: (e3) => y2(e3, WeakMap), nodeList: C2, element: (e3) => null !== e3 && "object" == typeof e3 && 1 === e3.nodeType && "object" == typeof e3.style && "object" == typeof e3.ownerDocument, textNode: (e3) => f2(e3) === Text, event: (e3) => y2(e3, Event), keyboardEvent: (e3) => y2(e3, KeyboardEvent), cue: (e3) => y2(e3, window.TextTrackCue) || y2(e3, window.VTTCue), track: (e3) => y2(e3, TextTrack) || !b2(e3) && w2(e3.kind), promise: (e3) => y2(e3, Promise) && T2(e3.then), url: (e3) => {
          if (y2(e3, window.URL)) return true;
          if (!w2(e3)) return false;
          let t3 = e3;
          e3.startsWith("http://") && e3.startsWith("https://") || (t3 = "http://".concat(e3));
          try {
            return !A2(new URL(t3).hostname);
          } catch (e4) {
            return false;
          }
        }, empty: A2 };
        const E2 = (() => {
          const e3 = document.createElement("span"), t3 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i3 = Object.keys(t3).find((t4) => void 0 !== e3.style[t4]);
          return !!S2.string(i3) && t3[i3];
        })();
        function P2(e3, t3) {
          setTimeout(() => {
            try {
              e3.hidden = true, e3.offsetHeight, e3.hidden = false;
            } catch (e4) {
            }
          }, t3);
        }
        var M2 = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N2(e3, t3) {
          return t3.split(".").reduce((e4, t4) => e4 && e4[t4], e3);
        }
        function x2(e3 = {}, ...t3) {
          if (!t3.length) return e3;
          const i3 = t3.shift();
          return S2.object(i3) ? (Object.keys(i3).forEach((t4) => {
            S2.object(i3[t4]) ? (Object.keys(e3).includes(t4) || Object.assign(e3, { [t4]: {} }), x2(e3[t4], i3[t4])) : Object.assign(e3, { [t4]: i3[t4] });
          }), x2(e3, ...t3)) : e3;
        }
        function L2(e3, t3) {
          const i3 = e3.length ? e3 : [e3];
          Array.from(i3).reverse().forEach((e4, i4) => {
            const s3 = i4 > 0 ? t3.cloneNode(true) : t3, n3 = e4.parentNode, a3 = e4.nextSibling;
            s3.appendChild(e4), a3 ? n3.insertBefore(s3, a3) : n3.appendChild(s3);
          });
        }
        function I2(e3, t3) {
          S2.element(e3) && !S2.empty(t3) && Object.entries(t3).filter(([, e4]) => !S2.nullOrUndefined(e4)).forEach(([t4, i3]) => e3.setAttribute(t4, i3));
        }
        function $2(e3, t3, i3) {
          const s3 = document.createElement(e3);
          return S2.object(t3) && I2(s3, t3), S2.string(i3) && (s3.innerText = i3), s3;
        }
        function _2(e3, t3, i3, s3) {
          S2.element(t3) && t3.appendChild($2(e3, i3, s3));
        }
        function O2(e3) {
          S2.nodeList(e3) || S2.array(e3) ? Array.from(e3).forEach(O2) : S2.element(e3) && S2.element(e3.parentNode) && e3.parentNode.removeChild(e3);
        }
        function j2(e3) {
          if (!S2.element(e3)) return;
          let { length: t3 } = e3.childNodes;
          for (; t3 > 0; ) e3.removeChild(e3.lastChild), t3 -= 1;
        }
        function q2(e3, t3) {
          return S2.element(t3) && S2.element(t3.parentNode) && S2.element(e3) ? (t3.parentNode.replaceChild(e3, t3), e3) : null;
        }
        function D2(e3, t3) {
          if (!S2.string(e3) || S2.empty(e3)) return {};
          const i3 = {}, s3 = x2({}, t3);
          return e3.split(",").forEach((e4) => {
            const t4 = e4.trim(), n3 = t4.replace(".", ""), a3 = t4.replace(/[[\]]/g, "").split("="), [l3] = a3, r3 = a3.length > 1 ? a3[1].replace(/["']/g, "") : "";
            switch (t4.charAt(0)) {
              case ".":
                S2.string(s3.class) ? i3.class = "".concat(s3.class, " ").concat(n3) : i3.class = n3;
                break;
              case "#":
                i3.id = t4.replace("#", "");
                break;
              case "[":
                i3[l3] = r3;
            }
          }), x2(s3, i3);
        }
        function H2(e3, t3) {
          if (!S2.element(e3)) return;
          let i3 = t3;
          S2.boolean(i3) || (i3 = !e3.hidden), e3.hidden = i3;
        }
        function R2(e3, t3, i3) {
          if (S2.nodeList(e3)) return Array.from(e3).map((e4) => R2(e4, t3, i3));
          if (S2.element(e3)) {
            let s3 = "toggle";
            return void 0 !== i3 && (s3 = i3 ? "add" : "remove"), e3.classList[s3](t3), e3.classList.contains(t3);
          }
          return false;
        }
        function F2(e3, t3) {
          return S2.element(e3) && e3.classList.contains(t3);
        }
        function V2(e3, t3) {
          const { prototype: i3 } = Element;
          return (i3.matches || i3.webkitMatchesSelector || i3.mozMatchesSelector || i3.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t3)).includes(this);
          }).call(e3, t3);
        }
        function U2(e3) {
          return this.elements.container.querySelectorAll(e3);
        }
        function B2(e3) {
          return this.elements.container.querySelector(e3);
        }
        function W2(e3 = null, t3 = false) {
          S2.element(e3) && e3.focus({ preventScroll: true, focusVisible: t3 });
        }
        const z2 = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K2 = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e3, t3) {
          const i3 = K2[e3] || "html5" !== t3;
          return { api: i3, ui: i3 && K2.rangeInput };
        }, pip: !(M2.isIPhone || !S2.function($2("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $2("video").disablePictureInPicture)), airplay: S2.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e3) {
          if (S2.empty(e3)) return false;
          const [t3] = e3.split("/");
          let i3 = e3;
          if (!this.isHTML5 || t3 !== this.type) return false;
          Object.keys(z2).includes(i3) && (i3 += '; codecs="'.concat(z2[e3], '"'));
          try {
            return Boolean(i3 && this.media.canPlayType(i3).replace(/no/, ""));
          } catch (e4) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e3 = document.createElement("input");
          return e3.type = "range", "range" === e3.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E2, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y2 = (() => {
          let e3 = false;
          try {
            const t3 = Object.defineProperty({}, "passive", { get: () => (e3 = true, null) });
            window.addEventListener("test", null, t3), window.removeEventListener("test", null, t3);
          } catch (e4) {
          }
          return e3;
        })();
        function Q2(e3, t3, i3, s3 = false, n3 = true, a3 = false) {
          if (!e3 || !("addEventListener" in e3) || S2.empty(t3) || !S2.function(i3)) return;
          const l3 = t3.split(" ");
          let r3 = a3;
          Y2 && (r3 = { passive: n3, capture: a3 }), l3.forEach((t4) => {
            this && this.eventListeners && s3 && this.eventListeners.push({ element: e3, type: t4, callback: i3, options: r3 }), e3[s3 ? "addEventListener" : "removeEventListener"](t4, i3, r3);
          });
        }
        function X2(e3, t3 = "", i3, s3 = true, n3 = false) {
          Q2.call(this, e3, t3, i3, true, s3, n3);
        }
        function J2(e3, t3 = "", i3, s3 = true, n3 = false) {
          Q2.call(this, e3, t3, i3, false, s3, n3);
        }
        function G2(e3, t3 = "", i3, s3 = true, n3 = false) {
          const a3 = (...l3) => {
            J2(e3, t3, a3, s3, n3), i3.apply(this, l3);
          };
          Q2.call(this, e3, t3, a3, true, s3, n3);
        }
        function Z2(e3, t3 = "", i3 = false, s3 = {}) {
          if (!S2.element(e3) || S2.empty(t3)) return;
          const n3 = new CustomEvent(t3, { bubbles: i3, detail: __spreadProps(__spreadValues({}, s3), { plyr: this }) });
          e3.dispatchEvent(n3);
        }
        function ee2() {
          this && this.eventListeners && (this.eventListeners.forEach((e3) => {
            const { element: t3, type: i3, callback: s3, options: n3 } = e3;
            t3.removeEventListener(i3, s3, n3);
          }), this.eventListeners = []);
        }
        function te2() {
          return new Promise((e3) => this.ready ? setTimeout(e3, 0) : X2.call(this, this.elements.container, "ready", e3)).then(() => {
          });
        }
        function ie2(e3) {
          S2.promise(e3) && e3.then(null, () => {
          });
        }
        function se2(e3) {
          return S2.array(e3) ? e3.filter((t3, i3) => e3.indexOf(t3) === i3) : e3;
        }
        function ne2(e3, t3) {
          return S2.array(e3) && e3.length ? e3.reduce((e4, i3) => Math.abs(i3 - t3) < Math.abs(e4 - t3) ? i3 : e4) : null;
        }
        function ae2(e3) {
          return !(!window || !window.CSS) && window.CSS.supports(e3);
        }
        const le2 = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e3, [t3, i3]) => __spreadProps(__spreadValues({}, e3), { [t3 / i3]: [t3, i3] }), {});
        function re2(e3) {
          if (!(S2.array(e3) || S2.string(e3) && e3.includes(":"))) return false;
          return (S2.array(e3) ? e3 : e3.split(":")).map(Number).every(S2.number);
        }
        function oe2(e3) {
          if (!S2.array(e3) || !e3.every(S2.number)) return null;
          const [t3, i3] = e3, s3 = (e4, t4) => 0 === t4 ? e4 : s3(t4, e4 % t4), n3 = s3(t3, i3);
          return [t3 / n3, i3 / n3];
        }
        function ce2(e3) {
          const t3 = (e4) => re2(e4) ? e4.split(":").map(Number) : null;
          let i3 = t3(e3);
          if (null === i3 && (i3 = t3(this.config.ratio)), null === i3 && !S2.empty(this.embed) && S2.array(this.embed.ratio) && ({ ratio: i3 } = this.embed), null === i3 && this.isHTML5) {
            const { videoWidth: e4, videoHeight: t4 } = this.media;
            i3 = [e4, t4];
          }
          return oe2(i3);
        }
        function ue2(e3) {
          if (!this.isVideo) return {};
          const { wrapper: t3 } = this.elements, i3 = ce2.call(this, e3);
          if (!S2.array(i3)) return {};
          const [s3, n3] = oe2(i3), a3 = 100 / s3 * n3;
          if (ae2("aspect-ratio: ".concat(s3, "/").concat(n3)) ? t3.style.aspectRatio = "".concat(s3, "/").concat(n3) : t3.style.paddingBottom = "".concat(a3, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e4 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i4 = (e4 - a3) / (e4 / 50);
            this.fullscreen.active ? t3.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(i4, "%)");
          } else this.isHTML5 && t3.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a3, ratio: i3 };
        }
        function he2(e3, t3, i3 = 0.05) {
          const s3 = e3 / t3, n3 = ne2(Object.keys(le2), s3);
          return Math.abs(n3 - s3) <= i3 ? le2[n3] : [e3, t3];
        }
        const de2 = { getSources() {
          if (!this.isHTML5) return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e3) => {
            const t3 = e3.getAttribute("type");
            return !!S2.empty(t3) || K2.mime.call(this, t3);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de2.getSources.call(this).map((e3) => Number(e3.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5) return;
          const e3 = this;
          e3.options.speed = e3.config.speed.options, S2.empty(this.config.ratio) || ue2.call(e3), Object.defineProperty(e3.media, "quality", { get() {
            const t3 = de2.getSources.call(e3).find((t4) => t4.getAttribute("src") === e3.source);
            return t3 && Number(t3.getAttribute("size"));
          }, set(t3) {
            if (e3.quality !== t3) {
              if (e3.config.quality.forced && S2.function(e3.config.quality.onChange)) e3.config.quality.onChange(t3);
              else {
                const i3 = de2.getSources.call(e3).find((e4) => Number(e4.getAttribute("size")) === t3);
                if (!i3) return;
                const { currentTime: s3, paused: n3, preload: a3, readyState: l3, playbackRate: r3 } = e3.media;
                e3.media.src = i3.getAttribute("src"), ("none" !== a3 || l3) && (e3.once("loadedmetadata", () => {
                  e3.speed = r3, e3.currentTime = s3, n3 || ie2(e3.play());
                }), e3.media.load());
              }
              Z2.call(e3, e3.media, "qualitychange", false, { quality: t3 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O2(de2.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me2(e3, ...t3) {
          return S2.empty(e3) ? e3 : e3.toString().replace(/{(\d+)}/g, (e4, i3) => t3[i3].toString());
        }
        const pe2 = (e3 = "", t3 = "", i3 = "") => e3.replace(new RegExp(t3.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i3.toString()), ge2 = (e3 = "") => e3.toString().replace(/\w\S*/g, (e4) => e4.charAt(0).toUpperCase() + e4.slice(1).toLowerCase());
        function fe2(e3 = "") {
          let t3 = e3.toString();
          return t3 = function(e4 = "") {
            let t4 = e4.toString();
            return t4 = pe2(t4, "-", " "), t4 = pe2(t4, "_", " "), t4 = ge2(t4), pe2(t4, " ", "");
          }(t3), t3.charAt(0).toLowerCase() + t3.slice(1);
        }
        function ye2(e3) {
          const t3 = document.createElement("div");
          return t3.appendChild(e3), t3.innerHTML;
        }
        const be2 = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve2 = { get(e3 = "", t3 = {}) {
          if (S2.empty(e3) || S2.empty(t3)) return "";
          let i3 = N2(t3.i18n, e3);
          if (S2.empty(i3)) return Object.keys(be2).includes(e3) ? be2[e3] : "";
          const s3 = { "{seektime}": t3.seekTime, "{title}": t3.title };
          return Object.entries(s3).forEach(([e4, t4]) => {
            i3 = pe2(i3, e4, t4);
          }), i3;
        } };
        class we2 {
          constructor(t3) {
            e2(this, "get", (e3) => {
              if (!we2.supported || !this.enabled) return null;
              const t4 = window.localStorage.getItem(this.key);
              if (S2.empty(t4)) return null;
              const i3 = JSON.parse(t4);
              return S2.string(e3) && e3.length ? i3[e3] : i3;
            }), e2(this, "set", (e3) => {
              if (!we2.supported || !this.enabled) return;
              if (!S2.object(e3)) return;
              let t4 = this.get();
              S2.empty(t4) && (t4 = {}), x2(t4, e3);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t4));
              } catch (e4) {
              }
            }), this.enabled = t3.config.storage.enabled, this.key = t3.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window)) return false;
              const e3 = "___test";
              return window.localStorage.setItem(e3, e3), window.localStorage.removeItem(e3), true;
            } catch (e3) {
              return false;
            }
          }
        }
        function Te2(e3, t3 = "text") {
          return new Promise((i3, s3) => {
            try {
              const s4 = new XMLHttpRequest();
              if (!("withCredentials" in s4)) return;
              s4.addEventListener("load", () => {
                if ("text" === t3) try {
                  i3(JSON.parse(s4.responseText));
                } catch (e4) {
                  i3(s4.responseText);
                }
                else i3(s4.response);
              }), s4.addEventListener("error", () => {
                throw new Error(s4.status);
              }), s4.open("GET", e3, true), s4.responseType = t3, s4.send();
            } catch (e4) {
              s3(e4);
            }
          });
        }
        function ke2(e3, t3) {
          if (!S2.string(e3)) return;
          const i3 = "cache", s3 = S2.string(t3);
          let n3 = false;
          const a3 = () => null !== document.getElementById(t3), l3 = (e4, t4) => {
            e4.innerHTML = t4, s3 && a3() || document.body.insertAdjacentElement("afterbegin", e4);
          };
          if (!s3 || !a3()) {
            const a4 = we2.supported, r3 = document.createElement("div");
            if (r3.setAttribute("hidden", ""), s3 && r3.setAttribute("id", t3), a4) {
              const e4 = window.localStorage.getItem("".concat(i3, "-").concat(t3));
              if (n3 = null !== e4, n3) {
                const t4 = JSON.parse(e4);
                l3(r3, t4.content);
              }
            }
            Te2(e3).then((e4) => {
              if (!S2.empty(e4)) {
                if (a4) try {
                  window.localStorage.setItem("".concat(i3, "-").concat(t3), JSON.stringify({ content: e4 }));
                } catch (e5) {
                }
                l3(r3, e4);
              }
            }).catch(() => {
            });
          }
        }
        const Ce2 = (e3) => Math.trunc(e3 / 60 / 60 % 60, 10), Ae2 = (e3) => Math.trunc(e3 / 60 % 60, 10), Se2 = (e3) => Math.trunc(e3 % 60, 10);
        function Ee2(e3 = 0, t3 = false, i3 = false) {
          if (!S2.number(e3)) return Ee2(void 0, t3, i3);
          const s3 = (e4) => "0".concat(e4).slice(-2);
          let n3 = Ce2(e3);
          const a3 = Ae2(e3), l3 = Se2(e3);
          return n3 = t3 || n3 > 0 ? "".concat(n3, ":") : "", "".concat(i3 && e3 > 0 ? "-" : "").concat(n3).concat(s3(a3), ":").concat(s3(l3));
        }
        const Pe2 = { getIconUrl() {
          const e3 = new URL(this.config.iconUrl, window.location), t3 = window.location.host ? window.location.host : window.top.location.host, i3 = e3.host !== t3 || M2.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i3 };
        }, findElements() {
          try {
            return this.elements.controls = B2.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U2.call(this, this.config.selectors.buttons.play), pause: B2.call(this, this.config.selectors.buttons.pause), restart: B2.call(this, this.config.selectors.buttons.restart), rewind: B2.call(this, this.config.selectors.buttons.rewind), fastForward: B2.call(this, this.config.selectors.buttons.fastForward), mute: B2.call(this, this.config.selectors.buttons.mute), pip: B2.call(this, this.config.selectors.buttons.pip), airplay: B2.call(this, this.config.selectors.buttons.airplay), settings: B2.call(this, this.config.selectors.buttons.settings), captions: B2.call(this, this.config.selectors.buttons.captions), fullscreen: B2.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B2.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B2.call(this, this.config.selectors.inputs.seek), volume: B2.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B2.call(this, this.config.selectors.display.buffer), currentTime: B2.call(this, this.config.selectors.display.currentTime), duration: B2.call(this, this.config.selectors.display.duration) }, S2.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), true;
          } catch (e3) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e3), this.toggleNativeControls(true), false;
          }
        }, createIcon(e3, t3) {
          const i3 = "http://www.w3.org/2000/svg", s3 = Pe2.getIconUrl.call(this), n3 = "".concat(s3.cors ? "" : s3.url, "#").concat(this.config.iconPrefix), a3 = document.createElementNS(i3, "svg");
          I2(a3, x2(t3, { "aria-hidden": "true", focusable: "false" }));
          const l3 = document.createElementNS(i3, "use"), r3 = "".concat(n3, "-").concat(e3);
          return "href" in l3 && l3.setAttributeNS("http://www.w3.org/1999/xlink", "href", r3), l3.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r3), a3.appendChild(l3), a3;
        }, createLabel(e3, t3 = {}) {
          const i3 = ve2.get(e3, this.config);
          return $2("span", __spreadProps(__spreadValues({}, t3), { class: [t3.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), i3);
        }, createBadge(e3) {
          if (S2.empty(e3)) return null;
          const t3 = $2("span", { class: this.config.classNames.menu.value });
          return t3.appendChild($2("span", { class: this.config.classNames.menu.badge }, e3)), t3;
        }, createButton(e3, t3) {
          const i3 = x2({}, t3);
          let s3 = fe2(e3);
          const n3 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e4) => {
            Object.keys(i3).includes(e4) && (n3[e4] = i3[e4], delete i3[e4]);
          }), "button" !== n3.element || Object.keys(i3).includes("type") || (i3.type = "button"), Object.keys(i3).includes("class") ? i3.class.split(" ").some((e4) => e4 === this.config.classNames.control) || x2(i3, { class: "".concat(i3.class, " ").concat(this.config.classNames.control) }) : i3.class = this.config.classNames.control, e3) {
            case "play":
              n3.toggle = true, n3.label = "play", n3.labelPressed = "pause", n3.icon = "play", n3.iconPressed = "pause";
              break;
            case "mute":
              n3.toggle = true, n3.label = "mute", n3.labelPressed = "unmute", n3.icon = "volume", n3.iconPressed = "muted";
              break;
            case "captions":
              n3.toggle = true, n3.label = "enableCaptions", n3.labelPressed = "disableCaptions", n3.icon = "captions-off", n3.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n3.toggle = true, n3.label = "enterFullscreen", n3.labelPressed = "exitFullscreen", n3.icon = "enter-fullscreen", n3.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i3.class += " ".concat(this.config.classNames.control, "--overlaid"), s3 = "play", n3.label = "play", n3.icon = "play";
              break;
            default:
              S2.empty(n3.label) && (n3.label = s3), S2.empty(n3.icon) && (n3.icon = e3);
          }
          const a3 = $2(n3.element);
          return n3.toggle ? (a3.appendChild(Pe2.createIcon.call(this, n3.iconPressed, { class: "icon--pressed" })), a3.appendChild(Pe2.createIcon.call(this, n3.icon, { class: "icon--not-pressed" })), a3.appendChild(Pe2.createLabel.call(this, n3.labelPressed, { class: "label--pressed" })), a3.appendChild(Pe2.createLabel.call(this, n3.label, { class: "label--not-pressed" }))) : (a3.appendChild(Pe2.createIcon.call(this, n3.icon)), a3.appendChild(Pe2.createLabel.call(this, n3.label))), x2(i3, D2(this.config.selectors.buttons[s3], i3)), I2(a3, i3), "play" === s3 ? (S2.array(this.elements.buttons[s3]) || (this.elements.buttons[s3] = []), this.elements.buttons[s3].push(a3)) : this.elements.buttons[s3] = a3, a3;
        }, createRange(e3, t3) {
          const i3 = $2("input", x2(D2(this.config.selectors.inputs[e3]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve2.get(e3, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t3));
          return this.elements.inputs[e3] = i3, Pe2.updateRangeFill.call(this, i3), g2.setup(i3), i3;
        }, createProgress(e3, t3) {
          const i3 = $2("progress", x2(D2(this.config.selectors.display[e3]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t3));
          if ("volume" !== e3) {
            i3.appendChild($2("span", null, "0"));
            const t4 = { played: "played", buffer: "buffered" }[e3], s3 = t4 ? ve2.get(t4, this.config) : "";
            i3.innerText = "% ".concat(s3.toLowerCase());
          }
          return this.elements.display[e3] = i3, i3;
        }, createTime(e3, t3) {
          const i3 = D2(this.config.selectors.display[e3], t3), s3 = $2("div", x2(i3, { class: "".concat(i3.class ? i3.class : "", " ").concat(this.config.classNames.display.time, " ").trim(), "aria-label": ve2.get(e3, this.config), role: "timer" }), "00:00");
          return this.elements.display[e3] = s3, s3;
        }, bindMenuItemShortcuts(e3, t3) {
          X2.call(this, e3, "keydown keyup", (i3) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i3.key)) return;
            if (i3.preventDefault(), i3.stopPropagation(), "keydown" === i3.type) return;
            const s3 = V2(e3, '[role="menuitemradio"]');
            if (!s3 && [" ", "ArrowRight"].includes(i3.key)) Pe2.showMenuPanel.call(this, t3, true);
            else {
              let t4;
              " " !== i3.key && ("ArrowDown" === i3.key || s3 && "ArrowRight" === i3.key ? (t4 = e3.nextElementSibling, S2.element(t4) || (t4 = e3.parentNode.firstElementChild)) : (t4 = e3.previousElementSibling, S2.element(t4) || (t4 = e3.parentNode.lastElementChild)), W2.call(this, t4, true));
            }
          }, false), X2.call(this, e3, "keyup", (e4) => {
            "Return" === e4.key && Pe2.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e3, list: t3, type: i3, title: s3, badge: n3 = null, checked: a3 = false }) {
          const l3 = D2(this.config.selectors.inputs[i3]), r3 = $2("button", x2(l3, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(l3.class ? l3.class : "").trim(), "aria-checked": a3, value: e3 })), o3 = $2("span");
          o3.innerHTML = s3, S2.element(n3) && o3.appendChild(n3), r3.appendChild(o3), Object.defineProperty(r3, "checked", { enumerable: true, get: () => "true" === r3.getAttribute("aria-checked"), set(e4) {
            e4 && Array.from(r3.parentNode.children).filter((e5) => V2(e5, '[role="menuitemradio"]')).forEach((e5) => e5.setAttribute("aria-checked", "false")), r3.setAttribute("aria-checked", e4 ? "true" : "false");
          } }), this.listeners.bind(r3, "click keyup", (t4) => {
            if (!S2.keyboardEvent(t4) || " " === t4.key) {
              switch (t4.preventDefault(), t4.stopPropagation(), r3.checked = true, i3) {
                case "language":
                  this.currentTrack = Number(e3);
                  break;
                case "quality":
                  this.quality = e3;
                  break;
                case "speed":
                  this.speed = parseFloat(e3);
              }
              Pe2.showMenuPanel.call(this, "home", S2.keyboardEvent(t4));
            }
          }, i3, false), Pe2.bindMenuItemShortcuts.call(this, r3, i3), t3.appendChild(r3);
        }, formatTime(e3 = 0, t3 = false) {
          if (!S2.number(e3)) return e3;
          return Ee2(e3, Ce2(this.duration) > 0, t3);
        }, updateTimeDisplay(e3 = null, t3 = 0, i3 = false) {
          S2.element(e3) && S2.number(t3) && (e3.innerText = Pe2.formatTime(t3, i3));
        }, updateVolume() {
          this.supported.ui && (S2.element(this.elements.inputs.volume) && Pe2.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S2.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e3, t3 = 0) {
          S2.element(e3) && (e3.value = t3, Pe2.updateRangeFill.call(this, e3));
        }, updateProgress(e3) {
          if (!this.supported.ui || !S2.event(e3)) return;
          let t3 = 0;
          const i3 = (e4, t4) => {
            const i4 = S2.number(t4) ? t4 : 0, s4 = S2.element(e4) ? e4 : this.elements.display.buffer;
            if (S2.element(s4)) {
              s4.value = i4;
              const e5 = s4.getElementsByTagName("span")[0];
              S2.element(e5) && (e5.childNodes[0].nodeValue = i4);
            }
          };
          if (e3) switch (e3.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              s3 = this.currentTime, n3 = this.duration, t3 = 0 === s3 || 0 === n3 || Number.isNaN(s3) || Number.isNaN(n3) ? 0 : (s3 / n3 * 100).toFixed(2), "timeupdate" === e3.type && Pe2.setRange.call(this, this.elements.inputs.seek, t3);
              break;
            case "playing":
            case "progress":
              i3(this.elements.display.buffer, 100 * this.buffered);
          }
          var s3, n3;
        }, updateRangeFill(e3) {
          const t3 = S2.event(e3) ? e3.target : e3;
          if (S2.element(t3) && "range" === t3.getAttribute("type")) {
            if (V2(t3, this.config.selectors.inputs.seek)) {
              t3.setAttribute("aria-valuenow", this.currentTime);
              const e4 = Pe2.formatTime(this.currentTime), i3 = Pe2.formatTime(this.duration), s3 = ve2.get("seekLabel", this.config);
              t3.setAttribute("aria-valuetext", s3.replace("{currentTime}", e4).replace("{duration}", i3));
            } else if (V2(t3, this.config.selectors.inputs.volume)) {
              const e4 = 100 * t3.value;
              t3.setAttribute("aria-valuenow", e4), t3.setAttribute("aria-valuetext", "".concat(e4.toFixed(1), "%"));
            } else t3.setAttribute("aria-valuenow", t3.value);
            (M2.isWebKit || M2.isIPadOS) && t3.style.setProperty("--value", t3.value / t3.max * 100 + "%");
          }
        }, updateSeekTooltip(e3) {
          var t3, i3;
          if (!this.config.tooltips.seek || !S2.element(this.elements.inputs.seek) || !S2.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
          const s3 = this.elements.display.seekTooltip, n3 = "".concat(this.config.classNames.tooltip, "--visible"), a3 = (e4) => R2(s3, n3, e4);
          if (this.touch) return void a3(false);
          let l3 = 0;
          const r3 = this.elements.progress.getBoundingClientRect();
          if (S2.event(e3)) l3 = 100 / r3.width * (e3.pageX - r3.left);
          else {
            if (!F2(s3, n3)) return;
            l3 = parseFloat(s3.style.left, 10);
          }
          l3 < 0 ? l3 = 0 : l3 > 100 && (l3 = 100);
          const o3 = this.duration / 100 * l3;
          s3.innerText = Pe2.formatTime(o3);
          const c3 = null === (t3 = this.config.markers) || void 0 === t3 || null === (i3 = t3.points) || void 0 === i3 ? void 0 : i3.find(({ time: e4 }) => e4 === Math.round(o3));
          c3 && s3.insertAdjacentHTML("afterbegin", "".concat(c3.label, "<br>")), s3.style.left = "".concat(l3, "%"), S2.event(e3) && ["mouseenter", "mouseleave"].includes(e3.type) && a3("mouseenter" === e3.type);
        }, timeUpdate(e3) {
          const t3 = !S2.element(this.elements.display.duration) && this.config.invertTime;
          Pe2.updateTimeDisplay.call(this, this.elements.display.currentTime, t3 ? this.duration - this.currentTime : this.currentTime, t3), e3 && "timeupdate" === e3.type && this.media.seeking || Pe2.updateProgress.call(this, e3);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
          if (this.duration >= __pow(2, 32)) return H2(this.elements.display.currentTime, true), void H2(this.elements.progress, true);
          S2.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e3 = S2.element(this.elements.display.duration);
          !e3 && this.config.displayDuration && this.paused && Pe2.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e3 && Pe2.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe2.setMarkers.call(this), Pe2.updateSeekTooltip.call(this);
        }, toggleMenuButton(e3, t3) {
          H2(this.elements.settings.buttons[e3], !t3);
        }, updateSetting(e3, t3, i3) {
          const s3 = this.elements.settings.panels[e3];
          let n3 = null, a3 = t3;
          if ("captions" === e3) n3 = this.currentTrack;
          else {
            if (n3 = S2.empty(i3) ? this[e3] : i3, S2.empty(n3) && (n3 = this.config[e3].default), !S2.empty(this.options[e3]) && !this.options[e3].includes(n3)) return void this.debug.warn("Unsupported value of '".concat(n3, "' for ").concat(e3));
            if (!this.config[e3].options.includes(n3)) return void this.debug.warn("Disabled value of '".concat(n3, "' for ").concat(e3));
          }
          if (S2.element(a3) || (a3 = s3 && s3.querySelector('[role="menu"]')), !S2.element(a3)) return;
          this.elements.settings.buttons[e3].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Pe2.getLabel.call(this, e3, n3);
          const l3 = a3 && a3.querySelector('[value="'.concat(n3, '"]'));
          S2.element(l3) && (l3.checked = true);
        }, getLabel(e3, t3) {
          switch (e3) {
            case "speed":
              return 1 === t3 ? ve2.get("normal", this.config) : "".concat(t3, "&times;");
            case "quality":
              if (S2.number(t3)) {
                const e4 = ve2.get("qualityLabel.".concat(t3), this.config);
                return e4.length ? e4 : "".concat(t3, "p");
              }
              return ge2(t3);
            case "captions":
              return xe2.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e3) {
          if (!S2.element(this.elements.settings.panels.quality)) return;
          const t3 = "quality", i3 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S2.array(e3) && (this.options.quality = se2(e3).filter((e4) => this.config.quality.options.includes(e4)));
          const s3 = !S2.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe2.toggleMenuButton.call(this, t3, s3), j2(i3), Pe2.checkMenu.call(this), !s3) return;
          const n3 = (e4) => {
            const t4 = ve2.get("qualityBadge.".concat(e4), this.config);
            return t4.length ? Pe2.createBadge.call(this, t4) : null;
          };
          this.options.quality.sort((e4, t4) => {
            const i4 = this.config.quality.options;
            return i4.indexOf(e4) > i4.indexOf(t4) ? 1 : -1;
          }).forEach((e4) => {
            Pe2.createMenuItem.call(this, { value: e4, list: i3, type: t3, title: Pe2.getLabel.call(this, "quality", e4), badge: n3(e4) });
          }), Pe2.updateSetting.call(this, t3, i3);
        }, setCaptionsMenu() {
          if (!S2.element(this.elements.settings.panels.captions)) return;
          const e3 = "captions", t3 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i3 = xe2.getTracks.call(this), s3 = Boolean(i3.length);
          if (Pe2.toggleMenuButton.call(this, e3, s3), j2(t3), Pe2.checkMenu.call(this), !s3) return;
          const n3 = i3.map((e4, i4) => ({ value: i4, checked: this.captions.toggled && this.currentTrack === i4, title: xe2.getLabel.call(this, e4), badge: e4.language && Pe2.createBadge.call(this, e4.language.toUpperCase()), list: t3, type: "language" }));
          n3.unshift({ value: -1, checked: !this.captions.toggled, title: ve2.get("disabled", this.config), list: t3, type: "language" }), n3.forEach(Pe2.createMenuItem.bind(this)), Pe2.updateSetting.call(this, e3, t3);
        }, setSpeedMenu() {
          if (!S2.element(this.elements.settings.panels.speed)) return;
          const e3 = "speed", t3 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e4) => e4 >= this.minimumSpeed && e4 <= this.maximumSpeed);
          const i3 = !S2.empty(this.options.speed) && this.options.speed.length > 1;
          Pe2.toggleMenuButton.call(this, e3, i3), j2(t3), Pe2.checkMenu.call(this), i3 && (this.options.speed.forEach((i4) => {
            Pe2.createMenuItem.call(this, { value: i4, list: t3, type: e3, title: Pe2.getLabel.call(this, "speed", i4) });
          }), Pe2.updateSetting.call(this, e3, t3));
        }, checkMenu() {
          const { buttons: e3 } = this.elements.settings, t3 = !S2.empty(e3) && Object.values(e3).some((e4) => !e4.hidden);
          H2(this.elements.settings.menu, !t3);
        }, focusFirstMenuItem(e3, t3 = false) {
          if (this.elements.settings.popup.hidden) return;
          let i3 = e3;
          S2.element(i3) || (i3 = Object.values(this.elements.settings.panels).find((e4) => !e4.hidden));
          const s3 = i3.querySelector('[role^="menuitem"]');
          W2.call(this, s3, t3);
        }, toggleMenu(e3) {
          const { popup: t3 } = this.elements.settings, i3 = this.elements.buttons.settings;
          if (!S2.element(t3) || !S2.element(i3)) return;
          const { hidden: s3 } = t3;
          let n3 = s3;
          if (S2.boolean(e3)) n3 = e3;
          else if (S2.keyboardEvent(e3) && "Escape" === e3.key) n3 = false;
          else if (S2.event(e3)) {
            const s4 = S2.function(e3.composedPath) ? e3.composedPath()[0] : e3.target, a3 = t3.contains(s4);
            if (a3 || !a3 && e3.target !== i3 && n3) return;
          }
          i3.setAttribute("aria-expanded", n3), H2(t3, !n3), R2(this.elements.container, this.config.classNames.menu.open, n3), n3 && S2.keyboardEvent(e3) ? Pe2.focusFirstMenuItem.call(this, null, true) : n3 || s3 || W2.call(this, i3, S2.keyboardEvent(e3));
        }, getMenuSize(e3) {
          const t3 = e3.cloneNode(true);
          t3.style.position = "absolute", t3.style.opacity = 0, t3.removeAttribute("hidden"), e3.parentNode.appendChild(t3);
          const i3 = t3.scrollWidth, s3 = t3.scrollHeight;
          return O2(t3), { width: i3, height: s3 };
        }, showMenuPanel(e3 = "", t3 = false) {
          const i3 = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e3));
          if (!S2.element(i3)) return;
          const s3 = i3.parentNode, n3 = Array.from(s3.children).find((e4) => !e4.hidden);
          if (K2.transitions && !K2.reducedMotion) {
            s3.style.width = "".concat(n3.scrollWidth, "px"), s3.style.height = "".concat(n3.scrollHeight, "px");
            const e4 = Pe2.getMenuSize.call(this, i3), t4 = (e5) => {
              e5.target === s3 && ["width", "height"].includes(e5.propertyName) && (s3.style.width = "", s3.style.height = "", J2.call(this, s3, E2, t4));
            };
            X2.call(this, s3, E2, t4), s3.style.width = "".concat(e4.width, "px"), s3.style.height = "".concat(e4.height, "px");
          }
          H2(n3, true), H2(i3, false), Pe2.focusFirstMenuItem.call(this, i3, t3);
        }, setDownloadUrl() {
          const e3 = this.elements.buttons.download;
          S2.element(e3) && e3.setAttribute("href", this.download);
        }, create(e3) {
          const { bindMenuItemShortcuts: t3, createButton: i3, createProgress: s3, createRange: n3, createTime: a3, setQualityMenu: l3, setSpeedMenu: r3, showMenuPanel: o3 } = Pe2;
          this.elements.controls = null, S2.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i3.call(this, "play-large"));
          const c3 = $2("div", D2(this.config.selectors.controls.wrapper));
          this.elements.controls = c3;
          const u3 = { class: "plyr__controls__item" };
          return se2(S2.array(this.config.controls) ? this.config.controls : []).forEach((l4) => {
            if ("restart" === l4 && c3.appendChild(i3.call(this, "restart", u3)), "rewind" === l4 && c3.appendChild(i3.call(this, "rewind", u3)), "play" === l4 && c3.appendChild(i3.call(this, "play", u3)), "fast-forward" === l4 && c3.appendChild(i3.call(this, "fast-forward", u3)), "progress" === l4) {
              const t4 = $2("div", { class: "".concat(u3.class, " plyr__progress__container") }), i4 = $2("div", D2(this.config.selectors.progress));
              if (i4.appendChild(n3.call(this, "seek", { id: "plyr-seek-".concat(e3.id) })), i4.appendChild(s3.call(this, "buffer")), this.config.tooltips.seek) {
                const e4 = $2("span", { class: this.config.classNames.tooltip }, "00:00");
                i4.appendChild(e4), this.elements.display.seekTooltip = e4;
              }
              this.elements.progress = i4, t4.appendChild(this.elements.progress), c3.appendChild(t4);
            }
            if ("current-time" === l4 && c3.appendChild(a3.call(this, "currentTime", u3)), "duration" === l4 && c3.appendChild(a3.call(this, "duration", u3)), "mute" === l4 || "volume" === l4) {
              let { volume: t4 } = this.elements;
              if (S2.element(t4) && c3.contains(t4) || (t4 = $2("div", x2({}, u3, { class: "".concat(u3.class, " plyr__volume").trim() })), this.elements.volume = t4, c3.appendChild(t4)), "mute" === l4 && t4.appendChild(i3.call(this, "mute")), "volume" === l4 && !M2.isIos && !M2.isIPadOS) {
                const i4 = { max: 1, step: 0.05, value: this.config.volume };
                t4.appendChild(n3.call(this, "volume", x2(i4, { id: "plyr-volume-".concat(e3.id) })));
              }
            }
            if ("captions" === l4 && c3.appendChild(i3.call(this, "captions", u3)), "settings" === l4 && !S2.empty(this.config.settings)) {
              const s4 = $2("div", x2({}, u3, { class: "".concat(u3.class, " plyr__menu").trim(), hidden: "" }));
              s4.appendChild(i3.call(this, "settings", { "aria-haspopup": true, "aria-controls": "plyr-settings-".concat(e3.id), "aria-expanded": false }));
              const n4 = $2("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e3.id), hidden: "" }), a4 = $2("div"), l5 = $2("div", { id: "plyr-settings-".concat(e3.id, "-home") }), r4 = $2("div", { role: "menu" });
              l5.appendChild(r4), a4.appendChild(l5), this.elements.settings.panels.home = l5, this.config.settings.forEach((i4) => {
                const s5 = $2("button", x2(D2(this.config.selectors.buttons.settings), { type: "button", class: "".concat(this.config.classNames.control, " ").concat(this.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t3.call(this, s5, i4), X2.call(this, s5, "click", () => {
                  o3.call(this, i4, false);
                });
                const n5 = $2("span", null, ve2.get(i4, this.config)), l6 = $2("span", { class: this.config.classNames.menu.value });
                l6.innerHTML = e3[i4], n5.appendChild(l6), s5.appendChild(n5), r4.appendChild(s5);
                const c4 = $2("div", { id: "plyr-settings-".concat(e3.id, "-").concat(i4), hidden: "" }), u4 = $2("button", { type: "button", class: "".concat(this.config.classNames.control, " ").concat(this.config.classNames.control, "--back") });
                u4.appendChild($2("span", { "aria-hidden": true }, ve2.get(i4, this.config))), u4.appendChild($2("span", { class: this.config.classNames.hidden }, ve2.get("menuBack", this.config))), X2.call(this, c4, "keydown", (e4) => {
                  "ArrowLeft" === e4.key && (e4.preventDefault(), e4.stopPropagation(), o3.call(this, "home", true));
                }, false), X2.call(this, u4, "click", () => {
                  o3.call(this, "home", false);
                }), c4.appendChild(u4), c4.appendChild($2("div", { role: "menu" })), a4.appendChild(c4), this.elements.settings.buttons[i4] = s5, this.elements.settings.panels[i4] = c4;
              }), n4.appendChild(a4), s4.appendChild(n4), c3.appendChild(s4), this.elements.settings.popup = n4, this.elements.settings.menu = s4;
            }
            if ("pip" === l4 && K2.pip && c3.appendChild(i3.call(this, "pip", u3)), "airplay" === l4 && K2.airplay && c3.appendChild(i3.call(this, "airplay", u3)), "download" === l4) {
              const e4 = x2({}, u3, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e4.download = "");
              const { download: t4 } = this.config.urls;
              !S2.url(t4) && this.isEmbed && x2(e4, { icon: "logo-".concat(this.provider), label: this.provider }), c3.appendChild(i3.call(this, "download", e4));
            }
            "fullscreen" === l4 && c3.appendChild(i3.call(this, "fullscreen", u3));
          }), this.isHTML5 && l3.call(this, de2.getQualityOptions.call(this)), r3.call(this), c3;
        }, inject() {
          if (this.config.loadSprite) {
            const e4 = Pe2.getIconUrl.call(this);
            e4.cors && ke2(e4.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e3 = null;
          this.elements.controls = null;
          const t3 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i3 = true;
          S2.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t3)), this.config.controls || (this.config.controls = []), S2.element(this.config.controls) || S2.string(this.config.controls) ? e3 = this.config.controls : (e3 = Pe2.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe2.getLabel.call(this) }), i3 = false);
          let s3;
          i3 && S2.string(this.config.controls) && (e3 = ((e4) => {
            let i4 = e4;
            return Object.entries(t3).forEach(([e5, t4]) => {
              i4 = pe2(i4, "{".concat(e5, "}"), t4);
            }), i4;
          })(e3)), S2.string(this.config.selectors.controls.container) && (s3 = document.querySelector(this.config.selectors.controls.container)), S2.element(s3) || (s3 = this.elements.container);
          if (s3[S2.element(e3) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e3), S2.element(this.elements.controls) || Pe2.findElements.call(this), !S2.empty(this.elements.buttons)) {
            const e4 = (e5) => {
              const t4 = this.config.classNames.controlPressed;
              e5.setAttribute("aria-pressed", "false"), Object.defineProperty(e5, "pressed", { configurable: true, enumerable: true, get: () => F2(e5, t4), set(i4 = false) {
                R2(e5, t4, i4), e5.setAttribute("aria-pressed", i4 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t4) => {
              S2.array(t4) || S2.nodeList(t4) ? Array.from(t4).filter(Boolean).forEach(e4) : e4(t4);
            });
          }
          if (M2.isEdge && P2(s3), this.config.tooltips.controls) {
            const { classNames: e4, selectors: t4 } = this.config, i4 = "".concat(t4.controls.wrapper, " ").concat(t4.labels, " .").concat(e4.hidden), s4 = U2.call(this, i4);
            Array.from(s4).forEach((e5) => {
              R2(e5, this.config.classNames.hidden, false), R2(e5, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e3) {
          }
        }, setMarkers() {
          var e3, t3;
          if (!this.duration || this.elements.markers) return;
          const i3 = null === (e3 = this.config.markers) || void 0 === e3 || null === (t3 = e3.points) || void 0 === t3 ? void 0 : t3.filter(({ time: e4 }) => e4 > 0 && e4 < this.duration);
          if (null == i3 || !i3.length) return;
          const s3 = document.createDocumentFragment(), n3 = document.createDocumentFragment();
          let a3 = null;
          const l3 = "".concat(this.config.classNames.tooltip, "--visible"), r3 = (e4) => R2(a3, l3, e4);
          i3.forEach((e4) => {
            const t4 = $2("span", { class: this.config.classNames.marker }, ""), i4 = e4.time / this.duration * 100 + "%";
            a3 && (t4.addEventListener("mouseenter", () => {
              e4.label || (a3.style.left = i4, a3.innerHTML = e4.label, r3(true));
            }), t4.addEventListener("mouseleave", () => {
              r3(false);
            })), t4.addEventListener("click", () => {
              this.currentTime = e4.time;
            }), t4.style.left = i4, n3.appendChild(t4);
          }), s3.appendChild(n3), this.config.tooltips.seek || (a3 = $2("span", { class: this.config.classNames.tooltip }, ""), s3.appendChild(a3)), this.elements.markers = { points: n3, tip: a3 }, this.elements.progress.appendChild(s3);
        } };
        function Me2(e3, t3 = true) {
          let i3 = e3;
          if (t3) {
            const e4 = document.createElement("a");
            e4.href = i3, i3 = e4.href;
          }
          try {
            return new URL(i3);
          } catch (e4) {
            return null;
          }
        }
        function Ne2(e3) {
          const t3 = new URLSearchParams();
          return S2.object(e3) && Object.entries(e3).forEach(([e4, i3]) => {
            t3.set(e4, i3);
          }), t3;
        }
        const xe2 = { setup() {
          if (!this.supported.ui) return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K2.textTracks) return void (S2.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe2.setCaptionsMenu.call(this));
          var e3, t3;
          if (S2.element(this.elements.captions) || (this.elements.captions = $2("div", D2(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e3 = this.elements.captions, t3 = this.elements.wrapper, S2.element(e3) && S2.element(t3) && t3.parentNode.insertBefore(e3, t3.nextSibling)), M2.isIE && window.URL) {
            const e4 = this.media.querySelectorAll("track");
            Array.from(e4).forEach((e5) => {
              const t4 = e5.getAttribute("src"), i4 = Me2(t4);
              null !== i4 && i4.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i4.protocol) && Te2(t4, "blob").then((t5) => {
                e5.setAttribute("src", window.URL.createObjectURL(t5));
              }).catch(() => {
                O2(e5);
              });
            });
          }
          const i3 = se2((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e4) => e4.split("-")[0]));
          let s3 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s3 && ([s3] = i3);
          let n3 = this.storage.get("captions");
          if (S2.boolean(n3) || ({ active: n3 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n3, language: s3, languages: i3 }), this.isHTML5) {
            const e4 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X2.call(this, this.media.textTracks, e4, xe2.update.bind(this));
          }
          setTimeout(xe2.update.bind(this), 0);
        }, update() {
          const e3 = xe2.getTracks.call(this, true), { active: t3, language: i3, meta: s3, currentTrackNode: n3 } = this.captions, a3 = Boolean(e3.find((e4) => e4.language === i3));
          this.isHTML5 && this.isVideo && e3.filter((e4) => !s3.get(e4)).forEach((e4) => {
            this.debug.log("Track added", e4), s3.set(e4, { default: "showing" === e4.mode }), "showing" === e4.mode && (e4.mode = "hidden"), X2.call(this, e4, "cuechange", () => xe2.updateCues.call(this));
          }), (a3 && this.language !== i3 || !e3.includes(n3)) && (xe2.setLanguage.call(this, i3), xe2.toggle.call(this, t3 && a3)), this.elements && R2(this.elements.container, this.config.classNames.captions.enabled, !S2.empty(e3)), S2.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe2.setCaptionsMenu.call(this);
        }, toggle(e3, t3 = true) {
          if (!this.supported.ui) return;
          const { toggled: i3 } = this.captions, s3 = this.config.classNames.captions.active, n3 = S2.nullOrUndefined(e3) ? !i3 : e3;
          if (n3 !== i3) {
            if (t3 || (this.captions.active = n3, this.storage.set({ captions: n3 })), !this.language && n3 && !t3) {
              const e4 = xe2.getTracks.call(this), t4 = xe2.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t4.language, void xe2.set.call(this, e4.indexOf(t4));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n3), R2(this.elements.container, s3, n3), this.captions.toggled = n3, Pe2.updateSetting.call(this, "captions"), Z2.call(this, this.media, n3 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n3 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e3, t3 = true) {
          const i3 = xe2.getTracks.call(this);
          if (-1 !== e3) if (S2.number(e3)) if (e3 in i3) {
            if (this.captions.currentTrack !== e3) {
              this.captions.currentTrack = e3;
              const s3 = i3[e3], { language: n3 } = s3 || {};
              this.captions.currentTrackNode = s3, Pe2.updateSetting.call(this, "captions"), t3 || (this.captions.language = n3, this.storage.set({ language: n3 })), this.isVimeo && this.embed.enableTextTrack(n3), Z2.call(this, this.media, "languagechange");
            }
            xe2.toggle.call(this, true, t3), this.isHTML5 && this.isVideo && xe2.updateCues.call(this);
          } else this.debug.warn("Track not found", e3);
          else this.debug.warn("Invalid caption argument", e3);
          else xe2.toggle.call(this, false, t3);
        }, setLanguage(e3, t3 = true) {
          if (!S2.string(e3)) return void this.debug.warn("Invalid language argument", e3);
          const i3 = e3.toLowerCase();
          this.captions.language = i3;
          const s3 = xe2.getTracks.call(this), n3 = xe2.findTrack.call(this, [i3]);
          xe2.set.call(this, s3.indexOf(n3), t3);
        }, getTracks(e3 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t3) => !this.isHTML5 || e3 || this.captions.meta.has(t3)).filter((e4) => ["captions", "subtitles"].includes(e4.kind));
        }, findTrack(e3, t3 = false) {
          const i3 = xe2.getTracks.call(this), s3 = (e4) => Number((this.captions.meta.get(e4) || {}).default), n3 = Array.from(i3).sort((e4, t4) => s3(t4) - s3(e4));
          let a3;
          return e3.every((e4) => (a3 = n3.find((t4) => t4.language === e4), !a3)), a3 || (t3 ? n3[0] : void 0);
        }, getCurrentTrack() {
          return xe2.getTracks.call(this)[this.currentTrack];
        }, getLabel(e3) {
          let t3 = e3;
          return !S2.track(t3) && K2.textTracks && this.captions.toggled && (t3 = xe2.getCurrentTrack.call(this)), S2.track(t3) ? S2.empty(t3.label) ? S2.empty(t3.language) ? ve2.get("enabled", this.config) : e3.language.toUpperCase() : t3.label : ve2.get("disabled", this.config);
        }, updateCues(e3) {
          if (!this.supported.ui) return;
          if (!S2.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
          if (!S2.nullOrUndefined(e3) && !Array.isArray(e3)) return void this.debug.warn("updateCues: Invalid input", e3);
          let t3 = e3;
          if (!t3) {
            const e4 = xe2.getCurrentTrack.call(this);
            t3 = Array.from((e4 || {}).activeCues || []).map((e5) => e5.getCueAsHTML()).map(ye2);
          }
          const i3 = t3.map((e4) => e4.trim()).join("\n");
          if (i3 !== this.elements.captions.innerHTML) {
            j2(this.elements.captions);
            const e4 = $2("span", D2(this.config.selectors.caption));
            e4.innerHTML = i3, this.elements.captions.appendChild(e4), Z2.call(this, this.media, "cuechange");
          }
        } }, Le2 = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie2 = "picture-in-picture", $e2 = "inline", _e2 = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe2 = "audio", je2 = "video";
        const qe2 = () => {
        };
        class De2 {
          constructor(e3 = false) {
            this.enabled = window.console && e3, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe2;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe2;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe2;
          }
        }
        class He2 {
          constructor(t3) {
            e2(this, "onChange", () => {
              if (!this.supported) return;
              const e3 = this.player.elements.buttons.fullscreen;
              S2.element(e3) && (e3.pressed = this.active);
              const t4 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z2.call(this.player, t4, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e2(this, "toggleFallback", (e3 = false) => {
              var _a, _b;
              if (e3 ? this.scrollPosition = { x: (_a = window.scrollX) != null ? _a : 0, y: (_b = window.scrollY) != null ? _b : 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e3 ? "hidden" : "", R2(this.target, this.player.config.classNames.fullscreen.fallback, e3), M2.isIos) {
                let t4 = document.head.querySelector('meta[name="viewport"]');
                const i3 = "viewport-fit=cover";
                t4 || (t4 = document.createElement("meta"), t4.setAttribute("name", "viewport"));
                const s3 = S2.string(t4.content) && t4.content.includes(i3);
                e3 ? (this.cleanupViewport = !s3, s3 || (t4.content += ",".concat(i3))) : this.cleanupViewport && (t4.content = t4.content.split(",").filter((e4) => e4.trim() !== i3).join(","));
              }
              this.onChange();
            }), e2(this, "trapFocus", (e3) => {
              if (M2.isIos || M2.isIPadOS || !this.active || "Tab" !== e3.key) return;
              const t4 = document.activeElement, i3 = U2.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s3] = i3, n3 = i3[i3.length - 1];
              t4 !== n3 || e3.shiftKey ? t4 === s3 && e3.shiftKey && (n3.focus(), e3.preventDefault()) : (s3.focus(), e3.preventDefault());
            }), e2(this, "update", () => {
              if (this.supported) {
                let e3;
                e3 = this.forceFallback ? "Fallback (forced)" : He2.nativeSupported ? "Native" : "Fallback", this.player.debug.log("".concat(e3, " fullscreen enabled"));
              } else this.player.debug.log("Fullscreen not supported and fallback disabled");
              R2(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e2(this, "enter", () => {
              this.supported && (M2.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He2.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S2.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e2(this, "exit", () => {
              if (this.supported) if (M2.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie2(this.player.play());
              else if (!He2.nativeSupported || this.forceFallback) this.toggleFallback(false);
              else if (this.prefix) {
                if (!S2.empty(this.prefix)) {
                  const e3 = "moz" === this.prefix ? "Cancel" : "Exit";
                  document["".concat(this.prefix).concat(e3).concat(this.property)]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e2(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t3, this.prefix = He2.prefix, this.property = He2.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t3.config.fullscreen.fallback, this.player.elements.fullscreen = t3.config.fullscreen.container && function(e3, t4) {
              const { prototype: i3 } = Element;
              return (i3.closest || function() {
                let e4 = this;
                do {
                  if (V2.matches(e4, t4)) return e4;
                  e4 = e4.parentElement || e4.parentNode;
                } while (null !== e4 && 1 === e4.nodeType);
                return null;
              }).call(e3, t4);
            }(this.player.elements.container, t3.config.fullscreen.container), X2.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), () => {
              this.onChange();
            }), X2.call(this.player, this.player.elements.container, "dblclick", (e3) => {
              S2.element(this.player.elements.controls) && this.player.elements.controls.contains(e3.target) || this.player.listeners.proxy(e3, this.toggle, "fullscreen");
            }), X2.call(this, this.player.elements.container, "keydown", (e3) => this.trapFocus(e3)), this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return He2.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (S2.function(document.exitFullscreen)) return "";
            let e3 = "";
            return ["webkit", "moz", "ms"].some((t3) => !(!S2.function(document["".concat(t3, "ExitFullscreen")]) && !S2.function(document["".concat(t3, "CancelFullScreen")])) && (e3 = t3, true)), e3;
          }
          static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [this.player.config.fullscreen.enabled, this.player.isVideo, He2.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He2.nativeSupported || !M2.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
          }
          get active() {
            if (!this.supported) return false;
            if (!He2.nativeSupported || this.forceFallback) return F2(this.target, this.player.config.classNames.fullscreen.fallback);
            const e3 = this.prefix ? this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")] : this.target.getRootNode().fullscreenElement;
            return e3 && e3.shadowRoot ? e3 === this.target.getRootNode().host : e3 === this.target;
          }
          get target() {
            var _a;
            return M2.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_a = this.player.elements.fullscreen) != null ? _a : this.player.elements.container;
          }
        }
        function Re2(e3, t3 = 1) {
          return new Promise((i3, s3) => {
            const n3 = new Image(), a3 = () => {
              delete n3.onload, delete n3.onerror, (n3.naturalWidth >= t3 ? i3 : s3)(n3);
            };
            Object.assign(n3, { onload: a3, onerror: a3, src: e3 });
          });
        }
        const Fe2 = { addStyleHook() {
          R2(this.elements.container, this.config.selectors.container.replace(".", ""), true), R2(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e3 = false) {
          e3 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Fe2.toggleNativeControls.call(this, true);
          S2.element(this.elements.controls) || (Pe2.inject.call(this), this.listeners.controls()), Fe2.toggleNativeControls.call(this), this.isHTML5 && xe2.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe2.updateVolume.call(this), Pe2.timeUpdate.call(this), Pe2.durationUpdate.call(this), Fe2.checkPlaying.call(this), R2(this.elements.container, this.config.classNames.pip.supported, K2.pip && this.isHTML5 && this.isVideo), R2(this.elements.container, this.config.classNames.airplay.supported, K2.airplay && this.isHTML5), R2(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z2.call(this, this.media, "ready");
          }, 0), Fe2.setTitle.call(this), this.poster && Fe2.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe2.durationUpdate.call(this), this.config.mediaMetadata && Pe2.setMediaMetadata.call(this);
        }, setTitle() {
          let e3 = ve2.get("play", this.config);
          if (S2.string(this.config.title) && !S2.empty(this.config.title) && (e3 += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((t3) => {
            t3.setAttribute("aria-label", e3);
          }), this.isEmbed) {
            const e4 = B2.call(this, "iframe");
            if (!S2.element(e4)) return;
            const t3 = S2.empty(this.config.title) ? "video" : this.config.title, i3 = ve2.get("frameTitle", this.config);
            e4.setAttribute("title", i3.replace("{title}", t3));
          }
        }, togglePoster(e3) {
          R2(this.elements.container, this.config.classNames.posterEnabled, e3);
        }, setPoster(e3, t3 = true) {
          return t3 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e3), this.elements.poster.removeAttribute("hidden"), te2.call(this).then(() => Re2(e3)).catch((t4) => {
            throw e3 === this.poster && Fe2.togglePoster.call(this, false), t4;
          }).then(() => {
            if (e3 !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: "url('".concat(e3, "')"), backgroundSize: "" }), Fe2.togglePoster.call(this, true), e3)));
        }, checkPlaying(e3) {
          R2(this.elements.container, this.config.classNames.playing, this.playing), R2(this.elements.container, this.config.classNames.paused, this.paused), R2(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e4) => {
            Object.assign(e4, { pressed: this.playing }), e4.setAttribute("aria-label", ve2.get(this.playing ? "pause" : "play", this.config));
          }), S2.event(e3) && "timeupdate" === e3.type || Fe2.toggleControls.call(this);
        }, checkLoading(e3) {
          this.loading = ["stalled", "waiting"].includes(e3.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R2(this.elements.container, this.config.classNames.loading, this.loading), Fe2.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e3) {
          const { controls: t3 } = this.elements;
          if (t3 && this.config.hideControls) {
            const i3 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e3 || this.loading || this.paused || t3.pressed || t3.hover || i3));
          }
        }, migrateStyles() {
          Object.values(__spreadValues({}, this.media.style)).filter((e3) => !S2.empty(e3) && S2.string(e3) && e3.startsWith("--plyr")).forEach((e3) => {
            this.elements.container.style.setProperty(e3, this.media.style.getPropertyValue(e3)), this.media.style.removeProperty(e3);
          }), S2.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve2 {
          constructor(t3) {
            e2(this, "firstTouch", () => {
              const { player: e3 } = this, { elements: t4 } = e3;
              e3.touch = true, R2(t4.container, e3.config.classNames.isTouch, true);
            }), e2(this, "global", (e3 = true) => {
              const { player: t4 } = this;
              t4.config.keyboard.global && Q2.call(t4, window, "keydown keyup", this.handleKey, e3, false), Q2.call(t4, document.body, "click", this.toggleMenu, e3), G2.call(t4, document.body, "touchstart", this.firstTouch);
            }), e2(this, "container", () => {
              const { player: e3 } = this, { config: t4, elements: i3, timers: s3 } = e3;
              !t4.keyboard.global && t4.keyboard.focused && X2.call(e3, i3.container, "keydown keyup", this.handleKey, false), X2.call(e3, i3.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t5) => {
                const { controls: n4 } = i3;
                n4 && "enterfullscreen" === t5.type && (n4.pressed = false, n4.hover = false);
                let a4 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t5.type) && (Fe2.toggleControls.call(e3, true), a4 = e3.touch ? 3e3 : 2e3), clearTimeout(s3.controls), s3.controls = setTimeout(() => Fe2.toggleControls.call(e3, false), a4);
              });
              const n3 = () => {
                if (!e3.isVimeo || e3.config.vimeo.premium) return;
                const t5 = i3.wrapper, { active: s4 } = e3.fullscreen, [n4, a4] = ce2.call(e3), l3 = ae2("aspect-ratio: ".concat(n4, " / ").concat(a4));
                if (!s4) return void (l3 ? (t5.style.width = null, t5.style.height = null) : (t5.style.maxWidth = null, t5.style.margin = null));
                const [r3, o3] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c3 = r3 / o3 > n4 / a4;
                l3 ? (t5.style.width = c3 ? "auto" : "100%", t5.style.height = c3 ? "100%" : "auto") : (t5.style.maxWidth = c3 ? o3 / a4 * n4 + "px" : null, t5.style.margin = c3 ? "0 auto" : null);
              }, a3 = () => {
                clearTimeout(s3.resized), s3.resized = setTimeout(n3, 50);
              };
              X2.call(e3, i3.container, "enterfullscreen exitfullscreen", (t5) => {
                const { target: s4 } = e3.fullscreen;
                if (s4 !== i3.container) return;
                if (!e3.isEmbed && S2.empty(e3.config.ratio)) return;
                n3();
                ("enterfullscreen" === t5.type ? X2 : J2).call(e3, window, "resize", a3);
              });
            }), e2(this, "media", () => {
              const { player: e3 } = this, { elements: t4 } = e3;
              if (X2.call(e3, e3.media, "timeupdate seeking seeked", (t5) => Pe2.timeUpdate.call(e3, t5)), X2.call(e3, e3.media, "durationchange loadeddata loadedmetadata", (t5) => Pe2.durationUpdate.call(e3, t5)), X2.call(e3, e3.media, "ended", () => {
                e3.isHTML5 && e3.isVideo && e3.config.resetOnEnd && (e3.restart(), e3.pause());
              }), X2.call(e3, e3.media, "progress playing seeking seeked", (t5) => Pe2.updateProgress.call(e3, t5)), X2.call(e3, e3.media, "volumechange", (t5) => Pe2.updateVolume.call(e3, t5)), X2.call(e3, e3.media, "playing play pause ended emptied timeupdate", (t5) => Fe2.checkPlaying.call(e3, t5)), X2.call(e3, e3.media, "waiting canplay seeked playing", (t5) => Fe2.checkLoading.call(e3, t5)), e3.supported.ui && e3.config.clickToPlay && !e3.isAudio) {
                const i4 = B2.call(e3, ".".concat(e3.config.classNames.video));
                if (!S2.element(i4)) return;
                X2.call(e3, t4.container, "click", (s3) => {
                  ([t4.container, i4].includes(s3.target) || i4.contains(s3.target)) && (e3.touch && e3.config.hideControls || (e3.ended ? (this.proxy(s3, e3.restart, "restart"), this.proxy(s3, () => {
                    ie2(e3.play());
                  }, "play")) : this.proxy(s3, () => {
                    ie2(e3.togglePlay());
                  }, "play")));
                });
              }
              e3.supported.ui && e3.config.disableContextMenu && X2.call(e3, t4.wrapper, "contextmenu", (e4) => {
                e4.preventDefault();
              }, false), X2.call(e3, e3.media, "volumechange", () => {
                e3.storage.set({ volume: e3.volume, muted: e3.muted });
              }), X2.call(e3, e3.media, "ratechange", () => {
                Pe2.updateSetting.call(e3, "speed"), e3.storage.set({ speed: e3.speed });
              }), X2.call(e3, e3.media, "qualitychange", (t5) => {
                Pe2.updateSetting.call(e3, "quality", null, t5.detail.quality);
              }), X2.call(e3, e3.media, "ready qualitychange", () => {
                Pe2.setDownloadUrl.call(e3);
              });
              const i3 = e3.config.events.concat(["keyup", "keydown"]).join(" ");
              X2.call(e3, e3.media, i3, (i4) => {
                let { detail: s3 = {} } = i4;
                "error" === i4.type && (s3 = e3.media.error), Z2.call(e3, t4.container, i4.type, true, s3);
              });
            }), e2(this, "proxy", (e3, t4, i3) => {
              const { player: s3 } = this, n3 = s3.config.listeners[i3];
              let a3 = true;
              S2.function(n3) && (a3 = n3.call(s3, e3)), false !== a3 && S2.function(t4) && t4.call(s3, e3);
            }), e2(this, "bind", (e3, t4, i3, s3, n3 = true) => {
              const { player: a3 } = this, l3 = a3.config.listeners[s3], r3 = S2.function(l3);
              X2.call(a3, e3, t4, (e4) => this.proxy(e4, i3, s3), n3 && !r3);
            }), e2(this, "controls", () => {
              const { player: e3 } = this, { elements: t4 } = e3, i3 = M2.isIE ? "change" : "input";
              if (t4.buttons.play && Array.from(t4.buttons.play).forEach((t5) => {
                this.bind(t5, "click", () => {
                  ie2(e3.togglePlay());
                }, "play");
              }), this.bind(t4.buttons.restart, "click", e3.restart, "restart"), this.bind(t4.buttons.rewind, "click", () => {
                e3.lastSeekTime = Date.now(), e3.rewind();
              }, "rewind"), this.bind(t4.buttons.fastForward, "click", () => {
                e3.lastSeekTime = Date.now(), e3.forward();
              }, "fastForward"), this.bind(t4.buttons.mute, "click", () => {
                e3.muted = !e3.muted;
              }, "mute"), this.bind(t4.buttons.captions, "click", () => e3.toggleCaptions()), this.bind(t4.buttons.download, "click", () => {
                Z2.call(e3, e3.media, "download");
              }, "download"), this.bind(t4.buttons.fullscreen, "click", () => {
                e3.fullscreen.toggle();
              }, "fullscreen"), this.bind(t4.buttons.pip, "click", () => {
                e3.pip = "toggle";
              }, "pip"), this.bind(t4.buttons.airplay, "click", e3.airplay, "airplay"), this.bind(t4.buttons.settings, "click", (t5) => {
                t5.stopPropagation(), t5.preventDefault(), Pe2.toggleMenu.call(e3, t5);
              }, null, false), this.bind(t4.buttons.settings, "keyup", (t5) => {
                [" ", "Enter"].includes(t5.key) && ("Enter" !== t5.key ? (t5.preventDefault(), t5.stopPropagation(), Pe2.toggleMenu.call(e3, t5)) : Pe2.focusFirstMenuItem.call(e3, null, true));
              }, null, false), this.bind(t4.settings.menu, "keydown", (t5) => {
                "Escape" === t5.key && Pe2.toggleMenu.call(e3, t5);
              }), this.bind(t4.inputs.seek, "mousedown mousemove", (e4) => {
                const i4 = t4.progress.getBoundingClientRect(), s3 = 100 / i4.width * (e4.pageX - i4.left);
                e4.currentTarget.setAttribute("seek-value", s3);
              }), this.bind(t4.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t5) => {
                const i4 = t5.currentTarget, s3 = "play-on-seeked";
                if (S2.keyboardEvent(t5) && !["ArrowLeft", "ArrowRight"].includes(t5.key)) return;
                e3.lastSeekTime = Date.now();
                const n3 = i4.hasAttribute(s3), a3 = ["mouseup", "touchend", "keyup"].includes(t5.type);
                n3 && a3 ? (i4.removeAttribute(s3), ie2(e3.play())) : !a3 && e3.playing && (i4.setAttribute(s3, ""), e3.pause());
              }), M2.isIos) {
                const t5 = U2.call(e3, 'input[type="range"]');
                Array.from(t5).forEach((e4) => this.bind(e4, i3, (e5) => P2(e5.target)));
              }
              this.bind(t4.inputs.seek, i3, (t5) => {
                const i4 = t5.currentTarget;
                let s3 = i4.getAttribute("seek-value");
                S2.empty(s3) && (s3 = i4.value), i4.removeAttribute("seek-value"), e3.currentTime = s3 / i4.max * e3.duration;
              }, "seek"), this.bind(t4.progress, "mouseenter mouseleave mousemove", (t5) => Pe2.updateSeekTooltip.call(e3, t5)), this.bind(t4.progress, "mousemove touchmove", (t5) => {
                const { previewThumbnails: i4 } = e3;
                i4 && i4.loaded && i4.startMove(t5);
              }), this.bind(t4.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t5 } = e3;
                t5 && t5.loaded && t5.endMove(false, true);
              }), this.bind(t4.progress, "mousedown touchstart", (t5) => {
                const { previewThumbnails: i4 } = e3;
                i4 && i4.loaded && i4.startScrubbing(t5);
              }), this.bind(t4.progress, "mouseup touchend", (t5) => {
                const { previewThumbnails: i4 } = e3;
                i4 && i4.loaded && i4.endScrubbing(t5);
              }), M2.isWebKit && Array.from(U2.call(e3, 'input[type="range"]')).forEach((t5) => {
                this.bind(t5, "input", (t6) => Pe2.updateRangeFill.call(e3, t6.target));
              }), e3.config.toggleInvert && !S2.element(t4.display.duration) && this.bind(t4.display.currentTime, "click", () => {
                0 !== e3.currentTime && (e3.config.invertTime = !e3.config.invertTime, Pe2.timeUpdate.call(e3));
              }), this.bind(t4.inputs.volume, i3, (t5) => {
                e3.volume = t5.target.value;
              }, "volume"), this.bind(t4.controls, "mouseenter mouseleave", (i4) => {
                t4.controls.hover = !e3.touch && "mouseenter" === i4.type;
              }), t4.fullscreen && Array.from(t4.fullscreen.children).filter((e4) => !e4.contains(t4.container)).forEach((i4) => {
                this.bind(i4, "mouseenter mouseleave", (i5) => {
                  t4.controls && (t4.controls.hover = !e3.touch && "mouseenter" === i5.type);
                });
              }), this.bind(t4.controls, "mousedown mouseup touchstart touchend touchcancel", (e4) => {
                t4.controls.pressed = ["mousedown", "touchstart"].includes(e4.type);
              }), this.bind(t4.controls, "focusin", () => {
                const { config: i4, timers: s3 } = e3;
                R2(t4.controls, i4.classNames.noTransition, true), Fe2.toggleControls.call(e3, true), setTimeout(() => {
                  R2(t4.controls, i4.classNames.noTransition, false);
                }, 0);
                const n3 = this.touch ? 3e3 : 4e3;
                clearTimeout(s3.controls), s3.controls = setTimeout(() => Fe2.toggleControls.call(e3, false), n3);
              }), this.bind(t4.inputs.volume, "wheel", (t5) => {
                const i4 = t5.webkitDirectionInvertedFromDevice, [s3, n3] = [t5.deltaX, -t5.deltaY].map((e4) => i4 ? -e4 : e4), a3 = Math.sign(Math.abs(s3) > Math.abs(n3) ? s3 : n3);
                e3.increaseVolume(a3 / 50);
                const { volume: l3 } = e3.media;
                (1 === a3 && l3 < 1 || -1 === a3 && l3 > 0) && t5.preventDefault();
              }, "volume", false);
            }), this.player = t3, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e3) {
            const { player: t3 } = this, { elements: i3 } = t3, { key: s3, type: n3, altKey: a3, ctrlKey: l3, metaKey: r3, shiftKey: o3 } = e3, c3 = "keydown" === n3, u3 = c3 && s3 === this.lastKey;
            if (a3 || l3 || r3 || o3) return;
            if (!s3) return;
            if (c3) {
              const n4 = document.activeElement;
              if (S2.element(n4)) {
                const { editable: s4 } = t3.config.selectors, { seek: a4 } = i3.inputs;
                if (n4 !== a4 && V2(n4, s4)) return;
                if (" " === e3.key && V2(n4, 'button, [role^="menuitem"]')) return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s3) && (e3.preventDefault(), e3.stopPropagation()), s3) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  u3 || (h3 = parseInt(s3, 10), t3.currentTime = t3.duration / 10 * h3);
                  break;
                case " ":
                case "k":
                  u3 || ie2(t3.togglePlay());
                  break;
                case "ArrowUp":
                  t3.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t3.decreaseVolume(0.1);
                  break;
                case "m":
                  u3 || (t3.muted = !t3.muted);
                  break;
                case "ArrowRight":
                  t3.forward();
                  break;
                case "ArrowLeft":
                  t3.rewind();
                  break;
                case "f":
                  t3.fullscreen.toggle();
                  break;
                case "c":
                  u3 || t3.toggleCaptions();
                  break;
                case "l":
                  t3.loop = !t3.loop;
              }
              "Escape" === s3 && !t3.fullscreen.usingNative && t3.fullscreen.active && t3.fullscreen.toggle(), this.lastKey = s3;
            } else this.lastKey = null;
            var h3;
          }
          toggleMenu(e3) {
            Pe2.toggleMenu.call(this.player, e3);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue2 = function(e3, t3) {
          return e3(t3 = { exports: {} }, t3.exports), t3.exports;
        }(function(e3, t3) {
          e3.exports = function() {
            var e4 = function() {
            }, t4 = {}, i3 = {}, s3 = {};
            function n3(e5, t5) {
              e5 = e5.push ? e5 : [e5];
              var n4, a4, l4, r4 = [], o4 = e5.length, c4 = o4;
              for (n4 = function(e6, i4) {
                i4.length && r4.push(e6), --c4 || t5(r4);
              }; o4--; ) a4 = e5[o4], (l4 = i3[a4]) ? n4(a4, l4) : (s3[a4] = s3[a4] || []).push(n4);
            }
            function a3(e5, t5) {
              if (e5) {
                var n4 = s3[e5];
                if (i3[e5] = t5, n4) for (; n4.length; ) n4[0](e5, t5), n4.splice(0, 1);
              }
            }
            function l3(t5, i4) {
              t5.call && (t5 = { success: t5 }), i4.length ? (t5.error || e4)(i4) : (t5.success || e4)(t5);
            }
            function r3(t5, i4, s4, n4) {
              var a4, l4, o4 = document, c4 = s4.async, u3 = (s4.numRetries || 0) + 1, h3 = s4.before || e4, d3 = t5.replace(/[\?|#].*$/, ""), m3 = t5.replace(/^(css|img)!/, "");
              n4 = n4 || 0, /(^css!|\.css$)/.test(d3) ? ((l4 = o4.createElement("link")).rel = "stylesheet", l4.href = m3, (a4 = "hideFocus" in l4) && l4.relList && (a4 = 0, l4.rel = "preload", l4.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d3) ? (l4 = o4.createElement("img")).src = m3 : ((l4 = o4.createElement("script")).src = t5, l4.async = void 0 === c4 || c4), l4.onload = l4.onerror = l4.onbeforeload = function(e5) {
                var o5 = e5.type[0];
                if (a4) try {
                  l4.sheet.cssText.length || (o5 = "e");
                } catch (e6) {
                  18 != e6.code && (o5 = "e");
                }
                if ("e" == o5) {
                  if ((n4 += 1) < u3) return r3(t5, i4, s4, n4);
                } else if ("preload" == l4.rel && "style" == l4.as) return l4.rel = "stylesheet";
                i4(t5, o5, e5.defaultPrevented);
              }, false !== h3(t5, l4) && o4.head.appendChild(l4);
            }
            function o3(e5, t5, i4) {
              var s4, n4, a4 = (e5 = e5.push ? e5 : [e5]).length, l4 = a4, o4 = [];
              for (s4 = function(e6, i5, s5) {
                if ("e" == i5 && o4.push(e6), "b" == i5) {
                  if (!s5) return;
                  o4.push(e6);
                }
                --a4 || t5(o4);
              }, n4 = 0; n4 < l4; n4++) r3(e5[n4], s4, i4);
            }
            function c3(e5, i4, s4) {
              var n4, r4;
              if (i4 && i4.trim && (n4 = i4), r4 = (n4 ? s4 : i4) || {}, n4) {
                if (n4 in t4) throw "LoadJS";
                t4[n4] = true;
              }
              function c4(t5, i5) {
                o3(e5, function(e6) {
                  l3(r4, e6), t5 && l3({ success: t5, error: i5 }, e6), a3(n4, e6);
                }, r4);
              }
              if (r4.returnPromise) return new Promise(c4);
              c4();
            }
            return c3.ready = function(e5, t5) {
              return n3(e5, function(e6) {
                l3(t5, e6);
              }), c3;
            }, c3.done = function(e5) {
              a3(e5, []);
            }, c3.reset = function() {
              t4 = {}, i3 = {}, s3 = {};
            }, c3.isDefined = function(e5) {
              return e5 in t4;
            }, c3;
          }();
        });
        function Be2(e3) {
          return new Promise((t3, i3) => {
            Ue2(e3, { success: t3, error: i3 });
          });
        }
        function We2(e3) {
          e3 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e3 && (this.media.paused = !e3, Z2.call(this, this.media, e3 ? "play" : "pause"));
        }
        const ze2 = { setup() {
          const e3 = this;
          R2(e3.elements.wrapper, e3.config.classNames.embed, true), e3.options.speed = e3.config.speed.options, ue2.call(e3), S2.object(window.Vimeo) ? ze2.ready.call(e3) : Be2(e3.config.urls.vimeo.sdk).then(() => {
            ze2.ready.call(e3);
          }).catch((t3) => {
            e3.debug.warn("Vimeo SDK (player.js) failed to load", t3);
          });
        }, ready() {
          const e3 = this, t3 = e3.config.vimeo, _a = t3, { premium: i3, referrerPolicy: s3 } = _a, n3 = __objRest(_a, ["premium", "referrerPolicy"]);
          let a3 = e3.media.getAttribute("src"), l3 = "";
          S2.empty(a3) ? (a3 = e3.media.getAttribute(e3.config.attributes.embed.id), l3 = e3.media.getAttribute(e3.config.attributes.embed.hash)) : l3 = function(e4) {
            const t4 = e4.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t4 && 5 === t4.length ? t4[4] : null;
          }(a3);
          const r3 = l3 ? { h: l3 } : {};
          i3 && Object.assign(n3, { controls: false, sidedock: false });
          const o3 = Ne2(__spreadValues(__spreadValues({ loop: e3.config.loop.active, autoplay: e3.autoplay, muted: e3.muted, gesture: "media", playsinline: e3.config.playsinline }, r3), n3)), c3 = (u3 = a3, S2.empty(u3) ? null : S2.number(Number(u3)) ? u3 : u3.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u3);
          var u3;
          const h3 = $2("iframe"), d3 = me2(e3.config.urls.vimeo.iframe, c3, o3);
          if (h3.setAttribute("src", d3), h3.setAttribute("allowfullscreen", ""), h3.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S2.empty(s3) || h3.setAttribute("referrerPolicy", s3), i3 || !t3.customControls) h3.setAttribute("data-poster", e3.poster), e3.media = q2(h3, e3.media);
          else {
            const t4 = $2("div", { class: e3.config.classNames.embedContainer, "data-poster": e3.poster });
            t4.appendChild(h3), e3.media = q2(t4, e3.media);
          }
          t3.customControls || Te2(me2(e3.config.urls.vimeo.api, d3)).then((t4) => {
            !S2.empty(t4) && t4.thumbnail_url && Fe2.setPoster.call(e3, t4.thumbnail_url).catch(() => {
            });
          }), e3.embed = new window.Vimeo.Player(h3, { autopause: e3.config.autopause, muted: e3.muted }), e3.media.paused = true, e3.media.currentTime = 0, e3.supported.ui && e3.embed.disableTextTrack(), e3.media.play = () => (We2.call(e3, true), e3.embed.play()), e3.media.pause = () => (We2.call(e3, false), e3.embed.pause()), e3.media.stop = () => {
            e3.pause(), e3.currentTime = 0;
          };
          let { currentTime: m3 } = e3.media;
          Object.defineProperty(e3.media, "currentTime", { get: () => m3, set(t4) {
            const { embed: i4, media: s4, paused: n4, volume: a4 } = e3, l4 = n4 && !i4.hasPlayed;
            s4.seeking = true, Z2.call(e3, s4, "seeking"), Promise.resolve(l4 && i4.setVolume(0)).then(() => i4.setCurrentTime(t4)).then(() => l4 && i4.pause()).then(() => l4 && i4.setVolume(a4)).catch(() => {
            });
          } });
          let p3 = e3.config.speed.selected;
          Object.defineProperty(e3.media, "playbackRate", { get: () => p3, set(t4) {
            e3.embed.setPlaybackRate(t4).then(() => {
              p3 = t4, Z2.call(e3, e3.media, "ratechange");
            }).catch(() => {
              e3.options.speed = [1];
            });
          } });
          let { volume: g3 } = e3.config;
          Object.defineProperty(e3.media, "volume", { get: () => g3, set(t4) {
            e3.embed.setVolume(t4).then(() => {
              g3 = t4, Z2.call(e3, e3.media, "volumechange");
            });
          } });
          let { muted: f3 } = e3.config;
          Object.defineProperty(e3.media, "muted", { get: () => f3, set(t4) {
            const i4 = !!S2.boolean(t4) && t4;
            e3.embed.setMuted(!!i4 || e3.config.muted).then(() => {
              f3 = i4, Z2.call(e3, e3.media, "volumechange");
            });
          } });
          let y3, { loop: b3 } = e3.config;
          Object.defineProperty(e3.media, "loop", { get: () => b3, set(t4) {
            const i4 = S2.boolean(t4) ? t4 : e3.config.loop.active;
            e3.embed.setLoop(i4).then(() => {
              b3 = i4;
            });
          } }), e3.embed.getVideoUrl().then((t4) => {
            y3 = t4, Pe2.setDownloadUrl.call(e3);
          }).catch((e4) => {
            this.debug.warn(e4);
          }), Object.defineProperty(e3.media, "currentSrc", { get: () => y3 }), Object.defineProperty(e3.media, "ended", { get: () => e3.currentTime === e3.duration }), Promise.all([e3.embed.getVideoWidth(), e3.embed.getVideoHeight()]).then((t4) => {
            const [i4, s4] = t4;
            e3.embed.ratio = he2(i4, s4), ue2.call(this);
          }), e3.embed.setAutopause(e3.config.autopause).then((t4) => {
            e3.config.autopause = t4;
          }), e3.embed.getVideoTitle().then((t4) => {
            e3.config.title = t4, Fe2.setTitle.call(this);
          }), e3.embed.getCurrentTime().then((t4) => {
            m3 = t4, Z2.call(e3, e3.media, "timeupdate");
          }), e3.embed.getDuration().then((t4) => {
            e3.media.duration = t4, Z2.call(e3, e3.media, "durationchange");
          }), e3.embed.getTextTracks().then((t4) => {
            e3.media.textTracks = t4, xe2.setup.call(e3);
          }), e3.embed.on("cuechange", ({ cues: t4 = [] }) => {
            const i4 = t4.map((e4) => function(e5) {
              const t5 = document.createDocumentFragment(), i5 = document.createElement("div");
              return t5.appendChild(i5), i5.innerHTML = e5, t5.firstChild.innerText;
            }(e4.text));
            xe2.updateCues.call(e3, i4);
          }), e3.embed.on("loaded", () => {
            if (e3.embed.getPaused().then((t4) => {
              We2.call(e3, !t4), t4 || Z2.call(e3, e3.media, "playing");
            }), S2.element(e3.embed.element) && e3.supported.ui) {
              e3.embed.element.setAttribute("tabindex", -1);
            }
          }), e3.embed.on("bufferstart", () => {
            Z2.call(e3, e3.media, "waiting");
          }), e3.embed.on("bufferend", () => {
            Z2.call(e3, e3.media, "playing");
          }), e3.embed.on("play", () => {
            We2.call(e3, true), Z2.call(e3, e3.media, "playing");
          }), e3.embed.on("pause", () => {
            We2.call(e3, false);
          }), e3.embed.on("timeupdate", (t4) => {
            e3.media.seeking = false, m3 = t4.seconds, Z2.call(e3, e3.media, "timeupdate");
          }), e3.embed.on("progress", (t4) => {
            e3.media.buffered = t4.percent, Z2.call(e3, e3.media, "progress"), 1 === parseInt(t4.percent, 10) && Z2.call(e3, e3.media, "canplaythrough"), e3.embed.getDuration().then((t5) => {
              t5 !== e3.media.duration && (e3.media.duration = t5, Z2.call(e3, e3.media, "durationchange"));
            });
          }), e3.embed.on("seeked", () => {
            e3.media.seeking = false, Z2.call(e3, e3.media, "seeked");
          }), e3.embed.on("ended", () => {
            e3.media.paused = true, Z2.call(e3, e3.media, "ended");
          }), e3.embed.on("error", (t4) => {
            e3.media.error = t4, Z2.call(e3, e3.media, "error");
          }), t3.customControls && setTimeout(() => Fe2.build.call(e3), 0);
        } };
        function Ke2(e3) {
          e3 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e3 && (this.media.paused = !e3, Z2.call(this, this.media, e3 ? "play" : "pause"));
        }
        function Ye2(e3) {
          return e3.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe2 = { setup() {
          if (R2(this.elements.wrapper, this.config.classNames.embed, true), S2.object(window.YT) && S2.function(window.YT.Player)) Qe2.ready.call(this);
          else {
            const e3 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S2.function(e3) && e3(), Qe2.ready.call(this);
            }, Be2(this.config.urls.youtube.sdk).catch((e4) => {
              this.debug.warn("YouTube API failed to load", e4);
            });
          }
        }, getTitle(e3) {
          Te2(me2(this.config.urls.youtube.api, e3)).then((e4) => {
            if (S2.object(e4)) {
              const { title: t3, height: i3, width: s3 } = e4;
              this.config.title = t3, Fe2.setTitle.call(this), this.embed.ratio = he2(s3, i3);
            }
            ue2.call(this);
          }).catch(() => {
            ue2.call(this);
          });
        }, ready() {
          const e3 = this, t3 = e3.config.youtube, i3 = e3.media && e3.media.getAttribute("id");
          if (!S2.empty(i3) && i3.startsWith("youtube-")) return;
          let s3 = e3.media.getAttribute("src");
          S2.empty(s3) && (s3 = e3.media.getAttribute(this.config.attributes.embed.id));
          const n3 = (a3 = s3, S2.empty(a3) ? null : a3.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a3);
          var a3;
          const l3 = $2("div", { id: "".concat(e3.provider, "-").concat(Math.floor(1e4 * Math.random())), "data-poster": t3.customControls ? e3.poster : void 0 });
          if (e3.media = q2(l3, e3.media), t3.customControls) {
            const t4 = (e4) => "https://i.ytimg.com/vi/".concat(n3, "/").concat(e4, "default.jpg");
            Re2(t4("maxres"), 121).catch(() => Re2(t4("sd"), 121)).catch(() => Re2(t4("hq"))).then((t5) => Fe2.setPoster.call(e3, t5.src)).then((t5) => {
              t5.includes("maxres") || (e3.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e3.embed = new window.YT.Player(e3.media, { videoId: n3, host: Ye2(t3), playerVars: x2({}, { autoplay: e3.config.autoplay ? 1 : 0, hl: e3.config.hl, controls: e3.supported.ui && t3.customControls ? 0 : 1, disablekb: 1, playsinline: e3.config.playsinline && !e3.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e3.captions.active ? 1 : 0, cc_lang_pref: e3.config.captions.language, widget_referrer: window ? window.location.href : null }, t3), events: { onError(t4) {
            if (!e3.media.error) {
              const i4 = t4.data, s4 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i4] || "An unknown error occurred";
              e3.media.error = { code: i4, message: s4 }, Z2.call(e3, e3.media, "error");
            }
          }, onPlaybackRateChange(t4) {
            const i4 = t4.target;
            e3.media.playbackRate = i4.getPlaybackRate(), Z2.call(e3, e3.media, "ratechange");
          }, onReady(i4) {
            if (S2.function(e3.media.play)) return;
            const s4 = i4.target;
            Qe2.getTitle.call(e3, n3), e3.media.play = () => {
              Ke2.call(e3, true), s4.playVideo();
            }, e3.media.pause = () => {
              Ke2.call(e3, false), s4.pauseVideo();
            }, e3.media.stop = () => {
              s4.stopVideo();
            }, e3.media.duration = s4.getDuration(), e3.media.paused = true, e3.media.currentTime = 0, Object.defineProperty(e3.media, "currentTime", { get: () => Number(s4.getCurrentTime()), set(t4) {
              e3.paused && !e3.embed.hasPlayed && e3.embed.mute(), e3.media.seeking = true, Z2.call(e3, e3.media, "seeking"), s4.seekTo(t4);
            } }), Object.defineProperty(e3.media, "playbackRate", { get: () => s4.getPlaybackRate(), set(e4) {
              s4.setPlaybackRate(e4);
            } });
            let { volume: a4 } = e3.config;
            Object.defineProperty(e3.media, "volume", { get: () => a4, set(t4) {
              a4 = t4, s4.setVolume(100 * a4), Z2.call(e3, e3.media, "volumechange");
            } });
            let { muted: l4 } = e3.config;
            Object.defineProperty(e3.media, "muted", { get: () => l4, set(t4) {
              const i5 = S2.boolean(t4) ? t4 : l4;
              l4 = i5, s4[i5 ? "mute" : "unMute"](), s4.setVolume(100 * a4), Z2.call(e3, e3.media, "volumechange");
            } }), Object.defineProperty(e3.media, "currentSrc", { get: () => s4.getVideoUrl() }), Object.defineProperty(e3.media, "ended", { get: () => e3.currentTime === e3.duration });
            const r3 = s4.getAvailablePlaybackRates();
            e3.options.speed = r3.filter((t4) => e3.config.speed.options.includes(t4)), e3.supported.ui && t3.customControls && e3.media.setAttribute("tabindex", -1), Z2.call(e3, e3.media, "timeupdate"), Z2.call(e3, e3.media, "durationchange"), clearInterval(e3.timers.buffering), e3.timers.buffering = setInterval(() => {
              e3.media.buffered = s4.getVideoLoadedFraction(), (null === e3.media.lastBuffered || e3.media.lastBuffered < e3.media.buffered) && Z2.call(e3, e3.media, "progress"), e3.media.lastBuffered = e3.media.buffered, 1 === e3.media.buffered && (clearInterval(e3.timers.buffering), Z2.call(e3, e3.media, "canplaythrough"));
            }, 200), t3.customControls && setTimeout(() => Fe2.build.call(e3), 50);
          }, onStateChange(i4) {
            const s4 = i4.target;
            clearInterval(e3.timers.playing);
            switch (e3.media.seeking && [1, 2].includes(i4.data) && (e3.media.seeking = false, Z2.call(e3, e3.media, "seeked")), i4.data) {
              case -1:
                Z2.call(e3, e3.media, "timeupdate"), e3.media.buffered = s4.getVideoLoadedFraction(), Z2.call(e3, e3.media, "progress");
                break;
              case 0:
                Ke2.call(e3, false), e3.media.loop ? (s4.stopVideo(), s4.playVideo()) : Z2.call(e3, e3.media, "ended");
                break;
              case 1:
                t3.customControls && !e3.config.autoplay && e3.media.paused && !e3.embed.hasPlayed ? e3.media.pause() : (Ke2.call(e3, true), Z2.call(e3, e3.media, "playing"), e3.timers.playing = setInterval(() => {
                  Z2.call(e3, e3.media, "timeupdate");
                }, 50), e3.media.duration !== s4.getDuration() && (e3.media.duration = s4.getDuration(), Z2.call(e3, e3.media, "durationchange")));
                break;
              case 2:
                e3.muted || e3.embed.unMute(), Ke2.call(e3, false);
                break;
              case 3:
                Z2.call(e3, e3.media, "waiting");
            }
            Z2.call(e3, e3.elements.container, "statechange", false, { code: i4.data });
          } } });
        } }, Xe2 = { setup() {
          this.media ? (R2(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R2(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R2(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $2("div", { class: this.config.classNames.video }), L2(this.media, this.elements.wrapper), this.elements.poster = $2("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de2.setup.call(this) : this.isYouTube ? Qe2.setup.call(this) : this.isVimeo && ze2.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je2 {
          constructor(t3) {
            e2(this, "load", () => {
              this.enabled && (S2.object(window.google) && S2.object(window.google.ima) ? this.ready() : Be2(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e2(this, "ready", () => {
              var e3;
              this.enabled || ((e3 = this).manager && e3.manager.destroy(), e3.elements.displayContainer && e3.elements.displayContainer.destroy(), e3.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e2(this, "setupIMA", () => {
              this.elements.container = $2("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e3) => this.onAdsManagerLoaded(e3), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3), false), this.requestAds();
            }), e2(this, "requestAds", () => {
              const { container: e3 } = this.player.elements;
              try {
                const t4 = new google.ima.AdsRequest();
                t4.adTagUrl = this.tagUrl, t4.linearAdSlotWidth = e3.offsetWidth, t4.linearAdSlotHeight = e3.offsetHeight, t4.nonLinearAdSlotWidth = e3.offsetWidth, t4.nonLinearAdSlotHeight = e3.offsetHeight, t4.forceNonLinearFullSlot = false, t4.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t4);
              } catch (e4) {
                this.onAdError(e4);
              }
            }), e2(this, "pollCountdown", (e3 = false) => {
              if (!e3) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e4 = Ee2(Math.max(this.manager.getRemainingTime(), 0)), t4 = "".concat(ve2.get("advertisement", this.player.config), " - ").concat(e4);
                this.elements.container.setAttribute("data-badge-text", t4);
              }, 100);
            }), e2(this, "onAdsManagerLoaded", (e3) => {
              if (!this.enabled) return;
              const t4 = new google.ima.AdsRenderingSettings();
              t4.restoreCustomPlaybackStateOnAdBreakComplete = true, t4.enablePreloading = true, this.manager = e3.getAdsManager(this.player, t4), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e4) => this.onAdError(e4)), Object.keys(google.ima.AdEvent.Type).forEach((e4) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e4], (e5) => this.onAdEvent(e5));
              }), this.trigger("loaded");
            }), e2(this, "addCuePoints", () => {
              S2.empty(this.cuePoints) || this.cuePoints.forEach((e3) => {
                if (0 !== e3 && -1 !== e3 && e3 < this.player.duration) {
                  const t4 = this.player.elements.progress;
                  if (S2.element(t4)) {
                    const i3 = 100 / this.player.duration * e3, s3 = $2("span", { class: this.player.config.classNames.cues });
                    s3.style.left = "".concat(i3.toString(), "%"), t4.appendChild(s3);
                  }
                }
              });
            }), e2(this, "onAdEvent", (e3) => {
              const { container: t4 } = this.player.elements, i3 = e3.getAd(), s3 = e3.getAdData();
              switch (((e4) => {
                Z2.call(this.player, this.player.media, "ads".concat(e4.replace(/_/g, "").toLowerCase()));
              })(e3.type), e3.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i3.isLinear() || (i3.width = t4.offsetWidth, i3.height = t4.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s3.adError && this.player.debug.warn("Non-fatal ad error: ".concat(s3.adError.getMessage()));
              }
            }), e2(this, "onAdError", (e3) => {
              this.cancel(), this.player.debug.warn("Ads error", e3);
            }), e2(this, "listeners", () => {
              const { container: e3 } = this.player.elements;
              let t4;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t4 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e4 = this.player.currentTime;
                S2.empty(this.cuePoints) || this.cuePoints.forEach((i3, s3) => {
                  t4 < i3 && i3 < e4 && (this.manager.discardAdBreak(), this.cuePoints.splice(s3, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e3.offsetWidth, e3.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e2(this, "play", () => {
              const { container: e3 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e3.offsetWidth, e3.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e4) {
                  this.onAdError(e4);
                }
              }).catch(() => {
              });
            }), e2(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie2(this.player.media.play());
            }), e2(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e2(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e2(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e3) => {
                  this.on("loaded", e3), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e2(this, "trigger", (e3, ...t4) => {
              const i3 = this.events[e3];
              S2.array(i3) && i3.forEach((e4) => {
                S2.function(e4) && e4.apply(this, t4);
              });
            }), e2(this, "on", (e3, t4) => (S2.array(this.events[e3]) || (this.events[e3] = []), this.events[e3].push(t4), this)), e2(this, "startSafetyTimer", (e3, t4) => {
              this.player.debug.log("Safety timer invoked from: ".concat(t4)), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e3);
            }), e2(this, "clearSafetyTimer", (e3) => {
              S2.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e3)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t3, this.config = t3.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e3, t4) => {
              this.on("loaded", e3), this.on("error", t4);
            }), this.load();
          }
          get enabled() {
            const { config: e3 } = this;
            return this.player.isHTML5 && this.player.isVideo && e3.enabled && (!S2.empty(e3.publisherId) || S2.url(e3.tagUrl));
          }
          get tagUrl() {
            const { config: e3 } = this;
            if (S2.url(e3.tagUrl)) return e3.tagUrl;
            return "https://go.aniview.com/api/adserver6/vast/?".concat(Ne2({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e3.publisherId }));
          }
        }
        function Ge2(e3 = 0, t3 = 0, i3 = 255) {
          return Math.min(Math.max(e3, t3), i3);
        }
        const Ze2 = (e3) => {
          const t3 = [];
          return e3.split(/\r\n\r\n|\n\n|\r\r/).forEach((e4) => {
            const i3 = {};
            e4.split(/\r\n|\n|\r/).forEach((e5) => {
              if (S2.number(i3.startTime)) {
                if (!S2.empty(e5.trim()) && S2.empty(i3.text)) {
                  const t4 = e5.trim().split("#xywh=");
                  [i3.text] = t4, t4[1] && ([i3.x, i3.y, i3.w, i3.h] = t4[1].split(","));
                }
              } else {
                const t4 = e5.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t4 && (i3.startTime = 60 * Number(t4[1] || 0) * 60 + 60 * Number(t4[2]) + Number(t4[3]) + Number("0.".concat(t4[4])), i3.endTime = 60 * Number(t4[6] || 0) * 60 + 60 * Number(t4[7]) + Number(t4[8]) + Number("0.".concat(t4[9])));
              }
            }), i3.text && t3.push(i3);
          }), t3;
        }, et2 = (e3, t3) => {
          const i3 = {};
          return e3 > t3.width / t3.height ? (i3.width = t3.width, i3.height = 1 / e3 * t3.width) : (i3.height = t3.height, i3.width = e3 * t3.height), i3;
        };
        class tt2 {
          constructor(t3) {
            e2(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e2(this, "getThumbnails", () => new Promise((e3) => {
              const { src: t4 } = this.player.config.previewThumbnails;
              if (S2.empty(t4)) throw new Error("Missing previewThumbnails.src config attribute");
              const i3 = () => {
                this.thumbnails.sort((e4, t5) => e4.height - t5.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e3();
              };
              if (S2.function(t4)) t4((e4) => {
                this.thumbnails = e4, i3();
              });
              else {
                const e4 = (S2.string(t4) ? [t4] : t4).map((e5) => this.getThumbnail(e5));
                Promise.all(e4).then(i3);
              }
            })), e2(this, "getThumbnail", (e3) => new Promise((t4) => {
              Te2(e3).then((i3) => {
                const s3 = { frames: Ze2(i3), height: null, urlPrefix: "" };
                s3.frames[0].text.startsWith("/") || s3.frames[0].text.startsWith("http://") || s3.frames[0].text.startsWith("https://") || (s3.urlPrefix = e3.substring(0, e3.lastIndexOf("/") + 1));
                const n3 = new Image();
                n3.onload = () => {
                  s3.height = n3.naturalHeight, s3.width = n3.naturalWidth, this.thumbnails.push(s3), t4();
                }, n3.src = s3.urlPrefix + s3.frames[0].text;
              });
            })), e2(this, "startMove", (e3) => {
              if (this.loaded && S2.event(e3) && ["touchmove", "mousemove"].includes(e3.type) && this.player.media.duration) {
                if ("touchmove" === e3.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t4, i3;
                  const s3 = this.player.elements.progress.getBoundingClientRect(), n3 = 100 / s3.width * (e3.pageX - s3.left);
                  this.seekTime = this.player.media.duration * (n3 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e3.pageX, this.elements.thumb.time.innerText = Ee2(this.seekTime);
                  const a3 = null === (t4 = this.player.config.markers) || void 0 === t4 || null === (i3 = t4.points) || void 0 === i3 ? void 0 : i3.find(({ time: e4 }) => e4 === Math.round(this.seekTime));
                  a3 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(a3.label, "<br>"));
                }
                this.showImageAtCurrentTime();
              }
            }), e2(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e2(this, "startScrubbing", (e3) => {
              (S2.nullOrUndefined(e3.button) || false === e3.button || 0 === e3.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e2(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G2.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e2(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e2(this, "render", () => {
              this.elements.thumb.container = $2("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $2("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e3 = $2("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $2("span", {}, "00:00"), e3.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e3), S2.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $2("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e2(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e2(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e3 = this.thumbnails[0].frames.findIndex((e4) => this.seekTime >= e4.startTime && this.seekTime <= e4.endTime), t4 = e3 >= 0;
              let i3 = 0;
              this.mouseDown || this.toggleThumbContainer(t4), t4 && (this.thumbnails.forEach((t5, s3) => {
                this.loadedImages.includes(t5.frames[e3].text) && (i3 = s3);
              }), e3 !== this.showingThumb && (this.showingThumb = e3, this.loadImage(i3)));
            }), e2(this, "loadImage", (e3 = 0) => {
              const t4 = this.showingThumb, i3 = this.thumbnails[e3], { urlPrefix: s3 } = i3, n3 = i3.frames[t4], a3 = i3.frames[t4].text, l3 = s3 + a3;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a3) this.showImage(this.currentImageElement, n3, e3, t4, a3, false), this.currentImageElement.dataset.index = t4, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i4 = new Image();
                i4.src = l3, i4.dataset.index = t4, i4.dataset.filename = a3, this.showingThumbFilename = a3, this.player.debug.log("Loading image: ".concat(l3)), i4.onload = () => this.showImage(i4, n3, e3, t4, a3, true), this.loadingImage = i4, this.removeOldImages(i4);
              }
            }), e2(this, "showImage", (e3, t4, i3, s3, n3, a3 = true) => {
              this.player.debug.log("Showing thumb: ".concat(n3, ". num: ").concat(s3, ". qual: ").concat(i3, ". newimg: ").concat(a3)), this.setImageSizeAndOffset(e3, t4), a3 && (this.currentImageContainer.appendChild(e3), this.currentImageElement = e3, this.loadedImages.includes(n3) || this.loadedImages.push(n3)), this.preloadNearby(s3, true).then(this.preloadNearby(s3, false)).then(this.getHigherQuality(i3, e3, t4, n3));
            }), e2(this, "removeOldImages", (e3) => {
              Array.from(this.currentImageContainer.children).forEach((t4) => {
                if ("img" !== t4.tagName.toLowerCase()) return;
                const i3 = this.usingSprites ? 500 : 1e3;
                if (t4.dataset.index !== e3.dataset.index && !t4.dataset.deleting) {
                  t4.dataset.deleting = true;
                  const { currentImageContainer: e4 } = this;
                  setTimeout(() => {
                    e4.removeChild(t4), this.player.debug.log("Removing thumb: ".concat(t4.dataset.filename));
                  }, i3);
                }
              });
            }), e2(this, "preloadNearby", (e3, t4 = true) => new Promise((i3) => {
              setTimeout(() => {
                const s3 = this.thumbnails[0].frames[e3].text;
                if (this.showingThumbFilename === s3) {
                  let n3;
                  n3 = t4 ? this.thumbnails[0].frames.slice(e3) : this.thumbnails[0].frames.slice(0, e3).reverse();
                  let a3 = false;
                  n3.forEach((e4) => {
                    const t5 = e4.text;
                    if (t5 !== s3 && !this.loadedImages.includes(t5)) {
                      a3 = true, this.player.debug.log("Preloading thumb filename: ".concat(t5));
                      const { urlPrefix: e5 } = this.thumbnails[0], s4 = e5 + t5, n4 = new Image();
                      n4.src = s4, n4.onload = () => {
                        this.player.debug.log("Preloaded thumb filename: ".concat(t5)), this.loadedImages.includes(t5) || this.loadedImages.push(t5), i3();
                      };
                    }
                  }), a3 || i3();
                }
              }, 300);
            })), e2(this, "getHigherQuality", (e3, t4, i3, s3) => {
              if (e3 < this.thumbnails.length - 1) {
                let n3 = t4.naturalHeight;
                this.usingSprites && (n3 = i3.h), n3 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s3 && (this.player.debug.log("Showing higher quality thumb for: ".concat(s3)), this.loadImage(e3 + 1));
                }, 300);
              }
            }), e2(this, "toggleThumbContainer", (e3 = false, t4 = false) => {
              const i3 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i3, e3), !e3 && t4 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e2(this, "toggleScrubbingContainer", (e3 = false) => {
              const t4 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t4, e3), e3 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e2(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e2(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e3 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e3.clientHeight > 20 && e3.clientWidth < 20) {
                  const t4 = Math.floor(e3.clientHeight * this.thumbAspectRatio);
                  e3.style.width = "".concat(t4, "px");
                } else if (e3.clientHeight < 20 && e3.clientWidth > 20) {
                  const t4 = Math.floor(e3.clientWidth / this.thumbAspectRatio);
                  e3.style.height = "".concat(t4, "px");
                }
              } else {
                const t4 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e3.style.height = "".concat(this.thumbContainerHeight, "px"), e3.style.width = "".concat(t4, "px");
              }
              this.setThumbContainerPos();
            }), e2(this, "setThumbContainerPos", () => {
              const e3 = this.player.elements.progress.getBoundingClientRect(), t4 = this.player.elements.container.getBoundingClientRect(), { container: i3 } = this.elements.thumb, s3 = t4.left - e3.left + 10, n3 = t4.right - e3.left - i3.clientWidth - 10, a3 = this.mousePosX - e3.left - i3.clientWidth / 2, l3 = Ge2(a3, s3, n3);
              i3.style.left = "".concat(l3, "px"), i3.style.setProperty("--preview-arrow-offset", a3 - l3 + "px");
            }), e2(this, "setScrubbingContainerSize", () => {
              const { width: e3, height: t4 } = et2(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = "".concat(e3, "px"), this.elements.scrubbing.container.style.height = "".concat(t4, "px");
            }), e2(this, "setImageSizeAndOffset", (e3, t4) => {
              if (!this.usingSprites) return;
              const i3 = this.thumbContainerHeight / t4.h;
              e3.style.height = e3.naturalHeight * i3 + "px", e3.style.width = e3.naturalWidth * i3 + "px", e3.style.left = "-".concat(t4.x * i3, "px"), e3.style.top = "-".concat(t4.y * i3, "px");
            }), this.player = t3, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e3 } = et2(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e3;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e3) {
            this.mouseDown ? this.currentScrubbingImageElement = e3 : this.currentThumbnailImageElement = e3;
          }
        }
        const it2 = { insertElements(e3, t3) {
          S2.string(t3) ? _2(e3, this.media, { src: t3 }) : S2.array(t3) && t3.forEach((t4) => {
            _2(e3, this.media, t4);
          });
        }, change(e3) {
          N2(e3, "sources.length") ? (de2.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O2(this.media), this.media = null, S2.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t3, type: i3 } = e3, [{ provider: s3 = _e2.html5, src: n3 }] = t3, a3 = "html5" === s3 ? i3 : "div", l3 = "html5" === s3 ? {} : { src: n3 };
            Object.assign(this, { provider: s3, type: i3, supported: K2.check(i3, s3, this.config.playsinline), media: $2(a3, l3) }), this.elements.container.appendChild(this.media), S2.boolean(e3.autoplay) && (this.config.autoplay = e3.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S2.empty(e3.poster) || (this.poster = e3.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe2.addStyleHook.call(this), this.isHTML5 && it2.insertElements.call(this, "source", t3), this.config.title = e3.title, Xe2.setup.call(this), this.isHTML5 && Object.keys(e3).includes("tracks") && it2.insertElements.call(this, "track", e3.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe2.build.call(this), this.isHTML5 && this.media.load(), S2.empty(e3.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e3.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt2(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st2 {
          constructor(t3, i3) {
            if (e2(this, "play", () => S2.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie2(this.media.play())), this.media.play()) : null), e2(this, "pause", () => this.playing && S2.function(this.media.pause) ? this.media.pause() : null), e2(this, "togglePlay", (e3) => (S2.boolean(e3) ? e3 : !this.playing) ? this.play() : this.pause()), e2(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S2.function(this.media.stop) && this.media.stop();
            }), e2(this, "restart", () => {
              this.currentTime = 0;
            }), e2(this, "rewind", (e3) => {
              this.currentTime -= S2.number(e3) ? e3 : this.config.seekTime;
            }), e2(this, "forward", (e3) => {
              this.currentTime += S2.number(e3) ? e3 : this.config.seekTime;
            }), e2(this, "increaseVolume", (e3) => {
              const t4 = this.media.muted ? 0 : this.volume;
              this.volume = t4 + (S2.number(e3) ? e3 : 0);
            }), e2(this, "decreaseVolume", (e3) => {
              this.increaseVolume(-e3);
            }), e2(this, "airplay", () => {
              K2.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e2(this, "toggleControls", (e3) => {
              if (this.supported.ui && !this.isAudio) {
                const t4 = F2(this.elements.container, this.config.classNames.hideControls), i4 = void 0 === e3 ? void 0 : !e3, s4 = R2(this.elements.container, this.config.classNames.hideControls, i4);
                if (s4 && S2.array(this.config.controls) && this.config.controls.includes("settings") && !S2.empty(this.config.settings) && Pe2.toggleMenu.call(this, false), s4 !== t4) {
                  const e4 = s4 ? "controlshidden" : "controlsshown";
                  Z2.call(this, this.media, e4);
                }
                return !s4;
              }
              return false;
            }), e2(this, "on", (e3, t4) => {
              X2.call(this, this.elements.container, e3, t4);
            }), e2(this, "once", (e3, t4) => {
              G2.call(this, this.elements.container, e3, t4);
            }), e2(this, "off", (e3, t4) => {
              J2(this.elements.container, e3, t4);
            }), e2(this, "destroy", (e3, t4 = false) => {
              if (!this.ready) return;
              const i4 = () => {
                document.body.style.overflow = "", this.embed = null, t4 ? (Object.keys(this.elements).length && (O2(this.elements.buttons.play), O2(this.elements.captions), O2(this.elements.controls), O2(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S2.function(e3) && e3()) : (ee2.call(this), de2.cancelRequests.call(this), q2(this.elements.original, this.elements.container), Z2.call(this, this.elements.original, "destroyed", true), S2.function(e3) && e3.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe2.toggleNativeControls.call(this, true), i4()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S2.function(this.embed.destroy) && this.embed.destroy(), i4()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i4), setTimeout(i4, 200));
            }), e2(this, "supports", (e3) => K2.mime.call(this, e3)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K2.touch, this.media = t3, S2.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S2.nodeList(this.media) || S2.array(this.media)) && (this.media = this.media[0]), this.config = x2({}, Le2, st2.defaults, i3 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e3) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new De2(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K2), S2.nullOrUndefined(this.media) || !S2.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K2.check().api) return void this.debug.error("Setup failed: no support");
            const s3 = this.media.cloneNode(true);
            s3.autoplay = false, this.elements.original = s3;
            const n3 = this.media.tagName.toLowerCase();
            let a3 = null, l3 = null;
            switch (n3) {
              case "div":
                if (a3 = this.media.querySelector("iframe"), S2.element(a3)) {
                  if (l3 = Me2(a3.getAttribute("src")), this.provider = function(e3) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e3) ? _e2.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e3) ? _e2.vimeo : null;
                  }(l3.toString()), this.elements.container = this.media, this.media = a3, this.elements.container.className = "", l3.search.length) {
                    const e3 = ["1", "true"];
                    e3.includes(l3.searchParams.get("autoplay")) && (this.config.autoplay = true), e3.includes(l3.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e3.includes(l3.searchParams.get("playsinline")), this.config.youtube.hl = l3.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S2.empty(this.provider) || !Object.values(_e2).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = je2;
                break;
              case "video":
              case "audio":
                this.type = n3, this.provider = _e2.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K2.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve2(this), this.storage = new we2(this), this.media.plyr = this, S2.element(this.elements.container) || (this.elements.container = $2("div"), L2(this.media, this.elements.container)), Fe2.migrateStyles.call(this), Fe2.addStyleHook.call(this), Xe2.setup.call(this), this.config.debug && X2.call(this, this.elements.container, this.config.events.join(" "), (e3) => {
              this.debug.log("event: ".concat(e3.type));
            }), this.fullscreen = new He2(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe2.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je2(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ie2(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt2(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === _e2.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === _e2.youtube;
          }
          get isVimeo() {
            return this.provider === _e2.vimeo;
          }
          get isVideo() {
            return this.type === je2;
          }
          get isAudio() {
            return this.type === Oe2;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e3) {
            if (!this.duration) return;
            const t3 = S2.number(e3) && e3 > 0;
            this.media.currentTime = t3 ? Math.min(e3, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e3 } = this.media;
            return S2.number(e3) ? e3 : e3 && e3.length && this.duration > 0 ? e3.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e3 = parseFloat(this.config.duration), t3 = (this.media || {}).duration, i3 = S2.number(t3) && t3 !== 1 / 0 ? t3 : 0;
            return e3 || i3;
          }
          set volume(e3) {
            let t3 = e3;
            S2.string(t3) && (t3 = Number(t3)), S2.number(t3) || (t3 = this.storage.get("volume")), S2.number(t3) || ({ volume: t3 } = this.config), t3 > 1 && (t3 = 1), t3 < 0 && (t3 = 0), this.config.volume = t3, this.media.volume = t3, !S2.empty(e3) && this.muted && t3 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e3) {
            let t3 = e3;
            S2.boolean(t3) || (t3 = this.storage.get("muted")), S2.boolean(t3) || (t3 = this.config.muted), this.config.muted = t3, this.media.muted = t3;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e3) {
            let t3 = null;
            S2.number(e3) && (t3 = e3), S2.number(t3) || (t3 = this.storage.get("speed")), S2.number(t3) || (t3 = this.config.speed.selected);
            const { minimumSpeed: i3, maximumSpeed: s3 } = this;
            t3 = Ge2(t3, i3, s3), this.config.speed.selected = t3, setTimeout(() => {
              this.media && (this.media.playbackRate = t3);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e3) {
            const t3 = this.config.quality, i3 = this.options.quality;
            if (!i3.length) return;
            let s3 = [!S2.empty(e3) && Number(e3), this.storage.get("quality"), t3.selected, t3.default].find(S2.number), n3 = true;
            if (!i3.includes(s3)) {
              const e4 = ne2(i3, s3);
              this.debug.warn("Unsupported quality option: ".concat(s3, ", using ").concat(e4, " instead")), s3 = e4, n3 = false;
            }
            t3.selected = s3, this.media.quality = s3, n3 && this.storage.set({ quality: s3 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e3) {
            const t3 = S2.boolean(e3) ? e3 : this.config.loop.active;
            this.config.loop.active = t3, this.media.loop = t3;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e3) {
            it2.change.call(this, e3);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e3 } = this.config.urls;
            return S2.url(e3) ? e3 : this.source;
          }
          set download(e3) {
            S2.url(e3) && (this.config.urls.download = e3, Pe2.setDownloadUrl.call(this));
          }
          set poster(e3) {
            this.isVideo ? Fe2.setPoster.call(this, e3, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo) return null;
            const e3 = oe2(ce2.call(this));
            return S2.array(e3) ? e3.join(":") : e3;
          }
          set ratio(e3) {
            this.isVideo ? S2.string(e3) && re2(e3) ? (this.config.ratio = oe2(e3), ue2.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e3, ")")) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e3) {
            this.config.autoplay = S2.boolean(e3) ? e3 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e3) {
            xe2.toggle.call(this, e3, false);
          }
          set currentTrack(e3) {
            xe2.set.call(this, e3, false), xe2.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e3, currentTrack: t3 } = this.captions;
            return e3 ? t3 : -1;
          }
          set language(e3) {
            xe2.setLanguage.call(this, e3, false);
          }
          get language() {
            return (xe2.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e3) {
            if (!K2.pip) return;
            const t3 = S2.boolean(e3) ? e3 : !this.pip;
            S2.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t3 ? Ie2 : $e2), S2.function(this.media.requestPictureInPicture) && (!this.pip && t3 ? this.media.requestPictureInPicture() : this.pip && !t3 && document.exitPictureInPicture());
          }
          get pip() {
            return K2.pip ? S2.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie2 : null;
          }
          setPreviewThumbnails(e3) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e3), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt2(this));
          }
          static supported(e3, t3) {
            return K2.check(e3, t3);
          }
          static loadSprite(e3, t3) {
            return ke2(e3, t3);
          }
          static setup(e3, t3 = {}) {
            let i3 = null;
            return S2.string(e3) ? i3 = Array.from(document.querySelectorAll(e3)) : S2.nodeList(e3) ? i3 = Array.from(e3) : S2.array(e3) && (i3 = e3.filter(S2.element)), S2.empty(i3) ? null : i3.map((e4) => new st2(e4, t3));
          }
        }
        var nt2;
        return st2.defaults = (nt2 = Le2, JSON.parse(JSON.stringify(nt2))), st2;
      });
    }
  });

  // node_modules/htmx.org/dist/htmx.min.js
  var require_htmx_min = __commonJS({
    "node_modules/htmx.org/dist/htmx.min.js"(exports, module) {
      (function(e2, t2) {
        if (typeof define === "function" && define.amd) {
          define([], t2);
        } else if (typeof module === "object" && module.exports) {
          module.exports = t2();
        } else {
          e2.htmx = e2.htmx || t2();
        }
      })(typeof self !== "undefined" ? self : exports, function() {
        return function() {
          "use strict";
          var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(e2, t2) {
            var r2 = dr(e2, t2 || "post");
            return r2.values;
          }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false, ignoreTitle: false, scrollIntoViewOnBoost: true, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(e2) {
            return new EventSource(e2, { withCredentials: true });
          }, createWebSocket: function(e2) {
            var t2 = new WebSocket(e2, []);
            t2.binaryType = Q.config.wsBinaryType;
            return t2;
          }, version: "1.9.12" };
          var r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R };
          var w = ["get", "post", "put", "delete", "patch"];
          var i = w.map(function(e2) {
            return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
          }).join(", ");
          var S = e("head"), q = e("title"), H = e("svg", true);
          function e(e2, t2) {
            return new RegExp("<" + e2 + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + e2 + ">", !!t2 ? "gim" : "im");
          }
          function d(e2) {
            if (e2 == void 0) {
              return void 0;
            }
            let t2 = NaN;
            if (e2.slice(-2) == "ms") {
              t2 = parseFloat(e2.slice(0, -2));
            } else if (e2.slice(-1) == "s") {
              t2 = parseFloat(e2.slice(0, -1)) * 1e3;
            } else if (e2.slice(-1) == "m") {
              t2 = parseFloat(e2.slice(0, -1)) * 1e3 * 60;
            } else {
              t2 = parseFloat(e2);
            }
            return isNaN(t2) ? void 0 : t2;
          }
          function ee(e2, t2) {
            return e2.getAttribute && e2.getAttribute(t2);
          }
          function o(e2, t2) {
            return e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
          }
          function te(e2, t2) {
            return ee(e2, t2) || ee(e2, "data-" + t2);
          }
          function u(e2) {
            return e2.parentElement;
          }
          function re() {
            return document;
          }
          function c(e2, t2) {
            while (e2 && !t2(e2)) {
              e2 = u(e2);
            }
            return e2 ? e2 : null;
          }
          function L(e2, t2, r2) {
            var n2 = te(t2, r2);
            var i2 = te(t2, "hx-disinherit");
            if (e2 !== t2 && i2 && (i2 === "*" || i2.split(" ").indexOf(r2) >= 0)) {
              return "unset";
            } else {
              return n2;
            }
          }
          function ne(t2, r2) {
            var n2 = null;
            c(t2, function(e2) {
              return n2 = L(t2, e2, r2);
            });
            if (n2 !== "unset") {
              return n2;
            }
          }
          function h(e2, t2) {
            var r2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector;
            return r2 && r2.call(e2, t2);
          }
          function A(e2) {
            var t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var r2 = t2.exec(e2);
            if (r2) {
              return r2[1].toLowerCase();
            } else {
              return "";
            }
          }
          function s(e2, t2) {
            var r2 = new DOMParser();
            var n2 = r2.parseFromString(e2, "text/html");
            var i2 = n2.body;
            while (t2 > 0) {
              t2--;
              i2 = i2.firstChild;
            }
            if (i2 == null) {
              i2 = re().createDocumentFragment();
            }
            return i2;
          }
          function N(e2) {
            return /<body/.test(e2);
          }
          function l(e2) {
            var t2 = !N(e2);
            var r2 = A(e2);
            var n2 = e2;
            if (r2 === "head") {
              n2 = n2.replace(S, "");
            }
            if (Q.config.useTemplateFragments && t2) {
              var i2 = s("<body><template>" + n2 + "</template></body>", 0);
              var a2 = i2.querySelector("template").content;
              if (Q.config.allowScriptTags) {
                oe(a2.querySelectorAll("script"), function(e3) {
                  if (Q.config.inlineScriptNonce) {
                    e3.nonce = Q.config.inlineScriptNonce;
                  }
                  e3.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1;
                });
              } else {
                oe(a2.querySelectorAll("script"), function(e3) {
                  _(e3);
                });
              }
              return a2;
            }
            switch (r2) {
              case "thead":
              case "tbody":
              case "tfoot":
              case "colgroup":
              case "caption":
                return s("<table>" + n2 + "</table>", 1);
              case "col":
                return s("<table><colgroup>" + n2 + "</colgroup></table>", 2);
              case "tr":
                return s("<table><tbody>" + n2 + "</tbody></table>", 2);
              case "td":
              case "th":
                return s("<table><tbody><tr>" + n2 + "</tr></tbody></table>", 3);
              case "script":
              case "style":
                return s("<div>" + n2 + "</div>", 1);
              default:
                return s(n2, 0);
            }
          }
          function ie(e2) {
            if (e2) {
              e2();
            }
          }
          function I(e2, t2) {
            return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
          }
          function k(e2) {
            return I(e2, "Function");
          }
          function P(e2) {
            return I(e2, "Object");
          }
          function ae(e2) {
            var t2 = "htmx-internal-data";
            var r2 = e2[t2];
            if (!r2) {
              r2 = e2[t2] = {};
            }
            return r2;
          }
          function M(e2) {
            var t2 = [];
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2.push(e2[r2]);
              }
            }
            return t2;
          }
          function oe(e2, t2) {
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2(e2[r2]);
              }
            }
          }
          function X(e2) {
            var t2 = e2.getBoundingClientRect();
            var r2 = t2.top;
            var n2 = t2.bottom;
            return r2 < window.innerHeight && n2 >= 0;
          }
          function se(e2) {
            if (e2.getRootNode && e2.getRootNode() instanceof window.ShadowRoot) {
              return re().body.contains(e2.getRootNode().host);
            } else {
              return re().body.contains(e2);
            }
          }
          function D(e2) {
            return e2.trim().split(/\s+/);
          }
          function le(e2, t2) {
            for (var r2 in t2) {
              if (t2.hasOwnProperty(r2)) {
                e2[r2] = t2[r2];
              }
            }
            return e2;
          }
          function E(e2) {
            try {
              return JSON.parse(e2);
            } catch (e3) {
              b(e3);
              return null;
            }
          }
          function U() {
            var e2 = "htmx:localStorageTest";
            try {
              localStorage.setItem(e2, e2);
              localStorage.removeItem(e2);
              return true;
            } catch (e3) {
              return false;
            }
          }
          function B(t2) {
            try {
              var e2 = new URL(t2);
              if (e2) {
                t2 = e2.pathname + e2.search;
              }
              if (!/^\/$/.test(t2)) {
                t2 = t2.replace(/\/+$/, "");
              }
              return t2;
            } catch (e3) {
              return t2;
            }
          }
          function t(e) {
            return Tr(re().body, function() {
              return eval(e);
            });
          }
          function F(t2) {
            var e2 = Q.on("htmx:load", function(e3) {
              t2(e3.detail.elt);
            });
            return e2;
          }
          function V() {
            Q.logger = function(e2, t2, r2) {
              if (console) {
                console.log(t2, e2, r2);
              }
            };
          }
          function j() {
            Q.logger = null;
          }
          function C(e2, t2) {
            if (t2) {
              return e2.querySelector(t2);
            } else {
              return C(re(), e2);
            }
          }
          function f(e2, t2) {
            if (t2) {
              return e2.querySelectorAll(t2);
            } else {
              return f(re(), e2);
            }
          }
          function _(e2, t2) {
            e2 = p(e2);
            if (t2) {
              setTimeout(function() {
                _(e2);
                e2 = null;
              }, t2);
            } else {
              e2.parentElement.removeChild(e2);
            }
          }
          function z(e2, t2, r2) {
            e2 = p(e2);
            if (r2) {
              setTimeout(function() {
                z(e2, t2);
                e2 = null;
              }, r2);
            } else {
              e2.classList && e2.classList.add(t2);
            }
          }
          function n(e2, t2, r2) {
            e2 = p(e2);
            if (r2) {
              setTimeout(function() {
                n(e2, t2);
                e2 = null;
              }, r2);
            } else {
              if (e2.classList) {
                e2.classList.remove(t2);
                if (e2.classList.length === 0) {
                  e2.removeAttribute("class");
                }
              }
            }
          }
          function $(e2, t2) {
            e2 = p(e2);
            e2.classList.toggle(t2);
          }
          function W(e2, t2) {
            e2 = p(e2);
            oe(e2.parentElement.children, function(e3) {
              n(e3, t2);
            });
            z(e2, t2);
          }
          function v(e2, t2) {
            e2 = p(e2);
            if (e2.closest) {
              return e2.closest(t2);
            } else {
              do {
                if (e2 == null || h(e2, t2)) {
                  return e2;
                }
              } while (e2 = e2 && u(e2));
              return null;
            }
          }
          function g(e2, t2) {
            return e2.substring(0, t2.length) === t2;
          }
          function G(e2, t2) {
            return e2.substring(e2.length - t2.length) === t2;
          }
          function J(e2) {
            var t2 = e2.trim();
            if (g(t2, "<") && G(t2, "/>")) {
              return t2.substring(1, t2.length - 2);
            } else {
              return t2;
            }
          }
          function Z(e2, t2) {
            if (t2.indexOf("closest ") === 0) {
              return [v(e2, J(t2.substr(8)))];
            } else if (t2.indexOf("find ") === 0) {
              return [C(e2, J(t2.substr(5)))];
            } else if (t2 === "next") {
              return [e2.nextElementSibling];
            } else if (t2.indexOf("next ") === 0) {
              return [K(e2, J(t2.substr(5)))];
            } else if (t2 === "previous") {
              return [e2.previousElementSibling];
            } else if (t2.indexOf("previous ") === 0) {
              return [Y(e2, J(t2.substr(9)))];
            } else if (t2 === "document") {
              return [document];
            } else if (t2 === "window") {
              return [window];
            } else if (t2 === "body") {
              return [document.body];
            } else {
              return re().querySelectorAll(J(t2));
            }
          }
          var K = function(e2, t2) {
            var r2 = re().querySelectorAll(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_PRECEDING) {
                return i2;
              }
            }
          };
          var Y = function(e2, t2) {
            var r2 = re().querySelectorAll(t2);
            for (var n2 = r2.length - 1; n2 >= 0; n2--) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_FOLLOWING) {
                return i2;
              }
            }
          };
          function ue(e2, t2) {
            if (t2) {
              return Z(e2, t2)[0];
            } else {
              return Z(re().body, e2)[0];
            }
          }
          function p(e2) {
            if (I(e2, "String")) {
              return C(e2);
            } else {
              return e2;
            }
          }
          function ve(e2, t2, r2) {
            if (k(t2)) {
              return { target: re().body, event: e2, listener: t2 };
            } else {
              return { target: p(e2), event: t2, listener: r2 };
            }
          }
          function de(t2, r2, n2) {
            jr(function() {
              var e3 = ve(t2, r2, n2);
              e3.target.addEventListener(e3.event, e3.listener);
            });
            var e2 = k(r2);
            return e2 ? r2 : n2;
          }
          function ge(t2, r2, n2) {
            jr(function() {
              var e2 = ve(t2, r2, n2);
              e2.target.removeEventListener(e2.event, e2.listener);
            });
            return k(r2) ? r2 : n2;
          }
          var pe = re().createElement("output");
          function me(e2, t2) {
            var r2 = ne(e2, t2);
            if (r2) {
              if (r2 === "this") {
                return [xe(e2, t2)];
              } else {
                var n2 = Z(e2, r2);
                if (n2.length === 0) {
                  b('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
                  return [pe];
                } else {
                  return n2;
                }
              }
            }
          }
          function xe(e2, t2) {
            return c(e2, function(e3) {
              return te(e3, t2) != null;
            });
          }
          function ye(e2) {
            var t2 = ne(e2, "hx-target");
            if (t2) {
              if (t2 === "this") {
                return xe(e2, "hx-target");
              } else {
                return ue(e2, t2);
              }
            } else {
              var r2 = ae(e2);
              if (r2.boosted) {
                return re().body;
              } else {
                return e2;
              }
            }
          }
          function be(e2) {
            var t2 = Q.config.attributesToSettle;
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (e2 === t2[r2]) {
                return true;
              }
            }
            return false;
          }
          function we(t2, r2) {
            oe(t2.attributes, function(e2) {
              if (!r2.hasAttribute(e2.name) && be(e2.name)) {
                t2.removeAttribute(e2.name);
              }
            });
            oe(r2.attributes, function(e2) {
              if (be(e2.name)) {
                t2.setAttribute(e2.name, e2.value);
              }
            });
          }
          function Se(e2, t2) {
            var r2 = Fr(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              try {
                if (i2.isInlineSwap(e2)) {
                  return true;
                }
              } catch (e3) {
                b(e3);
              }
            }
            return e2 === "outerHTML";
          }
          function Ee(e2, i2, a2) {
            var t2 = "#" + ee(i2, "id");
            var o2 = "outerHTML";
            if (e2 === "true") {
            } else if (e2.indexOf(":") > 0) {
              o2 = e2.substr(0, e2.indexOf(":"));
              t2 = e2.substr(e2.indexOf(":") + 1, e2.length);
            } else {
              o2 = e2;
            }
            var r2 = re().querySelectorAll(t2);
            if (r2) {
              oe(r2, function(e3) {
                var t3;
                var r3 = i2.cloneNode(true);
                t3 = re().createDocumentFragment();
                t3.appendChild(r3);
                if (!Se(o2, e3)) {
                  t3 = r3;
                }
                var n2 = { shouldSwap: true, target: e3, fragment: t3 };
                if (!ce(e3, "htmx:oobBeforeSwap", n2)) return;
                e3 = n2.target;
                if (n2["shouldSwap"]) {
                  Fe(o2, e3, e3, t3, a2);
                }
                oe(a2.elts, function(e4) {
                  ce(e4, "htmx:oobAfterSwap", n2);
                });
              });
              i2.parentNode.removeChild(i2);
            } else {
              i2.parentNode.removeChild(i2);
              fe(re().body, "htmx:oobErrorNoTarget", { content: i2 });
            }
            return e2;
          }
          function Ce(e2, t2, r2) {
            var n2 = ne(e2, "hx-select-oob");
            if (n2) {
              var i2 = n2.split(",");
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2].split(":", 2);
                var s2 = o2[0].trim();
                if (s2.indexOf("#") === 0) {
                  s2 = s2.substring(1);
                }
                var l2 = o2[1] || "true";
                var u2 = t2.querySelector("#" + s2);
                if (u2) {
                  Ee(l2, u2, r2);
                }
              }
            }
            oe(f(t2, "[hx-swap-oob], [data-hx-swap-oob]"), function(e3) {
              var t3 = te(e3, "hx-swap-oob");
              if (t3 != null) {
                Ee(t3, e3, r2);
              }
            });
          }
          function Re(e2) {
            oe(f(e2, "[hx-preserve], [data-hx-preserve]"), function(e3) {
              var t2 = te(e3, "id");
              var r2 = re().getElementById(t2);
              if (r2 != null) {
                e3.parentNode.replaceChild(r2, e3);
              }
            });
          }
          function Te(o2, e2, s2) {
            oe(e2.querySelectorAll("[id]"), function(e3) {
              var t2 = ee(e3, "id");
              if (t2 && t2.length > 0) {
                var r2 = t2.replace("'", "\\'");
                var n2 = e3.tagName.replace(":", "\\:");
                var i2 = o2.querySelector(n2 + "[id='" + r2 + "']");
                if (i2 && i2 !== o2) {
                  var a2 = e3.cloneNode();
                  we(e3, i2);
                  s2.tasks.push(function() {
                    we(e3, a2);
                  });
                }
              }
            });
          }
          function Oe(e2) {
            return function() {
              n(e2, Q.config.addedClass);
              zt(e2);
              Nt(e2);
              qe(e2);
              ce(e2, "htmx:load");
            };
          }
          function qe(e2) {
            var t2 = "[autofocus]";
            var r2 = h(e2, t2) ? e2 : e2.querySelector(t2);
            if (r2 != null) {
              r2.focus();
            }
          }
          function a(e2, t2, r2, n2) {
            Te(e2, r2, n2);
            while (r2.childNodes.length > 0) {
              var i2 = r2.firstChild;
              z(i2, Q.config.addedClass);
              e2.insertBefore(i2, t2);
              if (i2.nodeType !== Node.TEXT_NODE && i2.nodeType !== Node.COMMENT_NODE) {
                n2.tasks.push(Oe(i2));
              }
            }
          }
          function He(e2, t2) {
            var r2 = 0;
            while (r2 < e2.length) {
              t2 = (t2 << 5) - t2 + e2.charCodeAt(r2++) | 0;
            }
            return t2;
          }
          function Le(e2) {
            var t2 = 0;
            if (e2.attributes) {
              for (var r2 = 0; r2 < e2.attributes.length; r2++) {
                var n2 = e2.attributes[r2];
                if (n2.value) {
                  t2 = He(n2.name, t2);
                  t2 = He(n2.value, t2);
                }
              }
            }
            return t2;
          }
          function Ae(e2) {
            var t2 = ae(e2);
            if (t2.onHandlers) {
              for (var r2 = 0; r2 < t2.onHandlers.length; r2++) {
                const n2 = t2.onHandlers[r2];
                e2.removeEventListener(n2.event, n2.listener);
              }
              delete t2.onHandlers;
            }
          }
          function Ne(e2) {
            var t2 = ae(e2);
            if (t2.timeout) {
              clearTimeout(t2.timeout);
            }
            if (t2.webSocket) {
              t2.webSocket.close();
            }
            if (t2.sseEventSource) {
              t2.sseEventSource.close();
            }
            if (t2.listenerInfos) {
              oe(t2.listenerInfos, function(e3) {
                if (e3.on) {
                  e3.on.removeEventListener(e3.trigger, e3.listener);
                }
              });
            }
            Ae(e2);
            oe(Object.keys(t2), function(e3) {
              delete t2[e3];
            });
          }
          function m(e2) {
            ce(e2, "htmx:beforeCleanupElement");
            Ne(e2);
            if (e2.children) {
              oe(e2.children, function(e3) {
                m(e3);
              });
            }
          }
          function Ie(t2, e2, r2) {
            if (t2.tagName === "BODY") {
              return Ue(t2, e2, r2);
            } else {
              var n2;
              var i2 = t2.previousSibling;
              a(u(t2), t2, e2, r2);
              if (i2 == null) {
                n2 = u(t2).firstChild;
              } else {
                n2 = i2.nextSibling;
              }
              r2.elts = r2.elts.filter(function(e3) {
                return e3 != t2;
              });
              while (n2 && n2 !== t2) {
                if (n2.nodeType === Node.ELEMENT_NODE) {
                  r2.elts.push(n2);
                }
                n2 = n2.nextElementSibling;
              }
              m(t2);
              u(t2).removeChild(t2);
            }
          }
          function ke(e2, t2, r2) {
            return a(e2, e2.firstChild, t2, r2);
          }
          function Pe(e2, t2, r2) {
            return a(u(e2), e2, t2, r2);
          }
          function Me(e2, t2, r2) {
            return a(e2, null, t2, r2);
          }
          function Xe(e2, t2, r2) {
            return a(u(e2), e2.nextSibling, t2, r2);
          }
          function De(e2, t2, r2) {
            m(e2);
            return u(e2).removeChild(e2);
          }
          function Ue(e2, t2, r2) {
            var n2 = e2.firstChild;
            a(e2, n2, t2, r2);
            if (n2) {
              while (n2.nextSibling) {
                m(n2.nextSibling);
                e2.removeChild(n2.nextSibling);
              }
              m(n2);
              e2.removeChild(n2);
            }
          }
          function Be(e2, t2, r2) {
            var n2 = r2 || ne(e2, "hx-select");
            if (n2) {
              var i2 = re().createDocumentFragment();
              oe(t2.querySelectorAll(n2), function(e3) {
                i2.appendChild(e3);
              });
              t2 = i2;
            }
            return t2;
          }
          function Fe(e2, t2, r2, n2, i2) {
            switch (e2) {
              case "none":
                return;
              case "outerHTML":
                Ie(r2, n2, i2);
                return;
              case "afterbegin":
                ke(r2, n2, i2);
                return;
              case "beforebegin":
                Pe(r2, n2, i2);
                return;
              case "beforeend":
                Me(r2, n2, i2);
                return;
              case "afterend":
                Xe(r2, n2, i2);
                return;
              case "delete":
                De(r2, n2, i2);
                return;
              default:
                var a2 = Fr(t2);
                for (var o2 = 0; o2 < a2.length; o2++) {
                  var s2 = a2[o2];
                  try {
                    var l2 = s2.handleSwap(e2, r2, n2, i2);
                    if (l2) {
                      if (typeof l2.length !== "undefined") {
                        for (var u2 = 0; u2 < l2.length; u2++) {
                          var f2 = l2[u2];
                          if (f2.nodeType !== Node.TEXT_NODE && f2.nodeType !== Node.COMMENT_NODE) {
                            i2.tasks.push(Oe(f2));
                          }
                        }
                      }
                      return;
                    }
                  } catch (e3) {
                    b(e3);
                  }
                }
                if (e2 === "innerHTML") {
                  Ue(r2, n2, i2);
                } else {
                  Fe(Q.config.defaultSwapStyle, t2, r2, n2, i2);
                }
            }
          }
          function Ve(e2) {
            if (e2.indexOf("<title") > -1) {
              var t2 = e2.replace(H, "");
              var r2 = t2.match(q);
              if (r2) {
                return r2[2];
              }
            }
          }
          function je(e2, t2, r2, n2, i2, a2) {
            i2.title = Ve(n2);
            var o2 = l(n2);
            if (o2) {
              Ce(r2, o2, i2);
              o2 = Be(r2, o2, a2);
              Re(o2);
              return Fe(e2, r2, t2, o2, i2);
            }
          }
          function _e(e2, t2, r2) {
            var n2 = e2.getResponseHeader(t2);
            if (n2.indexOf("{") === 0) {
              var i2 = E(n2);
              for (var a2 in i2) {
                if (i2.hasOwnProperty(a2)) {
                  var o2 = i2[a2];
                  if (!P(o2)) {
                    o2 = { value: o2 };
                  }
                  ce(r2, a2, o2);
                }
              }
            } else {
              var s2 = n2.split(",");
              for (var l2 = 0; l2 < s2.length; l2++) {
                ce(r2, s2[l2].trim(), []);
              }
            }
          }
          var ze = /\s/;
          var x = /[\s,]/;
          var $e = /[_$a-zA-Z]/;
          var We = /[_$a-zA-Z0-9]/;
          var Ge = ['"', "'", "/"];
          var Je = /[^\s]/;
          var Ze = /[{(]/;
          var Ke = /[})]/;
          function Ye(e2) {
            var t2 = [];
            var r2 = 0;
            while (r2 < e2.length) {
              if ($e.exec(e2.charAt(r2))) {
                var n2 = r2;
                while (We.exec(e2.charAt(r2 + 1))) {
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else if (Ge.indexOf(e2.charAt(r2)) !== -1) {
                var i2 = e2.charAt(r2);
                var n2 = r2;
                r2++;
                while (r2 < e2.length && e2.charAt(r2) !== i2) {
                  if (e2.charAt(r2) === "\\") {
                    r2++;
                  }
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else {
                var a2 = e2.charAt(r2);
                t2.push(a2);
              }
              r2++;
            }
            return t2;
          }
          function Qe(e2, t2, r2) {
            return $e.exec(e2.charAt(0)) && e2 !== "true" && e2 !== "false" && e2 !== "this" && e2 !== r2 && t2 !== ".";
          }
          function et(e2, t2, r2) {
            if (t2[0] === "[") {
              t2.shift();
              var n2 = 1;
              var i2 = " return (function(" + r2 + "){ return (";
              var a2 = null;
              while (t2.length > 0) {
                var o2 = t2[0];
                if (o2 === "]") {
                  n2--;
                  if (n2 === 0) {
                    if (a2 === null) {
                      i2 = i2 + "true";
                    }
                    t2.shift();
                    i2 += ")})";
                    try {
                      var s2 = Tr(e2, function() {
                        return Function(i2)();
                      }, function() {
                        return true;
                      });
                      s2.source = i2;
                      return s2;
                    } catch (e3) {
                      fe(re().body, "htmx:syntax:error", { error: e3, source: i2 });
                      return null;
                    }
                  }
                } else if (o2 === "[") {
                  n2++;
                }
                if (Qe(o2, a2, r2)) {
                  i2 += "((" + r2 + "." + o2 + ") ? (" + r2 + "." + o2 + ") : (window." + o2 + "))";
                } else {
                  i2 = i2 + o2;
                }
                a2 = t2.shift();
              }
            }
          }
          function y(e2, t2) {
            var r2 = "";
            while (e2.length > 0 && !t2.test(e2[0])) {
              r2 += e2.shift();
            }
            return r2;
          }
          function tt(e2) {
            var t2;
            if (e2.length > 0 && Ze.test(e2[0])) {
              e2.shift();
              t2 = y(e2, Ke).trim();
              e2.shift();
            } else {
              t2 = y(e2, x);
            }
            return t2;
          }
          var rt = "input, textarea, select";
          function nt(e2, t2, r2) {
            var n2 = [];
            var i2 = Ye(t2);
            do {
              y(i2, Je);
              var a2 = i2.length;
              var o2 = y(i2, /[,\[\s]/);
              if (o2 !== "") {
                if (o2 === "every") {
                  var s2 = { trigger: "every" };
                  y(i2, Je);
                  s2.pollInterval = d(y(i2, /[,\[\s]/));
                  y(i2, Je);
                  var l2 = et(e2, i2, "event");
                  if (l2) {
                    s2.eventFilter = l2;
                  }
                  n2.push(s2);
                } else if (o2.indexOf("sse:") === 0) {
                  n2.push({ trigger: "sse", sseEvent: o2.substr(4) });
                } else {
                  var u2 = { trigger: o2 };
                  var l2 = et(e2, i2, "event");
                  if (l2) {
                    u2.eventFilter = l2;
                  }
                  while (i2.length > 0 && i2[0] !== ",") {
                    y(i2, Je);
                    var f2 = i2.shift();
                    if (f2 === "changed") {
                      u2.changed = true;
                    } else if (f2 === "once") {
                      u2.once = true;
                    } else if (f2 === "consume") {
                      u2.consume = true;
                    } else if (f2 === "delay" && i2[0] === ":") {
                      i2.shift();
                      u2.delay = d(y(i2, x));
                    } else if (f2 === "from" && i2[0] === ":") {
                      i2.shift();
                      if (Ze.test(i2[0])) {
                        var c2 = tt(i2);
                      } else {
                        var c2 = y(i2, x);
                        if (c2 === "closest" || c2 === "find" || c2 === "next" || c2 === "previous") {
                          i2.shift();
                          var h2 = tt(i2);
                          if (h2.length > 0) {
                            c2 += " " + h2;
                          }
                        }
                      }
                      u2.from = c2;
                    } else if (f2 === "target" && i2[0] === ":") {
                      i2.shift();
                      u2.target = tt(i2);
                    } else if (f2 === "throttle" && i2[0] === ":") {
                      i2.shift();
                      u2.throttle = d(y(i2, x));
                    } else if (f2 === "queue" && i2[0] === ":") {
                      i2.shift();
                      u2.queue = y(i2, x);
                    } else if (f2 === "root" && i2[0] === ":") {
                      i2.shift();
                      u2[f2] = tt(i2);
                    } else if (f2 === "threshold" && i2[0] === ":") {
                      i2.shift();
                      u2[f2] = y(i2, x);
                    } else {
                      fe(e2, "htmx:syntax:error", { token: i2.shift() });
                    }
                  }
                  n2.push(u2);
                }
              }
              if (i2.length === a2) {
                fe(e2, "htmx:syntax:error", { token: i2.shift() });
              }
              y(i2, Je);
            } while (i2[0] === "," && i2.shift());
            if (r2) {
              r2[t2] = n2;
            }
            return n2;
          }
          function it(e2) {
            var t2 = te(e2, "hx-trigger");
            var r2 = [];
            if (t2) {
              var n2 = Q.config.triggerSpecsCache;
              r2 = n2 && n2[t2] || nt(e2, t2, n2);
            }
            if (r2.length > 0) {
              return r2;
            } else if (h(e2, "form")) {
              return [{ trigger: "submit" }];
            } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
              return [{ trigger: "click" }];
            } else if (h(e2, rt)) {
              return [{ trigger: "change" }];
            } else {
              return [{ trigger: "click" }];
            }
          }
          function at(e2) {
            ae(e2).cancelled = true;
          }
          function ot(e2, t2, r2) {
            var n2 = ae(e2);
            n2.timeout = setTimeout(function() {
              if (se(e2) && n2.cancelled !== true) {
                if (!ct(r2, e2, Wt("hx:poll:trigger", { triggerSpec: r2, target: e2 }))) {
                  t2(e2);
                }
                ot(e2, t2, r2);
              }
            }, r2.pollInterval);
          }
          function st(e2) {
            return location.hostname === e2.hostname && ee(e2, "href") && ee(e2, "href").indexOf("#") !== 0;
          }
          function lt(t2, r2, e2) {
            if (t2.tagName === "A" && st(t2) && (t2.target === "" || t2.target === "_self") || t2.tagName === "FORM") {
              r2.boosted = true;
              var n2, i2;
              if (t2.tagName === "A") {
                n2 = "get";
                i2 = ee(t2, "href");
              } else {
                var a2 = ee(t2, "method");
                n2 = a2 ? a2.toLowerCase() : "get";
                if (n2 === "get") {
                }
                i2 = ee(t2, "action");
              }
              e2.forEach(function(e3) {
                ht(t2, function(e4, t3) {
                  if (v(e4, Q.config.disableSelector)) {
                    m(e4);
                    return;
                  }
                  he(n2, i2, e4, t3);
                }, r2, e3, true);
              });
            }
          }
          function ut(e2, t2) {
            if (e2.type === "submit" || e2.type === "click") {
              if (t2.tagName === "FORM") {
                return true;
              }
              if (h(t2, 'input[type="submit"], button') && v(t2, "form") !== null) {
                return true;
              }
              if (t2.tagName === "A" && t2.href && (t2.getAttribute("href") === "#" || t2.getAttribute("href").indexOf("#") !== 0)) {
                return true;
              }
            }
            return false;
          }
          function ft(e2, t2) {
            return ae(e2).boosted && e2.tagName === "A" && t2.type === "click" && (t2.ctrlKey || t2.metaKey);
          }
          function ct(e2, t2, r2) {
            var n2 = e2.eventFilter;
            if (n2) {
              try {
                return n2.call(t2, r2) !== true;
              } catch (e3) {
                fe(re().body, "htmx:eventFilter:error", { error: e3, source: n2.source });
                return true;
              }
            }
            return false;
          }
          function ht(a2, o2, e2, s2, l2) {
            var u2 = ae(a2);
            var t2;
            if (s2.from) {
              t2 = Z(a2, s2.from);
            } else {
              t2 = [a2];
            }
            if (s2.changed) {
              t2.forEach(function(e3) {
                var t3 = ae(e3);
                t3.lastValue = e3.value;
              });
            }
            oe(t2, function(n2) {
              var i2 = function(e3) {
                if (!se(a2)) {
                  n2.removeEventListener(s2.trigger, i2);
                  return;
                }
                if (ft(a2, e3)) {
                  return;
                }
                if (l2 || ut(e3, a2)) {
                  e3.preventDefault();
                }
                if (ct(s2, a2, e3)) {
                  return;
                }
                var t3 = ae(e3);
                t3.triggerSpec = s2;
                if (t3.handledFor == null) {
                  t3.handledFor = [];
                }
                if (t3.handledFor.indexOf(a2) < 0) {
                  t3.handledFor.push(a2);
                  if (s2.consume) {
                    e3.stopPropagation();
                  }
                  if (s2.target && e3.target) {
                    if (!h(e3.target, s2.target)) {
                      return;
                    }
                  }
                  if (s2.once) {
                    if (u2.triggeredOnce) {
                      return;
                    } else {
                      u2.triggeredOnce = true;
                    }
                  }
                  if (s2.changed) {
                    var r2 = ae(n2);
                    if (r2.lastValue === n2.value) {
                      return;
                    }
                    r2.lastValue = n2.value;
                  }
                  if (u2.delayed) {
                    clearTimeout(u2.delayed);
                  }
                  if (u2.throttle) {
                    return;
                  }
                  if (s2.throttle > 0) {
                    if (!u2.throttle) {
                      o2(a2, e3);
                      u2.throttle = setTimeout(function() {
                        u2.throttle = null;
                      }, s2.throttle);
                    }
                  } else if (s2.delay > 0) {
                    u2.delayed = setTimeout(function() {
                      o2(a2, e3);
                    }, s2.delay);
                  } else {
                    ce(a2, "htmx:trigger");
                    o2(a2, e3);
                  }
                }
              };
              if (e2.listenerInfos == null) {
                e2.listenerInfos = [];
              }
              e2.listenerInfos.push({ trigger: s2.trigger, listener: i2, on: n2 });
              n2.addEventListener(s2.trigger, i2);
            });
          }
          var vt = false;
          var dt = null;
          function gt() {
            if (!dt) {
              dt = function() {
                vt = true;
              };
              window.addEventListener("scroll", dt);
              setInterval(function() {
                if (vt) {
                  vt = false;
                  oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e2) {
                    pt(e2);
                  });
                }
              }, 200);
            }
          }
          function pt(t2) {
            if (!o(t2, "data-hx-revealed") && X(t2)) {
              t2.setAttribute("data-hx-revealed", "true");
              var e2 = ae(t2);
              if (e2.initHash) {
                ce(t2, "revealed");
              } else {
                t2.addEventListener("htmx:afterProcessNode", function(e3) {
                  ce(t2, "revealed");
                }, { once: true });
              }
            }
          }
          function mt(e2, t2, r2) {
            var n2 = D(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                xt(e2, a2[1], 0);
              }
              if (a2[0] === "send") {
                bt(e2);
              }
            }
          }
          function xt(s2, r2, n2) {
            if (!se(s2)) {
              return;
            }
            if (r2.indexOf("/") == 0) {
              var e2 = location.hostname + (location.port ? ":" + location.port : "");
              if (location.protocol == "https:") {
                r2 = "wss://" + e2 + r2;
              } else if (location.protocol == "http:") {
                r2 = "ws://" + e2 + r2;
              }
            }
            var t2 = Q.createWebSocket(r2);
            t2.onerror = function(e3) {
              fe(s2, "htmx:wsError", { error: e3, socket: t2 });
              yt(s2);
            };
            t2.onclose = function(e3) {
              if ([1006, 1012, 1013].indexOf(e3.code) >= 0) {
                var t3 = wt(n2);
                setTimeout(function() {
                  xt(s2, r2, n2 + 1);
                }, t3);
              }
            };
            t2.onopen = function(e3) {
              n2 = 0;
            };
            ae(s2).webSocket = t2;
            t2.addEventListener("message", function(e3) {
              if (yt(s2)) {
                return;
              }
              var t3 = e3.data;
              R(s2, function(e4) {
                t3 = e4.transformResponse(t3, null, s2);
              });
              var r3 = T(s2);
              var n3 = l(t3);
              var i2 = M(n3.children);
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2];
                Ee(te(o2, "hx-swap-oob") || "true", o2, r3);
              }
              nr(r3.tasks);
            });
          }
          function yt(e2) {
            if (!se(e2)) {
              ae(e2).webSocket.close();
              return true;
            }
          }
          function bt(u2) {
            var f2 = c(u2, function(e2) {
              return ae(e2).webSocket != null;
            });
            if (f2) {
              u2.addEventListener(it(u2)[0].trigger, function(e2) {
                var t2 = ae(f2).webSocket;
                var r2 = xr(u2, f2);
                var n2 = dr(u2, "post");
                var i2 = n2.errors;
                var a2 = n2.values;
                var o2 = Hr(u2);
                var s2 = le(a2, o2);
                var l2 = yr(s2, u2);
                l2["HEADERS"] = r2;
                if (i2 && i2.length > 0) {
                  ce(u2, "htmx:validation:halted", i2);
                  return;
                }
                t2.send(JSON.stringify(l2));
                if (ut(e2, u2)) {
                  e2.preventDefault();
                }
              });
            } else {
              fe(u2, "htmx:noWebSocketSourceError");
            }
          }
          function wt(e2) {
            var t2 = Q.config.wsReconnectDelay;
            if (typeof t2 === "function") {
              return t2(e2);
            }
            if (t2 === "full-jitter") {
              var r2 = Math.min(e2, 6);
              var n2 = 1e3 * Math.pow(2, r2);
              return n2 * Math.random();
            }
            b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
          }
          function St(e2, t2, r2) {
            var n2 = D(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                Et(e2, a2[1]);
              }
              if (a2[0] === "swap") {
                Ct(e2, a2[1]);
              }
            }
          }
          function Et(t2, e2) {
            var r2 = Q.createEventSource(e2);
            r2.onerror = function(e3) {
              fe(t2, "htmx:sseError", { error: e3, source: r2 });
              Tt(t2);
            };
            ae(t2).sseEventSource = r2;
          }
          function Ct(a2, o2) {
            var s2 = c(a2, Ot);
            if (s2) {
              var l2 = ae(s2).sseEventSource;
              var u2 = function(e2) {
                if (Tt(s2)) {
                  return;
                }
                if (!se(a2)) {
                  l2.removeEventListener(o2, u2);
                  return;
                }
                var t2 = e2.data;
                R(a2, function(e3) {
                  t2 = e3.transformResponse(t2, null, a2);
                });
                var r2 = wr(a2);
                var n2 = ye(a2);
                var i2 = T(a2);
                je(r2.swapStyle, n2, a2, t2, i2);
                nr(i2.tasks);
                ce(a2, "htmx:sseMessage", e2);
              };
              ae(a2).sseListener = u2;
              l2.addEventListener(o2, u2);
            } else {
              fe(a2, "htmx:noSSESourceError");
            }
          }
          function Rt(e2, t2, r2) {
            var n2 = c(e2, Ot);
            if (n2) {
              var i2 = ae(n2).sseEventSource;
              var a2 = function() {
                if (!Tt(n2)) {
                  if (se(e2)) {
                    t2(e2);
                  } else {
                    i2.removeEventListener(r2, a2);
                  }
                }
              };
              ae(e2).sseListener = a2;
              i2.addEventListener(r2, a2);
            } else {
              fe(e2, "htmx:noSSESourceError");
            }
          }
          function Tt(e2) {
            if (!se(e2)) {
              ae(e2).sseEventSource.close();
              return true;
            }
          }
          function Ot(e2) {
            return ae(e2).sseEventSource != null;
          }
          function qt(e2, t2, r2, n2) {
            var i2 = function() {
              if (!r2.loaded) {
                r2.loaded = true;
                t2(e2);
              }
            };
            if (n2 > 0) {
              setTimeout(i2, n2);
            } else {
              i2();
            }
          }
          function Ht(t2, i2, e2) {
            var a2 = false;
            oe(w, function(r2) {
              if (o(t2, "hx-" + r2)) {
                var n2 = te(t2, "hx-" + r2);
                a2 = true;
                i2.path = n2;
                i2.verb = r2;
                e2.forEach(function(e3) {
                  Lt(t2, e3, i2, function(e4, t3) {
                    if (v(e4, Q.config.disableSelector)) {
                      m(e4);
                      return;
                    }
                    he(r2, n2, e4, t3);
                  });
                });
              }
            });
            return a2;
          }
          function Lt(n2, e2, t2, r2) {
            if (e2.sseEvent) {
              Rt(n2, r2, e2.sseEvent);
            } else if (e2.trigger === "revealed") {
              gt();
              ht(n2, r2, t2, e2);
              pt(n2);
            } else if (e2.trigger === "intersect") {
              var i2 = {};
              if (e2.root) {
                i2.root = ue(n2, e2.root);
              }
              if (e2.threshold) {
                i2.threshold = parseFloat(e2.threshold);
              }
              var a2 = new IntersectionObserver(function(e3) {
                for (var t3 = 0; t3 < e3.length; t3++) {
                  var r3 = e3[t3];
                  if (r3.isIntersecting) {
                    ce(n2, "intersect");
                    break;
                  }
                }
              }, i2);
              a2.observe(n2);
              ht(n2, r2, t2, e2);
            } else if (e2.trigger === "load") {
              if (!ct(e2, n2, Wt("load", { elt: n2 }))) {
                qt(n2, r2, t2, e2.delay);
              }
            } else if (e2.pollInterval > 0) {
              t2.polling = true;
              ot(n2, r2, e2);
            } else {
              ht(n2, r2, t2, e2);
            }
          }
          function At(e2) {
            if (!e2.htmxExecuted && Q.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
              var t2 = re().createElement("script");
              oe(e2.attributes, function(e3) {
                t2.setAttribute(e3.name, e3.value);
              });
              t2.textContent = e2.textContent;
              t2.async = false;
              if (Q.config.inlineScriptNonce) {
                t2.nonce = Q.config.inlineScriptNonce;
              }
              var r2 = e2.parentElement;
              try {
                r2.insertBefore(t2, e2);
              } catch (e3) {
                b(e3);
              } finally {
                if (e2.parentElement) {
                  e2.parentElement.removeChild(e2);
                }
              }
            }
          }
          function Nt(e2) {
            if (h(e2, "script")) {
              At(e2);
            }
            oe(f(e2, "script"), function(e3) {
              At(e3);
            });
          }
          function It(e2) {
            var t2 = e2.attributes;
            if (!t2) {
              return false;
            }
            for (var r2 = 0; r2 < t2.length; r2++) {
              var n2 = t2[r2].name;
              if (g(n2, "hx-on:") || g(n2, "data-hx-on:") || g(n2, "hx-on-") || g(n2, "data-hx-on-")) {
                return true;
              }
            }
            return false;
          }
          function kt(e2) {
            var t2 = null;
            var r2 = [];
            if (It(e2)) {
              r2.push(e2);
            }
            if (document.evaluate) {
              var n2 = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', e2);
              while (t2 = n2.iterateNext()) r2.push(t2);
            } else if (typeof e2.getElementsByTagName === "function") {
              var i2 = e2.getElementsByTagName("*");
              for (var a2 = 0; a2 < i2.length; a2++) {
                if (It(i2[a2])) {
                  r2.push(i2[a2]);
                }
              }
            }
            return r2;
          }
          function Pt(e2) {
            if (e2.querySelectorAll) {
              var t2 = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
              var r2 = e2.querySelectorAll(i + t2 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
              return r2;
            } else {
              return [];
            }
          }
          function Mt(e2) {
            var t2 = v(e2.target, "button, input[type='submit']");
            var r2 = Dt(e2);
            if (r2) {
              r2.lastButtonClicked = t2;
            }
          }
          function Xt(e2) {
            var t2 = Dt(e2);
            if (t2) {
              t2.lastButtonClicked = null;
            }
          }
          function Dt(e2) {
            var t2 = v(e2.target, "button, input[type='submit']");
            if (!t2) {
              return;
            }
            var r2 = p("#" + ee(t2, "form")) || v(t2, "form");
            if (!r2) {
              return;
            }
            return ae(r2);
          }
          function Ut(e2) {
            e2.addEventListener("click", Mt);
            e2.addEventListener("focusin", Mt);
            e2.addEventListener("focusout", Xt);
          }
          function Bt(e2) {
            var t2 = Ye(e2);
            var r2 = 0;
            for (var n2 = 0; n2 < t2.length; n2++) {
              const i2 = t2[n2];
              if (i2 === "{") {
                r2++;
              } else if (i2 === "}") {
                r2--;
              }
            }
            return r2;
          }
          function Ft(t2, e2, r2) {
            var n2 = ae(t2);
            if (!Array.isArray(n2.onHandlers)) {
              n2.onHandlers = [];
            }
            var i2;
            var a2 = function(e3) {
              return Tr(t2, function() {
                if (!i2) {
                  i2 = new Function("event", r2);
                }
                i2.call(t2, e3);
              });
            };
            t2.addEventListener(e2, a2);
            n2.onHandlers.push({ event: e2, listener: a2 });
          }
          function Vt(e2) {
            var t2 = te(e2, "hx-on");
            if (t2) {
              var r2 = {};
              var n2 = t2.split("\n");
              var i2 = null;
              var a2 = 0;
              while (n2.length > 0) {
                var o2 = n2.shift();
                var s2 = o2.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                if (a2 === 0 && s2) {
                  o2.split(":");
                  i2 = s2[1].slice(0, -1);
                  r2[i2] = s2[2];
                } else {
                  r2[i2] += o2;
                }
                a2 += Bt(o2);
              }
              for (var l2 in r2) {
                Ft(e2, l2, r2[l2]);
              }
            }
          }
          function jt(e2) {
            Ae(e2);
            for (var t2 = 0; t2 < e2.attributes.length; t2++) {
              var r2 = e2.attributes[t2].name;
              var n2 = e2.attributes[t2].value;
              if (g(r2, "hx-on") || g(r2, "data-hx-on")) {
                var i2 = r2.indexOf("-on") + 3;
                var a2 = r2.slice(i2, i2 + 1);
                if (a2 === "-" || a2 === ":") {
                  var o2 = r2.slice(i2 + 1);
                  if (g(o2, ":")) {
                    o2 = "htmx" + o2;
                  } else if (g(o2, "-")) {
                    o2 = "htmx:" + o2.slice(1);
                  } else if (g(o2, "htmx-")) {
                    o2 = "htmx:" + o2.slice(5);
                  }
                  Ft(e2, o2, n2);
                }
              }
            }
          }
          function _t(t2) {
            if (v(t2, Q.config.disableSelector)) {
              m(t2);
              return;
            }
            var r2 = ae(t2);
            if (r2.initHash !== Le(t2)) {
              Ne(t2);
              r2.initHash = Le(t2);
              Vt(t2);
              ce(t2, "htmx:beforeProcessNode");
              if (t2.value) {
                r2.lastValue = t2.value;
              }
              var e2 = it(t2);
              var n2 = Ht(t2, r2, e2);
              if (!n2) {
                if (ne(t2, "hx-boost") === "true") {
                  lt(t2, r2, e2);
                } else if (o(t2, "hx-trigger")) {
                  e2.forEach(function(e3) {
                    Lt(t2, e3, r2, function() {
                    });
                  });
                }
              }
              if (t2.tagName === "FORM" || ee(t2, "type") === "submit" && o(t2, "form")) {
                Ut(t2);
              }
              var i2 = te(t2, "hx-sse");
              if (i2) {
                St(t2, r2, i2);
              }
              var a2 = te(t2, "hx-ws");
              if (a2) {
                mt(t2, r2, a2);
              }
              ce(t2, "htmx:afterProcessNode");
            }
          }
          function zt(e2) {
            e2 = p(e2);
            if (v(e2, Q.config.disableSelector)) {
              m(e2);
              return;
            }
            _t(e2);
            oe(Pt(e2), function(e3) {
              _t(e3);
            });
            oe(kt(e2), jt);
          }
          function $t(e2) {
            return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
          }
          function Wt(e2, t2) {
            var r2;
            if (window.CustomEvent && typeof window.CustomEvent === "function") {
              r2 = new CustomEvent(e2, { bubbles: true, cancelable: true, detail: t2 });
            } else {
              r2 = re().createEvent("CustomEvent");
              r2.initCustomEvent(e2, true, true, t2);
            }
            return r2;
          }
          function fe(e2, t2, r2) {
            ce(e2, t2, le({ error: t2 }, r2));
          }
          function Gt(e2) {
            return e2 === "htmx:afterProcessNode";
          }
          function R(e2, t2) {
            oe(Fr(e2), function(e3) {
              try {
                t2(e3);
              } catch (e4) {
                b(e4);
              }
            });
          }
          function b(e2) {
            if (console.error) {
              console.error(e2);
            } else if (console.log) {
              console.log("ERROR: ", e2);
            }
          }
          function ce(e2, t2, r2) {
            e2 = p(e2);
            if (r2 == null) {
              r2 = {};
            }
            r2["elt"] = e2;
            var n2 = Wt(t2, r2);
            if (Q.logger && !Gt(t2)) {
              Q.logger(e2, t2, r2);
            }
            if (r2.error) {
              b(r2.error);
              ce(e2, "htmx:error", { errorInfo: r2 });
            }
            var i2 = e2.dispatchEvent(n2);
            var a2 = $t(t2);
            if (i2 && a2 !== t2) {
              var o2 = Wt(a2, n2.detail);
              i2 = i2 && e2.dispatchEvent(o2);
            }
            R(e2, function(e3) {
              i2 = i2 && (e3.onEvent(t2, n2) !== false && !n2.defaultPrevented);
            });
            return i2;
          }
          var Jt = location.pathname + location.search;
          function Zt() {
            var e2 = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
            return e2 || re().body;
          }
          function Kt(e2, t2, r2, n2) {
            if (!U()) {
              return;
            }
            if (Q.config.historyCacheSize <= 0) {
              localStorage.removeItem("htmx-history-cache");
              return;
            }
            e2 = B(e2);
            var i2 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var a2 = 0; a2 < i2.length; a2++) {
              if (i2[a2].url === e2) {
                i2.splice(a2, 1);
                break;
              }
            }
            var o2 = { url: e2, content: t2, title: r2, scroll: n2 };
            ce(re().body, "htmx:historyItemCreated", { item: o2, cache: i2 });
            i2.push(o2);
            while (i2.length > Q.config.historyCacheSize) {
              i2.shift();
            }
            while (i2.length > 0) {
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
                break;
              } catch (e3) {
                fe(re().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
                i2.shift();
              }
            }
          }
          function Yt(e2) {
            if (!U()) {
              return null;
            }
            e2 = B(e2);
            var t2 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (t2[r2].url === e2) {
                return t2[r2];
              }
            }
            return null;
          }
          function Qt(e2) {
            var t2 = Q.config.requestClass;
            var r2 = e2.cloneNode(true);
            oe(f(r2, "." + t2), function(e3) {
              n(e3, t2);
            });
            return r2.innerHTML;
          }
          function er() {
            var e2 = Zt();
            var t2 = Jt || location.pathname + location.search;
            var r2;
            try {
              r2 = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
            } catch (e3) {
              r2 = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
            }
            if (!r2) {
              ce(re().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
              Kt(t2, Qt(e2), re().title, window.scrollY);
            }
            if (Q.config.historyEnabled) history.replaceState({ htmx: true }, re().title, window.location.href);
          }
          function tr(e2) {
            if (Q.config.getCacheBusterParam) {
              e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
              if (G(e2, "&") || G(e2, "?")) {
                e2 = e2.slice(0, -1);
              }
            }
            if (Q.config.historyEnabled) {
              history.pushState({ htmx: true }, "", e2);
            }
            Jt = e2;
          }
          function rr(e2) {
            if (Q.config.historyEnabled) history.replaceState({ htmx: true }, "", e2);
            Jt = e2;
          }
          function nr(e2) {
            oe(e2, function(e3) {
              e3.call();
            });
          }
          function ir(a2) {
            var e2 = new XMLHttpRequest();
            var o2 = { path: a2, xhr: e2 };
            ce(re().body, "htmx:historyCacheMiss", o2);
            e2.open("GET", a2, true);
            e2.setRequestHeader("HX-Request", "true");
            e2.setRequestHeader("HX-History-Restore-Request", "true");
            e2.setRequestHeader("HX-Current-URL", re().location.href);
            e2.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                ce(re().body, "htmx:historyCacheMissLoad", o2);
                var e3 = l(this.response);
                e3 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
                var t2 = Zt();
                var r2 = T(t2);
                var n2 = Ve(this.response);
                if (n2) {
                  var i2 = C("title");
                  if (i2) {
                    i2.innerHTML = n2;
                  } else {
                    window.document.title = n2;
                  }
                }
                Ue(t2, e3, r2);
                nr(r2.tasks);
                Jt = a2;
                ce(re().body, "htmx:historyRestore", { path: a2, cacheMiss: true, serverResponse: this.response });
              } else {
                fe(re().body, "htmx:historyCacheMissLoadError", o2);
              }
            };
            e2.send();
          }
          function ar(e2) {
            er();
            e2 = e2 || location.pathname + location.search;
            var t2 = Yt(e2);
            if (t2) {
              var r2 = l(t2.content);
              var n2 = Zt();
              var i2 = T(n2);
              Ue(n2, r2, i2);
              nr(i2.tasks);
              document.title = t2.title;
              setTimeout(function() {
                window.scrollTo(0, t2.scroll);
              }, 0);
              Jt = e2;
              ce(re().body, "htmx:historyRestore", { path: e2, item: t2 });
            } else {
              if (Q.config.refreshOnHistoryMiss) {
                window.location.reload(true);
              } else {
                ir(e2);
              }
            }
          }
          function or(e2) {
            var t2 = me(e2, "hx-indicator");
            if (t2 == null) {
              t2 = [e2];
            }
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.classList["add"].call(e3.classList, Q.config.requestClass);
            });
            return t2;
          }
          function sr(e2) {
            var t2 = me(e2, "hx-disabled-elt");
            if (t2 == null) {
              t2 = [];
            }
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.setAttribute("disabled", "");
            });
            return t2;
          }
          function lr(e2, t2) {
            oe(e2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.classList["remove"].call(e3.classList, Q.config.requestClass);
              }
            });
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.removeAttribute("disabled");
              }
            });
          }
          function ur(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++) {
              var n2 = e2[r2];
              if (n2.isSameNode(t2)) {
                return true;
              }
            }
            return false;
          }
          function fr(e2) {
            if (e2.name === "" || e2.name == null || e2.disabled || v(e2, "fieldset[disabled]")) {
              return false;
            }
            if (e2.type === "button" || e2.type === "submit" || e2.tagName === "image" || e2.tagName === "reset" || e2.tagName === "file") {
              return false;
            }
            if (e2.type === "checkbox" || e2.type === "radio") {
              return e2.checked;
            }
            return true;
          }
          function cr(e2, t2, r2) {
            if (e2 != null && t2 != null) {
              var n2 = r2[e2];
              if (n2 === void 0) {
                r2[e2] = t2;
              } else if (Array.isArray(n2)) {
                if (Array.isArray(t2)) {
                  r2[e2] = n2.concat(t2);
                } else {
                  n2.push(t2);
                }
              } else {
                if (Array.isArray(t2)) {
                  r2[e2] = [n2].concat(t2);
                } else {
                  r2[e2] = [n2, t2];
                }
              }
            }
          }
          function hr(t2, r2, n2, e2, i2) {
            if (e2 == null || ur(t2, e2)) {
              return;
            } else {
              t2.push(e2);
            }
            if (fr(e2)) {
              var a2 = ee(e2, "name");
              var o2 = e2.value;
              if (e2.multiple && e2.tagName === "SELECT") {
                o2 = M(e2.querySelectorAll("option:checked")).map(function(e3) {
                  return e3.value;
                });
              }
              if (e2.files) {
                o2 = M(e2.files);
              }
              cr(a2, o2, r2);
              if (i2) {
                vr(e2, n2);
              }
            }
            if (h(e2, "form")) {
              var s2 = e2.elements;
              oe(s2, function(e3) {
                hr(t2, r2, n2, e3, i2);
              });
            }
          }
          function vr(e2, t2) {
            if (e2.willValidate) {
              ce(e2, "htmx:validation:validate");
              if (!e2.checkValidity()) {
                t2.push({ elt: e2, message: e2.validationMessage, validity: e2.validity });
                ce(e2, "htmx:validation:failed", { message: e2.validationMessage, validity: e2.validity });
              }
            }
          }
          function dr(e2, t2) {
            var r2 = [];
            var n2 = {};
            var i2 = {};
            var a2 = [];
            var o2 = ae(e2);
            if (o2.lastButtonClicked && !se(o2.lastButtonClicked)) {
              o2.lastButtonClicked = null;
            }
            var s2 = h(e2, "form") && e2.noValidate !== true || te(e2, "hx-validate") === "true";
            if (o2.lastButtonClicked) {
              s2 = s2 && o2.lastButtonClicked.formNoValidate !== true;
            }
            if (t2 !== "get") {
              hr(r2, i2, a2, v(e2, "form"), s2);
            }
            hr(r2, n2, a2, e2, s2);
            if (o2.lastButtonClicked || e2.tagName === "BUTTON" || e2.tagName === "INPUT" && ee(e2, "type") === "submit") {
              var l2 = o2.lastButtonClicked || e2;
              var u2 = ee(l2, "name");
              cr(u2, l2.value, i2);
            }
            var f2 = me(e2, "hx-include");
            oe(f2, function(e3) {
              hr(r2, n2, a2, e3, s2);
              if (!h(e3, "form")) {
                oe(e3.querySelectorAll(rt), function(e4) {
                  hr(r2, n2, a2, e4, s2);
                });
              }
            });
            n2 = le(n2, i2);
            return { errors: a2, values: n2 };
          }
          function gr(e2, t2, r2) {
            if (e2 !== "") {
              e2 += "&";
            }
            if (String(r2) === "[object Object]") {
              r2 = JSON.stringify(r2);
            }
            var n2 = encodeURIComponent(r2);
            e2 += encodeURIComponent(t2) + "=" + n2;
            return e2;
          }
          function pr(e2) {
            var t2 = "";
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  oe(n2, function(e3) {
                    t2 = gr(t2, r2, e3);
                  });
                } else {
                  t2 = gr(t2, r2, n2);
                }
              }
            }
            return t2;
          }
          function mr(e2) {
            var t2 = new FormData();
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  oe(n2, function(e3) {
                    t2.append(r2, e3);
                  });
                } else {
                  t2.append(r2, n2);
                }
              }
            }
            return t2;
          }
          function xr(e2, t2, r2) {
            var n2 = { "HX-Request": "true", "HX-Trigger": ee(e2, "id"), "HX-Trigger-Name": ee(e2, "name"), "HX-Target": te(t2, "id"), "HX-Current-URL": re().location.href };
            Rr(e2, "hx-headers", false, n2);
            if (r2 !== void 0) {
              n2["HX-Prompt"] = r2;
            }
            if (ae(e2).boosted) {
              n2["HX-Boosted"] = "true";
            }
            return n2;
          }
          function yr(t2, e2) {
            var r2 = ne(e2, "hx-params");
            if (r2) {
              if (r2 === "none") {
                return {};
              } else if (r2 === "*") {
                return t2;
              } else if (r2.indexOf("not ") === 0) {
                oe(r2.substr(4).split(","), function(e3) {
                  e3 = e3.trim();
                  delete t2[e3];
                });
                return t2;
              } else {
                var n2 = {};
                oe(r2.split(","), function(e3) {
                  e3 = e3.trim();
                  n2[e3] = t2[e3];
                });
                return n2;
              }
            } else {
              return t2;
            }
          }
          function br(e2) {
            return ee(e2, "href") && ee(e2, "href").indexOf("#") >= 0;
          }
          function wr(e2, t2) {
            var r2 = t2 ? t2 : ne(e2, "hx-swap");
            var n2 = { swapStyle: ae(e2).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
            if (Q.config.scrollIntoViewOnBoost && ae(e2).boosted && !br(e2)) {
              n2["show"] = "top";
            }
            if (r2) {
              var i2 = D(r2);
              if (i2.length > 0) {
                for (var a2 = 0; a2 < i2.length; a2++) {
                  var o2 = i2[a2];
                  if (o2.indexOf("swap:") === 0) {
                    n2["swapDelay"] = d(o2.substr(5));
                  } else if (o2.indexOf("settle:") === 0) {
                    n2["settleDelay"] = d(o2.substr(7));
                  } else if (o2.indexOf("transition:") === 0) {
                    n2["transition"] = o2.substr(11) === "true";
                  } else if (o2.indexOf("ignoreTitle:") === 0) {
                    n2["ignoreTitle"] = o2.substr(12) === "true";
                  } else if (o2.indexOf("scroll:") === 0) {
                    var s2 = o2.substr(7);
                    var l2 = s2.split(":");
                    var u2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["scroll"] = u2;
                    n2["scrollTarget"] = f2;
                  } else if (o2.indexOf("show:") === 0) {
                    var c2 = o2.substr(5);
                    var l2 = c2.split(":");
                    var h2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["show"] = h2;
                    n2["showTarget"] = f2;
                  } else if (o2.indexOf("focus-scroll:") === 0) {
                    var v2 = o2.substr("focus-scroll:".length);
                    n2["focusScroll"] = v2 == "true";
                  } else if (a2 == 0) {
                    n2["swapStyle"] = o2;
                  } else {
                    b("Unknown modifier in hx-swap: " + o2);
                  }
                }
              }
            }
            return n2;
          }
          function Sr(e2) {
            return ne(e2, "hx-encoding") === "multipart/form-data" || h(e2, "form") && ee(e2, "enctype") === "multipart/form-data";
          }
          function Er(t2, r2, n2) {
            var i2 = null;
            R(r2, function(e2) {
              if (i2 == null) {
                i2 = e2.encodeParameters(t2, n2, r2);
              }
            });
            if (i2 != null) {
              return i2;
            } else {
              if (Sr(r2)) {
                return mr(n2);
              } else {
                return pr(n2);
              }
            }
          }
          function T(e2) {
            return { tasks: [], elts: [e2] };
          }
          function Cr(e2, t2) {
            var r2 = e2[0];
            var n2 = e2[e2.length - 1];
            if (t2.scroll) {
              var i2 = null;
              if (t2.scrollTarget) {
                i2 = ue(r2, t2.scrollTarget);
              }
              if (t2.scroll === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollTop = 0;
              }
              if (t2.scroll === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollTop = i2.scrollHeight;
              }
            }
            if (t2.show) {
              var i2 = null;
              if (t2.showTarget) {
                var a2 = t2.showTarget;
                if (t2.showTarget === "window") {
                  a2 = "body";
                }
                i2 = ue(r2, a2);
              }
              if (t2.show === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior });
              }
              if (t2.show === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior });
              }
            }
          }
          function Rr(e2, t2, r2, n2) {
            if (n2 == null) {
              n2 = {};
            }
            if (e2 == null) {
              return n2;
            }
            var i2 = te(e2, t2);
            if (i2) {
              var a2 = i2.trim();
              var o2 = r2;
              if (a2 === "unset") {
                return null;
              }
              if (a2.indexOf("javascript:") === 0) {
                a2 = a2.substr(11);
                o2 = true;
              } else if (a2.indexOf("js:") === 0) {
                a2 = a2.substr(3);
                o2 = true;
              }
              if (a2.indexOf("{") !== 0) {
                a2 = "{" + a2 + "}";
              }
              var s2;
              if (o2) {
                s2 = Tr(e2, function() {
                  return Function("return (" + a2 + ")")();
                }, {});
              } else {
                s2 = E(a2);
              }
              for (var l2 in s2) {
                if (s2.hasOwnProperty(l2)) {
                  if (n2[l2] == null) {
                    n2[l2] = s2[l2];
                  }
                }
              }
            }
            return Rr(u(e2), t2, r2, n2);
          }
          function Tr(e2, t2, r2) {
            if (Q.config.allowEval) {
              return t2();
            } else {
              fe(e2, "htmx:evalDisallowedError");
              return r2;
            }
          }
          function Or(e2, t2) {
            return Rr(e2, "hx-vars", true, t2);
          }
          function qr(e2, t2) {
            return Rr(e2, "hx-vals", false, t2);
          }
          function Hr(e2) {
            return le(Or(e2), qr(e2));
          }
          function Lr(t2, r2, n2) {
            if (n2 !== null) {
              try {
                t2.setRequestHeader(r2, n2);
              } catch (e2) {
                t2.setRequestHeader(r2, encodeURIComponent(n2));
                t2.setRequestHeader(r2 + "-URI-AutoEncoded", "true");
              }
            }
          }
          function Ar(t2) {
            if (t2.responseURL && typeof URL !== "undefined") {
              try {
                var e2 = new URL(t2.responseURL);
                return e2.pathname + e2.search;
              } catch (e3) {
                fe(re().body, "htmx:badResponseUrl", { url: t2.responseURL });
              }
            }
          }
          function O(e2, t2) {
            return t2.test(e2.getAllResponseHeaders());
          }
          function Nr(e2, t2, r2) {
            e2 = e2.toLowerCase();
            if (r2) {
              if (r2 instanceof Element || I(r2, "String")) {
                return he(e2, t2, null, null, { targetOverride: p(r2), returnPromise: true });
              } else {
                return he(e2, t2, p(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: p(r2.target), swapOverride: r2.swap, select: r2.select, returnPromise: true });
              }
            } else {
              return he(e2, t2, null, null, { returnPromise: true });
            }
          }
          function Ir(e2) {
            var t2 = [];
            while (e2) {
              t2.push(e2);
              e2 = e2.parentElement;
            }
            return t2;
          }
          function kr(e2, t2, r2) {
            var n2;
            var i2;
            if (typeof URL === "function") {
              i2 = new URL(t2, document.location.href);
              var a2 = document.location.origin;
              n2 = a2 === i2.origin;
            } else {
              i2 = t2;
              n2 = g(t2, document.location.origin);
            }
            if (Q.config.selfRequestsOnly) {
              if (!n2) {
                return false;
              }
            }
            return ce(e2, "htmx:validateUrl", le({ url: i2, sameHost: n2 }, r2));
          }
          function he(t2, r2, n2, i2, a2, e2) {
            var o2 = null;
            var s2 = null;
            a2 = a2 != null ? a2 : {};
            if (a2.returnPromise && typeof Promise !== "undefined") {
              var l2 = new Promise(function(e3, t3) {
                o2 = e3;
                s2 = t3;
              });
            }
            if (n2 == null) {
              n2 = re().body;
            }
            var M2 = a2.handler || Mr;
            var X2 = a2.select || null;
            if (!se(n2)) {
              ie(o2);
              return l2;
            }
            var u2 = a2.targetOverride || ye(n2);
            if (u2 == null || u2 == pe) {
              fe(n2, "htmx:targetError", { target: te(n2, "hx-target") });
              ie(s2);
              return l2;
            }
            var f2 = ae(n2);
            var c2 = f2.lastButtonClicked;
            if (c2) {
              var h2 = ee(c2, "formaction");
              if (h2 != null) {
                r2 = h2;
              }
              var v2 = ee(c2, "formmethod");
              if (v2 != null) {
                if (v2.toLowerCase() !== "dialog") {
                  t2 = v2;
                }
              }
            }
            var d2 = ne(n2, "hx-confirm");
            if (e2 === void 0) {
              var D2 = function(e3) {
                return he(t2, r2, n2, i2, a2, !!e3);
              };
              var U2 = { target: u2, elt: n2, path: r2, verb: t2, triggeringEvent: i2, etc: a2, issueRequest: D2, question: d2 };
              if (ce(n2, "htmx:confirm", U2) === false) {
                ie(o2);
                return l2;
              }
            }
            var g2 = n2;
            var p2 = ne(n2, "hx-sync");
            var m2 = null;
            var x2 = false;
            if (p2) {
              var B2 = p2.split(":");
              var F2 = B2[0].trim();
              if (F2 === "this") {
                g2 = xe(n2, "hx-sync");
              } else {
                g2 = ue(n2, F2);
              }
              p2 = (B2[1] || "drop").trim();
              f2 = ae(g2);
              if (p2 === "drop" && f2.xhr && f2.abortable !== true) {
                ie(o2);
                return l2;
              } else if (p2 === "abort") {
                if (f2.xhr) {
                  ie(o2);
                  return l2;
                } else {
                  x2 = true;
                }
              } else if (p2 === "replace") {
                ce(g2, "htmx:abort");
              } else if (p2.indexOf("queue") === 0) {
                var V2 = p2.split(" ");
                m2 = (V2[1] || "last").trim();
              }
            }
            if (f2.xhr) {
              if (f2.abortable) {
                ce(g2, "htmx:abort");
              } else {
                if (m2 == null) {
                  if (i2) {
                    var y2 = ae(i2);
                    if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                      m2 = y2.triggerSpec.queue;
                    }
                  }
                  if (m2 == null) {
                    m2 = "last";
                  }
                }
                if (f2.queuedRequests == null) {
                  f2.queuedRequests = [];
                }
                if (m2 === "first" && f2.queuedRequests.length === 0) {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (m2 === "all") {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (m2 === "last") {
                  f2.queuedRequests = [];
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                }
                ie(o2);
                return l2;
              }
            }
            var b2 = new XMLHttpRequest();
            f2.xhr = b2;
            f2.abortable = x2;
            var w2 = function() {
              f2.xhr = null;
              f2.abortable = false;
              if (f2.queuedRequests != null && f2.queuedRequests.length > 0) {
                var e3 = f2.queuedRequests.shift();
                e3();
              }
            };
            var j2 = ne(n2, "hx-prompt");
            if (j2) {
              var S2 = prompt(j2);
              if (S2 === null || !ce(n2, "htmx:prompt", { prompt: S2, target: u2 })) {
                ie(o2);
                w2();
                return l2;
              }
            }
            if (d2 && !e2) {
              if (!confirm(d2)) {
                ie(o2);
                w2();
                return l2;
              }
            }
            var E2 = xr(n2, u2, S2);
            if (t2 !== "get" && !Sr(n2)) {
              E2["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (a2.headers) {
              E2 = le(E2, a2.headers);
            }
            var _2 = dr(n2, t2);
            var C2 = _2.errors;
            var R2 = _2.values;
            if (a2.values) {
              R2 = le(R2, a2.values);
            }
            var z2 = Hr(n2);
            var $2 = le(R2, z2);
            var T2 = yr($2, n2);
            if (Q.config.getCacheBusterParam && t2 === "get") {
              T2["org.htmx.cache-buster"] = ee(u2, "id") || "true";
            }
            if (r2 == null || r2 === "") {
              r2 = re().location.href;
            }
            var O2 = Rr(n2, "hx-request");
            var W2 = ae(n2).boosted;
            var q2 = Q.config.methodsThatUseUrlParams.indexOf(t2) >= 0;
            var H2 = { boosted: W2, useUrlParams: q2, parameters: T2, unfilteredParameters: $2, headers: E2, target: u2, verb: t2, errors: C2, withCredentials: a2.credentials || O2.credentials || Q.config.withCredentials, timeout: a2.timeout || O2.timeout || Q.config.timeout, path: r2, triggeringEvent: i2 };
            if (!ce(n2, "htmx:configRequest", H2)) {
              ie(o2);
              w2();
              return l2;
            }
            r2 = H2.path;
            t2 = H2.verb;
            E2 = H2.headers;
            T2 = H2.parameters;
            C2 = H2.errors;
            q2 = H2.useUrlParams;
            if (C2 && C2.length > 0) {
              ce(n2, "htmx:validation:halted", H2);
              ie(o2);
              w2();
              return l2;
            }
            var G2 = r2.split("#");
            var J2 = G2[0];
            var L2 = G2[1];
            var A2 = r2;
            if (q2) {
              A2 = J2;
              var Z2 = Object.keys(T2).length !== 0;
              if (Z2) {
                if (A2.indexOf("?") < 0) {
                  A2 += "?";
                } else {
                  A2 += "&";
                }
                A2 += pr(T2);
                if (L2) {
                  A2 += "#" + L2;
                }
              }
            }
            if (!kr(n2, A2, H2)) {
              fe(n2, "htmx:invalidPath", H2);
              ie(s2);
              return l2;
            }
            b2.open(t2.toUpperCase(), A2, true);
            b2.overrideMimeType("text/html");
            b2.withCredentials = H2.withCredentials;
            b2.timeout = H2.timeout;
            if (O2.noHeaders) {
            } else {
              for (var N2 in E2) {
                if (E2.hasOwnProperty(N2)) {
                  var K2 = E2[N2];
                  Lr(b2, N2, K2);
                }
              }
            }
            var I2 = { xhr: b2, target: u2, requestConfig: H2, etc: a2, boosted: W2, select: X2, pathInfo: { requestPath: r2, finalRequestPath: A2, anchor: L2 } };
            b2.onload = function() {
              try {
                var e3 = Ir(n2);
                I2.pathInfo.responsePath = Ar(b2);
                M2(n2, I2);
                lr(k2, P2);
                ce(n2, "htmx:afterRequest", I2);
                ce(n2, "htmx:afterOnLoad", I2);
                if (!se(n2)) {
                  var t3 = null;
                  while (e3.length > 0 && t3 == null) {
                    var r3 = e3.shift();
                    if (se(r3)) {
                      t3 = r3;
                    }
                  }
                  if (t3) {
                    ce(t3, "htmx:afterRequest", I2);
                    ce(t3, "htmx:afterOnLoad", I2);
                  }
                }
                ie(o2);
                w2();
              } catch (e4) {
                fe(n2, "htmx:onLoadError", le({ error: e4 }, I2));
                throw e4;
              }
            };
            b2.onerror = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:sendError", I2);
              ie(s2);
              w2();
            };
            b2.onabort = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:sendAbort", I2);
              ie(s2);
              w2();
            };
            b2.ontimeout = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:timeout", I2);
              ie(s2);
              w2();
            };
            if (!ce(n2, "htmx:beforeRequest", I2)) {
              ie(o2);
              w2();
              return l2;
            }
            var k2 = or(n2);
            var P2 = sr(n2);
            oe(["loadstart", "loadend", "progress", "abort"], function(t3) {
              oe([b2, b2.upload], function(e3) {
                e3.addEventListener(t3, function(e4) {
                  ce(n2, "htmx:xhr:" + t3, { lengthComputable: e4.lengthComputable, loaded: e4.loaded, total: e4.total });
                });
              });
            });
            ce(n2, "htmx:beforeSend", I2);
            var Y2 = q2 ? null : Er(b2, n2, T2);
            b2.send(Y2);
            return l2;
          }
          function Pr(e2, t2) {
            var r2 = t2.xhr;
            var n2 = null;
            var i2 = null;
            if (O(r2, /HX-Push:/i)) {
              n2 = r2.getResponseHeader("HX-Push");
              i2 = "push";
            } else if (O(r2, /HX-Push-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Push-Url");
              i2 = "push";
            } else if (O(r2, /HX-Replace-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Replace-Url");
              i2 = "replace";
            }
            if (n2) {
              if (n2 === "false") {
                return {};
              } else {
                return { type: i2, path: n2 };
              }
            }
            var a2 = t2.pathInfo.finalRequestPath;
            var o2 = t2.pathInfo.responsePath;
            var s2 = ne(e2, "hx-push-url");
            var l2 = ne(e2, "hx-replace-url");
            var u2 = ae(e2).boosted;
            var f2 = null;
            var c2 = null;
            if (s2) {
              f2 = "push";
              c2 = s2;
            } else if (l2) {
              f2 = "replace";
              c2 = l2;
            } else if (u2) {
              f2 = "push";
              c2 = o2 || a2;
            }
            if (c2) {
              if (c2 === "false") {
                return {};
              }
              if (c2 === "true") {
                c2 = o2 || a2;
              }
              if (t2.pathInfo.anchor && c2.indexOf("#") === -1) {
                c2 = c2 + "#" + t2.pathInfo.anchor;
              }
              return { type: f2, path: c2 };
            } else {
              return {};
            }
          }
          function Mr(l2, u2) {
            var f2 = u2.xhr;
            var c2 = u2.target;
            var e2 = u2.etc;
            var t2 = u2.requestConfig;
            var h2 = u2.select;
            if (!ce(l2, "htmx:beforeOnLoad", u2)) return;
            if (O(f2, /HX-Trigger:/i)) {
              _e(f2, "HX-Trigger", l2);
            }
            if (O(f2, /HX-Location:/i)) {
              er();
              var r2 = f2.getResponseHeader("HX-Location");
              var v2;
              if (r2.indexOf("{") === 0) {
                v2 = E(r2);
                r2 = v2["path"];
                delete v2["path"];
              }
              Nr("GET", r2, v2).then(function() {
                tr(r2);
              });
              return;
            }
            var n2 = O(f2, /HX-Refresh:/i) && "true" === f2.getResponseHeader("HX-Refresh");
            if (O(f2, /HX-Redirect:/i)) {
              location.href = f2.getResponseHeader("HX-Redirect");
              n2 && location.reload();
              return;
            }
            if (n2) {
              location.reload();
              return;
            }
            if (O(f2, /HX-Retarget:/i)) {
              if (f2.getResponseHeader("HX-Retarget") === "this") {
                u2.target = l2;
              } else {
                u2.target = ue(l2, f2.getResponseHeader("HX-Retarget"));
              }
            }
            var d2 = Pr(l2, u2);
            var i2 = f2.status >= 200 && f2.status < 400 && f2.status !== 204;
            var g2 = f2.response;
            var a2 = f2.status >= 400;
            var p2 = Q.config.ignoreTitle;
            var o2 = le({ shouldSwap: i2, serverResponse: g2, isError: a2, ignoreTitle: p2 }, u2);
            if (!ce(c2, "htmx:beforeSwap", o2)) return;
            c2 = o2.target;
            g2 = o2.serverResponse;
            a2 = o2.isError;
            p2 = o2.ignoreTitle;
            u2.target = c2;
            u2.failed = a2;
            u2.successful = !a2;
            if (o2.shouldSwap) {
              if (f2.status === 286) {
                at(l2);
              }
              R(l2, function(e3) {
                g2 = e3.transformResponse(g2, f2, l2);
              });
              if (d2.type) {
                er();
              }
              var s2 = e2.swapOverride;
              if (O(f2, /HX-Reswap:/i)) {
                s2 = f2.getResponseHeader("HX-Reswap");
              }
              var v2 = wr(l2, s2);
              if (v2.hasOwnProperty("ignoreTitle")) {
                p2 = v2.ignoreTitle;
              }
              c2.classList.add(Q.config.swappingClass);
              var m2 = null;
              var x2 = null;
              var y2 = function() {
                try {
                  var e3 = document.activeElement;
                  var t3 = {};
                  try {
                    t3 = { elt: e3, start: e3 ? e3.selectionStart : null, end: e3 ? e3.selectionEnd : null };
                  } catch (e4) {
                  }
                  var r3;
                  if (h2) {
                    r3 = h2;
                  }
                  if (O(f2, /HX-Reselect:/i)) {
                    r3 = f2.getResponseHeader("HX-Reselect");
                  }
                  if (d2.type) {
                    ce(re().body, "htmx:beforeHistoryUpdate", le({ history: d2 }, u2));
                    if (d2.type === "push") {
                      tr(d2.path);
                      ce(re().body, "htmx:pushedIntoHistory", { path: d2.path });
                    } else {
                      rr(d2.path);
                      ce(re().body, "htmx:replacedInHistory", { path: d2.path });
                    }
                  }
                  var n3 = T(c2);
                  je(v2.swapStyle, c2, l2, g2, n3, r3);
                  if (t3.elt && !se(t3.elt) && ee(t3.elt, "id")) {
                    var i3 = document.getElementById(ee(t3.elt, "id"));
                    var a3 = { preventScroll: v2.focusScroll !== void 0 ? !v2.focusScroll : !Q.config.defaultFocusScroll };
                    if (i3) {
                      if (t3.start && i3.setSelectionRange) {
                        try {
                          i3.setSelectionRange(t3.start, t3.end);
                        } catch (e4) {
                        }
                      }
                      i3.focus(a3);
                    }
                  }
                  c2.classList.remove(Q.config.swappingClass);
                  oe(n3.elts, function(e4) {
                    if (e4.classList) {
                      e4.classList.add(Q.config.settlingClass);
                    }
                    ce(e4, "htmx:afterSwap", u2);
                  });
                  if (O(f2, /HX-Trigger-After-Swap:/i)) {
                    var o3 = l2;
                    if (!se(l2)) {
                      o3 = re().body;
                    }
                    _e(f2, "HX-Trigger-After-Swap", o3);
                  }
                  var s3 = function() {
                    oe(n3.tasks, function(e5) {
                      e5.call();
                    });
                    oe(n3.elts, function(e5) {
                      if (e5.classList) {
                        e5.classList.remove(Q.config.settlingClass);
                      }
                      ce(e5, "htmx:afterSettle", u2);
                    });
                    if (u2.pathInfo.anchor) {
                      var e4 = re().getElementById(u2.pathInfo.anchor);
                      if (e4) {
                        e4.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                    }
                    if (n3.title && !p2) {
                      var t4 = C("title");
                      if (t4) {
                        t4.innerHTML = n3.title;
                      } else {
                        window.document.title = n3.title;
                      }
                    }
                    Cr(n3.elts, v2);
                    if (O(f2, /HX-Trigger-After-Settle:/i)) {
                      var r4 = l2;
                      if (!se(l2)) {
                        r4 = re().body;
                      }
                      _e(f2, "HX-Trigger-After-Settle", r4);
                    }
                    ie(m2);
                  };
                  if (v2.settleDelay > 0) {
                    setTimeout(s3, v2.settleDelay);
                  } else {
                    s3();
                  }
                } catch (e4) {
                  fe(l2, "htmx:swapError", u2);
                  ie(x2);
                  throw e4;
                }
              };
              var b2 = Q.config.globalViewTransitions;
              if (v2.hasOwnProperty("transition")) {
                b2 = v2.transition;
              }
              if (b2 && ce(l2, "htmx:beforeTransition", u2) && typeof Promise !== "undefined" && document.startViewTransition) {
                var w2 = new Promise(function(e3, t3) {
                  m2 = e3;
                  x2 = t3;
                });
                var S2 = y2;
                y2 = function() {
                  document.startViewTransition(function() {
                    S2();
                    return w2;
                  });
                };
              }
              if (v2.swapDelay > 0) {
                setTimeout(y2, v2.swapDelay);
              } else {
                y2();
              }
            }
            if (a2) {
              fe(l2, "htmx:responseError", le({ error: "Response Status Error Code " + f2.status + " from " + u2.pathInfo.requestPath }, u2));
            }
          }
          var Xr = {};
          function Dr() {
            return { init: function(e2) {
              return null;
            }, onEvent: function(e2, t2) {
              return true;
            }, transformResponse: function(e2, t2, r2) {
              return e2;
            }, isInlineSwap: function(e2) {
              return false;
            }, handleSwap: function(e2, t2, r2, n2) {
              return false;
            }, encodeParameters: function(e2, t2, r2) {
              return null;
            } };
          }
          function Ur(e2, t2) {
            if (t2.init) {
              t2.init(r);
            }
            Xr[e2] = le(Dr(), t2);
          }
          function Br(e2) {
            delete Xr[e2];
          }
          function Fr(e2, r2, n2) {
            if (e2 == void 0) {
              return r2;
            }
            if (r2 == void 0) {
              r2 = [];
            }
            if (n2 == void 0) {
              n2 = [];
            }
            var t2 = te(e2, "hx-ext");
            if (t2) {
              oe(t2.split(","), function(e3) {
                e3 = e3.replace(/ /g, "");
                if (e3.slice(0, 7) == "ignore:") {
                  n2.push(e3.slice(7));
                  return;
                }
                if (n2.indexOf(e3) < 0) {
                  var t3 = Xr[e3];
                  if (t3 && r2.indexOf(t3) < 0) {
                    r2.push(t3);
                  }
                }
              });
            }
            return Fr(u(e2), r2, n2);
          }
          var Vr = false;
          re().addEventListener("DOMContentLoaded", function() {
            Vr = true;
          });
          function jr(e2) {
            if (Vr || re().readyState === "complete") {
              e2();
            } else {
              re().addEventListener("DOMContentLoaded", e2);
            }
          }
          function _r() {
            if (Q.config.includeIndicatorStyles !== false) {
              re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
            }
          }
          function zr() {
            var e2 = re().querySelector('meta[name="htmx-config"]');
            if (e2) {
              return E(e2.content);
            } else {
              return null;
            }
          }
          function $r() {
            var e2 = zr();
            if (e2) {
              Q.config = le(Q.config, e2);
            }
          }
          jr(function() {
            $r();
            _r();
            var e2 = re().body;
            zt(e2);
            var t2 = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e2.addEventListener("htmx:abort", function(e3) {
              var t3 = e3.target;
              var r3 = ae(t3);
              if (r3 && r3.xhr) {
                r3.xhr.abort();
              }
            });
            const r2 = window.onpopstate ? window.onpopstate.bind(window) : null;
            window.onpopstate = function(e3) {
              if (e3.state && e3.state.htmx) {
                ar();
                oe(t2, function(e4) {
                  ce(e4, "htmx:restored", { document: re(), triggerEvent: ce });
                });
              } else {
                if (r2) {
                  r2(e3);
                }
              }
            };
            setTimeout(function() {
              ce(e2, "htmx:load", {});
              e2 = null;
            }, 0);
          });
          return Q;
        }();
      });
    }
  });

  // assets/js/functions/common.js
  var ENVIRONMENT = "production";
  function isDev() {
    return ENVIRONMENT === "development";
  }
  function devLog(...variable) {
    if (isDev() === false) return;
    console.log(...variable);
  }

  // assets/js/functions/modals.js
  function Modals() {
    devLog("Modal function is running");
    const popupBackdrop = document.querySelector("[modal-backdrop]");
    const modals = document.querySelectorAll("[modal]");
    popupBackdrop.addEventListener("click", (e2) => {
      e2.stopPropagation();
      modals.forEach((modal) => {
        modal.dataset.active = "false";
        document.body.style.overflow = "auto";
        modal.dispatchEvent(
          new CustomEvent("modal-state-change", {
            detail: {
              handler: popupBackdrop
            }
          })
        );
      });
      popupBackdrop.dataset.active = "false";
    });
    const handleModalState = (modalName, state) => {
      const modals2 = document.querySelectorAll(
        '[modal][data-modal-name="'.concat(modalName, '"]')
      );
      if (!modals2) {
        devLog('Modal "'.concat(modalName, '" not found.'));
        return;
      }
      modals2.forEach((modal) => {
        modal.dataset.active = state;
        if (state === "true") {
          document.body.style.overflow = "hidden";
          popupBackdrop.dataset.active = "true";
        } else {
          document.body.style.overflow = "auto";
          popupBackdrop.dataset.active = "false";
        }
      });
      devLog('Modal "'.concat(modalName, '" state set to "').concat(state, '".'));
    };
    const addEventListeners = (selector, action, actionName) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const modalName = element.dataset.modalName;
        const modal = document.querySelector(
          '[modal][data-modal-name="'.concat(modalName, '"]')
        );
        element.addEventListener("click", () => {
          action(modalName);
          modal.dispatchEvent(
            new CustomEvent("modal-state-change", {
              detail: {
                handler: element
              }
            })
          );
        });
        devLog('"'.concat(actionName, '" triggered for modal "').concat(modalName, '".'));
      });
    };
    addEventListeners(
      "[modal-opener]",
      (modalName) => handleModalState(modalName, "true"),
      "Open"
    );
    addEventListeners(
      "[modal-closer]",
      (modalName) => handleModalState(modalName, "false"),
      "Close"
    );
    addEventListeners(
      "[modal-toggler]",
      (modalName) => {
        const modal = document.querySelector(
          '[modal][data-modal-name="'.concat(modalName, '"]')
        );
        if (!modal) {
          devLog('Toggle failed: Modal "'.concat(modalName, '" not found.'));
          return;
        }
        const newState = modal.dataset.active === "true" ? "false" : "true";
        devLog('Toggling modal "'.concat(modalName, '" to "').concat(newState, '".'));
        handleModalState(modalName, newState);
      },
      "Toggle"
    );
  }

  // node_modules/photoswipe/dist/photoswipe-lightbox.esm.js
  function createElement(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    if (appendToEl) {
      appendToEl.appendChild(el);
    }
    return el;
  }
  function toTransformString(x2, y2, scale) {
    let propValue = "translate3d(".concat(x2, "px,").concat(y2 || 0, "px,0)");
    if (scale !== void 0) {
      propValue += " scale3d(".concat(scale, ",").concat(scale, ",1)");
    }
    return propValue;
  }
  function setWidthHeight(el, w2, h2) {
    el.style.width = typeof w2 === "number" ? "".concat(w2, "px") : w2;
    el.style.height = typeof h2 === "number" ? "".concat(h2, "px") : h2;
  }
  var LOAD_STATE = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
  };
  function specialKeyUsed(e2) {
    return "button" in e2 && e2.button === 1 || e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey;
  }
  function getElementsFromOption(option, legacySelector, parent = document) {
    let elements = [];
    if (option instanceof Element) {
      elements = [option];
    } else if (option instanceof NodeList || Array.isArray(option)) {
      elements = Array.from(option);
    } else {
      const selector = typeof option === "string" ? option : legacySelector;
      if (selector) {
        elements = Array.from(parent.querySelectorAll(selector));
      }
    }
    return elements;
  }
  function isPswpClass(fn) {
    return typeof fn === "function" && fn.prototype && fn.prototype.goTo;
  }
  function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  var PhotoSwipeEvent = class {
    /**
     * @param {T} type
     * @param {PhotoSwipeEventsMap[T]} [details]
     */
    constructor(type, details) {
      this.type = type;
      this.defaultPrevented = false;
      if (details) {
        Object.assign(this, details);
      }
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  };
  var Eventable = class {
    constructor() {
      this._listeners = {};
      this._filters = {};
      this.pswp = void 0;
      this.options = void 0;
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     * @param {number} priority
     */
    addFilter(name, fn, priority = 100) {
      var _this$_filters$name, _this$_filters$name2, _this$pswp;
      if (!this._filters[name]) {
        this._filters[name] = [];
      }
      (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
        fn,
        priority
      });
      (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
    removeFilter(name, fn) {
      if (this._filters[name]) {
        this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
      }
      if (this.pswp) {
        this.pswp.removeFilter(name, fn);
      }
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
    applyFilters(name, ...args) {
      var _this$_filters$name3;
      (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter) => {
        args[0] = filter.fn.apply(this, args);
      });
      return args[0];
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    on(name, fn) {
      var _this$_listeners$name, _this$pswp2;
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }
      (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
      (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    off(name, fn) {
      var _this$pswp3;
      if (this._listeners[name]) {
        this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
      }
      (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
    dispatch(name, details) {
      var _this$_listeners$name2;
      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }
      const event2 = (
        /** @type {AugmentedEvent<T>} */
        new PhotoSwipeEvent(name, details)
      );
      (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
        listener.call(this, event2);
      });
      return event2;
    }
  };
  var Placeholder = class {
    /**
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(imageSrc, container) {
      this.element = createElement("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
      if (imageSrc) {
        const imgEl = (
          /** @type {HTMLImageElement} */
          this.element
        );
        imgEl.decoding = "async";
        imgEl.alt = "";
        imgEl.src = imageSrc;
        imgEl.setAttribute("role", "presentation");
      }
      this.element.setAttribute("aria-hidden", "true");
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.element.tagName === "IMG") {
        setWidthHeight(this.element, 250, "auto");
        this.element.style.transformOrigin = "0 0";
        this.element.style.transform = toTransformString(0, 0, width / 250);
      } else {
        setWidthHeight(this.element, width, height);
      }
    }
    destroy() {
      var _this$element;
      if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
        this.element.remove();
      }
      this.element = null;
    }
  };
  var Content = class {
    /**
     * @param {SlideData} itemData Slide data
     * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
     * @param {number} index
     */
    constructor(itemData, instance, index) {
      this.instance = instance;
      this.data = itemData;
      this.index = index;
      this.element = void 0;
      this.placeholder = void 0;
      this.slide = void 0;
      this.displayedImageWidth = 0;
      this.displayedImageHeight = 0;
      this.width = Number(this.data.w) || Number(this.data.width) || 0;
      this.height = Number(this.data.h) || Number(this.data.height) || 0;
      this.isAttached = false;
      this.hasSlide = false;
      this.isDecoding = false;
      this.state = LOAD_STATE.IDLE;
      if (this.data.type) {
        this.type = this.data.type;
      } else if (this.data.src) {
        this.type = "image";
      } else {
        this.type = "html";
      }
      this.instance.dispatch("contentInit", {
        content: this
      });
    }
    removePlaceholder() {
      if (this.placeholder && !this.keepPlaceholder()) {
        setTimeout(() => {
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = void 0;
          }
        }, 1e3);
      }
    }
    /**
     * Preload content
     *
     * @param {boolean} isLazy
     * @param {boolean} [reload]
     */
    load(isLazy, reload) {
      if (this.slide && this.usePlaceholder()) {
        if (!this.placeholder) {
          const placeholderSrc = this.instance.applyFilters(
            "placeholderSrc",
            // use  image-based placeholder only for the first slide,
            // as rendering (even small stretched thumbnail) is an expensive operation
            this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
            this
          );
          this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
        } else {
          const placeholderEl = this.placeholder.element;
          if (placeholderEl && !placeholderEl.parentElement) {
            this.slide.container.prepend(placeholderEl);
          }
        }
      }
      if (this.element && !reload) {
        return;
      }
      if (this.instance.dispatch("contentLoad", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      if (this.isImageContent()) {
        this.element = createElement("pswp__img", "img");
        if (this.displayedImageWidth) {
          this.loadImage(isLazy);
        }
      } else {
        this.element = createElement("pswp__content", "div");
        this.element.innerHTML = this.data.html || "";
      }
      if (reload && this.slide) {
        this.slide.updateContentSize(true);
      }
    }
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
    loadImage(isLazy) {
      var _this$data$src, _this$data$alt;
      if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      const imageElement = (
        /** @type HTMLImageElement */
        this.element
      );
      this.updateSrcsetSizes();
      if (this.data.srcset) {
        imageElement.srcset = this.data.srcset;
      }
      imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
      imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
      this.state = LOAD_STATE.LOADING;
      if (imageElement.complete) {
        this.onLoaded();
      } else {
        imageElement.onload = () => {
          this.onLoaded();
        };
        imageElement.onerror = () => {
          this.onError();
        };
      }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
    setSlide(slide2) {
      this.slide = slide2;
      this.hasSlide = true;
      this.instance = slide2.pswp;
    }
    /**
     * Content load success handler
     */
    onLoaded() {
      this.state = LOAD_STATE.LOADED;
      if (this.slide && this.element) {
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          content: this
        });
        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.append();
          this.slide.updateContentSize(true);
        }
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
          this.removePlaceholder();
        }
      }
    }
    /**
     * Content load error handler
     */
    onError() {
      this.state = LOAD_STATE.ERROR;
      if (this.slide) {
        this.displayError();
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch("loadError", {
          slide: this.slide,
          content: this
        });
      }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */
    isLoading() {
      return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
    }
    /**
     * @returns {Boolean} If the content is in error state
     */
    isError() {
      return this.state === LOAD_STATE.ERROR;
    }
    /**
     * @returns {boolean} If the content is image
     */
    isImageContent() {
      return this.type === "image";
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.placeholder) {
        this.placeholder.setDisplayedSize(width, height);
      }
      if (this.instance.dispatch("contentResize", {
        content: this,
        width,
        height
      }).defaultPrevented) {
        return;
      }
      setWidthHeight(this.element, width, height);
      if (this.isImageContent() && !this.isError()) {
        const isInitialSizeUpdate = !this.displayedImageWidth && width;
        this.displayedImageWidth = width;
        this.displayedImageHeight = height;
        if (isInitialSizeUpdate) {
          this.loadImage(false);
        } else {
          this.updateSrcsetSizes();
        }
        if (this.slide) {
          this.instance.dispatch("imageSizeChange", {
            slide: this.slide,
            width,
            height,
            content: this
          });
        }
      }
    }
    /**
     * @returns {boolean} If the content can be zoomed
     */
    isZoomable() {
      return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    /**
     * Update image srcset sizes attribute based on width and height
     */
    updateSrcsetSizes() {
      if (!this.isImageContent() || !this.element || !this.data.srcset) {
        return;
      }
      const image = (
        /** @type HTMLImageElement */
        this.element
      );
      const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + "px";
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
    usePlaceholder() {
      return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     */
    lazyLoad() {
      if (this.instance.dispatch("contentLazyLoad", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.load(true);
    }
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
    keepPlaceholder() {
      return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    /**
     * Destroy the content
     */
    destroy() {
      this.hasSlide = false;
      this.slide = void 0;
      if (this.instance.dispatch("contentDestroy", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.remove();
      if (this.placeholder) {
        this.placeholder.destroy();
        this.placeholder = void 0;
      }
      if (this.isImageContent() && this.element) {
        this.element.onload = null;
        this.element.onerror = null;
        this.element = void 0;
      }
    }
    /**
     * Display error message
     */
    displayError() {
      if (this.slide) {
        var _this$instance$option, _this$instance$option2;
        let errorMsgEl = createElement("pswp__error-msg", "div");
        errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
        errorMsgEl = /** @type {HTMLDivElement} */
        this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
        this.element = createElement("pswp__content pswp__error-msg-container", "div");
        this.element.appendChild(errorMsgEl);
        this.slide.container.innerText = "";
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    /**
     * Append the content
     */
    append() {
      if (this.isAttached || !this.element) {
        return;
      }
      this.isAttached = true;
      if (this.state === LOAD_STATE.ERROR) {
        this.displayError();
        return;
      }
      if (this.instance.dispatch("contentAppend", {
        content: this
      }).defaultPrevented) {
        return;
      }
      const supportsDecode = "decode" in this.element;
      if (this.isImageContent()) {
        if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
          this.isDecoding = true;
          this.element.decode().catch(() => {
          }).finally(() => {
            this.isDecoding = false;
            this.appendImage();
          });
        } else {
          this.appendImage();
        }
      } else if (this.slide && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
    activate() {
      if (this.instance.dispatch("contentActivate", {
        content: this
      }).defaultPrevented || !this.slide) {
        return;
      }
      if (this.isImageContent() && this.isDecoding && !isSafari()) {
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true);
      }
      if (this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "false");
      }
    }
    /**
     * Deactivate the content
     */
    deactivate() {
      this.instance.dispatch("contentDeactivate", {
        content: this
      });
      if (this.slide && this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
    }
    /**
     * Remove the content from DOM
     */
    remove() {
      this.isAttached = false;
      if (this.instance.dispatch("contentRemove", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
      if (this.placeholder && this.placeholder.element) {
        this.placeholder.element.remove();
      }
    }
    /**
     * Append the image content to slide container
     */
    appendImage() {
      if (!this.isAttached) {
        return;
      }
      if (this.instance.dispatch("contentAppendImage", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.slide && this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
      if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
        this.removePlaceholder();
      }
    }
  };
  function getViewportSize(options, pswp) {
    if (options.getViewportSizeFn) {
      const newViewportSize = options.getViewportSizeFn(options, pswp);
      if (newViewportSize) {
        return newViewportSize;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      // TODO: height on mobile is very incosistent due to toolbar
      // find a way to improve this
      //
      // document.documentElement.clientHeight - doesn't seem to work well
      y: window.innerHeight
    };
  }
  function parsePaddingOption(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) {
      paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    } else if (options.padding) {
      paddingValue = options.padding[prop];
    } else {
      const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
      if (options[legacyPropName]) {
        paddingValue = options[legacyPropName];
      }
    }
    return Number(paddingValue) || 0;
  }
  function getPanAreaSize(options, viewportSize, itemData, index) {
    return {
      x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index) - parsePaddingOption("right", options, viewportSize, itemData, index),
      y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index) - parsePaddingOption("bottom", options, viewportSize, itemData, index)
    };
  }
  var MAX_IMAGE_WIDTH = 4e3;
  var ZoomLevel = class {
    /**
     * @param {PhotoSwipeOptions} options PhotoSwipe options
     * @param {SlideData} itemData Slide data
     * @param {number} index Slide index
     * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
     */
    constructor(options, itemData, index, pswp) {
      this.pswp = pswp;
      this.options = options;
      this.itemData = itemData;
      this.index = index;
      this.panAreaSize = null;
      this.elementSize = null;
      this.fit = 1;
      this.fill = 1;
      this.vFill = 1;
      this.initial = 1;
      this.secondary = 1;
      this.max = 1;
      this.min = 1;
    }
    /**
     * Calculate initial, secondary and maximum zoom level for the specified slide.
     *
     * It should be called when either image or viewport size changes.
     *
     * @param {number} maxWidth
     * @param {number} maxHeight
     * @param {Point} panAreaSize
     */
    update(maxWidth, maxHeight, panAreaSize) {
      const elementSize = {
        x: maxWidth,
        y: maxHeight
      };
      this.elementSize = elementSize;
      this.panAreaSize = panAreaSize;
      const hRatio = panAreaSize.x / elementSize.x;
      const vRatio = panAreaSize.y / elementSize.y;
      this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
      this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
      this.vFill = Math.min(1, vRatio);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);
      if (this.pswp) {
        this.pswp.dispatch("zoomLevelsUpdate", {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     * @returns { number | undefined }
     */
    _parseZoomLevelOption(optionPrefix) {
      const optionName = (
        /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
        optionPrefix + "ZoomLevel"
      );
      const optionValue = this.options[optionName];
      if (!optionValue) {
        return;
      }
      if (typeof optionValue === "function") {
        return optionValue(this);
      }
      if (optionValue === "fill") {
        return this.fill;
      }
      if (optionValue === "fit") {
        return this.fit;
      }
      return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
    _getSecondary() {
      let currZoomLevel = this._parseZoomLevelOption("secondary");
      if (currZoomLevel) {
        return currZoomLevel;
      }
      currZoomLevel = Math.min(1, this.fit * 3);
      if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
        currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
      }
      return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
    _getInitial() {
      return this._parseZoomLevelOption("initial") || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
    _getMax() {
      return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
    }
  };
  function lazyLoadData(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    let zoomLevel;
    const {
      options
    } = instance;
    if (options) {
      zoomLevel = new ZoomLevel(options, itemData, -1);
      let viewportSize;
      if (instance.pswp) {
        viewportSize = instance.pswp.viewportSize;
      } else {
        viewportSize = getViewportSize(options, instance);
      }
      const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
      zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
      content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
  }
  function lazyLoadSlide(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch("lazyLoadSlide", {
      index,
      itemData
    }).defaultPrevented) {
      return;
    }
    return lazyLoadData(itemData, instance, index);
  }
  var PhotoSwipeBase = class extends Eventable {
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    getNumItems() {
      var _this$options;
      let numItems = 0;
      const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
      if (dataSource && "length" in dataSource) {
        numItems = dataSource.length;
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        if (dataSource.items) {
          numItems = dataSource.items.length;
        }
      }
      const event2 = this.dispatch("numItems", {
        dataSource,
        numItems
      });
      return this.applyFilters("numItems", event2.numItems, dataSource);
    }
    /**
     * @param {SlideData} slideData
     * @param {number} index
     * @returns {Content}
     */
    createContentFromData(slideData, index) {
      return new Content(slideData, this, index);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     * @returns {SlideData}
     */
    getItemData(index) {
      var _this$options2;
      const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
      let dataSourceItem = {};
      if (Array.isArray(dataSource)) {
        dataSourceItem = dataSource[index];
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        dataSourceItem = dataSource.items[index];
      }
      let itemData = dataSourceItem;
      if (itemData instanceof Element) {
        itemData = this._domElementToItemData(itemData);
      }
      const event2 = this.dispatch("itemData", {
        itemData: itemData || {},
        index
      });
      return this.applyFilters("itemData", event2.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     * @returns {HTMLElement[]}
     */
    _getGalleryDOMElements(galleryElement) {
      var _this$options3, _this$options4;
      if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
        return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
      }
      return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     * @returns {SlideData}
     */
    _domElementToItemData(element) {
      const itemData = {
        element
      };
      const linkEl = (
        /** @type {HTMLAnchorElement} */
        element.tagName === "A" ? element : element.querySelector("a")
      );
      if (linkEl) {
        itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
        if (linkEl.dataset.pswpSrcset) {
          itemData.srcset = linkEl.dataset.pswpSrcset;
        }
        itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
        itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
        itemData.w = itemData.width;
        itemData.h = itemData.height;
        if (linkEl.dataset.pswpType) {
          itemData.type = linkEl.dataset.pswpType;
        }
        const thumbnailEl = element.querySelector("img");
        if (thumbnailEl) {
          var _thumbnailEl$getAttri;
          itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
          itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
        }
        if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
          itemData.thumbCropped = true;
        }
      }
      return this.applyFilters("domItemData", itemData, element, linkEl);
    }
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns {Content} Image that is being decoded or false.
     */
    lazyLoadData(itemData, index) {
      return lazyLoadData(itemData, this, index);
    }
  };
  var PhotoSwipeLightbox = class extends PhotoSwipeBase {
    /**
     * @param {PhotoSwipeOptions} [options]
     */
    constructor(options) {
      super();
      this.options = options || {};
      this._uid = 0;
      this.shouldOpen = false;
      this._preloadedContent = void 0;
      this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
    }
    /**
     * Initialize lightbox, should be called only once.
     * It's not included in the main constructor, so you may bind events before it.
     */
    init() {
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
        galleryElement.addEventListener("click", this.onThumbnailsClick, false);
      });
    }
    /**
     * @param {MouseEvent} e
     */
    onThumbnailsClick(e2) {
      if (specialKeyUsed(e2) || window.pswp) {
        return;
      }
      let initialPoint = {
        x: e2.clientX,
        y: e2.clientY
      };
      if (!initialPoint.x && !initialPoint.y) {
        initialPoint = null;
      }
      let clickedIndex = this.getClickedIndex(e2);
      clickedIndex = this.applyFilters("clickedIndex", clickedIndex, e2, this);
      const dataSource = {
        gallery: (
          /** @type {HTMLElement} */
          e2.currentTarget
        )
      };
      if (clickedIndex >= 0) {
        e2.preventDefault();
        this.loadAndOpen(clickedIndex, dataSource, initialPoint);
      }
    }
    /**
     * Get index of gallery item that was clicked.
     *
     * @param {MouseEvent} e click event
     * @returns {number}
     */
    getClickedIndex(e2) {
      if (this.options.getClickedIndexFn) {
        return this.options.getClickedIndexFn.call(this, e2);
      }
      const clickedTarget = (
        /** @type {HTMLElement} */
        e2.target
      );
      const childElements = getElementsFromOption(
        this.options.children,
        this.options.childSelector,
        /** @type {HTMLElement} */
        e2.currentTarget
      );
      const clickedChildIndex = childElements.findIndex((child) => child === clickedTarget || child.contains(clickedTarget));
      if (clickedChildIndex !== -1) {
        return clickedChildIndex;
      } else if (this.options.children || this.options.childSelector) {
        return -1;
      }
      return 0;
    }
    /**
     * Load and open PhotoSwipe
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     * @param {Point | null} [initialPoint]
     * @returns {boolean}
     */
    loadAndOpen(index, dataSource, initialPoint) {
      if (window.pswp || !this.options) {
        return false;
      }
      if (!dataSource && this.options.gallery && this.options.children) {
        const galleryElements = getElementsFromOption(this.options.gallery);
        if (galleryElements[0]) {
          dataSource = {
            gallery: galleryElements[0]
          };
        }
      }
      this.options.index = index;
      this.options.initialPointerPos = initialPoint;
      this.shouldOpen = true;
      this.preload(index, dataSource);
      return true;
    }
    /**
     * Load the main module and the slide content by index
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     */
    preload(index, dataSource) {
      const {
        options
      } = this;
      if (dataSource) {
        options.dataSource = dataSource;
      }
      const promiseArray = [];
      const pswpModuleType = typeof options.pswpModule;
      if (isPswpClass(options.pswpModule)) {
        promiseArray.push(Promise.resolve(
          /** @type {Type<PhotoSwipe>} */
          options.pswpModule
        ));
      } else if (pswpModuleType === "string") {
        throw new Error("pswpModule as string is no longer supported");
      } else if (pswpModuleType === "function") {
        promiseArray.push(
          /** @type {() => Promise<Type<PhotoSwipe>>} */
          options.pswpModule()
        );
      } else {
        throw new Error("pswpModule is not valid");
      }
      if (typeof options.openPromise === "function") {
        promiseArray.push(options.openPromise());
      }
      if (options.preloadFirstSlide !== false && index >= 0) {
        this._preloadedContent = lazyLoadSlide(index, this);
      }
      const uid = ++this._uid;
      Promise.all(promiseArray).then((iterableModules) => {
        if (this.shouldOpen) {
          const mainModule = iterableModules[0];
          this._openPhotoswipe(mainModule, uid);
        }
      });
    }
    /**
     * @private
     * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
     * @param {number} uid
     */
    _openPhotoswipe(module2, uid) {
      if (uid !== this._uid && this.shouldOpen) {
        return;
      }
      this.shouldOpen = false;
      if (window.pswp) {
        return;
      }
      const pswp = typeof module2 === "object" ? new module2.default(this.options) : new module2(this.options);
      this.pswp = pswp;
      window.pswp = pswp;
      Object.keys(this._listeners).forEach((name) => {
        var _this$_listeners$name;
        (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach((fn) => {
          pswp.on(
            name,
            /** @type {EventCallback<typeof name>} */
            fn
          );
        });
      });
      Object.keys(this._filters).forEach((name) => {
        var _this$_filters$name;
        (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach((filter) => {
          pswp.addFilter(name, filter.fn, filter.priority);
        });
      });
      if (this._preloadedContent) {
        pswp.contentLoader.addToCache(this._preloadedContent);
        this._preloadedContent = void 0;
      }
      pswp.on("destroy", () => {
        this.pswp = void 0;
        delete window.pswp;
      });
      pswp.init();
    }
    /**
     * Unbinds all events, closes PhotoSwipe if it's open.
     */
    destroy() {
      var _this$pswp;
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
      this.shouldOpen = false;
      this._listeners = {};
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
        galleryElement.removeEventListener("click", this.onThumbnailsClick, false);
      });
    }
  };

  // assets/js/functions/photoswipe.js
  function PhotoSwipeTheme() {
    const swiperGroup = document.querySelectorAll(".swiper-gallery");
    swiperGroup.forEach((el) => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: el,
        children: "a",
        pswpModule: () => Promise.resolve().then(() => (init_photoswipe_esm(), photoswipe_esm_exports))
        // بارگذاری داینامیک PhotoSwipe
      });
      lightbox.init();
    });
  }

  // assets/js/functions/plyr.js
  var import_plyr = __toESM(require_plyr_min());
  function ThemePlyr() {
    const plyrs = document.querySelectorAll(".video-plyr");
    plyrs.forEach((plyr) => {
      const player = new import_plyr.default(plyr);
    });
  }

  // assets/js/functions/popups.js
  function Popups() {
    VideoPopup();
  }
  function VideoPopup() {
    const videoPopups = document.querySelectorAll(
      '[modal][data-modal-name="video-popup"], [modal][data-modal-name="video-popup-design"]'
    );
    videoPopups.forEach((videoPopup) => {
      videoPopup.addEventListener("modal-state-change", (e2) => {
        const video = videoPopup.querySelector("video");
        const videoIsOpening = videoPopup.dataset.active === "true";
        !videoIsOpening && video.pause();
        video.src = e2.detail.handler.dataset.videoUrl;
      });
    });
  }

  // assets/js/functions/show-more-btn.js
  function show_more_btn() {
    if (document.querySelector(".parent-buttons")) {
      const buttons_parent = document.querySelector(".parent-buttons");
      const div_buttons = document.querySelector(".div-buttons");
      const parent_height = div_buttons.clientHeight;
      const buttons_handler = document.querySelector(".handler_show_more_btn");
      buttons_handler.addEventListener("click", (e2) => {
        buttons_parent.style.height = "".concat(parent_height, "px");
        e2.preventDefault();
        setTimeout(() => {
          buttons_parent.style.transition = "height 0.5s ease";
        }, 10);
      });
    }
  }
  show_more_btn();

  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c2) => !!c2.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e2) {
      }
      try {
        delete object[key];
      } catch (e2) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a2) => a2.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o2) {
    return typeof o2 === "object" && o2 !== null && o2.constructor && Object.prototype.toString.call(o2).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i2 = 1; i2 < arguments.length; i2 += 1) {
      const nextSource = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper: swiper2,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper2.translate;
    let startTime = null;
    let time;
    const duration = swiper2.params.speed;
    swiper2.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper2.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper2.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper2.wrapperEl.style.overflow = "hidden";
        swiper2.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper2.wrapperEl.style.overflow = "";
          swiper2.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper2.cssModeFrameID);
        return;
      }
      swiper2.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    const children = [...element.children];
    if (element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector) {
      return children;
    }
    return children.filter((el) => el.matches(selector));
  }
  function elementIsChildOf(el, parent) {
    const isChild = parent.contains(el);
    if (!isChild && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      return children.includes(el);
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement3(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementOffset(el) {
    const window2 = getWindow();
    const document2 = getDocument();
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i2;
    if (child) {
      i2 = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i2 += 1;
      }
      return i2;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e2) {
      if (e2.target !== el) return;
      callback.call(el, e2);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e2) => !!e2);
  }
  function getRotateFix(swiper2) {
    return (v2) => {
      if (Math.abs(v2) > 0 && swiper2.browser && swiper2.browser.need3dFix && Math.abs(v2) % 90 === 0) {
        return v2 + 1e-3;
      }
      return v2;
    };
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari3() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari3()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari3();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper: swiper2,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper2 || swiper2.destroyed || !swiper2.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper2 || swiper2.destroyed || !swiper2.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper2;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper2.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper2.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper2.el) {
        observer.unobserve(swiper2.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper2 || swiper2.destroyed || !swiper2.initialized) return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper2.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper2.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper2.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper2.params.observer) return;
      if (swiper2.params.observeParents) {
        const containerParents = elementParents(swiper2.hostEl);
        for (let i2 = 0; i2 < containerParents.length; i2 += 1) {
          attach(containerParents[i2]);
        }
      }
      attach(swiper2.hostEl, {
        childList: swiper2.params.observeSlideChildren
      });
      attach(swiper2.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2]) self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsAnyListeners) return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper2 = this;
    let width;
    let height;
    const el = swiper2.el;
    if (typeof swiper2.params.width !== "undefined" && swiper2.params.width !== null) {
      width = swiper2.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper2.params.height !== "undefined" && swiper2.params.height !== null) {
      height = swiper2.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper2.isHorizontal() || height === 0 && swiper2.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper2, {
      width,
      height,
      size: swiper2.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper2 = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper2.getDirectionLabel(label)) || 0);
    }
    const params = swiper2.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper2;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper2.virtual.slides.length : swiper2.slides.length;
    const slides = elementChildren(slidesEl, ".".concat(swiper2.params.slideClass, ", swiper-slide"));
    const slidesLength = isVirtual ? swiper2.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper2);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper2);
    }
    const previousSnapGridLength = swiper2.snapGrid.length;
    const previousSlidesGridLength = swiper2.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper2.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper2.grid;
    if (gridEnabled) {
      swiper2.grid.initSlides(slides);
    } else if (swiper2.grid) {
      swiper2.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i2 = 0; i2 < slidesLength; i2 += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i2]) slide2 = slides[i2];
      if (gridEnabled) {
        swiper2.grid.updateSlide(i2, slide2, slides);
      }
      if (slides[i2] && elementStyle(slide2, "display") === "none") continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i2].style[swiper2.getDirectionLabel("width")] = "";
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper2.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i2]) {
          slides[i2].style[swiper2.getDirectionLabel("width")] = "".concat(slideSize, "px");
        }
      }
      if (slides[i2]) {
        slides[i2].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i2 !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i2 === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper2.params.slidesPerGroupSkip, index)) % swiper2.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper2.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper2.virtualSize = Math.max(swiper2.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = "".concat(swiper2.virtualSize + spaceBetween, "px");
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper2.getDirectionLabel("width")] = "".concat(swiper2.virtualSize + spaceBetween, "px");
    }
    if (gridEnabled) {
      swiper2.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i2 = 0; i2 < snapGrid.length; i2 += 1) {
        let slidesGridItem = snapGrid[i2];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i2] <= swiper2.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper2.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper2.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i2 = 0; i2 < groups; i2 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i2 = 0; i2 < swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter; i2 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper2.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper2.isHorizontal() && rtl ? "marginLeft" : swiper2.getDirectionLabel("marginRight");
      slides.filter((_2, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = "".concat(spaceBetween, "px");
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper2, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "".concat(-snapGrid[0], "px"));
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "".concat(swiper2.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      const addToSnapGrid = -swiper2.snapGrid[0];
      const addToSlidesGrid = -swiper2.slidesGrid[0];
      swiper2.snapGrid = swiper2.snapGrid.map((v2) => v2 + addToSnapGrid);
      swiper2.slidesGrid = swiper2.slidesGrid.map((v2) => v2 + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper2.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper2.params.watchOverflow) swiper2.checkOverflow();
      swiper2.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper2.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper2.updateSlidesOffset();
    }
    swiper2.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
      const hasClassBackfaceClassAdded = swiper2.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper2.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper2.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper2 = this;
    const activeSlides = [];
    const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    let newHeight = 0;
    let i2;
    if (typeof speed === "number") {
      swiper2.setTransition(speed);
    } else if (speed === true) {
      swiper2.setTransition(swiper2.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper2.slides[swiper2.getSlideIndexByData(index)];
      }
      return swiper2.slides[index];
    };
    if (swiper2.params.slidesPerView !== "auto" && swiper2.params.slidesPerView > 1) {
      if (swiper2.params.centeredSlides) {
        (swiper2.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i2 = 0; i2 < Math.ceil(swiper2.params.slidesPerView); i2 += 1) {
          const index = swiper2.activeIndex + i2;
          if (index > swiper2.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper2.activeIndex));
    }
    for (i2 = 0; i2 < activeSlides.length; i2 += 1) {
      if (typeof activeSlides[i2] !== "undefined") {
        const height = activeSlides[i2].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0) swiper2.wrapperEl.style.height = "".concat(newHeight, "px");
  }
  function updateSlidesOffset() {
    const swiper2 = this;
    const slides = swiper2.slides;
    const minusOffset = swiper2.isElement ? swiper2.isHorizontal() ? swiper2.wrapperEl.offsetLeft : swiper2.wrapperEl.offsetTop : 0;
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      slides[i2].swiperSlideOffset = (swiper2.isHorizontal() ? slides[i2].offsetLeft : slides[i2].offsetTop) - minusOffset - swiper2.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper2 = this;
    const params = swiper2.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper2;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper2.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    swiper2.visibleSlidesIndexes = [];
    swiper2.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper2.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slide2 = slides[i2];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper2.slidesSizesGrid[i2];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper2.size - swiper2.slidesSizesGrid[i2];
      const isVisible = slideBefore >= 0 && slideBefore < swiper2.size - 1 || slideAfter > 1 && slideAfter <= swiper2.size || slideBefore <= 0 && slideAfter >= swiper2.size;
      if (isVisible) {
        swiper2.visibleSlides.push(slide2);
        swiper2.visibleSlidesIndexes.push(i2);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper2 = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper2.rtlTranslate ? -1 : 1;
      translate2 = swiper2 && swiper2.translate && swiper2.translate * multiplier || 0;
    }
    const params = swiper2.params;
    const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper2;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper2.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper2.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper2.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper2.getSlideIndexByData(0);
      const lastSlideIndex = swiper2.getSlideIndexByData(swiper2.slides.length - 1);
      const firstSlideTranslate = swiper2.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper2.slidesGrid[lastSlideIndex];
      const translateMax = swiper2.slidesGrid[swiper2.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper2, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper2.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper2.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper2.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper2.emit("fromEdge");
    }
    swiper2.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper2 = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper2;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, ".".concat(params.slideClass).concat(selector, ", swiper-slide").concat(selector))[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper2.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper2.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper2.virtual.slides.length) slideIndex -= swiper2.virtual.slides.length;
        activeSlide = getFilteredSlide('[data-swiper-slide-index="'.concat(slideIndex, '"]'));
      } else {
        activeSlide = getFilteredSlide('[data-swiper-slide-index="'.concat(activeIndex, '"]'));
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper2.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper2, imageEl) => {
    if (!swiper2 || swiper2.destroyed || !swiper2.params) return;
    const slideSelector = () => swiper2.isElement ? "swiper-slide" : ".".concat(swiper2.params.slideClass);
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(".".concat(swiper2.params.lazyPreloaderClass));
      if (!lazyEl && swiper2.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper2.params.lazyPreloaderClass));
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper2.params.lazyPreloaderClass));
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = (swiper2, index) => {
    if (!swiper2.slides[index]) return;
    const imageEl = swiper2.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  var preload = (swiper2) => {
    if (!swiper2 || swiper2.destroyed || !swiper2.params) return;
    let amount = swiper2.params.lazyPreloadPrevNext;
    const len = swiper2.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper2.params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(swiper2.params.slidesPerView);
    const activeIndex = swiper2.activeIndex;
    if (swiper2.params.grid && swiper2.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_2, i2) => {
        return activeColumn + slidesPerView + i2;
      }));
      swiper2.slides.forEach((slideEl, i2) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper2, i2);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper2.params.rewind || swiper2.params.loop) {
      for (let i2 = activeIndex - amount; i2 <= slideIndexLastInView + amount; i2 += 1) {
        const realIndex = (i2 % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper2, realIndex);
      }
    } else {
      for (let i2 = Math.max(activeIndex - amount, 0); i2 <= Math.min(slideIndexLastInView + amount, len - 1); i2 += 1) {
        if (i2 !== activeIndex && (i2 > slideIndexLastInView || i2 < activeIndex)) {
          unlazy(swiper2, i2);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper2) {
    const {
      slidesGrid,
      params
    } = swiper2;
    const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
    let activeIndex;
    for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
      if (typeof slidesGrid[i2 + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1] - (slidesGrid[i2 + 1] - slidesGrid[i2]) / 2) {
          activeIndex = i2;
        } else if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1]) {
          activeIndex = i2 + 1;
        }
      } else if (translate2 >= slidesGrid[i2]) {
        activeIndex = i2;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper2 = this;
    const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper2;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper2.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper2.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper2.virtual.slides.length) {
        realIndex2 -= swiper2.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper2);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper2.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper2.snapIndex = snapIndex;
        swiper2.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
      swiper2.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper2.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper2.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper2.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper2.slides[activeIndex]) {
      const slideIndex = swiper2.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper2, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper2.initialized) {
      preload(swiper2);
    }
    swiper2.emit("activeIndexChange");
    swiper2.emit("snapIndexChange");
    if (swiper2.initialized || swiper2.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper2.emit("realIndexChange");
      }
      swiper2.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper2 = this;
    const params = swiper2.params;
    let slide2 = el.closest(".".concat(params.slideClass, ", swiper-slide"));
    if (!slide2 && swiper2.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(".".concat(params.slideClass, ", swiper-slide"))) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i2 = 0; i2 < swiper2.slides.length; i2 += 1) {
        if (swiper2.slides[i2] === slide2) {
          slideFound = true;
          slideIndex = i2;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper2.clickedSlide = slide2;
      if (swiper2.virtual && swiper2.params.virtual.enabled) {
        swiper2.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper2.clickedIndex = slideIndex;
      }
    } else {
      swiper2.clickedSlide = void 0;
      swiper2.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper2.clickedIndex !== void 0 && swiper2.clickedIndex !== swiper2.activeIndex) {
      swiper2.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper2 = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper2;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper2.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper2 = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper2;
    let x2 = 0;
    let y2 = 0;
    const z2 = 0;
    if (swiper2.isHorizontal()) {
      x2 = rtl ? -translate2 : translate2;
    } else {
      y2 = translate2;
    }
    if (params.roundLengths) {
      x2 = Math.floor(x2);
      y2 = Math.floor(y2);
    }
    swiper2.previousTranslate = swiper2.translate;
    swiper2.translate = swiper2.isHorizontal() ? x2 : y2;
    if (params.cssMode) {
      wrapperEl[swiper2.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper2.isHorizontal() ? -x2 : -y2;
    } else if (!params.virtualTranslate) {
      if (swiper2.isHorizontal()) {
        x2 -= swiper2.cssOverflowAdjustment();
      } else {
        y2 -= swiper2.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = "translate3d(".concat(x2, "px, ").concat(y2, "px, ").concat(z2, "px)");
    }
    let newProgress;
    const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper2.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper2.updateProgress(translate2);
    }
    swiper2.emit("setTranslate", swiper2.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper2 = this;
    const {
      params,
      wrapperEl
    } = swiper2;
    if (swiper2.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper2.minTranslate();
    const maxTranslate2 = swiper2.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper2.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper2.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper2.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper2,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper2.setTransition(0);
      swiper2.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper2.emit("beforeTransitionStart", speed, internal);
        swiper2.emit("transitionEnd");
      }
    } else {
      swiper2.setTransition(speed);
      swiper2.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper2.emit("beforeTransitionStart", speed, internal);
        swiper2.emit("transitionStart");
      }
      if (!swiper2.animating) {
        swiper2.animating = true;
        if (!swiper2.onTranslateToWrapperTransitionEnd) {
          swiper2.onTranslateToWrapperTransitionEnd = function transitionEnd2(e2) {
            if (!swiper2 || swiper2.destroyed) return;
            if (e2.target !== this) return;
            swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
            swiper2.onTranslateToWrapperTransitionEnd = null;
            delete swiper2.onTranslateToWrapperTransitionEnd;
            swiper2.animating = false;
            if (runCallbacks) {
              swiper2.emit("transitionEnd");
            }
          };
        }
        swiper2.wrapperEl.addEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper2 = this;
    if (!swiper2.params.cssMode) {
      swiper2.wrapperEl.style.transitionDuration = "".concat(duration, "ms");
      swiper2.wrapperEl.style.transitionDelay = duration === 0 ? "0ms" : "";
    }
    swiper2.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper: swiper2,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper2;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper2.emit("transition".concat(step));
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper2.emit("slideResetTransition".concat(step));
        return;
      }
      swiper2.emit("slideChangeTransition".concat(step));
      if (dir === "next") {
        swiper2.emit("slideNextTransition".concat(step));
      } else {
        swiper2.emit("slidePrevTransition".concat(step));
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      params
    } = swiper2;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper2.updateAutoHeight();
    }
    transitionEmit({
      swiper: swiper2,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      params
    } = swiper2;
    swiper2.animating = false;
    if (params.cssMode) return;
    swiper2.setTransition(0);
    transitionEmit({
      swiper: swiper2,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper2 = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper2;
    if (!enabled && !internal && !initial || swiper2.destroyed || swiper2.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper2.params.speed;
    }
    const skip = Math.min(swiper2.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper2.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i2] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i2 + 1] * 100);
        if (typeof slidesGrid[i2 + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i2;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i2 + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i2;
        }
      }
    }
    if (swiper2.initialized && slideIndex !== activeIndex) {
      if (!swiper2.allowSlideNext && (rtl ? translate2 > swiper2.translate && translate2 > swiper2.minTranslate() : translate2 < swiper2.translate && translate2 < swiper2.minTranslate())) {
        return false;
      }
      if (!swiper2.allowSlidePrev && translate2 > swiper2.translate && translate2 > swiper2.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper2.emit("beforeSlideChangeStart");
    }
    swiper2.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper2.translate || !rtl && translate2 === swiper2.translate)) {
      swiper2.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper2.updateAutoHeight();
      }
      swiper2.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper2.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper2.transitionStart(runCallbacks, direction);
        swiper2.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper2.isHorizontal();
      const t2 = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper2.wrapperEl.style.scrollSnapType = "none";
          swiper2._immediateVirtual = true;
        }
        if (isVirtual && !swiper2._cssModeVirtualInitialSet && swiper2.params.initialSlide > 0) {
          swiper2._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper2.wrapperEl.style.scrollSnapType = "";
            swiper2._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper2.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper2,
            targetPosition: t2,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t2,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper2.setTransition(speed);
    swiper2.setTranslate(translate2);
    swiper2.updateActiveIndex(slideIndex);
    swiper2.updateSlidesClasses();
    swiper2.emit("beforeTransitionStart", speed, internal);
    swiper2.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper2.transitionEnd(runCallbacks, direction);
    } else if (!swiper2.animating) {
      swiper2.animating = true;
      if (!swiper2.onSlideToWrapperTransitionEnd) {
        swiper2.onSlideToWrapperTransitionEnd = function transitionEnd2(e2) {
          if (!swiper2 || swiper2.destroyed) return;
          if (e2.target !== this) return;
          swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
          swiper2.onSlideToWrapperTransitionEnd = null;
          delete swiper2.onSlideToWrapperTransitionEnd;
          swiper2.transitionEnd(runCallbacks, direction);
        };
      }
      swiper2.wrapperEl.addEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper2 = this;
    if (swiper2.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper2.params.speed;
    }
    const gridEnabled = swiper2.grid && swiper2.params.grid && swiper2.params.grid.rows > 1;
    let newIndex = index;
    if (swiper2.params.loop) {
      if (swiper2.virtual && swiper2.params.virtual.enabled) {
        newIndex = newIndex + swiper2.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper2.params.grid.rows;
          targetSlideIndex = swiper2.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper2.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper2.slides.length / swiper2.params.grid.rows) : swiper2.slides.length;
        const {
          centeredSlides
        } = swiper2.params;
        let slidesPerView = swiper2.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper2.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper2.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper2.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper2.activeIndex ? "prev" : "next" : targetSlideIndex - swiper2.activeIndex - 1 < swiper2.params.slidesPerView ? "next" : "prev";
          swiper2.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper2.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper2.params.grid.rows;
          newIndex = swiper2.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper2.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper2.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper2;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      enabled,
      params,
      animating
    } = swiper2;
    if (!enabled || swiper2.destroyed) return swiper2;
    if (typeof speed === "undefined") {
      speed = swiper2.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper2.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper2.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper2.loopFix({
        direction: "next"
      });
      swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
      if (swiper2.activeIndex === swiper2.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper2.isEnd) {
      return swiper2.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper2;
    if (!enabled || swiper2.destroyed) return swiper2;
    if (typeof speed === "undefined") {
      speed = swiper2.params.speed;
    }
    const isVirtual = swiper2.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper2.loopFix({
        direction: "prev"
      });
      swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper2.translate : -swiper2.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper2.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper2.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper2.isBeginning) {
      const lastIndex = swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
      return swiper2.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper2.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper2 = this;
    if (swiper2.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper2.params.speed;
    }
    return swiper2.slideTo(swiper2.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper2 = this;
    if (swiper2.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper2.params.speed;
    }
    let index = swiper2.activeIndex;
    const skip = Math.min(swiper2.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper2.params.slidesPerGroup);
    const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
    if (translate2 >= swiper2.snapGrid[snapIndex]) {
      const currentSnap = swiper2.snapGrid[snapIndex];
      const nextSnap = swiper2.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper2.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper2.snapGrid[snapIndex - 1];
      const currentSnap = swiper2.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper2.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper2.slidesGrid.length - 1);
    return swiper2.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper2 = this;
    if (swiper2.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper2;
    const slidesPerView = params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper2.clickedIndex;
    let realIndex;
    const slideSelector = swiper2.isElement ? "swiper-slide" : ".".concat(params.slideClass);
    if (params.loop) {
      if (swiper2.animating) return;
      realIndex = parseInt(swiper2.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper2.loopedSlides - slidesPerView / 2 || slideToIndex > swiper2.slides.length - swiper2.loopedSlides + slidesPerView / 2) {
          swiper2.loopFix();
          slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, '[data-swiper-slide-index="').concat(realIndex, '"]'))[0]);
          nextTick(() => {
            swiper2.slideTo(slideToIndex);
          });
        } else {
          swiper2.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper2.slides.length - slidesPerView) {
        swiper2.loopFix();
        slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, '[data-swiper-slide-index="').concat(realIndex, '"]'))[0]);
        nextTick(() => {
          swiper2.slideTo(slideToIndex);
        });
      } else {
        swiper2.slideTo(slideToIndex);
      }
    } else {
      swiper2.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper2 = this;
    const {
      params,
      slidesEl
    } = swiper2;
    if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper2.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper2.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i2 = 0; i2 < amountOfSlides; i2 += 1) {
        const slideEl = swiper2.isElement ? createElement3("swiper-slide", [params.slideBlankClass]) : createElement3("div", [params.slideClass, params.slideBlankClass]);
        swiper2.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper2.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper2.recalcSlides();
        swiper2.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper2.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper2.recalcSlides();
        swiper2.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper2.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper2 = this;
    if (!swiper2.params.loop) return;
    swiper2.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper2;
    const {
      centeredSlides
    } = params;
    swiper2.allowSlidePrev = true;
    swiper2.allowSlideNext = true;
    if (swiper2.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper2.snapIndex === 0) {
          swiper2.slideTo(swiper2.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper2.snapIndex < params.slidesPerView) {
          swiper2.slideTo(swiper2.virtual.slides.length + swiper2.snapIndex, 0, false, true);
        } else if (swiper2.snapIndex === swiper2.snapGrid.length - 1) {
          swiper2.slideTo(swiper2.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper2.allowSlidePrev = allowSlidePrev;
      swiper2.allowSlideNext = allowSlideNext;
      swiper2.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper2.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper2.loopedSlides = loopedSlides;
    const gridEnabled = swiper2.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper2.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper2.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i2 = 0; i2 < loopedSlides - activeColIndexWithShift; i2 += 1) {
        const index = i2 - Math.floor(i2 / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i3 = slides.length - 1; i3 >= 0; i3 -= 1) {
            if (slides[i3].column === colIndexToPrepend) prependSlidesIndexes.push(i3);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i2 = 0; i2 < slidesAppended; i2 += 1) {
        const index = i2 - Math.floor(i2 / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper2.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper2.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper2.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper2.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper2.slides.forEach((slide2, slideIndex) => {
        swiper2.grid.updateSlide(slideIndex, slide2, swiper2.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper2.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
          const newSlideTranslate = swiper2.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper2.setTranslate(swiper2.translate - diff);
          } else {
            swiper2.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper2.touchEventsData.startTranslate = swiper2.touchEventsData.startTranslate - diff;
              swiper2.touchEventsData.currentTranslate = swiper2.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper2.slideTo(swiper2.activeIndex + shift, 0, false, true);
            swiper2.touchEventsData.currentTranslate = swiper2.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
          const newSlideTranslate = swiper2.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper2.setTranslate(swiper2.translate - diff);
          } else {
            swiper2.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper2.touchEventsData.startTranslate = swiper2.touchEventsData.startTranslate - diff;
              swiper2.touchEventsData.currentTranslate = swiper2.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper2.slideTo(swiper2.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper2.allowSlidePrev = allowSlidePrev;
    swiper2.allowSlideNext = allowSlideNext;
    if (swiper2.controller && swiper2.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper2.controller.control)) {
        swiper2.controller.control.forEach((c2) => {
          if (!c2.destroyed && c2.params.loop) c2.loopFix(__spreadProps(__spreadValues({}, loopParams), {
            slideTo: c2.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          }));
        });
      } else if (swiper2.controller.control instanceof swiper2.constructor && swiper2.controller.control.params.loop) {
        swiper2.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
          slideTo: swiper2.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        }));
      }
    }
    swiper2.emit("loopFix");
  }
  function loopDestroy() {
    const swiper2 = this;
    const {
      params,
      slidesEl
    } = swiper2;
    if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled) return;
    swiper2.recalcSlides();
    const newSlidesOrder = [];
    swiper2.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper2.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper2.recalcSlides();
    swiper2.slideTo(swiper2.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper2 = this;
    if (!swiper2.params.simulateTouch || swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) return;
    const el = swiper2.params.touchEventsTarget === "container" ? swiper2.el : swiper2.wrapperEl;
    if (swiper2.isElement) {
      swiper2.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper2.isElement) {
      requestAnimationFrame(() => {
        swiper2.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper2 = this;
    if (swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) {
      return;
    }
    if (swiper2.isElement) {
      swiper2.__preventObserver__ = true;
    }
    swiper2[swiper2.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper2.isElement) {
      requestAnimationFrame(() => {
        swiper2.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper2, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper2;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper2 = this;
    const document2 = getDocument();
    let e2 = event2;
    if (e2.originalEvent) e2 = e2.originalEvent;
    const data = swiper2.touchEventsData;
    if (e2.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e2.pointerId) {
        return;
      }
      data.pointerId = e2.pointerId;
    } else if (e2.type === "touchstart" && e2.targetTouches.length === 1) {
      data.touchId = e2.targetTouches[0].identifier;
    }
    if (e2.type === "touchstart") {
      preventEdgeSwipe(swiper2, e2, e2.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper2;
    if (!enabled) return;
    if (!params.simulateTouch && e2.pointerType === "mouse") return;
    if (swiper2.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper2.animating && params.cssMode && params.loop) {
      swiper2.loopFix();
    }
    let targetEl = e2.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper2.wrapperEl)) return;
    }
    if ("which" in e2 && e2.which === 3) return;
    if ("button" in e2 && e2.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e2.composedPath ? e2.composedPath() : e2.path;
    if (swipingClassHasValue && e2.target && e2.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    const isTargetShadow = !!(e2.target && e2.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper2.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e2.pageX;
    touches.currentY = e2.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper2, e2, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper2.allowClick = true;
    swiper2.updateSize();
    swiper2.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e2.pointerType === "mouse" || e2.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper2.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e2.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper2.freeMode && swiper2.animating && !params.cssMode) {
      swiper2.freeMode.onTouchStart();
    }
    swiper2.emit("touchStart", e2);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper2 = this;
    const data = swiper2.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper2;
    if (!enabled) return;
    if (!params.simulateTouch && event2.pointerType === "mouse") return;
    let e2 = event2;
    if (e2.originalEvent) e2 = e2.originalEvent;
    if (e2.type === "pointermove") {
      if (data.touchId !== null) return;
      const id = e2.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e2.type === "touchmove") {
      targetTouch = [...e2.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e2;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper2.emit("touchMoveOpposite", e2);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e2.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper2.allowTouchMove) {
      if (!e2.target.matches(data.focusableElements)) {
        swiper2.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper2.isVertical()) {
        if (pageY < touches.startY && swiper2.translate <= swiper2.maxTranslate() || pageY > touches.startY && swiper2.translate >= swiper2.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper2.translate <= swiper2.maxTranslate() || pageX > touches.startX && swiper2.translate >= swiper2.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e2.target && e2.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e2.target === document2.activeElement && e2.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper2.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper2.emit("touchMove", e2);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper2.params.threshold && Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper2.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper2.isHorizontal() && touches.currentY === touches.startY || swiper2.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper2.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper2.emit("touchMoveOpposite", e2);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e2.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper2.allowClick = false;
    if (!params.cssMode && e2.cancelable) {
      e2.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e2.stopPropagation();
    }
    let diff = swiper2.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper2.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper2.touchesDirection;
    swiper2.swipeDirection = diff > 0 ? "prev" : "next";
    swiper2.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper2.params.loop && !params.cssMode;
    const allowLoopFix = swiper2.touchesDirection === "next" && swiper2.allowSlideNext || swiper2.touchesDirection === "prev" && swiper2.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper2.loopFix({
          direction: swiper2.swipeDirection
        });
      }
      data.startTranslate = swiper2.getTranslate();
      swiper2.setTransition(0);
      if (swiper2.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper2.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
        swiper2.setGrabCursor(true);
      }
      swiper2.emit("sliderFirstMove", e2);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper2.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper2.emit("sliderMove", e2);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper2.minTranslate() - swiper2.slidesSizesGrid[swiper2.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper2.slides.length - params.slidesPerView >= 2 ? swiper2.slidesSizesGrid[swiper2.activeIndex + 1] + swiper2.params.spaceBetween : 0) - swiper2.params.spaceBetween : swiper2.minTranslate())) {
        swiper2.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper2.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper2.minTranslate() - 1 + __pow(-swiper2.minTranslate() + data.startTranslate + diff, resistanceRatio);
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper2.maxTranslate() + swiper2.slidesSizesGrid[swiper2.slidesSizesGrid.length - 1] + swiper2.params.spaceBetween + (params.slidesPerView !== "auto" && swiper2.slides.length - params.slidesPerView >= 2 ? swiper2.slidesSizesGrid[swiper2.slidesSizesGrid.length - 1] + swiper2.params.spaceBetween : 0) : swiper2.maxTranslate())) {
        swiper2.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper2.slides.length - (params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper2.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper2.maxTranslate() + 1 - __pow(swiper2.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }
      }
    }
    if (disableParentSwiper) {
      e2.preventedByNestedSwiper = true;
    }
    if (!swiper2.allowSlideNext && swiper2.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper2.allowSlidePrev && swiper2.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper2.allowSlidePrev && !swiper2.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper2.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled && swiper2.freeMode || params.watchSlidesProgress) {
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper2.freeMode) {
      swiper2.freeMode.onTouchMove();
    }
    swiper2.updateProgress(data.currentTranslate);
    swiper2.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper2 = this;
    const data = swiper2.touchEventsData;
    let e2 = event2;
    if (e2.originalEvent) e2 = e2.originalEvent;
    let targetTouch;
    const isTouchEvent = e2.type === "touchend" || e2.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return;
      if (e2.pointerId !== data.pointerId) return;
      targetTouch = e2;
    } else {
      targetTouch = [...e2.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e2.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e2.type) && (swiper2.browser.isSafari || swiper2.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper2;
    if (!enabled) return;
    if (!params.simulateTouch && e2.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper2.emit("touchEnd", e2);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper2.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
      swiper2.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper2.allowClick) {
      const pathTree = e2.path || e2.composedPath && e2.composedPath();
      swiper2.updateClickedSlide(pathTree && pathTree[0] || e2.target, pathTree);
      swiper2.emit("tap click", e2);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper2.emit("doubleTap doubleClick", e2);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper2.destroyed) swiper2.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper2.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper2.translate : -swiper2.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper2.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper2.maxTranslate() && !swiper2.params.loop;
    let stopIndex = 0;
    let groupSize = swiper2.slidesSizesGrid[0];
    for (let i2 = 0; i2 < slidesGrid.length; i2 += i2 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i2 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i2 + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i2] && currentPos < slidesGrid[i2 + increment2]) {
          stopIndex = i2;
          groupSize = slidesGrid[i2 + increment2] - slidesGrid[i2];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i2]) {
        stopIndex = i2;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper2.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
      } else if (swiper2.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper2.slideTo(swiper2.activeIndex);
        return;
      }
      if (swiper2.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) swiper2.slideTo(params.rewind && swiper2.isEnd ? rewindFirstIndex : stopIndex + increment);
        else swiper2.slideTo(stopIndex);
      }
      if (swiper2.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper2.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper2.slideTo(rewindLastIndex);
        } else {
          swiper2.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper2.slideTo(swiper2.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper2.navigation && (e2.target === swiper2.navigation.nextEl || e2.target === swiper2.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper2.swipeDirection === "next") {
          swiper2.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper2.swipeDirection === "prev") {
          swiper2.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e2.target === swiper2.navigation.nextEl) {
        swiper2.slideTo(stopIndex + increment);
      } else {
        swiper2.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper2 = this;
    const {
      params,
      el
    } = swiper2;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper2.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper2;
    const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
    swiper2.allowSlideNext = true;
    swiper2.allowSlidePrev = true;
    swiper2.updateSize();
    swiper2.updateSlides();
    swiper2.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !swiper2.isBeginning && !swiper2.params.centeredSlides && !isVirtualLoop) {
      swiper2.slideTo(swiper2.slides.length - 1, 0, false, true);
    } else {
      if (swiper2.params.loop && !isVirtual) {
        swiper2.slideToLoop(swiper2.realIndex, 0, false, true);
      } else {
        swiper2.slideTo(swiper2.activeIndex, 0, false, true);
      }
    }
    if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
      clearTimeout(swiper2.autoplay.resizeTimeout);
      swiper2.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
          swiper2.autoplay.resume();
        }
      }, 500);
    }
    swiper2.allowSlidePrev = allowSlidePrev;
    swiper2.allowSlideNext = allowSlideNext;
    if (swiper2.params.watchOverflow && snapGrid !== swiper2.snapGrid) {
      swiper2.checkOverflow();
    }
  }
  function onClick(e2) {
    const swiper2 = this;
    if (!swiper2.enabled) return;
    if (!swiper2.allowClick) {
      if (swiper2.params.preventClicks) e2.preventDefault();
      if (swiper2.params.preventClicksPropagation && swiper2.animating) {
        e2.stopPropagation();
        e2.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper2 = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper2;
    if (!enabled) return;
    swiper2.previousTranslate = swiper2.translate;
    if (swiper2.isHorizontal()) {
      swiper2.translate = -wrapperEl.scrollLeft;
    } else {
      swiper2.translate = -wrapperEl.scrollTop;
    }
    if (swiper2.translate === 0) swiper2.translate = 0;
    swiper2.updateActiveIndex();
    swiper2.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper2.translate - swiper2.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper2.progress) {
      swiper2.updateProgress(rtlTranslate ? -swiper2.translate : swiper2.translate);
    }
    swiper2.emit("setTranslate", swiper2.translate, false);
  }
  function onLoad(e2) {
    const swiper2 = this;
    processLazyPreloader(swiper2, e2.target);
    if (swiper2.params.cssMode || swiper2.params.slidesPerView !== "auto" && !swiper2.params.autoHeight) {
      return;
    }
    swiper2.update();
  }
  function onDocumentTouchStart() {
    const swiper2 = this;
    if (swiper2.documentTouchHandlerProceeded) return;
    swiper2.documentTouchHandlerProceeded = true;
    if (swiper2.params.touchReleaseOnEdges) {
      swiper2.el.style.touchAction = "auto";
    }
  }
  var events = (swiper2, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper2;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string") return;
    document2[domMethod]("touchstart", swiper2.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper2.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper2.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper2.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper2.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper2.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper2.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper2.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper2.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper2[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper2[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper2.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper2 = this;
    const {
      params
    } = swiper2;
    swiper2.onTouchStart = onTouchStart.bind(swiper2);
    swiper2.onTouchMove = onTouchMove.bind(swiper2);
    swiper2.onTouchEnd = onTouchEnd.bind(swiper2);
    swiper2.onDocumentTouchStart = onDocumentTouchStart.bind(swiper2);
    if (params.cssMode) {
      swiper2.onScroll = onScroll.bind(swiper2);
    }
    swiper2.onClick = onClick.bind(swiper2);
    swiper2.onLoad = onLoad.bind(swiper2);
    events(swiper2, "on");
  }
  function detachEvents() {
    const swiper2 = this;
    events(swiper2, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper2, params) => {
    return swiper2.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper2 = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper2;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
    const breakpoint = swiper2.getBreakpoint(breakpoints2, swiper2.params.breakpointsBase, swiper2.el);
    if (!breakpoint || swiper2.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper2.originalParams;
    const wasMultiRow = isGridEnabled(swiper2, params);
    const isMultiRow = isGridEnabled(swiper2, breakpointParams);
    const wasGrabCursor = swiper2.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
      swiper2.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add("".concat(params.containerModifierClass, "grid"));
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add("".concat(params.containerModifierClass, "grid-column"));
      }
      swiper2.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper2.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper2.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper2[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper2[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper2.changeDirection();
    }
    extend2(swiper2.params, breakpointParams);
    const isEnabled = swiper2.params.enabled;
    const hasLoop = swiper2.params.loop;
    Object.assign(swiper2, {
      allowTouchMove: swiper2.params.allowTouchMove,
      allowSlideNext: swiper2.params.allowSlideNext,
      allowSlidePrev: swiper2.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper2.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper2.enable();
    }
    swiper2.currentBreakpoint = breakpoint;
    swiper2.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper2.loopDestroy();
        swiper2.loopCreate(realIndex);
        swiper2.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper2.loopCreate(realIndex);
        swiper2.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper2.loopDestroy();
      }
    }
    swiper2.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl) return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a2, b2) => parseInt(a2.value, 10) - parseInt(b2.value, 10));
    for (let i2 = 0; i2 < points.length; i2 += 1) {
      const {
        point,
        value
      } = points[i2];
      if (base === "window") {
        if (window2.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper2 = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper2;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper2.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper2.emitContainerClasses();
  }
  function removeClasses() {
    const swiper2 = this;
    const {
      el,
      classNames
    } = swiper2;
    if (!el || typeof el === "string") return;
    el.classList.remove(...classNames);
    swiper2.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper2 = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper2;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper2.slides.length - 1;
      const lastSlideRightEdge = swiper2.slidesGrid[lastSlideIndex] + swiper2.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper2.isLocked = swiper2.size > lastSlideRightEdge;
    } else {
      swiper2.isLocked = swiper2.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper2.allowSlideNext = !swiper2.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper2.allowSlidePrev = !swiper2.isLocked;
    }
    if (wasLocked && wasLocked !== swiper2.isLocked) {
      swiper2.isEnd = false;
    }
    if (wasLocked !== swiper2.isLocked) {
      swiper2.emit(swiper2.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend2({}, params);
      if (el && !params.el) params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper2 = this;
      swiper2.__swiper__ = true;
      swiper2.support = getSupport();
      swiper2.device = getDevice({
        userAgent: params.userAgent
      });
      swiper2.browser = getBrowser();
      swiper2.eventsListeners = {};
      swiper2.eventsAnyListeners = [];
      swiper2.modules = [...swiper2.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper2.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper2.modules.forEach((mod) => {
        mod({
          params,
          swiper: swiper2,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper2.on.bind(swiper2),
          once: swiper2.once.bind(swiper2),
          off: swiper2.off.bind(swiper2),
          emit: swiper2.emit.bind(swiper2)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper2.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper2.originalParams = extend2({}, swiper2.params);
      swiper2.passedParams = extend2({}, params);
      if (swiper2.params && swiper2.params.on) {
        Object.keys(swiper2.params.on).forEach((eventName) => {
          swiper2.on(eventName, swiper2.params.on[eventName]);
        });
      }
      if (swiper2.params && swiper2.params.onAny) {
        swiper2.onAny(swiper2.params.onAny);
      }
      Object.assign(swiper2, {
        enabled: swiper2.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper2.params.direction === "horizontal";
        },
        isVertical() {
          return swiper2.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / __pow(2, 23)) * __pow(2, 23);
        },
        // Locks
        allowSlideNext: swiper2.params.allowSlideNext,
        allowSlidePrev: swiper2.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper2.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper2.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper2.emit("_swiper");
      if (swiper2.params.init) {
        swiper2.init();
      }
      return swiper2;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper2 = this;
      const {
        slidesEl,
        params
      } = swiper2;
      swiper2.slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
    }
    enable() {
      const swiper2 = this;
      if (swiper2.enabled) return;
      swiper2.enabled = true;
      if (swiper2.params.grabCursor) {
        swiper2.setGrabCursor();
      }
      swiper2.emit("enable");
    }
    disable() {
      const swiper2 = this;
      if (!swiper2.enabled) return;
      swiper2.enabled = false;
      if (swiper2.params.grabCursor) {
        swiper2.unsetGrabCursor();
      }
      swiper2.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper2 = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper2.minTranslate();
      const max = swiper2.maxTranslate();
      const current = (max - min) * progress + min;
      swiper2.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper2 = this;
      if (!swiper2.params._emitClasses || !swiper2.el) return;
      const cls = swiper2.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper2.params.containerModifierClass) === 0;
      });
      swiper2.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper2 = this;
      if (swiper2.destroyed) return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper2.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper2 = this;
      if (!swiper2.params._emitClasses || !swiper2.el) return;
      const updates = [];
      swiper2.slides.forEach((slideEl) => {
        const classNames = swiper2.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper2.emit("_slideClass", slideEl, classNames);
      });
      swiper2.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper2 = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper2;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
          if (slides[i2] && !breakLoop) {
            slideSize += Math.ceil(slides[i2].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2] && !breakLoop) {
            slideSize += slides[i2].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
            const slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper2 = this;
      if (!swiper2 || swiper2.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper2;
      if (params.breakpoints) {
        swiper2.setBreakpoint();
      }
      [...swiper2.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper2, imageEl);
        }
      });
      swiper2.updateSize();
      swiper2.updateSlides();
      swiper2.updateProgress();
      swiper2.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper2.rtlTranslate ? swiper2.translate * -1 : swiper2.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper2.maxTranslate()), swiper2.minTranslate());
        swiper2.setTranslate(newTranslate);
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper2.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !params.centeredSlides) {
          const slides = swiper2.virtual && params.virtual.enabled ? swiper2.virtual.slides : swiper2.slides;
          translated = swiper2.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper2.slideTo(swiper2.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper2.snapGrid) {
        swiper2.checkOverflow();
      }
      swiper2.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper2 = this;
      const currentDirection = swiper2.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper2;
      }
      swiper2.el.classList.remove("".concat(swiper2.params.containerModifierClass).concat(currentDirection));
      swiper2.el.classList.add("".concat(swiper2.params.containerModifierClass).concat(newDirection));
      swiper2.emitContainerClasses();
      swiper2.params.direction = newDirection;
      swiper2.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper2.emit("changeDirection");
      if (needUpdate) swiper2.update();
      return swiper2;
    }
    changeLanguageDirection(direction) {
      const swiper2 = this;
      if (swiper2.rtl && direction === "rtl" || !swiper2.rtl && direction === "ltr") return;
      swiper2.rtl = direction === "rtl";
      swiper2.rtlTranslate = swiper2.params.direction === "horizontal" && swiper2.rtl;
      if (swiper2.rtl) {
        swiper2.el.classList.add("".concat(swiper2.params.containerModifierClass, "rtl"));
        swiper2.el.dir = "rtl";
      } else {
        swiper2.el.classList.remove("".concat(swiper2.params.containerModifierClass, "rtl"));
        swiper2.el.dir = "ltr";
      }
      swiper2.update();
    }
    mount(element) {
      const swiper2 = this;
      if (swiper2.mounted) return true;
      let el = element || swiper2.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper2;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper2.params.swiperElementNodeName.toUpperCase()) {
        swiper2.isElement = true;
      }
      const getWrapperSelector = () => {
        return ".".concat((swiper2.params.wrapperClass || "").trim().split(" ").join("."));
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper2.params.createElements) {
        wrapperEl = createElement3("div", swiper2.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, ".".concat(swiper2.params.slideClass)).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper2, {
        el,
        wrapperEl,
        slidesEl: swiper2.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper2.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper2.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper2 = this;
      if (swiper2.initialized) return swiper2;
      const mounted = swiper2.mount(el);
      if (mounted === false) return swiper2;
      swiper2.emit("beforeInit");
      if (swiper2.params.breakpoints) {
        swiper2.setBreakpoint();
      }
      swiper2.addClasses();
      swiper2.updateSize();
      swiper2.updateSlides();
      if (swiper2.params.watchOverflow) {
        swiper2.checkOverflow();
      }
      if (swiper2.params.grabCursor && swiper2.enabled) {
        swiper2.setGrabCursor();
      }
      if (swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
        swiper2.slideTo(swiper2.params.initialSlide + swiper2.virtual.slidesBefore, 0, swiper2.params.runCallbacksOnInit, false, true);
      } else {
        swiper2.slideTo(swiper2.params.initialSlide, 0, swiper2.params.runCallbacksOnInit, false, true);
      }
      if (swiper2.params.loop) {
        swiper2.loopCreate();
      }
      swiper2.attachEvents();
      const lazyElements = [...swiper2.el.querySelectorAll('[loading="lazy"]')];
      if (swiper2.isElement) {
        lazyElements.push(...swiper2.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper2, imageEl);
        } else {
          imageEl.addEventListener("load", (e2) => {
            processLazyPreloader(swiper2, e2.target);
          });
        }
      });
      preload(swiper2);
      swiper2.initialized = true;
      preload(swiper2);
      swiper2.emit("init");
      swiper2.emit("afterInit");
      return swiper2;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper2 = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper2;
      if (typeof swiper2.params === "undefined" || swiper2.destroyed) {
        return null;
      }
      swiper2.emit("beforeDestroy");
      swiper2.initialized = false;
      swiper2.detachEvents();
      if (params.loop) {
        swiper2.loopDestroy();
      }
      if (cleanStyles) {
        swiper2.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper2.emit("destroy");
      Object.keys(swiper2.eventsListeners).forEach((eventName) => {
        swiper2.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper2.el && typeof swiper2.el !== "string") {
          swiper2.el.swiper = null;
        }
        deleteProps(swiper2);
      }
      swiper2.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
      const modules2 = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
        modules2.push(mod);
      }
    }
    static use(module2) {
      if (Array.isArray(module2)) {
        module2.forEach((m2) => _Swiper.installModule(m2));
        return _Swiper;
      }
      _Swiper.installModule(module2);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/swiper/modules/virtual.mjs
  function Virtual(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let cssModeTimeout;
    const document2 = getDocument();
    swiper2.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const tempDOM = document2.createElement("div");
    function renderSlide(slide2, index) {
      const params = swiper2.params.virtual;
      if (params.cache && swiper2.virtual.cache[index]) {
        return swiper2.virtual.cache[index];
      }
      let slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper2, slide2, index);
        if (typeof slideEl === "string") {
          tempDOM.innerHTML = slideEl;
          slideEl = tempDOM.children[0];
        }
      } else if (swiper2.isElement) {
        slideEl = createElement3("swiper-slide");
      } else {
        slideEl = createElement3("div", swiper2.params.slideClass);
      }
      slideEl.setAttribute("data-swiper-slide-index", index);
      if (!params.renderSlide) {
        slideEl.innerHTML = slide2;
      }
      if (params.cache) {
        swiper2.virtual.cache[index] = slideEl;
      }
      return slideEl;
    }
    function update2(force, beforeInit) {
      const {
        slidesPerView,
        slidesPerGroup,
        centeredSlides,
        loop: isLoop,
        initialSlide
      } = swiper2.params;
      if (beforeInit && !isLoop && initialSlide > 0) {
        return;
      }
      const {
        addSlidesBefore,
        addSlidesAfter
      } = swiper2.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset
      } = swiper2.virtual;
      if (!swiper2.params.cssMode) {
        swiper2.updateActiveIndex();
      }
      const activeIndex = swiper2.activeIndex || 0;
      let offsetProp;
      if (swiper2.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper2.isHorizontal() ? "left" : "top";
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
      }
      let from = activeIndex - slidesBefore;
      let to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      let offset = (swiper2.slidesGrid[from] || 0) - (swiper2.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper2.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper2.slidesGrid[0];
      }
      Object.assign(swiper2.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper2.slidesGrid,
        slidesBefore,
        slidesAfter
      });
      function onRendered() {
        swiper2.updateSlides();
        swiper2.updateProgress();
        swiper2.updateSlidesClasses();
        emit("virtualUpdate");
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper2.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper2.slides.forEach((slideEl) => {
            slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper2.cssOverflowAdjustment()), "px");
          });
        }
        swiper2.updateProgress();
        emit("virtualUpdate");
        return;
      }
      if (swiper2.params.virtual.renderExternal) {
        swiper2.params.virtual.renderExternal.call(swiper2, {
          offset,
          from,
          to,
          slides: function getSlides() {
            const slidesToRender = [];
            for (let i2 = from; i2 <= to; i2 += 1) {
              slidesToRender.push(slides[i2]);
            }
            return slidesToRender;
          }()
        });
        if (swiper2.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit("virtualUpdate");
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      const getSlideIndex = (index) => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper2.slides.filter((el) => el.matches(".".concat(swiper2.params.slideClass, ", swiper-slide"))).forEach((slideEl) => {
          slideEl.remove();
        });
      } else {
        for (let i2 = previousFrom; i2 <= previousTo; i2 += 1) {
          if (i2 < from || i2 > to) {
            const slideIndex = getSlideIndex(i2);
            swiper2.slides.filter((el) => el.matches(".".concat(swiper2.params.slideClass, '[data-swiper-slide-index="').concat(slideIndex, '"], swiper-slide[data-swiper-slide-index="').concat(slideIndex, '"]'))).forEach((slideEl) => {
              slideEl.remove();
            });
          }
        }
      }
      const loopFrom = isLoop ? -slides.length : 0;
      const loopTo = isLoop ? slides.length * 2 : slides.length;
      for (let i2 = loopFrom; i2 < loopTo; i2 += 1) {
        if (i2 >= from && i2 <= to) {
          const slideIndex = getSlideIndex(i2);
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(slideIndex);
          } else {
            if (i2 > previousTo) appendIndexes.push(slideIndex);
            if (i2 < previousFrom) prependIndexes.push(slideIndex);
          }
        }
      }
      appendIndexes.forEach((index) => {
        swiper2.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (let i2 = prependIndexes.length - 1; i2 >= 0; i2 -= 1) {
          const index = prependIndexes[i2];
          swiper2.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort((a2, b2) => b2 - a2);
        prependIndexes.forEach((index) => {
          swiper2.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper2.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
        slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper2.cssOverflowAdjustment()), "px");
      });
      onRendered();
    }
    function appendSlide2(slides) {
      if (typeof slides === "object" && "length" in slides) {
        for (let i2 = 0; i2 < slides.length; i2 += 1) {
          if (slides[i2]) swiper2.virtual.slides.push(slides[i2]);
        }
      } else {
        swiper2.virtual.slides.push(slides);
      }
      update2(true);
    }
    function prependSlide2(slides) {
      const activeIndex = swiper2.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i2 = 0; i2 < slides.length; i2 += 1) {
          if (slides[i2]) swiper2.virtual.slides.unshift(slides[i2]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper2.virtual.slides.unshift(slides);
      }
      if (swiper2.params.virtual.cache) {
        const cache = swiper2.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const cachedEl = cache[cachedIndex];
          const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
          if (cachedElIndex) {
            cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper2.virtual.cache = newCache;
      }
      update2(true);
      swiper2.slideTo(newActiveIndex, 0);
    }
    function removeSlide2(slidesIndexes) {
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
      let activeIndex = swiper2.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i2 = slidesIndexes.length - 1; i2 >= 0; i2 -= 1) {
          if (swiper2.params.virtual.cache) {
            delete swiper2.virtual.cache[slidesIndexes[i2]];
            Object.keys(swiper2.virtual.cache).forEach((key) => {
              if (key > slidesIndexes) {
                swiper2.virtual.cache[key - 1] = swiper2.virtual.cache[key];
                swiper2.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
                delete swiper2.virtual.cache[key];
              }
            });
          }
          swiper2.virtual.slides.splice(slidesIndexes[i2], 1);
          if (slidesIndexes[i2] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        if (swiper2.params.virtual.cache) {
          delete swiper2.virtual.cache[slidesIndexes];
          Object.keys(swiper2.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper2.virtual.cache[key - 1] = swiper2.virtual.cache[key];
              swiper2.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper2.virtual.cache[key];
            }
          });
        }
        swiper2.virtual.slides.splice(slidesIndexes, 1);
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update2(true);
      swiper2.slideTo(activeIndex, 0);
    }
    function removeAllSlides2() {
      swiper2.virtual.slides = [];
      if (swiper2.params.virtual.cache) {
        swiper2.virtual.cache = {};
      }
      update2(true);
      swiper2.slideTo(0, 0);
    }
    on("beforeInit", () => {
      if (!swiper2.params.virtual.enabled) return;
      let domSlidesAssigned;
      if (typeof swiper2.passedParams.virtual.slides === "undefined") {
        const slides = [...swiper2.slidesEl.children].filter((el) => el.matches(".".concat(swiper2.params.slideClass, ", swiper-slide")));
        if (slides && slides.length) {
          swiper2.virtual.slides = [...slides];
          domSlidesAssigned = true;
          slides.forEach((slideEl, slideIndex) => {
            slideEl.setAttribute("data-swiper-slide-index", slideIndex);
            swiper2.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper2.virtual.slides = swiper2.params.virtual.slides;
      }
      swiper2.classNames.push("".concat(swiper2.params.containerModifierClass, "virtual"));
      swiper2.params.watchSlidesProgress = true;
      swiper2.originalParams.watchSlidesProgress = true;
      update2(false, true);
    });
    on("setTranslate", () => {
      if (!swiper2.params.virtual.enabled) return;
      if (swiper2.params.cssMode && !swiper2._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update2();
        }, 100);
      } else {
        update2();
      }
    });
    on("init update resize", () => {
      if (!swiper2.params.virtual.enabled) return;
      if (swiper2.params.cssMode) {
        setCSSProperty(swiper2.wrapperEl, "--swiper-virtual-size", "".concat(swiper2.virtualSize, "px"));
      }
    });
    Object.assign(swiper2.virtual, {
      appendSlide: appendSlide2,
      prependSlide: prependSlide2,
      removeSlide: removeSlide2,
      removeAllSlides: removeAllSlides2,
      update: update2
    });
  }

  // node_modules/swiper/modules/keyboard.mjs
  function Keyboard2(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    const document2 = getDocument();
    const window2 = getWindow();
    swiper2.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event2) {
      if (!swiper2.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper2;
      let e2 = event2;
      if (e2.originalEvent) e2 = e2.originalEvent;
      const kc = e2.keyCode || e2.charCode;
      const pageUpDown = swiper2.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      if (!swiper2.allowSlideNext && (swiper2.isHorizontal() && isArrowRight || swiper2.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper2.allowSlidePrev && (swiper2.isHorizontal() && isArrowLeft || swiper2.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey) {
        return void 0;
      }
      if (document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea")) {
        return void 0;
      }
      if (swiper2.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false;
        if (elementParents(swiper2.el, ".".concat(swiper2.params.slideClass, ", swiper-slide")).length > 0 && elementParents(swiper2.el, ".".concat(swiper2.params.slideActiveClass)).length === 0) {
          return void 0;
        }
        const el = swiper2.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window2.innerWidth;
        const windowHeight = window2.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i2 = 0; i2 < swiperCoord.length; i2 += 1) {
          const point = swiperCoord[i2];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue;
            inView = true;
          }
        }
        if (!inView) return void 0;
      }
      if (swiper2.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e2.preventDefault) e2.preventDefault();
          else e2.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper2.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper2.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e2.preventDefault) e2.preventDefault();
          else e2.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper2.slideNext();
        if (isPageUp || isArrowUp) swiper2.slidePrev();
      }
      emit("keyPress", kc);
      return void 0;
    }
    function enable() {
      if (swiper2.keyboard.enabled) return;
      document2.addEventListener("keydown", handle);
      swiper2.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper2.keyboard.enabled) return;
      document2.removeEventListener("keydown", handle);
      swiper2.keyboard.enabled = false;
    }
    on("init", () => {
      if (swiper2.params.keyboard.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      if (swiper2.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper2.keyboard, {
      enable,
      disable
    });
  }

  // node_modules/swiper/modules/mousewheel.mjs
  function Mousewheel(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    });
    swiper2.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e2) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e2) {
        sY = e2.detail;
      }
      if ("wheelDelta" in e2) {
        sY = -e2.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e2) {
        sY = -e2.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e2) {
        sX = -e2.wheelDeltaX / 120;
      }
      if ("axis" in e2 && e2.axis === e2.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e2) {
        pY = e2.deltaY;
      }
      if ("deltaX" in e2) {
        pX = e2.deltaX;
      }
      if (e2.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e2.deltaMode) {
        if (e2.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper2.enabled) return;
      swiper2.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper2.enabled) return;
      swiper2.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper2.params.mousewheel.thresholdDelta && newEvent.delta < swiper2.params.mousewheel.thresholdDelta) {
        return false;
      }
      if (swiper2.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper2.params.mousewheel.thresholdTime) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper2.isEnd || swiper2.params.loop) && !swiper2.animating) {
          swiper2.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if ((!swiper2.isBeginning || swiper2.params.loop) && !swiper2.animating) {
        swiper2.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper2.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper2.isEnd && !swiper2.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper2.isBeginning && !swiper2.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e2 = event2;
      let disableParentSwiper = true;
      if (!swiper2.enabled) return;
      if (event2.target.closest(".".concat(swiper2.params.mousewheel.noMousewheelClass))) return;
      const params = swiper2.params.mousewheel;
      if (swiper2.params.cssMode) {
        e2.preventDefault();
      }
      let targetEl = swiper2.el;
      if (swiper2.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper2.params.mousewheel.eventsTarget);
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e2.target);
      if (!swiper2.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
      if (e2.originalEvent) e2 = e2.originalEvent;
      let delta = 0;
      const rtlFactor = swiper2.rtlTranslate ? -1 : 1;
      const data = normalize(e2);
      if (params.forceToAxis) {
        if (swiper2.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
        else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;
      let positions = swiper2.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper2.minTranslate()) positions = swiper2.minTranslate();
      if (positions <= swiper2.maxTranslate()) positions = swiper2.maxTranslate();
      disableParentSwiper = swiper2.params.loop ? true : !(positions === swiper2.minTranslate() || positions === swiper2.maxTranslate());
      if (disableParentSwiper && swiper2.params.nested) e2.stopPropagation();
      if (!swiper2.params.freeMode || !swiper2.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          let position = swiper2.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper2.isBeginning;
          const wasEnd = swiper2.isEnd;
          if (position >= swiper2.minTranslate()) position = swiper2.minTranslate();
          if (position <= swiper2.maxTranslate()) position = swiper2.maxTranslate();
          swiper2.setTransition(0);
          swiper2.setTranslate(position);
          swiper2.updateProgress();
          swiper2.updateActiveIndex();
          swiper2.updateSlidesClasses();
          if (!wasBeginning && swiper2.isBeginning || !wasEnd && swiper2.isEnd) {
            swiper2.updateSlidesClasses();
          }
          if (swiper2.params.loop) {
            swiper2.loopFix({
              direction: newEvent.direction < 0 ? "next" : "prev",
              byMousewheel: true
            });
          }
          if (swiper2.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                if (swiper2.destroyed || !swiper2.params) return;
                swiper2.slideToClosest(swiper2.params.speed, true, void 0, snapToThreshold);
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick(() => {
                if (swiper2.destroyed || !swiper2.params) return;
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper2.slideToClosest(swiper2.params.speed, true, void 0, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents) emit("scroll", e2);
          if (swiper2.params.autoplay && swiper2.params.autoplayDisableOnInteraction) swiper2.autoplay.stop();
          if (params.releaseOnEdges && (position === swiper2.minTranslate() || position === swiper2.maxTranslate())) {
            return true;
          }
        }
      }
      if (e2.preventDefault) e2.preventDefault();
      else e2.returnValue = false;
      return false;
    }
    function events2(method) {
      let targetEl = swiper2.el;
      if (swiper2.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper2.params.mousewheel.eventsTarget);
      }
      targetEl[method]("mouseenter", handleMouseEnter);
      targetEl[method]("mouseleave", handleMouseLeave);
      targetEl[method]("wheel", handle);
    }
    function enable() {
      if (swiper2.params.cssMode) {
        swiper2.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper2.mousewheel.enabled) return false;
      events2("addEventListener");
      swiper2.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper2.params.cssMode) {
        swiper2.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper2.mousewheel.enabled) return false;
      events2("removeEventListener");
      swiper2.mousewheel.enabled = false;
      return true;
    }
    on("init", () => {
      if (!swiper2.params.mousewheel.enabled && swiper2.params.cssMode) {
        disable();
      }
      if (swiper2.params.mousewheel.enabled) enable();
    });
    on("destroy", () => {
      if (swiper2.params.cssMode) {
        enable();
      }
      if (swiper2.mousewheel.enabled) disable();
    });
    Object.assign(swiper2.mousewheel, {
      enable,
      disable
    });
  }

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper2, originalParams, params, checkProps) {
    if (swiper2.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper2.el, ".".concat(checkProps[key]))[0];
          if (!element) {
            element = createElement3("div", checkProps[key]);
            element.className = checkProps[key];
            swiper2.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper2.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper2.isElement) {
        res = swiper2.el.querySelector(el) || swiper2.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (swiper2.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper2.el.querySelectorAll(el).length === 1) {
          res = swiper2.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper2.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper2.params.watchOverflow && swiper2.enabled) {
            subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper2.navigation;
      if (swiper2.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper2.isBeginning && !swiper2.params.rewind);
      toggleEl(nextEl, swiper2.isEnd && !swiper2.params.rewind);
    }
    function onPrevClick(e2) {
      e2.preventDefault();
      if (swiper2.isBeginning && !swiper2.params.loop && !swiper2.params.rewind) return;
      swiper2.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e2) {
      e2.preventDefault();
      if (swiper2.isEnd && !swiper2.params.loop && !swiper2.params.rewind) return;
      swiper2.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper2.params.navigation;
      swiper2.params.navigation = createElementIfNotDefined(swiper2, swiper2.originalParams.navigation, swiper2.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper2.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper2.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper2.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper2.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper2.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper2.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper2.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper2.params.navigation.lockClass));
    });
    on("click", (_s, e2) => {
      let {
        nextEl,
        prevEl
      } = swiper2.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e2.target;
      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper2.isElement && !targetIsButton) {
        const path = e2.path || e2.composedPath && e2.composedPath();
        if (path) {
          targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
      }
      if (swiper2.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper2.pagination && swiper2.params.pagination && swiper2.params.pagination.clickable && (swiper2.pagination.el === targetEl || swiper2.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper2.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper2.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper2.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper2.el.classList.remove(...swiper2.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper2.el.classList.add(...swiper2.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper2.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return ".".concat(classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."));
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical"),
        paginationDisabledClass: "".concat(pfx, "-disabled")
      }
    });
    swiper2.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper2.params.pagination.el || !swiper2.pagination.el || Array.isArray(swiper2.pagination.el) && swiper2.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper2.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl["".concat(position === "prev" ? "previous" : "next", "ElementSibling")];
      if (bulletEl) {
        bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position));
        bulletEl = bulletEl["".concat(position === "prev" ? "previous" : "next", "ElementSibling")];
        if (bulletEl) {
          bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return "next";
      } else if (nextIndex === prevIndex - 1) {
        return "previous";
      }
      return;
    }
    function onBulletClick(e2) {
      const bulletEl = e2.target.closest(classesToSelector(swiper2.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e2.preventDefault();
      const index = elementIndex(bulletEl) * swiper2.params.slidesPerGroup;
      if (swiper2.params.loop) {
        if (swiper2.realIndex === index) return;
        const moveDirection = getMoveDirection(swiper2.realIndex, index, swiper2.slides.length);
        if (moveDirection === "next") {
          swiper2.slideNext();
        } else if (moveDirection === "previous") {
          swiper2.slidePrev();
        } else {
          swiper2.slideToLoop(index);
        }
      } else {
        swiper2.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper2.rtl;
      const params = swiper2.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper2.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
      const total = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
      if (swiper2.params.loop) {
        previousIndex = swiper2.previousRealIndex || 0;
        current = swiper2.params.slidesPerGroup > 1 ? Math.floor(swiper2.realIndex / swiper2.params.slidesPerGroup) : swiper2.realIndex;
      } else if (typeof swiper2.snapIndex !== "undefined") {
        current = swiper2.snapIndex;
        previousIndex = swiper2.previousSnapIndex;
      } else {
        previousIndex = swiper2.previousIndex || 0;
        current = swiper2.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper2.pagination.bullets && swiper2.pagination.bullets.length > 0) {
        const bullets = swiper2.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper2.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper2.isHorizontal() ? "width" : "height"] = "".concat(bulletSize * (params.dynamicMainBullets + 4), "px");
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => "".concat(params.bulletActiveClass).concat(suffix))].map((s2) => typeof s2 === "string" && s2.includes(" ") ? s2.split(" ") : s2).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper2.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(..."".concat(params.bulletActiveClass, "-main").split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper2.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i2 = firstIndex; i2 <= lastIndex; i2 += 1) {
              if (bullets[i2]) {
                bullets[i2].classList.add(..."".concat(params.bulletActiveClass, "-main").split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper2.isHorizontal() ? offsetProp : "top"] = "".concat(bulletsOffset, "px");
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper2.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper2.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = "translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")");
            progressEl.style.transitionDuration = "".concat(swiper2.params.speed, "ms");
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper2, current + 1, total);
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper2.params.watchOverflow && swiper2.enabled) {
          subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      const params = swiper2.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.grid && swiper2.params.grid.rows > 1 ? swiper2.slides.length / Math.ceil(swiper2.params.grid.rows) : swiper2.slides.length;
      let el = swiper2.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
        if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i2 = 0; i2 < numberOfBullets; i2 += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper2, i2, params.bulletClass);
          } else {
            paginationHTML += "<".concat(params.bulletElement, " ").concat(swiper2.isElement ? 'part="bullet"' : "", ' class="').concat(params.bulletClass, '"></').concat(params.bulletElement, ">");
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper2, params.currentClass, params.totalClass);
        } else {
          paginationHTML = '<span class="'.concat(params.currentClass, '"></span>') + " / " + '<span class="'.concat(params.totalClass, '"></span>');
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper2, params.progressbarFillClass);
        } else {
          paginationHTML = '<span class="'.concat(params.progressbarFillClass, '"></span>');
        }
      }
      swiper2.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper2.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper2.params.pagination = createElementIfNotDefined(swiper2, swiper2.originalParams.pagination, swiper2.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper2.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper2.isElement) {
        el = swiper2.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper2.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper2.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.filter((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper2.el) return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper2.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add("".concat(params.modifierClass).concat(params.type, "-dynamic"));
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper2.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper2.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper2.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper2.pagination.bullets) swiper2.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", () => {
      if (!swiper2.pagination || !swiper2.pagination.el) return;
      const params = swiper2.params.pagination;
      let {
        el
      } = swiper2.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper2.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update2();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper2.snapIndex === "undefined") {
        update2();
      }
    });
    on("snapIndexChange", () => {
      update2();
    });
    on("snapGridLengthChange", () => {
      render();
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        el
      } = swiper2.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper2.enabled ? "remove" : "add"](swiper2.params.pagination.lockClass));
      }
    });
    on("lock unlock", () => {
      update2();
    });
    on("click", (_s, e2) => {
      const targetEl = e2.target;
      const el = makeElementsArray(swiper2.pagination.el);
      if (swiper2.params.pagination.el && swiper2.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper2.params.pagination.bulletClass)) {
        if (swiper2.navigation && (swiper2.navigation.nextEl && targetEl === swiper2.navigation.nextEl || swiper2.navigation.prevEl && targetEl === swiper2.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper2.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper2.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper2.el.classList.remove(swiper2.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper2.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper2.params.pagination.paginationDisabledClass));
      }
      init();
      render();
      update2();
    };
    const disable = () => {
      swiper2.el.classList.add(swiper2.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper2.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper2.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper2.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/swiper/modules/scrollbar.mjs
  function Scrollbar(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    const document2 = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    });
    swiper2.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate2() {
      if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper2;
      const {
        dragEl,
        el
      } = scrollbar;
      const params = swiper2.params.scrollbar;
      const progress = swiper2.params.loop ? swiper2.progressLoop : swiper2.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper2.isHorizontal()) {
        dragEl.style.transform = "translate3d(".concat(newPos, "px, 0, 0)");
        dragEl.style.width = "".concat(newSize, "px");
      } else {
        dragEl.style.transform = "translate3d(0px, ".concat(newPos, "px, 0)");
        dragEl.style.height = "".concat(newSize, "px");
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
    }
    function setTransition2(duration) {
      if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
      swiper2.scrollbar.dragEl.style.transitionDuration = "".concat(duration, "ms");
    }
    function updateSize2() {
      if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
      const {
        scrollbar
      } = swiper2;
      const {
        dragEl,
        el
      } = scrollbar;
      dragEl.style.width = "";
      dragEl.style.height = "";
      trackSize = swiper2.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper2.size / (swiper2.virtualSize + swiper2.params.slidesOffsetBefore - (swiper2.params.centeredSlides ? swiper2.snapGrid[0] : 0));
      if (swiper2.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper2.params.scrollbar.dragSize, 10);
      }
      if (swiper2.isHorizontal()) {
        dragEl.style.width = "".concat(dragSize, "px");
      } else {
        dragEl.style.height = "".concat(dragSize, "px");
      }
      if (divider >= 1) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (swiper2.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper2.params.watchOverflow && swiper2.enabled) {
        scrollbar.el.classList[swiper2.isLocked ? "add" : "remove"](swiper2.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e2) {
      return swiper2.isHorizontal() ? e2.clientX : e2.clientY;
    }
    function setDragPosition(e2) {
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper2;
      const {
        el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e2) - elementOffset(el)[swiper2.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper2.minTranslate() + (swiper2.maxTranslate() - swiper2.minTranslate()) * positionRatio;
      swiper2.updateProgress(position);
      swiper2.setTranslate(position);
      swiper2.updateActiveIndex();
      swiper2.updateSlidesClasses();
    }
    function onDragStart(e2) {
      const params = swiper2.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper2;
      const {
        el,
        dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e2.target === dragEl ? getPointerPosition(e2) - e2.target.getBoundingClientRect()[swiper2.isHorizontal() ? "left" : "top"] : null;
      e2.preventDefault();
      e2.stopPropagation();
      wrapperEl.style.transitionDuration = "100ms";
      dragEl.style.transitionDuration = "100ms";
      setDragPosition(e2);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = "0ms";
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper2.params.cssMode) {
        swiper2.wrapperEl.style["scroll-snap-type"] = "none";
      }
      emit("scrollbarDragStart", e2);
    }
    function onDragMove(e2) {
      const {
        scrollbar,
        wrapperEl
      } = swiper2;
      const {
        el,
        dragEl
      } = scrollbar;
      if (!isTouched) return;
      if (e2.preventDefault && e2.cancelable) e2.preventDefault();
      else e2.returnValue = false;
      setDragPosition(e2);
      wrapperEl.style.transitionDuration = "0ms";
      el.style.transitionDuration = "0ms";
      dragEl.style.transitionDuration = "0ms";
      emit("scrollbarDragMove", e2);
    }
    function onDragEnd(e2) {
      const params = swiper2.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper2;
      const {
        el
      } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper2.params.cssMode) {
        swiper2.wrapperEl.style["scroll-snap-type"] = "";
        wrapperEl.style.transitionDuration = "";
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
      emit("scrollbarDragEnd", e2);
      if (params.snapOnRelease) {
        swiper2.slideToClosest();
      }
    }
    function events2(method) {
      const {
        scrollbar,
        params
      } = swiper2;
      const el = scrollbar.el;
      if (!el) return;
      const target = el;
      const activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
      target[eventMethod]("pointerdown", onDragStart, activeListener);
      document2[eventMethod]("pointermove", onDragMove, activeListener);
      document2[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
      events2("on");
    }
    function disableDraggable() {
      if (!swiper2.params.scrollbar.el || !swiper2.scrollbar.el) return;
      events2("off");
    }
    function init() {
      const {
        scrollbar,
        el: swiperEl
      } = swiper2;
      swiper2.params.scrollbar = createElementIfNotDefined(swiper2, swiper2.originalParams.scrollbar, swiper2.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const params = swiper2.params.scrollbar;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper2.isElement) {
        el = swiper2.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = document2.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper2.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper2.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement3("div", swiper2.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper2.enabled ? "remove" : "add"](...classesToTokens(swiper2.params.scrollbar.lockClass));
      }
    }
    function destroy() {
      const params = swiper2.params.scrollbar;
      const el = swiper2.scrollbar.el;
      if (el) {
        el.classList.remove(...classesToTokens(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass));
      }
      disableDraggable();
    }
    on("changeDirection", () => {
      if (!swiper2.scrollbar || !swiper2.scrollbar.el) return;
      const params = swiper2.params.scrollbar;
      let {
        el
      } = swiper2.scrollbar;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper2.params.scrollbar.enabled === false) {
        disable();
      } else {
        init();
        updateSize2();
        setTranslate2();
      }
    });
    on("update resize observerUpdate lock unlock changeDirection", () => {
      updateSize2();
    });
    on("setTranslate", () => {
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      setTransition2(duration);
    });
    on("enable disable", () => {
      const {
        el
      } = swiper2.scrollbar;
      if (el) {
        el.classList[swiper2.enabled ? "remove" : "add"](...classesToTokens(swiper2.params.scrollbar.lockClass));
      }
    });
    on("destroy", () => {
      destroy();
    });
    const enable = () => {
      swiper2.el.classList.remove(...classesToTokens(swiper2.params.scrollbar.scrollbarDisabledClass));
      if (swiper2.scrollbar.el) {
        swiper2.scrollbar.el.classList.remove(...classesToTokens(swiper2.params.scrollbar.scrollbarDisabledClass));
      }
      init();
      updateSize2();
      setTranslate2();
    };
    const disable = () => {
      swiper2.el.classList.add(...classesToTokens(swiper2.params.scrollbar.scrollbarDisabledClass));
      if (swiper2.scrollbar.el) {
        swiper2.scrollbar.el.classList.add(...classesToTokens(swiper2.params.scrollbar.scrollbarDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper2.scrollbar, {
      enable,
      disable,
      updateSize: updateSize2,
      setTranslate: setTranslate2,
      init,
      destroy
    });
  }

  // node_modules/swiper/modules/parallax.mjs
  function Parallax(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      parallax: {
        enabled: false
      }
    });
    const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
    const setTransform2 = (el, progress) => {
      const {
        rtl
      } = swiper2;
      const rtlFactor = rtl ? -1 : 1;
      const p2 = el.getAttribute("data-swiper-parallax") || "0";
      let x2 = el.getAttribute("data-swiper-parallax-x");
      let y2 = el.getAttribute("data-swiper-parallax-y");
      const scale = el.getAttribute("data-swiper-parallax-scale");
      const opacity = el.getAttribute("data-swiper-parallax-opacity");
      const rotate = el.getAttribute("data-swiper-parallax-rotate");
      if (x2 || y2) {
        x2 = x2 || "0";
        y2 = y2 || "0";
      } else if (swiper2.isHorizontal()) {
        x2 = p2;
        y2 = "0";
      } else {
        y2 = p2;
        x2 = "0";
      }
      if (x2.indexOf("%") >= 0) {
        x2 = "".concat(parseInt(x2, 10) * progress * rtlFactor, "%");
      } else {
        x2 = "".concat(x2 * progress * rtlFactor, "px");
      }
      if (y2.indexOf("%") >= 0) {
        y2 = "".concat(parseInt(y2, 10) * progress, "%");
      } else {
        y2 = "".concat(y2 * progress, "px");
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      let transform = "translate3d(".concat(x2, ", ").concat(y2, ", 0px)");
      if (typeof scale !== "undefined" && scale !== null) {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += " scale(".concat(currentScale, ")");
      }
      if (rotate && typeof rotate !== "undefined" && rotate !== null) {
        const currentRotate = rotate * progress * -1;
        transform += " rotate(".concat(currentRotate, "deg)");
      }
      el.style.transform = transform;
    };
    const setTranslate2 = () => {
      const {
        el,
        slides,
        progress,
        snapGrid,
        isElement
      } = swiper2;
      const elements = elementChildren(el, elementsSelector);
      if (swiper2.isElement) {
        elements.push(...elementChildren(swiper2.hostEl, elementsSelector));
      }
      elements.forEach((subEl) => {
        setTransform2(subEl, progress);
      });
      slides.forEach((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (swiper2.params.slidesPerGroup > 1 && swiper2.params.slidesPerView !== "auto") {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl.querySelectorAll("".concat(elementsSelector, ", [data-swiper-parallax-rotate]")).forEach((subEl) => {
          setTransform2(subEl, slideProgress);
        });
      });
    };
    const setTransition2 = function(duration) {
      if (duration === void 0) {
        duration = swiper2.params.speed;
      }
      const {
        el,
        hostEl
      } = swiper2;
      const elements = [...el.querySelectorAll(elementsSelector)];
      if (swiper2.isElement) {
        elements.push(...hostEl.querySelectorAll(elementsSelector));
      }
      elements.forEach((parallaxEl) => {
        let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = "".concat(parallaxDuration, "ms");
      });
    };
    on("beforeInit", () => {
      if (!swiper2.params.parallax.enabled) return;
      swiper2.params.watchSlidesProgress = true;
      swiper2.originalParams.watchSlidesProgress = true;
    });
    on("init", () => {
      if (!swiper2.params.parallax.enabled) return;
      setTranslate2();
    });
    on("setTranslate", () => {
      if (!swiper2.params.parallax.enabled) return;
      setTranslate2();
    });
    on("setTransition", (_swiper, duration) => {
      if (!swiper2.params.parallax.enabled) return;
      setTransition2(duration);
    });
  }

  // node_modules/swiper/modules/zoom.mjs
  function Zoom(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        limitToOriginalSize: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    });
    swiper2.zoom = {
      enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3
    };
    const image = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    };
    const velocity = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let scale = 1;
    Object.defineProperty(swiper2.zoom, "scale", {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.imageEl;
          const slideEl = gesture.slideEl;
          emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      const x1 = evCache[0].pageX;
      const y1 = evCache[0].pageY;
      const x2 = evCache[1].pageX;
      const y2 = evCache[1].pageY;
      const distance = Math.sqrt(__pow(x2 - x1, 2) + __pow(y2 - y1, 2));
      return distance;
    }
    function getMaxRatio() {
      const params = swiper2.params.zoom;
      const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
      if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
        const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
        return Math.min(imageMaxRatio, maxRatio);
      }
      return maxRatio;
    }
    function getScaleOrigin() {
      if (evCache.length < 2) return {
        x: null,
        y: null
      };
      const box = gesture.imageEl.getBoundingClientRect();
      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
    }
    function getSlideSelector() {
      return swiper2.isElement ? "swiper-slide" : ".".concat(swiper2.params.slideClass);
    }
    function eventWithinSlide(e2) {
      const slideSelector = getSlideSelector();
      if (e2.target.matches(slideSelector)) return true;
      if (swiper2.slides.filter((slideEl) => slideEl.contains(e2.target)).length > 0) return true;
      return false;
    }
    function eventWithinZoomContainer(e2) {
      const selector = ".".concat(swiper2.params.zoom.containerClass);
      if (e2.target.matches(selector)) return true;
      if ([...swiper2.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e2.target)).length > 0) return true;
      return false;
    }
    function onGestureStart(e2) {
      if (e2.pointerType === "mouse") {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e2)) return;
      const params = swiper2.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e2);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e2.target.closest(".".concat(swiper2.params.slideClass, ", swiper-slide"));
        if (!gesture.slideEl) gesture.slideEl = swiper2.slides[swiper2.activeIndex];
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = void 0;
          return;
        }
        gesture.maxRatio = getMaxRatio();
      }
      if (gesture.imageEl) {
        const [originX, originY] = getScaleOrigin();
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = "0ms";
      }
      isScaling = true;
    }
    function onGestureChange(e2) {
      if (!eventWithinSlide(e2)) return;
      const params = swiper2.params.zoom;
      const zoom = swiper2.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e2.pointerId);
      if (pointerIndex >= 0) evCache[pointerIndex] = e2;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + __pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - __pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function onGestureEnd(e2) {
      if (!eventWithinSlide(e2)) return;
      if (e2.pointerType === "mouse" && e2.type === "pointerout") return;
      const params = swiper2.params.zoom;
      const zoom = swiper2.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e2.pointerId);
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.imageEl.style.transitionDuration = "".concat(swiper2.params.speed, "ms");
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = void 0;
      }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
      swiper2.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
      clearTimeout(allowTouchMoveTimeout);
      swiper2.touchEventsData.preventTouchMoveFromPointerMove = true;
      allowTouchMoveTimeout = setTimeout(() => {
        if (swiper2.destroyed) return;
        allowTouchMove();
      });
    }
    function onTouchStart2(e2) {
      const device = swiper2.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e2.cancelable) e2.preventDefault();
      image.isTouched = true;
      const event2 = evCache.length > 0 ? evCache[0] : e2;
      image.touchesStart.x = event2.pageX;
      image.touchesStart.y = event2.pageY;
    }
    function onTouchMove2(e2) {
      if (!eventWithinSlide(e2) || !eventWithinZoomContainer(e2)) {
        return;
      }
      const zoom = swiper2.zoom;
      if (!gesture.imageEl) {
        return;
      }
      if (!image.isTouched || !gesture.slideEl) {
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
        image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = "0ms";
      }
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e2.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e2.pageY;
      const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
      if (touchesDiff > 5) {
        swiper2.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (swiper2.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
        if (!swiper2.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
      }
      if (e2.cancelable) {
        e2.preventDefault();
      }
      e2.stopPropagation();
      preventTouchMove();
      image.isMoved = true;
      const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper2.params.zoom.minRatio);
      const {
        originX,
        originY
      } = gesture;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - __pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + __pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - __pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + __pow(image.currentY - image.maxY + 1, 0.8);
      }
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTouchEnd2() {
      const zoom = swiper2.zoom;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.imageWrapEl.style.transitionDuration = "".concat(momentumDuration, "ms");
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTransitionEnd() {
      const zoom = swiper2.zoom;
      if (gesture.slideEl && swiper2.activeIndex !== swiper2.slides.indexOf(gesture.slideEl)) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        }
        gesture.slideEl.classList.remove("".concat(swiper2.params.zoom.zoomedSlideClass));
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = void 0;
        gesture.imageEl = void 0;
        gesture.imageWrapEl = void 0;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function zoomIn(e2) {
      const zoom = swiper2.zoom;
      const params = swiper2.params.zoom;
      if (!gesture.slideEl) {
        if (e2 && e2.target) {
          gesture.slideEl = e2.target.closest(".".concat(swiper2.params.slideClass, ", swiper-slide"));
        }
        if (!gesture.slideEl) {
          if (swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual) {
            gesture.slideEl = elementChildren(swiper2.slidesEl, ".".concat(swiper2.params.slideActiveClass))[0];
          } else {
            gesture.slideEl = swiper2.slides[swiper2.activeIndex];
          }
        }
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper2.params.cssMode) {
        swiper2.wrapperEl.style.overflow = "hidden";
        swiper2.wrapperEl.style.touchAction = "none";
      }
      gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e2) {
        touchX = e2.pageX;
        touchY = e2.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      const forceZoomRatio = typeof e2 === "number" ? e2 : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = void 0;
        touchY = void 0;
        image.touchesStart.x = void 0;
        image.touchesStart.y = void 0;
      }
      const maxRatio = getMaxRatio();
      zoom.scale = forceZoomRatio || maxRatio;
      currentScale = forceZoomRatio || maxRatio;
      if (e2 && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)");
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function zoomOut() {
      const zoom = swiper2.zoom;
      const params = swiper2.params.zoom;
      if (!gesture.slideEl) {
        if (swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual) {
          gesture.slideEl = elementChildren(swiper2.slidesEl, ".".concat(swiper2.params.slideActiveClass))[0];
        } else {
          gesture.slideEl = swiper2.slides[swiper2.activeIndex];
        }
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper2.params.cssMode) {
        swiper2.wrapperEl.style.overflow = "";
        swiper2.wrapperEl.style.touchAction = "";
      }
      zoom.scale = 1;
      currentScale = 1;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      gesture.slideEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
    }
    function zoomToggle(e2) {
      const zoom = swiper2.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoomOut();
      } else {
        zoomIn(e2);
      }
    }
    function getListeners() {
      const passiveListener = swiper2.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      const activeListenerWithCapture = swiper2.params.passiveListeners ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener,
        activeListenerWithCapture
      };
    }
    function enable() {
      const zoom = swiper2.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper2.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
      swiper2.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper2.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper2.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    function disable() {
      const zoom = swiper2.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper2.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
      swiper2.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper2.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper2.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    on("init", () => {
      if (swiper2.params.zoom.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      disable();
    });
    on("touchStart", (_s, e2) => {
      if (!swiper2.zoom.enabled) return;
      onTouchStart2(e2);
    });
    on("touchEnd", (_s, e2) => {
      if (!swiper2.zoom.enabled) return;
      onTouchEnd2();
    });
    on("doubleTap", (_s, e2) => {
      if (!swiper2.animating && swiper2.params.zoom.enabled && swiper2.zoom.enabled && swiper2.params.zoom.toggle) {
        zoomToggle(e2);
      }
    });
    on("transitionEnd", () => {
      if (swiper2.zoom.enabled && swiper2.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on("slideChange", () => {
      if (swiper2.zoom.enabled && swiper2.params.zoom.enabled && swiper2.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper2.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }

  // node_modules/swiper/modules/controller.mjs
  function Controller(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      controller: {
        control: void 0,
        inverse: false,
        by: "slide"
        // or 'container'
      }
    });
    swiper2.controller = {
      control: void 0
    };
    function LinearSpline(x2, y2) {
      const binarySearch = /* @__PURE__ */ function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }();
      this.x = x2;
      this.y = y2;
      this.lastIndex = x2.length - 1;
      let i1;
      let i3;
      this.interpolate = function interpolate(x22) {
        if (!x22) return 0;
        i3 = binarySearch(this.x, x22);
        i1 = i3 - 1;
        return (x22 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    }
    function getInterpolateFunction(c2) {
      swiper2.controller.spline = swiper2.params.loop ? new LinearSpline(swiper2.slidesGrid, c2.slidesGrid) : new LinearSpline(swiper2.snapGrid, c2.snapGrid);
    }
    function setTranslate2(_t2, byController) {
      const controlled = swiper2.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper2 = swiper2.constructor;
      function setControlledTranslate(c2) {
        if (c2.destroyed) return;
        const translate2 = swiper2.rtlTranslate ? -swiper2.translate : swiper2.translate;
        if (swiper2.params.controller.by === "slide") {
          getInterpolateFunction(c2);
          controlledTranslate = -swiper2.controller.spline.interpolate(-translate2);
        }
        if (!controlledTranslate || swiper2.params.controller.by === "container") {
          multiplier = (c2.maxTranslate() - c2.minTranslate()) / (swiper2.maxTranslate() - swiper2.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate = (translate2 - swiper2.minTranslate()) * multiplier + c2.minTranslate();
        }
        if (swiper2.params.controller.inverse) {
          controlledTranslate = c2.maxTranslate() - controlledTranslate;
        }
        c2.updateProgress(controlledTranslate);
        c2.setTranslate(controlledTranslate, swiper2);
        c2.updateActiveIndex();
        c2.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i2 = 0; i2 < controlled.length; i2 += 1) {
          if (controlled[i2] !== byController && controlled[i2] instanceof Swiper2) {
            setControlledTranslate(controlled[i2]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition2(duration, byController) {
      const Swiper2 = swiper2.constructor;
      const controlled = swiper2.controller.control;
      let i2;
      function setControlledTransition(c2) {
        if (c2.destroyed) return;
        c2.setTransition(duration, swiper2);
        if (duration !== 0) {
          c2.transitionStart();
          if (c2.params.autoHeight) {
            nextTick(() => {
              c2.updateAutoHeight();
            });
          }
          elementTransitionEnd(c2.wrapperEl, () => {
            if (!controlled) return;
            c2.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i2 = 0; i2 < controlled.length; i2 += 1) {
          if (controlled[i2] !== byController && controlled[i2] instanceof Swiper2) {
            setControlledTransition(controlled[i2]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper2.controller.control) return;
      if (swiper2.controller.spline) {
        swiper2.controller.spline = void 0;
        delete swiper2.controller.spline;
      }
    }
    on("beforeInit", () => {
      if (typeof window !== "undefined" && // eslint-disable-line
      (typeof swiper2.params.controller.control === "string" || swiper2.params.controller.control instanceof HTMLElement)) {
        const controlElements = typeof swiper2.params.controller.control === "string" ? [...document.querySelectorAll(swiper2.params.controller.control)] : [swiper2.params.controller.control];
        controlElements.forEach((controlElement) => {
          if (!swiper2.controller.control) swiper2.controller.control = [];
          if (controlElement && controlElement.swiper) {
            swiper2.controller.control.push(controlElement.swiper);
          } else if (controlElement) {
            const eventName = "".concat(swiper2.params.eventsPrefix, "init");
            const onControllerSwiper = (e2) => {
              swiper2.controller.control.push(e2.detail[0]);
              swiper2.update();
              controlElement.removeEventListener(eventName, onControllerSwiper);
            };
            controlElement.addEventListener(eventName, onControllerSwiper);
          }
        });
        return;
      }
      swiper2.controller.control = swiper2.params.controller.control;
    });
    on("update", () => {
      removeSpline();
    });
    on("resize", () => {
      removeSpline();
    });
    on("observerUpdate", () => {
      removeSpline();
    });
    on("setTranslate", (_s, translate2, byController) => {
      if (!swiper2.controller.control || swiper2.controller.control.destroyed) return;
      swiper2.controller.setTranslate(translate2, byController);
    });
    on("setTransition", (_s, duration, byController) => {
      if (!swiper2.controller.control || swiper2.controller.control.destroyed) return;
      swiper2.controller.setTransition(duration, byController);
    });
    Object.assign(swiper2.controller, {
      setTranslate: setTranslate2,
      setTransition: setTransition2
    });
  }

  // node_modules/swiper/modules/a11y.mjs
  function A11y(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: true
      }
    });
    swiper2.a11y = {
      clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.innerHTML = "";
      notification.innerHTML = message;
    }
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "0");
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "-1");
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("role", role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-roledescription", description);
      });
    }
    function addElControls(el, controls) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-controls", controls);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-label", label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("id", id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-live", live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", false);
      });
    }
    function onEnterOrSpaceKey(e2) {
      if (e2.keyCode !== 13 && e2.keyCode !== 32) return;
      const params = swiper2.params.a11y;
      const targetEl = e2.target;
      if (swiper2.pagination && swiper2.pagination.el && (targetEl === swiper2.pagination.el || swiper2.pagination.el.contains(e2.target))) {
        if (!e2.target.matches(classesToSelector(swiper2.params.pagination.bulletClass))) return;
      }
      if (swiper2.navigation && swiper2.navigation.prevEl && swiper2.navigation.nextEl) {
        const prevEls = makeElementsArray(swiper2.navigation.prevEl);
        const nextEls = makeElementsArray(swiper2.navigation.nextEl);
        if (nextEls.includes(targetEl)) {
          if (!(swiper2.isEnd && !swiper2.params.loop)) {
            swiper2.slideNext();
          }
          if (swiper2.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (prevEls.includes(targetEl)) {
          if (!(swiper2.isBeginning && !swiper2.params.loop)) {
            swiper2.slidePrev();
          }
          if (swiper2.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
      }
      if (swiper2.pagination && targetEl.matches(classesToSelector(swiper2.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper2.params.loop || swiper2.params.rewind || !swiper2.navigation) return;
      const {
        nextEl,
        prevEl
      } = swiper2.navigation;
      if (prevEl) {
        if (swiper2.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper2.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper2.pagination && swiper2.pagination.bullets && swiper2.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper2.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper2.params.a11y;
      if (!hasPagination()) return;
      swiper2.pagination.bullets.forEach((bulletEl) => {
        if (swiper2.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper2.params.pagination.renderBullet) {
            addElRole(bulletEl, "button");
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper2.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute("aria-current", "true");
        } else {
          bulletEl.removeAttribute("aria-current");
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== "BUTTON") {
        addElRole(el, "button");
        el.addEventListener("keydown", onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    const handlePointerDown = (e2) => {
      if (focusTargetSlideEl && focusTargetSlideEl !== e2.target && !focusTargetSlideEl.contains(e2.target)) {
        preventFocusHandler = true;
      }
      swiper2.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      preventFocusHandler = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper2.destroyed) {
            swiper2.a11y.clicked = false;
          }
        });
      });
    };
    const onVisibilityChange = (e2) => {
      visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    };
    const handleFocus = (e2) => {
      if (swiper2.a11y.clicked || !swiper2.params.a11y.scrollOnFocus) return;
      if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
      const slideEl = e2.target.closest(".".concat(swiper2.params.slideClass, ", swiper-slide"));
      if (!slideEl || !swiper2.slides.includes(slideEl)) return;
      focusTargetSlideEl = slideEl;
      const isActive = swiper2.slides.indexOf(slideEl) === swiper2.activeIndex;
      const isVisible = swiper2.params.watchSlidesProgress && swiper2.visibleSlides && swiper2.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e2.sourceCapabilities && e2.sourceCapabilities.firesTouchEvents) return;
      if (swiper2.isHorizontal()) {
        swiper2.el.scrollLeft = 0;
      } else {
        swiper2.el.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (preventFocusHandler) return;
        if (swiper2.params.loop) {
          swiper2.slideToLoop(parseInt(slideEl.getAttribute("data-swiper-slide-index")), 0);
        } else {
          swiper2.slideTo(swiper2.slides.indexOf(slideEl), 0);
        }
        preventFocusHandler = false;
      });
    };
    const initSlides = () => {
      const params = swiper2.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper2.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper2.slides, params.slideRole);
      }
      const slidesLength = swiper2.slides.length;
      if (params.slideLabelMessage) {
        swiper2.slides.forEach((slideEl, index) => {
          const slideIndex = swiper2.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper2.params.a11y;
      swiper2.el.append(liveRegion);
      const containerEl = swiper2.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }
      if (params.containerRole) {
        addElRole(containerEl, params.containerRole);
      }
      const wrapperEl = swiper2.wrapperEl;
      const wrapperId = params.id || wrapperEl.getAttribute("id") || "swiper-wrapper-".concat(getRandomNumber(16));
      const live = swiper2.params.autoplay && swiper2.params.autoplay.enabled ? "off" : "polite";
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);
      initSlides();
      let {
        nextEl,
        prevEl
      } = swiper2.navigation ? swiper2.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
      }
      if (prevEl) {
        prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper2.pagination.el);
        paginationEl.forEach((el) => {
          el.addEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
      swiper2.el.addEventListener("focus", handleFocus, true);
      swiper2.el.addEventListener("focus", handleFocus, true);
      swiper2.el.addEventListener("pointerdown", handlePointerDown, true);
      swiper2.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion) liveRegion.remove();
      let {
        nextEl,
        prevEl
      } = swiper2.navigation ? swiper2.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (prevEl) {
        prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper2.pagination.el);
        paginationEl.forEach((el) => {
          el.removeEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
      if (swiper2.el && typeof swiper2.el !== "string") {
        swiper2.el.removeEventListener("focus", handleFocus, true);
        swiper2.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper2.el.removeEventListener("pointerup", handlePointerUp, true);
      }
    }
    on("beforeInit", () => {
      liveRegion = createElement3("span", swiper2.params.a11y.notificationClass);
      liveRegion.setAttribute("aria-live", "assertive");
      liveRegion.setAttribute("aria-atomic", "true");
    });
    on("afterInit", () => {
      if (!swiper2.params.a11y.enabled) return;
      init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      if (!swiper2.params.a11y.enabled) return;
      initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper2.params.a11y.enabled) return;
      updateNavigation();
    });
    on("paginationUpdate", () => {
      if (!swiper2.params.a11y.enabled) return;
      updatePagination();
    });
    on("destroy", () => {
      if (!swiper2.params.a11y.enabled) return;
      destroy();
    });
  }

  // node_modules/swiper/modules/history.mjs
  function History(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
        keepQuery: false
      }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text) => {
      return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride) => {
      const window2 = getWindow();
      let location2;
      if (urlOverride) {
        location2 = new URL(urlOverride);
      } else {
        location2 = window2.location;
      }
      const pathArray = location2.pathname.slice(1).split("/").filter((part) => part !== "");
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value
      };
    };
    const setHistory = (key, index) => {
      const window2 = getWindow();
      if (!initialized || !swiper2.params.history.enabled) return;
      let location2;
      if (swiper2.params.url) {
        location2 = new URL(swiper2.params.url);
      } else {
        location2 = window2.location;
      }
      const slide2 = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.slidesEl.querySelector('[data-swiper-slide-index="'.concat(index, '"]')) : swiper2.slides[index];
      let value = slugify(slide2.getAttribute("data-history"));
      if (swiper2.params.history.root.length > 0) {
        let root = swiper2.params.history.root;
        if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
        value = "".concat(root, "/").concat(key ? "".concat(key, "/") : "").concat(value);
      } else if (!location2.pathname.includes(key)) {
        value = "".concat(key ? "".concat(key, "/") : "").concat(value);
      }
      if (swiper2.params.history.keepQuery) {
        value += location2.search;
      }
      const currentState = window2.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper2.params.history.replaceState) {
        window2.history.replaceState({
          value
        }, null, value);
      } else {
        window2.history.pushState({
          value
        }, null, value);
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i2 = 0, length = swiper2.slides.length; i2 < length; i2 += 1) {
          const slide2 = swiper2.slides[i2];
          const slideHistory = slugify(slide2.getAttribute("data-history"));
          if (slideHistory === value) {
            const index = swiper2.getSlideIndex(slide2);
            swiper2.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper2.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper2.params.url);
      scrollToSlide(swiper2.params.speed, paths.value, false);
    };
    const init = () => {
      const window2 = getWindow();
      if (!swiper2.params.history) return;
      if (!window2.history || !window2.history.pushState) {
        swiper2.params.history.enabled = false;
        swiper2.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper2.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper2.params.history.replaceState) {
          window2.addEventListener("popstate", setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper2.params.runCallbacksOnInit);
      if (!swiper2.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
    };
    const destroy = () => {
      const window2 = getWindow();
      if (!swiper2.params.history.replaceState) {
        window2.removeEventListener("popstate", setHistoryPopState);
      }
    };
    on("init", () => {
      if (swiper2.params.history.enabled) {
        init();
      }
    });
    on("destroy", () => {
      if (swiper2.params.history.enabled) {
        destroy();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHistory(swiper2.params.history.key, swiper2.activeIndex);
      }
    });
    on("slideChange", () => {
      if (initialized && swiper2.params.cssMode) {
        setHistory(swiper2.params.history.key, swiper2.activeIndex);
      }
    });
  }

  // node_modules/swiper/modules/hash-navigation.mjs
  function HashNavigation(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      emit,
      on
    } = _ref;
    let initialized = false;
    const document2 = getDocument();
    const window2 = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex(_s, hash) {
          if (swiper2.virtual && swiper2.params.virtual.enabled) {
            const slideWithHash = swiper2.slides.filter((slideEl) => slideEl.getAttribute("data-hash") === hash)[0];
            if (!slideWithHash) return 0;
            const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
            return index;
          }
          return swiper2.getSlideIndex(elementChildren(swiper2.slidesEl, ".".concat(swiper2.params.slideClass, '[data-hash="').concat(hash, '"], swiper-slide[data-hash="').concat(hash, '"]'))[0]);
        }
      }
    });
    const onHashChange = () => {
      emit("hashChange");
      const newHash = document2.location.hash.replace("#", "");
      const activeSlideEl = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.slidesEl.querySelector('[data-swiper-slide-index="'.concat(swiper2.activeIndex, '"]')) : swiper2.slides[swiper2.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
      if (newHash !== activeSlideHash) {
        const newIndex = swiper2.params.hashNavigation.getSlideIndex(swiper2, newHash);
        if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
        swiper2.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper2.params.hashNavigation.enabled) return;
      const activeSlideEl = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.slidesEl.querySelector('[data-swiper-slide-index="'.concat(swiper2.activeIndex, '"]')) : swiper2.slides[swiper2.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
      if (swiper2.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
        window2.history.replaceState(null, null, "#".concat(activeSlideHash) || "");
        emit("hashSet");
      } else {
        document2.location.hash = activeSlideHash || "";
        emit("hashSet");
      }
    };
    const init = () => {
      if (!swiper2.params.hashNavigation.enabled || swiper2.params.history && swiper2.params.history.enabled) return;
      initialized = true;
      const hash = document2.location.hash.replace("#", "");
      if (hash) {
        const speed = 0;
        const index = swiper2.params.hashNavigation.getSlideIndex(swiper2, hash);
        swiper2.slideTo(index || 0, speed, swiper2.params.runCallbacksOnInit, true);
      }
      if (swiper2.params.hashNavigation.watchState) {
        window2.addEventListener("hashchange", onHashChange);
      }
    };
    const destroy = () => {
      if (swiper2.params.hashNavigation.watchState) {
        window2.removeEventListener("hashchange", onHashChange);
      }
    };
    on("init", () => {
      if (swiper2.params.hashNavigation.enabled) {
        init();
      }
    });
    on("destroy", () => {
      if (swiper2.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHash();
      }
    });
    on("slideChange", () => {
      if (initialized && swiper2.params.cssMode) {
        setHash();
      }
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on,
      emit,
      params
    } = _ref;
    swiper2.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e2) {
      if (!swiper2 || swiper2.destroyed || !swiper2.wrapperEl) return;
      if (e2.target !== swiper2.wrapperEl) return;
      swiper2.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter || e2.detail && e2.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      if (swiper2.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper2.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper2.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper2.virtual && swiper2.params.virtual.enabled) {
        activeSlideEl = swiper2.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
      } else {
        activeSlideEl = swiper2.slides[swiper2.activeIndex];
      }
      if (!activeSlideEl) return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper2.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper2.params.autoplay.delay;
      autoplayDelayCurrent = swiper2.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper2.params.speed;
      const proceed = () => {
        if (!swiper2 || swiper2.destroyed) return;
        if (swiper2.params.autoplay.reverseDirection) {
          if (!swiper2.isBeginning || swiper2.params.loop || swiper2.params.rewind) {
            swiper2.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper2.params.autoplay.stopOnLastSlide) {
            swiper2.slideTo(swiper2.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper2.isEnd || swiper2.params.loop || swiper2.params.rewind) {
            swiper2.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper2.params.autoplay.stopOnLastSlide) {
            swiper2.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper2.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper2.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper2.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper2.params.autoplay.waitForTransition) {
          swiper2.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper2.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper2.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper2.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper2.isEnd && autoplayTimeLeft < 0 && !swiper2.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper2.isEnd && autoplayTimeLeft < 0 && !swiper2.params.loop || swiper2.destroyed || !swiper2.autoplay.running) return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper2.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      const document2 = getDocument();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e2) => {
      if (e2.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper2.animating || swiper2.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e2) => {
      if (e2.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper2.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper2.params.autoplay.pauseOnMouseEnter) {
        swiper2.el.addEventListener("pointerenter", onPointerEnter);
        swiper2.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      if (swiper2.el && typeof swiper2.el !== "string") {
        swiper2.el.removeEventListener("pointerenter", onPointerEnter);
        swiper2.el.removeEventListener("pointerleave", onPointerLeave);
      }
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", () => {
      if (swiper2.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper2.autoplay.running) {
        stop();
      }
    });
    on("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on("_freeModeNoMomentumRelease", () => {
      if (!swiper2.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      if (internal || !swiper2.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("sliderFirstMove", () => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      if (swiper2.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on("touchEnd", () => {
      if (swiper2.destroyed || !swiper2.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper2.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper2.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on("slideChange", () => {
      if (swiper2.destroyed || !swiper2.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper2.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // node_modules/swiper/modules/thumbs.mjs
  function Thumb(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper2.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      const thumbsSwiper = swiper2.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper2.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper2.params.loop) {
        swiper2.slideToLoop(slideToIndex);
      } else {
        swiper2.slideTo(slideToIndex);
      }
    }
    function init() {
      const {
        thumbs: thumbsParams
      } = swiper2.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper2.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper2.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper2.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper2.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper2.thumbs.swiper.update();
      } else if (isObject2(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper2.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper2.thumbs.swiper.el.classList.add(swiper2.params.thumbs.thumbsContainerClass);
      swiper2.thumbs.swiper.on("tap", onThumbClick);
      return true;
    }
    function update2(initial) {
      const thumbsSwiper = swiper2.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper2.params.thumbs.slideThumbActiveClass;
      if (swiper2.params.slidesPerView > 1 && !swiper2.params.centeredSlides) {
        thumbsToActivate = swiper2.params.slidesPerView;
      }
      if (!swiper2.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (let i2 = 0; i2 < thumbsToActivate; i2 += 1) {
          elementChildren(thumbsSwiper.slidesEl, '[data-swiper-slide-index="'.concat(swiper2.realIndex + i2, '"]')).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (let i2 = 0; i2 < thumbsToActivate; i2 += 1) {
          if (thumbsSwiper.slides[swiper2.realIndex + i2]) {
            thumbsSwiper.slides[swiper2.realIndex + i2].classList.add(thumbActiveClass);
          }
        }
      }
      const autoScrollOffset = swiper2.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper2.realIndex !== thumbsSwiper.realIndex || useOffset) {
        const currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          const newThumbsSlide = thumbsSwiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === "".concat(swiper2.realIndex))[0];
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper2.activeIndex > swiper2.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper2.realIndex;
          direction = newThumbsIndex > swiper2.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
        }
      }
    }
    on("beforeInit", () => {
      const {
        thumbs
      } = swiper2.params;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
        const document2 = getDocument();
        const getThumbsElementAndInit = () => {
          const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update2(true);
          } else if (thumbsElement) {
            const eventName = "".concat(swiper2.params.eventsPrefix, "init");
            const onThumbsSwiper = (e2) => {
              thumbs.swiper = e2.detail[0];
              thumbsElement.removeEventListener(eventName, onThumbsSwiper);
              init();
              update2(true);
              thumbs.swiper.update();
              swiper2.update();
            };
            thumbsElement.addEventListener(eventName, onThumbsSwiper);
          }
          return thumbsElement;
        };
        const watchForThumbsToAppear = () => {
          if (swiper2.destroyed) return;
          const thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update2(true);
      }
    });
    on("slideChange update resize observerUpdate", () => {
      update2();
    });
    on("setTransition", (_s, duration) => {
      const thumbsSwiper = swiper2.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", () => {
      const thumbsSwiper = swiper2.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper2.thumbs, {
      init,
      update: update2
    });
  }

  // node_modules/swiper/modules/free-mode.mjs
  function freeMode(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      emit,
      once
    } = _ref;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart2() {
      if (swiper2.params.cssMode) return;
      const translate2 = swiper2.getTranslate();
      swiper2.setTranslate(translate2);
      swiper2.setTransition(0);
      swiper2.touchEventsData.velocities.length = 0;
      swiper2.freeMode.onTouchEnd({
        currentPos: swiper2.rtl ? swiper2.translate : -swiper2.translate
      });
    }
    function onTouchMove2() {
      if (swiper2.params.cssMode) return;
      const {
        touchEventsData: data,
        touches
      } = swiper2;
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper2.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper2.isHorizontal() ? "currentX" : "currentY"],
        time: now()
      });
    }
    function onTouchEnd2(_ref2) {
      let {
        currentPos
      } = _ref2;
      if (swiper2.params.cssMode) return;
      const {
        params,
        wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data
      } = swiper2;
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper2.minTranslate()) {
        swiper2.slideTo(swiper2.activeIndex);
        return;
      }
      if (currentPos > -swiper2.maxTranslate()) {
        if (swiper2.slides.length < snapGrid.length) {
          swiper2.slideTo(snapGrid.length - 1);
        } else {
          swiper2.slideTo(swiper2.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper2.velocity = distance / time;
          swiper2.velocity /= 2;
          if (Math.abs(swiper2.velocity) < params.freeMode.minimumVelocity) {
            swiper2.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper2.velocity = 0;
          }
        } else {
          swiper2.velocity = 0;
        }
        swiper2.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1e3 * params.freeMode.momentumRatio;
        const momentumDistance = swiper2.velocity * momentumDuration;
        let newPosition = swiper2.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper2.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper2.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper2.maxTranslate() < -bounceAmount) {
              newPosition = swiper2.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper2.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper2.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper2.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper2.minTranslate() > bounceAmount) {
              newPosition = swiper2.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper2.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper2.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j2 = 0; j2 < snapGrid.length; j2 += 1) {
            if (snapGrid[j2] > -newPosition) {
              nextSlide = j2;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper2.swipeDirection === "next") {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once("transitionEnd", () => {
            swiper2.loopFix();
          });
        }
        if (swiper2.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper2.translate) / swiper2.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper2.translate) / swiper2.velocity);
          }
          if (params.freeMode.sticky) {
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper2.translate);
            const currentSlideSize = swiper2.slidesSizesGrid[swiper2.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper2.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper2.updateProgress(afterBouncePosition);
          swiper2.setTransition(momentumDuration);
          swiper2.setTranslate(newPosition);
          swiper2.transitionStart(true, swiper2.swipeDirection);
          swiper2.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper2 || swiper2.destroyed || !data.allowMomentumBounce) return;
            emit("momentumBounce");
            swiper2.setTransition(params.speed);
            setTimeout(() => {
              swiper2.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper2 || swiper2.destroyed) return;
                swiper2.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper2.velocity) {
          emit("_freeModeNoMomentumRelease");
          swiper2.updateProgress(newPosition);
          swiper2.setTransition(momentumDuration);
          swiper2.setTranslate(newPosition);
          swiper2.transitionStart(true, swiper2.swipeDirection);
          if (!swiper2.animating) {
            swiper2.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper2 || swiper2.destroyed) return;
              swiper2.transitionEnd();
            });
          }
        } else {
          swiper2.updateProgress(newPosition);
        }
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper2.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        emit("_freeModeStaticRelease");
        swiper2.updateProgress();
        swiper2.updateActiveIndex();
        swiper2.updateSlidesClasses();
      }
    }
    Object.assign(swiper2, {
      freeMode: {
        onTouchStart: onTouchStart2,
        onTouchMove: onTouchMove2,
        onTouchEnd: onTouchEnd2
      }
    });
  }

  // node_modules/swiper/modules/grid.mjs
  function Grid(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
      let spaceBetween = swiper2.params.spaceBetween;
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper2.size;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    const initSlides = (slides) => {
      const {
        slidesPerView
      } = swiper2.params;
      const {
        rows,
        fill
      } = swiper2.params.grid;
      const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : slides.length;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== "auto" && fill === "row") {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
      }
      slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
      if (swiper2.slides) {
        swiper2.slides.forEach((slide2) => {
          if (slide2.swiperSlideGridSet) {
            slide2.style.height = "";
            slide2.style[swiper2.getDirectionLabel("margin-top")] = "";
          }
        });
      }
    };
    const updateSlide = (i2, slide2, slides) => {
      const {
        slidesPerGroup
      } = swiper2.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows,
        fill
      } = swiper2.params.grid;
      const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : slides.length;
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === "row" && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i2 / (slidesPerGroup * rows));
        const slideIndexInGroup = i2 - rows * slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide2.style.order = newSlideOrderIndex;
      } else if (fill === "column") {
        column = Math.floor(i2 / rows);
        row = i2 - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i2 / slidesPerRow);
        column = i2 - row * slidesPerRow;
      }
      slide2.row = row;
      slide2.column = column;
      slide2.style.height = "calc((100% - ".concat((rows - 1) * spaceBetween, "px) / ").concat(rows, ")");
      slide2.style[swiper2.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : "";
      slide2.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
      const {
        centeredSlides,
        roundLengths
      } = swiper2.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows
      } = swiper2.params.grid;
      swiper2.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper2.virtualSize = Math.ceil(swiper2.virtualSize / rows) - spaceBetween;
      if (!swiper2.params.cssMode) {
        swiper2.wrapperEl.style[swiper2.getDirectionLabel("width")] = "".concat(swiper2.virtualSize + spaceBetween, "px");
      }
      if (centeredSlides) {
        const newSlidesGrid = [];
        for (let i2 = 0; i2 < snapGrid.length; i2 += 1) {
          let slidesGridItem = snapGrid[i2];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i2] < swiper2.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push(...newSlidesGrid);
      }
    };
    const onInit = () => {
      wasMultiRow = swiper2.params.grid && swiper2.params.grid.rows > 1;
    };
    const onUpdate = () => {
      const {
        params,
        el
      } = swiper2;
      const isMultiRow = params.grid && params.grid.rows > 1;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
        numFullColumns = 1;
        swiper2.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add("".concat(params.containerModifierClass, "grid"));
        if (params.grid.fill === "column") {
          el.classList.add("".concat(params.containerModifierClass, "grid-column"));
        }
        swiper2.emitContainerClasses();
      }
      wasMultiRow = isMultiRow;
    };
    on("init", onInit);
    on("update", onUpdate);
    swiper2.grid = {
      initSlides,
      unsetSlides,
      updateSlide,
      updateWrapperSize
    };
  }

  // node_modules/swiper/modules/manipulation.mjs
  function appendSlide(slides) {
    const swiper2 = this;
    const {
      params,
      slidesEl
    } = swiper2;
    if (params.loop) {
      swiper2.loopDestroy();
    }
    const appendElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.append(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        if (slides[i2]) appendElement(slides[i2]);
      }
    } else {
      appendElement(slides);
    }
    swiper2.recalcSlides();
    if (params.loop) {
      swiper2.loopCreate();
    }
    if (!params.observer || swiper2.isElement) {
      swiper2.update();
    }
  }
  function prependSlide(slides) {
    const swiper2 = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper2;
    if (params.loop) {
      swiper2.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.prepend(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        if (slides[i2]) prependElement(slides[i2]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper2.recalcSlides();
    if (params.loop) {
      swiper2.loopCreate();
    }
    if (!params.observer || swiper2.isElement) {
      swiper2.update();
    }
    swiper2.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    const swiper2 = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper2;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper2.loopedSlides;
      swiper2.loopDestroy();
      swiper2.recalcSlides();
    }
    const baseLength = swiper2.slides.length;
    if (index <= 0) {
      swiper2.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper2.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i2 = baseLength - 1; i2 >= index; i2 -= 1) {
      const currentSlide = swiper2.slides[i2];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        if (slides[i2]) slidesEl.append(slides[i2]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (let i2 = 0; i2 < slidesBuffer.length; i2 += 1) {
      slidesEl.append(slidesBuffer[i2]);
    }
    swiper2.recalcSlides();
    if (params.loop) {
      swiper2.loopCreate();
    }
    if (!params.observer || swiper2.isElement) {
      swiper2.update();
    }
    if (params.loop) {
      swiper2.slideTo(newActiveIndex + swiper2.loopedSlides, 0, false);
    } else {
      swiper2.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper2 = this;
    const {
      params,
      activeIndex
    } = swiper2;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper2.loopedSlides;
      swiper2.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (let i2 = 0; i2 < slidesIndexes.length; i2 += 1) {
        indexToRemove = slidesIndexes[i2];
        if (swiper2.slides[indexToRemove]) swiper2.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper2.slides[indexToRemove]) swiper2.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper2.recalcSlides();
    if (params.loop) {
      swiper2.loopCreate();
    }
    if (!params.observer || swiper2.isElement) {
      swiper2.update();
    }
    if (params.loop) {
      swiper2.slideTo(newActiveIndex + swiper2.loopedSlides, 0, false);
    } else {
      swiper2.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper2 = this;
    const slidesIndexes = [];
    for (let i2 = 0; i2 < swiper2.slides.length; i2 += 1) {
      slidesIndexes.push(i2);
    }
    swiper2.removeSlide(slidesIndexes);
  }
  function Manipulation(_ref) {
    let {
      swiper: swiper2
    } = _ref;
    Object.assign(swiper2, {
      appendSlide: appendSlide.bind(swiper2),
      prependSlide: prependSlide.bind(swiper2),
      addSlide: addSlide.bind(swiper2),
      removeSlide: removeSlide.bind(swiper2),
      removeAllSlides: removeAllSlides.bind(swiper2)
    });
  }

  // node_modules/swiper/shared/effect-init.mjs
  function effectInit(params) {
    const {
      effect,
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on("beforeInit", () => {
      if (swiper2.params.effect !== effect) return;
      swiper2.classNames.push("".concat(swiper2.params.containerModifierClass).concat(effect));
      if (perspective && perspective()) {
        swiper2.classNames.push("".concat(swiper2.params.containerModifierClass, "3d"));
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper2.params, overwriteParamsResult);
      Object.assign(swiper2.originalParams, overwriteParamsResult);
    });
    on("setTranslate", () => {
      if (swiper2.params.effect !== effect) return;
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      if (swiper2.params.effect !== effect) return;
      setTransition2(duration);
    });
    on("transitionEnd", () => {
      if (swiper2.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        swiper2.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", () => {
      if (swiper2.params.effect !== effect) return;
      if (!swiper2.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper2.slides && swiper2.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.mjs
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.mjs
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper: swiper2,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper2;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper2.slides.filter((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper2.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper2.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper2 || swiper2.destroyed) return;
          eventTriggered = true;
          swiper2.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper2.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/swiper/modules/effect-fade.mjs
  function EffectFade(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper2;
      const params = swiper2.params.fadeEffect;
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        const slideEl = swiper2.slides[i2];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper2.params.virtualTranslate) tx -= swiper2.translate;
        let ty = 0;
        if (!swiper2.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)");
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper2.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
      });
      effectVirtualTransitionEnd({
        swiper: swiper2,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper2.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cube.mjs
  function EffectCube(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createElement3("div", "swiper-slide-shadow-cube swiper-slide-shadow-".concat(isHorizontal ? "left" : "top").split(" "));
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement3("div", "swiper-slide-shadow-cube swiper-slide-shadow-".concat(isHorizontal ? "right" : "bottom").split(" "));
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      const isHorizontal = swiper2.isHorizontal();
      swiper2.slides.forEach((slideEl) => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    const setTranslate2 = () => {
      const {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser2
      } = swiper2;
      const r2 = getRotateFix(swiper2);
      const params = swiper2.params.cubeEffect;
      const isHorizontal = swiper2.isHorizontal();
      const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
      let wrapperRotate = 0;
      let cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper2.wrapperEl.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement3("div", "swiper-cube-shadow");
            swiper2.wrapperEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = "".concat(swiperWidth, "px");
        } else {
          cubeShadowEl = el.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement3("div", "swiper-cube-shadow");
            el.append(cubeShadowEl);
          }
        }
      }
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        const slideEl = slides[i2];
        let slideIndex = i2;
        if (isVirtual) {
          slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = "rotateX(".concat(r2(isHorizontal ? 0 : -slideAngle), "deg) rotateY(").concat(r2(isHorizontal ? slideAngle : 0), "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = "50% 50% -".concat(swiperSize / 2, "px");
      wrapperEl.style["-webkit-transform-origin"] = "50% 50% -".concat(swiperSize / 2, "px");
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = "translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(89.99deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")");
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          cubeShadowEl.style.transform = "scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-89.99deg)");
        }
      }
      const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = "translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(r2(swiper2.isHorizontal() ? 0 : wrapperRotate), "deg) rotateY(").concat(r2(swiper2.isHorizontal() ? -wrapperRotate : 0), "deg)");
      wrapperEl.style.setProperty("--swiper-cube-translate-z", "".concat(zFactor, "px"));
    };
    const setTransition2 = (duration) => {
      const {
        el,
        slides
      } = swiper2;
      slides.forEach((slideEl) => {
        slideEl.style.transitionDuration = "".concat(duration, "ms");
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
          subEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      if (swiper2.params.cubeEffect.shadow && !swiper2.isHorizontal()) {
        const shadowEl = el.querySelector(".swiper-cube-shadow");
        if (shadowEl) shadowEl.style.transitionDuration = "".concat(duration, "ms");
      }
    };
    effectInit({
      effect: "cube",
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper2.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      })
    });
  }

  // node_modules/swiper/shared/create-shadow.mjs
  function createShadow(suffix, slideEl, side) {
    const shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : "").concat(suffix ? " swiper-slide-shadow-".concat(suffix) : "");
    const shadowContainer = getSlideTransformEl(slideEl);
    let shadowEl = shadowContainer.querySelector(".".concat(shadowClass.split(" ").join(".")));
    if (!shadowEl) {
      shadowEl = createElement3("div", shadowClass.split(" "));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }

  // node_modules/swiper/modules/effect-flip.mjs
  function EffectFlip(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    });
    const createSlideShadows = (slideEl, progress) => {
      let shadowBefore = swiper2.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = swiper2.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createShadow("flip", slideEl, swiper2.isHorizontal() ? "left" : "top");
      }
      if (!shadowAfter) {
        shadowAfter = createShadow("flip", slideEl, swiper2.isHorizontal() ? "right" : "bottom");
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      swiper2.params.flipEffect;
      swiper2.slides.forEach((slideEl) => {
        let progress = slideEl.progress;
        if (swiper2.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress);
      });
    };
    const setTranslate2 = () => {
      const {
        slides,
        rtlTranslate: rtl
      } = swiper2;
      const params = swiper2.params.flipEffect;
      const rotateFix = getRotateFix(swiper2);
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        const slideEl = slides[i2];
        let progress = slideEl.progress;
        if (swiper2.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        const offset = slideEl.swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper2.params.cssMode ? -offset - swiper2.translate : -offset;
        let ty = 0;
        if (!swiper2.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress);
        }
        const transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateFix(rotateX), "deg) rotateY(").concat(rotateFix(rotateY), "deg)");
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper2.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper: swiper2,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "flip",
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper2.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper2.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-coverflow.mjs
  function EffectCoverflow(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    });
    const setTranslate2 = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid
      } = swiper2;
      const params = swiper2.params.coverflowEffect;
      const isHorizontal = swiper2.isHorizontal();
      const transform = swiper2.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate2 = params.depth;
      const r2 = getRotateFix(swiper2);
      for (let i2 = 0, length = slides.length; i2 < length; i2 += 1) {
        const slideEl = slides[i2];
        const slideSize = slidesSizesGrid[i2];
        const slideOffset = slideEl.swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        let translateZ = -translate2 * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
        if (Math.abs(translateX) < 1e-3) translateX = 0;
        if (Math.abs(translateY) < 1e-3) translateY = 0;
        if (Math.abs(translateZ) < 1e-3) translateZ = 0;
        if (Math.abs(rotateY) < 1e-3) rotateY = 0;
        if (Math.abs(rotateX) < 1e-3) rotateX = 0;
        if (Math.abs(scale) < 1e-3) scale = 0;
        const slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(r2(rotateX), "deg) rotateY(").concat(r2(rotateY), "deg) scale(").concat(scale, ")");
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
          let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
          }
          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper2.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
    };
    effectInit({
      effect: "coverflow",
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true
      })
    });
  }

  // node_modules/swiper/modules/effect-creative.mjs
  function EffectCreative(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const getTranslateValue = (value) => {
      if (typeof value === "string") return value;
      return "".concat(value, "px");
    };
    const setTranslate2 = () => {
      const {
        slides,
        wrapperEl,
        slidesSizesGrid
      } = swiper2;
      const params = swiper2.params.creativeEffect;
      const {
        progressMultiplier: multiplier
      } = params;
      const isCenteredSlides = swiper2.params.centeredSlides;
      const rotateFix = getRotateFix(swiper2);
      if (isCenteredSlides) {
        const margin = slidesSizesGrid[0] / 2 - swiper2.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = "translateX(calc(50% - ".concat(margin, "px))");
      }
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        const slideEl = slides[i2];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
        }
        const offset = slideEl.swiperSlideOffset;
        const t2 = [swiper2.params.cssMode ? -offset - swiper2.translate : -offset, 0, 0];
        const r2 = [0, 0, 0];
        let custom = false;
        if (!swiper2.isHorizontal()) {
          t2[1] = t2[0];
          t2[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        t2.forEach((value, index) => {
          t2[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
        });
        r2.forEach((value, index) => {
          let val = data.rotate[index] * Math.abs(progress * multiplier);
          r2[index] = val;
        });
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t2.join(", ");
        const rotateString = "rotateX(".concat(rotateFix(r2[0]), "deg) rotateY(").concat(rotateFix(r2[1]), "deg) rotateZ(").concat(rotateFix(r2[2]), "deg)");
        const scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString);
        if (custom && data.shadow || !custom) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow("creative", slideEl);
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper2.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper: swiper2,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "creative",
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => swiper2.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper2.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cards.mjs
  function EffectCards(_ref) {
    let {
      swiper: swiper2,
      extendParams,
      on
    } = _ref;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    const setTranslate2 = () => {
      const {
        slides,
        activeIndex,
        rtlTranslate: rtl
      } = swiper2;
      const params = swiper2.params.cardsEffect;
      const {
        startTranslate,
        isTouched
      } = swiper2.touchEventsData;
      const currentTranslate = rtl ? -swiper2.translate : swiper2.translate;
      for (let i2 = 0; i2 < slides.length; i2 += 1) {
        const slideEl = slides[i2];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = slideEl.swiperSlideOffset;
        if (swiper2.params.centeredSlides && !swiper2.params.cssMode) {
          swiper2.wrapperEl.style.transform = "translateX(".concat(swiper2.minTranslate(), "px)");
        }
        if (swiper2.params.centeredSlides && swiper2.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper2.params.cssMode ? -offset - swiper2.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.from + i2 : i2;
        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper2.params.cssMode) && currentTranslate < startTranslate;
        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper2.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = __pow(1 - Math.abs((Math.abs(progress) - 0.5) / 0.5), 0.5);
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
        }
        if (progress < 0) {
          tX = "calc(".concat(tX, "px ").concat(rtl ? "-" : "+", " (").concat(tXAdd * Math.abs(progress), "%))");
        } else if (progress > 0) {
          tX = "calc(".concat(tX, "px ").concat(rtl ? "-" : "+", " (-").concat(tXAdd * Math.abs(progress), "%))");
        } else {
          tX = "".concat(tX, "px");
        }
        if (!swiper2.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
        const transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(params.rotate ? rtl ? -rotate : rotate : 0, "deg)\n        scale(").concat(scaleString, ")\n      ");
        if (params.slideShadows) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl) {
            shadowEl = createShadow("cards", slideEl);
          }
          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper2.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper: swiper2,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "cards",
      swiper: swiper2,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper2.params.cssMode
      })
    });
  }

  // node_modules/swiper/swiper-bundle.mjs
  var modules = [Virtual, Keyboard2, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);

  // node_modules/swiper/shared/update-swiper.mjs
  var paramsList = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "swiperElementNodeName",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    // modules
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control"
  ];
  function isObject3(o2) {
    return typeof o2 === "object" && o2 !== null && o2.constructor && Object.prototype.toString.call(o2).slice(8, -1) === "Object" && !o2.__swiper__;
  }
  function extend3(target, src) {
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0) {
        if (src[key].__swiper__) target[key] = src[key];
        else extend3(target[key], src[key]);
      } else {
        target[key] = src[key];
      }
    });
  }
  function needsNavigation(params) {
    if (params === void 0) {
      params = {};
    }
    return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
  }
  function needsPagination(params) {
    if (params === void 0) {
      params = {};
    }
    return params.pagination && typeof params.pagination.el === "undefined";
  }
  function needsScrollbar(params) {
    if (params === void 0) {
      params = {};
    }
    return params.scrollbar && typeof params.scrollbar.el === "undefined";
  }
  function attrToProp(attrName) {
    if (attrName === void 0) {
      attrName = "";
    }
    return attrName.replace(/-[a-z]/g, (l2) => l2.toUpperCase().replace("-", ""));
  }
  function updateSwiper(_ref) {
    let {
      swiper: swiper2,
      slides,
      passedParams,
      changedParams,
      nextEl,
      prevEl,
      scrollbarEl,
      paginationEl
    } = _ref;
    const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
    const {
      params: currentParams,
      pagination,
      navigation,
      scrollbar,
      virtual,
      thumbs
    } = swiper2;
    let needThumbsInit;
    let needControllerInit;
    let needPaginationInit;
    let needScrollbarInit;
    let needNavigationInit;
    let loopNeedDestroy;
    let loopNeedEnable;
    let loopNeedReloop;
    if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
      needThumbsInit = true;
    }
    if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
      needControllerInit = true;
    }
    if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
      needPaginationInit = true;
    }
    if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
      needScrollbarInit = true;
    }
    if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
      needNavigationInit = true;
    }
    const destroyModule = (mod) => {
      if (!swiper2[mod]) return;
      swiper2[mod].destroy();
      if (mod === "navigation") {
        if (swiper2.isElement) {
          swiper2[mod].prevEl.remove();
          swiper2[mod].nextEl.remove();
        }
        currentParams[mod].prevEl = void 0;
        currentParams[mod].nextEl = void 0;
        swiper2[mod].prevEl = void 0;
        swiper2[mod].nextEl = void 0;
      } else {
        if (swiper2.isElement) {
          swiper2[mod].el.remove();
        }
        currentParams[mod].el = void 0;
        swiper2[mod].el = void 0;
      }
    };
    if (changedParams.includes("loop") && swiper2.isElement) {
      if (currentParams.loop && !passedParams.loop) {
        loopNeedDestroy = true;
      } else if (!currentParams.loop && passedParams.loop) {
        loopNeedEnable = true;
      } else {
        loopNeedReloop = true;
      }
    }
    updateParams.forEach((key) => {
      if (isObject3(currentParams[key]) && isObject3(passedParams[key])) {
        Object.assign(currentParams[key], passedParams[key]);
        if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
          destroyModule(key);
        }
      } else {
        const newValue = passedParams[key];
        if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
          if (newValue === false) {
            destroyModule(key);
          }
        } else {
          currentParams[key] = passedParams[key];
        }
      }
    });
    if (updateParams.includes("controller") && !needControllerInit && swiper2.controller && swiper2.controller.control && currentParams.controller && currentParams.controller.control) {
      swiper2.controller.control = currentParams.controller.control;
    }
    if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
      virtual.slides = slides;
      virtual.update(true);
    } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
      if (slides) virtual.slides = slides;
      virtual.update(true);
    }
    if (changedParams.includes("children") && slides && currentParams.loop) {
      loopNeedReloop = true;
    }
    if (needThumbsInit) {
      const initialized = thumbs.init();
      if (initialized) thumbs.update(true);
    }
    if (needControllerInit) {
      swiper2.controller.control = currentParams.controller.control;
    }
    if (needPaginationInit) {
      if (swiper2.isElement && (!paginationEl || typeof paginationEl === "string")) {
        paginationEl = document.createElement("div");
        paginationEl.classList.add("swiper-pagination");
        paginationEl.part.add("pagination");
        swiper2.el.appendChild(paginationEl);
      }
      if (paginationEl) currentParams.pagination.el = paginationEl;
      pagination.init();
      pagination.render();
      pagination.update();
    }
    if (needScrollbarInit) {
      if (swiper2.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
        scrollbarEl = document.createElement("div");
        scrollbarEl.classList.add("swiper-scrollbar");
        scrollbarEl.part.add("scrollbar");
        swiper2.el.appendChild(scrollbarEl);
      }
      if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
      scrollbar.init();
      scrollbar.updateSize();
      scrollbar.setTranslate();
    }
    if (needNavigationInit) {
      if (swiper2.isElement) {
        if (!nextEl || typeof nextEl === "string") {
          nextEl = document.createElement("div");
          nextEl.classList.add("swiper-button-next");
          nextEl.innerHTML = swiper2.hostEl.constructor.nextButtonSvg;
          nextEl.part.add("button-next");
          swiper2.el.appendChild(nextEl);
        }
        if (!prevEl || typeof prevEl === "string") {
          prevEl = document.createElement("div");
          prevEl.classList.add("swiper-button-prev");
          prevEl.innerHTML = swiper2.hostEl.constructor.prevButtonSvg;
          prevEl.part.add("button-prev");
          swiper2.el.appendChild(prevEl);
        }
      }
      if (nextEl) currentParams.navigation.nextEl = nextEl;
      if (prevEl) currentParams.navigation.prevEl = prevEl;
      navigation.init();
      navigation.update();
    }
    if (changedParams.includes("allowSlideNext")) {
      swiper2.allowSlideNext = passedParams.allowSlideNext;
    }
    if (changedParams.includes("allowSlidePrev")) {
      swiper2.allowSlidePrev = passedParams.allowSlidePrev;
    }
    if (changedParams.includes("direction")) {
      swiper2.changeDirection(passedParams.direction, false);
    }
    if (loopNeedDestroy || loopNeedReloop) {
      swiper2.loopDestroy();
    }
    if (loopNeedEnable || loopNeedReloop) {
      swiper2.loopCreate();
    }
    swiper2.update();
  }

  // node_modules/swiper/shared/get-element-params.mjs
  var formatValue = (val) => {
    if (parseFloat(val) === Number(val)) return Number(val);
    if (val === "true") return true;
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "null") return null;
    if (val === "undefined") return void 0;
    if (typeof val === "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
      let v2;
      try {
        v2 = JSON.parse(val);
      } catch (err) {
        v2 = val;
      }
      return v2;
    }
    return val;
  };
  var modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
  function getParams(element, propName, propValue) {
    const params = {};
    const passedParams = {};
    extend3(params, defaults);
    const localParamsList = [...paramsList, "on"];
    const allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
    localParamsList.forEach((paramName) => {
      paramName = paramName.replace("_", "");
      if (typeof element[paramName] !== "undefined") {
        passedParams[paramName] = element[paramName];
      }
    });
    const attrsList = [...element.attributes];
    if (typeof propName === "string" && typeof propValue !== "undefined") {
      attrsList.push({
        name: propName,
        value: isObject3(propValue) ? __spreadValues({}, propValue) : propValue
      });
    }
    attrsList.forEach((attr) => {
      const moduleParam = modulesParamsList.filter((mParam) => attr.name.indexOf("".concat(mParam, "-")) === 0)[0];
      if (moduleParam) {
        const parentObjName = attrToProp(moduleParam);
        const subObjName = attrToProp(attr.name.split("".concat(moduleParam, "-"))[1]);
        if (typeof passedParams[parentObjName] === "undefined") passedParams[parentObjName] = {};
        if (passedParams[parentObjName] === true) {
          passedParams[parentObjName] = {
            enabled: true
          };
        }
        passedParams[parentObjName][subObjName] = formatValue(attr.value);
      } else {
        const name = attrToProp(attr.name);
        if (!allowedParams.includes(name)) return;
        const value = formatValue(attr.value);
        if (passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value)) {
          if (passedParams[name].constructor !== Object) {
            passedParams[name] = {};
          }
          passedParams[name].enabled = !!value;
        } else {
          passedParams[name] = value;
        }
      }
    });
    extend3(params, passedParams);
    if (params.navigation) {
      params.navigation = __spreadValues({
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      }, params.navigation !== true ? params.navigation : {});
    } else if (params.navigation === false) {
      delete params.navigation;
    }
    if (params.scrollbar) {
      params.scrollbar = __spreadValues({
        el: ".swiper-scrollbar"
      }, params.scrollbar !== true ? params.scrollbar : {});
    } else if (params.scrollbar === false) {
      delete params.scrollbar;
    }
    if (params.pagination) {
      params.pagination = __spreadValues({
        el: ".swiper-pagination"
      }, params.pagination !== true ? params.pagination : {});
    } else if (params.pagination === false) {
      delete params.pagination;
    }
    return {
      params,
      passedParams
    };
  }

  // node_modules/swiper/swiper-element-bundle.mjs
  var SwiperCSS = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";
  var SwiperSlideCSS = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
  var DummyHTMLElement = class {
  };
  var ClassToExtend = typeof window === "undefined" || typeof HTMLElement === "undefined" ? DummyHTMLElement : HTMLElement;
  var arrowSvg = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>\n    ';
  var addStyle = (shadowRoot, styles) => {
    if (typeof CSSStyleSheet !== "undefined" && shadowRoot.adoptedStyleSheets) {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(styles);
      shadowRoot.adoptedStyleSheets = [styleSheet];
    } else {
      const style = document.createElement("style");
      style.rel = "stylesheet";
      style.textContent = styles;
      shadowRoot.appendChild(style);
    }
  };
  var SwiperContainer = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    static get nextButtonSvg() {
      return arrowSvg;
    }
    static get prevButtonSvg() {
      return arrowSvg.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
    }
    cssStyles() {
      return [
        SwiperCSS,
        // eslint-disable-line
        ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
      ].join("\n");
    }
    cssLinks() {
      return this.injectStylesUrls || [];
    }
    calcSlideSlots() {
      const currentSideSlots = this.slideSlots || 0;
      const slideSlotChildren = [...this.querySelectorAll("[slot^=slide-]")].map((child) => {
        return parseInt(child.getAttribute("slot").split("slide-")[1], 10);
      });
      this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
      if (!this.rendered) return;
      if (this.slideSlots > currentSideSlots) {
        for (let i2 = currentSideSlots; i2 < this.slideSlots; i2 += 1) {
          const slideEl = document.createElement("swiper-slide");
          slideEl.setAttribute("part", "slide slide-".concat(i2 + 1));
          const slotEl = document.createElement("slot");
          slotEl.setAttribute("name", "slide-".concat(i2 + 1));
          slideEl.appendChild(slotEl);
          this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
        }
      } else if (this.slideSlots < currentSideSlots) {
        const slides = this.swiper.slides;
        for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
          if (i2 > this.slideSlots) {
            slides[i2].remove();
          }
        }
      }
    }
    render() {
      if (this.rendered) return;
      this.calcSlideSlots();
      let localStyles = this.cssStyles();
      if (this.slideSlots > 0) {
        localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1");
      }
      if (localStyles.length) {
        addStyle(this.shadowRoot, localStyles);
      }
      this.cssLinks().forEach((url) => {
        const linkExists = this.shadowRoot.querySelector('link[href="'.concat(url, '"]'));
        if (linkExists) return;
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = url;
        this.shadowRoot.appendChild(linkEl);
      });
      const el = document.createElement("div");
      el.classList.add("swiper");
      el.part = "container";
      el.innerHTML = '\n      <slot name="container-start"></slot>\n      <div class="swiper-wrapper" part="wrapper">\n        <slot></slot>\n        '.concat(Array.from({
        length: this.slideSlots
      }).map((_2, index) => '\n        <swiper-slide part="slide slide-'.concat(index, '">\n          <slot name="slide-').concat(index, '"></slot>\n        </swiper-slide>\n        ')).join(""), '\n      </div>\n      <slot name="container-end"></slot>\n      ').concat(needsNavigation(this.passedParams) ? '\n        <div part="button-prev" class="swiper-button-prev">'.concat(this.constructor.prevButtonSvg, '</div>\n        <div part="button-next" class="swiper-button-next">').concat(this.constructor.nextButtonSvg, "</div>\n      ") : "", "\n      ").concat(needsPagination(this.passedParams) ? '\n        <div part="pagination" class="swiper-pagination"></div>\n      ' : "", "\n      ").concat(needsScrollbar(this.passedParams) ? '\n        <div part="scrollbar" class="swiper-scrollbar"></div>\n      ' : "", "\n    ");
      this.shadowRoot.appendChild(el);
      this.rendered = true;
    }
    initialize() {
      var _this = this;
      if (this.initialized) return;
      this.initialized = true;
      const {
        params: swiperParams,
        passedParams
      } = getParams(this);
      this.swiperParams = swiperParams;
      this.passedParams = passedParams;
      delete this.swiperParams.init;
      this.render();
      this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), __spreadProps(__spreadValues(__spreadValues({}, swiperParams.virtual ? {} : {
        observer: true
      }), swiperParams), {
        touchEventsTarget: "container",
        onAny: function(name) {
          if (name === "observerUpdate") {
            _this.calcSlideSlots();
          }
          const eventName = swiperParams.eventsPrefix ? "".concat(swiperParams.eventsPrefix).concat(name.toLowerCase()) : name.toLowerCase();
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          const event2 = new CustomEvent(eventName, {
            detail: args,
            bubbles: name !== "hashChange",
            cancelable: true
          });
          _this.dispatchEvent(event2);
        }
      }));
    }
    connectedCallback() {
      if (this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.init === false || this.getAttribute("init") === "false") {
        return;
      }
      this.initialize();
    }
    disconnectedCallback() {
      if (this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.swiper && this.swiper.destroy) {
        this.swiper.destroy();
      }
      this.initialized = false;
    }
    updateSwiperOnPropChange(propName, propValue) {
      const {
        params: swiperParams,
        passedParams
      } = getParams(this, propName, propValue);
      this.passedParams = passedParams;
      this.swiperParams = swiperParams;
      if (this.swiper && this.swiper.params[propName] === propValue) {
        return;
      }
      updateSwiper(__spreadValues(__spreadValues(__spreadValues({
        swiper: this.swiper,
        passedParams: this.passedParams,
        changedParams: [attrToProp(propName)]
      }, propName === "navigation" && passedParams[propName] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {}), propName === "pagination" && passedParams[propName] ? {
        paginationEl: ".swiper-pagination"
      } : {}), propName === "scrollbar" && passedParams[propName] ? {
        scrollbarEl: ".swiper-scrollbar"
      } : {}));
    }
    attributeChangedCallback(attr, prevValue, newValue) {
      if (!this.initialized) return;
      if (prevValue === "true" && newValue === null) {
        newValue = false;
      }
      this.updateSwiperOnPropChange(attr, newValue);
    }
    static get observedAttributes() {
      const attrs = paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v2) => "-".concat(v2)).replace("_", "").toLowerCase());
      return attrs;
    }
  };
  paramsList.forEach((paramName) => {
    if (paramName === "init") return;
    paramName = paramName.replace("_", "");
    Object.defineProperty(SwiperContainer.prototype, paramName, {
      configurable: true,
      get() {
        return (this.passedParams || {})[paramName];
      },
      set(value) {
        if (!this.passedParams) this.passedParams = {};
        this.passedParams[paramName] = value;
        if (!this.initialized) return;
        this.updateSwiperOnPropChange(paramName, value);
      }
    });
  });
  var SwiperSlide = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    render() {
      const lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
      addStyle(this.shadowRoot, SwiperSlideCSS);
      this.shadowRoot.appendChild(document.createElement("slot"));
      if (lazy) {
        const lazyDiv = document.createElement("div");
        lazyDiv.classList.add("swiper-lazy-preloader");
        lazyDiv.part.add("preloader");
        this.shadowRoot.appendChild(lazyDiv);
      }
    }
    initialize() {
      this.render();
    }
    connectedCallback() {
      this.initialize();
    }
  };
  var register = () => {
    if (typeof window === "undefined") return;
    if (!window.customElements.get("swiper-container")) window.customElements.define("swiper-container", SwiperContainer);
    if (!window.customElements.get("swiper-slide")) window.customElements.define("swiper-slide", SwiperSlide);
  };
  if (typeof window !== "undefined") {
    window.SwiperElementRegisterParams = (params) => {
      paramsList.push(...params);
    };
  }

  // assets/js/functions/swiper.js
  function swiper() {
    register();
  }
  var swiper_default = swiper;

  // assets/js/functions/htmx.js
  var import_htmx = __toESM(require_htmx_min());
  window.htmx = require_htmx_min();

  // assets/js/functions/footsteps-animation.js
  function footsteps_animation() {
    if (document.querySelector("#footsteps-svg")) {
      document.addEventListener("DOMContentLoaded", function() {
        const groups = document.querySelectorAll('#footsteps-svg g[id^="Group_"]');
        let currentStep = 0;
        const trailLength = 2;
        const fadeDelay = 2e3;
        let stepsHistory = [];
        groups.forEach((group) => {
          group.style.opacity = 0;
          group.classList.remove("active");
          group.classList.remove("fade-out");
        });
        function animateNextStep() {
          stepsHistory.push(currentStep);
          groups[currentStep].style.opacity = "";
          groups[currentStep].classList.add("active");
          if (stepsHistory.length > trailLength) {
            const stepToFade = stepsHistory.shift();
            setTimeout(() => {
              groups[stepToFade].classList.remove("active");
              groups[stepToFade].classList.add("fade-out");
              setTimeout(() => {
                groups[stepToFade].classList.remove("fade-out");
                groups[stepToFade].style.opacity = 0;
              }, 2e3);
            }, fadeDelay);
          }
          currentStep = (currentStep + 1) % groups.length;
          setTimeout(animateNextStep, 450);
        }
        animateNextStep();
      });
    }
  }
  footsteps_animation();

  // assets/js/functions/tabs.js
  function Tabs() {
    const tabsContainer = document.getElementById("servicesTabs");
    if (!tabsContainer) return;
    const tabButtons = tabsContainer.querySelectorAll("button[data-tab]");
    const tabContents = tabsContainer.querySelectorAll(
      ".tab-content > div[data-tab]"
    );
    tabContents.forEach((content, index) => {
      if (index === 0) {
        content.classList.add("opacity-100");
        content.classList.remove("opacity-0");
        content.style.pointerEvents = "auto";
      } else {
        content.classList.add("opacity-0");
        content.classList.remove("opacity-100");
        content.style.pointerEvents = "none";
      }
    });
    if (tabButtons.length > 0) {
      tabButtons[0].classList.add("bg-white", "text-[#000A30]");
      tabButtons[0].classList.replace("text-white", "text-[#000A30]");
    }
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");
        tabButtons.forEach((btn) => {
          btn.classList.remove("bg-white");
          btn.classList.replace("text-[#000A30]", "text-white");
        });
        button.classList.add("bg-white");
        button.classList.replace("text-white", "text-[#000A30]");
        tabContents.forEach((content) => {
          if (content.getAttribute("data-tab") === tabId) {
            content.classList.remove("opacity-0");
            content.classList.add("opacity-100");
            content.style.pointerEvents = "auto";
          } else {
            content.classList.remove("opacity-100");
            content.classList.add("opacity-0");
            content.style.pointerEvents = "none";
          }
        });
      });
    });
  }

  // assets/js/index.js
  swiper_default();
  Modals();
  ThemePlyr();
  Popups();
  PhotoSwipeTheme();
  show_more_btn();
  footsteps_animation();
  Tabs();
})();
/*! Bundled license information:

photoswipe/dist/photoswipe.esm.js:
  (*!
    * PhotoSwipe 5.4.4 - https://photoswipe.com
    * (c) 2024 Dmytro Semenov
    *)

photoswipe/dist/photoswipe-lightbox.esm.js:
  (*!
    * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
    * (c) 2024 Dmytro Semenov
    *)
*/
