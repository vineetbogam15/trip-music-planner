import { Card } from "@mui/material";
import { Button } from "@mui/material";

import './Components.css'
import { useState } from "react";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FlagIcon from '@mui/icons-material/Flag';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TrainIcon from '@mui/icons-material/Train';
import TravelMusic from "./TravelMusic";

const TravelOutput = (props) => {
    const travelTime = props.travelTime;
    const start = props.start;
    const end = props.end;

    const [playlist, setPlaylist] = useState(["1. Choose your starting and ending stops.", "2. Click GO to find out your estimated travel time.", "3. Generate a music playlist for your trip!"]);

    const generateRandomPlaylist = (duration) => {
        const songs = [
            "[3:28] Paint The Town Red by Doja Cat",
"[3:43] Seven (feat. Latto) (Explicit Ver.) by Jung Kook, Latto",
"[3:52] 3D (feat. Jack Harlow) by Jung Kook, Jack Harlow",
"[3:27] greedy by Tate McRae",
"[3:36] Cruel Summer by Taylor Swift",
"[3:47] Strangers by Kenya Grace",
"[3:35] QLONA by KAROL G, Peso Pluma",
"[3:42] LALA by Myke Towers",
"[3:50] UN PREVIEW by Bad Bunny",
"[3:32] vampire by Olivia Rodrigo",
"[3:28] Si No Estás by iñigo quintero",
"[3:53] fukumean by Gunna",
"[3:49] Columbia by Quevedo",
"[3:56] LADY GAGA by Peso Pluma, Gabito Ballesteros, Junior H",
"[3:34] What Was I Made For? [From The Motion Picture 'Barbie'] by Billie Eilish",
"[3:45] I Wanna Be Yours by Arctic Monkeys",
"[3:21] Dance The Night - From Barbie The Album by Dua Lipa",
"[3:37] Daylight by David Kushner",
"[3:26] Prada by cassö, RAYE, D-Block Europe",
"[3:24] As It Was by Harry Styles",
"[3:56] Que Onda by Calle 24, Chino Pacas, Fuerza Regida",
"[3:39] Starboy by The Weeknd, Daft Punk",
"[3:29] Según Quién by Maluma, Carin Leon",
"[3:58] Kill Bill by SZA",
"[3:47] bad idea right? by Olivia Rodrigo",
"[3:35] Chaleya by Anirudh Ravichander, Arijit Singh, Shilpa Rao, Kumaar",
"[3:41] Primera Cita by Carin Leon",
"[3:49] I Remember Everything (feat. Kacey Musgraves) by Zach Bryan, Kacey Musgraves",
"[3:31] My Love Mine All Mine by Mitski",
"[3:53] Blank Space by Taylor Swift",
"[3:43] Slow Dancing by V",
"[3:36] Classy 101 by Feid, Young Miko",
"[3:51] Sprinter by Dave, Central Cee",
"[3:20] Style by Taylor Swift",
"[3:54] Die For You by The Weeknd",
"[3:44] Holanda by Jhayco",
"[3:30] Sweater Weather by The Neighbourhood",
"[3:51] Another Love by Tom Odell",
"[3:45] Popular (with Playboi Carti & Madonna) - Music from the HBO Original Series by The Weeknd, Playboi Carti, Madonna",
"[3:57] Flowers by Miley Cyrus",
"[3:22] Super Shy by NewJeans",
"[3:50] un x100to by Grupo Frontera, Bad Bunny",
"[3:39] Anti-Hero by Taylor Swift",
"[3:52] Ella Baila Sola by Eslabon Armado, Peso Pluma",
"[3:30] Snooze by SZA",
"[3:28] I KNOW ? by Travis Scott",
"[3:55] get him back! by Olivia Rodrigo",
"[3:34] Water by Tyla",
"[3:41] Heeriye (feat. Arijit Singh) by Jasleen Royal, Arijit Singh, Dulquer Salmaan",
"[3:46] Calm Down (with Selena Gomez) by Rema, Selena Gomez"
        ];

        // each song is ~3 minutes
        const numberOfSongs = Math.ceil(duration / 3); 
        const shuffledSongs = shuffleArray(songs);
        const selectedSongs = shuffledSongs.slice(0, numberOfSongs);

        return selectedSongs;
    }

    // shuffle array of songs
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleGeneratePlaylist = () => {
        const generatedPlaylist = generateRandomPlaylist(travelTime);
        setPlaylist(generatedPlaylist);
    }

    return (
        <div>
            <div>
                <Card variant="outlined" sx={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '30vw', marginRight: '30vw', padding: 2, textAlign: 'left' }}>
                    <p className="TravelOutputItem"><TrainIcon sx={{ marginRight: .5 }} /> Mode of travel: RAIL</p>
                    <p className="TravelOutputItem"><PinDropIcon sx={{ marginRight: .5 }} /> Starting stop: {start}</p>
                    <p className="TravelOutputItem"><FlagIcon sx={{ marginRight: .5 }} /> Ending stop: {end}</p>
                    <p className="TravelOutputItem"><AccessAlarmIcon sx={{ marginRight: .5 }} /> Estimated travel time: {travelTime} minutes</p>
                </Card>
            </div>

            <Button sx={{ margin: 1 }} onClick={handleGeneratePlaylist}>
                Generate Music Playlist <MusicNoteIcon sx={{ marginLeft: .8 }} />
            </Button>

            <TravelMusic playlist={playlist} />
        </div>
    )
}

export default TravelOutput;
