<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Odczytaj dane z formularza
    $sentData = file_get_contents('php://input');
    $formData = json_decode($sentData, true);

    if ($formData !== null) {
        $name = $formData['name'];
        $lastname = $formData['lastname'];
        $email = $formData['email'];
        $desc = $formData['desc'] ?? '';
        $position = $formData['position'];
        $answer1 = $formData['answer1'] ?? '';
        $answer2 = $formData['answer2'] ?? '';
        $answer3 = $formData['answer3'] ?? '';

        $feedback = array('message' => 'Dane zostały wysłane poprawnie', 'data' => $formData);

        header('Content-Type: application/json');
        echo json_encode($feedback);
    } else {
        // Błąd w dekodowaniu JSON
        http_response_code(400);
        $errorResponse = array('error' => 'Błędny format danych.');
        echo json_encode($errorResponse);
      }
}
?>
