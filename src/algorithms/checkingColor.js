export const checkColor = (id, row, primaryHexColor, secondaryHexColor) => {

    if (row % 2 !== 0 && id % 2 === 0) {
        return primaryHexColor
    }

    else if ( row % 2 === 0 && id % 2 !== 0) {
        return primaryHexColor
    }

    return secondaryHexColor
}