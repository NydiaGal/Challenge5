// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function workdayscheduler() {
    // TODO: Add code to display the current date in the header of the page.
    function updateCurrentDate() {
      var currentDate = dayjs().format('MMMM DD, YYYY');
      $('#currentDate').text(currentDate);
}
    updateCurrentDate();

  // array to store each hourly event
    var hourlyEvents = [];

  // generate hour blocks
      for (var hour = 0; hour < hourlyEvents; hour++) {
          var currentHour = dayjs().hour(hour);
          var hourFormatted = currentHour.format ('h A');

        //get handles on html elements and create hour blocks
          var hourRow = $('<div>').addClass('row time-block');
          var hourLabel = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hourFormatted);
          var eventInput = $('<textarea>').addClass('col-8 col-md-10 description');
          var saveButton = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save')
            .append($('<i>').addClass('fas fa-save').attr('aria-hidden', 'true'));
    }

  // TODO: Add a listener for click events on the save button. 
  // This code should use the id in the containing time-block as a key to save the user input in local storage. 
  // HINT: What does `this` reference in the click listener function? 
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
          saveButton.on('click', function () {
            var eventInfo = $(this).siblings('.description').val();
            var hourFormatted = $(this).parent().attr('id');
            localStorage.setItem('hour' + hourFormatted, eventInfo);
          });

          hourRow.append(hourLabel, eventInput, saveButton);

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
  // How can Day.js be used to get the current hour in 24-hour time?

          var currentHourOfDay = dayjs().hour();
            if (hour < currentHourOfDay) {
              hourRow.addClass('past');
            } else if (hour === currentHourOfDay) {
              hourRow.addClass('present');
            } else {
              hourRow.addClass('future');
          }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
          var savedEvent = localStorage.getItem('hour-' + hourFormatted);
            if (savedEvent) {
              eventInput.val(savedEvent);
          }

        $('.container-lg').append(hourRow);
      }
    );
workdayscheduler();
