/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var config_1 = __webpack_require__(2);
	var routes_1 = __webpack_require__(3);
	var application_component_1 = __webpack_require__(4);
	var components_component_1 = __webpack_require__(7);
	var project_component_1 = __webpack_require__(9);
	var accordion_control_component_1 = __webpack_require__(11);
	var app_bar_component_1 = __webpack_require__(13);
	var button_component_1 = __webpack_require__(15);
	var colors_component_1 = __webpack_require__(17);
	var demo_content_component_1 = __webpack_require__(19);
	var dialog_component_1 = __webpack_require__(21);
	var form_field_component_1 = __webpack_require__(23);
	var form_validation_component_1 = __webpack_require__(25);
	var icon_component_1 = __webpack_require__(27);
	var link_component_1 = __webpack_require__(29);
	var list_component_1 = __webpack_require__(31);
	var menu_component_1 = __webpack_require__(33);
	var nav_component_1 = __webpack_require__(35);
	var panel_component_1 = __webpack_require__(37);
	var side_nav_component_1 = __webpack_require__(39);
	var side_nav_component_2 = __webpack_require__(41);
	var tab_component_1 = __webpack_require__(43);
	var table_component_1 = __webpack_require__(45);
	var tile_component_1 = __webpack_require__(47);
	var tile_grid_component_1 = __webpack_require__(49);
	var toggle_directive_1 = __webpack_require__(51);
	var toggle_service_1 = __webpack_require__(52);
	var multi_valued_input_component_1 = __webpack_require__(53);
	var tags_component_1 = __webpack_require__(55);
	var datepicker_component_1 = __webpack_require__(57);
	var dual_column_component_1 = __webpack_require__(59);
	var comment_component_1 = __webpack_require__(61);
	var status_messages_component_1 = __webpack_require__(63);
	var header_component_1 = __webpack_require__(65);
	angular_1.module('app', [
	    'ngAria',
	    'ng-prism',
	    'ui.router'
	])
	    .config(routes_1.default)
	    .constant('config', config_1.default)
	    .component('application', application_component_1.default)
	    .component('components', components_component_1.default)
	    .component('project', project_component_1.default)
	    .component('accordionControlDocumentation', accordion_control_component_1.default)
	    .component('appBarDocumentation', app_bar_component_1.default)
	    .component('buttonDocumentation', button_component_1.default)
	    .component('colorsDocumentation', colors_component_1.default)
	    .component('commentDocumentation', comment_component_1.default)
	    .component('datepickerDocumentation', datepicker_component_1.default)
	    .component('demoContent', demo_content_component_1.default)
	    .component('dialogDocumentation', dialog_component_1.default)
	    .component('dualColumnDocumentation', dual_column_component_1.default)
	    .component('formFieldDocumentation', form_field_component_1.default)
	    .component('formValidationDocumentation', form_validation_component_1.default)
	    .component('headerDocumentation', header_component_1.default)
	    .component('iasSideNav', side_nav_component_2.default)
	    .component('iconDocumentation', icon_component_1.default)
	    .component('linkDocumentation', link_component_1.default)
	    .component('listDocumentation', list_component_1.default)
	    .component('menuDocumentation', menu_component_1.default)
	    .component('multiValuedInputDocumentation', multi_valued_input_component_1.default)
	    .component('navDocumentation', nav_component_1.default)
	    .component('panelDocumentation', panel_component_1.default)
	    .component('sideNavDocumentation', side_nav_component_1.default)
	    .component('statusMessagesDocumentation', status_messages_component_1.default)
	    .component('tabDocumentation', tab_component_1.default)
	    .component('tagsDocumentation', tags_component_1.default)
	    .component('tableDocumentation', table_component_1.default)
	    .component('tileDocumentation', tile_component_1.default)
	    .component('tileGridDocumentation', tile_grid_component_1.default)
	    .directive('iasToggle', toggle_directive_1.ToggleDirective)
	    .service('IasToggleService', toggle_service_1.default)
	    .run(['$transitions', 'IasToggleService',
	    function ($transitions, toggleService) {
	        $transitions.onStart({
	            to: 'app.component.**',
	            from: 'app.component.**'
	        }, function () {
	            toggleService.hideComponent('componentSideNav');
	            document.getElementsByClassName('components-body')[0].scrollTop = 0;
	        });
	    }
	]);
	angular_1.bootstrap(document, ['app']);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    companyName: 'Micro Focus',
	    projectName: 'ux-ias',
	    teamName: 'Micro Focus Identity, Access, and Security Group'
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	routes.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routes($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', { url: '/?dir&theme', abstract: true, component: 'application' })
	        .state('app.project', { url: '', component: 'project' })
	        .state('app.component', { url: 'component/', abstract: true, component: 'components' })
	        .state('app.component.accordionControl', {
	        url: 'accordion-control',
	        component: 'accordionControlDocumentation'
	    })
	        .state('app.component.appBar', { url: 'app-bar', component: 'appBarDocumentation' })
	        .state('app.component.button', { url: 'button', component: 'buttonDocumentation' })
	        .state('app.component.colors', { url: 'colors', component: 'colorsDocumentation' })
	        .state('app.component.comment', { url: 'comment', component: 'commentDocumentation' })
	        .state('app.component.datepicker', { url: 'datepicker', component: 'datepickerDocumentation' })
	        .state('app.component.dualColumn', { url: 'dual-column', component: 'dualColumnDocumentation' })
	        .state('app.component.dialog', { url: 'dialog', component: 'dialogDocumentation' })
	        .state('app.component.formField', { url: 'form-field', component: 'formFieldDocumentation' })
	        .state('app.component.formValidation', { url: 'form-validation', component: 'formValidationDocumentation' })
	        .state('app.component.header', { url: 'header', component: 'headerDocumentation' })
	        .state('app.component.icon', { url: 'icon', component: 'iconDocumentation' })
	        .state('app.component.link', { url: 'link', component: 'linkDocumentation' })
	        .state('app.component.list', { url: 'list', component: 'listDocumentation' })
	        .state('app.component.menu', { url: 'menu', component: 'menuDocumentation' })
	        .state('app.component.multiValuedInput', {
	        url: 'multi-valued-input',
	        component: 'multiValuedInputDocumentation'
	    })
	        .state('app.component.nav', { url: 'nav', component: 'navDocumentation' })
	        .state('app.component.page', { url: 'page', component: 'pageDocumentation' })
	        .state('app.component.panel', { url: 'panel', component: 'panelDocumentation' })
	        .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavDocumentation' })
	        .state('app.component.statusMessages', { url: 'status-messages', component: 'statusMessagesDocumentation' })
	        .state('app.component.tab', { url: 'tab', component: 'tabDocumentation' })
	        .state('app.component.tags', { url: 'tags', component: 'tagsDocumentation' })
	        .state('app.component.table', { url: 'table', component: 'tableDocumentation' })
	        .state('app.component.tile', { url: 'tile', component: 'tileDocumentation' })
	        .state('app.component.tileGrid', { url: 'tile-grid', component: 'tileGridDocumentation' });
	}
	exports.default = routes;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ApplicationComponent = (function () {
	    function ApplicationComponent($document, $state, $stateParams, config) {
	        this.$document = $document;
	        this.$state = $state;
	        this.$stateParams = $stateParams;
	        this.projectName = config.projectName;
	    }
	    ApplicationComponent.prototype.$onInit = function () {
	        this.themeLink = this.$document[0].querySelector('#theme-link');
	        this.setDisplayDirection(this.$stateParams['dir']);
	        this.setTheme(this.$stateParams['theme']);
	    };
	    ;
	    ApplicationComponent.prototype.goToComponentsView = function ($event) {
	        $event.preventDefault();
	        this.$state.go('app.component.appBar');
	    };
	    ;
	    ApplicationComponent.prototype.isComponentsView = function () {
	        return /^app.component/.test(this.$state.current.name);
	    };
	    ApplicationComponent.prototype.setDisplayDirection = function (direction) {
	        this.displayDirection = direction || 'ltr';
	        this.$document.find('body').attr('dir', this.displayDirection);
	    };
	    ;
	    ApplicationComponent.prototype.setTheme = function (theme) {
	        if (theme) {
	            this.theme = 'ux-ias' + '_' + theme;
	        }
	        else {
	            this.theme = 'ux-ias';
	        }
	        this.themeLink.href = this.themeLink.href.replace(/(\/)([^\/]+)(\.css$)/, '$1' + this.theme + '$3');
	    };
	    ;
	    ApplicationComponent.prototype.toggleDisplayDirection = function () {
	        this.displayDirection = this.displayDirection === 'ltr' ? 'rtl' : 'ltr';
	        this.$state.go('.', { dir: this.displayDirection });
	    };
	    ;
	    ApplicationComponent.prototype.toggleTheme = function () {
	        if (this.isDefaultTheme()) {
	            this.$state.go('.', { theme: 'dark' });
	        }
	        else {
	            this.$state.go('.', { theme: undefined });
	        }
	    };
	    ;
	    ApplicationComponent.prototype.isDefaultTheme = function () {
	        return this.theme === 'ux-ias';
	    };
	    ;
	    return ApplicationComponent;
	}());
	ApplicationComponent.$inject = ['$document', '$state', '$stateParams', 'config'];
	ApplicationComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(6)
	    })
	], ApplicationComponent);
	exports.default = ApplicationComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	function Component(options) {
	    return function (controller) { return angular.extend(options, { controller: controller }); };
	}
	exports.Component = Component;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = 'components/application/application.component.html';
	var html = "<header>\n    <div class=\"ias-app-bar\">\n        <h3 class=\"ias-heading\" ng-bind=\"$ctrl.projectName\"></h3>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\"\n                title=\"Toggle display direction\"\n                ng-click=\"$ctrl.toggleDisplayDirection()\"\n                ng-switch=\"$ctrl.displayDirection\">\n            <i class=\"ias-icon ias-icon-back_left_thick\" ng-switch-when=\"ltr\"></i>\n            <i class=\"ias-icon ias-icon-forward_right_thick\" ng-switch-when=\"rtl\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" ng-click=\"$ctrl.toggleTheme()\" title=\"Toggle theme\">\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\" ng-if=\"$ctrl.isDefaultTheme()\"></i>\n            <i class=\"ias-icon ias-icon-favorite_fill\" ng-if=\"!$ctrl.isDefaultTheme()\"></i>\n        </button>\n    </div>\n    <div class=\"ias-nav\">\n        <button id=\"componentsSideNavToggle\" class=\"ias-button ias-icon-button\" ng-if=\"$ctrl.isComponentsView()\" ias-toggle=\"componentSideNav\">\n            <i class=\"ias-icon ias-icon-hamburger_menu_thick\"></i>\n        </button>\n        <a ui-sref=\"app.project\" ui-sref-active=\"ias-active\">Project</a>\n        <a ui-sref=\"app.component\" ui-sref-active=\"ias-active\" ng-click=\"$ctrl.goToComponentsView($event)\">Components</a>\n        <a ui-sref=\"app.layout\" ui-sref-active=\"ias-active\" class=\"ias-disabled\" title=\"Coming soon\">Layout</a>\n        <a ui-sref=\"app.themes\" ui-sref-active=\"ias-active\" class=\"ias-disabled\" title=\"Coming soon\">Themes</a>\n        <a href=\"https://microfocus.github.io/ias-icons\" target=\"_blank\" class=\"ias-button\">Icons</a>\n    </div>\n</header>\n\n<main>\n    <div ui-view></div>\n</main>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ComponentsComponent = (function () {
	    function ComponentsComponent() {
	    }
	    return ComponentsComponent;
	}());
	ComponentsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(8)
	    })
	], ComponentsComponent);
	exports.default = ComponentsComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = 'components/components/components.component.html';
	var html = "<ias-side-nav class=\"ias-side-nav\" name=\"componentSideNav\">\n    <h3 class=\"ias-side-nav-header\">Components</h3>\n    <a ui-sref=\"app.component.accordionControl\" ui-sref-active=\"ias-active\">Accordion Control</a>\n    <a ui-sref=\"app.component.appBar\" ui-sref-active=\"ias-active\">App Bar</a>\n    <a ui-sref=\"app.component.button\" ui-sref-active=\"ias-active\">Button</a>\n    <a ui-sref=\"app.component.colors\" ui-sref-active=\"ias-active\">Colors</a>\n    <a ui-sref=\"app.component.comment\" ui-sref-active=\"ias-active\">Comment</a>\n    <a ui-sref=\"app.component.datepicker\" ui-sref-active=\"ias-active\">Datepicker</a>\n    <a ui-sref=\"app.component.dialog\" ui-sref-active=\"ias-active\">Dialog</a>\n    <!--<a ui-sref=\"app.component.dualColumn\" ui-sref-active=\"ias-active\">Dual Column</a>-->\n    <a ui-sref=\"app.component.formField\" ui-sref-active=\"ias-active\">Form Field</a>\n    <a ui-sref=\"app.component.formValidation\" ui-sref-active=\"ias-active\">Form Validation</a>\n    <a ui-sref=\"app.component.header\" ui-sref-active=\"ias-active\">Header</a>\n    <a ui-sref=\"app.component.icon\" ui-sref-active=\"ias-active\">Icon</a>\n    <a ui-sref=\"app.component.link\" ui-sref-active=\"ias-active\">Link</a>\n    <a ui-sref=\"app.component.list\" ui-sref-active=\"ias-active\">List</a>\n    <a ui-sref=\"app.component.menu\" ui-sref-active=\"ias-active\">Menu</a>\n    <!--<a ui-sref=\"app.component.multiValuedInput\" ui-sref-active=\"ias-active\">Multi-valued Input</a>-->\n    <a ui-sref=\"app.component.nav\" ui-sref-active=\"ias-active\">Nav</a>\n    <a ui-sref=\"app.component.panel\" ui-sref-active=\"ias-active\">Panel</a>\n    <a ui-sref=\"app.component.sideNav\" ui-sref-active=\"ias-active\">Side Nav</a>\n    <a ui-sref=\"app.component.statusMessages\" ui-sref-active=\"ias-active\">Status Messages</a>\n    <a ui-sref=\"app.component.tab\" ui-sref-active=\"ias-active\">Tab</a>\n    <a ui-sref=\"app.component.table\" ui-sref-active=\"ias-active\">Table</a>\n    <a ui-sref=\"app.component.tags\" ui-sref-active=\"ias-active\">Tags</a>\n    <a ui-sref=\"app.component.tile\" ui-sref-active=\"ias-active\">Tile</a>\n    <a ui-sref=\"app.component.tileGrid\" ui-sref-active=\"ias-active\">Tile Grid</a>\n</ias-side-nav>\n\n<div class=\"components-body\">\n    <div ui-view class=\"ias-content-padding\"></div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ProjectComponent = (function () {
	    function ProjectComponent(config) {
	        this.projectName = config.projectName;
	        this.teamName = config.teamName;
	    }
	    return ProjectComponent;
	}());
	ProjectComponent.$inject = ['config'];
	ProjectComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(10)
	    })
	], ProjectComponent);
	exports.default = ProjectComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = 'components/project/project.component.html';
	var html = "<div class=\"ias-content-padding\">\n    <section id=\"introduction\">\n        <h1 ng-bind=\"$ctrl.projectName\"></h1>\n        <p>\n            UX Library for Identity, Access, and Security Products (<span ng-bind=\"$ctrl.projectName\"></span>) is the\n            official CSS framework for web applications built by Micro Focus Identity, Access, and Security Group.\n            These guidelines help establish a consistent look and feel among common user interface elements throughout\n            Identity Access, and Security products. This documentation contains information about components, user\n            experience (UX) patterns, and application layout. It also contains the required structure and options\n            for the HTML that uses this framework.\n        </p>\n        <p>\n            This is only a CSS framework. Interactive components shown in this framework are not functional (they can\n            only be viewed). Please refer to <a href=\"https://github.com/microfocus/ng-ias\">ng-ias</a> to view a fully\n            functional implementation of these components.\n    </section>\n\n    <section id=\"installation\">\n        <h2>Installation</h2>\n\n        <section>\n            <h3>Manual Installation</h3>\n            <p>\n                Download <a href=\"./ux-ias.css\" target=\"_blank\">ux-ias.css</a>.\n                If you are using <a href=\"https://github.com/microfocus/ias-icons\" target=\"_blank\">ias-icons</a>,\n                add <a href=\"https://microfocus.github.io/ias-icons/ias-icons.css\" target=\"_blank\">ias-icons.css</a>\n                and the ias-icons\n                <a href=\"https://github.com/microfocus/ias-icons/tree/gh-pages/fonts\" target=\"_blank\">fonts\n                    directory</a> as well. Add the stylesheets to your HTML page:\n            </p>\n            <pre><code highlight=\"markup\">\n                &lt;link rel=\"stylesheet\" href=\"ux-ias.css\" /&gt;\n                &lt;link rel=\"stylesheet\" href=\"ias-icons.css\" /&gt;\n            </code></pre>\n        </section>\n\n        <section>\n            <h3>NPM</h3>\n            <pre><code highlight=\"clike\">\n                npm install --save --save-exact git@github.com:microfocus/ux-ias\n            </code></pre>\n        </section>\n    </section>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var AccordionControlComponent = (function () {
	    function AccordionControlComponent() {
	    }
	    return AccordionControlComponent;
	}());
	AccordionControlComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(12)
	    })
	], AccordionControlComponent);
	exports.default = AccordionControlComponent;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var path = 'components/docs/accordion-control/accordion-control.component.html';
	var html = "<h2 class=\"ias-page-title\">\n    Accordion Control\n</h2>\n\n<p class=\"ias-page-instructions\">\n    Accordion controls allow the user to switch between hiding and showing a large amount of content.\n</p>\n\n<section>\n    <h3>Closed</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Personal Information</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Open</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion ias-open\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Personal Information</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-up_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar\n                lorem nec dolor ultrices laoreet. Sed ullamcorper auctor justo, vel\n                laoreet sapien iaculis id. Ut vel augue ornare, cursus ex eget, convallis\n                ipsum.\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>With icons</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">\n                    Personal Information\n                    <i class=\"ias-icon ias-icon-message_error_thick ias-error\"></i>\n                </div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Group</h3>\n    <p>\n        Optional feature: \"Open All\" is displayed when all accordions are closed, otherwise \"Close All\" is displayed.\n    </p>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion-link\">\n            <a ui-sref=\"app.component.accordionControl\">Close All</a>\n        </div>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Personal Information</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n        <div class=\"ias-accordion ias-open\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Account Settings</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-up_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar\n                lorem nec dolor ultrices laoreet. Sed ullamcorper auctor justo, vel\n                laoreet sapien iaculis id. Ut vel augue ornare, cursus ex eget, convallis\n                ipsum.\n            </div>\n        </div>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Preferences</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var AppBarComponent = (function () {
	    function AppBarComponent() {
	    }
	    return AppBarComponent;
	}());
	AppBarComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(14)
	    })
	], AppBarComponent);
	exports.default = AppBarComponent;


