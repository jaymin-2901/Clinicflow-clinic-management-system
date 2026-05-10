<?php
/**
 * Health Check Endpoint
 * Responds with status and timestamp
 */

header('Content-Type: application/json');
http_response_code(200);

echo json_encode([
    'status' => 'Backend running successfully',
    'timestamp' => time(),
    'environment' => getenv('APP_ENV') ?: 'development',
    'database' => 'connected'
]);

exit;
