import{h,H as y,j as r}from"./iframe-BvgKvBTT.js";import{B as a}from"./BaseWorkshopModule-Cg3zcxKR.js";import"./preload-helper-dVfNiIKn.js";import"./index-C6P12W9x.js";import"./ActionButton-Db7nx97v.js";import"./Button-CZUmTkhK.js";import"./useRenderElement-BFIknrE2.js";const{expect:s,spyOn:w,userEvent:f,within:b}=__STORYBOOK_MODULE_TEST__;function k(e){try{const o=new URL(e);return o.protocol==="https:"||o.protocol==="http:"}catch{return!1}}const F={title:"Components/WorkshopModule/Building Blocks/BaseWorkshopModule",component:a,args:{foundryUrl:"",moduleRid:"ri.workshop.main.module.example",moduleVersion:"published",enableAuthPopup:!1,title:"Workshop module preview"},render:e=>r.jsx("div",{style:{height:"24rem"},children:k(e.foundryUrl)?r.jsx(a,{...e},e.defaultTheme):r.jsx("p",{children:"Set foundryUrl to your Foundry URL and moduleRid to a module you can access in the controls below. Rendering requires a signed-in Foundry session."})}),parameters:{controls:{expanded:!0},docs:{description:{component:"This story makes no requests until a Foundry URL is supplied. Provide your own URL and module RID in the controls to render a real Workshop module. The version defaults to published; use latest for the latest saved version."}}},argTypes:{foundryUrl:{control:"text",description:"Your Foundry base URL. Leave blank to disable the iframe."},moduleRid:{control:"text",description:"RID of a Workshop module you can access."},moduleVersion:{control:"select",options:["latest","published"],description:"latest for the latest saved version, or published for the published version. Defaults to published."},title:{control:"text"},enableAuthPopup:{control:"boolean",description:"Enable Foundry session checks and sign-in popups. Defaults to false."},branchRid:{control:"text",description:"Global branch RID. Leave blank to use main. Changing the branch reloads the module."},defaultTheme:{control:"select",options:[void 0,"light","dark","system"],description:"Initial theme override. System resolves the browser preference once. Changing this control remounts the preview to apply the theme."},className:{control:"text"},style:{control:"object"}}},n={parameters:{docs:{source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>`}}}},t={args:{foundryUrl:"https://foundry.example.com",enableAuthPopup:!0},beforeEach:()=>{const e=w(window,"open").mockReturnValue(null);return()=>e.mockRestore()},parameters:{msw:{handlers:[h.head("https://foundry.example.com/workspace/module/view/*",()=>new y(null,{status:401}))]},docs:{description:{story:"Enables auth recovery and simulates an expired Foundry session with a blocked sign-in popup. No real sign-in window is opened in this example."},source:{code:`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  enableAuthPopup
  style={{ height: "24rem" }}
/>`}}},play:async({canvasElement:e})=>{const o=b(e),m=await o.findByRole("button",{name:"Sign in to Foundry"});await s(o.getByTitle("Workshop module preview")).not.toBeVisible(),await s(o.getByRole("link",{name:"Open in Foundry"})).toHaveAttribute("href","https://foundry.example.com/workspace/module/view/latest/ri.workshop.main.module.example?foundry-branch-rid="),await f.click(m),await s(window.open).toHaveBeenCalledTimes(2)}};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  style={{ height: "24rem" }}
/>\`
      }
    }
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    foundryUrl: "https://foundry.example.com",
    enableAuthPopup: true
  },
  beforeEach: () => {
    const open = spyOn(window, "open").mockReturnValue(null);
    return () => open.mockRestore();
  },
  parameters: {
    msw: {
      handlers: [http.head("https://foundry.example.com/workspace/module/view/*", () => new HttpResponse(null, {
        status: 401
      }))]
    },
    docs: {
      description: {
        story: "Enables auth recovery and simulates an expired Foundry session with a blocked sign-in popup. No real sign-in window is opened in this example."
      },
      source: {
        code: \`<BaseWorkshopModule
  foundryUrl="https://example.palantirfoundry.com"
  moduleRid="ri.workshop.main.module.example"
  enableAuthPopup
  style={{ height: "24rem" }}
/>\`
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const signIn = await canvas.findByRole("button", {
      name: "Sign in to Foundry"
    });
    await expect(canvas.getByTitle("Workshop module preview")).not.toBeVisible();
    await expect(canvas.getByRole("link", {
      name: "Open in Foundry"
    })).toHaveAttribute("href", "https://foundry.example.com/workspace/module/view/latest/ri.workshop.main.module.example?foundry-branch-rid=");
    await userEvent.click(signIn);
    await expect(window.open).toHaveBeenCalledTimes(2);
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const T=["Default","SignInRequired"];export{n as Default,t as SignInRequired,T as __namedExportsOrder,F as default};
