import {react} from 'react';
import './widgets.css';
import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () =>{
    return(
        <div className='widgets'>
           <div className='widgets_input'>
            <SearchIcon className='widgets_searchIcon' />
            <input type='text' placeholder='SearchTwitter'/>
           </div>

           <div className='widgets_wedgetContainer'>
            <h2>Whats happening</h2>
           
           <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
            <TwitterTimelineEmbed
            sourceType='profile'
            screenName='elonmusk'
            options={{height:400}}
            />
            </div>

        </div>
    );
};

export default Widgets;