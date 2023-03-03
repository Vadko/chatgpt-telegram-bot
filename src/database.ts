import {open} from 'lmdb';

const myDB = open({
  path: 'my-db',
  compression: true,
});

export {myDB};
