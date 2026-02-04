import requests
import sys
from datetime import datetime, timedelta
import json

class WealthAdvisorAPITester:
    def __init__(self, base_url="https://invest-wisely-20.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response preview: {str(response_data)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:500]}")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:500]
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_blog_articles(self):
        """Test getting all blog articles"""
        success, response = self.run_test("Get All Blog Articles", "GET", "blog/articles", 200)
        if success and isinstance(response, list) and len(response) > 0:
            print(f"   Found {len(response)} articles")
            return True, response
        return False, {}

    def test_blog_articles_by_category(self):
        """Test filtering blog articles by category"""
        return self.run_test(
            "Get Blog Articles by Category", 
            "GET", 
            "blog/articles", 
            200,
            params={"category": "Podstawy inwestowania"}
        )

    def test_blog_categories(self):
        """Test getting blog categories"""
        success, response = self.run_test("Get Blog Categories", "GET", "blog/categories", 200)
        if success and 'categories' in response:
            print(f"   Found categories: {response['categories']}")
            return True, response
        return False, {}

    def test_single_blog_article(self, slug="podstawy-inwestowania-dla-poczatkujacych"):
        """Test getting a single blog article"""
        return self.run_test(
            f"Get Single Blog Article ({slug})", 
            "GET", 
            f"blog/articles/{slug}", 
            200
        )

    def test_nonexistent_blog_article(self):
        """Test getting a non-existent blog article"""
        return self.run_test(
            "Get Non-existent Blog Article", 
            "GET", 
            "blog/articles/non-existent-slug", 
            404
        )

    def test_available_slots(self):
        """Test getting available booking slots"""
        # Test with tomorrow's date
        tomorrow = (datetime.now() + timedelta(days=1)).strftime("%Y-%m-%d")
        return self.run_test(
            f"Get Available Slots ({tomorrow})", 
            "GET", 
            "bookings/available-slots", 
            200,
            params={"date": tomorrow}
        )

    def test_create_booking(self):
        """Test creating a booking"""
        tomorrow = (datetime.now() + timedelta(days=1)).strftime("%Y-%m-%d")
        booking_data = {
            "name": "Jan Testowy",
            "email": "jan.testowy@example.com",
            "phone": "+48123456789",
            "preferred_date": tomorrow,
            "preferred_time": "10:00",
            "topic": "Doradztwo inwestycyjne",
            "message": "Test booking message"
        }
        
        success, response = self.run_test(
            "Create Booking", 
            "POST", 
            "bookings", 
            200,
            data=booking_data
        )
        
        if success and 'id' in response:
            print(f"   Created booking with ID: {response['id']}")
            return True, response
        return False, {}

    def test_get_bookings(self):
        """Test getting all bookings"""
        return self.run_test("Get All Bookings", "GET", "bookings", 200)

    def test_create_contact_message(self):
        """Test creating a contact message"""
        contact_data = {
            "name": "Anna Testowa",
            "email": "anna.testowa@example.com",
            "phone": "+48987654321",
            "message": "Test contact message from API testing"
        }
        
        success, response = self.run_test(
            "Create Contact Message", 
            "POST", 
            "contact", 
            200,
            data=contact_data
        )
        
        if success and 'id' in response:
            print(f"   Created contact message with ID: {response['id']}")
            return True, response
        return False, {}

    def test_get_contact_messages(self):
        """Test getting all contact messages"""
        return self.run_test("Get All Contact Messages", "GET", "contact", 200)

    def test_invalid_booking_data(self):
        """Test creating booking with invalid data"""
        invalid_booking = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "phone": "+48123456789",
            "preferred_date": "2025-01-15",
            "preferred_time": "10:00"
        }
        
        # This should fail validation
        return self.run_test(
            "Create Booking with Invalid Data", 
            "POST", 
            "bookings", 
            422,  # Validation error
            data=invalid_booking
        )

def main():
    print("🚀 Starting Wealth Advisor API Testing...")
    print("=" * 60)
    
    tester = WealthAdvisorAPITester()
    
    # Test all endpoints
    print("\n📋 Testing Blog Endpoints...")
    tester.test_root_endpoint()
    tester.test_blog_articles()
    tester.test_blog_articles_by_category()
    tester.test_blog_categories()
    tester.test_single_blog_article()
    tester.test_nonexistent_blog_article()
    
    print("\n📅 Testing Booking Endpoints...")
    tester.test_available_slots()
    tester.test_create_booking()
    tester.test_get_bookings()
    tester.test_invalid_booking_data()
    
    print("\n📧 Testing Contact Endpoints...")
    tester.test_create_contact_message()
    tester.test_get_contact_messages()
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 FINAL RESULTS:")
    print(f"   Tests run: {tester.tests_run}")
    print(f"   Tests passed: {tester.tests_passed}")
    print(f"   Tests failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success rate: {(tester.tests_passed / tester.tests_run * 100):.1f}%")
    
    if tester.failed_tests:
        print(f"\n❌ FAILED TESTS:")
        for i, test in enumerate(tester.failed_tests, 1):
            print(f"   {i}. {test['name']}")
            if 'error' in test:
                print(f"      Error: {test['error']}")
            else:
                print(f"      Expected: {test['expected']}, Got: {test['actual']}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())