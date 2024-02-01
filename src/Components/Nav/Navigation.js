function Navigation(props) {

    return (
        <ul className={`tabs__nav`}>
            {props.tabs.map((item) => (
                <li key={item.id} className={`tabs__item`}>
                    <button className={`tabs__button ${(props.activeTabId === item.id) ? 'active' : ''}`}
                            onClick={() => props.onNavClick(item.id)}>
                        {item.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;