webpackHotUpdate("static\\development\\pages\\teams.js",{

/***/ "./pages/teams.js":
/*!************************!*\
  !*** ./pages/teams.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Head.js */ "./components/Head.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Icon.js */ "./components/Icon.js");
/* harmony import */ var _style_teams_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/teams.sass */ "./style/teams.sass");
/* harmony import */ var _style_teams_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_teams_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/data.config.js */ "./config/data.config.js");
/* harmony import */ var _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_data_config_js__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\agriffin2\\Documents\\GitHub\\1859-robotics\\pages\\teams.js";







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Head_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _config_data_config_js__WEBPACK_IMPORTED_MODULE_6___default.a.teams.map(function (team, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "team",
      key: i,
      style: {
        backgroundColor: team.color,
        color: team.txtColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, team.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: team.bgPath,
      alt: team.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, team.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Awards: ", team.awards), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Best Skills Rank: ", team.awards), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Awards: ", team.awards))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/teams")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=teams.js.edde6f32f4d5dad13791.hot-update.js.map