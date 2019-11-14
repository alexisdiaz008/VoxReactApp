# frozen_string_literal: true

class AppController < ApplicationController

  def index
    @hello_world_props = { name: "Test File" }
  end

  def create_audio_clip
  	# sleep(1)
  	p params
  	# p JSON.parse("#{params}")
    @audio_clip = AudioClip.create(audio_clip_params)
    # @audio_clip.clip.attach io: File.open(params['audio_clip']['clip']), filename: "test", content_type: "image/jpg"
    p @audio_clip
  end

  def audio_clip_params
  	params.require(:audio_clip).permit(:name, :clip)
  end
end
