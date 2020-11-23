


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
         <div class="title-underline bg-dark py-2"></div>
           <p class="text-capitalize text-muted mt-2">my skill</p>
         
       </div>
     </div>
   <!--end of skill title -->
     <div class="row">
       <!--start first col of skills -->
       <div class="col-md-6 col-lg-6 text-left my-2">
         
         <h3 class="text-uppercase my-1 ">Tech skill </h3>
         <div class="title-underline bg-secondary p-1 "></div>
         <p class="text-muted">
           This section is to show my Tech skills
         </p>
         <h3 ><i class="fas fa-file-code text-primary"></i> Html</h3>
         <h3 ><i class="fas fa-file-code text-primary"></i> CSS</h3>
         <h3 ><i class="fas fa-file-code text-primary"></i> Bootstrap</h3>
         <h3 ><i class="fa fa-star text-success"></i> JavaScript</h3>
         <h3 ><i class="fa fa-plus text-primary"></i> RWD</h3>
         <h3 ><i class="fa fa-database text-primary"></i> MYSQL DB</h3>
         <h3 ><i class="fa fa-file-image text-warning"></i> photoshop</h3>
         <h3  ><i class="fa fa-file-image text-warning"></i> Figma</h3>
         <h3 ><i class="fa fa-plus text-info"></i> github</h3>
         <h3 ><i class="fa fa-plus text-secondary"></i> git</h3>
       </div>
       <!--end of first colom of skill -->
       
       <!--start 2nd col of skills -->
       <div class="col-md-6 col-lg-6 text-left my-2">
         
         <h3 class="text-uppercase my-1">soft skill</h3>
         <div class="title-underline bg-secondary p-1 "></div>
         <p class="text-muted">
           my soft skills  
         </p>
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
            <div class="title-underline bg-danger"></div>
            <p class="text-dark" >Hello, <br> 
            My name is Showaib Mehedi Sadi and I am a <em class="text-primary">junior frontend Developer</em> . I am looking for an opportunity to code design and learn new things. my regular goal is to code a minimum of at least 40 minutes a day in my free time. I am hoping to become a full stuck developer in the future. except these, I like riding a motorcycle, traveling, and watching movies.
            </p>
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
     <h1 class="display-4 text-uppercase text-dark mb-0">
     <strong>contact</strong> 
     </h1>
     <div class="title-underline bg-primary"></div>
       <p class="text-capitalize  mt-2">please use the form to conatact me</p>
   </div>
 </div>
 <!--end of contact title -->
 <div class="row ">
   <div class="col-md-6 my-3 p-3 mx-auto">
     <div class="card card-body bg-secondary">
       <!--title for form-->
       <div class="card-title text-center text-white">
      <h2 class="text-capitalize"> why not send an email ?</h2>
      <p>new user signIn</p>
     </div>
     <!--end of title  for form-->
     <form >
       <!--name -->
       <div class="form-group ">
         <input type="text"  id="name" class="form-control form-control-lg" placeholder="name">
       </div>
       <!--email-->
       <div class="form-group mt-3">
         <input type="email"  id="email" class="form-control " placeholder="email">
       </div>
       <!--Phone-->
       <div class="form-group mt-3">
         <input type="text"  id="name" class="form-control form-control-lg"  placeholder="Text">
       </div>
       <!--input group-->
 
 <button type="submit" class="btn btn-outline-dark btn-block">Send</button >
 
     </form>
     </div>
   
   <!--end of google map -->
 </div>
 
 </section> `;
 }
 );


// portfolio page 
portfolio.addEventListener("click" , function(){
  dynamicContents.innerHTML = `<section id="portfolio" class="p-2 ">
  <div class="row mx-auto">
    
      <!-- first card -->
    <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block ">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./project 1.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sm-sadi.github.io/CV/" target="_blank" class="btn btn-primary">click to visit </a>
        </div>
      </div>
    </div>
      <!-- end of first card -->
        <!-- first card -->
    <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./project2.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sm-sadi.github.io/ccGenerator/index.html" target="_blank" class="btn btn-primary">click to visit </a>
        </div>
      </div>
    </div>
      <!-- end of first card -->
        <!-- first card -->
    <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./project3.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sm-sadi.github.io/counterProject/" target="_blank" class="btn btn-primary">click to visit </a>
        </div>
      </div>
    </div>
      <!-- end of first card -->
      <!-- end of first card -->
      <!-- first card -->
  <div class="col-lg-4 col-sm-8 col-md-6 text-center mx-auto py-2 d-block">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="./project4.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://sm-sadi.github.io/diceGame/" target="_blank" class="btn btn-primary">click to visit </a>
      </div>
    </div>
  </div>
    <!-- end of first card -->
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
//    sidebar.classList.remove("active")
//  })
// })