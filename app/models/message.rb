class Message < ApplicationRecord
    belongs_to :user
    has_many :friend_messages 
    has_many :friends, through: :friend_messages
end
