"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Copy, Check, Eye } from "lucide-react";
import { DesignType } from "@/data/designs";

interface DesignCardProps {
  design: DesignType;
}

export function DesignCard({ design }: DesignCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(design.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Card className="retro-card overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-4">
        {/* Gradient header with pixel accent */}
        <div className={`h-32 rounded-lg bg-gradient-to-br ${design.gradient} mb-4 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-3 right-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 text-gray-900 rounded text-xs font-mono font-medium">
              <div className="w-2 h-2 bg-pixel-blue rounded-full"></div>
              {design.category}
            </span>
          </div>
        </div>
        
        <CardTitle className="text-xl font-semibold text-foreground leading-tight mb-3">
          {design.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
          {design.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {design.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs mono-text"
            >
              <div className="w-1 h-1 bg-pixel-pink rounded-full"></div>
              {tag}
            </span>
          ))}
          {design.tags.length > 4 && (
            <span className="px-2 py-1 text-xs text-muted-foreground mono-text">
              +{design.tags.length - 4}
            </span>
          )}
        </div>

        {/* Dialog Trigger */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="pixel-button w-full"
              size="sm"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Prompt
            </Button>
          </DialogTrigger>
          
          <DialogContent className="bg-card border-border max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-pixel-blue to-pixel-pink rounded-full"></div>
                {design.title}
              </DialogTitle>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                {design.description}
              </p>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pixel-green rounded-full"></div>
                  Category
                </h4>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg mono-text font-medium">
                  <div className="w-2 h-2 bg-pixel-blue rounded-full"></div>
                  {design.category}
                </span>
              </div>
              
              {/* Tags */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pixel-pink rounded-full"></div>
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {design.tags.map((tag, index) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-md mono-text text-sm"
                    >
                      <div 
                        className={`w-1.5 h-1.5 rounded-full ${
                          index % 3 === 0 ? 'bg-pixel-blue' : 
                          index % 3 === 1 ? 'bg-pixel-pink' : 'bg-pixel-green'
                        }`}
                      ></div>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* AI Prompt */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-pixel-blue to-pixel-pink rounded-full"></div>
                    AI Prompt
                  </h4>
                  <Button
                    onClick={handleCopyPrompt}
                    variant="outline"
                    size="sm"
                    className="border-pixel-blue text-pixel-blue hover:bg-pixel-blue hover:text-white transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pixel-blue via-pixel-pink to-pixel-green rounded-t"></div>
                  <div className="bg-muted border border-border rounded-lg p-6 pt-8">
                    <p className="mono-text text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                      {design.prompt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}