---
layout: post
title: Geting Setup on GIT and Github.com
---

{{ page.title }}
================

<p class="meta">06 November 2011 - Chengdu, China</p>

As I wrote in a [previous post](http://swufedrupal.github.com/2011/11/01/building-github-blog-for-swufedrupal.html), GIT is one of the most powerful [version control systems](http://en.wikipedia.org/wiki/Revision_control) today. It was originally created by and for Linux, but through sites like Github.com and several major open source projects moving to GIT, GIT version control is increasingly becoming one of the most used today. 

I'd like to go over basic setup and basic GIT usage. 

## Getting Setup with GIT

Getting setup on GIT is relatively simple, but setup varies from system to system. Github.com has some great tutorials on getting setup on GIT and how to use Github.com for your version control:
* [Initial Setup with Windows](http://help.github.com/win-set-up-git/)
* [Initial Setup with Mac](http://help.github.com/mac-set-up-git/)
* [Initial Setup with Linux](http://help.github.com/linux-set-up-git/)

I recommend following the above tutorials, but to repeat, there are basically only a few steps:
* Install GIT
* Generate your public SSH Key (this is how you verify who you are between your computer and your GIT repositories)
* Add your public SSH Key to Github.com (or whatever GIT system you are using)
* Create a test Github repository and follow the directions to test if it's working.
* Profit!

## Set Up Your Info

It's recommended to configure your personal name, username and email with your GIT on your computer so all your commits are connected with who you are! 

Go onto your command line tool, Terminal and run these commands:
<code>
$ git config --global user.name "Firstname Lastname"
$ git config --global user.email "your_email@youremail.com"
</code>

Make sure you use your name and your email with the above commands. 

## Beyond the Basics: What is GIT? What are the basic commands? 

GIT is version control system for managing files over time with a group. Basically, every time you commit changes to your files, GIT takes a snapshot of your files. These files are tracked over time and you can see what's changed. Files and programs manageed with GIT are easy to be fork (split into different branches) in order for you to make stable, staging, testing and development work with your files. Read more: <http://progit.org/book/ch1-3.html>.

### Basic Commands: 
* $ git init // this initiates a directory as a git repository. 
* $ git status // this will check the change and commit status of files in your directory
* $ git add filename // this adds a file to a git repository
* $ git add . // this will add all files to staging 
* $ git commit -m 'commit message'  // this will commit files and add a message. 
* $ git remote add origin git.xyz.com:xyz.git  // this add a remote repository linked with your repository
* $ git push origin master // pushes your committed changes from your master branch to the origin repository. 

-[Mark](http://github.com/markwk)