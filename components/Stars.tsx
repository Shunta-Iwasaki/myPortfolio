type starsProps = {
    starNum: number;
};

function Stars({ starNum }: starsProps) {
    let starText = "";
    for (let i = 0; i < 5; i++) {
        if (starNum > i) {
            starText += "⭐️";
        } else {
            starText += "★";
        }
    }
    return starText;
}

export default Stars;
