const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function(html) {
  const $ = cheerio.load(html);
  $('img').each(function() {
    const $img = $(this);
    // 跳过已经有loading属性的图片
    if (!$img.attr('loading')) {
      $img.attr('loading', 'lazy');
    }
  });
  return $.html();
});