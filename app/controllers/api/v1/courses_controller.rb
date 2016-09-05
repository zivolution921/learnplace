class Api::V1::CoursesController < ApplicationController

  before_action :set_school
  
  def index
    @courses = @school.courses.all
    render json: @courses
  end

  def show
    @course = @school.courses.find(params[:id])
    render json: @course
  end

  def create
    @course = @school.courses.new(course_params)
    if @course.save
      render json: @course
    else
      errors = @course.errors.full_messages
      render json: {errors: errors}, status: 400
    end
  end

  def update
    @course = @school.courses.find(params[:id])

    if @course.update(course_params)
      render json: @course
    end
  end

  def destroy
    @course = @school.courses.find(params[:id])
    @course.destroy
    render json: @course
  end


  private

  def course_params
    params.require(:course).permit(:name, :description, :thumbnail)
  end

  def set_school
    @school = School.find(params[:school_id])
  end

end