class CreateFriendMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :friend_messages do |t|
      t.integer :friend_id
      t.integer :message_id
      t.timestamps
    end
  end
end
