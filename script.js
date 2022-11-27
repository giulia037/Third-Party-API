// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
    var timeDisplayEl = $('#currentDay.lead');
    
    function displayTime() {
        var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        timeDisplayEl.text(rightNow);
      }
      
      displayTime();
    
      $('.saveBtn').on ('click', function(){
        const value = $(this).siblings('.description').val()
        const time = $(this).parent().attr('id')
        localStorage.setItem(time,value)
    }) 
    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-1 .description').val(localStorage.getItem('hour-1'))
    $('#hour-2 .description').val(localStorage.getItem('hour-2'))
    $('#hour-3 .description').val(localStorage.getItem('hour-3'))
    $('#hour-4 .description').val(localStorage.getItem('hour-4'))
    $('#hour-5 .description').val(localStorage.getItem('hour-5'))
    
    function workDay() {
        const currentHour = dayjs().hour()
        console.log(currentHour)
        $('.time-block').each(function() {
            const hour = parseInt($(this).attr('id').split('-')[1])
            console.log(hour)
            if(currentHour > hour){
                $(this).removeClass('present')
                $(this).removeClass('future')
                $(this).addClass('past')
             } else if(currentHour === hour){
                $(this).removeClass('past')
                $(this).removeClass('future')
                $(this).addClass('present')
             }else {
                $(this).addClass('future')
             }
        })
        
    }

workDay()
})

