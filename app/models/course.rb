class Course < ActiveRecord::Base
  has_many :chapters, :dependent => :destroy
end
