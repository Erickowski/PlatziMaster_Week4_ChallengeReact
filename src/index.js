import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/index.scss';

const featureInfo = [
    {
        image: 'src/assets/static/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        image: 'src/assets/static/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time ar all. No need to trawl through all of your bookmarks.'
    },
    {
        image: 'src/assets/static/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },
];

const buttonsInfo = [
    {
        question : 'What is Bookmark?',
        answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacus erat. Etiam ut risus laoreet, vestibulum urna ut, tempus enim. Sed ullamcorper, ante a sodales rutrum, mi massa hendrerit felis, ut aliquam nunc sem vitae sapien. Nam lectus metus, tincidunt venenatis pellentesque eget, varius ut magna.'
    },
    {
        question : 'How can I request a new browser?',
        answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacus erat. Etiam ut risus laoreet, vestibulum urna ut, tempus enim. Sed ullamcorper, ante a sodales rutrum, mi massa hendrerit felis, ut aliquam nunc sem vitae sapien. Nam lectus metus, tincidunt venenatis pellentesque eget, varius ut magna.'
    },
    {
        question : 'Is there a mobile app?',
        answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacus erat. Etiam ut risus laoreet, vestibulum urna ut, tempus enim. Sed ullamcorper, ante a sodales rutrum, mi massa hendrerit felis, ut aliquam nunc sem vitae sapien. Nam lectus metus, tincidunt venenatis pellentesque eget, varius ut magna.'
    },
    {
        question : 'What about other Chromium Browsers?',
        answer : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lacus erat. Etiam ut risus laoreet, vestibulum urna ut, tempus enim. Sed ullamcorper, ante a sodales rutrum, mi massa hendrerit felis, ut aliquam nunc sem vitae sapien. Nam lectus metus, tincidunt venenatis pellentesque eget, varius ut magna.'
    },
]

ReactDOM.render(<App features={featureInfo} buttons={buttonsInfo} />, document.getElementById('app'));
