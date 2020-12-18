require 'opal'
require 'native'
require 'set'

class Simulator
  def self.simulate(number_of_types)
    set_of_cards = Set[]
    all_types = [*1..number_of_types]
    results = []
    while set_of_cards.size < number_of_types
      you_get = all_types.sample
      first_get = !set_of_cards.include?(you_get)
      set_of_cards << you_get
      results << { count_total: results.size.succ, you_get: you_get, first_get: first_get, count_distinct: set_of_cards.size }
    end
    results
  end
end
