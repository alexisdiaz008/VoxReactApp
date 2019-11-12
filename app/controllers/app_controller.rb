# frozen_string_literal: true

class AppController < ApplicationController

  def index
    @hello_world_props = { name: "Stranger" }
  end

  def create_audio_clip
  	sleep(1)
  	p "#{params}"
    @audio_clip = AudioClip.create(audio_clip_params)
    p @audio_clip
  end

  def audio_clip_params
  	params.require(:audio_clip).permit(:name, :clip)
  end
end
