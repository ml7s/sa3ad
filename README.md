# sa3ad Api

Welcome to the sa3ad API! This API provides access to user management functions within our platform.

## Overview

The sa3ad API allows you to:

- Retrieve user information
- Manage user permissions
- Access various user-related data securely

## Installation

To install the package, use npm:

```bash
npm install sa3ad
```
Usage
-----

### CommonJS

Here's a quick example of how to use the getUser function to retrieve user information:

```js
const { getUser } = require('sa3ad');

getUser('userID', 'yourAPIKey');
```

### JavaScript

API Endpoints
Get User Information
Endpoint: /api/users/:id

Method: POST

Description: Retrieves information about a specific user.

### Response:
### Success (200):

```js
{
  "status": 200,
  "message": "User found",
  "data": {
    "id": "userID",
    "email": "user@example.com",
    "username": "username"
  }
}
```
### User Not Found (404):

```js
{
  "status": 404,
  "message": "User not found"
}
```