class FriendSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  belongs_to :user
end
