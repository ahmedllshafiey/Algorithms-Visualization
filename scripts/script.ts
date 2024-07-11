class Bubble {
    public arr: number[];
    public sort_time: number;
    public arr_size: number;
    public col_colors: string[];
  
    constructor(size: number, time: number) {
      this.sort_time = time;
      this.arr_size = size;
      this.arr = [];
      this.col_colors = [];
      this.arr_rand(this.arr);
      this.random_col_color(this.col_colors);
      this.createCanvas();
    }
  
    private createCanvas(): void {
      let canvas = document.createElement('canvas');
      canvas.id = "myCanvas";
      canvas.className = "myCanvas";
      this.setCanvasSize(canvas);
      document.body.appendChild(canvas);
      window.addEventListener('resize', () => this.setCanvasSize(canvas));
    }
  
    private setCanvasSize(canvas: HTMLCanvasElement): void {
      canvas.width = window.innerWidth * 0.9;
      canvas.height = window.innerHeight * 0.7;
    }
  
    public arr_rand(arr: number[]): void {
      for (let i = 0; i < this.arr_size; i++) {
        arr.push(Math.floor(Math.random() * 100));
      }
    }
  
    public random_col_color(col_colors: string[]): void {
      for (let i = 0; i < this.arr_size; i++) {
        col_colors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
      }
    }
  
    public drawRectangle(x: number, y: number, width: number, height: number, color: string): void {
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, width, height);
        }
      } else {
        console.error('Canvas not supported by your browser.');
      }
    }
  
    public async bubble_sort(arr: number[]): Promise<void> {
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
          await delay(this.sort_time);
          this.visualizeArray(arr);
          console.log(arr);
        }
      }
    }
  
    private visualizeArray(arr: number[]): void {
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
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

  let sort: Bubble = new Bubble(30, 10);
  sort.bubble_sort(sort.arr);