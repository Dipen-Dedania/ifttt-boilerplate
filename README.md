# ifttt-boilerplate

![IFTTT](https://github.com/Dipen-Dedania/ifttt-boilerplate/blob/master/images/ifttt.png)
IFTTT is a free platform that helps you do more with all your apps and devices.

If you are looking to create a service or trigger that you can publish into IFTTT, here's a sample project that you can built upon.
In, IFTTT official site, you will find a **Hello World!** program in RUBY (not a big fan :P).
So here's one with **NodeJS** & Express framework.

## Setup

* Just fork this repo. Clone it into your local PC and run below commands.
```
npm install
```
* You are almost ready with code. Now go to the https://platform.ifttt.com/services and create your own service.
* Now, navigate to API tab (https://platform.ifttt.com/services/{your-service-name}/api), and copy your service key to the config file.
* Create a new trigger (my_trigger)
* Create a new action (say-hello)
* Now run over NodeJS application.

Are you still with me? Good. Now you can run NodeJS application by:
```
node server.js
```
Fire up this http://localhost:8080/ . There you go, our Hello world application up and running.
Now, we need IFTTT to test our local service. Download Ngrok (https://ngrok.com/) and run it.
```
ngrok.exe http 8080
```
Paste this ngrok URL to IFTTT API URL.
![IFTTT-NGROK](https://github.com/Dipen-Dedania/ifttt-boilerplate/blob/master/images/url.png)

Great! Everything is up and ready to test. Let's go to endpoint_tests page & click on **Begin test**.

![IFTTT-NGROK](https://github.com/Dipen-Dedania/ifttt-boilerplate/blob/master/images/endpoint-test.png)

You should be able to use this service/triggers into Applets. Customize triggers and service code as per your need. Enjoy!



