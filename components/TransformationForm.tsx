"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { aspectRatioOptions, defaultValues, transformationTypes } from "@/constants"
import { CustomField } from "./CustomField"
import { useState } from "react"
import { AspectRatioKey } from "@/lib/utils"
export const formSchema = z.object({
  title:z.string(),
  aspectRatio:z.string(),
  color:z.string().optional(),
  prompt:z.string().optional(),
  publicId:z.string()
})

const TransformationForm = ({action ,data = null,userId,type,creditBalance}:
TransformationFormProps
) => {
const transformationType = transformationTypes[type]
const [image, setImage] = useState(data)
const [newTransformation, setnewTransformation] = useState<Transformations | null>(null)

const initialValues = data && action === 'Update' ? {
    title: data.title,
    aspectRatio: data.aspectRatio,
    color: data.color,
    prompt: data.prompt,
    publicId: data.publicId,
}: defaultValues

     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:initialValues,
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const onSelectHandler=(value:string,onChangeField:(value:string)=>void)=>{

  }

  const onInputChangeHandler=(value:string, name:string, type:string, onChangeField:(value:string)=>void)=>{

  }
  return (
    <div className='py-4'>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomField
        control={form.control}
        name="title"
        formLabel="Image Label"
        render={({field})=><Input {...field}/>}
         />

    {  type === "fill" && (
            <CustomField
            control={form.control}
            name="aspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({field})=>(
<Select 
onValueChange={(value)=>onSelectHandler(value,field.onChange)}
>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select Size" />
  </SelectTrigger>
  <SelectContent >
    {Object.keys(aspectRatioOptions).map((key)=>(
        <SelectItem key={key} value={key}>{aspectRatioOptions[key as AspectRatioKey].label}</SelectItem>
    ))}
  </SelectContent>
</Select>

            )}

             />
        )
    }   


    {(type=== "remove" || type==="recolor") && (
        <div className="">
            <CustomField 
            control={form.control}
            name="prompt"
            formLabel={
                type== "remove"?"Object to remove":"Object to recolor"
            }
            className="w-full"
            render={({field})=><Input
            value={field.value}
            onChange={(e)=> onInputChangeHandler(
                e.target.value,
                "prompt",
                type,
                field.onChange
            )}
            />}
            />
            {
                type === "recolor" && (
                    <CustomField
                    control={form.control}
                    name="color"
                    formLabel="Replacemnt Color"
                    className="w-full"
                    render={({field})=>(
                        <Input 
                        value={field.value}
                        onChange={(e)=> onInputChangeHandler(
                            e.target.value,
                            "Color",
                            'recolor',
                            field.onChange
                        )}
                        />
                    )}
                    />
                )
            }
        </div>
    )
    
    }    
      </form>
    </Form>
    </div>
  )
}

export default TransformationForm
