document.getElementById("drawButton").addEventListener("click", () => {
  const total = 22;
  const count = 4;
  const numbers = new Set();

  while (numbers.size < count) {
    const rand = Math.floor(Math.random() * total) + 1;
    numbers.add(rand);
  }

  const selected = [...numbers].sort((a, b) => a - b);
  const resultText = selected.map(n => `<b>${n}번</b>`).join(" 🎯 ");

  // SweetAlert2 with casino style
  Swal.fire({
    title: '💥 오늘의 청소당번!',
    html: `<div style="font-size:22px; color:#f1c40f;">${resultText}</div>`,
    background: '#1b1b1b',
    color: '#f1f1f1',
    icon: 'info',
    confirmButtonText: '🎲 다시 뽑기',
    confirmButtonColor: '#e74c3c',
    backdrop: `rgba(0,0,0,0.85)`
  });

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `💡 선택된 번호: ${selected.join(', ')}번`;
  resultEl.classList.remove("hidden");
});
