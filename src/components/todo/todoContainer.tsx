import { Button } from "../ui/button";
import { TodoModel } from "./AddTodoModal";

import TodoCard from "./todoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between my-10">
        <TodoModel />
        <TodoFilter />
      </div>
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-full h-full rounded-xl space-y-5 p-1">
        <div className="bg-white p-5  w-full h-full rounded-md">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white flex justify-center items-center rounded-md p-3 font-bold">
            <p>There is no Task </p>
         </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
