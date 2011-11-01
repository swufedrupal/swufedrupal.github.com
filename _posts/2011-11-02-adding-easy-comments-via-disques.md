---
layout: post
title: Adding Easy Comments with Disqus to Github pages
---

{{ page.title }}
================

<p class="meta">02 November 2011 - Chengdu, China</p>

In my [first post](http://swufedrupal.github.com/2011/11/01/building-github-blog-for-swufedrupal.html), I wrote about how great GIT and Github.com were as resources as well as how the fact that I was using the [Github Pages functionality](http://pages.github.com/) to create a simple yet dynamic site. More or less, this entire setup uses fairly simple html and css as well as a couple adapted tweaks to provide a list of our github.com repos. 

Since this site doesn't use a database, the real engine from the dynamic rendering the site's content is [Jekyll](https://github.com/mojombo/jekyll/), which is, to quote, "a simple, blog aware, static site generator." Quite simply it is a simple Ruby Gem that takes the site's template directory (in our case /_layouts) and runs it through Markdown and converts it to static web content. 

## Markdown: Clean, Readable Text + text-to-html filter 

If didn't know already, [Markdown Syntax](http://daringfireball.net/projects/markdown/syntax) is a simple text format that is "intended to be as easy-to-read and easy-to-write as is feasible." HTML is quite clunky with all the tags and formats. It's effective for building the framework of a site, which is essentially what the template layer is, but html is very nice to use when you just want to write. It's also quite ugly to ready. 

At the same time, a full WYSIWYG editor with a program like Word or a javascript embedded editor like CKEditor is really convenient either. While they provide fully decorated text, they either create large files (=Word) or clutter and unreadable HTML (=javascript WYSIWYG editors). Markdown is basically clean text. The .mdown or .md files are really easy to read in any text editor, even without any styles added. Writing with markdown is easy too (and a bit addictive in a way). On teh technology side, the markdown processor basically converts line breaks and a few simple punctuations into basic html via a text-to-html filter. 

This basic HTML output can then be stylized with css, which hopefully this site has by now. But depending on when you are reading this or how lazy or busy I am, it's quite possible that the current site isn't particularly beautiful (yet!). I do teach web development and design so I should be working on that.

## Disqus: Using a third-party commenting system

The only problem with this blogging setup is that it doesn't provide a way to add comments. Fortunately there are several web services that let you use their system for adding comments. The other bonus is that your site doesn't have to worry about handling logins, since these comment services let you have a single login or shared login from sites like Facebook or Google. Anyways, one of the best and most commonly seen on the Net is called [Disqus](http://disqus.com). 

After creating a site-specific account, Disqus gives you a bit of javascript to embed and suddenly all those dynamically rendering but static html pages can now have comments. Whoa!

While there are still some tweaks to figure out (like how can I better add photos) with this setup, it's a pretty amazing, developer-oriented way of doing things. Github rock on!

-[Mark](http://github.com/markwk)

P.S. -- If you looking for some extra homework, add a feed for your site via [http://feedburner.com](http://feedburner.com) by linking to your atom.xml's location.