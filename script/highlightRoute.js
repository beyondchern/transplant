function highlightRoute() {
  let urlJournalNumber = getQueryStringValue("journal");
  if (urlJournalNumber) {
    highlightJournal(urlJournalNumber);
  } else {
    return;
  }
}
