Rails.application.routes.draw do
  root 'app#index'
  post '/create_audio_clip', to: 'app#create_audio_clip'
end
