'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var reactNavigation = require('react-navigation');
var RNSimInfo = _interopDefault(require('rn-sim-info'));
var libphonenumberJs = require('libphonenumber-js');
var Permissions = _interopDefault(require('react-native-permissions'));
var OpenSettings = _interopDefault(require('react-native-open-settings'));
var DialogAndroid = _interopDefault(require('react-native-dialogs'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var defaultContextValue = {
    focusNext: function () { },
    setInstance: function () { },
};
function createControlGroup() {
    if (__DEV__) {
        console.warn("createForm integrates ScrollView and auto scroll to TextInput. Maybe you want that instead.");
    }
    var _a = React__default.createContext(defaultContextValue), Provider = _a.Provider, Consumer = _a.Consumer;
    var Control_ = /** @class */ (function (_super) {
        __extends(Control_, _super);
        function Control_(props) {
            var _this = _super.call(this, props) || this;
            _this.onSubmitEditing = function (e) {
                _this.props.focusNext(_this.props.tabIndex);
                if (_this.props.onSubmitEditing != null) {
                    _this.props.onSubmitEditing(e);
                }
            };
            _this.textInputRef = React__default.createRef();
            return _this;
        }
        Control_.prototype.componentDidMount = function () {
            this.props.setInstance(this.props.tabIndex, this);
        };
        Control_.prototype.componentWillUnmount = function () {
            this.props.setInstance(this.props.tabIndex, null);
        };
        Control_.prototype.render = function () {
            var children = this.props.children;
            return children({
                ref: this.textInputRef,
                onSubmitEditing: this.onSubmitEditing,
                blurOnSubmit: false,
            });
        };
        return Control_;
    }(React__default.Component));
    var ControlRoot = /** @class */ (function (_super) {
        __extends(ControlRoot, _super);
        function ControlRoot(props) {
            var _this = _super.call(this, props) || this;
            _this.setInstance = function (tabIndex, focusable) {
                _this.instanceMap[tabIndex] = focusable;
            };
            _this.focusNext = function (tabIndex) {
                var e_1, _a;
                var instanceMap = _this.instanceMap;
                var indice = Object.keys(instanceMap)
                    .sort()
                    .map(Number);
                try {
                    for (var indice_1 = __values(indice), indice_1_1 = indice_1.next(); !indice_1_1.done; indice_1_1 = indice_1.next()) {
                        var i = indice_1_1.value;
                        if (i > tabIndex) {
                            var instance = instanceMap[i];
                            if (instance != null &&
                                instance.textInputRef != null &&
                                instance.textInputRef.current != null) {
                                instance.textInputRef.current.focus();
                                return;
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (indice_1_1 && !indice_1_1.done && (_a = indice_1.return)) _a.call(indice_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                reactNative.Keyboard.dismiss();
            };
            _this.state = {
                setInstance: _this.setInstance,
                focusNext: _this.focusNext,
            };
            _this.instanceMap = {};
            return _this;
        }
        ControlRoot.prototype.render = function () {
            var children = this.props.children;
            return React__default.createElement(Provider, { value: this.state }, children);
        };
        return ControlRoot;
    }(React__default.Component));
    function Control(props) {
        return (React__default.createElement(Consumer, null, function (context) {
            var setInstance = context.setInstance, focusNext = context.focusNext;
            return (React__default.createElement(Control_, __assign({}, props, { setInstance: setInstance, focusNext: focusNext })));
        }));
    }
    return {
        ControlRoot: ControlRoot,
        Control: Control,
    };
}

var KeyboardAvoidingView = /** @class */ (function (_super) {
    __extends(KeyboardAvoidingView, _super);
    function KeyboardAvoidingView(props) {
        var _this = _super.call(this, props) || this;
        _this.onKeyboardShow = function (e) {
            if (e != null && e.endCoordinates != null) {
                _this.setState({
                    keyboardHeight: e.endCoordinates.height,
                });
            }
        };
        _this.onKeyboardHide = function () {
            _this.setState({
                keyboardHeight: 0,
            });
        };
        _this.subscriptions = [];
        _this.state = {
            keyboardHeight: 0,
        };
        return _this;
    }
    KeyboardAvoidingView.prototype.componentDidMount = function () {
        if (reactNative.Platform.OS === "ios") {
            this.subscriptions = [
                reactNative.Keyboard.addListener("keyboardWillHide", this.onKeyboardHide),
                reactNative.Keyboard.addListener("keyboardWillShow", this.onKeyboardShow),
            ];
        }
        if (reactNative.Platform.OS === "android") {
            this.subscriptions = [
                reactNative.Keyboard.addListener("keyboardDidHide", this.onKeyboardHide),
                reactNative.Keyboard.addListener("keyboardDidShow", this.onKeyboardShow),
            ];
        }
    };
    KeyboardAvoidingView.prototype.componentWillUnmount = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.remove();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.subscriptions = [];
    };
    KeyboardAvoidingView.prototype.render = function () {
        var _a = this.props, style = _a.style, androidSoftInputMode = _a.androidSoftInputMode, behavior = _a.behavior, useSafeAreaView = _a.useSafeAreaView, rest = __rest(_a, ["style", "androidSoftInputMode", "behavior", "useSafeAreaView"]);
        var keyboardHeight = this.state.keyboardHeight;
        var isShowingKeyboard = this.state.keyboardHeight > 0;
        var marginBottom = 0;
        if (reactNative.Platform.OS === "ios" ||
            (reactNative.Platform.OS === "android" && androidSoftInputMode !== "adjustResize")) {
            marginBottom = keyboardHeight;
        }
        if (useSafeAreaView) {
            return (React__default.createElement(reactNavigation.SafeAreaView, __assign({}, rest, { style: [this.props.style, { marginBottom: marginBottom }], forceInset: {
                    bottom: isShowingKeyboard ? "never" : "always",
                } })));
        }
        return React__default.createElement(reactNative.View, __assign({}, rest, { style: [style, { marginBottom: marginBottom }] }));
    };
    KeyboardAvoidingView.defaultProps = {
        useSafeAreaView: false,
        behavior: "margin",
        androidSoftInputMode: "adjustResize",
    };
    return KeyboardAvoidingView;
}(React__default.PureComponent));

var Text = React__default.forwardRef(function Text(props, ref) {
    return React__default.createElement(reactNative.Text, __assign({ allowFontScaling: false }, props, { ref: ref }));
});

var defaultStyles = reactNative.StyleSheet.create({
    extraText: {
        alignSelf: "flex-start",
    },
    nonvisible: {
        opacity: 0,
    },
});
function ExtraText(props) {
    var error = props.error, errorStyle = props.errorStyle, option = props.option, optionStyle = props.optionStyle;
    if (error) {
        return React__default.createElement(Text, { style: [defaultStyles.extraText, errorStyle] }, error);
    }
    else if (option) {
        return React__default.createElement(Text, { style: [defaultStyles.extraText, optionStyle] }, option);
    }
    else if (error !== undefined) {
        // make sure layout won't unstable, whether error message show or not.
        return (React__default.createElement(Text, { style: [defaultStyles.extraText, errorStyle, defaultStyles.nonvisible] }, "nonvisible"));
    }
    else {
        return null;
    }
}

var defaultStyles$1 = reactNative.StyleSheet.create({
    // reset default padding of android device.
    textInput: {
        padding: 0,
        margin: 0,
    },
});
var TextInput = React__default.forwardRef(function TextInput(props, ref) {
    var style = props.style, containerStyle = props.containerStyle, error = props.error, errorStyle = props.errorStyle, option = props.option, optionStyle = props.optionStyle, rest = __rest(props, ["style", "containerStyle", "error", "errorStyle", "option", "optionStyle"]);
    var flattedErrorStyle = reactNative.StyleSheet.flatten(errorStyle);
    var errorColor = flattedErrorStyle && flattedErrorStyle.color;
    return (React__default.createElement(reactNative.View, { style: containerStyle },
        React__default.createElement(reactNative.TextInput, __assign({}, rest, { ref: ref, style: [
                defaultStyles$1.textInput,
                style,
                error && errorColor ? { borderBottomColor: errorColor } : null,
            ], underlineColorAndroid: "transparent" })),
        React__default.createElement(ExtraText, { error: error, errorStyle: errorStyle, option: option, optionStyle: optionStyle })));
});

var defaultCountryCodes = [
    {
        isoCountryCode: "AD",
        callingCode: "376",
        flag: "🇦🇩",
        name: "Andorra",
    },
    {
        isoCountryCode: "AE",
        callingCode: "971",
        flag: "🇦🇪",
        name: "United Arab Emirates",
    },
    {
        isoCountryCode: "AF",
        callingCode: "93",
        flag: "🇦🇫",
        name: "Afghanistan",
    },
    {
        isoCountryCode: "AG",
        callingCode: "1",
        flag: "🇦🇬",
        name: "Antigua and Barbuda",
    },
    {
        isoCountryCode: "AI",
        callingCode: "1",
        flag: "🇦🇮",
        name: "Anguilla",
    },
    {
        isoCountryCode: "AL",
        callingCode: "355",
        flag: "🇦🇱",
        name: "Albania",
    },
    {
        isoCountryCode: "AM",
        callingCode: "374",
        flag: "🇦🇲",
        name: "Armenia",
    },
    {
        isoCountryCode: "AO",
        callingCode: "244",
        flag: "🇦🇴",
        name: "Angola",
    },
    {
        isoCountryCode: "AQ",
        callingCode: "672",
        flag: "🇦🇶",
        name: "Antarctica",
    },
    {
        isoCountryCode: "AR",
        callingCode: "54",
        flag: "🇦🇷",
        name: "Argentina",
    },
    {
        isoCountryCode: "AS",
        callingCode: "1",
        flag: "🇦🇸",
        name: "American Samoa",
    },
    {
        isoCountryCode: "AT",
        callingCode: "43",
        flag: "🇦🇹",
        name: "Austria",
    },
    {
        isoCountryCode: "AU",
        callingCode: "61",
        flag: "🇦🇺",
        name: "Australia",
    },
    {
        isoCountryCode: "AW",
        callingCode: "297",
        flag: "🇦🇼",
        name: "Aruba",
    },
    {
        isoCountryCode: "AX",
        callingCode: "358",
        flag: "🇦🇽",
        name: "Åland Islands",
    },
    {
        isoCountryCode: "AZ",
        callingCode: "994",
        flag: "🇦🇿",
        name: "Azerbaijan",
    },
    {
        isoCountryCode: "BA",
        callingCode: "387",
        flag: "🇧🇦",
        name: "Bosnia and Herzegovina",
    },
    {
        isoCountryCode: "BB",
        callingCode: "1",
        flag: "🇧🇧",
        name: "Barbados",
    },
    {
        isoCountryCode: "BD",
        callingCode: "880",
        flag: "🇧🇩",
        name: "Bangladesh",
    },
    {
        isoCountryCode: "BE",
        callingCode: "32",
        flag: "🇧🇪",
        name: "Belgium",
    },
    {
        isoCountryCode: "BF",
        callingCode: "226",
        flag: "🇧🇫",
        name: "Burkina Faso",
    },
    {
        isoCountryCode: "BG",
        callingCode: "359",
        flag: "🇧🇬",
        name: "Bulgaria",
    },
    {
        isoCountryCode: "BH",
        callingCode: "973",
        flag: "🇧🇭",
        name: "Bahrain",
    },
    {
        isoCountryCode: "BI",
        callingCode: "257",
        flag: "🇧🇮",
        name: "Burundi",
    },
    {
        isoCountryCode: "BJ",
        callingCode: "229",
        flag: "🇧🇯",
        name: "Benin",
    },
    {
        isoCountryCode: "BL",
        callingCode: "590",
        flag: "🇧🇱",
        name: "Saint Barthélemy",
    },
    {
        isoCountryCode: "BM",
        callingCode: "1",
        flag: "🇧🇲",
        name: "Bermuda",
    },
    {
        isoCountryCode: "BN",
        callingCode: "673",
        flag: "🇧🇳",
        name: "Brunei Darussalam",
    },
    {
        isoCountryCode: "BO",
        callingCode: "591",
        flag: "🇧🇴",
        name: "Bolivia",
    },
    {
        isoCountryCode: "BQ",
        callingCode: "599",
        flag: "🇧🇶",
        name: "Bonaire, Sint Eustatius and Saba",
    },
    {
        isoCountryCode: "BR",
        callingCode: "55",
        flag: "🇧🇷",
        name: "Brazil",
    },
    {
        isoCountryCode: "BS",
        callingCode: "1",
        flag: "🇧🇸",
        name: "Bahamas",
    },
    {
        isoCountryCode: "BT",
        callingCode: "975",
        flag: "🇧🇹",
        name: "Bhutan",
    },
    {
        isoCountryCode: "BW",
        callingCode: "267",
        flag: "🇧🇼",
        name: "Botswana",
    },
    {
        isoCountryCode: "BY",
        callingCode: "375",
        flag: "🇧🇾",
        name: "Belarus",
    },
    {
        isoCountryCode: "BZ",
        callingCode: "501",
        flag: "🇧🇿",
        name: "Belize",
    },
    {
        isoCountryCode: "CA",
        callingCode: "1",
        flag: "🇨🇦",
        name: "Canada",
    },
    {
        isoCountryCode: "CC",
        callingCode: "891",
        flag: "🇨🇨",
        name: "Cocos (Keeling) Islands",
    },
    {
        isoCountryCode: "CD",
        callingCode: "243",
        flag: "🇨🇩",
        name: "Congo",
    },
    {
        isoCountryCode: "CF",
        callingCode: "236",
        flag: "🇨🇫",
        name: "Central African Republic",
    },
    {
        isoCountryCode: "CG",
        callingCode: "242",
        flag: "🇨🇬",
        name: "Congo",
    },
    {
        isoCountryCode: "CH",
        callingCode: "41",
        flag: "🇨🇭",
        name: "Switzerland",
    },
    {
        isoCountryCode: "CI",
        callingCode: "225",
        flag: "🇨🇮",
        name: "Côte D'Ivoire",
    },
    {
        isoCountryCode: "CK",
        callingCode: "682",
        flag: "🇨🇰",
        name: "Cook Islands",
    },
    {
        isoCountryCode: "CL",
        callingCode: "56",
        flag: "🇨🇱",
        name: "Chile",
    },
    {
        isoCountryCode: "CM",
        callingCode: "237",
        flag: "🇨🇲",
        name: "Cameroon",
    },
    {
        isoCountryCode: "CN",
        callingCode: "86",
        flag: "🇨🇳",
        name: "China",
    },
    {
        isoCountryCode: "CO",
        callingCode: "57",
        flag: "🇨🇴",
        name: "Colombia",
    },
    {
        isoCountryCode: "CR",
        callingCode: "506",
        flag: "🇨🇷",
        name: "Costa Rica",
    },
    {
        isoCountryCode: "CU",
        callingCode: "53",
        flag: "🇨🇺",
        name: "Cuba",
    },
    {
        isoCountryCode: "CV",
        callingCode: "238",
        flag: "🇨🇻",
        name: "Cape Verde",
    },
    {
        isoCountryCode: "CW",
        callingCode: "599",
        flag: "🇨🇼",
        name: "Curaçao",
    },
    {
        isoCountryCode: "CX",
        callingCode: "61",
        flag: "🇨🇽",
        name: "Christmas Island",
    },
    {
        isoCountryCode: "CY",
        callingCode: "357",
        flag: "🇨🇾",
        name: "Cyprus",
    },
    {
        isoCountryCode: "CZ",
        callingCode: "420",
        flag: "🇨🇿",
        name: "Czech Republic",
    },
    {
        isoCountryCode: "DE",
        callingCode: "49",
        flag: "🇩🇪",
        name: "Germany",
    },
    {
        isoCountryCode: "DJ",
        callingCode: "253",
        flag: "🇩🇯",
        name: "Djibouti",
    },
    {
        isoCountryCode: "DK",
        callingCode: "45",
        flag: "🇩🇰",
        name: "Denmark",
    },
    {
        isoCountryCode: "DM",
        callingCode: "1",
        flag: "🇩🇲",
        name: "Dominica",
    },
    {
        isoCountryCode: "DO",
        callingCode: "1",
        flag: "🇩🇴",
        name: "Dominican Republic",
    },
    {
        isoCountryCode: "DZ",
        callingCode: "213",
        flag: "🇩🇿",
        name: "Algeria",
    },
    {
        isoCountryCode: "EC",
        callingCode: "593",
        flag: "🇪🇨",
        name: "Ecuador",
    },
    {
        isoCountryCode: "EE",
        callingCode: "372",
        flag: "🇪🇪",
        name: "Estonia",
    },
    {
        isoCountryCode: "EG",
        callingCode: "20",
        flag: "🇪🇬",
        name: "Egypt",
    },
    {
        isoCountryCode: "EH",
        callingCode: "212",
        flag: "🇪🇭",
        name: "Western Sahara",
    },
    {
        isoCountryCode: "ER",
        callingCode: "291",
        flag: "🇪🇷",
        name: "Eritrea",
    },
    {
        isoCountryCode: "ES",
        callingCode: "34",
        flag: "🇪🇸",
        name: "Spain",
    },
    {
        isoCountryCode: "ET",
        callingCode: "251",
        flag: "🇪🇹",
        name: "Ethiopia",
    },
    {
        isoCountryCode: "FI",
        callingCode: "358",
        flag: "🇫🇮",
        name: "Finland",
    },
    {
        isoCountryCode: "FJ",
        callingCode: "679",
        flag: "🇫🇯",
        name: "Fiji",
    },
    {
        isoCountryCode: "FK",
        callingCode: "500",
        flag: "🇫🇰",
        name: "Falkland Islands (Malvinas)",
    },
    {
        isoCountryCode: "FM",
        callingCode: "691",
        flag: "🇫🇲",
        name: "Micronesia",
    },
    {
        isoCountryCode: "FO",
        callingCode: "298",
        flag: "🇫🇴",
        name: "Faroe Islands",
    },
    {
        isoCountryCode: "FR",
        callingCode: "33",
        flag: "🇫🇷",
        name: "France",
    },
    {
        isoCountryCode: "GA",
        callingCode: "241",
        flag: "🇬🇦",
        name: "Gabon",
    },
    {
        isoCountryCode: "GB",
        callingCode: "44",
        flag: "🇬🇧",
        name: "United Kingdom",
    },
    {
        isoCountryCode: "GD",
        callingCode: "1",
        flag: "🇬🇩",
        name: "Grenada",
    },
    {
        isoCountryCode: "GE",
        callingCode: "995",
        flag: "🇬🇪",
        name: "Georgia",
    },
    {
        isoCountryCode: "GF",
        callingCode: "594",
        flag: "🇬🇫",
        name: "French Guiana",
    },
    {
        isoCountryCode: "GG",
        callingCode: "44",
        flag: "🇬🇬",
        name: "Guernsey",
    },
    {
        isoCountryCode: "GH",
        callingCode: "233",
        flag: "🇬🇭",
        name: "Ghana",
    },
    {
        isoCountryCode: "GI",
        callingCode: "350",
        flag: "🇬🇮",
        name: "Gibraltar",
    },
    {
        isoCountryCode: "GL",
        callingCode: "299",
        flag: "🇬🇱",
        name: "Greenland",
    },
    {
        isoCountryCode: "GM",
        callingCode: "220",
        flag: "🇬🇲",
        name: "Gambia",
    },
    {
        isoCountryCode: "GN",
        callingCode: "224",
        flag: "🇬🇳",
        name: "Guinea",
    },
    {
        isoCountryCode: "GP",
        callingCode: "590",
        flag: "🇬🇵",
        name: "Guadeloupe",
    },
    {
        isoCountryCode: "GQ",
        callingCode: "240",
        flag: "🇬🇶",
        name: "Equatorial Guinea",
    },
    {
        isoCountryCode: "GR",
        callingCode: "30",
        flag: "🇬🇷",
        name: "Greece",
    },
    {
        isoCountryCode: "GS",
        callingCode: "995",
        flag: "🇬🇸",
        name: "South Georgia",
    },
    {
        isoCountryCode: "GT",
        callingCode: "502",
        flag: "🇬🇹",
        name: "Guatemala",
    },
    {
        isoCountryCode: "GU",
        callingCode: "1-671",
        flag: "🇬🇺",
        name: "Guam",
    },
    {
        isoCountryCode: "GW",
        callingCode: "245",
        flag: "🇬🇼",
        name: "Guinea-Bissau",
    },
    {
        isoCountryCode: "GY",
        callingCode: "592",
        flag: "🇬🇾",
        name: "Guyana",
    },
    {
        isoCountryCode: "HK",
        callingCode: "852",
        flag: "🇭🇰",
        name: "Hong Kong",
    },
    {
        isoCountryCode: "HN",
        callingCode: "504",
        flag: "🇭🇳",
        name: "Honduras",
    },
    {
        isoCountryCode: "HR",
        callingCode: "385",
        flag: "🇭🇷",
        name: "Croatia",
    },
    {
        isoCountryCode: "HT",
        callingCode: "509",
        flag: "🇭🇹",
        name: "Haiti",
    },
    {
        isoCountryCode: "HU",
        callingCode: "36",
        flag: "🇭🇺",
        name: "Hungary",
    },
    {
        isoCountryCode: "isoCountryCode",
        callingCode: "62",
        flag: "🇮🇩",
        name: "Indonesia",
    },
    {
        isoCountryCode: "IE",
        callingCode: "353",
        flag: "🇮🇪",
        name: "Ireland",
    },
    {
        isoCountryCode: "IL",
        callingCode: "972",
        flag: "🇮🇱",
        name: "Israel",
    },
    {
        isoCountryCode: "IM",
        callingCode: "44",
        flag: "🇮🇲",
        name: "Isle of Man",
    },
    {
        isoCountryCode: "IN",
        callingCode: "91",
        flag: "🇮🇳",
        name: "India",
    },
    {
        isoCountryCode: "IO",
        callingCode: "246",
        flag: "🇮🇴",
        name: "British Indian Ocean Territory",
    },
    {
        isoCountryCode: "IQ",
        callingCode: "964",
        flag: "🇮🇶",
        name: "Iraq",
    },
    {
        isoCountryCode: "IR",
        callingCode: "98",
        flag: "🇮🇷",
        name: "Iran",
    },
    {
        isoCountryCode: "IS",
        callingCode: "354",
        flag: "🇮🇸",
        name: "Iceland",
    },
    {
        isoCountryCode: "IT",
        callingCode: "39",
        flag: "🇮🇹",
        name: "Italy",
    },
    {
        isoCountryCode: "JE",
        callingCode: "44",
        flag: "🇯🇪",
        name: "Jersey",
    },
    {
        isoCountryCode: "JM",
        callingCode: "1",
        flag: "🇯🇲",
        name: "Jamaica",
    },
    {
        isoCountryCode: "JO",
        callingCode: "962",
        flag: "🇯🇴",
        name: "Jordan",
    },
    {
        isoCountryCode: "JP",
        callingCode: "81",
        flag: "🇯🇵",
        name: "Japan",
    },
    {
        isoCountryCode: "KE",
        callingCode: "254",
        flag: "🇰🇪",
        name: "Kenya",
    },
    {
        isoCountryCode: "KG",
        callingCode: "996",
        flag: "🇰🇬",
        name: "Kyrgyzstan",
    },
    {
        isoCountryCode: "KH",
        callingCode: "855",
        flag: "🇰🇭",
        name: "Cambodia",
    },
    {
        isoCountryCode: "KI",
        callingCode: "686",
        flag: "🇰🇮",
        name: "Kiribati",
    },
    {
        isoCountryCode: "KM",
        callingCode: "269",
        flag: "🇰🇲",
        name: "Comoros",
    },
    {
        isoCountryCode: "KN",
        callingCode: "1",
        flag: "🇰🇳",
        name: "Saint Kitts and Nevis",
    },
    {
        isoCountryCode: "KP",
        callingCode: "850",
        flag: "🇰🇵",
        name: "North Korea",
    },
    {
        isoCountryCode: "KR",
        callingCode: "82",
        flag: "🇰🇷",
        name: "South Korea",
    },
    {
        isoCountryCode: "KW",
        callingCode: "965",
        flag: "🇰🇼",
        name: "Kuwait",
    },
    {
        isoCountryCode: "KY",
        callingCode: "1",
        flag: "🇰🇾",
        name: "Cayman Islands",
    },
    {
        isoCountryCode: "KZ",
        callingCode: "7",
        flag: "🇰🇿",
        name: "Kazakhstan",
    },
    {
        isoCountryCode: "LA",
        callingCode: "856",
        flag: "🇱🇦",
        name: "Lao People's Democratic Republic",
    },
    {
        isoCountryCode: "LB",
        callingCode: "961",
        flag: "🇱🇧",
        name: "Lebanon",
    },
    {
        isoCountryCode: "LC",
        callingCode: "1",
        flag: "🇱🇨",
        name: "Saint Lucia",
    },
    {
        isoCountryCode: "LI",
        callingCode: "423",
        flag: "🇱🇮",
        name: "Liechtenstein",
    },
    {
        isoCountryCode: "LK",
        callingCode: "94",
        flag: "🇱🇰",
        name: "Sri Lanka",
    },
    {
        isoCountryCode: "LR",
        callingCode: "231",
        flag: "🇱🇷",
        name: "Liberia",
    },
    {
        isoCountryCode: "LS",
        callingCode: "266",
        flag: "🇱🇸",
        name: "Lesotho",
    },
    {
        isoCountryCode: "LT",
        callingCode: "370",
        flag: "🇱🇹",
        name: "Lithuania",
    },
    {
        isoCountryCode: "LU",
        callingCode: "352",
        flag: "🇱🇺",
        name: "Luxembourg",
    },
    {
        isoCountryCode: "LV",
        callingCode: "371",
        flag: "🇱🇻",
        name: "Latvia",
    },
    {
        isoCountryCode: "LY",
        callingCode: "218",
        flag: "🇱🇾",
        name: "Libya",
    },
    {
        isoCountryCode: "MA",
        callingCode: "212",
        flag: "🇲🇦",
        name: "Morocco",
    },
    {
        isoCountryCode: "MC",
        callingCode: "377",
        flag: "🇲🇨",
        name: "Monaco",
    },
    {
        isoCountryCode: "MD",
        callingCode: "373",
        flag: "🇲🇩",
        name: "Moldova",
    },
    {
        isoCountryCode: "ME",
        callingCode: "382",
        flag: "🇲🇪",
        name: "Montenegro",
    },
    {
        isoCountryCode: "MF",
        callingCode: "590",
        flag: "🇲🇫",
        name: "Saint Martin (French Part)",
    },
    {
        isoCountryCode: "MG",
        callingCode: "261",
        flag: "🇲🇬",
        name: "Madagascar",
    },
    {
        isoCountryCode: "MH",
        callingCode: "692",
        flag: "🇲🇭",
        name: "Marshall Islands",
    },
    {
        isoCountryCode: "MK",
        callingCode: "389",
        flag: "🇲🇰",
        name: "Macedonia",
    },
    {
        isoCountryCode: "ML",
        callingCode: "223",
        flag: "🇲🇱",
        name: "Mali",
    },
    {
        isoCountryCode: "MM",
        callingCode: "95",
        flag: "🇲🇲",
        name: "Myanmar",
    },
    {
        isoCountryCode: "MN",
        callingCode: "976",
        flag: "🇲🇳",
        name: "Mongolia",
    },
    {
        isoCountryCode: "MO",
        callingCode: "853",
        flag: "🇲🇴",
        name: "Macao",
    },
    {
        isoCountryCode: "MP",
        callingCode: "1",
        flag: "🇲🇵",
        name: "Northern Mariana Islands",
    },
    {
        isoCountryCode: "MQ",
        callingCode: "596",
        flag: "🇲🇶",
        name: "Martinique",
    },
    {
        isoCountryCode: "MR",
        callingCode: "222",
        flag: "🇲🇷",
        name: "Mauritania",
    },
    {
        isoCountryCode: "MS",
        callingCode: "1",
        flag: "🇲🇸",
        name: "Montserrat",
    },
    {
        isoCountryCode: "MT",
        callingCode: "356",
        flag: "🇲🇹",
        name: "Malta",
    },
    {
        isoCountryCode: "MU",
        callingCode: "230",
        flag: "🇲🇺",
        name: "Mauritius",
    },
    {
        isoCountryCode: "MV",
        callingCode: "960",
        flag: "🇲🇻",
        name: "Maldives",
    },
    {
        isoCountryCode: "MW",
        callingCode: "265",
        flag: "🇲🇼",
        name: "Malawi",
    },
    {
        isoCountryCode: "MX",
        callingCode: "52",
        flag: "🇲🇽",
        name: "Mexico",
    },
    {
        isoCountryCode: "MY",
        callingCode: "60",
        flag: "🇲🇾",
        name: "Malaysia",
    },
    {
        isoCountryCode: "MZ",
        callingCode: "258",
        flag: "🇲🇿",
        name: "Mozambique",
    },
    {
        isoCountryCode: "NA",
        callingCode: "264",
        flag: "🇳🇦",
        name: "Namibia",
    },
    {
        isoCountryCode: "NC",
        callingCode: "687",
        flag: "🇳🇨",
        name: "New Caledonia",
    },
    {
        isoCountryCode: "NE",
        callingCode: "227",
        flag: "🇳🇪",
        name: "Niger",
    },
    {
        isoCountryCode: "NF",
        callingCode: "672",
        flag: "🇳🇫",
        name: "Norfolk Island",
    },
    {
        isoCountryCode: "NG",
        callingCode: "234",
        flag: "🇳🇬",
        name: "Nigeria",
    },
    {
        isoCountryCode: "NI",
        callingCode: "505",
        flag: "🇳🇮",
        name: "Nicaragua",
    },
    {
        isoCountryCode: "NL",
        callingCode: "31",
        flag: "🇳🇱",
        name: "Netherlands",
    },
    {
        isoCountryCode: "NO",
        callingCode: "47",
        flag: "🇳🇴",
        name: "Norway",
    },
    {
        isoCountryCode: "NP",
        callingCode: "977",
        flag: "🇳🇵",
        name: "Nepal",
    },
    {
        isoCountryCode: "NR",
        callingCode: "674",
        flag: "🇳🇷",
        name: "Nauru",
    },
    {
        isoCountryCode: "NU",
        callingCode: "683",
        flag: "🇳🇺",
        name: "Niue",
    },
    {
        isoCountryCode: "NZ",
        callingCode: "64",
        flag: "🇳🇿",
        name: "New Zealand",
    },
    {
        isoCountryCode: "OM",
        callingCode: "968",
        flag: "🇴🇲",
        name: "Oman",
    },
    {
        isoCountryCode: "PA",
        callingCode: "507",
        flag: "🇵🇦",
        name: "Panama",
    },
    {
        isoCountryCode: "PE",
        callingCode: "51",
        flag: "🇵🇪",
        name: "Peru",
    },
    {
        isoCountryCode: "PF",
        callingCode: "689",
        flag: "🇵🇫",
        name: "French Polynesia",
    },
    {
        isoCountryCode: "PG",
        callingCode: "675",
        flag: "🇵🇬",
        name: "Papua New Guinea",
    },
    {
        isoCountryCode: "PH",
        callingCode: "63",
        flag: "🇵🇭",
        name: "Philippines",
    },
    {
        isoCountryCode: "PK",
        callingCode: "92",
        flag: "🇵🇰",
        name: "Pakistan",
    },
    {
        isoCountryCode: "PL",
        callingCode: "48",
        flag: "🇵🇱",
        name: "Poland",
    },
    {
        isoCountryCode: "PM",
        callingCode: "508",
        flag: "🇵🇲",
        name: "Saint Pierre and Miquelon",
    },
    {
        isoCountryCode: "PN",
        callingCode: "64",
        flag: "🇵🇳",
        name: "Pitcairn",
    },
    {
        isoCountryCode: "PR",
        callingCode: "1-787, 1-939",
        flag: "🇵🇷",
        name: "Puerto Rico",
    },
    {
        isoCountryCode: "PS",
        callingCode: "970",
        flag: "🇵🇸",
        name: "Palestinian Territory",
    },
    {
        isoCountryCode: "PT",
        callingCode: "351",
        flag: "🇵🇹",
        name: "Portugal",
    },
    {
        isoCountryCode: "PW",
        callingCode: "680",
        flag: "🇵🇼",
        name: "Palau",
    },
    {
        isoCountryCode: "PY",
        callingCode: "595",
        flag: "🇵🇾",
        name: "Paraguay",
    },
    {
        isoCountryCode: "QA",
        callingCode: "974",
        flag: "🇶🇦",
        name: "Qatar",
    },
    {
        isoCountryCode: "RE",
        callingCode: "262",
        flag: "🇷🇪",
        name: "Réunion",
    },
    {
        isoCountryCode: "RO",
        callingCode: "40",
        flag: "🇷🇴",
        name: "Romania",
    },
    {
        isoCountryCode: "RS",
        callingCode: "381",
        flag: "🇷🇸",
        name: "Serbia",
    },
    {
        isoCountryCode: "RU",
        callingCode: "7",
        flag: "🇷🇺",
        name: "Russia",
    },
    {
        isoCountryCode: "RW",
        callingCode: "250",
        flag: "🇷🇼",
        name: "Rwanda",
    },
    {
        isoCountryCode: "SA",
        callingCode: "966",
        flag: "🇸🇦",
        name: "Saudi Arabia",
    },
    {
        isoCountryCode: "SB",
        callingCode: "677",
        flag: "🇸🇧",
        name: "Solomon Islands",
    },
    {
        isoCountryCode: "SC",
        callingCode: "248",
        flag: "🇸🇨",
        name: "Seychelles",
    },
    {
        isoCountryCode: "SD",
        callingCode: "249",
        flag: "🇸🇩",
        name: "Sudan",
    },
    {
        isoCountryCode: "SE",
        callingCode: "46",
        flag: "🇸🇪",
        name: "Sweden",
    },
    {
        isoCountryCode: "SG",
        callingCode: "65",
        flag: "🇸🇬",
        name: "Singapore",
    },
    {
        isoCountryCode: "SH",
        callingCode: "290",
        flag: "🇸🇭",
        name: "Saint Helena, Ascension and Tristan Da Cunha",
    },
    {
        isoCountryCode: "SI",
        callingCode: "386",
        flag: "🇸🇮",
        name: "Slovenia",
    },
    {
        isoCountryCode: "SJ",
        callingCode: "47",
        flag: "🇸🇯",
        name: "Svalbard and Jan Mayen",
    },
    {
        isoCountryCode: "SK",
        callingCode: "421",
        flag: "🇸🇰",
        name: "Slovakia",
    },
    {
        isoCountryCode: "SL",
        callingCode: "232",
        flag: "🇸🇱",
        name: "Sierra Leone",
    },
    {
        isoCountryCode: "SM",
        callingCode: "378",
        flag: "🇸🇲",
        name: "San Marino",
    },
    {
        isoCountryCode: "SN",
        callingCode: "221",
        flag: "🇸🇳",
        name: "Senegal",
    },
    {
        isoCountryCode: "SO",
        callingCode: "252",
        flag: "🇸🇴",
        name: "Somalia",
    },
    {
        isoCountryCode: "SR",
        callingCode: "597",
        flag: "🇸🇷",
        name: "Suriname",
    },
    {
        isoCountryCode: "SS",
        callingCode: "211",
        flag: "🇸🇸",
        name: "South Sudan",
    },
    {
        isoCountryCode: "ST",
        callingCode: "239",
        flag: "🇸🇹",
        name: "Sao Tome and Principe",
    },
    {
        isoCountryCode: "SV",
        callingCode: "503",
        flag: "🇸🇻",
        name: "El Salvador",
    },
    {
        isoCountryCode: "SX",
        callingCode: "1",
        flag: "🇸🇽",
        name: "Sint Maarten (Dutch Part)",
    },
    {
        isoCountryCode: "SY",
        callingCode: "963",
        flag: "🇸🇾",
        name: "Syrian Arab Republic",
    },
    {
        isoCountryCode: "SZ",
        callingCode: "268",
        flag: "🇸🇿",
        name: "Swaziland",
    },
    {
        isoCountryCode: "TC",
        callingCode: "1",
        flag: "🇹🇨",
        name: "Turks and Caicos Islands",
    },
    {
        isoCountryCode: "TD",
        callingCode: "235",
        flag: "🇹🇩",
        name: "Chad",
    },
    {
        isoCountryCode: "TG",
        callingCode: "228",
        flag: "🇹🇬",
        name: "Togo",
    },
    {
        isoCountryCode: "TH",
        callingCode: "66",
        flag: "🇹🇭",
        name: "Thailand",
    },
    {
        isoCountryCode: "TJ",
        callingCode: "992",
        flag: "🇹🇯",
        name: "Tajikistan",
    },
    {
        isoCountryCode: "TK",
        callingCode: "690",
        flag: "🇹🇰",
        name: "Tokelau",
    },
    {
        isoCountryCode: "TL",
        callingCode: "670",
        flag: "🇹🇱",
        name: "Timor-Leste",
    },
    {
        isoCountryCode: "TM",
        callingCode: "993",
        flag: "🇹🇲",
        name: "Turkmenistan",
    },
    {
        isoCountryCode: "TN",
        callingCode: "216",
        flag: "🇹🇳",
        name: "Tunisia",
    },
    {
        isoCountryCode: "TO",
        callingCode: "676",
        flag: "🇹🇴",
        name: "Tonga",
    },
    {
        isoCountryCode: "TR",
        callingCode: "90",
        flag: "🇹🇷",
        name: "Turkey",
    },
    {
        isoCountryCode: "TT",
        callingCode: "1",
        flag: "🇹🇹",
        name: "TrinisoCountryCodead and Tobago",
    },
    {
        isoCountryCode: "TV",
        callingCode: "688",
        flag: "🇹🇻",
        name: "Tuvalu",
    },
    {
        isoCountryCode: "TW",
        callingCode: "886",
        flag: "🇹🇼",
        name: "Taiwan",
    },
    {
        isoCountryCode: "TZ",
        callingCode: "255",
        flag: "🇹🇿",
        name: "Tanzania",
    },
    {
        isoCountryCode: "UA",
        callingCode: "380",
        flag: "🇺🇦",
        name: "Ukraine",
    },
    {
        isoCountryCode: "UG",
        callingCode: "256",
        flag: "🇺🇬",
        name: "Uganda",
    },
    {
        isoCountryCode: "UM",
        callingCode: "246",
        flag: "🇺🇲",
        name: "United States Minor Outlying Islands",
    },
    {
        isoCountryCode: "US",
        callingCode: "1",
        flag: "🇺🇸",
        name: "United States",
    },
    {
        isoCountryCode: "UY",
        callingCode: "598",
        flag: "🇺🇾",
        name: "Uruguay",
    },
    {
        isoCountryCode: "UZ",
        callingCode: "998",
        flag: "🇺🇿",
        name: "Uzbekistan",
    },
    {
        isoCountryCode: "VA",
        callingCode: "379",
        flag: "🇻🇦",
        name: "Vatican City",
    },
    {
        isoCountryCode: "VC",
        callingCode: "1",
        flag: "🇻🇨",
        name: "Saint Vincent and The Grenadines",
    },
    {
        isoCountryCode: "VE",
        callingCode: "58",
        flag: "🇻🇪",
        name: "Venezuela",
    },
    {
        isoCountryCode: "VG",
        callingCode: "1",
        flag: "🇻🇬",
        name: "Virgin Islands, British",
    },
    {
        isoCountryCode: "VI",
        callingCode: "1",
        flag: "🇻🇮",
        name: "Virgin Islands, U.S.",
    },
    {
        isoCountryCode: "VN",
        callingCode: "84",
        flag: "🇻🇳",
        name: "Viet Nam",
    },
    {
        isoCountryCode: "VU",
        callingCode: "678",
        flag: "🇻🇺",
        name: "Vanuatu",
    },
    {
        isoCountryCode: "WF",
        callingCode: "681",
        flag: "🇼🇫",
        name: "Wallis and Futuna",
    },
    {
        isoCountryCode: "WS",
        callingCode: "685",
        flag: "🇼🇸",
        name: "Samoa",
    },
    {
        isoCountryCode: "YE",
        callingCode: "967",
        flag: "🇾🇪",
        name: "Yemen",
    },
    {
        isoCountryCode: "YT",
        callingCode: "262",
        flag: "🇾🇹",
        name: "Mayotte",
    },
    {
        isoCountryCode: "ZA",
        callingCode: "27",
        flag: "🇿🇦",
        name: "South Africa",
    },
    {
        isoCountryCode: "ZM",
        callingCode: "260",
        flag: "🇿🇲",
        name: "Zambia",
    },
    {
        isoCountryCode: "ZW",
        callingCode: "263",
        flag: "🇿🇼",
        name: "Zimbabwe",
    },
];

var ITEM_HEIGHT = 34;
var defaultStyles$2 = reactNative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(249, 249, 249)",
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 9,
        borderBottomColor: "#CACACA",
        borderBottomWidth: 1,
    },
    backButton: {
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        left: 9,
        top: 12,
    },
    backButtonText: {
        fontSize: 17,
        color: "#007AFF",
        marginLeft: 5,
    },
    headerTitle: {
        fontSize: 17,
    },
    item: {
        paddingHorizontal: 19,
        paddingVertical: 8,
        minHeight: ITEM_HEIGHT,
        borderBottomColor: "#CACACA",
        borderBottomWidth: 1,
    },
    selectedItem: {
        backgroundColor: "#F3F3F3",
    },
    style: {
        flexDirection: "row",
        alignItems: "center",
    },
    textStyle: {
        flex: 1,
    },
    searchbarContainer: {
        paddingHorizontal: 17,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CACACA",
    },
    searchbar: {
        backgroundColor: "rgba(142, 142, 147, .12)",
        paddingHorizontal: 9,
        borderRadius: 10,
        height: 36,
    },
});
var backIcon = require("./images/ic_btn_back.png");
function orderByCallingCodeAndName(a, b) {
    if (a.callingCode == b.callingCode) {
        return a.name > b.name ? 1 : -1;
    }
    else {
        return a.callingCode > b.callingCode ? 1 : -1;
    }
}
var CountryList = /** @class */ (function (_super) {
    __extends(CountryList, _super);
    function CountryList(props) {
        var _this = _super.call(this, props) || this;
        _this.search = function (text) {
            _this.setState({
                keyword: text,
            });
        };
        _this.onPressCountry = function (country) { return function () {
            if (_this.props.onSelectCountry) {
                _this.props.onSelectCountry(country);
            }
        }; };
        _this.keyExtractor = function (item) {
            return item.isoCountryCode;
        };
        _this.renderItem = function (_a) {
            var item = _a.item;
            var text = reactNative.Platform.select({
                ios: item.flag + " " + item.name + " +" + item.callingCode,
                android: item.name + " +" + item.callingCode,
            });
            return (React__default.createElement(reactNative.TouchableOpacity, { key: item.isoCountryCode, onPress: _this.onPressCountry(item), style: [
                    defaultStyles$2.item,
                    item.callingCode === _this.state.selectedValue
                        ? defaultStyles$2.selectedItem
                        : null,
                ] },
                React__default.createElement(Text, { key: item.isoCountryCode }, text)));
        };
        _this.state = {
            keyword: "",
            selectedValue: props.selectedValue || "",
        };
        return _this;
    }
    CountryList.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.selectedValue != this.props.selectedValue &&
            this.props.selectedValue != null) {
            this.setState({
                selectedValue: this.props.selectedValue,
            });
        }
        if (prevProps.visible && !this.props.visible) {
            this.setState({
                keyword: "",
            });
        }
    };
    CountryList.prototype.render = function () {
        var _a = this.props, visible = _a.visible, backButtonText = _a.backButtonText, countryCodes = _a.countryCodes, headerTitle = _a.headerTitle, ListEmptyComponent = _a.ListEmptyComponent, onPressBackButton = _a.onPressBackButton;
        var keyword = this.state.keyword;
        var lowerCaseKeyword = keyword.toLowerCase();
        var renderCountryCodes = countryCodes
            .filter(function (item) {
            return keyword
                ? item.name.toLowerCase().includes(lowerCaseKeyword) ||
                    item.callingCode.includes(lowerCaseKeyword)
                : true;
        })
            .sort(orderByCallingCodeAndName);
        return (React__default.createElement(reactNative.Modal, { visible: visible, animationType: "slide", onRequestClose: onPressBackButton },
            React__default.createElement(reactNative.SafeAreaView, { style: defaultStyles$2.container },
                React__default.createElement(reactNative.View, { style: defaultStyles$2.header },
                    React__default.createElement(reactNative.TouchableOpacity, { style: defaultStyles$2.backButton, onPress: onPressBackButton },
                        React__default.createElement(reactNative.Image, { source: backIcon }),
                        React__default.createElement(Text, { style: defaultStyles$2.backButtonText }, backButtonText || "Back")),
                    React__default.createElement(Text, { style: defaultStyles$2.headerTitle }, headerTitle || "Select Country")),
                React__default.createElement(reactNative.View, { style: defaultStyles$2.searchbarContainer },
                    React__default.createElement(TextInput, { placeholder: "Search", onChangeText: this.search, style: defaultStyles$2.searchbar, value: keyword, autoFocus: true })),
                React__default.createElement(reactNative.FlatList, { data: renderCountryCodes, keyExtractor: this.keyExtractor, extraData: this.state.keyword, ListEmptyComponent: ListEmptyComponent, renderItem: this.renderItem, initialNumToRender: 25 }))));
    };
    return CountryList;
}(React__default.PureComponent));

var defaultStyles$3 = reactNative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(249, 249, 249)",
    },
    style: {
        flexDirection: "row",
        alignItems: "center",
    },
    textStyle: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 9,
        borderBottomColor: "#CACACA",
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 17,
    },
    backButton: {
        flexDirection: "row",
        position: "absolute",
        left: 9,
        top: 12,
    },
    backButtonText: {
        fontSize: 17,
        color: "#007AFF",
        marginLeft: 5,
    },
    searchbarContainer: {
        paddingHorizontal: 17,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CACACA",
    },
    searchbar: {
        backgroundColor: "rgba(142, 142, 147, .12)",
        paddingHorizontal: 9,
        borderRadius: 10,
        height: 36,
    },
    item: {
        paddingHorizontal: 19,
        paddingVertical: 8,
        borderBottomColor: "#CACACA",
        borderBottomWidth: 1,
    },
    selectedItem: {
        backgroundColor: "#F3F3F3",
    },
});
var dropdownArrowIcon = require("./images/ic_form_dropdown.png");
var CountryPicker = /** @class */ (function (_super) {
    __extends(CountryPicker, _super);
    function CountryPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.openCountryList = function () {
            if (_this.props.openAlternativeCountryList) {
                _this.props.openAlternativeCountryList(_this.props.countryCodes, _this.onSelectCountry);
            }
            else {
                _this.setState({ showCountryList: true });
            }
        };
        _this.onSelectCountry = function (item) {
            _this.setState({
                selectedValue: item.callingCode,
                showCountryList: false,
            });
            if (_this.props.onValueChange) {
                _this.props.onValueChange(item.callingCode);
            }
        };
        _this.closePicker = function () {
            _this.setState({
                showCountryList: false,
            }, function () {
                if (_this.props.onClosePicker) {
                    _this.props.onClosePicker();
                }
            });
        };
        var selectedValue = _this.props.selectedValue || "";
        if (props.defaultBySimcardCountry) {
            var upperCountryCode_1 = RNSimInfo.getCountryCode().toUpperCase();
            var country = props.countryCodes.find(function (code) {
                return code.isoCountryCode === upperCountryCode_1;
            });
            selectedValue = (country && country.callingCode) || selectedValue;
            if (props.onValueChange) {
                props.onValueChange(selectedValue);
            }
        }
        _this.state = {
            selectedValue: selectedValue,
            showCountryList: false,
        };
        return _this;
    }
    CountryPicker.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, placeholderTextColor = _a.placeholderTextColor, style = _a.style, textStyle = _a.textStyle, containerStyle = _a.containerStyle, backButtonText = _a.backButtonText, countryCodes = _a.countryCodes, headerTitle = _a.headerTitle, ListEmptyComponent = _a.ListEmptyComponent, error = _a.error, errorStyle = _a.errorStyle, rest = __rest(_a, ["placeholder", "placeholderTextColor", "style", "textStyle", "containerStyle", "backButtonText", "countryCodes", "headerTitle", "ListEmptyComponent", "error", "errorStyle"]);
        var _b = this.state, selectedValue = _b.selectedValue, showCountryList = _b.showCountryList;
        var flattedErrorStyle = reactNative.StyleSheet.flatten(errorStyle);
        var errorColor = flattedErrorStyle && flattedErrorStyle.color;
        return (React__default.createElement(reactNative.View, { style: containerStyle },
            React__default.createElement(reactNative.TouchableOpacity, { onPress: this.openCountryList, style: [
                    defaultStyles$3.style,
                    style,
                    error && errorColor ? { borderBottomColor: errorColor } : null,
                ] },
                React__default.createElement(Text, { style: [
                        defaultStyles$3.textStyle,
                        textStyle,
                        selectedValue ? null : { color: placeholderTextColor },
                    ] }, selectedValue ? "+" + selectedValue : placeholder),
                React__default.createElement(reactNative.Image, { source: dropdownArrowIcon })),
            React__default.createElement(ExtraText, __assign({}, rest, { error: error, errorStyle: errorStyle })),
            React__default.createElement(CountryList, { visible: showCountryList, backButtonText: backButtonText, headerTitle: headerTitle, selectedValue: selectedValue, onPressBackButton: this.closePicker, onSelectCountry: this.onSelectCountry, ListEmptyComponent: ListEmptyComponent, countryCodes: countryCodes })));
    };
    CountryPicker.defaultProps = {
        defaultBySimcardCountry: false,
        countryCodes: defaultCountryCodes,
    };
    return CountryPicker;
}(React__default.PureComponent));

