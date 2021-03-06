import React, { Component } from "react";
import { FormItem } from "./FormItem";
import "../style/contactForm.css";
import { HttpRequestSender } from "../../utility-modules/HttpRequestSender";
import config from "../../config.json";
import { Loading } from "../../components/Loading";
import { Box, BoxTypes } from "../../components/Box";

const formValidator = require("../../utility-modules/formValidator");

export class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        topic: "",
        message: "",
      },
      inputsWithError: {},
      loading: false,
      sendEmailSuccessful: false,
      showSendEmailMessage: false,
    };
  }

  formInputs = [
    {
      name: "name",
      tag: "Adınız",
      itemType: "input",
    },
    {
      name: "email",
      tag: "E-mail",
      itemType: "input",
    },
    {
      name: "topic",
      tag: "Konu",
      itemType: "input",
    },
  ];

  updateFormValues = (event) => {
    event.persist();
    this.setState((state) => {
      state.formData[event.target?.name] = event.target?.value;

      return state;
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let validationResult = formValidator.validate(this.state.formData);

    this.setState({
      ...this.state,
      inputsWithError: validationResult.errors,
    });

    if (validationResult.isSuccess) {
      const requestSender = new HttpRequestSender(config.BASE_URL);

      this.setState({ loading: true });

      let response = await requestSender.SendRequest(
        "post",
        "api/sendEmail",
        this.state.formData
      );

      if (response.isSuccess) {
        this.executeAfterSuccessfulSendEmail();
      } else {
        this.executeAfterUnsuccessfulSendEmail();
      }

      this.setState({ loading: false });
    }
  };

  valHasError = (val) => this.state.inputsWithError.hasOwnProperty(val);

  getErrorCode = (val) =>
    this.valHasError(val) ? this.state.inputsWithError[val][0] : null;

  executeAfterSuccessfulSendEmail = () => {
    this.setState({
      formData: { name: "", email: "", topic: "", message: "" },
      sendEmailSuccessful: true,
      showSendEmailMessage: true,
    });

    setTimeout(
      () =>
        this.setState({
          showSendEmailMessage: false,
        }),
      1500
    );
  };

  executeAfterUnsuccessfulSendEmail = () => {
    this.setState({
      sendEmailSuccessful: false,
      showSendEmailMessage: true,
    });

    setTimeout(
      () =>
        this.setState({
          showSendEmailMessage: false,
        }),
      1500
    );
  };

  createSendEmailResponseMessage = (isSuccess) => {
    let message = isSuccess
      ? "Mesajınız gönderildi !"
      : "Bir hata oluştu... Daha sonra deneyin !";
    let className = `alert alert-${isSuccess ? "success" : "alert"}`;

    return (
      <Box type={BoxTypes.Column}>
        <div className={className} role="alert">
          {message}
        </div>
      </Box>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Box type={BoxTypes.Wrapper}>
          {this.state.loading && (
            <Box type={BoxTypes.Column}>
              <Loading />
            </Box>
          )}
          {!this.state.loading &&
            this.state.showSendEmailMessage &&
            this.createSendEmailResponseMessage(this.state.sendEmailSuccessful)}
          <fieldset disabled={this.state.loading}>
            <form>
              <div className="row m-4">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  {this.formInputs.map((item, i) => (
                    <FormItem
                      key={i}
                      name={item.name}
                      itemType={item.itemType}
                      tag={item.tag}
                      erroneous={this.valHasError(item.name)}
                      errorCode={this.getErrorCode(item.name)}
                      value={this.state.formData[item.name]}
                      onChange={this.updateFormValues}
                    />
                  ))}
                </div>
                <div className="col-md-4">
                  <FormItem
                    name="message"
                    itemType="textarea"
                    tag={"Mesajınız"}
                    erroneous={this.valHasError("message")}
                    errorCode={this.getErrorCode("message")}
                    value={this.state.formData["message"]}
                    onChange={this.updateFormValues}
                    customAttributes={{ id: "messageTextArea", rows: "5" }}
                  />
                  <div className="mt-3">
                    <button
                      id="sendBtn"
                      className="btn text-white float-right"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Gönder
                    </button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </form>
          </fieldset>
        </Box>
      </React.Fragment>
    );
  }
}
