// import TodoList from '@/components/layout/todo-list/todo-list';
import Container from '@/components/layout/container/container';
import './todo-list.scss';

// #======================== Page ========================# //

function Page(): React.JSX.Element {
  return (
    <main className='todo-list-page'>
      <Container>
        <div className='todo-list-page__inner'>{/* <TodoList /> */}</div>
      </Container>
    </main>
  );
}
export default Page;
