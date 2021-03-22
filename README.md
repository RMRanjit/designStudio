# designStudio

designStudio for Cloud Marketplace

GitHub Setup

1. git Init - set up the local repository
2. git add . - add files recursively
3. git commit "COMMIT STATMENT" - commit to staging
4. git remote add origin "https://github.com/RMRanjit/designStudio.git"

- Add remote directory

5.  git push -u origin master --tags - to push files to remote
    --Create SSH
6.  go to root of the project
    7 mkdir .ssh
    8 ssh-keygen -t rsa -C "email" -select defaults
7.  the keyfuile shojld be generated here or in the users .ssh folder. look for messages
8.  Open up the .pub file and copy the entire content
9.  Go to github/settings/ssh and add the key
10. Validate if you can connect to the github by using the command ssh -T git@github.com - you should be able to connect..
