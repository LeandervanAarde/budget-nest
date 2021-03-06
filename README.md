

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/LeandervanAarde/budget-nest)
![GitHub watchers](https://img.shields.io/github/watchers/LeandervanAarde/budget-nest)
![GitHub language count](https://img.shields.io/github/languages/count/LeandervanAarde/budget-nest)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LeandervanAarde/budget-nest)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Leander van Aarde</h5>
<h5 align="center" style="padding:0;margin:0;">200211</h5>
<h6 align="center">DV202 Unit testing- Term 2 | 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/LeandervanAarde/budget-nest">
    <img src="https://drive.google.com/uc?export=view&id=1z774ujlhRg6xsgnICGL_N6jVTPHwFj8E" alt="Logo" width="140" height="160">
  </a>
  
  <h2 align="center">Budget Nest</h2>

  <p align="center">
    This is a project that has been built with React in order to learn the fundamentals of Jest & RTL (React Testing Library), the aim of the project is to help users understand their income and to budget! 
    <br/>
    <i>This project is not live, the main aim was to implement tests!</i> 
    
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/LeandervanAarde/budget-nest/issues">Report Bug</a>
    ·
    <a href="https://github.com/LeandervanAarde/budget-nest/issues">Request Feature</a>
    ·
    <a href="https://github.com/LeandervanAarde/budget-nest/issues">Suggest Tests</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* :point_right: [About the Project](#about-the-project)
* :point_right: [Project Description](#project-description)
* :point_right: [Built With](#built-with)
* :point_right: [Getting Started](#getting-started)
* :point_right: [Prerequisites](#prerequisites)
* :point_right: [How to install](#how-to-install)
* :point_right: [Features and Functionality](#features-and-functionality)
* :point_right: [Development Process](#development-process)
* :point_right: [Implementation Process](#implementation-process)
* :point_right: [Tests](#implementation-process)
* :point_right: [Highlights](#highlights)
* :point_right: [Challenges](#challenges)
* :point_right: [Future Implementation](#peer-reviews)
* :point_right: [Final Outcome](#final-outcome)
* :point_right: [Mockups](#mockups)
* :point_right: [Conclusion](#conclusion)
* :point_right: [License](#license)
* :point_right: [Contact](#contact)
* :point_right: [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://drive.google.com/uc?export=view&id=1ygReZG2dQx5cSUzZeJiPnNOWSM5_A80Z)
<!-- 1UH4OhB_J3WRT3ebfDSvTe1lIpC7kVpMN -->
### Project Description

Budget Nest is a web based application that has been build with React, Chartsjs, Bootstrap, SCSS, Jest and RTL. This application focuses on giving users the opportunity to view their finances to find out what tax bracket they fall into, to list their expenses and set out an amount that they want to save. The web app will aid users in understanding their current finances through the visualisation of data through chartsjs. Budget Nests main goal is to deliver a flawless experience through making sure all features work, this is accomplished by the implementation of Jest/RTL unit testing library. 

### Built With

* [React](https://reactjs.org/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Jest](https://jestjs.io/)
* [Bootstrap](https://getbootstrap.com/)
* [Chartsjs](https://www.chartjs.org/)
* [SCSS](https://sass-lang.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will assist you downloading the project on your local machine. 

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/LeandervanAarde/budget-nest.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/LeandervanAarde/budget-nest.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. Running Tests </br>
Run the following in the commandline/Terminal to run the tests:
   ```sh
   npm test
   ```

 5. run the following to see the code coverage of the tests </br>
   ```sh
   npm test -- --coverage
   ```



<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://drive.google.com/uc?export=view&id=1UH4OhB_J3WRT3ebfDSvTe1lIpC7kVpMN)

### A budgeting website getting you on the right track!  

Enter all members of your household in order to see a total tax bracket, total household income and income after tax 
<!-- https://drive.google.com/file/d/1MflpyN2sWP3843t561NfatYW8lssk4Bw/view?usp=sharing -->
![image3](https://drive.google.com/uc?export=view&id=1MflpyN2sWP3843t561NfatYW8lssk4Bw)
### Visualised data for your household income

See the incomes that have been added on chartsjs, this will showcase individual incomes, incomes after tax and tax amounts. 

![image4](https://drive.google.com/uc?export=view&id=1E_jGjbXeIMBmt8fmVScJbbWwPWsQbCKp)

### Manage your expenses and savings

See what your income is after you enter all your expenses have been calculated and savings amount has been selected

![image5](https://drive.google.com/uc?export=view&id=1B7zKSuGtwLjqDj0LJTPRZR1SwCSKpd5m)

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `Jest and React Testing Library`.
* React Scroll for local navigation

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* I learned about the importance of Unit testing and the value that it holds within industry.
* Gained insights into how to refactor code in order to get the best possible outcome. This will be implemented in future projects
* I learned about the different types of testing. While I am aware that this is a specialisation, I would like to learn more about it in the future. 

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Charts were not able to be tested as they were registered as SVG elements and not components, thus making the data inaccesible to me (as far as I was aware).
* Values showing NaN even though initial state was set to 0
* Learning testing was one of the biggest challenges, this process was tedious to me and didn't make sense due to the fact that it was front end testing that could be visually seen if there was a bug. The challenge I had faced within the actual testing was understanding how to use the tests and that more tests did not mean they were better tests
* PHP testing remains a challenge, this aspect doesn't make sense to me as of yet, but I do see the value of testing it. 


#### Above And Beyond

<!-- what did you learn outside of the classroom and implement into your project-->
* React Scroll
* React scroll is a dependancy that is similiar to React-Router, with the exception of navigation to sections of the component instead of rendering a new component. 

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* In future I would like to implement more charts to visualise all data
* Take more of a component based development approach, this project was very dependant on the one component and I would like to utilise the power of React in a better manor in future. 

<!-- MOCKUPS -->
## Final Outcome

### Mockups


![image9](https://drive.google.com/uc?export=view&id=1UH4OhB_J3WRT3ebfDSvTe1lIpC7kVpMN)
<br>

![image10](https://drive.google.com/uc?export=view&id=1B7zKSuGtwLjqDj0LJTPRZR1SwCSKpd5m)

### Tests preview
![image11](https://drive.google.com/uc?export=view&id=1zO6qsn2wrcpfAUs3-_vqL6IHPOvi-az0)
<br>
Above showcases a snippet of the tests that were run in Budget Nest

### Code coverage
![image11](https://drive.google.com/uc?export=view&id=10jhz91KOtkHgXvgG_0BUFj0hXApc75I8)
<br>
Above you can see the amount of code that was covered in the document through the implementation of tests


See the [open issues](https://github.com/LeandervanAarde/budget-nest/pulse) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Leander van Aarde** - [Leander van Aarde](https://github.com/LeandervanAarde/)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Leander van Aarde** - [Leander.vaonline@gmail.com](mailto:Leander.vaonline@gmail.com) - [@instagram](https://www.instagram.com/_.leander_e/) 
* **Project Link** - https://github.com/LeandervanAarde/budget-nest

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Old Mutual tax calculator](https://www.oldmutual.co.za/personal/tools-and-calculators/income-tax-calculator/)
* [Unsplash](https://unsplash.com/photos/lZ_4nPFKcV8)
* [React Icons](https://react-icons.github.io/react-icons/)
