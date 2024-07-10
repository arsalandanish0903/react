import React, { useState } from 'react';

function TodosList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const handleRemove = (index) => {
    const newTaskList = [...tasks];
    newTaskList.splice(index, 1);
    setTasks(newTaskList);
  };

  const handleCheckBox = (index) => {
    const newTaskList = [...tasks];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTasks(newTaskList);
  };

  return (
    <>
      <div className='w-full flex justify-center h-auto'>
        <div className='bg-purple-400 h-auto mt-20 px-3 py-3'>
          <input
            type='text'
            className='px-2 h-9 focus:outline-none'
            value={newTask}
            onChange={handleChange}
            onKeyDown={handleEnterPress}
            placeholder='Enter Text'
          />
          <button
            onClick={addTask}
            className='ml-4 px-8 bg-purple-600 text-white border-none py-2'
          >
            Add
          </button>
          <div className='w-full'>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between text-white py-2 bg-purple-600 px-2 my-2 ${task.completed ? 'line-through' : ''}`}
                >
                  {task.text}
                  <div>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleCheckBox(index)}
                    />
                    <i
                      className='fa fa-trash-o cursor-pointer text-white text-xl px-3'
                      aria-hidden='true'
                      onClick={() => handleRemove(index)}
                    ></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodosList;
