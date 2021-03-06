This repository contains experimental code and ideas I have played with.

### MongoDbNotes

This is a small application I wrote to try out using [MongoDB][1] from C# using the [mongodb-csharp project][2] created by Sam Corder. It allows the user to create small notes and tag them (think a very basic version of StackOverflow tags). These notes are stored within a MongoDB database in a collection called "notes". The application is a small ASP.NET MVC 2 project and makes use of [.LESS][3] (which [I have previously written about][4]). Note that this is not intended to be an example of best practice or anything, it is just something I created to test out using MongoDB from C#.

Note that this app makes use of CSS 3 @font-face and provides a font. Since IIS 7 does not have any mime types set up for .otf and .woff files (and won't serve anything if it doesn't know what it is), I have added them to the web.config. If you have already done so higher up in your IIS config, just remove the appropriate lines from the web.config.

I have written about this app, and my thoughts regarding MongoDB and its use from C# in my blog post: **[Going 'NoSQL' with MongoDB and C#][5]**

### MongoDbNotes-NoRM

This is the same application as above, but converted to use the [NoRM][6] driver. 

### Html5Canvas

Experiments with HTML5 canvas.

 - Circles - This is my [Canvas Circles][7] experiment, which I have also [written about][8].
 - 3DTransforms - This is my [Flip Flip][9] experiment featuring dancing canvas elements courtesy of CSS 3D tranforms. Safari (>=5) only, although Chrome works okay too.
 - DialMeters - This has evolved into my [soon-to-be-released Dialify jQuery plugin][10], which I will shortly be moving into its own dedicated repository.


[1]: http://www.mongodb.org/
[2]: http://github.com/samus/mongodb-csharp
[3]: http://dotlesscss.com/
[4]: http://www.markembling.info/blog/view/better-css-with-dotless
[5]: http://www.markembling.info/blog/view/mongodb-and-csharp
[6]: http://normproject.org/
[7]: http://experiments.markembling.info/canvas-circles/
[8]: http://markembling.info/view/canvas-circles
[9]: http://experiments.markembling.info/transforms/
[10]: http://experiments.markembling.info/dialify/
