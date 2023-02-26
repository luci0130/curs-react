import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <h1 id="javascript-advanced-react-proiectul-1">JavaScript Advanced - React - Proiectul 1</h1>
                <p>Aplicatie de listare si adaugare useri noi</p>
                <h2 id="demo">Demo</h2>
                <p>Puteti accesa proiectul prin link-ul următor:</p>
                <p><a href="https://react.basic.turi.ro/">https://react.basic.turi.ro/</a></p>
                <h2 id="functionalitati">Functionalitati</h2>
                <ul>
                    <li><p>Click pe Switch Users - va lista utilizatori de la urmatorul API: <a
                        href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>
                    </p>
                    </li>
                    <li><p>Click pe Switch Posts - va lista postarile de la urmatorul API: <a
                        href="https://jsonplaceholder.typicode.com/posts">https://jsonplaceholder.typicode.com/posts</a>
                    </p>
                    </li>
                    <li><p>Click pe &quot;Create User&quot; - va adauga un user in lista de useri curenti</p>
                    </li>
                    <li><p>Click pe &quot;Delete&quot; - va sterge un user din lista de useri curenti</p>
                    </li>
                    <li><p>Click pe &quot;Choose the color&quot; - Background - va schimba culoarea de background a
                        aplicatiei.</p>
                    </li>
                    <li><p>Click pe &quot;Choose the color&quot; - Text - va schimba culoarea textului in intreaga
                        aplicatie.</p>
                    </li>
                </ul>
                <h2 id="pentru-a-rula-local-proiectul">Pentru a rula local proiectul</h2>
                <ol>
                    <li><p><code>git clone https://github.com/luci0130/curs-react.git</code></p>
                    </li>
                    <li><p><code>cd curs-react</code></p>
                    </li>
                    <li><p><code>npm install</code></p>
                    </li>
                    <li><p><code>npm start</code></p>
                    </li>
                </ol>
                <h2 id="commits">Commits</h2>
                <p>Pentru a vedea progresiv cum a fost realizat acest proiect urmariti urmatoarele commit-uri.</p>
                <ul>
                    <li><p>Cursul 2: Componente, props, state:</p>
                        <ul>
                            <li><a
                                href="https://github.com/luci0130/curs-react/commit/4a5d3019fa293e43c75da14c985073a4b8c59eb6">https://github.com/luci0130/curs-react/commit/4a5d3019fa293e43c75da14c985073a4b8c59eb6</a>
                            </li>
                            <li><a
                                href="https://github.com/luci0130/curs-react/commit/22006c0dbaf5b7bf77e77cd7200a6210d56ef350">https://github.com/luci0130/curs-react/commit/22006c0dbaf5b7bf77e77cd7200a6210d56ef350</a>
                            </li>
                        </ul>
                    </li>
                    <li><p>Curs 3: Lifecycle methods, randare conditionata / repetitiva:</p>
                        <ul>
                            <li>Randare conditionata - <a
                                href="https://github.com/luci0130/curs-react/commit/03930d2b3a5fc42b0f52d0fdfd109dbf00f6c7ad">https://github.com/luci0130/curs-react/commit/03930d2b3a5fc42b0f52d0fdfd109dbf00f6c7ad</a>
                            </li>
                            <li>Randare repetitiva - <a
                                href="https://github.com/luci0130/curs-react/commit/b13f9de9aad930da09d5d1fcac276a9ad2e9f700">https://github.com/luci0130/curs-react/commit/b13f9de9aad930da09d5d1fcac276a9ad2e9f700</a>
                            </li>
                            <li>Lifecycle methods - <a
                                href="https://github.com/luci0130/curs-react/commit/c479c40dce221b558a32215c0f448df9bdf61d2c">https://github.com/luci0130/curs-react/commit/c479c40dce221b558a32215c0f448df9bdf61d2c</a>
                            </li>
                            <li>Practice: ternary, map, async - <a
                                href="https://github.com/luci0130/curs-react/commit/b6a3d39827fab582e8a99d03984c94b180007b9c">https://github.com/luci0130/curs-react/commit/b6a3d39827fab582e8a99d03984c94b180007b9c</a>
                            </li>
                        </ul>
                    </li>
                    <li><p>Curs 4: Formulare, pasarea datelor intre component: </p>
                        <ul>
                            <li><a
                                href="https://github.com/luci0130/curs-react/commit/c0d14116feb232cb0455065120ac746e62862358">https://github.com/luci0130/curs-react/commit/c0d14116feb232cb0455065120ac746e62862358</a>
                            </li>
                        </ul>
                    </li>
                    <li><p>Proiectul 1: <a
                        href="https://github.com/luci0130/curs-react/commit/6f7cb8757eaae997bf8cc7cbe1da9e1058cf69dd">https://github.com/luci0130/curs-react/commit/6f7cb8757eaae997bf8cc7cbe1da9e1058cf69dd</a>
                    </p>
                    </li>
                </ul>
                <h2 id="screenshot">Screenshot</h2>
                <p><img src="/screenshot2.png?raw=true" alt="Screenshot" title="Screenshot"></img></p>

            </div>
        );
    }
}

export default About;
