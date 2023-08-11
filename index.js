
let scroll_id = "";
function toggleMenu(curr_obj) {
    $(curr_obj).toggleClass("change");
    console.log($(curr_obj).attr("class"));
    if ($(curr_obj).attr("class") === "navbar_menu") {
        $(".nav_menu_item_overlay").slideUp('slow');
    } else {
        $(".nav_menu_item_overlay").slideDown('slow');
    }
}

function scrollSection(scroll_id) {
    // Calculate the offset of the #about div relative to the top of the page
    let offsetTop = $(`#${scroll_id}`).offset().top - $(".navbar").height() - 10;
    if (offsetTop > 0) {
        // Animate scrolling to the #about div
        $('html').scrollTop(offsetTop);
    }
}

if (window.outerWidth <= 1000) {
    $(".navigation_bar").html(` <nav class="navbar">
        <div class="logo nav_item_layout">
            <img loading="lazy" src="/images/p_logo.svg" alt="error" style="width: 30px;">
            <span class="logo_text text_highlighting_1 h5">PORTFOLIO</span>
        </div>
        <div class="navbar_menu" onclick="toggleMenu(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </nav>
    <div class="nav_menu_item_overlay">
        <div class="nav_menu_item_container">
            <span class="h5" data_id="home">Home</span>
            <span class="h5" data_id="about">About</span>
            <span class="h5" data_id="skills">Skills</span>
            <span class="h5" data_id="experience">Experience</span>
            <span class="h5" data_id="projects">Projects</span>
            <span class="h5" data_id="contact">Contact</span>
        </div>
    </div>`);
}

function getJourneyTrack() {
    let curr_obj, trackContentContainer, content_box_height, box_gap, dot_box_html, trackItems, content_box_length, box_ht;
    $(".journey_track_main_container").each(function () {
        curr_obj = $(this);
        trackContentContainer = curr_obj.find(".track_content_container");
        content_box_height = trackContentContainer.outerHeight();
        box_gap = trackContentContainer.css("gap");
        dot_box_html = "";
        trackItems = trackContentContainer.find(".track_item");
        content_box_length = trackItems.length;
        box_ht;

        trackItems.each(function (index) {
            box_ht = $(this).outerHeight();

            if (index === 0) { // For starting index
                dot_box_html += `<div class="track_box" style="height: ${box_ht}px;">
                <div style="height: 50%;"></div>
                <div class="track_dot"></div>
                <div class="track_line" style="height: 50%;"></div>
            </div>
            <div class="track_box" style="height: ${box_gap}">
                <div class="track_line" style="height: 100%;"></div>
            </div>`;
            } else if (index === content_box_length - 1) { // For ending index
                dot_box_html += `<div class="track_box" style="height: ${box_ht}px;">
                <div class="track_line" style="height: 50%;"></div>
                <div class="track_dot"></div>
                <div style="height: 50%;"></div>
            </div>`;
            } else { // For gap as well as middle index
                dot_box_html += `<div class="track_box" style="height: ${box_ht}px;">
                <div class="track_line" style="height: 50%;"></div>
                <div class="track_dot"></div>
                <div class="track_line" style="height: 50%;"></div>
            </div>
            <div class="track_box" style="height: ${box_gap}">
                <div class="track_line" style="height: 100%;"></div>
            </div>`;
            }
        });

        curr_obj.find(".track_dot_container").css('height', content_box_height).html(dot_box_html);
    });
}

function fun(){
    $("html").scrollTop(0);
}

$(document).ready(function () {
    AOS.init();
    //  For experience track
    getJourneyTrack();
    $(".nav_menu_item_overlay .nav_menu_item_container span,.nav_item_container span").click(function () {
        scroll_id = $(this).attr("data_id");
        toggleMenu($(".navbar_menu")[0]);
        scrollSection(scroll_id);
    })

    $(".logo.nav_item_layout").click(function(){
        window.location.href="/";
    })

})