class User < ApplicationRecord
    has_secure_password
    has_many :workouts
    has_many :exercises, through: :workouts
    has_many :friends
    has_many :messages
    has_many :comments
    has_many :posts, through: :comments
    accepts_nested_attributes_for :comments
    validates :password, presence: true
end
