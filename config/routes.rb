Rails.application.routes.draw do
  root 'app#index'
    post '/create_audio_clip', to: 'app#create_audio_clip'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