var defaultStyles$4 = reactNative.StyleSheet.create({
    box: {
        borderRadius: 24,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        elevation: 15,
        paddingHorizontal: 21,
        paddingVertical: 31,
    },
    description: {
        fontSize: 18,
        lineHeight: 24,
        color: "rgb(51, 51, 51)",
    },
    flexRow: {
        flexDirection: "row",
    },
    title: {
        color: "rgb(63, 68, 165)",
        marginTop: 27,
        fontSize: 24,
    },
    countryPickerContainer: {
        width: 108,
    },
    countryPicker: {
        borderBottomColor: "rgb(170, 170, 170)",
        borderBottomWidth: 1,
        alignSelf: "center",
        height: 52,
    },
    countryPickerText: {
        alignSelf: "center",
        fontSize: 16,
    },
    mobileNumberContainer: {
        marginLeft: 15,
        flex: 1,
    },
    mobileNumberText: {
        height: 52,
        borderBottomColor: "rgb(170, 170, 170)",
        borderBottomWidth: 1,
        fontSize: 16,
    },
    error: {
        paddingVertical: 4,
        color: "rgb(208, 2, 27)",
        fontSize: 13,
    },
    submitButton: {
        marginTop: 41,
        borderColor: "rgb(151, 151, 151)",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    submitText: {
        fontSize: 24,
        color: "rgb(51, 51, 51)",
    },
    skipButton: {
        marginTop: 42,
        alignItems: "center",
        justifyContent: "center",
    },
    skipText: {
        fontSize: 14,
        color: "rgb(63, 68, 165)",
    },
});
function SignupWithMobile(props) {
    var onChangeText = function (text) {
        if (/^\d*$/.test(text)) {
            var mobileNumberProps = props.mobileNumberProps;
            if (mobileNumberProps.onChangeText) {
                mobileNumberProps.onChangeText(text);
            }
        }
    };
    var onPressSubmitButton = function () {
        var onPressSubmitButton = props.onPressSubmitButton;
        var countryCallingCode = props.countryPickerProps.selectedValue || "";
        var nationalNumber = props.mobileNumberProps.value || "";
        try {
            var phoneNumber = libphonenumberJs.parsePhoneNumber("+" + countryCallingCode + " " + nationalNumber);
            if (onPressSubmitButton) {
                onPressSubmitButton(phoneNumber ? phoneNumber.isValid() : false, {
                    countryCallingCode: countryCallingCode,
                    nationalNumber: nationalNumber,
                });
            }
        }
        catch (e) {
            if (onPressSubmitButton) {
                onPressSubmitButton(false, {
                    countryCallingCode: countryCallingCode,
                    nationalNumber: nationalNumber,
                });
            }
        }
    };
    var renderCountryPicker = function () {
        var countryPickerProps = props.countryPickerProps;
        return (React__default.createElement(CountryPicker, __assign({}, countryPickerProps, { style: [defaultStyles$4.countryPicker, countryPickerProps.style], containerStyle: [
                defaultStyles$4.countryPickerContainer,
                countryPickerProps.containerStyle,
            ], textStyle: [
                defaultStyles$4.countryPickerText,
                countryPickerProps.textStyle,
            ], errorStyle: [defaultStyles$4.error, countryPickerProps.errorStyle] })));
    };
    var renderTextInput = function () {
        var mobileNumberProps = props.mobileNumberProps, textInputRef = props.textInputRef;
        return (React__default.createElement(TextInput, __assign({}, mobileNumberProps, { ref: textInputRef, containerStyle: [
                defaultStyles$4.mobileNumberContainer,
                mobileNumberProps.containerStyle,
            ], style: [defaultStyles$4.mobileNumberText, mobileNumberProps.style], errorStyle: [defaultStyles$4.error, mobileNumberProps.errorStyle], keyboardType: "phone-pad", onChangeText: onChangeText, autoFocus: true })));
    };
    return (React__default.createElement(reactNative.View, { style: [defaultStyles$4.box, props.style] },
        React__default.createElement(Text, { style: [defaultStyles$4.description, props.descriptionStyle] }, props.description),
        React__default.createElement(Text, { style: [defaultStyles$4.title, props.titleStyle] }, props.title),
        React__default.createElement(reactNative.View, { style: defaultStyles$4.flexRow },
            renderCountryPicker(),
            renderTextInput()),
        React__default.createElement(reactNative.TouchableOpacity, { disabled: props.loading, style: [defaultStyles$4.submitButton, props.submitButtonStyle], onPress: onPressSubmitButton },
            React__default.createElement(Text, { style: [defaultStyles$4.submitText, props.submitButtonTextStyle] }, props.submitButtonText)),
        React__default.createElement(reactNative.TouchableOpacity, { style: [defaultStyles$4.skipButton, props.skipButtonStyle], onPress: props.onPressSkipButton },
            React__default.createElement(Text, { style: [defaultStyles$4.skipText, props.skipButtonTextStyle] }, props.skipButtonText))));
}

var styles = reactNative.StyleSheet.create({
    defaultStyle: {
        flex: 1,
        height: 86,
        marginHorizontal: 4.5,
        backgroundColor: "rgb(232, 232, 232)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
    },
    text: {
        fontSize: 42,
        color: "black",
    },
    error: {
        borderColor: "rgb(238, 0, 0)",
        borderWidth: 1,
    },
});
function CodeBox(props) {
    var isError = props.isError, value = props.value, style = props.style, textStyle = props.textStyle, onPress = props.onPress;
    return (React__default.createElement(reactNative.TouchableWithoutFeedback, { onPress: onPress },
        React__default.createElement(reactNative.View, { style: [styles.defaultStyle, style, isError ? styles.error : null] },
            React__default.createElement(Text, { style: [styles.text, textStyle] }, value))));
}

var defaultStyles$5 = reactNative.StyleSheet.create({
    box: {
        borderRadius: 24,
        backgroundColor: "white",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        elevation: 15,
        paddingHorizontal: 21,
        paddingVertical: 31,
    },
    description: {
        fontSize: 18,
        lineHeight: 24,
        color: "rgb(51, 51, 51)",
        marginBottom: 23,
    },
    codeBoxContainer: {
        flexDirection: "row",
        marginHorizontal: -4.5,
    },
    error: {
        color: "rgb(238, 0, 0)",
        alignSelf: "center",
        marginTop: 12,
    },
    resendContainer: {
        marginTop: 33,
        alignItems: "center",
    },
    resendText: {
        fontSize: 13,
        color: "rgb(170, 170, 170)",
    },
    hiddenTextInput: {
        width: 0,
        height: 0,
        opacity: 0,
    },
});
var VerifyOTP = /** @class */ (function (_super) {
    __extends(VerifyOTP, _super);
    function VerifyOTP(props) {
        var _this = _super.call(this, props) || this;
        _this.textInputRef = React__default.createRef();
        _this.timerId = null;
        _this.countDown = function () {
            _this.setState({ countDownSecond: _this.props.countDownFrom }, function () {
                _this.invokeOnCountDown();
            });
            if (_this.timerId) {
                clearInterval(_this.timerId);
            }
            _this.timerId = setInterval(_this.countDownUntilZero, 1000);
        };
        _this.countDownUntilZero = function () {
            _this.setState(function (prevState) { return ({
                countDownSecond: prevState.countDownSecond - 1,
            }); }, function () {
                _this.invokeOnCountDown();
                if (_this.state.countDownSecond === 0 && _this.timerId) {
                    clearInterval(_this.timerId);
                    _this.timerId = null;
                }
            });
        };
        _this.clearCode = function () {
            _this.setState({ value: "" });
        };
        _this.onChangeText = function (value) {
            if (/^\d*$/.test(value)) {
                _this.setState({ value: value }, function () {
                    if (_this.props.onEnterCode) {
                        _this.props.onEnterCode(value, _this.clearCode);
                    }
                });
            }
        };
        _this.onPressResend = function () {
            if (_this.props.onPressResend) {
                _this.props.onPressResend(_this.countDown);
            }
        };
        _this.focus = function () {
            if (_this.textInputRef.current) {
                _this.textInputRef.current.focus();
            }
        };
        _this.renderCodeBox = function () {
            var _a = _this.props, codeBoxStyle = _a.codeBoxStyle, codeBoxTextStyle = _a.codeBoxTextStyle;
            return (React__default.createElement(reactNative.View, { style: defaultStyles$5.codeBoxContainer }, Array.from({ length: 4 }).map(function (_, idx) {
                return (React__default.createElement(CodeBox, { key: idx, onPress: _this.focus, style: codeBoxStyle, textStyle: codeBoxTextStyle, value: _this.state.value.charAt(idx), isError: !!_this.props.error }));
            })));
        };
        _this.state = {
            value: "",
            countDownSecond: props.countDownFrom,
        };
        return _this;
    }
    VerifyOTP.prototype.componentDidMount = function () {
        this.countDown();
    };
    VerifyOTP.prototype.componentWillUnmount = function () {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    };
    VerifyOTP.prototype.invokeOnCountDown = function () {
        var onCountDown = this.props.onCountDown;
        if (onCountDown != null) {
            onCountDown(this.state.countDownSecond);
        }
    };
    VerifyOTP.prototype.render = function () {
        var _a = this.props, description = _a.description, resendText = _a.resendText, resending = _a.resending, error = _a.error, autoFocus = _a.autoFocus, style = _a.style, descriptionStyle = _a.descriptionStyle, resendContainerStyle = _a.resendContainerStyle, resendTextStyle = _a.resendTextStyle, errorStyle = _a.errorStyle;
        var _b = this.state, value = _b.value, countDownSecond = _b.countDownSecond;
        var autoFocus_ = autoFocus == null ? true : autoFocus;
        return (React__default.createElement(reactNative.View, { style: [defaultStyles$5.box, style] },
            React__default.createElement(Text, { style: [defaultStyles$5.description, descriptionStyle] }, description),
            this.renderCodeBox(),
            React__default.createElement(TextInput, { ref: this.textInputRef, value: value, onChangeText: this.onChangeText, autoFocus: autoFocus_, style: defaultStyles$5.hiddenTextInput, keyboardType: "numeric", maxLength: 4, textContentType: "oneTimeCode" }),
            React__default.createElement(reactNative.TouchableOpacity, { disabled: resending || countDownSecond !== 0, style: [defaultStyles$5.resendContainer, resendContainerStyle], onPress: this.onPressResend },
                React__default.createElement(Text, { style: [defaultStyles$5.resendText, resendTextStyle] },
                    resendText,
                    " ",
                    countDownSecond ? "(" + countDownSecond + "s)" : null)),
            React__default.createElement(ExtraText, { error: error, errorStyle: [defaultStyles$5.error, errorStyle] })));
    };
    return VerifyOTP;
}(React__default.PureComponent));

var defaultStyles$6 = reactNative.StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        paddingHorizontal: 39,
    },
    box: {
        paddingTop: 36,
        paddingBottom: 23,
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 6,
    },
    title: {
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "rgb(51, 51, 51)",
    },
    description: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 14,
        color: "rgb(51, 51, 51)",
        marginTop: 18,
        paddingHorizontal: 16,
    },
    submitButton: {
        marginTop: 25,
        alignItems: "center",
        borderColor: "rgb(151, 151, 151)",
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 8,
    },
    submitText: {
        fontSize: 16,
        color: "rgb(51, 51, 51)",
    },
    cancelButton: {
        alignItems: "center",
        marginTop: 16,
    },
    cancelText: {
        fontSize: 14,
        color: "rgb(170, 170, 170)",
    },
});
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // hardware back button will trigger this.
        _this.onRequestClose = function () {
            _this.props.onCancel();
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        var _a = this.props, visible = _a.visible, title = _a.title, description = _a.description, submitText = _a.submitText, cancelText = _a.cancelText, backgroundStyle = _a.backgroundStyle, style = _a.style, titleStyle = _a.titleStyle, descriptionStyle = _a.descriptionStyle, submitButtonStyle = _a.submitButtonStyle, submitTextStyle = _a.submitTextStyle, cancelButtonStyle = _a.cancelButtonStyle, cancelTextStyle = _a.cancelTextStyle, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
        return (React__default.createElement(reactNative.Modal, { visible: visible, transparent: true, onRequestClose: this.onRequestClose },
            React__default.createElement(reactNative.View, { style: [defaultStyles$6.background, backgroundStyle] },
                React__default.createElement(reactNative.View, { style: [defaultStyles$6.box, style] },
                    React__default.createElement(Text, { style: [defaultStyles$6.title, titleStyle] }, title),
                    React__default.createElement(Text, { style: [defaultStyles$6.description, descriptionStyle] }, description),
                    React__default.createElement(reactNative.TouchableOpacity, { style: [defaultStyles$6.submitButton, submitButtonStyle], onPress: onSubmit },
                        React__default.createElement(Text, { style: [defaultStyles$6.submitText, submitTextStyle] }, submitText)),
                    React__default.createElement(reactNative.TouchableOpacity, { style: [defaultStyles$6.cancelButton, cancelButtonStyle], onPress: onCancel },
                        React__default.createElement(Text, { style: [defaultStyles$6.cancelText, cancelTextStyle] }, cancelText))))));
    };
    Dialog.defaultProps = {
        visible: false,
    };
    return Dialog;
}(React__default.PureComponent));

