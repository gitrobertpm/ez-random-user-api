
# ez-random-user-api

An easy to use public api the generates random user data for testing and development purposes

Initially created to serve as a backup for when the [Random User](https://randomuser.me/) API is down.

## Examples

To view an example of a client consuming this API, visit - https://gitrobertpm.github.io/random-user-client/.

Visit the above URL in your browser to see a raw, prettified display of the JSON results.

## To consume

Use the following URL for your `fetch` request - https://fsjs-public-api-backup.herokuapp.com/api.

Property values are randomly retrieved from JSON collection of possible values.

Response result is array of 12 random user objects with the following schema:

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
      "large": profilePic,
      "medium": profilePic,
      "thumbnail": profilePic
    }
  }
```

## To work with locally

To run locally, download repo, point command line at root of project directory and run `npm install`, then `npm start`.  
