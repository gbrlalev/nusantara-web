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
      name: "Tari Tortor",
      region: "sumatra",
      province: "Sumatra Utara",
      description: "Tortor adalah jenis tarian tradisional masyarakat Batak yang berasal dari provinsi Sumatera Utara. Tortor merupakan bagian penting dalam upacara adat (ulaon adat) masyarakat Batak. Melalui Tortor, masyarakat Batak menyampaikan harapan dan doa-doanya. Peragaan sikap dan perasaan melalui Tortor selalu menggambarkan kondisi dan situasi yang dialami.",
      image: "img/tari-tortor.jpg",
      video: "https://www.youtube.com/embed/TwMi6YFwZt8"
    },
    {
      id: 3,
      name: "Tari Paring",
      region: "sumatra",
      province: "Sumatra Barat",
      description: "Tari piring adalah tarian tradisional Minangkabau yang berasal dari Sumatera Barat, Solok. Tarian ini menampilkan atraksi menggunakan piring. Para penari mengayunkan piring di tangan mengikuti gerakan-gerakan cepat yang teratur, tanpa satu pun piring terlepas dari tangan. Gerakannya diambil dari langkah dalam silat Minangkabau atau silek.",
      image: "img/tari-piring.png",
      video: "https://www.youtube.com/embed/1O_OYwnV6iw"
    },
    {
      id: 4,
      name: "Tari Zapin",
      region: "sumatra",
      province: "Riau",
      description: "Tari zapin adalah tarian yang berasal dari provinsi Riau, Indonesia. Tarian ini sejatinya berasal dari dataran Timur tengah, khususnya tanah Arab. Namun, tarian ini dibawa oleh para pedagang dalam perjalannya menjual rempah-rempah.",
      image: "img/tari-zapin.webp",
      video: "https://www.youtube.com/embed/GINseLXDLEI"
    },
    {
      id: 5,
      name: "Tari Sekapur Sirih",
      region: "sumatra",
      province: "Jambi",
      description: "Tari Sekapur Sirih adalah salah satu tarian tradisional yang berasal dari daerah Jambi. Tarian ini termasuk jenis tarian penyambutan yang biasanya ditarikan oleh para penari wanita. Dengan berpakaian adat serta diiringi oleh alunan musik pengiring, mereka menari dengan gerakannya yang lemah lembut dan membawakan cerano (wadah) sebagai tanda persembahan.",
      image: "img/tari-sekapur-sirih.jpg",
      video: "https://www.youtube.com/embed/bcrGPCtzpgk"
    },
    {
      id: 6,
      name: "Tari Gending Sriwijaya",
      region: "sumatra",
      province: "Sumetra Selatan",
      description: "Tari tradisional yang sangat indah dan menawan, dengan maksud mulia dan kemurahan hati dalam menyambut tamu, yakni tari Gending Sriwijaya. Tarian ini memang tampak begitu mewah dan elegan. Meski begitu, kerendahhatian dan gotong royong kental terkandung di dalamnya.",
      image: "img/tari-gending-sriwijaya.jpg",
      video: "https://www.youtube.com/embed/_iOgonp5hEk"
    },
    {
      id: 7,
      name: "Tari Andun",
      region: "sumatra",
      province: "Bengkulu",
      description: "Tari Andun merupakan salah satu tari rakyat yang berasal dari Bengkulu. Tari Andun adalah bagian dari persyaratan wajib ketika melaksanakan upacara adat Nundang Padi. Pada umumnya, tari Andun dipentaskan di lapangan terbuka yang lebar dan gerakan tariannya berupa gerak sembah, gerak puji serta gerak saling tindih.",
      image: "img/tari-andun.jpeg",
      video: "https://www.youtube.com/embed/6ItJIufEC-M"
    },
    {
      id: 8,
      name: "Tari Bedana",
      region: "sumatra",
      province: "Lampung",
      description: "Tari Bedana merupakan salah satu tarian tradisional Zapin Melayu yang berasal dari daerah Lampung. Tari Bedana biasanya dibawakan oleh pemuda-pemudi Lampung dalam acara tertentu sebagai bentuk cerminan bahwa masyarakat Lampung mudah bergaul dalam keseharian sebagaimana dalam piil pesenggiri, nengah nyappur tetapi tetap berpedoman pada agama. Tari Bedana memiliki ciri khusus pada adat Lampung Pepadun maupun adat Lampung Saibatin.",
      image: "img/tari-bedana.jpg",
      video: "https://www.youtube.com/embed/-M2a8EqsYB0"
    },
    {
      id: 9,
      name: "Tari Dincak Dambus",
      region: "sumatra",
      province: "Kepulauan Bangka Belitung",
      description: "Tari Dincak Dambus dalam gerak tarinya diciptakan banyak ragam dan rentak dincak tarian yang bervariasi sesuai dengan tuntutan sang penata tari dengan bermacam-macam pola gerak yang dinamis dan gemulai namun tegas mencerminkan kegembiraan dan keceriaan muda mudi Bangka dalam pergaulan sehari-harinya.",
      image: "img/tari-bedana.jpg",
      video: "https://www.youtube.com/embed/_dyIVuRxfmY"
    },
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