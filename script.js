<script>
    // Получить элемент кнопки
    var navbarToggle = document.getElementById("navbarToggle");

    // Добавить к нему прослушиватель событий
    navbarToggle.addEventListener("click", function() {
        // Получить элемент навигации панели навигации
        var navbarNav = document.getElementById("navbarNav");

        // Переключить состояние отображения меню навигации
        if (navbarNav.style.display === "block") {
            navbarNav.style.display = "none";
        } else {
            navbarNav.style.display = "block";
        }
    });
</script>
//Получение элемента кнопки:


var navbarToggle = document.getElementById("navbarToggle");
//Этот код получает элемент кнопки по его идентификатору navbarToggle.
//Добавление прослушивателя событий:


navbarToggle.addEventListener("click", function() {
//Этот код добавляет прослушиватель событий click к кнопке.
//Переключение состояния отображения меню навигации:


var navbarNav = document.getElementById("navbarNav");

if (navbarNav.style.display === "block") {
    navbarNav.style.display = "none";
} else {
    navbarNav.style.display = "block";
}