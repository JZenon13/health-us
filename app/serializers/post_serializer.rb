class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :created_at, :likes, :unlikes, :img_url
  belongs_to :user 
  has_many :comments
  
end
