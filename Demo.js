const inquirer=require("inquirer");

// inquirer is used to make command line interactive 
// It is a promised based library

inquirer                    // It take the values an object
  .prompt([
    {
     type:"list",         // type of the data dispplayed in command line 
     name:"selection",   // it keepp the tarck of the selected choice
     choices:["choice1","choice2"], // choice is for choice 
    }
  ])
  .then(function(ans) {
    if(ans.selection=='choice1')
    {
        console.log("choice 1 is selected");
    }
    else
    {
        console.log("choice 2 is selected");
    }
  })