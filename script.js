const planOptions = $('.planOption');

const price = document.getElementById("pricing");

function showPricing(plan){
    $('#basic').removeClass('selected-plan');
    $('#pro').removeClass('selected-plan');
    $('#enterprise').removeClass('selected-plan');
    Array.from(planOptions).forEach((option) => {
        $(option).removeClass('selected');
    });

    if(plan == "basic"){
        $('#basic').addClass('selected-plan');
        price.innerHTML = "$500 / Month";
        Array.from(planOptions).forEach((option) => {
            if($(option).hasClass('basic')){
                $(option).addClass('selected');
            }
        });
    } else if(plan == "pro"){
        $('#pro').addClass('selected-plan');
        price.innerHTML = "$1500 / Month";
        Array.from(planOptions).forEach((option) => {
            if($(option).hasClass('pro') 
            || $(option).hasClass('basic')){
                $(option).addClass('selected');
            }
        });
    } else if(plan == "enterprise"){
        $('#enterprise').addClass('selected-plan');
        price.innerHTML = "Call for Pricing";
        Array.from(planOptions).forEach((option) => {
            $(option).addClass('selected');
        });
    }
}