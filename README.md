# Hello young padawan! 🖖🤓 
## After you initiate your trail throughout our project, you should read our guide, it will help you about how to management all the code.

### Para baixar o projeto localmente/To download locally the project
````javascript
//If you dont initiate a git, you should run this code.
git init
//this code above links your local repository with the remote repository.
//if this code doesn't work, may you don't have the rights to run it, Check the error that the console returns.
git remote add origin <repository URL from github>
//check if the code runs well
//it has to returns the URL of the remote repository
git remote -v
//Now you need to fetch the remote branches
git fetch origin
//probably you don't have a local branch, so you'll need one for it run the code below.
git checkout -b dev origin/dev
// pull the remote repository into your local repository using this code.
git pull origin dev
````