require 'opal'
require 'native'
require 'set'

class Simulator
  def self.simulate(number_of_types)
    table = Set[]
    all_cards = [*1..number_of_types]
    results = []
    while table.size < number_of_types
      you_get = all_cards.sample
      first_get = !table.include?(you_get)
      table << you_get
      results << { count_total: results.size.succ, you_get: you_get, first_get: first_get, count_distinct: table.size }
    end
    results
  end
end
