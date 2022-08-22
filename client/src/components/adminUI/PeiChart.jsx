import { PieChart } from "react-minimal-pie-chart";

const data = [
    {
        color: "#E38627",
        title: "Total",
        value: 25,
    },
    {
        color: "#C13C37",
        title: "Confirmed",
        value: 15,
    },
    {
        color: "#6A2135",
        title: "Pending",
        value: 20,
    },
]

const PeiChart = () => (
    <div className="chart-container">
        <PieChart
            animate
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={data}
            lengthAngle={360}
            lineWidth={15}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
            label={(data) => data.dataEntry.title}
            labelPosition={65}
            labelStyle={{
                fontSize: "10px",
                fontColor: "FFFFFA",
                fontWeight: "800",
            }}
        />
    </div>
);

export default PeiChart