/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = 'components/docs/app-bar/app-bar.component.html';
	var html = "<h1>App Bar</h1>\n<p class=\"ias-page-instructions\">The application bar is the first element of an application page that establishes our UX branding. The first example below details the attributes that define it. Consistent implementation of all the attributes will help with a consistent look.</p>\n\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code>\n        <h3 class=\"ias-heading\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\"><span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i></button>\n    </div>\n    <ul>\n        <li>Edge-to-edge implementation: never use space or margin on the top or sides.</li>\n        <li>Default background color blend (#01a9e7 --> #007cd0): colors are from the Micro Focus color guidelines.</li>\n        <li>Minimum height is 45px. When the app bar has no logo or branding image, the height is 45px.</li>\n        <li>Maximum height is 100px. No matter the image size, the implementation will only allow the height to grow to\n            the maximum.\n        </li>\n        <li>Title and user menu are center-aligned (vertical).</li>\n    </ul>\n</section>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code>\n        <div class=\"ias-avatar\">\n            <img src=\"images/branding/brand_01.png\"\n                 alt=\"\">\n        </div>\n        <h3 class=\"ias-heading\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\"><span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i></button>\n    </div>\n    <ul>\n        <li>Logo or branding image inside the app bar has an edge-to-edge design</li>\n        <li>The airplane image above is a 200 x 200 pixel image. It is proportionally sized to the app bar max-height.\n        </li>\n    </ul>\n</section>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code style=\"background: linear-gradient(to right, yellow, green)\">\n        <div class=\"ias-avatar\">\n            <img src=\"images/branding/brand_02.png\"\n                 alt=\"\">\n        </div>\n        <h3 class=\"ias-heading\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\"><span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i></button>\n    </div>\n    <ul>\n        <li>If a margin is desired for the logo, it can be added within the image file.</li>\n        <li>The HealthEquity logo is a 200 x 50 pixel image, but has a transparent background. The image includes\n            spacing, thus it adds a nice margin between the logo and the app bar border.\n        </li>\n        <li>The image inside the app bar is still edge-to-edge.</li>\n        <li>The image is proportionally sized to the max-height.</li>\n    </ul>\n</section>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code style=\"background: linear-gradient(to right, lightgray, gray)\">\n        <div class=\"ias-avatar\">\n            <img src=\"images/branding/brand_03.jpg\"\n                 alt=\"\">\n        </div>\n        <h3 class=\"ias-heading\" style=\"color: #1f1f1f\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\" style=\"color: #1f1f1f\"><span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i></button>\n    </div>\n    <ul>\n        <li>When the Logo image is less than 45px height, it is vertically centered.</li>\n    </ul>\n</section>\n\n<h3>Purpose</h3>\n<p>For product naming, branding, application scope settings/actions, and managing user state. Sometimes\n    used for notifications (using .ias-icon-button>i.ias-icon-bell_thick)</p>\n<p>Always used edge-to-edge at application scope. Never nested.</p>\n\n<h3>Nestable components</h3>\n<ul>\n    <li>img (for branding)</li>\n    <li>.ias-button</li>\n    <li>.ias-menu</li>\n    <li>span[.ias-fill]</li>\n</ul>\n\n<h3>Common patterns</h3>\n<ul>\n    <li>Nav bar underneath</li>\n    <li>User account settings menu on right side</li>\n</ul>\n\n<h3>Small Displays</h3>\n<p>Height should be shorter. Side padding should be narrower.</p>\n<p>Overflow</p>\n\n<h3>States</h3>\n<ul>\n    <li>Button hover</li>\n    <li>Button focus</li>\n    <li>Button disabled</li>\n</ul>\n\n<h3>Colors</h3>\n\n<h3>Dimensions</h3>\n\n<h3>Branding</h3>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ButtonComponent = (function () {
	    function ButtonComponent() {
	    }
	    return ButtonComponent;
	}());
	ButtonComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(16)
	    })
	], ButtonComponent);
	exports.default = ButtonComponent;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var path = 'components/docs/button/button.component.html';
	var html = "<h1>Button</h1>\n\n<section>\n\t<h3>Default Usage</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button\">Button</button>\n\t\t<div class=\"ias-button\" tabindex=\"0\">CSS Class</div>\n\t\t<a class=\"ias-button\" ui-sref=\"app.component.button\">Anchor</a>\n\t</div>\n\n\t<p>\n\t\tUse the .ias-button class on a button, div, or anchor.\n\t</p>\n</section>\n\n<section>\n\t<h3>Disabled Button</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button\" disabled>Button</button>\n\t\t<div class=\"ias-button ias-disabled\" tabindex=\"-1\">CSS Class</div>\n\t</div>\n</section>\n\n<section>\n\t<h3>Special Button</h3>\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button ias-cta\">Button</button>\n\t\t<button type=\"button\" class=\"ias-button ias-cta\" disabled=\"\">Disabled Button</button>\n\t</div>\n\n\t<ul>\n\t\t<li>Special button is used to emphasize an action within the context of a page</li>\n\t\t<li>Only use one special button per page</li>\n\t\t<li>.ias-cta</li>\n\t</ul>\n</section>\n\n<section>\n\t<h3>Icon Button</h3>\n\n\t<button class=\"ias-button ias-icon-button\" type=\"button\" repeat-as-code prism-insert-id=\"code-01\">\n\t\t<i class=\"ias-icon ias-icon-check_thick\"></i>\n\t</button>\n\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t<i class=\"ias-icon ias-icon-close_thick\"></i>\n\t</button>\n\t<button class=\"ias-button ias-icon-button\" type=\"button\" disabled=\"\">\n\t\t<i class=\"ias-icon ias-icon-new_thick\"></i>\n\t</button>\n\t<toggleable-code id=\"code-01\"></toggleable-code>\n</section>\n\n<section>\n\t<h3>Special Icon Button</h3>\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button class=\"ias-button ias-icon-button ias-cta\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-check_thick\"></i>\n\t\t</button>\n\t\t<button class=\"ias-button ias-icon-button ias-cta\" type=\"button\" disabled=\"\">\n\t\t\t<i class=\"ias-icon ias-icon-new_thick\"></i>\n\t\t</button>\n\t</div>\n</section>\n\n<section>\n\t<h3>Icons Used with Text</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button ias-menu-toggle\">\n\t\t\t<span>Menu Toggle</span>\n\t\t\t<i class=\"ias-icon ias-icon-down_thick\"></i>\n\t\t</button>\n\t\t<button type=\"button\" class=\"ias-button ias-icon-text-button\">\n\t\t\t<i class=\"ias-icon ias-icon-search_thick\"></i>\n\t\t\t<span>John Smithsonian</span>\n\t\t</button>\n\t</div>\n</section>\n\n\n<section>\n\t<h3>Selected Icon Button</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button class=\"ias-button ias-icon-button ias-selected\" type=\"button\" disabled=\"\">\n\t\t\t<i class=\"ias-icon ias-icon-view_list_thin\"></i>\n\t\t</button>\n\t\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-view_tile_thin\"></i>\n\t\t</button>\n\t\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-orgchart_thin\"></i>\n\t\t</button>\n\t</div>\n\n\t<p>\n\t\tThis shows one button that is disabled. We are unable to toggle to the table view because we are\n\t\talready in that state. The other available buttons are views that we can navigate to.\n\t</p>\n</section>\n\n<h3>Purpose</h3>\n<p>Action, navigation, and closure element on a page.</p>\n\n<h3>.ias-button</h3>\n<p>What can it apply to?</p>\n\n<h3>.ias-button.ias-cta</h3>\n<ul>\n\t<li>Usage scenario</li>\n\t<li>Limitations</li>\n</ul>\n\n<h3>Icons</h3>\n<p>Nesting icons in buttons (not .ias-icon-button) should be used sparingly. Use of icons in buttons should be\n\tthe exception. They should not be used on the left of text in a button. They can be used on the right side\n\tof text in a button to display state. If an icon is used alone you should use .ias-icon-button instead.</p>\n\n<h3>Icon Button</h3>\n\n<h5>Icon/Action assignments</h5>\n\n<table>\n\t<tr>\n\t\t<th>Icon</th>\n\t\t<th>Primary Action</th>\n\t\t<th>Other Actions</th>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td></td>\n\t\t<td></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td></td>\n\t\t<td></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td></td>\n\t\t<td></td>\n\t</tr>\n</table>\n\n<h5>Use Cases</h5>\n<ul>\n\t<li>Perform an action</li>\n\t<li>Configuration</li>\n\t<li>Use when space is limited or simplicity is desired</li>\n\t<li>Menu overflow (hamburger or vertical dots)</li>\n\t<li>List item primary and secondary actions</li>\n</ul>\n\n<h5>Dimensions</h5>\n<ul>\n\t<li>25x25 pixels is the standard size</li>\n\t<li>28x28 pixels is the size when used in the page title component</li>\n</ul>\n\n<h5>Accessibility</h5>\n<p>Always include a [title] attribute.</p>\n\n<h3>Tab support</h3>\n\n<h3>Nestable components</h3>\n<ul>\n\t<li>.ias-icon-button</li>\n\t<li>.ias-icon</li>\n\t<li>a</li>\n</ul>\n\n<h3>Nesting buttons in other components</h3>\n\n<h3>Order</h3>\n<p>Primary to secondary -> Left to Right</p>\n\n<h3>Alignment</h3>\n<p>Left aligned</p>\n\n<h3>States</h3>\n<ul>\n\t<li>hover</li>\n\t<li>focus</li>\n\t<li>disabled</li>\n</ul>\n\n<h3>Colors</h3>\n\n<h3>Dimensions</h3>\n<ul>\n\t<li>min width</li>\n\t<li>max width</li>\n</ul>\n\n<h3>Grouping</h3>\n<p>Add margin-right</p>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ColorsComponent = (function () {
	    function ColorsComponent() {
	    }
	    return ColorsComponent;
	}());
	ColorsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(18)
	    })
	], ColorsComponent);
	exports.default = ColorsComponent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var path = 'components/docs/colors/colors.component.html';
	var html = "<h1>Colors</h1>\n<p class=\"ias-page-instructions\">Establish consistent and unified color usage throughout the UI and include standard corporate colors from the Micro Focus branding guidelines.</p>\n\n<h3>Micro Focus Primary Color Palette</h3>\n<div style=\"border: 1px solid #dae1e1;\"><img src=\"images/MF_colors_IAS.png\" alt=\"\"></div>\n<p>This is the Micro Focus primary color palette. The Identity and Access product group will use the highlighted two colors as our primary product colors. The decision to use these colors from the Primary color palette, rather than the MF Primary blue, are as follows:</p>\n<ul>\n\t<li>These colors are close to the pre-MF Identity and Access branding colors.</li>\n\t<li>These colors are harmonious when used within UI elements.</li>\n\t<li>Feedback from developers and customers that the MF primary blue is too bright.</li>\n</ul>\n\n<h3>Primary Blue Colors</h3>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #007cd0; color: #fff;\">#007cd0</div>\n\t<div class=\"color-chip-name\">Primary Blue ($color-primary-2)</div>\n\t<ul>\n\t    <li>Default masthead background blend (right color)</li>\n    \t<li>Button hover text color</li>\n    \t<li>Button hover border</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #01a9e7; color: #fff;\">#01a9e7</div>\n\t<div class=\"color-chip-name\">Secondary Blue ($color-primary-4)</div>\n\t<ul>\n\t    <li>Default masthead background blend (left color)</li>\n    \t<li>Nav bar selected underline</li>\n    \t<li>Tile hover border</li>\n\t</ul>\n</div>\n\n<h3>Primary Gray Colors</h3>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #eef2f2;\">#eef2f2</div>\n\t<div class=\"color-chip-name\">Tile Gray ($color-gray-6)</div>\n\t<ul>\n\t    <li>Tile background</li>\n\t    <li>Panel background</li>\n\t    <li>Nav bar background</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #dae1e1;\">#dae1e1</div>\n\t<div class=\"color-chip-name\">Line Gray ($color-gray-5)</div>\n\t<ul>\n\t    <li>Nav bar hover</li>\n\t    <li>Button border</li>\n\t    <li>Separator line</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #808080; color: #fff;\">#808080</div>\n\t<div class=\"color-chip-name\">Label Gray ($color-gray-4)</div>\n\t<ul>\n\t    <li>Label</li>\n\t    <li>Action icon</li>\n\t    <li>Dialog title</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #434c50; color: #fff;\">#434c50</div>\n\t<div class=\"color-chip-name\">Text Gray ($color-gray-1)</div>\n\t<ul>\n\t    <li>Text and Title</li>\n\t    <li>Nav bar text</li>\n\t    <li>Menu background</li>\n\t</ul>\n</div>\n\n<h3>Blue Colors</h3>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #0067ad; color: #fff;\">#0067ad</div>\n\t<div class=\"color-chip-name\">Dark Blue ($color-primary-1)</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #007cd0; color: #fff;\">#007cd0</div>\n\t<div class=\"color-chip-name\">Primary Blue ($color-primary-2)</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #0090da; color: #fff;\">#0090da</div>\n\t<div class=\"color-chip-name\">Medium Blue ($color-primary-3)</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #01a9e7; color: #fff;\">#01a9e7</div>\n\t<div class=\"color-chip-name\">Secondary Blue ($color-primary-4)</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #29ceff; color: #fff;\">#29ceff</div>\n\t<div class=\"color-chip-name\">Light Blue ($color-primary-5)</div>\n</div>\n\n<h3>Gray Colors</h3>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #434c50; color: #fff;\">#434c50</div>\n\t<div class=\"color-chip-name\">$color-gray-1</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #575b5d; color: #fff;\">#575b5d</div>\n\t<div class=\"color-chip-name\">$color-gray-2</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #6a6f71; color: #fff;\">#6a6f71</div>\n\t<div class=\"color-chip-name\">$color-gray-3</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #808080; color: #fff;\">#808080</div>\n\t<div class=\"color-chip-name\">$color-gray-4</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #dae1e1;\">#dae1e1</div>\n\t<div class=\"color-chip-name\">$color-gray-5</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #eef2f2;\">#eef2f2</div>\n\t<div class=\"color-chip-name\">$color-gray-6</div>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #f6f9f8;\">#f6f9f8</div>\n\t<div class=\"color-chip-name\">$color-gray-7</div>\n</div>\n\n<h3>Highlight and Accent Colors</h3>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #e4f9ff;\">#e4f9ff</div>\n\t<div class=\"color-chip-name\">Selected Blue ($color-accent-6)</div>\n\t<ul>\n    \t<li>Selected tile or table cell background</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #fff6ce;\">#fff6ce</div>\n\t<div class=\"color-chip-name\">Selected Yellow ($color-accent-2)</div>\n\t<ul>\n    \t<li>Selected tile background</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #ffd92d;\">#ffd92d</div>\n\t<div class=\"color-chip-name\">Accent Yellow ($color-accent-1)</div>\n\t<ul>\n    \t<li>Selected tile border</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #f17e12; color: #fff;\">#f17e12</div>\n\t<div class=\"color-chip-name\">Accent Orange ($color-accent-3)</div>\n\t<ul>\n    \t<li>Warning text</li>\n\t</ul>\n</div>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #e50000; color: #fff;\">#e50000</div>\n\t<div class=\"color-chip-name\">Error Red ($color-accent-4)</div>\n\t<ul>\n    \t<li>Error text</li>\n    \t<li>Error icon background</li>\n\t</ul>\n</div>\n<div class=\"color-div\" style=\"margin-bottom: 100px;\">\n\t<div class=\"color-chip\" style=\"background-color: #37c26a; color: #fff;\">#37c26a</div>\n\t<div class=\"color-chip-name\">Success Green ($color-accent-5)</div>\n\t<ul>\n    \t<li>Success text</li>\n    \t<li>OK icon color</li>\n\t</ul>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DemoContentComponent = (function () {
	    function DemoContentComponent() {
	    }
	    return DemoContentComponent;
	}());
	DemoContentComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(20),
	        transclude: true
	    })
	], DemoContentComponent);
	exports.default = DemoContentComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	var path = 'components/components/demo-content.component.html';
	var html = "<div ng-transclude></div>\n<table>\n    <thead>\n    <tr>\n        <th>Name</th>\n        <th>Title</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <a ui-sref=\".\">Antonio Barboni</a>\n        </td>\n        <td>UX Director</td>\n    </tr>\n    <tr>\n        <td>\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <a ui-sref=\".\">Camelot Rinkus</a>\n        </td>\n        <td>Assistant to the UX Director</td>\n    </tr>\n    <tr>\n        <td>\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <a ui-sref=\".\">Christian Pledger</a>\n        </td>\n        <td>Secret assistant to the UX Director</td>\n    </tr>\n    </tbody>\n</table>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DialogComponent = (function () {
	    function DialogComponent() {
	    }
	    return DialogComponent;
	}());
	DialogComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(22)
	    })
	], DialogComponent);
	exports.default = DialogComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	var path = 'components/docs/dialog/dialog.component.html';
	var html = "<h1>Dialog</h1>\n<h3>Purpose</h3>\n<p>A conversation with the user. Make sure the user can give a response, even if they defer the response by closing the dialog.</p>\n\n<h3>Use case</h3>\n<ul>\n    <li>View and edit object details</li>\n    <li>Confirm object deletion</li>\n    <li>Simple forms (1 or 2 inputs)</li>\n</ul>\n<h3>Specifications</h3>\n<ul>\n    <li>Dialog glass covers all other UI elements when dialog is displayed.</li>\n    <li>Close button is always an available option.</li>\n    <li>Dialog is moveable so the user can read (through the glass) context underneath.</li>\n</ul>\n       \n<section class=\"component-dialog\" toggle-repeat-code>\n\t<h3>Simple</h3>\n\n\t<div class=\"ias-dialog\">\n\t\t<div class=\"ias-dialog-container\">\n\t\t\t<!--<div class=\"ias-dialog-title\">Dialog title</div>-->\n\t\t\t<div class=\"ias-dialog-content\">\n\t\t\t\t<p>\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n\t\t\t\t\tMorbi ex tellus, condimentum a commodo sed, sagittis non massa. Praesent eleifend a orci et lobortis.\n\t\t\t\t\tInteger vel auctor felis. Donec dignissim nulla lectus, eget porta ipsum finibus eget. Aenean non leo\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<button class=\"ias-button ias-icon-button ias-dialog-cancel-button\">\n\t\t\t\t<i class=\"ias-icon ias-icon-close_thick\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"component-dialog\" toggle-repeat-code>\n\t<h3>w/ .ias-dialog-title</h3>\n\n\t<div class=\"ias-dialog\">\n\t\t<div class=\"ias-dialog-container\">\n\t\t\t<div class=\"ias-dialog-label\">Dialog title</div>\n\t\t\t<div class=\"ias-dialog-content\">\n\t\t\t\t<p>\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n\t\t\t\t\tMorbi ex tellus, condimentum a commodo sed, sagittis non massa. Praesent eleifend a orci et lobortis.\n\t\t\t\t\tInteger vel auctor felis. Donec dignissim nulla lectus, eget porta ipsum finibus eget. Aenean non leo\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<button class=\"ias-button ias-icon-button ias-dialog-cancel-button\">\n\t\t\t\t<i class=\"ias-icon ias-icon-close_thick\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"component-dialog\" toggle-repeat-code>\n\t<h3>w/ .ias-actions</h3>\n\n\t<div class=\"ias-dialog\">\n\t\t<div class=\"ias-dialog-container\">\n\t\t\t<div class=\"ias-dialog-label\">Dialog title</div>\n\t\t\t<div class=\"ias-dialog-content\">\n\t\t\t\t<p>\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n\t\t\t\t\tMorbi ex tellus, condimentum a commodo sed, sagittis non massa. Praesent eleifend a orci et lobortis.\n\t\t\t\t\tInteger vel auctor felis. Donec dignissim nulla lectus, eget porta ipsum finibus eget. Aenean non leo\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"ias-actions\">\n\t\t\t\t<button class=\"ias-button\">OK</button>\n\t\t\t\t<button class=\"ias-button\">Cancel</button>\n\t\t\t</div>\n\t\t\t<button class=\"ias-button ias-icon-button ias-dialog-cancel-button\">\n\t\t\t\t<i class=\"ias-icon ias-icon-close_thick\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</section>\n\n<h3>Nesting</h3>\n<p>Never nested, always fixed to the window</p>\n\n<h3>Tab support</h3>\n<p>Everything else is disabled. Tab support should begin with content and end with 'X'</p>\n\n<h3>Small Displays</h3>\n\n<h3>Dimensions</h3>\n<ul>\n    <li>min width</li>\n    <li>max width</li>\n</ul>\n\n<h3>Button Order</h3>\n\n<h3>Glass</h3>\n<ul>\n    <li>Close on click</li>\n    <li>Absorb mouse events</li>\n</ul>\n\n<h3>Positioning</h3>\n<p>Not exactly middle. Should be slightly above middle (golden ratio)</p>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var FormFieldComponent = (function () {
	    function FormFieldComponent() {
	    }
	    return FormFieldComponent;
	}());
	FormFieldComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(24)
	    })
	], FormFieldComponent);
	exports.default = FormFieldComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	var path = 'components/docs/form-field/form-field.component.html';
	var html = "<h2 class=\"ias-page-title\">Form Field</h2>\n\n<section id=\"form-fields\" style=\"margin-bottom: 100px;\">\n\n\t<section>\n\t\t<h3>input</h3>\n\n\t\t<input type=\"text\" name=\"username\" autocomplete=\"off\" toggle-repeat-code/>\n\t</section>\n\t<section>\n\t\t<h3>input with placeholder</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<input type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\"/>\n\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\"/>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>label and input</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<label>\n\t\t\t\tUsername <input type=\"text\" name=\"username\" autocomplete=\"off\"/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tPassword <input type=\"password\" name=\"password\"/>\n\t\t\t</label>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-input-container w/ input</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<input type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\"/>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\"/>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-input-container w/ label</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" autocomplete=\"off\"/>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\"/>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>[disabled]</h3>\n\n\t\t<div class=\"ias-input-container\" toggle-repeat-code>\n\t\t\t<input type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\" disabled=\"disabled\"/>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>label > select</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<label>\n\t\t\t\tDrop Down 1\n\t\t\t\t<select>\n\t\t\t\t\t<option value=\"1\">Option 1</option>\n\t\t\t\t\t<option value=\"2\">Option 2</option>\n\t\t\t\t\t<option value=\"3\">Option 3</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tDrop Down 2\n\t\t\t\t<select>\n\t\t\t\t\t<option value=\"1\">Option 1</option>\n\t\t\t\t\t<option value=\"2\">Option 2</option>\n\t\t\t\t\t<option value=\"3\">Option 3</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-input-container > select w/ label</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"drop-down-1\">Drop Down 1</label>\n\t\t\t\t<select id=\"drop-down-1\">\n\t\t\t\t\t<option value=\"1\">Option 1</option>\n\t\t\t\t\t<option value=\"2\">Option 2</option>\n\t\t\t\t\t<option value=\"3\">Option 3</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"drop-down-2\">Drop Down 2</label>\n\t\t\t\t<select id=\"drop-down-2\">\n\t\t\t\t\t<option value=\"1\">Option 1</option>\n\t\t\t\t\t<option value=\"2\">Option 2</option>\n\t\t\t\t\t<option value=\"3\">Option 3</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>Radio Buttons</h3>\n\t\t<ias-input-container class=\"ias-inline\" toggle-repeat-code=\"inner\">\n    <span>\n        <input type=\"radio\" value=\"1\" name=\"radio1\" id=\"radio1-1\">\n        <label class=\"label-large-dark\" for=\"radio1-1\">One</label>\n    </span>\n\t\t\t<span>\n        <input type=\"radio\" value=\"2\" name=\"radio1\" id=\"radio1-2\">\n        <label class=\"label-large-dark\" for=\"radio1-2\">Two</label>\n    </span>\n\t\t\t<span>\n        <input type=\"radio\" value=\"3\" name=\"radio1\" id=\"radio1-3\">\n        <label class=\"label-large-dark\" for=\"radio1-3\">Three</label>\n    </span>\n\t\t</ias-input-container>\n\t</section>\n\n\t<section>\n\t\t<h3>Check Boxes</h3>\n\t\t<ias-input-container class=\"ias-inline\" toggle-repeat-code>\n\t\t\t<div>\n\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n\t\t\t\t<label class=\"label-large-dark\" for=\"checkbox1\">One</label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input type=\"checkbox\" value=\"2\" id=\"checkbox2\">\n\t\t\t\t<label class=\"label-large-dark\" for=\"checkbox2\">Two</label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input type=\"checkbox\" value=\"3\" id=\"checkbox3\">\n\t\t\t\t<label class=\"label-large-dark\" for=\"checkbox3\">Three</label>\n\t\t\t</div>\n\t\t</ias-input-container>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-input-container.ias-inline</h3>\n\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container ias-inline\">\n\t\t\t\t<label for=\"username-2\">Username</label>\n\t\t\t\t<input type=\"text\" name=\"username\" id=\"username-2\" autocomplete=\"off\"/>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container ias-inline\">\n\t\t\t\t<label for=\"password-2\">Password</label>\n\t\t\t\t<input type=\"password\" name=\"password\" id=\"password-2\"/>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>ias-input-container > textarea</h3>\n\n\t\t<div class=\"ias-input-container\" toggle-repeat-code>\n\t\t\t<label for=\"textarea-2\">Long Text</label>\n\t\t\t<textarea id=\"textarea-2\"></textarea>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-search</h3>\n\n\t\t<div class=\"ias-search\" toggle-repeat-code>\n\t\t\t<input type=\"text\" placeholder=\"Search\"/>\n\t\t\t<i class=\"ias-icon ias-icon-search_thick\"></i>\n\t\t\t<button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-autocomplete</h3>\n\n\t\t<div class=\"ias-autocomplete ias-open\" toggle-repeat-code>\n\t\t\t<div class=\"ias-search\">\n\t\t\t\t<input type=\"text\" placeholder=\"Search\"/>\n\t\t\t\t<i class=\"ias-icon ias-icon-search_thick\"></i>\n\t\t\t\t<button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n\t\t\t</div>\n\t\t\t<div class=\"ias-results\">\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 1</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 2</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 3</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 4</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 5</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var FormValidationComponent = (function () {
	    function FormValidationComponent() {
	    }
	    return FormValidationComponent;
	}());
	FormValidationComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(26)
	    })
	], FormValidationComponent);
	exports.default = FormValidationComponent;


