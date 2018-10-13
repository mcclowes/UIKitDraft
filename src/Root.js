import React from 'react';
import settings from "./module/settings";
import variables from "./module/variables";
import EL from "./module/EL";

import {
  //W,
  C,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Img,
  Label,
  Input,
  TextArea,
  Checkbox,
  Radio,
  Button,
  LineX,
  LineY,
  Select,
  Option,
  Area,
  A
} from "./module";


const range5 = [1, 2, 3, 4, 5]
const range3 = [1, 2, 3]

const examplesContainer = `display:flex; flex-wrap: wrap; align-items: flex-start; padding-right: ${variables.spaces[2]};`

//todo the calc problem because of the margin? might not be a problem if you see that flex pushes you in going for the uncommented solution
const example = `
  /*
  flex:1 1 calc(50% - ${variables.spaces[2]});
  @media (max-width: 600px) {
    flex-basis: 100%;
  };
  */
  flex:1 1 500px;
`

const Root = () => {

  return <>

  <C> - there are few theme settings all the rest is overrides, you are on your own there </C><br/>
  <C> - all content is inline, all containers are block, the rest is layout </C><br/>
  <C> - all content has one direction margin (margin bottom, margin left) </C><br/>
  <C> - all containers have one direction padding (padding top, padding right) </C><br/>

  <C>Spacing:</C>

  <C>1</C><EL css={[`height: ${variables.spaces[1]}; background-color: ${settings.primaryColor};`]}/>
  <C>2</C><EL css={[`height: ${variables.spaces[2]}; background-color: ${settings.primaryColor};`]}/>
  <C>3</C><EL css={[`height: ${variables.spaces[3]}; background-color: ${settings.primaryColor};`]}/>
  <C>4</C><EL css={[`height: ${variables.spaces[4]}; background-color: ${settings.primaryColor};`]}/>
  <C>5</C><EL css={[`height: ${variables.spaces[5]}; background-color: ${settings.primaryColor};`]}/>
  <C>6</C><EL css={[`height: ${variables.spaces[6]}; background-color: ${settings.primaryColor};`]}/>

  <C>Headers:</C>

  <H1>Header 1</H1>
  <H2>Header 2</H2>
  <H3>Header 3</H3>
  <H4>Header 4</H4>
  <H5>Header 5</H5>
  <H6>Header 6</H6>

  <H3>Area:</H3>

  <Area>
    <EL>Area content</EL>
  </Area>

  <H3>LineX:</H3>

  <Area>
    <LineX/>
  </Area>

  <H3>LineY:</H3>

  <Area>
    <LineX/>
  </Area>

  <H3>Buttons:</H3>

  <C>Primary:</C>
  <Button>Primary</Button>
  <C>Disabled:</C>
  <Button disabled>Disabled</Button>

  <H3>Input:</H3>

  <C>Default:</C>
  <Input/>
  <C>Disabled:</C>
  <Input disabled/>
  {/*<C>ReadOnly:</C>
  <Input readOnly/>*/}

  <H3>TextArea:</H3>

  <C>Default:</C>
  <TextArea/>
  <C>Disabled:</C>
  <TextArea disabled/>
  {/*<C>ReadOnly:</C>
  <TextArea readOnly/>*/}

  <H3>Select:</H3>

  <C>Default:</C>
  <Select>
    <Option>1</Option>
    <Option>2</Option>
    <Option>3</Option>
  </Select>

  <C>Multiple:</C>
  <Select multiple>
    <Option>1</Option>
    <Option>2</Option>
    <Option>3</Option>
  </Select>

  <C>Disabled:</C>
  <Select disabled>
    <Option>1</Option>
    <Option>2</Option>
    <Option>3</Option>
  </Select>

  <H3>Checkbox:</H3>

  <C>Default:</C><br/>
  <Checkbox/><br/>
  <C>Disabled:</C><br/>
  <Checkbox disabled/><br/>
  <C>Label right:</C><br/>
  <Checkbox id="myCheck1"/><Label htmlFor="myCheck1">Label</Label><br/>
  <C>Label left:</C><br/>
  <Label htmlFor="myCheck2">Label</Label><Checkbox id="myCheck2"/><br/>

  <C>Default:</C><br/>
  <Radio/><br/>
  <C>Disabled:</C><br/>
  <Radio disabled/><br/>
  <C>Label right:</C><br/>
  <Radio id="myRadio1"/><Label htmlFor="myRadio1">Label</Label><br/>
  <C>Label left:</C><br/>
  <Label htmlFor="myRadio2">Label</Label><Radio id="myRadio2"/><br/>

  <C>Mixing all together:</C>

  <EL css={[examplesContainer]}>

    <Area css={[example]}>
      <H3>Delivery options</H3>
      <LineX/>
      {range5.map((e) => (<div key={e}><Label>Option {e}</Label><Radio name="myRadio" value={e}/><br/></div>))}
      <LineX/>
      <Button>Submit</Button>
    </Area>

    <Area css={[example]}>
      <H3>Delivery options</H3>
      <LineX/>
      <Select>
        {range5.map((e) => (<Option key={e} value={e}>Option {e}</Option>))}
      </Select>
      <LineX/>
      <Button>Submit</Button>
    </Area>

    <Area css={[example]}>
      <H3>Sign up</H3>
      <LineX/>
      <EL css={[`display: flex;`]}>
        <EL css={[`flex: 1;`]}>
          <Label>Email</Label>
          <Input/>
        </EL>
        <EL css={[`flex: 1;`]}>
          <Label>Password</Label>
          <Input type="password"/><br/>
        </EL>
      </EL>
      <Label>Address 1</Label>
      <Input/><br/>
      <Label>Address 2</Label>
      <Input/><br/>
      <EL css={[`display: flex;`]}>
        <EL css={[`flex: 4;`]}>
          <Label>City</Label>
          <Input/><br/>
        </EL>
        <EL css={[`flex: 2;`]}>
          <Label>State</Label>
          <Input/><br/>
        </EL>
        <EL css={[`flex: 1;`]}>
          <Label>Postcode</Label>
          <Input/><br/>
        </EL>
      </EL>
      <C>I accept the <A href="">terms and conditions</A></C>
      <Checkbox/><br/>
      <Button>Sign in</Button>
      <LineX/>
      <C>{"Don't have an account yet?"}</C><br/>
      <C><A href="">Create account</A></C>
    </Area>

    <Area css={[example]}>
      <H3>Horizontal</H3>
      <LineX/>
      <EL css={[`display: flex; align-items: baseline;`]}>
        <Label css={`flex: 0 0 120px; white-space: nowrap;`}>Field 1</Label>
        <Input/>
      </EL>
      <EL css={[`display: flex; align-items: baseline;`]}>
        <Label css={`flex: 0 0 120px; white-space: nowrap;`}>Field 2</Label>
        <Input/>
      </EL>
      <EL css={[`display: flex;`]}>
        <Label css={`flex: 0 0 120px; white-space: nowrap;`}>Some option</Label>
        <EL>
          {range3.map((e) => (<div key={e}><Label>Option {e}</Label><Radio name="aRadio" value={e}/><br/></div>))}
        </EL>
      </EL>
      <C>I accept the <A href="">terms and conditions</A></C><Checkbox/><br/>
      <Button>Sign in</Button>
      <LineX/>
      <C>{"Don't have an account yet?"}</C><br/>
      <C><A href="">Create account</A></C>
    </Area>

    <Area css={[example]}>
      <H3>Sign up</H3>
      <LineX/>
      <Label>Username</Label>
      <Input placeholder="Username"/><br/>
      <Label>Password</Label>
      <Input type="password" placeholder="Password"/><br/>
      <Label>Confirm password</Label>
      <Input type="password" placeholder="Password"/><br/>
      <C>I accept the <A href="">terms and conditions</A></C>
      <Checkbox/><br/>
      <Button>Sign in</Button>
      <LineX/>
      <C>{"Don't have an account yet?"}</C><br/>
      <C><A href="">Create account</A></C>
    </Area>

    <Area css={[example]}>
      <EL css={["display:flex"]}>
        <EL css={['flex:0 0 125px;']}>
          <Img
            src="data:image/jpeg;base64,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"/>
        </EL>
        <LineY/>
        <EL css={['flex:1']}>
          <H3>Header</H3>
          <H5>Sub header</H5>
          <C>
            {range5.map((e) => (
              <span key={e}>
                {"some content some content some content some content some content "}
              </span>
            ))}
          </C>
          <LineX/>
          <EL css={["display:flex;justify-content:flex-end;"]}>
            {range5.map((e) => (<Button key={e}>Action</Button>))}
          </EL>
        </EL>
      </EL>
    </Area>

    <Area css={[example]}>
      <H3>Some Header</H3>
      <LineX/>
      <H4>Some Header</H4>
      <C>Some text content content content content content content content content content content content</C>
      <LineX/>
      {range5.map((e) => (<Button key={e}>Action</Button>))}
    </Area>

    <Area css={[example]}>
      <EL css={[`display:flex; text-align: center;`]}>
        {range5.map((e, i) => (<React.Fragment key={e}>
          {i > 0 && <LineY/>}
          <EL css={[`flex:1 1`]}>
            <C><A href="">Action</A></C>
          </EL>
        </React.Fragment>))}
      </EL>
    </Area>

  </EL>

  </>

}

export default Root;
