import React from 'react';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { MailOutlined } from '@material-ui/icons';
import { Link, useTheme } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import { Icon } from '@material-ui/core';

export default function PricingView() {
    const theme = useTheme();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'start' }}>

                <div>
                    <List>
                        <ListItem>
                            <ListItemIcon >
                                <Icon style={{ color: theme.palette.primary.main }}>
                                    <PhoneOutlinedIcon />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="tel: +48 512460558" >
                                    +48 512460558
  </Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <Icon style={{ color: theme.palette.primary.main }}>
                                    <MailOutlined />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="mailto: studio.rozgrzewki@outlook.com" >
                                    studio.rozgrzewki@outlook.com
  </Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <Icon style={{ color: theme.palette.primary.main }}>
                                    <RoomOutlinedIcon />
                                </Icon>
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://goo.gl/maps/vj81ZpVYgYKxrLf58" >
                                    Kraków, Basztowa 23/10
  </Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1284658242507!2d19.941711716335536!3d50.065155722931934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b10652bb0af%3A0xcd99d73d19d00e63!2sBasztowa%2023%2C%2031-156%20Krak%C3%B3w%2C%20Polska!5e0!3m2!1spl!2suk!4v1621867198397!5m2!1spl!2suk" width="600" height="450" style={{ border: 0, maxWidth:'90%' }} allowfullscreen="" loading="lazy"></iframe>

                    </div>
                </div>

            </div>

        </div>
    );
}