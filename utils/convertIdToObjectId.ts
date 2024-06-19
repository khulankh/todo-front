import { ObjectId } from "mongodb";

export const convertIdToObjectId = (id: number) => {
  return new ObjectId(id);
};
