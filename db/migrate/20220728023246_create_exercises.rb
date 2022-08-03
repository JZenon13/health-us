class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.integer :total_time 
      t.string :name, array: true, default: []
      t.string :title
      t.integer :workout_id
      t.timestamps
    end
  end
end
