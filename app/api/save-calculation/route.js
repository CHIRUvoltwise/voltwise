import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from("saved_calculations")
      .insert([body]);

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}