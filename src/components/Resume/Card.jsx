import React from 'react'

const Card = (props) => {
    const {description, title, company, image, buttonText, link, flip, background, width } = props;
    const [frontCard, setFrontCard] = React.useState(true);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
        <div style={{
            width: width ? width : '100%',
            background: background ? background : 'white',
            padding: '10',
            textAlign: 'center',
            borderRadius: '1rem',
            height: 'fit-content',
            alignItems: 'center',
            height: '100%'
        }}
        onClick={() => {if (flip) setFrontCard(!frontCard)}}>
            {frontCard && image && (
            <img src={image} style={{width: '50%', padding: 5}} />
            )}
            {frontCard && (<h1>{title}</h1>) }
            {frontCard && (<h2>{company}</h2>) }
            {frontCard && buttonText && link && (
                <button
                role="link"
                onClick={() => openInNewTab(link)}
                style={{
                    textAlign: 'center',
                    width: '70%',
                    borderRadius: '5px',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    textDecoration: 'none',
                    margin: '0.5rem 0.5rem',
                }}
                >
                Visit
                </button>
            )}
            {!frontCard && (<p style={{whiteSpace: 'pre-line'}}>{description}</p>) }
        </div>
    )
}

export default Card;