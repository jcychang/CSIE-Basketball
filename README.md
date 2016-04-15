# CSIE Basketball
Official repository for CSIE Basketball.

## Accounts and Info

###### Heroku App
* Username: ntucsiebasketball
* Password: csiebball2016

###### Firebase Database
* Username: ntucsiebasketball
* Password: csiebball2016

## Developing a Feature

###### Working on Code
1. You **MUST** first create your own branch from master
2. Clone repository to local machine

###### Submitting 
1. **NEVER** push to master branch, Josh *will* be mad.
2. When preparing to push a code patch
  1. Make sure your local branch is update to date with master
  
    ``` Command: git pull origin [your local branch name] ```
  
  2. Make changes to your local branch
  3. Add the documents that you've changed into a patch
  
    ``` Command: git add [files] ```
    
  4. Commit the patch
  
    ``` Command: git commit -a ```
    
  5. Write a commit message. 
  
    Specify change type which must be one of the following:

    * **feat**: A new feature
    * **fix**: A bug fix
    * **docs**: Documentation only changes
    * **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    * **refactor**: A code change that neither fixes a bug nor adds a feature
    * **perf**: A code change that improves performance
    * **test**: Adding missing tests
    * **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
    
    ``` Example: fix(gui): change master gui template ```
    
  6. Push to **YOUR OWN BRANCH**, do **NOT** push to master
    
    ``` Command: git push origin [your local branch name]:[your remote branch name] ```
    
  7. On github.com create a **New Pull Request**
  
    Refer to: https://help.github.com/articles/creating-a-pull-request/
    
  8. The patch will be reviewed as a team, merge into master only if reviewed and passed
  
  9. If patch has issues, fix the issue in your local branch, and amend your commmit
  
    ``` Command: git commit --amend ```
  
  10. Repeat steps 5 - 8 until merged
