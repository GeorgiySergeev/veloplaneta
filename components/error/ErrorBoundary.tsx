'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
    children?: ReactNode;
    fallback?: ReactNode;
    onReset?: () => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can log the error to an error reporting service here
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    handleReset = (): void => {
        this.setState({ hasError: false, error: null });
        if (this.props.onReset) {
            this.props.onReset();
        }
    };

    render(): ReactNode {
        if (this.state.hasError) {
            // If a custom fallback is provided, use it
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Otherwise, use the default fallback UI
            return (
                <div className="w-full h-full min-h-[400px] flex items-center justify-center p-6 bg-background">
                    <div className="max-w-md w-full">
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-5 w-5" />
                            <AlertTitle>Something went wrong</AlertTitle>
                            <AlertDescription>
                                {this.state.error?.message || 'An unexpected error occurred.'}
                            </AlertDescription>
                        </Alert>

                        <div className="text-center">
                            <p className="text-muted-foreground mb-4">
                                We apologize for the inconvenience. Please try again or contact
                                support if the problem persists.
                            </p>

                            <Button onClick={this.handleReset} className="flex items-center gap-2">
                                <RefreshCw className="h-4 w-4" />
                                Try Again
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

// Usage example:
// <ErrorBoundary>
//   <YourComponent />
// </ErrorBoundary>
