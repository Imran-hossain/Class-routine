import React from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

import initialData from './initial-data'
import Column from './column'
//import axios from "axios";

const Container = styled.div`
  display:flex;
`


export default class Group extends React.Component {
  state = initialData
  constructor(props) {
    super(props);

    //this.getData = this.getData.bind(this);
  }


  
  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }
    const admin_token = localStorage.getItem("token");
    const admin_email = localStorage.getItem("email");
    const update_group = destination.droppableId;
    console.log(update_group);
    console.log(finishTaskIds);
    Object.keys(finishTaskIds).forEach(function (item) {
            var email = finishTaskIds[item];
            var update_email  = email;
            axios.post(`/api/groups_update`,{
                admin_email,
                admin_token,
                email,
                update_email,
                update_group
            }).then(res => {
              let result = res.data;
            })

    });


    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
    initialData = state
  }

  render() {
    return (
        
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId]
              const tasks = column.taskIds.map(
                taskId => this.state.tasks[taskId]
              )

              return (
                <Column key={column.id} column={column} tasks={tasks} />
              )
            })}
          </Container>
        </DragDropContext>
    )
  }
}
