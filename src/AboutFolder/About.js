import React from 'react'

function About() {
  return (
    <div>
      Ajhjbjh,Unrivaled support for Next.js apps with zero configuration. See
      the difference HomeSkip to content Menu Netlify Blog TOPICS All Posts
      TOOLS & SERVICES How to deploy React Apps in less than 30 Seconds At
      Netlify we use React in production and are familiar with the challenges in
      deploying it to production as well. Up until today, React has had no
      opinions on what to use with tooling, which has made deploying a unique
      problem to each project. Today Facebook announced their opinated
      boiler-plate for getting React projects started. This is great news, since
      the ecosystem around getting React projects started has been in a state of
      Flux (see what I did there?). Steps to deploying your React app Now you
      can get a React project up and running with a few commands, and in less
      than 30 seconds you can have it deployed with Netlify. Here's how: Step 1:
      Install or create Open your terminal and enter the following: npm install
      -g create-react-app create-react-app hello-world cd hello-world npm run
      build npm install netlify-cli -g netlify deploy Or deploy a
      create-react-app site with Netlify Functions support with just 1 click:
      Deploy to Netlify Step 2: Choose a new project If you are using the
      netlify CLI, follow command line prompts and choose yes for new project
      and ./build as your deploy folder and voila you have a production React
      app! If that was too hard to follow, here is a gif of me doing it: using
      the Netlify CLI command line prompts You can also link to a GitHub repo
      for continuous deployment for specified branches and will grant you our
      nifty Deploy Preview feature. Happy Hacking :) Step 3: Redirect and
      rewrite rules If you choose to use something for routing (like React
      Router for example), you will need to set up a redirect and rewrite rule
      for the single page app. That redirect rule would look like this: /*
      /index.html 200 This redirect rule above will serve the index.html instead
      of giving a 404 no matter what URL the browser requests. You can add
      redirect rules to the _redirects file or to your netlify.toml config file.
      For more information on redirects on Netlify checkout the docs. Go forth
      and React! Profile picture of Brian Douglas Profile picture of David Wells
      Brian Douglas & David Wells PUBLISHED July 22, 2016 TAGS POPULAR DEPLOY
      CONTINUOUS DELIVERY REACT SHARE Keep reading Vector illustration GUIDES &
      TUTORIALS December 17, 2020 React Children: The misunderstood prop Profile
      picture of Cassidy Williams Cassidy Williams Vector illustration GUIDES &
      TUTORIALS October 27, 2020 A Spooky Adventure at Next.js Conf Profile
      picture of Cassidy Williams Cassidy Williams Recent posts OPINIONS &
      INSIGHTS How user feedback improves our documentation Profile picture of
      Rachael Stavchansky Profile picture of Kristen Lavavej Rachael Stavchansky
      & Kristen Lavavej August 9, 2022 NEWS & ANNOUNCEMENTS Astro v1 is Here at
      Netlify! Profile picture of Tara Z. Manicsic Tara Z. Manicsic August 9,
      2022 GUIDES & TUTORIALS How to use Tailwind CSS with Remix Profile picture
      of Brittney Postma Brittney Postma August 8, 2022 Book cover with the
      title Deliver web project 10 times faster with Jamstack enterprise Deliver
      web projects 10× faster Get the whitepaper Home Stay up to date with all
      Jamstack & Netlify news Email address Subscribe Why Netlify Customers
      Enterprise Resources Agency Partner Program Products Platform Netlify
      Build Netlify Edge Netlify CLI Pricing Add-ons Learn Docs Open Source
      Jamstack book Community Security Site Speed Test Technologies Contact us
      Sales Support Status Forums Company Blog About Careers Press Jamstack Fund
      Netlify Store Sustainability © 2022 Netlify Twitter GitHub Community
      YouTube Jamstack Deployment Serverless Development Performance Terms
      Privacy GDPR/CCPA DMCA Abuse
    </div>
  );
}

export default About