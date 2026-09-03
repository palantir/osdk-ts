import{j as r}from"./iframe-BbienW_k.js";import{O as b}from"./object-table-B0ggEq35.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Db7zaXUt.js";import{u as g}from"./useOsdkClient-Ba-MyRxU.js";import"./preload-helper-BwYT6GBt.js";import"./Table-CfHAZrq3.js";import"./index-BtVRX5ik.js";import"./Dialog-CEYCtVCN.js";import"./cross-D79BwPuA.js";import"./svgIconContainer-9jKJCEtA.js";import"./useBaseUiId-mGNAwuSb.js";import"./InternalBackdrop-BGghe2gX.js";import"./composite-DehmI49I.js";import"./index-_tXk15dP.js";import"./index-CBwDIYK2.js";import"./index-DHabHcMF.js";import"./useEventCallback-CRCaMKxg.js";import"./SkeletonBar-CNiR4LJi.js";import"./LoadingCell-CLphyg8f.js";import"./ColumnConfigDialog-D9bURUp0.js";import"./DraggableList-CaawD_zV.js";import"./search-DtpodeH8.js";import"./Input-C02zCytb.js";import"./useControlled-BbPCoZLB.js";import"./Button-DgQWdRpI.js";import"./small-cross-Bbjb07uO.js";import"./ActionButton-CH9BHHmi.js";import"./Checkbox-Bh14gdun.js";import"./useValueChanged-B86iGZyF.js";import"./CollapsiblePanel-CzWLrbRF.js";import"./MultiColumnSortDialog-CbdTworu.js";import"./MenuTrigger-B_CsaOE_.js";import"./CompositeItem-BtZO_Q27.js";import"./ToolbarRootContext-tNJYHhh0.js";import"./getDisabledMountTransitionStyles-DNQX_6BS.js";import"./getPseudoElementBounds-B22wLb31.js";import"./chevron-down-BvQtKUUh.js";import"./index-Bvo9wdGf.js";import"./error-Re8NGQni.js";import"./BaseCbacBanner-Cl4iMAcK.js";import"./makeExternalStore-D54vu3Pa.js";import"./Tooltip-CfUkHW1C.js";import"./PopoverPopup-9hgtmzo1.js";import"./debounce-CfOEKZQ8.js";import"./tick-DXkGn8fU.js";import"./DropdownField-DWMcGlhL.js";import"./isEqual-CS7j3ZhU.js";import"./withOsdkMetrics-dw5qmcGp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
