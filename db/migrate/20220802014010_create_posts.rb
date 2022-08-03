class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :text
      t.text :img_url
      t.integer :likes 
      t.integer :unlikes
      t.integer :user_id
      t.timestamps
    end
  end
end
