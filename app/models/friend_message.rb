class FriendMessage < ApplicationRecord
    belongs_to :friend
    belongs_to :message
end
