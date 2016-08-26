class CoursesController < ApplicationController    
  before_action :check_if_admin, :only => [:create, :update, :edit, :destroy]  
  
  private

  def course_params
    params.require(:course).permit(:name, :description, :thumbnail)
  end
  
  def check_if_admin
    if current_user
      head(403) unless current_user.admin?
    end
  end
  
end   