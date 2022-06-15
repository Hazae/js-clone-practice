var Grid = tui.Grid;

// class CustomSliderRenderer {
//   constructor(props) {
//     const el = document.createElement('input');
//     const { min, max } = props.columnInfo.renderer.options;

//     el.type = 'range';
//     el.min = String(min);
//     el.max = String(max);

//     el.addEventListener('mousedown', (ev) => {
//       ev.stopPropagation();
//     });
//     console.log(el);
//     this.el = el;
//     console.log(el);

//     this.render(props);
//   }

//   getElement() {
//     return this.el;
//   }

//   render(props) {
//     this.el.value = String(props.value);
//   }
// }

// const grid = new Grid({
//   el: document.getElementById('wrapper'),
//   scrollX: false,
//   scrollY: false,
//   columns: [
//     {
//       header: 'Name',
//       name: 'name',
//       filter: { type: 'text', showApplyBtn: true, showClearBtn: true },
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Artist',
//       name: 'artist',
//       filter: 'select',
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Type',
//       name: 'type',
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Release',
//       name: 'release',
//       filter: {
//         type: 'date',
//         options: {
//           format: 'yyyy.MM.dd',
//         },
//       },
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Genre',
//       name: 'genre',
//       name: 'genre',
//       filter: {
//         type: 'text',
//         operator: 'OR',
//       },
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Price',
//       name: 'price',
//       filter: 'number',
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Download',
//       name: 'downloadCount',
//       filter: 'number',
//       sortingType: 'desc',
//       sortable: true,
//     },
//     {
//       header: 'Listen',
//       name: 'listenCount',
//       filter: 'number',
//       sortingType: 'desc',
//       sortable: true,
//     },
//   ],
//   //   data:
// });

// const dataJson = [
//   {
//     name: 'Beautiful Lies',
//     artist: 'Birdy',
//     type: 'Deluxe',
//     release: '2016.03.26',
//     genre: 'Pop',
//     price: 39560,
//     downloadCount: 1000,
//     listenCount: 5503,
//   },
// ];

// const loopJson = (json) => {
//   for (let i = 0; i < 3000; i++) {
//     json.push(json[0]);
//   }
//   return json;
// };
// const loopedData = loopJson(dataJson);
// grid.resetData(loopedData);

function createRows() {
  const rows = [];
  for (let i = 0; i < 30000; i += 1) {
    const row = {};
    for (let j = 0; j < 15; j += 1) {
      row[`c${j}`] = (Math.random() * 100000000000).toFixed();
    }
    rows.push(row);
  }
  return rows;
}

const columns = [];

for (let i = 0; i < 15; i += 1) {
  const name = `c${i}`;
  columns.push({ name, header: name });
}

const grid = new tui.Grid({
  el: document.getElementById('wrapper'),
  bodyHeight: 500,
  data: createRows(),
  columns,
  rowHeaders: ['rowNum'],
});

grid.on('scrollEnd', () => {
  grid.appendRows(createRows());
});
