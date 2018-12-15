import React, { Component } from 'react';
import { connect } from 'react-redux';
import { giphiesFetch } from '../Actions';
import { Wrapper, Title, Input, GiphyListWrapper, GiphyWrapper, Giphy } from './Styles';

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = { search: '' }
    }

    handleChange = event => {
        this.setState({ search: event.target.value });
    }

    findGiphies = event => {
        this.props.giphiesFetch(this.state.search);
        event.preventDefault();
    }

    render() {

        return (
            <Wrapper className="App">
                <Title>Search Giphies here <span role='img' aria-label='search emoji'>🧐</span></Title>
                <form onSubmit={this.findGiphies.bind(this)}>
                    <Input type='text' value={this.state.search} placeholder='Type here...' onChange={this.handleChange.bind(this)} />
                </form>
                <img src={require('./img/PoweredBy_200px-White_HorizLogo.png')} alt='Powered by Giphy'/>
                {this.props.giphies && (
                    <GiphyListWrapper>
                        {this.props.giphies.map(giphy => {
                            return (
                                <GiphyWrapper key={giphy.id}>
                                    <Giphy src={`${giphy.images.fixed_height_downsampled.url}`} alt={giphy.title} />
                                </GiphyWrapper>
                            )
                        })}
                    </GiphyListWrapper>
                )}
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {

    return state.giphies;
};

export default connect(mapStateToProps, { giphiesFetch })(Search);