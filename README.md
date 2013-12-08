## array-sample ##
An array extension to sample random elements from an array.
Ask for one, get a random element, ask for multiple elements and get an array.
Since the samples are random, it's good to remember that they won't be in any meaningful order.

## Install ##
```
npm install array-sample
```
## Usage ##
```
Array.prototype.sample = require('array-sample');

[0,1,2].sample() // 1
[0,1,2].sample() // 0
[0,1,2].sample() // 1

[0,1,2].sample(1) // 2

[0,1,2].sample(5) // [1,2,0,0,2]
```

That's it