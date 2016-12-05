import React from 'react';

export default class Main extends React{
    render: function() {
        return (
            <div>
                Всем привет, я компонент App! Я умею отображать новости.
                <News />
                <Comments />
            </div>
        );
    }
}



