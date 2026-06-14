// ============================================
// TEORIE - A2.2 Lecția 11: Andreeas Missverständnis
// Claudia Toth · Annettes Deutschkurs
// Reflexive Verben mit Bedeutungsänderung — verbe care își schimbă sensul cu „sich"
// Sursă DF: Lectia 11 (Reflexive Verben mit Bedeutungsänderung — Akkusativ & Dativ)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🔄 1. Același verb, două sensuri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele lecției</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Încurcă verbele 😅</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 „sich" schimbă sensul!</h4>
                <p>Unele verbe germane înseamnă <strong>cu totul altceva</strong> când le folosești cu pronumele reflexiv <strong>sich</strong>. Andreea a învățat asta pe pielea ei: a vrut să spună „<em>îmi imaginez</em>" dar a spus „<em>prezint</em>"! 😅</p>
                <div class="example-box">
                    <p class="de">Ich stelle <strong>mir</strong> eine Reise vor. <span style="color:#6b7280;">(cu sich = a-și imagina)</span></p>
                    <p class="ro">Îmi imaginez o călătorie.</p>
                </div>
                <div class="example-box">
                    <p class="de">Ich stelle dir meinen Freund vor. <span style="color:#6b7280;">(fără sich = a prezenta)</span></p>
                    <p class="ro">Ți-l prezint pe prietenul meu.</p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🗺️ Ce vezi în lecție</h4>
                <ul>
                    <li><strong>2.</strong> Tabelul mare: verbul <strong>cu sich</strong> vs <strong>fără sich</strong> (sich vorstellen, sich verlassen auf, sich erinnern an…)</li>
                    <li><strong>3.</strong> Capcanele-stele: <strong>sich verlassen auf ≠ verlassen</strong> · <strong>sich umziehen ≠ umziehen</strong></li>
                    <li><strong>4.</strong> Reflexivul: <strong>Akkusativ (mich)</strong> vs <strong>Dativ (mir)</strong> + prepoziția fixă (auf/an/vor)</li>
                    <li><strong>5.</strong> Recap + dialog (Missverständnis-ul Andreei)</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Nu te speria — sunt câteva verbe „cu două fețe". Odată ce le știi, nu mai faci greșeala mea. Trucul: <strong>cu „sich" = un sens, fără „sich" = alt sens</strong>. Hai să le vedem! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie un mic text despre tine folosind cel puțin <strong>6 verbe reflexive cu schimbare de sens</strong> (sich vorstellen, sich verlassen auf, sich erinnern an, sich entschuldigen, sich treffen mit, sich umziehen…). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/pXTJKbDeHi8qjxTN8" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Tabelul mare -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📋 2. Tabelul: cu sich vs fără sich</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-tabelul.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>CU sich</th><th>FĂRĂ sich</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>sich vorstellen</strong> = a-și imagina <em>(+ Dativ: mir)</em></td><td><strong>vorstellen</strong> = a prezenta (pe cineva)</td></tr>
                    <tr><td><strong>sich verlassen auf</strong> = a se baza pe</td><td><strong>verlassen</strong> = a părăsi / a pleca</td></tr>
                    <tr><td><strong>sich erinnern an</strong> = a-și aminti</td><td><strong>erinnern an</strong> = a-i reaminti cuiva</td></tr>
                    <tr><td><strong>sich entschuldigen</strong> = a-și cere scuze</td><td><strong>entschuldigen</strong> = a ierta / a scuza</td></tr>
                    <tr><td><strong>sich treffen mit</strong> = a se întâlni (intenționat)</td><td><strong>treffen</strong> = a întâlni (întâmplător)</td></tr>
                    <tr><td><strong>sich umziehen</strong> = a se schimba (hainele)</td><td><strong>umziehen</strong> = a se muta (locuința)</td></tr>
                    <tr><td><strong>sich fürchten vor</strong> = a se teme de</td><td><strong>verstehen</strong> = a înțelege (ceva)</td></tr>
                    <tr><td><strong>sich verstehen mit</strong> = a se înțelege cu (cineva)</td><td><strong>sich merken</strong> = a memora <em>(+ Dativ)</em> vs <strong>merken</strong> = a observa</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Cel mai des întâlnești la A2: <strong>sich vorstellen</strong> (a-și imagina), <strong>sich verlassen auf</strong> (a se baza pe), <strong>sich erinnern an</strong> (a-și aminti) și <strong>sich umziehen</strong> (a se schimba/a se muta). Pe astea le reții musai! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Capcanele-stele -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⭐ 3. Capcanele-stele (verlassen, umziehen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-stars.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background:#fef3c7; border-left-color:#f59e0b;">
                <h4>⚡ sich verlassen auf ≠ verlassen</h4>
                <p style="margin:0;">Aceeași literă, două lumi diferite:<br>
                ✅ Ich <strong>verlasse mich auf</strong> dich. = Mă <strong>bazez pe</strong> tine.<br>
                ✅ Anna hat Felix <strong>verlassen</strong>. = Anna l-a <strong>părăsit</strong> pe Felix.</p>
            </div>

            <div class="theory-box" style="background:#fef3c7; border-left-color:#f59e0b;">
                <h4>⚡ sich umziehen ≠ umziehen</h4>
                <p style="margin:0;">
                ✅ Ich <strong>ziehe mich um</strong>. = Mă <strong>schimb</strong> (hainele).<br>
                ✅ Im Mai <strong>ziehe</strong> ich nach Berlin <strong>um</strong>. = În mai mă <strong>mut</strong> la Berlin.</p>
            </div>

            <div class="theory-box info-box">
                <h4>💡 Și „vorstellen" cu trei fețe</h4>
                <ul>
                    <li><strong>jdn vorstellen</strong> — a prezenta pe cineva: Ich stelle dir Mihai vor.</li>
                    <li><strong>sich (Akk) vorstellen</strong> — a se prezenta: Darf ich <strong>mich</strong> vorstellen?</li>
                    <li><strong>sich (Dat) etwas vorstellen</strong> — a-și imagina: Ich stelle <strong>mir</strong> das vor.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>La „vorstellen", uită-te la pronume: <strong>mich</strong> (mă prezint) vs <strong>mir</strong> (îmi imaginez). O literă schimbă tot! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Akkusativ vs Dativ + prepoziție -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🪞 4. mich vs mir + prepoziția fixă</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-akk-dativ-prep.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Persoană</th><th>Akkusativ</th><th>Dativ</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td>mich</td><td>mir</td></tr>
                    <tr><td><strong>du</strong></td><td>dich</td><td>dir</td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>sich</td><td>sich</td></tr>
                    <tr><td><strong>wir</strong></td><td>uns</td><td>uns</td></tr>
                    <tr><td><strong>ihr</strong></td><td>euch</td><td>euch</td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>sich</td><td>sich</td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>🔑 Când Akkusativ, când Dativ?</h4>
                <ul>
                    <li><strong>Akkusativ (mich)</strong> — la majoritatea: sich verlassen, sich erinnern, sich entschuldigen, sich treffen, sich umziehen, sich fürchten, sich verstehen.</li>
                    <li><strong>Dativ (mir)</strong> — când mai e un obiect direct: sich (Dat) etwas <strong>vorstellen</strong> (a imagina), sich (Dat) etwas <strong>merken</strong> (a memora), sich (Dat) etwas <strong>leisten</strong> (a-și permite).</li>
                    <li>Doar la <strong>ich</strong> și <strong>du</strong> se vede diferența (mich/mir, dich/dir); restul = <strong>sich</strong>.</li>
                </ul>
            </div>

            <div class="theory-box info-box">
                <h4>🔗 Prepoziția fixă</h4>
                <ul>
                    <li><strong>sich verlassen AUF</strong> + Akk · <strong>sich erinnern AN</strong> + Akk · <strong>sich freuen AUF/ÜBER</strong></li>
                    <li><strong>sich fürchten VOR</strong> + Dat · <strong>sich entschuldigen BEI</strong> + Dat · <strong>sich treffen / verstehen MIT</strong> + Dat</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Învață verbul ÎMPREUNĂ cu prepoziția lui: nu „sich verlassen", ci <strong>„sich verlassen AUF"</strong>. Așa nu mai eziți: „Ich verlasse mich <strong>auf</strong> dich". 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Recap + dialog (Missverständnis-ul Andreei)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li><strong>sich</strong> schimbă sensul: sich vorstellen (imaginezi) ≠ vorstellen (prezinți); sich verlassen auf (te bazezi) ≠ verlassen (părăsești).</li>
                    <li>Reflexiv: <strong>Akkusativ (mich)</strong> de obicei; <strong>Dativ (mir)</strong> la vorstellen/merken/leisten.</li>
                    <li>Verbul vine cu <strong>prepoziția lui</strong>: auf / an / vor / mit / bei.</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Andreeas Missverständnis</h4>
                <p><strong style="color:#065f46;">Andreea:</strong> Annette, ich stelle <strong>dich</strong> eine Weltreise vor!<br><span class="ro-translation">(greșit — voia „îmi imaginez")</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> 😄 Du meinst: „Ich stelle <strong>mir</strong> eine Weltreise vor" — îmi imaginez. Cu <strong>mir</strong>, nu <strong>dich</strong>!<br><span class="ro-translation">Vrei să spui: „Îmi imaginez o călătorie în jurul lumii."</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Ah! Und „Ich <strong>verlasse mich auf</strong> dich" heißt…?<br><span class="ro-translation">Și „Ich verlasse mich auf dich" înseamnă…?</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> „Mă bazez pe tine." Aber „Ich <strong>verlasse</strong> dich" — fără sich — heißt „te părăsesc"! Vorsicht!<br><span class="ro-translation">Dar „Ich verlasse dich" — fără sich — înseamnă „te părăsesc"!</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Oje! Gut, dass ich <strong>mir</strong> das jetzt <strong>merke</strong>!<br><span class="ro-translation">Vai! Bine că-mi notez (memorez) asta acum!</span></p>

            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vezi? Un „sich" sau un „mir/mich" greșit schimbă TOT sensul. Acum le știi — și nu mai faci Missverständnis ca mine! Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
