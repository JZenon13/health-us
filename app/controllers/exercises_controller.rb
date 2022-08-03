class ExercisesController < ApplicationController

    def index
        exercises = Exercise.all 
        render json: exercises
    end

    def show
        exercise = Exercise.find(params[:id])
        render json: exercise
    end

    def create 
        exercise = Exercise.create(exercise_params)
        render json: exercise, status: :created
    end

    private 

    def exercise_params
        params.permit(:total_time, :title, :workout_id, name: [])
    end
end
