import React, { useContext, useState } from "react";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { AuthContext } from "../../providers/AuthProvider";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Button from "react-bootstrap/esm/Button";
import Card from "../Card";
import Badge from "react-bootstrap/esm/Badge";
import axios from "axios";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Profile() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');

  // what is happening here?
//   const auth = useContext(AuthContext)
  const {  user } = useContext(AuthContext)



  // a file has been added or removed, receives list of files
  const handleUpdate = (files)=>{
    console.log('file has been added or removed')

    console.log('list of files:', files)
    console.log('one file:', files[0])
    setFiles(files)

  }

  const handleSubmit = async(e)=>{
      e.preventDefault()
      console.log('profile image:', files[0].file)
      let data = new FormData()
      data.append('fileYo', files[0].file)
      data.append('name', name[0])

      
      try{
          console.log('trying to update with data:',data)
          let res = await axios.put('/api/users/update_image', data)
      console.log('res:',res)
        }catch(error){
            alert('error updating profile')
        }
  }
  return (
    <div className="App">
      <h1>Profile Page</h1>
      <p>{JSON.stringify(user)}</p>
      <Card>
      <form>
          <h1>Update Profile</h1>
          <Badge><p style={{marginBottom:'0px'}}>Name</p></Badge>
          <br/>
          <br/>

          <input value={name} onChange={(e)=> setName(e.target.value)} /> 
          <p>Image</p>
      <FilePond
        files={files}
        // allowReorder={true}
        allowMultiple={false}
        onupdatefiles={handleUpdate}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <Button onClick={handleSubmit}> Update user </Button>
      </form>
      </Card>
    </div>
  );
}

export default Profile