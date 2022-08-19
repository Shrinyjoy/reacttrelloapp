const dataset = {
    tasks: {
        "task-1": { id: "task-1", heading: "Content for task 1", content: "Lorem ipsum dolor sit amet from content1" },
        "task-2": { id: "task-2", heading: "Content for task-2", content: "Lorem ipsum dolor sit amet from content2" },
        "task-3": { id: "task-3", heading: "Content for task-3", content: "Lorem ipsum dolor sit amet from content3" },
        "task-4": { id: "task-4", heading: "Content for task-4", content: "Lorem ipsum dolor sit amet from content4" },
        "task-5": { id: "task-5", heading: "Content for task-5", content: "Lorem ipsum dolor sit amet from content5" },
        "task-6": { id: "task-6", heading: "Content for task-6", content: "Lorem ipsum dolor sit amet from content6" }
    },
    columns: {
        "column-1": { id: "column-1", title: "Todo", taskIds: ['task-1', 'task-2'] },
        "column-2": { id: "column-2", title: "In progress", taskIds: ['task-2', 'task-3', 'task-4'] },
        "column-3": { id: "column-3", title: "Review", taskIds: [] },
        "column-4": { id: "column-4", title: "Completed", taskIds: ["task-6"] }
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"]
}

export default dataset