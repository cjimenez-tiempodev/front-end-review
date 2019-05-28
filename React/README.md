## React

## General
<details>
  <summary>More</summary>

[React](#React)

[Virtual DOM](#Virtual-DOM)

[Features](#Features)

[JSX](#JSX)

## React

<details>
  <summary>More</summary>

  * React is a front-end JavaScript library developed by Facebook in 2011.
  * It follows the component based approach which helps in building reusable UI components.
  * It is used for developing complex and interactive web and mobile UI.
  * Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

</details>

## Virtual DOM

<details>
  <summary>More</summary>

  The virtual DOM is only a virtual representation of the DOM. Everytime the state of our application changes, the virtual DOM gets updated instead of the real DOM.

  When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.

  Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM.

</details>

## Features

<details>
  <summary>More</summary>

  * It uses the virtual DOM instead of the real DOM.
  * It uses server-side rendering.
  * It follows uni-directional data flow or data binding.

</details>

## JSX

<details>
  <summary>More</summary>

  * It is a syntax extension to JavaScript.
  * JSX produces React “elements”.
  * This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax.
  Example:
  ```
  render(){
    return(        
      <div>
        <h1> Hello World from Edureka!!</h1>
      </div>
    );
  }
```

Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.

</details>

</details>

## Component
<details>
  <summary>More</summary>

[Components](#Components)

[render()](#render())

[Elements](#Elements)

[Props](#Props)

[state](#state)

[stateless component](#stateless-component)

[stateful component](#statefull-component)

[Presentational components](#Presentational-components)

[Container component](#Container-component)

[Pure component](#Pure-component)

[Lifecycle](#Lifecycle)

[events](#events)

[Refs](#Refs)

[Higher Order Components(HOC)](#Higher-Order-Components(HOC))

## Components

<details>
  <summary>More</summary>

Components are small independent and reusable pieces of a React application’s UI. It renders each of these components independent of each other without affecting the rest of the UI.

</details>

## render()

<details>
  <summary>More</summary>

  * Each React component must have a render() mandatorily.
  * It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div>

</details>

## Elements

<details>
  <summary>More</summary>
* An element describes what you want to see on the screen
```
const element = <h1>Hello, world</h1>;
```
* Elements are what components are “made of”

</details>

## Props

<details>
  <summary>More</summary>

* Props is the shorthand for Properties
* They are always passed down from the parent to the child components throughout the application.
* A child component can never send a prop back to the parent component.

</details>

## state
<details>
  <summary>More</summary>

* states are the objects which determine components rendering and behavior
* They are mutable unlike the props and create dynamic and interactive components
* They are accessed via this.state().

</details>

## stateless component

<details>
  <summary>More</summary>

  * A functional(stateless) component is just a plain javascript function which takes props as an argument and returns a react element.
  * It also has no lifecycle so you can’t use componentDidMount and other hooks.

  ```
  function Hello(props){
   return <div>Hello {props.name}</div>
  }
  ```

</details>

## stateful component
<details>
  <summary>More</summary>

 * Stateful components are always class components.
 * Stateful components have a state that gets initialized in the constructor.
 * It has access to the lifecycle hook.

 ```
 class Welcome extends React.Component {

   constructor(props) {
     super(props);
     this.state = { counter: 0 };
   }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

</details>

## Presentational components

<details>
  <summary>More</summary>

  * Are coupled with the view or how things look
  * These components accept props from their container and render them.
  *  A presentational component receives the data and callbacks exclusively via props and when an event occurs, like a button being pressed, it performs a callback to the container component via props to invoke an event handling method.
  * Functional components should be your first choice for writing presentational components unless a state is required.

  ```
  //defining the component as a React Component
  function Image (props) {
    return <img src={props.image} />;
  }
  export default Image

  //defining the component as a constant
  const Image = props => (
     <img src={props.image} />
  )
  export default Image
```
* You have the option to define them like regular react components or as constants.

</details>

## Container component

<details>
  <summary>More</summary>

  * They rarely have any HTML tags of their
  * They are often stateful
  * Container components will deal with the behavioral part.
  * A container component tells the presentational component what should be rendered using props
  * If using Redux, a container component contains the code that dispatches an action to a store.

```
import React, {Component} from 'react';
import Image from './presentational/Image';

  class Collage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         images: []
      };
   }
   componentDidMount() {
      fetch('/api/current_user/image_list')
         .then(response => response.json())
         .then(images => this.setState({images}));
   }
   render() {
      return (
         <div className="image-list">
            <Image images={this.state.images} />
         </div>
      )
   }
 }
```

</details>

## Pure component

<details>
  <summary>More</summary>

  * A component is said to be pure if it is guaranteed to return the same result given the same props and state.
  A functional component is a good example of a pure component because, given an input, you know what will be rendered.

  ```
  const HelloWorld = ({name}) => (
    <div>{`Hi ${name}`}</div>
  );
  ```

</details>

## Lifecycle

<details>
  <summary>More</summary>

  **Mounting**
  * constructor()
  * static getDerivedStateFromProps()
  * render()
  * componentDidMount()

  **Updating**
  * static getDerivedStateFromProps()
  * shouldComponentUpdate()
  * render()
  * getSnapshotBeforeUpdate()
  * componentDidUpdate()

  **Unmounting**
  * componentWillUnmount()

  **Error Handling**
  These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

  * static getDerivedStateFromError()
  * componentDidCatch()


</details>

## events

<details>
  <summary>More</summary>

  * In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc.
  * Events are named using camel case instead of just using the lowercase.
  * Events are passed as functions instead of strings.

  ```
  show = () => {
    //code
  }

  render(){
    <div onClick={this.show}>Click Me!</div>
  }
  ```

</details>

## Refs

<details>
  <summary>More</summary>

  * It is an attribute which helps to store a reference to a particular React element or component,
  * Use when you need to manage focus, select text or media playback.

  ```
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  }
  ```

</details>

##Higher Order Components(HOC)

<details>
  <summary>More</summary>

  * Higher Order Component is an advanced way of reusing the component logic.
  * HOC are custom components which wrap another component within it.
  * They are a pattern that emerges from React’s compositional nature.
  * Concretely, a higher-order component is a function that takes a component and returns a new component.
  * Refs are not passed through.

  ```
  import React from 'react';

  const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }

  return HOC;
  };

  export default higherOrderComponent;
  ```

</details>

</details>

## Redux

[Definition](#Definition)
[Components](#components)
[Flow](#Flox)

<details>
  <summary>More</summary>

## Definition

<details>
  <summary>More</summary>
  It is a predictable state container for JavaScript applications and is used for the entire applications state management.

  * The state of the entire application is stored in an object/ state tree within a single store.
  * The only way to change the state is to trigger an action


</details>

## components

<details>
  <summary>More</summary>

  * Action – It’s an object that describes what happened.  
  Actions in React must have a type property that indicates the type of ACTION being performed.  

  ```
  export function addTodo(text) {
    return { type: ADD_TODO, text }
  }
  ```

  * Reducer –  Reducers are pure functions which specify how the application’s state changes in response to an ACTION.  
  The reducer is a pure function that takes the previous state and an action, and returns the next state.

  ```
  import { VisibilityFilters } from './actions'

  const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  }

  function todoApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      default:
        return state
    }
  }
  ```

  * Store – State/ Object tree of the entire application is saved in the Store.
    + Holds application state;  
    + Allows access to state via getState();  
    + Allows state to be updated via dispatch(action);  
    + Registers listeners via subscribe(listener);  

    ```
    import { createStore } from 'redux'
    import todoApp from './reducers'
    const store = createStore(todoApp)
    ```

  * View – Simply displays the data provided by the Store.

</details>

## Flow

<details>
  <summary>More</summary>

  1. You call store.dispatch(action).  
  An action is a plain object describing what happened. For example:  

  ```
  { type: 'LIKE_ARTICLE', articleId: 42 }
  { type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' } }
  { type: 'ADD_TODO', text: 'Read the Redux docs.' }
  ```

  2. The Redux store calls the reducer function you gave it.  
  The store will pass two arguments to the reducer: the current state tree and the action.

  ```
  // The current application state (list of todos and chosen filter)
  let previousState = {
    visibleTodoFilter: 'SHOW_ALL',
    todos: [
      {
        text: 'Read the docs.',
        complete: false
      }
    ]
  }

  // The action being performed (adding a todo)
  let action = {
    type: 'ADD_TODO',
    text: 'Understand the flow.'
  }

  // Your reducer returns the next application state
  let nextState = todoApp(previousState, action)
  ```

  3. The root reducer may combine the output of multiple reducers into a single state tree.

  ```
  function todos(state = [], action) {
    // Somehow calculate it...
    return nextState
  }

  function visibleTodoFilter(state = 'SHOW_ALL', action) {
    // Somehow calculate it...
    return nextState
  }

  let todoApp = combineReducers({
    todos,
    visibleTodoFilter
  })
  ```

  4. The Redux store saves the complete state tree returned by the root reducer.

  This new tree is now the next state of your app! Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.

  Now, the UI can be updated to reflect the new state. If you use bindings like React Redux, this is the point at which component.setState(newState) is called.

</details>

</details>

## Router

<details>
  <summary>More</summary>

  A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route.

  ```
  <switch>
    <route exact path=’/’ component={Home}/>
    <route path=’/posts/:id’ component={Newpost}/>
    <route path=’/posts’   component={Post}/>
  </switch>
  ```
  
</details>