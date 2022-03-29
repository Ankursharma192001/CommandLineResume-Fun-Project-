const inquirer=require("inquirer");

const child_process=require("child_process")


// inquirer is used to make command line interactive 

// It is a promised based library

function displayList()
{
inquirer                    // It take the values an object
  .prompt([
    {
     type:"list",                                        // type of the data dispplayed in command line 
     name:"selection",                                   // it keepp the tarck of the selected choice
     choices:["About","Skills","academics","Projects"], // choice is for choice 
    }
  ])
  .then(function(ans) {
    if(ans.selection=='About')
    {
        console.log(`A passionately curious Web developer 
           who just found out that making websites and seeing 
           the magic happen on the Internet is what excites him the most.`);
        displayNext()
    }
    else if(ans.selection=="Skills")
    {
        console.log("C++ , JavaScript , React , HTML , CSS , C");
        displayNext()
    }
    else if(ans.selection=="academics")
    {
       console.log("Got 9.7 CGPA in First Year")

       console.log("3* on codechef ")

       displayNext()
    }
    else if(ans.selection=="Projects")
    {
       
      child_process.execSync(" start chrome https://github.com/Ankursharma192001?tab=repositories")
       
        displayNext()
    }
  })
}


// function call for display list
displayList()

// Go back option 
function displayNext(){
    inquirer
.prompt([
 {
        type : 'list',
        name : 'selection',
        choices : ['Go back' , 'exit']

 }
])
.then(function(ans){
 if(ans.selection =='Go back'){
        displayList()
 }
 else if(ans.selection == "exit"){
        console.log('Resume closed')
 }
})
}