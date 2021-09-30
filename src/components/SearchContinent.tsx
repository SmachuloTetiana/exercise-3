import React from "react";

type countryInitialState = {
    name: string;
    emoji: string;
};

type SearchContinenthProps = {
    country: countryInitialState;
};

const SearchContinent = ({country}: SearchContinenthProps) => {
    const {name, emoji} = country;

    return (
        <div>
            {emoji}
            <span className="subtitle">{name}</span>
        </div>
    );
};

const MemoizedSearchContinent = React.memo(SearchContinent);

export default MemoizedSearchContinent;
