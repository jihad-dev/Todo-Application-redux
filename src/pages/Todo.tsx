import React from 'react';
import TodoContainer from '../components/todo/todoContainer';
import Container from '../components/ui/container';

const Todo = () => {
    return (
        <Container>
            <h1 className='text-3xl font-semibold text-center my-10'>my Todos</h1>
        <TodoContainer/>
        </Container>
    );
};

export default Todo;