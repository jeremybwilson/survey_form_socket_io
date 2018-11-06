$(document).ready(() => {
    
    var socket = io.connect();
    
    $('#surveyForm').submit((e) => {
        e.preventDefault()
        const name = $('#name').val();
        const location = $('#location').val();
        const language = $('#language').val();
        let comment = $('#comment').val();
        if(comment.length > 0){
            comment = $('#comment').val();
        } else {
            comment = 'No comment was submitted!';
        }
        const data = [{name}, {location}, {language}, {comment}];
        // console.log('you submitted the following form data:', data);
        // console.log(`you submitted the following form data: ${data}`)
        socket.emit('submitButtonClick', data); 
    });

    socket.on('randomNumber', (number) => {
        console.log('got the number: ', number);
        $('#numberDiv').text(`Process ID number is: ${number}`);
    });

    socket.on('processForm', (data) => {
        // console.log('got the form data from the server: ', data);
        // console.log(`got the form data from the server ${data}`);
        const htmlStr = `
            <section class="emitted-info">
            <h3>You emitted the following information to the server:</h3>
            <p>Name: ${data[0].name}</p>
            <p>Location: ${data[1].location}</p>
            <p>Language: ${data[2].language}</p>
            <p>Comments: ${data[3].comment}</p>
            </section>
        `;
        $('#formResult').html(htmlStr);
    });
});