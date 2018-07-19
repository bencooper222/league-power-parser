import {
  parsePercent,
  roundToDecimal,
  openWebpage,
  displayResults
} from "./utility.js";

(() => {
  const getAndScrapeTable = () => {
    const table = Array.from(
      document.getElementsByClassName("rt-tbody")[0].childNodes
    );
    table.forEach(row =>{
        const rowInfo = row.childNodes[0];
        const name = rowInfo.childNodes[2].getElementsByTagName('strong')[0].innerHTML;
        console.log('name', name)
        // console.log(rowInfo.childNodes[1].getElementsByTagName('img')[0]);
    });

  };

  getAndScrapeTable();
})();
