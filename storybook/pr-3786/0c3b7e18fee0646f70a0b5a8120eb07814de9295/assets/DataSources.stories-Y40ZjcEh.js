import{j as r}from"./iframe-BfP11NvA.js";import{O as b}from"./object-table-CjugmRYR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BAw4Road.js";import{u as g}from"./useOsdkClient-Uu_9Pssb.js";import"./preload-helper-Ar0nMGVE.js";import"./Table-Bi1LYgVR.js";import"./index-BtDjnjzp.js";import"./Dialog-DonJtVW6.js";import"./cross-COrWa_24.js";import"./svgIconContainer-CxA6KOQ9.js";import"./useBaseUiId-B7gorTvD.js";import"./InternalBackdrop-BznIiDAT.js";import"./composite-_14HkfA4.js";import"./index-Yx7vvy63.js";import"./index-BimT9-xO.js";import"./index-DJx2-acM.js";import"./useEventCallback-Bo3zAIbr.js";import"./SkeletonBar-CrHwtUgt.js";import"./LoadingCell-CRN4ygui.js";import"./ColumnConfigDialog-BP_I0gCY.js";import"./DraggableList-CMWiB7CB.js";import"./search-NB8ZSPAF.js";import"./Input-RCL9WojW.js";import"./useControlled-CHjSEWNF.js";import"./isEqual-CCeuNt0t.js";import"./isObject-DIwwZTdB.js";import"./Button-C9Ik4Jdr.js";import"./ActionButton-BY8jrqFK.js";import"./Checkbox-2-ftotcm.js";import"./useValueChanged-DbFPx7-x.js";import"./CollapsiblePanel-DznffW2m.js";import"./MultiColumnSortDialog-BBf8tKOg.js";import"./MenuTrigger-DHt7BKIE.js";import"./CompositeItem-D36geE3c.js";import"./ToolbarRootContext-DH5dsK8B.js";import"./getDisabledMountTransitionStyles-Ozz7nPdo.js";import"./getPseudoElementBounds-CrpflqmA.js";import"./chevron-down-DZOqnKTY.js";import"./index-x1DBPJSn.js";import"./error-CCCFoFwU.js";import"./BaseCbacBanner-2OfszpKN.js";import"./makeExternalStore-D_R0EHxO.js";import"./Tooltip-BS7vvywK.js";import"./PopoverPopup-DO9cZa8-.js";import"./toNumber-D9oDVyIB.js";import"./tick-D1Eh9Wqu.js";import"./DropdownField-9gIH2QfH.js";import"./withOsdkMetrics-kOUFMrtB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
