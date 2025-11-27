/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst form = document.querySelector(\"#search-form > form\");\nconst input = document.querySelector(\"#input-localization\");\nconst sectionWeatherInfo = document.querySelector(\"#weather-info\");\nform === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", (event) => __awaiter(void 0, void 0, void 0, function* () {\n    event.preventDefault();\n    if (!input || !sectionWeatherInfo)\n        return;\n    const localization = input.value;\n    if (localization.length < 3) {\n        alert(\"O local precisa ter, pelo menos, 3 letras!\");\n        return;\n    }\n    try {\n        const apiKey = \"41902c0f78d89fd024858ef6bb102c71\";\n        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=${apiKey}&units=metric&lang=pt_br`);\n        // Checando se a resposta da API foi bem-sucedida\n        if (!response.ok) {\n            throw new Error(\"Erro ao buscar dados da API\");\n        }\n        const data = yield response.json();\n        const infos = {\n            temp: Math.round(data.main.temp),\n            localization: data.name,\n            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,\n        };\n        sectionWeatherInfo.innerHTML = `\r\n    <div class=\"weather-data\">\r\n        <h2>${infos.localization}</h2>\r\n        <span>${infos.temp}°C</span>\r\n      </div>\r\n    <img src=\"${infos.icon}\" alt=\"${infos.localization}\">\r\n  `;\n    }\n    catch (error) {\n        console.log(error);\n    }\n}));\n\n\n//# sourceURL=webpack://condicoes-do-tempo/./ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ts/index.ts"]();
/******/ 	
/******/ })()
;