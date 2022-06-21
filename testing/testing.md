# Testing

This project has been tested throughout with the use of preview, DevTools, React DevTools, manual testing which allowed me to test every feature as I implemented them.

---

## Table of Contents

- [Responsive Testing](#Responsive-Testing)
- [Lighthouse](#lighthouse)
- [Manual Testing](#Manual-Testing)

---

## Responsive Testing

Full list of tested resolutions with [DevTools](https://developer.chrome.com/docs/devtools/) & [Responsivley App](https://responsively.app/):

1. iPhone SE 375px
2. iPhone 13 390px
3. Ipad 768px
4. Generic Laptop 1280px
5. MacBook Air 1440px
6. Desktop 1920px

---

## Lighthouse

I ran a desktop and mobile test with google chromes built in lighthouse tool and recieved these results (wasn't expecting great results due to being a React App):

### Desktop

![Desktop Lighthouse](https://github.com/Birrellc/Project__FS-Portfolio-2022/blob/main/docs-assets/images/lighthouse-desktop.png)

### Mobile

![Mobile Lighthouse](https://github.com/Birrellc/Project__FS-Portfolio-2022/blob/main/docs-assets/images/lighthouse-mobile.png)

From these results I have found i need to further compress images or switch to a next gen format and also look into the accessibility issues I may have overlooked.

---

## Manual Testing

### Home

| Functionality               | Expected Outcome                        | Pass/Fail |
| ----------------------------|-----------------------------------------|-----------|
| Clicking `contact` button   | Expect to be taken to the contact page  | Pass      |
| Clicking `projects` button  | Expect to be taken to the projects page | Pass      |
| Clicking `skills` button    | Expect to be taken to the skills page   | Pass      |
| Animations                  | Load in the correct order               | Pass      |
| Clicking `github` button    | Expect to be taken to my github page    | Pass      |
| Clicking `linkedin` button  | Expect to be taken to my linked in page | Pass      |

### Navigation

| Functionality                                  | Expected Outcome                                                  | Pass/Fail |
| -----------------------------------------------|-------------------------------------------------------------------|-----------|
| Clicking on `hamburger` icon                   | Opens the Nav Menu                                                | Pass      |
| Clicking on `close` icon                       | Closes the Nav Menu                                               | Pass      |
| Clicking on `home` link                        | Redirects to the "Index" page                                     | Pass      |
| Clicking on `home` link                        | Redirects to the "Index" page                                     | Pass      |
| Clicking on `about` link                       | Redirects to the About Page                                       | Pass      |
| Clicking on `projects` link                    | Redirects to the Projects page                                    | Pass      |
| Clicking on `contact` link                     | Redirects to the Contact page                                     | Pass      |
| Clicking on `skills` link                      | Redirects to the Skills page                                      | Pass      |
| Clicking on `log Out` link                     | Logs out user                                                     | Pass      |
| Clicking on `logo` link                        | Redirects to the "Index" page                                     | Pass      |

### About

_Nothing to test_

### Projects

| Functionality                                                         | Expected Outcome                                                  | Pass/Fail |
| ----------------------------------------------------------------------|-------------------------------------------------------------------|-----------|
| Clicking on `websites` button                                         | Shows all projects with website tag                               | Pass      |
| Clicking on `all` button                                              | Shows all projects                                                | Pass      |
| Mouse over `project card` image                                       | Shows links to live site and code                                 | Pass      |
| Mouse over `project card` image                                       | Animation correctly darkens the image                             | Pass      |
| Clicking `live site` links on all projects                            | Takes the user to live sites for each project                     | Pass      |
| Clicking `code` links on all projects                                 | Takes the user to the github code for each project                | Pass      |
| Clicking `more projects here` button                                  | Takes the user to my github                                       | Pass      |

### Skills

_Nothing to Test_

### Contact Page

| Functionality                                                         | Expected Outcome                                                  | Pass/Fail |
| ----------------------------------------------------------------------|-------------------------------------------------------------------|-----------|
| Clicking on `email` button                                            | Opens email client with the correct address                       | Pass      |
| Filling the form and clicking `send message`                          | Sends the form data to the backend and saves it                   | Pass      |

---

