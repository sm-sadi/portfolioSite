


const skillPage= document.getElementById("skillsDetails");
const homePage= document.getElementById("homePage");
const contactPage = document.getElementById("contactPage");
const portfolio = document.getElementById("portfo");
const experience= document.getElementById("Experience");

const dynamicContents = document.getElementById("dynamicContent");

// skill page 
skillPage.addEventListener("click" , function(){
   dynamicContents.innerHTML = ` <section id="skills" class="bg-white py-1">
   <div class="container">
     <div class="row">
       <div class="col text-center">
         <h1 class="display-4 text-uppercase text-dark mb-0 animate__animated animate__pulse animate__infinite ">
         <strong>Skills</strong> 
         </h1>
         <div class=" bg-dark p-1"></div>
 
       </div>
     </div>
   <!--end of skill title -->
     <div class="row">
       <!--start first col of skills -->
       <div class="col-md-6 col-lg-6 text-left my-2">
         
         <h3 class="text-uppercase my-1 ">Tech skill </h3>
         <div class="title-underline bg-secondary p-1 "></div>
         
         <h3 ><i class="fab fa-html5 text-primary"></i> Html</h3>
         <h3 ><i class="fab fa-css3-alt text-danger"></i> CSS</h3>
         <h3 ><i class="fab fa-bootstrap text-primary"></i> Bootstrap</h3>
         <h3 ><i class="fab fa-js-square text-success"></i> JavaScript</h3>
         <h3 ><i class="fa fa-plus text-primary"></i> RWD</h3>
         <h3 ><i class="fa fa-database text-primary"></i> MYSQL DB</h3>
         <h3 ><i class="fa fa-file-image text-warning"></i> photoshop</h3>
         <h3  ><i class="fab fa-figma text-danger"></i> Figma</h3>
         <h3 ><i class="fab fa-github-square text-dark"></i> github</h3>
         <h3 ><i class="fab fa-git-square text-secondary"></i> git</h3>
       </div>
       <!--end of first colom of skill -->
       
       <!--start 2nd col of skills -->
       <div class="col-md-6 col-lg-6 text-left my-2">
         
         <h3 class="text-uppercase my-1">soft skill</h3>
         <div class="title-underline bg-secondary p-1 "></div>
         
         <h3><i class="fa fa-check-square text-success"></i> Good communication </h3>
         <h3><i class="fa fa-check-square text-success"></i> Fluent in English  </h3>
         <h3><i class="fa fa-check-square text-success"></i> Problem solving </h3>
         <h3><i class="fa fa-check-square text-success"></i> Growth mindset</h3>
         <h3><i class="fa fa-check-square text-success"></i> Team Player</h3>
         <h3><i class="fa fa-check-square text-success"></i> Work Ethic </h3>
         <h3><i class="fa fa-check-square text-success"></i> Openness to feedback</h3>
         <h3><i class="fa fa-check-square text-success"></i> Resposibility</h3>
         
         
       </div>
       <!--end of 2nd colom colom of skill -->
       
       
     </div>
   </div>
 </section>`;
}
);

// homePage
homePage.addEventListener("click" , function(){
    dynamicContents.innerHTML = `<!--start of home section -->
    <section id="skills" class="bg-white py-5">
      <div class="container">
        <div class="row  ">
          <div class="col text-center ">
            <h1 class="display-4 text-uppercase text-dark mb-0  animate__animated animate__pulse animate__infinite">
            <strong >Welcome</strong> 
            </h1>
            
            <p class="text-dark" >Hello, <br> 
            My name is Showaib Mehedi Sadi and I am a <em class="text-primary">junior frontend Developer</em> . 
            I am looking for an opportunity to code, design and learn new things. My regular goal is to code a minimum of at least 40 minutes a day and keep 
           exploring new technologies  . I am hoping to become a full stack developer in the future. except these, I like riding a motorcycle, 
             traveling, and watching movies.
            </p>
            <br> <hr>
                            <h6 class="display-5">  <Strong class="display-5">Education :</Strong>
                                Wyższa Szkoła Informatyki i Zarządzania In Rzeszow, Poland.
                            </h6>
                            <p class="text-primary">Bachelor of information technology</p>
                            <p class="text-dark">Expected graduation:  July 2021</p>

        </section> 
        
         `;
 }
 );

 //cotact page 
