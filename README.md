# Meet App

Link: https://juli20008.github.io/meet/

## Feature 1: Filter Events By City

Given: The user has launched the event application and is on the events listing page.
When: The user selects a specific city from the available city options in the filter menu.
Then: The events listing page refreshes, displaying only the events that are located in the selected city.

## Feature 2: Show/Hide Event Details

Given: The user is viewing the event details page.
When: The user taps on a toggle button or performs a specific gesture.
Then: The event details section either expands or collapses, showing or hiding additional information about the event, respectively.

## Feature 3: Specify Number of Events

Given: The user is on the events listing page.
When: The user inputs a specific number or selects a predefined option from a drop-down menu to specify the desired number of events to be displayed.
Then: The events listing page refreshes, displaying the specified number of events.

## Feature 4: Use the App When Offline

Given: The user has previously accessed the event application and has an active internet connection.
When: The user loses internet connectivity or enables airplane mode.
Then: The event application displays a message indicating that the user is offline and some features may be limited or unavailable. Previously viewed events and cached data are still accessible.

## Feature 5: Add an App Shortcut to the Home Screen

Given: The user has installed the event application on their mobile device.
When: The user long-presses the app icon or accesses the app settings.
Then: The user is presented with an option to add a shortcut to the home screen. After confirming, the app icon appears on the home screen for easy access.

## Feature 6: Display Charts Visualizing Event Details

Given: The user is viewing the event details page.
When: The user taps on a "View Charts" button or a specific tab within the event details page.
Then: The application retrieves relevant data and generates visually appealing charts, presenting them to the user within the event details page to provide additional insights or statistics about the event.

## SERVERLESS

In the Meet app, serverless functions will be utilized to power certain features that require on-demand processing and scalability. For example, when users filter events by city or specify the number of events they want to view, serverless functions can handle the data processing and filtering tasks. Additionally, serverless technology can be employed to generate and serve the charts for the "View Charts" feature, as it allows for efficient resource allocation and scaling based on the current user demand.

Using serverless functions will provide flexibility and cost-effectiveness for handling variable loads of event data processing and visualization tasks. It allows the Meet app to focus on providing a smooth user experience without the need for managing complex server infrastructures. By leveraging cloud-based serverless solutions, the Meet app can efficiently deliver real-time event data and chart insights to users while minimizing operational overhead and ensuring optimal performance. The serverless architecture will enable the Meet app to dynamically scale resources as needed, ensuring a seamless experience for users during high traffic periods.
