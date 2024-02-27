import { WorkProcessCard } from './WorkProcessCard';

export default function WorkProcess() {
    return (
        <section className="w-full process-cards">
            <WorkProcessCard id={1} left={"40%"} rotation={-8.45} bgImage="/work1.png" addClass="margin-lg"/>
            <WorkProcessCard id={2} left={"50%"} rotation={5.66} bgImage="/work2.png" addClass="margin-lg"/>
            <WorkProcessCard id={3} left={"38%"} rotation={-2.79} bgImage="/work3.png" addClass="margin-sm"/>
            <WorkProcessCard id={4} left={"32%"} rotation={4.16} bgImage="/work4.png" addClass="margin-lg" size="large"/>
            <WorkProcessCard id={5} left={"30%"} rotation={-4.03} bgImage="/work5.png" addClass="margin-sm" size="large"/>
        </section>
    );
}