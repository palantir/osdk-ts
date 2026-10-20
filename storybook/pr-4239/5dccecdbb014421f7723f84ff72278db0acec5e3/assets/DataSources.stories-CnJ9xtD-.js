import{j as r}from"./iframe-DTW0zbJg.js";import{O as b}from"./object-table-BEpCdqlB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bd0Ur1IU.js";import{u as g}from"./useOsdkClient-BE_aYXwA.js";import"./preload-helper-CHqtrcoH.js";import"./Table-CAZxm3nQ.js";import"./index-C19Cbd9w.js";import"./Dialog-DkpQneLX.js";import"./cross-DUPbOXnx.js";import"./svgIconContainer-C_NUwc74.js";import"./useBaseUiId-pXEfVnMq.js";import"./InternalBackdrop-4VqQwQv1.js";import"./composite-Ch_TQxW6.js";import"./index-Dd12A0b5.js";import"./index-BNxdJsoF.js";import"./index-5qBmfdlD.js";import"./useEventCallback-cQNzf77G.js";import"./SkeletonBar-CDOQsslB.js";import"./LoadingCell-BR7Clm_q.js";import"./ColumnConfigDialog-BFrZlNI3.js";import"./DraggableList-BsjIts7t.js";import"./search-DeSIHMGj.js";import"./Input-9Y-Iasoe.js";import"./useControlled-B9BNpkGu.js";import"./Button-Bl_fb9NZ.js";import"./small-cross-Bf21DHmz.js";import"./ActionButton-BmVlmB5r.js";import"./Checkbox-DJWeAXt-.js";import"./useValueChanged-Cbl0UOUH.js";import"./CollapsiblePanel-Cd-HUXxd.js";import"./MultiColumnSortDialog-CrE6Md6y.js";import"./MenuTrigger-DFscXaTL.js";import"./CompositeItem-B8f4EvZj.js";import"./ToolbarRootContext-D1Ryhi91.js";import"./getDisabledMountTransitionStyles-BbG3pxx_.js";import"./getPseudoElementBounds-9ob2YQd8.js";import"./chevron-down-B_r9FktR.js";import"./index-DwQpT-YG.js";import"./error-DehDfWea.js";import"./BaseCbacBanner-CSmyF8Eg.js";import"./makeExternalStore-Cd_b6BPY.js";import"./Tooltip-zKVmMRSO.js";import"./PopoverPopup-BhSRrebE.js";import"./debounce-AmCXqNPb.js";import"./tick-CoEPOCTW.js";import"./DropdownField-BUpFr6O7.js";import"./isEqual-BwJgMRCR.js";import"./withOsdkMetrics-BhopaHNu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
