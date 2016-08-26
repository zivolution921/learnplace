Rails.application.routes.draw do
  
  devise_for :users, :controllers => { :sessions => "sessions", :registrations => "registrations" } 

  resources :courses
  
  resources :schools 

  # Users
  get "/my_current_user" => "users#my_current_user"
  match 'users/:id' => 'users#update_user', via: [:patch]
  get '/send_password' => "users#reset_password"
  
end
