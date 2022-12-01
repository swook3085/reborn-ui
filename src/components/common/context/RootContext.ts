import { createContext } from 'react'

const RootContext = createContext({ prefix: '' })

export const RootProvider = RootContext.Provider
export const RootConsumer = RootContext.Consumer

export default RootContext
