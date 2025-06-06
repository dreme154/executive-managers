const celebs = [
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor, Film Producer',
		age: '60 (born December 18, 1963)',
		profile: "Brad Pitt is an acclaimed American actor and film producer, widely regarded as one of Hollywood's most influential figures. He rose to fame in the early 1990s with roles in Thelma & Louise and Legends of the Fall. Pitt’s versatile performances span across genres, with standout roles in Fight Club, Se7en, Ocean's Eleven, and Inglourious Basterds. He earned an Academy Award for Best Supporting Actor for Once Upon a Time in Hollywood and another as a producer for 12 Years a Slave. Known for his charisma and talent, Pitt remains a defining icon in modern cinema."
	},
	{
		name: 'Channing Tatum',
		img: 'images/channing-tatum.jpg',
		profession: 'Actor, Producer, Dancer',
		age: '44 (born April 26, 1980)',
		profile: "Channing Tatum is an American actor, producer, and former dancer best known for his roles in blockbuster films. He gained widespread recognition with Step Up (2006), showcasing his dance skills, and later starred in hit movies like 21 Jump Street, Magic Mike, and Foxcatcher. Tatum’s portrayal of a male stripper in Magic Mike was inspired by his real-life experiences and became a cultural phenomenon, spawning a sequel and a stage show. His blend of charm, humor, and physicality has cemented him as one of Hollywood's most bankable and versatile stars."
	},
		{
		name: 'Neville James Martin',
		img: 'images/neville-martin.jpg',				
		profession: 'Musician, Guitarist',
		age: "Been a performer for 13 years",
		profile: "Neville James Martin is a Blues based guitarist from Belfast N. Ireland. After having been a guitar instructor for many years he gained much attention across various social media platforms during the COVID-19 pandemic in 2021. Martin's style of playing has been compared to that of David Gilmour, Eric Clapton, Gary Moore and BB King."
	},	
	{
		name: 'Tessa Thompson',
		img: 'images/tessa-thompson.jpg',
		profession: 'Actress, Producer',
		age: '40 (born October 3, 1983)',
		profile: "Tessa Thompson is an acclaimed American actress known for her versatility and powerful on-screen presence. She rose to fame with her role in Dear White People (2014) and gained further recognition for her performances in Creed (2015) and its sequels, where she played Bianca, a musician and love interest to Adonis Creed. She also starred as Valkyrie in the Marvel Cinematic Universe films, including Thor: Ragnarok and Thor: Love and Thunder. Beyond acting, Thompson is known for her advocacy for diversity and representation in Hollywood, establishing herself as both a talented performer and a cultural icon."
	},
	{
		name: 'Chris Evans',
		img: 'images/chris-evans.jpg',
		profession: 'Actor, Producer',
		age: '42 (born June 13, 1981)',
		profile: "Chris Evans is an American actor best known for his portrayal of Captain America in the Marvel Cinematic Universe (MCU). His role as Steve Rogers, a character embodying integrity, courage, and leadership, made him a beloved figure in global pop culture. Evans' career began with roles in teen comedies like Not Another Teen Movie (2001), but it was his performance in the MCU that solidified his star status. Apart from his superhero work, he has also starred in films like Snowpiercer (2013), Knives Out (2019), and has directed and produced projects such as Before We Go (2014)."
	},
	{
		name: 'Jason Mamoa',
		img: 'images/jason-mamoa.jpg',
		profession: 'Actor, Producer, Director',
		age: '45 (born August 1, 1979)',
		profile: "Jason Momoa is an American actor known for his charismatic performances and imposing physical presence. He rose to fame with his role as Khal Drogo in Game of Thrones (2011–2012), which showcased his intense portrayal of the Dothraki warlord. His breakthrough continued with his portrayal of Aquaman in the DC Extended Universe films, starting with Batman v Superman: Dawn of Justice (2016) and later in Aquaman (2018), where he brought the character's bold energy to life. Momoa is also known for his roles in Frontier (2016–2018), See (2019–present), and Dune (2021). Beyond acting, he has directed and produced projects, adding to his multifaceted career in Hollywood."
	},
	{
		name: 'Gal Gadot',
		img: 'images/gal-gadot.jpg',
		profession: 'Actress, Model, Producer',
		age: '38 (born April 30, 1985)',
		profile: "Gal Gadot is an Israeli actress and model who gained global recognition for her portrayal of Wonder Woman in the DC Extended Universe, beginning with Batman v Superman: Dawn of Justice (2016) and later starring in Wonder Woman (2017) and Wonder Woman 1984 (2020). Before her acting career, Gadot served as a soldier in the Israel Defense Forces and won the title of Miss Israel in 2004. Her breakout role came with Fast & Furious (2009), where she played Gisele Yashar. Gadot has since appeared in films like Justice League (2017), Red Notice (2021), and Death on the Nile (2022), showcasing her versatility as an actress. She is also a producer, with her production company, Pilot Wave, involved in various projects."
	},
	{
		name: 'Wesley Snipes',
		img: 'images/wesley-snipes.jpg',
		profession: 'Actor, Producer, Martial Artist',
		age: '62 (born July 31, 1962)',
		profile: "Wesley Snipes is an American actor, producer, and martial artist, best known for his role as Blade in the Blade trilogy (1998, 2002, 2004), a groundbreaking series that helped popularize superhero films. Snipes has also starred in a variety of action films, including Demolition Man (1993), White Men Can't Jump (1992), and Passenger 57 (1992). Known for his intense martial arts skills, Snipes is a practitioner of various forms including Brazilian Jiu-Jitsu and Capoeira. His career spans several decades, and he remains an iconic figure in action cinema. In addition to acting, Snipes has produced and directed several projects, solidifying his legacy in the film industry."
	},
	{
		name: 'Miley Cyrus',
		img: 'images/miley-cyrus.webp',
		profession: 'Singer, Songwriter, Actress',
		age: '31 (born November 23, 1992)',
		profile: "Miley Cyrus is an American singer, songwriter, and actress who rose to fame as the star of Disney's Hannah Montana (2006-2011). Transitioning to music, she became a major pop star with hits like 'Wrecking Ball' and 'Party in the U.S.A.' Known for her distinctive voice and bold style, Cyrus has released multiple chart-topping albums, including Bangerz (2013) and Plastic Hearts (2020). Beyond her music career, she has been recognized for her activism, supporting LGBTQ+ rights and advocating for mental health awareness. Miley is widely regarded as one of the most influential artists of her generation."
	},
	{
		name: 'Robert Downey Jr.',
		img: 'images/robert-downey-jr.webp',
		profession: 'Actor, Producer',
		age: '59 (born April 4, 1965)',
		profile: "Robert Downey Jr. is an acclaimed American actor and producer, best known for his role as Tony Stark/Iron Man in the Marvel Cinematic Universe. He began his career at a young age, appearing in films like Less Than Zero (1987) and Chaplin (1992), for which he earned an Academy Award nomination. Downey's career struggled due to personal issues, but he made a remarkable comeback in the 2000s with roles in Iron Man (2008) and subsequent MCU films, becoming one of the highest-grossing actors of all time. His versatility in both dramatic and comedic roles has earned him widespread acclaim."
	},
	{
		name: 'Ben Affleck',
		img: 	'images/ben-affleck.jpg',
		profession: 'Actor, Director, Producer, Screenwriter',
		age: '51 (born August 15, 1972)',
		profile: "Ben Affleck is an American actor, director, producer, and screenwriter known for his versatile career in both Hollywood blockbusters and independent films. He gained early fame with his role in Good Will Hunting (1997), which he co-wrote with childhood friend Matt Damon, earning them an Academy Award for Best Original Screenplay. Affleck has appeared in a variety of successful films, including Argo (2012), which he also directed and won the Academy Award for Best Picture. He is also known for his portrayal of Batman in the DC Extended Universe and has produced and directed several other notable projects throughout his career."
	},
	{
		name: 'Alan Ritchson',
		img: 'images/alan-ritchson.jpg',
		profession: 'Actor, Singer, Model',
		age: '41 (born November 28, 1982)',
		profile: "Alan Ritchson is an American actor, singer, and model known for his work in both television and film. He rose to fame for his role as Thad Castle in the TV series Blue Mountain State and has since appeared in numerous high-profile films and shows. Ritchson gained widespread recognition for his portrayal of Jack Reacher in the Amazon Prime series Reacher. He has also appeared in Teenage Mutant Ninja Turtles (2014) as Raphael and has starred in Hunger Games: Catching Fire (2013). Ritchson has proven his versatility, working across various genres in both action-packed roles and drama."
	},
	{
		name: 'Blake Shelton',
		img: 'images/blake-shelton.jpg',
		profession: 'Singer, Songwriter, TV Personality',
		age: '48 (born June 18, 1976)',
		profile: "Blake Shelton is an American country music singer, songwriter, and television personality. A successful recording artist with multiple chart-topping hits, he rose to fame with songs like Austin and God Gave Me You. Shelton has earned numerous awards, including Grammy Awards and ACM Awards, making him one of the most prominent figures in modern country music. He is also widely recognized as a coach on the television singing competition The Voice, where he became a fan favorite for his humorous and supportive approach. In addition to his music career, Shelton has expanded into acting and hosting."
	},
	{
		name: 'Chris Hemsworth',
		img: 'images/chris-hemsworth.jpg',
		profession: 'Actor, Producer',
		age: '41 (born August 11, 1983)',
		profile: "Chris Hemsworth is an Australian actor best known for his role as Thor in the Marvel Cinematic Universe. He has portrayed the God of Thunder in multiple MCU films, including Thor (2011), Avengers: Endgame (2019), and Thor: Ragnarok (2017). Hemsworth's performance in these films made him a global superstar. Aside from his work in the MCU, Hemsworth has starred in films such as Snow White and the Huntsman (2012), Rush (2013), and Extraction (2020). He is known for his versatility, physicality, and charm on screen, which has earned him a dedicated fan following."
	},
	{
		name: 'Henry Cavill',
		img: 'images/henry-cavill.jpg',
		profession: 'Actor, Producer',
		age: '41 (born May 5, 1983)',
		profile: "Henry Cavill is an English actor widely known for playing Superman in the DC Extended Universe films, starting with Man of Steel (2013). He gained international recognition for his portrayal of the iconic superhero, appearing in films like Batman v Superman: Dawn of Justice (2016) and Justice League (2017). Cavill is also famous for his role as Geralt of Rivia in the hit Netflix series The Witcher, based on the popular book series. His other notable work includes Mission: Impossible – Fallout (2018) and The Tudors (2007-2010). Cavill is known for his intense commitment to roles and physical transformation."
	},
	{
		name: 'Christopher A. J. Martin',
		img: 'images/chris-martin.jpg',
		profession: 'singer, songwriter, musician, and producer',
		age: '47 (born March 2, 1977)',
		profile: "Christopher Anthony John Martin is an English singer, songwriter, musician, and producer. He is best known as the lead singer of the British rock band Coldplay. The band achieved fame in 2000 with their album Parachutes, which included the popular single 'Yellow'. Martin is also known for his collaborations with artists like Jay-Z and Avicii."
	},
	{
		name: 'Demi Moore',
		img: 'images/demi-moore.jpg',
		profession: 'Actress, Producer',
		age: '61 (born November 11, 1962)',
		profile: "Demi Moore is an American actress and producer who became one of the biggest stars of the 1980s and 1990s. She gained fame with roles in films like Ghost (1990), for which she received a Golden Globe nomination, and A Few Good Men (1992). Moore's career flourished with hit films such as Indecent Proposal (1993) and Striptease (1996). She was also part of the ensemble cast in the Charlie’s Angels reboot series and starred in The Bravest Warrior (2019). Known for her versatile acting skills and strong on-screen presence, Moore remains an iconic figure in Hollywood."
	},
	{
		name: 'Luke Combs',
		img: 'images/luke-combs.jpg',
		profession: 'Singer, Songwriter',
		age: '34 (born March 2, 1990)',
		profile: "Luke Combs is an American country music singer and songwriter, widely recognized for his chart-topping hits. He burst onto the scene with his debut album This One's for You (2017), which included the smash hit “Hurricane.” Combs has since become one of country music's most successful artists, known for his rich voice and blend of traditional and contemporary country sounds. His other notable hits include “When It Rains It Pours,” “Beautiful Crazy,” and “Beer Never Broke My Heart.” Combs has earned numerous awards, including CMA and ACM Awards, cementing his place as a leading figure in modern country music."
	},
	{
		name: 'James Brolin',
		img: 'images/james-brolin.jpg',
		profession: 'Actor, Producer, Director',
		age: '83 (born July 18, 1940)',
		profile: "James Brolin is an American actor, producer, and director with a career spanning over five decades. He is best known for his roles in television shows such as Marcus Welby, M.D. (1969–1976) and films like The Amityville Horror (1979). Brolin has worked across multiple genres, showcasing his versatility in both dramatic and comedic roles. He starred in Traffic (2000) and gained renewed popularity for his portrayal of Dr. Kline in The West Wing (2002–2006). Brolin has also worked as a producer and director and is recognized for his long-lasting contributions to Hollywood."
	},
	{
		name: 'bradley cooper',
		img: 'images/bradley cooper.jpg',
		profession: 'Actor, Film Producer',
		age: '49 (born January 5, 1975)',
		profile: "Bradley Charles Cooper is an American actor and filmmaker. He is the recipient of various accolades, including a British Academy Film Award and two Grammy Awards. In addition, he has been nominated for twelve Academy Awards, six Golden Globe Awards, and a Tony Award."
	},	
	{
		name: 'Chase Matthew',
		img: 'images/Chase-Matthew.png',
		profession: 'Country music Musician,Song Writer',
		age: '27 (born December 20, 1997)',
		profile: "Chase Matthew McQuitty is an American country music singer and songwriter. Signed to Warner Records Nashville, he charted in late 2023 with the single Love You Ag by ain"
	},
	{
		name: 'Scarlett Johansson',
		img: 'images/scarlett-johansson.jpg',
		profession: 'Actress, Singer, Producer',
		age: '39 (born November 22, 1984)',
		profile: "Scarlett Johansson is an American actress widely regarded as one of the most talented and highest-earning actresses of her generation. She gained fame for her roles in Lost in Translation (2003) and The Avengers (2012), where she portrayed the iconic Black Widow. Johansson’s filmography spans a wide range of genres, including Marriage Story (2019), for which she received an Academy Award nomination. She is also known for her roles in Lucy (2014), Jojo Rabbit (2019), and Her (2013). Johansson is admired for her range, from action films to dramatic roles, and has cemented her status as a Hollywood A-lister."
	},
	{
		name: 'Tim McGraw',
		img: 'images/tim-mcgraw.jpg',
		profession: 'Singer, Songwriter, Actor',
		age: '57 (born May 1, 1967)',
		profile: "Tim McGraw is an American country music singer, songwriter, and actor who has become one of the most successful and beloved figures in modern country music. He has released multiple chart-topping albums, with songs like “Live Like You Were Dying” and “I Like It, I Love It” becoming fan favorites. McGraw has won numerous awards, including Grammy and CMA Awards, and has sold millions of albums worldwide. He is also known for his acting roles in films like The Blind Side (2009) and Friday Night Lights (2004). McGraw is also celebrated for his philanthropic efforts and his iconic collaborations with his wife, Faith Hill."
	},
	{
		name: 'Michael Hartinger',
		img: 'images/Michael-Hartinger.jpg',
		profession: 'Volxmusik, Singer',
		age: '42 (born, 1983)',
		profile: "Michael Hartinger is a member of the voXXclub which he joined in 2012. They are currently touring across different countries and have about 15 Upcoming concerts"
	},
	{
		name: 'Tom Burke',
		img: 'images/tom-burke.webp',
		profession: 'Actor',
		age: '43 (born June 30, 1981)',
		profile: "Tom Burke is a British actor known for his compelling performances in both television and film. He is widely recognized for his portrayal of Cormoran Strike in the BBC series Strike, based on the novels by J.K. Rowling (under the pseudonym Robert Galbraith). Burke’s other notable roles include The Souvenir (2019) and The Musketeers (2014-2016). With a strong background in theater, he has been praised for his depth and versatility in complex characters. Burke’s talent and wide-ranging roles have made him one of the most respected actors in the UK."
	},
	{
		name: 'Zack Snyder',
		img: 'images/zack-snyder.webp',
		profession: 'Director, Producer, Writer',
		age: '58 (born March 1, 1966)',
		profile: "Zack Snyder is an American filmmaker known for his work on visually stunning and often action-packed films. He first gained major recognition with his 2004 remake of Dawn of the Dead, followed by 300 (2006), which became a cultural phenomenon. Snyder is best known for his work in the DC Extended Universe (DCEU), including Man of Steel (2013), Batman v Superman: Dawn of Justice (2016), and the Justice League films. Known for his distinctive visual style, Snyder has also directed Watchmen (2009) and Army of the Dead (2021). His films often feature bold narratives and striking cinematic aesthetics."
	},
	{
		name: 'Luke Bryan',
		img: 'images/luke-bryan.jpg',
		profession: 'Singer, Songwriter',
		age: '47 (born July 17, 1976)',
		profile: "Luke Bryan is a country music singer and songwriter who has become one of the genre’s biggest stars. With hits like “Country Girl (Shake It for Me),” “Play It Again,” and “Huntin’, Fishin’ and Lovin’ Every Day,” Bryan has built a reputation for creating catchy, high-energy tunes that resonate with a wide audience. He has won numerous awards, including Academy of Country Music Awards and Country Music Association Awards, and has sold millions of albums. Bryan is also known for his role as a judge on American Idol, bringing his charismatic personality to television while continuing to dominate the country music charts."
	},
	{
		name: 'Mark Buffalo',
		img: 'images/mark-buffalo.webp',
		profession: 'Actor, Producer, Activist',
		age: '56 (born November 22, 1967)',
		profile: "Mark Ruffalo is an American actor and producer, renowned for his versatile performances in both drama and comedy. He is perhaps best known for portraying the Hulk/Bruce Banner in the Marvel Cinematic Universe, beginning with The Avengers (2012). Ruffalo's other acclaimed roles include his performances in Spotlight (2015), which won the Academy Award for Best Picture, and Foxcatcher (2014), for which he earned an Academy Award nomination. An outspoken advocate for environmental and political issues, Ruffalo has also produced and starred in projects like The Kids Are All Right (2010), further showcasing his talent and commitment to meaningful storytelling."
	},
	{
		name: 'Theo James',
		img: 'images/theo-james.jpg',
		profession: 'Actor, Producer',
		age: '39 (born December 16, 1984)',
		profile: "Theo James is an English actor and producer known for his leading role in the Divergent film series, where he portrayed Tobias 'Four' Eaton. He also starred in the popular television series The Time Traveler's Wife (2022) and gained attention for his role in The Secret Scripture (2016). James has also appeared in Underworld: Blood Wars (2016) and How It Ends (2018), further cementing his status as a rising star. Known for his good looks and captivating screen presence, he has developed a loyal following and continues to take on diverse roles in film and television."
	},
	{
		name: 'Ron Perlman',
		img: 'images/ron-perlman.jpg',
		profession: 'Actor, Voice Actor',
		age: '74 (born April 13, 1950)',
		profile: "Ron Perlman is an American actor and voice artist with a career spanning over four decades. He is best known for his portrayal of the title character in Hellboy (2004) and its sequel Hellboy II: The Golden Army (2008), as well as his iconic role in the television series Sons of Anarchy (2008-2014) as Clay Morrow. Perlman has also voiced characters in animated films and video games, including Beauty and the Beast (1991) and the Tales of Arcadia series. Known for his distinct voice and memorable performances, Perlman has built a loyal fanbase and is widely regarded as one of Hollywood's most recognizable character actors."
	},
	{
		name: 'Tom Hiddleston',
		img: 'images/tom-hiddleston.jpg',
		profession: 'Actor, Producer',
		age: '43 (born February 9, 1981)',
		profile: "Tom Hiddleston is a British actor who gained international fame for his portrayal of the mischievous Loki in the Marvel Cinematic Universe, beginning with Thor (2011). Hiddleston’s nuanced performance has made Loki one of the most beloved characters in the MCU. Beyond his superhero roles, Hiddleston has an extensive theater background, winning acclaim for his work in Coriolanus and Hamlet. His filmography also includes Crimson Peak (2015), Kong: Skull Island (2017), and The Night Manager (2016), for which he won a Golden Globe. Known for his charm, intelligence, and versatility, Hiddleston continues to captivate audiences across film, television, and theater."
	},
	{
		name: 'Ryan Reynolds',
		img: 'images/ryan-reynolds.jpg',
		profession: 'Actor, Producer, Entrepreneur',
		age: '47 (born October 23, 1976)',
		profile: "Ryan Reynolds is a Canadian actor, producer, and entrepreneur widely recognized for his comedic timing and charismatic on-screen presence. He gained global fame for his role as the antihero Deadpool in the Deadpool film series, which brought a new level of irreverence to superhero films. Reynolds has also starred in hits like The Proposal (2009), Van Wilder (2002), and 6 Underground (2019). In addition to acting, he is a savvy businessman, co-owning the Aviation American Gin brand, which was sold for a substantial profit. Known for his wit and philanthropy, Reynolds remains one of Hollywood's most beloved stars."
	},
	{
		name: 'Woddy Harrelson',
		img: 'images/woddy-harrelson.jpg',
		profession: 'Actor, Activist',
		age: '62 (born July 23, 1961)',
		profile: "Woody Harrelson is an American actor known for his dynamic roles in both comedies and dramas. He rose to fame in the 1980s as a bartender in the TV series Cheers (1985-1993), but later solidified his film career with roles in Natural Born Killers (1994), The People vs. Larry Flynt (1996), and True Detective (2014). Harrelson has earned multiple Academy Award nominations and remains a respected figure in Hollywood. Beyond his acting career, Harrelson is an outspoken environmental and political activist, advocating for sustainability and social causes."
	},
	{
		name: 'Will Parfitt',
		img: 'images/will-parfitt.jpg',
		profession: 'Actor',
		age: '25 (born December 19, 1998)',
		profile: "Will Parfitt is a British actor known for his roles in TV series and films, often showcasing his versatility in both dramatic and comedic roles. His breakout performance was in The Last Bus (2021), where he played a key role in the science fiction series. Parfitt’s acting skills and young age have led to a growing presence in the entertainment industry. His career is still in the early stages, but he is a promising talent with a lot of potential in the film and television sectors."
	},
	{
		name: 'David Corenswet',
		img: 'images/david-corenswet.jpg',
		profession: 'Actor',
		age: '30 (born July 8, 1993)',
		profile: "David Corenswet is an American actor who has gained attention for his roles in television and film. He is best known for his portrayal of the character of Jack Castello in the Netflix series Hollywood (2020). Corenswet's performance in Hollywood earned him significant praise and showcased his talent as a leading man. He has also appeared in The Politician (2019) and is expected to take on more high-profile roles in upcoming films and series. His combination of charm, talent, and striking looks makes him a rising star in Hollywood."
	},
	{
		name: 'Lenny Kravitz',
		img: 'images/lenny-kravitz.jpg',
		profession: 'Musician, Singer-Songwriter, Actor',
		age: '60 (born May 26, 1964)',
		profile: "Lenny Kravitz is an American singer, songwriter, and actor renowned for his fusion of rock, funk, soul, and pop music. He has released numerous hit albums, including Let Love Rule (1989) and Are You Gonna Go My Way (1993), which established him as a leading figure in the music industry. Kravitz is known for his powerful voice, eclectic style, and charismatic stage presence. In addition to his musical career, he has also ventured into acting, with notable roles in films like The Hunger Games (2012) and Precious (2009). His influence spans music, fashion, and pop culture."
	},
	{
		name: 'Tom Hardy',
		img: 'images/tom-hardy.png',
		profession: 'Actor, Producer',
		age: '47 (born September 15, 1977)',
		profile: "Tom Hardy is a British actor celebrated for his intense performances and versatility across a wide range of genres. He rose to fame with roles in Inception (2010) and The Dark Knight Rises (2012), later cementing his place as one of Hollywood’s top actors with films like Mad Max: Fury Road (2015) and Venom (2018). Hardy’s other standout performances include Bronson (2008), Legend (2015), and Dunkirk (2017). Known for his transformative roles, Hardy is regarded as one of the most talented actors of his generation."
	},
	{
		name: 'Keith Urban',
		img: 'images/keith-urban.jpg',
		profession: 'Country Singer-Songwriter, Guitarist',
		age: '56 (born October 26, 1967)',
		profile: "Keith Urban is a New Zealand-born, Australian-raised country singer and songwriter known for his blend of country, rock, and pop influences. He has released numerous chart-topping albums, including Golden Road (2002) and Ripcord (2016). Urban’s distinct guitar playing and charismatic stage presence have earned him numerous accolades, including Grammy Awards and Country Music Association honors. He has also gained fame as a coach on The Voice (U.S.). With hits like 'Blue Ain\'t Your Color' and 'Days Go By,' Urban remains one of country music's most influential and successful artists."
	},
	{
		name: 'Eminem',
		img: 'images/Eminem.jpg',
		profession: 'Rapper, songwriter, and record producer',
		age: '52 (born October 17, 1972)',
		profile: "Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. He is credited with popularizing hip-hop in Middle America and is widely regarded as one of the greatest rappers of all time."
	},
	{
		name: 'Chris Young',
		img: 'images/chris-young.jpg',
		profession: 'Country Singer-Songwriter',
		age: '39 (born June 12, 1985)',
		profile: "Chris Young is an American country music singer and songwriter known for his deep baritone voice and heartfelt songs. He gained national attention after winning Nashville Star in 2006 and quickly rose to prominence in the country music scene with hits like 'Gettin\' You Home' and 'The Man I Want to Be.' Young has released several successful albums and earned numerous awards, including Country Music Association and Academy of Country Music honors. His storytelling style and ability to connect with fans have solidified his place in country music."
	},
	{
		name: 'Liam Hemsworth',
		img: 'images/liam-hemsworth.jpg',
		profession: 'Actor',
		age: '34 (born January 13, 1990)',
		profile: "Liam Hemsworth is an Australian actor who gained international fame for his role as Gale Hawthorne in The Hunger Games film series. Hemsworth has appeared in a variety of films, including The Last Song (2010), Independence Day: Resurgence (2016), and Isn’t It Romantic (2019). He is known for his charisma and strong screen presence, which has made him a popular figure in Hollywood. Hemsworth’s acting career continues to thrive with new roles in film and television, and he remains one of the leading stars of his generation."
	},
	{
		name: 'Hugh Jackman',
		img: 'images/hugh-jackman.jpg',
		profession: 'Actor, Singer, Producer',
		age: '56 (born October 12, 1968)',
		profile: "Hugh Jackman is an Australian actor, singer, and producer best known for his iconic portrayal of Wolverine in the X-Men film series. With a career spanning across stage and screen, Jackman has received critical acclaim for his roles in The Prestige (2006), Les Misérables (2012), and The Greatest Showman (2017). He has earned numerous awards, including a Tony Award for his work on Broadway. Jackman is also known for his charitable work and advocacy, making him one of Hollywood’s most respected and versatile talents."
	},
	{
		name: 'Jeremy Renner',
		img: 'images/jeremy-renner.jpg',
		profession: 'Actor, Producer',
		age: '53 (born January 7, 1971)',
		profile: "Jeremy Renner is an American actor and producer known for his intense and transformative roles. He rose to prominence with his Oscar-nominated performance in The Hurt Locker (2008) and later became a fan-favorite as Clint Barton (Hawkeye) in the Marvel Cinematic Universe (Avengers series). Renner has also starred in films like The Town (2010), Mission: Impossible – Ghost Protocol (2011), and Wind River (2017). His career spans across drama, action, and thriller genres, with Renner being praised for his versatility and dedication to his craft."
	},
	{
		name: 'Jesse Eisenberg',
		img: 'images/jesse-eisenberg.jpg',
		profession: 'Actor, Playwright, Author',
		age: '41 (born October 5, 1983)',
		profile: "Jesse Eisenberg is an American actor, playwright, and author, best known for his portrayal of Mark Zuckerberg in The Social Network (2010), a role that earned him an Academy Award nomination. Eisenberg has showcased his range in films such as Zombieland (2009), Now You See Me (2013), and Batman v Superman: Dawn of Justice (2016). In addition to acting, Eisenberg is a talented writer, with plays like The Revisionist (2013) and a collection of short stories, Bream Gives Me Hiccups (2015). His sharp wit and quirky performances have made him a standout in independent cinema."
	},
	{
		name: 'Ceaser Smith',
		img: 'images/ceasar-smith.png',
		profession: 'Model, Dancer',
		age: '41 (born in 1983)',
		profile: "Best recognized as a dancer for Australia's Magic Men. He is also known for posting fitness, mental health, and lifestyle content. He posts clips from live shows as well as content filmed in his home."
	},
	{
		name: 'Leo Wu',
		img: 'images/leo-wu.jpg',
		profession: 'Actor' ,
		age: '25 (born December 26, 1999)',
		profile: "Leo Wu, is a Chinese actor. He started appearing in commercials at the age of three. In 2007, he made his acting debut as Nezha in the series The Legend and the Hero.[2] He is known for his supporting roles in Nirvana in Fire (2015) and The Whirlwind Girl (2015) and for his starring roles in Fight Breaks Sphere (2018), Tomb of the Sea (2018), The Long Ballad (2021), and Love like The Galaxy (2022).[3] Wu ranked 63rd on Forbes China Celebrity 100 list in 2017, 29th in 2019 and 47th in 2020."
	},
	{
		name: 'kim Nam-joon',
		img: 'images/kim_Nam-joon.jpg',
		profession: 'rapper, songwriter, and record producer', 
		age: '30 (born September 12, 1994)',
		profile: "Kim Nam-joon, known professionally as RM (formerly Rap Monster), is a South Korean rapper, songwriter, and record producer. He is the leader of South Korean boy band BTS, under Big Hit Entertainment. Born in Seoul and raised in Ilsan, RM began his music career in the underground Korean hip-hop scene as a teenager, going by the name Runch Randa. He joined Big Hit in 2010, and debuted as part of BTS in June 2013."
	},
	{
		name: 'Chris Pratt',
		img: 'images/chris-pratt.webp',
		profession: 'Actor, Producer',
		age: '45 (born June 21, 1979)',
		profile: "Chris Pratt is an American actor who gained worldwide fame for his role as Peter Quill (Star-Lord) in the Guardians of the Galaxy franchise. Initially known for his comedic role on Parks and Recreation, Pratt's career took off with action-packed roles in Jurassic World (2015) and The Avengers series. He is known for his charismatic personality, comedic timing, and action star appeal. Pratt has become one of Hollywood’s top leading men, with additional credits in films like Passengers (2016) and The Tomorrow War (2021). His transformation from comedy to blockbuster roles has made him a beloved figure."
	},
	{
		name: 'Brantley Gilbert',
		img: 'images/brantly-gilbert.jpg',
		profession: 'Country Rock Singer, Songwritter, Record Producer',
		age: '39 (born January 20, 1985)',
		profile: "Brantley Keith Gilbert is an American country rock singer, songwriter and record producer from Jefferson, Georgia. He was originally signed to Colt Ford's label, Average Joes Entertainment, where he released Modern Day Prodigal Son and Halfway to Heaven."
	},
	{
		name: 'Gianluca Ginoble',
		img: 'images/Gianluca-Ginoble.jpg',
		profession: 'Actor',
		age: '30 (born February 11, 1995)',
		profile: "Gianluca Ginoble was born in Abruzzo, Italy. He is an actor, known for Entourage, Il Volo: L'amore si muove and Il Volo: Grande amore."
	},
	{
		name: 'Tayler Holder',
		img: 'images/tayler-holder.jpg',
		profession: 'Actor, Musician',
		age: '27 (born August 19, 1997)',
		profile: "Tayler Holder was born on 19 August 1997 in Alvarado, Johnson County, Texas, USA. He is an actor, known for Dirt, House of Creators and LEAN."
	},
	{
		name: 'Lilith Cavaliere',
		img: 'images/Lilith-Cavaliere.jpg',
		profession: 'social media personality',
		age: '',
		profile: "Lilith Cavaliere is an Australian social media personality and influencer, known for her fashion and lifestyle content, particularly on Instagram and YouTube."
	},
	{
		name: 'Alanis Nadine Morissette',
		img: 'images/alanis_nadine.jpg',
		profession: 'singer, songwriter and actress',
		age: '50 (born June 1, 1974)',
		profile: "Alanis Nadine Morissette is a Canadian and American singer-songwriter and actress. Known for her emotive mezzo-soprano voice and confessional songwriting, she became a cultural phenomenon during the mid 1990s and early 2000s."
	},
];

