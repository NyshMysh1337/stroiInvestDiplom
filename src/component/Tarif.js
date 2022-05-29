import React from 'react';

const Tarif = ({home}) => {
    return (
        <table>
            <tr>
                <th>Комплектации</th>
                <th>Базовая</th>
                <th>Комфорт</th>
            </tr>
            <tr>
                <td>Фундамент</td>
                <td>столбчатый (8 блоков)</td>
                <td>свайно-винтовой (8 свай 76/2350)</td>
            </tr>
            <tr>
                <td>Обработка основания</td>
                <td>✔</td>
                <td>✖</td>
            </tr>
            <tr>
                <td>Цоколь</td>
                <td>✖</td>
                <td>✖</td>
            </tr>
            <tr>
                <td>Утепление пола</td>
                <td>✖</td>
                <td>мин.вата 100мм</td>
            </tr>
            <tr>
                <td>Утепление стен и потолка</td>
                <td>50мм</td>
                <td>100мм</td>
            </tr>
            <tr>
                <td>Высота потолка</td>
                <td>2.2м</td>
                <td>2.4м</td>
            </tr>
            <tr>
                <td>Кровля</td>
                <td>оцинкованный профнастил</td>
                <td>крашенный профнастил</td>
            </tr>
            <tr>
                <td>Вентиляция чердака</td>
                <td>✖</td>
                <td>✔</td>
            </tr>
            <tr>
                <td>Дверь входная</td>
                <td>деревянная (утеплённая)</td>
                <td>металлическая (стандарт)</td>
            </tr>
            <tr>
                <td>Ступеньки</td>
                <td>✖</td>
                <td>✔</td>
            </tr>
            <tr>
                <td>Цена</td>
                <td>{home.priseBase} ₽</td>
                <td>{home.prisePrem} ₽</td>
            </tr>
        </table>
    );
};

export default Tarif;