(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngKanbanBoard.directives', [
      'ngKanbanBoard.controllers'
    ])
    .directive('testDirective', [
      function() {
        return {
          restrict: 'E',
          controller: 'TestController',
          scope: {},
          template: '<div class="ng-kanban-board">{{message}}</div>'
        };
      }
    ]);

})(window, window.angular);
