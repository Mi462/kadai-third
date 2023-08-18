
import { createContext } from "react";

export type TodoInfo = {
  id: string;
  todo: string;
  state: string;
}

export const UserContext = createContext<TodoInfo>({id: "",  todo: "", state: "waiting"})