class Options {
    constructor(height, width, bg, fontSize, textAlight) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlight = textAlight;
    }

    buildDiv(text) {
        let el = document.createElement('div');
        document.body.appendChild(el);

        el.textContent = text;
        el.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.bg};
                            font-size:${this.fontSize}px; text-align:${this.textAlight};`;
    }
}

const divArea = new Options(100, 200, "red", 42, "right");
divArea.buildDiv("adsads");