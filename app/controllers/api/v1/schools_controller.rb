class Api::V1::SchoolsController < ApplicationController
  before_action :set_school, :only => [:update, :show]

  def index
    @schools = School.all
    render json: @schools
  end

  def create
    @school = School.new(school_params)
    if @school.save
      render json: { school: @school }, status: 201 
    else
      errors = @school.errors.full_messages
      render json: {errors: errors}, status: 400
    end
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