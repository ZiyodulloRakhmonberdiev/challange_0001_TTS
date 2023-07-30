const speech = new SpeechSynthesisUtterance();
const textarea = document.querySelector('#textarea');
const btn = document.querySelector('.btn');
let voices = [];

let voiceSelect = document.querySelector('#voiceSelect');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice?.name, i)))
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]
})

btn.addEventListener('click', () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech)
})