export const makeSanityCdnDownloadable = (
  link: string,
  downloadTitle: string = "Resume"
) => {
  return `${link}?dl=${downloadTitle}.pdf`;
};