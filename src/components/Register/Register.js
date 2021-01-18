const Register = ({onRouteChange}) => {
    return (
      <article class="br3 ba dark-gray mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="confirmpassword">
                  Confirm Password
                </label>
                <input
                  className="b pa2 input-reset hover-bg-black hover-white w-100"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>
            </fieldset>
            <div>
              <input
                className="b ph3 pv2 input-reset grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={() => onRouteChange('home')}
              />
            </div>
          </form>
        </main>
      </article>
    );
  };
  
  export default Register;
  