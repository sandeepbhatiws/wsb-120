import React, { useState } from 'react'

export default function HomeContent({data}) {

  // let { heading, description, children } = props;

  let [faqgetId, setFaqId] = useState('');

  // console.log(faqgetId);

  const faq = (id) => {
    // console.log(id);
    setFaqId(id);
  }

  return (
    <>  
        <div className="column" key={ data.id }>
            <h2 onClick={ () => faq(data.id) } >{ data.title }</h2>
            <div style={{ display: `${ (data.id == faqgetId) ? 'block' : 'none'  }` }}>{ data.body }</div>
        </div>
    </>
  )
}



