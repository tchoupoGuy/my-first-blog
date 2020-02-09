import { createStore, combineReducers, applyMiddleware } from 'redux'

// Thunk
import thunk from 'redux-thunk'

// Redux Profiler (Used to look at the store state)
import { composeWithDevTools } from 'redux-devtools-extension'

// Persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Configuration for the persistance layer of Redux
const persistConfig = {
  key: 'root',
  storage
}

// The main reducer layout for the application
const rootReducer = combineReducers({
  alert
})

// Here we create the persistance layer for redux using the config and the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Here we create the store and we wrap it in a persistance store.
// This means the store will be backed up in the localstorage at all time
export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
)
export const persistor = persistStore(store)
