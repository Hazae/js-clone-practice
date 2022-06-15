var Grid = tui.Grid;
const columnData = [
  {
    title: '날짜',
    name: 'date',
  },
  {
    title: '내역',
    name: 'category1',
  },
  {
    title: '비고',
    name: 'category2',
  },
  {
    title: '결제 방식',
    name: 'payment',
  },
  {
    title: '금액',
    name: 'amount',
  },
  {
    title: '파라미터',
    name: 'param',
  },
];

const rowData = [
  {
    date: '2018-11-19',
    category1: '식비',
    category2: '회사 편의점',
    payment: '페이코',
    amount: '5000',
    param: function () {
      const search = window.location.href;
      return search
        .replace(/(^\?)|(&$)/g, '')
        .split('&')
        .reduce((query, it) => {
          const [key, value] = it.split('=');
          query[key] = decodeURIComponent(value);
          return query;
        }, {});
    },
    pageOptions: { perPage: 10 },
  },
];

const grid = new Grid({
  el: document.getElementById('grid'),
  columns: columnData,
  data: rowData,
});
