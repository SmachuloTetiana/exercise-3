import React from "react";

type countryInitialState = {
    name: string;
    code: string;
    currency: string;
    emoji: string;
    emojiU: string;
    languages: Array<{
        name: string;
        code: string;
    }>;
};

type SearchCountryProps = {
    country: countryInitialState;
};

const SearchCountry = ({country}: SearchCountryProps) => {
    const {name, code, currency, emoji, languages} = country;

    const findLanguages = languages.map(({name}) => name);

    return (
        <div>
            <p className="subtitle">
                <span className="subtitle_gray">Name:&nbsp;</span>
                <span className="subtitle_blue">{name}</span>
            </p>
            <p className="subtitle">
                <span className="subtitle_gray">Code:&nbsp;</span>
                <span className="subtitle_blue">{code}</span>
            </p>
            <p className="subtitle">
                <span className="subtitle_gray">Currency:&nbsp;</span>
                <span className="subtitle_blue">{currency}</span>
            </p>
            <p className="subtitle">
                <span className="subtitle_gray">Flag:&nbsp;</span>
                <span className="subtitle_blue">{emoji}</span>
            </p>
            <p className="subtitle">
                <span className="subtitle_gray">Languages:&nbsp;</span>
                <span className="subtitle_blue">{findLanguages.join(", ")}</span>
            </p>
        </div>
    );
};

const MemoizedSearchCountry = React.memo(SearchCountry);

export default MemoizedSearchCountry;
