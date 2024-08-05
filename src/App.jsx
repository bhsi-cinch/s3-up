import './App.css';
import img1 from './images/berx.jpg';
import React, { Component } from 'react';
class App extends Component {
  state = {
    selectedFile: null,
    fileUploadedSuccessfully: false
  }
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  onFileUpload = async () => {
    if (!this.state.selectedFile) {
      alert("please select a file first.");
      return;
    }
    const formData = new FormData();
    formData.append('fileName',this.state.selectedFileName.name);
    form
    console.log(formData);
    this.setState({ selectedFile: null })
    this.setState({ fileUploadedSuccessfully: true });
  }

 render() {
  return (
    <div>

      <img src={img1} alt='bLogo'/>
    </div>
  );
 }
  
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div className="file-details">
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>Last Modified: {' '}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      )
    }
    else if (this.state.fileUploadedSuccessfully) {
      return (
        <div className="success-message">
          <br />
          <h4>Your file has been successfully uploaded!!</h4>
        </div>
      )
    }
    else {
      return (
        <div className="info-message">
          <br />
          <h4>Click "Choose File", find what you want to upload then click the Upload File button</h4>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container">
        <h2>S3 File Upload</h2>
        <h3>Upload a file from your computer directly to S3</h3>
        <h4>After, the file should appear in the bucket for your use!!</h4>
        <div className="file-input">
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload File
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}


export default App;