export async function profileGenerator(result_: number): Promise<any> {
    const response = await fetch((`${process.env.VUE_APP_FAKEAPP_URL}/?results=${result_}`));
    return response.json();    
    }

