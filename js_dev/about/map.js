if ($('.about-map').length >= 1) {
function init () {
    /**
     * Создаем мультимаршрут.
     * Первым аргументом передаем модель либо объект описания модели.
     * Вторым аргументом передаем опции отображения мультимаршрута.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml
     */
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Описание опорных точек мультимаршрута.
        referencePoints: [
            
            [59.991394, 30.159678],
            [60.171136, 29.281416]
        ],
        // Параметры маршрутизации.
        params: {
            // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
            results: 1, 
        }
    }, {

        wayPointStartIconColor: "#333",
        wayPointStartIconFillColor: "#B3B3B3",
        // Задаем собственную картинку для последней путевой точки.
        wayPointStartIconLayout: "default#image",
        wayPointStartIconImageHref: "img/n.svg",        
        wayPointFinishIconLayout: "default#image",
        wayPointFinishIconImageHref: "img/n.svg",
        wayPointFinishIconImageSize: [30, 30],
        wayPointFinishIconImageOffset: [-15, -15],

        viaPointIconRadius: 7,
        viaPointIconFillColor: "transparent",
        viaPointActiveIconFillColor: "transparent",
        // Транзитные точки можно перетаскивать, при этом
        // маршрут будет перестраиваться.
        viaPointDraggable: true,
        // Позволяет скрыть иконки транзитных точек маршрута.
        // viaPointVisible:false,

        // Внешний вид точечных маркеров под путевыми точками.
        pinIconFillColor: "#000088",
        pinActiveIconFillColor: "#B3B3B3",
        // Позволяет скрыть точечные маркеры путевых точек.
        // pinVisible:false,

        // Внешний вид линии маршрута.
        routeStrokeWidth: 2,
        routeStrokeColor: "#000088",
        routeActiveStrokeWidth: 6,
        routeActiveStrokeColor: "#009bc0",

        // Внешний вид линии пешеходного маршрута.
        routeActivePedestrianSegmentStrokeStyle: "solid",               
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: false
    });


    function customizeSecondPoint() {
        /**
         * Ждем, пока будут загружены данные мультимаршрута и созданы отображения путевых точек.
         * @see https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel-docpage/#event-requestsuccess
         */
        multiRoute.model.events.once("requestsuccess", function () {
            var yandexWayPoint = multiRoute.getWayPoints().get(1);
            // Создаем балун у метки второй точки.
            ymaps.geoObject.addon.balloon.get(yandexWayPoint);
            yandexWayPoint.options.set({
                preset: "islands#grayStretchyIcon",
                iconContentLayout: ymaps.templateLayoutFactory.createClass(
                    '<span style="color: red;">Я</span>ндекс'
                ),
                balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                    '{{ properties.address|raw }}'
                )
            });
        });
    }    

    // Создаем кнопки для управления мультимаршрутом.
    var trafficButton = new ymaps.control.Button({
            data: { content: "Учитывать пробки" },
            options: { selectOnClick: true }
        }),


        viaPointButton = new ymaps.control.Button({
            data: { content: "Добавить транзитную точку" },
            options: { selectOnClick: true }
        });

    // Объявляем обработчики для кнопок.
    trafficButton.events.add('select', function () {
        /**
         * Задаем параметры маршрутизации для модели мультимаршрута.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setParams
         */
        multiRoute.model.setParams({ avoidTrafficJams: true }, true);
    });

    trafficButton.events.add('deselect', function () {
        multiRoute.model.setParams({ avoidTrafficJams: false }, true);
    });

    viaPointButton.events.add('select', function () {
        var referencePoints = multiRoute.model.getReferencePoints();
        referencePoints.splice(1, 0, "коттеджный поселок Морские Террасы");
        /**
         * Добавляем транзитную точку в модель мультимаршрута.
         * Обратите внимание, что транзитные точки могут находится только
         * между двумя путевыми точками, т.е. не могут быть крайними точками маршрута.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setReferencePoints
         */
        multiRoute.model.setReferencePoints(referencePoints, [1]);
    });

    viaPointButton.events.add('deselect', function () {
        var referencePoints = multiRoute.model.getReferencePoints();
        referencePoints.splice(1, 1);
        multiRoute.model.setReferencePoints(referencePoints, []);
    });

    // Создаем карту с добавленными на нее кнопками.

    var myMap = new ymaps.Map('map', {
        center: [60.059083, 29.745107],
        zoom: $(window).width() < 768 ? 8 : 10,
        controls: [trafficButton, viaPointButton, 'zoomControl']
    }, {
        buttonMaxWidth: 300
    });

    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [60.159768, 29.279558],
            [60.162936, 29.280358],
            [60.163171, 29.281302],
            [60.164839, 29.281302],
            [60.170391, 29.278463],
            [60.172551, 29.289235],
            [60.166419, 29.288828],
            [60.166398, 29.291059],
            [60.160238, 29.291488],
            [60.159768, 29.279558]
        
        ],
        // Координаты вершин внутреннего контура.

    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
       
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#009bc0',
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 0
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);
    

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([60.172354, 29.281138], {
            hintContent: 'Коттеджный поселок Морские Террасы',
            // balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo.png',
            // Размеры метки.
            iconImageSize: [130, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-60, -50]
        }),




    myMap.geoObjects
        .add(myPlacemark)    

    // Добавляем мультимаршрут на карту.
    myMap.behaviors.disable('scrollZoom')
    // myMap.setZoom(5)
    myMap.geoObjects.add(multiRoute);
}
 

ymaps.ready(init);    
}


if ($('.top-image--contact-page').length >= 1) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.965663, 30.306448],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.964512, 30.306481], {
            hintContent: 'Офис',
            balloonContent: '197136 Санкт-Петербург, ул. Бармалеева, 11'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/bable_shadow.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

      
    myMap.behaviors.disable('scrollZoom')
    myMap.geoObjects
        .add(myPlacemark)
});     
}