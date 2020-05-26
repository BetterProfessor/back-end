# Better Professor API:

### heroku url: https://better-prof.herokuapp.com/

## Authentication Endpoints:

### Register

[POST] `/api/register`
Required fields for registering a user:

- username (unique)
- password
- email (unique)

# data schema:

```json
{
  "username": "Lili",
  "password": "123",
  "email": "lili@gmail.com"
}
```

Returns registered user's info.

### Login

[POST] `/api/login`
Required fields for logging in a user:

- username (unique)
- password

# data schema:

```json
{
  "username": "Lili",
  "password": "123"
}
```

Returns token used for authorization on other endpoints, and user's info.

## Students

### Get all students:

[GET] `/api/students`

### Get individual student:

[GET] `/api/students/:studentId`

### Add a student

[POST] `/api/students`

```json
{
  "user_id": "4",
  "studentName": "John Lee",
  "studentEmail": "johnlee@gmail.com"
}
```

### Edit a student

[PUT] `/api/students/:studentId`

### Delete a student

[DELETE] `/api/students/:studentId`

## Projects

### Get all projects:

[GET] `/api/projects`

### Get individual student:

[GET] ``

### Add a student

[POST] `/api/projects`

```json
{
{
	"user_id":"4",
	"studentName":"John Lee",
	"studentEmail":"johnlee@gmail.com"
}
}
```

### Edit a project

[PUT] `/api/students/:studentId`

### Delete a student

[DELETE] `/api/students/:studentId`

### Data Schemas

### User:

```json
{
  "id": 4,
  "username": "Lili",
  "password": "123",
  "email": "lili@gmail.com"
}
```

### Students:

```json
{
  "user_id": "4",
  "studentName": "John Lee",
  "studentEmail": "johnlee@gmail.com"
}
```
