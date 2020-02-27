class ProductsController < ApplicationController
  before_action :set_product, except: [:index, :new, :create]

  def index
  end

  def new
    @product = Product.new
    @product.images.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @product = Product.find(params[:id])
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    if @product.update(product_params)
      redirect_to product_path
    else
      render :edit
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @product = Product.find(params[:id])
    @image.delete
    @product.delete
    redirect_to user_path
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :price, :condition, :brand, :send_price, :ship_day, images_attributes: [:name, :src, :_destroy, :id]).merge(user_id: current_user.id, category_id: 1, prefecture_id: params[:product][:prefecture_id], status: "0")
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def destroy_params
    params.require(:product).permit(:name, :description, :price, :condition, :brand, :send_price, :ship_day, images_attributes: [:name, :src, :_destroy, :id])
  end
end
