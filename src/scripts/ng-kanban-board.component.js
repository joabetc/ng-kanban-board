import templateUrl from './ng-kanban-board.template.html';

export const ngKanbanBoard = {
	bindings: {
		tasks: '<',
		columns: '<',
		onUpdate: '&'
	},
	templateUrl,
	controller: class ngKanbanBoard {
		constructor(ngKanbanBoardService, $log) {
			'ngInject';
			this.kanbanBoardService = ngKanbanBoardService;
		}

		$onInit() {
			this.lanes = [];
			this.stories = [];
			this.isLoading = false;
		}

		saveStory = storyToSave => {
			this.onUpdate(
			{
				$event: {
					story: storyToSave
				}
			});
		}

		onDrop = (data, targetLaneId) => {
			this.ngKanbanBoardService.moveStory(data, targetLaneId).then(storyMoved => {
				angular.forEach(this.stories, story => {
					if (story._id === storyMoved._id) {
						story.status = storyMoved.status;
						saveTask(angular.copy(story));
					}
				});
			}, onError);
		}

		const onError = errorMessage => {
			this.isLoading = false;
			$log(errorMessage);
		}
	}
}