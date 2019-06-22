import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        /*
        Place refs in constructor
        and assign to instance variable
        */
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        /*
            "current" is direct reference to img tag
            "load" event will be emitted and execute callback setSpans()
        */
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }

    render() {
        const { description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;