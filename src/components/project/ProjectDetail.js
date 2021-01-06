export default function ProjectDetail({match}){
    
    const id = match.params.id;

    return(
        <section className='container proj-detail'>
            <h1 className='proj-detail__title'>Project - {id}</h1>
            <p className='proj-detail__details'>Corporate synergy UI, or streamline crank this out pig in a python data-point. Out of the loop programmatically what's the status on the deliverables for eow?. Get all your ducks in a row win-win-win and productize, for first-order optimal strategies i also believe it's important for every member to be involved and invested in our company and this is one way to do so for we want to empower the team with the right tools and guidance to uplevel our craft and build better. Roll back strategy. Bench mark. 60% to 30% is a lot of persent can you ballpark the cost per unit for me out of the loop we need to make the new version clean and sexy.</p>
            <p className='proj-detail__poster'>Posted by Jim</p>
            <p className='proj-detail__date'>Jan 6, 2021</p>
        </section>
    );
};