import * as React from "react";

import "./Info.scss";

export default class Info extends React.Component<any> {
    render() {
        return (
            <div className="info">
                <div className="oplist">
                    <div className="info__title">Which icons are missing?</div>
                    <div className="oplist__overview">
                        <div className="oplist__list">
                            <span>Attacker</span>
                            <ul>
                                <li>Ash</li>
                                <li>Blackbeard</li>
                                <li>Blitz</li>
                                <li>Buck</li>
                                <li>Capitao</li>
                                <li>Fuze</li>
                                <li>Glaz</li>
                                <li>IQ</li>
                                <li>Montagne</li>
                                <li>Sledge</li>
                                <li>Thatcher</li>
                                <li>Thermite</li>
                                <li>Twitch</li>
                            </ul>
                        </div>
                        <div className="oplist__list">
                            <span>Defender</span>
                            <ul>
                                <li>Bandit</li>
                                <li>Castle</li>
                                <li>Caviera</li>
                                <li>Doc</li>
                                <li>Frost</li>
                                <li>Jäger</li>
                                <li>Kapkan</li>
                                <li>Mute</li>
                                <li>Pulse</li>
                                <li>Rook</li>
                                <li>Smoke</li>
                                <li>Tachanka</li>
                                <li>Valkyrie</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="info__divider" />
                <div className="contribute">
                    <div className="info__title">How can i help?</div>
                    <p>If you know Adobe Illustrator and want to help this project, please read the <a href="https://github.com/MarcoPixel/r6-operatoricons/blob/master/CONTRIBUTING.MD">guidelines for contributing</a> first. We're glad for every person who can help us :)</p>
                    <div className="info__title">Links</div>
                    <div className="contribute__links">
                        <a href="https://github.com/MarcoPixel/r6-operatoricons">Github repo</a>
                        <a href="https://github.com/MarcoPixel/r6-operatoricons/blob/master/LICENSE.MD">License</a>
                    </div>
                </div>
            </div>
        );
    }
}
