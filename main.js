$(function() {
    var updated = $('time[itemprop=datePublished]').attr('datetime') || $('meta[itemprop=datePublished]').attr('content')
    var diff = new Date() - new Date(updated)
    if (diff / (1000 * 60 * 60 * 24 * 365) >= 1) {
        $('h1,section').each(function() {
            var txt = $(this).html();
            $(this).html(txt.replace(/モダンな?/g, 'もはやモダンでない'))
        });
        console.log('1年以上前の記事のため、もはやモダンではありません');
    }
})