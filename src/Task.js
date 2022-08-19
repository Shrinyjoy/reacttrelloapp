import React from 'react'
import { useState } from 'react';
// import styled from 'styled-components'
import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import Chip from '@mui/material/Chip';
// import { Button } from '@mui/material';
import dataset from './dataset'


const Container = styled.div`
    border: 1px solid lightgrey;
    padding:8px;
    margin-bottom:8px;
    border-radius:2px;
    background-color:${props => (props.isDragging ? '#e0ffe0' : 'white')};
`
const Heading = styled.h4`
    padding: 0px;
    margin: opx; 
`;

function Task(props) {
    const [data, setData] = useState(dataset)
   
    const handleDelete = (index) => ()=>{
        
    setData((data) => data.filter((_, i) => i !== index));
    console.info('You clicked the delete icon.');
      };
    
        // const handleDelete = key => {
        //     setData(data.splice(key, 0)); 
        // }
        // handleDelete: (id) => {
        //     let data= this.state.dataset.filter(tas => tas.id !== id)
        //     this.setData({ data});
    // state.filter(item => item.id !== tasks.id));
    
    return (
    
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <Heading>{props.task.heading}</Heading>
                    
                    {props.task.content}
                   
                    
                     <Chip label="Delete" onDelete={handleDelete(props.index)} style={{background:"#42cbf5", color:"white"}} />  
                 
                 
                 {/* <Chip label="Delete" onDelete={(id)=>{this.data.Task.filter(item => item.id !== id)}} style={{background:"#42cbf5", color:"white"}} /> */}
                    
                    {/* <Chip label="Delete" onDelete={handleDelete} style={{background:"#42cbf5", color:"white"}} /> */}
                  
                </Container>
                

            )}
        </Draggable>
        
    )
}

export default Task