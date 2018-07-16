var pages = {
  general_info: {
    name: "general-info",
    stage: 'unfinish',
    render: function () {
      return `
        <div class="title">General Infomation</div>
        <div class="greet">Tell us who you are!</div>
    
        <div class="two-form">
          <div class="form">
            <div class="name">Name<span>(optional)</span></div>
            <input class="blank" type="text" placeholder="Example Name" onfocus="this.placeholder=''">
          </div>
          <div class="form">
            <div class="name">Phone*</div>
            <input class="blank" type="text" placeholder="0912 345 678" onfocus="this.placeholder=''">
          </div>
        </div>
    
        <div class="form">
          <div class="name">Birth Date<span>(optional)</span></div>
          <div class="three-blank">
            <input class="blank" type="text" placeholder="YYYY" onfocus="this.placeholder=''">
            <input class="blank" type="text" placeholder="MM" onfocus="this.placeholder=''">
            <input class="blank" type="text" placeholder="DD" onfocus="this.placeholder=''">
          </div>
        </div>
    
        <div class="form">
          <div class="name">Address*</div>
          <div class="two-blank">
            <input class="blank" type="text" placeholder="City" onfocus="this.placeholder=''">
            <input class="blank" type="text" placeholder="Dist" onfocus="this.placeholder=''">
          </div>
        </div>
    
        <div class="form">
          <input class="blank" type="text" placeholder="Address Detail" onfocus="this.placeholder=''">
        </div>
    
        <!--submit button-->
        <button class="submit-btn">SUBMIT & NEXT</button>
        `
    }
  },
  payment: {
    name: "payment",
    stage: 'unfinish',
    render: function () {
      return `
        <div class="title">Payment Method</div>
        <div class="greet">Add your credit card infomation!</div>
    
        <div class="form">
          <div class="name">Card Number</div>
          <input class="blank" type="text" placeholder="1234 5678 9012 3456" onfocus="this.placeholder=''">
        </div>
    
        <div class="two-form">
          <div class="form">
            <div class="name">Cardholder Name</div>
            <input class="blank" type="text" placeholder="EXAMPLE NAME" onfocus="this.placeholder=''">
          </div>
          <div class="form">
            <div class="name">Bank Name</div>
            <input class="blank" type="text" placeholder="EXAMPLE BANK" onfocus="this.placeholder=''">
          </div>
        </div>
    
        <div class="three-form">
          <div class="form">
            <div class="name">CVV</div>
            <input class="blank" type="text" placeholder="123" onfocus="this.placeholder=''">
          </div>
          <div class="form">
            <div class="name">Expire Date</div>
            <input class="blank" type="text" placeholder="" onfocus="this.placeholder=''">
          </div>
          <div class="form">
            <input class="blank" type="text" placeholder="" onfocus="this.placeholder=''">
          </div>
        </div>
        <!--submit button-->
        <button class="submit-btn">DONE</button>
        `
      }
    }
}
var general_info = pages.general_info.render();
var payment = pages.payment.render();

var main_area = document.getElementById("main-area");

/* main_area.innerHTML = general_info;
main_area.className = "general-info container";

main_area.innerHTML = payment;
main_area.className = "payment container"; */