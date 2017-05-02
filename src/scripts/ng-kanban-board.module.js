import angular from 'angular';
import { ngKanbanBoard } from './ng-kanban-board.component';
import '../styles/ng-kanban-board.scss';

export const ngKanbanBoard = angular
	.module('ngKanbanBoard', [])
	.component('ngKanbanBoard', ngKanbanBoard)
	.directive('ngKanbanBoardDrag', ngKanbanBoardDrag)
	.directive('ngKanbanBoardDrop', ngKanbanBoardDrop)
	.name;