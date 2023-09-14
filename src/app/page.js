import TodoList from "./comps/todolist.js";
import Add from "./comps/add.js";
export default function Home() {
  return (
    <>
      <h1>My To Dos</h1>
      <Add />
      <TodoList />
    </>
  );
}
