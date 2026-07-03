const images = {
  wed: [
    { file: 'wed__childrenwed', location: 'Backhouse Rossie Estate, Cupar', date: 'August, 2025' },
    { file: 'wed__confetti', location: 'Backhouse Rossie Estate, Cupar', date: 'August, 2025' },
    { file: 'wed__flowergirls', location: 'Backhouse Rossie Estate, Cupar', date: 'August, 2025' },
    { file: 'wed__holyroodlove', location: 'Holyrood Park, Edinburgh', date: 'July, 2024' },
    { file: 'wed__holyroodnoir', location: 'Holyrood Park, Edinburgh', date: 'July, 2024' },
    { file: 'wed__kiss', location: 'Backhouse Rossie Estate, Cupar', date: 'August, 2025' },
    { file: 'wed__laugh', location: 'Backhouse Rossie Estate, Cupar', date: 'August, 2025' },
    { file: 'wed__painting', location: 'Holyrood Park, Edinburgh', date: 'July, 2024' },
  ],
  gradcel: [
    { file: 'gradcel__arya', location: 'Wallington, London', date: 'September, 2023' },
    { file: 'gradcel__bizball', location: 'The Scotsman Hotel, Edinburgh', date: 'March, 2025' },
    { file: 'gradcel__casino', location: 'Voodoo Rooms, Edinburgh', date: 'January, 2025' },
    { file: 'gradcel__dhruv', location: 'Potterow, Edinburgh', date: 'October, 2024' },
    { file: 'gradcel__king', location: 'McEwan Hall, Edinburgh', date: 'July, 2025' },
    { file: 'gradcel__loveinclub', location: 'Cabaret Voltaire, Edinburgh', date: 'October, 2025' },
    { file: 'gradcel__mgrad', location: 'Old Medical School, Edinburgh', date: 'July, 2025' },
    { file: 'gradcel__pecsgrad', location: 'Old Medical School, Edinburgh', date: 'July, 2025' },
    { file: 'gradcel__rubygrad', location: 'Old Medical School, Edinburgh', date: 'July, 2025' },
  ],
  corpcomm: [
    { file: 'corpcomm__ecfsbts', location: 'Mansfield Traquair, Edinburgh', date: 'March, 2025' },
    { file: 'corpcomm__ecfsglass', location: 'Blackford Hill, Edinburgh', date: 'November, 2024' },
    { file: 'corpcomm__ecfsred', location: 'Blackford Hill, Edinburgh', date: 'November, 2024' },
    { file: 'corpcomm__jaminblur', location: 'The Argyle and Cellar Bar, Edinburgh', date: 'July, 2024' },
    { file: 'corpcomm__marialandscape', location: 'Edinburgh College of Art, Edinburgh', date: 'April, 2024' },
    { file: 'corpcomm__merida', location: 'Blackford Hill, Edinburgh', date: 'November, 2024' },
    { file: 'corpcomm__tegablur', location: 'Edinburgh University Main Library, Edinburgh', date: 'April, 2025' },
    { file: 'corpcomm__tegajump', location: 'Portobello Beach, Edinburgh', date: 'October, 2024' },
  ],
  archive: [
    { file: 'archive__bridgeshadow', location: 'North Bridge, Edinburgh', date: 'October, 2023' },
    { file: 'archive__childrenschurch', location: 'The Kapporeth Place, Abuja', date: 'January, 2023' },
    { file: 'archive__dimlands', location: 'Dimlands Road, Llantwit Major', date: 'May, 2023' },
    { file: 'archive__flowers', location: 'Buccleuch Street, Edinburgh', date: 'September, 2024' },
    { file: 'archive__giles', location: 'St Giles Cathedral, Edinburgh', date: 'December, 2022' },
    { file: 'archive__library', location: 'Edinburgh University Main Library, Edinburgh', date: 'April, 2024' },
    { file: 'archive__mirror', location: 'Pollock Halls, Edinburgh', date: 'January, 2022' },
    { file: 'archive__shadow', location: 'Causewayside, Edinburgh', date: 'October, 2023' },
    { file: 'archive__joy', location: 'The Kapporeth Place, Abuja', date: 'December, 2023' },
    { file: 'archive__home', location: 'Newington, Edinburgh', date: 'October, 2022' },
  ],
  landing: [
    { file: 'landing__childrenwed', location: 'Backhouse Rossie Estate, Cupar', date: 'August, 2025' },
    { file: 'landing__joy', location: 'The Kapporeth Place, Abuja', date: 'December, 2023' },
    { file: 'landing__holyroodlove', location: 'Holyrood Park, Edinburgh', date: 'July, 2024' },
    { file: 'landing__rubygrad', location: 'Old Medical School, Edinburgh', date: 'July, 2025' },
  ],
};

for (const section in images) {
  console.log(`${section}: ${images[section].length} images`);
}
