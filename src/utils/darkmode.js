export const darkmode = () => {
  const identifier = getComputedStyle(document.documentElement)
    .getPropertyValue('--white-main')
    .trim();
  if (identifier === '#dadce1') {
    document.documentElement.style.setProperty('--black-main', '#dadce1');
    document.documentElement.style.setProperty('--white-main', '#2b2d42');
    document.documentElement.style.setProperty('--black-main-reverse', '#dadce1');
  } else {
    document.documentElement.style.setProperty(
      '--black-main',
      'linear-gradient(to right, #434343, #000000)'
    );
    document.documentElement.style.setProperty('--white-main', '#dadce1');
    document.documentElement.style.setProperty(
      '--black-main-reverse',
      'linear-gradient(to right, #000000, #434343)'
    );
  }
};
