class Contract < ApplicationRecord
  validates :product_id, :buyer_id, presence: true

  belongs_to :user
  belongs_to :product
end
