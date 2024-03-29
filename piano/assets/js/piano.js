// © 2024 gparap

//placeholder for note texts
let notesTextsDefault = document.querySelectorAll('.natural-note-button, .sharp-note-button');

//audio volume global
let volume = 0.5;

function playNote(note) {
    //get the mp3 file from the note
    let audioSource = "";
    audioSource = "assets/audio/" + note + ".mp3";

    //play the note
    let audio = document.getElementById('audio-player');
    audio.src = audioSource;
    if (audio && typeof audio.play === 'function') {
        audio.volume = volume;
        audio.play();
    } else {
        //log what went wrong
        audio.addEventListener('error', function (e) {
            if (e.type === 'error') {
                console.error("Error occurred:", e);
            }
        });
    }
}

function handleNotesVisibility() {
    //get the checkbox element
    let checkbox = document.getElementById('notes-display-checkbox');

    //get all the button elements with notes
    let notesTexts = document.querySelectorAll('.natural-note-button, .sharp-note-button');
    
    //show notes if checkbox is checked
    if (checkbox.checked) {
        let i=0;
        notesTexts.forEach(element => {
            element.innerHTML = notesTextsDefault[i].dataset.noteText;
            i++;
        });
    }

    //hide notes if checkbox is not checked
    else{
        notesTexts.forEach(element => {
            element.innerHTML = "";
        });
        
    }
}

function handleSoundVolume() {
    //get the range option
    let range = document.getElementById('sound-volume-range').value;
    volume = range / 100;

    //set the audio volume
    let audio = document.getElementById('audio-player');
    audio.volume = volume;
}
