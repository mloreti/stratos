class UsersController < ApplicationController
  before_action :authenticate_user

  def show
    @user = User.find(params[:id])
    if @user && @user == current_user
      render json: @user
    else
      render json: {"Error": "404 Not Found"}
    end
  end
end
