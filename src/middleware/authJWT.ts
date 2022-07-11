import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

const middlewareAuthJWT = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  verify(authorization, 'MERCAFACIL', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'jwt malformed' });
    }

    next();
  });
};

export default middlewareAuthJWT;