var AndroidPermissions = [
    "photo",
    "location",
    "camera",
    "microphone",
    "contacts",
    "event",
    "storage",
    "callPhone",
    "readSms",
    "receiveSms",
];
var IOSPermissions = [
    "notification",
    "photo",
    "location",
    "camera",
    "microphone",
    "contacts",
    "event",
    "bluetooth",
    "reminder",
    "backgroundRefresh",
    "speechRecognition",
    "mediaLibrary",
    "motion",
];
var RequirePermission = /** @class */ (function (_super) {
    __extends(RequirePermission, _super);
    function RequirePermission() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { shownDialog: null };
        _this.checkPermission = function (permission) { return __awaiter(_this, void 0, void 0, function () {
            var granted, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Permissions.check(permission)];
                    case 1:
                        granted = _a.sent();
                        switch (granted) {
                            case "undetermined":
                                this.setState({ shownDialog: "undeterminedDialog" });
                                break;
                            case "authorized":
                                this.props.onAccept();
                                break;
                            case "denied":
                            case "restricted":
                                this.setState({ shownDialog: "deniedDialog" });
                                break;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.props.onReject();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.onSubmitUndeterminedDialog = function () {
            var permission = _this.props.permission;
            Permissions.request(permission).then(function (granted) {
                if (granted == "authorized") {
                    _this.props.onAccept();
                }
                else {
                    _this.props.onReject();
                }
                _this.setState({ shownDialog: null });
            });
        };
        _this.onCancelUndeterminedDialog = function () {
            _this.props.onReject();
            _this.setState({ shownDialog: null });
        };
        _this.onSubmitDeniedDialog = function () {
            OpenSettings.openSettings();
            _this.props.onReject();
            _this.setState({ shownDialog: null });
        };
        _this.onCancelDeniedDialog = function () {
            _this.props.onReject();
            _this.setState({ shownDialog: null });
        };
        return _this;
    }
    RequirePermission.prototype.componentDidMount = function () {
        var validPermissions = reactNative.Platform.select({
            ios: IOSPermissions,
            android: AndroidPermissions,
        });
        var permission = this.props.permission;
        if (validPermissions.includes(permission)) {
            this.checkPermission(permission);
        }
    };
    RequirePermission.prototype.render = function () {
        var _a = this.props, undeterminedDialogProps = _a.undeterminedDialogProps, deniedDialogProps = _a.deniedDialogProps;
        var shownDialog = this.state.shownDialog;
        if (shownDialog == null) {
            return null;
        }
        switch (shownDialog) {
            case "undeterminedDialog":
                return (React__default.createElement(Dialog, __assign({}, undeterminedDialogProps, { visible: true, onSubmit: this.onSubmitUndeterminedDialog, onCancel: this.onCancelUndeterminedDialog })));
            case "deniedDialog":
                return (React__default.createElement(Dialog, __assign({}, deniedDialogProps, { visible: true, onSubmit: this.onSubmitDeniedDialog, onCancel: this.onCancelDeniedDialog })));
            default:
                return null;
        }
    };
    return RequirePermission;
}(React__default.PureComponent));

var FadeAnimation = /** @class */ (function (_super) {
    __extends(FadeAnimation, _super);
    function FadeAnimation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            animatedVisibleValue: new reactNative.Animated.Value(0),
        };
        return _this;
    }
    FadeAnimation.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a = this.props, visible = _a.visible, duration = _a.duration;
        if (prevProps.visible == visible) {
            return;
        }
        reactNative.Animated.timing(this.state.animatedVisibleValue, {
            toValue: visible ? 1 : 0,
            duration: duration,
        }).start(function () {
            if (_this.props.onAnimationEnd != null) {
                _this.props.onAnimationEnd();
            }
        });
    };
    FadeAnimation.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style;
        return (React__default.createElement(reactNative.Animated.View, { style: [
                style,
                {
                    opacity: this.state.animatedVisibleValue,
                },
            ] }, children));
    };
    FadeAnimation.defaultProps = {
        duration: 400,
    };
    return FadeAnimation;
}(React__default.PureComponent));

