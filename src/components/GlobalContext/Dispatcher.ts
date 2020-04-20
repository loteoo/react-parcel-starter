// Type-Safe™ Dispatcher based on your actions file
import * as actions from '/components/GlobalContext/actions'
type Actions = typeof actions
type ActionTypes = keyof Actions
type Dispatcher = <T extends ActionTypes>(
    action: T,
    ...payload: (T extends ActionTypes
      ? Parameters<Actions[T]>[1] extends undefined
        ? []
        : [Parameters<Actions[T]>[1]]
      : never
    )
  ) => void
export default Dispatcher
