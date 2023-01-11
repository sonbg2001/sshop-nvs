import { useState, memo } from 'react';
import configPaths from '~/routes/configPaths';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="header-search">
            <form action={configPaths.products} method="get">
                <input
                    value={searchValue}
                    type="text"
                    name="search"
                    placeholder="Tìm kiếm..."
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="btn-submit" type="submit">
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </form>
        </div>
    );
}

export default memo(Search);
