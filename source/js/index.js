const authorizationBtn = document.querySelector('.header__bar-authorization');
const authorizationModal = document.querySelector('.authorization');
const authorizationCloseBtn = document.querySelector('.authorization__close');

authorizationBtn.addEventListener('click', function (e) {
	e.preventDefault();
	authorizationModal.classList.add('authorization--active');
});
authorizationCloseBtn.addEventListener('click', function (e) {
	e.preventDefault();
	authorizationModal.classList.remove('authorization--active');
});