/***/ },
/* 26 */
/***/ function(module, exports) {

	var path = 'components/docs/form-validation/form-validation.component.html';
	var html = "<h1>Form Validation</h1>\n\n<section>\n    <h3>Pristine input field</h3>\n    <p>Pristine input fields are fields which have not been interacted with. A pristine field that is in an invalid\n        state should not appear to be in an invalid state (i.e. do not display red border, validation messages, or\n        icons). After the user interacts with the input, apply invalid state styles.</p>\n\n    <div class=\"ias-input-container\">\n        <label>Pristine email input</label>\n        <input class=\"ias-invalid ias-invalid-required ias-pristine\" type=\"email\"/>\n    </div>\n\n    <div class=\"ias-input-container\">\n        <label>Non-pristine email input</label>\n        <input class=\"ias-invalid ias-invalid-required\" type=\"text\" value=\"invalidemail\"/>\n    </div>\n</section>\n\n<section>\n    <h3>Required input field</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>Label stacked <span class=\"ias-required\">*</span></label>\n            <input type=\"text\" required/>\n        </div>\n        <div class=\"ias-input-container\">\n            <label>\n                Label inline <span class=\"ias-required\">*</span>\n                <input type=\"text\" required/>\n            </label>\n        </div>\n        <div class=\"ias-input-container\">\n            <input type=\"text\" placeholder=\"Required input placeholder *\" required/>\n        </div>\n    </div>\n\n    <p>The required field element should be applied to all required input fields. This element is meant to be used in\n        regular or complex forms that have three or more input fields. Not all forms will need to use the require field\n        notification. For example, a sign in page often includes a form with username and password input fields. These\n        inputs are understood to be required to sign in, but usually don't include a required mark.</p>\n    <p>A \"required\" note is not necessary at the bottom of the form since the require asterisk is widely used and\n        understood</p>\n</section>\n\n<section>\n    <h3>Hints</h3>\n    <p>Use the following three methods to instruct the user when a user requires additional information to complete a\n        form field.</p>\n\n\n    <h4>1. Inline label hint</h4>\n    <p>Inline label hints must always be placed inside of parenthesis. The hint should be clear, short, and\n        helpful.</p>\n\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Username (min 5 characters)</label>\n        <div>\n            <div><input type=\"text\"/></div>\n        </div>\n    </div>\n\n\n    <h4>2. Validation message after input</h4>\n    <p>Validation messages placed after the input are visible only after the user has interacted with the input. The\n        text should be read and easy to read. Messages should be clear, short, and helpful. For longer messages use the\n        info icon method (see below).</p>\n\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Server</label>\n        <input class=\"ias-invalid\" type=\"text\"/>\n        <div class=\"ias-input-messages\" role=\"alert\">\n            <div class=\"ias-input-message\">Validation error</div>\n        </div>\n    </div>\n\n\n    <h4>3. Info icon to launch tooltip</h4>\n    <p>If your hint text is too complex for the other methods, use an info icon and tooltip. Clicking/Hovering the info\n        icon displays a tooltip. The tooltip should not contain extensive documentation or instructions. It should\n        contain just enough to instruct the user on how to complete the input.\n    </p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>Username <i class=\"ias-icon ias-icon-status_info_thick\" style=\"color:#0090da;\"></i></label>\n            <input type=\"text\"/>\n        </div>\n        <div class=\"ias-input-container\">\n            <label>Label <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000;\"></i></label>\n            <input class=\"ias-invalid\" type=\"text\"/>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Form Messages</h3>\n    <p>Form messages are used when portions of the form are not visible to the user (ex: in tabs, accordions, or tile\n        grids). The message should appear at the top of the form and should instruct the user that additional changes\n        are required to complete the form.</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-form-message\">\n            <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i>\n            <span>App connector needs more information.</span>\n        </div>\n        <div class=\"ias-form-message\">\n            <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i>\n            <span>More information needed before submitting.</span>\n        </div>\n    </div>\n\n    <div class=\"ias-panel\">\n        <div class=\"ias-panel-header\">\n            <div class=\"ias-panel-title\">Tile Grids</div>\n        </div>\n        <div class=\"ias-panel-body\">\n            <p>Tile grids hide information about each element in the grid. Form messages make it obvious to the user\n                that a tile in the tile grid requires additional attention. The offending tile should similarly be\n                marked as invalid.</p>\n            <img src=\"images/warning_icon1.png\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"ias-panel\">\n        <div class=\"ias-panel-header\">\n            <div class=\"ias-panel-title\">Accordion</div>\n        </div>\n        <div class=\"ias-panel-body\">\n            <p>Accordions hide information about each section. Form messages make it obvious to the user\n                that a section of the accordion requires additional attention. The offending section should similarly be\n                marked as invalid.</p>\n            <img src=\"images/warning_icon2.png\" alt=\"\">\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Invalid state styles</h3>\n\n    <h4>Invalid required field</h4>\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Label stacked <span class=\"ias-required\">*</span></label>\n        <input class=\"ias-invalid ias-invalid-required\" type=\"text\" required/>\n    </div>\n\n\n    <h4>Invalid data in a field</h4>\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>Label stacked <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i></label>\n            <input class=\"ias-invalid\" type=\"text\" value=\"data entered by user\"/>\n        </div>\n\n        <div class=\"ias-input-container\">\n            <label>\n                Label inline <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i>\n                <input class=\"ias-invalid\" type=\"text\" value=\"data entered by user\"/>\n            </label>\n\n        </div>\n    </div>\n\n\n    <h4>Invalid data in a field with message</h4>\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Email</label>\n        <input class=\"ias-invalid\" type=\"email\" value=\"smithsonian.gmail.com\"/>\n        <div class=\"ias-input-messages\" role=\"alert\">\n            <div class=\"ias-input-message\">Enter a valid email</div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Validating data asynchronously</h3>\n    <p>Sometimes it may be necessary to validate user input on a server. A loader clearly indicates to the user that\n        validation is occurring. When the validation is complete indicate to the user the result of the validation with\n        status icons. In the event that validation fails, clicking on the info icon should present a tooltip with\n        additional information to correct the error.</p>\n    <p>Asynchronous validation should be de-bounced to allow the user to complete input before validation occurs. This\n        prevents validation from occurring on each keystroke.</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>\n                Email <img class=\"ias-wait-icon ias-small\" src=\"images/waiting_25.gif\" alt=\"\">\n            </label>\n            <input type=\"email\" value=\"jonathan@smithsonian.com\"/>\n        </div>\n\n        <div class=\"ias-input-container\">\n            <label>Email <i class=\"ias-icon ias-icon-status_ok_thin\" style=\"color:#37c26a;\"></i></label>\n            <input type=\"email\" value=\"jonathan@smithsonian.com\"/>\n        </div>\n\n        <div class=\"ias-input-container\">\n            <label>Email <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i></label>\n            <input class=\"ias-invalid\" type=\"email\" value=\"jonathan.com\"/>\n        </div>\n    </div>\n\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var IconComponent = (function () {
	    function IconComponent() {
	    }
	    return IconComponent;
	}());
	IconComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(28)
	    })
	], IconComponent);
	exports.default = IconComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	var path = 'components/docs/icon/icon.component.html';
	var html = "<h1>Icon</h1>\n\n<p class=\"ias-page-instructions\">Visually add continuity, branding, and flow to otherwise homogenous data. The contrast added to the UI\ncan help make important data stand out. Adding too many icons increases visual turbulence and will decrease the icons' value.</p>\n\n<p>The following are three standard sizes. Exceptions will exist, but try to use these sizes, if possible, to contribute to a consistent look.</p>\n<section>\n\t<h3>.ias-icon</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<i class=\"ias-icon ias-icon-resource_thick\"></i>\n\t\t<i class=\"ias-icon ias-icon-phone_thick\"></i>\n\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n\t</div>\n</section>\n\n<section>\n\t<h3>w/ .ias-medium</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<i class=\"ias-icon ias-icon-resource_thick ias-medium\"></i>\n\t\t<i class=\"ias-icon ias-icon-phone_thick ias-medium\"></i>\n\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin ias-medium\"></i>\n\t</div>\n</section>\n\n<section>\n\t<h3>w/ .ias-large</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<i class=\"ias-icon ias-icon-resource_thick ias-large\"></i>\n\t\t<i class=\"ias-icon ias-icon-phone_thick ias-large\"></i>\n\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin ias-large\"></i>\n\t</div>\n</section>\n\n<!--<section>-->\n\t<!--<h3>w/ svg icons<span></span></h3>-->\n\n\t<!--<div toggle-repeat-code=\"inner\">-->\n\t\t<!--<img class=\"svg-icon\" src=\"images/account-box.svg\" alt=\"images/account-box.svg\">-->\n\t\t<!--<img class=\"svg-icon ias-medium\" src=\"images/account-box.svg\" alt=\"images/account-box.svg\">-->\n\t\t<!--<img class=\"svg-icon ias-large\" src=\"images/account-box.svg\" alt=\"images/account-box.svg\">-->\n\t<!--</div>-->\n<!--</section>-->\n\n<h3>Use Case</h3>\n<ul>\n    <li>Express state visually</li>\n    <li>Present information w/o text (use icons that have universal meaning in this case)</li>\n    <li>Represent informtion combined with icons</li>\n    <li>Express status</li>\n    <li>Identification</li>\n    <li>Represent actions with optimal space</li>\n</ul>\n\n\n<h3>Icon Font</h3>\n<p>The top navigation points to the icon font that you can include within your project. The font will give you many common icons and can be colored and sized simply via css.</p>\n\n<h3>Approved icon fonts</h3>\n<ul>\n\t<li>ias-icons</li>\n</ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var LinkComponent = (function () {
	    function LinkComponent() {
	    }
	    return LinkComponent;
	}());
	LinkComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(30)
	    })
	], LinkComponent);
	exports.default = LinkComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	var path = 'components/docs/link/link.component.html';
	var html = "<h1>Links</h1>\n<p>Navigation</p>\n\n<section>\n    <h3>Default Usage</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <a ui-sref=\"app.component.link\">New York</a>\n        <a ui-sref=\"app.component.link\">Chicago</a>\n    </div>\n</section>\n\n<section>\n    <h3>Usage (block)</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div><a ui-sref=\"app.component.link\">New York</a></div>\n        <div><a ui-sref=\"app.component.link\">Chicago</a></div>\n    </div>\n</section>\n\n<section>\n    <h3>In text</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <p>This is a <a ui-sref=\"app.component.link\">link</a> in the middle of a paragraph</p>\n        <span>This is a <a ui-sref=\"app.component.link\">link</a> in the middle of a span</span>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-link-margin</h3>\n\n    <p toggle-repeat-code>Short blurb…<a ui-sref=\"app.component.link\" class=\"ias-link-margin\">More</a></p>\n</section>\n\n<section>\n    <h3>.ias-link-no-highlight</h3>\n\n    <a ui-sref=\"app.component.link\" class=\"ias-link-no-highlight\" toggle-repeat-code>De-emphasized</a>\n</section>\n\n\n\n<!--<section>\n\t<h3>Supported Uses </h3>\n\t<a class=\"ias-button\" ui-sref=\"app.component.link\" toggle-repeat-code>Button</a>\n\t<div class=\"ias-tile ias-medium\" tabindex=\"0\" toggle-repeat-code>\n\t\t<div class=\"ias-avatar\" style=\"background-color:#eff491;\"></div>\n\t\t<div class=\"ias-tile-content\">\n\t\t\t<h3>Search</h3>\n\t\t\t<p><a ui-sref=\"app.component.link\">On a tile</a></p>\n\t\t</div>\n\t</div>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab ias-selected\">Rainy Days</div>\n\t\t<div class=\"ias-tab\">Sunny Days</div>\n\t\t<div class=\"ias-tab-base\"></div><div class=\"ias-fill\"></div>\n\t\t<a ui-sref=\"app.component.link\">In a tabset</a>\n\t</div>\n\t<div class=\"ias-nav\" toggle-repeat-code>\n\t\t<a class=\"ias-active\" ui-sref=\"app.component.nav\">Nav Link 1</a>\n\t\t<a ui-sref=\"app.component.link\">Nav Link 2</a>\n\t</div>\n</section>-->\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ListComponent = (function () {
	    function ListComponent() {
	    }
	    return ListComponent;
	}());
	ListComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(32)
	    })
	], ListComponent);
	exports.default = ListComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	var path = 'components/docs/list/list.component.html';
	var html = "<h2 class=\"ias-page-title\">Lists</h2>\n\n<h3>Default</h3>\n<section>\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\"><span>Jonathan Smithsonian</span></li>\n        <li tabindex=\"0\"><span>Camelot Rinkus</span></li>\n        <li tabindex=\"0\"><span>Christian Pledger</span></li>\n        <li tabindex=\"0\"><span>Becky Babbitt</span></li>\n    </ul>\n</section>\n\n<h3>w/ .ias-icon</h3>\n<section>\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            <span>Jonathan Smithsonian</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <span>Camelot Rinkus</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <span>Christian Pledger</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            <span>Becky Babbitt</span>\n        </li>\n    </ul>\n</section>\n\n<section>\n    <h3>w/ .ias-avatar</h3>\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <span>Search</span>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <span>OneDrive</span>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <span>Geeko</span>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <span>Version One</span>\n        </li>\n    </ul>\n</section>\n\n<section>\n    <h3>w/ secondary .ias-icon</h3>\n\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <span>Jonathan Smithsonian</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <span>Camelot Rinkus</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <span>Christian Pledger</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <span>Becky Babbitt</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n    </ul>\n</section>\n\n\n<section>\n    <h3>.ias-offset</h3>\n\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Jonathan Smithsonian</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\" class=\"ias-offset\">\n            <span>Camelot Rinkus</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Christian Pledger</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Becky Babbitt</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n    </ul>\n</section>\n\n<section toggle-repeat-code=\"\">\n    <h3>w/ .ias-list-header</h3>\n\n    <h3 class=\"ias-list-header\">List Header</h3>\n    <ul class=\"ias-list\">\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Jonathan Smithsonian</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\" class=\"ias-offset\">\n            <span>Camelot Rinkus</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Christian Pledger</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Becky Babbitt</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n    </ul>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var MenuComponent = (function () {
	    function MenuComponent() {
	    }
	    return MenuComponent;
	}());
	MenuComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(34)
	    })
	], MenuComponent);
	exports.default = MenuComponent;


