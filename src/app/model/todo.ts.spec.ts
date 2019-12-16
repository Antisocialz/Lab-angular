import { Todo } from './todo';

describe('Todo.Ts', () => {
  it('should create an instance', () => {
    expect(new Todo('txt')).toBeTruthy();
  });
});
