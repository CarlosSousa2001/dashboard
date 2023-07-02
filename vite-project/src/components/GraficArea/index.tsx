import * as C from './styled'
import { Chart } from 'react-google-charts'

type Props = {
    income: number;
    expense: number;
}

const GraficArea = ({ income, expense }: Props) => {
    const data = [
        ["Task", "Hours per Day"],
        ["Ganhos", income],
        ["Despesas", expense],
    ];
    const options = {
        title: "Ganhos e perda totais em gráfico",
    };
    const dataUm = [
        ["Element", "Density", { role: "style" }],
        ["Ganhos", income, "3e54f9"],
        ["Despesas", expense, "red"],

      ];
    return (
        <C.Container>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={dataUm} />
        </C.Container>
    )
}

export default GraficArea