const openBtn = document.getElementById('sidetoggle');
const curtain = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function() {
	curtain.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', function() {
	curtain.classList.remove('show-sidebar');
});