/***/ },
/* 34 */
/***/ function(module, exports) {

	var path = 'components/docs/menu/menu.component.html';
	var html = "<h2 class=\"ias-page-title\">Menus</h2>\n\n<section>\n    <h3>.ias-menu-toggle</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\">\n            <span>Jonathan Smithsonian</span>\n            <i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-icon-button Menu Toggle</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-open</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <button type=\"button\" class=\"ias-button\">Button 1</button>\n                <button type=\"button\" class=\"ias-button\">Button 2</button>\n                <button type=\"button\" class=\"ias-button\">Button 3</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Complex Menu</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <div class=\"ias-row ias-border-bottom\">\n                <div class=\"ias-column ias-border-end\">\n                    <div class=\"ias-row ias-border-bottom\">\n                        <div class=\"ias-column\">\n                            <h3 class=\"ias-menu-header\">First Section</h3>\n                            <button type=\"button\" class=\"ias-button\">View My Devices</button>\n                            <button type=\"button\" class=\"ias-button\">Help Me...(end-user)</button>\n                            <button type=\"button\" class=\"ias-button\">Request impersonate session...(HelpDesk)</button>\n                        </div>\n                    </div>\n                    <div class=\"ias-row ias-border-bottom\">\n                        <div class=\"ias-column\">\n                            <h3 class=\"ias-menu-header\">Second Section</h3>\n                            <button type=\"button\" class=\"ias-button\">Button 4</button>\n                            <button type=\"button\" class=\"ias-button\">An Interesting Link</button>\n                            <button type=\"button\" class=\"ias-button\">Button 6</button>\n                            <button type=\"button\" class=\"ias-button\">Button 7</button>\n                            <button type=\"button\" class=\"ias-button\">Request Support</button>\n                            <button type=\"button\" class=\"ias-button\">Button 9</button>\n                        </div>\n                    </div>\n                    <div class=\"ias-row\">\n                        <div class=\"ias-column\">\n                            <button type=\"button\" class=\"ias-button\">Button 10</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ias-column ias-align-end\">\n                    <h3 class=\"ias-menu-header\">User Section</h3>\n                    <button type=\"button\" class=\"ias-button\">Help</button>\n                    <button type=\"button\" class=\"ias-button\">Settings</button>\n                    <button type=\"button\" class=\"ias-button\">Log Out</button>\n                </div>\n            </div>\n                <div class=\"ias-row\">\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-header\">Big Section</h3>\n                    <button type=\"button\" class=\"ias-button\">IDM Prototype</button>\n                    <button type=\"button\" class=\"ias-button\">Add Users</button>\n                    <button type=\"button\" class=\"ias-button\">Button 13</button>\n                    <button type=\"button\" class=\"ias-button\">A Button That Extends Well Beyond the Column Immediately Above It</button>\n                    <button type=\"button\" class=\"ias-button\">Button 15</button>\n                    <button type=\"button\" class=\"ias-button\">Micro Focus Branded Sign</button>\n                </div>\n            </div>\n                <div class=\"ias-row ias-border-top\">\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-footer\">VERSION 2.0</h3>\n                </div>\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-footer\">BUILD 123456</h3>\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>w/ .ias-list</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <div class=\"ias-row ias-border-bottom\">\n                    <div class=\"ias-column\">\n                        <h3 class=\"ias-list-header\">First List</h3>\n                        <ul class=\"ias-list\">\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/search_115.png)\">\n                                </div>\n                                <span>Search</span>\n                            </li>\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/oneDrive_300.png)\">\n                                </div>\n                                <span>OneDrive</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"ias-row\">\n                    <div class=\"ias-column\">\n                        <h3 class=\"ias-list-header\">Second List</h3>\n                        <ul class=\"ias-list\">\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/geeko_icon.png)\">\n                                </div>\n                                <span>Geeko</span>\n                            </li>\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/VersionOne_115.png)\">\n                                </div>\n                                <span>Version One</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var NavComponent = (function () {
	    function NavComponent() {
	    }
	    return NavComponent;
	}());
	NavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(36)
	    })
	], NavComponent);
	exports.default = NavComponent;


