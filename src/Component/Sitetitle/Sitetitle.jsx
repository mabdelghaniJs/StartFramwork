import {  useEffect } from 'react'

function Sitetitle(title) {

  useEffect(() => {
    document.title = title;
  }, [title]);
}
export default Sitetitle