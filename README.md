# Stopwatch

A simple and functional web-based stopwatch application built with vanilla HTML, CSS, and JavaScript. This stopwatch provides precise time tracking with lap functionality, pause and resume capabilities, and a clean responsive user interface that works seamlessly across all device sizes.

## Project Description

This stopwatch application allows users to track elapsed time with millisecond precision. The interface features a simple design with start, pause, lap, and reset controls. Users can record multiple lap times which are displayed in a side panel. The stopwatch displays time in hours, minutes, seconds, and milliseconds format. The application is fully responsive and optimized for mobile devices, tablets, and desktop screens.

## How to Run the Project

1. Navigate to the stopwatch folder in your file system
2. Double-click on the index.html file
3. The stopwatch will open in your default web browser

## File Structure

The project consists of exactly three files as required:

1. index.html - Contains the HTML structure and layout of the stopwatch
2. style.css - Contains all styling rules, responsive design, and animations
3. script.js - Contains all JavaScript functions for stopwatch functionality

All files are located in the stopwatch directory. No inline CSS or JavaScript is used in the HTML file.

## Features

Timer Functionality
The stopwatch supports comprehensive time tracking:
- Start button to begin timing
- Pause button to pause the timer while preserving elapsed time
- Resume functionality that continues from where it was paused
- Reset button to clear all timer data and laps
- Millisecond precision time display

Lap Feature
- Lap button to record individual lap times
- Lap button is disabled when timer is stopped
- Laps are displayed in a side panel with lap numbers
- Each lap shows the time elapsed since the previous lap
- Laps are displayed in reverse chronological order with newest on top
- Empty state message when no laps are recorded

Time Display
- Displays time in format: HH:MM:SS:MS (hours:minutes:seconds:milliseconds)
- Updates every 10 milliseconds for smooth display
- Monospace font for consistent number width

User Experience Features
- Loading animations on buttons to prevent double-clicking
- Visual feedback on button hover and active states
- Button state management with proper enable and disable logic
- Responsive design that adapts to all screen sizes
- Side-by-side layout with timer on left and laps on right
- Clean and simple interface without unnecessary elements

## Technologies Used

HTML5 - For the structure and semantic markup
CSS3 - For styling, layout, responsive design, and animations
JavaScript (Vanilla) - For timer logic and interactivity

No external libraries or frameworks are used in this project.

## Usage Instructions

1. Click the Start button to begin the timer
2. Click the Pause button to pause the timer
3. Click the Start button again to resume from where it was paused
4. Click the Lap button while the timer is running to record a lap time
5. Click the Reset button to clear the timer and all recorded laps
6. View recorded laps in the side panel on the right

Example Usage:
1. Click Start to begin timing
2. Click Lap multiple times to record different lap times
3. Click Pause to pause the timer
4. Click Start to resume
5. Click Reset to clear everything

## Code Organization

The JavaScript code is organized using functions only. No classes, constructors, or initialization functions are used. The code structure includes:

Main Functions:
- formatTime() - Formats milliseconds into HH:MM:SS:MS format
- updateDisplay() - Updates the timer display screen
- startTimer() - Starts or resumes the timer
- pauseTimer() - Pauses the timer and preserves elapsed time
- addLap() - Records and displays a lap time
- resetTimer() - Resets all timer values and clears laps
- handleButtonClick() - Main event handler that routes button clicks to appropriate functions
- addLoadingState() - Adds loading animation to prevent double clicks
- removeLoadingState() - Removes loading animation after processing

Event Listeners:
- All stopwatch buttons have click event listeners attached
- Event listeners are set up without document.onload

## Responsive Design

The stopwatch is fully responsive and includes media queries for different screen sizes:

Mobile Devices (max-width: 768px)
- Layout changes from side-by-side to stacked vertically
- Laps panel moves below the timer controls
- Reduced padding and font sizes
- Smaller button heights
- Adjusted screen display size

Small Mobile Devices (max-width: 480px)
- Further reduced dimensions
- Optimized spacing for very small screens
- Smaller lap item padding

Very Small Mobile Devices (max-width: 360px)
- Minimum dimensions for usability
- Compact button sizes
- Reduced font sizes

Tablet and Desktop (min-width: 768px)
- Side-by-side layout with timer on left and laps on right
- Larger display screen
- Increased button sizes
- Enhanced spacing for better usability

The stopwatch uses Flexbox for container alignment and CSS Grid for button layout, ensuring proper display across all devices.

## CSS Features

The stylesheet includes:
- Card layout for the stopwatch container
- Flexbox layout for main content and side panel
- Hover effects on all interactive buttons
- Custom color theme with distinct colors for different button types
- Loading spinner animation for button feedback
- Smooth transitions for better user experience
- Proper CSS formatting with multi-line declarations

## JavaScript Implementation Details

Function-Based Architecture:
- All code uses functions only, no classes or constructors
- No initialization functions or document.onload events
- Event listeners are attached directly after DOM elements are selected

State Management:
- startTime - Stores the timestamp when timer started or resumed
- elapsedTime - Accumulates total elapsed time across pauses
- timerInterval - Stores the interval ID for the timer update loop
- isRunning - Boolean flag indicating if timer is currently running
- isPaused - Boolean flag indicating if timer is paused
- lapCount - Counter for the number of laps recorded
- lastLapTime - Stores the total elapsed time of the last lap

Timer Logic:
- Uses Date.now() for precise timestamp tracking
- Calculates elapsed time by comparing current time with start time
- Accumulates elapsed time when pausing to preserve total time
- Updates display every 10 milliseconds for smooth animation

Lap Functionality:
- Calculates lap time as difference between current total and last lap time
- Displays laps in reverse order with newest first
- Automatically removes empty state message when first lap is added
- Lap button is disabled when timer is not running

Error Handling:
- Proper handling of edge cases in timer calculations
- Validation to prevent lap recording when timer is stopped

Loading States:
- Buttons show loading animation when clicked
- Loading state prevents multiple clicks during processing
- Animation automatically removes after 150ms delay

## Browser Compatibility

This stopwatch works on all modern web browsers including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## Project Requirements Compliance

The project follows all specified requirements:
- Uses functions only in JavaScript, no constructors or init functions
- No document.onload or similar initialization events
- Separate CSS and JavaScript files, no inline code
- Responsive design for all screen sizes including mobile
- Loading animations on buttons to prevent double clicks
- Unique classnames prefixed with stopWatch-
- Proper code indentation and formatting
- Simple and functional UI without fancy elements
- No emojis or icons used
- No gradient colors, only solid colors
- Five Tagalog comments in JavaScript for main functions

## Future Enhancements

Potential improvements that could be added:
- Keyboard shortcuts for controls
- Sound alerts for lap times
- Export lap times functionality
- Multiple timer presets
- Countdown timer mode
- History of previous sessions

## Screenshot
<img width="1074" height="481" alt="image" src="https://github.com/user-attachments/assets/ad9e7cd4-21e2-45c5-8558-2dc385af0196" />


