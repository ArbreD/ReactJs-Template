import { Tooltip } from "antd";

function CustomTooltip(props) {
  const color = props.color ? props.color : "black";
  return (
    <Tooltip placement="top" title={props.title} color={color}>
      {props.children}
    </Tooltip>
  );
}

export default CustomTooltip;
