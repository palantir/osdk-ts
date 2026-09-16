import{j as r}from"./iframe-Ca2h9Cb_.js";import{O as b}from"./object-table-Dmtv9nc1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvOJ6Bky.js";import{u as g}from"./useOsdkClient-CVjLcUiq.js";import"./preload-helper-DAf9eX-V.js";import"./Table-DXXOr3kR.js";import"./index-DWThxo2f.js";import"./Dialog-uKOxAzum.js";import"./cross-kbTjrbem.js";import"./svgIconContainer-Bn-48Fxt.js";import"./useBaseUiId-BeaWeUqC.js";import"./InternalBackdrop-DFUqPzG4.js";import"./composite-BHDhYMvG.js";import"./index-khJGmqWk.js";import"./index-BQgpEwzp.js";import"./index-DH2EreSc.js";import"./useEventCallback-Cy_0PmmR.js";import"./SkeletonBar-BXjaSTgH.js";import"./LoadingCell-iOD7qSli.js";import"./ColumnConfigDialog-H_qZCN29.js";import"./DraggableList-CyBumZSQ.js";import"./search-CuSTqVc7.js";import"./Input-DJ7coF_2.js";import"./useControlled-DgBClk7b.js";import"./Button-DuNKOwnz.js";import"./small-cross-CNAC6Gdk.js";import"./ActionButton-DHMmr5VF.js";import"./Checkbox-CNMBYUqX.js";import"./useValueChanged-ChMbBnhn.js";import"./CollapsiblePanel-XpP7JVfq.js";import"./MultiColumnSortDialog-RYKHJLmS.js";import"./MenuTrigger-CM62vP5e.js";import"./CompositeItem-Bm7sSUUb.js";import"./ToolbarRootContext-Dw75y5NP.js";import"./getDisabledMountTransitionStyles-DBV7Mlk2.js";import"./getPseudoElementBounds-vkG9JlGu.js";import"./chevron-down-BbQxi628.js";import"./index-HOlceD77.js";import"./error-JTYK1w6o.js";import"./BaseCbacBanner-CZE4AAf3.js";import"./makeExternalStore-Toi8vQS6.js";import"./Tooltip-6EC7drX-.js";import"./PopoverPopup-Dbmji2sV.js";import"./debounce-D2v1avI_.js";import"./tick-Db6JqMoI.js";import"./DropdownField-X-AMgcUu.js";import"./isEqual-DQpKrOAs.js";import"./withOsdkMetrics-BAX4qEws.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
