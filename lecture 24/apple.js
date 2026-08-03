=== === === === === === === === === === === === === === === === === === === =
GYM MEMBERSHIP MANAGEMENT SYSTEM
MASTER PROMPT - PART 1
PROJECT FOUNDATION


You are a Senior Full Stack Software Engineer and Software Architect.

Build a complete internship - level Gym Membership Management System following clean architecture and industry best practices.

The project should be suitable
for:
-Internship
    -
    Final Year Project -
    Portfolio -
    Placement Interviews


PROJECT OVERVIEW

Develop a Gym Membership Management System where:

    •Admin manages the gym.•Trainers manage assigned members.•Members manage memberships, class bookings, attendance, workouts, nutrition, payments, and fitness progress.

There are only three user roles:
    -Admin -
    Trainer -
    Member

Do not create any additional user roles.

TECH STACK


Frontend -
    React.js -
    JavaScript(ES6 + ) -
    React Router DOM -
    Axios -
    Context API -
    CSS Modules

Backend
    -
    Node.js -
    Express.js

Database
    -
    MongoDB -
    Mongoose

Authentication
    -
    JWT -
    bcrypt

Additional Libraries
    -
    Multer -
    Nodemailer -
    QRCode -
    html5 - qrcode -
    Razorpay -
    Chart.js -
    Day.js


DO NOT USE

    -
    TypeScript -
    Redux -
    Bootstrap -
    Tailwind CSS -
    Material UI -
    Firebase -
    SQL Database -
    GraphQL -
    PHP -
    Python -
    Java


PROJECT STRUCTURE

Generate only:

    client /
    server /
    README.md

Create additional folders only when required.

ARCHITECTURE


Follow MVC Architecture.

Separate frontend and backend.

Keep business logic inside services.

Keep controllers focused on request and response handling.

Use reusable components.

GLOBAL RULES


Generate only required files, folders, modules, pages, components, APIs, models, controllers, middleware, services, and utilities.

Do not generate duplicate or unused code.

Every generated file must be used somewhere in the project.

Keep the project clean, modular, and easy to understand.

SECURITY


Use JWT Authentication.

Hash passwords using bcrypt.

Protect private routes.

Validate all incoming data.

Store secrets inside the.env file.

CODING STANDARDS


Use meaningful file,
function, and variable names.

Use async / await.

Return proper HTTP status codes.

Use centralized error handling.

Write clean, readable, and maintainable code.

Wait
for the next instructions before generating application modules.


UI DESIGN & DASHBOARD STRUCTURE

Design a clean, modern, responsive Gym Membership Management System UI using React.js and CSS Modules.

Create only the pages and components required by the project.

USER ROLES


1. Admin
2. Trainer
3. Member


PUBLIC PAGES

• Home• About• Membership Plans• Classes• Trainers• Contact• Login• Register• Forgot Password


ADMIN DASHBOARD

Dashboard
Members
Trainers
Membership Plans
Classes
Attendance
Payments
Reports
Analytics
Notifications
Profile
Settings


TRAINER DASHBOARD

Dashboard
Assigned Members
Workout Plans
Nutrition Plans
Attendance
Progress Tracking
Profile
Settings


MEMBER DASHBOARD

Dashboard
Membership
Book Classes
Booked Classes
Workout Plan
Nutrition Plan
Attendance History
Payment History
Progress Tracking
Profile
Settings


COMMON COMPONENTS

Navbar
Sidebar
Footer
Cards
Tables
Forms
Buttons
Input Fields
Search
Filters
Pagination
Modal
Confirmation Dialog
Loading Spinner
Toast Notifications
Charts
QR Code Display
QR Scanner


UI REQUIREMENTS

Use reusable React components.

Use CSS Modules only.

Keep layouts consistent across all dashboards.

Every page must be responsive.

Create clean forms with validation.

Use search, filtering, and pagination where required.

Display loading and error states.

Show success and error notifications.

DESIGN STYLE


