


const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-form');
const closePopup = document.getElementById('close-popup');

const forms = {
    'free-trial': `
        <h3>무료체험 신청</h3>
        <form>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required> <br>

            <label for="experience">경험</label>
            <select id="experience" name="experience" required>
                <option value="yes">있음</option>
                <option value="no">없음</option>
            </select> <br>

            <label for="time">시간</label>
            <select id="time" name="time" required>
                <option>오전 9:00</option>
                <option>오전 10:30</option>
                <option>오후 6:00</option>
                <option>오후 7:30</option>
                <option>오후 9:00</option>
            </select>
             <br>

            <label for="people">인원</label>
            <input type="number" id="people" name="people" min="1" required> <br>

            <button type="submit">신청하기</button>
        </form>
    `,
    'drop-in': `
        <h3>드랍인 문의 및 신청</h3>
        <form>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required> <br>

            <label for="people">인원</label>
            <input type="number" id="people" name="people" min="1" required> <br>

            <label for="time">시간</label>
            <select id="time" name="time" required>
                <option>오전 9:00</option>
                <option>오전 10:30</option>
                <option>오후 6:00</option>
                <option>오후 7:30</option>
                <option>오후 9:00</option>
                <option>Open Gym</option>
            </select> <br>

            <button type="submit">신청하기</button>
        </form>
    `,
    'consult': `
        <h3>상담 예약</h3>
        <form>
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required> <br>

            <label for="experience">경험</label>
            <select id="experience" name="experience" required>
                <option value="yes">있음</option>
                <option value="no">없음</option>
            </select> <br>

            <label for="visit-time">시간</label>
            <input type="datetime-local" id="visit-time" name="visit-time" required> <br>

            <button type="submit">예약하기</button>
        </form>
    `
};

function openPopup(formKey) {
    popupContent.innerHTML = forms[formKey];
    popup.classList.remove('hidden');
}

function closePopupHandler() {
    popup.classList.add('hidden');
    popupContent.innerHTML = '';
}

document.getElementById('free-trial-btn').addEventListener('click', () => openPopup('free-trial'));
document.getElementById('drop-in-btn').addEventListener('click', () => openPopup('drop-in'));
document.getElementById('consult-btn').addEventListener('click', () => openPopup('consult'));
closePopup.addEventListener('click', closePopupHandler);

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopupHandler();
    }
});