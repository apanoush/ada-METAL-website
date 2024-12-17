---
layout: full 
title: Report
---

## Introduction
# Mamacita

Test.

---

## Navigation

- [Abstract](#abstract)
- [Dataset](#dataset)
- [Periods](#events)
- [Analysis](#analysis)
- [Conclusion](#conclusion)
- [Team](#team)

---

## Header

### Mamacita

**Boo.**

[**Tell Me More**](#abstract)

---

### Abstract

(*Content to be added here*)

---

### Dataset

(*Content to be added here*)

---

### Periods

(*Content to be added here*)

---

### Analysis

(*Content to be added here*)

## Genres

{% include line_theme_year.html %}
This graph visualizes the evolution of movie themes from 1900 to 2020, showing the total number of movies for each theme over the years. It highlights the early prominence of "Short/Silent" films, with a sharp peak followed by a decline, while genres like "Action/Adventure/Thriller" and "Drama/Mystery" grew in prominence in later years. Additionally, the graph displays the evolution of other themes such as "Black and White", "Romance", "Musical", "Horror/Crime", "Science Fiction/Fantasy", "Historical/Biographical/Documentary", and "Independent/Experimental/LGBT". We will analyze some of these themes in more detail shortly.

<table>
  <tr>
    <td>
      {% include line_start_3.html %}
    </td>
    <td>
      {% include line_end_3.html %}
    </td>
  </tr>
</table>


<table>
  <tr>
    <td>
      <img src="bnw-silent.jpg" alt="Image" width="500" />
    </td>
    <td>
      <strong>Short/Silent Films:</strong>  
      - Technological limitations: Early film technology was simpler, making short, silent films easier to produce.  
      - Accessibility: They transcended language barriers, making them popular worldwide.  
      - Novelty: They were a new form of entertainment, attracting large audiences. The number of short and silent films peaked around 1920, then declined sharply.  
      <br><br>

      <strong>Black-and-White Films:</strong> 
      - Technological standards: Initially, color film was not widely available or affordable. Black-and-white film was the standard for many decades.  
      - Aesthetic: Many filmmakers found artistic value in black-and-white cinematography, and the format continued to be used for certain types of films. The production of black-and-white films peaked around 1940 and gradually declined thereafter, although production continued at a low level.  
      <br><br>

      <strong>Independent/Experimental/LGBT Films:</strong> 
      - Social Change: The rise of these themes correlates with social movements and cultural shifts, which supported more diverse voices in cinema.  
      - Artistic Expression: Independent films allowed for more experimental approaches and explored themes that were not common in mainstream cinema.  
    </td>
  </tr>
</table>

{% include line_theme_period.html %}
This graph illustrates the evolution of movie themes over time, depicting the number of movies for each theme. It highlights the rise and fall of various themes, such as the decline of "Short/Silent" films and the growing popularity of genres like "Action/Adventure/Thriller", "Drama/Mystery", and "Comedy".

{% include bar_theme_period.html %}
This graph illustrates the changing proportions of movie themes across different historical periods, such as "The Belle Époque," "World War I," and "The War on Terror." It highlights how themes like "Short/Silent" films dominated earlier periods, while genres such as "Action/Adventure/Thriller," "Drama/Mystery," and "Comedy" became more prominent in later times.

{% include period_corr_matrix.html %}
This matrix provides a quick visual overview, allowing for the identification of groups of historical periods with similar thematic patterns, as well as highlighting periods with distinctively different thematic trends.

---
## Lets see what we are talking about !
Even if we rather watch a film than just read about it, we have here acces to beautiful summaries already processed by some magic NLP algorithms. I know , I know this is old school.. you'd prefer to watch some trailer, but here we can learn a lot from these summaries. What do they tell us ? Can we identify any trends across different eras? Are there any particular patterns or particularities?
So many questions and yet no anwser but lets dive into text.

For this textual analysis we took the whole processed summaries corpus and tried to do a general classification between films and the eras we picked. This map is made based on common words that we think are deeply related to a perdiod and if the sum of these words pass a certain treshold well ... We classify them as such !

**mettre graph classifé**

Then based on these 
## Movie ratings, the numberisation of Nostalgia ?
Cinema is art, and as all art, people can like it, or hate it. Nowadays cinephiles have letterboxed accounts telling everyone their favourite movies. However this has not always been the case, just a few years ago the biggest movie ratings aggregator was IMDB, where people ranted about the latest movie they disliked, or conversly praised an old unknown movie from 50 years ago they found in a videoclub. One idiom often coming back is "It was better before", and cinema is not an exception. The top 100 movies from the [American Film Institute](https://www.afi.com/afis-100-years-100-movies-10th-anniversary-edition/) does not contain a single movie after 2000, and the vast majority of them came out before the 70s. Are movies worse nowadays or do people just want to appear special by showing off their cinematc culture of old movies ?

For this part we will use the ratings from the IMBD dataset, which we added to the movies of our dataset. We've already seen he number of movies that came out each year, but now let's see which one of those have a rating: 
{% include RatingsNbrOfMovies.html %}

**Good news, it seems we have a fair amount of data !** This means we will be able to get useful insights without relying to much on assumptions because of missing data. The only problematic years are around 2007 where we have some missing ratings but drastically outscaled by the huge amount of movies with ratings and the 1915s where the movies without ratings outnumber the movies with a rating. We'll keep this in mind when comparing the early periods with later ones in our analysis. 

We already knew that we had more movies in recent years, but what about the number of votes ? Recent movies also probably have more votes than older ones since access to movie theaters and ratings sites like IMDB increased. 

{% include RatingsNbrVsTime.html %}


We can see that the total number of votes increases drastically over the years (notice the log scale !!) and the mean number of votes per movies also. Again, this means analysing older movies, especially before the 1960s will have to be put in context. 

Now that we know this, let's dive into the ratings themselves, and plot them over the years. Ratings can be very variable between two movies, so let's use errorbars. We also added the weighted rating for each year, computed by multiplying each movie rating with thge number of votes for said movie. This way if a movie is critically acclaimed by a vast amnount of people, it will move the rating of his year up. 

{% include RatingsWithErrorBars.html %}

**What a Surprising Result!!** From 1913 on, the weighted movie rating is constantly better than the average. Even more than that, it's outside the error-bars. This can only mean one thing. The rating of a movie, and the number of votes is not totally uncorrelated. The year 1973 seems to be the best year in terms of weighted rating, but just any normal year in mean ratings, there must be a reason!

![alt text](RatingsSomething.png)

First let's compute the correlation of these different values. Using our favourite Pearson Correlation which captues linear correlation, and spearman capturing non-linear monotonic correlation, we might find some answers. 
{% include RatingsCorr.html %}

Indeed, there is something going on here, the year 1973 seems has much more correlation than the average data, and year 1949 even more ! Let's plot the number of votes vs rating on a scatter plot. 

{% include RatingsScatterPlotUgly.html %}

**Ugh that's so ugly, we need to do something about that!** Let me remember what Miss Sakota said: 
![alt text](RatingsSpiderman.png)

**YES I REMEMBER NOW, WE NEED TO USE A LOG SCALE!!**

{% include RatingsScatterPlot.html %}

Indeed this is much more readable, there's so much to say. First let's understand this plot correctly, because as a real movie director would do, we will capture it from different angles in later parts, to get the whole meaning of it. First we can see that most of the movies are concentrated in the center, between 200 and 10k votes. Since there are som many of them it's hard to detect any particular tendency, but one thing we notice is that that's the range where we have the most movies under a rating of 4. Above 100k, the movie ratings seem to be increasing, until we only have a few movies above 1M votes, which all have a rating above 8. ON the other side, we notice that the only few movies with a rating above 9, have less than 200 votes, and they are practically unknown. However this plot is still to dense, let's get back to our example years from before


### Conclusion

(*Content to be added here*)

---

### Team

(*Content to be added here*)
