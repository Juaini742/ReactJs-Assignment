import {
  Card_Body,
  Button,
  TitleForm,
  InputBorder,
  RightIn,
} from "../../atom/index";

function ContactSection() {
  return (
    <section>
      <RightIn className="h-full">
        <Card_Body variant="card-backdrop">
          <TitleForm>Contact</TitleForm>
          <p className=" text-center my-8">send your message here</p>
          <form action="">
            <div className="flex flex-col">
              <InputBorder text="Name" />
            </div>
            <div className="flex flex-col mb-4">
              <InputBorder text="Message" />
            </div>
            <Button variant="primary" className="py-1 px-10">
              send
            </Button>
          </form>
        </Card_Body>
      </RightIn>
    </section>
  );
}

export default ContactSection;
