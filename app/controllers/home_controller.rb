class HomeController < ApplicationController
  def index
    @newProducts = Product.includes(:images).where(status: 0).order("price ASC")
    @brandProducts = Product.includes(:images).where(status: 0).order("id DESC").limit(3)
  end
end