contactPage.addEventListener("click" , function(){
    dynamicContents.innerHTML = `<section id="contact" class=" py-2">
    <!--title for contact section-->
  <div class="row  ">
   <div class="col text-center ">
     <h1 class="display-3 text-uppercase text-dark mb-0">
     <strong>contact</strong> 
     </h1>
     <div class="title-underline bg-dark p-1 mx-4"></div>
       <p class="text-capitalize  mt-2">Want to hire me ?</p>
   </div>
 </div>
 <!--end of contact title -->
 <div class="row ">
   <div class="col-md-6   mx-auto">
     <div class="card card-body bg-secondary">
       <!--title for contact-->
       <div class="card-title text-center text-white">
      <h2 class="text-capitalize"> why not send an email ?</h2>
      <p class="text-dark">sadi.wsiiz@gmail.com</p>
     </div>
     <!--end of email-->
     
     </div>
   
   
 </div>
 
 </section>
 <div class="row  ">
  <div class="col-8 text-center mx-auto">
    <h1 class="display-6 text-uppercase text-dark mb-0">
    <strong>other links</strong> 
    </h1>
    
    
    <a class="text-primary px-2" target="_blank" href="https://github.com/sm-sadi">  
      <i class="fab fa-github-square    fa-4x "></i> 
    </a>
    <a class="text-primary px-2" target="_blank" href="https://pl.linkedin.com/in/showaib-sadi">  
      <i class="fab fa-linkedin        fa-4x"></i>
    </a>
    <a class="text-primary px-2"  target="_blank" href="https://twitter.com/sadimehedi">  
      <i class="fab fa-twitter-square  fa-4x"></i>
    </a>
    

    <div class="col p-1">
      <p class="text-dark "  >  
        <i class="fas fa-phone  fa-2x"></i> +48 733 787 436
      </p>
    </div>
    <div class="col ">
      <p class="text-primary " >  
        <i class=" fas fa-envelope-square fa-2x"></i> sadi.wsiiz@gmail.com</p>
    </div>
    <div class="col ">
      <p class="text-success " >  
        <i class="fas fa-map-marker-alt fa-2x"></i> Kwiatkowskiego 5/19 , 35-311 Rzeszów, Poland</p>
    </div>
    
  </div>
`;
 }
 );


