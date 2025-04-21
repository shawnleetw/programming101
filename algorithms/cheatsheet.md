This is basic JavaScript data structures and methods that are commonly used in coding interviews.

## String & Number

```javascript
// Basics
str.length                     // string length
str[i]                         // access character at index
`var1:${var1}, var2:${var2}`   // template literal for string interpolation

// Core Operations
str.substring(start, end)      // extract substring [start, end]
str.trim()                     // remove whitespace from ends
str.toLowerCase()/toUpperCase()// change case
str.split(separator)           // split into array
str.replace(search, replace)   // replace substring
str.indexOf(substr)            // find substring index or -1

// Number
9%4                            // modulus, here we get 1
Math.floor(num/2)              // round down to nearest integer
nums.toFixed()                 // convert to string with fixed decimal
```

## Array

```javascript
// Basic Operations
arr.length                     // array length
arr.push(item)/pop()           // add/remove from end
arr.unshift(item)/shift()      // add/remove from beginning
arr.push()/pop()               // behave as stack
arr.push()/shift()             // behave as queue

// Core Manipulation
arr.map(fn)                    // transform elements
arr.reduce((acc, curr) => {})  // reduce to single value
arr.filter(fn)                 // extract matching elements
arr.slice(start, end)          // extract portion without modifying
arr.includes(item)             // check if item exists
arr.indexOf(item)              // find item index or -1
arr.sort((a, b) => a - b)      // sort numerically
arr.from().fill()              // create array from iterable and fill with value
arr.entries()                  // array of [index, value] pairs
```

## Object

```javascript
Object.keys(obj)               // array of keys
Object.values(obj)             // array of values
Object.entries(obj)            // array of [key, value] pairs
```

## Map & Set

```javascript
// Map - for efficient key-value lookups
new Map()                      // create empty map
map.set(key, value)            // add/update entry
map.get(key)                   // retrieve value
map.has(key)                   // check if key exists
map.delete(key)                // remove entry
map.size                       // number of entries

// Set - for unique values
new Set()                      // create empty set
set.add(value)                 // add value
set.has(value)                 // check if value exists
set.delete(value)              // remove value
set.size                       // number of values
```
