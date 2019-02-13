import {Get} from '../routerMethods';

const router = Get('/api', (request) => { // ts error since the return types don't match
  return {
    name: 'Adam',
    email: 'adam@example.com',
    age: 29 // comment this so see ts warning
  };
});

export const usersGet = router;
