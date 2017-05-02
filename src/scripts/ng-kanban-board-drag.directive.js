import angular 'angular';

export const ngKanbanBoardDrag = () => {
	'ngInject';
	return {
		link($scope, element, attrs) {
			let dragData = '';

			$scope.$watch(attrs.ngKanbanBoardDrag, newValue => {
				dragData = newValue;
			});

			element.bind('dragstart', event => {
				event.dataTransfer.setData('Text', angular.toJson(dragData));
			})
		}
	}
}