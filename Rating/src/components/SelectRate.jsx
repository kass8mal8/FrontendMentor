import { useState, useMemo } from "react";

const SelectRate = () => {
    const nums = useMemo(() => [1, 2, 3, 4, 5], []);
    const [count, setCount] = useState(null);

    return (  
        <ul>
            {nums.map(num => (
                <li 
                    key={num} 
                    onClick={() => setCount(num)} 
                    style={{ 
                        backgroundColor: num === count && 'white', 
                        color: num === count && 'hsl(216, 12%, 8%)'
                    }}
                > {num} 
                </li>
            ))}
        </ul>
    );
}
 
export default SelectRate;