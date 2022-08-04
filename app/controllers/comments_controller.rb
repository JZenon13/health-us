class CommentsController < ApplicationController
 
    def index
        comments = Comment.all 
        render json: comments
    end

    def show
        comment = Comment.find_by(user_id: params[:user_id])
        render json: comment 
    end

    def show_comments
        comment = Comment.find_by(user_id: params[:user_id])
        post = Post.find_by(post_id: params[:post_id])
        render json: comment.post
    end

    def create 

        @post = Post.find(params[:post_id])
        @comment = @post.comments.create(params[:comment].permit(:post_id, :comment, :text, :user_id))

        redirect_to post_path(@post) 
 
    end

    def update 
        comment = Comment.find_by(id: params[:id])
        if comment 
            comment.update(comment_params)
            render json: comment
        else  
            render json: {error: "No such comment"}, status: :not_found
        end
    end

    private 

    def comment_params 
        params.permit(:text, :user_id)
    end


end
