class Comment < ApplicationRecord
    belongs_to :user
    has_many :post_comments
    has_many :posts, through: :post_comments
    accepts_nested_attributes_for :user
    
end
