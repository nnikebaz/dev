$(document).ready(function () {
  function stepSelect() {
    console.log("Фунец");
    let stepsButton = [
      "#step-1",
      "#step-2",
      "#step-3",
      "#step-4",
      "#step-5",
      "#step-6",
    ];

    stepsButton.forEach(function (step) {
      $(step).click(function (event) {
        event.preventDefault();

        let contentId = $(this).data("target");

        $(contentId).addClass("active").siblings().removeClass("active");

        $(stepsButton.join(", ")).css("border", ".1rem solid #fff");
        $(this).css("border", ".2rem solid #92FAE7");
      });
    });
  }

  function noUpdateSite() {
    $('form').submit(function(event) {
      event.preventDefault()
    })
  }

  function validate() {
    function maskNumber() {
      $('#phone').mask('+7(000)000-00-00');
    }

    maskNumber();

      $(".validate").validate({
        rules: {
          name: {
            required: true,
            minlength: 3,
          },
          phone: {
            required: true,
            minlength: 16,
          }
        },
        messages: {
          name: "Пожалуйста, заполните своё имя.",
          phone: 'Пожалуйста, заполните корректно номер телефона.'
        },
        highlight: function (element) {
          $(element).addClass("inputError");
        },
        unhighlight: function (element) {
          $(element).removeClass("inputError");
        }
      });

      $('#btn-form').click(function(){
        console.log($('form').valid())
      })
  }

  function Smooth () {

    SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 400,
    // Размер шага в пикселях 
    stepSize         : 75,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})
  }

  function dragElipse () {

    let parallaxScene1 = document.getElementById('parallax-scene-1');
    let parallaxInstance1 = new Parallax(parallaxScene1, {
      limitX: false,
      limitY: false,
      scalarX: 20,
      scalarY: 60,
      invertX: false,
      invertY: false,
    });
    let parallaxScene2 = document.getElementById('parallax-scene-2');
    let parallaxInstance2 = new Parallax(parallaxScene2, {
      limitX: 150,
      limitY: false,
      scalarX: 5,
      scalarY: 20,
      invertX: false,
      invertY: false,
    });

  }

  stepSelect();
  noUpdateSite();
  validate();
  Smooth();
  dragElipse();
  
});
