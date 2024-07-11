"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Bubble {
    constructor(size, time) {
        this.sort_time = time;
        this.arr_size = size;
        this.arr = [];
        this.col_colors = [];
        this.arr_rand(this.arr);
        this.random_col_color(this.col_colors);
        this.createCanvas();
    }
    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.id = "myCanvas";
        canvas.className = "myCanvas";
        this.setCanvasSize(canvas);
        document.body.appendChild(canvas);
        window.addEventListener('resize', () => this.setCanvasSize(canvas));
    }
    setCanvasSize(canvas) {
        canvas.width = window.innerWidth * 0.9;
        canvas.height = window.innerHeight * 0.7;
    }
    arr_rand(arr) {
        for (let i = 0; i < this.arr_size; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
    }
    random_col_color(col_colors) {
        for (let i = 0; i < this.arr_size; i++) {
            col_colors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
        }
    }
    drawRectangle(x, y, width, height, color) {
        const canvas = document.getElementById('myCanvas');
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, width, height);
            }
        }
        else {
            console.error('Canvas not supported by your browser.');
        }
    }
    bubble_sort(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < (arr.length - i - 1); j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                    yield delay(this.sort_time);
                    this.visualizeArray(arr);
                    console.log(arr);
                }
            }
        });
    }
    visualizeArray(arr) {
        const canvas = document.getElementById('myCanvas');
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const barWidth = canvas.width / arr.length;
                for (let i = 0; i < arr.length; i++) {
                    const barHeight = arr[i] * (canvas.height / 100);
                    this.drawRectangle(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight, this.col_colors[i]);
                }
            }
        }
    }
}
let sort = new Bubble(30, 10);
sort.bubble_sort(sort.arr);
