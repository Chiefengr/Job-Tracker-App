export const metadata = {
    title: 'Mini Job Tracker',
    description: 'Track your job applications easily',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
                {children}
            </body>
        </html>
    );
}
