
# ez-random-user-api

An easy to use public api the generates random user data for testing and development purposes

Initially created to serve as a backup for when the [Random User](https://randomuser.me/) API is down.

## Example

To view an example client consuming this API - https://gitrobertpm.github.io/random-user-client/.

To view the raw, prettified JSON results - https://ez-random-user-api.herokuapp.com/api.

## To consume

Use the following URL for your `fetch` request - https://ez-random-user-api.herokuapp.com/api.

Property values are randomly retrieved from JSON collection of possible values.

Default response result is array of 12 random user objects with the following schema:

```
  {
    "name": {
      "first": "firstName",
      "last": "lastName"
    },
    "email": email,
    "cell": "(503) 555-1234",
    "phone": "(503) 555-4321",
    "location": {
      "street": {
        "number": 5555,
        "name": "streetName streetSuffix"
      },
      "city": "city",
      "state": "state",
      "postcode": 12345
    },
    "dob": {
      "date": date
    },
    "picture": {
      "large": profilePic URL,
      "medium": profilePic URL,
      "thumbnail": profilePic URL
    }
  }
```

## Options

* **Count** - Number of results
* **Theme** - Customize image results
  * **Theme options** - murray, starwars, cuties, cools, supers

**Example:** The following URL will retrieve 10 results with only Bill Murray images
* https://ez-random-user-api.herokuapp.com/api/?count=10&theme=murray`
     

## To work with locally

To run locally, download repo, point command line at root of project directory and run `npm install`, then `npm start`.  
