//als je wilt je button alle atrebutts van normale button te krijgen moet je implaats van type children componentProps gebruiken.
// en als je wilt de atterbuten werken moet je pas of add de attrebut ook hier
//als je wil niet van elke props of atterbuten hier toeveogen je ken gewoon van ...rest gebruiken
import { ComponentProps } from "react"

// type TButton = {
//     children: React.ReactNode
// }
type TVariant = "primary" | "secondary" | "danger" | "warninng" | "success"
type TButton = ComponentProps<"button"> & {variant?: TVariant }// ik maak hier een componenet Props dat gedrag als een normele button en krijgt alle moegelijkheden als een normale button (nu kan de componenet button waneer eregens geroepen word kan alle porps malekijk gebruik maken.)
function Button({children , variant , style , ...rest} : TButton) {
    console.log(checkVariant(variant));
  return (
    <button {...rest} style={{ padding: "5px 15px", borderRadius:"8px" ,...style, ...checkVariant(variant)}}>
      {children}
    
    </button>
  )
}

export default Button
 function checkVariant(variant?: TVariant){
 if (variant === "primary"){
    return {backgroundColor : "#4681f4", color: "white"};
 }else if (variant === "secondary"){
    return {backgroundColor : "gray" , color: "white"};
 }else if (variant === "danger"){
    return {backgroundColor : "red" , color: "white"};
 }else if (variant === "warninng"){
    return {backgroundColor : "yellow" , color: "white"};
 }else if (variant === "success"){
    return {backgroundColor : "green" , color: "white"};
 }
}