# Test Refactoring Kata

Welcome to test refactoring kata! In this codebase we aim to provide you with some codebase where you can practice your test improvement skills and, if necessary, code refactoring skills to made your envisioned "test refactoring" the reality. The majority of the codebase had some test coverage. Though if you look into the test, you can feel something is not quite right. This is meant to simulate how your legacy codebase state: _Decent test coverage. Tests itself is not easy to understand_. 

Like a normal kata, there is no black and white answer. It's up to you to decide which one constitute test smell and, ultimately, how you can improve it. The practice is the point itself.

## Getting started

To run the application run `$ npm start`. 

To run the test suite, run `$ npm test` or `$ jest --watchAll`. It should produce result like this screenshot:

![Unit Test Results Screenshot](/jest-screenshot.png "Unit Test Results")


## About the business

"Hello Concert" itself is a concert organizer selling monthly concert series with each band coming in for each month. The business also sell the "premium membership" subscription for small fee in hope of attracting buyer to purchase the concert ticket every month. Think of it as a loss leader, similar to ultra - cheap "chicken rotisserie" in supermarket.

## About the application

![Hello Seat Screenshot](/app-screenshot.png "Hello Seat")

This is an example of simple partial - finished seat map page of a ticket website. Currently there is no interaction of sorts yet, just pure data rendering. The current seat layout is the fixed but seat status is randomized for each refresh.

You can control membership status by adding `member=true` as a URL params to show premium membership feature.

You can play around with params in `index.js` for example: changing value of seat pricing and/or seat status distribution and see what happens.

If you want some "anchoring point" in terms of not just refactoring the test / code itself, this can be the candidate feature for the codebase:

- Show tooltip when hovering for 1 second on the seat, displaying zone, seat number, status, and price
- Show tooltip when hovering on "red premium price" indicating that buyer get discounts courtesy of their membership subscription.
