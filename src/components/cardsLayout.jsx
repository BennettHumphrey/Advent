
//numPos decides where the number will be placed on <Card>
//tl = Top Left, tr = Top Right, bl = Bottom Left, br = Bottom Right
const numPos = (x) => {
    switch(x) {
        case "tl":
            return "justify-start items-start";
        case "tr":
            return "justify-end items-start";
        case "bl":
            return "justify-start items-end";
        case "br":
            return "justify-end items-end";
    }
}


export const cardsLayout = [
    {
        id: 0,
        mobile: {
            rows: [1, 3],
            cols: [1, 2],
            pos: numPos("br")
    },
        desktop: {
            rows: [1, 3],
            cols: [1, 2],
            pos: numPos("br")
    },
    },
    {
        id: 1,
        mobile: {
            rows: [1, 3],
            cols: [2, 3],
            pos: numPos("tl")
    },
        desktop: {
            rows: [1, 3],
            cols: [2, 3],
            pos: numPos("tl")
    },
    },
    {
        id: 2,
        mobile: {
            rows: [3, 5],
            cols: [1, 3],
            pos: numPos("br")
    },
        desktop: {
            rows: [1, 3],
            cols: [3, 5],
            pos: numPos("br")
    },
    },
    {
        id: 3,
        mobile: {
            rows: [5, 7],
            cols: [1, 2],
            pos: numPos("tl")
    },
        desktop: {
            rows: [1, 3],
            cols: [5, 6],
            pos: numPos("tr")
    },
    },
    {
        id: 4,
        mobile: {
            rows: [5, 9],
            cols: [2, 3],
            pos: numPos("br")
    },
        desktop: {
            rows: [3, 7],
            cols: [1, 2],
            pos: numPos("br")
    },
    },
    {
        id: 5,
        mobile: {
            rows: [7, 9],
            cols: [1, 2],
            pos: numPos("br")
    },
        desktop: {
            rows: [3, 5],
            cols: [2, 3],
            pos: numPos("tr")
    },
    },
    {
        id: 6,
        mobile: {
            rows:[9, 10],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[3, 4],
            cols:[3, 4],
            pos: numPos("br")
        },
    },
    {
        id: 7,
        mobile: {
            rows:[9, 10],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[4, 5],
            cols:[3, 4],
            pos: numPos("bl")
        },
    },
    {
        id: 8,
        mobile: {
            rows:[10, 12],
            cols:[1, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[3, 5],
            cols:[4, 6],
            pos: numPos("tr")
        },
    },
    {
        id: 9,
        mobile: {
            rows:[12, 14],
            cols:[1, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[5, 7],
            cols:[2, 4],
            pos: numPos("tr")

        },
    },
    {
        id: 10,
        mobile: {
            rows:[14, 15],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[5, 6],
            cols:[4, 5],
            pos: numPos("bl")
        },
    },
    {
        id: 11,
        mobile: {
            rows:[15, 16],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[6, 7],
            cols:[4, 5],
            pos: numPos("tr")
        },
    },
    {
        id: 12,
        mobile: {
            rows:[14, 16],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[5, 7],
            cols:[5, 6],
            pos: numPos("tl")
        },
    },
    {
        id: 13,
        mobile: {
            rows:[16, 18],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[7, 9],
            cols:[1, 2],
            pos: numPos("tl")
        },
    },
    {
        id: 14,
        mobile: {
            rows:[18, 20],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[9, 11],
            cols:[1, 2],
            pos: numPos("tr")
        },
    },
    {
        id: 15,
        mobile: {
            rows:[16, 20],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[7, 11],
            cols:[2, 3],
            pos: numPos("br")
        },
    },
    {
        id: 16,
        mobile: {
            rows:[20, 22],
            cols:[1, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[7, 9],
            cols:[3, 5],
            pos: numPos("tr")
        },
    },
    {
        id: 17,
        mobile: {
            rows:[22, 23],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[7, 8],
            cols:[5, 6],
            pos: numPos("br")
        },
    },
    {
        id: 18,
        mobile: {
            rows:[22, 23],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[8, 9],
            cols:[5, 6],
            pos: numPos("bl")
        },
    },
    {
        id: 19,
        mobile: {
            rows:[23, 24],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[9, 10],
            cols:[3, 4],
            pos: numPos("bl")
        },
    },
    {
        id: 20,
        mobile: {
            rows:[23, 24],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[10, 11],
            cols:[3, 4],
            pos: numPos("tr")
        },
    },
    {
        id: 21,
        mobile: {
            rows:[24, 26],
            cols:[1, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[9, 11],
            cols:[4, 6],
            pos: numPos("tr")
        },
    },
    {
        id: 22,
        mobile: {
            rows:[26, 28],
            cols:[1, 2],
            pos: numPos("br")
        },
        desktop: {
            rows:[11, 13],
            cols:[1, 3],
            pos: numPos("tr")
        },
    },
    {
        id: 23,
        mobile: {
            rows:[26, 28],
            cols:[2, 3],
            pos: numPos("br")
        },
        desktop: {
            rows:[11, 13],
            cols:[3, 4],
            pos: numPos("br")
        },
    },
    {
        id: 24,
        mobile: {
            rows:[28, 30],
            cols:[1, 3],
        },
        desktop: {
            rows:[11, 13],
            cols:[4, 6],
        },
    },
]