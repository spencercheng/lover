# Notes: CS 260

## Git

I have learned how to use Git's version control using commits, pushing, and pulling.

Imporant commands I was able to practice using:
- `li` 
- `mkdir` 
- `pwd` 
- `cd` 
- `git add`
- `git commit`
- `git push`
- `git pull`
- `git fetch`
- `git status`


## The Internet and Web Servers

I learned about how the internet works. I also learned about web servers. I learned about Amazon EC2 Web Service. I made a instance of a server and accessed it through a remote shell. It was cool to understand how everything I was doing was functioning. I then assigned an elastic IP address: 44.198.237.228. 
I learned about the sequence of the internet servers and their way of interacting with each other. I also learned about how to utlize 

The command to remote shell into the server was `ssh -i [key pair file] ubuntu@[ip address]`.

I like the table at the end of the internet lesson taling about the network internals. It said the actual sending of data across the internet used the TCP/IP model. This is a layered architecture that covers everything from the physical wres to the data that a web app sends.

### TCP/IP layers

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |


