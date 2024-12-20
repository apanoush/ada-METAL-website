---
layout: full 
title: Report
---

<head>
  <link href="https://fonts.googleapis.com/css2?family=Monserrat:wght@400;500;700&display=swap" rel="stylesheet">
</head>

<!-- Full-width background section -->
<div style="background-image: url('great+films.jpg'); background-size: cover; background-position: center; width: 100%; height: 400px; display: flex; align-items: center; justify-content: center; color: white; text-align: center; position: relative; margin: 0;">
  <div style="background-color: rgba(0, 0, 0, 0.5); position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
  <div style="position: relative; z-index: 2; color: #fefefa; font-family: 'Oswald'">
    <h1 style="font-size: 3rem; margin: 0; color: #fefefa">A Century of Film—A Mirror of Our Lifetimes?</h1>
  </div>
</div>

<!-- Sticky Navbar with full width -->
<nav style="background-color: #01395E; padding: 10px 0; position: sticky; top: 0; z-index: 1000; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; margin: 0;">
  <div style="color: #fefefa; font-size: 1.5rem; font-weight: bold; padding-left: 15px; flex-grow: 1;">
    METAL2024
  </div>
  <div style="padding-right: 15px; display: flex; gap: 15px;">
    <a href="#introduction" style="color: #fefefa; text-decoration: none; text-transform: uppercase;">Introduction</a>
    <a href="#dataset" style="color: #fefefa; text-decoration: none; text-transform: uppercase;">Dataset</a>
    <a href="#events" style="color: #fefefa; text-decoration: none; text-transform: uppercase;">Periods</a>
    <a href="#analysis" style="color: #fefefa; text-decoration: none; text-transform: uppercase;">Analysis</a>
    <a href="#conclusion" style="color: #fefefa; text-decoration: none; text-transform: uppercase;">Conclusion</a>
    <a href="#team" style="color: #fefefa; text-decoration: none; text-transform: uppercase;">Team</a>
  </div>
</nav>


<a id="introduction"></a>
<div style="padding-top: 60px;">
  <h2 style="text-align: center; text-transform: uppercase; color: #1a1a1a; font-size: 2.5rem; font-weight: 600;">Introduction</h2>
</div>

The history of cinema is intertwined with the story of humanity. It’s a relatively new art, but since its beginning, it had the aim to portray the life of the people. For decades, the seventh art has reflected social trends, captured time shots, and offered a lens through which we can explore the evolution of our culture. There are so many ways to analyze films but for our team, time and the society in which they were produced seem a good fit! 

WoW, what do I hear? Today we have access to the **CMU film dataset and IMDb metadata** at our disposal, we have the tools to address fascinating questions about films through time:
- Do movies mirror the major events and values of their eras?
- Are genres, themes, or ideas cyclical, or do they evolve linearly?
-   How did historical periods reflect in the plots?
-   Do we see a correlation between major events and film success?

<p>So many questions and no answer for now, let’s take our camera and <strong>ACTION!</strong></p>


---

<a id="dataset"></a>
<div style="padding-top: 60px;">
  <h2 style="text-align: center; text-transform: uppercase; color: #1a1a1a; font-size: 2.5rem; font-weight: 600;">Dataset</h2>
</div>

Let’s see what this dataset looks like! It collect a variety of films spanning the whole 20th century and the start of the 21st with information such as a movie’s language and country of production, its genres, cast and box office performance as well as a plot description for some of them. To this, we added audience ratings from IMDB for most films to get an idea of how the public received them. 


<div style="text-align: center;">
  <svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
  
    <!-- Movies -->
    <circle cx="150" cy="100" r="70" fill="red" />
    <text x="150" y="100" fill="black" font-size="24"  font-weight="bold" text-anchor="middle" dy=".3em">81’741</text>
    <text x="150" y="190" fill="black" font-size="20" text-anchor="middle">Movies</text>
  
    <!-- Countries -->
    <circle cx="400" cy="100" r="70" fill="orange" />
    <text x="400" y="100" fill="black" font-size="24" font-weight="bold" text-anchor="middle" dy=".3em">146</text>
    <text x="400" y="190" fill="black" font-size="20" text-anchor="middle">Countries</text>
  
    <!-- Languages -->
    <circle cx="650" cy="100" r="70" fill="yellow" />
    <text x="650" y="100" fill="black" font-size="24" font-weight="bold" text-anchor="middle" dy=".3em">210</text>
    <text x="650" y="190" fill="black" font-size="20" text-anchor="middle">Languages</text>
  
    <!-- Time span -->
    <circle cx="150" cy="300" r="70" fill="lightgreen" />
    <text x="150" y="300" fill="black" font-size="24" font-weight="bold" text-anchor="middle" dy=".3em">20th</text>
    <text x="150" y="390" fill="black" font-size="20" text-anchor="middle">Century</text>
  
    <!-- Periods -->
    <circle cx="400" cy="300" r="70" fill="lightblue" />
    <text x="400" y="300" fill="black" font-size="24" font-weight="bold" text-anchor="middle" dy=".3em">10</text>
    <text x="400" y="390" fill="black" font-size="20" text-anchor="middle">Periods</text>
  
    <!-- Ratings -->
    <circle cx="650" cy="300" r="70" fill="violet" />
    <text x="650" y="300" fill="black" font-size="24" font-weight="bold" text-anchor="middle" dy=".3em">6/10</text>
    <text x="650" y="390" fill="black" font-size="20" text-anchor="middle">Average Rating</text>
  
  </svg>
</div>  

This dataset is huge, maybe too huge and we need to restrict ourselves. We wish to perform an analysis depending on time periods and the society they represent but how could we compare the thriving society of the United States in the 1920s to South Africa which was still under the rule of the British empire at the time?

