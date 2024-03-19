function showToast(message, duration = 5000) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
  
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  }
  
  const button = document.getElementById("show-toast");
  button.addEventListener("click", () => {
    showToast("Sent Successfully");
  });