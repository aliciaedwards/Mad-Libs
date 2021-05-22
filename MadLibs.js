let questions = 3;

let questionsLeft = ' [' + questions + ' questions left]';

let adjective = prompt('Please type an adjective' + questionsLeft);

questions -= 1;

questionsLeft = ' [' + questions + ' questions left]';

let verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);

questions -= 1;

questionsLeft = ' [' + questions + ' questions left]';

let noun = prompt('Please type a noun' + questionsLeft);

alert('All done. Ready for the message?');

let sentence = "<p>There was a " + adjective;

sentence += ' UI/UX designer who wanted to learn Front-End Development to ' + verb;

sentence += ' the ' + noun + '.</p>';

document.write(sentence);
//document.getElementById('results').innerHTML = sentence;
//document.createElement(sentence);
