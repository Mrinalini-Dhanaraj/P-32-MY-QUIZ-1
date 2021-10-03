class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input1.position(200, 230);
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option no..");
    this.input2.position(420, 230);

    this.button = createButton('Submit');
    this.button.position(600, 230);

    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3")
    this.options = createElements("h4")
    
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //Create html() and position() for each question, input and answers.
    
    this.question.html("What is the national flower of Japan?");
    this.question.position(200,200);
    
    this.option1.html("Cherry Blossoms");
    this.answer1.position(250,150);
    this.answer2.html("Lotus");
    this.answer2.position(300,100)
    this.answer3.html("Rose");
    this.answer3.position(350,50);
    this.answer4.html("Lily");
    this.answer4.position(370,75);

    this.message.html("Thank You, Your answer has been submitted");

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.display()
    })


  }
}
