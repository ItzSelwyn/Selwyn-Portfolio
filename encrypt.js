(function() {
  const parts = ["m", "o", "c", ".", "s", "a", "d", "u", "s", "e", "j", "n", "y", "w", "l", "e", "s", "@", "t", "c", "a", "t", "n", "o", "c"];
  const email = parts.reverse().join("");
  const link = document.getElementById("email-link");
  link.href = "mailto:" + email;
  link.textContent = email;
})();

(function() {
  const phoneParts = ["1", "0", "7", "3", "4", "1", "2", "4", "3", "9", " ", "1", "9", "+"];  
  const phone = phoneParts.reverse().join("");
  const link = document.getElementById("phone-link");
  link.href = "tel:" + phone.replace(/\s+/g, '');
  link.textContent = phone;
})();