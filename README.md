# Project Title

Simple react application for practice.

## Learnings

1. React is a library unlike Angular which is a framework.
2. A react app is a tree of components, each component is basically a class [unless it is a Stateless-Functional-Component], with state and render-function.
3. Additionaly a react component has access to props from parent component and lifecycle hooks.
4. State is local to component, while props are global to a tree/sub-tree.
5. React does not directly manipulate DOM unlike vanila-js. It keeps a lightweight representation of DOM [lets say a virtual DOM]. On change in virtual DOM, it syncs up the original DOM.
6. Uses Babel to compile 'jsx' code to 'create-dom-elements'.
7. Render multiple elements in -> wrap within a 'div' / 'React.Fragment'.
8. Bind functions to 'this'
   i. using constructors:
   ```
       constructor() {
           super();
           this.<function-name>.bind(this);
       }
       <function-name>() {
           //do something
       }
   ```
   ii. use arrow-functions:
   ```
       <function-name> = () => {
           //do something
       }
   ```
9. Updating state
   ```
   state = {
       count: 0
   }
   ```
   i. wrong way
   ```
       this.state.count++
   ```
   ii. correct way
   ```
       const newCount = 1
       this.setState({count : newCount})
   ```
10. Rendering lists
    unlike angular, react does not have directives like ng-for.
    so lists can be rendered as below:

    ```
        list = ['Mango', 'Apple', 'Dates', 'Fig']
        render() {
            return (
                <ul>
                this.list.map(item => <li>{item}</li>)
                </ul>

            );
        }
    ```

11. Conditional rendering

    ```
        list = ['Mango', 'Apple', 'Dates', 'Fig']
        render() {
            return (
                {this.list.length === 0} ? <p>Please add some fruits.</p> : {this.list}
            );
        }
    ```

12. Handling evvents

    ```
        handleClick = () => {
            console.log("hanndling click event.")
        }

        render() {
            return (
                <button onClick={this.handleClick}>Click</button>
            );
        }
    ```

13. Pass Data via components:
    i. if data needs to be passed from a node-component to its sub-node-component(s) -> use props.
    ii. if data needs to be passed in same level, then the state needs to be moved to parent level, as data cannot be passed on same level.

14. Raise and handle events:
    In order for sub-component to execute a function present in its parent component:
    i. parent component needs to pass functions via props, for example : <Counter onReset={this.handleReset} />
    ii. child component needs to raise the event passed via props from parent component, for example : <button onClick={this.props.onReset}>Click</button>

15. Multiple components in Sync:
    i. achieved via props and hooks.
    ii. controlled-component concept.
    iii. state of a component is completely private to itself and cannot be manipulated by its parent or any other component.

16. Functional components:
    https://github.com/HiteshRepo/counter-react-app/blob/master/src/components/navbar.jsx#L2-L16

17. Lifecycle hooks:
    broadly classified under 3 phases:
    i. Mount : constructor, render, componentDidMount
    ii. Update : render, componentDidUpdate
    iii. Unmount : componentWillUnmount

## Screen cast

    ![Alt Text](https://github.com/HiteshRepo/counter-react-app/blob/master/extras/react-app.gif)

## Acknowledgments

- Mosh Hamedani
