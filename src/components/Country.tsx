import React, {useState} from "react";
import "./style.css";
import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client";
import Input from "./Input";
import MemoizedSearchCountry from "./SearchCountry";
import MemoizedSearchContinent from "./SearchContinent";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com"
});

const LIST_COUNTRIES = gql`
    {
        continents {
            code
            countries {
                code
                name
                currency
                emoji
                emojiU
                languages {
                    code
                    name
                }
                continent {
                    code
                }
            }
        }
    }
`;

const Country: React.FC = () => {
    const [countryCode, setCountryCode] = useState<string>("");
    const [continentCode, setContinentCode] = useState<string>("");
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

    if (loading || error) {
        return <p>{error ? error.message : "Loading..."}</p>;
    }

    const findByContinentCode = data.continents.filter(
        (continent) => continent.code === continentCode.toUpperCase()
    );

    const findCountry = data.continents
        .map((continent) =>
            continent.countries.find((country) => country.code === countryCode.toUpperCase())
        )
        .filter((country) => !!country)[0];

    return (
        <main className="container">
            <section className="row">
                <Input
                    placeholder="Enter country code..."
                    value={countryCode}
                    handleCode={setCountryCode}
                />
                {findCountry ? (
                    <MemoizedSearchCountry key={findCountry.code} country={findCountry} />
                ) : (
                    <p className="subtitle">Please enter a country code</p>
                )}
            </section>

            <section className="row">
                <Input
                    placeholder="Enter continent code..."
                    value={continentCode}
                    handleCode={setContinentCode}
                />
                {continentCode ? (
                    <React.Fragment>
                        <h3 className="title">Countries</h3>
                        <div className="continent">
                            {findByContinentCode.length > 0 &&
                                findByContinentCode[0].countries.map((country) => (
                                    <MemoizedSearchContinent key={country.code} country={country} />
                                ))}
                            {!findByContinentCode.length && <p className="subtitle">No result</p>}
                        </div>
                    </React.Fragment>
                ) : (
                    <p className="subtitle">Please enter a continent code</p>
                )}
            </section>
        </main>
    );
};

export default Country;
