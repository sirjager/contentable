interface downloadJsonProps {
  json: any;
  name: string;
}

export const downloadJson = (props: downloadJsonProps) => {
  const blob = new Blob([JSON.stringify(props.json)], { type: "text/json" });
  const a = document.createElement("a");
  a.download = `${props.name}.json`;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};
