# mongoDB-scraper

## Overview
The MongoDB scraper collects articles from across the web. Articles are checked to ensure they aren't already in the database 

## Demo
* [How it works](https://youtu.be/4ltZr3VPmno)
* [Live Link](https://scrape-mongo-nytimes.herokuapp.com)

## Project Images
![062b2095e27d6ad1ffdcd2d721aa1f30](https://user-images.githubusercontent.com/16119635/63715912-c74a1b80-c812-11e9-93b9-ebcc27f4c470.png)
![ebedb029b3bb507554573b15980a6a34](https://user-images.githubusercontent.com/16119635/63715913-c74a1b80-c812-11e9-911e-25f15afb7f20.jpg)
![fe052cbfa5e3ac08f1e003bd11f8571d](https://user-images.githubusercontent.com/16119635/63715914-c74a1b80-c812-11e9-88dd-b015f63f9a0b.jpg)


## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

* Beyond these requirements, be creative and have fun with this!

### Tips

* Go back to Saturday's activities if you need a refresher on how to partner one model with another.

* Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; Do not save any duplicate entries.

* Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

  * If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

### Helpful Links

* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Mongoose Documentation](http://mongoosejs.com/docs/api.html)
* [Cheerio Documentation](https://github.com/cheeriojs/cheerio)

### Reminder: Submission on BCS

* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!
