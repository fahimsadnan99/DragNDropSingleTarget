import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const App = () => {
  let [list,setList] = useState([
    { id: 1, text: "Player 1" },
    { id: 2, text: "Player 2" },
    { id: 3, text: "Player 3" },
    { id: 4, text: "Player 4" },
    { id: 5, text: "Player 5" },
    { id: 6, text: "Player 6" },
    { id: 7, text: "Player 7" },
    { id: 8, text: "Player 8" },
  ])


  let handleDrag = (value)=>{

    if(!value.destination) return
    let data = Array.from(list)
    let [reorderData] = data.splice(value.source.index,1)
     data.splice(value.destination.index, 0 , reorderData)
    setList(data)

 
  }
  return (
    
      <div className="px-52">
        <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="list">
          {(provider) => (
            <div
              {...provider.droppableProps}
              ref={provider.innerRef}
              className="bg-slate-600 my-5 h-screen max-w-[400px]"
            >
              <p className="text-3xl text-center text-white font-semibold bg-red-700 ">Team</p>

              {list?.map((list, index) => {
                return (
                  <Draggable  key={list.id} draggableId={list.id.toString()} index={index}>
                    {(provider) => (
                      <div ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps} >
                       <p className="bg-white mx-10 rounded-sm shadow-md shadow-black p-3 font-semibold text-center mt-3" >{list.text}</p> 
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provider.placeholder}
            </div>
          )}
        </Droppable>
        </DragDropContext>
      </div>
   
  );
};

export default App;

