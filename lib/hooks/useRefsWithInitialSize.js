"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefsWithInitialSize = void 0;
var react_1 = __importStar(require("react"));
var createRefWithInitialSize = function (direction, element) {
    var boundingClientRect = element.getBoundingClientRect();
    if (direction == 'horizontal') {
        return {
            element: element,
            initialSize: boundingClientRect.width,
        };
    }
    else {
        return {
            element: element,
            initialSize: boundingClientRect.height
        };
    }
};
/**
 * Creates a ref that save the `dom element` and the `initial size` for a list of elements. *
 * @param direction ["horizontal"|"vertical"] Direction to save initial size. `horizontal` uses `width` | `vertical` uses `height`.
 */
exports.useRefsWithInitialSize = function (direction) {
    var refs = react_1.useRef(null);
    var getRef = function (index) {
        var current = refs.current;
        return current ? current[index] : null;
    };
    var setRef = function (index, element) {
        if (!element)
            return;
        var current = refs.current;
        refs.current = current ? __spreadArrays(current) : [];
        refs.current[index] = createRefWithInitialSize(direction, element);
    };
    var resetRef = function (index) {
        var current = refs.current;
        if (current && current[index] && current[index].element) {
            setRef(index, current[index].element);
        }
    };
    var childrenWithRef = function (children) {
        return react_1.Children.map(children, function (child, index) {
            var newProps = {};
            newProps.onRef = function (ref) { return setRef(index, ref); };
            return react_1.default.cloneElement(child, newProps);
        });
    };
    return {
        getRef: getRef,
        setRef: setRef,
        resetRef: resetRef,
        childrenWithRef: childrenWithRef,
    };
};
