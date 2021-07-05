1. What problem does the context API help solve?

Context helps solve the problem of having to prop drill to get data to components far down the react tree.  It helps by creating a provider that will tunnel
data down to the component that needs it without having to pass it down through each and every child component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the place that holds the global state.  It's called the single source of truth because all the data that an application uses should live in one place, and all the components that require that data/state should be able to get it from that single place.

the actions are functions that components have access to that will allow them to interact with the store/global state.  Actions will tell the reducer what to do with the state, whether it be to read it, update it, or delete it.

reducers are what control your global state.  Depending on what the action tells it to do, it will provide CRUD-like operations on your state, or by default, provide the initial state.  It's what allows state to be dynamic.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global state that can be passed down to any component in an application.  Component state is state that lives locally in a component.  If you had multiple components that were going to be requiring the same data (such as a UI preference), then application state would be preferable.  If you had state that only needs to exist locally, such as the value of input fields, then component state is the best choice.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware function that returns an async function.  It allows you to perform asynchronous functions, such as API calls.  It changes the action creator by a) allowing it to be asynchronous.  b) being able to intercept the action and do something to it, such as change it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I enjoyed both Context and Redux. On a very high level, they seem to do the exact same thing - they both create a Provider and Consumer, which makes it so that we don't have to prop drill.  I prefer Context over Redux simply because it's a lot less set up to.