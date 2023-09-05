export function copyToClipboard(copyText) {
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
}
export const randomNumberStr = () =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 9) + 1).join("");
