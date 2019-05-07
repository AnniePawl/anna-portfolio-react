# Redux 
Tool for managing application state 
JS Implementation of Flux pattern

# Flux Pattern 
- An app architecture for building client-side web apps 
- Utliilizes unidirectional data flow 
    - Action -> Dispatcher -> Store -> View 

### Action: Object with a type
      - Type(always a string) and Payload(data, can be anything)
      - Action Creator: Function, returns object 
###  Dispatcher
      - Reducer: (function) Makes changes to state 
      - Takes in state and actions, makes decisions, returns new state
### Store 
    -Dispatcher makes changes to Store 

1. Identify Application State 
2. Define Actions and Action Creators 
3. Define Reducers 

## Application State 


Actions 
