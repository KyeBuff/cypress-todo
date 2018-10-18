# To do app with Cypress TDD

Having recently been introduced to Cypress, I wanted to take a course and build an app using a TDD approach. Having developed a few React apps now, I absolutely see the need for having a suite of tests to protect against regressions. The Cypress website had the perfect <a href="https://docs.cypress.io/examples/examples/tutorials.html">video tutorial</a> for getting started so I followed along with it. Cypress is the first testing framework that feels natural to me and I am very keen to implement it into my workflow.

This repository along with the notes I'd taken under [My learnings](#my-learnings) will be my reference when building future apps with TDD.

## Table of Contents
1. [My learnings](#my-learnings)
2. [Setup](#setup)

## My learnings

I learned a lot about how to use Cypress and also how useful it is to write tests in advance of writing your code. This allows you to take a step back and think at a higher level about how the problem should be solved, similar to writing pseduo-code.

* Structure my tests
* Use DOM queries and check element contents
* Use stubs to simulate server endpoints and responses
* Use fixtures to fake response data
* Setup a json server
* Use iterator methods to keep test code DRY
* Run both visual and headless testing
* Write custom commands

Everything that I'd learned about Cypress during this course is within <a href="https://docs.google.com/document/d/1exsPHcb28DaH_OdPrhGDaOX8msYP1PbV0z6U6S-O8P4/edit?usp=sharing">this</a> document.

## Setup

The React app as pre-built as part of the tutorial, but if you would like set this project up and check that my tests are running as they should, then please do the following. You will need to have the <a href="https://yarnpkg.com/en/docs/install">Yarn</a> package manager installed. 

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