var styles$1 = reactNative.StyleSheet.create({
    safeArea: {
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        alignItems: "center",
    },
    toastContainer: {
        backgroundColor: "white",
        width: "93%",
        maxWidth: 349,
        height: 65,
        bottom: 69,
        borderColor: "#CACACA",
        borderWidth: 1,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 14,
    },
    text: {
        fontSize: 14,
        color: "#333333",
    },
    textContainer: {
        flex: 1,
        paddingRight: 14,
    },
});
var defaultIcon = require("./images/ic_toast_offline.png");
var defaultText = "Cannot reach internet. Please check your device internet connections.";
var NetworkFailureToast = /** @class */ (function (_super) {
    __extends(NetworkFailureToast, _super);
    function NetworkFailureToast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isNetworkConnected: true,
            isHidden: true,
        };
        _this.handleConnectivityChange = function (isConnected) {
            if (!isConnected) {
                // Separate the isHidden and isNetworkConnected to trigger rendering twice
                // Otherwise, the isNetworkConnceted value changes won't take any effect as
                // the it's rendering null
                _this.setState({
                    isHidden: false,
                }, function () {
                    _this.setState({
                        isNetworkConnected: isConnected,
                    });
                });
            }
            else {
                _this.setState({
                    isNetworkConnected: isConnected,
                });
            }
        };
        _this.onAnimationEnd = function () {
            if (_this.state.isNetworkConnected) {
                _this.setState({
                    isHidden: true,
                });
            }
        };
        _this.renderErrorText = function (errorText, textStyle) {
            if (typeof errorText == "string" || errorText == null) {
                var textValue = errorText || defaultText;
                return React__default.createElement(Text, { style: [styles$1.text, textStyle] }, textValue);
            }
            return errorText;
        };
        return _this;
    }
    NetworkFailureToast.prototype.componentDidMount = function () {
        reactNative.NetInfo.isConnected.addEventListener("connectionChange", this.handleConnectivityChange);
    };
    NetworkFailureToast.prototype.componentWillUnmount = function () {
        reactNative.NetInfo.isConnected.removeEventListener("connectionChange", this.handleConnectivityChange);
    };
    NetworkFailureToast.prototype.render = function () {
        var _a = this.state, isNetworkConnected = _a.isNetworkConnected, isHidden = _a.isHidden;
        var _b = this.props, style = _b.style, errorText = _b.errorText, textStyle = _b.textStyle, imageIcon = _b.imageIcon, iconStyle = _b.iconStyle, animationDuration = _b.animationDuration;
        if (isHidden) {
            return null;
        }
        return (React__default.createElement(reactNative.SafeAreaView, { style: styles$1.safeArea, pointerEvents: "box-none" },
            React__default.createElement(FadeAnimation, { visible: !isNetworkConnected, duration: animationDuration, onAnimationEnd: this.onAnimationEnd },
                React__default.createElement(reactNative.View, { style: [styles$1.toastContainer, style] },
                    React__default.createElement(reactNative.Image, { style: [styles$1.icon, iconStyle], source: imageIcon || defaultIcon, resizeMode: "center" }),
                    React__default.createElement(reactNative.View, { style: styles$1.textContainer }, this.renderErrorText(errorText, textStyle))))));
    };
    return NetworkFailureToast;
}(React__default.PureComponent));

