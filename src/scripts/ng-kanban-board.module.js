'use strict';

import angular from '../../bower_components/angular';
import { ngKanbanBoardComponent } from './ng-kanban-board.component';
import { ngKanbanBoardDrag } from './ng-kanban-board-drag.directive';
import { ngKanbanBoardDrop } from './ng-kanban-board-drop.directive';
import '../styles/ng-kanban-board.scss';

export const ngKanbanBoard = angular
	.module('ngKanbanBoardModule', [])
	.component('ngKanbanBoardComponent', ngKanbanBoardComponent)
	.directive('ngKanbanBoardDrag', ngKanbanBoardDrag)
	.directive('ngKanbanBoardDrop', ngKanbanBoardDrop)
	.name;