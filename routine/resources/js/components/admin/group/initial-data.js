const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Shoikot' },
    'task-2': { id: 'task-2', content: 'Rupa' },
    'task-3': { id: 'task-3', content: 'Rajeeb' },
    'task-4': { id: 'task-4', content: 'Sumi' },
    'task-5': { id: 'task-5', content: 'Mahidul' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Group 1',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'Group 2',
      taskIds: ['task-3', 'task-4']
    },
    'column-3': {
      id: 'column-3',
      title: 'Group 3',
      taskIds: ['task-4']
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData
