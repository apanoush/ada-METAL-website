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

{% include line_start_3.html %}

<table>
  <tr>
    <td>
      <iframe src="/_includes/line_start_3.html" width="600" height="400"></iframe>
    </td>
    <td>
      <strong>Short/Silent Films:</strong>  
      - **Technological limitations:** Early film technology was simpler, making short, silent films easier to produce.  
      - **Accessibility:** They transcended language barriers, making them popular worldwide.  
      - **Novelty:** They were a new form of entertainment, attracting large audiences. The number of short and silent films peaked around 1920, then declined sharply.  

      <strong>Black-and-White Films:</strong> 
      - **Technological standards:** Initially, color film was not widely available or affordable. Black-and-white film was the standard for many decades.  
      - **Aesthetic:** Many filmmakers found artistic value in black-and-white cinematography, and the format continued to be used for certain types of films. The production of black-and-white films peaked around 1940 and gradually declined thereafter, although production continued at a low level.  

      <strong>Independent/Experimental/LGBT Films:</strong> 
      - **Social Change:** The rise of these themes correlates with social movements and cultural shifts, which supported more diverse voices in cinema.  
      - **Artistic Expression:** Independent films allowed for more experimental approaches and explored themes that were not common in mainstream cinema.  
    </td>
  </tr>
</table>



{% include line_end_3.html %}

{% include line_theme_period.html %}
{% include bar_theme_period.html %}
{% include period_corr_matrix.html %}

---

## Movie ratings, the numberisation of Nostalgia ?
Cinema is art, and as all art, people can like it, or hate it. Nowadays cinephile have letterboxed accounts telling everyone their favourite movies. However this has not always been the case, just a few years ago the biggest movie ratings aggregator was IMDB, where people ranted about the latest movie they disliked, or conversly praised an old unknown movie from 50 years ago they found in a videoclub. One idiom often coming back is "It was better before", and cinema is not an exception. The top 100 movies from the [American Film Institute](https://www.afi.com/afis-100-years-100-movies/) does not contain a single movie after 2000, and the vast majority of them came out before the 70s. Are movies worse nowadays or do people just want to appear special by showing off their cinematc culture of old movies ?

For this part we will use the ratings from the IMBD dataset, which we added to the movies of our dataset. We've already seen he number of movies that came out each year, but now let's see which one of those have a rating: 
{% include RatingsNbrOfMovies.html %}

**Good news, it seems we have a fair amount of data !** This means we will be able to get useful insights without relying to much on assumptions because of missing data. The only problematic years are around 2007 where we have some missing ratings but drastically outscaled by the huge amount of movies with ratings and the 1915s where the movies without ratings outnumber the movies with a rating. We'll keep this in mind when comparing the early periods with later ones in our analysis. 

We already knew that we had more movies in recent years, but what about the number of votes ? Recent movies also probably have more votes than older ones since access to movie theaters and ratings sites like IMDB increased. 

{% include RatingsNbrVsTime.html %}


We can se that the total number of votes increases drastically over the years (notice the log scale !!) and the mean number of votes per movies also. Again, this means analysing older movies, especially before the 1960s will have to be put in context. 

### Conclusion

(*Content to be added here*)

---

### Team

(*Content to be added here*)
