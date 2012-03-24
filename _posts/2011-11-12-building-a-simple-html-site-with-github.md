---
layout: post
title: Building A Simple HTML Site with Github.com
---

{{ page.title }}
================

<p class="meta">12 November 2011 - Chengdu, China</p>

I've got several Drupal 7-related lessons that need to be converted and added to our open source Github.com pages. I've been teaching Drupal 7 since September and using Drupal 7 since July but more heavily for the last two or three weeks. While there are still some lingering issues and bugs compared to the maturity of Drupal 6, I'm starting to see the power and increased flexibility that has come with Drupal 7. Anyways, this isn't a post about Drupal 7, but about how to create a simple HTML site via Gitub.com

While it is possible to get your own server and easily create an HTML / CSS site, it's fairly unlikely that anyone today would get a server just for those purposes. As I wrote in a [previous post](http://swufedrupal.github.com/2011/11/01/building-github-blog-for-swufedrupal.html), Github provides you with a simple way to create primarily HTML sites. I'd like to briefly explain how to do just that. 

## Step 1: Getting Setup. 

You'll need to have GIT working on your system and created and account on Github.com. If you're not sure what to do, read this previous post on [getting GIT and Github.com set up](). 

You'll need to start by creating some HTML files, including an HTML file called index.html and another called 404.html. index.html will be the default page that loads when they go to the domain root like http://yoursite.com and 404.html will be what loads when someone goes to a page or URL that doesn't exist. 

Hopefully you've spent some time creating and building some HTML files locally. If you need some starter files, checkout the repo on [HTML and CSS Basics](https://github.com/swufedrupal/html_css_basics) where you can clone and edit some basic files. 

Now that you have 1.) GIT on your computer, 2.) a Github.com account, and 3.) some html files, let's create a simple HTML site with these files via Github.com's Pages.  

## Why not just use a simple http server? Why use Github.com for HTML pages?

It's obvious that this approach isn't for everyone, and requires you to learn a bit about GIT and Github. 

There are a few special features to GIT pages, and it might be a good idea to read [Github.com's official tutorial on how Github.com Pages work](http://pages.github.com/). For example, it's possible to create a organization or username site like you see with [SWUFE Drupal](http://swufedrupal.github.com) at <http://swufedrupal.github.com>.

For our purposes, we are going to simply convert your github username and the repo into a live HTML site. So for example if your username is superman and you have a github repository name super-power-html, it will create a live site called: http://superman.github.com/super-power-html/. 

The advantage of this approach over setting up a separate server and using FTP to upload is that it's free and frankly a lot easier! 

Anyways...back to work...

## Step 2: Push Your Code so it is displayed via Github.com Pages. 

Now that we have everything we need, there are only a few additional steps to having a live HTML site. 


ADAPT FROM HERE: http://pages.github.com/


-[Mark](http://github.com/markwk)