15.times do
  d = Department.create(
    description: Faker::Lorem.sentence,
    name: Faker::Commerce.department
  )
    10.times do
      i = d.items.create(
        item_name: Faker::Commerce.product_name,
        item_description: Faker::Lorem.paragraph_by_chars(256, false),
        price: Faker::Commerce.price(range = 0..1000.00, as_string = false),
      )
    end
end

puts "Seeded"