# spree_mercury
mercury payment gateway module


## Installation

1. Add this extension to your Gemfile with this line:

        gem 'spree_mercury', github: 'Partywirks/spree_mercury', branch: 'master'

2. Install the gem using Bundler:

        bundle install

3. Copy & run migrations

        bundle exec rails g spree_mercury:install

4. Restart your server

If your server was running, restart it so that it can find the assets properly.

