'use strict';

import templateUrl from './ng-kanban-board.template.html';

export const ngKanbanBoardComponent = {
	bindings: {
		tasks: '<',
		columns: '<',
		onUpdate: '&'
	},
	templateUrl,
	controller: class ngKanbanBoard {
		constructor($log) {
			'ngInject';
		}

		$onInit() {
			this.isLoading = false;
		}

		saveTask(taskToSave) {
			this.onUpdate(
			{
				$event: {
					story: taskToSave
				}
			});
		}

		onDrop(data, targetColId) {
			
		}

		modeTask() {

		}

		onError(errorMessage) {
			this.isLoading = false;
			$log(errorMessage);
		}
	}
};