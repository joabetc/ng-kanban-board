exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/e2e/ng-kanban-board.js'],
  capabilities: {
    'browserName': 'firefox'
  }
};
