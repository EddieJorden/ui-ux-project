# Amber Kinetics Inc UI/UX Engineer Assessment

## Description:

### Welcome to Amber Kinetics Inc's UI/UX assessment challenge. We hope you find this assessment interesting, and maybe even fun!

#### The app is a single-page application with dynamic content. The screen consists of the following:
1. A radio button group that allows the user to filter the data by year.
2. A chart that breaks down the number of students by course. The user can click on the
chart to select a specific course at any time.
3. A data grid displaying detailed student data for a specific course. The grid becomes
visible only after the user chooses a course. Show the number of students' figures in bold if they are below average. Also, use alternating background colors for the rows.

## Requirements
- Implement this feature using React(preferably with Redux).
- Fetch the mock data by creating a Node.js or Python endpoint
- The implementation should work for all major browser platforms
- Implement responsive design and scale for both desktop and mobile browsers

## Optional
- Allow the user to edit the grid
- The charts should refresh automatically as the data is committed
- Demonstrate how to incorporate unit testing

## General guidelines
- Write clean, properly abstracted code, and pay attention to data structure and performance.
- If you think a requirement is ambiguous, fill in the blanks and document your assumptions.
- Describe possible optimizations that could have been done.
- Host the application to your choice of provider( Heroku, AWS, Azure, etc).
- Once finished please send us the GitHub repository and the application URL.


## LightHouse Results:

### Desktop:
![UI:UX Lighthouse Desktop Results](/public/UI:UX_Lighthouse_Desktop_Results.png)

### Mobile:
![UI:UX Lighthouse Mobile Results](/public/UI:UX_Lighthouse_Mobile_Results.png)

## ScreenShots:

### Desktop:
![UI:UX Screenshot Desktop](/public/UI%3AUX_screenshot.png)

### Mobile:
![UI:UX Screenshot Mobile](/public/UI%3AUX_screenshot_mobile_280px.png)


## Instalation:


### How to run a react app from a github repository.
[Setting up a Project from Github](https://www.pluralsight.com/guides/setting-up-a-react-project-from-github)

## Dependencies:
react,
react-redux,
@reduxjs/toolkit,
styled-components,
express,
node,
d3,
cors

### You will need to run the provided mock endpoint endpoint.js in Node.


	node endpoint.js


this will run the server on localhost 8888

if done correctly you will recieve a message in the terminal

	API running at localhost:8888!

You can then run the app with the script

```javascript
yarn start
```

or

```javascript
npm start
```


## Usage:

This app recieves an array of objects and delivers that data to the pie chart.

You can then filter the items of the pie chart with the radio buttons.

You can also click on a slice of the pie to get extra details in the form of a grid.


	In this case the api is a list of courses with the number of students, name of instructor, and year.

	The pie chart populates with data structured by course.
	
	Each slice represents a course and the size is the number of students.

	When a slice of the pie is selected the grid populates with data for that course only.

	The grid is filtered by the isntructor and shows the number of students in bold if below average.


## Support:

For more information or support please visit.

[EddieMoger.com](https://eddiemoger.com)


## Authors and Acknowledgments:

 Design, Architect, Engineer and Q&A

 ### Eddie Moger
