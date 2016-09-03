class School < ActiveRecord::Base

  has_many :courses

  validates :name, uniqueness: true, presence: true
end