const profileImg = document.getElementById('profile-img');
const profileName = document.getElementById('profile-name');
const profileProfession = document.getElementById('profile-profession');
const profileAge = document.getElementById('profile-age');
const profileDescription = document.getElementById('profile-description');
const profilePageTitle = document.getElementById('profile-page-title');

const activationLink = document.getElementById('activation-link');
const activationBtn = document.getElementById('activation-btn');

const meetAndGreetLink = document.getElementById('meet-and-greet-link');
const meetAndGreetBtn = document.getElementById('meet-and-greet-btn');

// Display Profile Details
function loadProfile() {
	const urlParams = new URLSearchParams(window.location.search);
	const profileId = urlParams.get('id');

	if (profileId !== null && celebs[profileId]) {
		const celeb = celebs[profileId];
		profilePageTitle.textContent = `Profile - ${celeb.name}`;
		profileImg.src = celeb.img;
		profileName.textContent = celeb.name;
		profileProfession.textContent = celeb.profession;
		profileAge.innerHTML = `<b>Age</b>: ${celeb.age}`;
		profileDescription.textContent = celeb.profile;
		
		const celebName = celeb.name.split(' ').join('-').toLowerCase();

		activationBtn.addEventListener('click', () => {
			activationLink.href = `membership.html?celeb=${celebName}`
		});

		meetAndGreetBtn.addEventListener('click', () => {
			meetAndGreetLink.href = `meet-and-greet.html?celeb=${celebName}`
		})
	}
}

if (profileImg) loadProfile();
