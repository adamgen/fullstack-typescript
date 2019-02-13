export interface User {
  name: string;
  age: number;
  email: string;
}

export interface RestMethods<TGet, TPost = undefined, TPut = undefined, TDelete = undefined> {
  get: TGet;
  post: TPost;
  put: TPut;
  delete: TDelete;
}

export interface ApiInterfaceD {
  '/api': RestMethods<User>;
}
