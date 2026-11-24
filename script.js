// GANTI nomor di bawah dengan nomor WhatsApp admin.
 // Format: kode negara + nomor, tanpa tanda +, spasi, atau angka 0 di depan.
const WHATSAPP_NUMBER = "6281234567890";

document.querySelectorAll(".wa-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "6281234567890") {
      alert("Silakan ganti nomor WhatsApp admin di file script.js terlebih dahulu.");
      return;
    }
    const message = link.dataset.message || "Halo BEKUT COD, saya mau tanya stok motor.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => navMenu.classList.remove("open"));
});
