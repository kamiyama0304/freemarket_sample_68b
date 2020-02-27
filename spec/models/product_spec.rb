describe "product editing" do
  it "is invalid without a product_name" do
    user = User.new(id: 1)
    product = Product.new(id: 1, name: "bbb", description:"bbb", price:"200", condition:"1", brand:"ルイヴィトン", send_price:"1", ship_day:"2", status:"0", user_id: 1, category_id: 975, prefecture_id: 2, created_at: 2020-02-26 07-15-31, updated_at: 2020-02-26 07-15-31)
    product.update(id: 1, name: "ccc", description:"bbb", price:"200", condition:"1", brand:"ルイヴィトン", send_price:"1", ship_day:"2", status:"0", user_id: 1, category_id: 975, prefecture_id: 2, created_at: 2020-02-27 07-15-31, updated_at: 2020-02-27 07-15-31)
    product.valid?
    expect(product.errors).to include("!!!!!!!!!!!!!!")
  end
end