// portfolio page 
portfolio.addEventListener("click" , function(){
  dynamicContents.innerHTML = ` <section class="portfolio">
         
  <div class="container">
       <!-- heading  -->
       <div class="row">
           <div class="col text-center">
               <h1 class="display-4 text-uppercase text-dark mb-0">Projects</h1>
               <div class=" mx-auto title-underline bg-dark"></div>
           </div>
       </div>
         <!-- end of heading -->
         <div class="row ">
             <!-- first card  -->
             <div class="col-md-6 col-lg-4 my-3">
                     <div class="card">
                         <img  class="card-img-top" src="./project2.jpg" alt="first card">
                         <div class="card-body mx-auto text-center">
                             <h5 class="card-title text-capitalize"> Color Code Generator</h5>
                             <p class="card-text"> generate random color with js ,then change background</p>
                             <a href="https://sm-sadi.github.io/ccGenerator/index.html" target="_blank"> 
                                 <button class="btn btn-primary"> visit</button>
                             </a>
                         </div>
                     </div>
             </div>
             <!-- end of first card  -->
             <!-- second card  -->
             <div class="col-md-6 col-lg-4 my-3">
                 <div class="card">
                     <img  class="card-img-top" src="./project 1.jpg" alt="first card">
                     <div class="card-body mx-auto text-center">
                         <h5 class="card-title text-capitalize"> simple page</h5>
                         <p class="card-text"> a simple site made with  just html and css only </p>
                         <a href="https://sm-sadi.github.io/CV/ " target="_blank"> 
                             <button class="btn btn-primary"> visit</button>
                         </a>
                     </div>
                 </div>
         </div>
         <!-- end of second card  -->
         <!-- third  card  -->
         <div class="col-md-6 col-lg-4 my-3">
             <div class="card">
                 <img  class="card-img-top" src="./project3.jpg" alt="first card">
                 <div class="card-body mx-auto text-center">
                     <h5 class="card-title text-capitalize"> Number Counter</h5>
                     <p class="card-text"> simple js aplication to count numbers </p>
                     <a href="https://sm-sadi.github.io/counterProject/" target="_blank"> 
                         <button class="btn btn-primary"> visit</button>
                     </a>
                 </div>
             </div>
     </div>
     <!-- end of third card  -->
     <!-- 4th card card  -->
     <div class="col-md-6 col-lg-4 my-3">
         <div class="card">
             <img  class="card-img-top" src="./project4.jpg" alt="first card">
             <div class="card-body mx-auto text-center">
                 <h5 class="card-title text-capitalize"> Dice Game</h5>
                 <p class="card-text"> dice game with HTML CSS JS   </p>
                 <a href=""> 
                     <button class="btn btn-primary"> visit</button>
                 </a>
             </div>
         </div>
 </div>
 <!-- end of 4th card  -->
 <!-- 5th card  -->
             <div class="col-md-6 col-lg-4 my-3">
                 <div class="card">
                     <img  class="card-img-top" src="./project5.jpg" alt="first card">
                     <div class="card-body mx-auto text-center">
                         <h5 class="card-title text-capitalize"> Random Dog from api</h5>
                         <p class="card-text"> random dog images from an api  </p>
                         <a href="https://sm-sadi.github.io/random-dog-photo-from-api/" target="_blank"> 
                             <button class="btn btn-primary"> visit</button>
                         </a>
                     </div>
                 </div>
         </div>
         <!-- end of 5th  card  -->
         <!-- 6th card  -->
         <div class="col-md-6 col-lg-4 my-3">
             <div class="card">
                 <img  class="card-img-top" src="./project6.jpg" alt="first card">
                 <div class="card-body mx-auto text-center">
                     <h5 class="card-title text-capitalize"> jokes api</h5>
                     <p class="card-text"> random jokes from api </p>
                     <a href="https://sm-sadi.github.io/Programming-jokes-from-api/" target="_blank"> 
                         <button class="btn btn-primary"> visit</button>
                     </a>
                 </div>
             </div>
     </div>
     <!-- end of 6th  card  -->
         </div>
  </div>

</section>
       `;
}
);
// experience 
experience.addEventListener("click" , function(){
  dynamicContents.innerHTML = `<section id="skills" class="bg-white py-5">
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="display-4 text-uppercase text-dark mb-0">
        <strong>job experince  </strong> 
        </h1>
        <div class="title-underline bg-dark p-2"></div>
          <p class="text-capitalize text-muted mt-2">my work experince </p>
        
      </div>
    </div>
  <!--end of skill title -->
    <div class="row">
      <!--start first col of skills -->
      <div class="col-md-12 col-lg-6 text-center my-4">
       
        <h3 class="text-uppercase my-3">Business Travel Counselor</h3>
        <p class="text-dark"> <u>
          CWT (Carlson Wagonlit Travels)
<strong>October,2019 - April,2020</strong>  Rzeszow,poland
</u>
        </p>
        
          <li>Dealing with customers on a regular basis via Phone Email and chat.</li>
           <li>Working with global distribution system SABRE, Power Turbo.</li> 
           <li>Using applications Moxie and Slack</li>
           <li>An active Team member in an international team.</li>
           <li>Understanding and maintaining the work Ethics and data privacy</li>
            <hr>
        
      </div>
      <!--end of first colom of skill -->
      <!--start 2nd col of skills -->
      <div class="col-md-12 col-lg-6 text-center my-4">
       
        <h3 class="text-uppercase my-3">IT Internship </h3>
        <p class="text-dark"> <u>
          Focus Society Bogra
         <strong>06.08.2019 - 14.09.2019 </strong> (Bangladesh)
        </u>
           </p>
        
          <li>Using Mircofin360 application on daily basis.</li>
           <li>Web Research on various companies and financial details</li> 
           <li>English Translation of Case Studies</li>
           <br>
           <br>
        <hr>
      </div>
      <!--end of 2nd colom colom of skill -->
      <!--start of 3rd  col of skills -->
      <div class="col-md-12 col-lg-6 text-center my-4">
       
        <h3 class="text-uppercase my-3">Pizza & Fries Maker
        </h3>
        <p class="text-dark"> <u>
          Everest Restaurant
         <strong>01.08.2018-- 01.08.2019</strong> (Rzeszow,Poland)
        </u>
           </p>
        
          <li>Taking orders & dealing from customers.</li>
           <li>Making & serving pizza and fries    </li> 
           <li>Counting money and writting down</li>
           <br>
           <br>
        <hr>
      </div>
      <!--end of 3rd colom of skill -->
      <!--start of 4th  col of skills -->
      <div class="col-md-12 col-lg-6 text-center my-4">
       
        <h3 class="text-uppercase my-3">Freelancer at Upwork.com

        </h3>
        <p class="text-dark"> <u>
          Upwork Freelancer
         <strong>01.08.2016-02.02.2017 </strong> (Remote)
        </u>
           </p>
        
          <li>-Internet Researcher & Data Mining Specialist </li>
           <li>virtual Assistant  </li> 
           <li>-Making more than 15 successful projects.</li>
           <br>
           <br>
        <hr>
      </div>
      <!--end of 4th colom of skill -->
      
    </div>
  </div>
</section>
          
       `;
}
);


// btn function
// const navBtn= document.querySelectorAll(".nav-btn");
// const sidebar= document.getElementById("sidebar")
// navBtn.forEach(function(e){
//  e.addEventListener("click" , function(){
//    console.log("I GOT CLICKED");
//    sidebar.classList.add("active")
//  })
// })

const sidebar= document.getElementById("sidebar");
const sidebarCol= document.getElementById("sidebarCollapse");
 sidebar.addEventListener("click" , function(){
   sidebar.classList.toggle("active");
   sidebarCol.classList.toggle("active")
 })