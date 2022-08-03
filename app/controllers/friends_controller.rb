class FriendsController < ApplicationController

    def index
        friends = Friend.all 
        render json: friends
    end

    def show 
        friend = Friend.find_by(user_id: params[:user_id])
        render json: friend
    end
end
