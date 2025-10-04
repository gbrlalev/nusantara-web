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
      image: "img/tari-dincak-dambus.jpg",
      video: "https://www.youtube.com/embed/_dyIVuRxfmY"
    },
    {
      id: 10,
      name: "Tari Jogi",
      region: "sumatra",
      province: "Kepulauan Riau",
      description: "Tari Jogi merupakan sebuah tari yang berasal dari Batam, yang penyajian gerak tarinya didominasi oleh teknik goyang bahu dan pergerakan pinggul yang kentara. Ragam gerak dalam tari Jogi disebut sebagai rangkap yang berkaitan dengan kegiatan sehari-hari masyarakat Batam sebagai nelayan.",
      image: "img/tari-jogi.jpg",
      video: "https://www.youtube.com/embed/tgqthGF9r9s"
    },
    {
      id: 11,
      name: "Tari Topeng Betawi",
      region: "jawa",
      province: "DKI Jakarta",
      description: "Tari Topeng Betawi merupakan salah satu pertunjukan kesenian tradisional yang berasal dari masyarakat Betawi. Tarian ini biasanya dibawakan saat pementasan teater rakyat Topeng Betawi, bersamaan dengan musik, nyanyian, bebodoran (lawak), dan lakon (drama).",
      image: "img/tari-topeng-betawi.jpg",
      video: "https://www.youtube.com/embed/BbX60C0E0P4"
    },
    {
      id: 12,
      name: "Tari Jaipong",
      region: "jawa",
      province: "Jawa Barat",
      description: "Tarian Jaipong adalah tarian gabungan dari sejumlah kesenian tradisional, misalnya pencak silat, ketuk tilu, dan wayang golek. Dari situlah tarian ini populer sebagai tarian yang memiliki gerakan-gerakan yang unik, energik, dan sederhana.",
      image: "img/tari-jaipong.jpg",
      video: "https://www.youtube.com/embed/UO50In5y-ZU"
    },
    {
      id: 13,
      name: "Tari Gambyong",
      region: "jawa",
      province: "Jawa Tengah",
      description: "Tari Gambyong biasanya ditampilkan pada musim tanam dan panen padi sebagai penghormatan kepada Dewi Sri. Tarian tradisional ini biasanya dibawakan oleh dua wanita muda yang mengenakan gaun berwarna hijau.",
      image: "img/tari-gambyong.jpg",
      video: "https://www.youtube.com/embed/ua5ljHVBV64"
    },
    {
      id: 14,
      name: "Tari Serimpi",
      region: "jawa",
      province: "DI Yogyakarta",
      description: "Tari serimpi berasal dari Keraton di Jawa yaitu Keraton Yogyakarta dan juga Surakarta. Tarian ini menjadi salah satu media hiburan bagi para penonton yang sedang merasa emosi, lelah, maupun banyak pikiran.",
      image: "img/tari-serimpi.jpg",
      video: "https://www.youtube.com/embed/Xgx7-6TXyao"
    },
    {
      id: 15,
      name: "Tari Reog",
      region: "jawa",
      province: "Jawa Timur",
      description:"Reog merupakan salah satu kekayaan budaya Indonesia yang kaya akan sejarah dan keindahan seni. Tarian ini berasal dari Ponorogo, Jawa Timur, dan telah menjadi bagian tak terpisahkan dari kehidupan masyarakat setempat. Reog adalah tarian yang dilakukan di arena terbuka dan berfungsi sebagai hiburan rakyat. Namun, Reog bukan sekadar pertunjukan biasa; ia menyimpan unsur magis dan misteri yang membuatnya begitu memikat.",
      image: "img/tari-reog.jpg",
      video: "https://www.youtube.com/embed/no2IZi_8QKg"
    },
    {
      id: 16,
      name: "Tari Topeng Klana",
      region: "jawa",
      province: "Banten",
      description: "Tari Topeng Klana atau Topeng Kelana merupakan tarian yang berasal dari Cirebon, dan telah lama tumbuh juga di daerah-daerah sekitar Cirebon seperti Indramayu. Tarian ini merupakan bagian dari Tari Topeng Cirebon yang punya asal-usul. Klana sendiri merupakan salah satu dari lima jenis topeng dalam Tari Topeng Cirebon.",
      image: "img/tari-topeng-klana.jpg",
      video: "https://www.youtube.com/embed/7vK_DXm98vA"
    },
    {
      id: 17,
      name: "Tari Pendet",
      region: "bali-nusa",
      province: "Bali",
      description: "Tari Pendet pada awalnya merupakan tari pemujaan yang banyak diperagakan di pura, tempat ibadah umat Hindu di Bali, Indonesia. Tarian ini melambangkan penyambutan atas turunnya dewata ke alam dunia. Lambat-laun, seiring perkembangan zaman, para seniman Bali mengubah Pendet menjadi ucapan selamat datang, meski tetap mengandung anasir yang sakral-religius.",
      image: "img/tari-pendet.jpg",
      video: "https://www.youtube.com/embed/r93o8G3zEbc"
    },
    {
      id: 18,
      name: "Tari Lenggo",
      region: "bali-nusa",
      province: "Nusa Tenggara Barat",
      description: "Tari Lenggo adalah tarian yang sering ditarikan di lingkungan Kerajaan Bima atau kantor pemerintahan saat kedatangan tamu resmi. Tari klasik ditarikan oleh empat orang perempuan dan empat orang laki-laki. Di mana mereka mengenakan pakaian adat tradisional Kota Bima (baju bodo).",
      image: "img/tari-lenggo.avif",
      video: "https://www.youtube.com/embed/skzpwFFy1uM"
    },
    {
      id: 19,
      name: "Tari Cerana",
      region: "bali-nusa",
      province: "Nusa Tenggara Timur",
      description: "Tari cerana merupakan tari selamat datang atau tarian penyambutan yang khas dari Kupang, Provinsi Nusa Tenggara Timur (NTT). Tarian ini biasanya diakhiri dengan menyajikan sirih dan pinang di dalam cerana sebagai simbol dari penerimaan masyarakt terhadap tamunya dengan hati yang tulus, bersih dan penuh kasih.",
      image: "img/tari-cerana.jpeg",
      video: "https://www.youtube.com/embed/waXcbvkRNCo"
    },
    {
      id: 20,
      name: "Tari Ajat Temuai Datai",
      region: "kalimantan",
      province: "Kalimantan Barat",
      description: "Tari Ajat Temuai Datai adalah tari penyambutan khas Suku Dayak Iban di Provinsi Kalimantan Barat. Kata Ajat Temuai Datai diadopsi dari bahasa Dayak Mualang, salah satu sub etnis kelompok Dayak Iban. Ajat atau ngajat adalah tari kepahlawanan di kalangan Suku Dayak Iban di Indonesia, Malaysia, dan Brunei Darussalam.",
      image: "img/tari-ajat.jpg",
      video: "https://www.youtube.com/embed/8AUD2ZIJeDw"
    },
    {
      id: 21,
      name: "Tari Giring-giring",
      region: "kalimantan",
      province: "Kalimantan Tengah",
      description: "Tari giring-giring adalah tarian khas Ma'anyan yang mendiami daerah Kabupaten Barito Timur dan Kabupaten Barito Selatan provinsi Kalimantan Tengah. Tari giring-giring atau juga disebut Gangereng biasanya ditampilkan untuk menyambut tamu.",
      image: "img/tari-giring.webp",
      video: "https://www.youtube.com/embed/4XZn2l7IHDM"
    },
    {
      id: 22,
      name: "Tari Topeng Banjar",
      region: "kalimantan",
      province: "Kalimantan Selatan",
      description: "Tari Topeng Banjar merupakan salah satu kekayaan budaya yang memiliki nilai seni, sejarah, dan filosofi mendalam. Tarian ini bukan sekadar hiburan, tapi sarat pesan dan makna. Di tengah arus modernisasi, Tari Topeng Banjar menjadi simbol penting dalam menjaga jati diri masyarakat Kalimantan Selatan.",
      image: "img/tari-topeng-banjar.jpeg",
      video: "https://www.youtube.com/embed/_ENzOptCRQ4"
    },
    {
      id: 23,
      name: "Tari Hudoq",
      region: "kalimantan",
      province: "Kalimantan Timur",
      description: "Hudoq adalah ritual tarian bertopeng yang melambangkan doa permohonan/ syukur agar mendapatkan hasil pertanian yang melimpah dan terhindar dari hama, yang digelar oleh sub-etnis Dayak di provinsi Kalimantan Timur. Tari Hudoq menggunakan topeng dan kostum, oleh sebab itu Hudoq termasuk golongan kesenian tari topeng.",
      image: "img/tari-hudoq.webp",
      video: "https://www.youtube.com/embed/nVM10FmnTEc"
    },
    {
      id: 24,
      name: "Tari Blunde",
      region: "kalimantan",
      province: "Kalimantan Utara",
      description: "Tari Blunde (atau Blundik) adalah tarian tradisional yang berasal dari suku Dayak di Kalimantan Utara. Tarian ini biasanya dipentaskan dalam upacara adat, seperti perayaan panen, penyambutan tamu, atau festival kebudayaan. Tari Blunde menggambarkan semangat kebersamaan, syukur, dan penghormatan terhadap alam serta leluhur.",
      image: "img/tari-blunde.jpg",
      video: "https://www.youtube.com/embed/vSF5PLVCQ8E"
    },
    {
      id: 25,
      name: "Tari Maengket",
      region: "sulawesi",
      province: "Sulawesi Utara",
      description: "Tari Maengket adalah tarian tradisional masyarakat suku Minahasa di Sulawesi Utara, yang awalnya berfungsi sebagai ungkapan rasa syukur kepada Tuhan atas hasil panen. Nama Maengket sendiri berasal dari kata engket yang berarti mengangkat tumit kaki naik turun, menunjukkan gerakan dasar tarian tersebut.",
      image: "img/tari-maengket.webp",
      video: "https://www.youtube.com/embed/Tfzf9rX1OfQ"
    },
    {
      id: 26,
      name: "Tari Pamonte",
      region: "sulawesi",
      province: "Sulawesi Tengah",
      description: "Tari Pamonte adalah tari tradisional masyarakat Suku Kaili, Sulawesi Tengah yang ditampilkan sebagai penyambutan musim panen.Tari Pamonte diakui secara resmi sebagai Warisan Budaya Takbenda Indonesia dalam bentuk seni pertunjukan melalui SK No. 1044/P/2020.",
      image: "img/tari-pamonte.jpg",
      video: "https://www.youtube.com/embed/MfG35AAnXXw"
    },
    {
      id: 27,
      name: "Tari Kipas Pakarena",
      region: "sulawesi",
      province: "Sulawesi Selatan",
      description: "Tari Kipas Pakarena adalah tari tradisional klasik dari Gowa, Sulawesi Selatan, yang menggambarkan kelembutan, kesetiaan, dan kesopanan perempuan Bugis Makassar, serta menceritakan kisah perpisahan khayangan (Boting Langi) dengan bumi (Lino).",
      image: "img/tari-kipas-pakarena.jpeg",
      video: "https://www.youtube.com/embed/46F0YjcvvpM"
    },
    {
      id: 28,
      name: "Tari Lulo",
      region: "sulawesi",
      province: "Sulawesi Tenggara",
      description: "Tari Lulo adalah tarian tradisional suku Tolaki dari Sulawesi Tenggara yang bermakna ungkapan syukur, persatuan, dan kasih sayang, serta berfungsi sebagai media untuk mencari jodoh dan mempererat tali persaudaraan.",
      image: "img/tari-lulo.jpg",
      video: "https://www.youtube.com/embed/axWYJPeq9FM"
    },
    {
      id: 29,
      name: "Tari Saronde",
      region: "sulawesi",
      province: "Gorontalo",
      description: "Tari Saronde adalah tarian tradisional dari Gorontalo yang berasal dari tradisi malam pertunangan dalam upacara pernikahan adat. Tarian ini dulunya berfungsi sebagai cara calon mempelai pria untuk mengenal calon istrinya yang tidak bisa bertemu secara langsung. Tarian dilakukan berpasangan pria dan wanita dengan gerakan mengayunkan tangan dan kaki sambil memegang selendang, diiringi musik rebana dan lagu berbahasa Arab.",
      image: "img/tari-saronde.webp",
      video: "https://www.youtube.com/embed/46QylIVFRmA"
    },
    {
      id: 30,
      name: "Tari Sayyang Pattuqduq",
      region: "sulawesi",
      province: "Sulawesi Barat",
      description: "Sayyang Pattuqduq (atau Sayyang Pattudu) adalah tradisi kuda menari dari masyarakat Suku Mandar di Sulawesi Barat, di mana kuda yang telah terlatih dihias dan ditunggangi anak perempuan untuk diarak keliling kampung.",
      image: "img/tari-sayyang-pattuqduq.jpeg",
      video: "https://www.youtube.com/embed/RwN185K3j3E"
    },
    {
      id: 31,
      name: "Tari Cakalele",
      region: "maluku",
      province: "Maluku",
      description: "Cakalele adalah tarian perang tradisional Maluku yang digunakan untuk menyambut tamu ataupun dalam perayaan adat.Biasanya, tarian ini dibawakan oleh 30 pria dan wanita.[2] Tarian ini dilakukan secara berpasangan dengan iringan musik drum, suling, bia (sejenis musik tiup).",
      image: "img/tari-cakalele.jpg",
      video: "https://www.youtube.com/embed/dDLsSW0sU2I"
    },
    {
      id: 32,
      name: "Tari Gumatere",
      region: "maluku",
      province: "Maluku Utara",
      description: "Tari Gumatere adalah tarian tradisional dari Pulau Morotai, Maluku Utara, yang berfungsi sebagai ritual untuk meminta petunjuk atas suatu persoalan atau fenomena alam. Tarian ini biasanya menampilkan 13 hingga 30 penari pria dan wanita, di mana penari pria menggunakan pedang atau tombak dan penari wanita menggunakan lenso (selendang).",
      image: "img/tari-gumatere.jpg",
      video: "https://www.youtube.com/embed/w3MTLQI_vIg"
    },
    {
      id: 33,
      name: "Tari Tumbu Tanah",
      region: "papua",
      province: "Papua Barat",
      description: "Tari Tumbu Tanah adalah tarian tradisional masyarakat Arfak di Manokwari, Papua Barat, yang merupakan ekspresi budaya dan jati diri suku tersebut. Tarian ini dipentaskan untuk acara penting seperti penyambutan tamu, kemenangan perang, dan pesta pernikahan, serta sebagai wujud rasa syukur kepada leluhur dan roh nenek moyang.",
      image: "img/tari-tumbu-tanah.jpg",
      video: "https://www.youtube.com/embed/IIJZXJd0XzM"
    },
    {
      id: 34,
      name: "Tari Awaijale Rilejale",
      region: "papua",
      province: "Papua",
      description: "Tari Awaijale Rilejale adalah tarian tradisional dari masyarakat suku Sentani di Kabupaten Jayapura, Papua, yang menggambarkan keindahan Danau Sentani saat senja ketika warga pulang bekerja menggunakan perahu. Tarian ini dibawakan oleh sekelompok penari pria dan wanita yang mengenakan pakaian adat Pea Malo yang terbuat dari serat pohon genemo, kulit kayu, dan daun sagu, serta dihiasi kalung manik-manik.",
      image: "img/tari-awaijale.png",
      video: "https://www.youtube.com/embed/qT6hqPkqQ7M"
    },
    {
      id: 35,
      name: "Tari Seka",
      region: "papua",
      province: "Papua Selatan",
      description: "Tarian di Papua Selatan yang paling dikenal adalah Tari Seka, tarian masyarakat pesisir di wilayah Timika, Kaimana, dan Fakfak. Tarian ini mengekspresikan rasa syukur kepada Tuhan atas hasil panen, atau melambangkan semangat juang, serta juga digunakan untuk menyambut tamu dan acara pergaulan.",
      image: "img/tari-seka.jpeg",
      video: "https://www.youtube.com/embed/M3yCjKXdR4M"
    },
    {
      id: 36,
      name: "Tari Salawaku",
      region: "papua",
      province: "Papua Tengah",
      description: "Salawaku merupakan tarian yang berasal dari daerah Mimika, provinsi Papua Tengah. Tarian ini dibawakan oleh berpuluh-puluh penari pria dan wanita. Tari Salawaku menggambarkan sepasang pria dan wanita yang dalam suatu perjalanan yang dikejar-kejar oleh sekelompok manusia.",
      image: "img/tari-salawaku.jpg",
      video: "https://www.youtube.com/embed/j8iKOgoQExg"
    },
    {
      id: 37,
      name: "Tari Wisisi",
      region: "papua",
      province: "Papua Pegunungan",
      description: "Tarian Papua Pegunungan yang populer adalah Tari Wisisi, yang baru-baru ini memecahkan rekor MURI dan melibatkan banyak peserta dari berbagai kabupaten. Tarian ini unik karena menggabungkan budaya lokal dengan musik modern, sehingga sangat menarik dan enerjik. Tarian Wisisi dapat menjadi tarian yang mewakili semangat dan kebudayaan masyarakat Papua Pegunungan.",
      image: "img/tari-wisisi.jpg",
      video: "https://www.youtube.com/embed/fnSo6_vdbUo"
    },
    {
      id: 38,
      name: "Tari Aluyen",
      region: "papua",
      province: "Papua Barat Daya",
      description: "Tari Aluyen adalah tarian tradisional suku Moi dari Distrik Aimas, Kabupaten Sorong, Papua Barat Daya, yang berasal dari dua kata alu (lagu) dan yen (dinyanyikan). Tarian ini merupakan bagian dari upacara adat untuk pembangunan rumah baru atau kebun baru, dipimpin oleh seorang penari pria dengan penari wanita dan pria di belakangnya, dan menampilkan gerakan berjalan sambil bergoyang pinggul.",
      image: "img/tari-aluyen.jpg",
      video: "https://www.youtube.com/embed/px6WUZWpnJA"
    },
  ];

  // ngambil element dr html
  const contentGrid = document.getElementById("contentGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");

  // ambil daftar favorites dari localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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

       // cek apakah tarian ini ada di favorites
      const isFavorite = favorites.some(fav => fav.id === item.id);
      const heart = isFavorite ? "❤️" : "🤍";

      // html
      card.innerHTML = `
      <span class="favorite-icon">${heart}</span>
        <img src="${item.image}" alt="${item.name}">
        <div class="card-body">
          <h3>${item.name}</h3>
          <p><strong>${item.province}</strong></p>
          <p>${item.description.substring(0, 80)}...</p>
        </div>
      `;

      // klik gambar/card buka popup
      card.querySelector("img").addEventListener("click", () => openModal(item));

      // klik hati toggle favorites
      const favIcon = card.querySelector(".favorite-icon");
      favIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // biar gak buka modal
        toggleFavorite(item, favIcon);
      });

      contentGrid.appendChild(card); // klo isi card smua udh ad, masukin ke dlm container
    });
  };

  // buka modal
  const openModal = (item) => {
    modal.style.display = "block";
    modalTitle.innerText = item.name + " - " + item.province;
    modalDescription.innerText = item.description;

    modalMedia.innerHTML = "";
    if (item.video) {
      const iframe = document.createElement("iframe");
      iframe.src = item.video + "?autoplay=1";
      iframe.width = "100%";
      iframe.height = "315";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      modalMedia.appendChild(iframe);
    } else {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      modalMedia.appendChild(img);
    }
  };

  // toggle favorites
  const toggleFavorite = (item, iconEl) => {
    const index = favorites.findIndex(fav => fav.id === item.id);
    if (index === -1) {
      favorites.push(item);
      iconEl.textContent = "❤️";
    } else {
      favorites.splice(index, 1);
      iconEl.textContent = "🤍";
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  // filter wilayah
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // kalau klik tab Favorites
      if (category === "favorites") {
        renderCards(favorites);
        return;
      }

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