/***/ },
/* 36 */
/***/ function(module, exports) {

	var path = 'components/docs/nav/nav.component.html';
	var html = "<h2 class=\"ias-page-title\">Nav</h2>\n<p class=\"ias-page-instructions\">The nav bar is a wrapper that takes up the width of the page and helps the user navigate between the different parts; of the site.</p>\n\n<section>\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <a ui-sref=\"app.component.nav\">Link 2</a>\n    </div>\n</section>\n\n<section>\n    <h4>.ias-active</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <a ui-sref=\"app.component.nav\" class=\"ias-active\">Link 2</a>\n        <a ui-sref=\"app.component.nav\">Link 3</a>\n    </div>\n</section>\n\n<section>\n    <h4>Disabled Links</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <button class=\"ias-button ias-icon-button\" disabled=\"disabled\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </button>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <a class=\"ias-disabled\">Link 2</a>\n    </div>\n</section>\n\n<section>\n    <h4>Alerts Link</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <span class=\"ias-fill\"></span>\n        <a ui-sref=\"app.component.nav\"><i class=\"ias-icon ias-icon-status_warn_thick ias-warn\"></i> Alerts (14)</a>\n    </div>\n</section>\n\n<section>\n    <h4>Header (non-navigation)</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-hamburger_menu_thick\"></i>\n        </button>\n        <span>Sign in to use available applications.</span>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </button>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var PanelComponent = (function () {
	    function PanelComponent() {
	    }
	    return PanelComponent;
	}());
	PanelComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(38)
	    })
	], PanelComponent);
	exports.default = PanelComponent;


