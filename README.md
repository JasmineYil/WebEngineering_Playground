# Web Engineering Coding Playground Template

This repository is designed as the foundation for coding playgrounds in the Web Engineering course. It offers a structured space for experimenting with and mastering various web development technologies and practices. 
The project is based on [this](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Accessibility_troubleshooting) repository from MDN.

The project introduces a lot of code smells for you to tackle. 
**Lets get coding!**

## Submission Details and Deadlines
* Coding playgrounds are **individual** work
* There will be 2 serparate submissions:
  * [Base Playgrounds](#base-coding-playgrounds): Submission Deadline **03.11.2024**
  * [Extended Playgrounds](#extended-coding-playgrounds): Submission Deadline **16.01.2025**
* The playgrounds will be guided through in our sessions - still there will be distance work!
* Use this base template to create your project repository.
* Each playground is linked in the corresponding course section.
* You can find the submissions at the bottom of the Moodle course.
  

## Features

- Wonderful UI-design :heart_eyes:
- Loads bear data using [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) :bear:
  - Original Wikipedia Page can be found [here](https://en.wikipedia.org/wiki/List_of_ursids)
- Worst JS coding practices :cold_sweat:
- No Build and Dependency Management at all :fire:



# Base Coding Playgrounds

## K.O. Criteria
* No JS Frameworks allowed to solve the base coding playgrounds (e.g. Vue.js, Angular, React, Svelte,...) - don't panic we will come to them!
* No CSS Libraries allowed (e.g. Bootstrap, Material, Tailwind, ...)

## Submission
Submit your coding repository link in Moodle. Send me an invitation to your repository if it is set to private:
> GitHub: leonardo1710
> 
> GitLab: leon.freudenthaler@fh-campuswien.ac.at

## 1. JS Playground (10 Pts.)
The provided base project template contains some bugs and bad JS coding practices for you to fix in your first playground. Take a look into the component files and get a grasp of the inner workings of the provided project.
> **ATTENTION: After finishing the JS Playground please create a commit or branch and link it below. Otherwise it is not possible to grade your 1. submission, since we will switch to TypeScript afterwards!**
> 
> **This is my JS Playground commit/branch:** https://github.com/JasmineYil/WebEngineering_Playground/tree/jsplayground

**Tasks:**
Fix application code and answer the questions:
* (2) Adapt the code to use ``async/await`` instead of the ``then()``-callback hell and refactor the functions to use arrow function syntax instead of ``function()``-syntax.
* (2) Add proper error handling to the code using ``try/catch`` and provide useful error messages to the users. Additionally, check the image URL availability before rendering the images in HTML. Provide placeholder images if the given URL does not exist.
* (1) Extract the range value from the provided Wikitext (response from the API). Examine the provided Wikitext format inside `extractBears` function. 
* (1) Split the code into separate modules with regards to clean separation of concerns.
* (1) Eliminate all other bad coding practices you can find. 
* (3) Answer the following questions and provide some examples inside the ``Readme.md`` file. 

>  **What bad coding practices did you find? Why is it a bad practice and how did you fix it?**

Present your findings here...
``` JS
console.log('Make use of markdown codesnippets to show and explain good/bad practices!')
```


#### Bad Coding Practices:
- Removed Unnecessary Debug Logs:  Removed unnecessary debug logs to clean up the code. 
``` JS 
// main.ts 
// FROM:
window.onload = () => {
  console.log('Initializing...');
  toggleComments();
  console.log('Comments toggling initialized');

  console.log('Initializing addComment...');
  addComment();
  console.log('Comment form handler initialized');

  console.log('Initializing getBearData...');
  getBearData();
  console.log('Bear data fetching initialized');
};

// TO:
window.onload = () => {
  console.log('Initializing Application ...');
  toggleComments();
  addComment();
  getBearData();
};
```
- Replaced .onclick and .onsubmit with addEventListener:
Replaced .onclick and .onsubmit with addEventListener(), 
which allows for multiple event listeners, improves modularity, and makes the code easier to maintain.

``` JS
// modules/showHideComments.ts
// FROM:
    showHideBtn.onclick = () => { 
        const showHideText = showHideBtn.textContent;
        ...
    };

// TO:
    showHideBtn.addEventListener('click', () => {
        const showHideText = showHideBtn.textContent;
        ...
    });
```
- Uninformative Error Handling: Updated the error messages to include the HTTP status code to provide more context.
``` JS
// modules/fetchBearData.ts
// FROM:
export const getBearData = async () => {
    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');

// TO:
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`); 
```
- Inconsistent Code Formatting and Comments: Cleaned up formatting inconsistencies and made sure to only leave neccesary comments.



## 2. Dependency- and Build Management Playground (10 Pts.)
Build the application with ``npm`` and a build and a dependency management tool of your choice (e.g. [Vite](https://vitejs.dev/), [Webpack](https://webpack.js.org/), or others). 

Here are some additional resources: [Package Management and Bundling](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2-Package-Management,-Build-Management-and-Modules), [Vite Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2.1-Vite-Web-Application-Setup), [Webpack Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/2.2-Webpack-Web-Application-Setup).

**Tasks:**
* (1) Integrate `npm` and a build management tool into your project.
* (2) Configure your project to use Typescript as your primary development language and adapt the code and file extensions respectively.
* (2) Use ESLint and Prettier inside your project - rulesets can be found below.
* (1) Keep your builds clear and add dependencies to the right build (e.g. do not add dev dependencies inside the production build and vice versa).
* (1) Define the following tasks within `npm scripts`:
  * `dev`: starts the development server
  * `build`: runs the typescript compiler and bundles your application - bundling depends on your chosen build tool (e.g. Vite, Webpack) but typically bundles multiple files into one, applies optimizations like minification and obfuscation and outputs final results to a `dist` or `build` directory.
  * `lint`: runs ESLint on all  `.js` and `.ts` files in your projects `/src` directory
  * `lint:fix`: runs and also fixes all issues found by ESLint
  * `format`: formats all `.js` and `.ts` files in your projects `/src` directory
  * `format:check`: checks if the files in the `/src` directory are formatted according to Prettier's rules.
* (1) Configure a pre-commit hook that lints and formats your code using [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). A tutorial can be found [here](https://dev.to/shashwatnautiyal/complete-guide-to-eslint-prettier-husky-and-lint-staged-fh9).
* (2) Answer the question at the end of this section inside ``Readme.md`` file: 


**ESLint Configurations**

Use ESLint configs [standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript) and [TypeScript ESLint Plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
Your `.eslintrc` file should have the following extensions:
```.eslintrc.yml
...
extends:
  - standard-with-typescript
  - plugin:@typescript-eslint/recommended
  - plugin:prettier/recommended
  - prettier
...
```
 
**Prettier Configurations**

Apply the following ruleset for Prettier:
``` .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
```

>  **What improvements in your codebase were introduced by using TS instead of JS? Name at least 3 and explain why.**

Present your findings here...

1. **Static Typing and Type Safety:**

In JavaScript, variables and function return values are dynamically typed, which means that their type is only known at runtime, which
can lead to potential runtime errors that are hard to debug, especially as the codebase grows. 
In TypeScript there is static typing, which allows to define the types of variables, function parameters, and return values, which 
helps catch errors at compile time than at runtime. Example:
``` JS
// addComments.ts
const nameField = document.querySelector<HTMLInputElement>('#name')!;
```

2. **Enhanced Code Readability and Maintainability:**

JavaScript does not enforce a structure or data type on variables or functions, which can lead to inconsistent and confusing code.
TypeScript’s use of interfaces and explicit types makes it clear what each variable or function should contain or return.

3. **Null Safety**

JavaScript code often involves manipulating the DOM or other objects that may not exist at runtime for which one may encounter runtime errors if one attempts to access properties or methods on a null or undefined object. 
For example, using document.querySelector might return null if an element is not found, which may lead to potential errors.
TypeScript introduces null safety by explicitly requiring to handle the possibility of null or undefined values. This prevents runtime errors caused by null or undefined values.

## 3.	CI/CD Pipeline Playground (5 Pts.)
Implementation of a CI/CD pipeline to automate the development and deployment process – write automated tests.

Here are some additional resources: [GitHub Actions Tutorial](https://github.com/leonardo1710/WebEngineeringSDE/wiki/3.2-CI-CD-Pipeline-with-Github-Pages-and-Github-Actions) and [GitHub Actions Docs](https://docs.github.com/en/actions).

**Tasks:**
* (1.5) Write at least 2 meaningful unit tests (use [Vitest](https://vitest.dev/) or [Jest](https://jestjs.io/)) for your project and configure the following tasks in ``npm scripts``:
  * `test`: runs all files that include `.test.` or `.spec.`, e.g.: `example.test.ts`
  * `test:coverage`: runs tests like `test` but also creates a test coverage report
* (1) Configure **2 Workflows** in GitHub Actions, one for development and one for deployment:
  * Create a `development` branch inside your repository
  * (1) Development Workflow should at least test and lint your code when developers push to branch `development`
  * (1) Deployment Workflow is triggered when developers push into `main` branch. It should at least test, lint and build your source code. Afterwards the build artifacts of your application should be automatically deployed to Github Pages (or another hosting provider of your choice). 
* (0.5) Reuse existing workflows or jobs whenever possible! 

## 4.	Accessibility Playground (5 Pts.)
You might have noticed that the base project has a number of accessibility issues - your task is to explore the existing site and fix them.
Use the tools presented in our accessibility workshop to test the accessibility in your project.

**Report with wave.webaim.org and Chrome Screen Reader**

**(0.5) Color** 

Test the current color contrast (text/background), report the results of the test, and then fix them by changing the assigned colors.

*Present your reports here.*

- There are 20 contrast errors, which means there is very low contrast between text and background (green background and black text). This makes text hard to read, especially for users with visual impairments. This can be fixed by updating the CSS colors to ensure that all text meets WCAG AA/AAA standards.
- Also changing "font size" to H1, H2, ... in HTML and CSS ```<font size="6">The trouble with Bears</font>``` (Font size 7 --> H1, Size 6 --> H2. and Size 5 to H3)


**(0.5) Semantic HTML**

Report on what happens when you try to navigate the page using a screen reader. Fix those navigation issues.

*Present your reports here.*

- There are issues with navigating through the page using a screen reader. VoiceOver mentioned elements like "Liste mit 4 Elementen, Home, Intere Linklistenelement, Our Team, Interne Linklistenelement, ..." but this is confusing to understand, especially when the VoiceOver is too fast or in my case in german with an accent.
To fix this, one should ensure that elements like header, nav, main are being used appropriately for better semantic meaning and adding ARIA Roles like role=navigation. 

**(0.5) Audio** 

The ``<audio>`` player isn't accessible to hearing impaired (deaf) people — can you add some kind of accessible alternative for these users?

*Present your findings and fixes here.*

- The audio player lacks captions or a transcript for users who are deaf or hard of hearing. To fix this, a transcript should be provided directly below the audio player.

**(1) Forms** 
  * The ``<input>`` element in the search form at the top could do with a label, but we don't want to add a visible text label that would potentially spoil the design and isn't really needed by sighted users. Fix this issue by adding a label that is only accessible to screen readers.
  * The two ``<input>`` elements in the comment form have visible text labels, but they are not unambiguously associated with their labels — how do you achieve this? Note that you'll need to update some of the CSS rule as well.

*Present your findings and fixes here.*

- The input element in the search form was missing a label. To fix this add an accessible label using label for="search-query" class="sr-only"Search Query</label and update the CSS to hide it visually (sr-only class).
By updating the search form in the HTML, with an accessible but hidden label and CSS to hide it. Added an Accessible Label element for the input element, with the text "Search our website." This label provides context to screen readers about what the input field is for. The .sr-only class contains several CSS properties designed to hide content visually while ensuring it remains accessible to assistive technologies.

- The two Comment Form Labels input elements were not explicitly associated with their labels.
  The for and id attributes create a clear association between labels and inputs, making it easier for screen readers to identify and announce labels correctly. This improves form usability for users who rely on assistive technologies.
  Clicking on the label will now place the cursor in the associated input field, which is also helpful for mouse users.

**(0.5) Comment section**

The show/hide comment control button is not currently keyboard-accessible. Can you make it keyboard accessible, both in terms of focusing it using the tab key, and activating it using the return key?

*Present your findings and fixes here.*

- The "Show/Hide comments" button was not keyboard-accessible. To fix this added an event listener to handle the keydown event to allow the "Enter" key to trigger the action.

**(1) The table**

The data table is not currently very accessible — it is hard for screen reader users to associate data rows and columns together, and the table also has no kind of summary to make it clear what it shows. Can you add some features to your HTML to fix this problem?

*Present your findings and fixes here.*

- The data table lacks descriptive headers and context. To fix this add caption to provide a summary for the table.
- Added caption for Context to help screen reader users understand the table's purpose.
- Replaced Header Cells from td with th to mark them as headers. Screen readers will now recognize these cells as headers, providing important context to users.
- Added scope Attribute "col" to all column header cells to explicitly indicate that these are column headers. Added scope="row" to the first cell of each data row (<th scope="row">) to mark them as row headers, which improves the table's readability for assistive technologies to help screen readers understand the association between data in a row or column, making it much easier for users to navigate the table.


**(1) More Findings**

What other accessibility issues did you find? Explain how you did fix them.

- Language missing or invalid: The HTML element was missing a lang attribute. To fix this, add lang="en" to the html tag to specify the language.
  Adding lang="en" to the <html> tag indicates that the primary language of the page is English. This helps assistive technologies like screen readers correctly pronounce words.
- Very Small Text: Increased the font size for specific elements to ensure they are easily readable.
- Changed Font-Family to sans-serif to improve accessibility for many users, because they are generally considered more readable, particularly for users with certain visual impairments or cognitive difficulties.
- Search Button is not a button: Changing the input type="submit" to a button makes the search form more customizable and accessible. It allows for styling flexibility, ensuring better visual consistency and interaction feedback.
  The aria-label or hidden label for the input helps screen readers understand the purpose of the input, while the button with clear text ("Go!") makes it clear what action the user will take.
- Adjusted Placeholder Text sizes and fonts for better readability. 



-----


# Extended Coding Playgrounds
Please create a new independent Repository for these playgrounds and submit a link to it in the Moodle submission. 
Additionally, provide a description of how to start your frontend and backend services inside the `README.md`.

## Submission
Submit your coding repository link in Moodle. Send me an invitation to your repository if it is set to private:
> GitHub: leonardo1710
> 
> GitLab: leon.freudenthaler@fh-campuswien.ac.at

## 5. Migrate to a Frontend Framework (10 pts.)
In this playground you will migrate your application to a frontend framework of your choice.

**Tasks**:
* Migrate your application to a frontend framework of your choice (e.g. React, Angular, Vue.js, Svelte,...)
  * All previous features should still work
  * The application still should use build and dependency management
* Adapt your `npm scripts` if necessary

## 6. Integrate a Backend Framework (10 pts.)
In this playground you will use a backend framework of your choice and connect it with an API to your frontend application. 

**Tasks**:
* (3) Setup a backend framework of your choice
* (2) Create an API your frontend will be connected to (REST, GraphQL, gRPC, you choose...)
* (2) Your backend should now request the bear data from presented Wikipedia API
* (3) Replace the frontend Wikipedia API calls with calls to your backend - the functionality of your frontend should work as before!
* (Optional): you may want to introduce some sort of caching layer for Wikipedia API requests


## 7. Containerize your application (10 pts.)
Dockerize your frontend and backend applications. It should be possible to start all services in the corresponding mode (development, production) with a single command (e.g. use Docker Compose for this).

**Tasks**:
* (6) Create **multi-stage Dockerfiles** for your applications (depending on your frameworks):
  * The frontend Dockerfile should: 1. run the app in a development environment 2. build the app 3. serve build artefacts over Nginx
  * The backend Dockerfile should: 1. run the app in a development environment 2. build the app if there is a build step in your framework (optional) 3. serve the app 
* (4) Create two docker-compose files to orchestrate you applications in ``development`` and ``production`` mode:
  * Define ports and dependencies
  * Define corresponding stage (development, production)
  * Use environment variables if possible
* Your application should start with the following commands:
  * Development: `docker-compose -f docker-compose.yml up --build`
  * Production: `docker-compose -f docker-compose.prod.yml up --build`