class PostcommentsController < ApplicationController

    def index
        post = PostComment.all 
        render json: post
    end

    def show

    post = PostComment.find( params[:id])
    render json: post
    end

end
