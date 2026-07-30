import{j as r}from"./iframe-CjguFHy4.js";import{O as b}from"./object-table-BtuqOo-1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEYhd8ao.js";import{u as g}from"./useOsdkClient-4R8IZiTA.js";import"./preload-helper-LDqCwxAd.js";import"./Table-_ZnYlHIw.js";import"./index-BB032sbZ.js";import"./Dialog-B9J_G6l0.js";import"./cross-D1aOBf9U.js";import"./svgIconContainer-BZwzEo8G.js";import"./useBaseUiId-CgMNdHCe.js";import"./InternalBackdrop-DizbYCRP.js";import"./composite-Dx3ugufv.js";import"./index-BIFsH4xl.js";import"./index-C0VOKt8s.js";import"./index--EMP8S_8.js";import"./useEventCallback-5iqVINQW.js";import"./SkeletonBar-DblXaHNi.js";import"./LoadingCell-mjEtb5oo.js";import"./ColumnConfigDialog-DJeUgPPb.js";import"./DraggableList-BiHAyTPo.js";import"./search-PZYHdBYN.js";import"./Input-DSfygnqR.js";import"./useControlled-CjqkuBBy.js";import"./isEqual-XSvwjyBd.js";import"./isObject-lWDz75CT.js";import"./Button-D0KOIrm4.js";import"./ActionButton-CFH3DEk_.js";import"./Checkbox-CjvWoFfH.js";import"./useValueChanged-b9wcCC3s.js";import"./CollapsiblePanel-D-JMcXqs.js";import"./MultiColumnSortDialog-BOja1Xix.js";import"./MenuTrigger-B84dkc4t.js";import"./CompositeItem-DupF21ys.js";import"./ToolbarRootContext-Cc_rTViK.js";import"./getDisabledMountTransitionStyles-CzI3UF-F.js";import"./getPseudoElementBounds-Ds9Y3NYO.js";import"./chevron-down-ZzrJRIAu.js";import"./index-3HrMLGVC.js";import"./error-C_FLUo1p.js";import"./BaseCbacBanner-CuPOOH0I.js";import"./makeExternalStore-DL1G6fQU.js";import"./Tooltip-HAHLZ6Nc.js";import"./PopoverPopup-n4w7Qhj9.js";import"./toNumber-CI_cbj49.js";import"./tick-qr3TS1uB.js";import"./DropdownField-34nprrOE.js";import"./withOsdkMetrics-fD7F6GVF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
