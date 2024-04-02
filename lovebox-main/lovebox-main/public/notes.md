# Notes: CS 260

## Git

I've learned about how to use version control through Git. It's really cool.

Imporant commands:
- `li` list files in directory
- `mkdir` make directory
- `pwd` present working directory
- `cd` change directory
- `git add`
- `git commit`
- `git push`
- `git pull`
- `git fetch`
- `git status`

If you need a reference to more commands visit the class page on the [console](https://github.com/webprogramming260/.github/blob/main/profile/essentials/console/console.md) and [Git](https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md#github)

## The Internet and Web Servers

I learned about how the internet works. I also learned about web servers. I learned about Amazon EC2 Web Service. I made a instance of a server and accessed it through a remote shell. It was cool to understand how everything I was doing was functioning. I then assigned an elastic IP address: 44.198.237.228. 

The command to remote shell into the server was `ssh -i [key pair file] ubuntu@[ip address]`.

I like the table at the end of the internet lesson taling about the network internals. It said the actual sending of data across the internet used the TCP/IP model. This is a layered architecture that covers everything from the physical wres to the data that a web app sends.

### TCP/IP layers

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |


