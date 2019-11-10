class ApplicationController < ActionController::Base
  after_action :set_csrf

  protected

  def set_csrf
    cookies["X-CSRF-Token"] = form_authenticity_token
  end
end
