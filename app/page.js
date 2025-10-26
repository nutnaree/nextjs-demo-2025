"use client";

import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  Form
} from "reactstrap";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";

export default function Home() {
  return (
    <div className="m-auto">
      <Header />
      <FormComponent />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
        {/* Code */}
      </div>

      {/* Add Product / Edit Product */}
      <Modal>
        <Form>
          <ModalHeader></ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label></Label>
              <Input/>
            </FormGroup>

            <FormGroup>
              <Label></Label>
              <Input/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button></Button>
            <Button></Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* Notification */}
      <Modal>
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button></Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
