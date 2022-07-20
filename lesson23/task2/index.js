// ==== solving plan
// 1. create a function for markup
// 2. create a number generator function
// 3. function for render arena
// 3.1 function for section
// 3.2 function for line seats
// 4. get exactly place for every seat
// 4.1 add event for board-seat


const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const setSectorSeats = () =>
  generateNumbersRange(1, 10)
    .map(seatNumber => `<div class='sector__seat' data-seat-number='${seatNumber}'></div>`)
    .join('');

const setSectorLines = () => {
  const seatsString = setSectorSeats();
  return generateNumbersRange(1, 10)
    .map(
      lineNumber =>
        `<div class='sector__line' data-line-number='${lineNumber}'>${seatsString}</div>`,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = setSectorLines();
  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber =>
        `<div class='sector' data-sector-number='${sectorNumber}'>${linesString}</div>`,
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElement = document.querySelector('.board__selected-seat');
  selectedSeatElement.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
