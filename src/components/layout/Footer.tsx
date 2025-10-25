export default function Footer() {
 

  return (
    <footer className="bg-card py-10 border-t-2 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Justin Mondji. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}