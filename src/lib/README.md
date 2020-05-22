#State Manager

## Introduction

This is a state management library created using **react contextAPI**.

## How to use

You can create store by wrapping your main component in
**createStore** HOC exported by library and make sure to pass intial state.

~~~~
import { createStore } from '../lib/stateManager'

class App extends React.Component{
    ...
}

const intialState = {
    parts:[]
}

export createStore(App, initialState)

~~~~

Now you need to connect this store to component using **connectStore** in which you want stored state.

~~~~

import { connectStore } from '../lib/stateManager'

class Parts extends React.Component{
    ...
}

const intialState = {
    parts:[]
}

export connectStore(Parts)

~~~~


### Set state , get state and getStore

When you connect component, connectStore HOC attaches store prop to your component's props which has methodes to set and get state.
Also you can get whole store.

##### Set state

`store.set(key, value, callback)`

~~~~

this.props.store.set('parts',[
    {
        name:'Part name',
        id:'Part id',
        status:'Checked in'
    }
]);

~~~~

Note- here you can pass callback method to do any action after setting state in store.

##### Get state

`store.get(key)`

~~~~

const parts = this.props.store.get('parts');

~~~~

#### Get whole store

`store.getState()`

~~~~

const wholeStore = this.props.store.getStore();

~~~~
