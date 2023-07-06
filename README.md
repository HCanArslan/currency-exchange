# Currency Rate Application


This application fetches the latest exchange rates from an API and provides a currency converter functionality. The application is built using React, Redux, and Redux-Saga, with an additional use of Web Workers to handle background tasks.


# Microfrontend Architecture and Scaling
In the context of a larger project, I would consider using a microfrontend architecture. Microfrontends are an architectural style that aims to extend the concepts of microservices to frontend development.

They allow independent delivery by different teams, each team has end-to-end responsibility of the team's slice of the product, independent of all other teams. This allows for independent deployments and scaling based on demand.

# Implementation in this Project
In this currency converter application, although it doesn't fully showcase a microfrontend structure due to its smaller scale, we can still hypothesize a structure based on it.

Here is how I would go about it:

Currency Converter Microfrontend: This would be the core microfrontend of our application. It would be responsible for the functionality of converting the selected currency.

Rates Display Microfrontend: This microfrontend would be in charge of fetching and displaying the latest exchange rates. It would operate independently but could share some global state (like the selected base currency) with the currency converter.

User Profile/Authentication Microfrontend: If our application required user registration or login, we could make this a separate microfrontend as well. This would handle user authentication and display user-specific information.

# Communication Between Microfrontends
Communication between microfrontends could be handled in a few different ways. In this currency converter app, for instance, the base currency could be part of a global state managed by a library like Redux. When the user selects a new base currency in one microfrontend, the other microfrontend could react to that change. This would ensure all microfrontends are consistent with their data, while still operating independently.

# Advantages of This Architecture
Scaling with a microfrontend architecture would be as simple as deploying more instances of the necessary microfrontends, potentially even on separate servers if demand is high enough. Microfrontends can also be deployed independently of each other, which means teams can work on and deploy new features or bug fixes to their part of the application without having to coordinate with every other team.

# Conclusion
Though the microfrontends architecture is not necessary for this relatively small-scale application, it's a useful concept for larger, more complex applications, especially those developed by larger teams. My knowledge of microfrontends, along with my other skills in React, Redux, and CSS, allow me to confidently build and scale larger applications when necessary.

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
