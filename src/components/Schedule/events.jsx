import React from "react"

const events = [
  {
    day: 1,
    name: "Team Making",
    type: "Main Event",
    location: "Discord/Google Slides",
    startTime: "9:00 PM",
    description:
      "For any hackers coming in solo, or teams missing just a few members, we'll be starting team formations soon after the opening ceremony. If you haven't found a team yet, introduce yourself in the team-formation discord channel or add a slide to the team formation slide deck.",
  },
  {
    day: 1,
    name: "Guessing Games",
    type: "Game",
    location: "Discord",
    startTime: "Release Friday Night",
    description:
      "Throughout the hackathon we'll be releasing pictures of jars filled with various objects. Guess the number of items contained within for each post - the team with the most correct guesses will win a fun prize!",
    prize: "Giftcards ($30 value)",
  },
  {
    day: 2,
    name: "Guessing Games",
    type: "Game",
    location: "Discord",
    startTime: "Release Friday Night",
    description:
      "Throughout the hackathon we'll be releasing pictures of jars filled with various objects. Guess the number of items contained within for each post - the team with the most correct guesses will win a fun prize!",
    prize: "Giftcards ($30 value)",
  },
  {
    day: 3,
    name: "Guessing Games",
    type: "Game",
    location: "Discord",
    startTime: "Release Friday Night",
    description:
      "Throughout the hackathon we'll be releasing pictures of jars filled with various objects. Guess the number of items contained within for each post - the team with the most correct guesses will win a fun prize!",
    prize: "Giftcards ($30 value)",
  },
  {
    day: 1,
    name: "Hackathon Tools",
    type: "Workshop",
    location: "Discord",
    startTime: "10:00 PM",
    description:
      <div>Is this your first Hackathon? Or do you want some extra tips to make your project extra cool? Tune in to learn about the many tools and skills you can use for your one-of-a-kind digital solutions! We'll be holding a series a three mini workshops on the following subjects:	
        <ol>
          <li> Timeline of a Hackathon </li>
          <li> Collaborating via GitHub</li>
          <li> Hosting a Website</li>
        </ol>
      </div>,
  },
  {
    day: 1,
    name: "Game Tournament",
    type: "Game",
    location: "Discord",
    startTime: "11:00 PM",
    description:
      <div>Show off your team's gaming expertise by dominating the leaderboard in a variety of online games. We'll be playing rounds of <a href="https://skribbl.io/"> skribbl.io</a>, GeoGuesser, Set, and more, so come prepared!</div>,
  },
  {
    day: 2,
    name: "Game Tournament",
    type: "Game",
    location: "Discord",
    startTime: "11:00 PM",
    description:
      <div>Show off your team's gaming expertise by dominating the leaderboard in a variety of online games. We'll be playing rounds of <a href="https://skribbl.io/"> skribbl.io</a>, GeoGuesser, Set, and more, so come prepared!</div>,
  },
  {
    day: 1,
    name: "Midnight Noodles (+ Trivia)",
    type: "Social",
    location: "Discord",
    startTime: "Midnight",
    description:
      "Calling all instant noods lovers! Join us at Midnight Noodles with your fav noods, for a quick slurp n Kahoot (noodle trivia) session!",
  },
  {
    day: 2,
    name: "Coffee Hangout",
    type: "Social",
    location: "Discord",
    startTime: "8:00 AM",
    description:
      "Kick a long day of hacking off to a good start by joining us at our coffee hangout! Bring your favorite morning beverage for waking up (if you've gotten any sleep that is) and spend some time hanging out with the team and fellow McHacks hackers.",
  },
  {
    day: 3,
    name: "Coffee Hangout",
    type: "Social",
    location: "Discord",
    startTime: "8:00 AM",
    description:
      "Kick a long day of hacking off to a good start by joining us at our coffee hangout! Bring your favorite morning beverage for waking up (if you've gotten any sleep that is) and spend some time hanging out with the team and fellow McHacks hackers.",
  },
  {
    day: 2,
    name: "Game-Making with Python",
    type: "Workshop",
    location: "Zoom",
    startTime: "11:00 AM",
    description:
      "Join us for an intermediate level Python workshop where we'll walk you through the basics of PyGame. By the end of the workshop, you'll have written a basic program for playing Tic Tac Toe with the computer, and the skills required to create many more games!",
  },
  {
    day: 2,
    name: "Making a Resume in HTML/CSS",
    type: "Workshop",
    location: "Zoom",
    startTime: "12:00 PM",
    description:
      <div>Looking to make a personal website or portfolio but don't know where to start? Join us for this workshop on creating a portfolio with HTML/CSS! You'll learn some basic HTML/CSS from a walkthrough with us on how to create a portfolio webpage that you can push right to deployment or expand on after. Before the workshop, be sure to sign up for <a href="www.glitch.com">Glitch</a> or link it to your Github account.</div>,
      
  },
  {
    day: 2,
    name: "Introduction to Design",
    type: "Workshop",
    location: "Zoom",
    startTime: "4:00 PM",
    description:
      "Have a passion for graphic design? Come to our beginner-friendly workshop introducing the basics of designing graphics. You'll have the chance to learn how to use Figma, one of the most important digital design and prototyping tools.",
  },
  {
    day: 2,
    name: "Mug Cakes",
    type: "Social",
    location: "Discord",
    startTime: "5:00 PM",
    description:
      "Take a break from hacking for a quick snack! Join us as we make the most low-effort, efficient baked good known to man - mug cakes. Or if those aren't to your taste, make one of your own favorite recipes! We'll be sharing pictures of the final products once they're finished.",
  },
  {
    day: 2,
    name: "Math & Logic Competition",
    type: "Game",
    location: "Discord",
    startTime: "5:30 PM",
    description:
      "Test your problem solving and computational skills in our Math & Logic Competition! Teams of four will compete to see who can solve the most mind-boggling problems in an hour. The group with the most (correct) solutions will take home a prize!",
  },
  {
    day: 2,
    name: "Dinner and Trivia",
    type: "Social",
    location: "Discord",
    startTime: "6:30 PM",
    description:
      "Missed Jeopardy this week? Or just want to be a mukbanger? Come join us at the dinner table! We'll be holding a session of general, programming, and McHacks-specific trivia over Kahoot while we eat.",
  },
  {
    day: 2,
    name: "Paint With MLH and Bob Ross",
    type: "Social",
    location: "Discord",
    startTime: "7:30 PM",
    endTime: "8:30 PM",
    description:
      "Take a break from hacking with Jacklyn from MLH! We'll be attempting to collectively recreate one of Bob Rosses masterpieces with (hopefully) great success. This event is just for fun, so come and meet some other hackers and relax!",
  },
  {
    day: 2,
    name: "Typing Races",
    type: "Game",
    location: "Discord",
    startTime: "9:30 PM",
    description:
      "Warm up those fingers, race mode activated. Ready, set, go...",
  },
  {
    day: 2,
    name: "Midnight Noodles (+ Movie)",
    type: "Social",
    location: "Discord",
    startTime: "Midnight",
    description:
      "Missed out on Midnight Noodles last night? Fear not, join us again tonight with your fav noods, for some Netflix n slurp!",
  },
  {
    day: 3,
    name: "Scavenger Hunt",
    type: "Game",
    location: "Discord",
    startTime: "9:30 AM",
    description:
      "Have you been sitting in your chair for a little too long? Get up and participate in a scavenger hunt at the comfort of your own home! The most impressive scavenger hunters will win retro McHacks gear to pick up with their swag.",
  },
]

export default events
