$(document).ready(function() {

    /*--  Handling home page typewriter js  --*/
    var txt = $('.writer').text();
    var timeOut;
    var txtLen = txt.length;
    var char = 0;
    $('.writer').text('|');
    (function typeIt() {
        var humanize = Math.round(Math.random() * (200 - 30)) + 30;
        timeOut = setTimeout(function() {
            char++;
            var type = txt.substring(0, char);
            $('.writer').text(type + '|');
            typeIt();
            if (char == txtLen) {
                $('.writer').text($('.writer').text().slice(0, -1)); // remove the '|'
                clearTimeout(timeOut);
            }

        }, humanize);
    }());

    $(".nex-click").click(function() {
        $("#home").hide();
    });

    /*--  Handling home page leftslide box  --*/
    setTimeout(function() {
        $('.open-file').css("display", "block");
        $('.open-file').addClass('animated slideInLeft');
    }, 6000);
    var dragcount = 0;
    var dragcountsecond = 0;
    $(".right-desc-1").draggable({revert: "invalid",
        scroll: true,
        start: function(event, ui) {
            dragcount = dragcount + 1;

        },
        stop: function(event, ui) {
            dragcountfunction();
        }
    });


    $(".right-head-1").droppable({
        accept: ".right-desc-1",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-1").position({
                my: "right center",
                at: "right center",
                of: ".right-head-1"
            });
        }

    });
    $(".right-desc-2").draggable({revert: "invalid",
        scroll: true,
        start: function(event, ui) {
            dragcount = dragcount + 1;
        },
        stop: function(event, ui) {
            dragcountfunction();
        }
    });
    $(".right-head-2").droppable({
        accept: ".right-desc-2",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-2").position({
                my: "right center",
                at: "right center",
                of: ".right-head-2"
            });
        }
    });
    $(".right-desc-3").draggable({revert: "invalid",
        start: function(event, ui) {
            dragcount = dragcount + 1;
        },
        stop: function(event, ui) {
            dragcountfunction();
        }
    });
    $(".right-head-3").droppable({
        accept: ".right-desc-3",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-3").position({
                my: "right center",
                at: "right center",
                of: ".right-head-3"
            });
        }
    });
    $(".right-desc-4").draggable({revert: "invalid",
        start: function(event, ui) {
            dragcount = dragcount + 1;
        },
        stop: function(event, ui) {
            dragcountfunction();
        }
    });
    $(".right-head-4").droppable({
        accept: ".right-desc-4",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-4").position({
                my: "right center",
                at: "right center",
                of: ".right-head-4"
            });
        }
    });
    function dragcountfunction() {
        if (dragcount == 4 || dragcount == 5) {
            var totallength = $(".your-rights-wrapper").children(".answer-found").length;
            if (totallength == 4) {
                $("#game-part-1").find(".write-message").removeClass("hidden");
                $('html, body').animate({
                    scrollTop: $("#game-part-1").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (dragcount == 6) {
            $("#game-part-1").find(".wrong-message").removeClass("hidden");
            $('html, body').animate({
                scrollTop: $("#game-part-1").offset().top - 70
            }, 1000);
            return false;
        }
    }


    $(".right-desc-5").draggable({revert: "invalid",
        start: function(event, ui) {
            dragcountsecond = dragcountsecond + 1;
        },
        stop: function(event, ui) {
            dragcountsecondfunction();
        }
    });
    $(".right-head-5").droppable({
        accept: ".right-desc-5",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-5").position({
                my: "right center",
                at: "right center",
                of: ".right-head-5"
            });
        }
    });
    $(".right-desc-6").draggable({revert: "invalid",
        start: function(event, ui) {
            dragcountsecond = dragcountsecond + 1;
        },
        stop: function(event, ui) {
            dragcountsecondfunction();
        }
    });
    $(".right-head-6").droppable({
        accept: ".right-desc-6",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-6").position({
                my: "right center",
                at: "right center",
                of: ".right-head-6"
            });
        }
    });
    $(".right-desc-7").draggable({revert: "invalid",
        start: function(event, ui) {
            dragcountsecond = dragcountsecond + 1;
        },
        stop: function(event, ui) {
            dragcountsecondfunction();
        }
    });
    $(".right-head-7").droppable({
        accept: ".right-desc-7",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-7").position({
                my: "right center",
                at: "right center",
                of: ".right-head-7"
            });
        }
    });
    $(".right-desc-8").draggable({revert: "invalid",
        start: function(event, ui) {
            dragcountsecond = dragcountsecond + 1;
        },
        stop: function(event, ui) {
            dragcountsecondfunction();
        }
    });
    $(".right-head-8").droppable({
        accept: ".right-desc-8",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".right-desc-8").position({
                my: "right center",
                at: "right center",
                of: ".right-head-8"
            });
        }
    });
    function dragcountsecondfunction() {
        if (dragcountsecond == 4 || dragcountsecond == 5) {
            var totallength1 = $(".game-part-2").children(".answer-found").length;
            if (totallength1 == 4) {
                $("#game-part-2").find(".write-message").removeClass("hidden");
                $('html, body').animate({
                    scrollTop: $("#game-part-2").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (dragcountsecond == 6) {
            $("#game-part-2").find(".wrong-message").removeClass("hidden");
            $('html, body').animate({
                scrollTop: $("#game-part-2").offset().top - 70
            }, 1000);
            return false;
        }
    }


    var choicedrgcount = 0;
    $(".choice-desc-1").draggable({revert: "invalid",
        start: function(event, ui) {
            choicedrgcount = choicedrgcount + 1;
        },
        stop: function(event, ui) {
            choicedrgcountfunction();
        }
    });
    $(".choice-head-1").droppable({
        accept: ".choice-desc-1",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".choice-desc-1").position({
                my: "right center",
                at: "right center",
                of: ".choice-head-1"
            });
        }

    });
    $(".choice-desc-2").draggable({revert: "invalid",
        start: function(event, ui) {
            choicedrgcount = choicedrgcount + 1;
        },
        stop: function(event, ui) {
            choicedrgcountfunction();
        }
    });
    $(".choice-head-2").droppable({
        accept: ".choice-desc-2",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".choice-desc-2").position({
                my: "right center",
                at: "right center",
                of: ".choice-head-2"
            });
        }
    });
    function choicedrgcountfunction() {
        if (choicedrgcount == 2 || choicedrgcount == 3) {
            var totallength2 = $(".your-choice-game").children(".answer-found").length;
            if (totallength2 == 2) {
                $("#your-choice-game").find(".write-message").removeClass("hidden");
                $('html, body').animate({
                    scrollTop: $("#your-choice-game").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (choicedrgcount == 4) {
            $("#your-choice-game").find(".wrong-message").removeClass("hidden");
            $('html, body').animate({
                scrollTop: $("#your-choice-game").offset().top - 70
            }, 1000);
            return false;
        }
    }

    var disclosuresdrgcount = 0;
    $(".disclosures1-desc-1").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosuresdrgcount = disclosuresdrgcount + 1;

        },
        stop: function(event, ui) {
            disclosuresdrgcountfunction();
        }
    });
    $(".disclosures1-head-1").droppable({
        accept: ".disclosures1-desc-1",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures1-desc-1").position({
                my: "right center",
                at: "right center",
                of: ".disclosures1-head-1"
            });
        }

    });
    $(".disclosures1-desc-2").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosuresdrgcount = disclosuresdrgcount + 1;

        },
        stop: function(event, ui) {
            disclosuresdrgcountfunction();
        }
    });
    $(".disclosures1-head-2").droppable({
        accept: ".disclosures1-desc-2",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures1-desc-2").position({
                my: "right center",
                at: "right center",
                of: ".disclosures1-head-2"
            });
        }
    });
    $(".disclosures1-desc-3").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosuresdrgcount = disclosuresdrgcount + 1;

        },
        stop: function(event, ui) {
            disclosuresdrgcountfunction();
        }
    });
    $(".disclosures1-head-3").droppable({
        accept: ".disclosures1-desc-3",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures1-desc-3").position({
                my: "right center",
                at: "right center",
                of: ".disclosures1-head-3"
            });
        }
    });
    function disclosuresdrgcountfunction() {
        if (disclosuresdrgcount == 3 || disclosuresdrgcount == 4) {
            var totallength3 = $(".your-disclosures-game").children(".answer-found").length;
            if (totallength3 == 3) {
                $("#disclosures-1-game").find(".write-message").removeClass("hidden");
                $('html, body').animate({
                    scrollTop: $("#disclosures-1-game").offset().top - 70
                }, 1000);
                return false;

            }
        }
        if (disclosuresdrgcount == 5) {
            $("#disclosures-1-game").find(".wrong-message").removeClass("hidden");
            $('html, body').animate({
                scrollTop: $("#disclosures-1-game").offset().top - 70
            }, 1000);
            return false;
        }
    }


    var disclosures3drgcount = 0;
    $(".disclosures2-desc-1").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosures3drgcount = disclosures3drgcount + 1;

        },
        stop: function(event, ui) {
            disclosures2drgcountfunction();
        }
    });
    $(".disclosures2-head-1").droppable({
        accept: ".disclosures2-desc-1",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures2-desc-1").position({
                my: "right center",
                at: "right center",
                of: ".disclosures2-head-1"
            });
        }

    });
    $(".disclosures2-desc-2").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosures3drgcount = disclosures3drgcount + 1;

        },
        stop: function(event, ui) {
            disclosures2drgcountfunction();
        }
    });
    $(".disclosures2-head-2").droppable({
        accept: ".disclosures2-desc-2",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures2-desc-2").position({
                my: "right center",
                at: "right center",
                of: ".disclosures2-head-2"
            });
        }
    });
    $(".disclosures2-desc-3").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosures3drgcount = disclosures3drgcount + 1;

        },
        stop: function(event, ui) {
            disclosures2drgcountfunction();
        }
    });
    $(".disclosures2-head-3").droppable({
        accept: ".disclosures2-desc-3",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures2-desc-3").position({
                my: "right center",
                at: "right center",
                of: ".disclosures2-head-3"
            });
        }
    });
    $(".disclosures2-desc-4").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosures3drgcount = disclosures3drgcount + 1;

        },
        stop: function(event, ui) {
            disclosures2drgcountfunction();
        }
    });
    $(".disclosures2-head-4").droppable({
        accept: ".disclosures2-desc-4",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures2-desc-4").position({
                my: "right center",
                at: "right center",
                of: ".disclosures2-head-4"
            });
        }
    });
    function disclosures2drgcountfunction() {
        if (disclosures3drgcount == 4 || disclosures3drgcount == 5) {
            var totallength4 = $(".your-disclosures2-game").children(".answer-found").length;
            if (totallength4 == 4) {
                $("#disclosures-2-game").find(".write-message").removeClass("hidden");
                $('html, body').animate({
                    scrollTop: $("#disclosures-2-game").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (disclosures3drgcount == 6) {
            $("#disclosures-2-game").find(".wrong-message").removeClass("hidden");
            jQuery("#disclosures-2-game input:radio").attr('disabled', true);
            $('html, body').animate({
                scrollTop: $("#disclosures-2-game").offset().top - 70
            }, 1000);
            return false;
        }
    }

    var disclosure4sdrgcount = 0;
    $(".disclosures3-desc-1").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosure4sdrgcount = disclosure4sdrgcount + 1;

        },
        stop: function(event, ui) {
            disclosures4drgcountfunction();
        }
    });
    $(".disclosures3-head-1").droppable({
        accept: ".disclosures3-desc-1",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures3-desc-1").position({
                my: "right center",
                at: "right center",
                of: ".disclosures3-head-1"
            });
        }

    });
    $(".disclosures3-desc-2").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosure4sdrgcount = disclosure4sdrgcount + 1;

        },
        stop: function(event, ui) {
            disclosures4drgcountfunction();
        }
    });
    $(".disclosures3-head-2").droppable({
        accept: ".disclosures3-desc-2",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures3-desc-2").position({
                my: "right center",
                at: "right center",
                of: ".disclosures3-head-2"
            });
        }
    });
    $(".disclosures3-desc-3").draggable({revert: "invalid",
        start: function(event, ui) {
            disclosure4sdrgcount = disclosure4sdrgcount + 1;

        },
        stop: function(event, ui) {
            disclosures4drgcountfunction();
        }
    });
    $(".disclosures3-head-3").droppable({
        accept: ".disclosures3-desc-3",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $(this).parent().addClass("answer-found");
            $(".disclosures3-desc-3").position({
                my: "right center",
                at: "right center",
                of: ".disclosures3-head-3"
            });
        }
    });
    function disclosures4drgcountfunction() {
        if (disclosure4sdrgcount == 3 || disclosure4sdrgcount == 4) {
            var totallength5 = $(".your-disclosures3-game").children(".answer-found").length;
            if (totallength5 == 3) {
                $("#disclosures-3-game").find(".write-message").removeClass("hidden");
                $(".your-disclosures3-game").next().next(".restart-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#disclosures-3-game").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (disclosure4sdrgcount == 5) {
            $("#disclosures-3-game").find(".wrong-message").removeClass("hidden");
            $('html, body').animate({
                scrollTop: $("#disclosures-3-game").offset().top - 70
            }, 1000);
            return false;
        }
    }

    /*-- Mobile Functionality --*/
    var clickcountRightGameOne = 0;
    var clickcountRightGameTwo = 0;
    var clickcountYourChoice = 0;
    var clickcountDisclosureOne = 0;
    var clickcountDisclosureTwo = 0;
    var clickcountDisclosureThree = 0;
    $("input.correct-option").click(function() {
        if ($(this).is(":checked")) {
            $(this).parent().addClass("radio-answer-found");
            $(".radio-answer-found").parent().prev(".panel").css("background-color", "rgba(0,255,0,0.6)");
            $(".radio-answer-found").parent().prev(".panel").children(".panel-heading").css("background-color", "rgba(0,255,0,0.6)");
//            $(this).parent().parent().prev(".panel").children(".panel-collapse").collapse('hide');
//            $(this).parent().parent().next(".panel").children(".panel-collapse").collapse('show');
            $(".radio-answer-found").parent().find("input:radio").attr('disabled', true);

        }
    });
    $("input.uncorrect-option").click(function() {
        $(this).parent().parent().children("label").removeClass("radio-answer-found");
        $(this).parent().parent().prev(".panel").css("background-color", "rgba(255,0,0,0.6)");
        $(this).parent().parent().prev(".panel").children(".panel-heading").css("background-color", "rgba(255,0,0,0.6)");
//        $(this).parent().parent().next(".panel").children().find(".panel-collapse").collapse('hide');
    });
    $("#accordion-right-one").find("input").click(function() {
        mobilerightone();
    });
    $("#accordion-right-game-two").find("input").click(function() {
        mobilerighttwo();
    });
    $("#your-choice-game").find("input").click(function() {
        mobileYourChoice();
    });
    $("#disclosures-1-game").find("input").click(function() {
        mobileDisclosuresOne();
    });
    $("#disclosures-3-game").find("input").click(function() {
        mobileDisclosuresThree();
    });
    $("#disclosures-2-game").find("input").click(function() {
        mobileDisclosuresTwo();
    });
    function mobilerightone() {
        clickcountRightGameOne = clickcountRightGameOne + 1;
        if (clickcountRightGameOne == 4 || clickcountRightGameOne == 5) {
            var rightAnswerLength = $("#accordion-right-one").find(".radio-answer-found").length;
            if (rightAnswerLength == 4) {
                $("#game-part-1").find(".write-message").removeClass("hidden");
                jQuery("#accordion-right-one input:radio").attr('disabled', true);
                $("#accordion-right-one .result-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#game-part-1").offset().top - 70
                }, 1000);
                return false;

            }
        }
        if (clickcountRightGameOne == 6) {
            $("#game-part-1").find(".wrong-message").removeClass("hidden");
            jQuery("#accordion-right-one input:radio").attr('disabled', true);
            $("#accordion-right-one .result-wrapper").css("display", "block");
            $('html, body').animate({
                scrollTop: $("#game-part-1").offset().top - 70
            }, 1000);
            return false;
            $(".panel").children(".panel-collapse").collapse('hide');
        }
    }

    function mobilerighttwo() {
        clickcountRightGameTwo = clickcountRightGameTwo + 1;
        if (clickcountRightGameTwo == 4 || clickcountRightGameTwo == 5) {
            var rightAnswerLengthTwo = $("#accordion-right-game-two").find(".radio-answer-found").length;
            if (rightAnswerLengthTwo == 4) {
                $("#game-part-2").find(".write-message").removeClass("hidden");
                jQuery("#accordion-right-game-two input:radio").attr('disabled', true);
                $("#accordion-right-game-two .result-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#game-part-2").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (clickcountRightGameTwo == 6) {
            $("#game-part-2").find(".wrong-message").removeClass("hidden");
            jQuery("#accordion-right-game-two input:radio").attr('disabled', true);
            $("#accordion-right-game-two .result-wrapper").css("display", "block");

            $('html, body').animate({
                scrollTop: $("#game-part-2").offset().top - 70
            }, 1000);
            return false;
        }
    }
    function mobileYourChoice() {
        clickcountYourChoice = clickcountYourChoice + 1;
        if (clickcountYourChoice == 2 || clickcountYourChoice == 3) {
            var YourChoiceAnswerLength = $("#accordion-your-choice").find(".radio-answer-found").length;
            if (YourChoiceAnswerLength == 2) {
                $("#your-choice-game").find(".write-message").removeClass("hidden");
                jQuery("#your-choice-game input:radio").attr('disabled', true);
                $("#accordion-your-choice .result-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#your-choice-game").offset().top - 70
                }, 1000);
                return false;
                $(".result-wrapper").show();
            }
        }
        if (clickcountYourChoice == 4) {
            $("#your-choice-game").find(".wrong-message").removeClass("hidden");
            jQuery("#your-choice-game input:radio").attr('disabled', true);
            $("#accordion-your-choice .result-wrapper").css("display", "block");
            $('html, body').animate({
                scrollTop: $("#your-choice-game").offset().top - 70
            }, 1000);
            return false;
        }
    }
    function mobileDisclosuresOne() {
        clickcountDisclosureOne = clickcountDisclosureOne + 1;
        if (clickcountDisclosureOne == 3 || clickcountDisclosureOne == 4) {
            var DisclosureOneAnswerLength = $("#disclosures-1-game").find(".radio-answer-found").length;
            if (DisclosureOneAnswerLength == 3) {
                $("#disclosures-1-game").find(".write-message").removeClass("hidden");
                jQuery("#disclosures-1-game input:radio").attr('disabled', true);
                $("#disclosures-1-game .result-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#disclosures-1-game").offset().top - 70
                }, 1000);
                return false;

            }
        }
        if (clickcountDisclosureOne == 5) {
            $("#disclosures-1-game").find(".wrong-message").removeClass("hidden");
            jQuery("#disclosures-1-game input:radio").attr('disabled', true);
            $("#disclosures-1-game .result-wrapper").css("display", "block");
            $('html, body').animate({
                scrollTop: $("#disclosures-1-game").offset().top - 70
            }, 1000);
            return false;
        }
    }
    function mobileDisclosuresTwo() {
        clickcountDisclosureTwo = clickcountDisclosureTwo + 1;
        if (clickcountDisclosureTwo == 4 || clickcountDisclosureTwo == 5) {
            var DisclosureTwoAnswerLength = $("#disclosures-2-game").find(".radio-answer-found").length;
            if (DisclosureTwoAnswerLength == 4) {
                $("#disclosures-2-game").find(".write-message").removeClass("hidden");
                jQuery("#disclosures-2-game input:radio").attr('disabled', true);
                $("#disclosures-2-game .result-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#disclosures-2-game").offset().top - 70
                }, 1000);
                return false;

            }
        }
        if (clickcountDisclosureTwo == 6) {
            $("#disclosures-2-game").find(".wrong-message").removeClass("hidden");
            jQuery("#disclosures-2-game input:radio").attr('disabled', true);
            $("#disclosures-2-game .result-wrapper").css("display", "block");
            $('html, body').animate({
                scrollTop: $("#disclosures-2-game").offset().top - 70
            }, 1000);
            return false;
        }
    }
    function mobileDisclosuresThree() {
        clickcountDisclosureThree = clickcountDisclosureThree + 1;
        if (clickcountDisclosureThree == 3 || clickcountDisclosureThree == 4) {
            var DisclosureThreeAnswerLength = $("#disclosures-3-game").find(".radio-answer-found").length;
            if (DisclosureThreeAnswerLength == 3) {
                $("#disclosures-3-game").find(".write-message").removeClass("hidden");
                jQuery("#disclosures-3-game input:radio").attr('disabled', true);
                $("#disclosures-3-game .result-wrapper").css("display", "block");
                $("#disclosures-3-game .restart-wrapper").css("display", "block");
                $('html, body').animate({
                    scrollTop: $("#disclosures-3-game").offset().top - 70
                }, 1000);
                return false;
            }
        }
        if (clickcountDisclosureThree == 5) {
            $("#disclosures-3-game").find(".wrong-message").removeClass("hidden");
            jQuery("#disclosures-3-game input:radio").attr('disabled', true);
            $("#disclosures-3-game .result-wrapper").css("display", "block");
            $('html, body').animate({
                scrollTop: $("#disclosures-3-game").offset().top - 70
            }, 1000);
            return false;
        }
    }
    function refreshPosition() {
        setTimeout(function() {
            location.reload(true);
        }, 1000);
    }
    $(".refresh").click(function() {
        jQuery("body input:radio").attr('disabled', false);
        jQuery("body input:radio").attr('checked', false);
        clickcountRightGameOne = 0;
        clickcountRightGameTwo = 0;
        clickcountYourChoice = 0;
        clickcountDisclosureOne = 0;
        clickcountDisclosureTwo = 0;
        clickcountDisclosureThree = 0;
        dragcount = 0;
        dragcountsecond = 0;
        choicedrgcount = 0;
        disclosuresdrgcount = 0;
        $(".wrong-message").addClass("hidden");
        $(".write-message").addClass("hidden");
        refreshPosition();
    });
    $(".panel-title").click(function() {


        if ($(this).children("a").hasClass("collapsed")) {
            $(this).children("a").children(".fa-chevron-circle-down").addClass("hidden");
            $(this).children("a").children(".fa-chevron-circle-up").removeClass("hidden");
        }
        else {
            $(this).children("a").children(".fa-chevron-circle-down").removeClass("hidden");
            $(this).children("a").children(".fa-chevron-circle-up").addClass("hidden");
        }
    });

    var random = Math.floor((Math.random() * 9999) + 1000);
    $(".random-number").append(random);

});


