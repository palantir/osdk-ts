import{j as r}from"./iframe-Dv4QQ6Y4.js";import{O as b}from"./object-table-C1SCK71K.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BR699g4Q.js";import{u as g}from"./useOsdkClient-BE_-nJBB.js";import"./preload-helper-BZeo2aa_.js";import"./Table-DCAi-cqE.js";import"./index-Bo5vUrye.js";import"./Dialog-CI9eTel7.js";import"./cross-CTXbroJK.js";import"./svgIconContainer-De6SA4Dr.js";import"./useBaseUiId-DPM9QPEL.js";import"./InternalBackdrop-DRaUyJ8v.js";import"./composite-D2e8WeVr.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./index-B4wl8HiA.js";import"./useEventCallback-DE28hwwS.js";import"./SkeletonBar-DbWunkuZ.js";import"./LoadingCell-Cyjm6LXt.js";import"./ColumnConfigDialog-BoudTuK3.js";import"./DraggableList-DKQpzmfW.js";import"./search-CWgR1vVP.js";import"./Input-DTNwj_yO.js";import"./useControlled-BcGMXD3D.js";import"./Button-B_X3_bQA.js";import"./small-cross-BOwPxFN0.js";import"./ActionButton-C1ptiifp.js";import"./Checkbox-BhB2wpJV.js";import"./useValueChanged-1zfYKsDL.js";import"./CollapsiblePanel-DNTWrgGT.js";import"./MultiColumnSortDialog-2kScV4zV.js";import"./MenuTrigger-CbxBQ7TZ.js";import"./CompositeItem-b4hZwQ2E.js";import"./ToolbarRootContext-Blue4JH4.js";import"./getDisabledMountTransitionStyles-n1IP7gt4.js";import"./getPseudoElementBounds-DmVA_fGG.js";import"./chevron-down-XPf4kqix.js";import"./index-X99WJuZn.js";import"./error-CMA_8Zv0.js";import"./BaseCbacBanner-DyBJvF4a.js";import"./makeExternalStore-Bg3zd0w-.js";import"./Tooltip-DSVMTHzP.js";import"./PopoverPopup-4H23XaH2.js";import"./debounce-DMjYGfU6.js";import"./tick-Dh2x96zi.js";import"./DropdownField-kkZO0YX5.js";import"./isEqual-DrxdPr0P.js";import"./withOsdkMetrics-CfzcCH1M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
