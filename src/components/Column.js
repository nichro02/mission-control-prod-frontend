import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task.js';

const Container = styled.div`
  margin: 8px;
  border: 1px solid orange;
  border-radius: 20px;
  width: 25%;
  background-color: #b19cd9;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  text-align: center;
  
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#8565c4' : 'inherit')};
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.tasks === this.props.tasks) {
            return false
        }
        return true
    }
    render() {
        return (this.props.tasks.map((task, index) => (
           <Task key={task.id} task={task} index={index} />
        )))
    }
}

//Droppable can be sorted either vertically (by default) or horizontally

export default class Column extends React.Component {
  render() {
    return (
        <Draggable draggableId={this.props.column.id} index={this.props.index}>
            {(provided) => (

            
      <Container
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} direction='vertical' type='task'>
          {(provided, snapshot) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              <InnerList tasks={this.props.tasks} />
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
      )}
      </Draggable>
    );
  }
}