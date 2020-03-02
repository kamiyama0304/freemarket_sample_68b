class UsersController < ApplicationController
  before_action :set_product
  def index
  end

  def show
    @card = Card.all
  end

  def exhibiting
  end

  def buy
  end

  def bought
  end

  def sold
  end

  def transaction
  end


end