var PortalContext = React__default.createContext(null);
var PortalHost = /** @class */ (function (_super) {
    __extends(PortalHost, _super);
    function PortalHost(props) {
        var _this = _super.call(this, props) || this;
        _this.mount = function (children) {
            var portalKey = _this.nextPortalKey++;
            _this.setState(function (prevState) { return ({
                portals: __spread(prevState.portals, [
                    {
                        key: portalKey,
                        children: children,
                    },
                ]),
            }); });
            return portalKey;
        };
        _this.update = function (key, children) {
            _this.setState(function (prevState) { return ({
                portals: prevState.portals.map(function (portal) {
                    if (portal.key === key) {
                        return {
                            key: key,
                            children: children,
                        };
                    }
                    return portal;
                }),
            }); });
        };
        _this.unmount = function (key) {
            _this.setState(function (prevState) { return ({
                portals: prevState.portals.filter(function (p) { return p.key !== key; }),
            }); });
        };
        _this.nextPortalKey = 0;
        _this.state = {
            portals: [],
            portalMethods: {
                mount: _this.mount,
                update: _this.update,
                unmount: _this.unmount,
            },
        };
        return _this;
    }
    PortalHost.prototype.renderPortals = function () {
        return this.state.portals.map(function (portal) { return (React__default.createElement(reactNative.View, { key: portal.key, style: reactNative.StyleSheet.absoluteFill, collapsable: false, pointerEvents: "box-none" }, portal.children)); });
    };
    PortalHost.prototype.render = function () {
        return (React__default.createElement(PortalContext.Provider, { value: this.state.portalMethods },
            this.props.children,
            this.renderPortals()));
    };
    return PortalHost;
}(React__default.Component));

