const myJsonUrlFuc = () => {
  fetch("../json/southPara.json")
    .then((res) => res.json())
    .then((datas) => displayMyData(datas));
};

const displayMyData = (datas) => {
  datas.forEach((data) => {
    // console.log(data);
    const { house, recentUnit, previewsUnit, monthlyRent } = data;
    // console.log(recentUnit);
    const parentContainer = document.getElementById("container");
    const div = document.createElement("div");
    div.classList.add("section-container");
    div.innerHTML = `
    <div>
          <h1 class="custom-heading">মেসার্স আলম শপিং সেন্টার</h1>
          <p>বড় কুমিরা বাজার, সীতাকুন্ড, চট্টগ্রাম। মোবাইলঃ০১৮১৬-০২৫১৯৫</p>
          <h3>অস্থায়ি ঘর বা দোকান ভাড়ার রসিদ</h3>
        </div>
        <div class="custom-flex">
          <p>নং</p>
          <p>
            ভাড়াটিয়ার অংশ <br />
            গৃহ বা হোল্ডিং নং
          </p>
          <p id="house-no" class="custom-filed">${house}</p>
        </div>
        <div class="information-container">
          <p>মালিক</p>
          <div class="information">
            <span>${recentUnit}</span>
            <span>-</span>
            <span>${previewsUnit}</span>
            <span>=</span>
            <span>300</span>
            <span>X</span>
            <span>7</span>
            <span>=</span>
            <span>2100</span>
          </div>
        </div>
        <div class="information-container">
          <p>মাসিক ভাড়া</p>
          <div class="information">
            <span>${monthlyRent}</span>
            <span>+</span>
            <span>2100</span>
            <span>=</span>
            <span>6100</span>
          </div>
        </div>
        <div class="information-container">
          <p>অস্থায়ী ভাড়াটিয়ার নাম</p>
          <div class="information">---</div>
        </div>
        <div class="information-container">
          <p>রশিদ জমা দানের তারিখ</p>
          <div class="information">30-09-2022</div>
        </div>
        <div class="information-container">
          <p>মোট</p>
          <div class="information">0</div>
        </div>
        <div class="information-container">
          <p>তারিখ</p>
          <div class="information">10-10-2022</div>
        </div>
        <div class="information-container">
          <p>মালিক বা তাহাঁর কর্মচারী সাক্ষর</p>
          <div class="information">...</div>
        </div>
    `;
    parentContainer.appendChild(div);
  });
};

myJsonUrlFuc();
