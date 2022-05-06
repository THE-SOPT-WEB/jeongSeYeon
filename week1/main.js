import { burgurs as mac, king } from "./utils/burgurs";

(() => {
  const $ = (s) => document.querySelector(`.${s}`);
  const cart = $("cart");
  const menuList = $("menu-list");
  const orderButton = $("order-button");
  const cancelButton = $("cancel-button");
  const modalCancel = $("modal-cancel");
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];
  let burgurs = mac;

  function renderMenu(burgurs) {
    menuList.textContent = "";
    burgurs.forEach((burgur) => {
      const article = document.createElement(`article`);
      article.classList.add("menu");
      article.setAttribute("data-id", burgur.id);
      article.insertAdjacentHTML(
        "afterbegin",
        `
        <img src="assets/ham.jpeg" alt="burgur" />
        <div class="menu-info">
          <h3>${burgur.name}</h3>
          <span>${burgur.price.toLocaleString()}원</span>
          <p>${burgur.desc}</p>
        </div>
  `
      );
      menuList.appendChild(article);
    });
  }

  function changeCount(id, count) {
    cartList = cartList.map((burgur) => {
      if (burgur.id === id) {
        return {
          ...burgur,
          count,
        };
      }

      return burgur;
    });
  }

  function addToCartList(burgur) {
    let isAdded = false;
    cartList.forEach((item, i) => {
      if (item.id === burgur.id) {
        cartList[i].count += 1;
        isAdded = true;
      }
    });
    if (!isAdded) {
      cartList.push({
        ...burgur,
        count: 1,
      });
    }
  }

  function deleteItem(id) {
    cartList = cartList.filter((burgur) => {
      return burgur.id !== id;
    });
    countCharge();
    renderCartList();
  }

  function countCharge() {
    let total = 0;
    cartList.forEach((item) => {
      total += item.price * item.count;
    });
    $("total").innerText = `${total.toLocaleString()} 원`;
  }

  function renderCartList() {
    cart.textContent = "";
    cartList.forEach((burgur) => {
      const cartItem = document.createElement("div");
      cartItem.setAttribute("class", "cart-item");
      cartItem.insertAdjacentHTML(
        "afterbegin",
        `
        <span>${burgur.name}</span>
        <input class="count" type="number" min="1" value="${burgur.count}" />
        <span>${burgur.price}</span>
        <button>X</button>
        `
      );
      cartItem.children[1].onchange = (e) => {
        changeCount(burgur.id, +e.target.value);
        countCharge();
      };
      cartItem.children[3].onclick = () => deleteItem(burgur.id);
      cart.appendChild(cartItem);
    });
  }

  function addItem(id) {
    burgurs.forEach((burgur) => {
      if (burgur.id === id) {
        addToCartList(burgur);
      }
    });
    $("orderSheet").classList.add("ani");
    setTimeout(() => {
      $("orderSheet").classList.remove("ani");
    }, 300);
  }

  function resetCartList() {
    cartList = [];
    renderCartList();
    countCharge();
  }

  function openModal() {
    const background = $("background");
    background.classList.remove("hidden");
  }

  function closeModal() {
    const background = $("background");
    background.classList.add("hidden");
  }

  menuList.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      addItem(+e.target.closest("article").dataset.id);
      countCharge();
      renderCartList();
    }
  });

  cancelButton.addEventListener("click", resetCartList);
  orderButton.addEventListener("click", openModal);
  modalCancel.addEventListener("click", closeModal);
  $("mac").addEventListener("click", () => {
    renderMenu(mac);
    burgurs = mac;
  });
  $("king").addEventListener("click", () => {
    renderMenu(king);
    burgurs = king;
  });
  window.onload = () => {
    countCharge();
    renderCartList();
    renderMenu(mac);
  };
  window.onunload = () => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  };
})();
