exports.successFullyApply = (JobName, name) => {
  return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
      
              .logo {
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #ffD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
              }
      
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .highlight {
                  font-weight: bold;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
          <a href="https://apply-seeker-project.vercel.app"><img class="logo" src="https://res.cloudinary.com/dhfomx8lk/image/upload/v1709388401/StudyAddaMaterial/wlvv2umy1zsakvbuk3e1.png"
              alt="StudyAdda Logo"></a>
              <div class="message">${JobName} ,Application Successfully SUBMITTED/div>
              <div class="body">
                  <p>Dear ${name},</p>
                  <p>
                    Thank you for taking the time to apply for ${JobName} the position on our career portal.
                    We are pleased to note your interest in pursuing employment opportunities with Thryve.
                    We will carefully evaluate your application for current vacant applied position.
                    In case your profile meets our requirement our Human Resource/TA team will contact you.
                    All The Best!
                   
                  </p>
                  <p>
                      Please log in to view the  application status and dashboard to view all  available jobs.
                      <a href="https://apply-seeker-project.vercel.app/dashboard">Go to Dashboard</a>
                  </p>
              </div>
              <div class="support">
                  If you have any questions or need assistance, please feel free to reach
                  out to <a href="mailto:info@applyseeker.com">info@applyseeker.com</a>
                  we are here to help you
              </div>
          </div>
      </body>
      
      </html>`;
};
