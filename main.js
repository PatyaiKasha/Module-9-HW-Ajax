$(document).ready(function() {
    $('.task-1').on('click', myFunction1);
    $('.task-2').on('click', myFunction2);
    $('.idealWeight1').on('click', myFunction3); // task-3
    $('.idealWeight2').on('click', myFunction4); // task-4
    $('.task-5').on('click', myFunction5);
    $('.task-6').on('click', myFunction6);
});
// Задание 1. Передайте на сервер два числа методом POST. Имена чисел – num1 и num2. Цель — файл a1.php. Если все выполнено верно, то будет возвращена строка с суммой чисел, если нет – ошибка. Способ передачи – AJAX.

function myFunction1() {
    $.post(
        'a1.php', // куда посылаю ?
        {
            'num1': 7,
            'num2': 9
        }, // что посылаю ?
        function(data) { // что с этим делать ?
            console.log(data);
        }
    );
}

// Задание 2. Передайте на сервер свой год рождения в формате XXXX. Передачу осуществляйте методом POST, имя переменной year, имя целевого файла – a2.php. Если все выполнено верно, то сервер вернет строку в которой будет количество прожитых лет, если нет – ошибку. Способ передачи – AJAX.

function myFunction2() {
    $.post(
        'a2.php', // куда посылаю ?
        {
            'year': 1983
        }, // что посылаю ?
        function(data) { // что с этим делать ?
            console.log(data);
        }
    );
}

// Задание 3. Создайте форму с radiobutton для выбора пола (мужчина или женщина). Добавьте поле для ввода роста (в сантиметрах). По нажатию кнопки “Идеальный вес”, пошлите запрос на файл a3.php. На сервер передается параметр пол – имя параметра sex, значения man или woman и рост ( имя height). Передача осуществляется методом AJAX, с помощью POST.
//
// Если все выполнено правильно, то будет возвращена строка с расчетом идеального веса под заданный пол. В противном случае – ошибка.

function myFunction3() {
    $.post(
        'a3.php', // куда посылаю ?
        {
            'sex': $('input[name=sex]:checked').val(),
            'height': $('#height1').val()
        }, // что посылаю ?
        function(data) { // что с этим делать ?
            console.log(data);
        }
    );
}

// Задание 4. Измените предыдущее значение, чтобы рост задавался с помощью ползунка range.

$('#height2').on('change', function() {
    $('#rangeW').text($('#height2').val() + ' cm.');
});

// $('#height2').on('change', function() {
//     $('#rangeW').html($('#height2').val());
// });

function myFunction4() {

    $.post(
        'a3.php', // куда посылаю ?
        {
            'sex': $('input[name=sex]:checked').val(),
            'height': $('#height2').val()
        }, // что посылаю ?
        function(data) { // что с этим делать ?
            console.log(data);
        }
    );
}

// Задание 5. Создайте форму с полями:
//
// fio – поле ввода для имени и фамилии;
// email – поле ввода для email адреса
// phone – поле ввода для телефона
// По нажатию кнопки передайте данные из полей ввода на сервер (mail.php) посредством POST (AJAX). Имена переменных – такие, как указано в списке. Если все сделано верно, то по адресу указанному в файле mail.php в переменной $to будет отправлено письмо, если нет – выведена ошибка.
//
// Возвращаемый формат – строка.

function myFunction5() {
    $.post(
        'mail.php', // куда посылаю ?
        {
            'fio': $('#fio').val(),
            'email': $('#mail').val(),
            'phone': $('#phone').val()
        }, // что посылаю ?
        function(data) { // что с этим делать ?
            console.log(data);
        }
    );
}

// Задание 6. Пошлите на сервер (goods.php) методом GET артикул товара (art). Сервер реагирует только на 2 артикула (1 или 2). Если все выполнено верно то сервер пришлет вам JSON строку с описанием товара. После раскодировки (JSON.parse) вы сможете вывести поля:

// name – имя товара
// weight – вес товара
// cost – стоимость товара
// img – ссылка на картинку.

function myFunction6() {
    $.get(
        'goods.php', {
            'art': $('input[name=goods]:checked').val()
        },
        function(data) {
            var goods = JSON.parse(data);
            console.log(goods);
            var out = '';
            out += `
                <ul>           
                    <li>${goods.name}</li>
                    <li><img src="${goods.img}"></li>
                    <li>${goods.cost} $</li>
                    <li>${goods.weight} kg</li>
                </ul>
            `;
            $('.out6').html(out);
        }
    );
}