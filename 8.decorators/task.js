//Задача № 1
function cachingDecoratorNew(func) {
  const cache = []
  return function(...args) {
  	const hash = md5([...args]);
    const cachedElement = cache.find(it => it.hash === hash);
    if (cachedElement) {
      return `Из кеша: ${cachedElement.value}`;
    }
  	const value = func(...args);
  	
  	if (cache.length === 5) {
  		cache.shift();
  	}

  	cache.push({hash, value});
  	return `Вычисляем: ${value}`;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let isFirstCall = true;

	function wrapper(...args) {
		wrapper.allCount++;

		if (isFirstCall) {
			func(...args);
			wrapper.count++;
			isFirstCall = false;
			return;
		}

		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;

	return wrapper;
}

