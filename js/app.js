const log = console.log;




window.addEventListener("load", () => {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true,

        afterLoad: function (origin) {
            var loadedSection = this;
            log(origin.index);
            //색인 사용

        }

    });
    fullpage_api.setScrollingSpeed(400);

    addEvent();


});

let page_idx = 1;

function addEvent() {
    document.querySelector(".right_btn").addEventListener("click", () => {
        slide(page_idx, page_idx + 1 == 5 ? 1 : page_idx + 1);
        page_idx++;
        if (page_idx == 5) {
            page_idx = 1;
        }

    });
    document.querySelector(".left_btn").addEventListener("click", () => {
        slide(page_idx, page_idx - 1 == 0 ? 4 : page_idx - 1);
        page_idx--;
        if (page_idx == 0) {
            page_idx = 4;
        }
    });
}

function slide(idx, slide_idx) {
    $(`.slide_${idx}`).css('z-index', '5');
    $(`.slide_${slide_idx}`).css('z-index', '1');
    $(`.slide_${slide_idx}`).fadeIn(1);
    $(`.slide_${idx}`).fadeOut(300);

}