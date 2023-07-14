import { useEffect, useState } from 'react';
import '../styles/quotes.css';

const Quote = () => {
  const [quote, setQuote] = useState(['Money is good!']);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes?category=money';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false);

      try {
        const response = await fetch(`${url}`, {
          headers: {
            'X-Api-Key': 'tvkUus/p9WHwSOdk+kbWHA==a2jd4Ger5SzgFZAb',
          },
        });

        const data = await response.json();
        setQuote((data[0]));
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="quotation-loading">
        <p>Loading...</p>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="quotation-error">
        <p>Something went wrong!</p>
      </div>
    );
  }

  return (
    <div className="quotation">
      { quote.quote }
    </div>
  );
};

export default Quote;
