import React from "react";

const baseUrl = `https://www.instagram.com/explore/tags/`;
export function splitString(dataString: string) {
  const strArray = dataString.split(" ");

  const result = strArray.map((word: string) => {
    if (word.startsWith("#")) {
      const baseWord = word.replace("#", "");
      return `<a href="${baseUrl}${baseWord}">#${baseWord}</a>`;
    } else if (word.startsWith(`\n#`)) {
      const baseWord = word.replace(`\n#`, "");
      return `<a href="${baseUrl}${baseWord}">#${baseWord}</a>`;
    } else return word;
  });

  console.log(result.join(" "));

  return result.join(" ");
}

const Hashtags = (props: any) => {
  const code = splitString(props.data);
  return <span dangerouslySetInnerHTML={{ __html: code }}></span>;
};

export default Hashtags;
