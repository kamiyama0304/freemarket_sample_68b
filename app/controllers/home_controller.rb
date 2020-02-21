class HomeController < ApplicationController
  def index
    @products = Product.includes(:images).where(status: 0).order("id DESC").limit(3)
    
  end
end

