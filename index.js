const closeBtnF = document.getElementById("close-btn-1");
const closeBtnS = document.getElementById("close-btn-2");

// Ürün taglerinin iconları
const tagOne = document.getElementById("tag1");
const tagTwo = document.getElementById("tag2");
const tagThree = document.getElementById("tag3");
const tagFour = document.getElementById("tag4");
const tagFive = document.getElementById("tag5");
const tagSix = document.getElementById("tag6");
const tagSeven = document.getElementById("tag7");

// Html innerHTML olacağı için br etiketi
const br = document.createElement("br");

window.onload = function () {
  what();
  function what() {
    const allProducts = [
      {
        isim: "Karaca 20cm Tencere",
        fiyat: "199.99 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/185/1313110/image153.03.07.7040-19-900.jpg",
      },
      {
        isim: "Karaca 26cm Tava",
        fiyat: "199.99 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/185/1313110/image153.03.07.7040-21-900.jpg",
      },
      {
        isim: "Karaca 26cm Karnıyarık Tencere",
        fiyat: "239.99 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/185/1313110/image153.03.07.7040-20-900.jpg",
      },
      {
        isim: "Karaca Zeytin Tabağı",
        fiyat: "39.99 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/185/1416106/image153.03.08.0183-24-900.jpg",
      },
      {
        isim: "Karaca Servis Tabağı",
        fiyat: "69.99 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/185/1416106/image153.03.08.0183-23-900.jpg",
      },
      {
        isim: "Karaca Paslanmaz Çelik Çatal",
        fiyat: "39.99 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/182/9910100/image600.15.01.1339-900.jpg",
      },
      {
        isim: "Karaca Fine Pearl Kahve Bardağı",
        fiyat: "44.49 &#8378;",
        gorsel:
          "https://cdn.krc.com.tr/image/cache/cdndata/185/1416106/image153.03.08.0183-25-900.jpg",
      },
    ];

    closeBtnF.addEventListener("click", () => {
      let x, i, a;
      x = document.querySelectorAll("#info-box1");
      a = document.querySelectorAll("#close-btn-1");
      for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
        a[i].style.visibility = "hidden";
      }
    });

    closeBtnS.addEventListener("click", () => {
      let x, i, a;
      x = document.querySelectorAll("#info-box2");
      a = document.querySelectorAll("#close-btn-2");
      for (i = 0; i < x.length; i++) {
        x[i].style.visibility = "hidden";
        a[i].style.visibility = "hidden";
      }
    });

    // After close buttons do their work, We have to display the boxes again.
    displayInfoBoxOne = () => {
      let de, i, ne;
      de = document.querySelectorAll("#info-box1");
      ne = document.querySelectorAll("#close-btn-1");
      for (i = 0; i < de.length; i++) {
        de[i].style.visibility = "visible";
        ne[i].style.visibility = "visible";
      }
    };
    displayInfoBoxTwo = () => {
      let de, i, ne;
      de = document.querySelectorAll("#info-box2");
      ne = document.querySelectorAll("#close-btn-2");
      for (i = 0; i < de.length; i++) {
        de[i].style.visibility = "visible";
        ne[i].style.visibility = "visible";
      }
    };

    // First product functions

    let infoBoxOne = document.getElementById("info-box-1-p");
    let priceBoxOne = document.getElementById("price-one");
    let productImageOne = document.getElementById("urun-gorsel-1");

    brFunctionOne = () => {
      infoBoxOne.appendChild(br);
      infoBoxOne.appendChild(priceBoxOne);
    };

    tagOne.addEventListener("click", () => {
      displayInfoBoxOne();
      infoBoxOne.innerHTML = allProducts[0].isim;
      brFunctionOne();
      priceBoxOne.innerHTML = allProducts[0].fiyat;
      productImageOne.src = allProducts[0].gorsel;
      brFunctionOne();
    });
    tagTwo.addEventListener("click", () => {
      displayInfoBoxOne();
      infoBoxOne.innerHTML = allProducts[1].isim;
      priceBoxOne.innerHTML = allProducts[1].fiyat;
      productImageOne.src = allProducts[1].gorsel;
      brFunctionOne();
    });
    tagThree.addEventListener("click", () => {
      displayInfoBoxOne();
      infoBoxOne.innerHTML = allProducts[2].isim;
      priceBoxOne.innerHTML = allProducts[2].fiyat;
      productImageOne.src = allProducts[2].gorsel;
      brFunctionOne();
    });

    // Second product functions

    let infoBoxTwo = document.getElementById("info-box-2-p");
    let priceBoxTwo = document.getElementById("price-two");
    let productImage = document.getElementById("urun-gorsel-2");

    brFunctionTwo = () => {
      infoBoxTwo.appendChild(br);
      infoBoxTwo.appendChild(priceBoxTwo);
    };

    tagFour.addEventListener("click", () => {
      displayInfoBoxTwo();
      infoBoxTwo.innerHTML = allProducts[3].isim;
      priceBoxTwo.innerHTML = allProducts[3].fiyat;
      productImage.src = allProducts[3].gorsel;
      brFunctionTwo();
    });

    tagFive.addEventListener("click", () => {
      displayInfoBoxTwo();
      productImage.src = allProducts[4].gorsel;
      infoBoxTwo.innerHTML = allProducts[4].isim;
      priceBoxTwo.innerHTML = allProducts[4].fiyat;
      brFunctionTwo();
    });

    tagSix.addEventListener("click", () => {
      displayInfoBoxTwo();
      infoBoxTwo.innerHTML = allProducts[5].isim;
      priceBoxTwo.innerHTML = allProducts[5].fiyat;
      productImage.src = allProducts[5].gorsel;
      brFunctionTwo();
    });

    tagSeven.addEventListener("click", () => {
      displayInfoBoxTwo();
      infoBoxTwo.innerHTML = allProducts[6].isim;
      priceBoxTwo.innerHTML = allProducts[6].fiyat;
      productImage.src = allProducts[6].gorsel;
      brFunctionTwo();
    });
  }
};
