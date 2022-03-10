<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TheGoldenDev/audiofy">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">AudIOfy</h3>

  <p align="center">
    A ReactJS web app demo project that integrates with the Spotify API to allow users to search for songs and create custom playlists for their Spotify account.
    <br />
    <a href="https://github.com/TheGoldenDev/audiofy"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://audiofy-app-797a94.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/TheGoldenDev/audiofy/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheGoldenDev/audiofy/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Audiofy Screen Shot][screenshot]](https://audiofy-app-797a94.netlify.app/)

AudIOfy is a demo web application built with React and Node.js that integrates with the Spotify API.
An existing Spotify account is required to use the app.
The app CANNOT see your private credentials, you will be redirected to Spotify to log in, then directed back to the app.
You will be prompted immediately if you are not already logged into a Spotify account.

AudIOfy app users may:

  <ol>
    <li>
    Search for music by artist, song title, or album name.
    </li>
    <li>
    Add or remove songs to create custom playlists.
    </li>
    <li>
    Save their custom playlist to their personal Spotify account.
    </li>
    <li>
    Users may search for music by artist, song title, or album name.
    </li>
  </ol>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Node.js](https://nodejs.org/)
- [React.js](https://reactjs.org/)
- [Spotify API](https://developer.spotify.com/documentation/web-api/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://developer.spotify.com/dashboard/](https://developer.spotify.com/dashboard/)
2. Clone the repo
   ```sh
   git clone https://github.com/TheGoldenDev/audiofy.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your clientId in `Spotify.js`
   ```js
   const clientId = 'ENTER YOUR CLIENTID';
   ```
5. Enter your redirectUri in `Spotify.js`
   ```js
   const redirectUri = 'http://localhost:3000/';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

[![Audiofy Feature Screen Shot][feature-screenshot]](https://audiofy-app-797a94.netlify.app/)

AudIOfy app users may:

  <ol>
    <li>
    Search for music by artist, song title, or album name.
    </li>
    <li>
    Add or remove songs to create custom playlists.
    </li>
    <li>
    Save their custom playlist to their personal Spotify account.
    </li>
    <li>
    Users may search for music by artist, song title, or album name.
    </li>
  </ol>

_For more examples, please refer to the [Spotify API Documentation](https://developer.spotify.com/documentation/web-api/)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

The project currently has no planned additional features planned.

See the [open issues](https://github.com/TheGoldenDev/audiofy/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Spencer Wood - [LinkedIn](https://www.linkedin.com/in/spencer-wood-web-dev/) - spencer.uab@gmail.com

My [Portfolio](https://www.captivatingwebsite.com/)

Project Link: [https://github.com/TheGoldenDev/audiofy](https://github.com/TheGoldenDev/audiofy)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/TheGoldenDev/audiofy.svg?style=for-the-badge
[contributors-url]: https://github.com/TheGoldenDev/audiofy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TheGoldenDev/audiofy.svg?style=for-the-badge
[forks-url]: https://github.com/TheGoldenDev/audiofy/network/members
[stars-shield]: https://img.shields.io/github/stars/TheGoldenDev/audiofy.svg?style=for-the-badge
[stars-url]: https://github.com/TheGoldenDev/audiofy/stargazers
[issues-shield]: https://img.shields.io/github/issues/TheGoldenDev/audiofy.svg?style=for-the-badge
[issues-url]: https://github.com/TheGoldenDev/audiofy/issues
[license-shield]: https://img.shields.io/github/license/TheGoldenDev/audiofy.svg?style=for-the-badge
[license-url]: https://github.com/TheGoldenDev/audiofy/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/spencer-wood-web-dev
[screenshot]: screenshot.jpg
[feature-screenshot]: feature-screenshot.jpg
