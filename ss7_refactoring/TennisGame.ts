import {Messenger} from "./messenger";

export class TennisGame {
    score: string = '';

    getScore(player1Name: string,
             player2Name: string,
             m_score1: number,
             m_score2: number) {
        let tempScore = 0;
        let playerPoint = 4;
        let advantageScore = 1;
        let winScore = 2;
        if (m_score1 == m_score2) {
            this.displayScore(m_score1);
        } else if (m_score1 >= playerPoint || m_score2 >= playerPoint) {
            this.displayMsg(m_score1, m_score2, advantageScore, player1Name, player2Name, winScore);
        } else {
            for (let i = 1; i < 3; i++) {
                if (i == 1) tempScore = m_score1;
                else {
                    this.score += "-";
                    tempScore = m_score2;
                }
                switch (tempScore) {
                    case 0:
                        this.score += "Love";
                        break;
                    case 1:
                        this.score += "Fifteen";
                        break;
                    case 2:
                        this.score += "Thirty";
                        break;
                    case 3:
                        this.score += "Forty";
                        break;
                }
            }
        }
    }

    private displayMsg(m_score1: number, m_score2: number, advantageScore: number, player1Name: string, player2Name: string, winScore: number) {
        let minusResult = m_score1 - m_score2;
        if (minusResult == advantageScore) this.score = `${Messenger.ADVANTAGE} ${player1Name}`;
        else if (minusResult == -advantageScore) this.score = `${Messenger.ADVANTAGE} ${player2Name}`;
        else if (minusResult >= winScore) this.score = `${Messenger.WIN} ${player1Name}`;
        else this.score = `${Messenger.WIN} ${player2Name}`;
    }

    private displayScore(m_score1: number) {
        switch (m_score1) {
            case 0:
                this.score = Messenger.ZERO;
                break;
            case 1:
                this.score = Messenger.ONE;
                break;
            case 2:
                this.score = Messenger.TWO;
                break;
            case 3:
                this.score = Messenger.THREE;
                break;
            default:
                this.score = Messenger.DEFAULT;
                break;

        }
    }
}
