Rails.application.routes.draw do
  post 'auth_user' => 'authentication#authenticate_user'
  get 'home' => 'home#index'
  root 'static#index'
end
