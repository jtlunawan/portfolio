import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Prototype</h2>
            <img
              src="https://i.loli.net/2019/05/23/5ce5c3c8838ca92348.png"
              alt="avatar"
              style={{height: '300px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>We created our prototype to present our minimal feature as the animated self-designed objects to appeal to kids.</p>

          </Cell>
          <Cell col={6}>
            <h2>Research Findings</h2>

            <div className="contact-list">
            <img
              src="https://files.slack.com/files-pri/TFZ7FRRGU-FHR0UK0H2/kandedong_4cs.png"
              alt="avatar"
              style={{height: '300px'}}
               />
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>We identified our 4Cs and examined the problem with more empirical evidence.</p>
              {/* <List> */}
                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}

{/* 
              </List> */}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
