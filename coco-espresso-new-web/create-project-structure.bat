@echo off
echo Creating Coco Espresso AU Project Structure...
echo.

REM Create main project directory
mkdir coco-espresso-au
cd coco-espresso-au

REM Create root level files
type nul > .env.local
type nul > .env.example
type nul > .gitignore
type nul > next.config.js
type nul > package.json
type nul > tailwind.config.js
type nul > README.md
type nul > middleware.js
type nul > instrumentation.js
type nul > jsconfig.json

REM Create public directory and subdirectories
mkdir public
mkdir public\images
mkdir public\images\products
mkdir public\images\icons

REM Create public files
type nul > public\favicon.ico
type nul > public\logo.svg
type nul > public\manifest.json

REM Create dummy image files
type nul > public\images\hero-coffee.jpg
type nul > public\images\about-hero.jpg

REM Create product images
type nul > public\images\products\ceylon-gold-250g.jpg
type nul > public\images\products\ceylon-gold-500g.jpg
type nul > public\images\products\mountain-mist-250g.jpg
type nul > public\images\products\mountain-mist-500g.jpg
type nul > public\images\products\royal-kandy-250g.jpg
type nul > public\images\products\royal-kandy-500g.jpg
type nul > public\images\products\espresso-blend-250g.jpg
type nul > public\images\products\espresso-blend-500g.jpg

REM Create icon files
type nul > public\images\icons\cart.svg
type nul > public\images\icons\user.svg
type nul > public\images\icons\menu.svg
type nul > public\images\icons\close.svg

REM Create src directory structure
mkdir src
mkdir src\app
mkdir src\components
mkdir src\store
mkdir src\lib
mkdir src\data
mkdir src\styles

REM Create app directory structure
mkdir src\app\shop
mkdir src\app\products
mkdir src\app\products\[slug]
mkdir src\app\about
mkdir src\app\cart
mkdir src\app\checkout
mkdir src\app\checkout\success
mkdir src\app\subscription
mkdir src\app\subscription\manage
mkdir src\app\account
mkdir src\app\account\login
mkdir src\app\account\register
mkdir src\app\account\profile
mkdir src\app\account\orders
mkdir src\app\contact
mkdir src\app\shipping-info
mkdir src\app\privacy-policy
mkdir src\app\terms-conditions
mkdir src\app\return-policy
mkdir src\app\api
mkdir src\app\api\stripe
mkdir src\app\api\stripe\create-payment-intent
mkdir src\app\api\stripe\webhook
mkdir src\app\api\stripe\subscription
mkdir src\app\api\shipping
mkdir src\app\api\shipping\calculate
mkdir src\app\api\contact

REM Create app files
type nul > src\app\globals.css
type nul > src\app\layout.js
type nul > src\app\page.js
type nul > src\app\loading.js
type nul > src\app\not-found.js

REM Create shop files
type nul > src\app\shop\page.js
type nul > src\app\shop\loading.js

REM Create products files
type nul > src\app\products\[slug]\page.js
type nul > src\app\products\[slug]\loading.js

REM Create about files
type nul > src\app\about\page.js

REM Create cart files
type nul > src\app\cart\page.js

REM Create checkout files
type nul > src\app\checkout\page.js
type nul > src\app\checkout\success\page.js

REM Create subscription files
type nul > src\app\subscription\page.js
type nul > src\app\subscription\manage\page.js

REM Create account files (Phase 2)
type nul > src\app\account\login\page.js
type nul > src\app\account\register\page.js
type nul > src\app\account\profile\page.js
type nul > src\app\account\orders\page.js

REM Create other page files
type nul > src\app\contact\page.js
type nul > src\app\shipping-info\page.js
type nul > src\app\privacy-policy\page.js
type nul > src\app\terms-conditions\page.js
type nul > src\app\return-policy\page.js

REM Create API route files
type nul > src\app\api\stripe\create-payment-intent\route.js
type nul > src\app\api\stripe\webhook\route.js
type nul > src\app\api\stripe\subscription\route.js
type nul > src\app\api\shipping\calculate\route.js
type nul > src\app\api\contact\route.js

