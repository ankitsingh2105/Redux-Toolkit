// Importing necessary dependencies
const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");

// Importing reducers from their respective files
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");

// Creating a logger instance
const logger = reduxLogger.createLogger();

// Configuring the Redux store
const store = configureStore({
    // Combining reducers into a root reducer
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    },
    // Adding middleware to enhance Redux's capabilities
    // Concatenating the logger middleware to the list of default middleware
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(logger)
});

// Exporting the configured Redux store
module.exports = store;
