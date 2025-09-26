document.addEventListener("DOMContentLoaded", () => {
  // data tarian tiap provinsi (38 data)
  const danceData = [
    {
      id: 1,
      name: "Tari Saman",
      region: "sumatra",
      province: "Aceh",
      description: "Tarian seribu tangan khas Aceh, penuh kekompakan, kecepatan, dan makna religius. Biasanya dibawakan dalam acara adat atau penyambutan tamu.",
      image: "img/tari-saman.png",
      video: "https://www.youtube.com/embed/q-8tMZKBgrA"
    },
    {
      id: 2,
      name: ""
    }
  ];

  // ngambil element dr html
  const contentGrid = document.getElementById("contentGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");

  // bikin pop up
  const modal = document.createElement("div");
  modal.id = "detailModal";
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="modalTitle"></h2>
      <div id="modalMedia"></div>
      <p id="modalDescription"></p>
    </div>
  `;
  document.body.appendChild(modal);

  // ngambil elemen di dlm modal
  const modalTitle = modal.querySelector("#modalTitle");
  const modalMedia = modal.querySelector("#modalMedia");
  const modalDescription = modal.querySelector("#modalDescription");
  const closeModal = modal.querySelector(".close");

  const renderCards = (data) => {
    contentGrid.innerHTML = ""; // grid dibersihin biar gk numpuk
    if (data.length === 0) {
      contentGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center">Tidak ada tarian ditemukan.</p>`;
      return;
    } // cek datanya kosong ap gk

    data.forEach(item => { // jalanin fungsi buat tiap objek di array
      // bikin div bru buat 1 tarian
      const card = document.createElement("div");
      card.className = `card ${item.region}`;
      // html
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-body">
          <h3>${item.name}</h3>
          <p><strong>${item.province}</strong></p>
          <p>${item.description.substring(0, 80)}...</p>
        </div>
      `;

      // buka popup
      card.addEventListener("click", () => {
        modal.style.display = "block"; // nambilin popup
        //pas buka pop up judulnya jd nama item - provinsi & munculin deskripsi
        modalTitle.innerText = item.name + " - " + item.province;
        modalDescription.innerText = item.description;

        modalMedia.innerHTML = ""; // biar gk numpuk sm popup laen
        // otomatis nampilin di popup vid utube, klo gda nnti nampilin gambar aja
        if (item.video) {
          const iframe = document.createElement("iframe");
          iframe.src = item.video + "?autoplay=1";
          iframe.width = "100%";
          iframe.height = "315";
          iframe.frameBorder = "0";
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          modalMedia.appendChild(iframe);
        } else {
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.name;
          modalMedia.appendChild(img);
        }
      });

      contentGrid.appendChild(card); // klo isi card smua udh ad, masukin ke dlm container
    });
  };

  // filter wilayah
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filtered = category === "all"
        ? danceData
        : danceData.filter(item => item.region === category);

      renderCards(filtered);
    });
  });

  // search
  searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector(".filter-btn.active").dataset.category;

    const filtered = danceData.filter(item => {
      const isRegionMatch = activeCategory === "all" || item.region === activeCategory;
      const isSearchMatch =
        item.name.toLowerCase().includes(searchTerm) ||
        item.province.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm);

      return isRegionMatch && isSearchMatch;
    });

    renderCards(filtered);
  });

  // close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalMedia.innerHTML = ""; // biar video stop pas close
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalMedia.innerHTML = ""; // biar video stop pas close
    }
  });

  // render awal
  renderCards(danceData);
});