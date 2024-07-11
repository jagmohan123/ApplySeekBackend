# Live Link 
https://applyseekbackend.onrender.com
## Apply Seeker Backend
Welcome to the Apply Seeker Backend project! This project is built using ExpressJS ,Node.js, MongoDB, mongoose , and 
provides a robust backend for managing various functionalities related to an online Job Provider platform.
Below you will find a detailed description of the features and capabilities of this project.

Features


Authentication and Authorization
# Two Category For Registration -:
1) Job Seeker -:
2) Employer -:
# User Registration: 
New users can register with their,Name, role, email and password.
# User Login:
Registered users can log in to their accounts.
# Token-Based Authentication: 
Secure token-based authentication using JWT.
# Role-Based Access Control:
Different access levels for Job seeker, Employer.
# Password Management

# Forgot Password:
Both User can reset their password if they forget it.
# Password Reset: 
Securely reset password using email verification.

# Job Management
# Create / Post Job : Category Based

Only Those Users can create the jobs which is registered as a Employer role.
Employer can View all the available jobs , created jobs and he can edit and delete their jobs .

# Apply For Jobs: User Role Based
Only Those Users can apply for jobs which is registered as a Job seeker role.
Job seekar can View all the available jobs and apply on these jobs .

# View All Jobs :
View all available Jobs with details like job title , job description, and job location.

# Email Notifications

# Email Sending:
Automated email notifications for user activities such as registration, password reset, and Apply for any jobs.

# Mail Templates: 
Predefined email templates for various user interactions.

# Additional Functionalities:

# Job Seeker Profile Management:
1.job seeker can view and update their profile information.
2.My Applications : He can view their applied jobs  and if they wanna delete they can.

# Instructor Profile Management:
1.  Employer can view and update their profile information.
2. Instructor can view Their created Jobs, along with all available jobs.
3. Employer can edit and delete  Their created Jobs. 




# ENDPOINTES

# Auth Routes
POST /api/v1/auth/sendotp
POST /api/v1/auth/signup - Register a new user
POST /api/v1/auth/login

# FOR CHANGING PASSWORD FROM THE LOGIN PAGE OR SIGNUP PAGE -:
STEP-1: POST /api/v1/forgot-password - Request a password reset
STEP2:  POST /api/v1/resetPassword-token- Reset the token 
STEP3:  POST /api/forgot-password (http://localhost:3000/update-password/${token}`) - Request a password reset With new Password and confirm password options.



# FOR Job Seeker and Employer  -:
VIEW PROFILE: GET  /api/v1/profile/getuser
VIEW MY Applied Jobs :GET /api/v1/application/all-applied-applications-  
VIEW Profile AND EDIT PROFILE :PUT /api/v1/profile/updateProfile
Profile image-: PUT /api/v1/profile/updateProfileImage
Delete Account: DELETE   /api/v1/profile/deleteProfile


# FOR Employer-: 

# Job Creation Routes

# FOR SECTION
CREATE -:POST  /api/v1/job/create-job - Create Section of the course.
UPDATE -:POST /api/v1/job/update-job
DELETE -POST /api/v1/job/delete-job
All Jobs-: GET /api/v1/my-jobs


# For common 
All Available jobs -: GET api/v1/job/all-jobs





# Contact
=For any questions or feedback, please reach out to us at info@appyseeker.com.

Thank you for using applySeeker! We hope this project meets your needs for building a comprehensive online Jobs platform backend.
