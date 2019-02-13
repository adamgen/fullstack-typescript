import {Router, Request} from 'express';
import {ApiInterfaceD} from '../../src/app/api.interface';


type RequestOnlyHandler<T> = (req: Request) => T;

export const Get = (path: keyof ApiInterfaceD, handler: RequestOnlyHandler<ApiInterfaceD[typeof path]['get']>) => {
  const router = Router();
  router.get(path, (request, response) => {
    const responseObj = handler(request);
    response.json(responseObj);
  });
  return router;
};

export const Post = (path: keyof ApiInterfaceD, handler: RequestOnlyHandler<ApiInterfaceD[typeof path]['post']>) => {
  const router = Router();
  router.post(path, (request, response) => {
    const responseObj = handler(request);
    response.json(responseObj);
  });
  return router;
};


export const Put = (path: keyof ApiInterfaceD, handler: RequestOnlyHandler<ApiInterfaceD[typeof path]['put']>) => {
  const router = Router();
  router.put(path, (request, response) => {
    const responseObj = handler(request);
    response.json(responseObj);
  });
  return router;
};

export const Delete = (path: keyof ApiInterfaceD, handler: RequestOnlyHandler<ApiInterfaceD[typeof path]['delete']>) => {
  const router = Router();
  router.delete(path, (request, response) => {
    const responseObj = handler(request);
    response.json(responseObj);
  });
  return router;
};
