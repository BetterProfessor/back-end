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

### get all users

[GET] `/api/all`

## Students

### Get all students:

[GET] `/api/students`

### Get individual student:

[GET] `/api/students/:studentId`

### Add a student

[POST] `/api/students`

```json
{
  "my_username": "Ben",
  "studentName": "John Lee",
  "studentEmail": "johnlee@gmail.com"
}
```

### Edit a student

[PUT] `/api/students/:studentId`

```json
{
  "studentName": "Chily Smith",
  "studentEmail": "chis@gmail.com"
}
```

### Delete a student

[DELETE] `/api/students/:studentId`

## Projects

### Get all projects:

[GET] `/api/projects`

### Get individual project:

[GET] `/api/projects/:projectId`

### Add a project

[POST] `/api/projects`

```json
{
  "my_username": "Ben",
  "projectName": "Title Changes",
  "projectType": "Needs My Feedback"
}
```

### Edit a project

[PUT] `/api/students/:projectId`

```json
{
  "my_username": "Ben",
  "projectName": "Document Changes",
  "projectType": "Needs My Feedback"
}
```

### Delete a project

[DELETE] `/api/students/:projectId`

## Reminders

### Get all reminders:

[GET] `/api/reminders/get`

### Get individual reminder:

[GET] `/api/reminders/get/:reminderId`

### Add a reminder

[POST] `/api/reminders`

```json
{
  "my_username": "Ben",
  "studentName": "Yee Lin",
  "dueDate": "2020-10-08",
  "dueTime": "09:29:30",
  "reminder": "Lorem ipsum dolor sit amet"
}
```

### Edit a reminder

[PUT] `/api/students/:reminderId`

```json
{
  "studentName": "Yee Lin",
  "dueDate": "2020-10-17",
  "dueTime": "09:29:30",
  "reminder": "Lorem ipsum dolor sit amet"
}
```

### Delete a reminder

[DELETE] `/api/students/:reminderId`

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
  "id": 11,
  "my_username": "Lili",
  "studentName": "Smith",
  "studentEmail": "joh@gmail.com"
}
```

### Projects:

```json
{
  "id": 4,
  "my_username": "Lili",
  "projectName": "Title Changes",
  "projectType": "Needs My Feedback"
}
```

### reminders:

```json
{
  "id": 7,
  "my_username": "Lili",
  "studentName": "Yee Lin",
  "dueDate": "2020-10-17",
  "dueTime": "09:29:30",
  "reminder": "Lorem ipsum dolor sit amet"
}
```
