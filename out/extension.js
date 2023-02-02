var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../node_modules/underscore/modules/_setup.js
var VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX;
var init_setup = __esm({
  "../node_modules/underscore/modules/_setup.js"() {
    VERSION = "1.13.6";
    root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
    ArrayProto = Array.prototype;
    ObjProto = Object.prototype;
    SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
    push = ArrayProto.push;
    slice = ArrayProto.slice;
    toString = ObjProto.toString;
    hasOwnProperty = ObjProto.hasOwnProperty;
    supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
    supportsDataView = typeof DataView !== "undefined";
    nativeIsArray = Array.isArray;
    nativeKeys = Object.keys;
    nativeCreate = Object.create;
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
    _isNaN = isNaN;
    _isFinite = isFinite;
    hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
    nonEnumerableProps = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString"
    ];
    MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  }
});

// ../node_modules/underscore/modules/restArguments.js
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
    for (; index < length; index++) {
      rest2[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest2);
      case 1:
        return func.call(this, arguments[0], rest2);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest2);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest2;
    return func.apply(this, args);
  };
}
var init_restArguments = __esm({
  "../node_modules/underscore/modules/restArguments.js"() {
  }
});

// ../node_modules/underscore/modules/isObject.js
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
var init_isObject = __esm({
  "../node_modules/underscore/modules/isObject.js"() {
  }
});

// ../node_modules/underscore/modules/isNull.js
function isNull(obj) {
  return obj === null;
}
var init_isNull = __esm({
  "../node_modules/underscore/modules/isNull.js"() {
  }
});

// ../node_modules/underscore/modules/isUndefined.js
function isUndefined(obj) {
  return obj === void 0;
}
var init_isUndefined = __esm({
  "../node_modules/underscore/modules/isUndefined.js"() {
  }
});

// ../node_modules/underscore/modules/isBoolean.js
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
var init_isBoolean = __esm({
  "../node_modules/underscore/modules/isBoolean.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/isElement.js
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
var init_isElement = __esm({
  "../node_modules/underscore/modules/isElement.js"() {
  }
});

// ../node_modules/underscore/modules/_tagTester.js
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  };
}
var init_tagTester = __esm({
  "../node_modules/underscore/modules/_tagTester.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/isString.js
var isString_default;
var init_isString = __esm({
  "../node_modules/underscore/modules/isString.js"() {
    init_tagTester();
    isString_default = tagTester("String");
  }
});

// ../node_modules/underscore/modules/isNumber.js
var isNumber_default;
var init_isNumber = __esm({
  "../node_modules/underscore/modules/isNumber.js"() {
    init_tagTester();
    isNumber_default = tagTester("Number");
  }
});

// ../node_modules/underscore/modules/isDate.js
var isDate_default;
var init_isDate = __esm({
  "../node_modules/underscore/modules/isDate.js"() {
    init_tagTester();
    isDate_default = tagTester("Date");
  }
});

// ../node_modules/underscore/modules/isRegExp.js
var isRegExp_default;
var init_isRegExp = __esm({
  "../node_modules/underscore/modules/isRegExp.js"() {
    init_tagTester();
    isRegExp_default = tagTester("RegExp");
  }
});

// ../node_modules/underscore/modules/isError.js
var isError_default;
var init_isError = __esm({
  "../node_modules/underscore/modules/isError.js"() {
    init_tagTester();
    isError_default = tagTester("Error");
  }
});

// ../node_modules/underscore/modules/isSymbol.js
var isSymbol_default;
var init_isSymbol = __esm({
  "../node_modules/underscore/modules/isSymbol.js"() {
    init_tagTester();
    isSymbol_default = tagTester("Symbol");
  }
});

// ../node_modules/underscore/modules/isArrayBuffer.js
var isArrayBuffer_default;
var init_isArrayBuffer = __esm({
  "../node_modules/underscore/modules/isArrayBuffer.js"() {
    init_tagTester();
    isArrayBuffer_default = tagTester("ArrayBuffer");
  }
});

// ../node_modules/underscore/modules/isFunction.js
var isFunction, nodelist, isFunction_default;
var init_isFunction = __esm({
  "../node_modules/underscore/modules/isFunction.js"() {
    init_tagTester();
    init_setup();
    isFunction = tagTester("Function");
    nodelist = root.document && root.document.childNodes;
    if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
      isFunction = function(obj) {
        return typeof obj == "function" || false;
      };
    }
    isFunction_default = isFunction;
  }
});

// ../node_modules/underscore/modules/_hasObjectTag.js
var hasObjectTag_default;
var init_hasObjectTag = __esm({
  "../node_modules/underscore/modules/_hasObjectTag.js"() {
    init_tagTester();
    hasObjectTag_default = tagTester("Object");
  }
});

// ../node_modules/underscore/modules/_stringTagBug.js
var hasStringTagBug, isIE11;
var init_stringTagBug = __esm({
  "../node_modules/underscore/modules/_stringTagBug.js"() {
    init_setup();
    init_hasObjectTag();
    hasStringTagBug = supportsDataView && hasObjectTag_default(new DataView(new ArrayBuffer(8)));
    isIE11 = typeof Map !== "undefined" && hasObjectTag_default(/* @__PURE__ */ new Map());
  }
});

// ../node_modules/underscore/modules/isDataView.js
function ie10IsDataView(obj) {
  return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
}
var isDataView, isDataView_default;
var init_isDataView = __esm({
  "../node_modules/underscore/modules/isDataView.js"() {
    init_tagTester();
    init_isFunction();
    init_isArrayBuffer();
    init_stringTagBug();
    isDataView = tagTester("DataView");
    isDataView_default = hasStringTagBug ? ie10IsDataView : isDataView;
  }
});

// ../node_modules/underscore/modules/isArray.js
var isArray_default;
var init_isArray = __esm({
  "../node_modules/underscore/modules/isArray.js"() {
    init_setup();
    init_tagTester();
    isArray_default = nativeIsArray || tagTester("Array");
  }
});

// ../node_modules/underscore/modules/_has.js
function has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
var init_has = __esm({
  "../node_modules/underscore/modules/_has.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/isArguments.js
var isArguments, isArguments_default;
var init_isArguments = __esm({
  "../node_modules/underscore/modules/isArguments.js"() {
    init_tagTester();
    init_has();
    isArguments = tagTester("Arguments");
    (function() {
      if (!isArguments(arguments)) {
        isArguments = function(obj) {
          return has(obj, "callee");
        };
      }
    })();
    isArguments_default = isArguments;
  }
});

// ../node_modules/underscore/modules/isFinite.js
function isFinite2(obj) {
  return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
var init_isFinite = __esm({
  "../node_modules/underscore/modules/isFinite.js"() {
    init_setup();
    init_isSymbol();
  }
});

// ../node_modules/underscore/modules/isNaN.js
function isNaN2(obj) {
  return isNumber_default(obj) && _isNaN(obj);
}
var init_isNaN = __esm({
  "../node_modules/underscore/modules/isNaN.js"() {
    init_setup();
    init_isNumber();
  }
});

// ../node_modules/underscore/modules/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var init_constant = __esm({
  "../node_modules/underscore/modules/constant.js"() {
  }
});

// ../node_modules/underscore/modules/_createSizePropertyCheck.js
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  };
}
var init_createSizePropertyCheck = __esm({
  "../node_modules/underscore/modules/_createSizePropertyCheck.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/_shallowProperty.js
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
var init_shallowProperty = __esm({
  "../node_modules/underscore/modules/_shallowProperty.js"() {
  }
});

// ../node_modules/underscore/modules/_getByteLength.js
var getByteLength_default;
var init_getByteLength = __esm({
  "../node_modules/underscore/modules/_getByteLength.js"() {
    init_shallowProperty();
    getByteLength_default = shallowProperty("byteLength");
  }
});

// ../node_modules/underscore/modules/_isBufferLike.js
var isBufferLike_default;
var init_isBufferLike = __esm({
  "../node_modules/underscore/modules/_isBufferLike.js"() {
    init_createSizePropertyCheck();
    init_getByteLength();
    isBufferLike_default = createSizePropertyCheck(getByteLength_default);
  }
});

// ../node_modules/underscore/modules/isTypedArray.js
function isTypedArray(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
}
var typedArrayPattern, isTypedArray_default;
var init_isTypedArray = __esm({
  "../node_modules/underscore/modules/isTypedArray.js"() {
    init_setup();
    init_isDataView();
    init_constant();
    init_isBufferLike();
    typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);
  }
});

// ../node_modules/underscore/modules/_getLength.js
var getLength_default;
var init_getLength = __esm({
  "../node_modules/underscore/modules/_getLength.js"() {
    init_shallowProperty();
    getLength_default = shallowProperty("length");
  }
});

// ../node_modules/underscore/modules/_collectNonEnumProps.js
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i = 0; i < l; ++i)
    hash[keys2[i]] = true;
  return {
    contains: function(key) {
      return hash[key] === true;
    },
    push: function(key) {
      hash[key] = true;
      return keys2.push(key);
    }
  };
}
function collectNonEnumProps(obj, keys2) {
  keys2 = emulatedSet(keys2);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
  var prop = "constructor";
  if (has(obj, prop) && !keys2.contains(prop))
    keys2.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
      keys2.push(prop);
    }
  }
}
var init_collectNonEnumProps = __esm({
  "../node_modules/underscore/modules/_collectNonEnumProps.js"() {
    init_setup();
    init_isFunction();
    init_has();
  }
});

// ../node_modules/underscore/modules/keys.js
function keys(obj) {
  if (!isObject(obj))
    return [];
  if (nativeKeys)
    return nativeKeys(obj);
  var keys2 = [];
  for (var key in obj)
    if (has(obj, key))
      keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_keys = __esm({
  "../node_modules/underscore/modules/keys.js"() {
    init_isObject();
    init_setup();
    init_has();
    init_collectNonEnumProps();
  }
});

// ../node_modules/underscore/modules/isEmpty.js
function isEmpty(obj) {
  if (obj == null)
    return true;
  var length = getLength_default(obj);
  if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj)))
    return length === 0;
  return getLength_default(keys(obj)) === 0;
}
var init_isEmpty = __esm({
  "../node_modules/underscore/modules/isEmpty.js"() {
    init_getLength();
    init_isArray();
    init_isString();
    init_isArguments();
    init_keys();
  }
});

// ../node_modules/underscore/modules/isMatch.js
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object2 == null)
    return !length;
  var obj = Object(object2);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj))
      return false;
  }
  return true;
}
var init_isMatch = __esm({
  "../node_modules/underscore/modules/isMatch.js"() {
    init_keys();
  }
});

// ../node_modules/underscore/modules/underscore.js
function _(obj) {
  if (obj instanceof _)
    return obj;
  if (!(this instanceof _))
    return new _(obj);
  this._wrapped = obj;
}
var init_underscore = __esm({
  "../node_modules/underscore/modules/underscore.js"() {
    init_setup();
    _.VERSION = VERSION;
    _.prototype.value = function() {
      return this._wrapped;
    };
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
      return String(this._wrapped);
    };
  }
});

// ../node_modules/underscore/modules/_toBufferView.js
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    getByteLength_default(bufferSource)
  );
}
var init_toBufferView = __esm({
  "../node_modules/underscore/modules/_toBufferView.js"() {
    init_getByteLength();
  }
});

// ../node_modules/underscore/modules/isEqual.js
function eq(a, b, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object")
    return false;
  return deepEq(a, b, aStack, bStack);
}
function deepEq(a, b, aStack, bStack) {
  if (a instanceof _)
    a = a._wrapped;
  if (b instanceof _)
    b = b._wrapped;
  var className = toString.call(a);
  if (className !== toString.call(b))
    return false;
  if (hasStringTagBug && className == "[object Object]" && isDataView_default(a)) {
    if (!isDataView_default(b))
      return false;
    className = tagDataView;
  }
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case "[object ArrayBuffer]":
    case tagDataView:
      return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
  }
  var areArrays = className === "[object Array]";
  if (!areArrays && isTypedArray_default(a)) {
    var byteLength = getByteLength_default(a);
    if (byteLength !== getByteLength_default(b))
      return false;
    if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
      return true;
    areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
      return false;
    }
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack))
        return false;
    }
  } else {
    var _keys = keys(a), key;
    length = _keys.length;
    if (keys(b).length !== length)
      return false;
    while (length--) {
      key = _keys[length];
      if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function isEqual(a, b) {
  return eq(a, b);
}
var tagDataView;
var init_isEqual = __esm({
  "../node_modules/underscore/modules/isEqual.js"() {
    init_underscore();
    init_setup();
    init_getByteLength();
    init_isTypedArray();
    init_isFunction();
    init_stringTagBug();
    init_isDataView();
    init_keys();
    init_has();
    init_toBufferView();
    tagDataView = "[object DataView]";
  }
});

// ../node_modules/underscore/modules/allKeys.js
function allKeys(obj) {
  if (!isObject(obj))
    return [];
  var keys2 = [];
  for (var key in obj)
    keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_allKeys = __esm({
  "../node_modules/underscore/modules/allKeys.js"() {
    init_isObject();
    init_setup();
    init_collectNonEnumProps();
  }
});

// ../node_modules/underscore/modules/_methodFingerprint.js
function ie11fingerprint(methods) {
  var length = getLength_default(methods);
  return function(obj) {
    if (obj == null)
      return false;
    var keys2 = allKeys(obj);
    if (getLength_default(keys2))
      return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction_default(obj[methods[i]]))
        return false;
    }
    return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
  };
}
var forEachName, hasName, commonInit, mapTail, mapMethods, weakMapMethods, setMethods;
var init_methodFingerprint = __esm({
  "../node_modules/underscore/modules/_methodFingerprint.js"() {
    init_getLength();
    init_isFunction();
    init_allKeys();
    forEachName = "forEach";
    hasName = "has";
    commonInit = ["clear", "delete"];
    mapTail = ["get", hasName, "set"];
    mapMethods = commonInit.concat(forEachName, mapTail);
    weakMapMethods = commonInit.concat(mapTail);
    setMethods = ["add"].concat(commonInit, forEachName, hasName);
  }
});

// ../node_modules/underscore/modules/isMap.js
var isMap_default;
var init_isMap = __esm({
  "../node_modules/underscore/modules/isMap.js"() {
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
  }
});

// ../node_modules/underscore/modules/isWeakMap.js
var isWeakMap_default;
var init_isWeakMap = __esm({
  "../node_modules/underscore/modules/isWeakMap.js"() {
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
  }
});

// ../node_modules/underscore/modules/isSet.js
var isSet_default;
var init_isSet = __esm({
  "../node_modules/underscore/modules/isSet.js"() {
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
  }
});

// ../node_modules/underscore/modules/isWeakSet.js
var isWeakSet_default;
var init_isWeakSet = __esm({
  "../node_modules/underscore/modules/isWeakSet.js"() {
    init_tagTester();
    isWeakSet_default = tagTester("WeakSet");
  }
});

// ../node_modules/underscore/modules/values.js
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values2 = Array(length);
  for (var i = 0; i < length; i++) {
    values2[i] = obj[_keys[i]];
  }
  return values2;
}
var init_values = __esm({
  "../node_modules/underscore/modules/values.js"() {
    init_keys();
  }
});

// ../node_modules/underscore/modules/pairs.js
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs2 = Array(length);
  for (var i = 0; i < length; i++) {
    pairs2[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs2;
}
var init_pairs = __esm({
  "../node_modules/underscore/modules/pairs.js"() {
    init_keys();
  }
});

// ../node_modules/underscore/modules/invert.js
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result2[obj[_keys[i]]] = _keys[i];
  }
  return result2;
}
var init_invert = __esm({
  "../node_modules/underscore/modules/invert.js"() {
    init_keys();
  }
});

// ../node_modules/underscore/modules/functions.js
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction_default(obj[key]))
      names.push(key);
  }
  return names.sort();
}
var init_functions = __esm({
  "../node_modules/underscore/modules/functions.js"() {
    init_isFunction();
  }
});

// ../node_modules/underscore/modules/_createAssigner.js
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults)
      obj = Object(obj);
    if (length < 2 || obj == null)
      return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i = 0; i < l; i++) {
        var key = keys2[i];
        if (!defaults || obj[key] === void 0)
          obj[key] = source[key];
      }
    }
    return obj;
  };
}
var init_createAssigner = __esm({
  "../node_modules/underscore/modules/_createAssigner.js"() {
  }
});

// ../node_modules/underscore/modules/extend.js
var extend_default;
var init_extend = __esm({
  "../node_modules/underscore/modules/extend.js"() {
    init_createAssigner();
    init_allKeys();
    extend_default = createAssigner(allKeys);
  }
});

// ../node_modules/underscore/modules/extendOwn.js
var extendOwn_default;
var init_extendOwn = __esm({
  "../node_modules/underscore/modules/extendOwn.js"() {
    init_createAssigner();
    init_keys();
    extendOwn_default = createAssigner(keys);
  }
});

// ../node_modules/underscore/modules/defaults.js
var defaults_default;
var init_defaults = __esm({
  "../node_modules/underscore/modules/defaults.js"() {
    init_createAssigner();
    init_allKeys();
    defaults_default = createAssigner(allKeys, true);
  }
});

// ../node_modules/underscore/modules/_baseCreate.js
function ctor() {
  return function() {
  };
}
function baseCreate(prototype) {
  if (!isObject(prototype))
    return {};
  if (nativeCreate)
    return nativeCreate(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result2 = new Ctor();
  Ctor.prototype = null;
  return result2;
}
var init_baseCreate = __esm({
  "../node_modules/underscore/modules/_baseCreate.js"() {
    init_isObject();
    init_setup();
  }
});

// ../node_modules/underscore/modules/create.js
function create(prototype, props) {
  var result2 = baseCreate(prototype);
  if (props)
    extendOwn_default(result2, props);
  return result2;
}
var init_create = __esm({
  "../node_modules/underscore/modules/create.js"() {
    init_baseCreate();
    init_extendOwn();
  }
});

// ../node_modules/underscore/modules/clone.js
function clone(obj) {
  if (!isObject(obj))
    return obj;
  return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
}
var init_clone = __esm({
  "../node_modules/underscore/modules/clone.js"() {
    init_isObject();
    init_isArray();
    init_extend();
  }
});

// ../node_modules/underscore/modules/tap.js
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
var init_tap = __esm({
  "../node_modules/underscore/modules/tap.js"() {
  }
});

// ../node_modules/underscore/modules/toPath.js
function toPath(path2) {
  return isArray_default(path2) ? path2 : [path2];
}
var init_toPath = __esm({
  "../node_modules/underscore/modules/toPath.js"() {
    init_underscore();
    init_isArray();
    _.toPath = toPath;
  }
});

// ../node_modules/underscore/modules/_toPath.js
function toPath2(path2) {
  return _.toPath(path2);
}
var init_toPath2 = __esm({
  "../node_modules/underscore/modules/_toPath.js"() {
    init_underscore();
    init_toPath();
  }
});

// ../node_modules/underscore/modules/_deepGet.js
function deepGet(obj, path2) {
  var length = path2.length;
  for (var i = 0; i < length; i++) {
    if (obj == null)
      return void 0;
    obj = obj[path2[i]];
  }
  return length ? obj : void 0;
}
var init_deepGet = __esm({
  "../node_modules/underscore/modules/_deepGet.js"() {
  }
});

// ../node_modules/underscore/modules/get.js
function get(object2, path2, defaultValue) {
  var value = deepGet(object2, toPath2(path2));
  return isUndefined(value) ? defaultValue : value;
}
var init_get = __esm({
  "../node_modules/underscore/modules/get.js"() {
    init_toPath2();
    init_deepGet();
    init_isUndefined();
  }
});

// ../node_modules/underscore/modules/has.js
function has2(obj, path2) {
  path2 = toPath2(path2);
  var length = path2.length;
  for (var i = 0; i < length; i++) {
    var key = path2[i];
    if (!has(obj, key))
      return false;
    obj = obj[key];
  }
  return !!length;
}
var init_has2 = __esm({
  "../node_modules/underscore/modules/has.js"() {
    init_has();
    init_toPath2();
  }
});

// ../node_modules/underscore/modules/identity.js
function identity(value) {
  return value;
}
var init_identity = __esm({
  "../node_modules/underscore/modules/identity.js"() {
  }
});

// ../node_modules/underscore/modules/matcher.js
function matcher(attrs) {
  attrs = extendOwn_default({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}
var init_matcher = __esm({
  "../node_modules/underscore/modules/matcher.js"() {
    init_extendOwn();
    init_isMatch();
  }
});

// ../node_modules/underscore/modules/property.js
function property(path2) {
  path2 = toPath2(path2);
  return function(obj) {
    return deepGet(obj, path2);
  };
}
var init_property = __esm({
  "../node_modules/underscore/modules/property.js"() {
    init_deepGet();
    init_toPath2();
  }
});

// ../node_modules/underscore/modules/_optimizeCb.js
function optimizeCb(func, context, argCount) {
  if (context === void 0)
    return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function(value) {
        return func.call(context, value);
      };
    case 3:
      return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
var init_optimizeCb = __esm({
  "../node_modules/underscore/modules/_optimizeCb.js"() {
  }
});

// ../node_modules/underscore/modules/_baseIteratee.js
function baseIteratee(value, context, argCount) {
  if (value == null)
    return identity;
  if (isFunction_default(value))
    return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray_default(value))
    return matcher(value);
  return property(value);
}
var init_baseIteratee = __esm({
  "../node_modules/underscore/modules/_baseIteratee.js"() {
    init_identity();
    init_isFunction();
    init_isObject();
    init_isArray();
    init_matcher();
    init_property();
    init_optimizeCb();
  }
});

// ../node_modules/underscore/modules/iteratee.js
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
var init_iteratee = __esm({
  "../node_modules/underscore/modules/iteratee.js"() {
    init_underscore();
    init_baseIteratee();
    _.iteratee = iteratee;
  }
});

// ../node_modules/underscore/modules/_cb.js
function cb(value, context, argCount) {
  if (_.iteratee !== iteratee)
    return _.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}
var init_cb = __esm({
  "../node_modules/underscore/modules/_cb.js"() {
    init_underscore();
    init_baseIteratee();
    init_iteratee();
  }
});

// ../node_modules/underscore/modules/mapObject.js
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length = _keys.length, results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_mapObject = __esm({
  "../node_modules/underscore/modules/mapObject.js"() {
    init_cb();
    init_keys();
  }
});

// ../node_modules/underscore/modules/noop.js
function noop() {
}
var init_noop = __esm({
  "../node_modules/underscore/modules/noop.js"() {
  }
});

// ../node_modules/underscore/modules/propertyOf.js
function propertyOf(obj) {
  if (obj == null)
    return noop;
  return function(path2) {
    return get(obj, path2);
  };
}
var init_propertyOf = __esm({
  "../node_modules/underscore/modules/propertyOf.js"() {
    init_noop();
    init_get();
  }
});

// ../node_modules/underscore/modules/times.js
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i = 0; i < n; i++)
    accum[i] = iteratee2(i);
  return accum;
}
var init_times = __esm({
  "../node_modules/underscore/modules/times.js"() {
    init_optimizeCb();
  }
});

// ../node_modules/underscore/modules/random.js
function random(min2, max2) {
  if (max2 == null) {
    max2 = min2;
    min2 = 0;
  }
  return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
}
var init_random = __esm({
  "../node_modules/underscore/modules/random.js"() {
  }
});

// ../node_modules/underscore/modules/now.js
var now_default;
var init_now = __esm({
  "../node_modules/underscore/modules/now.js"() {
    now_default = Date.now || function() {
      return new Date().getTime();
    };
  }
});

// ../node_modules/underscore/modules/_createEscaper.js
function createEscaper(map2) {
  var escaper = function(match) {
    return map2[match];
  };
  var source = "(?:" + keys(map2).join("|") + ")";
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, "g");
  return function(string) {
    string = string == null ? "" : "" + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var init_createEscaper = __esm({
  "../node_modules/underscore/modules/_createEscaper.js"() {
    init_keys();
  }
});

// ../node_modules/underscore/modules/_escapeMap.js
var escapeMap_default;
var init_escapeMap = __esm({
  "../node_modules/underscore/modules/_escapeMap.js"() {
    escapeMap_default = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
  }
});

// ../node_modules/underscore/modules/escape.js
var escape_default;
var init_escape = __esm({
  "../node_modules/underscore/modules/escape.js"() {
    init_createEscaper();
    init_escapeMap();
    escape_default = createEscaper(escapeMap_default);
  }
});

// ../node_modules/underscore/modules/_unescapeMap.js
var unescapeMap_default;
var init_unescapeMap = __esm({
  "../node_modules/underscore/modules/_unescapeMap.js"() {
    init_invert();
    init_escapeMap();
    unescapeMap_default = invert(escapeMap_default);
  }
});

// ../node_modules/underscore/modules/unescape.js
var unescape_default;
var init_unescape = __esm({
  "../node_modules/underscore/modules/unescape.js"() {
    init_createEscaper();
    init_unescapeMap();
    unescape_default = createEscaper(unescapeMap_default);
  }
});

// ../node_modules/underscore/modules/templateSettings.js
var templateSettings_default;
var init_templateSettings = __esm({
  "../node_modules/underscore/modules/templateSettings.js"() {
    init_underscore();
    templateSettings_default = _.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
  }
});

// ../node_modules/underscore/modules/template.js
function escapeChar(match) {
  return "\\" + escapes[match];
}
function template(text, settings, oldSettings) {
  if (!settings && oldSettings)
    settings = oldSettings;
  settings = defaults_default({}, settings, _.templateSettings);
  var matcher2 = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join("|") + "|$", "g");
  var index = 0;
  var source = "__p+='";
  text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;
    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    return match;
  });
  source += "';\n";
  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument))
      throw new Error(
        "variable is not a bare identifier: " + argument
      );
  } else {
    source = "with(obj||{}){\n" + source + "}\n";
    argument = "obj";
  }
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
  var render;
  try {
    render = new Function(argument, "_", source);
  } catch (e) {
    e.source = source;
    throw e;
  }
  var template2 = function(data) {
    return render.call(this, data, _);
  };
  template2.source = "function(" + argument + "){\n" + source + "}";
  return template2;
}
var noMatch, escapes, escapeRegExp, bareIdentifier;
var init_template = __esm({
  "../node_modules/underscore/modules/template.js"() {
    init_defaults();
    init_underscore();
    init_templateSettings();
    noMatch = /(.)^/;
    escapes = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    bareIdentifier = /^\s*(\w|\$)+\s*$/;
  }
});

// ../node_modules/underscore/modules/result.js
function result(obj, path2, fallback) {
  path2 = toPath2(path2);
  var length = path2.length;
  if (!length) {
    return isFunction_default(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path2[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length;
    }
    obj = isFunction_default(prop) ? prop.call(obj) : prop;
  }
  return obj;
}
var init_result = __esm({
  "../node_modules/underscore/modules/result.js"() {
    init_isFunction();
    init_toPath2();
  }
});

// ../node_modules/underscore/modules/uniqueId.js
function uniqueId(prefix) {
  var id = ++idCounter + "";
  return prefix ? prefix + id : id;
}
var idCounter;
var init_uniqueId = __esm({
  "../node_modules/underscore/modules/uniqueId.js"() {
    idCounter = 0;
  }
});

// ../node_modules/underscore/modules/chain.js
function chain(obj) {
  var instance = _(obj);
  instance._chain = true;
  return instance;
}
var init_chain = __esm({
  "../node_modules/underscore/modules/chain.js"() {
    init_underscore();
  }
});

// ../node_modules/underscore/modules/_executeBound.js
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context, args);
  var self2 = baseCreate(sourceFunc.prototype);
  var result2 = sourceFunc.apply(self2, args);
  if (isObject(result2))
    return result2;
  return self2;
}
var init_executeBound = __esm({
  "../node_modules/underscore/modules/_executeBound.js"() {
    init_baseCreate();
    init_isObject();
  }
});

// ../node_modules/underscore/modules/partial.js
var partial, partial_default;
var init_partial = __esm({
  "../node_modules/underscore/modules/partial.js"() {
    init_restArguments();
    init_executeBound();
    init_underscore();
    partial = restArguments(function(func, boundArgs) {
      var placeholder = partial.placeholder;
      var bound = function() {
        var position = 0, length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length)
          args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      };
      return bound;
    });
    partial.placeholder = _;
    partial_default = partial;
  }
});

// ../node_modules/underscore/modules/bind.js
var bind_default;
var init_bind = __esm({
  "../node_modules/underscore/modules/bind.js"() {
    init_restArguments();
    init_isFunction();
    init_executeBound();
    bind_default = restArguments(function(func, context, args) {
      if (!isFunction_default(func))
        throw new TypeError("Bind must be called on a function");
      var bound = restArguments(function(callArgs) {
        return executeBound(func, bound, context, this, args.concat(callArgs));
      });
      return bound;
    });
  }
});

// ../node_modules/underscore/modules/_isArrayLike.js
var isArrayLike_default;
var init_isArrayLike = __esm({
  "../node_modules/underscore/modules/_isArrayLike.js"() {
    init_createSizePropertyCheck();
    init_getLength();
    isArrayLike_default = createSizePropertyCheck(getLength_default);
  }
});

// ../node_modules/underscore/modules/_flatten.js
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = getLength_default(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len)
          output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}
var init_flatten = __esm({
  "../node_modules/underscore/modules/_flatten.js"() {
    init_getLength();
    init_isArrayLike();
    init_isArray();
    init_isArguments();
  }
});

// ../node_modules/underscore/modules/bindAll.js
var bindAll_default;
var init_bindAll = __esm({
  "../node_modules/underscore/modules/bindAll.js"() {
    init_restArguments();
    init_flatten();
    init_bind();
    bindAll_default = restArguments(function(obj, keys2) {
      keys2 = flatten(keys2, false, false);
      var index = keys2.length;
      if (index < 1)
        throw new Error("bindAll must be passed function names");
      while (index--) {
        var key = keys2[index];
        obj[key] = bind_default(obj[key], obj);
      }
      return obj;
    });
  }
});

// ../node_modules/underscore/modules/memoize.js
function memoize(func, hasher) {
  var memoize2 = function(key) {
    var cache = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has(cache, address))
      cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize2.cache = {};
  return memoize2;
}
var init_memoize = __esm({
  "../node_modules/underscore/modules/memoize.js"() {
    init_has();
  }
});

// ../node_modules/underscore/modules/delay.js
var delay_default;
var init_delay = __esm({
  "../node_modules/underscore/modules/delay.js"() {
    init_restArguments();
    delay_default = restArguments(function(func, wait, args) {
      return setTimeout(function() {
        return func.apply(null, args);
      }, wait);
    });
  }
});

// ../node_modules/underscore/modules/defer.js
var defer_default;
var init_defer = __esm({
  "../node_modules/underscore/modules/defer.js"() {
    init_partial();
    init_delay();
    init_underscore();
    defer_default = partial_default(delay_default, _, 1);
  }
});

// ../node_modules/underscore/modules/throttle.js
function throttle(func, wait, options) {
  var timeout, context, args, result2;
  var previous = 0;
  if (!options)
    options = {};
  var later = function() {
    previous = options.leading === false ? 0 : now_default();
    timeout = null;
    result2 = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  var throttled = function() {
    var _now = now_default();
    if (!previous && options.leading === false)
      previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result2;
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
var init_throttle = __esm({
  "../node_modules/underscore/modules/throttle.js"() {
    init_now();
  }
});

// ../node_modules/underscore/modules/debounce.js
function debounce(func, wait, immediate) {
  var timeout, previous, args, result2, context;
  var later = function() {
    var passed = now_default() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate)
        result2 = func.apply(context, args);
      if (!timeout)
        args = context = null;
    }
  };
  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now_default();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate)
        result2 = func.apply(context, args);
    }
    return result2;
  });
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
}
var init_debounce = __esm({
  "../node_modules/underscore/modules/debounce.js"() {
    init_restArguments();
    init_now();
  }
});

// ../node_modules/underscore/modules/wrap.js
function wrap(func, wrapper) {
  return partial_default(wrapper, func);
}
var init_wrap = __esm({
  "../node_modules/underscore/modules/wrap.js"() {
    init_partial();
  }
});

// ../node_modules/underscore/modules/negate.js
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
var init_negate = __esm({
  "../node_modules/underscore/modules/negate.js"() {
  }
});

// ../node_modules/underscore/modules/compose.js
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result2 = args[start].apply(this, arguments);
    while (i--)
      result2 = args[i].call(this, result2);
    return result2;
  };
}
var init_compose = __esm({
  "../node_modules/underscore/modules/compose.js"() {
  }
});

// ../node_modules/underscore/modules/after.js
function after(times2, func) {
  return function() {
    if (--times2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
var init_after = __esm({
  "../node_modules/underscore/modules/after.js"() {
  }
});

// ../node_modules/underscore/modules/before.js
function before(times2, func) {
  var memo;
  return function() {
    if (--times2 > 0) {
      memo = func.apply(this, arguments);
    }
    if (times2 <= 1)
      func = null;
    return memo;
  };
}
var init_before = __esm({
  "../node_modules/underscore/modules/before.js"() {
  }
});

// ../node_modules/underscore/modules/once.js
var once_default;
var init_once = __esm({
  "../node_modules/underscore/modules/once.js"() {
    init_partial();
    init_before();
    once_default = partial_default(before, 2);
  }
});

// ../node_modules/underscore/modules/findKey.js
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj))
      return key;
  }
}
var init_findKey = __esm({
  "../node_modules/underscore/modules/findKey.js"() {
    init_cb();
    init_keys();
  }
});

// ../node_modules/underscore/modules/_createPredicateIndexFinder.js
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength_default(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array))
        return index;
    }
    return -1;
  };
}
var init_createPredicateIndexFinder = __esm({
  "../node_modules/underscore/modules/_createPredicateIndexFinder.js"() {
    init_cb();
    init_getLength();
  }
});

// ../node_modules/underscore/modules/findIndex.js
var findIndex_default;
var init_findIndex = __esm({
  "../node_modules/underscore/modules/findIndex.js"() {
    init_createPredicateIndexFinder();
    findIndex_default = createPredicateIndexFinder(1);
  }
});

// ../node_modules/underscore/modules/findLastIndex.js
var findLastIndex_default;
var init_findLastIndex = __esm({
  "../node_modules/underscore/modules/findLastIndex.js"() {
    init_createPredicateIndexFinder();
    findLastIndex_default = createPredicateIndexFinder(-1);
  }
});

// ../node_modules/underscore/modules/sortedIndex.js
function sortedIndex(array, obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context, 1);
  var value = iteratee2(obj);
  var low = 0, high = getLength_default(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value)
      low = mid + 1;
    else
      high = mid;
  }
  return low;
}
var init_sortedIndex = __esm({
  "../node_modules/underscore/modules/sortedIndex.js"() {
    init_cb();
    init_getLength();
  }
});

// ../node_modules/underscore/modules/_createIndexFinder.js
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i = 0, length = getLength_default(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex2 && idx && length) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN2);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item)
        return idx;
    }
    return -1;
  };
}
var init_createIndexFinder = __esm({
  "../node_modules/underscore/modules/_createIndexFinder.js"() {
    init_getLength();
    init_setup();
    init_isNaN();
  }
});

// ../node_modules/underscore/modules/indexOf.js
var indexOf_default;
var init_indexOf = __esm({
  "../node_modules/underscore/modules/indexOf.js"() {
    init_sortedIndex();
    init_findIndex();
    init_createIndexFinder();
    indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);
  }
});

// ../node_modules/underscore/modules/lastIndexOf.js
var lastIndexOf_default;
var init_lastIndexOf = __esm({
  "../node_modules/underscore/modules/lastIndexOf.js"() {
    init_findLastIndex();
    init_createIndexFinder();
    lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);
  }
});

// ../node_modules/underscore/modules/find.js
function find(obj, predicate, context) {
  var keyFinder = isArrayLike_default(obj) ? findIndex_default : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1)
    return obj[key];
}
var init_find = __esm({
  "../node_modules/underscore/modules/find.js"() {
    init_isArrayLike();
    init_findIndex();
    init_findKey();
  }
});

// ../node_modules/underscore/modules/findWhere.js
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
var init_findWhere = __esm({
  "../node_modules/underscore/modules/findWhere.js"() {
    init_find();
    init_matcher();
  }
});

// ../node_modules/underscore/modules/each.js
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i, length;
  if (isArrayLike_default(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee2(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee2(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
var init_each = __esm({
  "../node_modules/underscore/modules/each.js"() {
    init_optimizeCb();
    init_isArrayLike();
    init_keys();
  }
});

// ../node_modules/underscore/modules/map.js
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_map = __esm({
  "../node_modules/underscore/modules/map.js"() {
    init_cb();
    init_isArrayLike();
    init_keys();
  }
});

// ../node_modules/underscore/modules/_createReduce.js
function createReduce(dir) {
  var reducer = function(obj, iteratee2, memo, initial2) {
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
    if (!initial2) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee2(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };
  return function(obj, iteratee2, memo, context) {
    var initial2 = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial2);
  };
}
var init_createReduce = __esm({
  "../node_modules/underscore/modules/_createReduce.js"() {
    init_isArrayLike();
    init_keys();
    init_optimizeCb();
  }
});

// ../node_modules/underscore/modules/reduce.js
var reduce_default;
var init_reduce = __esm({
  "../node_modules/underscore/modules/reduce.js"() {
    init_createReduce();
    reduce_default = createReduce(1);
  }
});

// ../node_modules/underscore/modules/reduceRight.js
var reduceRight_default;
var init_reduceRight = __esm({
  "../node_modules/underscore/modules/reduceRight.js"() {
    init_createReduce();
    reduceRight_default = createReduce(-1);
  }
});

// ../node_modules/underscore/modules/filter.js
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list))
      results.push(value);
  });
  return results;
}
var init_filter = __esm({
  "../node_modules/underscore/modules/filter.js"() {
    init_cb();
    init_each();
  }
});

// ../node_modules/underscore/modules/reject.js
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}
var init_reject = __esm({
  "../node_modules/underscore/modules/reject.js"() {
    init_filter();
    init_negate();
    init_cb();
  }
});

// ../node_modules/underscore/modules/every.js
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj))
      return false;
  }
  return true;
}
var init_every = __esm({
  "../node_modules/underscore/modules/every.js"() {
    init_cb();
    init_isArrayLike();
    init_keys();
  }
});

// ../node_modules/underscore/modules/some.js
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj))
      return true;
  }
  return false;
}
var init_some = __esm({
  "../node_modules/underscore/modules/some.js"() {
    init_cb();
    init_isArrayLike();
    init_keys();
  }
});

// ../node_modules/underscore/modules/contains.js
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike_default(obj))
    obj = values(obj);
  if (typeof fromIndex != "number" || guard)
    fromIndex = 0;
  return indexOf_default(obj, item, fromIndex) >= 0;
}
var init_contains = __esm({
  "../node_modules/underscore/modules/contains.js"() {
    init_isArrayLike();
    init_values();
    init_indexOf();
  }
});

// ../node_modules/underscore/modules/invoke.js
var invoke_default;
var init_invoke = __esm({
  "../node_modules/underscore/modules/invoke.js"() {
    init_restArguments();
    init_isFunction();
    init_map();
    init_deepGet();
    init_toPath2();
    invoke_default = restArguments(function(obj, path2, args) {
      var contextPath, func;
      if (isFunction_default(path2)) {
        func = path2;
      } else {
        path2 = toPath2(path2);
        contextPath = path2.slice(0, -1);
        path2 = path2[path2.length - 1];
      }
      return map(obj, function(context) {
        var method = func;
        if (!method) {
          if (contextPath && contextPath.length) {
            context = deepGet(context, contextPath);
          }
          if (context == null)
            return void 0;
          method = context[path2];
        }
        return method == null ? method : method.apply(context, args);
      });
    });
  }
});

// ../node_modules/underscore/modules/pluck.js
function pluck(obj, key) {
  return map(obj, property(key));
}
var init_pluck = __esm({
  "../node_modules/underscore/modules/pluck.js"() {
    init_map();
    init_property();
  }
});

// ../node_modules/underscore/modules/where.js
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}
var init_where = __esm({
  "../node_modules/underscore/modules/where.js"() {
    init_filter();
    init_matcher();
  }
});

// ../node_modules/underscore/modules/max.js
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_max = __esm({
  "../node_modules/underscore/modules/max.js"() {
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
  }
});

// ../node_modules/underscore/modules/min.js
function min(obj, iteratee2, context) {
  var result2 = Infinity, lastComputed = Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_min = __esm({
  "../node_modules/underscore/modules/min.js"() {
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
  }
});

// ../node_modules/underscore/modules/toArray.js
function toArray(obj) {
  if (!obj)
    return [];
  if (isArray_default(obj))
    return slice.call(obj);
  if (isString_default(obj)) {
    return obj.match(reStrSymbol);
  }
  if (isArrayLike_default(obj))
    return map(obj, identity);
  return values(obj);
}
var reStrSymbol;
var init_toArray = __esm({
  "../node_modules/underscore/modules/toArray.js"() {
    init_isArray();
    init_setup();
    init_isString();
    init_isArrayLike();
    init_map();
    init_identity();
    init_values();
    reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  }
});

// ../node_modules/underscore/modules/sample.js
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike_default(obj))
      obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample2 = toArray(obj);
  var length = getLength_default(sample2);
  n = Math.max(Math.min(n, length), 0);
  var last2 = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last2);
    var temp = sample2[index];
    sample2[index] = sample2[rand];
    sample2[rand] = temp;
  }
  return sample2.slice(0, n);
}
var init_sample = __esm({
  "../node_modules/underscore/modules/sample.js"() {
    init_isArrayLike();
    init_values();
    init_getLength();
    init_random();
    init_toArray();
  }
});

// ../node_modules/underscore/modules/shuffle.js
function shuffle(obj) {
  return sample(obj, Infinity);
}
var init_shuffle = __esm({
  "../node_modules/underscore/modules/shuffle.js"() {
    init_sample();
  }
});

// ../node_modules/underscore/modules/sortBy.js
function sortBy(obj, iteratee2, context) {
  var index = 0;
  iteratee2 = cb(iteratee2, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee2(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0)
        return 1;
      if (a < b || b === void 0)
        return -1;
    }
    return left.index - right.index;
  }), "value");
}
var init_sortBy = __esm({
  "../node_modules/underscore/modules/sortBy.js"() {
    init_cb();
    init_pluck();
    init_map();
  }
});

// ../node_modules/underscore/modules/_group.js
function group(behavior, partition) {
  return function(obj, iteratee2, context) {
    var result2 = partition ? [[], []] : {};
    iteratee2 = cb(iteratee2, context);
    each(obj, function(value, index) {
      var key = iteratee2(value, index, obj);
      behavior(result2, value, key);
    });
    return result2;
  };
}
var init_group = __esm({
  "../node_modules/underscore/modules/_group.js"() {
    init_cb();
    init_each();
  }
});

// ../node_modules/underscore/modules/groupBy.js
var groupBy_default;
var init_groupBy = __esm({
  "../node_modules/underscore/modules/groupBy.js"() {
    init_group();
    init_has();
    groupBy_default = group(function(result2, value, key) {
      if (has(result2, key))
        result2[key].push(value);
      else
        result2[key] = [value];
    });
  }
});

// ../node_modules/underscore/modules/indexBy.js
var indexBy_default;
var init_indexBy = __esm({
  "../node_modules/underscore/modules/indexBy.js"() {
    init_group();
    indexBy_default = group(function(result2, value, key) {
      result2[key] = value;
    });
  }
});

// ../node_modules/underscore/modules/countBy.js
var countBy_default;
var init_countBy = __esm({
  "../node_modules/underscore/modules/countBy.js"() {
    init_group();
    init_has();
    countBy_default = group(function(result2, value, key) {
      if (has(result2, key))
        result2[key]++;
      else
        result2[key] = 1;
    });
  }
});

// ../node_modules/underscore/modules/partition.js
var partition_default;
var init_partition = __esm({
  "../node_modules/underscore/modules/partition.js"() {
    init_group();
    partition_default = group(function(result2, value, pass) {
      result2[pass ? 0 : 1].push(value);
    }, true);
  }
});

// ../node_modules/underscore/modules/size.js
function size(obj) {
  if (obj == null)
    return 0;
  return isArrayLike_default(obj) ? obj.length : keys(obj).length;
}
var init_size = __esm({
  "../node_modules/underscore/modules/size.js"() {
    init_isArrayLike();
    init_keys();
  }
});

// ../node_modules/underscore/modules/_keyInObj.js
function keyInObj(value, key, obj) {
  return key in obj;
}
var init_keyInObj = __esm({
  "../node_modules/underscore/modules/_keyInObj.js"() {
  }
});

// ../node_modules/underscore/modules/pick.js
var pick_default;
var init_pick = __esm({
  "../node_modules/underscore/modules/pick.js"() {
    init_restArguments();
    init_isFunction();
    init_optimizeCb();
    init_allKeys();
    init_keyInObj();
    init_flatten();
    pick_default = restArguments(function(obj, keys2) {
      var result2 = {}, iteratee2 = keys2[0];
      if (obj == null)
        return result2;
      if (isFunction_default(iteratee2)) {
        if (keys2.length > 1)
          iteratee2 = optimizeCb(iteratee2, keys2[1]);
        keys2 = allKeys(obj);
      } else {
        iteratee2 = keyInObj;
        keys2 = flatten(keys2, false, false);
        obj = Object(obj);
      }
      for (var i = 0, length = keys2.length; i < length; i++) {
        var key = keys2[i];
        var value = obj[key];
        if (iteratee2(value, key, obj))
          result2[key] = value;
      }
      return result2;
    });
  }
});

// ../node_modules/underscore/modules/omit.js
var omit_default;
var init_omit = __esm({
  "../node_modules/underscore/modules/omit.js"() {
    init_restArguments();
    init_isFunction();
    init_negate();
    init_map();
    init_flatten();
    init_contains();
    init_pick();
    omit_default = restArguments(function(obj, keys2) {
      var iteratee2 = keys2[0], context;
      if (isFunction_default(iteratee2)) {
        iteratee2 = negate(iteratee2);
        if (keys2.length > 1)
          context = keys2[1];
      } else {
        keys2 = map(flatten(keys2, false, false), String);
        iteratee2 = function(value, key) {
          return !contains(keys2, key);
        };
      }
      return pick_default(obj, iteratee2, context);
    });
  }
});

// ../node_modules/underscore/modules/initial.js
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
var init_initial = __esm({
  "../node_modules/underscore/modules/initial.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/first.js
function first(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[0];
  return initial(array, array.length - n);
}
var init_first = __esm({
  "../node_modules/underscore/modules/first.js"() {
    init_initial();
  }
});

// ../node_modules/underscore/modules/rest.js
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}
var init_rest = __esm({
  "../node_modules/underscore/modules/rest.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/last.js
function last(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}
var init_last = __esm({
  "../node_modules/underscore/modules/last.js"() {
    init_rest();
  }
});

// ../node_modules/underscore/modules/compact.js
function compact(array) {
  return filter(array, Boolean);
}
var init_compact = __esm({
  "../node_modules/underscore/modules/compact.js"() {
    init_filter();
  }
});

// ../node_modules/underscore/modules/flatten.js
function flatten2(array, depth) {
  return flatten(array, depth, false);
}
var init_flatten2 = __esm({
  "../node_modules/underscore/modules/flatten.js"() {
    init_flatten();
  }
});

// ../node_modules/underscore/modules/difference.js
var difference_default;
var init_difference = __esm({
  "../node_modules/underscore/modules/difference.js"() {
    init_restArguments();
    init_flatten();
    init_filter();
    init_contains();
    difference_default = restArguments(function(array, rest2) {
      rest2 = flatten(rest2, true, true);
      return filter(array, function(value) {
        return !contains(rest2, value);
      });
    });
  }
});

// ../node_modules/underscore/modules/without.js
var without_default;
var init_without = __esm({
  "../node_modules/underscore/modules/without.js"() {
    init_restArguments();
    init_difference();
    without_default = restArguments(function(array, otherArrays) {
      return difference_default(array, otherArrays);
    });
  }
});

// ../node_modules/underscore/modules/uniq.js
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null)
    iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
    if (isSorted && !iteratee2) {
      if (!i || seen !== computed)
        result2.push(value);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value);
      }
    } else if (!contains(result2, value)) {
      result2.push(value);
    }
  }
  return result2;
}
var init_uniq = __esm({
  "../node_modules/underscore/modules/uniq.js"() {
    init_isBoolean();
    init_cb();
    init_getLength();
    init_contains();
  }
});

// ../node_modules/underscore/modules/union.js
var union_default;
var init_union = __esm({
  "../node_modules/underscore/modules/union.js"() {
    init_restArguments();
    init_uniq();
    init_flatten();
    union_default = restArguments(function(arrays) {
      return uniq(flatten(arrays, true, true));
    });
  }
});

// ../node_modules/underscore/modules/intersection.js
function intersection(array) {
  var result2 = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var item = array[i];
    if (contains(result2, item))
      continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item))
        break;
    }
    if (j === argsLength)
      result2.push(item);
  }
  return result2;
}
var init_intersection = __esm({
  "../node_modules/underscore/modules/intersection.js"() {
    init_getLength();
    init_contains();
  }
});

// ../node_modules/underscore/modules/unzip.js
function unzip(array) {
  var length = array && max(array, getLength_default).length || 0;
  var result2 = Array(length);
  for (var index = 0; index < length; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
var init_unzip = __esm({
  "../node_modules/underscore/modules/unzip.js"() {
    init_max();
    init_getLength();
    init_pluck();
  }
});

// ../node_modules/underscore/modules/zip.js
var zip_default;
var init_zip = __esm({
  "../node_modules/underscore/modules/zip.js"() {
    init_restArguments();
    init_unzip();
    zip_default = restArguments(unzip);
  }
});

// ../node_modules/underscore/modules/object.js
function object(list, values2) {
  var result2 = {};
  for (var i = 0, length = getLength_default(list); i < length; i++) {
    if (values2) {
      result2[list[i]] = values2[i];
    } else {
      result2[list[i][0]] = list[i][1];
    }
  }
  return result2;
}
var init_object = __esm({
  "../node_modules/underscore/modules/object.js"() {
    init_getLength();
  }
});

// ../node_modules/underscore/modules/range.js
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length);
  for (var idx = 0; idx < length; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
var init_range = __esm({
  "../node_modules/underscore/modules/range.js"() {
  }
});

// ../node_modules/underscore/modules/chunk.js
function chunk(array, count) {
  if (count == null || count < 1)
    return [];
  var result2 = [];
  var i = 0, length = array.length;
  while (i < length) {
    result2.push(slice.call(array, i, i += count));
  }
  return result2;
}
var init_chunk = __esm({
  "../node_modules/underscore/modules/chunk.js"() {
    init_setup();
  }
});

// ../node_modules/underscore/modules/_chainResult.js
function chainResult(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
}
var init_chainResult = __esm({
  "../node_modules/underscore/modules/_chainResult.js"() {
    init_underscore();
  }
});

// ../node_modules/underscore/modules/mixin.js
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
}
var init_mixin = __esm({
  "../node_modules/underscore/modules/mixin.js"() {
    init_underscore();
    init_each();
    init_functions();
    init_setup();
    init_chainResult();
  }
});

// ../node_modules/underscore/modules/underscore-array-methods.js
var underscore_array_methods_default;
var init_underscore_array_methods = __esm({
  "../node_modules/underscore/modules/underscore-array-methods.js"() {
    init_underscore();
    init_each();
    init_setup();
    init_chainResult();
    each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null) {
          method.apply(obj, arguments);
          if ((name === "shift" || name === "splice") && obj.length === 0) {
            delete obj[0];
          }
        }
        return chainResult(this, obj);
      };
    });
    each(["concat", "join", "slice"], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null)
          obj = method.apply(obj, arguments);
        return chainResult(this, obj);
      };
    });
    underscore_array_methods_default = _;
  }
});

// ../node_modules/underscore/modules/index.js
var modules_exports = {};
__export(modules_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => underscore_array_methods_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_modules = __esm({
  "../node_modules/underscore/modules/index.js"() {
    init_setup();
    init_restArguments();
    init_isObject();
    init_isNull();
    init_isUndefined();
    init_isBoolean();
    init_isElement();
    init_isString();
    init_isNumber();
    init_isDate();
    init_isRegExp();
    init_isError();
    init_isSymbol();
    init_isArrayBuffer();
    init_isDataView();
    init_isArray();
    init_isFunction();
    init_isArguments();
    init_isFinite();
    init_isNaN();
    init_isTypedArray();
    init_isEmpty();
    init_isMatch();
    init_isEqual();
    init_isMap();
    init_isWeakMap();
    init_isSet();
    init_isWeakSet();
    init_keys();
    init_allKeys();
    init_values();
    init_pairs();
    init_invert();
    init_functions();
    init_extend();
    init_extendOwn();
    init_defaults();
    init_create();
    init_clone();
    init_tap();
    init_get();
    init_has2();
    init_mapObject();
    init_identity();
    init_constant();
    init_noop();
    init_toPath();
    init_property();
    init_propertyOf();
    init_matcher();
    init_times();
    init_random();
    init_now();
    init_escape();
    init_unescape();
    init_templateSettings();
    init_template();
    init_result();
    init_uniqueId();
    init_chain();
    init_iteratee();
    init_partial();
    init_bind();
    init_bindAll();
    init_memoize();
    init_delay();
    init_defer();
    init_throttle();
    init_debounce();
    init_wrap();
    init_negate();
    init_compose();
    init_after();
    init_before();
    init_once();
    init_findKey();
    init_findIndex();
    init_findLastIndex();
    init_sortedIndex();
    init_indexOf();
    init_lastIndexOf();
    init_find();
    init_findWhere();
    init_each();
    init_map();
    init_reduce();
    init_reduceRight();
    init_filter();
    init_reject();
    init_every();
    init_some();
    init_contains();
    init_invoke();
    init_pluck();
    init_where();
    init_max();
    init_min();
    init_shuffle();
    init_sample();
    init_sortBy();
    init_groupBy();
    init_indexBy();
    init_countBy();
    init_partition();
    init_toArray();
    init_size();
    init_pick();
    init_omit();
    init_first();
    init_initial();
    init_last();
    init_rest();
    init_compact();
    init_flatten2();
    init_without();
    init_uniq();
    init_union();
    init_intersection();
    init_difference();
    init_unzip();
    init_zip();
    init_object();
    init_range();
    init_chunk();
    init_mixin();
    init_underscore_array_methods();
  }
});

// ../node_modules/underscore/modules/index-default.js
var _2, index_default_default;
var init_index_default = __esm({
  "../node_modules/underscore/modules/index-default.js"() {
    init_modules();
    init_modules();
    _2 = mixin(modules_exports);
    _2._ = _2;
    index_default_default = _2;
  }
});

// ../node_modules/underscore/modules/index-all.js
var index_all_exports = {};
__export(index_all_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => index_default_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_index_all = __esm({
  "../node_modules/underscore/modules/index-all.js"() {
    init_index_default();
    init_modules();
  }
});

// ../node_modules/underscore-plus/lib/underscore-plus.js
var require_underscore_plus = __commonJS({
  "../node_modules/underscore-plus/lib/underscore-plus.js"(exports, module2) {
    (function() {
      var isEqual2, isPlainObject, macModifierKeyMap, nonMacModifierKeyMap, plus, shiftKeyMap, splitKeyPath, _3, __slice = [].slice;
      _3 = (init_index_all(), __toCommonJS(index_all_exports));
      macModifierKeyMap = {
        cmd: "\u2318",
        ctrl: "\u2303",
        alt: "\u2325",
        option: "\u2325",
        shift: "\u21E7",
        enter: "\u23CE",
        left: "\u2190",
        right: "\u2192",
        up: "\u2191",
        down: "\u2193"
      };
      nonMacModifierKeyMap = {
        cmd: "Cmd",
        ctrl: "Ctrl",
        alt: "Alt",
        option: "Alt",
        shift: "Shift",
        enter: "Enter",
        left: "Left",
        right: "Right",
        up: "Up",
        down: "Down"
      };
      shiftKeyMap = {
        "~": "`",
        "_": "-",
        "+": "=",
        "|": "\\",
        "{": "[",
        "}": "]",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/"
      };
      splitKeyPath = function(keyPath) {
        var char, i, keyPathArray, startIndex, _i, _len;
        startIndex = 0;
        keyPathArray = [];
        if (keyPath == null) {
          return keyPathArray;
        }
        for (i = _i = 0, _len = keyPath.length; _i < _len; i = ++_i) {
          char = keyPath[i];
          if (char === "." && (i === 0 || keyPath[i - 1] !== "\\")) {
            keyPathArray.push(keyPath.substring(startIndex, i));
            startIndex = i + 1;
          }
        }
        keyPathArray.push(keyPath.substr(startIndex, keyPath.length));
        return keyPathArray;
      };
      isPlainObject = function(value) {
        return _3.isObject(value) && !_3.isArray(value);
      };
      plus = {
        adviseBefore: function(object2, methodName, advice) {
          var original;
          original = object2[methodName];
          return object2[methodName] = function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            if (advice.apply(this, args) !== false) {
              return original.apply(this, args);
            }
          };
        },
        camelize: function(string) {
          if (string) {
            return string.replace(/[_-]+(\w)/g, function(m) {
              return m[1].toUpperCase();
            });
          } else {
            return "";
          }
        },
        capitalize: function(word) {
          if (!word) {
            return "";
          }
          if (word.toLowerCase() === "github") {
            return "GitHub";
          } else {
            return word[0].toUpperCase() + word.slice(1);
          }
        },
        compactObject: function(object2) {
          var key, newObject, value;
          newObject = {};
          for (key in object2) {
            value = object2[key];
            if (value != null) {
              newObject[key] = value;
            }
          }
          return newObject;
        },
        dasherize: function(string) {
          if (!string) {
            return "";
          }
          string = string[0].toLowerCase() + string.slice(1);
          return string.replace(/([A-Z])|(_)/g, function(m, letter) {
            if (letter) {
              return "-" + letter.toLowerCase();
            } else {
              return "-";
            }
          });
        },
        deepClone: function(object2) {
          if (_3.isArray(object2)) {
            return object2.map(function(value) {
              return plus.deepClone(value);
            });
          } else if (_3.isObject(object2) && !_3.isFunction(object2)) {
            return plus.mapObject(object2, function(_this) {
              return function(key, value) {
                return [key, plus.deepClone(value)];
              };
            }(this));
          } else {
            return object2;
          }
        },
        deepExtend: function(target) {
          var i, key, object2, result2, _i, _len, _ref;
          result2 = target;
          i = 0;
          while (++i < arguments.length) {
            object2 = arguments[i];
            if (isPlainObject(result2) && isPlainObject(object2)) {
              _ref = Object.keys(object2);
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                key = _ref[_i];
                result2[key] = plus.deepExtend(result2[key], object2[key]);
              }
            } else {
              result2 = plus.deepClone(object2);
            }
          }
          return result2;
        },
        deepContains: function(array, target) {
          var object2, _i, _len;
          if (array == null) {
            return false;
          }
          for (_i = 0, _len = array.length; _i < _len; _i++) {
            object2 = array[_i];
            if (_3.isEqual(object2, target)) {
              return true;
            }
          }
          return false;
        },
        endsWith: function(string, suffix) {
          if (suffix == null) {
            suffix = "";
          }
          if (string) {
            return string.indexOf(suffix, string.length - suffix.length) !== -1;
          } else {
            return false;
          }
        },
        escapeAttribute: function(string) {
          if (string) {
            return string.replace(/"/g, "&quot;").replace(/\n/g, "").replace(/\\/g, "-");
          } else {
            return "";
          }
        },
        escapeRegExp: function(string) {
          if (string) {
            return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          } else {
            return "";
          }
        },
        humanizeEventName: function(eventName, eventDoc) {
          var event, namespace, namespaceDoc, _ref;
          _ref = eventName.split(":"), namespace = _ref[0], event = _ref[1];
          if (event == null) {
            return plus.undasherize(namespace);
          }
          namespaceDoc = plus.undasherize(namespace);
          if (eventDoc == null) {
            eventDoc = plus.undasherize(event);
          }
          return "" + namespaceDoc + ": " + eventDoc;
        },
        humanizeKey: function(key, platform) {
          var modifierKeyMap;
          if (platform == null) {
            platform = process.platform;
          }
          if (!key) {
            return key;
          }
          modifierKeyMap = platform === "darwin" ? macModifierKeyMap : nonMacModifierKeyMap;
          if (modifierKeyMap[key]) {
            return modifierKeyMap[key];
          } else if (key.length === 1 && shiftKeyMap[key] != null) {
            return [modifierKeyMap.shift, shiftKeyMap[key]];
          } else if (key.length === 1 && key === key.toUpperCase() && key.toUpperCase() !== key.toLowerCase()) {
            return [modifierKeyMap.shift, key.toUpperCase()];
          } else if (key.length === 1 || /f[0-9]{1,2}/.test(key)) {
            return key.toUpperCase();
          } else {
            if (platform === "darwin") {
              return key;
            } else {
              return plus.capitalize(key);
            }
          }
        },
        humanizeKeystroke: function(keystroke, platform) {
          var humanizedKeystrokes, index, key, keys2, keystrokes, splitKeystroke, _i, _j, _len, _len1;
          if (platform == null) {
            platform = process.platform;
          }
          if (!keystroke) {
            return keystroke;
          }
          keystrokes = keystroke.split(" ");
          humanizedKeystrokes = [];
          for (_i = 0, _len = keystrokes.length; _i < _len; _i++) {
            keystroke = keystrokes[_i];
            keys2 = [];
            splitKeystroke = keystroke.split("-");
            for (index = _j = 0, _len1 = splitKeystroke.length; _j < _len1; index = ++_j) {
              key = splitKeystroke[index];
              if (key === "" && splitKeystroke[index - 1] === "") {
                key = "-";
              }
              if (key) {
                keys2.push(plus.humanizeKey(key, platform));
              }
            }
            keys2 = _3.uniq(_3.flatten(keys2));
            if (platform === "darwin") {
              keys2 = keys2.join("");
            } else {
              keys2 = keys2.join("+");
            }
            humanizedKeystrokes.push(keys2);
          }
          return humanizedKeystrokes.join(" ");
        },
        isSubset: function(potentialSubset, potentialSuperset) {
          return _3.every(potentialSubset, function(element) {
            return _3.include(potentialSuperset, element);
          });
        },
        losslessInvert: function(hash) {
          var inverted, key, value;
          inverted = {};
          for (key in hash) {
            value = hash[key];
            if (inverted[value] == null) {
              inverted[value] = [];
            }
            inverted[value].push(key);
          }
          return inverted;
        },
        mapObject: function(object2, iterator) {
          var key, newObject, value, _i, _len, _ref, _ref1;
          newObject = {};
          _ref = Object.keys(object2);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            key = _ref[_i];
            _ref1 = iterator(key, object2[key]), key = _ref1[0], value = _ref1[1];
            newObject[key] = value;
          }
          return newObject;
        },
        multiplyString: function(string, n) {
          var finalString, i;
          finalString = "";
          i = 0;
          while (i < n) {
            finalString += string;
            i++;
          }
          return finalString;
        },
        pluralize: function(count, singular, plural) {
          if (count == null) {
            count = 0;
          }
          if (plural == null) {
            plural = singular + "s";
          }
          if (count === 1) {
            return "" + count + " " + singular;
          } else {
            return "" + count + " " + plural;
          }
        },
        remove: function(array, element) {
          var index;
          index = array.indexOf(element);
          if (index >= 0) {
            array.splice(index, 1);
          }
          return array;
        },
        setValueForKeyPath: function(object2, keyPath, value) {
          var key, keys2;
          keys2 = splitKeyPath(keyPath);
          while (keys2.length > 1) {
            key = keys2.shift();
            if (object2[key] == null) {
              object2[key] = {};
            }
            object2 = object2[key];
          }
          if (value != null) {
            return object2[keys2.shift()] = value;
          } else {
            return delete object2[keys2.shift()];
          }
        },
        hasKeyPath: function(object2, keyPath) {
          var key, keys2, _i, _len;
          keys2 = splitKeyPath(keyPath);
          for (_i = 0, _len = keys2.length; _i < _len; _i++) {
            key = keys2[_i];
            if (!object2.hasOwnProperty(key)) {
              return false;
            }
            object2 = object2[key];
          }
          return true;
        },
        spliceWithArray: function(originalArray, start, length, insertedArray, chunkSize) {
          var chunkStart, _i, _ref, _results;
          if (chunkSize == null) {
            chunkSize = 1e5;
          }
          if (insertedArray.length < chunkSize) {
            return originalArray.splice.apply(originalArray, [start, length].concat(__slice.call(insertedArray)));
          } else {
            originalArray.splice(start, length);
            _results = [];
            for (chunkStart = _i = 0, _ref = insertedArray.length; chunkSize > 0 ? _i <= _ref : _i >= _ref; chunkStart = _i += chunkSize) {
              _results.push(originalArray.splice.apply(originalArray, [start + chunkStart, 0].concat(__slice.call(insertedArray.slice(chunkStart, chunkStart + chunkSize)))));
            }
            return _results;
          }
        },
        sum: function(array) {
          var elt, sum, _i, _len;
          sum = 0;
          for (_i = 0, _len = array.length; _i < _len; _i++) {
            elt = array[_i];
            sum += elt;
          }
          return sum;
        },
        uncamelcase: function(string) {
          var result2;
          if (!string) {
            return "";
          }
          result2 = string.replace(/([A-Z])|_+/g, function(match, letter) {
            if (letter == null) {
              letter = "";
            }
            return " " + letter;
          });
          return plus.capitalize(result2.trim());
        },
        undasherize: function(string) {
          if (string) {
            return string.split("-").map(plus.capitalize).join(" ");
          } else {
            return "";
          }
        },
        underscore: function(string) {
          if (!string) {
            return "";
          }
          string = string[0].toLowerCase() + string.slice(1);
          return string.replace(/([A-Z])|-+/g, function(match, letter) {
            if (letter == null) {
              letter = "";
            }
            return "_" + letter.toLowerCase();
          });
        },
        valueForKeyPath: function(object2, keyPath) {
          var key, keys2, _i, _len;
          keys2 = splitKeyPath(keyPath);
          for (_i = 0, _len = keys2.length; _i < _len; _i++) {
            key = keys2[_i];
            object2 = object2[key];
            if (object2 == null) {
              return;
            }
          }
          return object2;
        },
        isEqual: function(a, b, aStack, bStack) {
          if (_3.isArray(aStack) && _3.isArray(bStack)) {
            return isEqual2(a, b, aStack, bStack);
          } else {
            return isEqual2(a, b);
          }
        },
        isEqualForProperties: function() {
          var a, b, properties, property2, _i, _len;
          a = arguments[0], b = arguments[1], properties = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
          for (_i = 0, _len = properties.length; _i < _len; _i++) {
            property2 = properties[_i];
            if (!_3.isEqual(a[property2], b[property2])) {
              return false;
            }
          }
          return true;
        }
      };
      isEqual2 = function(a, b, aStack, bStack) {
        var aCtor, aCtorValid, aElement, aKeyCount, aValue, bCtor, bCtorValid, bKeyCount, bValue, equal, i, key, stackIndex, _i, _len;
        if (aStack == null) {
          aStack = [];
        }
        if (bStack == null) {
          bStack = [];
        }
        if (a === b) {
          return _3.isEqual(a, b);
        }
        if (_3.isFunction(a) || _3.isFunction(b)) {
          return _3.isEqual(a, b);
        }
        stackIndex = aStack.length;
        while (stackIndex--) {
          if (aStack[stackIndex] === a) {
            return bStack[stackIndex] === b;
          }
        }
        aStack.push(a);
        bStack.push(b);
        equal = false;
        if (_3.isFunction(a != null ? a.isEqual : void 0)) {
          equal = a.isEqual(b, aStack, bStack);
        } else if (_3.isFunction(b != null ? b.isEqual : void 0)) {
          equal = b.isEqual(a, bStack, aStack);
        } else if (_3.isArray(a) && _3.isArray(b) && a.length === b.length) {
          equal = true;
          for (i = _i = 0, _len = a.length; _i < _len; i = ++_i) {
            aElement = a[i];
            if (!isEqual2(aElement, b[i], aStack, bStack)) {
              equal = false;
              break;
            }
          }
        } else if (_3.isRegExp(a) && _3.isRegExp(b)) {
          equal = _3.isEqual(a, b);
        } else if (_3.isElement(a) && _3.isElement(b)) {
          equal = a === b;
        } else if (_3.isObject(a) && _3.isObject(b)) {
          aCtor = a.constructor;
          bCtor = b.constructor;
          aCtorValid = _3.isFunction(aCtor) && aCtor instanceof aCtor;
          bCtorValid = _3.isFunction(bCtor) && bCtor instanceof bCtor;
          if (aCtor !== bCtor && !(aCtorValid && bCtorValid)) {
            equal = false;
          } else {
            aKeyCount = 0;
            equal = true;
            for (key in a) {
              aValue = a[key];
              if (!_3.has(a, key)) {
                continue;
              }
              aKeyCount++;
              if (!(_3.has(b, key) && isEqual2(aValue, b[key], aStack, bStack))) {
                equal = false;
                break;
              }
            }
            if (equal) {
              bKeyCount = 0;
              for (key in b) {
                bValue = b[key];
                if (_3.has(b, key)) {
                  bKeyCount++;
                }
              }
              equal = aKeyCount === bKeyCount;
            }
          }
        } else {
          equal = _3.isEqual(a, b);
        }
        aStack.pop();
        bStack.pop();
        return equal;
      };
      module2.exports = _3.extend({}, _3, plus);
    }).call(exports);
  }
});

// ../node_modules/async/lib/async.js
var require_async = __commonJS({
  "../node_modules/async/lib/async.js"(exports, module2) {
    (function() {
      var async = {};
      function noop2() {
      }
      function identity2(v) {
        return v;
      }
      function toBool(v) {
        return !!v;
      }
      function notId(v) {
        return !v;
      }
      var previous_async;
      var root2 = typeof self === "object" && self.self === self && self || typeof global === "object" && global.global === global && global || this;
      if (root2 != null) {
        previous_async = root2.async;
      }
      async.noConflict = function() {
        root2.async = previous_async;
        return async;
      };
      function only_once(fn) {
        return function() {
          if (fn === null)
            throw new Error("Callback was already called.");
          fn.apply(this, arguments);
          fn = null;
        };
      }
      function _once(fn) {
        return function() {
          if (fn === null)
            return;
          fn.apply(this, arguments);
          fn = null;
        };
      }
      var _toString = Object.prototype.toString;
      var _isArray = Array.isArray || function(obj) {
        return _toString.call(obj) === "[object Array]";
      };
      var _isObject = function(obj) {
        var type = typeof obj;
        return type === "function" || type === "object" && !!obj;
      };
      function _isArrayLike(arr) {
        return _isArray(arr) || // has a positive integer length property
        typeof arr.length === "number" && arr.length >= 0 && arr.length % 1 === 0;
      }
      function _arrayEach(arr, iterator) {
        var index = -1, length = arr.length;
        while (++index < length) {
          iterator(arr[index], index, arr);
        }
      }
      function _map(arr, iterator) {
        var index = -1, length = arr.length, result2 = Array(length);
        while (++index < length) {
          result2[index] = iterator(arr[index], index, arr);
        }
        return result2;
      }
      function _range(count) {
        return _map(Array(count), function(v, i) {
          return i;
        });
      }
      function _reduce(arr, iterator, memo) {
        _arrayEach(arr, function(x, i, a) {
          memo = iterator(memo, x, i, a);
        });
        return memo;
      }
      function _forEachOf(object2, iterator) {
        _arrayEach(_keys(object2), function(key) {
          iterator(object2[key], key);
        });
      }
      function _indexOf(arr, item) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item)
            return i;
        }
        return -1;
      }
      var _keys = Object.keys || function(obj) {
        var keys2 = [];
        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            keys2.push(k);
          }
        }
        return keys2;
      };
      function _keyIterator(coll) {
        var i = -1;
        var len;
        var keys2;
        if (_isArrayLike(coll)) {
          len = coll.length;
          return function next() {
            i++;
            return i < len ? i : null;
          };
        } else {
          keys2 = _keys(coll);
          len = keys2.length;
          return function next() {
            i++;
            return i < len ? keys2[i] : null;
          };
        }
      }
      function _restParam(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function() {
          var length = Math.max(arguments.length - startIndex, 0);
          var rest2 = Array(length);
          for (var index = 0; index < length; index++) {
            rest2[index] = arguments[index + startIndex];
          }
          switch (startIndex) {
            case 0:
              return func.call(this, rest2);
            case 1:
              return func.call(this, arguments[0], rest2);
          }
        };
      }
      function _withoutIndex(iterator) {
        return function(value, index, callback) {
          return iterator(value, callback);
        };
      }
      var _setImmediate = typeof setImmediate === "function" && setImmediate;
      var _delay = _setImmediate ? function(fn) {
        _setImmediate(fn);
      } : function(fn) {
        setTimeout(fn, 0);
      };
      if (typeof process === "object" && typeof process.nextTick === "function") {
        async.nextTick = process.nextTick;
      } else {
        async.nextTick = _delay;
      }
      async.setImmediate = _setImmediate ? _delay : async.nextTick;
      async.forEach = async.each = function(arr, iterator, callback) {
        return async.eachOf(arr, _withoutIndex(iterator), callback);
      };
      async.forEachSeries = async.eachSeries = function(arr, iterator, callback) {
        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
      };
      async.forEachLimit = async.eachLimit = function(arr, limit, iterator, callback) {
        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
      };
      async.forEachOf = async.eachOf = function(object2, iterator, callback) {
        callback = _once(callback || noop2);
        object2 = object2 || [];
        var iter = _keyIterator(object2);
        var key, completed = 0;
        while ((key = iter()) != null) {
          completed += 1;
          iterator(object2[key], key, only_once(done));
        }
        if (completed === 0)
          callback(null);
        function done(err) {
          completed--;
          if (err) {
            callback(err);
          } else if (key === null && completed <= 0) {
            callback(null);
          }
        }
      };
      async.forEachOfSeries = async.eachOfSeries = function(obj, iterator, callback) {
        callback = _once(callback || noop2);
        obj = obj || [];
        var nextKey = _keyIterator(obj);
        var key = nextKey();
        function iterate() {
          var sync = true;
          if (key === null) {
            return callback(null);
          }
          iterator(obj[key], key, only_once(function(err) {
            if (err) {
              callback(err);
            } else {
              key = nextKey();
              if (key === null) {
                return callback(null);
              } else {
                if (sync) {
                  async.setImmediate(iterate);
                } else {
                  iterate();
                }
              }
            }
          }));
          sync = false;
        }
        iterate();
      };
      async.forEachOfLimit = async.eachOfLimit = function(obj, limit, iterator, callback) {
        _eachOfLimit(limit)(obj, iterator, callback);
      };
      function _eachOfLimit(limit) {
        return function(obj, iterator, callback) {
          callback = _once(callback || noop2);
          obj = obj || [];
          var nextKey = _keyIterator(obj);
          if (limit <= 0) {
            return callback(null);
          }
          var done = false;
          var running = 0;
          var errored = false;
          (function replenish() {
            if (done && running <= 0) {
              return callback(null);
            }
            while (running < limit && !errored) {
              var key = nextKey();
              if (key === null) {
                done = true;
                if (running <= 0) {
                  callback(null);
                }
                return;
              }
              running += 1;
              iterator(obj[key], key, only_once(function(err) {
                running -= 1;
                if (err) {
                  callback(err);
                  errored = true;
                } else {
                  replenish();
                }
              }));
            }
          })();
        };
      }
      function doParallel(fn) {
        return function(obj, iterator, callback) {
          return fn(async.eachOf, obj, iterator, callback);
        };
      }
      function doParallelLimit(fn) {
        return function(obj, limit, iterator, callback) {
          return fn(_eachOfLimit(limit), obj, iterator, callback);
        };
      }
      function doSeries(fn) {
        return function(obj, iterator, callback) {
          return fn(async.eachOfSeries, obj, iterator, callback);
        };
      }
      function _asyncMap(eachfn, arr, iterator, callback) {
        callback = _once(callback || noop2);
        arr = arr || [];
        var results = _isArrayLike(arr) ? [] : {};
        eachfn(arr, function(value, index, callback2) {
          iterator(value, function(err, v) {
            results[index] = v;
            callback2(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
      async.map = doParallel(_asyncMap);
      async.mapSeries = doSeries(_asyncMap);
      async.mapLimit = doParallelLimit(_asyncMap);
      async.inject = async.foldl = async.reduce = function(arr, memo, iterator, callback) {
        async.eachOfSeries(arr, function(x, i, callback2) {
          iterator(memo, x, function(err, v) {
            memo = v;
            callback2(err);
          });
        }, function(err) {
          callback(err, memo);
        });
      };
      async.foldr = async.reduceRight = function(arr, memo, iterator, callback) {
        var reversed = _map(arr, identity2).reverse();
        async.reduce(reversed, memo, iterator, callback);
      };
      async.transform = function(arr, memo, iterator, callback) {
        if (arguments.length === 3) {
          callback = iterator;
          iterator = memo;
          memo = _isArray(arr) ? [] : {};
        }
        async.eachOf(arr, function(v, k, cb2) {
          iterator(memo, v, k, cb2);
        }, function(err) {
          callback(err, memo);
        });
      };
      function _filter(eachfn, arr, iterator, callback) {
        var results = [];
        eachfn(arr, function(x, index, callback2) {
          iterator(x, function(v) {
            if (v) {
              results.push({ index, value: x });
            }
            callback2();
          });
        }, function() {
          callback(_map(results.sort(function(a, b) {
            return a.index - b.index;
          }), function(x) {
            return x.value;
          }));
        });
      }
      async.select = async.filter = doParallel(_filter);
      async.selectLimit = async.filterLimit = doParallelLimit(_filter);
      async.selectSeries = async.filterSeries = doSeries(_filter);
      function _reject(eachfn, arr, iterator, callback) {
        _filter(eachfn, arr, function(value, cb2) {
          iterator(value, function(v) {
            cb2(!v);
          });
        }, callback);
      }
      async.reject = doParallel(_reject);
      async.rejectLimit = doParallelLimit(_reject);
      async.rejectSeries = doSeries(_reject);
      function _createTester(eachfn, check, getResult) {
        return function(arr, limit, iterator, cb2) {
          function done() {
            if (cb2)
              cb2(getResult(false, void 0));
          }
          function iteratee2(x, _3, callback) {
            if (!cb2)
              return callback();
            iterator(x, function(v) {
              if (cb2 && check(v)) {
                cb2(getResult(true, x));
                cb2 = iterator = false;
              }
              callback();
            });
          }
          if (arguments.length > 3) {
            eachfn(arr, limit, iteratee2, done);
          } else {
            cb2 = iterator;
            iterator = limit;
            eachfn(arr, iteratee2, done);
          }
        };
      }
      async.any = async.some = _createTester(async.eachOf, toBool, identity2);
      async.someLimit = _createTester(async.eachOfLimit, toBool, identity2);
      async.all = async.every = _createTester(async.eachOf, notId, notId);
      async.everyLimit = _createTester(async.eachOfLimit, notId, notId);
      function _findGetResult(v, x) {
        return x;
      }
      async.detect = _createTester(async.eachOf, identity2, _findGetResult);
      async.detectSeries = _createTester(async.eachOfSeries, identity2, _findGetResult);
      async.detectLimit = _createTester(async.eachOfLimit, identity2, _findGetResult);
      async.sortBy = function(arr, iterator, callback) {
        async.map(arr, function(x, callback2) {
          iterator(x, function(err, criteria) {
            if (err) {
              callback2(err);
            } else {
              callback2(null, { value: x, criteria });
            }
          });
        }, function(err, results) {
          if (err) {
            return callback(err);
          } else {
            callback(null, _map(results.sort(comparator), function(x) {
              return x.value;
            }));
          }
        });
        function comparator(left, right) {
          var a = left.criteria, b = right.criteria;
          return a < b ? -1 : a > b ? 1 : 0;
        }
      };
      async.auto = function(tasks, concurrency, callback) {
        if (typeof arguments[1] === "function") {
          callback = concurrency;
          concurrency = null;
        }
        callback = _once(callback || noop2);
        var keys2 = _keys(tasks);
        var remainingTasks = keys2.length;
        if (!remainingTasks) {
          return callback(null);
        }
        if (!concurrency) {
          concurrency = remainingTasks;
        }
        var results = {};
        var runningTasks = 0;
        var hasError = false;
        var listeners = [];
        function addListener(fn) {
          listeners.unshift(fn);
        }
        function removeListener(fn) {
          var idx = _indexOf(listeners, fn);
          if (idx >= 0)
            listeners.splice(idx, 1);
        }
        function taskComplete() {
          remainingTasks--;
          _arrayEach(listeners.slice(0), function(fn) {
            fn();
          });
        }
        addListener(function() {
          if (!remainingTasks) {
            callback(null, results);
          }
        });
        _arrayEach(keys2, function(k) {
          if (hasError)
            return;
          var task = _isArray(tasks[k]) ? tasks[k] : [tasks[k]];
          var taskCallback = _restParam(function(err, args) {
            runningTasks--;
            if (args.length <= 1) {
              args = args[0];
            }
            if (err) {
              var safeResults = {};
              _forEachOf(results, function(val, rkey) {
                safeResults[rkey] = val;
              });
              safeResults[k] = args;
              hasError = true;
              callback(err, safeResults);
            } else {
              results[k] = args;
              async.setImmediate(taskComplete);
            }
          });
          var requires = task.slice(0, task.length - 1);
          var len = requires.length;
          var dep;
          while (len--) {
            if (!(dep = tasks[requires[len]])) {
              throw new Error("Has nonexistent dependency in " + requires.join(", "));
            }
            if (_isArray(dep) && _indexOf(dep, k) >= 0) {
              throw new Error("Has cyclic dependencies");
            }
          }
          function ready() {
            return runningTasks < concurrency && _reduce(requires, function(a, x) {
              return a && results.hasOwnProperty(x);
            }, true) && !results.hasOwnProperty(k);
          }
          if (ready()) {
            runningTasks++;
            task[task.length - 1](taskCallback, results);
          } else {
            addListener(listener);
          }
          function listener() {
            if (ready()) {
              runningTasks++;
              removeListener(listener);
              task[task.length - 1](taskCallback, results);
            }
          }
        });
      };
      async.retry = function(times2, task, callback) {
        var DEFAULT_TIMES = 5;
        var DEFAULT_INTERVAL = 0;
        var attempts = [];
        var opts = {
          times: DEFAULT_TIMES,
          interval: DEFAULT_INTERVAL
        };
        function parseTimes(acc, t) {
          if (typeof t === "number") {
            acc.times = parseInt(t, 10) || DEFAULT_TIMES;
          } else if (typeof t === "object") {
            acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
            acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
          } else {
            throw new Error("Unsupported argument type for 'times': " + typeof t);
          }
        }
        var length = arguments.length;
        if (length < 1 || length > 3) {
          throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
        } else if (length <= 2 && typeof times2 === "function") {
          callback = task;
          task = times2;
        }
        if (typeof times2 !== "function") {
          parseTimes(opts, times2);
        }
        opts.callback = callback;
        opts.task = task;
        function wrappedTask(wrappedCallback, wrappedResults) {
          function retryAttempt(task2, finalAttempt2) {
            return function(seriesCallback) {
              task2(function(err, result2) {
                seriesCallback(!err || finalAttempt2, { err, result: result2 });
              }, wrappedResults);
            };
          }
          function retryInterval(interval) {
            return function(seriesCallback) {
              setTimeout(function() {
                seriesCallback(null);
              }, interval);
            };
          }
          while (opts.times) {
            var finalAttempt = !(opts.times -= 1);
            attempts.push(retryAttempt(opts.task, finalAttempt));
            if (!finalAttempt && opts.interval > 0) {
              attempts.push(retryInterval(opts.interval));
            }
          }
          async.series(attempts, function(done, data) {
            data = data[data.length - 1];
            (wrappedCallback || opts.callback)(data.err, data.result);
          });
        }
        return opts.callback ? wrappedTask() : wrappedTask;
      };
      async.waterfall = function(tasks, callback) {
        callback = _once(callback || noop2);
        if (!_isArray(tasks)) {
          var err = new Error("First argument to waterfall must be an array of functions");
          return callback(err);
        }
        if (!tasks.length) {
          return callback();
        }
        function wrapIterator(iterator) {
          return _restParam(function(err2, args) {
            if (err2) {
              callback.apply(null, [err2].concat(args));
            } else {
              var next = iterator.next();
              if (next) {
                args.push(wrapIterator(next));
              } else {
                args.push(callback);
              }
              ensureAsync(iterator).apply(null, args);
            }
          });
        }
        wrapIterator(async.iterator(tasks))();
      };
      function _parallel(eachfn, tasks, callback) {
        callback = callback || noop2;
        var results = _isArrayLike(tasks) ? [] : {};
        eachfn(tasks, function(task, key, callback2) {
          task(_restParam(function(err, args) {
            if (args.length <= 1) {
              args = args[0];
            }
            results[key] = args;
            callback2(err);
          }));
        }, function(err) {
          callback(err, results);
        });
      }
      async.parallel = function(tasks, callback) {
        _parallel(async.eachOf, tasks, callback);
      };
      async.parallelLimit = function(tasks, limit, callback) {
        _parallel(_eachOfLimit(limit), tasks, callback);
      };
      async.series = function(tasks, callback) {
        _parallel(async.eachOfSeries, tasks, callback);
      };
      async.iterator = function(tasks) {
        function makeCallback(index) {
          function fn() {
            if (tasks.length) {
              tasks[index].apply(null, arguments);
            }
            return fn.next();
          }
          fn.next = function() {
            return index < tasks.length - 1 ? makeCallback(index + 1) : null;
          };
          return fn;
        }
        return makeCallback(0);
      };
      async.apply = _restParam(function(fn, args) {
        return _restParam(function(callArgs) {
          return fn.apply(
            null,
            args.concat(callArgs)
          );
        });
      });
      function _concat(eachfn, arr, fn, callback) {
        var result2 = [];
        eachfn(arr, function(x, index, cb2) {
          fn(x, function(err, y) {
            result2 = result2.concat(y || []);
            cb2(err);
          });
        }, function(err) {
          callback(err, result2);
        });
      }
      async.concat = doParallel(_concat);
      async.concatSeries = doSeries(_concat);
      async.whilst = function(test, iterator, callback) {
        callback = callback || noop2;
        if (test()) {
          var next = _restParam(function(err, args) {
            if (err) {
              callback(err);
            } else if (test.apply(this, args)) {
              iterator(next);
            } else {
              callback.apply(null, [null].concat(args));
            }
          });
          iterator(next);
        } else {
          callback(null);
        }
      };
      async.doWhilst = function(iterator, test, callback) {
        var calls = 0;
        return async.whilst(function() {
          return ++calls <= 1 || test.apply(this, arguments);
        }, iterator, callback);
      };
      async.until = function(test, iterator, callback) {
        return async.whilst(function() {
          return !test.apply(this, arguments);
        }, iterator, callback);
      };
      async.doUntil = function(iterator, test, callback) {
        return async.doWhilst(iterator, function() {
          return !test.apply(this, arguments);
        }, callback);
      };
      async.during = function(test, iterator, callback) {
        callback = callback || noop2;
        var next = _restParam(function(err, args) {
          if (err) {
            callback(err);
          } else {
            args.push(check);
            test.apply(this, args);
          }
        });
        var check = function(err, truth) {
          if (err) {
            callback(err);
          } else if (truth) {
            iterator(next);
          } else {
            callback(null);
          }
        };
        test(check);
      };
      async.doDuring = function(iterator, test, callback) {
        var calls = 0;
        async.during(function(next) {
          if (calls++ < 1) {
            next(null, true);
          } else {
            test.apply(this, arguments);
          }
        }, iterator, callback);
      };
      function _queue(worker, concurrency, payload) {
        if (concurrency == null) {
          concurrency = 1;
        } else if (concurrency === 0) {
          throw new Error("Concurrency must not be zero");
        }
        function _insert(q2, data, pos, callback) {
          if (callback != null && typeof callback !== "function") {
            throw new Error("task callback must be a function");
          }
          q2.started = true;
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length === 0 && q2.idle()) {
            return async.setImmediate(function() {
              q2.drain();
            });
          }
          _arrayEach(data, function(task) {
            var item = {
              data: task,
              callback: callback || noop2
            };
            if (pos) {
              q2.tasks.unshift(item);
            } else {
              q2.tasks.push(item);
            }
            if (q2.tasks.length === q2.concurrency) {
              q2.saturated();
            }
          });
          async.setImmediate(q2.process);
        }
        function _next(q2, tasks) {
          return function() {
            workers -= 1;
            var removed = false;
            var args = arguments;
            _arrayEach(tasks, function(task) {
              _arrayEach(workersList, function(worker2, index) {
                if (worker2 === task && !removed) {
                  workersList.splice(index, 1);
                  removed = true;
                }
              });
              task.callback.apply(task, args);
            });
            if (q2.tasks.length + workers === 0) {
              q2.drain();
            }
            q2.process();
          };
        }
        var workers = 0;
        var workersList = [];
        var q = {
          tasks: [],
          concurrency,
          payload,
          saturated: noop2,
          empty: noop2,
          drain: noop2,
          started: false,
          paused: false,
          push: function(data, callback) {
            _insert(q, data, false, callback);
          },
          kill: function() {
            q.drain = noop2;
            q.tasks = [];
          },
          unshift: function(data, callback) {
            _insert(q, data, true, callback);
          },
          process: function() {
            while (!q.paused && workers < q.concurrency && q.tasks.length) {
              var tasks = q.payload ? q.tasks.splice(0, q.payload) : q.tasks.splice(0, q.tasks.length);
              var data = _map(tasks, function(task) {
                return task.data;
              });
              if (q.tasks.length === 0) {
                q.empty();
              }
              workers += 1;
              workersList.push(tasks[0]);
              var cb2 = only_once(_next(q, tasks));
              worker(data, cb2);
            }
          },
          length: function() {
            return q.tasks.length;
          },
          running: function() {
            return workers;
          },
          workersList: function() {
            return workersList;
          },
          idle: function() {
            return q.tasks.length + workers === 0;
          },
          pause: function() {
            q.paused = true;
          },
          resume: function() {
            if (q.paused === false) {
              return;
            }
            q.paused = false;
            var resumeCount = Math.min(q.concurrency, q.tasks.length);
            for (var w = 1; w <= resumeCount; w++) {
              async.setImmediate(q.process);
            }
          }
        };
        return q;
      }
      async.queue = function(worker, concurrency) {
        var q = _queue(function(items, cb2) {
          worker(items[0], cb2);
        }, concurrency, 1);
        return q;
      };
      async.priorityQueue = function(worker, concurrency) {
        function _compareTasks(a, b) {
          return a.priority - b.priority;
        }
        function _binarySearch(sequence, item, compare) {
          var beg = -1, end = sequence.length - 1;
          while (beg < end) {
            var mid = beg + (end - beg + 1 >>> 1);
            if (compare(item, sequence[mid]) >= 0) {
              beg = mid;
            } else {
              end = mid - 1;
            }
          }
          return beg;
        }
        function _insert(q2, data, priority, callback) {
          if (callback != null && typeof callback !== "function") {
            throw new Error("task callback must be a function");
          }
          q2.started = true;
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length === 0) {
            return async.setImmediate(function() {
              q2.drain();
            });
          }
          _arrayEach(data, function(task) {
            var item = {
              data: task,
              priority,
              callback: typeof callback === "function" ? callback : noop2
            };
            q2.tasks.splice(_binarySearch(q2.tasks, item, _compareTasks) + 1, 0, item);
            if (q2.tasks.length === q2.concurrency) {
              q2.saturated();
            }
            async.setImmediate(q2.process);
          });
        }
        var q = async.queue(worker, concurrency);
        q.push = function(data, priority, callback) {
          _insert(q, data, priority, callback);
        };
        delete q.unshift;
        return q;
      };
      async.cargo = function(worker, payload) {
        return _queue(worker, 1, payload);
      };
      function _console_fn(name) {
        return _restParam(function(fn, args) {
          fn.apply(null, args.concat([_restParam(function(err, args2) {
            if (typeof console === "object") {
              if (err) {
                if (console.error) {
                  console.error(err);
                }
              } else if (console[name]) {
                _arrayEach(args2, function(x) {
                  console[name](x);
                });
              }
            }
          })]));
        });
      }
      async.log = _console_fn("log");
      async.dir = _console_fn("dir");
      async.memoize = function(fn, hasher) {
        var memo = {};
        var queues = {};
        var has3 = Object.prototype.hasOwnProperty;
        hasher = hasher || identity2;
        var memoized = _restParam(function memoized2(args) {
          var callback = args.pop();
          var key = hasher.apply(null, args);
          if (has3.call(memo, key)) {
            async.setImmediate(function() {
              callback.apply(null, memo[key]);
            });
          } else if (has3.call(queues, key)) {
            queues[key].push(callback);
          } else {
            queues[key] = [callback];
            fn.apply(null, args.concat([_restParam(function(args2) {
              memo[key] = args2;
              var q = queues[key];
              delete queues[key];
              for (var i = 0, l = q.length; i < l; i++) {
                q[i].apply(null, args2);
              }
            })]));
          }
        });
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
      };
      async.unmemoize = function(fn) {
        return function() {
          return (fn.unmemoized || fn).apply(null, arguments);
        };
      };
      function _times(mapper) {
        return function(count, iterator, callback) {
          mapper(_range(count), iterator, callback);
        };
      }
      async.times = _times(async.map);
      async.timesSeries = _times(async.mapSeries);
      async.timesLimit = function(count, limit, iterator, callback) {
        return async.mapLimit(_range(count), limit, iterator, callback);
      };
      async.seq = function() {
        var fns = arguments;
        return _restParam(function(args) {
          var that = this;
          var callback = args[args.length - 1];
          if (typeof callback == "function") {
            args.pop();
          } else {
            callback = noop2;
          }
          async.reduce(
            fns,
            args,
            function(newargs, fn, cb2) {
              fn.apply(that, newargs.concat([_restParam(function(err, nextargs) {
                cb2(err, nextargs);
              })]));
            },
            function(err, results) {
              callback.apply(that, [err].concat(results));
            }
          );
        });
      };
      async.compose = function() {
        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
      };
      function _applyEach(eachfn) {
        return _restParam(function(fns, args) {
          var go = _restParam(function(args2) {
            var that = this;
            var callback = args2.pop();
            return eachfn(
              fns,
              function(fn, _3, cb2) {
                fn.apply(that, args2.concat([cb2]));
              },
              callback
            );
          });
          if (args.length) {
            return go.apply(this, args);
          } else {
            return go;
          }
        });
      }
      async.applyEach = _applyEach(async.eachOf);
      async.applyEachSeries = _applyEach(async.eachOfSeries);
      async.forever = function(fn, callback) {
        var done = only_once(callback || noop2);
        var task = ensureAsync(fn);
        function next(err) {
          if (err) {
            return done(err);
          }
          task(next);
        }
        next();
      };
      function ensureAsync(fn) {
        return _restParam(function(args) {
          var callback = args.pop();
          args.push(function() {
            var innerArgs = arguments;
            if (sync) {
              async.setImmediate(function() {
                callback.apply(null, innerArgs);
              });
            } else {
              callback.apply(null, innerArgs);
            }
          });
          var sync = true;
          fn.apply(this, args);
          sync = false;
        });
      }
      async.ensureAsync = ensureAsync;
      async.constant = _restParam(function(values2) {
        var args = [null].concat(values2);
        return function(callback) {
          return callback.apply(this, args);
        };
      });
      async.wrapSync = async.asyncify = function asyncify(func) {
        return _restParam(function(args) {
          var callback = args.pop();
          var result2;
          try {
            result2 = func.apply(this, args);
          } catch (e) {
            return callback(e);
          }
          if (_isObject(result2) && typeof result2.then === "function") {
            result2.then(function(value) {
              callback(null, value);
            })["catch"](function(err) {
              callback(err.message ? err : new Error(err));
            });
          } else {
            callback(null, result2);
          }
        });
      };
      if (typeof module2 === "object" && module2.exports) {
        module2.exports = async;
      } else if (typeof define === "function" && define.amd) {
        define([], function() {
          return async;
        });
      } else {
        root2.async = async;
      }
    })();
  }
});

// ../node_modules/mkdirp/index.js
var require_mkdirp = __commonJS({
  "../node_modules/mkdirp/index.js"(exports, module2) {
    var path2 = require("path");
    var fs = require("fs");
    var _0777 = parseInt("0777", 8);
    module2.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
    function mkdirP(p, opts, f, made) {
      if (typeof opts === "function") {
        f = opts;
        opts = {};
      } else if (!opts || typeof opts !== "object") {
        opts = { mode: opts };
      }
      var mode = opts.mode;
      var xfs = opts.fs || fs;
      if (mode === void 0) {
        mode = _0777;
      }
      if (!made)
        made = null;
      var cb2 = f || /* istanbul ignore next */
      function() {
      };
      p = path2.resolve(p);
      xfs.mkdir(p, mode, function(er) {
        if (!er) {
          made = made || p;
          return cb2(null, made);
        }
        switch (er.code) {
          case "ENOENT":
            if (path2.dirname(p) === p)
              return cb2(er);
            mkdirP(path2.dirname(p), opts, function(er2, made2) {
              if (er2)
                cb2(er2, made2);
              else
                mkdirP(p, opts, cb2, made2);
            });
            break;
          default:
            xfs.stat(p, function(er2, stat) {
              if (er2 || !stat.isDirectory())
                cb2(er, made);
              else
                cb2(null, made);
            });
            break;
        }
      });
    }
    mkdirP.sync = function sync(p, opts, made) {
      if (!opts || typeof opts !== "object") {
        opts = { mode: opts };
      }
      var mode = opts.mode;
      var xfs = opts.fs || fs;
      if (mode === void 0) {
        mode = _0777;
      }
      if (!made)
        made = null;
      p = path2.resolve(p);
      try {
        xfs.mkdirSync(p, mode);
        made = made || p;
      } catch (err0) {
        switch (err0.code) {
          case "ENOENT":
            made = sync(path2.dirname(p), opts, made);
            sync(p, opts, made);
            break;
          default:
            var stat;
            try {
              stat = xfs.statSync(p);
            } catch (err1) {
              throw err0;
            }
            if (!stat.isDirectory())
              throw err0;
            break;
        }
      }
      return made;
    };
  }
});

// ../node_modules/fs.realpath/old.js
var require_old = __commonJS({
  "../node_modules/fs.realpath/old.js"(exports) {
    var pathModule = require("path");
    var isWindows = process.platform === "win32";
    var fs = require("fs");
    var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function rethrow() {
      var callback;
      if (DEBUG) {
        var backtrace = new Error();
        callback = debugCallback;
      } else
        callback = missingCallback;
      return callback;
      function debugCallback(err) {
        if (err) {
          backtrace.message = err.message;
          err = backtrace;
          missingCallback(err);
        }
      }
      function missingCallback(err) {
        if (err) {
          if (process.throwDeprecation)
            throw err;
          else if (!process.noDeprecation) {
            var msg = "fs: missing callback " + (err.stack || err.message);
            if (process.traceDeprecation)
              console.trace(msg);
            else
              console.error(msg);
          }
        }
      }
    }
    function maybeCallback(cb2) {
      return typeof cb2 === "function" ? cb2 : rethrow();
    }
    var normalize = pathModule.normalize;
    if (isWindows) {
      nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }
    var nextPartRe;
    if (isWindows) {
      splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      splitRootRe = /^[\/]*/;
    }
    var splitRootRe;
    exports.realpathSync = function realpathSync(p, cache) {
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return cache[p];
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs.lstatSync(base);
          knownHard[base] = true;
        }
      }
      while (pos < p.length) {
        nextPartRe.lastIndex = pos;
        var result2 = nextPartRe.exec(p);
        previous = current;
        current += result2[0];
        base = previous + result2[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          continue;
        }
        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          resolvedLink = cache[base];
        } else {
          var stat = fs.lstatSync(base);
          if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache)
              cache[base] = base;
            continue;
          }
          var linkTarget = null;
          if (!isWindows) {
            var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) {
              linkTarget = seenLinks[id];
            }
          }
          if (linkTarget === null) {
            fs.statSync(base);
            linkTarget = fs.readlinkSync(base);
          }
          resolvedLink = pathModule.resolve(previous, linkTarget);
          if (cache)
            cache[base] = resolvedLink;
          if (!isWindows)
            seenLinks[id] = linkTarget;
        }
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
      if (cache)
        cache[original] = p;
      return p;
    };
    exports.realpath = function realpath(p, cache, cb2) {
      if (typeof cb2 !== "function") {
        cb2 = maybeCallback(cache);
        cache = null;
      }
      p = pathModule.resolve(p);
      if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
        return process.nextTick(cb2.bind(null, null, cache[p]));
      }
      var original = p, seenLinks = {}, knownHard = {};
      var pos;
      var current;
      var base;
      var previous;
      start();
      function start() {
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        if (isWindows && !knownHard[base]) {
          fs.lstat(base, function(err) {
            if (err)
              return cb2(err);
            knownHard[base] = true;
            LOOP();
          });
        } else {
          process.nextTick(LOOP);
        }
      }
      function LOOP() {
        if (pos >= p.length) {
          if (cache)
            cache[original] = p;
          return cb2(null, p);
        }
        nextPartRe.lastIndex = pos;
        var result2 = nextPartRe.exec(p);
        previous = current;
        current += result2[0];
        base = previous + result2[1];
        pos = nextPartRe.lastIndex;
        if (knownHard[base] || cache && cache[base] === base) {
          return process.nextTick(LOOP);
        }
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
          return gotResolvedLink(cache[base]);
        }
        return fs.lstat(base, gotStat);
      }
      function gotStat(err, stat) {
        if (err)
          return cb2(err);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache)
            cache[base] = base;
          return process.nextTick(LOOP);
        }
        if (!isWindows) {
          var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            return gotTarget(null, seenLinks[id], base);
          }
        }
        fs.stat(base, function(err2) {
          if (err2)
            return cb2(err2);
          fs.readlink(base, function(err3, target) {
            if (!isWindows)
              seenLinks[id] = target;
            gotTarget(err3, target);
          });
        });
      }
      function gotTarget(err, target, base2) {
        if (err)
          return cb2(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache)
          cache[base2] = resolvedLink;
        gotResolvedLink(resolvedLink);
      }
      function gotResolvedLink(resolvedLink) {
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
      }
    };
  }
});

// ../node_modules/fs.realpath/index.js
var require_fs = __commonJS({
  "../node_modules/fs.realpath/index.js"(exports, module2) {
    module2.exports = realpath;
    realpath.realpath = realpath;
    realpath.sync = realpathSync;
    realpath.realpathSync = realpathSync;
    realpath.monkeypatch = monkeypatch;
    realpath.unmonkeypatch = unmonkeypatch;
    var fs = require("fs");
    var origRealpath = fs.realpath;
    var origRealpathSync = fs.realpathSync;
    var version = process.version;
    var ok = /^v[0-5]\./.test(version);
    var old = require_old();
    function newError(er) {
      return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
    }
    function realpath(p, cache, cb2) {
      if (ok) {
        return origRealpath(p, cache, cb2);
      }
      if (typeof cache === "function") {
        cb2 = cache;
        cache = null;
      }
      origRealpath(p, cache, function(er, result2) {
        if (newError(er)) {
          old.realpath(p, cache, cb2);
        } else {
          cb2(er, result2);
        }
      });
    }
    function realpathSync(p, cache) {
      if (ok) {
        return origRealpathSync(p, cache);
      }
      try {
        return origRealpathSync(p, cache);
      } catch (er) {
        if (newError(er)) {
          return old.realpathSync(p, cache);
        } else {
          throw er;
        }
      }
    }
    function monkeypatch() {
      fs.realpath = realpath;
      fs.realpathSync = realpathSync;
    }
    function unmonkeypatch() {
      fs.realpath = origRealpath;
      fs.realpathSync = origRealpathSync;
    }
  }
});

// ../node_modules/concat-map/index.js
var require_concat_map = __commonJS({
  "../node_modules/concat-map/index.js"(exports, module2) {
    module2.exports = function(xs, fn) {
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x))
          res.push.apply(res, x);
        else
          res.push(x);
      }
      return res;
    };
    var isArray = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
  }
});

// ../node_modules/balanced-match/index.js
var require_balanced_match = __commonJS({
  "../node_modules/balanced-match/index.js"(exports, module2) {
    "use strict";
    module2.exports = balanced;
    function balanced(a, b, str) {
      if (a instanceof RegExp)
        a = maybeMatch(a, str);
      if (b instanceof RegExp)
        b = maybeMatch(b, str);
      var r = range2(a, b, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
      };
    }
    function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
    }
    balanced.range = range2;
    function range2(a, b, str) {
      var begs, beg, left, right, result2;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result2) {
          if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
          } else if (begs.length == 1) {
            result2 = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b, i + 1);
          }
          i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result2 = [left, right];
        }
      }
      return result2;
    }
  }
});

// ../node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS({
  "../node_modules/brace-expansion/index.js"(exports, module2) {
    var concatMap = require_concat_map();
    var balanced = require_balanced_match();
    module2.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte(i, y) {
      return i <= y;
    }
    function gte(i, y) {
      return i >= y;
    }
    function expand(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m || /\$$/.test(m.pre))
        return [str];
      var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
      var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
      var isSequence = isNumericSequence || isAlphaSequence;
      var isOptions = m.body.indexOf(",") >= 0;
      if (!isSequence && !isOptions) {
        if (m.post.match(/,.*\}/)) {
          str = m.pre + "{" + m.body + escClose + m.post;
          return expand(str);
        }
        return [str];
      }
      var n;
      if (isSequence) {
        n = m.body.split(/\.\./);
      } else {
        n = parseCommaParts(m.body);
        if (n.length === 1) {
          n = expand(n[0], false).map(embrace);
          if (n.length === 1) {
            var post = m.post.length ? expand(m.post, false) : [""];
            return post.map(function(p) {
              return m.pre + n[0] + p;
            });
          }
        }
      }
      var pre = m.pre;
      var post = m.post.length ? expand(m.post, false) : [""];
      var N;
      if (isSequence) {
        var x = numeric(n[0]);
        var y = numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
        var test = lte;
        var reverse = y < x;
        if (reverse) {
          incr *= -1;
          test = gte;
        }
        var pad = n.some(isPadded);
        N = [];
        for (var i = x; test(i, y); i += incr) {
          var c;
          if (isAlphaSequence) {
            c = String.fromCharCode(i);
            if (c === "\\")
              c = "";
          } else {
            c = String(i);
            if (pad) {
              var need = width - c.length;
              if (need > 0) {
                var z = new Array(need + 1).join("0");
                if (i < 0)
                  c = "-" + z + c.slice(1);
                else
                  c = z + c;
              }
            }
          }
          N.push(c);
        }
      } else {
        N = concatMap(n, function(el) {
          return expand(el, false);
        });
      }
      for (var j = 0; j < N.length; j++) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + N[j] + post[k];
          if (!isTop || isSequence || expansion)
            expansions.push(expansion);
        }
      }
      return expansions;
    }
  }
});

// ../node_modules/minimatch/minimatch.js
var require_minimatch = __commonJS({
  "../node_modules/minimatch/minimatch.js"(exports, module2) {
    module2.exports = minimatch;
    minimatch.Minimatch = Minimatch;
    var path2 = function() {
      try {
        return require("path");
      } catch (e) {
      }
    }() || {
      sep: "/"
    };
    minimatch.sep = path2.sep;
    var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
    var expand = require_brace_expansion();
    var plTypes = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" }
    };
    var qmark = "[^/]";
    var star = qmark + "*?";
    var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    var reSpecials = charSet("().*{}+?[]^$\\!");
    function charSet(s) {
      return s.split("").reduce(function(set, c) {
        set[c] = true;
        return set;
      }, {});
    }
    var slashSplit = /\/+/;
    minimatch.filter = filter2;
    function filter2(pattern, options) {
      options = options || {};
      return function(p, i, list) {
        return minimatch(p, pattern, options);
      };
    }
    function ext(a, b) {
      b = b || {};
      var t = {};
      Object.keys(a).forEach(function(k) {
        t[k] = a[k];
      });
      Object.keys(b).forEach(function(k) {
        t[k] = b[k];
      });
      return t;
    }
    minimatch.defaults = function(def) {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      var orig = minimatch;
      var m = function minimatch2(p, pattern, options) {
        return orig(p, pattern, ext(def, options));
      };
      m.Minimatch = function Minimatch2(pattern, options) {
        return new orig.Minimatch(pattern, ext(def, options));
      };
      m.Minimatch.defaults = function defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      };
      m.filter = function filter3(pattern, options) {
        return orig.filter(pattern, ext(def, options));
      };
      m.defaults = function defaults(options) {
        return orig.defaults(ext(def, options));
      };
      m.makeRe = function makeRe2(pattern, options) {
        return orig.makeRe(pattern, ext(def, options));
      };
      m.braceExpand = function braceExpand2(pattern, options) {
        return orig.braceExpand(pattern, ext(def, options));
      };
      m.match = function(list, pattern, options) {
        return orig.match(list, pattern, ext(def, options));
      };
      return m;
    };
    Minimatch.defaults = function(def) {
      return minimatch.defaults(def).Minimatch;
    };
    function minimatch(p, pattern, options) {
      assertValidPattern(pattern);
      if (!options)
        options = {};
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    }
    function Minimatch(pattern, options) {
      if (!(this instanceof Minimatch)) {
        return new Minimatch(pattern, options);
      }
      assertValidPattern(pattern);
      if (!options)
        options = {};
      pattern = pattern.trim();
      if (!options.allowWindowsEscape && path2.sep !== "/") {
        pattern = pattern.split(path2.sep).join("/");
      }
      this.options = options;
      this.set = [];
      this.pattern = pattern;
      this.regexp = null;
      this.negate = false;
      this.comment = false;
      this.empty = false;
      this.partial = !!options.partial;
      this.make();
    }
    Minimatch.prototype.debug = function() {
    };
    Minimatch.prototype.make = make;
    function make() {
      var pattern = this.pattern;
      var options = this.options;
      if (!options.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!pattern) {
        this.empty = true;
        return;
      }
      this.parseNegate();
      var set = this.globSet = this.braceExpand();
      if (options.debug)
        this.debug = function debug() {
          console.error.apply(console, arguments);
        };
      this.debug(this.pattern, set);
      set = this.globParts = set.map(function(s) {
        return s.split(slashSplit);
      });
      this.debug(this.pattern, set);
      set = set.map(function(s, si, set2) {
        return s.map(this.parse, this);
      }, this);
      this.debug(this.pattern, set);
      set = set.filter(function(s) {
        return s.indexOf(false) === -1;
      });
      this.debug(this.pattern, set);
      this.set = set;
    }
    Minimatch.prototype.parseNegate = parseNegate;
    function parseNegate() {
      var pattern = this.pattern;
      var negate2 = false;
      var options = this.options;
      var negateOffset = 0;
      if (options.nonegate)
        return;
      for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === "!"; i++) {
        negate2 = !negate2;
        negateOffset++;
      }
      if (negateOffset)
        this.pattern = pattern.substr(negateOffset);
      this.negate = negate2;
    }
    minimatch.braceExpand = function(pattern, options) {
      return braceExpand(pattern, options);
    };
    Minimatch.prototype.braceExpand = braceExpand;
    function braceExpand(pattern, options) {
      if (!options) {
        if (this instanceof Minimatch) {
          options = this.options;
        } else {
          options = {};
        }
      }
      pattern = typeof pattern === "undefined" ? this.pattern : pattern;
      assertValidPattern(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return expand(pattern);
    }
    var MAX_PATTERN_LENGTH = 1024 * 64;
    var assertValidPattern = function(pattern) {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    Minimatch.prototype.parse = parse;
    var SUBPARSE = {};
    function parse(pattern, isSub) {
      assertValidPattern(pattern);
      var options = this.options;
      if (pattern === "**") {
        if (!options.noglobstar)
          return GLOBSTAR;
        else
          pattern = "*";
      }
      if (pattern === "")
        return "";
      var re = "";
      var hasMagic = !!options.nocase;
      var escaping = false;
      var patternListStack = [];
      var negativeLists = [];
      var stateChar;
      var inClass = false;
      var reClassStart = -1;
      var classStart = -1;
      var patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
      var self2 = this;
      function clearStateChar() {
        if (stateChar) {
          switch (stateChar) {
            case "*":
              re += star;
              hasMagic = true;
              break;
            case "?":
              re += qmark;
              hasMagic = true;
              break;
            default:
              re += "\\" + stateChar;
              break;
          }
          self2.debug("clearStateChar %j %j", stateChar, re);
          stateChar = false;
        }
      }
      for (var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++) {
        this.debug("%s	%s %s %j", pattern, i, re, c);
        if (escaping && reSpecials[c]) {
          re += "\\" + c;
          escaping = false;
          continue;
        }
        switch (c) {
          case "/": {
            return false;
          }
          case "\\":
            clearStateChar();
            escaping = true;
            continue;
          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
            if (inClass) {
              this.debug("  in class");
              if (c === "!" && i === classStart + 1)
                c = "^";
              re += c;
              continue;
            }
            self2.debug("call clearStateChar %j", stateChar);
            clearStateChar();
            stateChar = c;
            if (options.noext)
              clearStateChar();
            continue;
          case "(":
            if (inClass) {
              re += "(";
              continue;
            }
            if (!stateChar) {
              re += "\\(";
              continue;
            }
            patternListStack.push({
              type: stateChar,
              start: i - 1,
              reStart: re.length,
              open: plTypes[stateChar].open,
              close: plTypes[stateChar].close
            });
            re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
            this.debug("plType %j %j", stateChar, re);
            stateChar = false;
            continue;
          case ")":
            if (inClass || !patternListStack.length) {
              re += "\\)";
              continue;
            }
            clearStateChar();
            hasMagic = true;
            var pl = patternListStack.pop();
            re += pl.close;
            if (pl.type === "!") {
              negativeLists.push(pl);
            }
            pl.reEnd = re.length;
            continue;
          case "|":
            if (inClass || !patternListStack.length || escaping) {
              re += "\\|";
              escaping = false;
              continue;
            }
            clearStateChar();
            re += "|";
            continue;
          case "[":
            clearStateChar();
            if (inClass) {
              re += "\\" + c;
              continue;
            }
            inClass = true;
            classStart = i;
            reClassStart = re.length;
            re += c;
            continue;
          case "]":
            if (i === classStart + 1 || !inClass) {
              re += "\\" + c;
              escaping = false;
              continue;
            }
            var cs = pattern.substring(classStart + 1, i);
            try {
              RegExp("[" + cs + "]");
            } catch (er) {
              var sp = this.parse(cs, SUBPARSE);
              re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
              hasMagic = hasMagic || sp[1];
              inClass = false;
              continue;
            }
            hasMagic = true;
            inClass = false;
            re += c;
            continue;
          default:
            clearStateChar();
            if (escaping) {
              escaping = false;
            } else if (reSpecials[c] && !(c === "^" && inClass)) {
              re += "\\";
            }
            re += c;
        }
      }
      if (inClass) {
        cs = pattern.substr(classStart + 1);
        sp = this.parse(cs, SUBPARSE);
        re = re.substr(0, reClassStart) + "\\[" + sp[0];
        hasMagic = hasMagic || sp[1];
      }
      for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
        var tail = re.slice(pl.reStart + pl.open.length);
        this.debug("setting tail", re, pl);
        tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(_3, $1, $2) {
          if (!$2) {
            $2 = "\\";
          }
          return $1 + $1 + $2 + "|";
        });
        this.debug("tail=%j\n   %s", tail, tail, pl, re);
        var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
        hasMagic = true;
        re = re.slice(0, pl.reStart) + t + "\\(" + tail;
      }
      clearStateChar();
      if (escaping) {
        re += "\\\\";
      }
      var addPatternStart = false;
      switch (re.charAt(0)) {
        case "[":
        case ".":
        case "(":
          addPatternStart = true;
      }
      for (var n = negativeLists.length - 1; n > -1; n--) {
        var nl = negativeLists[n];
        var nlBefore = re.slice(0, nl.reStart);
        var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
        var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
        var nlAfter = re.slice(nl.reEnd);
        nlLast += nlAfter;
        var openParensBefore = nlBefore.split("(").length - 1;
        var cleanAfter = nlAfter;
        for (i = 0; i < openParensBefore; i++) {
          cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
        }
        nlAfter = cleanAfter;
        var dollar = "";
        if (nlAfter === "" && isSub !== SUBPARSE) {
          dollar = "$";
        }
        var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        re = newRe;
      }
      if (re !== "" && hasMagic) {
        re = "(?=.)" + re;
      }
      if (addPatternStart) {
        re = patternStart + re;
      }
      if (isSub === SUBPARSE) {
        return [re, hasMagic];
      }
      if (!hasMagic) {
        return globUnescape(pattern);
      }
      var flags = options.nocase ? "i" : "";
      try {
        var regExp = new RegExp("^" + re + "$", flags);
      } catch (er) {
        return new RegExp("$.");
      }
      regExp._glob = pattern;
      regExp._src = re;
      return regExp;
    }
    minimatch.makeRe = function(pattern, options) {
      return new Minimatch(pattern, options || {}).makeRe();
    };
    Minimatch.prototype.makeRe = makeRe;
    function makeRe() {
      if (this.regexp || this.regexp === false)
        return this.regexp;
      var set = this.set;
      if (!set.length) {
        this.regexp = false;
        return this.regexp;
      }
      var options = this.options;
      var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
      var flags = options.nocase ? "i" : "";
      var re = set.map(function(pattern) {
        return pattern.map(function(p) {
          return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
        }).join("\\/");
      }).join("|");
      re = "^(?:" + re + ")$";
      if (this.negate)
        re = "^(?!" + re + ").*$";
      try {
        this.regexp = new RegExp(re, flags);
      } catch (ex) {
        this.regexp = false;
      }
      return this.regexp;
    }
    minimatch.match = function(list, pattern, options) {
      options = options || {};
      var mm = new Minimatch(pattern, options);
      list = list.filter(function(f) {
        return mm.match(f);
      });
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    Minimatch.prototype.match = function match(f, partial2) {
      if (typeof partial2 === "undefined")
        partial2 = this.partial;
      this.debug("match", f, this.pattern);
      if (this.comment)
        return false;
      if (this.empty)
        return f === "";
      if (f === "/" && partial2)
        return true;
      var options = this.options;
      if (path2.sep !== "/") {
        f = f.split(path2.sep).join("/");
      }
      f = f.split(slashSplit);
      this.debug(this.pattern, "split", f);
      var set = this.set;
      this.debug(this.pattern, "set", set);
      var filename;
      var i;
      for (i = f.length - 1; i >= 0; i--) {
        filename = f[i];
        if (filename)
          break;
      }
      for (i = 0; i < set.length; i++) {
        var pattern = set[i];
        var file = f;
        if (options.matchBase && pattern.length === 1) {
          file = [filename];
        }
        var hit = this.matchOne(file, pattern, partial2);
        if (hit) {
          if (options.flipNegate)
            return true;
          return !this.negate;
        }
      }
      if (options.flipNegate)
        return false;
      return this.negate;
    };
    Minimatch.prototype.matchOne = function(file, pattern, partial2) {
      var options = this.options;
      this.debug(
        "matchOne",
        { "this": this, file, pattern }
      );
      this.debug("matchOne", file.length, pattern.length);
      for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
        this.debug("matchOne loop");
        var p = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p, f);
        if (p === false)
          return false;
        if (p === GLOBSTAR) {
          this.debug("GLOBSTAR", [pattern, p, f]);
          var fr = fi;
          var pr = pi + 1;
          if (pr === pl) {
            this.debug("** at the end");
            for (; fi < fl; fi++) {
              if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                return false;
            }
            return true;
          }
          while (fr < fl) {
            var swallowee = file[fr];
            this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
            if (this.matchOne(file.slice(fr), pattern.slice(pr), partial2)) {
              this.debug("globstar found match!", fr, fl, swallowee);
              return true;
            } else {
              if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                this.debug("dot detected!", file, fr, pattern, pr);
                break;
              }
              this.debug("globstar swallow a segment, and continue");
              fr++;
            }
          }
          if (partial2) {
            this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
            if (fr === fl)
              return true;
          }
          return false;
        }
        var hit;
        if (typeof p === "string") {
          hit = f === p;
          this.debug("string match", p, f, hit);
        } else {
          hit = f.match(p);
          this.debug("pattern match", p, f, hit);
        }
        if (!hit)
          return false;
      }
      if (fi === fl && pi === pl) {
        return true;
      } else if (fi === fl) {
        return partial2;
      } else if (pi === pl) {
        return fi === fl - 1 && file[fi] === "";
      }
      throw new Error("wtf?");
    };
    function globUnescape(s) {
      return s.replace(/\\(.)/g, "$1");
    }
    function regExpEscape(s) {
      return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
  }
});

// ../node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "../node_modules/inherits/inherits_browser.js"(exports, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor2, superCtor) {
        if (superCtor) {
          ctor2.super_ = superCtor;
          ctor2.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor2,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor2, superCtor) {
        if (superCtor) {
          ctor2.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor2.prototype = new TempCtor();
          ctor2.prototype.constructor = ctor2;
        }
      };
    }
  }
});

// ../node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "../node_modules/inherits/inherits.js"(exports, module2) {
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// ../node_modules/path-is-absolute/index.js
var require_path_is_absolute = __commonJS({
  "../node_modules/path-is-absolute/index.js"(exports, module2) {
    "use strict";
    function posix(path2) {
      return path2.charAt(0) === "/";
    }
    function win32(path2) {
      var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
      var result2 = splitDeviceRe.exec(path2);
      var device = result2[1] || "";
      var isUnc = Boolean(device && device.charAt(1) !== ":");
      return Boolean(result2[2] || isUnc);
    }
    module2.exports = process.platform === "win32" ? win32 : posix;
    module2.exports.posix = posix;
    module2.exports.win32 = win32;
  }
});

// ../node_modules/glob/common.js
var require_common = __commonJS({
  "../node_modules/glob/common.js"(exports) {
    exports.setopts = setopts;
    exports.ownProp = ownProp;
    exports.makeAbs = makeAbs;
    exports.finish = finish;
    exports.mark = mark;
    exports.isIgnored = isIgnored;
    exports.childrenIgnored = childrenIgnored;
    function ownProp(obj, field) {
      return Object.prototype.hasOwnProperty.call(obj, field);
    }
    var fs = require("fs");
    var path2 = require("path");
    var minimatch = require_minimatch();
    var isAbsolute = require_path_is_absolute();
    var Minimatch = minimatch.Minimatch;
    function alphasort(a, b) {
      return a.localeCompare(b, "en");
    }
    function setupIgnores(self2, options) {
      self2.ignore = options.ignore || [];
      if (!Array.isArray(self2.ignore))
        self2.ignore = [self2.ignore];
      if (self2.ignore.length) {
        self2.ignore = self2.ignore.map(ignoreMap);
      }
    }
    function ignoreMap(pattern) {
      var gmatcher = null;
      if (pattern.slice(-3) === "/**") {
        var gpattern = pattern.replace(/(\/\*\*)+$/, "");
        gmatcher = new Minimatch(gpattern, { dot: true });
      }
      return {
        matcher: new Minimatch(pattern, { dot: true }),
        gmatcher
      };
    }
    function setopts(self2, pattern, options) {
      if (!options)
        options = {};
      if (options.matchBase && -1 === pattern.indexOf("/")) {
        if (options.noglobstar) {
          throw new Error("base matching requires globstar");
        }
        pattern = "**/" + pattern;
      }
      self2.silent = !!options.silent;
      self2.pattern = pattern;
      self2.strict = options.strict !== false;
      self2.realpath = !!options.realpath;
      self2.realpathCache = options.realpathCache || /* @__PURE__ */ Object.create(null);
      self2.follow = !!options.follow;
      self2.dot = !!options.dot;
      self2.mark = !!options.mark;
      self2.nodir = !!options.nodir;
      if (self2.nodir)
        self2.mark = true;
      self2.sync = !!options.sync;
      self2.nounique = !!options.nounique;
      self2.nonull = !!options.nonull;
      self2.nosort = !!options.nosort;
      self2.nocase = !!options.nocase;
      self2.stat = !!options.stat;
      self2.noprocess = !!options.noprocess;
      self2.absolute = !!options.absolute;
      self2.fs = options.fs || fs;
      self2.maxLength = options.maxLength || Infinity;
      self2.cache = options.cache || /* @__PURE__ */ Object.create(null);
      self2.statCache = options.statCache || /* @__PURE__ */ Object.create(null);
      self2.symlinks = options.symlinks || /* @__PURE__ */ Object.create(null);
      setupIgnores(self2, options);
      self2.changedCwd = false;
      var cwd = process.cwd();
      if (!ownProp(options, "cwd"))
        self2.cwd = cwd;
      else {
        self2.cwd = path2.resolve(options.cwd);
        self2.changedCwd = self2.cwd !== cwd;
      }
      self2.root = options.root || path2.resolve(self2.cwd, "/");
      self2.root = path2.resolve(self2.root);
      if (process.platform === "win32")
        self2.root = self2.root.replace(/\\/g, "/");
      self2.cwdAbs = isAbsolute(self2.cwd) ? self2.cwd : makeAbs(self2, self2.cwd);
      if (process.platform === "win32")
        self2.cwdAbs = self2.cwdAbs.replace(/\\/g, "/");
      self2.nomount = !!options.nomount;
      options.nonegate = true;
      options.nocomment = true;
      options.allowWindowsEscape = false;
      self2.minimatch = new Minimatch(pattern, options);
      self2.options = self2.minimatch.options;
    }
    function finish(self2) {
      var nou = self2.nounique;
      var all = nou ? [] : /* @__PURE__ */ Object.create(null);
      for (var i = 0, l = self2.matches.length; i < l; i++) {
        var matches = self2.matches[i];
        if (!matches || Object.keys(matches).length === 0) {
          if (self2.nonull) {
            var literal = self2.minimatch.globSet[i];
            if (nou)
              all.push(literal);
            else
              all[literal] = true;
          }
        } else {
          var m = Object.keys(matches);
          if (nou)
            all.push.apply(all, m);
          else
            m.forEach(function(m2) {
              all[m2] = true;
            });
        }
      }
      if (!nou)
        all = Object.keys(all);
      if (!self2.nosort)
        all = all.sort(alphasort);
      if (self2.mark) {
        for (var i = 0; i < all.length; i++) {
          all[i] = self2._mark(all[i]);
        }
        if (self2.nodir) {
          all = all.filter(function(e) {
            var notDir = !/\/$/.test(e);
            var c = self2.cache[e] || self2.cache[makeAbs(self2, e)];
            if (notDir && c)
              notDir = c !== "DIR" && !Array.isArray(c);
            return notDir;
          });
        }
      }
      if (self2.ignore.length)
        all = all.filter(function(m2) {
          return !isIgnored(self2, m2);
        });
      self2.found = all;
    }
    function mark(self2, p) {
      var abs = makeAbs(self2, p);
      var c = self2.cache[abs];
      var m = p;
      if (c) {
        var isDir = c === "DIR" || Array.isArray(c);
        var slash = p.slice(-1) === "/";
        if (isDir && !slash)
          m += "/";
        else if (!isDir && slash)
          m = m.slice(0, -1);
        if (m !== p) {
          var mabs = makeAbs(self2, m);
          self2.statCache[mabs] = self2.statCache[abs];
          self2.cache[mabs] = self2.cache[abs];
        }
      }
      return m;
    }
    function makeAbs(self2, f) {
      var abs = f;
      if (f.charAt(0) === "/") {
        abs = path2.join(self2.root, f);
      } else if (isAbsolute(f) || f === "") {
        abs = f;
      } else if (self2.changedCwd) {
        abs = path2.resolve(self2.cwd, f);
      } else {
        abs = path2.resolve(f);
      }
      if (process.platform === "win32")
        abs = abs.replace(/\\/g, "/");
      return abs;
    }
    function isIgnored(self2, path3) {
      if (!self2.ignore.length)
        return false;
      return self2.ignore.some(function(item) {
        return item.matcher.match(path3) || !!(item.gmatcher && item.gmatcher.match(path3));
      });
    }
    function childrenIgnored(self2, path3) {
      if (!self2.ignore.length)
        return false;
      return self2.ignore.some(function(item) {
        return !!(item.gmatcher && item.gmatcher.match(path3));
      });
    }
  }
});

// ../node_modules/glob/sync.js
var require_sync = __commonJS({
  "../node_modules/glob/sync.js"(exports, module2) {
    module2.exports = globSync;
    globSync.GlobSync = GlobSync;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var Glob = require_glob().Glob;
    var util = require("util");
    var path2 = require("path");
    var assert = require("assert");
    var isAbsolute = require_path_is_absolute();
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    function globSync(pattern, options) {
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      return new GlobSync(pattern, options).found;
    }
    function GlobSync(pattern, options) {
      if (!pattern)
        throw new Error("must provide pattern");
      if (typeof options === "function" || arguments.length === 3)
        throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
      if (!(this instanceof GlobSync))
        return new GlobSync(pattern, options);
      setopts(this, pattern, options);
      if (this.noprocess)
        return this;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false);
      }
      this._finish();
    }
    GlobSync.prototype._finish = function() {
      assert.ok(this instanceof GlobSync);
      if (this.realpath) {
        var self2 = this;
        this.matches.forEach(function(matchset, index) {
          var set = self2.matches[index] = /* @__PURE__ */ Object.create(null);
          for (var p in matchset) {
            try {
              p = self2._makeAbs(p);
              var real = rp.realpathSync(p, self2.realpathCache);
              set[real] = true;
            } catch (er) {
              if (er.syscall === "stat")
                set[self2._makeAbs(p)] = true;
              else
                throw er;
            }
          }
        });
      }
      common.finish(this);
    };
    GlobSync.prototype._process = function(pattern, index, inGlobStar) {
      assert.ok(this instanceof GlobSync);
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return;
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
      else
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
    };
    GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var pn = remain[0];
      var negate2 = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate2 && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return;
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index])
          this.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix.slice(-1) !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path2.join(this.root, e);
          }
          this._emitMatch(index, e);
        }
        return;
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix)
          newPattern = [prefix, e];
        else
          newPattern = [e];
        this._process(newPattern.concat(remain), index, inGlobStar);
      }
    };
    GlobSync.prototype._emitMatch = function(index, e) {
      if (isIgnored(this, e))
        return;
      var abs = this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute) {
        e = abs;
      }
      if (this.matches[index][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index][e] = true;
      if (this.stat)
        this._stat(e);
    };
    GlobSync.prototype._readdirInGlobStar = function(abs) {
      if (this.follow)
        return this._readdir(abs, false);
      var entries;
      var lstat;
      var stat;
      try {
        lstat = this.fs.lstatSync(abs);
      } catch (er) {
        if (er.code === "ENOENT") {
          return null;
        }
      }
      var isSym = lstat && lstat.isSymbolicLink();
      this.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory())
        this.cache[abs] = "FILE";
      else
        entries = this._readdir(abs, false);
      return entries;
    };
    GlobSync.prototype._readdir = function(abs, inGlobStar) {
      var entries;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return null;
        if (Array.isArray(c))
          return c;
      }
      try {
        return this._readdirEntries(abs, this.fs.readdirSync(abs));
      } catch (er) {
        this._readdirError(abs, er);
        return null;
      }
    };
    GlobSync.prototype._readdirEntries = function(abs, entries) {
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return entries;
    };
    GlobSync.prototype._readdirError = function(f, er) {
      switch (er.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            throw error;
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict)
            throw er;
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
    };
    GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
      var entries = this._readdir(abs, inGlobStar);
      if (!entries)
        return;
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index, false);
      var len = entries.length;
      var isSym = this.symlinks[abs];
      if (isSym && inGlobStar)
        return;
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true);
      }
    };
    GlobSync.prototype._processSimple = function(prefix, index) {
      var exists = this._stat(prefix);
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return;
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path2.join(this.root, prefix);
        } else {
          prefix = path2.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index, prefix);
    };
    GlobSync.prototype._stat = function(f) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return false;
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return c;
        if (needDir && c === "FILE")
          return false;
      }
      var exists;
      var stat = this.statCache[abs];
      if (!stat) {
        var lstat;
        try {
          lstat = this.fs.lstatSync(abs);
        } catch (er) {
          if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
            this.statCache[abs] = false;
            return false;
          }
        }
        if (lstat && lstat.isSymbolicLink()) {
          try {
            stat = this.fs.statSync(abs);
          } catch (er) {
            stat = lstat;
          }
        } else {
          stat = lstat;
        }
      }
      this.statCache[abs] = stat;
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return false;
      return c;
    };
    GlobSync.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    GlobSync.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
  }
});

// ../node_modules/wrappy/wrappy.js
var require_wrappy = __commonJS({
  "../node_modules/wrappy/wrappy.js"(exports, module2) {
    module2.exports = wrappy;
    function wrappy(fn, cb2) {
      if (fn && cb2)
        return wrappy(fn)(cb2);
      if (typeof fn !== "function")
        throw new TypeError("need wrapper function");
      Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
      });
      return wrapper;
      function wrapper() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        var ret = fn.apply(this, args);
        var cb3 = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb3) {
          Object.keys(cb3).forEach(function(k) {
            ret[k] = cb3[k];
          });
        }
        return ret;
      }
    }
  }
});

// ../node_modules/once/once.js
var require_once = __commonJS({
  "../node_modules/once/once.js"(exports, module2) {
    var wrappy = require_wrappy();
    module2.exports = wrappy(once);
    module2.exports.strict = wrappy(onceStrict);
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, "once", {
        value: function() {
          return once(this);
        },
        configurable: true
      });
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
          return onceStrict(this);
        },
        configurable: true
      });
    });
    function once(fn) {
      var f = function() {
        if (f.called)
          return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      f.called = false;
      return f;
    }
    function onceStrict(fn) {
      var f = function() {
        if (f.called)
          throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
      };
      var name = fn.name || "Function wrapped with `once`";
      f.onceError = name + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  }
});

// ../node_modules/inflight/inflight.js
var require_inflight = __commonJS({
  "../node_modules/inflight/inflight.js"(exports, module2) {
    var wrappy = require_wrappy();
    var reqs = /* @__PURE__ */ Object.create(null);
    var once = require_once();
    module2.exports = wrappy(inflight);
    function inflight(key, cb2) {
      if (reqs[key]) {
        reqs[key].push(cb2);
        return null;
      } else {
        reqs[key] = [cb2];
        return makeres(key);
      }
    }
    function makeres(key) {
      return once(function RES() {
        var cbs = reqs[key];
        var len = cbs.length;
        var args = slice2(arguments);
        try {
          for (var i = 0; i < len; i++) {
            cbs[i].apply(null, args);
          }
        } finally {
          if (cbs.length > len) {
            cbs.splice(0, len);
            process.nextTick(function() {
              RES.apply(null, args);
            });
          } else {
            delete reqs[key];
          }
        }
      });
    }
    function slice2(args) {
      var length = args.length;
      var array = [];
      for (var i = 0; i < length; i++)
        array[i] = args[i];
      return array;
    }
  }
});

// ../node_modules/glob/glob.js
var require_glob = __commonJS({
  "../node_modules/glob/glob.js"(exports, module2) {
    module2.exports = glob;
    var rp = require_fs();
    var minimatch = require_minimatch();
    var Minimatch = minimatch.Minimatch;
    var inherits = require_inherits();
    var EE = require("events").EventEmitter;
    var path2 = require("path");
    var assert = require("assert");
    var isAbsolute = require_path_is_absolute();
    var globSync = require_sync();
    var common = require_common();
    var setopts = common.setopts;
    var ownProp = common.ownProp;
    var inflight = require_inflight();
    var util = require("util");
    var childrenIgnored = common.childrenIgnored;
    var isIgnored = common.isIgnored;
    var once = require_once();
    function glob(pattern, options, cb2) {
      if (typeof options === "function")
        cb2 = options, options = {};
      if (!options)
        options = {};
      if (options.sync) {
        if (cb2)
          throw new TypeError("callback provided to sync glob");
        return globSync(pattern, options);
      }
      return new Glob(pattern, options, cb2);
    }
    glob.sync = globSync;
    var GlobSync = glob.GlobSync = globSync.GlobSync;
    glob.glob = glob;
    function extend(origin, add) {
      if (add === null || typeof add !== "object") {
        return origin;
      }
      var keys2 = Object.keys(add);
      var i = keys2.length;
      while (i--) {
        origin[keys2[i]] = add[keys2[i]];
      }
      return origin;
    }
    glob.hasMagic = function(pattern, options_) {
      var options = extend({}, options_);
      options.noprocess = true;
      var g = new Glob(pattern, options);
      var set = g.minimatch.set;
      if (!pattern)
        return false;
      if (set.length > 1)
        return true;
      for (var j = 0; j < set[0].length; j++) {
        if (typeof set[0][j] !== "string")
          return true;
      }
      return false;
    };
    glob.Glob = Glob;
    inherits(Glob, EE);
    function Glob(pattern, options, cb2) {
      if (typeof options === "function") {
        cb2 = options;
        options = null;
      }
      if (options && options.sync) {
        if (cb2)
          throw new TypeError("callback provided to sync glob");
        return new GlobSync(pattern, options);
      }
      if (!(this instanceof Glob))
        return new Glob(pattern, options, cb2);
      setopts(this, pattern, options);
      this._didRealPath = false;
      var n = this.minimatch.set.length;
      this.matches = new Array(n);
      if (typeof cb2 === "function") {
        cb2 = once(cb2);
        this.on("error", cb2);
        this.on("end", function(matches) {
          cb2(null, matches);
        });
      }
      var self2 = this;
      this._processing = 0;
      this._emitQueue = [];
      this._processQueue = [];
      this.paused = false;
      if (this.noprocess)
        return this;
      if (n === 0)
        return done();
      var sync = true;
      for (var i = 0; i < n; i++) {
        this._process(this.minimatch.set[i], i, false, done);
      }
      sync = false;
      function done() {
        --self2._processing;
        if (self2._processing <= 0) {
          if (sync) {
            process.nextTick(function() {
              self2._finish();
            });
          } else {
            self2._finish();
          }
        }
      }
    }
    Glob.prototype._finish = function() {
      assert(this instanceof Glob);
      if (this.aborted)
        return;
      if (this.realpath && !this._didRealpath)
        return this._realpath();
      common.finish(this);
      this.emit("end", this.found);
    };
    Glob.prototype._realpath = function() {
      if (this._didRealpath)
        return;
      this._didRealpath = true;
      var n = this.matches.length;
      if (n === 0)
        return this._finish();
      var self2 = this;
      for (var i = 0; i < this.matches.length; i++)
        this._realpathSet(i, next);
      function next() {
        if (--n === 0)
          self2._finish();
      }
    };
    Glob.prototype._realpathSet = function(index, cb2) {
      var matchset = this.matches[index];
      if (!matchset)
        return cb2();
      var found = Object.keys(matchset);
      var self2 = this;
      var n = found.length;
      if (n === 0)
        return cb2();
      var set = this.matches[index] = /* @__PURE__ */ Object.create(null);
      found.forEach(function(p, i) {
        p = self2._makeAbs(p);
        rp.realpath(p, self2.realpathCache, function(er, real) {
          if (!er)
            set[real] = true;
          else if (er.syscall === "stat")
            set[p] = true;
          else
            self2.emit("error", er);
          if (--n === 0) {
            self2.matches[index] = set;
            cb2();
          }
        });
      });
    };
    Glob.prototype._mark = function(p) {
      return common.mark(this, p);
    };
    Glob.prototype._makeAbs = function(f) {
      return common.makeAbs(this, f);
    };
    Glob.prototype.abort = function() {
      this.aborted = true;
      this.emit("abort");
    };
    Glob.prototype.pause = function() {
      if (!this.paused) {
        this.paused = true;
        this.emit("pause");
      }
    };
    Glob.prototype.resume = function() {
      if (this.paused) {
        this.emit("resume");
        this.paused = false;
        if (this._emitQueue.length) {
          var eq2 = this._emitQueue.slice(0);
          this._emitQueue.length = 0;
          for (var i = 0; i < eq2.length; i++) {
            var e = eq2[i];
            this._emitMatch(e[0], e[1]);
          }
        }
        if (this._processQueue.length) {
          var pq = this._processQueue.slice(0);
          this._processQueue.length = 0;
          for (var i = 0; i < pq.length; i++) {
            var p = pq[i];
            this._processing--;
            this._process(p[0], p[1], p[2], p[3]);
          }
        }
      }
    };
    Glob.prototype._process = function(pattern, index, inGlobStar, cb2) {
      assert(this instanceof Glob);
      assert(typeof cb2 === "function");
      if (this.aborted)
        return;
      this._processing++;
      if (this.paused) {
        this._processQueue.push([pattern, index, inGlobStar, cb2]);
        return;
      }
      var n = 0;
      while (typeof pattern[n] === "string") {
        n++;
      }
      var prefix;
      switch (n) {
        case pattern.length:
          this._processSimple(pattern.join("/"), index, cb2);
          return;
        case 0:
          prefix = null;
          break;
        default:
          prefix = pattern.slice(0, n).join("/");
          break;
      }
      var remain = pattern.slice(n);
      var read;
      if (prefix === null)
        read = ".";
      else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
      }).join("/"))) {
        if (!prefix || !isAbsolute(prefix))
          prefix = "/" + prefix;
        read = prefix;
      } else
        read = prefix;
      var abs = this._makeAbs(read);
      if (childrenIgnored(this, read))
        return cb2();
      var isGlobStar = remain[0] === minimatch.GLOBSTAR;
      if (isGlobStar)
        this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb2);
      else
        this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb2);
    };
    Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb2) {
      var self2 = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        return self2._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb2);
      });
    };
    Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb2) {
      if (!entries)
        return cb2();
      var pn = remain[0];
      var negate2 = !!this.minimatch.negate;
      var rawGlob = pn._glob;
      var dotOk = this.dot || rawGlob.charAt(0) === ".";
      var matchedEntries = [];
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
          var m;
          if (negate2 && !prefix) {
            m = !e.match(pn);
          } else {
            m = e.match(pn);
          }
          if (m)
            matchedEntries.push(e);
        }
      }
      var len = matchedEntries.length;
      if (len === 0)
        return cb2();
      if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index])
          this.matches[index] = /* @__PURE__ */ Object.create(null);
        for (var i = 0; i < len; i++) {
          var e = matchedEntries[i];
          if (prefix) {
            if (prefix !== "/")
              e = prefix + "/" + e;
            else
              e = prefix + e;
          }
          if (e.charAt(0) === "/" && !this.nomount) {
            e = path2.join(this.root, e);
          }
          this._emitMatch(index, e);
        }
        return cb2();
      }
      remain.shift();
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) {
          if (prefix !== "/")
            e = prefix + "/" + e;
          else
            e = prefix + e;
        }
        this._process([e].concat(remain), index, inGlobStar, cb2);
      }
      cb2();
    };
    Glob.prototype._emitMatch = function(index, e) {
      if (this.aborted)
        return;
      if (isIgnored(this, e))
        return;
      if (this.paused) {
        this._emitQueue.push([index, e]);
        return;
      }
      var abs = isAbsolute(e) ? e : this._makeAbs(e);
      if (this.mark)
        e = this._mark(e);
      if (this.absolute)
        e = abs;
      if (this.matches[index][e])
        return;
      if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c))
          return;
      }
      this.matches[index][e] = true;
      var st = this.statCache[abs];
      if (st)
        this.emit("stat", e, st);
      this.emit("match", e);
    };
    Glob.prototype._readdirInGlobStar = function(abs, cb2) {
      if (this.aborted)
        return;
      if (this.follow)
        return this._readdir(abs, false, cb2);
      var lstatkey = "lstat\0" + abs;
      var self2 = this;
      var lstatcb = inflight(lstatkey, lstatcb_);
      if (lstatcb)
        self2.fs.lstat(abs, lstatcb);
      function lstatcb_(er, lstat) {
        if (er && er.code === "ENOENT")
          return cb2();
        var isSym = lstat && lstat.isSymbolicLink();
        self2.symlinks[abs] = isSym;
        if (!isSym && lstat && !lstat.isDirectory()) {
          self2.cache[abs] = "FILE";
          cb2();
        } else
          self2._readdir(abs, false, cb2);
      }
    };
    Glob.prototype._readdir = function(abs, inGlobStar, cb2) {
      if (this.aborted)
        return;
      cb2 = inflight("readdir\0" + abs + "\0" + inGlobStar, cb2);
      if (!cb2)
        return;
      if (inGlobStar && !ownProp(this.symlinks, abs))
        return this._readdirInGlobStar(abs, cb2);
      if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE")
          return cb2();
        if (Array.isArray(c))
          return cb2(null, c);
      }
      var self2 = this;
      self2.fs.readdir(abs, readdirCb(this, abs, cb2));
    };
    function readdirCb(self2, abs, cb2) {
      return function(er, entries) {
        if (er)
          self2._readdirError(abs, er, cb2);
        else
          self2._readdirEntries(abs, entries, cb2);
      };
    }
    Glob.prototype._readdirEntries = function(abs, entries, cb2) {
      if (this.aborted)
        return;
      if (!this.mark && !this.stat) {
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          if (abs === "/")
            e = abs + e;
          else
            e = abs + "/" + e;
          this.cache[e] = true;
        }
      }
      this.cache[abs] = entries;
      return cb2(null, entries);
    };
    Glob.prototype._readdirError = function(f, er, cb2) {
      if (this.aborted)
        return;
      switch (er.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var abs = this._makeAbs(f);
          this.cache[abs] = "FILE";
          if (abs === this.cwdAbs) {
            var error = new Error(er.code + " invalid cwd " + this.cwd);
            error.path = this.cwd;
            error.code = er.code;
            this.emit("error", error);
            this.abort();
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(f)] = false;
          break;
        default:
          this.cache[this._makeAbs(f)] = false;
          if (this.strict) {
            this.emit("error", er);
            this.abort();
          }
          if (!this.silent)
            console.error("glob error", er);
          break;
      }
      return cb2();
    };
    Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb2) {
      var self2 = this;
      this._readdir(abs, inGlobStar, function(er, entries) {
        self2._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb2);
      });
    };
    Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb2) {
      if (!entries)
        return cb2();
      var remainWithoutGlobStar = remain.slice(1);
      var gspref = prefix ? [prefix] : [];
      var noGlobStar = gspref.concat(remainWithoutGlobStar);
      this._process(noGlobStar, index, false, cb2);
      var isSym = this.symlinks[abs];
      var len = entries.length;
      if (isSym && inGlobStar)
        return cb2();
      for (var i = 0; i < len; i++) {
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot)
          continue;
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true, cb2);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true, cb2);
      }
      cb2();
    };
    Glob.prototype._processSimple = function(prefix, index, cb2) {
      var self2 = this;
      this._stat(prefix, function(er, exists) {
        self2._processSimple2(prefix, index, er, exists, cb2);
      });
    };
    Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb2) {
      if (!this.matches[index])
        this.matches[index] = /* @__PURE__ */ Object.create(null);
      if (!exists)
        return cb2();
      if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") {
          prefix = path2.join(this.root, prefix);
        } else {
          prefix = path2.resolve(this.root, prefix);
          if (trail)
            prefix += "/";
        }
      }
      if (process.platform === "win32")
        prefix = prefix.replace(/\\/g, "/");
      this._emitMatch(index, prefix);
      cb2();
    };
    Glob.prototype._stat = function(f, cb2) {
      var abs = this._makeAbs(f);
      var needDir = f.slice(-1) === "/";
      if (f.length > this.maxLength)
        return cb2();
      if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c))
          c = "DIR";
        if (!needDir || c === "DIR")
          return cb2(null, c);
        if (needDir && c === "FILE")
          return cb2();
      }
      var exists;
      var stat = this.statCache[abs];
      if (stat !== void 0) {
        if (stat === false)
          return cb2(null, stat);
        else {
          var type = stat.isDirectory() ? "DIR" : "FILE";
          if (needDir && type === "FILE")
            return cb2();
          else
            return cb2(null, type, stat);
        }
      }
      var self2 = this;
      var statcb = inflight("stat\0" + abs, lstatcb_);
      if (statcb)
        self2.fs.lstat(abs, statcb);
      function lstatcb_(er, lstat) {
        if (lstat && lstat.isSymbolicLink()) {
          return self2.fs.stat(abs, function(er2, stat2) {
            if (er2)
              self2._stat2(f, abs, null, lstat, cb2);
            else
              self2._stat2(f, abs, er2, stat2, cb2);
          });
        } else {
          self2._stat2(f, abs, er, lstat, cb2);
        }
      }
    };
    Glob.prototype._stat2 = function(f, abs, er, stat, cb2) {
      if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
        this.statCache[abs] = false;
        return cb2();
      }
      var needDir = f.slice(-1) === "/";
      this.statCache[abs] = stat;
      if (abs.slice(-1) === "/" && stat && !stat.isDirectory())
        return cb2(null, false, stat);
      var c = true;
      if (stat)
        c = stat.isDirectory() ? "DIR" : "FILE";
      this.cache[abs] = this.cache[abs] || c;
      if (needDir && c === "FILE")
        return cb2();
      return cb2(null, c, stat);
    };
  }
});

// ../node_modules/rimraf/rimraf.js
var require_rimraf = __commonJS({
  "../node_modules/rimraf/rimraf.js"(exports, module2) {
    module2.exports = rimraf;
    rimraf.sync = rimrafSync;
    var assert = require("assert");
    var path2 = require("path");
    var fs = require("fs");
    var glob = void 0;
    try {
      glob = require_glob();
    } catch (_err) {
    }
    var _0666 = parseInt("666", 8);
    var defaultGlobOpts = {
      nosort: true,
      silent: true
    };
    var timeout = 0;
    var isWindows = process.platform === "win32";
    function defaults(options) {
      var methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
      ];
      methods.forEach(function(m) {
        options[m] = options[m] || fs[m];
        m = m + "Sync";
        options[m] = options[m] || fs[m];
      });
      options.maxBusyTries = options.maxBusyTries || 3;
      options.emfileWait = options.emfileWait || 1e3;
      if (options.glob === false) {
        options.disableGlob = true;
      }
      if (options.disableGlob !== true && glob === void 0) {
        throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
      }
      options.disableGlob = options.disableGlob || false;
      options.glob = options.glob || defaultGlobOpts;
    }
    function rimraf(p, options, cb2) {
      if (typeof options === "function") {
        cb2 = options;
        options = {};
      }
      assert(p, "rimraf: missing path");
      assert.equal(typeof p, "string", "rimraf: path should be a string");
      assert.equal(typeof cb2, "function", "rimraf: callback function required");
      assert(options, "rimraf: invalid options argument provided");
      assert.equal(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      var busyTries = 0;
      var errState = null;
      var n = 0;
      if (options.disableGlob || !glob.hasMagic(p))
        return afterGlob(null, [p]);
      options.lstat(p, function(er, stat) {
        if (!er)
          return afterGlob(null, [p]);
        glob(p, options.glob, afterGlob);
      });
      function next(er) {
        errState = errState || er;
        if (--n === 0)
          cb2(errState);
      }
      function afterGlob(er, results) {
        if (er)
          return cb2(er);
        n = results.length;
        if (n === 0)
          return cb2();
        results.forEach(function(p2) {
          rimraf_(p2, options, function CB(er2) {
            if (er2) {
              if ((er2.code === "EBUSY" || er2.code === "ENOTEMPTY" || er2.code === "EPERM") && busyTries < options.maxBusyTries) {
                busyTries++;
                var time = busyTries * 100;
                return setTimeout(function() {
                  rimraf_(p2, options, CB);
                }, time);
              }
              if (er2.code === "EMFILE" && timeout < options.emfileWait) {
                return setTimeout(function() {
                  rimraf_(p2, options, CB);
                }, timeout++);
              }
              if (er2.code === "ENOENT")
                er2 = null;
            }
            timeout = 0;
            next(er2);
          });
        });
      }
    }
    function rimraf_(p, options, cb2) {
      assert(p);
      assert(options);
      assert(typeof cb2 === "function");
      options.lstat(p, function(er, st) {
        if (er && er.code === "ENOENT")
          return cb2(null);
        if (er && er.code === "EPERM" && isWindows)
          fixWinEPERM(p, options, er, cb2);
        if (st && st.isDirectory())
          return rmdir(p, options, er, cb2);
        options.unlink(p, function(er2) {
          if (er2) {
            if (er2.code === "ENOENT")
              return cb2(null);
            if (er2.code === "EPERM")
              return isWindows ? fixWinEPERM(p, options, er2, cb2) : rmdir(p, options, er2, cb2);
            if (er2.code === "EISDIR")
              return rmdir(p, options, er2, cb2);
          }
          return cb2(er2);
        });
      });
    }
    function fixWinEPERM(p, options, er, cb2) {
      assert(p);
      assert(options);
      assert(typeof cb2 === "function");
      if (er)
        assert(er instanceof Error);
      options.chmod(p, _0666, function(er2) {
        if (er2)
          cb2(er2.code === "ENOENT" ? null : er);
        else
          options.stat(p, function(er3, stats) {
            if (er3)
              cb2(er3.code === "ENOENT" ? null : er);
            else if (stats.isDirectory())
              rmdir(p, options, er, cb2);
            else
              options.unlink(p, cb2);
          });
      });
    }
    function fixWinEPERMSync(p, options, er) {
      assert(p);
      assert(options);
      if (er)
        assert(er instanceof Error);
      try {
        options.chmodSync(p, _0666);
      } catch (er2) {
        if (er2.code === "ENOENT")
          return;
        else
          throw er;
      }
      try {
        var stats = options.statSync(p);
      } catch (er3) {
        if (er3.code === "ENOENT")
          return;
        else
          throw er;
      }
      if (stats.isDirectory())
        rmdirSync(p, options, er);
      else
        options.unlinkSync(p);
    }
    function rmdir(p, options, originalEr, cb2) {
      assert(p);
      assert(options);
      if (originalEr)
        assert(originalEr instanceof Error);
      assert(typeof cb2 === "function");
      options.rmdir(p, function(er) {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
          rmkids(p, options, cb2);
        else if (er && er.code === "ENOTDIR")
          cb2(originalEr);
        else
          cb2(er);
      });
    }
    function rmkids(p, options, cb2) {
      assert(p);
      assert(options);
      assert(typeof cb2 === "function");
      options.readdir(p, function(er, files) {
        if (er)
          return cb2(er);
        var n = files.length;
        if (n === 0)
          return options.rmdir(p, cb2);
        var errState;
        files.forEach(function(f) {
          rimraf(path2.join(p, f), options, function(er2) {
            if (errState)
              return;
            if (er2)
              return cb2(errState = er2);
            if (--n === 0)
              options.rmdir(p, cb2);
          });
        });
      });
    }
    function rimrafSync(p, options) {
      options = options || {};
      defaults(options);
      assert(p, "rimraf: missing path");
      assert.equal(typeof p, "string", "rimraf: path should be a string");
      assert(options, "rimraf: missing options");
      assert.equal(typeof options, "object", "rimraf: options should be object");
      var results;
      if (options.disableGlob || !glob.hasMagic(p)) {
        results = [p];
      } else {
        try {
          options.lstatSync(p);
          results = [p];
        } catch (er) {
          results = glob.sync(p, options.glob);
        }
      }
      if (!results.length)
        return;
      for (var i = 0; i < results.length; i++) {
        var p = results[i];
        try {
          var st = options.lstatSync(p);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM" && isWindows)
            fixWinEPERMSync(p, options, er);
        }
        try {
          if (st && st.isDirectory())
            rmdirSync(p, options, null);
          else
            options.unlinkSync(p);
        } catch (er) {
          if (er.code === "ENOENT")
            return;
          if (er.code === "EPERM")
            return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
          if (er.code !== "EISDIR")
            throw er;
          rmdirSync(p, options, er);
        }
      }
    }
    function rmdirSync(p, options, originalEr) {
      assert(p);
      assert(options);
      if (originalEr)
        assert(originalEr instanceof Error);
      try {
        options.rmdirSync(p);
      } catch (er) {
        if (er.code === "ENOENT")
          return;
        if (er.code === "ENOTDIR")
          throw originalEr;
        if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
          rmkidsSync(p, options);
      }
    }
    function rmkidsSync(p, options) {
      assert(p);
      assert(options);
      options.readdirSync(p).forEach(function(f) {
        rimrafSync(path2.join(p, f), options);
      });
      var retries = isWindows ? 100 : 1;
      var i = 0;
      do {
        var threw = true;
        try {
          var ret = options.rmdirSync(p, options);
          threw = false;
          return ret;
        } finally {
          if (++i < retries && threw)
            continue;
        }
      } while (true);
    }
  }
});

// ../node_modules/fs-plus/lib/fs-plus.js
var require_fs_plus = __commonJS({
  "../node_modules/fs-plus/lib/fs-plus.js"(exports, module2) {
    (function() {
      var BINARY_EXTENSIONS, COMPRESSED_EXTENSIONS, IMAGE_EXTENSIONS, MARKDOWN_EXTENSIONS, Module, async, checkIfElectron2OrLower, fs, fsPlus, isElectron2OrLower, isMoveTargetValid, isMoveTargetValidSync, isPathValid, lstatSyncNoException, mkdirp, path2, rimraf, statSyncNoException, _3, __slice = [].slice;
      fs = require("fs");
      Module = require("module");
      path2 = require("path");
      _3 = require_underscore_plus();
      async = require_async();
      mkdirp = require_mkdirp();
      rimraf = require_rimraf();
      fsPlus = {
        __esModule: false,
        getHomeDirectory: function() {
          if (process.platform === "win32" && !process.env.HOME) {
            return process.env.USERPROFILE;
          } else {
            return process.env.HOME;
          }
        },
        absolute: function(relativePath) {
          var e;
          if (relativePath == null) {
            return null;
          }
          relativePath = fsPlus.resolveHome(relativePath);
          try {
            return fs.realpathSync(relativePath);
          } catch (_error) {
            e = _error;
            return relativePath;
          }
        },
        normalize: function(pathToNormalize) {
          if (pathToNormalize == null) {
            return null;
          }
          return fsPlus.resolveHome(path2.normalize(pathToNormalize.toString()));
        },
        resolveHome: function(relativePath) {
          if (relativePath === "~") {
            return fsPlus.getHomeDirectory();
          } else if (relativePath.indexOf("~" + path2.sep) === 0) {
            return "" + fsPlus.getHomeDirectory() + relativePath.substring(1);
          }
          return relativePath;
        },
        tildify: function(pathToTildify) {
          var homeDir, normalized;
          if (process.platform === "win32") {
            return pathToTildify;
          }
          normalized = fsPlus.normalize(pathToTildify);
          homeDir = fsPlus.getHomeDirectory();
          if (homeDir == null) {
            return pathToTildify;
          }
          if (normalized === homeDir) {
            return "~";
          }
          if (!normalized.startsWith(path2.join(homeDir, path2.sep))) {
            return pathToTildify;
          }
          return path2.join("~", path2.sep, normalized.substring(homeDir.length + 1));
        },
        getAppDataDirectory: function() {
          switch (process.platform) {
            case "darwin":
              return fsPlus.absolute(path2.join("~", "Library", "Application Support"));
            case "linux":
              return "/var/lib";
            case "win32":
              return process.env.APPDATA;
            default:
              return null;
          }
        },
        isAbsolute: function(pathToCheck) {
          if (pathToCheck == null) {
            pathToCheck = "";
          }
          if (process.platform === "win32") {
            if (pathToCheck[1] === ":") {
              return true;
            }
            if (pathToCheck[0] === "\\" && pathToCheck[1] === "\\") {
              return true;
            }
          } else {
            return pathToCheck[0] === "/";
          }
          return false;
        },
        existsSync: function(pathToCheck) {
          return isPathValid(pathToCheck) && statSyncNoException(pathToCheck) !== false;
        },
        isDirectorySync: function(directoryPath) {
          var stat;
          if (!isPathValid(directoryPath)) {
            return false;
          }
          if (stat = statSyncNoException(directoryPath)) {
            return stat.isDirectory();
          } else {
            return false;
          }
        },
        isDirectory: function(directoryPath, done) {
          if (!isPathValid(directoryPath)) {
            return done(false);
          }
          return fs.stat(directoryPath, function(error, stat) {
            if (error != null) {
              return done(false);
            } else {
              return done(stat.isDirectory());
            }
          });
        },
        isFileSync: function(filePath) {
          var stat;
          if (!isPathValid(filePath)) {
            return false;
          }
          if (stat = statSyncNoException(filePath)) {
            return stat.isFile();
          } else {
            return false;
          }
        },
        isSymbolicLinkSync: function(symlinkPath) {
          var stat;
          if (!isPathValid(symlinkPath)) {
            return false;
          }
          if (stat = lstatSyncNoException(symlinkPath)) {
            return stat.isSymbolicLink();
          } else {
            return false;
          }
        },
        isSymbolicLink: function(symlinkPath, callback) {
          if (isPathValid(symlinkPath)) {
            return fs.lstat(symlinkPath, function(error, stat) {
              return typeof callback === "function" ? callback(stat != null && stat.isSymbolicLink()) : void 0;
            });
          } else {
            return process.nextTick(function() {
              return typeof callback === "function" ? callback(false) : void 0;
            });
          }
        },
        isExecutableSync: function(pathToCheck) {
          var stat;
          if (!isPathValid(pathToCheck)) {
            return false;
          }
          if (stat = statSyncNoException(pathToCheck)) {
            return (stat.mode & 511 & 1) !== 0;
          } else {
            return false;
          }
        },
        getSizeSync: function(pathToCheck) {
          var _ref;
          if (isPathValid(pathToCheck)) {
            return (_ref = statSyncNoException(pathToCheck).size) != null ? _ref : -1;
          } else {
            return -1;
          }
        },
        listSync: function(rootPath, extensions) {
          var paths;
          if (!fsPlus.isDirectorySync(rootPath)) {
            return [];
          }
          paths = fs.readdirSync(rootPath);
          if (extensions) {
            paths = fsPlus.filterExtensions(paths, extensions);
          }
          paths = paths.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
          });
          paths = paths.map(function(childPath) {
            return path2.join(rootPath, childPath);
          });
          return paths;
        },
        list: function() {
          var done, extensions, rest2, rootPath;
          rootPath = arguments[0], rest2 = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          if (rest2.length > 1) {
            extensions = rest2.shift();
          }
          done = rest2.shift();
          return fs.readdir(rootPath, function(error, paths) {
            if (error != null) {
              return done(error);
            } else {
              if (extensions) {
                paths = fsPlus.filterExtensions(paths, extensions);
              }
              paths = paths.sort(function(a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
              });
              paths = paths.map(function(childPath) {
                return path2.join(rootPath, childPath);
              });
              return done(null, paths);
            }
          });
        },
        filterExtensions: function(paths, extensions) {
          extensions = extensions.map(function(ext) {
            if (ext === "") {
              return ext;
            } else {
              return "." + ext.replace(/^\./, "");
            }
          });
          return paths.filter(function(pathToCheck) {
            return _3.include(extensions, path2.extname(pathToCheck));
          });
        },
        listTreeSync: function(rootPath) {
          var onPath, paths;
          paths = [];
          onPath = function(childPath) {
            paths.push(childPath);
            return true;
          };
          fsPlus.traverseTreeSync(rootPath, onPath, onPath);
          return paths;
        },
        move: function(source, target, callback) {
          return isMoveTargetValid(source, target, function(isMoveTargetValidErr, isTargetValid) {
            var error, targetParentPath;
            if (isMoveTargetValidErr) {
              callback(isMoveTargetValidErr);
              return;
            }
            if (!isTargetValid) {
              error = new Error("'" + target + "' already exists.");
              error.code = "EEXIST";
              callback(error);
              return;
            }
            targetParentPath = path2.dirname(target);
            return fs.exists(targetParentPath, function(targetParentExists) {
              if (targetParentExists) {
                fs.rename(source, target, callback);
                return;
              }
              return fsPlus.makeTree(targetParentPath, function(makeTreeErr) {
                if (makeTreeErr) {
                  callback(makeTreeErr);
                  return;
                }
                return fs.rename(source, target, callback);
              });
            });
          });
        },
        moveSync: function(source, target) {
          var error, targetParentPath;
          if (!isMoveTargetValidSync(source, target)) {
            error = new Error("'" + target + "' already exists.");
            error.code = "EEXIST";
            throw error;
          }
          targetParentPath = path2.dirname(target);
          if (!fs.existsSync(targetParentPath)) {
            fsPlus.makeTreeSync(targetParentPath);
          }
          return fs.renameSync(source, target);
        },
        removeSync: function(pathToRemove) {
          return rimraf.sync(pathToRemove);
        },
        remove: function(pathToRemove, callback) {
          return rimraf(pathToRemove, callback);
        },
        writeFileSync: function(filePath, content, options) {
          mkdirp.sync(path2.dirname(filePath));
          return fs.writeFileSync(filePath, content, options);
        },
        writeFile: function(filePath, content, options, callback) {
          callback = _3.last(arguments);
          return mkdirp(path2.dirname(filePath), function(error) {
            if (error != null) {
              return typeof callback === "function" ? callback(error) : void 0;
            } else {
              return fs.writeFile(filePath, content, options, callback);
            }
          });
        },
        copy: function(sourcePath, destinationPath, done) {
          return mkdirp(path2.dirname(destinationPath), function(error) {
            var destinationStream, sourceStream;
            if (error != null) {
              if (typeof done === "function") {
                done(error);
              }
              return;
            }
            sourceStream = fs.createReadStream(sourcePath);
            sourceStream.on("error", function(error2) {
              if (typeof done === "function") {
                done(error2);
              }
              return done = null;
            });
            destinationStream = fs.createWriteStream(destinationPath);
            destinationStream.on("error", function(error2) {
              if (typeof done === "function") {
                done(error2);
              }
              return done = null;
            });
            destinationStream.on("close", function() {
              if (typeof done === "function") {
                done();
              }
              return done = null;
            });
            return sourceStream.pipe(destinationStream);
          });
        },
        copySync: function(sourcePath, destinationPath) {
          var destinationFilePath, source, sourceFilePath, sources, _i, _len, _results;
          sources = fs.readdirSync(sourcePath);
          mkdirp.sync(destinationPath);
          _results = [];
          for (_i = 0, _len = sources.length; _i < _len; _i++) {
            source = sources[_i];
            sourceFilePath = path2.join(sourcePath, source);
            destinationFilePath = path2.join(destinationPath, source);
            if (fsPlus.isDirectorySync(sourceFilePath)) {
              _results.push(fsPlus.copySync(sourceFilePath, destinationFilePath));
            } else {
              _results.push(fsPlus.copyFileSync(sourceFilePath, destinationFilePath));
            }
          }
          return _results;
        },
        copyFileSync: function(sourceFilePath, destinationFilePath, bufferSize) {
          var buffer, bytesRead, position, readFd, writeFd, _results;
          if (bufferSize == null) {
            bufferSize = 16 * 1024;
          }
          mkdirp.sync(path2.dirname(destinationFilePath));
          readFd = null;
          writeFd = null;
          try {
            readFd = fs.openSync(sourceFilePath, "r");
            writeFd = fs.openSync(destinationFilePath, "w");
            bytesRead = 1;
            position = 0;
            _results = [];
            while (bytesRead > 0) {
              buffer = new Buffer(bufferSize);
              bytesRead = fs.readSync(readFd, buffer, 0, buffer.length, position);
              fs.writeSync(writeFd, buffer, 0, bytesRead, position);
              _results.push(position += bytesRead);
            }
            return _results;
          } finally {
            if (readFd != null) {
              fs.closeSync(readFd);
            }
            if (writeFd != null) {
              fs.closeSync(writeFd);
            }
          }
        },
        makeTreeSync: function(directoryPath) {
          if (!fsPlus.isDirectorySync(directoryPath)) {
            return mkdirp.sync(directoryPath);
          }
        },
        makeTree: function(directoryPath, callback) {
          return fsPlus.isDirectory(directoryPath, function(exists) {
            if (exists) {
              return typeof callback === "function" ? callback() : void 0;
            }
            return mkdirp(directoryPath, function(error) {
              return typeof callback === "function" ? callback(error) : void 0;
            });
          });
        },
        traverseTreeSync: function(rootPath, onFile, onDirectory) {
          var traverse;
          if (onDirectory == null) {
            onDirectory = onFile;
          }
          if (!fsPlus.isDirectorySync(rootPath)) {
            return;
          }
          traverse = function(directoryPath, onFile2, onDirectory2) {
            var childPath, file, linkStats, stats, _i, _len, _ref;
            _ref = fs.readdirSync(directoryPath);
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              file = _ref[_i];
              childPath = path2.join(directoryPath, file);
              stats = fs.lstatSync(childPath);
              if (stats.isSymbolicLink()) {
                if (linkStats = statSyncNoException(childPath)) {
                  stats = linkStats;
                }
              }
              if (stats.isDirectory()) {
                if (onDirectory2(childPath)) {
                  traverse(childPath, onFile2, onDirectory2);
                }
              } else if (stats.isFile()) {
                onFile2(childPath);
              }
            }
            return void 0;
          };
          return traverse(rootPath, onFile, onDirectory);
        },
        traverseTree: function(rootPath, onFile, onDirectory, onDone) {
          return fs.readdir(rootPath, function(error, files) {
            var file, queue, _i, _len, _results;
            if (error) {
              return typeof onDone === "function" ? onDone() : void 0;
            } else {
              queue = async.queue(function(childPath, callback) {
                return fs.stat(childPath, function(error2, stats) {
                  if (error2) {
                    return callback(error2);
                  } else if (stats.isFile()) {
                    onFile(childPath);
                    return callback();
                  } else if (stats.isDirectory()) {
                    if (onDirectory(childPath)) {
                      return fs.readdir(childPath, function(error3, files2) {
                        var file2, _i2, _len2;
                        if (error3) {
                          return callback(error3);
                        } else {
                          for (_i2 = 0, _len2 = files2.length; _i2 < _len2; _i2++) {
                            file2 = files2[_i2];
                            queue.unshift(path2.join(childPath, file2));
                          }
                          return callback();
                        }
                      });
                    } else {
                      return callback();
                    }
                  } else {
                    return callback();
                  }
                });
              });
              queue.concurrency = 1;
              queue.drain = onDone;
              _results = [];
              for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                _results.push(queue.push(path2.join(rootPath, file)));
              }
              return _results;
            }
          });
        },
        md5ForPath: function(pathToDigest) {
          var contents;
          contents = fs.readFileSync(pathToDigest);
          return require("crypto").createHash("md5").update(contents).digest("hex");
        },
        resolve: function() {
          var args, candidatePath, extensions, loadPath, loadPaths, pathToResolve, resolvedPath, _i, _len, _ref;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if (_3.isArray(_3.last(args))) {
            extensions = args.pop();
          }
          pathToResolve = (_ref = args.pop()) != null ? _ref.toString() : void 0;
          loadPaths = args;
          if (!pathToResolve) {
            return void 0;
          }
          if (fsPlus.isAbsolute(pathToResolve)) {
            if (extensions && (resolvedPath = fsPlus.resolveExtension(pathToResolve, extensions))) {
              return resolvedPath;
            } else {
              if (fsPlus.existsSync(pathToResolve)) {
                return pathToResolve;
              }
            }
          }
          for (_i = 0, _len = loadPaths.length; _i < _len; _i++) {
            loadPath = loadPaths[_i];
            candidatePath = path2.join(loadPath, pathToResolve);
            if (extensions) {
              if (resolvedPath = fsPlus.resolveExtension(candidatePath, extensions)) {
                return resolvedPath;
              }
            } else {
              if (fsPlus.existsSync(candidatePath)) {
                return fsPlus.absolute(candidatePath);
              }
            }
          }
          return void 0;
        },
        resolveOnLoadPath: function() {
          var args, loadPaths, modulePaths;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          modulePaths = null;
          if (module2.paths != null) {
            modulePaths = module2.paths;
          } else if (process.resourcesPath) {
            modulePaths = [path2.join(process.resourcesPath, "app", "node_modules")];
          } else {
            modulePaths = [];
          }
          loadPaths = Module.globalPaths.concat(modulePaths);
          return fsPlus.resolve.apply(fsPlus, __slice.call(loadPaths).concat(__slice.call(args)));
        },
        resolveExtension: function(pathToResolve, extensions) {
          var extension, pathWithExtension, _i, _len;
          for (_i = 0, _len = extensions.length; _i < _len; _i++) {
            extension = extensions[_i];
            if (extension === "") {
              if (fsPlus.existsSync(pathToResolve)) {
                return fsPlus.absolute(pathToResolve);
              }
            } else {
              pathWithExtension = pathToResolve + "." + extension.replace(/^\./, "");
              if (fsPlus.existsSync(pathWithExtension)) {
                return fsPlus.absolute(pathWithExtension);
              }
            }
          }
          return void 0;
        },
        isCompressedExtension: function(ext) {
          if (ext == null) {
            return false;
          }
          return COMPRESSED_EXTENSIONS.hasOwnProperty(ext.toLowerCase());
        },
        isImageExtension: function(ext) {
          if (ext == null) {
            return false;
          }
          return IMAGE_EXTENSIONS.hasOwnProperty(ext.toLowerCase());
        },
        isPdfExtension: function(ext) {
          return (ext != null ? ext.toLowerCase() : void 0) === ".pdf";
        },
        isBinaryExtension: function(ext) {
          if (ext == null) {
            return false;
          }
          return BINARY_EXTENSIONS.hasOwnProperty(ext.toLowerCase());
        },
        isReadmePath: function(readmePath) {
          var base, extension;
          extension = path2.extname(readmePath);
          base = path2.basename(readmePath, extension).toLowerCase();
          return base === "readme" && (extension === "" || fsPlus.isMarkdownExtension(extension));
        },
        isMarkdownExtension: function(ext) {
          if (ext == null) {
            return false;
          }
          return MARKDOWN_EXTENSIONS.hasOwnProperty(ext.toLowerCase());
        },
        isCaseInsensitive: function() {
          var lowerCaseStat, upperCaseStat;
          if (fsPlus.caseInsensitiveFs == null) {
            lowerCaseStat = statSyncNoException(process.execPath.toLowerCase());
            upperCaseStat = statSyncNoException(process.execPath.toUpperCase());
            if (lowerCaseStat && upperCaseStat) {
              fsPlus.caseInsensitiveFs = lowerCaseStat.dev === upperCaseStat.dev && lowerCaseStat.ino === upperCaseStat.ino;
            } else {
              fsPlus.caseInsensitiveFs = false;
            }
          }
          return fsPlus.caseInsensitiveFs;
        },
        isCaseSensitive: function() {
          return !fsPlus.isCaseInsensitive();
        },
        statSyncNoException: function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return statSyncNoException.apply(null, args);
        },
        lstatSyncNoException: function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return lstatSyncNoException.apply(null, args);
        }
      };
      isElectron2OrLower = null;
      checkIfElectron2OrLower = function() {
        if (isElectron2OrLower === null) {
          isElectron2OrLower = process.versions.electron && parseInt(process.versions.electron.split(".")[0]) <= 2;
        }
        return isElectron2OrLower;
      };
      statSyncNoException = function() {
        var args, error;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (fs.statSyncNoException && checkIfElectron2OrLower()) {
          return fs.statSyncNoException.apply(fs, args);
        } else {
          try {
            return fs.statSync.apply(fs, args);
          } catch (_error) {
            error = _error;
            return false;
          }
        }
      };
      lstatSyncNoException = function() {
        var args, error;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (fs.lstatSyncNoException && checkIfElectron2OrLower()) {
          return fs.lstatSyncNoException.apply(fs, args);
        } else {
          try {
            return fs.lstatSync.apply(fs, args);
          } catch (_error) {
            error = _error;
            return false;
          }
        }
      };
      BINARY_EXTENSIONS = {
        ".ds_store": true,
        ".a": true,
        ".exe": true,
        ".o": true,
        ".pyc": true,
        ".pyo": true,
        ".so": true,
        ".woff": true
      };
      COMPRESSED_EXTENSIONS = {
        ".bz2": true,
        ".egg": true,
        ".epub": true,
        ".gem": true,
        ".gz": true,
        ".jar": true,
        ".lz": true,
        ".lzma": true,
        ".lzo": true,
        ".rar": true,
        ".tar": true,
        ".tgz": true,
        ".war": true,
        ".whl": true,
        ".xpi": true,
        ".xz": true,
        ".z": true,
        ".zip": true
      };
      IMAGE_EXTENSIONS = {
        ".gif": true,
        ".ico": true,
        ".jpeg": true,
        ".jpg": true,
        ".png": true,
        ".tif": true,
        ".tiff": true,
        ".webp": true
      };
      MARKDOWN_EXTENSIONS = {
        ".markdown": true,
        ".md": true,
        ".mdown": true,
        ".mkd": true,
        ".mkdown": true,
        ".rmd": true,
        ".ron": true
      };
      isPathValid = function(pathToCheck) {
        return pathToCheck != null && typeof pathToCheck === "string" && pathToCheck.length > 0;
      };
      isMoveTargetValid = function(source, target, callback) {
        return fs.stat(source, function(oldErr, oldStat) {
          if (oldErr) {
            callback(oldErr);
            return;
          }
          return fs.stat(target, function(newErr, newStat) {
            if (newErr && newErr.code === "ENOENT") {
              callback(void 0, true);
              return;
            }
            return callback(void 0, source.toLowerCase() === target.toLowerCase() && oldStat.dev === newStat.dev && oldStat.ino === newStat.ino);
          });
        });
      };
      isMoveTargetValidSync = function(source, target) {
        var newStat, oldStat;
        oldStat = statSyncNoException(source);
        newStat = statSyncNoException(target);
        if (!(oldStat && newStat)) {
          return true;
        }
        return source.toLowerCase() === target.toLowerCase() && oldStat.dev === newStat.dev && oldStat.ino === newStat.ino;
      };
      module2.exports = new Proxy({}, {
        get: function(target, key) {
          var _ref;
          return (_ref = fsPlus[key]) != null ? _ref : fs[key];
        },
        set: function(target, key, value) {
          return fsPlus[key] = value;
        }
      });
    }).call(exports);
  }
});

// ../node_modules/cson-parser/lib/stringify.js
var require_stringify = __commonJS({
  "../node_modules/cson-parser/lib/stringify.js"(exports, module2) {
    "use strict";
    var jsIdentifierRE = /^[a-z_$][a-z0-9_$]*$/i;
    var tripleQuotesRE = /'''/g;
    var SPACES = "          ";
    function newlineWrap(str) {
      return str && "\n" + str + "\n";
    }
    function isObject2(obj) {
      return typeof obj === "object" && obj !== null && !Array.isArray(obj);
    }
    function parseIndent(indent) {
      switch (typeof indent) {
        case "string":
          return indent.slice(0, 10);
        case "number":
          var n = Math.max(0, Math.min(10, Math.floor(indent)));
          return SPACES.slice(0, n);
        default:
          return 0;
      }
    }
    function indentLine(indent, line) {
      return indent + line;
    }
    function indentLines(indent, str) {
      if (str === "") {
        return str;
      }
      return str.split("\n").map(indentLine.bind(null, indent)).join("\n");
    }
    function buildKeyPairs(visitNode, indent, obj) {
      return Object.keys(obj).map(function addKey(key) {
        var value = obj[key];
        if (!key.match(jsIdentifierRE)) {
          key = JSON.stringify(key);
        }
        var serializedValue = visitNode(value, {
          bracesRequired: !indent
        });
        if (indent) {
          serializedValue = isObject2(value) && Object.keys(value).length > 0 ? "\n" + indentLines(indent, serializedValue) : " " + serializedValue;
        }
        return key + ":" + serializedValue;
      });
    }
    function visitArray(visitNode, indent, arr) {
      var items = arr.map(function visitElement(value) {
        return visitNode(value, {
          bracesRequired: true
        });
      });
      var serializedItems = indent ? newlineWrap(indentLines(indent, items.join("\n"))) : items.join(",");
      return "[" + serializedItems + "]";
    }
    function visitObject(visitNode, indent, obj, arg) {
      var bracesRequired = arg.bracesRequired;
      var keypairs = buildKeyPairs(visitNode, indent, obj);
      if (keypairs.length === 0)
        return "{}";
      if (indent) {
        var keyPairLines = keypairs.join("\n");
        if (bracesRequired) {
          return "{" + newlineWrap(indentLines(indent, keyPairLines)) + "}";
        }
        return keyPairLines;
      }
      var serializedKeyPairs = keypairs.join(",");
      if (bracesRequired) {
        return "{" + serializedKeyPairs + "}";
      }
      return serializedKeyPairs;
    }
    function visitString(visitNode, indent, str) {
      var string;
      if (str.indexOf("\n") === -1 || !indent) {
        return JSON.stringify(str);
      }
      string = str.replace(/\\/g, "\\\\").replace(tripleQuotesRE, "\\'''");
      return "'''" + newlineWrap(indentLines(indent, string)) + "'''";
    }
    function stringify(data, visitor, indent) {
      if (typeof data === "function" || typeof data === "undefined")
        return void 0;
      indent = parseIndent(indent);
      var normalized = JSON.parse(JSON.stringify(data, visitor));
      function visitNode(node, options) {
        if (options == null) {
          options = {};
        }
        switch (typeof node) {
          case "boolean":
            return "" + node;
          case "number":
            if (isFinite(node)) {
              return "" + node;
            }
            return "null";
          case "string":
            return visitString(visitNode, indent, node, options);
          case "object":
            if (node === null) {
              return "null";
            } else if (Array.isArray(node)) {
              return visitArray(visitNode, indent, node, options);
            }
            return visitObject(visitNode, indent, node, options);
          default:
            return void 0;
        }
      }
      return visitNode(normalized);
    }
    module2.exports = stringify;
  }
});

// ../node_modules/coffee-script/lib/coffee-script/rewriter.js
var require_rewriter = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/rewriter.js"(exports) {
    (function() {
      var BALANCED_PAIRS, CALL_CLOSERS, EXPRESSION_CLOSE, EXPRESSION_END, EXPRESSION_START, IMPLICIT_CALL, IMPLICIT_END, IMPLICIT_FUNC, IMPLICIT_UNSPACED_CALL, INVERSES, LINEBREAKS, Rewriter, SINGLE_CLOSERS, SINGLE_LINERS, generate, k, left, len, ref, rite, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item)
            return i;
        }
        return -1;
      }, slice2 = [].slice;
      generate = function(tag, value, origin) {
        var tok;
        tok = [tag, value];
        tok.generated = true;
        if (origin) {
          tok.origin = origin;
        }
        return tok;
      };
      exports.Rewriter = Rewriter = function() {
        function Rewriter2() {
        }
        Rewriter2.prototype.rewrite = function(tokens1) {
          this.tokens = tokens1;
          this.removeLeadingNewlines();
          this.closeOpenCalls();
          this.closeOpenIndexes();
          this.normalizeLines();
          this.tagPostfixConditionals();
          this.addImplicitBracesAndParens();
          this.addLocationDataToGeneratedTokens();
          this.fixOutdentLocationData();
          return this.tokens;
        };
        Rewriter2.prototype.scanTokens = function(block) {
          var i, token, tokens;
          tokens = this.tokens;
          i = 0;
          while (token = tokens[i]) {
            i += block.call(this, token, i, tokens);
          }
          return true;
        };
        Rewriter2.prototype.detectEnd = function(i, condition, action) {
          var levels, ref2, ref1, token, tokens;
          tokens = this.tokens;
          levels = 0;
          while (token = tokens[i]) {
            if (levels === 0 && condition.call(this, token, i)) {
              return action.call(this, token, i);
            }
            if (!token || levels < 0) {
              return action.call(this, token, i - 1);
            }
            if (ref2 = token[0], indexOf.call(EXPRESSION_START, ref2) >= 0) {
              levels += 1;
            } else if (ref1 = token[0], indexOf.call(EXPRESSION_END, ref1) >= 0) {
              levels -= 1;
            }
            i += 1;
          }
          return i - 1;
        };
        Rewriter2.prototype.removeLeadingNewlines = function() {
          var i, k2, len2, ref2, tag;
          ref2 = this.tokens;
          for (i = k2 = 0, len2 = ref2.length; k2 < len2; i = ++k2) {
            tag = ref2[i][0];
            if (tag !== "TERMINATOR") {
              break;
            }
          }
          if (i) {
            return this.tokens.splice(0, i);
          }
        };
        Rewriter2.prototype.closeOpenCalls = function() {
          var action, condition;
          condition = function(token, i) {
            var ref2;
            return (ref2 = token[0]) === ")" || ref2 === "CALL_END" || token[0] === "OUTDENT" && this.tag(i - 1) === ")";
          };
          action = function(token, i) {
            return this.tokens[token[0] === "OUTDENT" ? i - 1 : i][0] = "CALL_END";
          };
          return this.scanTokens(function(token, i) {
            if (token[0] === "CALL_START") {
              this.detectEnd(i + 1, condition, action);
            }
            return 1;
          });
        };
        Rewriter2.prototype.closeOpenIndexes = function() {
          var action, condition;
          condition = function(token, i) {
            var ref2;
            return (ref2 = token[0]) === "]" || ref2 === "INDEX_END";
          };
          action = function(token, i) {
            return token[0] = "INDEX_END";
          };
          return this.scanTokens(function(token, i) {
            if (token[0] === "INDEX_START") {
              this.detectEnd(i + 1, condition, action);
            }
            return 1;
          });
        };
        Rewriter2.prototype.indexOfTag = function() {
          var fuzz, i, j, k2, pattern, ref2, ref1;
          i = arguments[0], pattern = 2 <= arguments.length ? slice2.call(arguments, 1) : [];
          fuzz = 0;
          for (j = k2 = 0, ref2 = pattern.length; 0 <= ref2 ? k2 < ref2 : k2 > ref2; j = 0 <= ref2 ? ++k2 : --k2) {
            while (this.tag(i + j + fuzz) === "HERECOMMENT") {
              fuzz += 2;
            }
            if (pattern[j] == null) {
              continue;
            }
            if (typeof pattern[j] === "string") {
              pattern[j] = [pattern[j]];
            }
            if (ref1 = this.tag(i + j + fuzz), indexOf.call(pattern[j], ref1) < 0) {
              return -1;
            }
          }
          return i + j + fuzz - 1;
        };
        Rewriter2.prototype.looksObjectish = function(j) {
          var end, index;
          if (this.indexOfTag(j, "@", null, ":") > -1 || this.indexOfTag(j, null, ":") > -1) {
            return true;
          }
          index = this.indexOfTag(j, EXPRESSION_START);
          if (index > -1) {
            end = null;
            this.detectEnd(index + 1, function(token) {
              var ref2;
              return ref2 = token[0], indexOf.call(EXPRESSION_END, ref2) >= 0;
            }, function(token, i) {
              return end = i;
            });
            if (this.tag(end + 1) === ":") {
              return true;
            }
          }
          return false;
        };
        Rewriter2.prototype.findTagsBackwards = function(i, tags) {
          var backStack, ref2, ref1, ref22, ref3, ref4, ref5;
          backStack = [];
          while (i >= 0 && (backStack.length || (ref22 = this.tag(i), indexOf.call(tags, ref22) < 0) && ((ref3 = this.tag(i), indexOf.call(EXPRESSION_START, ref3) < 0) || this.tokens[i].generated) && (ref4 = this.tag(i), indexOf.call(LINEBREAKS, ref4) < 0))) {
            if (ref2 = this.tag(i), indexOf.call(EXPRESSION_END, ref2) >= 0) {
              backStack.push(this.tag(i));
            }
            if ((ref1 = this.tag(i), indexOf.call(EXPRESSION_START, ref1) >= 0) && backStack.length) {
              backStack.pop();
            }
            i -= 1;
          }
          return ref5 = this.tag(i), indexOf.call(tags, ref5) >= 0;
        };
        Rewriter2.prototype.addImplicitBracesAndParens = function() {
          var stack, start;
          stack = [];
          start = null;
          return this.scanTokens(function(token, i, tokens) {
            var endImplicitCall, endImplicitObject, forward, inImplicit, inImplicitCall, inImplicitControl, inImplicitObject, isImplicit, isImplicitCall, isImplicitObject, k2, newLine, nextTag, offset, prevTag, prevToken, ref2, ref1, ref22, ref3, ref4, ref5, s, sameLine, stackIdx, stackItem, stackTag, stackTop, startIdx, startImplicitCall, startImplicitObject, startsLine, tag;
            tag = token[0];
            prevTag = (prevToken = i > 0 ? tokens[i - 1] : [])[0];
            nextTag = (i < tokens.length - 1 ? tokens[i + 1] : [])[0];
            stackTop = function() {
              return stack[stack.length - 1];
            };
            startIdx = i;
            forward = function(n) {
              return i - startIdx + n;
            };
            isImplicit = function(stackItem2) {
              var ref6;
              return stackItem2 != null ? (ref6 = stackItem2[2]) != null ? ref6.ours : void 0 : void 0;
            };
            isImplicitObject = function(stackItem2) {
              return isImplicit(stackItem2) && (stackItem2 != null ? stackItem2[0] : void 0) === "{";
            };
            isImplicitCall = function(stackItem2) {
              return isImplicit(stackItem2) && (stackItem2 != null ? stackItem2[0] : void 0) === "(";
            };
            inImplicit = function() {
              return isImplicit(stackTop());
            };
            inImplicitCall = function() {
              return isImplicitCall(stackTop());
            };
            inImplicitObject = function() {
              return isImplicitObject(stackTop());
            };
            inImplicitControl = function() {
              var ref6;
              return inImplicit && ((ref6 = stackTop()) != null ? ref6[0] : void 0) === "CONTROL";
            };
            startImplicitCall = function(j) {
              var idx;
              idx = j != null ? j : i;
              stack.push([
                "(",
                idx,
                {
                  ours: true
                }
              ]);
              tokens.splice(idx, 0, generate("CALL_START", "(", ["", "implicit function call", token[2]]));
              if (j == null) {
                return i += 1;
              }
            };
            endImplicitCall = function() {
              stack.pop();
              tokens.splice(i, 0, generate("CALL_END", ")", ["", "end of input", token[2]]));
              return i += 1;
            };
            startImplicitObject = function(j, startsLine2) {
              var idx, val;
              if (startsLine2 == null) {
                startsLine2 = true;
              }
              idx = j != null ? j : i;
              stack.push([
                "{",
                idx,
                {
                  sameLine: true,
                  startsLine: startsLine2,
                  ours: true
                }
              ]);
              val = new String("{");
              val.generated = true;
              tokens.splice(idx, 0, generate("{", val, token));
              if (j == null) {
                return i += 1;
              }
            };
            endImplicitObject = function(j) {
              j = j != null ? j : i;
              stack.pop();
              tokens.splice(j, 0, generate("}", "}", token));
              return i += 1;
            };
            if (inImplicitCall() && (tag === "IF" || tag === "TRY" || tag === "FINALLY" || tag === "CATCH" || tag === "CLASS" || tag === "SWITCH")) {
              stack.push([
                "CONTROL",
                i,
                {
                  ours: true
                }
              ]);
              return forward(1);
            }
            if (tag === "INDENT" && inImplicit()) {
              if (prevTag !== "=>" && prevTag !== "->" && prevTag !== "[" && prevTag !== "(" && prevTag !== "," && prevTag !== "{" && prevTag !== "TRY" && prevTag !== "ELSE" && prevTag !== "=") {
                while (inImplicitCall()) {
                  endImplicitCall();
                }
              }
              if (inImplicitControl()) {
                stack.pop();
              }
              stack.push([tag, i]);
              return forward(1);
            }
            if (indexOf.call(EXPRESSION_START, tag) >= 0) {
              stack.push([tag, i]);
              return forward(1);
            }
            if (indexOf.call(EXPRESSION_END, tag) >= 0) {
              while (inImplicit()) {
                if (inImplicitCall()) {
                  endImplicitCall();
                } else if (inImplicitObject()) {
                  endImplicitObject();
                } else {
                  stack.pop();
                }
              }
              start = stack.pop();
            }
            if ((indexOf.call(IMPLICIT_FUNC, tag) >= 0 && token.spaced || tag === "?" && i > 0 && !tokens[i - 1].spaced) && (indexOf.call(IMPLICIT_CALL, nextTag) >= 0 || indexOf.call(IMPLICIT_UNSPACED_CALL, nextTag) >= 0 && !((ref2 = tokens[i + 1]) != null ? ref2.spaced : void 0) && !((ref1 = tokens[i + 1]) != null ? ref1.newLine : void 0))) {
              if (tag === "?") {
                tag = token[0] = "FUNC_EXIST";
              }
              startImplicitCall(i + 1);
              return forward(2);
            }
            if (indexOf.call(IMPLICIT_FUNC, tag) >= 0 && this.indexOfTag(i + 1, "INDENT") > -1 && this.looksObjectish(i + 2) && !this.findTagsBackwards(i, ["CLASS", "EXTENDS", "IF", "CATCH", "SWITCH", "LEADING_WHEN", "FOR", "WHILE", "UNTIL"])) {
              startImplicitCall(i + 1);
              stack.push(["INDENT", i + 2]);
              return forward(3);
            }
            if (tag === ":") {
              s = function() {
                var ref23;
                switch (false) {
                  case (ref23 = this.tag(i - 1), indexOf.call(EXPRESSION_END, ref23) < 0):
                    return start[1];
                  case this.tag(i - 2) !== "@":
                    return i - 2;
                  default:
                    return i - 1;
                }
              }.call(this);
              while (this.tag(s - 2) === "HERECOMMENT") {
                s -= 2;
              }
              this.insideForDeclaration = nextTag === "FOR";
              startsLine = s === 0 || (ref22 = this.tag(s - 1), indexOf.call(LINEBREAKS, ref22) >= 0) || tokens[s - 1].newLine;
              if (stackTop()) {
                ref3 = stackTop(), stackTag = ref3[0], stackIdx = ref3[1];
                if ((stackTag === "{" || stackTag === "INDENT" && this.tag(stackIdx - 1) === "{") && (startsLine || this.tag(s - 1) === "," || this.tag(s - 1) === "{")) {
                  return forward(1);
                }
              }
              startImplicitObject(s, !!startsLine);
              return forward(2);
            }
            if (indexOf.call(LINEBREAKS, tag) >= 0) {
              for (k2 = stack.length - 1; k2 >= 0; k2 += -1) {
                stackItem = stack[k2];
                if (!isImplicit(stackItem)) {
                  break;
                }
                if (isImplicitObject(stackItem)) {
                  stackItem[2].sameLine = false;
                }
              }
            }
            newLine = prevTag === "OUTDENT" || prevToken.newLine;
            if (indexOf.call(IMPLICIT_END, tag) >= 0 || indexOf.call(CALL_CLOSERS, tag) >= 0 && newLine) {
              while (inImplicit()) {
                ref4 = stackTop(), stackTag = ref4[0], stackIdx = ref4[1], ref5 = ref4[2], sameLine = ref5.sameLine, startsLine = ref5.startsLine;
                if (inImplicitCall() && prevTag !== ",") {
                  endImplicitCall();
                } else if (inImplicitObject() && !this.insideForDeclaration && sameLine && tag !== "TERMINATOR" && prevTag !== ":") {
                  endImplicitObject();
                } else if (inImplicitObject() && tag === "TERMINATOR" && prevTag !== "," && !(startsLine && this.looksObjectish(i + 1))) {
                  if (nextTag === "HERECOMMENT") {
                    return forward(1);
                  }
                  endImplicitObject();
                } else {
                  break;
                }
              }
            }
            if (tag === "," && !this.looksObjectish(i + 1) && inImplicitObject() && !this.insideForDeclaration && (nextTag !== "TERMINATOR" || !this.looksObjectish(i + 2))) {
              offset = nextTag === "OUTDENT" ? 1 : 0;
              while (inImplicitObject()) {
                endImplicitObject(i + offset);
              }
            }
            return forward(1);
          });
        };
        Rewriter2.prototype.addLocationDataToGeneratedTokens = function() {
          return this.scanTokens(function(token, i, tokens) {
            var column, line, nextLocation, prevLocation, ref2, ref1;
            if (token[2]) {
              return 1;
            }
            if (!(token.generated || token.explicit)) {
              return 1;
            }
            if (token[0] === "{" && (nextLocation = (ref2 = tokens[i + 1]) != null ? ref2[2] : void 0)) {
              line = nextLocation.first_line, column = nextLocation.first_column;
            } else if (prevLocation = (ref1 = tokens[i - 1]) != null ? ref1[2] : void 0) {
              line = prevLocation.last_line, column = prevLocation.last_column;
            } else {
              line = column = 0;
            }
            token[2] = {
              first_line: line,
              first_column: column,
              last_line: line,
              last_column: column
            };
            return 1;
          });
        };
        Rewriter2.prototype.fixOutdentLocationData = function() {
          return this.scanTokens(function(token, i, tokens) {
            var prevLocationData;
            if (!(token[0] === "OUTDENT" || token.generated && token[0] === "CALL_END" || token.generated && token[0] === "}")) {
              return 1;
            }
            prevLocationData = tokens[i - 1][2];
            token[2] = {
              first_line: prevLocationData.last_line,
              first_column: prevLocationData.last_column,
              last_line: prevLocationData.last_line,
              last_column: prevLocationData.last_column
            };
            return 1;
          });
        };
        Rewriter2.prototype.normalizeLines = function() {
          var action, condition, indent, outdent, starter;
          starter = indent = outdent = null;
          condition = function(token, i) {
            var ref2, ref1, ref22, ref3;
            return token[1] !== ";" && (ref2 = token[0], indexOf.call(SINGLE_CLOSERS, ref2) >= 0) && !(token[0] === "TERMINATOR" && (ref1 = this.tag(i + 1), indexOf.call(EXPRESSION_CLOSE, ref1) >= 0)) && !(token[0] === "ELSE" && starter !== "THEN") && !(((ref22 = token[0]) === "CATCH" || ref22 === "FINALLY") && (starter === "->" || starter === "=>")) || (ref3 = token[0], indexOf.call(CALL_CLOSERS, ref3) >= 0) && (this.tokens[i - 1].newLine || this.tokens[i - 1][0] === "OUTDENT");
          };
          action = function(token, i) {
            return this.tokens.splice(this.tag(i - 1) === "," ? i - 1 : i, 0, outdent);
          };
          return this.scanTokens(function(token, i, tokens) {
            var j, k2, ref2, ref1, ref22, tag;
            tag = token[0];
            if (tag === "TERMINATOR") {
              if (this.tag(i + 1) === "ELSE" && this.tag(i - 1) !== "OUTDENT") {
                tokens.splice.apply(tokens, [i, 1].concat(slice2.call(this.indentation())));
                return 1;
              }
              if (ref2 = this.tag(i + 1), indexOf.call(EXPRESSION_CLOSE, ref2) >= 0) {
                tokens.splice(i, 1);
                return 0;
              }
            }
            if (tag === "CATCH") {
              for (j = k2 = 1; k2 <= 2; j = ++k2) {
                if (!((ref1 = this.tag(i + j)) === "OUTDENT" || ref1 === "TERMINATOR" || ref1 === "FINALLY")) {
                  continue;
                }
                tokens.splice.apply(tokens, [i + j, 0].concat(slice2.call(this.indentation())));
                return 2 + j;
              }
            }
            if (indexOf.call(SINGLE_LINERS, tag) >= 0 && this.tag(i + 1) !== "INDENT" && !(tag === "ELSE" && this.tag(i + 1) === "IF")) {
              starter = tag;
              ref22 = this.indentation(tokens[i]), indent = ref22[0], outdent = ref22[1];
              if (starter === "THEN") {
                indent.fromThen = true;
              }
              tokens.splice(i + 1, 0, indent);
              this.detectEnd(i + 2, condition, action);
              if (tag === "THEN") {
                tokens.splice(i, 1);
              }
              return 1;
            }
            return 1;
          });
        };
        Rewriter2.prototype.tagPostfixConditionals = function() {
          var action, condition, original;
          original = null;
          condition = function(token, i) {
            var prevTag, tag;
            tag = token[0];
            prevTag = this.tokens[i - 1][0];
            return tag === "TERMINATOR" || tag === "INDENT" && indexOf.call(SINGLE_LINERS, prevTag) < 0;
          };
          action = function(token, i) {
            if (token[0] !== "INDENT" || token.generated && !token.fromThen) {
              return original[0] = "POST_" + original[0];
            }
          };
          return this.scanTokens(function(token, i) {
            if (token[0] !== "IF") {
              return 1;
            }
            original = token;
            this.detectEnd(i + 1, condition, action);
            return 1;
          });
        };
        Rewriter2.prototype.indentation = function(origin) {
          var indent, outdent;
          indent = ["INDENT", 2];
          outdent = ["OUTDENT", 2];
          if (origin) {
            indent.generated = outdent.generated = true;
            indent.origin = outdent.origin = origin;
          } else {
            indent.explicit = outdent.explicit = true;
          }
          return [indent, outdent];
        };
        Rewriter2.prototype.generate = generate;
        Rewriter2.prototype.tag = function(i) {
          var ref2;
          return (ref2 = this.tokens[i]) != null ? ref2[0] : void 0;
        };
        return Rewriter2;
      }();
      BALANCED_PAIRS = [["(", ")"], ["[", "]"], ["{", "}"], ["INDENT", "OUTDENT"], ["CALL_START", "CALL_END"], ["PARAM_START", "PARAM_END"], ["INDEX_START", "INDEX_END"], ["STRING_START", "STRING_END"], ["REGEX_START", "REGEX_END"]];
      exports.INVERSES = INVERSES = {};
      EXPRESSION_START = [];
      EXPRESSION_END = [];
      for (k = 0, len = BALANCED_PAIRS.length; k < len; k++) {
        ref = BALANCED_PAIRS[k], left = ref[0], rite = ref[1];
        EXPRESSION_START.push(INVERSES[rite] = left);
        EXPRESSION_END.push(INVERSES[left] = rite);
      }
      EXPRESSION_CLOSE = ["CATCH", "THEN", "ELSE", "FINALLY"].concat(EXPRESSION_END);
      IMPLICIT_FUNC = ["IDENTIFIER", "PROPERTY", "SUPER", ")", "CALL_END", "]", "INDEX_END", "@", "THIS"];
      IMPLICIT_CALL = ["IDENTIFIER", "PROPERTY", "NUMBER", "INFINITY", "NAN", "STRING", "STRING_START", "REGEX", "REGEX_START", "JS", "NEW", "PARAM_START", "CLASS", "IF", "TRY", "SWITCH", "THIS", "UNDEFINED", "NULL", "BOOL", "UNARY", "YIELD", "UNARY_MATH", "SUPER", "THROW", "@", "->", "=>", "[", "(", "{", "--", "++"];
      IMPLICIT_UNSPACED_CALL = ["+", "-"];
      IMPLICIT_END = ["POST_IF", "FOR", "WHILE", "UNTIL", "WHEN", "BY", "LOOP", "TERMINATOR"];
      SINGLE_LINERS = ["ELSE", "->", "=>", "TRY", "FINALLY", "THEN"];
      SINGLE_CLOSERS = ["TERMINATOR", "CATCH", "FINALLY", "ELSE", "OUTDENT", "LEADING_WHEN"];
      LINEBREAKS = ["TERMINATOR", "INDENT", "OUTDENT"];
      CALL_CLOSERS = [".", "?.", "::", "?::"];
    }).call(exports);
  }
});

// ../node_modules/coffee-script/lib/coffee-script/helpers.js
var require_helpers = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/helpers.js"(exports) {
    (function() {
      var buildLocationData, extend, flatten3, ref, repeat, syntaxErrorToString;
      exports.starts = function(string, literal, start) {
        return literal === string.substr(start, literal.length);
      };
      exports.ends = function(string, literal, back) {
        var len;
        len = literal.length;
        return literal === string.substr(string.length - len - (back || 0), len);
      };
      exports.repeat = repeat = function(str, n) {
        var res;
        res = "";
        while (n > 0) {
          if (n & 1) {
            res += str;
          }
          n >>>= 1;
          str += str;
        }
        return res;
      };
      exports.compact = function(array) {
        var i, item, len1, results;
        results = [];
        for (i = 0, len1 = array.length; i < len1; i++) {
          item = array[i];
          if (item) {
            results.push(item);
          }
        }
        return results;
      };
      exports.count = function(string, substr) {
        var num, pos;
        num = pos = 0;
        if (!substr.length) {
          return 1 / 0;
        }
        while (pos = 1 + string.indexOf(substr, pos)) {
          num++;
        }
        return num;
      };
      exports.merge = function(options, overrides) {
        return extend(extend({}, options), overrides);
      };
      extend = exports.extend = function(object2, properties) {
        var key, val;
        for (key in properties) {
          val = properties[key];
          object2[key] = val;
        }
        return object2;
      };
      exports.flatten = flatten3 = function(array) {
        var element, flattened, i, len1;
        flattened = [];
        for (i = 0, len1 = array.length; i < len1; i++) {
          element = array[i];
          if ("[object Array]" === Object.prototype.toString.call(element)) {
            flattened = flattened.concat(flatten3(element));
          } else {
            flattened.push(element);
          }
        }
        return flattened;
      };
      exports.del = function(obj, key) {
        var val;
        val = obj[key];
        delete obj[key];
        return val;
      };
      exports.some = (ref = Array.prototype.some) != null ? ref : function(fn) {
        var e, i, len1, ref1;
        ref1 = this;
        for (i = 0, len1 = ref1.length; i < len1; i++) {
          e = ref1[i];
          if (fn(e)) {
            return true;
          }
        }
        return false;
      };
      exports.invertLiterate = function(code) {
        var line, lines, maybe_code;
        maybe_code = true;
        lines = function() {
          var i, len1, ref1, results;
          ref1 = code.split("\n");
          results = [];
          for (i = 0, len1 = ref1.length; i < len1; i++) {
            line = ref1[i];
            if (maybe_code && /^([ ]{4}|[ ]{0,3}\t)/.test(line)) {
              results.push(line);
            } else if (maybe_code = /^\s*$/.test(line)) {
              results.push(line);
            } else {
              results.push("# " + line);
            }
          }
          return results;
        }();
        return lines.join("\n");
      };
      buildLocationData = function(first2, last2) {
        if (!last2) {
          return first2;
        } else {
          return {
            first_line: first2.first_line,
            first_column: first2.first_column,
            last_line: last2.last_line,
            last_column: last2.last_column
          };
        }
      };
      exports.addLocationDataFn = function(first2, last2) {
        return function(obj) {
          if (typeof obj === "object" && !!obj["updateLocationDataIfMissing"]) {
            obj.updateLocationDataIfMissing(buildLocationData(first2, last2));
          }
          return obj;
        };
      };
      exports.locationDataToString = function(obj) {
        var locationData;
        if ("2" in obj && "first_line" in obj[2]) {
          locationData = obj[2];
        } else if ("first_line" in obj) {
          locationData = obj;
        }
        if (locationData) {
          return locationData.first_line + 1 + ":" + (locationData.first_column + 1) + "-" + (locationData.last_line + 1 + ":" + (locationData.last_column + 1));
        } else {
          return "No location data";
        }
      };
      exports.baseFileName = function(file, stripExt, useWinPathSep) {
        var parts, pathSep;
        if (stripExt == null) {
          stripExt = false;
        }
        if (useWinPathSep == null) {
          useWinPathSep = false;
        }
        pathSep = useWinPathSep ? /\\|\// : /\//;
        parts = file.split(pathSep);
        file = parts[parts.length - 1];
        if (!(stripExt && file.indexOf(".") >= 0)) {
          return file;
        }
        parts = file.split(".");
        parts.pop();
        if (parts[parts.length - 1] === "coffee" && parts.length > 1) {
          parts.pop();
        }
        return parts.join(".");
      };
      exports.isCoffee = function(file) {
        return /\.((lit)?coffee|coffee\.md)$/.test(file);
      };
      exports.isLiterate = function(file) {
        return /\.(litcoffee|coffee\.md)$/.test(file);
      };
      exports.throwSyntaxError = function(message, location) {
        var error;
        error = new SyntaxError(message);
        error.location = location;
        error.toString = syntaxErrorToString;
        error.stack = error.toString();
        throw error;
      };
      exports.updateSyntaxError = function(error, code, filename) {
        if (error.toString === syntaxErrorToString) {
          error.code || (error.code = code);
          error.filename || (error.filename = filename);
          error.stack = error.toString();
        }
        return error;
      };
      syntaxErrorToString = function() {
        var codeLine, colorize, colorsEnabled, end, filename, first_column, first_line, last_column, last_line, marker, ref1, ref2, ref3, ref4, start;
        if (!(this.code && this.location)) {
          return Error.prototype.toString.call(this);
        }
        ref1 = this.location, first_line = ref1.first_line, first_column = ref1.first_column, last_line = ref1.last_line, last_column = ref1.last_column;
        if (last_line == null) {
          last_line = first_line;
        }
        if (last_column == null) {
          last_column = first_column;
        }
        filename = this.filename || "[stdin]";
        codeLine = this.code.split("\n")[first_line];
        start = first_column;
        end = first_line === last_line ? last_column + 1 : codeLine.length;
        marker = codeLine.slice(0, start).replace(/[^\s]/g, " ") + repeat("^", end - start);
        if (typeof process !== "undefined" && process !== null) {
          colorsEnabled = ((ref2 = process.stdout) != null ? ref2.isTTY : void 0) && !((ref3 = process.env) != null ? ref3.NODE_DISABLE_COLORS : void 0);
        }
        if ((ref4 = this.colorful) != null ? ref4 : colorsEnabled) {
          colorize = function(str) {
            return "\x1B[1;31m" + str + "\x1B[0m";
          };
          codeLine = codeLine.slice(0, start) + colorize(codeLine.slice(start, end)) + codeLine.slice(end);
          marker = colorize(marker);
        }
        return filename + ":" + (first_line + 1) + ":" + (first_column + 1) + ": error: " + this.message + "\n" + codeLine + "\n" + marker;
      };
      exports.nameWhitespaceCharacter = function(string) {
        switch (string) {
          case " ":
            return "space";
          case "\n":
            return "newline";
          case "\r":
            return "carriage return";
          case "	":
            return "tab";
          default:
            return string;
        }
      };
    }).call(exports);
  }
});

// ../node_modules/coffee-script/lib/coffee-script/lexer.js
var require_lexer = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/lexer.js"(exports) {
    (function() {
      var BOM, BOOL, CALLABLE, CODE, COFFEE_ALIASES, COFFEE_ALIAS_MAP, COFFEE_KEYWORDS, COMMENT, COMPARE, COMPOUND_ASSIGN, HERECOMMENT_ILLEGAL, HEREDOC_DOUBLE, HEREDOC_INDENT, HEREDOC_SINGLE, HEREGEX, HEREGEX_OMIT, HERE_JSTOKEN, IDENTIFIER, INDENTABLE_CLOSERS, INDEXABLE, INVERSES, JSTOKEN, JS_KEYWORDS, LEADING_BLANK_LINE, LINE_BREAK, LINE_CONTINUER, Lexer, MATH, MULTI_DENT, NOT_REGEX, NUMBER, OPERATOR, POSSIBLY_DIVISION, REGEX, REGEX_FLAGS, REGEX_ILLEGAL, REGEX_INVALID_ESCAPE, RELATION, RESERVED, Rewriter, SHIFT, SIMPLE_STRING_OMIT, STRICT_PROSCRIBED, STRING_DOUBLE, STRING_INVALID_ESCAPE, STRING_OMIT, STRING_SINGLE, STRING_START, TRAILING_BLANK_LINE, TRAILING_SPACES, UNARY, UNARY_MATH, UNFINISHED, UNICODE_CODE_POINT_ESCAPE, VALID_FLAGS, WHITESPACE, compact2, count, invertLiterate, isForFrom, isUnassignable, key, locationDataToString, ref, ref1, repeat, starts, throwSyntaxError, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item)
            return i;
        }
        return -1;
      }, slice2 = [].slice;
      ref = require_rewriter(), Rewriter = ref.Rewriter, INVERSES = ref.INVERSES;
      ref1 = require_helpers(), count = ref1.count, starts = ref1.starts, compact2 = ref1.compact, repeat = ref1.repeat, invertLiterate = ref1.invertLiterate, locationDataToString = ref1.locationDataToString, throwSyntaxError = ref1.throwSyntaxError;
      exports.Lexer = Lexer = function() {
        function Lexer2() {
        }
        Lexer2.prototype.tokenize = function(code, opts) {
          var consumed, end, i, ref2;
          if (opts == null) {
            opts = {};
          }
          this.literate = opts.literate;
          this.indent = 0;
          this.baseIndent = 0;
          this.indebt = 0;
          this.outdebt = 0;
          this.indents = [];
          this.ends = [];
          this.tokens = [];
          this.seenFor = false;
          this.seenImport = false;
          this.seenExport = false;
          this.importSpecifierList = false;
          this.exportSpecifierList = false;
          this.chunkLine = opts.line || 0;
          this.chunkColumn = opts.column || 0;
          code = this.clean(code);
          i = 0;
          while (this.chunk = code.slice(i)) {
            consumed = this.identifierToken() || this.commentToken() || this.whitespaceToken() || this.lineToken() || this.stringToken() || this.numberToken() || this.regexToken() || this.jsToken() || this.literalToken();
            ref2 = this.getLineAndColumnFromChunk(consumed), this.chunkLine = ref2[0], this.chunkColumn = ref2[1];
            i += consumed;
            if (opts.untilBalanced && this.ends.length === 0) {
              return {
                tokens: this.tokens,
                index: i
              };
            }
          }
          this.closeIndentation();
          if (end = this.ends.pop()) {
            this.error("missing " + end.tag, end.origin[2]);
          }
          if (opts.rewrite === false) {
            return this.tokens;
          }
          return new Rewriter().rewrite(this.tokens);
        };
        Lexer2.prototype.clean = function(code) {
          if (code.charCodeAt(0) === BOM) {
            code = code.slice(1);
          }
          code = code.replace(/\r/g, "").replace(TRAILING_SPACES, "");
          if (WHITESPACE.test(code)) {
            code = "\n" + code;
            this.chunkLine--;
          }
          if (this.literate) {
            code = invertLiterate(code);
          }
          return code;
        };
        Lexer2.prototype.identifierToken = function() {
          var alias, colon, colonOffset, id, idLength, input, match, poppedToken, prev, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, tag, tagToken;
          if (!(match = IDENTIFIER.exec(this.chunk))) {
            return 0;
          }
          input = match[0], id = match[1], colon = match[2];
          idLength = id.length;
          poppedToken = void 0;
          if (id === "own" && this.tag() === "FOR") {
            this.token("OWN", id);
            return id.length;
          }
          if (id === "from" && this.tag() === "YIELD") {
            this.token("FROM", id);
            return id.length;
          }
          if (id === "as" && this.seenImport) {
            if (this.value() === "*") {
              this.tokens[this.tokens.length - 1][0] = "IMPORT_ALL";
            } else if (ref2 = this.value(), indexOf.call(COFFEE_KEYWORDS, ref2) >= 0) {
              this.tokens[this.tokens.length - 1][0] = "IDENTIFIER";
            }
            if ((ref3 = this.tag()) === "DEFAULT" || ref3 === "IMPORT_ALL" || ref3 === "IDENTIFIER") {
              this.token("AS", id);
              return id.length;
            }
          }
          if (id === "as" && this.seenExport && ((ref4 = this.tag()) === "IDENTIFIER" || ref4 === "DEFAULT")) {
            this.token("AS", id);
            return id.length;
          }
          if (id === "default" && this.seenExport && ((ref5 = this.tag()) === "EXPORT" || ref5 === "AS")) {
            this.token("DEFAULT", id);
            return id.length;
          }
          ref6 = this.tokens, prev = ref6[ref6.length - 1];
          tag = colon || prev != null && ((ref7 = prev[0]) === "." || ref7 === "?." || ref7 === "::" || ref7 === "?::" || !prev.spaced && prev[0] === "@") ? "PROPERTY" : "IDENTIFIER";
          if (tag === "IDENTIFIER" && (indexOf.call(JS_KEYWORDS, id) >= 0 || indexOf.call(COFFEE_KEYWORDS, id) >= 0) && !(this.exportSpecifierList && indexOf.call(COFFEE_KEYWORDS, id) >= 0)) {
            tag = id.toUpperCase();
            if (tag === "WHEN" && (ref8 = this.tag(), indexOf.call(LINE_BREAK, ref8) >= 0)) {
              tag = "LEADING_WHEN";
            } else if (tag === "FOR") {
              this.seenFor = true;
            } else if (tag === "UNLESS") {
              tag = "IF";
            } else if (tag === "IMPORT") {
              this.seenImport = true;
            } else if (tag === "EXPORT") {
              this.seenExport = true;
            } else if (indexOf.call(UNARY, tag) >= 0) {
              tag = "UNARY";
            } else if (indexOf.call(RELATION, tag) >= 0) {
              if (tag !== "INSTANCEOF" && this.seenFor) {
                tag = "FOR" + tag;
                this.seenFor = false;
              } else {
                tag = "RELATION";
                if (this.value() === "!") {
                  poppedToken = this.tokens.pop();
                  id = "!" + id;
                }
              }
            }
          } else if (tag === "IDENTIFIER" && this.seenFor && id === "from" && isForFrom(prev)) {
            tag = "FORFROM";
            this.seenFor = false;
          }
          if (tag === "IDENTIFIER" && indexOf.call(RESERVED, id) >= 0) {
            this.error("reserved word '" + id + "'", {
              length: id.length
            });
          }
          if (tag !== "PROPERTY") {
            if (indexOf.call(COFFEE_ALIASES, id) >= 0) {
              alias = id;
              id = COFFEE_ALIAS_MAP[id];
            }
            tag = function() {
              switch (id) {
                case "!":
                  return "UNARY";
                case "==":
                case "!=":
                  return "COMPARE";
                case "true":
                case "false":
                  return "BOOL";
                case "break":
                case "continue":
                case "debugger":
                  return "STATEMENT";
                case "&&":
                case "||":
                  return id;
                default:
                  return tag;
              }
            }();
          }
          tagToken = this.token(tag, id, 0, idLength);
          if (alias) {
            tagToken.origin = [tag, alias, tagToken[2]];
          }
          if (poppedToken) {
            ref9 = [poppedToken[2].first_line, poppedToken[2].first_column], tagToken[2].first_line = ref9[0], tagToken[2].first_column = ref9[1];
          }
          if (colon) {
            colonOffset = input.lastIndexOf(":");
            this.token(":", ":", colonOffset, colon.length);
          }
          return input.length;
        };
        Lexer2.prototype.numberToken = function() {
          var base, lexedLength, match, number, numberValue, ref2, tag;
          if (!(match = NUMBER.exec(this.chunk))) {
            return 0;
          }
          number = match[0];
          lexedLength = number.length;
          switch (false) {
            case !/^0[BOX]/.test(number):
              this.error("radix prefix in '" + number + "' must be lowercase", {
                offset: 1
              });
              break;
            case !/^(?!0x).*E/.test(number):
              this.error("exponential notation in '" + number + "' must be indicated with a lowercase 'e'", {
                offset: number.indexOf("E")
              });
              break;
            case !/^0\d*[89]/.test(number):
              this.error("decimal literal '" + number + "' must not be prefixed with '0'", {
                length: lexedLength
              });
              break;
            case !/^0\d+/.test(number):
              this.error("octal literal '" + number + "' must be prefixed with '0o'", {
                length: lexedLength
              });
          }
          base = function() {
            switch (number.charAt(1)) {
              case "b":
                return 2;
              case "o":
                return 8;
              case "x":
                return 16;
              default:
                return null;
            }
          }();
          numberValue = base != null ? parseInt(number.slice(2), base) : parseFloat(number);
          if ((ref2 = number.charAt(1)) === "b" || ref2 === "o") {
            number = "0x" + numberValue.toString(16);
          }
          tag = numberValue === Infinity ? "INFINITY" : "NUMBER";
          this.token(tag, number, 0, lexedLength);
          return lexedLength;
        };
        Lexer2.prototype.stringToken = function() {
          var $, attempt, delimiter, doc, end, heredoc, i, indent, indentRegex, match, quote, ref2, ref3, regex, token, tokens;
          quote = (STRING_START.exec(this.chunk) || [])[0];
          if (!quote) {
            return 0;
          }
          if (this.tokens.length && this.value() === "from" && (this.seenImport || this.seenExport)) {
            this.tokens[this.tokens.length - 1][0] = "FROM";
          }
          regex = function() {
            switch (quote) {
              case "'":
                return STRING_SINGLE;
              case '"':
                return STRING_DOUBLE;
              case "'''":
                return HEREDOC_SINGLE;
              case '"""':
                return HEREDOC_DOUBLE;
            }
          }();
          heredoc = quote.length === 3;
          ref2 = this.matchWithInterpolations(regex, quote), tokens = ref2.tokens, end = ref2.index;
          $ = tokens.length - 1;
          delimiter = quote.charAt(0);
          if (heredoc) {
            indent = null;
            doc = function() {
              var j, len, results;
              results = [];
              for (i = j = 0, len = tokens.length; j < len; i = ++j) {
                token = tokens[i];
                if (token[0] === "NEOSTRING") {
                  results.push(token[1]);
                }
              }
              return results;
            }().join("#{}");
            while (match = HEREDOC_INDENT.exec(doc)) {
              attempt = match[1];
              if (indent === null || 0 < (ref3 = attempt.length) && ref3 < indent.length) {
                indent = attempt;
              }
            }
            if (indent) {
              indentRegex = RegExp("\\n" + indent, "g");
            }
            this.mergeInterpolationTokens(tokens, {
              delimiter
            }, function(_this) {
              return function(value, i2) {
                value = _this.formatString(value, {
                  delimiter: quote
                });
                if (indentRegex) {
                  value = value.replace(indentRegex, "\n");
                }
                if (i2 === 0) {
                  value = value.replace(LEADING_BLANK_LINE, "");
                }
                if (i2 === $) {
                  value = value.replace(TRAILING_BLANK_LINE, "");
                }
                return value;
              };
            }(this));
          } else {
            this.mergeInterpolationTokens(tokens, {
              delimiter
            }, function(_this) {
              return function(value, i2) {
                value = _this.formatString(value, {
                  delimiter: quote
                });
                value = value.replace(SIMPLE_STRING_OMIT, function(match2, offset) {
                  if (i2 === 0 && offset === 0 || i2 === $ && offset + match2.length === value.length) {
                    return "";
                  } else {
                    return " ";
                  }
                });
                return value;
              };
            }(this));
          }
          return end;
        };
        Lexer2.prototype.commentToken = function() {
          var comment, here, match;
          if (!(match = this.chunk.match(COMMENT))) {
            return 0;
          }
          comment = match[0], here = match[1];
          if (here) {
            if (match = HERECOMMENT_ILLEGAL.exec(comment)) {
              this.error("block comments cannot contain " + match[0], {
                offset: match.index,
                length: match[0].length
              });
            }
            if (here.indexOf("\n") >= 0) {
              here = here.replace(RegExp("\\n" + repeat(" ", this.indent), "g"), "\n");
            }
            this.token("HERECOMMENT", here, 0, comment.length);
          }
          return comment.length;
        };
        Lexer2.prototype.jsToken = function() {
          var match, script;
          if (!(this.chunk.charAt(0) === "`" && (match = HERE_JSTOKEN.exec(this.chunk) || JSTOKEN.exec(this.chunk)))) {
            return 0;
          }
          script = match[1].replace(/\\+(`|$)/g, function(string) {
            return string.slice(-Math.ceil(string.length / 2));
          });
          this.token("JS", script, 0, match[0].length);
          return match[0].length;
        };
        Lexer2.prototype.regexToken = function() {
          var body, closed, end, flags, index, match, origin, prev, ref2, ref3, ref4, regex, tokens;
          switch (false) {
            case !(match = REGEX_ILLEGAL.exec(this.chunk)):
              this.error("regular expressions cannot begin with " + match[2], {
                offset: match.index + match[1].length
              });
              break;
            case !(match = this.matchWithInterpolations(HEREGEX, "///")):
              tokens = match.tokens, index = match.index;
              break;
            case !(match = REGEX.exec(this.chunk)):
              regex = match[0], body = match[1], closed = match[2];
              this.validateEscapes(body, {
                isRegex: true,
                offsetInChunk: 1
              });
              body = this.formatRegex(body, {
                delimiter: "/"
              });
              index = regex.length;
              ref2 = this.tokens, prev = ref2[ref2.length - 1];
              if (prev) {
                if (prev.spaced && (ref3 = prev[0], indexOf.call(CALLABLE, ref3) >= 0)) {
                  if (!closed || POSSIBLY_DIVISION.test(regex)) {
                    return 0;
                  }
                } else if (ref4 = prev[0], indexOf.call(NOT_REGEX, ref4) >= 0) {
                  return 0;
                }
              }
              if (!closed) {
                this.error("missing / (unclosed regex)");
              }
              break;
            default:
              return 0;
          }
          flags = REGEX_FLAGS.exec(this.chunk.slice(index))[0];
          end = index + flags.length;
          origin = this.makeToken("REGEX", null, 0, end);
          switch (false) {
            case !!VALID_FLAGS.test(flags):
              this.error("invalid regular expression flags " + flags, {
                offset: index,
                length: flags.length
              });
              break;
            case !(regex || tokens.length === 1):
              if (body == null) {
                body = this.formatHeregex(tokens[0][1]);
              }
              this.token("REGEX", "" + this.makeDelimitedLiteral(body, {
                delimiter: "/"
              }) + flags, 0, end, origin);
              break;
            default:
              this.token("REGEX_START", "(", 0, 0, origin);
              this.token("IDENTIFIER", "RegExp", 0, 0);
              this.token("CALL_START", "(", 0, 0);
              this.mergeInterpolationTokens(tokens, {
                delimiter: '"',
                double: true
              }, this.formatHeregex);
              if (flags) {
                this.token(",", ",", index - 1, 0);
                this.token("STRING", '"' + flags + '"', index - 1, flags.length);
              }
              this.token(")", ")", end - 1, 0);
              this.token("REGEX_END", ")", end - 1, 0);
          }
          return end;
        };
        Lexer2.prototype.lineToken = function() {
          var diff, indent, match, noNewlines, size2;
          if (!(match = MULTI_DENT.exec(this.chunk))) {
            return 0;
          }
          indent = match[0];
          this.seenFor = false;
          if (!this.importSpecifierList) {
            this.seenImport = false;
          }
          if (!this.exportSpecifierList) {
            this.seenExport = false;
          }
          size2 = indent.length - 1 - indent.lastIndexOf("\n");
          noNewlines = this.unfinished();
          if (size2 - this.indebt === this.indent) {
            if (noNewlines) {
              this.suppressNewlines();
            } else {
              this.newlineToken(0);
            }
            return indent.length;
          }
          if (size2 > this.indent) {
            if (noNewlines) {
              this.indebt = size2 - this.indent;
              this.suppressNewlines();
              return indent.length;
            }
            if (!this.tokens.length) {
              this.baseIndent = this.indent = size2;
              return indent.length;
            }
            diff = size2 - this.indent + this.outdebt;
            this.token("INDENT", diff, indent.length - size2, size2);
            this.indents.push(diff);
            this.ends.push({
              tag: "OUTDENT"
            });
            this.outdebt = this.indebt = 0;
            this.indent = size2;
          } else if (size2 < this.baseIndent) {
            this.error("missing indentation", {
              offset: indent.length
            });
          } else {
            this.indebt = 0;
            this.outdentToken(this.indent - size2, noNewlines, indent.length);
          }
          return indent.length;
        };
        Lexer2.prototype.outdentToken = function(moveOut, noNewlines, outdentLength) {
          var decreasedIndent, dent, lastIndent, ref2;
          decreasedIndent = this.indent - moveOut;
          while (moveOut > 0) {
            lastIndent = this.indents[this.indents.length - 1];
            if (!lastIndent) {
              moveOut = 0;
            } else if (lastIndent === this.outdebt) {
              moveOut -= this.outdebt;
              this.outdebt = 0;
            } else if (lastIndent < this.outdebt) {
              this.outdebt -= lastIndent;
              moveOut -= lastIndent;
            } else {
              dent = this.indents.pop() + this.outdebt;
              if (outdentLength && (ref2 = this.chunk[outdentLength], indexOf.call(INDENTABLE_CLOSERS, ref2) >= 0)) {
                decreasedIndent -= dent - moveOut;
                moveOut = dent;
              }
              this.outdebt = 0;
              this.pair("OUTDENT");
              this.token("OUTDENT", moveOut, 0, outdentLength);
              moveOut -= dent;
            }
          }
          if (dent) {
            this.outdebt -= moveOut;
          }
          while (this.value() === ";") {
            this.tokens.pop();
          }
          if (!(this.tag() === "TERMINATOR" || noNewlines)) {
            this.token("TERMINATOR", "\n", outdentLength, 0);
          }
          this.indent = decreasedIndent;
          return this;
        };
        Lexer2.prototype.whitespaceToken = function() {
          var match, nline, prev, ref2;
          if (!((match = WHITESPACE.exec(this.chunk)) || (nline = this.chunk.charAt(0) === "\n"))) {
            return 0;
          }
          ref2 = this.tokens, prev = ref2[ref2.length - 1];
          if (prev) {
            prev[match ? "spaced" : "newLine"] = true;
          }
          if (match) {
            return match[0].length;
          } else {
            return 0;
          }
        };
        Lexer2.prototype.newlineToken = function(offset) {
          while (this.value() === ";") {
            this.tokens.pop();
          }
          if (this.tag() !== "TERMINATOR") {
            this.token("TERMINATOR", "\n", offset, 0);
          }
          return this;
        };
        Lexer2.prototype.suppressNewlines = function() {
          if (this.value() === "\\") {
            this.tokens.pop();
          }
          return this;
        };
        Lexer2.prototype.literalToken = function() {
          var match, message, origin, prev, ref2, ref3, ref4, ref5, ref6, skipToken, tag, token, value;
          if (match = OPERATOR.exec(this.chunk)) {
            value = match[0];
            if (CODE.test(value)) {
              this.tagParameters();
            }
          } else {
            value = this.chunk.charAt(0);
          }
          tag = value;
          ref2 = this.tokens, prev = ref2[ref2.length - 1];
          if (prev && indexOf.call(["="].concat(slice2.call(COMPOUND_ASSIGN)), value) >= 0) {
            skipToken = false;
            if (value === "=" && ((ref3 = prev[1]) === "||" || ref3 === "&&") && !prev.spaced) {
              prev[0] = "COMPOUND_ASSIGN";
              prev[1] += "=";
              prev = this.tokens[this.tokens.length - 2];
              skipToken = true;
            }
            if (prev && prev[0] !== "PROPERTY") {
              origin = (ref4 = prev.origin) != null ? ref4 : prev;
              message = isUnassignable(prev[1], origin[1]);
              if (message) {
                this.error(message, origin[2]);
              }
            }
            if (skipToken) {
              return value.length;
            }
          }
          if (value === "{" && this.seenImport) {
            this.importSpecifierList = true;
          } else if (this.importSpecifierList && value === "}") {
            this.importSpecifierList = false;
          } else if (value === "{" && (prev != null ? prev[0] : void 0) === "EXPORT") {
            this.exportSpecifierList = true;
          } else if (this.exportSpecifierList && value === "}") {
            this.exportSpecifierList = false;
          }
          if (value === ";") {
            this.seenFor = this.seenImport = this.seenExport = false;
            tag = "TERMINATOR";
          } else if (value === "*" && prev[0] === "EXPORT") {
            tag = "EXPORT_ALL";
          } else if (indexOf.call(MATH, value) >= 0) {
            tag = "MATH";
          } else if (indexOf.call(COMPARE, value) >= 0) {
            tag = "COMPARE";
          } else if (indexOf.call(COMPOUND_ASSIGN, value) >= 0) {
            tag = "COMPOUND_ASSIGN";
          } else if (indexOf.call(UNARY, value) >= 0) {
            tag = "UNARY";
          } else if (indexOf.call(UNARY_MATH, value) >= 0) {
            tag = "UNARY_MATH";
          } else if (indexOf.call(SHIFT, value) >= 0) {
            tag = "SHIFT";
          } else if (value === "?" && (prev != null ? prev.spaced : void 0)) {
            tag = "BIN?";
          } else if (prev && !prev.spaced) {
            if (value === "(" && (ref5 = prev[0], indexOf.call(CALLABLE, ref5) >= 0)) {
              if (prev[0] === "?") {
                prev[0] = "FUNC_EXIST";
              }
              tag = "CALL_START";
            } else if (value === "[" && (ref6 = prev[0], indexOf.call(INDEXABLE, ref6) >= 0)) {
              tag = "INDEX_START";
              switch (prev[0]) {
                case "?":
                  prev[0] = "INDEX_SOAK";
              }
            }
          }
          token = this.makeToken(tag, value);
          switch (value) {
            case "(":
            case "{":
            case "[":
              this.ends.push({
                tag: INVERSES[value],
                origin: token
              });
              break;
            case ")":
            case "}":
            case "]":
              this.pair(value);
          }
          this.tokens.push(token);
          return value.length;
        };
        Lexer2.prototype.tagParameters = function() {
          var i, stack, tok, tokens;
          if (this.tag() !== ")") {
            return this;
          }
          stack = [];
          tokens = this.tokens;
          i = tokens.length;
          tokens[--i][0] = "PARAM_END";
          while (tok = tokens[--i]) {
            switch (tok[0]) {
              case ")":
                stack.push(tok);
                break;
              case "(":
              case "CALL_START":
                if (stack.length) {
                  stack.pop();
                } else if (tok[0] === "(") {
                  tok[0] = "PARAM_START";
                  return this;
                } else {
                  return this;
                }
            }
          }
          return this;
        };
        Lexer2.prototype.closeIndentation = function() {
          return this.outdentToken(this.indent);
        };
        Lexer2.prototype.matchWithInterpolations = function(regex, delimiter) {
          var close, column, firstToken, index, lastToken, line, nested, offsetInChunk, open, ref2, ref3, ref4, str, strPart, tokens;
          tokens = [];
          offsetInChunk = delimiter.length;
          if (this.chunk.slice(0, offsetInChunk) !== delimiter) {
            return null;
          }
          str = this.chunk.slice(offsetInChunk);
          while (true) {
            strPart = regex.exec(str)[0];
            this.validateEscapes(strPart, {
              isRegex: delimiter.charAt(0) === "/",
              offsetInChunk
            });
            tokens.push(this.makeToken("NEOSTRING", strPart, offsetInChunk));
            str = str.slice(strPart.length);
            offsetInChunk += strPart.length;
            if (str.slice(0, 2) !== "#{") {
              break;
            }
            ref2 = this.getLineAndColumnFromChunk(offsetInChunk + 1), line = ref2[0], column = ref2[1];
            ref3 = new Lexer2().tokenize(str.slice(1), {
              line,
              column,
              untilBalanced: true
            }), nested = ref3.tokens, index = ref3.index;
            index += 1;
            open = nested[0], close = nested[nested.length - 1];
            open[0] = open[1] = "(";
            close[0] = close[1] = ")";
            close.origin = ["", "end of interpolation", close[2]];
            if (((ref4 = nested[1]) != null ? ref4[0] : void 0) === "TERMINATOR") {
              nested.splice(1, 1);
            }
            tokens.push(["TOKENS", nested]);
            str = str.slice(index);
            offsetInChunk += index;
          }
          if (str.slice(0, delimiter.length) !== delimiter) {
            this.error("missing " + delimiter, {
              length: delimiter.length
            });
          }
          firstToken = tokens[0], lastToken = tokens[tokens.length - 1];
          firstToken[2].first_column -= delimiter.length;
          if (lastToken[1].substr(-1) === "\n") {
            lastToken[2].last_line += 1;
            lastToken[2].last_column = delimiter.length - 1;
          } else {
            lastToken[2].last_column += delimiter.length;
          }
          if (lastToken[1].length === 0) {
            lastToken[2].last_column -= 1;
          }
          return {
            tokens,
            index: offsetInChunk + delimiter.length
          };
        };
        Lexer2.prototype.mergeInterpolationTokens = function(tokens, options, fn) {
          var converted, firstEmptyStringIndex, firstIndex, i, j, lastToken, len, locationToken, lparen, plusToken, ref2, rparen, tag, token, tokensToPush, value;
          if (tokens.length > 1) {
            lparen = this.token("STRING_START", "(", 0, 0);
          }
          firstIndex = this.tokens.length;
          for (i = j = 0, len = tokens.length; j < len; i = ++j) {
            token = tokens[i];
            tag = token[0], value = token[1];
            switch (tag) {
              case "TOKENS":
                if (value.length === 2) {
                  continue;
                }
                locationToken = value[0];
                tokensToPush = value;
                break;
              case "NEOSTRING":
                converted = fn.call(this, token[1], i);
                if (converted.length === 0) {
                  if (i === 0) {
                    firstEmptyStringIndex = this.tokens.length;
                  } else {
                    continue;
                  }
                }
                if (i === 2 && firstEmptyStringIndex != null) {
                  this.tokens.splice(firstEmptyStringIndex, 2);
                }
                token[0] = "STRING";
                token[1] = this.makeDelimitedLiteral(converted, options);
                locationToken = token;
                tokensToPush = [token];
            }
            if (this.tokens.length > firstIndex) {
              plusToken = this.token("+", "+");
              plusToken[2] = {
                first_line: locationToken[2].first_line,
                first_column: locationToken[2].first_column,
                last_line: locationToken[2].first_line,
                last_column: locationToken[2].first_column
              };
            }
            (ref2 = this.tokens).push.apply(ref2, tokensToPush);
          }
          if (lparen) {
            lastToken = tokens[tokens.length - 1];
            lparen.origin = [
              "STRING",
              null,
              {
                first_line: lparen[2].first_line,
                first_column: lparen[2].first_column,
                last_line: lastToken[2].last_line,
                last_column: lastToken[2].last_column
              }
            ];
            rparen = this.token("STRING_END", ")");
            return rparen[2] = {
              first_line: lastToken[2].last_line,
              first_column: lastToken[2].last_column,
              last_line: lastToken[2].last_line,
              last_column: lastToken[2].last_column
            };
          }
        };
        Lexer2.prototype.pair = function(tag) {
          var lastIndent, prev, ref2, ref3, wanted;
          ref2 = this.ends, prev = ref2[ref2.length - 1];
          if (tag !== (wanted = prev != null ? prev.tag : void 0)) {
            if ("OUTDENT" !== wanted) {
              this.error("unmatched " + tag);
            }
            ref3 = this.indents, lastIndent = ref3[ref3.length - 1];
            this.outdentToken(lastIndent, true);
            return this.pair(tag);
          }
          return this.ends.pop();
        };
        Lexer2.prototype.getLineAndColumnFromChunk = function(offset) {
          var column, lastLine, lineCount, ref2, string;
          if (offset === 0) {
            return [this.chunkLine, this.chunkColumn];
          }
          if (offset >= this.chunk.length) {
            string = this.chunk;
          } else {
            string = this.chunk.slice(0, +(offset - 1) + 1 || 9e9);
          }
          lineCount = count(string, "\n");
          column = this.chunkColumn;
          if (lineCount > 0) {
            ref2 = string.split("\n"), lastLine = ref2[ref2.length - 1];
            column = lastLine.length;
          } else {
            column += string.length;
          }
          return [this.chunkLine + lineCount, column];
        };
        Lexer2.prototype.makeToken = function(tag, value, offsetInChunk, length) {
          var lastCharacter, locationData, ref2, ref3, token;
          if (offsetInChunk == null) {
            offsetInChunk = 0;
          }
          if (length == null) {
            length = value.length;
          }
          locationData = {};
          ref2 = this.getLineAndColumnFromChunk(offsetInChunk), locationData.first_line = ref2[0], locationData.first_column = ref2[1];
          lastCharacter = length > 0 ? length - 1 : 0;
          ref3 = this.getLineAndColumnFromChunk(offsetInChunk + lastCharacter), locationData.last_line = ref3[0], locationData.last_column = ref3[1];
          token = [tag, value, locationData];
          return token;
        };
        Lexer2.prototype.token = function(tag, value, offsetInChunk, length, origin) {
          var token;
          token = this.makeToken(tag, value, offsetInChunk, length);
          if (origin) {
            token.origin = origin;
          }
          this.tokens.push(token);
          return token;
        };
        Lexer2.prototype.tag = function() {
          var ref2, token;
          ref2 = this.tokens, token = ref2[ref2.length - 1];
          return token != null ? token[0] : void 0;
        };
        Lexer2.prototype.value = function() {
          var ref2, token;
          ref2 = this.tokens, token = ref2[ref2.length - 1];
          return token != null ? token[1] : void 0;
        };
        Lexer2.prototype.unfinished = function() {
          var ref2;
          return LINE_CONTINUER.test(this.chunk) || (ref2 = this.tag(), indexOf.call(UNFINISHED, ref2) >= 0);
        };
        Lexer2.prototype.formatString = function(str, options) {
          return this.replaceUnicodeCodePointEscapes(str.replace(STRING_OMIT, "$1"), options);
        };
        Lexer2.prototype.formatHeregex = function(str) {
          return this.formatRegex(str.replace(HEREGEX_OMIT, "$1$2"), {
            delimiter: "///"
          });
        };
        Lexer2.prototype.formatRegex = function(str, options) {
          return this.replaceUnicodeCodePointEscapes(str, options);
        };
        Lexer2.prototype.unicodeCodePointToUnicodeEscapes = function(codePoint) {
          var high, low, toUnicodeEscape;
          toUnicodeEscape = function(val) {
            var str;
            str = val.toString(16);
            return "\\u" + repeat("0", 4 - str.length) + str;
          };
          if (codePoint < 65536) {
            return toUnicodeEscape(codePoint);
          }
          high = Math.floor((codePoint - 65536) / 1024) + 55296;
          low = (codePoint - 65536) % 1024 + 56320;
          return "" + toUnicodeEscape(high) + toUnicodeEscape(low);
        };
        Lexer2.prototype.replaceUnicodeCodePointEscapes = function(str, options) {
          return str.replace(UNICODE_CODE_POINT_ESCAPE, function(_this) {
            return function(match, escapedBackslash, codePointHex, offset) {
              var codePointDecimal;
              if (escapedBackslash) {
                return escapedBackslash;
              }
              codePointDecimal = parseInt(codePointHex, 16);
              if (codePointDecimal > 1114111) {
                _this.error("unicode code point escapes greater than \\u{10ffff} are not allowed", {
                  offset: offset + options.delimiter.length,
                  length: codePointHex.length + 4
                });
              }
              return _this.unicodeCodePointToUnicodeEscapes(codePointDecimal);
            };
          }(this));
        };
        Lexer2.prototype.validateEscapes = function(str, options) {
          var before2, hex, invalidEscape, invalidEscapeRegex, match, message, octal, ref2, unicode, unicodeCodePoint;
          if (options == null) {
            options = {};
          }
          invalidEscapeRegex = options.isRegex ? REGEX_INVALID_ESCAPE : STRING_INVALID_ESCAPE;
          match = invalidEscapeRegex.exec(str);
          if (!match) {
            return;
          }
          match[0], before2 = match[1], octal = match[2], hex = match[3], unicodeCodePoint = match[4], unicode = match[5];
          message = octal ? "octal escape sequences are not allowed" : "invalid escape sequence";
          invalidEscape = "\\" + (octal || hex || unicodeCodePoint || unicode);
          return this.error(message + " " + invalidEscape, {
            offset: ((ref2 = options.offsetInChunk) != null ? ref2 : 0) + match.index + before2.length,
            length: invalidEscape.length
          });
        };
        Lexer2.prototype.makeDelimitedLiteral = function(body, options) {
          var regex;
          if (options == null) {
            options = {};
          }
          if (body === "" && options.delimiter === "/") {
            body = "(?:)";
          }
          regex = RegExp("(\\\\\\\\)|(\\\\0(?=[1-7]))|\\\\?(" + options.delimiter + ")|\\\\?(?:(\\n)|(\\r)|(\\u2028)|(\\u2029))|(\\\\.)", "g");
          body = body.replace(regex, function(match, backslash, nul, delimiter, lf, cr, ls, ps, other) {
            switch (false) {
              case !backslash:
                if (options.double) {
                  return backslash + backslash;
                } else {
                  return backslash;
                }
              case !nul:
                return "\\x00";
              case !delimiter:
                return "\\" + delimiter;
              case !lf:
                return "\\n";
              case !cr:
                return "\\r";
              case !ls:
                return "\\u2028";
              case !ps:
                return "\\u2029";
              case !other:
                if (options.double) {
                  return "\\" + other;
                } else {
                  return other;
                }
            }
          });
          return "" + options.delimiter + body + options.delimiter;
        };
        Lexer2.prototype.error = function(message, options) {
          var first_column, first_line, location, ref2, ref3, ref4;
          if (options == null) {
            options = {};
          }
          location = "first_line" in options ? options : (ref3 = this.getLineAndColumnFromChunk((ref2 = options.offset) != null ? ref2 : 0), first_line = ref3[0], first_column = ref3[1], ref3, {
            first_line,
            first_column,
            last_column: first_column + ((ref4 = options.length) != null ? ref4 : 1) - 1
          });
          return throwSyntaxError(message, location);
        };
        return Lexer2;
      }();
      isUnassignable = function(name, displayName) {
        if (displayName == null) {
          displayName = name;
        }
        switch (false) {
          case indexOf.call(slice2.call(JS_KEYWORDS).concat(slice2.call(COFFEE_KEYWORDS)), name) < 0:
            return "keyword '" + displayName + "' can't be assigned";
          case indexOf.call(STRICT_PROSCRIBED, name) < 0:
            return "'" + displayName + "' can't be assigned";
          case indexOf.call(RESERVED, name) < 0:
            return "reserved word '" + displayName + "' can't be assigned";
          default:
            return false;
        }
      };
      exports.isUnassignable = isUnassignable;
      isForFrom = function(prev) {
        var ref2;
        if (prev[0] === "IDENTIFIER") {
          if (prev[1] === "from") {
            prev[1][0] = "IDENTIFIER";
            true;
          }
          return true;
        } else if (prev[0] === "FOR") {
          return false;
        } else if ((ref2 = prev[1]) === "{" || ref2 === "[" || ref2 === "," || ref2 === ":") {
          return false;
        } else {
          return true;
        }
      };
      JS_KEYWORDS = ["true", "false", "null", "this", "new", "delete", "typeof", "in", "instanceof", "return", "throw", "break", "continue", "debugger", "yield", "if", "else", "switch", "for", "while", "do", "try", "catch", "finally", "class", "extends", "super", "import", "export", "default"];
      COFFEE_KEYWORDS = ["undefined", "Infinity", "NaN", "then", "unless", "until", "loop", "of", "by", "when"];
      COFFEE_ALIAS_MAP = {
        and: "&&",
        or: "||",
        is: "==",
        isnt: "!=",
        not: "!",
        yes: "true",
        no: "false",
        on: "true",
        off: "false"
      };
      COFFEE_ALIASES = function() {
        var results;
        results = [];
        for (key in COFFEE_ALIAS_MAP) {
          results.push(key);
        }
        return results;
      }();
      COFFEE_KEYWORDS = COFFEE_KEYWORDS.concat(COFFEE_ALIASES);
      RESERVED = ["case", "function", "var", "void", "with", "const", "let", "enum", "native", "implements", "interface", "package", "private", "protected", "public", "static"];
      STRICT_PROSCRIBED = ["arguments", "eval"];
      exports.JS_FORBIDDEN = JS_KEYWORDS.concat(RESERVED).concat(STRICT_PROSCRIBED);
      BOM = 65279;
      IDENTIFIER = /^(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)([^\n\S]*:(?!:))?/;
      NUMBER = /^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i;
      OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>*\/%])\2=?|\?(\.|::)|\.{2,3})/;
      WHITESPACE = /^[^\n\S]+/;
      COMMENT = /^###([^#][\s\S]*?)(?:###[^\n\S]*|###$)|^(?:\s*#(?!##[^#]).*)+/;
      CODE = /^[-=]>/;
      MULTI_DENT = /^(?:\n[^\n\S]*)+/;
      JSTOKEN = /^`(?!``)((?:[^`\\]|\\[\s\S])*)`/;
      HERE_JSTOKEN = /^```((?:[^`\\]|\\[\s\S]|`(?!``))*)```/;
      STRING_START = /^(?:'''|"""|'|")/;
      STRING_SINGLE = /^(?:[^\\']|\\[\s\S])*/;
      STRING_DOUBLE = /^(?:[^\\"#]|\\[\s\S]|\#(?!\{))*/;
      HEREDOC_SINGLE = /^(?:[^\\']|\\[\s\S]|'(?!''))*/;
      HEREDOC_DOUBLE = /^(?:[^\\"#]|\\[\s\S]|"(?!"")|\#(?!\{))*/;
      STRING_OMIT = /((?:\\\\)+)|\\[^\S\n]*\n\s*/g;
      SIMPLE_STRING_OMIT = /\s*\n\s*/g;
      HEREDOC_INDENT = /\n+([^\n\S]*)(?=\S)/g;
      REGEX = /^\/(?!\/)((?:[^[\/\n\\]|\\[^\n]|\[(?:\\[^\n]|[^\]\n\\])*\])*)(\/)?/;
      REGEX_FLAGS = /^\w*/;
      VALID_FLAGS = /^(?!.*(.).*\1)[imguy]*$/;
      HEREGEX = /^(?:[^\\\/#]|\\[\s\S]|\/(?!\/\/)|\#(?!\{))*/;
      HEREGEX_OMIT = /((?:\\\\)+)|\\(\s)|\s+(?:#.*)?/g;
      REGEX_ILLEGAL = /^(\/|\/{3}\s*)(\*)/;
      POSSIBLY_DIVISION = /^\/=?\s/;
      HERECOMMENT_ILLEGAL = /\*\//;
      LINE_CONTINUER = /^\s*(?:,|\??\.(?![.\d])|::)/;
      STRING_INVALID_ESCAPE = /((?:^|[^\\])(?:\\\\)*)\\(?:(0[0-7]|[1-7])|(x(?![\da-fA-F]{2}).{0,2})|(u\{(?![\da-fA-F]{1,}\})[^}]*\}?)|(u(?!\{|[\da-fA-F]{4}).{0,4}))/;
      REGEX_INVALID_ESCAPE = /((?:^|[^\\])(?:\\\\)*)\\(?:(0[0-7])|(x(?![\da-fA-F]{2}).{0,2})|(u\{(?![\da-fA-F]{1,}\})[^}]*\}?)|(u(?!\{|[\da-fA-F]{4}).{0,4}))/;
      UNICODE_CODE_POINT_ESCAPE = /(\\\\)|\\u\{([\da-fA-F]+)\}/g;
      LEADING_BLANK_LINE = /^[^\n\S]*\n/;
      TRAILING_BLANK_LINE = /\n[^\n\S]*$/;
      TRAILING_SPACES = /\s+$/;
      COMPOUND_ASSIGN = ["-=", "+=", "/=", "*=", "%=", "||=", "&&=", "?=", "<<=", ">>=", ">>>=", "&=", "^=", "|=", "**=", "//=", "%%="];
      UNARY = ["NEW", "TYPEOF", "DELETE", "DO"];
      UNARY_MATH = ["!", "~"];
      SHIFT = ["<<", ">>", ">>>"];
      COMPARE = ["==", "!=", "<", ">", "<=", ">="];
      MATH = ["*", "/", "%", "//", "%%"];
      RELATION = ["IN", "OF", "INSTANCEOF"];
      BOOL = ["TRUE", "FALSE"];
      CALLABLE = ["IDENTIFIER", "PROPERTY", ")", "]", "?", "@", "THIS", "SUPER"];
      INDEXABLE = CALLABLE.concat(["NUMBER", "INFINITY", "NAN", "STRING", "STRING_END", "REGEX", "REGEX_END", "BOOL", "NULL", "UNDEFINED", "}", "::"]);
      NOT_REGEX = INDEXABLE.concat(["++", "--"]);
      LINE_BREAK = ["INDENT", "OUTDENT", "TERMINATOR"];
      INDENTABLE_CLOSERS = [")", "}", "]"];
      UNFINISHED = ["\\", ".", "?.", "?::", "UNARY", "MATH", "UNARY_MATH", "+", "-", "**", "SHIFT", "RELATION", "COMPARE", "&", "^", "|", "&&", "||", "BIN?", "THROW", "EXTENDS", "DEFAULT"];
    }).call(exports);
  }
});

// ../node_modules/coffee-script/lib/coffee-script/parser.js
var require_parser = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/parser.js"(exports, module2) {
    var parser = function() {
      var o = function(k, v, o2, l) {
        for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
          ;
        return o2;
      }, $V0 = [1, 22], $V1 = [1, 25], $V2 = [1, 83], $V3 = [1, 79], $V4 = [1, 84], $V5 = [1, 85], $V6 = [1, 81], $V7 = [1, 82], $V8 = [1, 56], $V9 = [1, 58], $Va = [1, 59], $Vb = [1, 60], $Vc = [1, 61], $Vd = [1, 62], $Ve = [1, 49], $Vf = [1, 50], $Vg = [1, 32], $Vh = [1, 68], $Vi = [1, 69], $Vj = [1, 78], $Vk = [1, 47], $Vl = [1, 51], $Vm = [1, 52], $Vn = [1, 67], $Vo = [1, 65], $Vp = [1, 66], $Vq = [1, 64], $Vr = [1, 42], $Vs = [1, 48], $Vt = [1, 63], $Vu = [1, 73], $Vv = [1, 74], $Vw = [1, 75], $Vx = [1, 76], $Vy = [1, 46], $Vz = [1, 72], $VA = [1, 34], $VB = [1, 35], $VC = [1, 36], $VD = [1, 37], $VE = [1, 38], $VF = [1, 39], $VG = [1, 86], $VH = [1, 6, 32, 42, 131], $VI = [1, 101], $VJ = [1, 89], $VK = [1, 88], $VL = [1, 87], $VM = [1, 90], $VN = [1, 91], $VO = [1, 92], $VP = [1, 93], $VQ = [1, 94], $VR = [1, 95], $VS = [1, 96], $VT = [1, 97], $VU = [1, 98], $VV = [1, 99], $VW = [1, 100], $VX = [1, 104], $VY = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $VZ = [2, 167], $V_ = [1, 110], $V$ = [1, 111], $V01 = [1, 112], $V11 = [1, 113], $V21 = [1, 115], $V31 = [1, 116], $V41 = [1, 109], $V51 = [1, 6, 32, 42, 131, 133, 135, 139, 156], $V61 = [2, 27], $V71 = [1, 123], $V81 = [1, 121], $V91 = [1, 6, 31, 32, 40, 41, 42, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Va1 = [2, 95], $Vb1 = [1, 6, 31, 32, 42, 46, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vc1 = [2, 74], $Vd1 = [1, 128], $Ve1 = [1, 133], $Vf1 = [1, 134], $Vg1 = [1, 136], $Vh1 = [1, 6, 31, 32, 40, 41, 42, 55, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vi1 = [2, 92], $Vj1 = [1, 6, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vk1 = [2, 64], $Vl1 = [1, 161], $Vm1 = [1, 167], $Vn1 = [1, 179], $Vo1 = [1, 181], $Vp1 = [1, 176], $Vq1 = [1, 183], $Vr1 = [1, 185], $Vs1 = [1, 6, 31, 32, 40, 41, 42, 55, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 96, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175], $Vt1 = [2, 111], $Vu1 = [1, 6, 31, 32, 40, 41, 42, 58, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vv1 = [1, 6, 31, 32, 40, 41, 42, 46, 58, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vw1 = [40, 41, 114], $Vx1 = [1, 242], $Vy1 = [1, 241], $Vz1 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156], $VA1 = [2, 72], $VB1 = [1, 251], $VC1 = [6, 31, 32, 66, 71], $VD1 = [6, 31, 32, 55, 66, 71, 74], $VE1 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 164, 166, 167, 168, 169, 170, 171, 172, 173, 174], $VF1 = [40, 41, 82, 83, 84, 85, 87, 90, 113, 114], $VG1 = [1, 270], $VH1 = [2, 62], $VI1 = [1, 281], $VJ1 = [1, 283], $VK1 = [1, 288], $VL1 = [1, 290], $VM1 = [2, 188], $VN1 = [1, 6, 31, 32, 40, 41, 42, 55, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 146, 147, 148, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $VO1 = [1, 299], $VP1 = [6, 31, 32, 71, 115, 120], $VQ1 = [1, 6, 31, 32, 40, 41, 42, 55, 58, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 96, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 146, 147, 148, 156, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175], $VR1 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 140, 156], $VS1 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 134, 140, 156], $VT1 = [146, 147, 148], $VU1 = [71, 146, 147, 148], $VV1 = [6, 31, 94], $VW1 = [1, 313], $VX1 = [6, 31, 32, 71, 94], $VY1 = [6, 31, 32, 58, 71, 94], $VZ1 = [6, 31, 32, 55, 58, 71, 94], $V_1 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 166, 167, 168, 169, 170, 171, 172, 173, 174], $V$1 = [12, 28, 34, 38, 40, 41, 44, 45, 48, 49, 50, 51, 52, 53, 61, 63, 64, 68, 69, 89, 92, 95, 97, 105, 112, 117, 118, 119, 125, 129, 130, 133, 135, 137, 139, 149, 155, 157, 158, 159, 160, 161, 162], $V02 = [2, 177], $V12 = [6, 31, 32], $V22 = [2, 73], $V32 = [1, 325], $V42 = [1, 326], $V52 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 127, 128, 131, 133, 134, 135, 139, 140, 151, 153, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $V62 = [32, 151, 153], $V72 = [1, 6, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 134, 140, 156], $V82 = [1, 353], $V92 = [1, 359], $Va2 = [1, 6, 32, 42, 131, 156], $Vb2 = [2, 87], $Vc2 = [1, 370], $Vd2 = [1, 371], $Ve2 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 151, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vf2 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 135, 139, 140, 156], $Vg2 = [1, 384], $Vh2 = [1, 385], $Vi2 = [6, 31, 32, 94], $Vj2 = [6, 31, 32, 71], $Vk2 = [1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 127, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $Vl2 = [31, 71], $Vm2 = [1, 411], $Vn2 = [1, 412], $Vo2 = [1, 418], $Vp2 = [1, 419];
      var parser2 = {
        trace: function trace() {
        },
        yy: {},
        symbols_: { "error": 2, "Root": 3, "Body": 4, "Line": 5, "TERMINATOR": 6, "Expression": 7, "Statement": 8, "YieldReturn": 9, "Return": 10, "Comment": 11, "STATEMENT": 12, "Import": 13, "Export": 14, "Value": 15, "Invocation": 16, "Code": 17, "Operation": 18, "Assign": 19, "If": 20, "Try": 21, "While": 22, "For": 23, "Switch": 24, "Class": 25, "Throw": 26, "Yield": 27, "YIELD": 28, "FROM": 29, "Block": 30, "INDENT": 31, "OUTDENT": 32, "Identifier": 33, "IDENTIFIER": 34, "Property": 35, "PROPERTY": 36, "AlphaNumeric": 37, "NUMBER": 38, "String": 39, "STRING": 40, "STRING_START": 41, "STRING_END": 42, "Regex": 43, "REGEX": 44, "REGEX_START": 45, "REGEX_END": 46, "Literal": 47, "JS": 48, "UNDEFINED": 49, "NULL": 50, "BOOL": 51, "INFINITY": 52, "NAN": 53, "Assignable": 54, "=": 55, "AssignObj": 56, "ObjAssignable": 57, ":": 58, "SimpleObjAssignable": 59, "ThisProperty": 60, "RETURN": 61, "Object": 62, "HERECOMMENT": 63, "PARAM_START": 64, "ParamList": 65, "PARAM_END": 66, "FuncGlyph": 67, "->": 68, "=>": 69, "OptComma": 70, ",": 71, "Param": 72, "ParamVar": 73, "...": 74, "Array": 75, "Splat": 76, "SimpleAssignable": 77, "Accessor": 78, "Parenthetical": 79, "Range": 80, "This": 81, ".": 82, "?.": 83, "::": 84, "?::": 85, "Index": 86, "INDEX_START": 87, "IndexValue": 88, "INDEX_END": 89, "INDEX_SOAK": 90, "Slice": 91, "{": 92, "AssignList": 93, "}": 94, "CLASS": 95, "EXTENDS": 96, "IMPORT": 97, "ImportDefaultSpecifier": 98, "ImportNamespaceSpecifier": 99, "ImportSpecifierList": 100, "ImportSpecifier": 101, "AS": 102, "DEFAULT": 103, "IMPORT_ALL": 104, "EXPORT": 105, "ExportSpecifierList": 106, "EXPORT_ALL": 107, "ExportSpecifier": 108, "OptFuncExist": 109, "Arguments": 110, "Super": 111, "SUPER": 112, "FUNC_EXIST": 113, "CALL_START": 114, "CALL_END": 115, "ArgList": 116, "THIS": 117, "@": 118, "[": 119, "]": 120, "RangeDots": 121, "..": 122, "Arg": 123, "SimpleArgs": 124, "TRY": 125, "Catch": 126, "FINALLY": 127, "CATCH": 128, "THROW": 129, "(": 130, ")": 131, "WhileSource": 132, "WHILE": 133, "WHEN": 134, "UNTIL": 135, "Loop": 136, "LOOP": 137, "ForBody": 138, "FOR": 139, "BY": 140, "ForStart": 141, "ForSource": 142, "ForVariables": 143, "OWN": 144, "ForValue": 145, "FORIN": 146, "FOROF": 147, "FORFROM": 148, "SWITCH": 149, "Whens": 150, "ELSE": 151, "When": 152, "LEADING_WHEN": 153, "IfBlock": 154, "IF": 155, "POST_IF": 156, "UNARY": 157, "UNARY_MATH": 158, "-": 159, "+": 160, "--": 161, "++": 162, "?": 163, "MATH": 164, "**": 165, "SHIFT": 166, "COMPARE": 167, "&": 168, "^": 169, "|": 170, "&&": 171, "||": 172, "BIN?": 173, "RELATION": 174, "COMPOUND_ASSIGN": 175, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 6: "TERMINATOR", 12: "STATEMENT", 28: "YIELD", 29: "FROM", 31: "INDENT", 32: "OUTDENT", 34: "IDENTIFIER", 36: "PROPERTY", 38: "NUMBER", 40: "STRING", 41: "STRING_START", 42: "STRING_END", 44: "REGEX", 45: "REGEX_START", 46: "REGEX_END", 48: "JS", 49: "UNDEFINED", 50: "NULL", 51: "BOOL", 52: "INFINITY", 53: "NAN", 55: "=", 58: ":", 61: "RETURN", 63: "HERECOMMENT", 64: "PARAM_START", 66: "PARAM_END", 68: "->", 69: "=>", 71: ",", 74: "...", 82: ".", 83: "?.", 84: "::", 85: "?::", 87: "INDEX_START", 89: "INDEX_END", 90: "INDEX_SOAK", 92: "{", 94: "}", 95: "CLASS", 96: "EXTENDS", 97: "IMPORT", 102: "AS", 103: "DEFAULT", 104: "IMPORT_ALL", 105: "EXPORT", 107: "EXPORT_ALL", 112: "SUPER", 113: "FUNC_EXIST", 114: "CALL_START", 115: "CALL_END", 117: "THIS", 118: "@", 119: "[", 120: "]", 122: "..", 125: "TRY", 127: "FINALLY", 128: "CATCH", 129: "THROW", 130: "(", 131: ")", 133: "WHILE", 134: "WHEN", 135: "UNTIL", 137: "LOOP", 139: "FOR", 140: "BY", 144: "OWN", 146: "FORIN", 147: "FOROF", 148: "FORFROM", 149: "SWITCH", 151: "ELSE", 153: "LEADING_WHEN", 155: "IF", 156: "POST_IF", 157: "UNARY", 158: "UNARY_MATH", 159: "-", 160: "+", 161: "--", 162: "++", 163: "?", 164: "MATH", 165: "**", 166: "SHIFT", 167: "COMPARE", 168: "&", 169: "^", 170: "|", 171: "&&", 172: "||", 173: "BIN?", 174: "RELATION", 175: "COMPOUND_ASSIGN" },
        productions_: [0, [3, 0], [3, 1], [4, 1], [4, 3], [4, 2], [5, 1], [5, 1], [5, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [27, 1], [27, 2], [27, 3], [30, 2], [30, 3], [33, 1], [35, 1], [37, 1], [37, 1], [39, 1], [39, 3], [43, 1], [43, 3], [47, 1], [47, 1], [47, 1], [47, 1], [47, 1], [47, 1], [47, 1], [47, 1], [19, 3], [19, 4], [19, 5], [56, 1], [56, 3], [56, 5], [56, 3], [56, 5], [56, 1], [59, 1], [59, 1], [59, 1], [57, 1], [57, 1], [10, 2], [10, 4], [10, 1], [9, 3], [9, 2], [11, 1], [17, 5], [17, 2], [67, 1], [67, 1], [70, 0], [70, 1], [65, 0], [65, 1], [65, 3], [65, 4], [65, 6], [72, 1], [72, 2], [72, 3], [72, 1], [73, 1], [73, 1], [73, 1], [73, 1], [76, 2], [77, 1], [77, 2], [77, 2], [77, 1], [54, 1], [54, 1], [54, 1], [15, 1], [15, 1], [15, 1], [15, 1], [15, 1], [78, 2], [78, 2], [78, 2], [78, 2], [78, 1], [78, 1], [86, 3], [86, 2], [88, 1], [88, 1], [62, 4], [93, 0], [93, 1], [93, 3], [93, 4], [93, 6], [25, 1], [25, 2], [25, 3], [25, 4], [25, 2], [25, 3], [25, 4], [25, 5], [13, 2], [13, 4], [13, 4], [13, 5], [13, 7], [13, 6], [13, 9], [100, 1], [100, 3], [100, 4], [100, 4], [100, 6], [101, 1], [101, 3], [101, 1], [101, 3], [98, 1], [99, 3], [14, 3], [14, 5], [14, 2], [14, 4], [14, 5], [14, 6], [14, 3], [14, 4], [14, 7], [106, 1], [106, 3], [106, 4], [106, 4], [106, 6], [108, 1], [108, 3], [108, 3], [108, 1], [108, 3], [16, 3], [16, 3], [16, 3], [16, 1], [111, 1], [111, 2], [109, 0], [109, 1], [110, 2], [110, 4], [81, 1], [81, 1], [60, 2], [75, 2], [75, 4], [121, 1], [121, 1], [80, 5], [91, 3], [91, 2], [91, 2], [91, 1], [116, 1], [116, 3], [116, 4], [116, 4], [116, 6], [123, 1], [123, 1], [123, 1], [124, 1], [124, 3], [21, 2], [21, 3], [21, 4], [21, 5], [126, 3], [126, 3], [126, 2], [26, 2], [79, 3], [79, 5], [132, 2], [132, 4], [132, 2], [132, 4], [22, 2], [22, 2], [22, 2], [22, 1], [136, 2], [136, 2], [23, 2], [23, 2], [23, 2], [138, 2], [138, 4], [138, 2], [141, 2], [141, 3], [145, 1], [145, 1], [145, 1], [145, 1], [143, 1], [143, 3], [142, 2], [142, 2], [142, 4], [142, 4], [142, 4], [142, 6], [142, 6], [142, 2], [142, 4], [24, 5], [24, 7], [24, 4], [24, 6], [150, 1], [150, 2], [152, 3], [152, 4], [154, 3], [154, 5], [20, 1], [20, 3], [20, 3], [20, 3], [18, 2], [18, 2], [18, 2], [18, 2], [18, 2], [18, 2], [18, 2], [18, 2], [18, 2], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 3], [18, 5], [18, 4], [18, 3]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
          var $0 = $$.length - 1;
          switch (yystate) {
            case 1:
              return this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Block());
              break;
            case 2:
              return this.$ = $$[$0];
              break;
            case 3:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(yy.Block.wrap([$$[$0]]));
              break;
            case 4:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])($$[$0 - 2].push($$[$0]));
              break;
            case 5:
              this.$ = $$[$0 - 1];
              break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 35:
            case 40:
            case 42:
            case 56:
            case 57:
            case 58:
            case 59:
            case 60:
            case 61:
            case 72:
            case 73:
            case 83:
            case 84:
            case 85:
            case 86:
            case 91:
            case 92:
            case 95:
            case 99:
            case 105:
            case 164:
            case 188:
            case 189:
            case 191:
            case 221:
            case 222:
            case 240:
            case 246:
              this.$ = $$[$0];
              break;
            case 11:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.StatementLiteral($$[$0]));
              break;
            case 27:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Op($$[$0], new yy.Value(new yy.Literal(""))));
              break;
            case 28:
            case 250:
            case 251:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op($$[$0 - 1], $$[$0]));
              break;
            case 29:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Op($$[$0 - 2].concat($$[$0 - 1]), $$[$0]));
              break;
            case 30:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Block());
              break;
            case 31:
            case 106:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])($$[$0 - 1]);
              break;
            case 32:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.IdentifierLiteral($$[$0]));
              break;
            case 33:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.PropertyName($$[$0]));
              break;
            case 34:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.NumberLiteral($$[$0]));
              break;
            case 36:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.StringLiteral($$[$0]));
              break;
            case 37:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.StringWithInterpolations($$[$0 - 1]));
              break;
            case 38:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.RegexLiteral($$[$0]));
              break;
            case 39:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.RegexWithInterpolations($$[$0 - 1].args));
              break;
            case 41:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.PassthroughLiteral($$[$0]));
              break;
            case 43:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.UndefinedLiteral());
              break;
            case 44:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.NullLiteral());
              break;
            case 45:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.BooleanLiteral($$[$0]));
              break;
            case 46:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.InfinityLiteral($$[$0]));
              break;
            case 47:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.NaNLiteral());
              break;
            case 48:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Assign($$[$0 - 2], $$[$0]));
              break;
            case 49:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Assign($$[$0 - 3], $$[$0]));
              break;
            case 50:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Assign($$[$0 - 4], $$[$0 - 1]));
              break;
            case 51:
            case 88:
            case 93:
            case 94:
            case 96:
            case 97:
            case 98:
            case 223:
            case 224:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Value($$[$0]));
              break;
            case 52:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0 - 2])(new yy.Value($$[$0 - 2])), $$[$0], "object", {
                operatorToken: yy.addLocationDataFn(_$[$0 - 1])(new yy.Literal($$[$0 - 1]))
              }));
              break;
            case 53:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0 - 4])(new yy.Value($$[$0 - 4])), $$[$0 - 1], "object", {
                operatorToken: yy.addLocationDataFn(_$[$0 - 3])(new yy.Literal($$[$0 - 3]))
              }));
              break;
            case 54:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0 - 2])(new yy.Value($$[$0 - 2])), $$[$0], null, {
                operatorToken: yy.addLocationDataFn(_$[$0 - 1])(new yy.Literal($$[$0 - 1]))
              }));
              break;
            case 55:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Assign(yy.addLocationDataFn(_$[$0 - 4])(new yy.Value($$[$0 - 4])), $$[$0 - 1], null, {
                operatorToken: yy.addLocationDataFn(_$[$0 - 3])(new yy.Literal($$[$0 - 3]))
              }));
              break;
            case 62:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Return($$[$0]));
              break;
            case 63:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Return(new yy.Value($$[$0 - 1])));
              break;
            case 64:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Return());
              break;
            case 65:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.YieldReturn($$[$0]));
              break;
            case 66:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.YieldReturn());
              break;
            case 67:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Comment($$[$0]));
              break;
            case 68:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Code($$[$0 - 3], $$[$0], $$[$0 - 1]));
              break;
            case 69:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Code([], $$[$0], $$[$0 - 1]));
              break;
            case 70:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])("func");
              break;
            case 71:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])("boundfunc");
              break;
            case 74:
            case 111:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])([]);
              break;
            case 75:
            case 112:
            case 131:
            case 151:
            case 183:
            case 225:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])([$$[$0]]);
              break;
            case 76:
            case 113:
            case 132:
            case 152:
            case 184:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])($$[$0 - 2].concat($$[$0]));
              break;
            case 77:
            case 114:
            case 133:
            case 153:
            case 185:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])($$[$0 - 3].concat($$[$0]));
              break;
            case 78:
            case 115:
            case 135:
            case 155:
            case 187:
              this.$ = yy.addLocationDataFn(_$[$0 - 5], _$[$0])($$[$0 - 5].concat($$[$0 - 2]));
              break;
            case 79:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Param($$[$0]));
              break;
            case 80:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Param($$[$0 - 1], null, true));
              break;
            case 81:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Param($$[$0 - 2], $$[$0]));
              break;
            case 82:
            case 190:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Expansion());
              break;
            case 87:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Splat($$[$0 - 1]));
              break;
            case 89:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])($$[$0 - 1].add($$[$0]));
              break;
            case 90:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Value($$[$0 - 1], [].concat($$[$0])));
              break;
            case 100:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Access($$[$0]));
              break;
            case 101:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Access($$[$0], "soak"));
              break;
            case 102:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])([yy.addLocationDataFn(_$[$0 - 1])(new yy.Access(new yy.PropertyName("prototype"))), yy.addLocationDataFn(_$[$0])(new yy.Access($$[$0]))]);
              break;
            case 103:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])([yy.addLocationDataFn(_$[$0 - 1])(new yy.Access(new yy.PropertyName("prototype"), "soak")), yy.addLocationDataFn(_$[$0])(new yy.Access($$[$0]))]);
              break;
            case 104:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Access(new yy.PropertyName("prototype")));
              break;
            case 107:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(yy.extend($$[$0], {
                soak: true
              }));
              break;
            case 108:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Index($$[$0]));
              break;
            case 109:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Slice($$[$0]));
              break;
            case 110:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Obj($$[$0 - 2], $$[$0 - 3].generated));
              break;
            case 116:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Class());
              break;
            case 117:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Class(null, null, $$[$0]));
              break;
            case 118:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Class(null, $$[$0]));
              break;
            case 119:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Class(null, $$[$0 - 1], $$[$0]));
              break;
            case 120:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Class($$[$0]));
              break;
            case 121:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Class($$[$0 - 1], null, $$[$0]));
              break;
            case 122:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Class($$[$0 - 2], $$[$0]));
              break;
            case 123:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Class($$[$0 - 3], $$[$0 - 1], $$[$0]));
              break;
            case 124:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.ImportDeclaration(null, $$[$0]));
              break;
            case 125:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.ImportDeclaration(new yy.ImportClause($$[$0 - 2], null), $$[$0]));
              break;
            case 126:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.ImportDeclaration(new yy.ImportClause(null, $$[$0 - 2]), $$[$0]));
              break;
            case 127:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.ImportDeclaration(new yy.ImportClause(null, new yy.ImportSpecifierList([])), $$[$0]));
              break;
            case 128:
              this.$ = yy.addLocationDataFn(_$[$0 - 6], _$[$0])(new yy.ImportDeclaration(new yy.ImportClause(null, new yy.ImportSpecifierList($$[$0 - 4])), $$[$0]));
              break;
            case 129:
              this.$ = yy.addLocationDataFn(_$[$0 - 5], _$[$0])(new yy.ImportDeclaration(new yy.ImportClause($$[$0 - 4], $$[$0 - 2]), $$[$0]));
              break;
            case 130:
              this.$ = yy.addLocationDataFn(_$[$0 - 8], _$[$0])(new yy.ImportDeclaration(new yy.ImportClause($$[$0 - 7], new yy.ImportSpecifierList($$[$0 - 4])), $$[$0]));
              break;
            case 134:
            case 154:
            case 170:
            case 186:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])($$[$0 - 2]);
              break;
            case 136:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.ImportSpecifier($$[$0]));
              break;
            case 137:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ImportSpecifier($$[$0 - 2], $$[$0]));
              break;
            case 138:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.ImportSpecifier(new yy.Literal($$[$0])));
              break;
            case 139:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ImportSpecifier(new yy.Literal($$[$0 - 2]), $$[$0]));
              break;
            case 140:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.ImportDefaultSpecifier($$[$0]));
              break;
            case 141:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ImportNamespaceSpecifier(new yy.Literal($$[$0 - 2]), $$[$0]));
              break;
            case 142:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList([])));
              break;
            case 143:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList($$[$0 - 2])));
              break;
            case 144:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.ExportNamedDeclaration($$[$0]));
              break;
            case 145:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.ExportNamedDeclaration(new yy.Assign($$[$0 - 2], $$[$0], null, {
                moduleDeclaration: "export"
              })));
              break;
            case 146:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.ExportNamedDeclaration(new yy.Assign($$[$0 - 3], $$[$0], null, {
                moduleDeclaration: "export"
              })));
              break;
            case 147:
              this.$ = yy.addLocationDataFn(_$[$0 - 5], _$[$0])(new yy.ExportNamedDeclaration(new yy.Assign($$[$0 - 4], $$[$0 - 1], null, {
                moduleDeclaration: "export"
              })));
              break;
            case 148:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ExportDefaultDeclaration($$[$0]));
              break;
            case 149:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.ExportAllDeclaration(new yy.Literal($$[$0 - 2]), $$[$0]));
              break;
            case 150:
              this.$ = yy.addLocationDataFn(_$[$0 - 6], _$[$0])(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList($$[$0 - 4]), $$[$0]));
              break;
            case 156:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.ExportSpecifier($$[$0]));
              break;
            case 157:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ExportSpecifier($$[$0 - 2], $$[$0]));
              break;
            case 158:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ExportSpecifier($$[$0 - 2], new yy.Literal($$[$0])));
              break;
            case 159:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.ExportSpecifier(new yy.Literal($$[$0])));
              break;
            case 160:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.ExportSpecifier(new yy.Literal($$[$0 - 2]), $$[$0]));
              break;
            case 161:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.TaggedTemplateCall($$[$0 - 2], $$[$0], $$[$0 - 1]));
              break;
            case 162:
            case 163:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Call($$[$0 - 2], $$[$0], $$[$0 - 1]));
              break;
            case 165:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.SuperCall());
              break;
            case 166:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.SuperCall($$[$0]));
              break;
            case 167:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(false);
              break;
            case 168:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(true);
              break;
            case 169:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])([]);
              break;
            case 171:
            case 172:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Value(new yy.ThisLiteral()));
              break;
            case 173:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Value(yy.addLocationDataFn(_$[$0 - 1])(new yy.ThisLiteral()), [yy.addLocationDataFn(_$[$0])(new yy.Access($$[$0]))], "this"));
              break;
            case 174:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Arr([]));
              break;
            case 175:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Arr($$[$0 - 2]));
              break;
            case 176:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])("inclusive");
              break;
            case 177:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])("exclusive");
              break;
            case 178:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Range($$[$0 - 3], $$[$0 - 1], $$[$0 - 2]));
              break;
            case 179:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Range($$[$0 - 2], $$[$0], $$[$0 - 1]));
              break;
            case 180:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Range($$[$0 - 1], null, $$[$0]));
              break;
            case 181:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Range(null, $$[$0], $$[$0 - 1]));
              break;
            case 182:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])(new yy.Range(null, null, $$[$0]));
              break;
            case 192:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])([].concat($$[$0 - 2], $$[$0]));
              break;
            case 193:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Try($$[$0]));
              break;
            case 194:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Try($$[$0 - 1], $$[$0][0], $$[$0][1]));
              break;
            case 195:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Try($$[$0 - 2], null, null, $$[$0]));
              break;
            case 196:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Try($$[$0 - 3], $$[$0 - 2][0], $$[$0 - 2][1], $$[$0]));
              break;
            case 197:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])([$$[$0 - 1], $$[$0]]);
              break;
            case 198:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])([yy.addLocationDataFn(_$[$0 - 1])(new yy.Value($$[$0 - 1])), $$[$0]]);
              break;
            case 199:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])([null, $$[$0]]);
              break;
            case 200:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Throw($$[$0]));
              break;
            case 201:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Parens($$[$0 - 1]));
              break;
            case 202:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Parens($$[$0 - 2]));
              break;
            case 203:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.While($$[$0]));
              break;
            case 204:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.While($$[$0 - 2], {
                guard: $$[$0]
              }));
              break;
            case 205:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.While($$[$0], {
                invert: true
              }));
              break;
            case 206:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.While($$[$0 - 2], {
                invert: true,
                guard: $$[$0]
              }));
              break;
            case 207:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])($$[$0 - 1].addBody($$[$0]));
              break;
            case 208:
            case 209:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])($$[$0].addBody(yy.addLocationDataFn(_$[$0 - 1])(yy.Block.wrap([$$[$0 - 1]]))));
              break;
            case 210:
              this.$ = yy.addLocationDataFn(_$[$0], _$[$0])($$[$0]);
              break;
            case 211:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.While(yy.addLocationDataFn(_$[$0 - 1])(new yy.BooleanLiteral("true"))).addBody($$[$0]));
              break;
            case 212:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.While(yy.addLocationDataFn(_$[$0 - 1])(new yy.BooleanLiteral("true"))).addBody(yy.addLocationDataFn(_$[$0])(yy.Block.wrap([$$[$0]]))));
              break;
            case 213:
            case 214:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.For($$[$0 - 1], $$[$0]));
              break;
            case 215:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.For($$[$0], $$[$0 - 1]));
              break;
            case 216:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])({
                source: yy.addLocationDataFn(_$[$0])(new yy.Value($$[$0]))
              });
              break;
            case 217:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])({
                source: yy.addLocationDataFn(_$[$0 - 2])(new yy.Value($$[$0 - 2])),
                step: $$[$0]
              });
              break;
            case 218:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(function() {
                $$[$0].own = $$[$0 - 1].own;
                $$[$0].ownTag = $$[$0 - 1].ownTag;
                $$[$0].name = $$[$0 - 1][0];
                $$[$0].index = $$[$0 - 1][1];
                return $$[$0];
              }());
              break;
            case 219:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])($$[$0]);
              break;
            case 220:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(function() {
                $$[$0].own = true;
                $$[$0].ownTag = yy.addLocationDataFn(_$[$0 - 1])(new yy.Literal($$[$0 - 1]));
                return $$[$0];
              }());
              break;
            case 226:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])([$$[$0 - 2], $$[$0]]);
              break;
            case 227:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])({
                source: $$[$0]
              });
              break;
            case 228:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])({
                source: $$[$0],
                object: true
              });
              break;
            case 229:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])({
                source: $$[$0 - 2],
                guard: $$[$0]
              });
              break;
            case 230:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])({
                source: $$[$0 - 2],
                guard: $$[$0],
                object: true
              });
              break;
            case 231:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])({
                source: $$[$0 - 2],
                step: $$[$0]
              });
              break;
            case 232:
              this.$ = yy.addLocationDataFn(_$[$0 - 5], _$[$0])({
                source: $$[$0 - 4],
                guard: $$[$0 - 2],
                step: $$[$0]
              });
              break;
            case 233:
              this.$ = yy.addLocationDataFn(_$[$0 - 5], _$[$0])({
                source: $$[$0 - 4],
                step: $$[$0 - 2],
                guard: $$[$0]
              });
              break;
            case 234:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])({
                source: $$[$0],
                from: true
              });
              break;
            case 235:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])({
                source: $$[$0 - 2],
                guard: $$[$0],
                from: true
              });
              break;
            case 236:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Switch($$[$0 - 3], $$[$0 - 1]));
              break;
            case 237:
              this.$ = yy.addLocationDataFn(_$[$0 - 6], _$[$0])(new yy.Switch($$[$0 - 5], $$[$0 - 3], $$[$0 - 1]));
              break;
            case 238:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Switch(null, $$[$0 - 1]));
              break;
            case 239:
              this.$ = yy.addLocationDataFn(_$[$0 - 5], _$[$0])(new yy.Switch(null, $$[$0 - 3], $$[$0 - 1]));
              break;
            case 241:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])($$[$0 - 1].concat($$[$0]));
              break;
            case 242:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])([[$$[$0 - 1], $$[$0]]]);
              break;
            case 243:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])([[$$[$0 - 2], $$[$0 - 1]]]);
              break;
            case 244:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.If($$[$0 - 1], $$[$0], {
                type: $$[$0 - 2]
              }));
              break;
            case 245:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])($$[$0 - 4].addElse(yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.If($$[$0 - 1], $$[$0], {
                type: $$[$0 - 2]
              }))));
              break;
            case 247:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])($$[$0 - 2].addElse($$[$0]));
              break;
            case 248:
            case 249:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.If($$[$0], yy.addLocationDataFn(_$[$0 - 2])(yy.Block.wrap([$$[$0 - 2]])), {
                type: $$[$0 - 1],
                statement: true
              }));
              break;
            case 252:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op("-", $$[$0]));
              break;
            case 253:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op("+", $$[$0]));
              break;
            case 254:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op("--", $$[$0]));
              break;
            case 255:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op("++", $$[$0]));
              break;
            case 256:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op("--", $$[$0 - 1], null, true));
              break;
            case 257:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Op("++", $$[$0 - 1], null, true));
              break;
            case 258:
              this.$ = yy.addLocationDataFn(_$[$0 - 1], _$[$0])(new yy.Existence($$[$0 - 1]));
              break;
            case 259:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Op("+", $$[$0 - 2], $$[$0]));
              break;
            case 260:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Op("-", $$[$0 - 2], $$[$0]));
              break;
            case 261:
            case 262:
            case 263:
            case 264:
            case 265:
            case 266:
            case 267:
            case 268:
            case 269:
            case 270:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Op($$[$0 - 1], $$[$0 - 2], $$[$0]));
              break;
            case 271:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(function() {
                if ($$[$0 - 1].charAt(0) === "!") {
                  return new yy.Op($$[$0 - 1].slice(1), $$[$0 - 2], $$[$0]).invert();
                } else {
                  return new yy.Op($$[$0 - 1], $$[$0 - 2], $$[$0]);
                }
              }());
              break;
            case 272:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Assign($$[$0 - 2], $$[$0], $$[$0 - 1]));
              break;
            case 273:
              this.$ = yy.addLocationDataFn(_$[$0 - 4], _$[$0])(new yy.Assign($$[$0 - 4], $$[$0 - 1], $$[$0 - 3]));
              break;
            case 274:
              this.$ = yy.addLocationDataFn(_$[$0 - 3], _$[$0])(new yy.Assign($$[$0 - 3], $$[$0], $$[$0 - 2]));
              break;
            case 275:
              this.$ = yy.addLocationDataFn(_$[$0 - 2], _$[$0])(new yy.Extends($$[$0 - 2], $$[$0]));
              break;
          }
        },
        table: [{ 1: [2, 1], 3: 1, 4: 2, 5: 3, 7: 4, 8: 5, 9: 6, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 1: [3] }, { 1: [2, 2], 6: $VG }, o($VH, [2, 3]), o($VH, [2, 6], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VH, [2, 7], { 141: 77, 132: 105, 138: 106, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VX }), o($VH, [2, 8]), o($VY, [2, 14], { 109: 107, 78: 108, 86: 114, 40: $VZ, 41: $VZ, 114: $VZ, 82: $V_, 83: $V$, 84: $V01, 85: $V11, 87: $V21, 90: $V31, 113: $V41 }), o($VY, [2, 15], { 86: 114, 109: 117, 78: 118, 82: $V_, 83: $V$, 84: $V01, 85: $V11, 87: $V21, 90: $V31, 113: $V41, 114: $VZ }), o($VY, [2, 16]), o($VY, [2, 17]), o($VY, [2, 18]), o($VY, [2, 19]), o($VY, [2, 20]), o($VY, [2, 21]), o($VY, [2, 22]), o($VY, [2, 23]), o($VY, [2, 24]), o($VY, [2, 25]), o($VY, [2, 26]), o($V51, [2, 9]), o($V51, [2, 10]), o($V51, [2, 11]), o($V51, [2, 12]), o($V51, [2, 13]), o([1, 6, 32, 42, 131, 133, 135, 139, 156, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $V61, { 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 10: 20, 11: 21, 13: 23, 14: 24, 54: 26, 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 67: 33, 77: 40, 154: 41, 132: 43, 136: 44, 138: 45, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 141: 77, 39: 80, 7: 120, 8: 122, 12: $V0, 28: $V71, 29: $V81, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 61: [1, 119], 63: $Vf, 64: $Vg, 68: $Vh, 69: $Vi, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 137: $Vw, 149: $Vy, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }), o($V91, $Va1, { 55: [1, 124] }), o($V91, [2, 96]), o($V91, [2, 97]), o($V91, [2, 98]), o($V91, [2, 99]), o($Vb1, [2, 164]), o([6, 31, 66, 71], $Vc1, { 65: 125, 72: 126, 73: 127, 33: 129, 60: 130, 75: 131, 62: 132, 34: $V2, 74: $Vd1, 92: $Vj, 118: $Ve1, 119: $Vf1 }), { 30: 135, 31: $Vg1 }, { 7: 137, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 138, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 139, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 140, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 15: 142, 16: 143, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 144, 60: 71, 62: 54, 75: 53, 77: 141, 79: 28, 80: 29, 81: 30, 92: $Vj, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 130: $Vt }, { 15: 142, 16: 143, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 144, 60: 71, 62: 54, 75: 53, 77: 145, 79: 28, 80: 29, 81: 30, 92: $Vj, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 130: $Vt }, o($Vh1, $Vi1, { 96: [1, 149], 161: [1, 146], 162: [1, 147], 175: [1, 148] }), o($VY, [2, 246], { 151: [1, 150] }), { 30: 151, 31: $Vg1 }, { 30: 152, 31: $Vg1 }, o($VY, [2, 210]), { 30: 153, 31: $Vg1 }, { 7: 154, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: [1, 155], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($Vj1, [2, 116], { 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 39: 80, 15: 142, 16: 143, 54: 144, 30: 156, 77: 158, 31: $Vg1, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 92: $Vj, 96: [1, 157], 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 130: $Vt }), { 7: 159, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($V51, $Vk1, { 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 10: 20, 11: 21, 13: 23, 14: 24, 54: 26, 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 67: 33, 77: 40, 154: 41, 132: 43, 136: 44, 138: 45, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 141: 77, 39: 80, 8: 122, 7: 160, 12: $V0, 28: $V71, 31: $Vl1, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 61: $Ve, 63: $Vf, 64: $Vg, 68: $Vh, 69: $Vi, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 137: $Vw, 149: $Vy, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }), o([1, 6, 31, 32, 42, 71, 94, 131, 133, 135, 139, 156], [2, 67]), { 33: 166, 34: $V2, 39: 162, 40: $V4, 41: $V5, 92: [1, 165], 98: 163, 99: 164, 104: $Vm1 }, { 25: 169, 33: 170, 34: $V2, 92: [1, 168], 95: $Vk, 103: [1, 171], 107: [1, 172] }, o($Vh1, [2, 93]), o($Vh1, [2, 94]), o($V91, [2, 40]), o($V91, [2, 41]), o($V91, [2, 42]), o($V91, [2, 43]), o($V91, [2, 44]), o($V91, [2, 45]), o($V91, [2, 46]), o($V91, [2, 47]), { 4: 173, 5: 3, 7: 4, 8: 5, 9: 6, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V1, 31: [1, 174], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 175, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: $Vn1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vo1, 75: 53, 76: 180, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 116: 177, 117: $Vo, 118: $Vp, 119: $Vq, 120: $Vp1, 123: 178, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($V91, [2, 171]), o($V91, [2, 172], { 35: 182, 36: $Vq1 }), o([1, 6, 31, 32, 42, 46, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 113, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], [2, 165], { 110: 184, 114: $Vr1 }), { 31: [2, 70] }, { 31: [2, 71] }, o($Vs1, [2, 88]), o($Vs1, [2, 91]), { 7: 186, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 187, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 188, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 190, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 30: 189, 31: $Vg1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 33: 195, 34: $V2, 60: 196, 62: 198, 75: 197, 80: 191, 92: $Vj, 118: $Ve1, 119: $Vq, 143: 192, 144: [1, 193], 145: 194 }, { 142: 199, 146: [1, 200], 147: [1, 201], 148: [1, 202] }, o([6, 31, 71, 94], $Vt1, { 39: 80, 93: 203, 56: 204, 57: 205, 59: 206, 11: 207, 37: 208, 33: 209, 35: 210, 60: 211, 34: $V2, 36: $Vq1, 38: $V3, 40: $V4, 41: $V5, 63: $Vf, 118: $Ve1 }), o($Vu1, [2, 34]), o($Vu1, [2, 35]), o($V91, [2, 38]), { 15: 142, 16: 212, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 144, 60: 71, 62: 54, 75: 53, 77: 213, 79: 28, 80: 29, 81: 30, 92: $Vj, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 130: $Vt }, o([1, 6, 29, 31, 32, 40, 41, 42, 55, 58, 66, 71, 74, 82, 83, 84, 85, 87, 89, 90, 94, 96, 102, 113, 114, 115, 120, 122, 131, 133, 134, 135, 139, 140, 146, 147, 148, 156, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175], [2, 32]), o($Vv1, [2, 36]), { 4: 214, 5: 3, 7: 4, 8: 5, 9: 6, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VH, [2, 5], { 7: 4, 8: 5, 9: 6, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 10: 20, 11: 21, 13: 23, 14: 24, 54: 26, 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 67: 33, 77: 40, 154: 41, 132: 43, 136: 44, 138: 45, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 141: 77, 39: 80, 5: 215, 12: $V0, 28: $V1, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 61: $Ve, 63: $Vf, 64: $Vg, 68: $Vh, 69: $Vi, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 133: $Vu, 135: $Vv, 137: $Vw, 139: $Vx, 149: $Vy, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }), o($VY, [2, 258]), { 7: 216, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 217, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 218, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 219, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 220, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 221, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 222, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 223, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 224, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 225, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 226, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 227, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 228, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 229, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VY, [2, 209]), o($VY, [2, 214]), { 7: 230, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VY, [2, 208]), o($VY, [2, 213]), { 39: 231, 40: $V4, 41: $V5, 110: 232, 114: $Vr1 }, o($Vs1, [2, 89]), o($Vw1, [2, 168]), { 35: 233, 36: $Vq1 }, { 35: 234, 36: $Vq1 }, o($Vs1, [2, 104], { 35: 235, 36: $Vq1 }), { 35: 236, 36: $Vq1 }, o($Vs1, [2, 105]), { 7: 238, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vx1, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 88: 237, 91: 239, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 121: 240, 122: $Vy1, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 86: 243, 87: $V21, 90: $V31 }, { 110: 244, 114: $Vr1 }, o($Vs1, [2, 90]), o($VH, [2, 66], { 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 10: 20, 11: 21, 13: 23, 14: 24, 54: 26, 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 67: 33, 77: 40, 154: 41, 132: 43, 136: 44, 138: 45, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 141: 77, 39: 80, 8: 122, 7: 245, 12: $V0, 28: $V71, 31: $Vl1, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 61: $Ve, 63: $Vf, 64: $Vg, 68: $Vh, 69: $Vi, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 133: $Vk1, 135: $Vk1, 139: $Vk1, 156: $Vk1, 137: $Vw, 149: $Vy, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }), o($Vz1, [2, 28], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 7: 246, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 132: 105, 133: $Vu, 135: $Vv, 138: 106, 139: $Vx, 141: 77, 156: $VX }, o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], $V61, { 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 10: 20, 11: 21, 13: 23, 14: 24, 54: 26, 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 67: 33, 77: 40, 154: 41, 132: 43, 136: 44, 138: 45, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 141: 77, 39: 80, 7: 120, 8: 122, 12: $V0, 28: $V71, 29: $V81, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 61: $Ve, 63: $Vf, 64: $Vg, 68: $Vh, 69: $Vi, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 137: $Vw, 149: $Vy, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }), { 6: [1, 248], 7: 247, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: [1, 249], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o([6, 31], $VA1, { 70: 252, 66: [1, 250], 71: $VB1 }), o($VC1, [2, 75]), o($VC1, [2, 79], { 55: [1, 254], 74: [1, 253] }), o($VC1, [2, 82]), o($VD1, [2, 83]), o($VD1, [2, 84]), o($VD1, [2, 85]), o($VD1, [2, 86]), { 35: 182, 36: $Vq1 }, { 7: 255, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: $Vn1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vo1, 75: 53, 76: 180, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 116: 177, 117: $Vo, 118: $Vp, 119: $Vq, 120: $Vp1, 123: 178, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VY, [2, 69]), { 4: 257, 5: 3, 7: 4, 8: 5, 9: 6, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V1, 32: [1, 256], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 159, 160, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], [2, 250], { 141: 77, 132: 102, 138: 103, 163: $VL }), o($VE1, [2, 251], { 141: 77, 132: 102, 138: 103, 163: $VL, 165: $VN }), o($VE1, [2, 252], { 141: 77, 132: 102, 138: 103, 163: $VL, 165: $VN }), o($VE1, [2, 253], { 141: 77, 132: 102, 138: 103, 163: $VL, 165: $VN }), o($VY, [2, 254], { 40: $Vi1, 41: $Vi1, 82: $Vi1, 83: $Vi1, 84: $Vi1, 85: $Vi1, 87: $Vi1, 90: $Vi1, 113: $Vi1, 114: $Vi1 }), o($Vw1, $VZ, { 109: 107, 78: 108, 86: 114, 82: $V_, 83: $V$, 84: $V01, 85: $V11, 87: $V21, 90: $V31, 113: $V41 }), { 78: 118, 82: $V_, 83: $V$, 84: $V01, 85: $V11, 86: 114, 87: $V21, 90: $V31, 109: 117, 113: $V41, 114: $VZ }, o($VF1, $Va1), o($VY, [2, 255], { 40: $Vi1, 41: $Vi1, 82: $Vi1, 83: $Vi1, 84: $Vi1, 85: $Vi1, 87: $Vi1, 90: $Vi1, 113: $Vi1, 114: $Vi1 }), o($VY, [2, 256]), o($VY, [2, 257]), { 6: [1, 260], 7: 258, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: [1, 259], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 261, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 30: 262, 31: $Vg1, 155: [1, 263] }, o($VY, [2, 193], { 126: 264, 127: [1, 265], 128: [1, 266] }), o($VY, [2, 207]), o($VY, [2, 215]), { 31: [1, 267], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, { 150: 268, 152: 269, 153: $VG1 }, o($VY, [2, 117]), { 7: 271, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($Vj1, [2, 120], { 30: 272, 31: $Vg1, 40: $Vi1, 41: $Vi1, 82: $Vi1, 83: $Vi1, 84: $Vi1, 85: $Vi1, 87: $Vi1, 90: $Vi1, 113: $Vi1, 114: $Vi1, 96: [1, 273] }), o($Vz1, [2, 200], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($V51, $VH1, { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 62: 274, 92: $Vj }, o($V51, [2, 124]), { 29: [1, 275], 71: [1, 276] }, { 29: [1, 277] }, { 31: $VI1, 33: 282, 34: $V2, 94: [1, 278], 100: 279, 101: 280, 103: $VJ1 }, o([29, 71], [2, 140]), { 102: [1, 284] }, { 31: $VK1, 33: 289, 34: $V2, 94: [1, 285], 103: $VL1, 106: 286, 108: 287 }, o($V51, [2, 144]), { 55: [1, 291] }, { 7: 292, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 29: [1, 293] }, { 6: $VG, 131: [1, 294] }, { 4: 295, 5: 3, 7: 4, 8: 5, 9: 6, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o([6, 31, 71, 120], $VM1, { 141: 77, 132: 102, 138: 103, 121: 296, 74: [1, 297], 122: $Vy1, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VN1, [2, 174]), o([6, 31, 120], $VA1, { 70: 298, 71: $VO1 }), o($VP1, [2, 183]), { 7: 255, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: $Vn1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vo1, 75: 53, 76: 180, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 116: 300, 117: $Vo, 118: $Vp, 119: $Vq, 123: 178, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VP1, [2, 189]), o($VP1, [2, 190]), o($VQ1, [2, 173]), o($VQ1, [2, 33]), o($Vb1, [2, 166]), { 7: 255, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: $Vn1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vo1, 75: 53, 76: 180, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 115: [1, 301], 116: 302, 117: $Vo, 118: $Vp, 119: $Vq, 123: 178, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 30: 303, 31: $Vg1, 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, o($VR1, [2, 203], { 141: 77, 132: 102, 138: 103, 133: $Vu, 134: [1, 304], 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VR1, [2, 205], { 141: 77, 132: 102, 138: 103, 133: $Vu, 134: [1, 305], 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VY, [2, 211]), o($VS1, [2, 212], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 156, 159, 160, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], [2, 216], { 140: [1, 306] }), o($VT1, [2, 219]), { 33: 195, 34: $V2, 60: 196, 62: 198, 75: 197, 92: $Vj, 118: $Ve1, 119: $Vf1, 143: 307, 145: 194 }, o($VT1, [2, 225], { 71: [1, 308] }), o($VU1, [2, 221]), o($VU1, [2, 222]), o($VU1, [2, 223]), o($VU1, [2, 224]), o($VY, [2, 218]), { 7: 309, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 310, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 311, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VV1, $VA1, { 70: 312, 71: $VW1 }), o($VX1, [2, 112]), o($VX1, [2, 51], { 58: [1, 314] }), o($VY1, [2, 60], { 55: [1, 315] }), o($VX1, [2, 56]), o($VY1, [2, 61]), o($VZ1, [2, 57]), o($VZ1, [2, 58]), o($VZ1, [2, 59]), { 46: [1, 316], 78: 118, 82: $V_, 83: $V$, 84: $V01, 85: $V11, 86: 114, 87: $V21, 90: $V31, 109: 117, 113: $V41, 114: $VZ }, o($VF1, $Vi1), { 6: $VG, 42: [1, 317] }, o($VH, [2, 4]), o($V_1, [2, 259], { 141: 77, 132: 102, 138: 103, 163: $VL, 164: $VM, 165: $VN }), o($V_1, [2, 260], { 141: 77, 132: 102, 138: 103, 163: $VL, 164: $VM, 165: $VN }), o($VE1, [2, 261], { 141: 77, 132: 102, 138: 103, 163: $VL, 165: $VN }), o($VE1, [2, 262], { 141: 77, 132: 102, 138: 103, 163: $VL, 165: $VN }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 166, 167, 168, 169, 170, 171, 172, 173, 174], [2, 263], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 167, 168, 169, 170, 171, 172, 173], [2, 264], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 168, 169, 170, 171, 172, 173], [2, 265], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 169, 170, 171, 172, 173], [2, 266], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 170, 171, 172, 173], [2, 267], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 171, 172, 173], [2, 268], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 172, 173], [2, 269], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 173], [2, 270], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 174: $VW }), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 140, 156, 167, 168, 169, 170, 171, 172, 173, 174], [2, 271], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO }), o($VS1, [2, 249], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VS1, [2, 248], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vb1, [2, 161]), o($Vb1, [2, 162]), o($Vs1, [2, 100]), o($Vs1, [2, 101]), o($Vs1, [2, 102]), o($Vs1, [2, 103]), { 89: [1, 318] }, { 74: $Vx1, 89: [2, 108], 121: 319, 122: $Vy1, 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, { 89: [2, 109] }, { 7: 320, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 89: [2, 182], 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($V$1, [2, 176]), o($V$1, $V02), o($Vs1, [2, 107]), o($Vb1, [2, 163]), o($VH, [2, 65], { 141: 77, 132: 102, 138: 103, 133: $VH1, 135: $VH1, 139: $VH1, 156: $VH1, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vz1, [2, 29], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vz1, [2, 48], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 7: 321, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 322, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 67: 323, 68: $Vh, 69: $Vi }, o($V12, $V22, { 73: 127, 33: 129, 60: 130, 75: 131, 62: 132, 72: 324, 34: $V2, 74: $Vd1, 92: $Vj, 118: $Ve1, 119: $Vf1 }), { 6: $V32, 31: $V42 }, o($VC1, [2, 80]), { 7: 327, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VP1, $VM1, { 141: 77, 132: 102, 138: 103, 74: [1, 328], 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($V52, [2, 30]), { 6: $VG, 32: [1, 329] }, o($Vz1, [2, 272], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 7: 330, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 331, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($Vz1, [2, 275], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VY, [2, 247]), { 7: 332, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VY, [2, 194], { 127: [1, 333] }), { 30: 334, 31: $Vg1 }, { 30: 337, 31: $Vg1, 33: 335, 34: $V2, 62: 336, 92: $Vj }, { 150: 338, 152: 269, 153: $VG1 }, { 32: [1, 339], 151: [1, 340], 152: 341, 153: $VG1 }, o($V62, [2, 240]), { 7: 343, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 124: 342, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($V72, [2, 118], { 141: 77, 132: 102, 138: 103, 30: 344, 31: $Vg1, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VY, [2, 121]), { 7: 345, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 32: [1, 346] }, { 39: 347, 40: $V4, 41: $V5 }, { 92: [1, 349], 99: 348, 104: $Vm1 }, { 39: 350, 40: $V4, 41: $V5 }, { 29: [1, 351] }, o($VV1, $VA1, { 70: 352, 71: $V82 }), o($VX1, [2, 131]), { 31: $VI1, 33: 282, 34: $V2, 100: 354, 101: 280, 103: $VJ1 }, o($VX1, [2, 136], { 102: [1, 355] }), o($VX1, [2, 138], { 102: [1, 356] }), { 33: 357, 34: $V2 }, o($V51, [2, 142]), o($VV1, $VA1, { 70: 358, 71: $V92 }), o($VX1, [2, 151]), { 31: $VK1, 33: 289, 34: $V2, 103: $VL1, 106: 360, 108: 287 }, o($VX1, [2, 156], { 102: [1, 361] }), o($VX1, [2, 159], { 102: [1, 362] }), { 6: [1, 364], 7: 363, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: [1, 365], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($Va2, [2, 148], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 39: 366, 40: $V4, 41: $V5 }, o($V91, [2, 201]), { 6: $VG, 32: [1, 367] }, { 7: 368, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o([12, 28, 34, 38, 40, 41, 44, 45, 48, 49, 50, 51, 52, 53, 61, 63, 64, 68, 69, 92, 95, 97, 105, 112, 117, 118, 119, 125, 129, 130, 133, 135, 137, 139, 149, 155, 157, 158, 159, 160, 161, 162], $V02, { 6: $Vb2, 31: $Vb2, 71: $Vb2, 120: $Vb2 }), { 6: $Vc2, 31: $Vd2, 120: [1, 369] }, o([6, 31, 32, 115, 120], $V22, { 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 10: 20, 11: 21, 13: 23, 14: 24, 54: 26, 47: 27, 79: 28, 80: 29, 81: 30, 111: 31, 67: 33, 77: 40, 154: 41, 132: 43, 136: 44, 138: 45, 75: 53, 62: 54, 37: 55, 43: 57, 33: 70, 60: 71, 141: 77, 39: 80, 8: 122, 76: 180, 7: 255, 123: 372, 12: $V0, 28: $V71, 34: $V2, 38: $V3, 40: $V4, 41: $V5, 44: $V6, 45: $V7, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 61: $Ve, 63: $Vf, 64: $Vg, 68: $Vh, 69: $Vi, 74: $Vo1, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 133: $Vu, 135: $Vv, 137: $Vw, 139: $Vx, 149: $Vy, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }), o($V12, $VA1, { 70: 373, 71: $VO1 }), o($Vb1, [2, 169]), o([6, 31, 115], $VA1, { 70: 374, 71: $VO1 }), o($Ve2, [2, 244]), { 7: 375, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 376, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 377, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VT1, [2, 220]), { 33: 195, 34: $V2, 60: 196, 62: 198, 75: 197, 92: $Vj, 118: $Ve1, 119: $Vf1, 145: 378 }, o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 135, 139, 156], [2, 227], { 141: 77, 132: 102, 138: 103, 134: [1, 379], 140: [1, 380], 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vf2, [2, 228], { 141: 77, 132: 102, 138: 103, 134: [1, 381], 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vf2, [2, 234], { 141: 77, 132: 102, 138: 103, 134: [1, 382], 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 6: $Vg2, 31: $Vh2, 94: [1, 383] }, o($Vi2, $V22, { 39: 80, 57: 205, 59: 206, 11: 207, 37: 208, 33: 209, 35: 210, 60: 211, 56: 386, 34: $V2, 36: $Vq1, 38: $V3, 40: $V4, 41: $V5, 63: $Vf, 118: $Ve1 }), { 7: 387, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: [1, 388], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 389, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: [1, 390], 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($V91, [2, 39]), o($Vv1, [2, 37]), o($Vs1, [2, 106]), { 7: 391, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 89: [2, 180], 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 89: [2, 181], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, o($Vz1, [2, 49], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 32: [1, 392], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, { 30: 393, 31: $Vg1 }, o($VC1, [2, 76]), { 33: 129, 34: $V2, 60: 130, 62: 132, 72: 394, 73: 127, 74: $Vd1, 75: 131, 92: $Vj, 118: $Ve1, 119: $Vf1 }, o($Vj2, $Vc1, { 72: 126, 73: 127, 33: 129, 60: 130, 75: 131, 62: 132, 65: 395, 34: $V2, 74: $Vd1, 92: $Vj, 118: $Ve1, 119: $Vf1 }), o($VC1, [2, 81], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VP1, $Vb2), o($V52, [2, 31]), { 32: [1, 396], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, o($Vz1, [2, 274], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 30: 397, 31: $Vg1, 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, { 30: 398, 31: $Vg1 }, o($VY, [2, 195]), { 30: 399, 31: $Vg1 }, { 30: 400, 31: $Vg1 }, o($Vk2, [2, 199]), { 32: [1, 401], 151: [1, 402], 152: 341, 153: $VG1 }, o($VY, [2, 238]), { 30: 403, 31: $Vg1 }, o($V62, [2, 241]), { 30: 404, 31: $Vg1, 71: [1, 405] }, o($Vl2, [2, 191], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VY, [2, 119]), o($V72, [2, 122], { 141: 77, 132: 102, 138: 103, 30: 406, 31: $Vg1, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($V51, [2, 63]), o($V51, [2, 125]), { 29: [1, 407] }, { 31: $VI1, 33: 282, 34: $V2, 100: 408, 101: 280, 103: $VJ1 }, o($V51, [2, 126]), { 39: 409, 40: $V4, 41: $V5 }, { 6: $Vm2, 31: $Vn2, 94: [1, 410] }, o($Vi2, $V22, { 33: 282, 101: 413, 34: $V2, 103: $VJ1 }), o($V12, $VA1, { 70: 414, 71: $V82 }), { 33: 415, 34: $V2 }, { 33: 416, 34: $V2 }, { 29: [2, 141] }, { 6: $Vo2, 31: $Vp2, 94: [1, 417] }, o($Vi2, $V22, { 33: 289, 108: 420, 34: $V2, 103: $VL1 }), o($V12, $VA1, { 70: 421, 71: $V92 }), { 33: 422, 34: $V2, 103: [1, 423] }, { 33: 424, 34: $V2 }, o($Va2, [2, 145], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 7: 425, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 426, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($V51, [2, 149]), { 131: [1, 427] }, { 120: [1, 428], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, o($VN1, [2, 175]), { 7: 255, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vo1, 75: 53, 76: 180, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 123: 429, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 255, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 31: $Vn1, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 74: $Vo1, 75: 53, 76: 180, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 116: 430, 117: $Vo, 118: $Vp, 119: $Vq, 123: 178, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VP1, [2, 184]), { 6: $Vc2, 31: $Vd2, 32: [1, 431] }, { 6: $Vc2, 31: $Vd2, 115: [1, 432] }, o($VS1, [2, 204], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VS1, [2, 206], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VS1, [2, 217], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VT1, [2, 226]), { 7: 433, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 434, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 435, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 436, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VN1, [2, 110]), { 11: 207, 33: 209, 34: $V2, 35: 210, 36: $Vq1, 37: 208, 38: $V3, 39: 80, 40: $V4, 41: $V5, 56: 437, 57: 205, 59: 206, 60: 211, 63: $Vf, 118: $Ve1 }, o($Vj2, $Vt1, { 39: 80, 56: 204, 57: 205, 59: 206, 11: 207, 37: 208, 33: 209, 35: 210, 60: 211, 93: 438, 34: $V2, 36: $Vq1, 38: $V3, 40: $V4, 41: $V5, 63: $Vf, 118: $Ve1 }), o($VX1, [2, 113]), o($VX1, [2, 52], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 7: 439, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VX1, [2, 54], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 7: 440, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 89: [2, 179], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, o($VY, [2, 50]), o($VY, [2, 68]), o($VC1, [2, 77]), o($V12, $VA1, { 70: 441, 71: $VB1 }), o($VY, [2, 273]), o($Ve2, [2, 245]), o($VY, [2, 196]), o($Vk2, [2, 197]), o($Vk2, [2, 198]), o($VY, [2, 236]), { 30: 442, 31: $Vg1 }, { 32: [1, 443] }, o($V62, [2, 242], { 6: [1, 444] }), { 7: 445, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, o($VY, [2, 123]), { 39: 446, 40: $V4, 41: $V5 }, o($VV1, $VA1, { 70: 447, 71: $V82 }), o($V51, [2, 127]), { 29: [1, 448] }, { 33: 282, 34: $V2, 101: 449, 103: $VJ1 }, { 31: $VI1, 33: 282, 34: $V2, 100: 450, 101: 280, 103: $VJ1 }, o($VX1, [2, 132]), { 6: $Vm2, 31: $Vn2, 32: [1, 451] }, o($VX1, [2, 137]), o($VX1, [2, 139]), o($V51, [2, 143], { 29: [1, 452] }), { 33: 289, 34: $V2, 103: $VL1, 108: 453 }, { 31: $VK1, 33: 289, 34: $V2, 103: $VL1, 106: 454, 108: 287 }, o($VX1, [2, 152]), { 6: $Vo2, 31: $Vp2, 32: [1, 455] }, o($VX1, [2, 157]), o($VX1, [2, 158]), o($VX1, [2, 160]), o($Va2, [2, 146], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), { 32: [1, 456], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, o($V91, [2, 202]), o($V91, [2, 178]), o($VP1, [2, 185]), o($V12, $VA1, { 70: 457, 71: $VO1 }), o($VP1, [2, 186]), o($Vb1, [2, 170]), o([1, 6, 31, 32, 42, 66, 71, 74, 89, 94, 115, 120, 122, 131, 133, 134, 135, 139, 156], [2, 229], { 141: 77, 132: 102, 138: 103, 140: [1, 458], 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vf2, [2, 231], { 141: 77, 132: 102, 138: 103, 134: [1, 459], 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vz1, [2, 230], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vz1, [2, 235], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VX1, [2, 114]), o($V12, $VA1, { 70: 460, 71: $VW1 }), { 32: [1, 461], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, { 32: [1, 462], 132: 102, 133: $Vu, 135: $Vv, 138: 103, 139: $Vx, 141: 77, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }, { 6: $V32, 31: $V42, 32: [1, 463] }, { 32: [1, 464] }, o($VY, [2, 239]), o($V62, [2, 243]), o($Vl2, [2, 192], { 141: 77, 132: 102, 138: 103, 133: $Vu, 135: $Vv, 139: $Vx, 156: $VI, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($V51, [2, 129]), { 6: $Vm2, 31: $Vn2, 94: [1, 465] }, { 39: 466, 40: $V4, 41: $V5 }, o($VX1, [2, 133]), o($V12, $VA1, { 70: 467, 71: $V82 }), o($VX1, [2, 134]), { 39: 468, 40: $V4, 41: $V5 }, o($VX1, [2, 153]), o($V12, $VA1, { 70: 469, 71: $V92 }), o($VX1, [2, 154]), o($V51, [2, 147]), { 6: $Vc2, 31: $Vd2, 32: [1, 470] }, { 7: 471, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 7: 472, 8: 122, 10: 20, 11: 21, 12: $V0, 13: 23, 14: 24, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11, 20: 12, 21: 13, 22: 14, 23: 15, 24: 16, 25: 17, 26: 18, 27: 19, 28: $V71, 33: 70, 34: $V2, 37: 55, 38: $V3, 39: 80, 40: $V4, 41: $V5, 43: 57, 44: $V6, 45: $V7, 47: 27, 48: $V8, 49: $V9, 50: $Va, 51: $Vb, 52: $Vc, 53: $Vd, 54: 26, 60: 71, 61: $Ve, 62: 54, 63: $Vf, 64: $Vg, 67: 33, 68: $Vh, 69: $Vi, 75: 53, 77: 40, 79: 28, 80: 29, 81: 30, 92: $Vj, 95: $Vk, 97: $Vl, 105: $Vm, 111: 31, 112: $Vn, 117: $Vo, 118: $Vp, 119: $Vq, 125: $Vr, 129: $Vs, 130: $Vt, 132: 43, 133: $Vu, 135: $Vv, 136: 44, 137: $Vw, 138: 45, 139: $Vx, 141: 77, 149: $Vy, 154: 41, 155: $Vz, 157: $VA, 158: $VB, 159: $VC, 160: $VD, 161: $VE, 162: $VF }, { 6: $Vg2, 31: $Vh2, 32: [1, 473] }, o($VX1, [2, 53]), o($VX1, [2, 55]), o($VC1, [2, 78]), o($VY, [2, 237]), { 29: [1, 474] }, o($V51, [2, 128]), { 6: $Vm2, 31: $Vn2, 32: [1, 475] }, o($V51, [2, 150]), { 6: $Vo2, 31: $Vp2, 32: [1, 476] }, o($VP1, [2, 187]), o($Vz1, [2, 232], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($Vz1, [2, 233], { 141: 77, 132: 102, 138: 103, 159: $VJ, 160: $VK, 163: $VL, 164: $VM, 165: $VN, 166: $VO, 167: $VP, 168: $VQ, 169: $VR, 170: $VS, 171: $VT, 172: $VU, 173: $VV, 174: $VW }), o($VX1, [2, 115]), { 39: 477, 40: $V4, 41: $V5 }, o($VX1, [2, 135]), o($VX1, [2, 155]), o($V51, [2, 130])],
        defaultActions: { 68: [2, 70], 69: [2, 71], 239: [2, 109], 357: [2, 141] },
        parseError: function parseError(str, hash) {
          if (hash.recoverable) {
            this.trace(str);
          } else {
            let _parseError2 = function(msg, hash2) {
              this.message = msg;
              this.hash = hash2;
            };
            var _parseError = _parseError2;
            _parseError2.prototype = Error;
            throw new _parseError2(str, hash);
          }
        },
        parse: function parse(input) {
          var self2 = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
          var args = lstack.slice.call(arguments, 1);
          var lexer = Object.create(this.lexer);
          var sharedState = { yy: {} };
          for (var k in this.yy) {
            if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
              sharedState.yy[k] = this.yy[k];
            }
          }
          lexer.setInput(input, sharedState.yy);
          sharedState.yy.lexer = lexer;
          sharedState.yy.parser = this;
          if (typeof lexer.yylloc == "undefined") {
            lexer.yylloc = {};
          }
          var yyloc = lexer.yylloc;
          lstack.push(yyloc);
          var ranges = lexer.options && lexer.options.ranges;
          if (typeof sharedState.yy.parseError === "function") {
            this.parseError = sharedState.yy.parseError;
          } else {
            this.parseError = Object.getPrototypeOf(this).parseError;
          }
          function popStack(n) {
            stack.length = stack.length - 2 * n;
            vstack.length = vstack.length - n;
            lstack.length = lstack.length - n;
          }
          _token_stack:
            var lex = function() {
              var token;
              token = lexer.lex() || EOF;
              if (typeof token !== "number") {
                token = self2.symbols_[token] || token;
              }
              return token;
            };
          var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
          while (true) {
            state = stack[stack.length - 1];
            if (this.defaultActions[state]) {
              action = this.defaultActions[state];
            } else {
              if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
              }
              action = table[state] && table[state][symbol];
            }
            if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              expected = [];
              for (p in table[state]) {
                if (this.terminals_[p] && p > TERROR) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
              }
              if (lexer.showPosition) {
                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
              } else {
                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
              }
              this.parseError(errStr, {
                text: lexer.match,
                token: this.terminals_[symbol] || symbol,
                line: lexer.yylineno,
                loc: yyloc,
                expected
              });
            }
            if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
            }
            switch (action[0]) {
              case 1:
                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]);
                symbol = null;
                if (!preErrorSymbol) {
                  yyleng = lexer.yyleng;
                  yytext = lexer.yytext;
                  yylineno = lexer.yylineno;
                  yyloc = lexer.yylloc;
                  if (recovering > 0) {
                    recovering--;
                  }
                } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
                }
                break;
              case 2:
                len = this.productions_[action[1]][1];
                yyval.$ = vstack[vstack.length - len];
                yyval._$ = {
                  first_line: lstack[lstack.length - (len || 1)].first_line,
                  last_line: lstack[lstack.length - 1].last_line,
                  first_column: lstack[lstack.length - (len || 1)].first_column,
                  last_column: lstack[lstack.length - 1].last_column
                };
                if (ranges) {
                  yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                  ];
                }
                r = this.performAction.apply(yyval, [
                  yytext,
                  yyleng,
                  yylineno,
                  sharedState.yy,
                  action[1],
                  vstack,
                  lstack
                ].concat(args));
                if (typeof r !== "undefined") {
                  return r;
                }
                if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
                }
                stack.push(this.productions_[action[1]][0]);
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                stack.push(newState);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }
      };
      function Parser() {
        this.yy = {};
      }
      Parser.prototype = parser2;
      parser2.Parser = Parser;
      return new Parser();
    }();
    if (typeof require !== "undefined" && typeof exports !== "undefined") {
      exports.parser = parser;
      exports.Parser = parser.Parser;
      exports.parse = function() {
        return parser.parse.apply(parser, arguments);
      };
      exports.main = function commonjsMain(args) {
        if (!args[1]) {
          console.log("Usage: " + args[0] + " FILE");
          process.exit(1);
        }
        var source = "";
        var fs = require("fs");
        if (typeof fs !== "undefined" && fs !== null)
          source = fs.readFileSync(require("path").normalize(args[1]), "utf8");
        return exports.parser.parse(source);
      };
      if (typeof module2 !== "undefined" && require.main === module2) {
        exports.main(process.argv.slice(1));
      }
    }
  }
});

// ../node_modules/coffee-script/lib/coffee-script/sourcemap.js
var require_sourcemap = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/sourcemap.js"(exports, module2) {
    (function() {
      var LineMap, SourceMap;
      LineMap = function() {
        function LineMap2(line1) {
          this.line = line1;
          this.columns = [];
        }
        LineMap2.prototype.add = function(column, arg, options) {
          var sourceColumn, sourceLine;
          sourceLine = arg[0], sourceColumn = arg[1];
          if (options == null) {
            options = {};
          }
          if (this.columns[column] && options.noReplace) {
            return;
          }
          return this.columns[column] = {
            line: this.line,
            column,
            sourceLine,
            sourceColumn
          };
        };
        LineMap2.prototype.sourceLocation = function(column) {
          var mapping;
          while (!((mapping = this.columns[column]) || column <= 0)) {
            column--;
          }
          return mapping && [mapping.sourceLine, mapping.sourceColumn];
        };
        return LineMap2;
      }();
      SourceMap = function() {
        var BASE64_CHARS, VLQ_CONTINUATION_BIT, VLQ_SHIFT, VLQ_VALUE_MASK;
        function SourceMap2() {
          this.lines = [];
        }
        SourceMap2.prototype.add = function(sourceLocation, generatedLocation, options) {
          var base, column, line, lineMap;
          if (options == null) {
            options = {};
          }
          line = generatedLocation[0], column = generatedLocation[1];
          lineMap = (base = this.lines)[line] || (base[line] = new LineMap(line));
          return lineMap.add(column, sourceLocation, options);
        };
        SourceMap2.prototype.sourceLocation = function(arg) {
          var column, line, lineMap;
          line = arg[0], column = arg[1];
          while (!((lineMap = this.lines[line]) || line <= 0)) {
            line--;
          }
          return lineMap && lineMap.sourceLocation(column);
        };
        SourceMap2.prototype.generate = function(options, code) {
          var buffer, i, j, lastColumn, lastSourceColumn, lastSourceLine, len, len1, lineMap, lineNumber, mapping, needComma, ref, ref1, v3, writingline;
          if (options == null) {
            options = {};
          }
          if (code == null) {
            code = null;
          }
          writingline = 0;
          lastColumn = 0;
          lastSourceLine = 0;
          lastSourceColumn = 0;
          needComma = false;
          buffer = "";
          ref = this.lines;
          for (lineNumber = i = 0, len = ref.length; i < len; lineNumber = ++i) {
            lineMap = ref[lineNumber];
            if (lineMap) {
              ref1 = lineMap.columns;
              for (j = 0, len1 = ref1.length; j < len1; j++) {
                mapping = ref1[j];
                if (!mapping) {
                  continue;
                }
                while (writingline < mapping.line) {
                  lastColumn = 0;
                  needComma = false;
                  buffer += ";";
                  writingline++;
                }
                if (needComma) {
                  buffer += ",";
                  needComma = false;
                }
                buffer += this.encodeVlq(mapping.column - lastColumn);
                lastColumn = mapping.column;
                buffer += this.encodeVlq(0);
                buffer += this.encodeVlq(mapping.sourceLine - lastSourceLine);
                lastSourceLine = mapping.sourceLine;
                buffer += this.encodeVlq(mapping.sourceColumn - lastSourceColumn);
                lastSourceColumn = mapping.sourceColumn;
                needComma = true;
              }
            }
          }
          v3 = {
            version: 3,
            file: options.generatedFile || "",
            sourceRoot: options.sourceRoot || "",
            sources: options.sourceFiles || [""],
            names: [],
            mappings: buffer
          };
          if (options.inlineMap) {
            v3.sourcesContent = [code];
          }
          return v3;
        };
        VLQ_SHIFT = 5;
        VLQ_CONTINUATION_BIT = 1 << VLQ_SHIFT;
        VLQ_VALUE_MASK = VLQ_CONTINUATION_BIT - 1;
        SourceMap2.prototype.encodeVlq = function(value) {
          var answer, nextChunk, signBit, valueToEncode;
          answer = "";
          signBit = value < 0 ? 1 : 0;
          valueToEncode = (Math.abs(value) << 1) + signBit;
          while (valueToEncode || !answer) {
            nextChunk = valueToEncode & VLQ_VALUE_MASK;
            valueToEncode = valueToEncode >> VLQ_SHIFT;
            if (valueToEncode) {
              nextChunk |= VLQ_CONTINUATION_BIT;
            }
            answer += this.encodeBase64(nextChunk);
          }
          return answer;
        };
        BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        SourceMap2.prototype.encodeBase64 = function(value) {
          return BASE64_CHARS[value] || function() {
            throw new Error("Cannot Base64 encode value: " + value);
          }();
        };
        return SourceMap2;
      }();
      module2.exports = SourceMap;
    }).call(exports);
  }
});

// ../node_modules/coffee-script/package.json
var require_package = __commonJS({
  "../node_modules/coffee-script/package.json"(exports, module2) {
    module2.exports = {
      name: "coffee-script",
      description: "Unfancy JavaScript",
      keywords: [
        "javascript",
        "language",
        "coffeescript",
        "compiler"
      ],
      author: "Jeremy Ashkenas",
      version: "1.12.7",
      license: "MIT",
      engines: {
        node: ">=0.8.0"
      },
      directories: {
        lib: "./lib/coffee-script"
      },
      main: "./lib/coffee-script/coffee-script",
      bin: {
        coffee: "./bin/coffee",
        cake: "./bin/cake"
      },
      files: [
        "bin",
        "lib",
        "register.js",
        "repl.js"
      ],
      scripts: {
        test: "node ./bin/cake test",
        "test-harmony": "node --harmony ./bin/cake test"
      },
      homepage: "http://coffeescript.org",
      bugs: "https://github.com/jashkenas/coffeescript/issues",
      repository: {
        type: "git",
        url: "git://github.com/jashkenas/coffeescript.git"
      },
      devDependencies: {
        docco: "~0.7.0",
        "google-closure-compiler-js": "^20170626.0.0",
        "highlight.js": "~9.12.0",
        jison: ">=0.4.17",
        "markdown-it": "^8.3.1",
        underscore: "~1.8.3"
      }
    };
  }
});

// ../node_modules/coffee-script/lib/coffee-script/register.js
var require_register = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/register.js"(exports) {
    (function() {
      var CoffeeScript, Module, binary, child_process, ext, findExtension, fork, helpers, i, len, loadFile, path2, ref;
      CoffeeScript = require_coffee_script();
      child_process = require("child_process");
      helpers = require_helpers();
      path2 = require("path");
      loadFile = function(module3, filename) {
        var answer;
        answer = CoffeeScript._compileFile(filename, false, true);
        return module3._compile(answer, filename);
      };
      if (require.extensions) {
        ref = CoffeeScript.FILE_EXTENSIONS;
        for (i = 0, len = ref.length; i < len; i++) {
          ext = ref[i];
          require.extensions[ext] = loadFile;
        }
        Module = require("module");
        findExtension = function(filename) {
          var curExtension, extensions;
          extensions = path2.basename(filename).split(".");
          if (extensions[0] === "") {
            extensions.shift();
          }
          while (extensions.shift()) {
            curExtension = "." + extensions.join(".");
            if (Module._extensions[curExtension]) {
              return curExtension;
            }
          }
          return ".js";
        };
        Module.prototype.load = function(filename) {
          var extension;
          this.filename = filename;
          this.paths = Module._nodeModulePaths(path2.dirname(filename));
          extension = findExtension(filename);
          Module._extensions[extension](this, filename);
          return this.loaded = true;
        };
      }
      if (child_process) {
        fork = child_process.fork;
        binary = require.resolve("../../bin/coffee");
        child_process.fork = function(path3, args, options) {
          if (helpers.isCoffee(path3)) {
            if (!Array.isArray(args)) {
              options = args || {};
              args = [];
            }
            args = [path3].concat(args);
            path3 = binary;
          }
          return fork(path3, args, options);
        };
      }
    }).call(exports);
  }
});

// ../node_modules/coffee-script/lib/coffee-script/scope.js
var require_scope = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/scope.js"(exports) {
    (function() {
      var Scope, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item)
            return i;
        }
        return -1;
      };
      exports.Scope = Scope = function() {
        function Scope2(parent, expressions, method, referencedVars) {
          var ref, ref1;
          this.parent = parent;
          this.expressions = expressions;
          this.method = method;
          this.referencedVars = referencedVars;
          this.variables = [
            {
              name: "arguments",
              type: "arguments"
            }
          ];
          this.positions = {};
          if (!this.parent) {
            this.utilities = {};
          }
          this.root = (ref = (ref1 = this.parent) != null ? ref1.root : void 0) != null ? ref : this;
        }
        Scope2.prototype.add = function(name, type, immediate) {
          if (this.shared && !immediate) {
            return this.parent.add(name, type, immediate);
          }
          if (Object.prototype.hasOwnProperty.call(this.positions, name)) {
            return this.variables[this.positions[name]].type = type;
          } else {
            return this.positions[name] = this.variables.push({
              name,
              type
            }) - 1;
          }
        };
        Scope2.prototype.namedMethod = function() {
          var ref;
          if (((ref = this.method) != null ? ref.name : void 0) || !this.parent) {
            return this.method;
          }
          return this.parent.namedMethod();
        };
        Scope2.prototype.find = function(name, type) {
          if (type == null) {
            type = "var";
          }
          if (this.check(name)) {
            return true;
          }
          this.add(name, type);
          return false;
        };
        Scope2.prototype.parameter = function(name) {
          if (this.shared && this.parent.check(name, true)) {
            return;
          }
          return this.add(name, "param");
        };
        Scope2.prototype.check = function(name) {
          var ref;
          return !!(this.type(name) || ((ref = this.parent) != null ? ref.check(name) : void 0));
        };
        Scope2.prototype.temporary = function(name, index, single) {
          var diff, endCode, letter, newCode, num, startCode;
          if (single == null) {
            single = false;
          }
          if (single) {
            startCode = name.charCodeAt(0);
            endCode = "z".charCodeAt(0);
            diff = endCode - startCode;
            newCode = startCode + index % (diff + 1);
            letter = String.fromCharCode(newCode);
            num = Math.floor(index / (diff + 1));
            return "" + letter + (num || "");
          } else {
            return "" + name + (index || "");
          }
        };
        Scope2.prototype.type = function(name) {
          var i, len, ref, v;
          ref = this.variables;
          for (i = 0, len = ref.length; i < len; i++) {
            v = ref[i];
            if (v.name === name) {
              return v.type;
            }
          }
          return null;
        };
        Scope2.prototype.freeVariable = function(name, options) {
          var index, ref, temp;
          if (options == null) {
            options = {};
          }
          index = 0;
          while (true) {
            temp = this.temporary(name, index, options.single);
            if (!(this.check(temp) || indexOf.call(this.root.referencedVars, temp) >= 0)) {
              break;
            }
            index++;
          }
          if ((ref = options.reserve) != null ? ref : true) {
            this.add(temp, "var", true);
          }
          return temp;
        };
        Scope2.prototype.assign = function(name, value) {
          this.add(name, {
            value,
            assigned: true
          }, true);
          return this.hasAssignments = true;
        };
        Scope2.prototype.hasDeclarations = function() {
          return !!this.declaredVariables().length;
        };
        Scope2.prototype.declaredVariables = function() {
          var v;
          return function() {
            var i, len, ref, results;
            ref = this.variables;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              v = ref[i];
              if (v.type === "var") {
                results.push(v.name);
              }
            }
            return results;
          }.call(this).sort();
        };
        Scope2.prototype.assignedVariables = function() {
          var i, len, ref, results, v;
          ref = this.variables;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            v = ref[i];
            if (v.type.assigned) {
              results.push(v.name + " = " + v.type.value);
            }
          }
          return results;
        };
        return Scope2;
      }();
    }).call(exports);
  }
});

// ../node_modules/coffee-script/lib/coffee-script/nodes.js
var require_nodes = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/nodes.js"(exports) {
    (function() {
      var Access, Arr, Assign, Base, Block, BooleanLiteral, Call, Class, Code, CodeFragment, Comment, Existence, Expansion, ExportAllDeclaration, ExportDeclaration, ExportDefaultDeclaration, ExportNamedDeclaration, ExportSpecifier, ExportSpecifierList, Extends, For, IdentifierLiteral, If, ImportClause, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier, ImportSpecifierList, In, Index, InfinityLiteral, JS_FORBIDDEN, LEVEL_ACCESS, LEVEL_COND, LEVEL_LIST, LEVEL_OP, LEVEL_PAREN, LEVEL_TOP, Literal, ModuleDeclaration, ModuleSpecifier, ModuleSpecifierList, NEGATE, NO, NaNLiteral, NullLiteral, NumberLiteral, Obj, Op, Param, Parens, PassthroughLiteral, PropertyName, Range2, RegexLiteral, RegexWithInterpolations, Return, SIMPLENUM, Scope, Slice, Splat, StatementLiteral, StringLiteral, StringWithInterpolations, SuperCall, Switch, TAB, THIS, TaggedTemplateCall, ThisLiteral, Throw, Try, UTILITIES, UndefinedLiteral, Value, While, YES, YieldReturn, addLocationDataFn, compact2, del, ends, extend, flatten3, fragmentsToText, isComplexOrAssignable, isLiteralArguments, isLiteralThis, isUnassignable, locationDataToString, merge, multident, ref1, ref2, some2, starts, throwSyntaxError, unfoldSoak, utility, extend1 = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor2() {
          this.constructor = child;
        }
        ctor2.prototype = parent.prototype;
        child.prototype = new ctor2();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item)
            return i;
        }
        return -1;
      }, slice2 = [].slice;
      Error.stackTraceLimit = Infinity;
      Scope = require_scope().Scope;
      ref1 = require_lexer(), isUnassignable = ref1.isUnassignable, JS_FORBIDDEN = ref1.JS_FORBIDDEN;
      ref2 = require_helpers(), compact2 = ref2.compact, flatten3 = ref2.flatten, extend = ref2.extend, merge = ref2.merge, del = ref2.del, starts = ref2.starts, ends = ref2.ends, some2 = ref2.some, addLocationDataFn = ref2.addLocationDataFn, locationDataToString = ref2.locationDataToString, throwSyntaxError = ref2.throwSyntaxError;
      exports.extend = extend;
      exports.addLocationDataFn = addLocationDataFn;
      YES = function() {
        return true;
      };
      NO = function() {
        return false;
      };
      THIS = function() {
        return this;
      };
      NEGATE = function() {
        this.negated = !this.negated;
        return this;
      };
      exports.CodeFragment = CodeFragment = function() {
        function CodeFragment2(parent, code) {
          var ref3;
          this.code = "" + code;
          this.locationData = parent != null ? parent.locationData : void 0;
          this.type = (parent != null ? (ref3 = parent.constructor) != null ? ref3.name : void 0 : void 0) || "unknown";
        }
        CodeFragment2.prototype.toString = function() {
          return "" + this.code + (this.locationData ? ": " + locationDataToString(this.locationData) : "");
        };
        return CodeFragment2;
      }();
      fragmentsToText = function(fragments) {
        var fragment;
        return function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = fragments.length; j < len1; j++) {
            fragment = fragments[j];
            results.push(fragment.code);
          }
          return results;
        }().join("");
      };
      exports.Base = Base = function() {
        function Base2() {
        }
        Base2.prototype.compile = function(o, lvl) {
          return fragmentsToText(this.compileToFragments(o, lvl));
        };
        Base2.prototype.compileToFragments = function(o, lvl) {
          var node;
          o = extend({}, o);
          if (lvl) {
            o.level = lvl;
          }
          node = this.unfoldSoak(o) || this;
          node.tab = o.indent;
          if (o.level === LEVEL_TOP || !node.isStatement(o)) {
            return node.compileNode(o);
          } else {
            return node.compileClosure(o);
          }
        };
        Base2.prototype.compileClosure = function(o) {
          var args, argumentsNode, func, jumpNode, meth, parts, ref3;
          if (jumpNode = this.jumps()) {
            jumpNode.error("cannot use a pure statement in an expression");
          }
          o.sharedScope = true;
          func = new Code([], Block.wrap([this]));
          args = [];
          if ((argumentsNode = this.contains(isLiteralArguments)) || this.contains(isLiteralThis)) {
            args = [new ThisLiteral()];
            if (argumentsNode) {
              meth = "apply";
              args.push(new IdentifierLiteral("arguments"));
            } else {
              meth = "call";
            }
            func = new Value(func, [new Access(new PropertyName(meth))]);
          }
          parts = new Call(func, args).compileNode(o);
          if (func.isGenerator || ((ref3 = func.base) != null ? ref3.isGenerator : void 0)) {
            parts.unshift(this.makeCode("(yield* "));
            parts.push(this.makeCode(")"));
          }
          return parts;
        };
        Base2.prototype.cache = function(o, level, isComplex) {
          var complex, ref, sub;
          complex = isComplex != null ? isComplex(this) : this.isComplex();
          if (complex) {
            ref = new IdentifierLiteral(o.scope.freeVariable("ref"));
            sub = new Assign(ref, this);
            if (level) {
              return [sub.compileToFragments(o, level), [this.makeCode(ref.value)]];
            } else {
              return [sub, ref];
            }
          } else {
            ref = level ? this.compileToFragments(o, level) : this;
            return [ref, ref];
          }
        };
        Base2.prototype.cacheToCodeFragments = function(cacheValues) {
          return [fragmentsToText(cacheValues[0]), fragmentsToText(cacheValues[1])];
        };
        Base2.prototype.makeReturn = function(res) {
          var me;
          me = this.unwrapAll();
          if (res) {
            return new Call(new Literal(res + ".push"), [me]);
          } else {
            return new Return(me);
          }
        };
        Base2.prototype.contains = function(pred) {
          var node;
          node = void 0;
          this.traverseChildren(false, function(n) {
            if (pred(n)) {
              node = n;
              return false;
            }
          });
          return node;
        };
        Base2.prototype.lastNonComment = function(list) {
          var i;
          i = list.length;
          while (i--) {
            if (!(list[i] instanceof Comment)) {
              return list[i];
            }
          }
          return null;
        };
        Base2.prototype.toString = function(idt, name) {
          var tree;
          if (idt == null) {
            idt = "";
          }
          if (name == null) {
            name = this.constructor.name;
          }
          tree = "\n" + idt + name;
          if (this.soak) {
            tree += "?";
          }
          this.eachChild(function(node) {
            return tree += node.toString(idt + TAB);
          });
          return tree;
        };
        Base2.prototype.eachChild = function(func) {
          var attr, child, j, k, len1, len2, ref3, ref4;
          if (!this.children) {
            return this;
          }
          ref3 = this.children;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            attr = ref3[j];
            if (this[attr]) {
              ref4 = flatten3([this[attr]]);
              for (k = 0, len2 = ref4.length; k < len2; k++) {
                child = ref4[k];
                if (func(child) === false) {
                  return this;
                }
              }
            }
          }
          return this;
        };
        Base2.prototype.traverseChildren = function(crossScope, func) {
          return this.eachChild(function(child) {
            var recur;
            recur = func(child);
            if (recur !== false) {
              return child.traverseChildren(crossScope, func);
            }
          });
        };
        Base2.prototype.invert = function() {
          return new Op("!", this);
        };
        Base2.prototype.unwrapAll = function() {
          var node;
          node = this;
          while (node !== (node = node.unwrap())) {
            continue;
          }
          return node;
        };
        Base2.prototype.children = [];
        Base2.prototype.isStatement = NO;
        Base2.prototype.jumps = NO;
        Base2.prototype.isComplex = YES;
        Base2.prototype.isChainable = NO;
        Base2.prototype.isAssignable = NO;
        Base2.prototype.isNumber = NO;
        Base2.prototype.unwrap = THIS;
        Base2.prototype.unfoldSoak = NO;
        Base2.prototype.assigns = NO;
        Base2.prototype.updateLocationDataIfMissing = function(locationData) {
          if (this.locationData) {
            return this;
          }
          this.locationData = locationData;
          return this.eachChild(function(child) {
            return child.updateLocationDataIfMissing(locationData);
          });
        };
        Base2.prototype.error = function(message) {
          return throwSyntaxError(message, this.locationData);
        };
        Base2.prototype.makeCode = function(code) {
          return new CodeFragment(this, code);
        };
        Base2.prototype.wrapInBraces = function(fragments) {
          return [].concat(this.makeCode("("), fragments, this.makeCode(")"));
        };
        Base2.prototype.joinFragmentArrays = function(fragmentsList, joinStr) {
          var answer, fragments, i, j, len1;
          answer = [];
          for (i = j = 0, len1 = fragmentsList.length; j < len1; i = ++j) {
            fragments = fragmentsList[i];
            if (i) {
              answer.push(this.makeCode(joinStr));
            }
            answer = answer.concat(fragments);
          }
          return answer;
        };
        return Base2;
      }();
      exports.Block = Block = function(superClass1) {
        extend1(Block2, superClass1);
        function Block2(nodes) {
          this.expressions = compact2(flatten3(nodes || []));
        }
        Block2.prototype.children = ["expressions"];
        Block2.prototype.push = function(node) {
          this.expressions.push(node);
          return this;
        };
        Block2.prototype.pop = function() {
          return this.expressions.pop();
        };
        Block2.prototype.unshift = function(node) {
          this.expressions.unshift(node);
          return this;
        };
        Block2.prototype.unwrap = function() {
          if (this.expressions.length === 1) {
            return this.expressions[0];
          } else {
            return this;
          }
        };
        Block2.prototype.isEmpty = function() {
          return !this.expressions.length;
        };
        Block2.prototype.isStatement = function(o) {
          var exp, j, len1, ref3;
          ref3 = this.expressions;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            exp = ref3[j];
            if (exp.isStatement(o)) {
              return true;
            }
          }
          return false;
        };
        Block2.prototype.jumps = function(o) {
          var exp, j, jumpNode, len1, ref3;
          ref3 = this.expressions;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            exp = ref3[j];
            if (jumpNode = exp.jumps(o)) {
              return jumpNode;
            }
          }
        };
        Block2.prototype.makeReturn = function(res) {
          var expr, len;
          len = this.expressions.length;
          while (len--) {
            expr = this.expressions[len];
            if (!(expr instanceof Comment)) {
              this.expressions[len] = expr.makeReturn(res);
              if (expr instanceof Return && !expr.expression) {
                this.expressions.splice(len, 1);
              }
              break;
            }
          }
          return this;
        };
        Block2.prototype.compileToFragments = function(o, level) {
          if (o == null) {
            o = {};
          }
          if (o.scope) {
            return Block2.__super__.compileToFragments.call(this, o, level);
          } else {
            return this.compileRoot(o);
          }
        };
        Block2.prototype.compileNode = function(o) {
          var answer, compiledNodes, fragments, index, j, len1, node, ref3, top;
          this.tab = o.indent;
          top = o.level === LEVEL_TOP;
          compiledNodes = [];
          ref3 = this.expressions;
          for (index = j = 0, len1 = ref3.length; j < len1; index = ++j) {
            node = ref3[index];
            node = node.unwrapAll();
            node = node.unfoldSoak(o) || node;
            if (node instanceof Block2) {
              compiledNodes.push(node.compileNode(o));
            } else if (top) {
              node.front = true;
              fragments = node.compileToFragments(o);
              if (!node.isStatement(o)) {
                fragments.unshift(this.makeCode("" + this.tab));
                fragments.push(this.makeCode(";"));
              }
              compiledNodes.push(fragments);
            } else {
              compiledNodes.push(node.compileToFragments(o, LEVEL_LIST));
            }
          }
          if (top) {
            if (this.spaced) {
              return [].concat(this.joinFragmentArrays(compiledNodes, "\n\n"), this.makeCode("\n"));
            } else {
              return this.joinFragmentArrays(compiledNodes, "\n");
            }
          }
          if (compiledNodes.length) {
            answer = this.joinFragmentArrays(compiledNodes, ", ");
          } else {
            answer = [this.makeCode("void 0")];
          }
          if (compiledNodes.length > 1 && o.level >= LEVEL_LIST) {
            return this.wrapInBraces(answer);
          } else {
            return answer;
          }
        };
        Block2.prototype.compileRoot = function(o) {
          var exp, fragments, i, j, len1, name, prelude, preludeExps, ref3, ref4, rest2;
          o.indent = o.bare ? "" : TAB;
          o.level = LEVEL_TOP;
          this.spaced = true;
          o.scope = new Scope(null, this, null, (ref3 = o.referencedVars) != null ? ref3 : []);
          ref4 = o.locals || [];
          for (j = 0, len1 = ref4.length; j < len1; j++) {
            name = ref4[j];
            o.scope.parameter(name);
          }
          prelude = [];
          if (!o.bare) {
            preludeExps = function() {
              var k, len2, ref5, results;
              ref5 = this.expressions;
              results = [];
              for (i = k = 0, len2 = ref5.length; k < len2; i = ++k) {
                exp = ref5[i];
                if (!(exp.unwrap() instanceof Comment)) {
                  break;
                }
                results.push(exp);
              }
              return results;
            }.call(this);
            rest2 = this.expressions.slice(preludeExps.length);
            this.expressions = preludeExps;
            if (preludeExps.length) {
              prelude = this.compileNode(merge(o, {
                indent: ""
              }));
              prelude.push(this.makeCode("\n"));
            }
            this.expressions = rest2;
          }
          fragments = this.compileWithDeclarations(o);
          if (o.bare) {
            return fragments;
          }
          return [].concat(prelude, this.makeCode("(function() {\n"), fragments, this.makeCode("\n}).call(this);\n"));
        };
        Block2.prototype.compileWithDeclarations = function(o) {
          var assigns, declars, exp, fragments, i, j, len1, post, ref3, ref4, ref5, rest2, scope, spaced;
          fragments = [];
          post = [];
          ref3 = this.expressions;
          for (i = j = 0, len1 = ref3.length; j < len1; i = ++j) {
            exp = ref3[i];
            exp = exp.unwrap();
            if (!(exp instanceof Comment || exp instanceof Literal)) {
              break;
            }
          }
          o = merge(o, {
            level: LEVEL_TOP
          });
          if (i) {
            rest2 = this.expressions.splice(i, 9e9);
            ref4 = [this.spaced, false], spaced = ref4[0], this.spaced = ref4[1];
            ref5 = [this.compileNode(o), spaced], fragments = ref5[0], this.spaced = ref5[1];
            this.expressions = rest2;
          }
          post = this.compileNode(o);
          scope = o.scope;
          if (scope.expressions === this) {
            declars = o.scope.hasDeclarations();
            assigns = scope.hasAssignments;
            if (declars || assigns) {
              if (i) {
                fragments.push(this.makeCode("\n"));
              }
              fragments.push(this.makeCode(this.tab + "var "));
              if (declars) {
                fragments.push(this.makeCode(scope.declaredVariables().join(", ")));
              }
              if (assigns) {
                if (declars) {
                  fragments.push(this.makeCode(",\n" + (this.tab + TAB)));
                }
                fragments.push(this.makeCode(scope.assignedVariables().join(",\n" + (this.tab + TAB))));
              }
              fragments.push(this.makeCode(";\n" + (this.spaced ? "\n" : "")));
            } else if (fragments.length && post.length) {
              fragments.push(this.makeCode("\n"));
            }
          }
          return fragments.concat(post);
        };
        Block2.wrap = function(nodes) {
          if (nodes.length === 1 && nodes[0] instanceof Block2) {
            return nodes[0];
          }
          return new Block2(nodes);
        };
        return Block2;
      }(Base);
      exports.Literal = Literal = function(superClass1) {
        extend1(Literal2, superClass1);
        function Literal2(value1) {
          this.value = value1;
        }
        Literal2.prototype.isComplex = NO;
        Literal2.prototype.assigns = function(name) {
          return name === this.value;
        };
        Literal2.prototype.compileNode = function(o) {
          return [this.makeCode(this.value)];
        };
        Literal2.prototype.toString = function() {
          return " " + (this.isStatement() ? Literal2.__super__.toString.apply(this, arguments) : this.constructor.name) + ": " + this.value;
        };
        return Literal2;
      }(Base);
      exports.NumberLiteral = NumberLiteral = function(superClass1) {
        extend1(NumberLiteral2, superClass1);
        function NumberLiteral2() {
          return NumberLiteral2.__super__.constructor.apply(this, arguments);
        }
        return NumberLiteral2;
      }(Literal);
      exports.InfinityLiteral = InfinityLiteral = function(superClass1) {
        extend1(InfinityLiteral2, superClass1);
        function InfinityLiteral2() {
          return InfinityLiteral2.__super__.constructor.apply(this, arguments);
        }
        InfinityLiteral2.prototype.compileNode = function() {
          return [this.makeCode("2e308")];
        };
        return InfinityLiteral2;
      }(NumberLiteral);
      exports.NaNLiteral = NaNLiteral = function(superClass1) {
        extend1(NaNLiteral2, superClass1);
        function NaNLiteral2() {
          NaNLiteral2.__super__.constructor.call(this, "NaN");
        }
        NaNLiteral2.prototype.compileNode = function(o) {
          var code;
          code = [this.makeCode("0/0")];
          if (o.level >= LEVEL_OP) {
            return this.wrapInBraces(code);
          } else {
            return code;
          }
        };
        return NaNLiteral2;
      }(NumberLiteral);
      exports.StringLiteral = StringLiteral = function(superClass1) {
        extend1(StringLiteral2, superClass1);
        function StringLiteral2() {
          return StringLiteral2.__super__.constructor.apply(this, arguments);
        }
        return StringLiteral2;
      }(Literal);
      exports.RegexLiteral = RegexLiteral = function(superClass1) {
        extend1(RegexLiteral2, superClass1);
        function RegexLiteral2() {
          return RegexLiteral2.__super__.constructor.apply(this, arguments);
        }
        return RegexLiteral2;
      }(Literal);
      exports.PassthroughLiteral = PassthroughLiteral = function(superClass1) {
        extend1(PassthroughLiteral2, superClass1);
        function PassthroughLiteral2() {
          return PassthroughLiteral2.__super__.constructor.apply(this, arguments);
        }
        return PassthroughLiteral2;
      }(Literal);
      exports.IdentifierLiteral = IdentifierLiteral = function(superClass1) {
        extend1(IdentifierLiteral2, superClass1);
        function IdentifierLiteral2() {
          return IdentifierLiteral2.__super__.constructor.apply(this, arguments);
        }
        IdentifierLiteral2.prototype.isAssignable = YES;
        return IdentifierLiteral2;
      }(Literal);
      exports.PropertyName = PropertyName = function(superClass1) {
        extend1(PropertyName2, superClass1);
        function PropertyName2() {
          return PropertyName2.__super__.constructor.apply(this, arguments);
        }
        PropertyName2.prototype.isAssignable = YES;
        return PropertyName2;
      }(Literal);
      exports.StatementLiteral = StatementLiteral = function(superClass1) {
        extend1(StatementLiteral2, superClass1);
        function StatementLiteral2() {
          return StatementLiteral2.__super__.constructor.apply(this, arguments);
        }
        StatementLiteral2.prototype.isStatement = YES;
        StatementLiteral2.prototype.makeReturn = THIS;
        StatementLiteral2.prototype.jumps = function(o) {
          if (this.value === "break" && !((o != null ? o.loop : void 0) || (o != null ? o.block : void 0))) {
            return this;
          }
          if (this.value === "continue" && !(o != null ? o.loop : void 0)) {
            return this;
          }
        };
        StatementLiteral2.prototype.compileNode = function(o) {
          return [this.makeCode("" + this.tab + this.value + ";")];
        };
        return StatementLiteral2;
      }(Literal);
      exports.ThisLiteral = ThisLiteral = function(superClass1) {
        extend1(ThisLiteral2, superClass1);
        function ThisLiteral2() {
          ThisLiteral2.__super__.constructor.call(this, "this");
        }
        ThisLiteral2.prototype.compileNode = function(o) {
          var code, ref3;
          code = ((ref3 = o.scope.method) != null ? ref3.bound : void 0) ? o.scope.method.context : this.value;
          return [this.makeCode(code)];
        };
        return ThisLiteral2;
      }(Literal);
      exports.UndefinedLiteral = UndefinedLiteral = function(superClass1) {
        extend1(UndefinedLiteral2, superClass1);
        function UndefinedLiteral2() {
          UndefinedLiteral2.__super__.constructor.call(this, "undefined");
        }
        UndefinedLiteral2.prototype.compileNode = function(o) {
          return [this.makeCode(o.level >= LEVEL_ACCESS ? "(void 0)" : "void 0")];
        };
        return UndefinedLiteral2;
      }(Literal);
      exports.NullLiteral = NullLiteral = function(superClass1) {
        extend1(NullLiteral2, superClass1);
        function NullLiteral2() {
          NullLiteral2.__super__.constructor.call(this, "null");
        }
        return NullLiteral2;
      }(Literal);
      exports.BooleanLiteral = BooleanLiteral = function(superClass1) {
        extend1(BooleanLiteral2, superClass1);
        function BooleanLiteral2() {
          return BooleanLiteral2.__super__.constructor.apply(this, arguments);
        }
        return BooleanLiteral2;
      }(Literal);
      exports.Return = Return = function(superClass1) {
        extend1(Return2, superClass1);
        function Return2(expression) {
          this.expression = expression;
        }
        Return2.prototype.children = ["expression"];
        Return2.prototype.isStatement = YES;
        Return2.prototype.makeReturn = THIS;
        Return2.prototype.jumps = THIS;
        Return2.prototype.compileToFragments = function(o, level) {
          var expr, ref3;
          expr = (ref3 = this.expression) != null ? ref3.makeReturn() : void 0;
          if (expr && !(expr instanceof Return2)) {
            return expr.compileToFragments(o, level);
          } else {
            return Return2.__super__.compileToFragments.call(this, o, level);
          }
        };
        Return2.prototype.compileNode = function(o) {
          var answer;
          answer = [];
          answer.push(this.makeCode(this.tab + ("return" + (this.expression ? " " : ""))));
          if (this.expression) {
            answer = answer.concat(this.expression.compileToFragments(o, LEVEL_PAREN));
          }
          answer.push(this.makeCode(";"));
          return answer;
        };
        return Return2;
      }(Base);
      exports.YieldReturn = YieldReturn = function(superClass1) {
        extend1(YieldReturn2, superClass1);
        function YieldReturn2() {
          return YieldReturn2.__super__.constructor.apply(this, arguments);
        }
        YieldReturn2.prototype.compileNode = function(o) {
          if (o.scope.parent == null) {
            this.error("yield can only occur inside functions");
          }
          return YieldReturn2.__super__.compileNode.apply(this, arguments);
        };
        return YieldReturn2;
      }(Return);
      exports.Value = Value = function(superClass1) {
        extend1(Value2, superClass1);
        function Value2(base, props, tag) {
          if (!props && base instanceof Value2) {
            return base;
          }
          this.base = base;
          this.properties = props || [];
          if (tag) {
            this[tag] = true;
          }
          return this;
        }
        Value2.prototype.children = ["base", "properties"];
        Value2.prototype.add = function(props) {
          this.properties = this.properties.concat(props);
          return this;
        };
        Value2.prototype.hasProperties = function() {
          return !!this.properties.length;
        };
        Value2.prototype.bareLiteral = function(type) {
          return !this.properties.length && this.base instanceof type;
        };
        Value2.prototype.isArray = function() {
          return this.bareLiteral(Arr);
        };
        Value2.prototype.isRange = function() {
          return this.bareLiteral(Range2);
        };
        Value2.prototype.isComplex = function() {
          return this.hasProperties() || this.base.isComplex();
        };
        Value2.prototype.isAssignable = function() {
          return this.hasProperties() || this.base.isAssignable();
        };
        Value2.prototype.isNumber = function() {
          return this.bareLiteral(NumberLiteral);
        };
        Value2.prototype.isString = function() {
          return this.bareLiteral(StringLiteral);
        };
        Value2.prototype.isRegex = function() {
          return this.bareLiteral(RegexLiteral);
        };
        Value2.prototype.isUndefined = function() {
          return this.bareLiteral(UndefinedLiteral);
        };
        Value2.prototype.isNull = function() {
          return this.bareLiteral(NullLiteral);
        };
        Value2.prototype.isBoolean = function() {
          return this.bareLiteral(BooleanLiteral);
        };
        Value2.prototype.isAtomic = function() {
          var j, len1, node, ref3;
          ref3 = this.properties.concat(this.base);
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            node = ref3[j];
            if (node.soak || node instanceof Call) {
              return false;
            }
          }
          return true;
        };
        Value2.prototype.isNotCallable = function() {
          return this.isNumber() || this.isString() || this.isRegex() || this.isArray() || this.isRange() || this.isSplice() || this.isObject() || this.isUndefined() || this.isNull() || this.isBoolean();
        };
        Value2.prototype.isStatement = function(o) {
          return !this.properties.length && this.base.isStatement(o);
        };
        Value2.prototype.assigns = function(name) {
          return !this.properties.length && this.base.assigns(name);
        };
        Value2.prototype.jumps = function(o) {
          return !this.properties.length && this.base.jumps(o);
        };
        Value2.prototype.isObject = function(onlyGenerated) {
          if (this.properties.length) {
            return false;
          }
          return this.base instanceof Obj && (!onlyGenerated || this.base.generated);
        };
        Value2.prototype.isSplice = function() {
          var lastProp, ref3;
          ref3 = this.properties, lastProp = ref3[ref3.length - 1];
          return lastProp instanceof Slice;
        };
        Value2.prototype.looksStatic = function(className) {
          var ref3;
          return this.base.value === className && this.properties.length === 1 && ((ref3 = this.properties[0].name) != null ? ref3.value : void 0) !== "prototype";
        };
        Value2.prototype.unwrap = function() {
          if (this.properties.length) {
            return this;
          } else {
            return this.base;
          }
        };
        Value2.prototype.cacheReference = function(o) {
          var base, bref, name, nref, ref3;
          ref3 = this.properties, name = ref3[ref3.length - 1];
          if (this.properties.length < 2 && !this.base.isComplex() && !(name != null ? name.isComplex() : void 0)) {
            return [this, this];
          }
          base = new Value2(this.base, this.properties.slice(0, -1));
          if (base.isComplex()) {
            bref = new IdentifierLiteral(o.scope.freeVariable("base"));
            base = new Value2(new Parens(new Assign(bref, base)));
          }
          if (!name) {
            return [base, bref];
          }
          if (name.isComplex()) {
            nref = new IdentifierLiteral(o.scope.freeVariable("name"));
            name = new Index(new Assign(nref, name.index));
            nref = new Index(nref);
          }
          return [base.add(name), new Value2(bref || base.base, [nref || name])];
        };
        Value2.prototype.compileNode = function(o) {
          var fragments, j, len1, prop, props;
          this.base.front = this.front;
          props = this.properties;
          fragments = this.base.compileToFragments(o, props.length ? LEVEL_ACCESS : null);
          if (props.length && SIMPLENUM.test(fragmentsToText(fragments))) {
            fragments.push(this.makeCode("."));
          }
          for (j = 0, len1 = props.length; j < len1; j++) {
            prop = props[j];
            fragments.push.apply(fragments, prop.compileToFragments(o));
          }
          return fragments;
        };
        Value2.prototype.unfoldSoak = function(o) {
          return this.unfoldedSoak != null ? this.unfoldedSoak : this.unfoldedSoak = function(_this) {
            return function() {
              var fst, i, ifn, j, len1, prop, ref, ref3, ref4, snd;
              if (ifn = _this.base.unfoldSoak(o)) {
                (ref3 = ifn.body.properties).push.apply(ref3, _this.properties);
                return ifn;
              }
              ref4 = _this.properties;
              for (i = j = 0, len1 = ref4.length; j < len1; i = ++j) {
                prop = ref4[i];
                if (!prop.soak) {
                  continue;
                }
                prop.soak = false;
                fst = new Value2(_this.base, _this.properties.slice(0, i));
                snd = new Value2(_this.base, _this.properties.slice(i));
                if (fst.isComplex()) {
                  ref = new IdentifierLiteral(o.scope.freeVariable("ref"));
                  fst = new Parens(new Assign(ref, fst));
                  snd.base = ref;
                }
                return new If(new Existence(fst), snd, {
                  soak: true
                });
              }
              return false;
            };
          }(this)();
        };
        return Value2;
      }(Base);
      exports.Comment = Comment = function(superClass1) {
        extend1(Comment2, superClass1);
        function Comment2(comment1) {
          this.comment = comment1;
        }
        Comment2.prototype.isStatement = YES;
        Comment2.prototype.makeReturn = THIS;
        Comment2.prototype.compileNode = function(o, level) {
          var code, comment;
          comment = this.comment.replace(/^(\s*)#(?=\s)/gm, "$1 *");
          code = "/*" + multident(comment, this.tab) + (indexOf.call(comment, "\n") >= 0 ? "\n" + this.tab : "") + " */";
          if ((level || o.level) === LEVEL_TOP) {
            code = o.indent + code;
          }
          return [this.makeCode("\n"), this.makeCode(code)];
        };
        return Comment2;
      }(Base);
      exports.Call = Call = function(superClass1) {
        extend1(Call2, superClass1);
        function Call2(variable1, args1, soak1) {
          this.variable = variable1;
          this.args = args1 != null ? args1 : [];
          this.soak = soak1;
          this.isNew = false;
          if (this.variable instanceof Value && this.variable.isNotCallable()) {
            this.variable.error("literal is not a function");
          }
        }
        Call2.prototype.children = ["variable", "args"];
        Call2.prototype.updateLocationDataIfMissing = function(locationData) {
          var base, ref3;
          if (this.locationData && this.needsUpdatedStartLocation) {
            this.locationData.first_line = locationData.first_line;
            this.locationData.first_column = locationData.first_column;
            base = ((ref3 = this.variable) != null ? ref3.base : void 0) || this.variable;
            if (base.needsUpdatedStartLocation) {
              this.variable.locationData.first_line = locationData.first_line;
              this.variable.locationData.first_column = locationData.first_column;
              base.updateLocationDataIfMissing(locationData);
            }
            delete this.needsUpdatedStartLocation;
          }
          return Call2.__super__.updateLocationDataIfMissing.apply(this, arguments);
        };
        Call2.prototype.newInstance = function() {
          var base, ref3;
          base = ((ref3 = this.variable) != null ? ref3.base : void 0) || this.variable;
          if (base instanceof Call2 && !base.isNew) {
            base.newInstance();
          } else {
            this.isNew = true;
          }
          this.needsUpdatedStartLocation = true;
          return this;
        };
        Call2.prototype.unfoldSoak = function(o) {
          var call, ifn, j, left, len1, list, ref3, ref4, rite;
          if (this.soak) {
            if (this instanceof SuperCall) {
              left = new Literal(this.superReference(o));
              rite = new Value(left);
            } else {
              if (ifn = unfoldSoak(o, this, "variable")) {
                return ifn;
              }
              ref3 = new Value(this.variable).cacheReference(o), left = ref3[0], rite = ref3[1];
            }
            rite = new Call2(rite, this.args);
            rite.isNew = this.isNew;
            left = new Literal("typeof " + left.compile(o) + ' === "function"');
            return new If(left, new Value(rite), {
              soak: true
            });
          }
          call = this;
          list = [];
          while (true) {
            if (call.variable instanceof Call2) {
              list.push(call);
              call = call.variable;
              continue;
            }
            if (!(call.variable instanceof Value)) {
              break;
            }
            list.push(call);
            if (!((call = call.variable.base) instanceof Call2)) {
              break;
            }
          }
          ref4 = list.reverse();
          for (j = 0, len1 = ref4.length; j < len1; j++) {
            call = ref4[j];
            if (ifn) {
              if (call.variable instanceof Call2) {
                call.variable = ifn;
              } else {
                call.variable.base = ifn;
              }
            }
            ifn = unfoldSoak(o, call, "variable");
          }
          return ifn;
        };
        Call2.prototype.compileNode = function(o) {
          var arg, argIndex, compiledArgs, compiledArray, fragments, j, len1, preface, ref3, ref4;
          if ((ref3 = this.variable) != null) {
            ref3.front = this.front;
          }
          compiledArray = Splat.compileSplattedArray(o, this.args, true);
          if (compiledArray.length) {
            return this.compileSplat(o, compiledArray);
          }
          compiledArgs = [];
          ref4 = this.args;
          for (argIndex = j = 0, len1 = ref4.length; j < len1; argIndex = ++j) {
            arg = ref4[argIndex];
            if (argIndex) {
              compiledArgs.push(this.makeCode(", "));
            }
            compiledArgs.push.apply(compiledArgs, arg.compileToFragments(o, LEVEL_LIST));
          }
          fragments = [];
          if (this instanceof SuperCall) {
            preface = this.superReference(o) + (".call(" + this.superThis(o));
            if (compiledArgs.length) {
              preface += ", ";
            }
            fragments.push(this.makeCode(preface));
          } else {
            if (this.isNew) {
              fragments.push(this.makeCode("new "));
            }
            fragments.push.apply(fragments, this.variable.compileToFragments(o, LEVEL_ACCESS));
            fragments.push(this.makeCode("("));
          }
          fragments.push.apply(fragments, compiledArgs);
          fragments.push(this.makeCode(")"));
          return fragments;
        };
        Call2.prototype.compileSplat = function(o, splatArgs) {
          var answer, base, fun, idt, name, ref;
          if (this instanceof SuperCall) {
            return [].concat(this.makeCode(this.superReference(o) + ".apply(" + this.superThis(o) + ", "), splatArgs, this.makeCode(")"));
          }
          if (this.isNew) {
            idt = this.tab + TAB;
            return [].concat(this.makeCode("(function(func, args, ctor) {\n" + idt + "ctor.prototype = func.prototype;\n" + idt + "var child = new ctor, result = func.apply(child, args);\n" + idt + "return Object(result) === result ? result : child;\n" + this.tab + "})("), this.variable.compileToFragments(o, LEVEL_LIST), this.makeCode(", "), splatArgs, this.makeCode(", function(){})"));
          }
          answer = [];
          base = new Value(this.variable);
          if ((name = base.properties.pop()) && base.isComplex()) {
            ref = o.scope.freeVariable("ref");
            answer = answer.concat(this.makeCode("(" + ref + " = "), base.compileToFragments(o, LEVEL_LIST), this.makeCode(")"), name.compileToFragments(o));
          } else {
            fun = base.compileToFragments(o, LEVEL_ACCESS);
            if (SIMPLENUM.test(fragmentsToText(fun))) {
              fun = this.wrapInBraces(fun);
            }
            if (name) {
              ref = fragmentsToText(fun);
              fun.push.apply(fun, name.compileToFragments(o));
            } else {
              ref = "null";
            }
            answer = answer.concat(fun);
          }
          return answer = answer.concat(this.makeCode(".apply(" + ref + ", "), splatArgs, this.makeCode(")"));
        };
        return Call2;
      }(Base);
      exports.SuperCall = SuperCall = function(superClass1) {
        extend1(SuperCall2, superClass1);
        function SuperCall2(args) {
          SuperCall2.__super__.constructor.call(this, null, args != null ? args : [new Splat(new IdentifierLiteral("arguments"))]);
          this.isBare = args != null;
        }
        SuperCall2.prototype.superReference = function(o) {
          var accesses, base, bref, klass, method, name, nref, variable;
          method = o.scope.namedMethod();
          if (method != null ? method.klass : void 0) {
            klass = method.klass, name = method.name, variable = method.variable;
            if (klass.isComplex()) {
              bref = new IdentifierLiteral(o.scope.parent.freeVariable("base"));
              base = new Value(new Parens(new Assign(bref, klass)));
              variable.base = base;
              variable.properties.splice(0, klass.properties.length);
            }
            if (name.isComplex() || name instanceof Index && name.index.isAssignable()) {
              nref = new IdentifierLiteral(o.scope.parent.freeVariable("name"));
              name = new Index(new Assign(nref, name.index));
              variable.properties.pop();
              variable.properties.push(name);
            }
            accesses = [new Access(new PropertyName("__super__"))];
            if (method["static"]) {
              accesses.push(new Access(new PropertyName("constructor")));
            }
            accesses.push(nref != null ? new Index(nref) : name);
            return new Value(bref != null ? bref : klass, accesses).compile(o);
          } else if (method != null ? method.ctor : void 0) {
            return method.name + ".__super__.constructor";
          } else {
            return this.error("cannot call super outside of an instance method.");
          }
        };
        SuperCall2.prototype.superThis = function(o) {
          var method;
          method = o.scope.method;
          return method && !method.klass && method.context || "this";
        };
        return SuperCall2;
      }(Call);
      exports.RegexWithInterpolations = RegexWithInterpolations = function(superClass1) {
        extend1(RegexWithInterpolations2, superClass1);
        function RegexWithInterpolations2(args) {
          if (args == null) {
            args = [];
          }
          RegexWithInterpolations2.__super__.constructor.call(this, new Value(new IdentifierLiteral("RegExp")), args, false);
        }
        return RegexWithInterpolations2;
      }(Call);
      exports.TaggedTemplateCall = TaggedTemplateCall = function(superClass1) {
        extend1(TaggedTemplateCall2, superClass1);
        function TaggedTemplateCall2(variable, arg, soak) {
          if (arg instanceof StringLiteral) {
            arg = new StringWithInterpolations(Block.wrap([new Value(arg)]));
          }
          TaggedTemplateCall2.__super__.constructor.call(this, variable, [arg], soak);
        }
        TaggedTemplateCall2.prototype.compileNode = function(o) {
          o.inTaggedTemplateCall = true;
          return this.variable.compileToFragments(o, LEVEL_ACCESS).concat(this.args[0].compileToFragments(o, LEVEL_LIST));
        };
        return TaggedTemplateCall2;
      }(Call);
      exports.Extends = Extends = function(superClass1) {
        extend1(Extends2, superClass1);
        function Extends2(child1, parent1) {
          this.child = child1;
          this.parent = parent1;
        }
        Extends2.prototype.children = ["child", "parent"];
        Extends2.prototype.compileToFragments = function(o) {
          return new Call(new Value(new Literal(utility("extend", o))), [this.child, this.parent]).compileToFragments(o);
        };
        return Extends2;
      }(Base);
      exports.Access = Access = function(superClass1) {
        extend1(Access2, superClass1);
        function Access2(name1, tag) {
          this.name = name1;
          this.soak = tag === "soak";
        }
        Access2.prototype.children = ["name"];
        Access2.prototype.compileToFragments = function(o) {
          var name, node, ref3;
          name = this.name.compileToFragments(o);
          node = this.name.unwrap();
          if (node instanceof PropertyName) {
            if (ref3 = node.value, indexOf.call(JS_FORBIDDEN, ref3) >= 0) {
              return [this.makeCode('["')].concat(slice2.call(name), [this.makeCode('"]')]);
            } else {
              return [this.makeCode(".")].concat(slice2.call(name));
            }
          } else {
            return [this.makeCode("[")].concat(slice2.call(name), [this.makeCode("]")]);
          }
        };
        Access2.prototype.isComplex = NO;
        return Access2;
      }(Base);
      exports.Index = Index = function(superClass1) {
        extend1(Index2, superClass1);
        function Index2(index1) {
          this.index = index1;
        }
        Index2.prototype.children = ["index"];
        Index2.prototype.compileToFragments = function(o) {
          return [].concat(this.makeCode("["), this.index.compileToFragments(o, LEVEL_PAREN), this.makeCode("]"));
        };
        Index2.prototype.isComplex = function() {
          return this.index.isComplex();
        };
        return Index2;
      }(Base);
      exports.Range = Range2 = function(superClass1) {
        extend1(Range3, superClass1);
        Range3.prototype.children = ["from", "to"];
        function Range3(from1, to1, tag) {
          this.from = from1;
          this.to = to1;
          this.exclusive = tag === "exclusive";
          this.equals = this.exclusive ? "" : "=";
        }
        Range3.prototype.compileVariables = function(o) {
          var isComplex, ref3, ref4, ref5, step;
          o = merge(o, {
            top: true
          });
          isComplex = del(o, "isComplex");
          ref3 = this.cacheToCodeFragments(this.from.cache(o, LEVEL_LIST, isComplex)), this.fromC = ref3[0], this.fromVar = ref3[1];
          ref4 = this.cacheToCodeFragments(this.to.cache(o, LEVEL_LIST, isComplex)), this.toC = ref4[0], this.toVar = ref4[1];
          if (step = del(o, "step")) {
            ref5 = this.cacheToCodeFragments(step.cache(o, LEVEL_LIST, isComplex)), this.step = ref5[0], this.stepVar = ref5[1];
          }
          this.fromNum = this.from.isNumber() ? Number(this.fromVar) : null;
          this.toNum = this.to.isNumber() ? Number(this.toVar) : null;
          return this.stepNum = (step != null ? step.isNumber() : void 0) ? Number(this.stepVar) : null;
        };
        Range3.prototype.compileNode = function(o) {
          var cond, condPart, from, gt, idx, idxName, known, lt, namedIndex, ref3, ref4, stepPart, to, varPart;
          if (!this.fromVar) {
            this.compileVariables(o);
          }
          if (!o.index) {
            return this.compileArray(o);
          }
          known = this.fromNum != null && this.toNum != null;
          idx = del(o, "index");
          idxName = del(o, "name");
          namedIndex = idxName && idxName !== idx;
          varPart = idx + " = " + this.fromC;
          if (this.toC !== this.toVar) {
            varPart += ", " + this.toC;
          }
          if (this.step !== this.stepVar) {
            varPart += ", " + this.step;
          }
          ref3 = [idx + " <" + this.equals, idx + " >" + this.equals], lt = ref3[0], gt = ref3[1];
          condPart = this.stepNum != null ? this.stepNum > 0 ? lt + " " + this.toVar : gt + " " + this.toVar : known ? (ref4 = [this.fromNum, this.toNum], from = ref4[0], to = ref4[1], ref4, from <= to ? lt + " " + to : gt + " " + to) : (cond = this.stepVar ? this.stepVar + " > 0" : this.fromVar + " <= " + this.toVar, cond + " ? " + lt + " " + this.toVar + " : " + gt + " " + this.toVar);
          stepPart = this.stepVar ? idx + " += " + this.stepVar : known ? namedIndex ? from <= to ? "++" + idx : "--" + idx : from <= to ? idx + "++" : idx + "--" : namedIndex ? cond + " ? ++" + idx + " : --" + idx : cond + " ? " + idx + "++ : " + idx + "--";
          if (namedIndex) {
            varPart = idxName + " = " + varPart;
          }
          if (namedIndex) {
            stepPart = idxName + " = " + stepPart;
          }
          return [this.makeCode(varPart + "; " + condPart + "; " + stepPart)];
        };
        Range3.prototype.compileArray = function(o) {
          var args, body, cond, hasArgs, i, idt, j, known, post, pre, range2, ref3, ref4, result2, results, vars;
          known = this.fromNum != null && this.toNum != null;
          if (known && Math.abs(this.fromNum - this.toNum) <= 20) {
            range2 = function() {
              results = [];
              for (var j2 = ref3 = this.fromNum, ref42 = this.toNum; ref3 <= ref42 ? j2 <= ref42 : j2 >= ref42; ref3 <= ref42 ? j2++ : j2--) {
                results.push(j2);
              }
              return results;
            }.apply(this);
            if (this.exclusive) {
              range2.pop();
            }
            return [this.makeCode("[" + range2.join(", ") + "]")];
          }
          idt = this.tab + TAB;
          i = o.scope.freeVariable("i", {
            single: true
          });
          result2 = o.scope.freeVariable("results");
          pre = "\n" + idt + result2 + " = [];";
          if (known) {
            o.index = i;
            body = fragmentsToText(this.compileNode(o));
          } else {
            vars = i + " = " + this.fromC + (this.toC !== this.toVar ? ", " + this.toC : "");
            cond = this.fromVar + " <= " + this.toVar;
            body = "var " + vars + "; " + cond + " ? " + i + " <" + this.equals + " " + this.toVar + " : " + i + " >" + this.equals + " " + this.toVar + "; " + cond + " ? " + i + "++ : " + i + "--";
          }
          post = "{ " + result2 + ".push(" + i + "); }\n" + idt + "return " + result2 + ";\n" + o.indent;
          hasArgs = function(node) {
            return node != null ? node.contains(isLiteralArguments) : void 0;
          };
          if (hasArgs(this.from) || hasArgs(this.to)) {
            args = ", arguments";
          }
          return [this.makeCode("(function() {" + pre + "\n" + idt + "for (" + body + ")" + post + "}).apply(this" + (args != null ? args : "") + ")")];
        };
        return Range3;
      }(Base);
      exports.Slice = Slice = function(superClass1) {
        extend1(Slice2, superClass1);
        Slice2.prototype.children = ["range"];
        function Slice2(range1) {
          this.range = range1;
          Slice2.__super__.constructor.call(this);
        }
        Slice2.prototype.compileNode = function(o) {
          var compiled, compiledText, from, fromCompiled, ref3, to, toStr;
          ref3 = this.range, to = ref3.to, from = ref3.from;
          fromCompiled = from && from.compileToFragments(o, LEVEL_PAREN) || [this.makeCode("0")];
          if (to) {
            compiled = to.compileToFragments(o, LEVEL_PAREN);
            compiledText = fragmentsToText(compiled);
            if (!(!this.range.exclusive && +compiledText === -1)) {
              toStr = ", " + (this.range.exclusive ? compiledText : to.isNumber() ? "" + (+compiledText + 1) : (compiled = to.compileToFragments(o, LEVEL_ACCESS), "+" + fragmentsToText(compiled) + " + 1 || 9e9"));
            }
          }
          return [this.makeCode(".slice(" + fragmentsToText(fromCompiled) + (toStr || "") + ")")];
        };
        return Slice2;
      }(Base);
      exports.Obj = Obj = function(superClass1) {
        extend1(Obj2, superClass1);
        function Obj2(props, generated) {
          this.generated = generated != null ? generated : false;
          this.objects = this.properties = props || [];
        }
        Obj2.prototype.children = ["properties"];
        Obj2.prototype.compileNode = function(o) {
          var answer, dynamicIndex, hasDynamic, i, idt, indent, j, join, k, key, l, lastNoncom, len1, len2, len3, node, oref, prop, props, ref3, value;
          props = this.properties;
          if (this.generated) {
            for (j = 0, len1 = props.length; j < len1; j++) {
              node = props[j];
              if (node instanceof Value) {
                node.error("cannot have an implicit value in an implicit object");
              }
            }
          }
          for (dynamicIndex = k = 0, len2 = props.length; k < len2; dynamicIndex = ++k) {
            prop = props[dynamicIndex];
            if ((prop.variable || prop).base instanceof Parens) {
              break;
            }
          }
          hasDynamic = dynamicIndex < props.length;
          idt = o.indent += TAB;
          lastNoncom = this.lastNonComment(this.properties);
          answer = [];
          if (hasDynamic) {
            oref = o.scope.freeVariable("obj");
            answer.push(this.makeCode("(\n" + idt + oref + " = "));
          }
          answer.push(this.makeCode("{" + (props.length === 0 || dynamicIndex === 0 ? "}" : "\n")));
          for (i = l = 0, len3 = props.length; l < len3; i = ++l) {
            prop = props[i];
            if (i === dynamicIndex) {
              if (i !== 0) {
                answer.push(this.makeCode("\n" + idt + "}"));
              }
              answer.push(this.makeCode(",\n"));
            }
            join = i === props.length - 1 || i === dynamicIndex - 1 ? "" : prop === lastNoncom || prop instanceof Comment ? "\n" : ",\n";
            indent = prop instanceof Comment ? "" : idt;
            if (hasDynamic && i < dynamicIndex) {
              indent += TAB;
            }
            if (prop instanceof Assign) {
              if (prop.context !== "object") {
                prop.operatorToken.error("unexpected " + prop.operatorToken.value);
              }
              if (prop.variable instanceof Value && prop.variable.hasProperties()) {
                prop.variable.error("invalid object key");
              }
            }
            if (prop instanceof Value && prop["this"]) {
              prop = new Assign(prop.properties[0].name, prop, "object");
            }
            if (!(prop instanceof Comment)) {
              if (i < dynamicIndex) {
                if (!(prop instanceof Assign)) {
                  prop = new Assign(prop, prop, "object");
                }
              } else {
                if (prop instanceof Assign) {
                  key = prop.variable;
                  value = prop.value;
                } else {
                  ref3 = prop.base.cache(o), key = ref3[0], value = ref3[1];
                  if (key instanceof IdentifierLiteral) {
                    key = new PropertyName(key.value);
                  }
                }
                prop = new Assign(new Value(new IdentifierLiteral(oref), [new Access(key)]), value);
              }
            }
            if (indent) {
              answer.push(this.makeCode(indent));
            }
            answer.push.apply(answer, prop.compileToFragments(o, LEVEL_TOP));
            if (join) {
              answer.push(this.makeCode(join));
            }
          }
          if (hasDynamic) {
            answer.push(this.makeCode(",\n" + idt + oref + "\n" + this.tab + ")"));
          } else {
            if (props.length !== 0) {
              answer.push(this.makeCode("\n" + this.tab + "}"));
            }
          }
          if (this.front && !hasDynamic) {
            return this.wrapInBraces(answer);
          } else {
            return answer;
          }
        };
        Obj2.prototype.assigns = function(name) {
          var j, len1, prop, ref3;
          ref3 = this.properties;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            prop = ref3[j];
            if (prop.assigns(name)) {
              return true;
            }
          }
          return false;
        };
        return Obj2;
      }(Base);
      exports.Arr = Arr = function(superClass1) {
        extend1(Arr2, superClass1);
        function Arr2(objs) {
          this.objects = objs || [];
        }
        Arr2.prototype.children = ["objects"];
        Arr2.prototype.compileNode = function(o) {
          var answer, compiledObjs, fragments, index, j, len1, obj;
          if (!this.objects.length) {
            return [this.makeCode("[]")];
          }
          o.indent += TAB;
          answer = Splat.compileSplattedArray(o, this.objects);
          if (answer.length) {
            return answer;
          }
          answer = [];
          compiledObjs = function() {
            var j2, len12, ref3, results;
            ref3 = this.objects;
            results = [];
            for (j2 = 0, len12 = ref3.length; j2 < len12; j2++) {
              obj = ref3[j2];
              results.push(obj.compileToFragments(o, LEVEL_LIST));
            }
            return results;
          }.call(this);
          for (index = j = 0, len1 = compiledObjs.length; j < len1; index = ++j) {
            fragments = compiledObjs[index];
            if (index) {
              answer.push(this.makeCode(", "));
            }
            answer.push.apply(answer, fragments);
          }
          if (fragmentsToText(answer).indexOf("\n") >= 0) {
            answer.unshift(this.makeCode("[\n" + o.indent));
            answer.push(this.makeCode("\n" + this.tab + "]"));
          } else {
            answer.unshift(this.makeCode("["));
            answer.push(this.makeCode("]"));
          }
          return answer;
        };
        Arr2.prototype.assigns = function(name) {
          var j, len1, obj, ref3;
          ref3 = this.objects;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            obj = ref3[j];
            if (obj.assigns(name)) {
              return true;
            }
          }
          return false;
        };
        return Arr2;
      }(Base);
      exports.Class = Class = function(superClass1) {
        extend1(Class2, superClass1);
        function Class2(variable1, parent1, body1) {
          this.variable = variable1;
          this.parent = parent1;
          this.body = body1 != null ? body1 : new Block();
          this.boundFuncs = [];
          this.body.classBody = true;
        }
        Class2.prototype.children = ["variable", "parent", "body"];
        Class2.prototype.defaultClassVariableName = "_Class";
        Class2.prototype.determineName = function() {
          var message, name, node, ref3, tail;
          if (!this.variable) {
            return this.defaultClassVariableName;
          }
          ref3 = this.variable.properties, tail = ref3[ref3.length - 1];
          node = tail ? tail instanceof Access && tail.name : this.variable.base;
          if (!(node instanceof IdentifierLiteral || node instanceof PropertyName)) {
            return this.defaultClassVariableName;
          }
          name = node.value;
          if (!tail) {
            message = isUnassignable(name);
            if (message) {
              this.variable.error(message);
            }
          }
          if (indexOf.call(JS_FORBIDDEN, name) >= 0) {
            return "_" + name;
          } else {
            return name;
          }
        };
        Class2.prototype.setContext = function(name) {
          return this.body.traverseChildren(false, function(node) {
            if (node.classBody) {
              return false;
            }
            if (node instanceof ThisLiteral) {
              return node.value = name;
            } else if (node instanceof Code) {
              if (node.bound) {
                return node.context = name;
              }
            }
          });
        };
        Class2.prototype.addBoundFunctions = function(o) {
          var bvar, j, len1, lhs, ref3;
          ref3 = this.boundFuncs;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            bvar = ref3[j];
            lhs = new Value(new ThisLiteral(), [new Access(bvar)]).compile(o);
            this.ctor.body.unshift(new Literal(lhs + " = " + utility("bind", o) + "(" + lhs + ", this)"));
          }
        };
        Class2.prototype.addProperties = function(node, name, o) {
          var acc, assign, base, exprs, func, props;
          props = node.base.properties.slice(0);
          exprs = function() {
            var results;
            results = [];
            while (assign = props.shift()) {
              if (assign instanceof Assign) {
                base = assign.variable.base;
                delete assign.context;
                func = assign.value;
                if (base.value === "constructor") {
                  if (this.ctor) {
                    assign.error("cannot define more than one constructor in a class");
                  }
                  if (func.bound) {
                    assign.error("cannot define a constructor as a bound function");
                  }
                  if (func instanceof Code) {
                    assign = this.ctor = func;
                  } else {
                    this.externalCtor = o.classScope.freeVariable("ctor");
                    assign = new Assign(new IdentifierLiteral(this.externalCtor), func);
                  }
                } else {
                  if (assign.variable["this"]) {
                    func["static"] = true;
                  } else {
                    acc = base.isComplex() ? new Index(base) : new Access(base);
                    assign.variable = new Value(new IdentifierLiteral(name), [new Access(new PropertyName("prototype")), acc]);
                    if (func instanceof Code && func.bound) {
                      this.boundFuncs.push(base);
                      func.bound = false;
                    }
                  }
                }
              }
              results.push(assign);
            }
            return results;
          }.call(this);
          return compact2(exprs);
        };
        Class2.prototype.walkBody = function(name, o) {
          return this.traverseChildren(false, function(_this) {
            return function(child) {
              var cont, exps, i, j, len1, node, ref3;
              cont = true;
              if (child instanceof Class2) {
                return false;
              }
              if (child instanceof Block) {
                ref3 = exps = child.expressions;
                for (i = j = 0, len1 = ref3.length; j < len1; i = ++j) {
                  node = ref3[i];
                  if (node instanceof Assign && node.variable.looksStatic(name)) {
                    node.value["static"] = true;
                  } else if (node instanceof Value && node.isObject(true)) {
                    cont = false;
                    exps[i] = _this.addProperties(node, name, o);
                  }
                }
                child.expressions = exps = flatten3(exps);
              }
              return cont && !(child instanceof Class2);
            };
          }(this));
        };
        Class2.prototype.hoistDirectivePrologue = function() {
          var expressions, index, node;
          index = 0;
          expressions = this.body.expressions;
          while ((node = expressions[index]) && node instanceof Comment || node instanceof Value && node.isString()) {
            ++index;
          }
          return this.directives = expressions.splice(0, index);
        };
        Class2.prototype.ensureConstructor = function(name) {
          if (!this.ctor) {
            this.ctor = new Code();
            if (this.externalCtor) {
              this.ctor.body.push(new Literal(this.externalCtor + ".apply(this, arguments)"));
            } else if (this.parent) {
              this.ctor.body.push(new Literal(name + ".__super__.constructor.apply(this, arguments)"));
            }
            this.ctor.body.makeReturn();
            this.body.expressions.unshift(this.ctor);
          }
          this.ctor.ctor = this.ctor.name = name;
          this.ctor.klass = null;
          return this.ctor.noReturn = true;
        };
        Class2.prototype.compileNode = function(o) {
          var args, argumentsNode, func, jumpNode, klass, lname, name, ref3, superClass;
          if (jumpNode = this.body.jumps()) {
            jumpNode.error("Class bodies cannot contain pure statements");
          }
          if (argumentsNode = this.body.contains(isLiteralArguments)) {
            argumentsNode.error("Class bodies shouldn't reference arguments");
          }
          name = this.determineName();
          lname = new IdentifierLiteral(name);
          func = new Code([], Block.wrap([this.body]));
          args = [];
          o.classScope = func.makeScope(o.scope);
          this.hoistDirectivePrologue();
          this.setContext(name);
          this.walkBody(name, o);
          this.ensureConstructor(name);
          this.addBoundFunctions(o);
          this.body.spaced = true;
          this.body.expressions.push(lname);
          if (this.parent) {
            superClass = new IdentifierLiteral(o.classScope.freeVariable("superClass", {
              reserve: false
            }));
            this.body.expressions.unshift(new Extends(lname, superClass));
            func.params.push(new Param(superClass));
            args.push(this.parent);
          }
          (ref3 = this.body.expressions).unshift.apply(ref3, this.directives);
          klass = new Parens(new Call(func, args));
          if (this.variable) {
            klass = new Assign(this.variable, klass, null, {
              moduleDeclaration: this.moduleDeclaration
            });
          }
          return klass.compileToFragments(o);
        };
        return Class2;
      }(Base);
      exports.ModuleDeclaration = ModuleDeclaration = function(superClass1) {
        extend1(ModuleDeclaration2, superClass1);
        function ModuleDeclaration2(clause, source1) {
          this.clause = clause;
          this.source = source1;
          this.checkSource();
        }
        ModuleDeclaration2.prototype.children = ["clause", "source"];
        ModuleDeclaration2.prototype.isStatement = YES;
        ModuleDeclaration2.prototype.jumps = THIS;
        ModuleDeclaration2.prototype.makeReturn = THIS;
        ModuleDeclaration2.prototype.checkSource = function() {
          if (this.source != null && this.source instanceof StringWithInterpolations) {
            return this.source.error("the name of the module to be imported from must be an uninterpolated string");
          }
        };
        ModuleDeclaration2.prototype.checkScope = function(o, moduleDeclarationType) {
          if (o.indent.length !== 0) {
            return this.error(moduleDeclarationType + " statements must be at top-level scope");
          }
        };
        return ModuleDeclaration2;
      }(Base);
      exports.ImportDeclaration = ImportDeclaration = function(superClass1) {
        extend1(ImportDeclaration2, superClass1);
        function ImportDeclaration2() {
          return ImportDeclaration2.__super__.constructor.apply(this, arguments);
        }
        ImportDeclaration2.prototype.compileNode = function(o) {
          var code, ref3;
          this.checkScope(o, "import");
          o.importedSymbols = [];
          code = [];
          code.push(this.makeCode(this.tab + "import "));
          if (this.clause != null) {
            code.push.apply(code, this.clause.compileNode(o));
          }
          if (((ref3 = this.source) != null ? ref3.value : void 0) != null) {
            if (this.clause !== null) {
              code.push(this.makeCode(" from "));
            }
            code.push(this.makeCode(this.source.value));
          }
          code.push(this.makeCode(";"));
          return code;
        };
        return ImportDeclaration2;
      }(ModuleDeclaration);
      exports.ImportClause = ImportClause = function(superClass1) {
        extend1(ImportClause2, superClass1);
        function ImportClause2(defaultBinding, namedImports) {
          this.defaultBinding = defaultBinding;
          this.namedImports = namedImports;
        }
        ImportClause2.prototype.children = ["defaultBinding", "namedImports"];
        ImportClause2.prototype.compileNode = function(o) {
          var code;
          code = [];
          if (this.defaultBinding != null) {
            code.push.apply(code, this.defaultBinding.compileNode(o));
            if (this.namedImports != null) {
              code.push(this.makeCode(", "));
            }
          }
          if (this.namedImports != null) {
            code.push.apply(code, this.namedImports.compileNode(o));
          }
          return code;
        };
        return ImportClause2;
      }(Base);
      exports.ExportDeclaration = ExportDeclaration = function(superClass1) {
        extend1(ExportDeclaration2, superClass1);
        function ExportDeclaration2() {
          return ExportDeclaration2.__super__.constructor.apply(this, arguments);
        }
        ExportDeclaration2.prototype.compileNode = function(o) {
          var code, ref3;
          this.checkScope(o, "export");
          code = [];
          code.push(this.makeCode(this.tab + "export "));
          if (this instanceof ExportDefaultDeclaration) {
            code.push(this.makeCode("default "));
          }
          if (!(this instanceof ExportDefaultDeclaration) && (this.clause instanceof Assign || this.clause instanceof Class)) {
            if (this.clause instanceof Class && !this.clause.variable) {
              this.clause.error("anonymous classes cannot be exported");
            }
            code.push(this.makeCode("var "));
            this.clause.moduleDeclaration = "export";
          }
          if (this.clause.body != null && this.clause.body instanceof Block) {
            code = code.concat(this.clause.compileToFragments(o, LEVEL_TOP));
          } else {
            code = code.concat(this.clause.compileNode(o));
          }
          if (((ref3 = this.source) != null ? ref3.value : void 0) != null) {
            code.push(this.makeCode(" from " + this.source.value));
          }
          code.push(this.makeCode(";"));
          return code;
        };
        return ExportDeclaration2;
      }(ModuleDeclaration);
      exports.ExportNamedDeclaration = ExportNamedDeclaration = function(superClass1) {
        extend1(ExportNamedDeclaration2, superClass1);
        function ExportNamedDeclaration2() {
          return ExportNamedDeclaration2.__super__.constructor.apply(this, arguments);
        }
        return ExportNamedDeclaration2;
      }(ExportDeclaration);
      exports.ExportDefaultDeclaration = ExportDefaultDeclaration = function(superClass1) {
        extend1(ExportDefaultDeclaration2, superClass1);
        function ExportDefaultDeclaration2() {
          return ExportDefaultDeclaration2.__super__.constructor.apply(this, arguments);
        }
        return ExportDefaultDeclaration2;
      }(ExportDeclaration);
      exports.ExportAllDeclaration = ExportAllDeclaration = function(superClass1) {
        extend1(ExportAllDeclaration2, superClass1);
        function ExportAllDeclaration2() {
          return ExportAllDeclaration2.__super__.constructor.apply(this, arguments);
        }
        return ExportAllDeclaration2;
      }(ExportDeclaration);
      exports.ModuleSpecifierList = ModuleSpecifierList = function(superClass1) {
        extend1(ModuleSpecifierList2, superClass1);
        function ModuleSpecifierList2(specifiers) {
          this.specifiers = specifiers;
        }
        ModuleSpecifierList2.prototype.children = ["specifiers"];
        ModuleSpecifierList2.prototype.compileNode = function(o) {
          var code, compiledList, fragments, index, j, len1, specifier;
          code = [];
          o.indent += TAB;
          compiledList = function() {
            var j2, len12, ref3, results;
            ref3 = this.specifiers;
            results = [];
            for (j2 = 0, len12 = ref3.length; j2 < len12; j2++) {
              specifier = ref3[j2];
              results.push(specifier.compileToFragments(o, LEVEL_LIST));
            }
            return results;
          }.call(this);
          if (this.specifiers.length !== 0) {
            code.push(this.makeCode("{\n" + o.indent));
            for (index = j = 0, len1 = compiledList.length; j < len1; index = ++j) {
              fragments = compiledList[index];
              if (index) {
                code.push(this.makeCode(",\n" + o.indent));
              }
              code.push.apply(code, fragments);
            }
            code.push(this.makeCode("\n}"));
          } else {
            code.push(this.makeCode("{}"));
          }
          return code;
        };
        return ModuleSpecifierList2;
      }(Base);
      exports.ImportSpecifierList = ImportSpecifierList = function(superClass1) {
        extend1(ImportSpecifierList2, superClass1);
        function ImportSpecifierList2() {
          return ImportSpecifierList2.__super__.constructor.apply(this, arguments);
        }
        return ImportSpecifierList2;
      }(ModuleSpecifierList);
      exports.ExportSpecifierList = ExportSpecifierList = function(superClass1) {
        extend1(ExportSpecifierList2, superClass1);
        function ExportSpecifierList2() {
          return ExportSpecifierList2.__super__.constructor.apply(this, arguments);
        }
        return ExportSpecifierList2;
      }(ModuleSpecifierList);
      exports.ModuleSpecifier = ModuleSpecifier = function(superClass1) {
        extend1(ModuleSpecifier2, superClass1);
        function ModuleSpecifier2(original, alias, moduleDeclarationType1) {
          this.original = original;
          this.alias = alias;
          this.moduleDeclarationType = moduleDeclarationType1;
          this.identifier = this.alias != null ? this.alias.value : this.original.value;
        }
        ModuleSpecifier2.prototype.children = ["original", "alias"];
        ModuleSpecifier2.prototype.compileNode = function(o) {
          var code;
          o.scope.find(this.identifier, this.moduleDeclarationType);
          code = [];
          code.push(this.makeCode(this.original.value));
          if (this.alias != null) {
            code.push(this.makeCode(" as " + this.alias.value));
          }
          return code;
        };
        return ModuleSpecifier2;
      }(Base);
      exports.ImportSpecifier = ImportSpecifier = function(superClass1) {
        extend1(ImportSpecifier2, superClass1);
        function ImportSpecifier2(imported, local) {
          ImportSpecifier2.__super__.constructor.call(this, imported, local, "import");
        }
        ImportSpecifier2.prototype.compileNode = function(o) {
          var ref3;
          if ((ref3 = this.identifier, indexOf.call(o.importedSymbols, ref3) >= 0) || o.scope.check(this.identifier)) {
            this.error("'" + this.identifier + "' has already been declared");
          } else {
            o.importedSymbols.push(this.identifier);
          }
          return ImportSpecifier2.__super__.compileNode.call(this, o);
        };
        return ImportSpecifier2;
      }(ModuleSpecifier);
      exports.ImportDefaultSpecifier = ImportDefaultSpecifier = function(superClass1) {
        extend1(ImportDefaultSpecifier2, superClass1);
        function ImportDefaultSpecifier2() {
          return ImportDefaultSpecifier2.__super__.constructor.apply(this, arguments);
        }
        return ImportDefaultSpecifier2;
      }(ImportSpecifier);
      exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier = function(superClass1) {
        extend1(ImportNamespaceSpecifier2, superClass1);
        function ImportNamespaceSpecifier2() {
          return ImportNamespaceSpecifier2.__super__.constructor.apply(this, arguments);
        }
        return ImportNamespaceSpecifier2;
      }(ImportSpecifier);
      exports.ExportSpecifier = ExportSpecifier = function(superClass1) {
        extend1(ExportSpecifier2, superClass1);
        function ExportSpecifier2(local, exported) {
          ExportSpecifier2.__super__.constructor.call(this, local, exported, "export");
        }
        return ExportSpecifier2;
      }(ModuleSpecifier);
      exports.Assign = Assign = function(superClass1) {
        extend1(Assign2, superClass1);
        function Assign2(variable1, value1, context, options) {
          this.variable = variable1;
          this.value = value1;
          this.context = context;
          if (options == null) {
            options = {};
          }
          this.param = options.param, this.subpattern = options.subpattern, this.operatorToken = options.operatorToken, this.moduleDeclaration = options.moduleDeclaration;
        }
        Assign2.prototype.children = ["variable", "value"];
        Assign2.prototype.isStatement = function(o) {
          return (o != null ? o.level : void 0) === LEVEL_TOP && this.context != null && (this.moduleDeclaration || indexOf.call(this.context, "?") >= 0);
        };
        Assign2.prototype.checkAssignability = function(o, varBase) {
          if (Object.prototype.hasOwnProperty.call(o.scope.positions, varBase.value) && o.scope.variables[o.scope.positions[varBase.value]].type === "import") {
            return varBase.error("'" + varBase.value + "' is read-only");
          }
        };
        Assign2.prototype.assigns = function(name) {
          return this[this.context === "object" ? "value" : "variable"].assigns(name);
        };
        Assign2.prototype.unfoldSoak = function(o) {
          return unfoldSoak(o, this, "variable");
        };
        Assign2.prototype.compileNode = function(o) {
          var answer, compiledName, isValue, j, name, properties, prototype, ref3, ref4, ref5, ref6, ref7, ref8, val, varBase;
          if (isValue = this.variable instanceof Value) {
            if (this.variable.isArray() || this.variable.isObject()) {
              return this.compilePatternMatch(o);
            }
            if (this.variable.isSplice()) {
              return this.compileSplice(o);
            }
            if ((ref3 = this.context) === "||=" || ref3 === "&&=" || ref3 === "?=") {
              return this.compileConditional(o);
            }
            if ((ref4 = this.context) === "**=" || ref4 === "//=" || ref4 === "%%=") {
              return this.compileSpecialMath(o);
            }
          }
          if (this.value instanceof Code) {
            if (this.value["static"]) {
              this.value.klass = this.variable.base;
              this.value.name = this.variable.properties[0];
              this.value.variable = this.variable;
            } else if (((ref5 = this.variable.properties) != null ? ref5.length : void 0) >= 2) {
              ref6 = this.variable.properties, properties = 3 <= ref6.length ? slice2.call(ref6, 0, j = ref6.length - 2) : (j = 0, []), prototype = ref6[j++], name = ref6[j++];
              if (((ref7 = prototype.name) != null ? ref7.value : void 0) === "prototype") {
                this.value.klass = new Value(this.variable.base, properties);
                this.value.name = name;
                this.value.variable = this.variable;
              }
            }
          }
          if (!this.context) {
            varBase = this.variable.unwrapAll();
            if (!varBase.isAssignable()) {
              this.variable.error("'" + this.variable.compile(o) + "' can't be assigned");
            }
            if (!(typeof varBase.hasProperties === "function" ? varBase.hasProperties() : void 0)) {
              if (this.moduleDeclaration) {
                this.checkAssignability(o, varBase);
                o.scope.add(varBase.value, this.moduleDeclaration);
              } else if (this.param) {
                o.scope.add(varBase.value, "var");
              } else {
                this.checkAssignability(o, varBase);
                o.scope.find(varBase.value);
              }
            }
          }
          val = this.value.compileToFragments(o, LEVEL_LIST);
          if (isValue && this.variable.base instanceof Obj) {
            this.variable.front = true;
          }
          compiledName = this.variable.compileToFragments(o, LEVEL_LIST);
          if (this.context === "object") {
            if (ref8 = fragmentsToText(compiledName), indexOf.call(JS_FORBIDDEN, ref8) >= 0) {
              compiledName.unshift(this.makeCode('"'));
              compiledName.push(this.makeCode('"'));
            }
            return compiledName.concat(this.makeCode(": "), val);
          }
          answer = compiledName.concat(this.makeCode(" " + (this.context || "=") + " "), val);
          if (o.level <= LEVEL_LIST) {
            return answer;
          } else {
            return this.wrapInBraces(answer);
          }
        };
        Assign2.prototype.compilePatternMatch = function(o) {
          var acc, assigns, code, defaultValue, expandedIdx, fragments, i, idx, isObject2, ivar, j, len1, message, name, obj, objects, olen, ref, ref3, ref4, ref5, ref6, rest2, top, val, value, vvar, vvarText;
          top = o.level === LEVEL_TOP;
          value = this.value;
          objects = this.variable.base.objects;
          if (!(olen = objects.length)) {
            code = value.compileToFragments(o);
            if (o.level >= LEVEL_OP) {
              return this.wrapInBraces(code);
            } else {
              return code;
            }
          }
          obj = objects[0];
          if (olen === 1 && obj instanceof Expansion) {
            obj.error("Destructuring assignment has no target");
          }
          isObject2 = this.variable.isObject();
          if (top && olen === 1 && !(obj instanceof Splat)) {
            defaultValue = null;
            if (obj instanceof Assign2 && obj.context === "object") {
              ref3 = obj, ref4 = ref3.variable, idx = ref4.base, obj = ref3.value;
              if (obj instanceof Assign2) {
                defaultValue = obj.value;
                obj = obj.variable;
              }
            } else {
              if (obj instanceof Assign2) {
                defaultValue = obj.value;
                obj = obj.variable;
              }
              idx = isObject2 ? obj["this"] ? obj.properties[0].name : new PropertyName(obj.unwrap().value) : new NumberLiteral(0);
            }
            acc = idx.unwrap() instanceof PropertyName;
            value = new Value(value);
            value.properties.push(new (acc ? Access : Index)(idx));
            message = isUnassignable(obj.unwrap().value);
            if (message) {
              obj.error(message);
            }
            if (defaultValue) {
              value = new Op("?", value, defaultValue);
            }
            return new Assign2(obj, value, null, {
              param: this.param
            }).compileToFragments(o, LEVEL_TOP);
          }
          vvar = value.compileToFragments(o, LEVEL_LIST);
          vvarText = fragmentsToText(vvar);
          assigns = [];
          expandedIdx = false;
          if (!(value.unwrap() instanceof IdentifierLiteral) || this.variable.assigns(vvarText)) {
            assigns.push([this.makeCode((ref = o.scope.freeVariable("ref")) + " = ")].concat(slice2.call(vvar)));
            vvar = [this.makeCode(ref)];
            vvarText = ref;
          }
          for (i = j = 0, len1 = objects.length; j < len1; i = ++j) {
            obj = objects[i];
            idx = i;
            if (!expandedIdx && obj instanceof Splat) {
              name = obj.name.unwrap().value;
              obj = obj.unwrap();
              val = olen + " <= " + vvarText + ".length ? " + utility("slice", o) + ".call(" + vvarText + ", " + i;
              if (rest2 = olen - i - 1) {
                ivar = o.scope.freeVariable("i", {
                  single: true
                });
                val += ", " + ivar + " = " + vvarText + ".length - " + rest2 + ") : (" + ivar + " = " + i + ", [])";
              } else {
                val += ") : []";
              }
              val = new Literal(val);
              expandedIdx = ivar + "++";
            } else if (!expandedIdx && obj instanceof Expansion) {
              if (rest2 = olen - i - 1) {
                if (rest2 === 1) {
                  expandedIdx = vvarText + ".length - 1";
                } else {
                  ivar = o.scope.freeVariable("i", {
                    single: true
                  });
                  val = new Literal(ivar + " = " + vvarText + ".length - " + rest2);
                  expandedIdx = ivar + "++";
                  assigns.push(val.compileToFragments(o, LEVEL_LIST));
                }
              }
              continue;
            } else {
              if (obj instanceof Splat || obj instanceof Expansion) {
                obj.error("multiple splats/expansions are disallowed in an assignment");
              }
              defaultValue = null;
              if (obj instanceof Assign2 && obj.context === "object") {
                ref5 = obj, ref6 = ref5.variable, idx = ref6.base, obj = ref5.value;
                if (obj instanceof Assign2) {
                  defaultValue = obj.value;
                  obj = obj.variable;
                }
              } else {
                if (obj instanceof Assign2) {
                  defaultValue = obj.value;
                  obj = obj.variable;
                }
                idx = isObject2 ? obj["this"] ? obj.properties[0].name : new PropertyName(obj.unwrap().value) : new Literal(expandedIdx || idx);
              }
              name = obj.unwrap().value;
              acc = idx.unwrap() instanceof PropertyName;
              val = new Value(new Literal(vvarText), [new (acc ? Access : Index)(idx)]);
              if (defaultValue) {
                val = new Op("?", val, defaultValue);
              }
            }
            if (name != null) {
              message = isUnassignable(name);
              if (message) {
                obj.error(message);
              }
            }
            assigns.push(new Assign2(obj, val, null, {
              param: this.param,
              subpattern: true
            }).compileToFragments(o, LEVEL_LIST));
          }
          if (!(top || this.subpattern)) {
            assigns.push(vvar);
          }
          fragments = this.joinFragmentArrays(assigns, ", ");
          if (o.level < LEVEL_LIST) {
            return fragments;
          } else {
            return this.wrapInBraces(fragments);
          }
        };
        Assign2.prototype.compileConditional = function(o) {
          var fragments, left, ref3, right;
          ref3 = this.variable.cacheReference(o), left = ref3[0], right = ref3[1];
          if (!left.properties.length && left.base instanceof Literal && !(left.base instanceof ThisLiteral) && !o.scope.check(left.base.value)) {
            this.variable.error('the variable "' + left.base.value + `" can't be assigned with ` + this.context + " because it has not been declared before");
          }
          if (indexOf.call(this.context, "?") >= 0) {
            o.isExistentialEquals = true;
            return new If(new Existence(left), right, {
              type: "if"
            }).addElse(new Assign2(right, this.value, "=")).compileToFragments(o);
          } else {
            fragments = new Op(this.context.slice(0, -1), left, new Assign2(right, this.value, "=")).compileToFragments(o);
            if (o.level <= LEVEL_LIST) {
              return fragments;
            } else {
              return this.wrapInBraces(fragments);
            }
          }
        };
        Assign2.prototype.compileSpecialMath = function(o) {
          var left, ref3, right;
          ref3 = this.variable.cacheReference(o), left = ref3[0], right = ref3[1];
          return new Assign2(left, new Op(this.context.slice(0, -1), right, this.value)).compileToFragments(o);
        };
        Assign2.prototype.compileSplice = function(o) {
          var answer, exclusive, from, fromDecl, fromRef, name, ref3, ref4, ref5, to, valDef, valRef;
          ref3 = this.variable.properties.pop().range, from = ref3.from, to = ref3.to, exclusive = ref3.exclusive;
          name = this.variable.compile(o);
          if (from) {
            ref4 = this.cacheToCodeFragments(from.cache(o, LEVEL_OP)), fromDecl = ref4[0], fromRef = ref4[1];
          } else {
            fromDecl = fromRef = "0";
          }
          if (to) {
            if ((from != null ? from.isNumber() : void 0) && to.isNumber()) {
              to = to.compile(o) - fromRef;
              if (!exclusive) {
                to += 1;
              }
            } else {
              to = to.compile(o, LEVEL_ACCESS) + " - " + fromRef;
              if (!exclusive) {
                to += " + 1";
              }
            }
          } else {
            to = "9e9";
          }
          ref5 = this.value.cache(o, LEVEL_LIST), valDef = ref5[0], valRef = ref5[1];
          answer = [].concat(this.makeCode("[].splice.apply(" + name + ", [" + fromDecl + ", " + to + "].concat("), valDef, this.makeCode(")), "), valRef);
          if (o.level > LEVEL_TOP) {
            return this.wrapInBraces(answer);
          } else {
            return answer;
          }
        };
        return Assign2;
      }(Base);
      exports.Code = Code = function(superClass1) {
        extend1(Code2, superClass1);
        function Code2(params, body, tag) {
          this.params = params || [];
          this.body = body || new Block();
          this.bound = tag === "boundfunc";
          this.isGenerator = !!this.body.contains(function(node) {
            return node instanceof Op && node.isYield() || node instanceof YieldReturn;
          });
        }
        Code2.prototype.children = ["params", "body"];
        Code2.prototype.isStatement = function() {
          return !!this.ctor;
        };
        Code2.prototype.jumps = NO;
        Code2.prototype.makeScope = function(parentScope) {
          return new Scope(parentScope, this.body, this);
        };
        Code2.prototype.compileNode = function(o) {
          var answer, boundfunc, code, exprs, i, j, k, l, len1, len2, len3, len4, len5, len6, lit, m, p, param, params, q, r, ref, ref3, ref4, ref5, ref6, ref7, ref8, splats, uniqs, val, wasEmpty, wrapper;
          if (this.bound && ((ref3 = o.scope.method) != null ? ref3.bound : void 0)) {
            this.context = o.scope.method.context;
          }
          if (this.bound && !this.context) {
            this.context = "_this";
            wrapper = new Code2([new Param(new IdentifierLiteral(this.context))], new Block([this]));
            boundfunc = new Call(wrapper, [new ThisLiteral()]);
            boundfunc.updateLocationDataIfMissing(this.locationData);
            return boundfunc.compileNode(o);
          }
          o.scope = del(o, "classScope") || this.makeScope(o.scope);
          o.scope.shared = del(o, "sharedScope");
          o.indent += TAB;
          delete o.bare;
          delete o.isExistentialEquals;
          params = [];
          exprs = [];
          ref4 = this.params;
          for (j = 0, len1 = ref4.length; j < len1; j++) {
            param = ref4[j];
            if (!(param instanceof Expansion)) {
              o.scope.parameter(param.asReference(o));
            }
          }
          ref5 = this.params;
          for (k = 0, len2 = ref5.length; k < len2; k++) {
            param = ref5[k];
            if (!(param.splat || param instanceof Expansion)) {
              continue;
            }
            ref6 = this.params;
            for (l = 0, len3 = ref6.length; l < len3; l++) {
              p = ref6[l];
              if (!(p instanceof Expansion) && p.name.value) {
                o.scope.add(p.name.value, "var", true);
              }
            }
            splats = new Assign(new Value(new Arr(function() {
              var len42, m2, ref72, results;
              ref72 = this.params;
              results = [];
              for (m2 = 0, len42 = ref72.length; m2 < len42; m2++) {
                p = ref72[m2];
                results.push(p.asReference(o));
              }
              return results;
            }.call(this))), new Value(new IdentifierLiteral("arguments")));
            break;
          }
          ref7 = this.params;
          for (m = 0, len4 = ref7.length; m < len4; m++) {
            param = ref7[m];
            if (param.isComplex()) {
              val = ref = param.asReference(o);
              if (param.value) {
                val = new Op("?", ref, param.value);
              }
              exprs.push(new Assign(new Value(param.name), val, "=", {
                param: true
              }));
            } else {
              ref = param;
              if (param.value) {
                lit = new Literal(ref.name.value + " == null");
                val = new Assign(new Value(param.name), param.value, "=");
                exprs.push(new If(lit, val));
              }
            }
            if (!splats) {
              params.push(ref);
            }
          }
          wasEmpty = this.body.isEmpty();
          if (splats) {
            exprs.unshift(splats);
          }
          if (exprs.length) {
            (ref8 = this.body.expressions).unshift.apply(ref8, exprs);
          }
          for (i = q = 0, len5 = params.length; q < len5; i = ++q) {
            p = params[i];
            params[i] = p.compileToFragments(o);
            o.scope.parameter(fragmentsToText(params[i]));
          }
          uniqs = [];
          this.eachParamName(function(name, node) {
            if (indexOf.call(uniqs, name) >= 0) {
              node.error("multiple parameters named " + name);
            }
            return uniqs.push(name);
          });
          if (!(wasEmpty || this.noReturn)) {
            this.body.makeReturn();
          }
          code = "function";
          if (this.isGenerator) {
            code += "*";
          }
          if (this.ctor) {
            code += " " + this.name;
          }
          code += "(";
          answer = [this.makeCode(code)];
          for (i = r = 0, len6 = params.length; r < len6; i = ++r) {
            p = params[i];
            if (i) {
              answer.push(this.makeCode(", "));
            }
            answer.push.apply(answer, p);
          }
          answer.push(this.makeCode(") {"));
          if (!this.body.isEmpty()) {
            answer = answer.concat(this.makeCode("\n"), this.body.compileWithDeclarations(o), this.makeCode("\n" + this.tab));
          }
          answer.push(this.makeCode("}"));
          if (this.ctor) {
            return [this.makeCode(this.tab)].concat(slice2.call(answer));
          }
          if (this.front || o.level >= LEVEL_ACCESS) {
            return this.wrapInBraces(answer);
          } else {
            return answer;
          }
        };
        Code2.prototype.eachParamName = function(iterator) {
          var j, len1, param, ref3, results;
          ref3 = this.params;
          results = [];
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            param = ref3[j];
            results.push(param.eachName(iterator));
          }
          return results;
        };
        Code2.prototype.traverseChildren = function(crossScope, func) {
          if (crossScope) {
            return Code2.__super__.traverseChildren.call(this, crossScope, func);
          }
        };
        return Code2;
      }(Base);
      exports.Param = Param = function(superClass1) {
        extend1(Param2, superClass1);
        function Param2(name1, value1, splat) {
          var message, token;
          this.name = name1;
          this.value = value1;
          this.splat = splat;
          message = isUnassignable(this.name.unwrapAll().value);
          if (message) {
            this.name.error(message);
          }
          if (this.name instanceof Obj && this.name.generated) {
            token = this.name.objects[0].operatorToken;
            token.error("unexpected " + token.value);
          }
        }
        Param2.prototype.children = ["name", "value"];
        Param2.prototype.compileToFragments = function(o) {
          return this.name.compileToFragments(o, LEVEL_LIST);
        };
        Param2.prototype.asReference = function(o) {
          var name, node;
          if (this.reference) {
            return this.reference;
          }
          node = this.name;
          if (node["this"]) {
            name = node.properties[0].name.value;
            if (indexOf.call(JS_FORBIDDEN, name) >= 0) {
              name = "_" + name;
            }
            node = new IdentifierLiteral(o.scope.freeVariable(name));
          } else if (node.isComplex()) {
            node = new IdentifierLiteral(o.scope.freeVariable("arg"));
          }
          node = new Value(node);
          if (this.splat) {
            node = new Splat(node);
          }
          node.updateLocationDataIfMissing(this.locationData);
          return this.reference = node;
        };
        Param2.prototype.isComplex = function() {
          return this.name.isComplex();
        };
        Param2.prototype.eachName = function(iterator, name) {
          var atParam, j, len1, node, obj, ref3, ref4;
          if (name == null) {
            name = this.name;
          }
          atParam = function(obj2) {
            return iterator("@" + obj2.properties[0].name.value, obj2);
          };
          if (name instanceof Literal) {
            return iterator(name.value, name);
          }
          if (name instanceof Value) {
            return atParam(name);
          }
          ref4 = (ref3 = name.objects) != null ? ref3 : [];
          for (j = 0, len1 = ref4.length; j < len1; j++) {
            obj = ref4[j];
            if (obj instanceof Assign && obj.context == null) {
              obj = obj.variable;
            }
            if (obj instanceof Assign) {
              if (obj.value instanceof Assign) {
                obj = obj.value;
              }
              this.eachName(iterator, obj.value.unwrap());
            } else if (obj instanceof Splat) {
              node = obj.name.unwrap();
              iterator(node.value, node);
            } else if (obj instanceof Value) {
              if (obj.isArray() || obj.isObject()) {
                this.eachName(iterator, obj.base);
              } else if (obj["this"]) {
                atParam(obj);
              } else {
                iterator(obj.base.value, obj.base);
              }
            } else if (!(obj instanceof Expansion)) {
              obj.error("illegal parameter " + obj.compile());
            }
          }
        };
        return Param2;
      }(Base);
      exports.Splat = Splat = function(superClass1) {
        extend1(Splat2, superClass1);
        Splat2.prototype.children = ["name"];
        Splat2.prototype.isAssignable = YES;
        function Splat2(name) {
          this.name = name.compile ? name : new Literal(name);
        }
        Splat2.prototype.assigns = function(name) {
          return this.name.assigns(name);
        };
        Splat2.prototype.compileToFragments = function(o) {
          return this.name.compileToFragments(o);
        };
        Splat2.prototype.unwrap = function() {
          return this.name;
        };
        Splat2.compileSplattedArray = function(o, list, apply) {
          var args, base, compiledNode, concatPart, fragments, i, index, j, last2, len1, node;
          index = -1;
          while ((node = list[++index]) && !(node instanceof Splat2)) {
            continue;
          }
          if (index >= list.length) {
            return [];
          }
          if (list.length === 1) {
            node = list[0];
            fragments = node.compileToFragments(o, LEVEL_LIST);
            if (apply) {
              return fragments;
            }
            return [].concat(node.makeCode(utility("slice", o) + ".call("), fragments, node.makeCode(")"));
          }
          args = list.slice(index);
          for (i = j = 0, len1 = args.length; j < len1; i = ++j) {
            node = args[i];
            compiledNode = node.compileToFragments(o, LEVEL_LIST);
            args[i] = node instanceof Splat2 ? [].concat(node.makeCode(utility("slice", o) + ".call("), compiledNode, node.makeCode(")")) : [].concat(node.makeCode("["), compiledNode, node.makeCode("]"));
          }
          if (index === 0) {
            node = list[0];
            concatPart = node.joinFragmentArrays(args.slice(1), ", ");
            return args[0].concat(node.makeCode(".concat("), concatPart, node.makeCode(")"));
          }
          base = function() {
            var k, len2, ref3, results;
            ref3 = list.slice(0, index);
            results = [];
            for (k = 0, len2 = ref3.length; k < len2; k++) {
              node = ref3[k];
              results.push(node.compileToFragments(o, LEVEL_LIST));
            }
            return results;
          }();
          base = list[0].joinFragmentArrays(base, ", ");
          concatPart = list[index].joinFragmentArrays(args, ", ");
          last2 = list[list.length - 1];
          return [].concat(list[0].makeCode("["), base, list[index].makeCode("].concat("), concatPart, last2.makeCode(")"));
        };
        return Splat2;
      }(Base);
      exports.Expansion = Expansion = function(superClass1) {
        extend1(Expansion2, superClass1);
        function Expansion2() {
          return Expansion2.__super__.constructor.apply(this, arguments);
        }
        Expansion2.prototype.isComplex = NO;
        Expansion2.prototype.compileNode = function(o) {
          return this.error("Expansion must be used inside a destructuring assignment or parameter list");
        };
        Expansion2.prototype.asReference = function(o) {
          return this;
        };
        Expansion2.prototype.eachName = function(iterator) {
        };
        return Expansion2;
      }(Base);
      exports.While = While = function(superClass1) {
        extend1(While2, superClass1);
        function While2(condition, options) {
          this.condition = (options != null ? options.invert : void 0) ? condition.invert() : condition;
          this.guard = options != null ? options.guard : void 0;
        }
        While2.prototype.children = ["condition", "guard", "body"];
        While2.prototype.isStatement = YES;
        While2.prototype.makeReturn = function(res) {
          if (res) {
            return While2.__super__.makeReturn.apply(this, arguments);
          } else {
            this.returns = !this.jumps({
              loop: true
            });
            return this;
          }
        };
        While2.prototype.addBody = function(body1) {
          this.body = body1;
          return this;
        };
        While2.prototype.jumps = function() {
          var expressions, j, jumpNode, len1, node;
          expressions = this.body.expressions;
          if (!expressions.length) {
            return false;
          }
          for (j = 0, len1 = expressions.length; j < len1; j++) {
            node = expressions[j];
            if (jumpNode = node.jumps({
              loop: true
            })) {
              return jumpNode;
            }
          }
          return false;
        };
        While2.prototype.compileNode = function(o) {
          var answer, body, rvar, set;
          o.indent += TAB;
          set = "";
          body = this.body;
          if (body.isEmpty()) {
            body = this.makeCode("");
          } else {
            if (this.returns) {
              body.makeReturn(rvar = o.scope.freeVariable("results"));
              set = "" + this.tab + rvar + " = [];\n";
            }
            if (this.guard) {
              if (body.expressions.length > 1) {
                body.expressions.unshift(new If(new Parens(this.guard).invert(), new StatementLiteral("continue")));
              } else {
                if (this.guard) {
                  body = Block.wrap([new If(this.guard, body)]);
                }
              }
            }
            body = [].concat(this.makeCode("\n"), body.compileToFragments(o, LEVEL_TOP), this.makeCode("\n" + this.tab));
          }
          answer = [].concat(this.makeCode(set + this.tab + "while ("), this.condition.compileToFragments(o, LEVEL_PAREN), this.makeCode(") {"), body, this.makeCode("}"));
          if (this.returns) {
            answer.push(this.makeCode("\n" + this.tab + "return " + rvar + ";"));
          }
          return answer;
        };
        return While2;
      }(Base);
      exports.Op = Op = function(superClass1) {
        var CONVERSIONS, INVERSIONS;
        extend1(Op2, superClass1);
        function Op2(op, first2, second, flip) {
          if (op === "in") {
            return new In(first2, second);
          }
          if (op === "do") {
            return this.generateDo(first2);
          }
          if (op === "new") {
            if (first2 instanceof Call && !first2["do"] && !first2.isNew) {
              return first2.newInstance();
            }
            if (first2 instanceof Code && first2.bound || first2["do"]) {
              first2 = new Parens(first2);
            }
          }
          this.operator = CONVERSIONS[op] || op;
          this.first = first2;
          this.second = second;
          this.flip = !!flip;
          return this;
        }
        CONVERSIONS = {
          "==": "===",
          "!=": "!==",
          "of": "in",
          "yieldfrom": "yield*"
        };
        INVERSIONS = {
          "!==": "===",
          "===": "!=="
        };
        Op2.prototype.children = ["first", "second"];
        Op2.prototype.isNumber = function() {
          var ref3;
          return this.isUnary() && ((ref3 = this.operator) === "+" || ref3 === "-") && this.first instanceof Value && this.first.isNumber();
        };
        Op2.prototype.isYield = function() {
          var ref3;
          return (ref3 = this.operator) === "yield" || ref3 === "yield*";
        };
        Op2.prototype.isUnary = function() {
          return !this.second;
        };
        Op2.prototype.isComplex = function() {
          return !this.isNumber();
        };
        Op2.prototype.isChainable = function() {
          var ref3;
          return (ref3 = this.operator) === "<" || ref3 === ">" || ref3 === ">=" || ref3 === "<=" || ref3 === "===" || ref3 === "!==";
        };
        Op2.prototype.invert = function() {
          var allInvertable, curr, fst, op, ref3;
          if (this.isChainable() && this.first.isChainable()) {
            allInvertable = true;
            curr = this;
            while (curr && curr.operator) {
              allInvertable && (allInvertable = curr.operator in INVERSIONS);
              curr = curr.first;
            }
            if (!allInvertable) {
              return new Parens(this).invert();
            }
            curr = this;
            while (curr && curr.operator) {
              curr.invert = !curr.invert;
              curr.operator = INVERSIONS[curr.operator];
              curr = curr.first;
            }
            return this;
          } else if (op = INVERSIONS[this.operator]) {
            this.operator = op;
            if (this.first.unwrap() instanceof Op2) {
              this.first.invert();
            }
            return this;
          } else if (this.second) {
            return new Parens(this).invert();
          } else if (this.operator === "!" && (fst = this.first.unwrap()) instanceof Op2 && ((ref3 = fst.operator) === "!" || ref3 === "in" || ref3 === "instanceof")) {
            return fst;
          } else {
            return new Op2("!", this);
          }
        };
        Op2.prototype.unfoldSoak = function(o) {
          var ref3;
          return ((ref3 = this.operator) === "++" || ref3 === "--" || ref3 === "delete") && unfoldSoak(o, this, "first");
        };
        Op2.prototype.generateDo = function(exp) {
          var call, func, j, len1, param, passedParams, ref, ref3;
          passedParams = [];
          func = exp instanceof Assign && (ref = exp.value.unwrap()) instanceof Code ? ref : exp;
          ref3 = func.params || [];
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            param = ref3[j];
            if (param.value) {
              passedParams.push(param.value);
              delete param.value;
            } else {
              passedParams.push(param);
            }
          }
          call = new Call(exp, passedParams);
          call["do"] = true;
          return call;
        };
        Op2.prototype.compileNode = function(o) {
          var answer, isChain, lhs, message, ref3, rhs;
          isChain = this.isChainable() && this.first.isChainable();
          if (!isChain) {
            this.first.front = this.front;
          }
          if (this.operator === "delete" && o.scope.check(this.first.unwrapAll().value)) {
            this.error("delete operand may not be argument or var");
          }
          if ((ref3 = this.operator) === "--" || ref3 === "++") {
            message = isUnassignable(this.first.unwrapAll().value);
            if (message) {
              this.first.error(message);
            }
          }
          if (this.isYield()) {
            return this.compileYield(o);
          }
          if (this.isUnary()) {
            return this.compileUnary(o);
          }
          if (isChain) {
            return this.compileChain(o);
          }
          switch (this.operator) {
            case "?":
              return this.compileExistence(o);
            case "**":
              return this.compilePower(o);
            case "//":
              return this.compileFloorDivision(o);
            case "%%":
              return this.compileModulo(o);
            default:
              lhs = this.first.compileToFragments(o, LEVEL_OP);
              rhs = this.second.compileToFragments(o, LEVEL_OP);
              answer = [].concat(lhs, this.makeCode(" " + this.operator + " "), rhs);
              if (o.level <= LEVEL_OP) {
                return answer;
              } else {
                return this.wrapInBraces(answer);
              }
          }
        };
        Op2.prototype.compileChain = function(o) {
          var fragments, fst, ref3, shared;
          ref3 = this.first.second.cache(o), this.first.second = ref3[0], shared = ref3[1];
          fst = this.first.compileToFragments(o, LEVEL_OP);
          fragments = fst.concat(this.makeCode(" " + (this.invert ? "&&" : "||") + " "), shared.compileToFragments(o), this.makeCode(" " + this.operator + " "), this.second.compileToFragments(o, LEVEL_OP));
          return this.wrapInBraces(fragments);
        };
        Op2.prototype.compileExistence = function(o) {
          var fst, ref;
          if (this.first.isComplex()) {
            ref = new IdentifierLiteral(o.scope.freeVariable("ref"));
            fst = new Parens(new Assign(ref, this.first));
          } else {
            fst = this.first;
            ref = fst;
          }
          return new If(new Existence(fst), ref, {
            type: "if"
          }).addElse(this.second).compileToFragments(o);
        };
        Op2.prototype.compileUnary = function(o) {
          var op, parts, plusMinus;
          parts = [];
          op = this.operator;
          parts.push([this.makeCode(op)]);
          if (op === "!" && this.first instanceof Existence) {
            this.first.negated = !this.first.negated;
            return this.first.compileToFragments(o);
          }
          if (o.level >= LEVEL_ACCESS) {
            return new Parens(this).compileToFragments(o);
          }
          plusMinus = op === "+" || op === "-";
          if (op === "new" || op === "typeof" || op === "delete" || plusMinus && this.first instanceof Op2 && this.first.operator === op) {
            parts.push([this.makeCode(" ")]);
          }
          if (plusMinus && this.first instanceof Op2 || op === "new" && this.first.isStatement(o)) {
            this.first = new Parens(this.first);
          }
          parts.push(this.first.compileToFragments(o, LEVEL_OP));
          if (this.flip) {
            parts.reverse();
          }
          return this.joinFragmentArrays(parts, "");
        };
        Op2.prototype.compileYield = function(o) {
          var op, parts, ref3;
          parts = [];
          op = this.operator;
          if (o.scope.parent == null) {
            this.error("yield can only occur inside functions");
          }
          if (indexOf.call(Object.keys(this.first), "expression") >= 0 && !(this.first instanceof Throw)) {
            if (this.first.expression != null) {
              parts.push(this.first.expression.compileToFragments(o, LEVEL_OP));
            }
          } else {
            if (o.level >= LEVEL_PAREN) {
              parts.push([this.makeCode("(")]);
            }
            parts.push([this.makeCode(op)]);
            if (((ref3 = this.first.base) != null ? ref3.value : void 0) !== "") {
              parts.push([this.makeCode(" ")]);
            }
            parts.push(this.first.compileToFragments(o, LEVEL_OP));
            if (o.level >= LEVEL_PAREN) {
              parts.push([this.makeCode(")")]);
            }
          }
          return this.joinFragmentArrays(parts, "");
        };
        Op2.prototype.compilePower = function(o) {
          var pow;
          pow = new Value(new IdentifierLiteral("Math"), [new Access(new PropertyName("pow"))]);
          return new Call(pow, [this.first, this.second]).compileToFragments(o);
        };
        Op2.prototype.compileFloorDivision = function(o) {
          var div, floor, second;
          floor = new Value(new IdentifierLiteral("Math"), [new Access(new PropertyName("floor"))]);
          second = this.second.isComplex() ? new Parens(this.second) : this.second;
          div = new Op2("/", this.first, second);
          return new Call(floor, [div]).compileToFragments(o);
        };
        Op2.prototype.compileModulo = function(o) {
          var mod;
          mod = new Value(new Literal(utility("modulo", o)));
          return new Call(mod, [this.first, this.second]).compileToFragments(o);
        };
        Op2.prototype.toString = function(idt) {
          return Op2.__super__.toString.call(this, idt, this.constructor.name + " " + this.operator);
        };
        return Op2;
      }(Base);
      exports.In = In = function(superClass1) {
        extend1(In2, superClass1);
        function In2(object2, array) {
          this.object = object2;
          this.array = array;
        }
        In2.prototype.children = ["object", "array"];
        In2.prototype.invert = NEGATE;
        In2.prototype.compileNode = function(o) {
          var hasSplat, j, len1, obj, ref3;
          if (this.array instanceof Value && this.array.isArray() && this.array.base.objects.length) {
            ref3 = this.array.base.objects;
            for (j = 0, len1 = ref3.length; j < len1; j++) {
              obj = ref3[j];
              if (!(obj instanceof Splat)) {
                continue;
              }
              hasSplat = true;
              break;
            }
            if (!hasSplat) {
              return this.compileOrTest(o);
            }
          }
          return this.compileLoopTest(o);
        };
        In2.prototype.compileOrTest = function(o) {
          var cmp, cnj, i, item, j, len1, ref, ref3, ref4, ref5, sub, tests;
          ref3 = this.object.cache(o, LEVEL_OP), sub = ref3[0], ref = ref3[1];
          ref4 = this.negated ? [" !== ", " && "] : [" === ", " || "], cmp = ref4[0], cnj = ref4[1];
          tests = [];
          ref5 = this.array.base.objects;
          for (i = j = 0, len1 = ref5.length; j < len1; i = ++j) {
            item = ref5[i];
            if (i) {
              tests.push(this.makeCode(cnj));
            }
            tests = tests.concat(i ? ref : sub, this.makeCode(cmp), item.compileToFragments(o, LEVEL_ACCESS));
          }
          if (o.level < LEVEL_OP) {
            return tests;
          } else {
            return this.wrapInBraces(tests);
          }
        };
        In2.prototype.compileLoopTest = function(o) {
          var fragments, ref, ref3, sub;
          ref3 = this.object.cache(o, LEVEL_LIST), sub = ref3[0], ref = ref3[1];
          fragments = [].concat(this.makeCode(utility("indexOf", o) + ".call("), this.array.compileToFragments(o, LEVEL_LIST), this.makeCode(", "), ref, this.makeCode(") " + (this.negated ? "< 0" : ">= 0")));
          if (fragmentsToText(sub) === fragmentsToText(ref)) {
            return fragments;
          }
          fragments = sub.concat(this.makeCode(", "), fragments);
          if (o.level < LEVEL_LIST) {
            return fragments;
          } else {
            return this.wrapInBraces(fragments);
          }
        };
        In2.prototype.toString = function(idt) {
          return In2.__super__.toString.call(this, idt, this.constructor.name + (this.negated ? "!" : ""));
        };
        return In2;
      }(Base);
      exports.Try = Try = function(superClass1) {
        extend1(Try2, superClass1);
        function Try2(attempt, errorVariable, recovery, ensure) {
          this.attempt = attempt;
          this.errorVariable = errorVariable;
          this.recovery = recovery;
          this.ensure = ensure;
        }
        Try2.prototype.children = ["attempt", "recovery", "ensure"];
        Try2.prototype.isStatement = YES;
        Try2.prototype.jumps = function(o) {
          var ref3;
          return this.attempt.jumps(o) || ((ref3 = this.recovery) != null ? ref3.jumps(o) : void 0);
        };
        Try2.prototype.makeReturn = function(res) {
          if (this.attempt) {
            this.attempt = this.attempt.makeReturn(res);
          }
          if (this.recovery) {
            this.recovery = this.recovery.makeReturn(res);
          }
          return this;
        };
        Try2.prototype.compileNode = function(o) {
          var catchPart, ensurePart, generatedErrorVariableName, message, placeholder, tryPart;
          o.indent += TAB;
          tryPart = this.attempt.compileToFragments(o, LEVEL_TOP);
          catchPart = this.recovery ? (generatedErrorVariableName = o.scope.freeVariable("error", {
            reserve: false
          }), placeholder = new IdentifierLiteral(generatedErrorVariableName), this.errorVariable ? (message = isUnassignable(this.errorVariable.unwrapAll().value), message ? this.errorVariable.error(message) : void 0, this.recovery.unshift(new Assign(this.errorVariable, placeholder))) : void 0, [].concat(this.makeCode(" catch ("), placeholder.compileToFragments(o), this.makeCode(") {\n"), this.recovery.compileToFragments(o, LEVEL_TOP), this.makeCode("\n" + this.tab + "}"))) : !(this.ensure || this.recovery) ? (generatedErrorVariableName = o.scope.freeVariable("error", {
            reserve: false
          }), [this.makeCode(" catch (" + generatedErrorVariableName + ") {}")]) : [];
          ensurePart = this.ensure ? [].concat(this.makeCode(" finally {\n"), this.ensure.compileToFragments(o, LEVEL_TOP), this.makeCode("\n" + this.tab + "}")) : [];
          return [].concat(this.makeCode(this.tab + "try {\n"), tryPart, this.makeCode("\n" + this.tab + "}"), catchPart, ensurePart);
        };
        return Try2;
      }(Base);
      exports.Throw = Throw = function(superClass1) {
        extend1(Throw2, superClass1);
        function Throw2(expression) {
          this.expression = expression;
        }
        Throw2.prototype.children = ["expression"];
        Throw2.prototype.isStatement = YES;
        Throw2.prototype.jumps = NO;
        Throw2.prototype.makeReturn = THIS;
        Throw2.prototype.compileNode = function(o) {
          return [].concat(this.makeCode(this.tab + "throw "), this.expression.compileToFragments(o), this.makeCode(";"));
        };
        return Throw2;
      }(Base);
      exports.Existence = Existence = function(superClass1) {
        extend1(Existence2, superClass1);
        function Existence2(expression) {
          this.expression = expression;
        }
        Existence2.prototype.children = ["expression"];
        Existence2.prototype.invert = NEGATE;
        Existence2.prototype.compileNode = function(o) {
          var cmp, cnj, code, ref3;
          this.expression.front = this.front;
          code = this.expression.compile(o, LEVEL_OP);
          if (this.expression.unwrap() instanceof IdentifierLiteral && !o.scope.check(code)) {
            ref3 = this.negated ? ["===", "||"] : ["!==", "&&"], cmp = ref3[0], cnj = ref3[1];
            code = "typeof " + code + " " + cmp + ' "undefined" ' + cnj + " " + code + " " + cmp + " null";
          } else {
            code = code + " " + (this.negated ? "==" : "!=") + " null";
          }
          return [this.makeCode(o.level <= LEVEL_COND ? code : "(" + code + ")")];
        };
        return Existence2;
      }(Base);
      exports.Parens = Parens = function(superClass1) {
        extend1(Parens2, superClass1);
        function Parens2(body1) {
          this.body = body1;
        }
        Parens2.prototype.children = ["body"];
        Parens2.prototype.unwrap = function() {
          return this.body;
        };
        Parens2.prototype.isComplex = function() {
          return this.body.isComplex();
        };
        Parens2.prototype.compileNode = function(o) {
          var bare, expr, fragments;
          expr = this.body.unwrap();
          if (expr instanceof Value && expr.isAtomic()) {
            expr.front = this.front;
            return expr.compileToFragments(o);
          }
          fragments = expr.compileToFragments(o, LEVEL_PAREN);
          bare = o.level < LEVEL_OP && (expr instanceof Op || expr instanceof Call || expr instanceof For && expr.returns) && (o.level < LEVEL_COND || fragments.length <= 3);
          if (bare) {
            return fragments;
          } else {
            return this.wrapInBraces(fragments);
          }
        };
        return Parens2;
      }(Base);
      exports.StringWithInterpolations = StringWithInterpolations = function(superClass1) {
        extend1(StringWithInterpolations2, superClass1);
        function StringWithInterpolations2() {
          return StringWithInterpolations2.__super__.constructor.apply(this, arguments);
        }
        StringWithInterpolations2.prototype.compileNode = function(o) {
          var element, elements, expr, fragments, j, len1, value;
          if (!o.inTaggedTemplateCall) {
            return StringWithInterpolations2.__super__.compileNode.apply(this, arguments);
          }
          expr = this.body.unwrap();
          elements = [];
          expr.traverseChildren(false, function(node) {
            if (node instanceof StringLiteral) {
              elements.push(node);
              return true;
            } else if (node instanceof Parens) {
              elements.push(node);
              return false;
            }
            return true;
          });
          fragments = [];
          fragments.push(this.makeCode("`"));
          for (j = 0, len1 = elements.length; j < len1; j++) {
            element = elements[j];
            if (element instanceof StringLiteral) {
              value = element.value.slice(1, -1);
              value = value.replace(/(\\*)(`|\$\{)/g, function(match, backslashes, toBeEscaped) {
                if (backslashes.length % 2 === 0) {
                  return backslashes + "\\" + toBeEscaped;
                } else {
                  return match;
                }
              });
              fragments.push(this.makeCode(value));
            } else {
              fragments.push(this.makeCode("${"));
              fragments.push.apply(fragments, element.compileToFragments(o, LEVEL_PAREN));
              fragments.push(this.makeCode("}"));
            }
          }
          fragments.push(this.makeCode("`"));
          return fragments;
        };
        return StringWithInterpolations2;
      }(Parens);
      exports.For = For = function(superClass1) {
        extend1(For2, superClass1);
        function For2(body, source) {
          var ref3;
          this.source = source.source, this.guard = source.guard, this.step = source.step, this.name = source.name, this.index = source.index;
          this.body = Block.wrap([body]);
          this.own = !!source.own;
          this.object = !!source.object;
          this.from = !!source.from;
          if (this.from && this.index) {
            this.index.error("cannot use index with for-from");
          }
          if (this.own && !this.object) {
            source.ownTag.error("cannot use own with for-" + (this.from ? "from" : "in"));
          }
          if (this.object) {
            ref3 = [this.index, this.name], this.name = ref3[0], this.index = ref3[1];
          }
          if (this.index instanceof Value && !this.index.isAssignable()) {
            this.index.error("index cannot be a pattern matching expression");
          }
          this.range = this.source instanceof Value && this.source.base instanceof Range2 && !this.source.properties.length && !this.from;
          this.pattern = this.name instanceof Value;
          if (this.range && this.index) {
            this.index.error("indexes do not apply to range loops");
          }
          if (this.range && this.pattern) {
            this.name.error("cannot pattern match over range loops");
          }
          this.returns = false;
        }
        For2.prototype.children = ["body", "source", "guard", "step"];
        For2.prototype.compileNode = function(o) {
          var body, bodyFragments, compare, compareDown, declare, declareDown, defPart, defPartFragments, down, forPartFragments, guardPart, idt1, increment, index, ivar, kvar, kvarAssign, last2, lvar, name, namePart, ref, ref3, ref4, resultPart, returnResult, rvar, scope, source, step, stepNum, stepVar, svar, varPart;
          body = Block.wrap([this.body]);
          ref3 = body.expressions, last2 = ref3[ref3.length - 1];
          if ((last2 != null ? last2.jumps() : void 0) instanceof Return) {
            this.returns = false;
          }
          source = this.range ? this.source.base : this.source;
          scope = o.scope;
          if (!this.pattern) {
            name = this.name && this.name.compile(o, LEVEL_LIST);
          }
          index = this.index && this.index.compile(o, LEVEL_LIST);
          if (name && !this.pattern) {
            scope.find(name);
          }
          if (index && !(this.index instanceof Value)) {
            scope.find(index);
          }
          if (this.returns) {
            rvar = scope.freeVariable("results");
          }
          if (this.from) {
            if (this.pattern) {
              ivar = scope.freeVariable("x", {
                single: true
              });
            }
          } else {
            ivar = this.object && index || scope.freeVariable("i", {
              single: true
            });
          }
          kvar = (this.range || this.from) && name || index || ivar;
          kvarAssign = kvar !== ivar ? kvar + " = " : "";
          if (this.step && !this.range) {
            ref4 = this.cacheToCodeFragments(this.step.cache(o, LEVEL_LIST, isComplexOrAssignable)), step = ref4[0], stepVar = ref4[1];
            if (this.step.isNumber()) {
              stepNum = Number(stepVar);
            }
          }
          if (this.pattern) {
            name = ivar;
          }
          varPart = "";
          guardPart = "";
          defPart = "";
          idt1 = this.tab + TAB;
          if (this.range) {
            forPartFragments = source.compileToFragments(merge(o, {
              index: ivar,
              name,
              step: this.step,
              isComplex: isComplexOrAssignable
            }));
          } else {
            svar = this.source.compile(o, LEVEL_LIST);
            if ((name || this.own) && !(this.source.unwrap() instanceof IdentifierLiteral)) {
              defPart += "" + this.tab + (ref = scope.freeVariable("ref")) + " = " + svar + ";\n";
              svar = ref;
            }
            if (name && !this.pattern && !this.from) {
              namePart = name + " = " + svar + "[" + kvar + "]";
            }
            if (!this.object && !this.from) {
              if (step !== stepVar) {
                defPart += "" + this.tab + step + ";\n";
              }
              down = stepNum < 0;
              if (!(this.step && stepNum != null && down)) {
                lvar = scope.freeVariable("len");
              }
              declare = "" + kvarAssign + ivar + " = 0, " + lvar + " = " + svar + ".length";
              declareDown = "" + kvarAssign + ivar + " = " + svar + ".length - 1";
              compare = ivar + " < " + lvar;
              compareDown = ivar + " >= 0";
              if (this.step) {
                if (stepNum != null) {
                  if (down) {
                    compare = compareDown;
                    declare = declareDown;
                  }
                } else {
                  compare = stepVar + " > 0 ? " + compare + " : " + compareDown;
                  declare = "(" + stepVar + " > 0 ? (" + declare + ") : " + declareDown + ")";
                }
                increment = ivar + " += " + stepVar;
              } else {
                increment = kvar !== ivar ? "++" + ivar : ivar + "++";
              }
              forPartFragments = [this.makeCode(declare + "; " + compare + "; " + kvarAssign + increment)];
            }
          }
          if (this.returns) {
            resultPart = "" + this.tab + rvar + " = [];\n";
            returnResult = "\n" + this.tab + "return " + rvar + ";";
            body.makeReturn(rvar);
          }
          if (this.guard) {
            if (body.expressions.length > 1) {
              body.expressions.unshift(new If(new Parens(this.guard).invert(), new StatementLiteral("continue")));
            } else {
              if (this.guard) {
                body = Block.wrap([new If(this.guard, body)]);
              }
            }
          }
          if (this.pattern) {
            body.expressions.unshift(new Assign(this.name, this.from ? new IdentifierLiteral(kvar) : new Literal(svar + "[" + kvar + "]")));
          }
          defPartFragments = [].concat(this.makeCode(defPart), this.pluckDirectCall(o, body));
          if (namePart) {
            varPart = "\n" + idt1 + namePart + ";";
          }
          if (this.object) {
            forPartFragments = [this.makeCode(kvar + " in " + svar)];
            if (this.own) {
              guardPart = "\n" + idt1 + "if (!" + utility("hasProp", o) + ".call(" + svar + ", " + kvar + ")) continue;";
            }
          } else if (this.from) {
            forPartFragments = [this.makeCode(kvar + " of " + svar)];
          }
          bodyFragments = body.compileToFragments(merge(o, {
            indent: idt1
          }), LEVEL_TOP);
          if (bodyFragments && bodyFragments.length > 0) {
            bodyFragments = [].concat(this.makeCode("\n"), bodyFragments, this.makeCode("\n"));
          }
          return [].concat(defPartFragments, this.makeCode("" + (resultPart || "") + this.tab + "for ("), forPartFragments, this.makeCode(") {" + guardPart + varPart), bodyFragments, this.makeCode(this.tab + "}" + (returnResult || "")));
        };
        For2.prototype.pluckDirectCall = function(o, body) {
          var base, defs, expr, fn, idx, j, len1, ref, ref3, ref4, ref5, ref6, ref7, ref8, ref9, val;
          defs = [];
          ref3 = body.expressions;
          for (idx = j = 0, len1 = ref3.length; j < len1; idx = ++j) {
            expr = ref3[idx];
            expr = expr.unwrapAll();
            if (!(expr instanceof Call)) {
              continue;
            }
            val = (ref4 = expr.variable) != null ? ref4.unwrapAll() : void 0;
            if (!(val instanceof Code || val instanceof Value && ((ref5 = val.base) != null ? ref5.unwrapAll() : void 0) instanceof Code && val.properties.length === 1 && ((ref6 = (ref7 = val.properties[0].name) != null ? ref7.value : void 0) === "call" || ref6 === "apply"))) {
              continue;
            }
            fn = ((ref8 = val.base) != null ? ref8.unwrapAll() : void 0) || val;
            ref = new IdentifierLiteral(o.scope.freeVariable("fn"));
            base = new Value(ref);
            if (val.base) {
              ref9 = [base, val], val.base = ref9[0], base = ref9[1];
            }
            body.expressions[idx] = new Call(base, expr.args);
            defs = defs.concat(this.makeCode(this.tab), new Assign(ref, fn).compileToFragments(o, LEVEL_TOP), this.makeCode(";\n"));
          }
          return defs;
        };
        return For2;
      }(While);
      exports.Switch = Switch = function(superClass1) {
        extend1(Switch2, superClass1);
        function Switch2(subject, cases, otherwise) {
          this.subject = subject;
          this.cases = cases;
          this.otherwise = otherwise;
        }
        Switch2.prototype.children = ["subject", "cases", "otherwise"];
        Switch2.prototype.isStatement = YES;
        Switch2.prototype.jumps = function(o) {
          var block, conds, j, jumpNode, len1, ref3, ref4, ref5;
          if (o == null) {
            o = {
              block: true
            };
          }
          ref3 = this.cases;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            ref4 = ref3[j], conds = ref4[0], block = ref4[1];
            if (jumpNode = block.jumps(o)) {
              return jumpNode;
            }
          }
          return (ref5 = this.otherwise) != null ? ref5.jumps(o) : void 0;
        };
        Switch2.prototype.makeReturn = function(res) {
          var j, len1, pair, ref3, ref4;
          ref3 = this.cases;
          for (j = 0, len1 = ref3.length; j < len1; j++) {
            pair = ref3[j];
            pair[1].makeReturn(res);
          }
          if (res) {
            this.otherwise || (this.otherwise = new Block([new Literal("void 0")]));
          }
          if ((ref4 = this.otherwise) != null) {
            ref4.makeReturn(res);
          }
          return this;
        };
        Switch2.prototype.compileNode = function(o) {
          var block, body, cond, conditions, expr, fragments, i, idt1, idt2, j, k, len1, len2, ref3, ref4, ref5;
          idt1 = o.indent + TAB;
          idt2 = o.indent = idt1 + TAB;
          fragments = [].concat(this.makeCode(this.tab + "switch ("), this.subject ? this.subject.compileToFragments(o, LEVEL_PAREN) : this.makeCode("false"), this.makeCode(") {\n"));
          ref3 = this.cases;
          for (i = j = 0, len1 = ref3.length; j < len1; i = ++j) {
            ref4 = ref3[i], conditions = ref4[0], block = ref4[1];
            ref5 = flatten3([conditions]);
            for (k = 0, len2 = ref5.length; k < len2; k++) {
              cond = ref5[k];
              if (!this.subject) {
                cond = cond.invert();
              }
              fragments = fragments.concat(this.makeCode(idt1 + "case "), cond.compileToFragments(o, LEVEL_PAREN), this.makeCode(":\n"));
            }
            if ((body = block.compileToFragments(o, LEVEL_TOP)).length > 0) {
              fragments = fragments.concat(body, this.makeCode("\n"));
            }
            if (i === this.cases.length - 1 && !this.otherwise) {
              break;
            }
            expr = this.lastNonComment(block.expressions);
            if (expr instanceof Return || expr instanceof Literal && expr.jumps() && expr.value !== "debugger") {
              continue;
            }
            fragments.push(cond.makeCode(idt2 + "break;\n"));
          }
          if (this.otherwise && this.otherwise.expressions.length) {
            fragments.push.apply(fragments, [this.makeCode(idt1 + "default:\n")].concat(slice2.call(this.otherwise.compileToFragments(o, LEVEL_TOP)), [this.makeCode("\n")]));
          }
          fragments.push(this.makeCode(this.tab + "}"));
          return fragments;
        };
        return Switch2;
      }(Base);
      exports.If = If = function(superClass1) {
        extend1(If2, superClass1);
        function If2(condition, body1, options) {
          this.body = body1;
          if (options == null) {
            options = {};
          }
          this.condition = options.type === "unless" ? condition.invert() : condition;
          this.elseBody = null;
          this.isChain = false;
          this.soak = options.soak;
        }
        If2.prototype.children = ["condition", "body", "elseBody"];
        If2.prototype.bodyNode = function() {
          var ref3;
          return (ref3 = this.body) != null ? ref3.unwrap() : void 0;
        };
        If2.prototype.elseBodyNode = function() {
          var ref3;
          return (ref3 = this.elseBody) != null ? ref3.unwrap() : void 0;
        };
        If2.prototype.addElse = function(elseBody) {
          if (this.isChain) {
            this.elseBodyNode().addElse(elseBody);
          } else {
            this.isChain = elseBody instanceof If2;
            this.elseBody = this.ensureBlock(elseBody);
            this.elseBody.updateLocationDataIfMissing(elseBody.locationData);
          }
          return this;
        };
        If2.prototype.isStatement = function(o) {
          var ref3;
          return (o != null ? o.level : void 0) === LEVEL_TOP || this.bodyNode().isStatement(o) || ((ref3 = this.elseBodyNode()) != null ? ref3.isStatement(o) : void 0);
        };
        If2.prototype.jumps = function(o) {
          var ref3;
          return this.body.jumps(o) || ((ref3 = this.elseBody) != null ? ref3.jumps(o) : void 0);
        };
        If2.prototype.compileNode = function(o) {
          if (this.isStatement(o)) {
            return this.compileStatement(o);
          } else {
            return this.compileExpression(o);
          }
        };
        If2.prototype.makeReturn = function(res) {
          if (res) {
            this.elseBody || (this.elseBody = new Block([new Literal("void 0")]));
          }
          this.body && (this.body = new Block([this.body.makeReturn(res)]));
          this.elseBody && (this.elseBody = new Block([this.elseBody.makeReturn(res)]));
          return this;
        };
        If2.prototype.ensureBlock = function(node) {
          if (node instanceof Block) {
            return node;
          } else {
            return new Block([node]);
          }
        };
        If2.prototype.compileStatement = function(o) {
          var answer, body, child, cond, exeq, ifPart, indent;
          child = del(o, "chainChild");
          exeq = del(o, "isExistentialEquals");
          if (exeq) {
            return new If2(this.condition.invert(), this.elseBodyNode(), {
              type: "if"
            }).compileToFragments(o);
          }
          indent = o.indent + TAB;
          cond = this.condition.compileToFragments(o, LEVEL_PAREN);
          body = this.ensureBlock(this.body).compileToFragments(merge(o, {
            indent
          }));
          ifPart = [].concat(this.makeCode("if ("), cond, this.makeCode(") {\n"), body, this.makeCode("\n" + this.tab + "}"));
          if (!child) {
            ifPart.unshift(this.makeCode(this.tab));
          }
          if (!this.elseBody) {
            return ifPart;
          }
          answer = ifPart.concat(this.makeCode(" else "));
          if (this.isChain) {
            o.chainChild = true;
            answer = answer.concat(this.elseBody.unwrap().compileToFragments(o, LEVEL_TOP));
          } else {
            answer = answer.concat(this.makeCode("{\n"), this.elseBody.compileToFragments(merge(o, {
              indent
            }), LEVEL_TOP), this.makeCode("\n" + this.tab + "}"));
          }
          return answer;
        };
        If2.prototype.compileExpression = function(o) {
          var alt, body, cond, fragments;
          cond = this.condition.compileToFragments(o, LEVEL_COND);
          body = this.bodyNode().compileToFragments(o, LEVEL_LIST);
          alt = this.elseBodyNode() ? this.elseBodyNode().compileToFragments(o, LEVEL_LIST) : [this.makeCode("void 0")];
          fragments = cond.concat(this.makeCode(" ? "), body, this.makeCode(" : "), alt);
          if (o.level >= LEVEL_COND) {
            return this.wrapInBraces(fragments);
          } else {
            return fragments;
          }
        };
        If2.prototype.unfoldSoak = function() {
          return this.soak && this;
        };
        return If2;
      }(Base);
      UTILITIES = {
        extend: function(o) {
          return "function(child, parent) { for (var key in parent) { if (" + utility("hasProp", o) + ".call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }";
        },
        bind: function() {
          return "function(fn, me){ return function(){ return fn.apply(me, arguments); }; }";
        },
        indexOf: function() {
          return "[].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }";
        },
        modulo: function() {
          return "function(a, b) { return (+a % (b = +b) + b) % b; }";
        },
        hasProp: function() {
          return "{}.hasOwnProperty";
        },
        slice: function() {
          return "[].slice";
        }
      };
      LEVEL_TOP = 1;
      LEVEL_PAREN = 2;
      LEVEL_LIST = 3;
      LEVEL_COND = 4;
      LEVEL_OP = 5;
      LEVEL_ACCESS = 6;
      TAB = "  ";
      SIMPLENUM = /^[+-]?\d+$/;
      utility = function(name, o) {
        var ref, root2;
        root2 = o.scope.root;
        if (name in root2.utilities) {
          return root2.utilities[name];
        } else {
          ref = root2.freeVariable(name);
          root2.assign(ref, UTILITIES[name](o));
          return root2.utilities[name] = ref;
        }
      };
      multident = function(code, tab) {
        code = code.replace(/\n/g, "$&" + tab);
        return code.replace(/\s+$/, "");
      };
      isLiteralArguments = function(node) {
        return node instanceof IdentifierLiteral && node.value === "arguments";
      };
      isLiteralThis = function(node) {
        return node instanceof ThisLiteral || node instanceof Code && node.bound || node instanceof SuperCall;
      };
      isComplexOrAssignable = function(node) {
        return node.isComplex() || (typeof node.isAssignable === "function" ? node.isAssignable() : void 0);
      };
      unfoldSoak = function(o, parent, name) {
        var ifn;
        if (!(ifn = parent[name].unfoldSoak(o))) {
          return;
        }
        parent[name] = ifn.body;
        ifn.body = new Value(parent);
        return ifn;
      };
    }).call(exports);
  }
});

// ../node_modules/coffee-script/lib/coffee-script/coffee-script.js
var require_coffee_script = __commonJS({
  "../node_modules/coffee-script/lib/coffee-script/coffee-script.js"(exports) {
    (function() {
      var Lexer, SourceMap, base64encode, compile, ext, fn1, formatSourcePosition, fs, getSourceMap, helpers, i, len, lexer, packageJson, parser, path2, ref, sourceMaps, sources, vm, withPrettyErrors, hasProp = {}.hasOwnProperty;
      fs = require("fs");
      vm = require("vm");
      path2 = require("path");
      Lexer = require_lexer().Lexer;
      parser = require_parser().parser;
      helpers = require_helpers();
      SourceMap = require_sourcemap();
      packageJson = require_package();
      exports.VERSION = packageJson.version;
      exports.FILE_EXTENSIONS = [".coffee", ".litcoffee", ".coffee.md"];
      exports.helpers = helpers;
      base64encode = function(src) {
        switch (false) {
          case typeof Buffer !== "function":
            return new Buffer(src).toString("base64");
          case typeof btoa !== "function":
            return btoa(encodeURIComponent(src).replace(/%([0-9A-F]{2})/g, function(match, p1) {
              return String.fromCharCode("0x" + p1);
            }));
          default:
            throw new Error("Unable to base64 encode inline sourcemap.");
        }
      };
      withPrettyErrors = function(fn) {
        return function(code, options) {
          var err;
          if (options == null) {
            options = {};
          }
          try {
            return fn.call(this, code, options);
          } catch (error) {
            err = error;
            if (typeof code !== "string") {
              throw err;
            }
            throw helpers.updateSyntaxError(err, code, options.filename);
          }
        };
      };
      sources = {};
      sourceMaps = {};
      exports.compile = compile = withPrettyErrors(function(code, options) {
        var currentColumn, currentLine, encoded, extend, filename, fragment, fragments, generateSourceMap, header, i2, j, js, len2, len1, map2, merge, newLines, ref2, ref1, sourceMapDataURI, sourceURL, token, tokens, v3SourceMap;
        merge = helpers.merge, extend = helpers.extend;
        options = extend({}, options);
        generateSourceMap = options.sourceMap || options.inlineMap || options.filename == null;
        filename = options.filename || "<anonymous>";
        sources[filename] = code;
        if (generateSourceMap) {
          map2 = new SourceMap();
        }
        tokens = lexer.tokenize(code, options);
        options.referencedVars = function() {
          var i3, len3, results;
          results = [];
          for (i3 = 0, len3 = tokens.length; i3 < len3; i3++) {
            token = tokens[i3];
            if (token[0] === "IDENTIFIER") {
              results.push(token[1]);
            }
          }
          return results;
        }();
        if (!(options.bare != null && options.bare === true)) {
          for (i2 = 0, len2 = tokens.length; i2 < len2; i2++) {
            token = tokens[i2];
            if ((ref2 = token[0]) === "IMPORT" || ref2 === "EXPORT") {
              options.bare = true;
              break;
            }
          }
        }
        fragments = parser.parse(tokens).compileToFragments(options);
        currentLine = 0;
        if (options.header) {
          currentLine += 1;
        }
        if (options.shiftLine) {
          currentLine += 1;
        }
        currentColumn = 0;
        js = "";
        for (j = 0, len1 = fragments.length; j < len1; j++) {
          fragment = fragments[j];
          if (generateSourceMap) {
            if (fragment.locationData && !/^[;\s]*$/.test(fragment.code)) {
              map2.add([fragment.locationData.first_line, fragment.locationData.first_column], [currentLine, currentColumn], {
                noReplace: true
              });
            }
            newLines = helpers.count(fragment.code, "\n");
            currentLine += newLines;
            if (newLines) {
              currentColumn = fragment.code.length - (fragment.code.lastIndexOf("\n") + 1);
            } else {
              currentColumn += fragment.code.length;
            }
          }
          js += fragment.code;
        }
        if (options.header) {
          header = "Generated by CoffeeScript " + this.VERSION;
          js = "// " + header + "\n" + js;
        }
        if (generateSourceMap) {
          v3SourceMap = map2.generate(options, code);
          sourceMaps[filename] = map2;
        }
        if (options.inlineMap) {
          encoded = base64encode(JSON.stringify(v3SourceMap));
          sourceMapDataURI = "//# sourceMappingURL=data:application/json;base64," + encoded;
          sourceURL = "//# sourceURL=" + ((ref1 = options.filename) != null ? ref1 : "coffeescript");
          js = js + "\n" + sourceMapDataURI + "\n" + sourceURL;
        }
        if (options.sourceMap) {
          return {
            js,
            sourceMap: map2,
            v3SourceMap: JSON.stringify(v3SourceMap, null, 2)
          };
        } else {
          return js;
        }
      });
      exports.tokens = withPrettyErrors(function(code, options) {
        return lexer.tokenize(code, options);
      });
      exports.nodes = withPrettyErrors(function(source, options) {
        if (typeof source === "string") {
          return parser.parse(lexer.tokenize(source, options));
        } else {
          return parser.parse(source);
        }
      });
      exports.run = function(code, options) {
        var answer, dir, mainModule, ref2;
        if (options == null) {
          options = {};
        }
        mainModule = require.main;
        mainModule.filename = process.argv[1] = options.filename ? fs.realpathSync(options.filename) : "<anonymous>";
        mainModule.moduleCache && (mainModule.moduleCache = {});
        dir = options.filename != null ? path2.dirname(fs.realpathSync(options.filename)) : fs.realpathSync(".");
        mainModule.paths = require("module")._nodeModulePaths(dir);
        if (!helpers.isCoffee(mainModule.filename) || require.extensions) {
          answer = compile(code, options);
          code = (ref2 = answer.js) != null ? ref2 : answer;
        }
        return mainModule._compile(code, mainModule.filename);
      };
      exports["eval"] = function(code, options) {
        var Module, _module, _require, createContext, i2, isContext, js, k, len2, o, r, ref2, ref1, ref22, ref3, sandbox, v;
        if (options == null) {
          options = {};
        }
        if (!(code = code.trim())) {
          return;
        }
        createContext = (ref2 = vm.Script.createContext) != null ? ref2 : vm.createContext;
        isContext = (ref1 = vm.isContext) != null ? ref1 : function(ctx) {
          return options.sandbox instanceof createContext().constructor;
        };
        if (createContext) {
          if (options.sandbox != null) {
            if (isContext(options.sandbox)) {
              sandbox = options.sandbox;
            } else {
              sandbox = createContext();
              ref22 = options.sandbox;
              for (k in ref22) {
                if (!hasProp.call(ref22, k))
                  continue;
                v = ref22[k];
                sandbox[k] = v;
              }
            }
            sandbox.global = sandbox.root = sandbox.GLOBAL = sandbox;
          } else {
            sandbox = global;
          }
          sandbox.__filename = options.filename || "eval";
          sandbox.__dirname = path2.dirname(sandbox.__filename);
          if (!(sandbox !== global || sandbox.module || sandbox.require)) {
            Module = require("module");
            sandbox.module = _module = new Module(options.modulename || "eval");
            sandbox.require = _require = function(path3) {
              return Module._load(path3, _module, true);
            };
            _module.filename = sandbox.__filename;
            ref3 = Object.getOwnPropertyNames(require);
            for (i2 = 0, len2 = ref3.length; i2 < len2; i2++) {
              r = ref3[i2];
              if (r !== "paths" && r !== "arguments" && r !== "caller") {
                _require[r] = require[r];
              }
            }
            _require.paths = _module.paths = Module._nodeModulePaths(process.cwd());
            _require.resolve = function(request) {
              return Module._resolveFilename(request, _module);
            };
          }
        }
        o = {};
        for (k in options) {
          if (!hasProp.call(options, k))
            continue;
          v = options[k];
          o[k] = v;
        }
        o.bare = true;
        js = compile(code, o);
        if (sandbox === global) {
          return vm.runInThisContext(js);
        } else {
          return vm.runInContext(js, sandbox);
        }
      };
      exports.register = function() {
        return require_register();
      };
      if (require.extensions) {
        ref = this.FILE_EXTENSIONS;
        fn1 = function(ext2) {
          var base;
          return (base = require.extensions)[ext2] != null ? base[ext2] : base[ext2] = function() {
            throw new Error("Use CoffeeScript.register() or require the coffee-script/register module to require " + ext2 + " files.");
          };
        };
        for (i = 0, len = ref.length; i < len; i++) {
          ext = ref[i];
          fn1(ext);
        }
      }
      exports._compileFile = function(filename, sourceMap, inlineMap) {
        var answer, err, raw, stripped;
        if (sourceMap == null) {
          sourceMap = false;
        }
        if (inlineMap == null) {
          inlineMap = false;
        }
        raw = fs.readFileSync(filename, "utf8");
        stripped = raw.charCodeAt(0) === 65279 ? raw.substring(1) : raw;
        try {
          answer = compile(stripped, {
            filename,
            sourceMap,
            inlineMap,
            sourceFiles: [filename],
            literate: helpers.isLiterate(filename)
          });
        } catch (error) {
          err = error;
          throw helpers.updateSyntaxError(err, stripped, filename);
        }
        return answer;
      };
      lexer = new Lexer();
      parser.lexer = {
        lex: function() {
          var tag, token;
          token = parser.tokens[this.pos++];
          if (token) {
            tag = token[0], this.yytext = token[1], this.yylloc = token[2];
            parser.errorToken = token.origin || token;
            this.yylineno = this.yylloc.first_line;
          } else {
            tag = "";
          }
          return tag;
        },
        setInput: function(tokens) {
          parser.tokens = tokens;
          return this.pos = 0;
        },
        upcomingInput: function() {
          return "";
        }
      };
      parser.yy = require_nodes();
      parser.yy.parseError = function(message, arg) {
        var errorLoc, errorTag, errorText, errorToken, token, tokens;
        token = arg.token;
        errorToken = parser.errorToken, tokens = parser.tokens;
        errorTag = errorToken[0], errorText = errorToken[1], errorLoc = errorToken[2];
        errorText = function() {
          switch (false) {
            case errorToken !== tokens[tokens.length - 1]:
              return "end of input";
            case (errorTag !== "INDENT" && errorTag !== "OUTDENT"):
              return "indentation";
            case (errorTag !== "IDENTIFIER" && errorTag !== "NUMBER" && errorTag !== "INFINITY" && errorTag !== "STRING" && errorTag !== "STRING_START" && errorTag !== "REGEX" && errorTag !== "REGEX_START"):
              return errorTag.replace(/_START$/, "").toLowerCase();
            default:
              return helpers.nameWhitespaceCharacter(errorText);
          }
        }();
        return helpers.throwSyntaxError("unexpected " + errorText, errorLoc);
      };
      formatSourcePosition = function(frame, getSourceMapping) {
        var as, column, fileLocation, filename, functionName, isConstructor, isMethodCall, line, methodName, source, tp, typeName;
        filename = void 0;
        fileLocation = "";
        if (frame.isNative()) {
          fileLocation = "native";
        } else {
          if (frame.isEval()) {
            filename = frame.getScriptNameOrSourceURL();
            if (!filename) {
              fileLocation = frame.getEvalOrigin() + ", ";
            }
          } else {
            filename = frame.getFileName();
          }
          filename || (filename = "<anonymous>");
          line = frame.getLineNumber();
          column = frame.getColumnNumber();
          source = getSourceMapping(filename, line, column);
          fileLocation = source ? filename + ":" + source[0] + ":" + source[1] : filename + ":" + line + ":" + column;
        }
        functionName = frame.getFunctionName();
        isConstructor = frame.isConstructor();
        isMethodCall = !(frame.isToplevel() || isConstructor);
        if (isMethodCall) {
          methodName = frame.getMethodName();
          typeName = frame.getTypeName();
          if (functionName) {
            tp = as = "";
            if (typeName && functionName.indexOf(typeName)) {
              tp = typeName + ".";
            }
            if (methodName && functionName.indexOf("." + methodName) !== functionName.length - methodName.length - 1) {
              as = " [as " + methodName + "]";
            }
            return "" + tp + functionName + as + " (" + fileLocation + ")";
          } else {
            return typeName + "." + (methodName || "<anonymous>") + " (" + fileLocation + ")";
          }
        } else if (isConstructor) {
          return "new " + (functionName || "<anonymous>") + " (" + fileLocation + ")";
        } else if (functionName) {
          return functionName + " (" + fileLocation + ")";
        } else {
          return fileLocation;
        }
      };
      getSourceMap = function(filename) {
        var answer;
        if (sourceMaps[filename] != null) {
          return sourceMaps[filename];
        } else if (sourceMaps["<anonymous>"] != null) {
          return sourceMaps["<anonymous>"];
        } else if (sources[filename] != null) {
          answer = compile(sources[filename], {
            filename,
            sourceMap: true,
            literate: helpers.isLiterate(filename)
          });
          return answer.sourceMap;
        } else {
          return null;
        }
      };
      Error.prepareStackTrace = function(err, stack) {
        var frame, frames, getSourceMapping;
        getSourceMapping = function(filename, line, column) {
          var answer, sourceMap;
          sourceMap = getSourceMap(filename);
          if (sourceMap != null) {
            answer = sourceMap.sourceLocation([line - 1, column - 1]);
          }
          if (answer != null) {
            return [answer[0] + 1, answer[1] + 1];
          } else {
            return null;
          }
        };
        frames = function() {
          var j, len1, results;
          results = [];
          for (j = 0, len1 = stack.length; j < len1; j++) {
            frame = stack[j];
            if (frame.getFunction() === exports.run) {
              break;
            }
            results.push("    at " + formatSourcePosition(frame, getSourceMapping));
          }
          return results;
        }();
        return err.toString() + "\n" + frames.join("\n") + "\n";
      };
    }).call(exports);
  }
});

// ../node_modules/cson-parser/lib/parse.js
var require_parse = __commonJS({
  "../node_modules/cson-parser/lib/parse.js"(exports, module2) {
    "use strict";
    var runInThisContext = require("vm").runInThisContext;
    var nodes = require_coffee_script().nodes;
    function defaultReviver(key, value) {
      return value;
    }
    function getFunctionNameIE(fn) {
      return fn.toString().match(/^function\s*([^( ]+)/)[1];
    }
    function nodeTypeString(csNode) {
      var ref = csNode.constructor.name;
      return ref != null ? ref : getFunctionNameIE(csNode.constructor);
    }
    function syntaxErrorMessage(csNode, msg) {
      var ref = csNode.locationData;
      var lineIdx = ref.first_line;
      var columnIdx = ref.first_column;
      var line = "";
      var column = "";
      if (lineIdx != null) {
        line = lineIdx + 1;
      }
      if (columnIdx != null) {
        column = columnIdx + 1;
      }
      return "Syntax error on line " + line + ", column " + column + ": " + msg;
    }
    function parseStringLiteral(literal) {
      return runInThisContext(literal);
    }
    function parseRegExpLiteral(literal) {
      return runInThisContext(literal);
    }
    function transformKey(csNode) {
      var type = nodeTypeString(csNode);
      if (type !== "Value") {
        throw new SyntaxError(syntaxErrorMessage(csNode, type + " used as key"));
      }
      var value = csNode.base.value;
      switch (value.charAt(0)) {
        case "'":
        case '"':
          return parseStringLiteral(value);
        default:
          return value;
      }
    }
    var nodeTransforms = {
      Block: function Block(node, transformNode) {
        var expressions;
        expressions = node.expressions;
        if (!expressions || expressions.length !== 1) {
          throw new SyntaxError(syntaxErrorMessage(node, "One top level value expected"));
        }
        return transformNode(expressions[0]);
      },
      Value: function Value(node, transformNode) {
        return transformNode(node.base);
      },
      Bool: function Bool(node) {
        return node.val === "true";
      },
      BooleanLiteral: function BooleanLiteral(node) {
        return node.value === "true";
      },
      Null: function Null() {
        return null;
      },
      NullLiteral: function NullLiteral() {
        return null;
      },
      Literal: function Literal(node) {
        var value = node.value;
        try {
          switch (value.charAt(0)) {
            case "'":
            case '"':
              return parseStringLiteral(value);
            case "/":
              return parseRegExpLiteral(value);
            default:
              return JSON.parse(value);
          }
        } catch (error) {
          throw new SyntaxError(syntaxErrorMessage(node, error.message));
        }
      },
      NumberLiteral: function NumberLiteral(node) {
        return Number(node.value);
      },
      StringLiteral: function StringLiteral(node) {
        return parseStringLiteral(node.value);
      },
      RegexLiteral: function RegexLiteral(node) {
        return parseRegExpLiteral(node.value);
      },
      Arr: function Arr(node, transformNode) {
        return node.objects.map(transformNode);
      },
      Obj: function Obj(node, transformNode, reviver) {
        return node.properties.reduce(function addProperty(outObject, property2) {
          var variable = property2.variable;
          var value = property2.value;
          if (!variable) {
            return outObject;
          }
          var keyName = transformKey(variable);
          value = transformNode(value);
          outObject[keyName] = reviver.call(outObject, keyName, value);
          return outObject;
        }, {});
      },
      Op: function Op(node, transformNode) {
        if (node.second != null) {
          var left = transformNode(node.first);
          var right = transformNode(node.second);
          switch (node.operator) {
            case "-":
              return left - right;
            case "+":
              return left + right;
            case "*":
              return left * right;
            case "/":
              return left / right;
            case "%":
              return left % right;
            case "&":
              return left & right;
            case "|":
              return left | right;
            case "^":
              return left ^ right;
            case "<<":
              return left << right;
            case ">>>":
              return left >>> right;
            case ">>":
              return left >> right;
            default:
              throw new SyntaxError(syntaxErrorMessage(
                node,
                "Unknown binary operator " + node.operator
              ));
          }
        } else {
          switch (node.operator) {
            case "-":
              return -transformNode(node.first);
            case "~":
              return ~transformNode(node.first);
            default:
              throw new SyntaxError(syntaxErrorMessage(
                node,
                "Unknown unary operator " + node.operator
              ));
          }
        }
      },
      Parens: function Parens(node, transformNode) {
        var expressions;
        expressions = node.body.expressions;
        if (!expressions || expressions.length !== 1) {
          throw new SyntaxError(syntaxErrorMessage(
            node,
            "Parenthesis may only contain one expression"
          ));
        }
        return transformNode(expressions[0]);
      }
    };
    function parse(source, reviver) {
      if (reviver == null) {
        reviver = defaultReviver;
      }
      function transformNode(csNode) {
        var type = nodeTypeString(csNode);
        var transform = nodeTransforms[type];
        if (!transform) {
          throw new SyntaxError(syntaxErrorMessage(csNode, "Unexpected " + type));
        }
        return transform(csNode, transformNode, reviver);
      }
      if (typeof reviver !== "function") {
        throw new TypeError("reviver has to be a function");
      }
      var coffeeAst = nodes(source.toString("utf8"));
      var parsed = transformNode(coffeeAst);
      if (reviver === defaultReviver) {
        return parsed;
      }
      var contextObj = {};
      contextObj[""] = parsed;
      return reviver.call(contextObj, "", parsed);
    }
    module2.exports = parse;
  }
});

// ../node_modules/cson-parser/lib/cson-parser.js
var require_cson_parser = __commonJS({
  "../node_modules/cson-parser/lib/cson-parser.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    module2.exports = {
      stringify,
      parse
    };
  }
});

// ../node_modules/season/lib/cson.js
var require_cson = __commonJS({
  "../node_modules/season/lib/cson.js"(exports, module2) {
    (function() {
      var CSON, crypto, csonCache, detectDuplicateKeys, fs, getCachePath, isAllCommentsAndWhitespace, parseCacheContents, parseContents, parseContentsSync, parseObject, path2, stats, writeCacheFile, writeCacheFileSync;
      crypto = require("crypto");
      path2 = require("path");
      fs = require_fs_plus();
      CSON = null;
      csonCache = null;
      stats = {
        hits: 0,
        misses: 0
      };
      getCachePath = function(cson) {
        var digest;
        digest = crypto.createHash("sha1").update(cson, "utf8").digest("hex");
        return path2.join(csonCache, "" + digest + ".json");
      };
      writeCacheFileSync = function(cachePath, object2) {
        try {
          return fs.writeFileSync(cachePath, JSON.stringify(object2));
        } catch (_error) {
        }
      };
      writeCacheFile = function(cachePath, object2) {
        return fs.writeFile(cachePath, JSON.stringify(object2), function() {
        });
      };
      parseObject = function(objectPath, contents, options) {
        var error, parsed;
        if (path2.extname(objectPath) === ".cson") {
          if (CSON == null) {
            CSON = require_cson_parser();
          }
          try {
            parsed = CSON.parse(contents, (options != null ? options.allowDuplicateKeys : void 0) === false ? detectDuplicateKeys : void 0);
            stats.misses++;
            return parsed;
          } catch (_error) {
            error = _error;
            if (isAllCommentsAndWhitespace(contents)) {
              return null;
            } else {
              throw error;
            }
          }
        } else {
          return JSON.parse(contents);
        }
      };
      parseCacheContents = function(contents) {
        var parsed;
        parsed = JSON.parse(contents);
        stats.hits++;
        return parsed;
      };
      parseContentsSync = function(objectPath, cachePath, contents, options) {
        var object2, parseError;
        try {
          object2 = parseObject(objectPath, contents, options);
        } catch (_error) {
          parseError = _error;
          if (parseError.path == null) {
            parseError.path = objectPath;
          }
          if (parseError.filename == null) {
            parseError.filename = objectPath;
          }
          throw parseError;
        }
        if (cachePath) {
          writeCacheFileSync(cachePath, object2);
        }
        return object2;
      };
      isAllCommentsAndWhitespace = function(contents) {
        var line, lines;
        lines = contents.split("\n");
        while (lines.length > 0) {
          line = lines[0].trim();
          if (line.length === 0 || line[0] === "#") {
            lines.shift();
          } else {
            return false;
          }
        }
        return true;
      };
      parseContents = function(objectPath, cachePath, contents, options, callback) {
        var object2, parseError;
        try {
          object2 = parseObject(objectPath, contents, options);
        } catch (_error) {
          parseError = _error;
          parseError.path = objectPath;
          if (parseError.filename == null) {
            parseError.filename = objectPath;
          }
          parseError.message = "" + objectPath + ": " + parseError.message;
          if (typeof callback === "function") {
            callback(parseError);
          }
          return;
        }
        if (cachePath) {
          writeCacheFile(cachePath, object2);
        }
        if (typeof callback === "function") {
          callback(null, object2);
        }
      };
      module2.exports = {
        setCacheDir: function(cacheDirectory) {
          return csonCache = cacheDirectory;
        },
        isObjectPath: function(objectPath) {
          var extension;
          if (!objectPath) {
            return false;
          }
          extension = path2.extname(objectPath);
          return extension === ".cson" || extension === ".json";
        },
        resolve: function(objectPath) {
          var csonPath, jsonPath;
          if (objectPath == null) {
            objectPath = "";
          }
          if (!objectPath) {
            return null;
          }
          if (this.isObjectPath(objectPath) && fs.isFileSync(objectPath)) {
            return objectPath;
          }
          jsonPath = "" + objectPath + ".json";
          if (fs.isFileSync(jsonPath)) {
            return jsonPath;
          }
          csonPath = "" + objectPath + ".cson";
          if (fs.isFileSync(csonPath)) {
            return csonPath;
          }
          return null;
        },
        readFileSync: function(objectPath, options) {
          var cachePath, contents, fsOptions, parseOptions;
          if (options == null) {
            options = {};
          }
          parseOptions = {
            allowDuplicateKeys: options.allowDuplicateKeys
          };
          delete options.allowDuplicateKeys;
          fsOptions = Object.assign({
            encoding: "utf8"
          }, options);
          contents = fs.readFileSync(objectPath, fsOptions);
          if (contents.trim().length === 0) {
            return null;
          }
          if (csonCache && path2.extname(objectPath) === ".cson") {
            cachePath = getCachePath(contents);
            if (fs.isFileSync(cachePath)) {
              try {
                return parseCacheContents(fs.readFileSync(cachePath, "utf8"));
              } catch (_error) {
              }
            }
          }
          return parseContentsSync(objectPath, cachePath, contents, parseOptions);
        },
        readFile: function(objectPath, options, callback) {
          var fsOptions, parseOptions;
          if (arguments.length < 3) {
            callback = options;
            options = {};
          }
          parseOptions = {
            allowDuplicateKeys: options.allowDuplicateKeys
          };
          delete options.allowDuplicateKeys;
          fsOptions = Object.assign({
            encoding: "utf8"
          }, options);
          return fs.readFile(objectPath, fsOptions, function(_this) {
            return function(error, contents) {
              var cachePath;
              if (error != null) {
                return typeof callback === "function" ? callback(error) : void 0;
              }
              if (contents.trim().length === 0) {
                return typeof callback === "function" ? callback(null, null) : void 0;
              }
              if (csonCache && path2.extname(objectPath) === ".cson") {
                cachePath = getCachePath(contents);
                return fs.stat(cachePath, function(error2, stat) {
                  if (stat != null ? stat.isFile() : void 0) {
                    return fs.readFile(cachePath, "utf8", function(error3, cached) {
                      var parsed;
                      try {
                        parsed = parseCacheContents(cached);
                      } catch (_error) {
                        error3 = _error;
                        try {
                          parseContents(objectPath, cachePath, contents, parseOptions, callback);
                        } catch (_error2) {
                        }
                        return;
                      }
                      return typeof callback === "function" ? callback(null, parsed) : void 0;
                    });
                  } else {
                    return parseContents(objectPath, cachePath, contents, parseOptions, callback);
                  }
                });
              } else {
                return parseContents(objectPath, null, contents, parseOptions, callback);
              }
            };
          }(this));
        },
        writeFile: function(objectPath, object2, options, callback) {
          var contents, error;
          if (arguments.length < 4) {
            callback = options;
            options = {};
          }
          if (callback == null) {
            callback = function() {
            };
          }
          try {
            contents = this.stringifyPath(objectPath, object2);
          } catch (_error) {
            error = _error;
            callback(error);
            return;
          }
          return fs.writeFile(objectPath, "" + contents + "\n", options, callback);
        },
        writeFileSync: function(objectPath, object2, options) {
          if (options == null) {
            options = void 0;
          }
          return fs.writeFileSync(objectPath, "" + this.stringifyPath(objectPath, object2) + "\n", options);
        },
        stringifyPath: function(objectPath, object2, visitor, space) {
          if (path2.extname(objectPath) === ".cson") {
            return this.stringify(object2, visitor, space);
          } else {
            return JSON.stringify(object2, void 0, 2);
          }
        },
        stringify: function(object2, visitor, space) {
          if (space == null) {
            space = 2;
          }
          if (CSON == null) {
            CSON = require_cson_parser();
          }
          return CSON.stringify(object2, visitor, space);
        },
        parse: function(str, reviver) {
          if (CSON == null) {
            CSON = require_cson_parser();
          }
          return CSON.parse(str, reviver);
        },
        getCacheHits: function() {
          return stats.hits;
        },
        getCacheMisses: function() {
          return stats.misses;
        },
        resetCacheStats: function() {
          return stats = {
            hits: 0,
            misses: 0
          };
        }
      };
      detectDuplicateKeys = function(key, value) {
        if (this.hasOwnProperty(key) && this[key] !== value) {
          throw new Error("Duplicate key '" + key + "'");
        } else {
          return value;
        }
      };
    }).call(exports);
  }
});

// extension.js
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(extension_exports);
var vscode2 = __toESM(require("vscode"));

// src/I18nToolboxProvider.ts
var vscode = __toESM(require("vscode"));
var import_path = __toESM(require("path"));
var import_season = __toESM(require_cson());

// src/utils.js
var addPropsToFile = function(obj, subKeys, val) {
  if (typeof subKeys == "string")
    subKeys = subKeys.split(".");
  obj[subKeys[0]] = obj[subKeys[0]] || {};
  var tmpObj = obj[subKeys[0]];
  if (subKeys.length > 1) {
    subKeys.shift();
    addPropsToFile(tmpObj, subKeys, val);
  } else
    obj[subKeys[0]] = val;
  return obj;
};

// src/I18nToolboxProvider.ts
var PROJECT_NAME = "/verbling-mobile-old/";
var TRANSLATION_FILE = "/source-frontend-webapp.json";
var I18nToolboxProvider = class {
  constructor(_extensionUri) {
    this._extensionUri = _extensionUri;
  }
  resolveWebviewView(webviewView, context, _token) {
    this._view = webviewView;
    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,
      localResourceRoots: [
        this._extensionUri
      ]
    };
    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    webviewView.webview.onDidReceiveMessage((data) => {
      console.log({ data });
      switch (data.type) {
        case "upload-branch": {
          if (!data.branch) {
            vscode.window.showErrorMessage(`Branch can't be empty`);
            break;
          }
          const cp = require("child_process");
          let currentFilePath = import_path.default.dirname(vscode.window.activeTextEditor.document.uri.path);
          let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
          cp.exec(`cd ${projectDir} && crowdin upload sources -b ${data.branch}`, (err, stdout, stderr) => {
            if (err) {
              console.log("error: " + err);
            } else {
              vscode.window.showInformationMessage(`Uploaded to branch!`);
            }
          });
          break;
        }
        case "download-branch": {
          if (!data.branch) {
            vscode.window.showErrorMessage(`Branch can't be empty`);
            break;
          }
          const cp = require("child_process");
          let currentFilePath = import_path.default.dirname(vscode.window.activeTextEditor.document.uri.path);
          let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
          cp.exec(`cd ${projectDir} && crowdin download sources -b ${data.branch}`, (err, stdout, stderr) => {
            if (err) {
              console.log("error: " + err);
            } else {
              vscode.window.showInformationMessage(`Downloaded translations from branch!`);
            }
          });
          break;
        }
        case "get-branch": {
          const cp = require("child_process");
          let currentFilePath = import_path.default.dirname(vscode.window.activeTextEditor.document.uri.path);
          let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
          cp.exec(`cd ${projectDir} && git branch --show-current`, (err, stdout, stderr) => {
            if (err) {
              console.log("error: " + err);
            } else {
              console.log("stdout: " + stdout);
              const branch = stdout.replace("/", "-");
              this._view.webview.postMessage({ type: "set-branch", branch });
            }
          });
          break;
        }
        case "focus": {
          this._view.webview.postMessage({ type: "focus" });
          break;
        }
        case "addKey": {
          let currentFilePath = import_path.default.dirname(vscode.window.activeTextEditor.document.uri.path);
          let translationsDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME + "app/src/statics/translations";
          const editor = vscode.window.activeTextEditor;
          let textWeWant;
          const selection = editor.selection;
          if (selection && !selection.isEmpty) {
            const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
            textWeWant = editor.document.getText(selectionRange).replace(/\s+/g, " ").trim();
          }
          const keyWeWant = data.value;
          const fileToRead = translationsDir + TRANSLATION_FILE;
          if (!import_season.default.resolve(fileToRead)) {
            vscode.window.showErrorMessage(`Can't find source file!`);
          }
          import_season.default.readFile(fileToRead, (err, file) => {
            file = addPropsToFile(file, keyWeWant, textWeWant);
            import_season.default.writeFile(fileToRead, file, function(err2) {
              if (err2)
                console.error(err2);
              vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(`{t('${keyWeWant}')}`));
            });
          });
          vscode.window.showInformationMessage(`Key ${data.value} Added!`);
        }
      }
    });
  }
  saveKey() {
    if (this._view) {
      this._view.show?.(true);
      this._view.webview.postMessage({ type: "saveKey" });
    }
  }
  addTranslation() {
    const cp = require("child_process");
    let currentFilePath = import_path.default.dirname(vscode.window.activeTextEditor.document.uri.path);
    let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
    cp.exec(`cd ${projectDir} && git branch --show-current`, (err, stdout, stderr) => {
      if (err) {
        console.log("error: " + err);
      } else {
        console.log("stdout: " + stdout);
        const branch = stdout.replace("/", "-");
        this._view.webview.postMessage({ type: "get-branch", branch });
      }
    });
  }
  focus() {
    if (this._view) {
      this._view.webview.postMessage({ type: "focus" });
    }
  }
  _getHtmlForWebview(webview) {
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "main.js"));
    const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css"));
    const nonce = getNonce();
    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleVSCodeUri}" rel="stylesheet">
			</head>
			<body>
				<div class="busuu">
					<h1>Busuu's i18n Toolbox \u{1F6E0}\uFE0F</h1>
				</div>
                <label class="json-key-label">Assign key to selection</label>
				<div class="flex-row">
					<input id="json-key" class="json-key-text" type="text">
					<button class="add-key-button">Add Key</button>
				</div>
                <label class="json-key-label">Branch Name</label>
                <div class="flex-column">
					<div class="flex-row">
						<input id="branch-name" class="json-key-text" type="text">
						<button id="get-branch-button" class="add-key-button">Get Branch</button>
					</div>
                </div>
				<div class="flex-column" style="position: fixed; bottom: 0; left:0;">
					<label class="json-key-label">More Actions</label>
                    <div class="flex-row">
                        <button class="add-key-button" id="upload-to-branch-button">Upload To Branch</button>
                        <button class="add-key-button" id="download-from-branch-button">Download From Branch</button>
                    </div>
				</div>
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
  }
};
I18nToolboxProvider.viewType = "i18nToolboxView";
function getNonce() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// extension.js
function activate(context) {
  const provider = new I18nToolboxProvider(context.extensionUri);
  context.subscriptions.push(
    vscode2.window.registerWebviewViewProvider(I18nToolboxProvider.viewType, provider)
  );
  context.subscriptions.push(
    vscode2.commands.registerCommand("busuu-i18n-toolbox.saveKey", () => {
      provider.saveKey();
    })
  );
  const helloCommand = vscode2.commands.registerCommand("busuu-i18n-toolbox.addTranslation", () => {
    provider.addTranslation();
    provider.focus();
  });
  context.subscriptions.push(helloCommand);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
/*! Bundled license information:

async/lib/async.js:
  (*!
   * async
   * https://github.com/caolan/async
   *
   * Copyright 2010-2014 Caolan McMahon
   * Released under the MIT license
   *)
*/
//# sourceMappingURL=extension.js.map
