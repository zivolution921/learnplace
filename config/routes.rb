Rails.application.routes.draw do
  
  devise_for :users, :controllers => { :sessions => "sessions", :registrations => "registrations" } 

  resources :courses do 
    resources :chapters
  end

  resources :schools 

  #Progresses
  get "chapters/read" => "progresses#show"
  post "chapters/mark_as_complete" => "progresses#create"
  delete "chapters/mark_as_incomplete" => "progresses#delete"

  # Users
  get "/my_current_user" => "users#my_current_user"
  match 'users/:id' => 'users#update_user', via: [:patch]
  get '/send_password' => "users#reset_password"
  
end
