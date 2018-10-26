package main

import (
	"encoding/json"
	"log"
	"os"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/gocolly/colly"
)

type Service struct {
	URL         string `json:"url"`
	Name        string `json:"name"`
	Category    string `json:"category"`
	Description string `json:"description"`
}

func main() {
	filePath := "./src/data/services.scraped.json"
	file, err := os.Create(filePath)
	if err != nil {
		log.Fatalf("Cannot create file %q: %s\n", filePath, err)
		return
	}
	defer file.Close()

	services := make([]Service, 0, 800)

	// Instantiate default collector
	c := colly.NewCollector()

	c.OnHTML("#readme > div.Box-body.p-6 > article > h2", func(e *colly.HTMLElement) {
		categoryTitle := e.Text
		e.DOM.Next().Find("ul > li").Each(func(_ int, s *goquery.Selection) {
			url, _ := s.Find("a").Attr("href")
			title := s.Find("a").Text()

			service := Service{
				URL:         url,
				Name:        title,
				Category:    categoryTitle,
				Description: strings.TrimLeft(s.Text(), title+" — "),
			}
			services = append(services, service)
		})
	})

	c.Visit("https://github.com/ripienaar/free-for-dev/")

	enc := json.NewEncoder(file)
	enc.SetIndent("", "  ")
	enc.Encode(services)

	log.Printf("Scraping finished, check file %q for results\n", filePath)
}
