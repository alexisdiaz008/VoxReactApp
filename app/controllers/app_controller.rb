# frozen_string_literal: true

class AppController < ApplicationController

  def index
    @props = { 
    	name: "Test File",
    	audio_clips: AudioClip.all.pluck(:id)
     }
  end

  def create_audio_clip
  	# sleep(1)
  	p params
  	# p JSON.parse("#{params}")
    @audio_clip = AudioClip.create(audio_clip_params)
    p @audio_clip
  end

  def show_audio_clip
    @audio_clip = AudioClip.find(params[:id])
    p @audio_clip
  end

private
  def audio_clip_params
  	params.require(:audio_clip).permit(:name, :clip)
  end
end
