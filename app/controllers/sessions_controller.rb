
class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password]) 
        session[:user_id] ||= user.id
        render json: user, status: :ok
      else
        render json: { error: "Username or password not found; try again!" }, status: :unauthorized
      end
    end

    def show
      @user =  User.find_by(id: params[:user_id])
      render json: @user.friends
    end
  
    def destroy
 
      session.clear
      render status: :no_content
    end
  end