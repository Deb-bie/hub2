 const PORT = process.env.PORT || 8001
// const PORT = 8001

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
// const cache = require('./routeCache')



const intl = [
    {
        fellowships: "https://www.scholarshiptab.com/fellowship",
        internships: "https://www.scholarshiptab.com/internship",
        contests: "https://www.scholarshiptab.com/contest",
        uk: "https://www.scholarshiptab.com/scholarships-in/united-kingdom",
        usa: "https://www.scholarshiptab.com/scholarships-in/united-states",
        canada: "https://www.scholarshiptab.com/scholarships-in/canada",
        australia: "https://www.scholarshiptab.com/scholarships-in/australia",
        japan: "https://www.scholarshiptab.com/scholarships-in/japan",
        new_zealand: "https://www.scholarshiptab.com/scholarships-in/new-zealand",
        netherlands: "https://www.scholarshiptab.com/scholarships-in/netherlands",
        germany: "https://www.scholarshiptab.com/scholarships-in/germany",
        ireland: "https://www.scholarshiptab.com/scholarships-in/ireland",
        south_africa: "https://www.scholarshiptab.com/scholarships-in/south-africa",
        entrepreneurs: "https://www.scholarshiptab.com/entrepreneurs",
        
    },{
        fellowships: "https://www.scholarshiptab.com/fellowship/2",
        internships: "https://www.scholarshiptab.com/internship/2",
        contests: "https://www.scholarshiptab.com/contest/2",
        uk: "https://www.scholarshiptab.com/scholarships-in/united-kingdom/2",
        usa: "https://www.scholarshiptab.com/scholarships-in/united-states/2",
        canada: "https://www.scholarshiptab.com/scholarships-in/canada/2",
        australia: "https://www.scholarshiptab.com/scholarships-in/australia/2",
        japan: "https://www.scholarshiptab.com/scholarships-in/japan/2",
        new_zealand: "https://www.scholarshiptab.com/scholarships-in/new-zealand/2",
        netherlands: "https://www.scholarshiptab.com/scholarships-in/netherlands/2",
        germany: "https://www.scholarshiptab.com/scholarships-in/germany/2",
        ireland: "https://www.scholarshiptab.com/scholarships-in/ireland/2",
        south_africa: "https://www.scholarshiptab.com/scholarships-in/south-africa/2",
        entrepreneurs: "https://www.scholarshiptab.com/entrepreneurs/2",
    },{
        fellowships: "https://www.scholarshiptab.com/fellowship/3",
        internships: "https://www.scholarshiptab.com/internship/3",
        contests: "https://www.scholarshiptab.com/contest/3",
        uk: "https://www.scholarshiptab.com/scholarships-in/united-kingdom/3",
        usa: "https://www.scholarshiptab.com/scholarships-in/united-states/3",
        canada: "https://www.scholarshiptab.com/scholarships-in/canada/3",
        australia: "https://www.scholarshiptab.com/scholarships-in/australia/3",
        japan: "https://www.scholarshiptab.com/scholarships-in/japan/3",
        new_zealand: "https://www.scholarshiptab.com/scholarships-in/new-zealand/3",
        netherlands: "https://www.scholarshiptab.com/scholarships-in/netherlands/3",
        germany: "https://www.scholarshiptab.com/scholarships-in/germany/3",
        ireland: "https://www.scholarshiptab.com/scholarships-in/ireland/3",
        south_africa: "https://www.scholarshiptab.com/scholarships-in/south-africa/3",
        entrepreneurs: "https://www.scholarshiptab.com/entrepreneurs/3",
    }
]

const fellowships = []
const internships = []
const contests = []
const uk = []
const usa = []
const canada = []
const australia = []
const japan = []
const new_zealand = []
const netherlands = []
const germany = []
const ireland = []
const south_africa = []
const entrepreneurs = []


intl.forEach(link => {
    axios.get(link.fellowships).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            fellowships.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/fellowships',
//  cache(88000), 
 (req, res) =>{res.json(fellowships)})


intl.forEach(link => {
    axios.get(link.internships).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            internships.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/internships',
//  cache(88000),
  (req, res) =>{res.json(internships)})


intl.forEach(link => {
    axios.get(link.contests).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            contests.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/contests',
//  cache(88000),
  (req, res) =>{res.json(contests)})


intl.forEach(link => {
    axios.get(link.uk).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"
           uk.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/uk',
//  cache(88000),
  (req, res) =>{res.json(uk)})


intl.forEach(link => {
    axios.get(link.usa).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            usa.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/usa',
//  cache(88000),
  (req, res) =>{res.json(usa)})


intl.forEach(link => {
    axios.get(link.canada).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            canada.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/canada',
//  cache(88000),
  (req, res) =>{res.json(canada)})



intl.forEach(link => {
    axios.get(link.ireland).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"
            ireland.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/ireland',
//  cache(88000),
  (req, res) =>{res.json(ireland)})



intl.forEach(link => {
    axios.get(link.netherlands).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            netherlands.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/netherlands',
//  cache(88000), 
 (req, res) =>{res.json(netherlands)})


intl.forEach(link => {
    axios.get(link.germany).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            germany.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/germany',
//  cache(88000),
  (req, res) =>{res.json(germany)})


intl.forEach(link => {
    axios.get(link.australia).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            australia.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/australia',
//  cache(88000),
  (req, res) =>{res.json(australia)})


intl.forEach(link => {
    axios.get(link.japan).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"
            japan.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/japan',
//  cache(88000),
  (req, res) =>{res.json(japan)})


intl.forEach(link => {
    axios.get(link.new_zealand).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            new_zealand.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/new_zealand',
//  cache(88000),
  (req, res) =>{res.json(new_zealand)})


intl.forEach(link => {
    axios.get(link.south_africa).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"

            south_africa.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/south_africa',
//  cache(88000),
  (req, res) =>{res.json(south_africa)})



intl.forEach(link => {
    axios.get(link.entrepreneurs).then(response => {
        const html = response.data 
        const $ = cheerio.load(html)

        $('.item-list .item-list-li ul .item-details', html).each(function () {
            const title = $(this).children('ul').children('.item-h2').children('h2').children('a').text()
            const image = $(this).prev('.item-logo').children('a').children('img').attr('src')
            const url = $(this).children('ul').children('.item-h2').children('h2').children('a').attr("href")
            const desc = $(this).children('ul').children('.item-desc').text()
            const deadline = $(this).children('ul').children('li').last().children('ul').children('li').first().children('span').text()
            const pre = "https://www.scholarshiptab.com"
            entrepreneurs.push({
                title,
                image: pre + image,
                url: pre + url,
                desc,
                deadline
            })

        })
    })
})
 
app.get('/entrepreneurs', 
// cache(88000),
 (req, res) =>{res.json(entrepreneurs)})





app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