var Portal_ = /** @class */ (function (_super) {
    __extends(Portal_, _super);
    function Portal_() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 0;
        return _this;
    }
    Portal_.prototype.componentDidMount = function () {
        this.key = this.props.portalMethods.mount(this.props.children);
    };
    Portal_.prototype.componentDidUpdate = function () {
        this.props.portalMethods.update(this.key, this.props.children);
    };
    Portal_.prototype.componentWillUnmount = function () {
        this.props.portalMethods.unmount(this.key);
    };
    Portal_.prototype.render = function () {
        return null;
    };
    return Portal_;
}(React__default.Component));
function Portal(props) {
    return (React__default.createElement(PortalContext.Consumer, null, function (methods) { return React__default.createElement(Portal_, __assign({}, props, { portalMethods: methods })); }));
}

var styles$2 = reactNative.StyleSheet.create({
    container: __assign({}, reactNative.StyleSheet.absoluteFillObject, { flexDirection: "column", justifyContent: "flex-end" }),
    background: __assign({}, reactNative.StyleSheet.absoluteFillObject, { backgroundColor: "rgba(0, 0, 0, 0.2)" }),
});
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.onPressAndroidBack = function () {
            _this.props.onRequestClose();
        };
        _this.onLayout = function (e) {
            _this.setState({
                height: e.nativeEvent.layout.height,
            }, function () {
                if (_this.state.visible) {
                    reactNative.Animated.timing(_this.state.progress, {
                        toValue: 1,
                        duration: 280,
                        easing: reactNative.Easing.elastic(0.5),
                    }).start(function (finished) {
                        if (finished && _this.props.onShow) {
                            _this.props.onShow();
                        }
                    });
                }
            });
        };
        _this.onPressBackground = function () {
            _this.props.onRequestClose();
        };
        _this.state = {
            visible: false,
            progress: new reactNative.Animated.Value(0),
            height: 0,
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        if (this.props.visible) {
            this._show();
        }
    };
    Modal.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.visible && !this.props.visible) {
            this._dismiss();
        }
        if (!prevProps.visible && this.props.visible) {
            this._show();
        }
    };
    Modal.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, visible = _a.visible, progress = _a.progress, height = _a.height;
        if (!visible) {
            return null;
        }
        return (React__default.createElement(Portal, null,
            React__default.createElement(reactNative.View, { style: styles$2.container },
                React__default.createElement(reactNative.TouchableWithoutFeedback, { onPress: this.onPressBackground },
                    React__default.createElement(reactNative.Animated.View, { style: [
                            styles$2.background,
                            {
                                opacity: progress,
                            },
                        ] })),
                React__default.createElement(reactNative.Animated.View, { style: {
                        opacity: height === 0 ? 0 : 1,
                        transform: [
                            {
                                translateY: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [height, 0],
                                }),
                            },
                        ],
                    }, onLayout: this.onLayout }, children))));
    };
    Modal.prototype._show = function () {
        reactNative.BackHandler.addEventListener("hardwareBackPress", this.onPressAndroidBack);
        this.setState({
            visible: true,
            height: 0,
        });
    };
    Modal.prototype._dismiss = function () {
        var _this = this;
        reactNative.BackHandler.removeEventListener("hardwareBackPress", this.onPressAndroidBack);
        reactNative.Animated.timing(this.state.progress, {
            toValue: 0,
            duration: 280,
            easing: reactNative.Easing.elastic(0.5),
        }).start(function (finished) {
            if (finished) {
                _this.setState({ visible: false });
                if (_this.props.onDismiss) {
                    _this.props.onDismiss();
                }
            }
        });
    };
    return Modal;
}(React__default.Component));

