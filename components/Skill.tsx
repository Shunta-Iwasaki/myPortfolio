import Stars from "./Stars";

type Props = {
    skill: string;
    starNum: number;
    info: string;
};

function Skill({ skill, starNum, info }: Props) {
    return (
        <tr className="">
            <td className="skills-item content-start">{skill}</td>
            <td className="mx-4 block skills-item">
                <Stars starNum={starNum} />
            </td>
            <td className="skills-item">{info}</td>
        </tr>
    );
}

export default Skill;
