# To do app with Cypress TDD

Having recently been introduced to Cypress, I wanted to take a course and build thing use a TDD approach. Having developed a few React apps now, I can absolutely see the need for having and building on a suite of tests. The Cypress website had the perfect <a href="https://docs.cypress.io/examples/examples/tutorials.html">video tutorial</a> for getting started so I followed along with it. Cypress is the first testing framework that feels natural to me and I am very keen to implement it into my workflow.

## Setup

I didn't build the React app, but if you would like set this project up and check that my tests are running then please do the following. You will need to have the <a href="https://yarnpkg.com/en/docs/install">Yarn</a> package manager installed. 

```
git clone git@github.com:KyeBuff/cypress-todo.git to-do && cd to-do
```

Start the localhost.
```
yarn && yarn start
```

Open a new tab and cd into the project directory, then run Cypress.
```
yarn cy
```


## My learnings

Everything that I'd learned about Cypress is within <a href="https://docs.google.com/document/d/1exsPHcb28DaH_OdPrhGDaOX8msYP1PbV0z6U6S-O8P4/edit?usp=sharing">this</a> document, which will become my Cypress cheat sheet.

Overall I learned a lot about how to: 

* Structure my tests
* Use DOM queries and check element contents
* Use fixtures to fake response data
* Setup a json server
* Use iterator methods to keep test code DRY
* Run both visual and headless testing
* Write custom commands

