import { NextResponse } from 'next/server'
 

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    var page = searchParams.get('page');
    console.log(page);
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=${page}`);
    const newData = await response.json();
    return NextResponse.json({ newData })
}