Modern
Clean
Professional
Minimal

Primary Color: #0F172A































Accent Color : # 22 C55E
Background: #F8FAFC

Use rounded cards, subtle shadows, and smooth hover effects.

Avoid unnecessary animations.

RULES


Generate only the required pages.

Do not generate duplicate pages.

Do not generate placeholder pages.

Do not generate unused UI components.

Wait
for the next instructions before generating the backend.

BACKEND, DATABASE & API STRUCTURE

Build the backend using Node.js, Express.js, MongoDB, and Mongoose.

Follow MVC Architecture.

Generate only the backend files required by the project.

DATABASE COLLECTIONS


Admins
Members
Trainers
MembershipPlans
Classes
Bookings
Attendance
WorkoutPlans
NutritionPlans
Payments
Notifications
ProgressTracking


AUTHENTICATION

JWT Authentication

bcrypt Password Hashing

Register

Login

Logout

Protected Routes

Role - Based Authorization

Roles:
    -Admin -
    Trainer -
    Member


MODULES

Member Management -
    Register Member -
    Update Member -
    Delete Member -
    View Profile -
    Renew Membership

Trainer Management
    -
    Add Trainer -
    Update Trainer -
    Delete Trainer -
    Assign Members

Membership Plans
    -
    Create -
    Update -
    Delete -
    Assign -
    View

Classes
    -
    Create -
    Update -
    Delete -
    Assign Trainer -
    Book Class -
    Cancel Booking -
    Waitlist

Attendance
    -
    QR Code Generation -
    QR Check - In -
    Attendance History

Workout
    -
    Create -
    Assign -
    Update -
    Delete

Nutrition
    -
    Create -
    Assign -
    Update -
    Delete

Progress Tracking
    -
    Weight -
    Height -
    BMI -
    Body Fat -
    Progress History

Payments
    -
    Razorpay Integration -
    Payment History -
    Invoice -
    Refund -
    Auto Renewal

Notifications
    -
    Email Notifications -
    Booking Confirmation -
    Renewal Reminder -
    Payment Confirmation


REST APIs

Generate REST APIs only.

Use proper HTTP methods.

Return proper HTTP status codes.

Validate every request.

Use centralized error handling.

DATABASE RULES


Use Mongoose Models.

Add schema validation.

Use timestamps.

Create relationships only where required.

BACKEND RULES


Separate Models, Routes, Controllers, Middleware, Services and Utilities.

Keep business logic inside Services.

Keep Controllers lightweight.

Do not generate fake APIs.

Do not generate duplicate routes.

Do not generate duplicate controllers.

Do not generate unused modules.

Generate only required backend files.


Build the complete frontend using React.js, JavaScript, React Router DOM, Axios, Context API, and CSS Modules.

Use the backend APIs defined in Part 3.


PUBLIC PAGES

Home

About

Membership Plans

Classes

Trainers

Contact

Login

Register

Forgot Password


ADMIN PAGES

Dashboard

Members

Member Details

Trainers

Trainer Details

Membership Plans

Classes

Attendance

Payments

Reports

Analytics

Notifications

Profile

Settings


TRAINER PAGES

Dashboard

Assigned Members

Workout Plans

Nutrition Plans

Attendance

Progress Tracking

Profile

Settings


MEMBER PAGES

Dashboard

Membership

Book Classes

Booked Classes

Workout Plan

Nutrition Plan

Attendance History

Payment History

Progress Tracking

Profile

Settings


COMMON COMPONENTS

Navbar

Sidebar

Footer

Cards

Tables

Forms

Buttons

Inputs

Search

Filters

Pagination

Modal

Confirmation Dialog

Loading Spinner

Toast Notifications

Charts

QR Code Display

QR Scanner


FORMS

Validate all forms.

Show loading
while submitting.

Display validation errors.

Prevent duplicate submissions.

USER EXPERIENCE


Responsive Layout

Fast Navigation

Reusable Components

Consistent Design

