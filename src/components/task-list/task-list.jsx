import React from 'react';

import Task from '../task/task';

const TaskList = ({
  todos,
  onDeleted,
  onToggleCompleted,
  onToggleEditing,
  editItem,
  onItemAdded,
}) => {
  const elements = todos.map((item) => {
    return (
      <Task
        {...item}
        key={item.id}
        onDeleted={() => onDeleted(item.id)}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        onToggleEditing={() => onToggleEditing(item.id)}
        editItem={editItem}
        onItemAdded={onItemAdded}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};
export default TaskList;
