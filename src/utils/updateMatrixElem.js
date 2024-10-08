export const updateMatrixElement = (rowIndex, colIndex, value, setState) => {
    setState(prevMatrix => {
        // Matritsaning yangi nusxasini yaratish
        const newMatrix = prevMatrix.map((row, rIndex) => {
            if (rIndex === rowIndex) {
                // Agar hozirgi qator bo'lsa, yangi qator yarating
                return row.map((col, cIndex) => {
                    if (cIndex === colIndex) {
                        // Agar hozirgi ustun bo'lsa, yangi qiymat o'rnatish
                        return value;
                    }
                    return col; // Aks holda, eski qiymatni qaytaring
                });
            }
            return row; // Aks holda, eski qatorni qaytaring
        });
        return newMatrix;
    });
};
