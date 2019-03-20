50.times do
  Department.create(
    description: Faker::Lorem.sentence,
    name: Faker::Commerce.department
  )
end

puts "Seeded"