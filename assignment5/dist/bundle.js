/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("let button = document.getElementById(\"button\");\r\nlet hover = document.getElementById(\"hover\");\r\n\r\nlet Acell = document.getElementsByClassName(\"Acell\");\r\nlet Bcell = document.getElementsByClassName(\"BCell\");\r\n\r\nlet colorChanged = false;\r\nlet textChanged = false;\r\n\r\nbutton.addEventListener(\"click\", ()=>{\r\n    if(textChanged){\r\n        console.log(\"if\");\r\n        textChanged = false;\r\n    } else{\r\n        console.log(\"else\");\r\n        button.innerText = \"Welcome to my Assignment 1 Webpage!\";\r\n        textChanged = true;\r\n    }\r\n});\r\n\r\nhover.addEventListener(\"mouseover\", ()=>{\r\n    for(const cell of Acell){\r\n        cell.style.backgroundColor= \"black\";\r\n    }\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;