import { UserContext, TodoInfo } from "./context"

type Props = {
  todoInfo: TodoInfo
  children: React.ReactNode
} 

const UserProvider = ({ todoInfo, children }: Props) => {
  return (
    <UserContext.Provider value={todoInfo}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider