import React from 'react'
// import styled from 'styled-components'
import styled from '@emotion/styled'
import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Chip from '@mui/material/Chip';
// import { useState } from 'react';

const Container = styled.div`
    margin: 1rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    width:250px;
    display:flex;
    flex-direction: column;
    background-color:white;
`;
const Title = styled.h3`
    padding: 0 1rem;
    margin: 1rem 0; 
`;

const TaskList = styled.div`
    padding: 1rem;
    background-color: ${props => (props.isDraggingOver ? '#d5f3ff' : 'inherit')};
    min-height:100px;
`;

function Column(props) {
//  const [tasks, setTasks] = useState([]); 
    // const handleDelete = key => {
    //         setTasks(tasks.splice(key, 0)); // you can use the removed card if needed
    //      }
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    
                    <Droppable droppableId={props.column.id} type='task'>
                    
                        {(provided, snapshot) => (
                            
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                                <Chip label="Delete" style={{background:"#42cbf5", color:"white"}} />
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}

export default Column