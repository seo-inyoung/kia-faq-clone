const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

router.render = (req, res) => {
  // /faq 엔드포인트에 대한 커스텀 응답 처리
  if (req.path === '/faq') {
    const { tab, faqCategoryID, question } = req.query;
    let _start = 0;
    let _limit = 10;

    if (req.originalUrl.includes('?')) {
      const params = new URLSearchParams(req.originalUrl.split('?').pop());
      _start = parseInt(params.get('_start') || '0', 10);
      _limit = parseInt(params.get('_limit') || '10', 10);
    }

    let data = router.db.get('faq').value();

    // tab 필터링
    if (tab) {
      data = data.filter((item) => item.tab === tab);
    }

    // faqCategoryID 필터링
    if (faqCategoryID && faqCategoryID !== 'ALL') {
      data = data.filter((item) => item.faqCategoryID === faqCategoryID);
    }

    // question(검색어) 필터링 (대소문자 구분 없이)
    if (question) {
      const searchTerm = question.toLowerCase();
      data = data.filter((item) => {
        // answer에서 HTML 태그 제거
        const cleanedAnswer = item.answer.replace(/<[^>]+>/g, '').toLowerCase();
        return (
          item.question.includes(searchTerm) ||
          cleanedAnswer.includes(searchTerm)
        );
      });
    }

    const total = data.length;
    const start = _start;
    const end = start + _limit;
    res.jsonp({
      pageInfo: {
        totalRecord: total,
        offset: start,
        limit: _limit,
        prevOffset: Math.max(0, start - _limit),
        nextOffset: end < total ? end : 0,
      },
      items: data.slice(start, end),
    });
  } else {
    res.jsonp(res.locals.data);
  }
};

server.listen(9999, () => {
  console.log('JSON Server is running');
});
