# Multi-Tier Web Application on AWS

## Architecture

     User (Browser)
          ↓
 Frontend: Nginx on EC2
          ↓
Backend: Node.js + Express
          ↓
 Database: AWS RDS MySQL

## AWS Services Used

- EC2 (Application server)
- RDS MySQL (Database)
- Nginx (Web server)
- GitHub (Version control)

## API Endpoint

http://65.2.137.70:3000/users

## Output Example

[
 { "id": 1, "name": "Ashwin", "email": "ashwin@test.com" }
]

## Author

Ashwin Poojary
