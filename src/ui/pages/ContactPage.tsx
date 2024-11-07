import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "../shadcn/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../shadcn/ui/form"
import { Input } from "../shadcn/ui/input"
import { Textarea } from "../shadcn/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../shadcn/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MapComponent from '../components/MapComponent'
import { sendEmail } from '../../lib/sendMail'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await sendEmail(values.email, values.message)
    form.reset();
    if ((response.data as { error: boolean }).error) {
      toast.error('Failed to send message. Please try again later.')
    } else {
      toast.success('Message sent successfully.')
    }
  }

  return (
    <div className=" font-bricolage-grotesque flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">Contact Us</h1>
          <div className="grid gap-10 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-indigo-500" />
                    <p>56700 Gangalal Marga Tinkune, Dharan-8, Sunsari, Nepal.</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-indigo-500" />
                    <p>(+977) 9800000000</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-indigo-500" />
                    <p>contact@acesopensource.org</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <div className="aspect-video">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=87.28868365287782%2C26.790507632262013%2C87.29576468467712%2C26.794817294110448&amp;layer=mapnik"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div> */}
                  <div className="aspect-video">
                    <MapComponent
                      center={[26.792662, 87.292895]} />

                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage

{/* <iframe width="425" height="350" src="" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/26.792662/87.292224">View Larger Map</a></small> */ }