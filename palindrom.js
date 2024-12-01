function tampilkan() {
  let cleaned = document
    .getElementById("pall")
    .value.toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  // Membandingkan string asli dengan string yang dibalik
  const input = cleaned.split("").reverse().join("");
  let result =
    "Hasil: " + (cleaned === input ? "Palindrom" : "Bukan Palindrom");

  document.getElementById("result").innerHTML = result;
}
