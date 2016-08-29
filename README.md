# Welcome to Introduction to ES2015!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:
- Today: 9am to 5pm

Breaks:
- Morning: 10:25am to 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm to 2:25pm
- Afternoon #2: 3:40pm to 3:50pm

## Course Outline

- ES2015 Introduction and Project Setup
- Variable Declaration
- Template Strings
- Arrow Functions
- Classes
- Modules
- Destructuring
- Iterators
- Generators
- Spread and Rest Operators
- Maps and Sets

## Links

### Instructor's Resources

- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [React Blog Posts](https://github.com/training4developers/react-flux-blog)
- [TopTal Angular Directive](https://www.toptal.com/angular-js/angular-js-demystifying-directives)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)

## Setup Instructions

This is a starter project for learning ES2015.

### Application Setup

Step 1. Download Install Node.js version 6 or higher. Version 6 or higher MUST be installed. If you have an older Node.js version that you need to keep, then use something like [NVM](https://www.npmjs.com/package/nvm) to manage multiple Node.js installations. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository from [here](https://github.com/training4developers/es2015_08152016/archive/master.zip). Extract the zip file to a working folder on your system.

Step 3. Open a new terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
$ npm i
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in that file. Then re-run the command above. Once the packages have been downloaded and installed the setup is complete.

### NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm run babel** - run ES2015 code in the **src** folder through Babel, and produce output in the **dist** folder
- **npm run babel:w** - do the same as the previous command, but also wait for new file changes, and run through Babel automatically

### Useful Resources

- [Babel](https://babeljs.io/)
