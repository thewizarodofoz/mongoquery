# MongoQuery

## Why?
Surely the world does not need yet another implementation of MongoDB query langugage.
This project is written just for my own fun. If you want a real production-ready package, you should probably try https://github.com/kofrasa/mingo or [find others](https://www.npmjs.com/search?q=mongo%20query).

## Usage
```javascript
const mongoquery = require('mongoquery');

const query = {
    a: {
        $eq: 1
    }
};

const data = [
    {a: 4},
    {a: 1},
    {a: 2},
];

const results = mongoquery(query, data);
```