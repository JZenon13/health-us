class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id
  belongs_to :user
  has_many :posts

end