var styles$3 = reactNative.StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    toolbar: {
        height: 44,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#B1B1B1",
        backgroundColor: "#F7F7F7",
    },
    toolbarButton: {
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    toolbarButtonCancel: {
        color: "#007AFF",
    },
    toolbarButtonDone: {
        color: "#007AFF",
        fontWeight: "bold",
    },
});
var ToolbarIOS = /** @class */ (function (_super) {
    __extends(ToolbarIOS, _super);
    function ToolbarIOS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarIOS.prototype.render = function () {
        var _a = this.props, cancelButtonLabel = _a.cancelButtonLabel, doneButtonLabel = _a.doneButtonLabel, onDonePress = _a.onDonePress, onCancelPress = _a.onCancelPress;
        var justifyContent = "";
        if (cancelButtonLabel === null && doneButtonLabel !== null) {
            justifyContent = "flex-end";
        }
        if (cancelButtonLabel !== null && doneButtonLabel !== null) {
            justifyContent = "space-between";
        }
        if (cancelButtonLabel === undefined) {
            cancelButtonLabel = "Cancel";
        }
        if (doneButtonLabel === undefined) {
            doneButtonLabel = "Done";
        }
        return (React__default.createElement(reactNative.View, { style: [styles$3.toolbar, { justifyContent: justifyContent }] },
            typeof cancelButtonLabel === "string" ? (React__default.createElement(reactNative.TouchableOpacity, { style: styles$3.toolbarButton, onPress: onCancelPress },
                React__default.createElement(Text, { style: styles$3.toolbarButtonCancel }, cancelButtonLabel))) : null,
            typeof doneButtonLabel === "string" ? (React__default.createElement(reactNative.TouchableOpacity, { style: styles$3.toolbarButton, onPress: onDonePress },
                React__default.createElement(Text, { style: styles$3.toolbarButtonDone }, doneButtonLabel))) : null));
    };
    return ToolbarIOS;
}(React__default.Component));
function prepareValue(props) {
    // Pre-select the value of the first item to
    // match the behavior of UIPickerView.
    // Note that we still have an unhandled edge case
    // that the component is mounted with visible=false
    // and then items changes, followed by visible=true.
    // In this edge case, the pre-select value is stale.
    if (props.items.length <= 0) {
        return "";
    }
    if (props.value !== "") {
        return props.value;
    }
    return props.items[0].value;
}
var PickerImplIOS = /** @class */ (function (_super) {
    __extends(PickerImplIOS, _super);
    function PickerImplIOS(props) {
        var _this = _super.call(this, props) || this;
        _this.onRequestClose = function () {
            _this.props.onDismiss(_this.state.selectedValue);
        };
        _this.onValueChange = function (value) {
            if (typeof value === "string") {
                _this.setState({ selectedValue: value });
            }
        };
        _this.onDonePress = function () {
            _this.props.onDone(_this.state.selectedValue);
        };
        _this.onCancelPress = function () {
            _this.props.onCancel(_this.state.selectedValue);
        };
        _this.renderItem = function (item) {
            return (React__default.createElement(reactNative.PickerIOS.Item, { key: item.value, label: item.label, value: item.value }));
        };
        _this.state = {
            selectedValue: prepareValue(props),
        };
        return _this;
    }
    PickerImplIOS.prototype.componentDidUpdate = function (prevProps) {
        if (!prevProps.visible && this.props.visible) {
            this.setState({
                selectedValue: prepareValue(this.props),
            });
        }
    };
    PickerImplIOS.prototype.render = function () {
        var _a = this.props, visible = _a.visible, items = _a.items, cancelButtonLabel = _a.cancelButtonLabel, doneButtonLabel = _a.doneButtonLabel, ToolbarComponent = _a.ToolbarComponent;
        var selectedValue = this.state.selectedValue;
        return (React__default.createElement(Modal, { visible: visible, onRequestClose: this.onRequestClose },
            React__default.createElement(reactNative.View, { style: styles$3.container },
                ToolbarComponent != null ? (React__default.createElement(ToolbarComponent)) : (React__default.createElement(ToolbarIOS, { cancelButtonLabel: cancelButtonLabel, doneButtonLabel: doneButtonLabel, onDonePress: this.onDonePress, onCancelPress: this.onCancelPress })),
                React__default.createElement(reactNative.PickerIOS, { selectedValue: selectedValue, onValueChange: this.onValueChange }, items.map(this.renderItem)))));
    };
    return PickerImplIOS;
}(React__default.Component));
var PickerImplAndroid = /** @class */ (function (_super) {
    __extends(PickerImplAndroid, _super);
    function PickerImplAndroid(props) {
        var _this = _super.call(this, props) || this;
        _this._showPicker = function () {
            var _a = _this.props, items = _a.items, doneButtonLabel = _a.doneButtonLabel, cancelButtonLabel = _a.cancelButtonLabel;
            var selectedValue = _this.state.selectedValue;
            var options = {
                type: DialogAndroid.listRadio,
                selectedId: selectedValue,
                items: items.map(function (item) { return ({
                    label: item.label,
                    id: item.value,
                }); }),
            };
            if (doneButtonLabel === undefined) {
                doneButtonLabel = "Done";
            }
            options.positiveText = doneButtonLabel;
            if (cancelButtonLabel === null) {
                options.negativeText = "";
            }
            else {
                if (cancelButtonLabel === undefined) {
                    cancelButtonLabel = "Cancel";
                }
                options.negativeText = cancelButtonLabel;
            }
            var title = null;
            var content = null;
            DialogAndroid.showPicker(title, content, options)
                .then(function (response) {
                if (response.action === DialogAndroid.actionSelect) {
                    // If the picker is opened with pre-selected value and
                    // the user simply presses done, selectedItem will be
                    // undefined, though we have prepareValue before we
                    // open the picker. If we really hit this case,
                    // we invoke onCancel.
                    if (response.selectedItem != null) {
                        var id = response.selectedItem.id;
                        _this.props.onDone(id);
                    }
                    else {
                        _this.props.onCancel(selectedValue);
                    }
                }
                else if (response.action === DialogAndroid.actionDismiss) {
                    _this.props.onDismiss(selectedValue);
                }
                else if (response.action === DialogAndroid.actionNegative) {
                    _this.props.onCancel(selectedValue);
                }
            })
                .catch(function () { });
        };
        _this.state = {
            selectedValue: prepareValue(props),
        };
        return _this;
    }
    PickerImplAndroid.prototype.componentDidMount = function () {
        if (this.props.visible) {
            this._showPicker();
        }
    };
    PickerImplAndroid.prototype.componentDidUpdate = function (prevProps) {
        if (!prevProps.visible && this.props.visible) {
            this.setState({
                selectedValue: prepareValue(this.props),
            }, this._showPicker);
        }
    };
    PickerImplAndroid.prototype.render = function () {
        return null;
    };
    return PickerImplAndroid;
}(React__default.Component));
function Picker(props) {
    if (reactNative.Platform.OS === "ios") {
        return React__default.createElement(PickerImplIOS, __assign({}, props));
    }
    if (reactNative.Platform.OS === "android") {
        return React__default.createElement(PickerImplAndroid, __assign({}, props));
    }
    return null;
}

