const ListAlignment = () => {
    return (
        <dl className="row">
            <dt className="col-sm-3">Description lists</dt>
            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
            <dt className="col-sm-3">Euismod</dt>
            <dd className="col-sm-9">
                <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
            </dd>
            <dt className="col-sm-3">Malesuada porta</dt>
            <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
            <dt className="col-sm-3">Nesting</dt>
            <dd className="col-sm-9">
                <dl className="row">
                    <dt className="col-sm-4">Nested definition list</dt>
                    <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                </dl>
            </dd>
        </dl>
    )
}

export const ListAlignmentCode = `
<dl className="row">
    <dt className="col-sm-3">Description lists</dt>
    <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
    <dt className="col-sm-3">Euismod</dt>
    <dd className="col-sm-9">
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
    </dd>
    <dt className="col-sm-3">Malesuada porta</dt>
    <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9">
        <dl className="row">
            <dt className="col-sm-4">Nested definition list</dt>
            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
    </dd>
</dl>
`.trim();

export default ListAlignment