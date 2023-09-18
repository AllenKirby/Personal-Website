import React from "react";
import './css/homepage.css';

const homepage = ()=>{
    return(
        <main>
            <section className="intro">
                <article>
                    <h1>I am Allen Kirby V. Santileces</h1>
                    <p>"I'm a passionate aspiring Web Developer excited about creating user-friendly websites with <br /> my coding skills"</p>
                    <button id="download">
                        <span>Download CV</span>
                    </button>
                </article>
            </section>
            <div className="picture">
                <div id="allen">

                </div>
            </div>
        </main>
    );
};
export default homepage;