class PostsController < ApplicationController
  def index
    @posts = Post.all  
  end

  def api
    @posts = Post.all  
    render json: @posts, status:200 
  end  
  
  def show
    @posts = Post.find(params[:id])
  end
end
