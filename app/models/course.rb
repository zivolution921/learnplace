class Course < ActiveRecord::Base
  has_many :chapters, :dependent => :destroy

  validates :name, presence: true
end
