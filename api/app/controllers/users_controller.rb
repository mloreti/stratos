class UsersController < ApplicationController
  # before_action :authenticate_user

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {"status": "200 OK"}
    else
      render json: {"error": "Unable to create user"}
    end

  end

  def show
    @user = User.find(params[:id])
    if @user 
      render json: @user
    else
      render json: {"Error": "404 Not Found"}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
