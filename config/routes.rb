Rails.application.routes.draw do

  devise_scope :user do
  get 'users', to: 'devise/sessions#new'
  end

  resources :friend_messages
  resources :messages, only: [:index]
  resources :posts, only:[:index, :show, :update, :create, :destroy]
  resources :exercises, only:[:index, :show, :create]
  resources :workouts, only:[:index, :create]
  resources :comments, only:[:index, :update]
  resources :friends, only:[:index]
  resource :user, only:[:index]

  get "/comments/:id/:post_id", to: "comments#show_comments"
  get "/comments/:user_id", to: "comments#show"
  get "/users/:user_id/friends", to: "sessions#show"
  get "/users/:user_id", to: "sessions#show"
  get "/users", to: "users#index"
  get "/friends/:user_id", to: "friends#show"
  get "/postcomments", to: "postcomments#index"
  post "/posts/:post_id/comments", to: "comments#create"
  get "/posts/:id", to: "posts#show"
  get "/workouts/:user_id", to: "workouts#show"
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
