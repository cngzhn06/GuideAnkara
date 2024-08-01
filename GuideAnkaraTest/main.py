import requests
import pytest

def test_api(endpoint):
    base_url = 'http://localhost:8000/api'
    url = f'{base_url}/{endpoint}'
    response = requests.get(url)

    assert response.status_code == 200, f"Beklenen durum kodu 200 fakat {response.status_code} alındı"

    data = response.json()
    print(data)

    assert isinstance(data, list),{data}
    assert len(data) > 0,{data}

@pytest.mark.parametrize("endpoint", [
    ("get-avm"),
    ("get-hospitals"),
    ("get-muze"),
    ("get-opera"),
    ("get-sinema"),
    ("get-stadyum"),
    ("get-tiyatro"),
    ("get-universites"),
])
def test_endpoints(endpoint):
    test_api(endpoint)
