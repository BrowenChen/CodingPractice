'use strict';

angular.module('AngularFlask', ['angularFlaskServices'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/landing.html',
			controller: IndexController
		})
		.when('/about', {
			templateUrl: 'static/partials/about.html',
			controller: AboutController
		})
		.when('/post', {
			templateUrl: 'static/partials/post-list.html',
			controller: PostListController
		})
		.when('/post/:postId', {
			templateUrl: '/static/partials/post-detail.html',
			controller: PostDetailController
		})
		/* Create a "/blog" route that takes the user to the same place as "/post" */
		.when('/blog', {
			templateUrl: 'static/partials/post-list.html',
			controller: PostListController
		})
		.when('/tasks',{
			templateUrl: 'static/partials/tasks.html',
			contoller: TaskController
		})
        .when('/classroom', {
        	templateUrl: 'static/partials/classroom.html',
        	controller: StudentController
        })
        .when('/goals', {
        	templateUrl: 'static/partials/goals.html',
        	controller: GoalsController
        })
		.otherwise({
			redirectTo: '/'
		})
		;

		$locationProvider.html5Mode(true);
	}])
;