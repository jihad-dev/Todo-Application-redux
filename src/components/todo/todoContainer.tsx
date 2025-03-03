import { useAppSelector } from "../../hooks/hook";
import { TodoModel } from "./AddTodoModal";

import TodoCard from "./todoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      <div className="flex justify-between my-10">
         <TodoModel/>
        <TodoFilter />
      </div>
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-full h-full rounded-xl space-y-5 p-1">
        {todos.length === 0 ? ( // Corrected conditional logic
          <div className="bg-white flex justify-center items-center rounded-md p-3 font-bold">
            <p>There is no Task Available !!</p>
          </div>
        ) : (
          todos.map((item) => (
            <TodoCard
              title={item.title}
              description={item.description}
              key={item.id} // Use a unique identifier from the data
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoContainer;