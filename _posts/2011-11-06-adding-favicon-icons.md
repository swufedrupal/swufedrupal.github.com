---
layout: post
title: Adding Favicon Icons on your website
---

{{ page.title }}
================

<p class="meta">06 November 2011 - Chengdu, China</p>

While a CMS like Drupal makes it easy to integrate lots of common website features, it's good to know how certain basic html functions are done. In this short, I'd like to present what a favicon is, how to create one and how to add favicons to a basic html page. 

## What is a favicon?

Basically, a favicon is a small icon you see in browser's tab when visiting a website.

"A favicon (short for favorites icon), also known as a shortcut icon, Web site icon, URL icon, or bookmark icon, is a file containing one or more small icons, most commonly 16×16 pixels, associated with a particular Web site or Web page." Source: [Wikipedia](http://en.wikipedia.org/wiki/Favicon)

Each browser handles the display of favicons slightly differently.  

## How to create a favicon

While there are multiple sites for download favicons, it's generally considered best to crate a custom favicon to match your site's logo. Depending on the complexity of your site's logo, it might be in impossible to exactly create a small sized version. 

It's possible to create favicons using an editor like PhotoShop, but there are also multiple sites for helping you create one too. 

One of my favorite websites for creating a favicon from an existing image or logo is: <http://www.favicon.cc/>.  

## Adding a favicon on your website

There a couple ways to add a favicon to your website, including just adding the file as favicon.ico in the root of your website directory. The most common way to add though is in the header of your html page, above the body tags. You add in the same you would add css or javascript. 

Here is the code for adding a favicon:

<code>
<link rel="shortcut icon" href="http://example.com/myicon.ico" />
</code>

So once you've added your favicon in the root or whatever directory, just make reference to it in the header in the href. 

I hope this helps you make a million dollars!

-[Mark](http://github.com/markwk)