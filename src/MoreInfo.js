import './App.css'

function MoreInfo({ currPost, comms }) {
    return (
        <>
            <h4>{currPost.body}</h4>
            <hr />
            <h3>#Comments</h3>
            {comms.map((com) => {
                return (
                    <div key={com.id} className="commBox">
                        <h6>{com.body}</h6>
                    </div>
                )
            })}
        </>
    )
}

export default MoreInfo