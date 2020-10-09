import React, { Component } from "react";
import { Breadcrumb } from "matx";
import SimpleForm from "../material-kit/forms/SimpleForm";

class BasicForm extends Component {
  render() {
    console.log(window.location.href);
    const urlPath = window.location.href;
    const cutOff = urlPath.split('/', 4).join('/').length;
    const filePath = '/bbmerlion/pdf' + urlPath.slice(cutOff)
    console.log(filePath);
    return (
      <iframe src={filePath} width="100%" height="800px"></iframe>
    );
  }
}

export default BasicForm;
