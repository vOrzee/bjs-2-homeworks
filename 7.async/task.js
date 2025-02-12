class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time == null || callback == null) { // Проверяем сразу и на null и на undefined (не строгое сравнение с null)
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some(it => it.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(it => it.time !== time);
	}

	getCurrentFormattedTime() {
	    const now = new Date();
	    const hours = String(now.getHours()).padStart(2, '0');
	    const minutes = String(now.getMinutes()).padStart(2, '0');
	    return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId !== null) { // Вообще можно не сравнивать явно
			return;
		}
		this.intervalId = setInterval(() =>
			this.alarmCollection.forEach(alarm => {
				if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) { // Как и здесь
					alarm.canCall = false;
					alarm.callback();
				}
			})
		, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(it => it.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}