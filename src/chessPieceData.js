module.exports = {
    blackRook: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "ROOK",
            team: "BLACK",
        },
        initialLocation: new Set(["c1r1", "c8r1"])
        
    },

    whiteRook: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "ROOK",
            team: "WHITE",
        },
        initialLocation: new Set(["c1r8", "c8r8"])
    },

    blackPawn: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "PAWN",
            team: "BLACK",

        },
        initialLocation: new Set(["c1r2", "c2r2", "c3r2", "c4r2", "c5r2", "c6r2", "c7r2", "c8r2"])
    },

    whitePawn: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "PAWN",
            team: "WHITE",
        },
        initialLocation: new Set(["c1r7", "c2r7", "c3r7", "c4r7", "c5r7", "c6r7", "c7r7", "c8r7"])
    },
}