REM Create components directory structure
mkdir src\components\layout
mkdir src\components\cart
mkdir src\components\products
mkdir src\components\checkout
mkdir src\components\subscription
mkdir src\components\auth
mkdir src\components\ui
mkdir src\components\sections
mkdir src\components\common

REM Create layout components
type nul > src\components\layout\Header.js
type nul > src\components\layout\Footer.js
type nul > src\components\layout\Navigation.js
type nul > src\components\layout\MobileMenu.js

REM Create cart components
type nul > src\components\cart\CartSidebar.js
type nul > src\components\cart\CartItem.js
type nul > src\components\cart\CartSummary.js
type nul > src\components\cart\AddToCartButton.js

REM Create product components
type nul > src\components\products\ProductCard.js
type nul > src\components\products\ProductGrid.js
type nul > src\components\products\ProductDetails.js
type nul > src\components\products\ProductGallery.js
type nul > src\components\products\ProductVariations.js
type nul > src\components\products\ProductRecommendations.js
type nul > src\components\products\QuickAddToCart.js

REM Create checkout components
type nul > src\components\checkout\CheckoutForm.js
type nul > src\components\checkout\ShippingForm.js
type nul > src\components\checkout\PaymentForm.js
type nul > src\components\checkout\OrderSummary.js
type nul > src\components\checkout\StripeWrapper.js

REM Create subscription components
type nul > src\components\subscription\SubscriptionPlans.js
type nul > src\components\subscription\SubscriptionCard.js
type nul > src\components\subscription\ManageSubscription.js

REM Create auth components (Phase 2)
type nul > src\components\auth\LoginForm.js
type nul > src\components\auth\RegisterForm.js
type nul > src\components\auth\ProtectedRoute.js

REM Create UI components
type nul > src\components\ui\Button.js
type nul > src\components\ui\Input.js
type nul > src\components\ui\Modal.js
type nul > src\components\ui\Loading.js
type nul > src\components\ui\Badge.js
type nul > src\components\ui\Card.js
type nul > src\components\ui\Toast.js
type nul > src\components\ui\Breadcrumb.js

REM Create section components
type nul > src\components\sections\Hero.js
type nul > src\components\sections\FeaturedProducts.js
type nul > src\components\sections\AboutPreview.js
type nul > src\components\sections\Newsletter.js
type nul > src\components\sections\Testimonials.js
type nul > src\components\sections\CoffeeStory.js

REM Create common components
type nul > src\components\common\SEO.js
type nul > src\components\common\ScrollToTop.js
type nul > src\components\common\ImageWithFallback.js

REM Create store files
type nul > src\store\cartStore.js
type nul > src\store\authStore.js
type nul > src\store\subscriptionStore.js

REM Create lib directory structure
mkdir src\lib\hooks

REM Create lib files
type nul > src\lib\utils.js
type nul > src\lib\stripe.js
type nul > src\lib\validations.js
type nul > src\lib\constants.js

REM Create hooks
type nul > src\lib\hooks\useCart.js
type nul > src\lib\hooks\useLocalStorage.js
type nul > src\lib\hooks\useDebounce.js

REM Create data files
type nul > src\data\products.js
type nul > src\data\shipping.js
type nul > src\data\subscriptions.js
type nul > src\data\legal.js
type nul > src\data\testimonials.js

REM Create style files
type nul > src\styles\components.css
type nul > src\styles\animations.css

REM Create sanity directory structure
mkdir sanity
mkdir sanity\schemas

REM Create sanity files
type nul > sanity\client.js
type nul > sanity\queries.js

REM Create schema files
type nul > sanity\schemas\product.js
type nul > sanity\schemas\category.js
type nul > sanity\schemas\subscription.js
type nul > sanity\schemas\customer.js
type nul > sanity\schemas\order.js
type nul > sanity\schemas\index.js

echo.
echo ================================
echo Project structure created successfully!
echo ================================
echo.
echo Created directories:
echo - Root configuration files
echo - Public assets folder with dummy images
echo - Source code structure with all components
echo - Sanity CMS schema files
echo - API routes for Stripe and shipping
echo.
echo Next steps:
echo 1. Navigate to the coco-espresso-au folder
echo 2. Run 'npm init' to initialize package.json
echo 3. Install required dependencies
echo 4. Start adding code to the empty files
echo.
echo All files are created as empty files ready for your code!
echo.
pause