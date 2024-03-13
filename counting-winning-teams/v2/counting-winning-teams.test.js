const calculateOcurrenceIdentification = require("./index");

describe("countingWinningTeams v1", () => {
  test("should return 0 count when every team win multiple times", () => {
    const res = calculateOcurrenceIdentification("ssaabboo");

    expect(res).toEqual(0);
  });

  test("should return 1 where there is only one team that win one time", () => {
    const res = calculateOcurrenceIdentification("saabboo");

    expect(res).toEqual(1);
  });

  test("should return 2 where there is only 2 teams that win one time", () => {
    const res = calculateOcurrenceIdentification("embbrr");

    expect(res).toEqual(2);
  });
});
