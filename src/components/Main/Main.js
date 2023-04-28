import React, { Component } from 'react'
import "./Main.css"
import axios from 'axios';

class UseEffectCompo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('https://password-json-4b19db.appdrag.site/api/getAllCard', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(response => {
      console.log(response.data);
      this.setState({ data: response.data.Table })
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className='container'>
        <h1 className='titre'>Mes projets</h1>
        {data?.map((row) => (
          <div key={row.id} className='bg-warning shadow-lg rounded m-3 p-3'>
            <h2>{row.Title}</h2>
            <img src={row.Image} alt="" />
            <p>{row.Article} </p>
            {row.Lien &&
              <a href={row.Lien} target="_blank" rel="noopener noreferrer">cliquez ici pour le lien</a>
            }
          </div>
        ))}
      </div>
    )
  }
}

export default UseEffectCompo;
