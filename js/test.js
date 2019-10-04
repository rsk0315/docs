'use strict';

async function enrich(text) {
    return await $.ajax({
        url: 'https://api.github.com/markdown/raw',
        type: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        data: text,
        success: r => r,
    });
}

$(function() {
    let text = '# hello\n**hello**\n$n\\log n$';
    enrich(text).then(function(mu) {
        console.log(mu);
        $('#test').html(mu);
        MathJax.typeset();
    });
});
