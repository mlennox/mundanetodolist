# Mundane todo list
React and Node (6) based todo list - pretty mundane really

## koa and node6
I've used Koa 2.x and Node 6.0.0 which requires minimal help from babel. 

### Babel configuration
We only need to install the [babel-preset-node6](https://www.npmjs.com/package/babel-preset-node6) package. 

We add this to a .babelrc config file located in the root of the project

    {
        "presets": ["node6"]
    }
    
This preset needs to be used with any other tool that requires ES6 transpiling - such as webpack or test frameworks.

## Ava
Ava is a superb test framework that is very simple to use and allows tests to be run concurrently in separate processes, and even handles async and promised functions.

Ava does handle ES6 but we will need to include the babel config for node6. We add an 'ava' section to the package.json where we specify that it will inherit the default .babelrc config

    {
        :
        :
    
        "ava": {
            "babel": "inherit"
        }
        
        :
        :
    }

We will want to mock out imported dependencies in our unit tests and for this we use [babel-plugin-rewire](https://www.npmjs.com/package/babel-plugin-rewire). We only want this to be loaded by babel when running our tests so we need to set the NODE_ENV for running tests and also ensure that the plugin is only loaded in that environment.

For package.json we configure tests to run with NODE_ENV=test 

    {
        "scripts": {
            "test": "NODE_ENV=test ava"
        }
    }

and then we update .babelrc to only load the rewire plugin for that environment

    {
        "presets": ["node6"],
        "env": {
            "test": {
                "plugins": ["rewire"]
            }
        }
    }

Now when we run our tests we should have the rewire functionality available to us. See the tests in the project for more details.


## React and Redux