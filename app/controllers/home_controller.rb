class HomeController < ApplicationController
  def index
    @products = Product.where(status: 0).order("id DESC").limit(3)
    @image = Image.first
    
  end
end

