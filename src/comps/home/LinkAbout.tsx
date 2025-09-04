import { useContext, useEffect } from "react";
import { LinkCurrPageContext } from "../../context/LinkCurrentPageContext";

export default function LinkAbout() {
  const currPage = useContext(LinkCurrPageContext);
  useEffect(() => {
    currPage?.setCurrPage("About")
  })

  return (
    <div>about</div>
  )
}
