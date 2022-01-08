'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ngx-monaco-editor-demo documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/MonacoEditorModule.html\" data-type=\"entity-link\" >MonacoEditorModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"' : 'data-target="#xs-components-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"' : 'id="xs-components-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/MonacoDiffEditorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MonacoDiffEditorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MonacoEditorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MonacoEditorComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#directives-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"' : 'data-target="#xs-directives-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"' : 'id="xs-directives-links-module-MonacoEditorModule-84056bea90da3fb3b39a30e823a6bf5b542b3a8b108ab1c1168ccbc4e141eb76811c8a4f27adcdb34e04e7911a65ecd7d21920e599a6f6db1d73aab948bdcc5b"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/MonacoEditorLoaderDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MonacoEditorLoaderDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CancellationTokenSource.html\" data-type=\"entity-link\" >CancellationTokenSource</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Emitter.html\" data-type=\"entity-link\" >Emitter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/KeyMod.html\" data-type=\"entity-link\" >KeyMod</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Position.html\" data-type=\"entity-link\" >Position</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Range.html\" data-type=\"entity-link\" >Range</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Selection.html\" data-type=\"entity-link\" >Selection</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Token.html\" data-type=\"entity-link\" >Token</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Uri.html\" data-type=\"entity-link\" >Uri</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/MonacoEditorLoaderService.html\" data-type=\"entity-link\" >MonacoEditorLoaderService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/CancellationToken.html\" data-type=\"entity-link\" >CancellationToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Environment.html\" data-type=\"entity-link\" >Environment</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IDisposable.html\" data-type=\"entity-link\" >IDisposable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IEvent.html\" data-type=\"entity-link\" >IEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IKeyboardEvent.html\" data-type=\"entity-link\" >IKeyboardEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IMarkdownString.html\" data-type=\"entity-link\" >IMarkdownString</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IMouseEvent.html\" data-type=\"entity-link\" >IMouseEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IPosition.html\" data-type=\"entity-link\" >IPosition</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IRange.html\" data-type=\"entity-link\" >IRange</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IScrollEvent.html\" data-type=\"entity-link\" >IScrollEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ISelection.html\" data-type=\"entity-link\" >ISelection</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UriComponents.html\" data-type=\"entity-link\" >UriComponents</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Window.html\" data-type=\"entity-link\" >Window</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));