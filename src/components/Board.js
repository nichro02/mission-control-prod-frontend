import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column.js'
import data from '../seederData.js'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
`

export const InnerList = class InnerList extends React.PureComponent {
  render(){
    const { column, taskMap, index } = this.props
    const tasks = column.taskIds.map(taskId => taskMap[taskId])
    return <Column column={column} tasks={tasks} index={index} />
  }
}

export default class Board extends React.Component {
    state = data;
  
    onDragEnd = result => {
      const { destination, source, draggableId, type } = result;
  
      if (!destination) {
        return;
      }
  
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
  
      if(type === 'column'){
        const newColumnOrder = Array.from(this.state.columnOrder)
        newColumnOrder.splice(source.index, 1)
        newColumnOrder.splice(destination.index, 0, draggableId)
  
        const newState = {
          ...this.state,
          columnOrder: newColumnOrder
        }
        this.setState(newState)
        return
      }
  
  
      //column at start of drag and column at end of drag
      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId]
  
      if(start === finish){
        const newTaskIds = Array.from(start.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)
  
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
  
      this.setState(newState);
      return
      }
  
      //Moving a task from one column to another
      const startTaskIds = Array.from(start.taskIds)
      startTaskIds.splice(source.index, 1)
  
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      }
  
      const finishTaskIds = Array.from(finish.taskIds)
      finishTaskIds.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      }
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      }
      this.setState(newState)
    };
  
    render() {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId='all-columns' direction='horizontal' type='column'>
          {(provided) => (
          <Container
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {this.state.columnOrder.map((columnId, index) => {
              const column = this.state.columns[columnId];
              // const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
              // return <Column key={column.id} column={column} tasks={tasks} index={index}/>;
              return(
                <InnerList
                  key={column.id}
                  column={column}
                  index={index}
                  taskMap={this.state.tasks}
                />
              )
            })}
            {provided.placeholder}
          </Container>
          )}
          </Droppable>
        </DragDropContext>
      );
    }
  }
