import angular from 'angular';

export const ngKanbanBoardDrop =  = () => {
	'ngInject';
	return {
		restrict: 'A',
		link(scope, element, attrs) {
			const dragOverClass = attrs.ngKanbanBoardDrop;

			const cancel = event => {
				if (event.preventDefault) {
					event.preventDefault();
				}

				if (event.stopPropigation) {
					event.stopPropigation();
				}

				return false;
			};

			element.bind('dragover', event => {
				cancel(event);
				event.dataTransfer.dropEffect = 'move';
				element.addClass(dragOverClass);
			});

			element.bind('drop', event => {
				cancel(event);
				element.removeClass(dragOverClass);

				const droppedData = angular.fromJson(event.dataTransfer.getData('Text'));
				scope.onDrop(droppedData, element.attr('id'));
			});

			element.bind('dragleave', () => {
				element.removeClass(dragOverClass);
			})
		}
	}
}