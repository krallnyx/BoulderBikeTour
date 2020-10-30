<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** krallnyx (for twitter and Github), BoulderBikeTour (project repo's name), krallplisken@hotmail.com (self explanatory...), arnaud-jeanroch (for Linkedin)
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/krallnyx/BoulderBikeTour">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Boulder Bike Tour (FrontEnd)</h3>

  <p align="center">
    This project's is about creating the website for the Boulder Bike Race in Colorado
    <br />
    <a href="https://github.com/krallnyx/BoulderBikeTourAPI"><strong>This is the FrontEnd only, the BackEnd is in this repo, in Ruby</strong></a>
    <br />
    <br />
    <a href="https://github.com/krallnyx/BoulderBikeTour"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/krallnyx/BoulderBikeTour">View Demo</a>
    ·
    <a href="https://github.com/krallnyx/BoulderBikeTour/issues">Report Bug</a>
    ·
    <a href="https://github.com/krallnyx/BoulderBikeTour/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

# Project Brief :

Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado at the foot of the Rocky Mountains. It's the Boulder Bike Tour, and it's coming up in 2020! The huge hype around the event means it's time to start preparing the whole event now. The organizers need a website for the event and have launched a call for proposals, meaning you will be submitting your idea for the bike tour's site!

**Requirements**
The organizers have several requirements:

The website must have an outdoors-y and athletic feeling. They want a clean design and plenty of bicycle or athletic imagery.
There must be a home page with basic information about the event and a counter that shows the number of months, days, hours, minutes, and seconds until the race (April 1, 2020).
There must be a photos page that displays photos from Flickr tagged with the following hashtags: #bikerace and #BoulderBikeTour. Since there are likely to be many, there should be only 40 photos displayed at a time (which means you can choose either infinite scroll or pagination).
There must be a location page that displays all current rider locations. Since the bike race happens in the future, this will be placeholder data (which is provided below)
There must be a riders page that displays each rider's first name, last name, and city of origin. There should be 20 riders in total. Since the bike race happens in the future, this will be placeholder data (which is provided below).
The organizers are sponsoring for anyone to come up with a slogan for the race. Therefore, there must be a contest page that allows anyone to submit their first name, last name, email address, and a slogan idea under 50 characters. All fields must have validations. Submissions should be saved to the database in a submissions table.
**Placeholder data**
Since the riders aren't finalized yet, and their locations aren't available before the race starts, the organizers have given you placeholder data to use as part of your prototype.

Find rider names and their fictional, temporary latitudes and longitudes in this spreadsheet.

The latitudes and longitudes will be useful for visualizing the riders on a map. More info below!

**APIs**
You'll notice that you're not just making a website with your own content here; you'll need to be using external services, like Flickr and a map API, as part of your final product. This is where APIs enter the picture, which are crucial parts of today's web! APIs allow information and functionalities to be shared and used among multiple platforms, and you'll have your chance to dive into them in this project.

**Flickr API**
We recommend you use the Flickr Photo APi. The documentation is provided here:  https://www.flickr.com/services/api/

If you need help with using the API, Flickr provides a dedicated User Group:  https://www.flickr.com/groups/api/

Once you're set up with authentication, using the API is straightforward!

Don't worry about the fact that photos you're retrieving today don't have anything to do with the actual bike race, since it's in the future. The organizers only want to see what the site would look like, even if the photos aren't accurate!

**Maps API**
There are a number of Map APIs available that you could use for this project, for example :

OpenStreetMap
OpenLayers
LeafletJS
MapQuest
Mapbox
In the final version of the website, viewers will be able to track riders' locations in real-time. However, because the bike race takes place in the future, you will use static placeholder data for the riders' positions now. The placeholder locations are all in or around the city of Boulder, Colorado. The placeholder data is in a spreadsheet that was linked above (but if you need it again, here it is).

Each rider should be indicated on a map of Boulder as a marker. Find documentation about displaying a map of a certain place, as well as markers, here: https://developers.google.com/maps/documentation/javascript/examples/marker-simple

In order to tell which marker represents each fictional rider, you should also add an information window to each marker that lists a first name and last name. When users click on a marker on the map, the information window will appear. These names should correspond to the riders listed on the riders page of the website (that you define, because the riders are fictional for now). 

Before the race, the organizers will collaborate with the winning to developer to replace the placeholder data with real data and set up real-time rider tracking. This isn't something you need to worry about! The placeholder data is all you need to make a great-looking and realistic prototype.

**Design**
If you're looking for inspiration, check out other athletic event websites. The following might be helpful (they should just be used as inspiration and are not to be copied).

A sample bike race website with a large bicycle image and exciting design
Sample bike race website
A sample marathon website with clean design and images of runners
Marathon website by Otrovez
Website for the NYC Marathon, complete with a countdown and runner images
New York City Marathon website
 **Technical requirements**
The website must use Ruby on Rails framework.
The front-end can use React, but this is not obligatory.
The front-end can use Bootstrap, but this is not obligatory.
You must write standard Rails tests!
This is your chance to take a website online. You may keep your project locally on your computer or deploy it, although you may have to pay for a hosting service.



### FrontEnd Built With:

* React
* Flickr API
* Google Maps API



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/krallnyx/BoulderBikeTour.git
```
2. Install NPM packages
```sh
npm install
```



<!-- USAGE EXAMPLES -->
## Usage

To launch the project after the installation
```sh
npm start
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/krallnyx/BoulderBikeTour/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@krallnyx](https://twitter.com/krallnyx) - krallplisken@hotmail.com

Project Link: [https://github.com/krallnyx/BoulderBikeTour](https://github.com/krallnyx/BoulderBikeTour)



<!-- ACKNOWLEDGEMENTS
## Acknowledgements

* []()
* []()
* []()
 -->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/krallnyx/repo.svg?style=flat-square
[contributors-url]: https://github.com/krallnyx/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/krallnyx/repo.svg?style=flat-square
[forks-url]: https://github.com/krallnyx/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/krallnyx/repo.svg?style=flat-square
[stars-url]: https://github.com/krallnyx/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/krallnyx/repo.svg?style=flat-square
[issues-url]: https://github.com/krallnyx/repo/issues
[license-shield]: https://img.shields.io/github/license/krallnyx/repo.svg?style=flat-square
[license-url]: https://github.com/krallnyx/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/arnaud-jeanroch
[product-screenshot]: images/screenshot.png