/***/ },
/* 38 */
/***/ function(module, exports) {

	var path = 'components/docs/panel/panel.component.html';
	var html = "<h2 class=\"ias-page-title\">Panel</h2>\n\n<section>\n    <h3>Default</h3>\n\n    <div class=\"ias-panel\" toggle-repeat-code>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n        Morbi ex tellus, condimentum a commodo sed, sagittis non massa <a ui-sref=\".\">eget</a>.\n    </div>\n</section>\n\n<section>\n    <h3>.ias-panel-header</h3>\n\n    <div class=\"ias-panel\" toggle-repeat-code>\n        <div class=\"ias-panel-header\">\n            <div class=\"ias-panel-title\">Header</div>\n            <span class=\"ias-fill\"></span>\n            <button class=\"ias-button\">Button</button>\n        </div>\n        <div class=\"ias-panel-body\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n            Morbi ex tellus, condimentum a commodo sed, sagittis non massa <a ui-sref=\".\">eget</a>.\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Customization</h3>\n\n    <div toggle-repeat-code>\n        <style>\n            .task-data {\n                display: flex;\n                flex-flow: row nowrap;\n            }\n\n            .task-data > div {\n                flex: 1 1;\n                text-align: center;\n            }\n\n            .task-data-label {\n                font-size: 14px;\n            }\n\n            .task-data-point {\n                color: #007cd0;\n                font-size: 3em;\n            }\n\n            .task-data-point a {\n                color: inherit;\n                padding: 0 5px;\n            }\n\n            .task-expiring .task-data-point {\n                color: darkorange;\n            }\n        </style>\n\n        <div class=\"ias-panel\">\n            <div class=\"ias-panel-header\">\n                <span>My Tasks</span>\n            </div>\n\n            <div class=\"task-data\">\n                <div>\n                    <div class=\"task-data-label\">New Tasks</div>\n                    <div class=\"task-data-point\">\n                        <a ui-sref=\"app.component.panel\">34</a>\n                    </div>\n                </div>\n                <div class=\"task-expiring\">\n                    <div class=\"task-data-label\">Expiring</div>\n                    <div class=\"task-data-point\">\n                        <a class=\"expiring\" ui-sref=\"app.component.panel\">128</a>\n                    </div>\n                </div>\n                <div>\n                    <div class=\"task-data-label\">Claimed</div>\n                    <div class=\"task-data-point\">\n                        <a ui-sref=\"app.component.panel\">34</a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"ias-panel-footer\">\n                <span>Total tasks: <strong>196</strong></span>\n            </div>\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var SideNavComponent = (function () {
	    function SideNavComponent() {
	    }
	    return SideNavComponent;
	}());
	SideNavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(40)
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;


/***/ },
/* 40 */
/***/ function(module, exports) {

	var path = 'components/docs/side-nav/side-nav.component.html';
	var html = "<h2 class=\"ias-page-title\">Side Navs</h2>\n\n<section toggle-repeat-code=\"inner\">\n    <demo-content></demo-content>\n    <div class=\"ias-side-nav ias-open\">\n        <div class=\"ias-scrim\"></div>\n        <div class=\"ias-side-nav-content\">\n            <div class=\"ias-side-nav-body\">\n                <button type=\"button\">View My Devices</button>\n                <button type=\"button\">Help Me...(end-user)</button>\n                <button type=\"button\">Request impersonate session...(HelpDesk)</button>\n                <button type=\"button\">Button 4</button>\n                <button type=\"button\">An Interesting Link</button>\n                <button type=\"button\">Button 6</button>\n                <button type=\"button\">Button 7</button>\n                <button type=\"button\">IDM Prototype</button>\n                <button type=\"button\">Add Users</button>\n                <button type=\"button\">Button 13</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section toggle-repeat-code=\"inner\">\n    <demo-content></demo-content>\n    <div class=\"ias-side-nav ias-open\">\n        <div class=\"ias-scrim\"></div>\n        <div class=\"ias-side-nav-content\">\n            <div class=\"ias-side-nav-body\">\n                <h3 class=\"ias-side-nav-header\">First Section</h3>\n                <button type=\"button\">View My Devices</button>\n                <button type=\"button\">Help Me...(end-user)</button>\n                <button type=\"button\">Request impersonate session...(HelpDesk)</button>\n\n                <h3 class=\"ias-side-nav-header\">Second Section</h3>\n                <button type=\"button\">Button 4</button>\n                <button type=\"button\">An Interesting Link</button>\n                <button type=\"button\">Button 6</button>\n                <button type=\"button\">Button 7</button>\n                <button type=\"button\">Request Support</button>\n                <button type=\"button\">Button 9</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section toggle-repeat-code=\"inner\">\n    <demo-content></demo-content>\n    <div class=\"ias-side-nav ias-open\">\n        <div class=\"ias-scrim\"></div>\n        <div class=\"ias-side-nav-content\">\n            <div class=\"ias-side-nav-body\">\n                <ul class=\"ias-list\">\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_02.png)\">\n                        </div>\n                        <span>Search</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_03.png)\">\n                        </div>\n                        <span>OneDrive</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_01.png)\">\n                        </div>\n                        <span>Geeko</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_04.png)\">\n                        </div>\n                        <span>Version One</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_02.png)\">\n                        </div>\n                        <span>Search</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_03.png)\">\n                        </div>\n                        <span>OneDrive</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var SideNavUIComponent = (function () {
	    function SideNavUIComponent($element, toggleService) {
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	    }
	    SideNavUIComponent.prototype.$onInit = function () {
	        this.toggleService.register(this);
	    };
	    SideNavUIComponent.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    SideNavUIComponent.prototype.hide = function () {
	        this.$element.removeClass('ias-open');
	        this.open = false;
	    };
	    SideNavUIComponent.prototype.show = function () {
	        this.$element.addClass('ias-open');
	        this.open = true;
	    };
	    return SideNavUIComponent;
	}());
	SideNavUIComponent.$inject = ['$element', 'IasToggleService'];
	SideNavUIComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            name: '@'
	        },
	        templateUrl: __webpack_require__(42),
	        transclude: true
	    })
	], SideNavUIComponent);
	exports.default = SideNavUIComponent;


