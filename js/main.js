var stats = new UserStats();
jQuery(document).ready(function ($) {
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        (!window.requestAnimationFrame)
            ? setTimeout(function () {
            showBlocks(timelineBlocks, offset);
        }, 100)
            : window.requestAnimationFrame(function () {
            showBlocks(timelineBlocks, offset);
        });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            ( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function () {
            ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    $(".menu a").click(function (event) {
        stats.addAction("Menu item: " + event.currentTarget.id)
    });
    $('#about').find('a').click(function (event) {
        stats.addAction("About me: " + event.currentTarget.id)
    });
    $('#works').find('a').click(function (event) {
        stats.addAction("Works: " + event.currentTarget.id)
    });
    $('#certified').find('img').click(function (event) {
        stats.addAction("Certified: " + event.currentTarget.id)
    });
    $('#footer').find('li a').click(function (event) {
        stats.addAction("Social links: " + event.currentTarget.id)
    });

    $(window).unload(function () {
        $.ajax({
            type: 'POST',
            url: "http://bot-heyferh.rhcloud.com/heyferh/storeStats",
            async: false,
            data: {
                "actions": stats.actions,
                "startTimeStamp": Date.parse(stats.startDate),
                "endTimeStamp": Date.parse(stats.startDate)
            }
        });
    })
});
