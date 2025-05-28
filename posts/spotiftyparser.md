---
title: Stupid Webapp to Solve Even Stupider (more stupid?) Problem
date: 2025-04-30
layout: layout.njk
exerpt: "Test"
---

Scenerio: I like listening to a variety of music. Many songs and bands come from places that don't speak English. Some of those places use different letters/alphabets/written language systems. 

Let's imagine a scenario where I stumbled upon a new band on Spotify, that is Chinese, and whose band and song names are written in Mandarin.

I would like to be able to tell my friend 'Hey, I just found this new band ___ ', but I cannot do that without knowing how to pronounce it, which I cannot do unless I can copy paste that artist/song name into Google Translate and have that say it to me out loud.

The insanely frustrating aspect of this whole dilemna is that you cannot copy paste artist or song names from Spotify Desktop. If you try to drag-click them into your broswer, you see something like 
> "https://open.spotify.com/track/1fmoCZ6mtMiqA5GHWPcZz9"

as opposed to any readable text about the artist or song. 

> Side Note: '一日入冬' by 缺省 was actually the track that first made me realize I couldn't copy paste from Spotify, and which led me down this whole rabit hole.

### Problem
How do I figure out who these people are if I cannot copy-paste that artist or song name straight from the Spotify desktop app? 

### Solution: 
We need to turn that link into a copy-pastable string so that the tiny number of people upset with this flaw can move on with their lives. 

Check out my attempt at fixing this problem:

[Pronouncify](https://eljam3239.github.io/spotify-pronounce/)

**Note: The site's backend is hosted for free, so the first query every 15 minutes requires the server to spin up again**

Just drag and drop any song/album/artist from the Spotify desktop app to get a copyable string.

The backend, hosted on Render, uses the Spotify API to turn any copy/pasteable or dragable element of the Sporitfy desktop app into a copy/pasteable string.

The frontend is hosted using GitHub pages.

This project was my first real exposure to using an API to make a complex task way simpler. The actual core logic of the project is serviced with just a couple lines of code. 

The hardest aspect of this project was the tug of war between WSL and the various npm scripts used to build/deploy the site. This is where I feel the biggest gap in my understanding persists. The pipeline of building and deploying this site turned out much harder than my blog because of the backend aspect, and I look forward to learning more about streamlining/standardizing that process.

I suspect that WSL, and its finicky permissions, are what clashed with npm most, and why containerization/virtual envs are so common in the 'real' world.

### Updates:
I have added a prepared query, linking to Google Translate, which autodetects the language and pronounces the string previously produced. 


