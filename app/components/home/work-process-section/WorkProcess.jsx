import { WorkProcessCard } from './WorkProcessCard';

export default function WorkProcess() {
    return (
        <section className="w-full process-cards">
            <WorkProcessCard id={1} left={"40%"} rotation={-8.45} bgImage="/work1.png"/>
            <WorkProcessCard id={2} left={"50%"} rotation={5.66} bgImage="/work2.png"/>
            <WorkProcessCard id={3} left={"38%"} rotation={-2.79} bgImage="/work3.png"/>
            <WorkProcessCard id={4} left={"46%"} rotation={4.16} bgImage="/work4.png" size="large"/>
            <WorkProcessCard id={5} left={"43%"} rotation={-4.03} bgImage="/work5.png" size="large"/>
        </section>
    );
}