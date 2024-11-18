const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles two oclock', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('Handles 2:03', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe("three past two");
  });

  it('Handles 2:11', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe("eleven past two");
  });

  it('Handles 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe("quarter past two");
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles 2:33', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe("twenty seven to three");
  });

  it('Handles 2:40', () => {
    const timeInWords = convertTimeToWords('2:40');
    expect(timeInWords).toBe("twenty to three");
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles 2:55', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe("five to three");
  });
});
