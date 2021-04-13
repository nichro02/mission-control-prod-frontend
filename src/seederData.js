const data = {
    tasks: {
        'task1': {id:'task1', content:'Take out the garbage'},
        'task2': {id:'task2', content: 'Cook dinner'},
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'To Do',
            taskIds: ['task1', 'task2']
        },
        'column2': {
            id: 'column2',
            title: 'In Progress',
            taskIds: [],
        },
        'column3': {
            id: 'column3',
            title: 'Done',
            taskIds: [],
        }
    },
    //facilitate reordering columns
    columnOrder: ['column1', 'column2', 'column3'],
}

export default data