Loading States

Empty States

Error States

Success Notifications


FRONTEND RULES

Generate only required pages and components.

Do not generate duplicate pages.

Do not generate duplicate components.

Do not generate placeholder pages.

Do not generate unused components.

Use reusable components wherever possible.

Keep code modular and easy to maintain.

Build the complete frontend using React.js, JavaScript, React Router DOM, Axios, Context API, and CSS Modules.

Use the backend APIs defined in Part 3.


PUBLIC PAGES

Home

About

Membership Plans

Classes

Trainers

Contact

Login

Register

Forgot Password


ADMIN PAGES

Dashboard

Members

Member Details

Trainers

Trainer Details

Membership Plans

Classes

Attendance

Payments

Reports

Analytics

Notifications

Profile

Settings


TRAINER PAGES

Dashboard

Assigned Members

Workout Plans

Nutrition Plans

Attendance

Progress Tracking

Profile

Settings


MEMBER PAGES

Dashboard

Membership

Book Classes

Booked Classes

Workout Plan

Nutrition Plan

Attendance History

Payment History

Progress Tracking

Profile

Settings


COMMON COMPONENTS

Navbar

Sidebar

Footer

Cards

Tables

Forms

Buttons

Inputs

Search

Filters

Pagination

Modal

Confirmation Dialog

Loading Spinner

Toast Notifications

Charts

QR Code Display

QR Scanner


FORMS

Validate all forms.

Show loading
while submitting.

Display validation errors.

Prevent duplicate submissions.

USER EXPERIENCE


Responsive Layout

Fast Navigation

Reusable Components

Consistent Design

Loading States

Empty States

Error States

Success Notifications


FRONTEND RULES

Generate only required pages and components.

Do not generate duplicate pages.

Do not generate duplicate components.

Do not generate placeholder pages.

Do not generate unused components.

Use reusable components wherever possible.

Keep code modular and easy to maintain.

PROJECT REQUIREMENTS


Generate the complete Gym Membership Management System including:

    •Frontend• Backend• Database• REST APIs• Authentication• Dashboards• All required pages• All required components• Models• Controllers• Routes• Middleware• Services• Utilities• Configuration Files

Generate only what is required by the project.

CODE QUALITY


Follow MVC Architecture.

Write clean, modular, and readable code.

Use reusable components.

Avoid duplicate code.

Use meaningful names.

Keep the folder structure organized.

DATABASE


Use MongoDB with Mongoose.

Create relationships only where required.

Validate every schema.

Use timestamps.

PERFORMANCE


Optimize API performance.

Lazy load pages where appropriate.

Use pagination, search, and filtering where required.

Avoid unnecessary rendering.

ERROR HANDLING


Handle validation errors.

Handle authentication errors.

Handle payment failures.

Handle booking conflicts.

Return meaningful API responses.

TESTING


Verify:

    •APIs

• Authentication

• Dashboard Routing

• Forms

• QR Attendance

• Razorpay Integration

• Database Models


FINAL REVIEW

Before finishing the project:

    Remove duplicate code.

Remove unused files.

Remove unused modules.

Remove unused components.

Remove unused APIs.

Remove unused imports.

Remove dead code.

Fix broken routes.

Fix broken imports.

Verify responsive design.

OUTPUT


Provide:

    •Final Folder Structure

• Required npm Packages

• Environment Variables(.env.example)

• Installation Guide

• MongoDB Setup

• Run Client

• Run Server

• Project Testing Steps


FINAL RULES

Think carefully before generating every file, folder, module, component, API, or feature.

Generate only what is required by the project requirements.

Do not generate duplicate or unused code.

Prefer clean, maintainable, and modular code over generating unnecessary files.

Quality is more important than quantity.

If a feature, module, page, component, API, model, controller, service, utility, or middleware is not required by the project, do NOT generate it.

Before generating any file, verify that it is required by the application.

Generate only the minimum number of files required to build a clean and maintainable application.