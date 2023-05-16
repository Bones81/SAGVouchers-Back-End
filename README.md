# SAGVouchers-Back-End
Express back end for SAG Vouchers app

## Link to live site
https://bones81.github.io/SAGVouchers-Front-End/

## Link to front end repo
https://github.com/Bones81/SAGVouchers-Front-End

## Technologies used
* Node
* Express
* Mongo Atlas
* Mongoose
* CORS
* dotenv

## Description
This back end app serves JSON data to https://sag-voucher-front-end.herokuapp.com/, an app which enables users to calculate how much they should earn when working as a SAG-AFTRA background performer (i.e. an extra) on a primetime television show or feature film in the NYC tv/film region. 

When you work as an extra, you fill out a _voucher_ that records all the relevant data that affects the amount you earn: call time, out time, meal breaks, your base rate, night work premiums, bumps, etc.

This app requires users to input this data from such a voucher, which it then uses to calculate the amount the performer should earn!

Currently, users can perform full CRUD (create, read, update, delete) functions on the entire list of vouchers present in the site's database.

It stores and accesses data using Mongoose connected to MongoDB via Atlas, and embraces Model-View-Controller architecture.

## Endpoints -- RESTful routes
* GET '/vouchers' --returns all stored vouchers
* POST '/vouchers' --creates a new voucher
* GET '/vouchers/new' --currently returns placeholder text. Actual 'new' view handled by front-end
* GET '/vouchers/:id' --returns single stored voucher
* GET '/vouchers/edit/:id' --returns single stored voucher at given id for editing
* PUT '/vouchers/edit/:id' --updates voucher at given id
* DELETE '/vouchers/:id' --deletes voucher with given id

## Approach Taken
This app was initially kept very simple, as the front end was the more experimental part of this web app. As the front end was being realized, this back end would occasionally require tweaks to server.js or the voucher.js model.

Eventually, environmental variables were added, and once development reached an acceptable point, this back end was deployed to heroku and converted from local MongoDB to Mongo Atlas. 

## Unsolved Problems
* Some routes are currently extraneous since they are handled by the front end. 
* There are likely error handling scenarios that are not currently being handled appropriately.

## User Stories
* User has a front end application that needs to consume voucher data. The endpoints available on this back end provide such data.

## Notes
It would be great to add user auth such that users would be able to access only their own list of vouchers. Not sure if that would be handled on front or back end
