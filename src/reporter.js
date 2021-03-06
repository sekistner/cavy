// cavy-cli reporter function.

// Internal: Check that cavy-cli server is running and if so, send report.
export default async function(report) {
  const url = 'http://127.0.0.1:8082/';

  try {
    const response = await fetch(url);
    const text = await response.text();

    if (text == 'cavy-cli running') {
      return send(report);
    } else {
      throw new Error('Unexpected response');
    }
  } catch (e) {
    console.log(`Skipping sending test report to cavy-cli - ${e.message}.`)
  }
}

// Internal: Make a post request to the cavy-cli server with the test report.
async function send(report) {
  const url = 'http://127.0.0.1:8082/report';

  const options = {
    method: 'POST',
    body: JSON.stringify(report),
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    await fetch(url, options);
    console.log('Cavy test report successfully sent to cavy-cli');
  } catch (e) {
    console.group('Error sending test results')
    console.warn(e.message);
    console.groupEnd();
  }
}
