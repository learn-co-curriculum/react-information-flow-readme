## Objectives
- Reinforce standard React information flow architecture
- Practice React Application development process
- Contextualize component planning with an example

## React component structure

As you already know, a React application consists of many [components][components-readme]. Components have a 'parent'/'child' relationship that facilitates rendering order. While a component may have many children, it should only have one parent. Remember: components _receive_ their props and _own_ their state:
  - When `props` are passed from a parent to a child, they are meant to be unmodified. If a child needs a different `prop`, it should come from its parent
  - `state` is meant to be changed within a component using `this.setState()`

## React information flow

When developing in vanilla React, we adhere to the following data flow paradigm:
- For information to propogate _down_ the component tree parents pass `props` to their children
- For information to propagate _up_ the component tree, we typically invoke callbacks that were passed from parents to children as `props`

## Architecting React applications

When planning React applications,  


[components-readme]: https://github.com/learn-co-curriculum/react-components