/***/ },
/* 42 */
/***/ function(module, exports) {

	var path = 'components/components/side-nav/side-nav.component.html';
	var html = "<div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\n<div class=\"ias-side-nav-content\">\n    <div class=\"ias-side-nav-body\" ng-transclude></div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TabComponent = (function () {
	    function TabComponent() {
	    }
	    return TabComponent;
	}());
	TabComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(44)
	    })
	], TabComponent);
	exports.default = TabComponent;


/***/ },
/* 44 */
/***/ function(module, exports) {

	var path = 'components/docs/tab/tab.component.html';
	var html = "<h1>Tabs</h1>\n\n<section>\n\t<h3>Default</h3>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab ias-active\" tabindex=\"0\">Tab 1</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 2</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 3</div>\n\t\t<div class=\"ias-tab ias-disabled\">Tab 4</div>\n\t</div>\n</section>\n<section>\n\t<h3>Tabs with text link</h3>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab\" tabindex=\"0\" title=\"Short Label\">Short Label</div>\n\t\t<div class=\"ias-tab ias-active\" title=\"A bit longer label\">A bit longer label</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\" title=\"A really long label to show width\">A really long label to show width</div>\n\t\t<div class=\"ias-fill\"></div>\n\t\t<a ui-sref=\".\">Action link</a>\n\t</div>\n</section>\n<section>\n\t<h3>Tabs with .ias-icon-button</h3>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 1</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 2</div>\n\t\t<div class=\"ias-tab ias-active\">Tab 3</div>\n\t\t<div class=\"ias-tab ias-disabled\">Tab 4</div>\n\t\t<div class=\"ias-fill\"></div>\n\t\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n\t\t</button>\n\t</div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TableComponent = (function () {
	    function TableComponent() {
	    }
	    return TableComponent;
	}());
	TableComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(46)
	    })
	], TableComponent);
	exports.default = TableComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	var path = 'components/docs/table/table.component.html';
	var html = "<h1>Table</h1>\n\n<section>\n    <h3>Default</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th></th>\n            <th>Name</th>\n            <th>Title</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-search_thick\"></i>\n                </button>\n            </td>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td>Asst. to the UX Director</td>\n        </tr>\n        <tr>\n            <td>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" disabled=\"disabled\">\n                    <i class=\"ias-icon ias-icon-cancel_thick\"></i>\n                </button>\n            </td>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td>The Valiant</td>\n        </tr>\n        <tr>\n            <td>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-search_thick\"></i>\n                </button>\n            </td>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td>Destroyer of Worlds</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>.ias-icon</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Title</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n                <a ui-sref=\"app.component.table\">Jonathan Smithsonian</a>\n            </td>\n            <td>Asst. to the UX Director</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n                <a ui-sref=\"app.component.table\">Camelot Rinkus</a>\n            </td>\n            <td>The Valiant</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n                <a ui-sref=\"app.component.table\">Christian Pledger</a>\n            </td>\n            <td>Destroyer of Worlds</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>.ias-sorted</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th class=\"ias-sortable ias-sorted\">Name <i class=\"ias-icon ias-icon-flow_goto_prev_thin\"></i></th>\n            <th class=\"ias-sortable\">Title</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td>The Valiant</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td>Destroyer of Worlds</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td>Asst. to the UX Director</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>.ias-align-end</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th class=\"ias-align-end\">Owes</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td class=\"ias-align-end\">$10.21</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td class=\"ias-align-end\">$1000.21</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td class=\"ias-align-end\">$100.21</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>Actions</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th class=\"ias-align-end\">Owes</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td class=\"ias-align-end\">$10.21</td>\n            <td class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-search_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-new_thick\"></i>\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td class=\"ias-align-end\">$1000.21</td>\n            <td class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-search_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-new_thick\"></i>\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td class=\"ias-align-end\">$100.21</td>\n            <td class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-search_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-new_thick\"></i>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>Checkboxes</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th><input type=\"checkbox\" title=\"Select item\"></th>\n            <th class=\"ias-sortable ias-sorted\">Name <i class=\"ias-icon ias-icon-flow_goto_next_thin\"></i></th>\n            <th>Description</th>\n        </tr>\n        </thead>\n       <tbody>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Associate Software Engineer</a></td>\n           <td>Associate Software Engineer</td>\n       </tr>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Compliance Administrator</a></td>\n           <td>A domain administrator who has the full range of</td>\n       </tr>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Doctor</a></td>\n           <td>Doctor Role</td>\n       </tr>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Provisioning Administrator</a></td>\n           <td>Mon Aug 10 16:31:05 GMT-600 2015</td>\n       </tr>\n       </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>Configuration</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th class=\"ias-align-end\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Configure table\">\n                    <i class=\"ias-icon ias-icon-configure_thick\"></i>\n                </button>\n            </th>\n        </tr>\n        </thead>\n       <tbody>\n       <tr>\n           <td><a href=\"#\">Associate Software Engineer</a></td>\n           <td>Associate Software Engineer</td>\n           <td></td>\n       </tr>\n       <tr>\n           <td><a href=\"#\">Compliance Administrator</a></td>\n           <td>A domain administrator who has the full range of</td>\n           <td></td>\n       </tr>\n       <tr>\n           <td><a href=\"#\">Doctor</a></td>\n           <td>Doctor Role</td>\n           <td></td>\n       </tr>\n       <tr>\n           <td><a href=\"#\">Provisioning Administrator</a></td>\n           <td>Mon Aug 10 16:31:05 GMT-600 2015</td>\n           <td></td>\n       </tr>\n       </tbody>\n    </table>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TileComponent = (function () {
	    function TileComponent() {
	    }
	    return TileComponent;
	}());
	TileComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(48)
	    })
	], TileComponent);
	exports.default = TileComponent;


/***/ },
/* 48 */
/***/ function(module, exports) {

	var path = 'components/docs/tile/tile.component.html';
	var html = "<h1>Tiles</h1>\n\n<section>\n    <h3>.ias-tiny</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-small</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <div class=\"ias-tile-content\">\n                <h3>Search</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-medium</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <div class=\"ias-tile-content\">\n                <h3>Search</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus. Morbi ex tellus, condimentum a commodo sed, sagittis non</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-large</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <div class=\"ias-tile-content\">\n                <h3>Search</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus. Morbi ex tellus, condimentum a commodo sed, sagittis non</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TileGridComponent = (function () {
	    function TileGridComponent() {
	    }
	    return TileGridComponent;
	}());
	TileGridComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(50)
	    })
	], TileGridComponent);
	exports.default = TileGridComponent;


/***/ },
/* 50 */
/***/ function(module, exports) {

	var path = 'components/docs/tile-grid/tile-grid.component.html';
	var html = "<h1>Tile Grids</h1>\n\n<section class=\"grid-tiny\">\n    <h3>.ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_05.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_06.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_08.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_07.png)\">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-tiny\">\n    <h3>.ias-grid.ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"grid-small\">\n    <h3>.ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                   style=\"background-image:url(images/appmarks/mark_01.png)\">\n        </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-small\">\n    <h3>.ias-grid.ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"grid-medium\">\n    <h3>.ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-medium\">\n    <h3>.ias-grid.ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"grid-large\">\n    <h3>.ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-large\">\n    <h3>.ias-grid.ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function ToggleDirective(toggleService) {
	    return {
	        link: function (scope, element, attrs) {
	            element.on('click', function () { toggleService.toggleComponent(attrs['iasToggle'], element); });
	        },
	        restrict: 'A'
	    };
	}
	exports.ToggleDirective = ToggleDirective;
	ToggleDirective.$inject = ['IasToggleService'];


/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ToggleService = (function () {
	    function ToggleService() {
	        this.toggleableComponents = {};
	    }
	    ToggleService.prototype.hideComponent = function (componentId) {
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        toggleableElement.hide();
	    };
	    ToggleService.prototype.register = function (toggleableComponent) {
	        this.toggleableComponents[toggleableComponent.name] = toggleableComponent;
	    };
	    ToggleService.prototype.toggleComponent = function (componentId, element) {
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        if (!toggleableElement.open) {
	            toggleableElement.show(element);
	        }
	        else {
	            toggleableElement.hide();
	        }
	    };
	    return ToggleService;
	}());
	exports.default = ToggleService;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var MultiValuedInputComponent = (function () {
	    function MultiValuedInputComponent() {
	    }
	    return MultiValuedInputComponent;
	}());
	MultiValuedInputComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(54)
	    })
	], MultiValuedInputComponent);
	exports.default = MultiValuedInputComponent;


/***/ },
/* 54 */
/***/ function(module, exports) {

	var path = 'components/docs/multi-valued-input/multi-valued-input.component.html';
	var html = "<h1>Multi Valued Input</h1>\n<p class=\"ias-page-instructions\">Multi Valued input allows you to add and remove tags. If the input field is a search box then you can search for the tags already\navailable that you can add.</p>\n<h3>Search Input</h3>\n<div class=\"text\">Action:</div>\n<div class=\"ias-multi-valued\" toggle-repeat-code=\"\">\n    <div class=\"ias-input-container ias-search ias-search-multi\">\n        <input type=\"text\" placeholder=\"Search\" autocomplete=\"on\">\n        <i class=\"ias-icon ias-icon-search_thick\"></i>\n        <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Long Name</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled_folder</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n</div>\n\n<h3 class=\"multi-valued-title\">Open Search Input</h3>\n<div class=\"text\">Action:</div>\n<div class=\"ias-multi-valued-open\" toggle-repeat-code=\"\">\n    <div class=\"ias-input-container ias-search ias-search-multi\">\n        <input type=\"text\" placeholder=\"Search\" autocomplete=\"on\">\n        <i class=\"ias-icon ias-icon-search_thick\"></i>\n        <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n    </div>\n    <div class=\"ias-search-multi-open\"><p class=\"multi-search-text\">Search Result 1</p>\n        <p class=\"multi-search-text\">Search Result 2</p>\n        <p class=\"multi-search-text\">Search Result 3</p>\n        <p class=\"multi-search-text\">Search Result 4</p>\n        <p class=\"multi-search-text\">Search Result 5</p>\n    </div>\n    <div class=\"ias-search-multi-open-tags\">\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One</p><button class=\"ias-button-close-multi\">\n                <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Really Really Long Name</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">this_is_an_untitled_folder</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One Is Cool Cool Cool</p><button class=\"ias-button-close-multi\">\n                <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Really Really Long Name</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">this_is_an_untitled_folder</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n    </div>\n</div>\n\n<h3>Input</h3>\n<div class=\"text\">Action:</div>\n<div class=\"ias-multi-valued\" toggle-repeat-code>\n    <div class=\"ias-input-multi\">\n        <input type=\"text\" name=\"username\" autocomplete=\"on\">\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One</p><button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Long Name</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled_folder</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TagsComponent = (function () {
	    function TagsComponent() {
	    }
	    return TagsComponent;
	}());
	TagsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(56)
	    })
	], TagsComponent);
	exports.default = TagsComponent;


