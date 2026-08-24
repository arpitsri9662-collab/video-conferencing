import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
import "../App.css";

export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

   useEffect(() => {
    const fetchHistory = async () => {
        try {
            const history = await getHistoryOfUser();
            setMeetings(history);
        } catch (error) {
            console.log("Failed to fetch meeting history:", error);
        }
    };

    fetchHistory();
}, [getHistoryOfUser]);

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

  return (
    <div className="historyPage">

        <div className="historyHeader">

            <div className="historyTitle">
                <IconButton
                    className="homeButton"
                    onClick={() => {
                        routeTo("/home")
                    }}
                >
                    <HomeIcon />
                </IconButton>

                <div>
                    <h1>Meeting History</h1>
                    <p>Your previous video meetings</p>
                </div>
            </div>

            <Button
                className="backHomeButton"
                variant="contained"
                onClick={() => routeTo("/home")}
            >
                Back to Home
            </Button>

        </div>


        <div className="historyContainer">

            {
                meetings.length !== 0
                    ?
                    meetings.map((e, i) => {

                        return (
                            <Card
                                key={i}
                                className="historyCard"
                                variant="outlined"
                            >

                                <CardContent>

                                    <Typography
                                        className="meetingLabel"
                                    >
                                        Meeting Code
                                    </Typography>

                                    <Typography
                                        className="meetingCode"
                                    >
                                        {e.meetingCode}
                                    </Typography>

                                    <Typography
                                        className="meetingDate"
                                    >
                                        📅 {formatDate(e.date)}
                                    </Typography>

                                </CardContent>

                            </Card>
                        )
                    })
                    :
                    <div className="emptyHistory">
                        <div className="emptyIcon">🕘</div>

                        <h2>No Meeting History</h2>

                        <p>
                            Your previous meetings will appear here.
                        </p>

                        <Button
                            variant="contained"
                            className="startMeetingButton"
                            onClick={() => routeTo("/home")}
                        >
                            Start a Meeting
                        </Button>
                    </div>
            }

        </div>

    </div>
)
}
