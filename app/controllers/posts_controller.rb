class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show 
        post = Post.find(params[:id])
        render json: post.comments, include: :user
     
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
    end

    def update
        post= Post.find_by(id: params[:id])
        if post 
            post.update(post_params)
            render json: post
        else  
            render json: {error: "No such post"}, status: :not_found
        end
    end

    def destroy 
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private 

    def post_params
        params.permit(:text, :likes, :unlikes, :user_id, :img_url)
    end
    
end
