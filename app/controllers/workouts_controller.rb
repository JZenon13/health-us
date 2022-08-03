class WorkoutsController < ApplicationController
    def index
        workouts = Workout.all 
        render json: workouts
    end

    def show
        workout = Workout.find_by(user_id: params[:user_id])
        render json: workout
    end

    def create 
        workout = Workout.create(workout_params)
        render json: workout, status: :created
    end

    def destroy
        workout = Workout.find(params[:id])
        workout.destroy
        head :no_content

    end
    private 

    def workout_params
        params.permit(:start_date, :end_date, :user_id)
    end
end