var defaultFormContextValue = {
    focusNext: function () { },
    setFieldInstance: function () { },
};
function createForm() {
    var _a = React.createContext(defaultFormContextValue), Provider = _a.Provider, Consumer = _a.Consumer;
    var Form = /** @class */ (function (_super) {
        __extends(Form, _super);
        function Form(props) {
            var _this = _super.call(this, props) || this;
            _this.onkeyboardDidShow = function () {
                _this.isKeyboardShowing = true;
                _this.clearAdjustContentOffsetTimeout();
                _this.adjustContentOffsetTimeoutToken = setTimeout(function () {
                    _this.scrollToFocusedTextInput();
                }, 100);
            };
            _this.onkeyboardDidHide = function () {
                _this.isKeyboardShowing = false;
            };
            _this.setFieldInstance = function (index, focusable) {
                _this.instanceMap[index] = focusable;
            };
            _this.focusNext = function (index) {
                var indice = Object.keys(_this.instanceMap)
                    .sort()
                    .map(Number)
                    .filter(function (i) { return i > index; });
                var i = indice[0];
                if (i == null) {
                    reactNative.Keyboard.dismiss();
                    return;
                }
                var focusableContainer = _this.instanceMap[i];
                if (focusableContainer != null &&
                    focusableContainer.focusableRef != null &&
                    focusableContainer.focusableRef.current != null &&
                    focusableContainer.focusableRef.current.focus) {
                    reactNative.InteractionManager.runAfterInteractions(function () {
                        var afterFocus = focusableContainer.focusableRef.current.focus();
                        if (afterFocus != null) {
                            if (afterFocus.dismissKeyboard) {
                                reactNative.Keyboard.dismiss();
                                return;
                            }
                        }
                        if (_this.isKeyboardShowing) {
                            reactNative.InteractionManager.runAfterInteractions(function () {
                                _this.scrollToFocusedTextInput();
                            });
                        }
                    });
                    return;
                }
                reactNative.Keyboard.dismiss();
            };
            _this.onScrollViewContentSizeChange = function (contentWidth, contentHeight) {
                _this.setState({
                    scrollViewContentHeight: contentHeight,
                });
                if (_this.props.onContentSizeChange) {
                    _this.props.onContentSizeChange(contentWidth, contentHeight);
                }
            };
            _this.onScrollViewLayout = function (e) {
                _this.setState({
                    scrollViewHeight: e.nativeEvent.layout.height,
                });
                if (_this.props.onLayout) {
                    _this.props.onLayout(e);
                }
            };
            _this.state = {
                context: {
                    setFieldInstance: _this.setFieldInstance,
                    focusNext: _this.focusNext,
                },
                scrollViewHeight: 0,
                scrollViewContentHeight: 0,
            };
            _this.instanceMap = {};
            _this.scrollViewRef = React.createRef();
            _this.subscriptions = [];
            _this.adjustContentOffsetTimeoutToken = null;
            _this.isKeyboardShowing = false;
            return _this;
        }
        Form.prototype.componentDidMount = function () {
            this.subscriptions = [
                reactNative.Keyboard.addListener("keyboardDidShow", this.onkeyboardDidShow),
                reactNative.Keyboard.addListener("keyboardDidHide", this.onkeyboardDidHide),
            ];
        };
        Form.prototype.componentWillUnmount = function () {
            this.clearAdjustContentOffsetTimeout();
            this.subscriptions.forEach(function (s) {
                s.remove();
            });
            this.subscriptions = [];
        };
        Form.prototype.clearAdjustContentOffsetTimeout = function () {
            if (this.adjustContentOffsetTimeoutToken != null) {
                clearTimeout(this.adjustContentOffsetTimeoutToken);
                this.adjustContentOffsetTimeoutToken = null;
            }
        };
        Form.prototype.scrollToFocusedTextInput = function () {
            this.clearAdjustContentOffsetTimeout();
            var currentlyFocusedNodeId = reactNative.TextInput.State.currentlyFocusedField();
            if (currentlyFocusedNodeId == null) {
                return;
            }
            this.scrollToFocusedField(currentlyFocusedNodeId);
        };
        Form.prototype.scrollToFocusedField = function (nodeID) {
            var _this = this;
            this.clearAdjustContentOffsetTimeout();
            if (this.scrollViewRef.current == null) {
                return;
            }
            var scrollViewNodeID = reactNative.findNodeHandle(this.scrollViewRef.current);
            if (scrollViewNodeID == null) {
                return;
            }
            this.clearAdjustContentOffsetTimeout();
            if (!this.props.autoScrollToFocusedInput) {
                return;
            }
            reactNative.UIManager.viewIsDescendantOf(nodeID, scrollViewNodeID, function (isAncestor) {
                if (!isAncestor) {
                    return;
                }
                reactNative.UIManager.measureLayout(nodeID, scrollViewNodeID, function () { }, function (_x, y) {
                    if (!_this.scrollViewRef.current) {
                        return;
                    }
                    var _a = _this.state, scrollViewContentHeight = _a.scrollViewContentHeight, scrollViewHeight = _a.scrollViewHeight;
                    if (_this.props.getScrollToTextInputOffset) {
                        var offset = _this.props.getScrollToTextInputOffset({
                            inputY: y,
                            scrollViewContentHeight: scrollViewContentHeight,
                            scrollViewHeight: scrollViewHeight,
                        });
                        _this.scrollViewRef.current.scrollTo({
                            x: 0,
                            y: offset,
                            animated: true,
                        });
                        return;
                    }
                    var scrollToInputThresholds = _this.props.scrollToInputThresholds;
                    if (scrollViewContentHeight <= scrollViewHeight ||
                        y - scrollToInputThresholds < scrollToInputThresholds) {
                        return;
                    }
                    var maxContentOffsetY = _this.state.scrollViewContentHeight -
                        _this.state.scrollViewHeight;
                    var desiredContentOffsetY = Math.min(y - scrollToInputThresholds, maxContentOffsetY);
                    _this.scrollViewRef.current.scrollTo({
                        x: 0,
                        y: desiredContentOffsetY,
                        animated: true,
                    });
                });
            });
        };
        Form.prototype.render = function () {
            var _a = this.props, children = _a.children, restProps = __rest(_a, ["children"]);
            return (React.createElement(Provider, { value: this.state.context },
                React.createElement(reactNative.ScrollView, __assign({ ref: this.scrollViewRef, alwaysBounceVertical: 
                    // Why set this false by default?
                    // It is because I dont want the form can be scrolled if the
                    // content size is smaller than the scrollview size.
                    // Imagine there is only 1 input field and if the form can be
                    // scrolled, that will be a weird UX-wise
                    false }, restProps, { onContentSizeChange: this.onScrollViewContentSizeChange, onLayout: this.onScrollViewLayout }),
                    React.createElement(reactNative.View, { style: { minHeight: this.state.scrollViewHeight } }, children))));
        };
        Form.defaultProps = {
            scrollToInputThresholds: 100,
        };
        return Form;
    }(React.Component));
    var FormField_ = /** @class */ (function (_super) {
        __extends(FormField_, _super);
        function FormField_() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.focusableRef = React.createRef();
            _this.onSubmitEditing = function (e) {
                _this.props.focusNext(_this.props.index);
                if (_this.props.onSubmitEditing != null) {
                    _this.props.onSubmitEditing(e);
                }
            };
            return _this;
        }
        FormField_.prototype.componentDidMount = function () {
            this.props.setFieldInstance(this.props.index, this);
        };
        FormField_.prototype.componentWillUnmount = function () {
            this.props.setFieldInstance(this.props.index, null);
        };
        FormField_.prototype.render = function () {
            return this.props.children({
                focusableRef: this.focusableRef,
                onSubmitEditing: this.onSubmitEditing,
                blurOnSubmit: false,
            });
        };
        return FormField_;
    }(React.Component));
    function FormField(props) {
        return React.createElement(Consumer, null, function (value) { return React.createElement(FormField_, __assign({}, props, value)); });
    }
    return {
        Form: Form,
        FormField: FormField,
    };
}

exports.createControlGroup = createControlGroup;
exports.KeyboardAvoidingView = KeyboardAvoidingView;
exports.Text = Text;
exports.TextInput = TextInput;
exports.CountryPicker = CountryPicker;
exports.SignupWithMobile = SignupWithMobile;
exports.VerifyOTP = VerifyOTP;
exports.Dialog = Dialog;
exports.RequirePermission = RequirePermission;
exports.NetworkFailureToast = NetworkFailureToast;
exports.Portal = Portal;
exports.PortalHost = PortalHost;
exports.Modal = Modal;
exports.Picker = Picker;
exports.createForm = createForm;
