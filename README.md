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

### Get individual project:

[GET] `/api/projects/:projectId`

### Add a project

[POST] `/api/projects`

```json
{
  "user_id": 5,
  "projectName": "Title Changes",
  "projectType": "Needs My Feedback"
}
```

### Edit a project

[PUT] `/api/students/:projectId`

```json
{
  "user_id": 5,
  "projectName": "Document Changes",
  "projectType": "Needs My Feedback"
}
```

### Delete a project

[DELETE] `/api/students/:projectId`

## Reminders

### Get all reminders:

[GET] `/api/reminders`

### Get individual reminder:

[GET] `/api/reminders/:reminderId`

### Add a reminder

[POST] `/api/reminders`

```json
{
  "user_id": 5,
  "reminderName": "Title Changes",
  "reminderType": "Needs My Feedback"
}
```

### Edit a reminder

[PUT] `/api/students/:reminderId`

```json
{
  "user_id": 5,
  "reminderName": "Document Changes",
  "reminderType": "Needs My Feedback"
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
  "user_id": "4",
  "studentName": "John Lee",
  "studentEmail": "johnlee@gmail.com"
}
```

### reminders:

```json
{
  "user_id": 5,
  "projectName": "Document Changes",
  "projectType": "Needs My Feedback"
}
```
