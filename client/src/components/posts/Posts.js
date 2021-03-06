import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'
import PostForm from './PostForm'
const Posts = ({getPosts, post: { posts, loading }}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts])

    return  loading ? <Spinner/> : (<Fragment>
        
             <h1 class="large text-primary"> Queries </h1>
            <  p class="lead"><i class="fas fa-user"></i> Welcome to VUconnect, a place where we connect together!!</p>
            <PostForm />
        {

            posts.length < 1 ? <h1> Sorry, Nothing to display !! </h1> : (
                
                <div class="posts">
                       {
                           posts.map( post => <PostItem key={post._id} post = {post}/> )
                       } 
                </div>
            )
        }
    </Fragment>) 
}

Posts.propTypes = {
getPosts: PropTypes.func.isRequired,
post: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts}) (Posts)
