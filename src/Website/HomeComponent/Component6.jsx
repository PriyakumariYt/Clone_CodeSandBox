import React from 'react'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
const Component6 = () => {
  return (
    <>
      <div className="container6">
        <div className="box6">
          <div className="box6_1">
            <div className="box6_2">
              <div className="box6_3"></div>
            </div>
          </div>
        </div>
        <div className="imagesContainer">
          <div className="imagecontainer1">
            <img
              src="https://static-00.iconduck.com/assets.00/coding-illustration-2048x1365-yefj2c5b.png"
              alt=""
            />
          </div>
          <div className="imagecontainer1">
            <p>
              Code and collaborate from any editor or device:
              <span> browser, VS Code or iOS.</span>
            </p>
            <p>
              Share a link to your code to get feedback, either async or with a
              <span> live coding </span>
              session.
            </p>
            <h6 style={{ color: "rgb(187, 189, 89)" }}>
              Install Vs code Extension <OpenInNewIcon />
            </h6>
            <h6 style={{ color: "rgb(187, 189, 89)" }}>
              Download iOS App <DownloadIcon />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component6
