# My General Knowledge Quiz

My genral Knowledge Quiz is designed to be a fast paced general knowledge quiz for those who want to test themselves on how quick they can process a question and select the right answer. I designed it to played over and over with for users to try and improve their score.

![Main](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20main.PNG)

## Features

-__Multipul choice interactive answer boxes__-
- I designed these boxes to give visual indication when hovering over by changing the colour to a light blue and changing the mouse crusor to a pointer.
- The answer boxes also change color depending on what was the correct answer and what the user chose, if they picked the wrong answer the background will change red while also showing the right answer in green.
- I also added a block button feature to the answers once one was chosen locking in the users selection not allowing them to change it.

![Interactiveanswer]https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20questions.PNG


-__Score Tracker__-
- I added a score  tracker at the end of the quiz to give the user feed back on how well they did and how many questions they got right.
- The score also displays when the timer runs out regradless if the user finised or not.

![ScoreFin](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20fin%20score.PNG)

![ScoreOut](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/time%20out%20quiz.PNG)


-__Timer__-
- The timer gives the user 30 seconds to complete the test when the timer runs out a message 'TIME OUT' will be displayed.
- If the user completes the test in the given time 'Finished' will be displayed.

![Timer](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20timer.PNG)

![timefin](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20done.PNG)

![timeout](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20time%20out.PNG)


-__submit button__-
- The submit button is hidden from the user until they choose a answer, when the button is visiable they can click it to move on to the next question.
- When the clicking the submit button on the last question the users will be shown their score and the timer will stop.

![Sub]

-__Restart button__--
- The restart button dissplays when the timer runs out and the user has not completed the quiz.
- The button refreshes the page allowing the user to start form the beginnging.

![Re](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/re.PNG)

-__Play again button__-
- The play again button allows the user to start the test from the start again once they complete it.

![Pa](https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20pa.PNG)

## Features To Add

-__scoreboard__-
- I would like to add a scoreboard in the future allowing users to see their scores and be able to compete against others.

-__Usernames__-
- I wouldl like for users to be able to create a username to be able to track their progress on the leaderboard.

-__catogories__-
- Give the user the option of topics and range from difficult questions to easier ones.

## Design

-__Colour Indication__-
- I used the colours green and red as visual indicators for the user to understand instantly if they got answer right or wrong clearly showing the correct to the incorrect.
![colorans]https://github.com/jaredakigbesote/quiz/blob/main/assets/media/quiz%20box.PNG

-__Colours__-
- I tried to use a calm colour for the background to not distract users as the took the quiz. 
- I used bolder more eye catcthing colours for the important information for the user such as blue for questions and green for buttons.
![colours]


## User Experince

### First time user
 - I tried to give as much information as i could about the quiz to the user on the home page.
 - I tried to make it easy for anyone to understand and complete the test on their first try.

 ## Testing
 ### validation

 - No errors where found in the style.css file. [(Jigsaw) validator]
 - No erros where found in my html code. [W3C validator] https://validator.w3.org/nu/?doc=https%3A%2F%2Fjaredakigbesote.github.io%2Fquiz%2F

 -__javascript__-
 - My submit button was broken so to test if it was working i console.log() the currentQuestionsIndex to try and locate the problem and i found that i had a typo in one of of scripts.

 - My timer was also broken and would not restart when the test was complete or when the time ran out. I was able to find a way to fix both problems by having separate buttons for each replay the 'Restart' and 'Play Again' buttons.

 - After fixing these issues there are no erros in my console. 







## Deployment
- To deploy this site on github I took the following steps.
- I navigated to the settings from the repository.
- I then went to the pages section in the settings and changed the branch selector to main.
- To deploy this page i then return to the repository page and click on deployments and choose a build to load.
  
  
  Link to page:

## credits
### content
- I used wikipedia to help get information for my questions that i used [Wikipedia](https://www.wikipedia.org/)

- The icons that were used are from fontawesome [Font Awesome](https://fontawesome.com/).

