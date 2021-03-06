require 'spec_helper'

describe ApplicationController do
  controller do
    def index
      render text: ''
    end
  end

  describe 'GET :index' do
    let(:user_agent) {
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
    }
    let(:ip) { "127.0.0.1" }

    subject { get :index }

    before :each do
      @request.user_agent = user_agent
      ActionDispatch::Request.any_instance.stub(:remote_ip).and_return(ip)
    end

    context "with a supported browser" do
      let(:user_agent) {
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
      }

      before :each do
        controller.request.stub(:user_agent).and_return(user_agent)
        controller.request.stub(:host).and_return("www.globalforestwatch.org")
      end

      it "does not redirect to /notsupportedbrowser" do
        is_expected.to_not redirect_to("/notsupportedbrowser")
      end
    end

    context "with a unsupported browser" do
      let(:user_agent) { "Mozilla/4.0 WebTV/2.6 (compatible; MSIE 4.0)" }

      it "redirects to /notsupportedbrowser" do
        is_expected.to redirect_to("/notsupportedbrowser")
      end
    end
  end
end
