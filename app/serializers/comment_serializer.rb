class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id
  has_many :posts
  has_many :post_comments
end
