class Api::V1::ChaptersController < ApplicationController
  
  before_action :set_course  
  before_action :set_school

  def index  
    @chapters = @course.chapters.all  
    render json: @chapters  
  end  

  def show
    @chapter = @school.courses.chapters.find(params[:id])
    render json: @chapter
  end

  def create  
    @chapter = @course.chapters.build(chapter_params)  
    if @chapter.save  
      render json: @chapter  
    end  
  end  

  def update  
    @chapter = @course.chapters.find(params[:id])  

    if @chapter.update(chapter_params)  
      render json: @chapter  
    end  
  end  

  def destroy  
    @chapter = @course.chapters.find(params[:id])  
    @chapter.destroy  
    render json: @chapter  
  end  

  private  

  def chapter_params  
    params.require(:chapter).permit(:name, :description, :video_url)  
  end  

  def set_course  
    @course = Course.find(params[:course_id])  
  end 


  def set_school
    @school = School.find(params[:school_id])
  end 

end