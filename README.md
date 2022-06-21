# Full Stack Portfolio 2022

_Known Bugs: Issue with Rough Notation lib not always loading the effects in the correct place on the page or after the contact form is submitted._

_Google Page Site doesnt work use [LIVE SITE](https://chris-birrell.tech) or the link in the project description to the top left of the page._

Todo: _add form validation_

---

## Description

_My Current portfolio_
This is a Full Stack Portfolio website with **ReactJS** for the frontend along with **SCSS** for styling and **Sanity** used for the backend.

The main purpose of this project is to have a website where I can show off some of my work and skills to gain employement as a junior developer in this industry.

I decided to go with a more artistic themed portfolio instead of the traditional style with a color theme of a more cyberpunk combined with paint splashes and animation.

![PICTURE](https://github.com/Birrellc/Project__FS-Portfolio-2022/blob/main/docs-assets/images/responsive-img.png)

---

## Table of Contents

- [UX](#ux)
  - [Wireframes](#wireframes)
  - [Database](#database)
  - [User Stories](#user-stories)
    - [All Users](#all-users)
    - [Owner](#owner)
    - [Project Goals](#Goals-Derived-From-User-Stories)
  - [Strategy Plane](#Strategy-Plane)
  - [Scope](#Scope)
    - [Goals](#goals)
    - [Features](#features)
  - [Structure](#Structure)
    - [Landing Page](#Landing-Page)
    - [About Page](#About-Page)
    - [Projects Page](#Projects-Page)
    - [Skills Page](#Skills-Page)
    - [Contact Page](#Contact-Page)
  - [Skeleton](#Skeleton)
  - [Surface](#Surface)
    - [Color Scheme](#Color-Scheme)
    - [Font](#Font)
    - [Images](#Images)
- [Technologies](#Technologies)
  - [Languages](#Languages)
  - [Frameworks](#Frameworks)
  - [Tools](#Tools)
  - [External Resources](#External-Resources)
- [Testing](#Testing)
- [Project Barriers](#Project-Barriers)
  - [Known Bugs](#Known-Bugs)
- [Deployment](#Deployment)

---

## UX

### Wireframes

The wireframes for this project - not uploaded yet

---

### Database

[Sanity](https://www.sanity.io/)

#### Schemas

##### Projects

| Field         | Field Type |
| --------------| ---------- |
| title         | String     |
| description   | String     |
| projectLink   | String     |
| codeLink      | String     |
| imgUrl        | Image      |

##### Skills

| Field         | Field Type |
| --------------| ---------- |
| name          | String     |
| bgColor       | String     |
| icon          | Image      |

##### Contact

| Field         | Field Type |
| --------------| ---------- |
| name          | String     |
| email         | String     |
| message       | Text       |

---

### User Stories

#### All Users:

- As a user i would like to be able to access the site on my mobile, tablet and desktop without issues.

- As a user i would like to be able to easily navigate through the website.

- As a user i would like to be able to contact the owner without needing to search for contact details.

- As a user i would like to be able to see a clear section of info regarding the owner.

- As a user i would like to be able to easily view the owners projects.

- As a user i would like to be able to view source code for the owners projects.

- As a user i would like to be able to see which languages and frameworks the owner has used.

#### Owner:

- As the owner i would like to be able to create, edit, read and delete projects via a backend.

- As the owner i would like to be able to provide a way for users to contact me easily.

- As the owner i would like the website to be easy to navigate and straight to the point.

- As the owner i would like to have animated events when the user first visits the website to draw interest.

- As the owner i would like there to be links to socials such as github and linked in.

#### Goals derived from User Stories:

- Create a responsive website design.

- Provide Crud functionality for creating, updating and removing projects from the website via a backend.

- Provide a contact form for users to get in touch with me.

- Create a minimalistic design with animations used to develop interest.

- Social links for github and linkedIn.

---

### Strategy Plane

The purpose of this website is to create a full stack portfolio for myself where potential employers can easily navigate my work and get in contact with me and also to make it easy for me to add and remove my projects to keep the portfolio up to date without having to change the source code.

- Database with a backend platform.
- Contact form
- Responsive
- Animations
- Minimalistic

---

### Scope

#### Goals

- The website will provide clean UX/UI for all users to use easily.
- The website will have a fully functioning contact form where data is sent to the database.
- The website will provide the users to ability to interact with my projects by viewing the live site or the source code.
- The website will be easy to navigate focusing on simplicity with a few animiations.
- Allow Admin to Create, Read, Update and Delete submitted content (CRUD) through the backend.

#### Features

- Responsive website
- Easy to use navigation
- About section for basic info
- Landing page to draw interest
- Portfolio/projects page
- Contact Page
- Contact Form
- CRUD backend

---

### Structure

- The website is laid out in a simple and easy use manner with smooth scrolling, landing page navigation and also hamburger menu based navigation for all view ports.

#### Landing Page

As I wanted my porfolio to have a cyberpunk color theme with paint I chose to go with a black background in order to allow the bright colours to pop more while also keeping things very minimal and not over the top.

The landing page consists of:

- Navbar (hamburger menu)
- Paint splashes with links to important pages (ease of access)
- Hero image with paint background (main site colours)
- Hero Text
- Animations on the hero image, paint links and the hero text
- Links to social pages (github and linkedin)

#### About Page

I wanted my about page to be really simple so that users can read it quickly for a base idea of who i am then move onto viewing projects and skills.

- About me text explaining who i am briefly

#### Projects Page

This page is where I show my projects off to the user through cards. The cards also contain links to the live site and source code on hover and a brief overview of the project and technologies used on the card.

All data for these cards and projects is input to the backend which then is rendered on the site.

- Cards containing my projects
- Project github and live site links
- Project information
- Menu to select between websites and all for when I have none website based projects added.

#### Skills Page

This is just a simple page showing the technologies I have used so far in my development journey.

- Skills images (rendered from backend)

#### Contact Page

This page provides the user with the option to directly email me or fill out my contact form which stores the data in the database for me to view.

- Contact Form that submits data to the database
- Button with a link that allows the user to send me an email.

---

### Skeleton

Minimal theme Navigation.
Pages - There will be a Home, About, Projects, Skills and a Contact page.
Backend - admin will be able to use the backend to change projects and skills data.

---

### Surface

#### Color Scheme

![PICTURE](https://github.com/Birrellc/Project__FS-Portfolio-2022/blob/main/docs-assets/images/Portfolio-colors.png)

#### Font

[Poppins](https://fonts.google.com/specimen/Poppins)

#### Images

- Images in this project are all created by myself and edited with [Photoshop](https://www.adobe.com/products/photoshop.html)

---

## Technologies

### Languages

- [JavaScript](https://en.wikipedia.org/wiki/Jsx)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [SCSS](https://sass-lang.com/)


### Frameworks

- [ReactJS](https://reactjs.org/)

### Backend

- [Sanity](https://www.sanity.io/)


### Tools

- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)


### External Resources

- [Google Fonts](https://fonts.google.com/) - Used to import fonts for the website.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - Used to test/validate the CSS code on the website.
- [Tinypng](http://https://tinypng.com/) - Website used to compress my images to allow for faster loading times.
- [React Icons](https://react-icons.github.io/react-icons/) - Social Links and hamburger menu icons.
- [Stack Overflow](https://stackoverflow.com/) - Resource for solving problems.
- [Responsivley App](https://responsively.app/) - Used to test responsive web apps.
- [Youtube](https://www.w3schools.com/) - Used as a general resource for help with code.
- [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) - Used to create my **README.md** & **Testing.md** files.
- [Udemy](https://www.udemy.com/) - General resource that i've used to learn React
- [Code Institute](https://codeinstitute.net/) - Code institute Slack Community - Used for inspiration for my website.
- [Photoshop](https://www.adobe.com/products/photoshop.html) - Used to edit the paint splatter images and also the hero image.

---

## Testing

Testing has is logged in its own document - [HERE](https://github.com/Birrellc/Project__FS-Portfolio-2022/blob/main/testing/testing.md)

---

## Project Barriers

### Known Bugs

- Issue with the Rough Notation Lib loading in the incorrect places and sometimes covering text it shouldnt. (potential fix to add a loader while the site is loading - need to test)

- Website flashes on load then animations start.

---

## Deployment

[Live Site](https://chris-birrell.tech)

### Local Deployment ###

To deploy this project locally please take the following steps:

1. From the applications [repository](https://github.com/Birrellc/Project__FS-Portfolio-2022), click the **CODE** button and download the zip file.

    Alternatively, you can clone the repository using the following line in your terminal:

```
git clone https://github.com/Birrellc/Project__FS-Portfolio-2022.git
```

2. When you have the project open in your IDE or the folder open in your terminal use the command below to install the required files:

```
npm install
```

3. locate the client.js file in the frontend-react source folder and edit the env settings to your own.

---