/***/ },
/* 56 */
/***/ function(module, exports) {

	var path = 'components/docs/tags/tags.component.html';
	var html = "<h2 class=\"ias-page-title\">Tags</h2>\n<p class=\"ias-page-instructions\">Tags represent lists of strings or other objects.</p>\n<div class=\"ias-tags\">\n    <h3>Text Only</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person One</span>\n        </div>\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person With a Really Long Name</span>\n        </div>\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Another Person</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"ias-tags\">\n    <h3>Text w/ Action</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person One</span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thin\"></i></button>\n        </div>\n\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person With a Really Long Name</span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thin\"></i></button>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"ias-tags\">\n    <h3>Text w/ Action and Icon</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">\n                <i class=\"ias-icon ias-icon-user_thin\"></i> Person One\n            </span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-new_thin\"></i></button>\n        </div>\n\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">\n                <i class=\"ias-icon ias-icon-folder_thin\"></i> lucky_folder_that_got_named\n            </span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-new_thin\"></i></button>\n        </div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DatepickerComponent = (function () {
	    function DatepickerComponent() {
	    }
	    return DatepickerComponent;
	}());
	DatepickerComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(58)
	    })
	], DatepickerComponent);
	exports.default = DatepickerComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	var path = 'components/docs/datepicker/datepicker.component.html';
	var html = "<h2 class=\"ias-page-title\">Datepicker</h2>\n<p class=\"ias-page-instructions\">The datepicker is tied to a standard form input field. It opens an interactive calendar\n    in small overlay.</p>\n\n<section>\n    <h3>Closed Datepicker</h3>\n\n    <button class=\"ias-button ias-icon-button\" type=\"button\" toggle-repeat-code>\n        <i class=\"ias-icon ias-icon-date_thick\"></i>\n    </button>\n    <a ui-sref=\"app.component.datepicker\" class=\"ias-link-icon\" toggle-repeat-code>\n        <span>06/29/2017</span>\n        <i class=\"ias-icon ias-icon-date_thick\"></i>\n    </a>\n    <button type=\"button\" class=\"ias-button ias-icon-text-button\" toggle-repeat-code>\n        <span>06/29/2017</span>\n        <i class=\"ias-icon ias-icon-date_thick\"></i>\n    </button>\n</section>\n\n\n<section>\n    <h3>Open Datepicker</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-date_thick\"></i>\n        </button>\n        <div class=\"ias-datepicker\">\n            <div class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-prev_left_thin\"></i>\n                </button>\n                <span tabindex=\"0\">June 2017</span>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-next_right_thin\"></i>\n                </button>\n            </div>\n            <table>\n                <thead>\n                <tr>\n                    <th>S</th>\n                    <th>M</th>\n                    <th>T</th>\n                    <th>W</th>\n                    <th>T</th>\n                    <th>F</th>\n                    <th>S</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                    <td tabindex=\"0\" class=\"ias-soften\">28</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">29</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">30</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">31</td>\n                    <td tabindex=\"0\">1</td>\n                    <td tabindex=\"0\">2</td>\n                    <td tabindex=\"0\">3</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">4</td>\n                    <td tabindex=\"0\">5</td>\n                    <td tabindex=\"0\">6</td>\n                    <td tabindex=\"0\">7</td>\n                    <td tabindex=\"0\">8</td>\n                    <td tabindex=\"0\">9</td>\n                    <td tabindex=\"0\">10</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">11</td>\n                    <td tabindex=\"0\">12</td>\n                    <td tabindex=\"0\">13</td>\n                    <td tabindex=\"0\">14</td>\n                    <td tabindex=\"0\">15</td>\n                    <td tabindex=\"0\">16</td>\n                    <td tabindex=\"0\">17</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">18</td>\n                    <td tabindex=\"0\">19</td>\n                    <td tabindex=\"0\">20</td>\n                    <td tabindex=\"0\">21</td>\n                    <td tabindex=\"0\">22</td>\n                    <td tabindex=\"0\">23</td>\n                    <td tabindex=\"0\">24</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">25</td>\n                    <td tabindex=\"0\">26</td>\n                    <td tabindex=\"0\">27</td>\n                    <td tabindex=\"0\">28</td>\n                    <td tabindex=\"0\">29</td>\n                    <td tabindex=\"0\">30</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">1</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-date_thick\"></i>\n        </button>\n        <div class=\"ias-datepicker\">\n            <div class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-prev_left_thin\"></i>\n                </button>\n                <span tabindex=\"0\">2017</span>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-next_right_thin\"></i>\n                </button>\n            </div>\n            <table class=\"ias-break\">\n                <tbody>\n                <tr>\n                    <td tabindex=\"0\">Jan</td>\n                    <td tabindex=\"0\">Feb</td>\n                    <td tabindex=\"0\">Mar</td>\n                    <td tabindex=\"0\">Apr</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">May</td>\n                    <td tabindex=\"0\">Jun</td>\n                    <td tabindex=\"0\">Jul</td>\n                    <td tabindex=\"0\">Aug</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">Sep</td>\n                    <td tabindex=\"0\">Oct</td>\n                    <td tabindex=\"0\">Nov</td>\n                    <td tabindex=\"0\">Dec</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DualColumnComponent = (function () {
	    function DualColumnComponent() {
	    }
	    return DualColumnComponent;
	}());
	DualColumnComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(60)
	    })
	], DualColumnComponent);
	exports.default = DualColumnComponent;


/***/ },
/* 60 */
/***/ function(module, exports) {

	var path = 'components/docs/dual-column/dual-column.component.html';
	var html = "<h2 class=\"ias-page-title\">Dual Column</h2>\n\n<p class=\"ias-page-instructions\">\n    Dual column selection allows the user to choose among several items and order them as he or she prefers via\n    drag and drop. Clicking the checkmark and close icons on an item selects and de-selects the item. Dragging\n    a selected item upward or downward rearranges its order in the selected item list.\n</p>\n\n<section>\n    <h3>General Use</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-bucket ias-target\">\n            <h3>Selected Columns</h3>\n            <ul>\n                <li class=\"ias-locked\">Request</li>\n                <li>Task\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Assigned to\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Recipient\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Due date\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Claimed\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Request Date\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ias-bucket\">\n            <h3>Available Columns</h3>\n            <ul>\n                <li>Type\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-back_left_thick\"></i>\n                    </button>\n                </li>\n                <li>Priority\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-back_left_thick\"></i>\n                    </button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var CommentComponent = (function () {
	    function CommentComponent() {
	    }
	    return CommentComponent;
	}());
	CommentComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(62)
	    })
	], CommentComponent);
	exports.default = CommentComponent;


/***/ },
/* 62 */
/***/ function(module, exports) {

	var path = 'components/docs/comment/comment.component.html';
	var html = "<h2 class=\"ias-page-title\">Comment</h2>\n\n<section>\n    <h3>Comment w/ Icon Actions</h3>\n\n    <div class=\"ias-comment\" toggle-repeat-code>\n        <i class=\"ias-icon ias-icon-comment_sys_thin\"></i>\n        <div class=\"ias-comment-content\">\n            <div>\n                <span class=\"ias-author\">System</span>\n                <span class=\"ias-date\">10:38 AM MDT</span>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Reply\">\n                    <i class=\"ias-icon ias-icon-comment_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Edit\">\n                    <i class=\"ias-icon ias-icon-edit_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Delete\">\n                    <i class=\"ias-icon ias-icon-delete_thin\"></i>\n                </button>\n            </div>\n            <p>System crashed.</p>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Comment w/ Menu Actions</h3>\n\n    <div class=\"section-with-menus\" toggle-repeat-code=\"inner\">\n        <div class=\"ias-comment\">\n            <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\"></div>\n            <div class=\"ias-comment-content\">\n                <div>\n                    <span class=\"ias-author\">System</span>\n                    <span class=\"ias-date\">10:45 AM MDT</span>\n                </div>\n                <p>System is back up and running.</p>\n            </div>\n\n            <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n            </button>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Comment Thread</h3>\n\n    <div class=\"ias-comment-thread\" toggle-repeat-code>\n        <div class=\"ias-header\">\n            <span>comment_thread</span>\n            <span>(3) Comments</span>\n        </div>\n        <div class=\"ias-body\">\n            <div class=\"ias-date\">June 20th, 2017</div>\n            <div class=\"ias-comment\">\n                <i class=\"ias-icon ias-icon-comment_user_thin\"></i>\n                <div class=\"ias-comment-content\">\n                    <div>\n                        <span class=\"ias-author\">Support Technician</span>\n                        <span class=\"ias-date\">4:03 PM MDT</span>\n                    </div>\n                    <p>Pellentesque aliquet vulputate justo, vitae porta.</p>\n                </div>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                    <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                </button>\n            </div>\n            <div class=\"ias-comment\">\n                <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\"></div>\n                <div class=\"ias-comment-content\">\n                    <div>\n                        <span class=\"ias-author\">System</span>\n                        <span class=\"ias-date\">4:17 PM MDT</span>\n                    </div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                       laboris nisi ut aliquip ex ea commodo consequat.</p>\n                </div>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                    <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                </button>\n            </div>\n            <div class=\"ias-date\">June 21st, 2017</div>\n            <div class=\"ias-comment\">\n                <i class=\"ias-icon ias-icon-comment_user_thin\"></i>\n                <div class=\"ias-comment-content\">\n                    <div>\n                        <span class=\"ias-author\">Support Technician</span>\n                        <span class=\"ias-date\">11:21 AM MDT</span>\n                    </div>\n                    <p>Phasellus lobortis lorem sit amet dui dapibus, vel laoreet lorem maximus.\n                       Nullam a pharetra arcu.</p>\n                </div>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                    <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"ias-footer\">\n            <div class=\"ias-comment\">\n                <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\"></div>\n                <textarea class=\"ias-comment-content\"></textarea>\n            </div>\n            <div class=\"ias-actions\">\n                <button class=\"ias-button\">Send</button>\n            </div>\n        </div>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var StatusMessagesComponent = (function () {
	    function StatusMessagesComponent() {
	    }
	    return StatusMessagesComponent;
	}());
	StatusMessagesComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(64)
	    })
	], StatusMessagesComponent);
	exports.default = StatusMessagesComponent;


/***/ },
/* 64 */
/***/ function(module, exports) {

	var path = 'components/docs/status-messages/status-messages.component.html';
	var html = "<h2 class=\"ias-page-title\">Status Messages</h2>\n<p class=\"ias-page-instructions\">Status messages notify the user with either a general message or a status update.\n    They notify errors, warnings or if the status is OK. </p>\n\n<section>\n    <h3>Default</h3>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">General Status Message</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>w/ .ias-icon</h3>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-message_error_thick ias-error\"></i>\n            <span>General Status with Icon</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-icon.ias-error</h3>\n    <div class=\"ias-status-message\">\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_error_thick ias-error\"></i>\n            <span>Error Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-icon.ias-warn</h3>\n    <div class=\"ias-status-message\">\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_warn_thick ias-warn\"></i>\n            <span>Warning Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-icon.ias-ok</h3>\n    <div class=\"ias-status-message\">\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_ok_thick ias-ok\"></i>\n            <span>OK Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    return HeaderComponent;
	}());
	HeaderComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(66)
	    })
	], HeaderComponent);
	exports.default = HeaderComponent;


/***/ },
/* 66 */
/***/ function(module, exports) {

	var path = 'components/docs/header/header.component.html';
	var html = "<h1>Headers</h1>\n<p class=\"ias-page-instructions\">\n    Headers are used within elements including pages, panels, and dialogs. The header element should be used as the\n    starting point of the UI element that contains the header.\n</p>\n\n<section>\n    <h4>h1-h5</h4>\n\n    <div toggle-repeat-code=\"inner\">\n        <h1>Page Heading 1</h1>\n        <h2>Page Heading 2</h2>\n        <h3>Page Heading 3</h3>\n        <h4>Page Heading 4</h4>\n        <h5>Page Heading 5</h5>\n    </div>\n</section>\n\n\n<section>\n    <h4>.ias-header</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n    </div>\n</section>\n\n<section>\n    <h4>w/ .ias-header-sub-title</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <h5>Sub Title</h5>\n    </div>\n</section>\n\n\n<section>\n    <h4>w/ .ias-icon-button</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-configure_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h4>w/ .ias-fill</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <h5>Sub Title</h5>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-configure_thick\"></i>\n        </button>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-close_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h4>w/ .ias-search</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <h5>Sub Title</h5>\n        <div class=\"ias-input-container ias-search\">\n            <input type=\"text\" autocomplete=\"false\" placeholder=\"Search\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <button class=\"ias-button ias-icon-button\">\n                <i class=\"ias-icon ias-icon-close_thick\"></i>\n            </button>\n        </div>\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-configure_thick\"></i>\n        </button>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-close_thick\"></i>\n        </button>\n    </div>\n</section>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ]);