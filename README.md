# Multi-Tier Cloud Web Application (AWS)

This project demonstrates a **3-tier cloud architecture** deployed on AWS using EC2, Nginx, Node.js and RDS MySQL.

## Architecture

   User (Browser)
        ↓
Frontend (Nginx on EC2)
        ↓
Backend (Node.js API)
        ↓
Database (AWS RDS MySQL)

## Technologies Used

- AWS EC2
- AWS RDS (MySQL)
- Nginx
- Node.js
- Express.js
- MySQL
- GitHub

## Features

- REST API to fetch users
- Cloud-hosted backend
- Managed database using AWS RDS
- Production-style 3-tier architecture

## API Endpoint

http://65.2.137.70:3000/users

Returns:
[
{
"id": 1,
"name": "Ashwin",
"email": "ashwin@test.com
"
}
]

## Screenshots

### EC2 Instance
[EC2](screenshots/ec2-instance.png)

### RDS Database
[RDS](screenshots/rds-database.png)

### API Output
[API](screenshots/api-output.png)

## Conclusion

This project successfully implements a **multi-tier cloud architecture** with a frontend server, backend API and managed database using AWS cloud services.
