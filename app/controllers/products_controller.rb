class ProductsController < ApplicationController

  def new
    @products = Product.all
  end

  def show
  end

  def destroy
    product = Product.find(parmas[:id])
    if product.destroy
      redirect_to root_path
    else
      render :show
    end
  end

end
