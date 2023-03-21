import { Component, Show } from "solid-js";

export interface HistogramProps {
  dataType: string;
  showHistogramLabels: boolean;
  histogramAccentColor: string;
  label: string;
}

export const Histogram: Component<HistogramProps> = (props) => {
  return (
    <>
      <p>dataType: {props.dataType}</p>
      <Show when={props.showHistogramLabels}>
        <p>showHistogramLabels</p>
      </Show>
      <p style={`color: ${props.histogramAccentColor}`}>
        histogramAccentColor: {props.histogramAccentColor}
      </p>
      <p>label: {props.label}</p>
    </>
  );
};
