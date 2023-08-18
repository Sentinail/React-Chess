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

    blackHorse: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "HORSE",
            team: "BLACK",
        },
        initialLocation: new Set(["c2r1", "c7r1"])
    },

    whiteHorse: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "HORSE",
            team: "WHITE",
        },
        initialLocation: new Set(["c2r8", "c7r8"])
    },

    blackBishop: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "BISHOP",
            team: "BLACK",
        },
        initialLocation: new Set(["c3r1", "c6r1"])
    },

    whiteBishop: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "BISHOP",
            team: "WHITE",
        },
        initialLocation: new Set(["c3r8", "c6r8"])
    },

    blackQueen: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "QUEEN",
            team: "BLACK",
        },
        initialLocation: new Set(["c4r1"])
    },

    whiteQueen: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "QUEEN",
            team: "WHITE",
        },
        initialLocation: new Set(["c4r8"])
    },

    blackKing: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "KING",
            team: "BLACK",
        },
        initialLocation: new Set(["c5r1"])
    },

    whiteKing: {
        pieceData: {
            chessPieceImg: null,
            chessPieceName: "KING",
            team: "WHITE",
        },
        initialLocation: new Set(["c5r8"])
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