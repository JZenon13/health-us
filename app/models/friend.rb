class Friend < ApplicationRecord
    belongs_to :user

    has_many :friend_messages
    has_many :messages, through: :friend_messages
end
