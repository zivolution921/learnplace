class SchoolsController < ApplicationController
  before_action :set_school, :except => [:index]

  def index
    @schools = School.all
    render json: @schools
  end

  def update
    if @school.update(school_params)
      render json: @school
    end
  end

  def show
    render json: @school
  end

  private

  def school_params
    params.require(:school).permit(:name, :thumbnail)
  end

  def set_school
    @school = School.find(params[:id])
  end


end