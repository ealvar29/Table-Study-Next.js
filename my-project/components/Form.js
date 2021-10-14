export const Form = () => {
    return (
			<form className="add-activity">
				<input type="checkbox" id="hide" />
				<label htmlFor="hide">Hide all activities</label>
				<input type="text" placeholder="Add activity" />
			</form>
    )
}
