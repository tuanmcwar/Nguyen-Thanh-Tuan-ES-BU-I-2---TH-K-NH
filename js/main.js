import { Glasses } from "../models/Glasses.js";

const listGlasses = new Glasses();

const reanderGlasses = () => {
  const glasses = listGlasses.dataGlasses.reduce((value, glasses) => {
    return (value += `<button class="col-4 border-0 bg-light btn-glass "  style="
    width: 100%;
    height: 200px;
" onclick="loadGlasses('${glasses.id}')">
                            <img src="${glasses.src}" class="w-100  bg-light" alt="" />
                        </button>`);
  }, "");
  document.querySelector("#vglassesList").innerHTML = glasses;
  document.querySelector(".vglasses__info").style.display = "block";
};

reanderGlasses();

window.loadGlasses = (id) => {
  const findGlasses = listGlasses.dataGlasses.filter(function (glasses) {
    return glasses.id === id;
  });

  let html1 = `
  <div class="glasses-card">
                <h3>${findGlasses[0].name} - ${findGlasses[0].brand} (${findGlasses[0].color})</h3>
                <div class="glassses-price d-flex">
                  <button class="btn-danger p-2">$${findGlasses[0].price}</button>
                  <p class="text-success pl-2 pt-2 mb-1 font-weight-bold">
                    Stocking
                  </p>
                </div>
                <p class="text-break w-60 mt-3 mb-0">
                  ${findGlasses[0].description}
                </p>
              </div>
  `;
  document.querySelector("#glassesInfo").innerHTML = html1;
  document.querySelector(".vglasses__model").style.display = "block";
  let html2 = `
   <img src="${findGlasses[0].virtualImg}" class="img-fluid img-class" alt="" />
  `;
  document.querySelector("#avatar1").innerHTML = html2;
};
window.removeGlasses = (value) => {
  value == false
    ? (document.querySelector(".img-class").style.display = "none")
    : (document.querySelector(".img-class").style.display = "block");
};
