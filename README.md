# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Technical questions

Please answer the following questions in a markdown file called Answers to technical questions.md.

1. How long did you spend on the coding assignment?
   - I spent near about 8-10 hours in total.

a. What would you add to your solution if you had more time? - I can improve the UI. - I can include Context API since books data is used in many component at multiple levels to prevent props drilling. - More validations on buttons and search and error handling

b. If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add. - NA

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

###

````const [books, setBooks] = React.useState();
    const [isLoading, setIsLoading] = React.useState(null);
    const BASE_URL = "http://openlibrary.org/search.json?q=";
    const urlBuilder = (title) => {
    const encodedTitle = encodeURI(title).replace(/%20/g, "+");
    return `${BASE_URL}` + `${encodedTitle}`;
  }; ```

````

    const sortByLastPublishDate = () => {'
    let sortedBooks = [];

    // filter the books with publish dates
    let booksWithPublishDates = books.filter((book) => book.publish_year);
    // filter the books with non publish dates
    let booksWithNotPublishDates = books.filter((book) => !book.publish_year);
    // sort the books with publish dates
    sortedBooks = booksWithPublishDates.sort((a, b) =>
      Math.max(...a.publish_year) - (Math.max(b.publish_year))
    );
    // append the non sorted books
    setBooks([...sortedBooks, ...booksWithNotPublishDates]);

};

3. How would you track down a performance issue in production? Have you ever had to do this?
   I will see the performance in lighthouse and see the different aspects - how HTML, CSS and JS is loading. Time for initial paint. If lazy loading can be used. Image sizes. build size, use of unnecessary npm packages, removing heavy packages if required

4. How would you improve the API that you just used?

- Lots of missing fields in data

5. Please describe yourself using correctly formatted JSON.
   {
   "name": "Monika Rani",
   "myself": "I am a self taught React developer with an experience of 3 plus years under my belt. I am very enthusiastic and passionate about web development. I like to remain upto date with lates web dev trends. My hobbies includes movies, travelling and pets. I have two beautiful husikies",
   "skillsSet": [
   "React",
   "HTML",
   "CSS",
   "JavaScript",
   "Redux",
   "AWS"
   ],
   "role": "React Developer",
   "company": "Telus Digital"
   }

```

```
