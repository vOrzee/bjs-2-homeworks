﻿function parseCount(value) {
    const result = Number.parseFloat(value);
    
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    
    return result;
}

function validateCount(value) {
    try {
    	return parseCount(value);	
    } catch (error) {
    	return error;
    }
}

class Triangle {
	constructor(a, b, c) {
		if (c > a + b || a > b + c || b > a + c) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = (this.a + this.b + this.c) / 2
		return Number(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3));
	}
}

function getTriangle(a, b, c) {
    try {
    	return new Triangle(a, b, c);	
    } catch (error) {
    	return {
    		get perimeter() { return "Ошибка! Треугольник не существует"; },
    		get area() { return "Ошибка! Треугольник не существует"; }
    	};
    }
}