To keep a baseline, we focus is on U.S. cinema, which has been a dominant force globally and a significant cultural barometer. The question is not just what people watched but why—and what the times can tell us about that.

<div style="display: flex; align-items: center; justify-content: space-between;">
  <p>Now that we’re set, let's dive into this.</p>
  <img src="dive.jpg" style="width: 250px; height: auto; padding-right: 200px; margin-top: -20px; padding-bottom: 10px">
</div>


---

<a id="events"></a>
<div style="padding-top: 60px;">
  <h2 style="text-align: center; text-transform: uppercase; color: #1a1a1a; font-size: 2.5rem; font-weight: 600;">Historical Periods</h2>
</div>

Click to discover our time cutting
<html lang="en">
<head>
    <style>
        /* General styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        /* Grid container for each row*/
        .grid-row {
            display: grid;
            gap: 20px;
            width: 100%;
            max-width: 1200px;
            margin-bottom: 20px;
        }

        /* Row-specific column settings */
        .row-1 {
            grid-template-columns: repeat(4, 1fr); /* 4 items in first row */
        }

        .row-2 {
            grid-template-columns: repeat(3, 1fr); /* 3 items in second row */
        }

        .row-3 {
            grid-template-columns: repeat(3, 1fr); /* 3 items in third row */
        }

        /* Individual item in the grid */
        .period-container {
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 10px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Clickable image */
        .period-image {
            cursor: pointer;
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover; 
            border-radius: 10px;
            transition: transform 0.2s;
        }

        .period-image:hover {
            transform: scale(1.05);
        }

        /* Hidden text */
        .period-text {
            display: none;
            margin-top: 10px;
            font-size: 14px;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="grid-row row-1">
        <!-- Add a period for each historical event -->
        <div class="period-container">
            <div class="default-text" id="default-text1"><strong>The Progressive Era:<br>1900-1914</strong></div>
            <img src="progressive-era.jpg" alt="Progressive Era" class="period-image" onclick="toggleText('text1')" />
            <div id="text1" class="period-text">
                At the beginning of the 20th century, the USA were driven by progressivism, a social democratic movement that rose in response to the massive industrialization of the late 19th century. It brought many reforms seeking to improve the conditions of the middle and working classes. This period saw a general improvement of the population’s quality of life with a prosperous economy and a push for social equality and women’s rights.
            </div>
        </div>
        <div class="period-container">
            <div class="default-text" id="default-text2"><strong>World War I:<br>1914-1918</strong></div>
            <img src="ww1.jpg" alt="World War I" class="period-image" onclick="toggleText('text2')" />
            <div id="text2" class="period-text">
                As the first World War erupted, the USA chose to remain neutral. Even though the public opinion was generally more friendly towards the Allies (UK, France, Russia, …) than the Central Powers (Germany, Austria-Hungary, Ottoman Empire, …), they preferred not to engage in battle. However, they still looked to prepare for the possibility of war and strengthened the military powers, especially the Navy. Over time, the American people saw Germany as being increasingly hostile and it was announced in 1917 that the United States were entering the war siding with the Allies. 
            </div>
        </div>
        <div class="period-container">
            <div class="default-text" id="default-text3"><strong>The Roaring Twenties:<br>1918-1929</strong></div>
            <img src="roaring-twenties.jpg" alt="The Roaring Twenties" class="period-image" onclick="toggleText('text3')" />
            <div id="text3" class="period-text">
                The 1920s, also known as the Roaring Twenties, saw the USA ending getting out of WW1 as victors and with few economic losses. These years were similar to the Progressive Era in that America continued its economic growth and prosperity. The incomes of working people increased along with those of middle class and wealthier Americans resulting in a increased consumerism. The automobile and electricity industries thrived and radically changed the people’s way of life. But the Roaring twenties are also the start of the prohibition, where the distribution of alcohol became illegal in hope to eradicate alcoholism. However, this did not solve the problem and brought an even greater one as many gangs took over the alcohol market and rapidly grew more and more violent.
            </div>
        </div>
        <div class="period-container">
            <div class="default-text" id="default-text4"><strong>The Great Depression:<br>1929-1939</strong></div>
            <img src="great-depression.jpg" alt="The Great Depression" class="period-image" onclick="toggleText('text4')" />
            <div id="text4" class="period-text">
                The Wall Street Crash of 1929 brought an abrupt end to the Roaring Twenties. A lot of people had invested their money on the stock market that was very loosely regulated and as the economy plummeted, they were left with massive debt. This is a period of huge poverty and unemployment as a fourth of the population came jobless by 1933. The whole decade resulted in efforts to gradually recover the economy and employment rate.
            </div>
        </div>
    </div>
    <!-- Row 2 with 3 containers -->
    <div class="grid-row row-2">
        <div class="period-container">
            <div class="default-text" id="default-text5"><strong>World War II:<br>1939-1945</strong></div>
            <img src="ww2.jpg" alt="World War II" class="period-image" onclick="toggleText('text5')" />
            <div id="text5" class="period-text">
                As the second World War began, the industry changed rapidly to support the war effort. The employment rate rose back up and even women joined the workforce to replace the people enrolled in the army. Productivity was increased to match the demands of a growing military force, and a lot of efforts were made to ensure the national unity. In this sense, the movie industry of Hollywood worked an impressive propaganda to consolidate the Americans’ patriotism and resentment towards Germany.
            </div>
        </div>
        <div class="period-container">
            <div class="default-text" id="default-text6"><strong>The Early Cold War:<br>1946-1960</strong></div>
            <img src="early-cold-war.jpg" alt="The Early Cold War" class="period-image" onclick="toggleText('text6')" />
            <div id="text6" class="period-text">
                The USA got out of the war as one of the most influential countries in the world along with the USSR. This period was one of high economic growth and prosperity for the American people. Nonetheless, it was also marked by the Red Scare, the fear of the other superpower of that time, The communist USSR. The two nations with radically different political views were competing to see which one would shape the future of the world. As well as providing help to rebuild their allies’ nations in Europe and engaging in wars against communism across the globe, the States embarked on a race both in nuclear armament and on space discovery. Inside the country, a large propaganda was set up against communism and people were prosecuted if they were too far on the left political wing. 
            </div>
        </div>
        <div class="period-container">
          <div class="default-text" id="default-text7"><strong>The Civil Rights Movement:<br>1960-1970</strong></div>
          <img src="civil-rights.jpg" alt="The Civil Rights Movement" class="period-image" onclick="toggleText('text7')" />
          <div id="text7" class="period-text">
              The Civil Rights Movement of the 50s and 60s saw the African American population fight to promote racial equality and the rights of the black people. It was a moment of great social changes that confronted the United States to the incoherences of their self-proclaimed position of leaders of the democracy. This mostly non-violent movement led by figures such as Martin Luther King Jr., Malcolm X or Fannie Lou Hamer brought the abolition of many discriminative laws and laid a legal groundwork to promote equality and civil rights. This period also saw the culmination of the space race as, in 1969, Neil Armstrong became the first human to set foot on the moon
          </div>
        </div>
    </div>
    <!-- Row 3 with 3 containers -->
    <div class="grid-row row-3">
        <div class="period-container">
          <div class="default-text" id="default-text8"><strong>The Late Cold War<br>1971-1991</strong></div>
          <img src="late-cold-war.jpg" alt="The Late Cold War" class="period-image" onclick="toggleText('text8')" />
          <div id="text8" class="period-text">
              As the Cold War continued, the USA slowly but surely gained the upper hand against the USSR. The American economy was growing steadily while communism started to show its economical flaws. At the same time, many pro-peace movements rose in America as the population was fed up with the many conflicts around the globe in which the States were involved. Conflicts such as the Vietnam war angered the population that didn’t understand why American people had to die so far from their home.
          </div>
        </div>
        <div class="period-container">
          <div class="default-text" id="default-text9"><strong>The Post-Cold War and the New World Order:<br>1992-2001</strong></div>
          <img src="post-cold-war.jpg" alt="The Post-Cold War" class="period-image" onclick="toggleText('text9')" />
          <div id="text9" class="period-text">
              The end of the Soviet Union in 1991 left the United States as victors of the Cold War and established them as the only superpower of the world. In a world entering globalisation and the starting years of internet, the American culture thrived and influenced the whole world. If there was no communism to fight, the US army was still present in many regions of the world to serve their interests. For example, many soldiers were sent in the Arabic peninsula because of the large reserves of Oil present in the region.
          </div>
        </div>
        <div class="period-container">
        <div class="default-text" id="default-text10"><strong>The War on terrorism:<br>2001-present</strong></div>
        <img src="9_11.png" alt="The War on terrorism" class="period-image" onclick="toggleText('text10')" />
          <div id="text10" class="period-text">
            The attacks of the 11th of September shocked the world and even more so the United States. They discovered a new kind of war they weren't ready for, terrorism. The enemy could be pretty much anyone, and there was no clear way to counterattack. This brought a lot of fear and distrust to the population, and the USA started a more self-centred politic and restricted the access inside their borders and.
          </div>
        </div>
    </div>

    <script>
        // Toggle visibility of the text
        function toggleText(id) {
            const textElement = document.getElementById(id);
            textElement.style.display = textElement.style.display === 'block' ? 'none' : 'block';
        }
    </script>
</body>
</html>


---

<a id="analysis"></a>
<div style="padding-top: 60px; padding-bottom: 30px;">
  <h2 style="text-align: center; text-transform: uppercase; color: #1a1a1a; font-size: 2.5rem; font-weight: 600;">Analysis</h2>
</div>

## Genre-ally Speaking: A Plot Twist in Movie History

{% include line_theme_years_plot.html %}

Wow, looking at the "Evolution of Movie Themes Over the Years" graph, it's incredible to see how the number of movies produced for different themes has changed from 1900 to 2020. Each line represents a movie theme like Action/Adventure/Thriller, Comedy, or Drama/Mystery, and you can really see the shifts over time. For example, the early years were dominated by "Short/Silent" films, but as sound technology came into play, their numbers dropped. Then, after 1970, we see a big surge in Action, Adventure, and Thriller films, likely due to advancements in special effects. After 1980, there’s also a noticeable rise in independent and LGBT films. It's amazing how much the number of films has grown, especially when some themes now have numbers double the maximum from the early 1900s. It's fascinating to think about how movie themes have evolved alongside history—how some genres became more popular or less popular, and how they reflect the cultural shifts of the times. Let’s take a closer look at the peaks from both the early and late 20th century to understand what changed.

<table style="padding: 0; border-spacing: 0; margin-top: -150px; border: none;">
  <tr style="border-bottom: none !important;" >
    <td style="width: 50%; word-wrap: break-word; border: none;">
      {% include line_start_3.html %}
    </td>
    <td style="width: 50%; word-wrap: break-word; padding-top: 300px; margin-left: -200px; border: none;">
      {% include line_end_3.html %}
    </td>
  </tr>
</table>


<table style="border: none;">
  <tr style="border: none;">
    <td>
      <img src="bnw-silent.jpg" alt="Image" width="600" />
    </td>
    <td style="border: none;">
      <strong>Short/Silent Films:</strong>  
        Back in the early days of cinema, short and silent films were all the rage. They were simple, accessible, and had this novelty that drew huge audiences, peaking around 1920. Take Charlie Chaplin’s <em>The Kid</em> (1921)—a massive hit that didn’t need dialogue to connect with people. But by the late 1920s, sound came along and changed everything. Movies like <em>The Jazz Singer</em> (1927) set a new standard, and silent films quickly lost their appeal.
      <br><br>

      <strong>Black-and-White Films:</strong> 
        You know, black-and-white films really ruled early cinema because color technology wasn’t affordable yet. They peaked around 1940, but after 1960, color films became the norm, and black-and-white films lost their appeal. What’s interesting, though, is that there was a resurgence of black-and-white films after 2000. It shows how filmmakers still appreciate it as a powerful artistic choice.
      <br><br>

      <strong>Independent/Experimental/LGBT Films:</strong> 
        Before 1980, independent, experimental, and LGBT films were pretty rare, mainly because of production limits and censorship. But after 1980, things really changed. Social movements and cultural shifts opened up space for these films to thrive, giving a platform to diverse voices and allowing filmmakers to tackle more unconventional themes and artistic styles.
    </td>
  </tr>
</table>

<table>
  <tr style="border: none;">
    <td style="border: none;">
      <strong>Drama/Mystery:</strong>  
        Drama and mystery films grew in popularity because they tackle timeless human conflicts, making them relatable in any era. Between 2000 and 2010, there was a lot going on—wars, economic crises, and social changes—so these genres really resonated with people. Plus, there was a general boom in movie production, which helped too.  
      <br><br>

      <strong>Action/Adventure/Thriller:</strong> 
        Well, after 1970, there was a big shift in technology, especially with special effects. This period saw major advancements in film techniques, like CGI and more realistic stunts, which made it possible to create all these wild, visually impressive movies. Historically, this was also around the time when Hollywood started investing more in blockbusters, aiming to draw huge audiences, and action-packed films were perfect for that. So, with better tech and a changing industry, these genres really blew up.
      <br><br>

      <strong>Comedy:</strong> 
        Comedy really peaked in the 1940s, probably because of those “screwball comedies” that were huge during the Great Depression and World War II. People just needed a break from all the tough stuff going on, so these films offered a way to escape. The thing with comedy is, no matter what type it is—slapstick, satire, or witty banter—it helps people cope with life’s challenges by making them laugh. Back then, especially, people were looking for something that could take their minds off all the stress, and comedy was the perfect way to do that.
    </td>
    <td>
      <img src="missionimpossible.jpg" alt="Image" width="700" />
    </td>
  </tr>
</table>


{% include line_theme_periods_plot.html %}

So, this graph is showing how certain movie genres were more popular in different time periods, based on what people were into at the time. Like, in the early 1900s, silent films were huge, but then as sound came in, they started to drop off. During the Great Depression, comedies and musicals became more popular because people wanted something lighthearted to escape from the tough times.
Then, when you get to the Cold War, Sci-Fi films started to rise. Makes sense, right? People were anxious about technology and the future, so movies about futuristic or dystopian worlds fit the vibe. Action/Adventure films also grew in popularity during tense global moments like the Cold War, while genres like Romance and  Musicals were bigger when things were more peaceful, like after WWII.
But now, what we really want to figure out is which genres were the most dominant in each period. That way, we can see exactly how the big events of the time influenced what kinds of movies people were watching.

{% include bar_theme_period.html %}
Alright, so here's the breakdown of how film genres shifted over the years, and how each era was reflected through cinema:
**The Belle Époque (1900-1914)** started with mostly Short, Silent, Black-and-white films because that's all the technology could manage back then.
When **World War I (1914-1918)** came along, the technology didn’t change much, and films still stuck to the silent, black-and-white format.
Then in the **Roaring Twenties (1920-1929)**, there was a shift. People were looking for something to lift their spirits, so Comedy films became popular. You still had Black-and-white and Silent films, but comedy began to take over, along with drama/mystery and romance.
The **Great Depression (1929-1939)** saw a continuation of Black-and-white films, but the mood shifted toward Drama/Mystery to reflect the hard times. At the same time, people sought comfort in Comedy, Romance, and Musicals as a way to escape the tough realities.
**World War II (1939-1945)** brought a rise in Drama/Mystery films to match the serious global situation. Action/Adventure/Thriller films also started to appear, likely reflecting the desire for stories of heroism. Comedy still had a place, offering some relief during the dark days.
In the **Early Cold War (1946-1960)**,  Action/Adventure/Thriller films dominated, probably due to the intrigue around espionage and political tension. Drama/Mystery remained relevant, and  Comedy, Romance, and Musicals were still around.
During the **Civil Rights Movement (1960-1970)**, we continued to see strong Action/Adventure/Thriller films, but there was also an increase in Horror/Crime and Indie/experimental/LGBT films. This shift reflected the changing cultural and social issues of the time.
In the **Late Cold War (1971-1991)**, Action/Adventure/Thriller films stayed big, but there was a rise in Science fiction/Fantasy films as people looked for escape or reflected on technological advances. Horror/crime, indie/experimental/LGBT, and Animation/Family films also gained popularity.
With the **Post-Cold War and New World Order (1992-2001)**, there was more variety, with Action/Adventure/Thriller, Animation/Family, and Science fiction/Fantasy leading the charge. Films became more diverse, but Comedy and Drama/Mystery stayed strong, and we saw more Indie/experimental/LGBT films too.
Finally, after 9/11 (2001-present),  action/adventure/thriller films were still huge, but there was a rise in Animation/Family and Science fiction/Fantasy, reflecting the cultural shifts and technological changes. Drama/mystery still showed up, but it wasn't as dominant as before.
Now, the big question: do periods with similar events share the same themes? Or was it all random from the start? Let’s figure that out by looking at a correlation matrix.

{% include period_corr_matrix.html %}
Some periods, like **The Belle Époque (1900-1914)**, **World War I (1914-1918)**, and **The Roaring Twenties (1920-1929)**, are super similar—basically all about Silent, black-and-white films. Comedy, Romance, and Drama were popular because they were simple and fun, reflecting the times.  
Then you’ve got the Cold War eras—1946 to the present—which are also closely connected. This is when Action/Adventure/Thriller genres took over, thanks to all the espionage and political tension. Later, sci-fi and fantasy blew up as people started dreaming big and escaping reality.  
Periods like **The Great Depression (1929-1939)** and **World War II (1939-1945)** sit in the middle. Both were tough times, so Drama/Mystery dominated, but there was still room for Comedy and Musicals to lighten the mood.  
And then you’ve got the outliers, like **The Belle Époque** compared to the **Post-Cold War** era—totally different vibes. Early cinema was simple, while the 2000s were all about flashy, CGI-heavy blockbusters and genre diversity.  
It’s **supercalifragilisticexpialidocious**! We weren’t delulu—there really is a correlation between historical and economic events and film genres. But we’re not quite there yet to say it’s causality.

---
## Let's see what we are talking about !
Even if we would rather watch a film than just read about it, we have access here to beautifully crafted summaries, already processed by some magic NLP algorithms. I know, I know, this is old-school—you’d probably prefer to watch a trailer. But these summaries offer a wealth of insights. What can we learn from them? Can we identify trends across different eras? Are there particular patterns or unique characteristics?
So many questions, and yet no answers... but let’s dive into the text.
<div style="text-align: center;">
  <img src="WordcloudTrailers.png" alt="Pikachu Ratings" width="500" />
</div>
For this textual analysis, we processed the entire summaries corpus and conducted a general classification of films based on the eras we selected. This map is generated using common words that are strongly associated with specific periods. If the sum of these words surpasses a certain threshold, we classify the films accordingly
Here are some word clouds based on each period. These show common words from the films’ summaries, using TF-IDF to highlight their importance:
<div style="text-align: center;">
  <div style="display: inline-block; margin: 5px;">
    <img src="WW1.png" alt="Image 1" width="400" />
  </div>
  <div style="display: inline-block; margin: 5px;">
    <img src="WW2.png" alt="Image 2" width="400" />
  </div>
  <div style="display: inline-block; margin: 5px;">
    <img src="CivilRights.png" alt="Image 3" width="400" />
  </div>
  <div style="display: inline-block; margin: 5px;">
    <img src="ColdWar.png" alt="Image 4" width="400" />
  </div>
  <div style="display: inline-block; margin: 5px;">
    <img src="Postcold.pngpng" alt="" width="400" />
  </div>
  <div style="display: inline-block; margin: 5px;">
    <img src="991.png" alt="Image 6" width="400" />
  </div>
</div>

Some terms are predictable, while others are less so. Indeed there can be noise from verbs or common names leading to imprecison in the classification as the LDA analysis told us. But we mainly recover expected athmospheres from each periods and can say that the noise of some missclassified plot is negligible.
 But do these word clouds and classified films truly match their periods, or do they recur across years? To explore this further, we used Latent Dirichlet Allocation (LDA) to highlight topics and examine similarities between periods. Then we plotted the release time dates of these films for each topics.

For example, if we focus on the temporality of films classified as dealing with the "War on Terror," we observe a huge rise after the 2001 attacks on the World Trade Center. There's a sharp increase in films starting in the early 2000s. This aligns with the 9/11 attacks and subsequent military operations, such as the invasions of Afghanistan and Iraq. These events dominated global politics and media, leading to their reflection in cinema.
The highest number of films related to the War on Terror is observed in the mid-2000s. This could reflect the height of global military campaigns, public discourse, and societal impact.
Even after the initial post-9/11 years, the number of films remained significant, potentially due to ongoing conflicts, political debates, and the human and societal cost of the war.
However, we also see some outliers, with films addressing terrorism even before 2001. But as expected, this subject is predominantly modern, appearing in recent times through film plots.
<div style="text-align: center;">
  <img src="ttt.png" alt="Pikachu Ratings" width="600" />
</div>

        Now lets look at the late Cold War period :
<div style="text-align: center;">
  <img src="LateColdwarTime.png" alt="Pikachu Ratings" width="600" />
</div>
There is a peak production (1980s): The sharp increase in films during the 1980s aligns with significant geopolitical developments, such as the Reagan administration's rhetoric, arms race escalations, and Soviet-American tensions. Cinema might have mirrored these anxieties, making this a popular period for Cold War narratives.
We can also individuate a another peak (1990s–2000s) and we determine that even after the Cold War formally ended in 1991, the number of films related to this era remained significant. This reflects retrospective storytelling and a cultural reexamination of the period in the aftermath of the Soviet Union's dissolution.

This analysis reveals significant variability, indicating that historical events have long served as inspiration for movie directors. Even today, historical contexts and events shape the narratives we see on screen, underscoring the enduring impact of the past on cinematic storytelling.

### Causal Inference

To compare attributes of films from different time periods, we wanted to engage in causal inference to understand whether observed differences in film characteristics were truly due to the time period itself, or if they were influenced by other factors.

[Causal inference](https://en.wikipedia.org/wiki/Causal_inference) allows us to draw more reliable conclusions about the effect of a specific factor (in this case, the time period) on film attributes, rather than just identifying correlations. However, in observational data like ours, where films from different time periods are not randomly assigned, (hidden) covariables might be influencing both the period and the outcomes (such as genre trends, budgets, or technological shifts). Without controlling for these covariates, any conclusions about the impact of the time period could be misleading.

In an attempt to address this issue, we turned to [propensity score matching](https://en.wikipedia.org/wiki/Propensity_score_matching) (PSM). PSM helps us create comparable groups by matching films from different time periods that have similar characteristics, in this our case, genre and ratings (budget data was too sparse to be representative). By doing so, we can try to isolate the impact of the time period itself, reducing the bias introduced by the covariates. In theory, PSM allows us to mimic a randomized controlled experiment, where films from different periods are as similar as possible, except for their time of production.

We used logistic regression to estimate the propensity scores for each film, which represent the likelihood of a film being produced in a specific time period based on its genre and ratings. We then matched films from different periods based on these scores, using maximum weight matching (the PS as the weights), creating comparable groups for analysis. All our code is available in the [GitHub repository](https://github.com/epfl-ada/ada-2024-project-metal2024/tree/main/src/causal_inference). 

Our second issue, which we did not address in this analysis, is that the maximum weight matching algorithm we used is O(n³), which makes it computationally expensive for large datasets. To remediate this, we uniformly sampled a subset of the data for our analysis, which could introduce some bias, and some variance. We picked a the biggest subset we could, and added the number of movies for each period in the title of each graph to give an idea of the representativity of our sample.

#### Named Entity Recognition

Our [movie corpus dataset](http://www.cs.cmu.edu/~ark/personas/) included a [Stanford Core-NLP](https://www.wikidata.org/wiki/Q32998961) processed plot summary containing [named entities](https://en.wikipedia.org/wiki/Named-entity_recognition). We used this information to identify the most common entities mentioned in the plot summaries across different time periods. These named entities could provide insights into the dates, characters, locations, lexical information about time, money, durations and more.

<div style="text-align: center;">
  <img src="assets/svg/ORGANIZATION.svg" alt="SVG1" width="1100" />
</div>

The films from the Civil Rights Movement has some interesting `ORGANIZATION` named entities, such as `Times`, which could be linked the the [New York Times](https://en.wikipedia.org/wiki/The_New_York_Times), but also `King` which could be linked to [Martin Luther King Jr](https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.). `Armstrong` could be linked to the musician [Louis Armstrong](https://en.wikipedia.org/wiki/Louis_Armstrong) who won awards in the 1960s, but it is unlikely that it is also linked to the astronaut [Neil Armstrong](https://en.wikipedia.org/wiki/Neil_Armstrong), as he step foot on the moon in 1969, with films taking years to be produced. All of which the Great Depression time period doesn't have. Other entities such as `Sharks` remain hard to interpret.

<div style="text-align: center;">
  <img src="assets/svg/ORGANIZATION_2.svg" alt="SVG1" width="1100" />
</div>

Still comparing the `ORGANIZATION` named entities, we see that both World War II and Post Cold War periods have Nazi Germany related entities, which could be due to films about the war being released, for some of them, after the war. The second time period interestingly introduces new entities, although they are hard to interpret.

<div style="text-align: center;">
  <img src="assets/svg/LOCATION.svg" alt="SVG1" width="1100" />
</div>

Unfortunately, the results were not as insightful as we had hoped. Most Named Entities were too sparse to draw meaningful conclusions, and the most common ones were generic and not specific to any time period. Results between more periods and more named entities can be found in our repository.

#### NGrams and TF-IDF

[NGrams](https://en.wikipedia.org/wiki/N-gram) are another way to analyze text data, capturing the most frequent sequences of words that can provide context and meaning. Unfortunately these didn't provide meaningful insights for our analysis, as the most common n-grams were generic and not specific to any time period. 
To remedy this, we ranked 1-3 grams not by their plain frequency in the plots for the films from a given time interval but according to their [TF-IDF](https://en.wikipedia.org/wiki/Tf-idf) score. This allowed us, in theory, to identify the most important words for each time period, based on their frequency in the plots and their rarity in the whole corpus.

<div style="text-align: center;">
  <img src="assets/svg/TF-IDF_NGRAMS_1.svg" alt="SVG1" width="1100" />
</div>

The word `new` is slightly more present in the Late Cold War than in the Post-Cold War, but we can't draw any meaningful conclusions from this, as it also could be due, for example, to the mention of `New York` or `New World City` in the plots.

Strangely, the word `war` was more present during movies from the Roaring Twenties than during World War II. `american` is more present in the second than in the first ([see figure](https://github.com/epfl-ada/ada-2024-project-metal2024/blob/main/src/causal_inference/results/TF-IDF_NGRAMS_3.svg)).

Again, the results were not as insightful as we had hoped. Most of the top TF-IDF n-grams were in all time periods, and the differences were not significant enough to draw meaningful conclusions. This could be due to the nature of the movie plots, which often contain similar elements regardless of the time period. Results between more periods can be found [in our repository](https://github.com/epfl-ada/ada-2024-project-metal2024/tree/main/src/causal_inference/results).


## Movie ratings, another metric for popularity ?
Cinema is art, and as all art, people can like it, or hate it. Nowadays cinephiles have letterboxed accounts telling everyone their favourite movies. However this has not always been the case, just a few years ago the biggest movie ratings aggregator was IMDB, where people ranted about the latest movie they disliked, or conversly praised an old unknown movie from 50 years ago they found in a videoclub. One idiom often coming back is "It was better before", and cinema is not an exception. The top 100 movies from the [American Film Institute](https://www.afi.com/afis-100-years-100-movies-10th-anniversary-edition/) does not contain a single movie after 2000, and the vast majority of them came out before the 70s. Are movies worse nowadays or do people just want to appear special by showing off their cinematc culture of old movies ?

For this part we will use the ratings from the IMBD dataset, which we added to the movies of our dataset. Additionally, we'll receive the help from multiple famous detectives that accepted to help us in this hard mission. 
We've already seen he number of movies that came out each year, but now let's see which one of those have a rating: 
{% include RatingsNbrOfMovies.html %}

**Good news, it seems we have a fair amount of data !** This means we will be able to get useful insights without relying to much on assumptions because of missing data. The only problematic years are around 2007 where we have some missing ratings but drastically outscaled by the huge amount of movies with ratings and the 1915s where the movies without ratings outnumber the movies with a rating. We'll keep this in mind when comparing the early periods with later ones in our analysis. 
<table>
  <tr>
    <td style="border: none;">
    The first detective to jump in is Sherlock Holmes, a wise man that never gets thrown off by numbers. One important thing he tells us is that a rating is worth nothing without the number of votes. When he arrives at a crime scene, he always judges the number of witnesses, and their claims. We take that into account and plot the sum of all votes for each year, and the average votes per movie. Thanks Sherlock !
    </td>
    <td>
      <img src="RatingsSherlock.png" alt="Image" width="700" />
    </td>
  </tr>
</table>


{% include RatingsNbrVsTime.html %}


Indeed Sherlock was right, the total number of votes increases drastically over the years (notice the log scale !) and the mean number of votes per movies also. Again, this means analysing older movies, especially before the 1960s will have to be put in context. 

<table>
  <tr>
    <td style="border: none;">
      <img src="RatingsPikachu.png" alt="Image" width="1100" />
    </td>
    <td style="border: none;">
Now that we know this, let's dive into the ratings themselves, and plot them over the years. A friend of us, Detective Pikachu does not like uncertainty, so due to the high variability of ratings, he tells us to use errorbars. He also mentions something about weighting the rating for each year. That seems like a good intuition; movies with a lot of ratings should impact their average consequently. We compute this weighted average rating by multiplying each movie's rating with the number of votes for said movie.
    </td>
  </tr>
</table>


{% include RatingsWithErrorBars.html %}

<div style="text-align: center;">
  <img src="RatingsPikachuOh.png" alt="Pikachu Ratings" width="400" />
</div>


**What a Surprising Result!! Even detective pikachu is thrown off guard**. From 1913 on, the weighted movie rating is constantly better than the average. Even more than that, it's outside the error-bars ! This can only mean one thing. The rating of a movie, and the number of votes is not totally uncorrelated. The year 1973 seems to be the best year in terms of weighted rating, but just any normal year in mean ratings, there must be a reason!

<table>
  <tr>
    <td style="border: none;">
    This task requires deeper understanding, we'll ask a person that always has the right tools to analyse data: Inspector Gadget. Luckily he has exactly what we need, a way to compute correlation. If we find any correlation between the ratings and the number of votes, it might explain why the weighted average is so off the mean. Using his multiple arms, Inspector Gadget gives us the Pearson Correlation coefficient which captues linear correlation, and the Spearman capturing non-linear monotonic correlation. 
    </td>
    <td>
      <img src="RatingsGadget.png" alt="Image" width="700" />
    </td>
  </tr>
</table>



{% include RatingsCorr.html %}

Indeed, there is something going on here, the year 1973 seems has much more correlation than the average data, and year 1949 even more ! Mister gadget advises us to plot the number of votes against the rating of a movie, he gives a last tool to only use with caution before leaving, we'll keep it preciously. 

{% include RatingsScatterPlotUgly.html %}

<table>
  <tr>
    <td style="border: none;">
    <strong>Ugh that's so ugly, we need to do something about that! </strong>
    We're sorry mister Gadget, but it's already the time to use your secret tool. But we'll do it with extreme caution.
    <br> <strong>We will forever remember the words from Miss Sakota:</strong>
    </td>
    <td style="border: none;">
      <img src="RatingsSpiderman.png" alt="Image" width="700" />
    </td>
  </tr>
</table>



With the Greatest caution, we use the **log scale** given by Mr Gadet, hoping it will make this graph useful in any way. 

{% include RatingsScatterPlot.html %}

Indeed this is much more readable, there's so much to say. First let's understand this plot correctly, because as a real detective would do, we will analyze every detail of it in later parts, to get the whole meaning of it. First we can see that most of the movies are concentrated in the center, between 200 and 10k votes. Since there are som many of them it's hard to detect any particular tendency, but one thing we notice is this is the range where we have the most movies under a rating of 4.  
Above 100k votes, the movie ratings seem to be increasing, until we only have a few movies above 1M votes, which all have a rating above 8. On the other side, we notice that the only few movies with a rating above 9, have less than 200 votes, and they are practically unknown. However this plot is still to dense, let's get back to our example years from before: 

{% include RatingsScatterPlotYears.html %}

Indeed the distribution for the 3 chosen years is not the same at all, just look at the huge amount of movies below 4 in 2006. 
Even though they do not have that many votes individually, together they still add up. And now take advantage of the interactive plot and zoom on the right side of the plot. First we'll notice that no single movie from 1949 has more than 50k votes. Ans also notice the difference in distribution between 1973 and 2006. In 1973, all movies above 20k votes have a rating of at least 6.9, no wonder the weighted average is so high !

<table>
  <tr>
    <td style="border: none;">
      <img src="RatingsColumbo.png" alt="Image" width="500" />
    </td>
    <td style="border: none;">
A familiar face jumps in, telling us that we should click on the 2006 label on the right to turn off the movies of that year, and dive deep into a more precise comparison between 1949 and 1973. We would like to understand why 1949 has a higher spearman coefficient. Looking at the points the 1973 seem sparser, and 1949 seems practically linear, so why is the pearson coefficient so low ? Columbo's sharp mind answers before we could even think about it: Because of the log scale. Here the correlation is not linear, but logarithmic, that's why the spearman coefficient is higher, as it captures the monotonic increase of the logarithm. 
    </td>
  </tr>
</table>


However Columbo's not totally happy with our analysis, saying we lack some overview. He's right, let's come back to a dimension we've already explored before:
Theme popularity over periods:  

### Genre popularity over the years

<table>
  <tr>
    <td style="border: none;">
We've already compared movie genres in the second part of this datastory, so what will the ratings tell us we did not know already ?
Hercule Poirot might have some answers for us, as he has been around for quite a while now, and he even starred in a Black-and-White Movie Alibi in 1931.
He probably knows if we can see the decline of the 3 most popular themes of the early years in terms of ratings as well as number of movies ?
To analyze these genres over time, he advises us to plot them over the periods we defined before and as wise as always he tells us to also plot the weighted rating over all themes, or we wouldn't be able to do any comparisons. 
    </td>
    <td>
      <img src="RatingsHercule.png" alt="Image" width="700" />
    </td>
  </tr>
</table>



{% include RatingsThemesVsPeriodsOld.html %}

This plot is very informative, we can see that during the early years, the 3 genres are very close to the general score, which makes sense since these were practically the only genres to come out, however as the time went on, they started diverging a lot. Remember during the periods in the middle, we had practically no movies of these genres that were coming out, so the data is quite empty. I'd advise digging deeper into the difference between the very bad independent movies of the great depression and the astonishingly good Black-and-White movies that came out in the Post-Cold War. That seems like a hard task, let's send an experimented and combat-ready detective:  
**Du-Du Du-Du Du-Du Du-Du Batmaaaaaan !**

{% include RatingsThemesPeriodsPairOld.html %}

<div style="text-align: center;">
  <img src="RatingsBatman.png" alt="Pikachu Ratings" width="500" />
</div>

Thanks god we're saved, it was just a False alarm. Steven's Spielberg "Schindler's List" completely changed the weighted rating with his rating of 9 and 1.4 million votes.
When we remove that movie the weighted rating for "Black-and-White" movies in the Post-Cold War goes down to 7.5:
a value slightly above average, but not shocking. Thanks Batman, we were about to draw wrong conclusions

Okay now that we found this outlier, let's go back to the most produced genres Today: Drama, Action/Adventure and Comedy.
How did the popularity evolve for these movies ?
The AFI's top 100 list has so many dramas that came out before the 90s, does that mean that Drama's nowadays are bad ?
And What about Comedy and Action movies. If there are so many of those, they are probably popular right ?
{% include RatingsThemesVsPeriodNew.html %}


Indeed The drama movies seem to be very reliable. Always above average, especially compared to Comedies that are probably dragging down the average. 
Action movies on the other side seems to be just good enough, but with a decline since the second world war. 
If we take a closer look at the AFI's top 100 movies list, Citizen Kane, and Casablanca should appear for the second world war in the category Drama, and comparing it to a period where Comedy's are below average we might find out the secret of Drama Movies to stay so high in rating.
{% include RatingsThemesPeriodsPairNew.html %}


<table>
  <tr>
    <td style="border: none;">
For this final task we'll be helped by James Stewart, playing his detective role in Vertigo (9th in AFI's top 100 list !). He tells us to some insights about cult movies: They age very well ! And the more people watch them, the more peope like them. It's simple, no massively rated movie has a bad rating in AFI's list. 
Indeed look at these different disributions, nothing comparable ! The difference on the lower right part of the curve, where we have so many comedies performing well below Dramas with similar number of votes. 
Even though the Comedy theme has 2 movies outperforming the Classics Citizen Kane, and Casablanca, the big amount of Comedies with bad ratings lower the average. So why do comedies perform so bad ? James starts telling us the answer, but as he speaks, our sight starts spinning and a strong nauseau hits us. The answer was probably too hard to swallow, and gave us vertigo. 
    </td>
    <td>
      <img src="RatingsVertigo.png" alt="Image" width="2000" />
    </td>
  </tr>
</table>

---

<a id="conclusion"></a>
<div style="padding-top: 60px;">
  <h2 style="text-align: center; text-transform: uppercase; color: #1a1a1a; font-size: 2.5rem; font-weight: 600;">Conclusion</h2>
</div>

And now, here we are at the end of our journey through time.
Our journey through cinema's rich history has offered a fascinating lens from the silent beginnings to the globalized blockbuster era, movies have acted as mirrors through analyzing trends, genres, and audience responses across decades. Although the dataset was difficult to manipulate to find causality or direct link between periods and group of films we believe we give a nice time overview of what films have been.

---

<a id="team"></a>
<div style="padding-top: 60px;">
  <h2 style="text-align: center; text-transform: uppercase; color: #1a1a1a; font-size: 2.5rem; font-weight: 600;">Meet the Cast</h2>
  <p style="text-align: center; color: #1a1a1a; font-size: 1.5rem; font-weight: 500; margin-top: 10px;">METAL2024</p>
</div>

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 20px;">
  <!-- Anoush -->
  <div style="text-align: center; width: 200px;">
    <img src="anoush.jpg" alt="Anoush Azar-Pey" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
    <h3>Anoush Azar-Pey</h3>
    <p>Anoush is a sublinear algorithms lover.</p>
  </div>

  <!-- Emilien -->
  <div style="text-align: center; width: 200px;">
    <img src="emilien.jpg" alt="Emilien Silly" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
    <h3>Emilien Silly</h3>
    <p>Emilien brings everything you can imagine.</p>
  </div>

  <!-- Lilly-Flore -->
  <div style="text-align: center; width: 200px;">
    <img src="Ursula.png" alt="Lilly-Flore Celma" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
    <h3>Lilly-Flore Celma</h3>
    <p>Lilly-Flore specializes in cinematography.</p>
  </div>

  <!-- Mathis -->
  <div style="text-align: center; width: 200px;">
    <img src="mathis.png" alt="Mathis Krause" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
    <h3>Mathis Krause</h3>
    <p>Mathis is passionate about camera angles.</p>
  </div>

  <!-- Timo -->
  <div style="text-align: center; width: 200px;">
    <img src="timo.png" alt="Timo Michoud" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
    <h3>Timo Michoud</h3>
    <p>Timo excels in NLP.</p>
  </div>
</div>

