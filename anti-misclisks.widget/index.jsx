import { css } from "uebersicht"

//////////////////////////////////////////////////
///////////////////SETTIINGS//////////////////////
//////////////////////////////////////////////////

//STEP 1: define the size: 
const window_height = 860
const window_width = 1425

//STEP 2: difine the position:
const window_left = 15
const window_top = 40

//STEP 3: hide the dashed line. Having the line visable is to make sure the steps above can be done successfully:
const line_width = 4

//STEP 4: further advanced settings: such as the border radius of the transparent widget and the opacity of the widget:
const border_radius = 20
const window_opacity = 0

//////////////////////////////////////////////////
////////DO NOT CHANGE THE FOLLOWING PART//////////
//////////////////////////////////////////////////

const quote_block = css`
  background: rgba(0, 0, 0, ${window_opacity});
  border-radius:${border_radius}px;
  height: ${window_height}px;
  border:${line_width}px dashed white
`

export const className = `
  left: ${window_left}px;
  top: ${window_top}px;
  width: ${window_width}px;
`

export const render = ({ output, error }) => {
  return (
    <div className={quote_block}>
    </div>
  );
}