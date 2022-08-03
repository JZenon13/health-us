class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :user_id

end
