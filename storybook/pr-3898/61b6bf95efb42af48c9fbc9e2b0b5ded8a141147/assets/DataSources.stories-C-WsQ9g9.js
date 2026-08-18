import{j as r}from"./iframe-YbZJ4Q2T.js";import{O as b}from"./object-table-BW3KB80g.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bk2lOR8K.js";import{u as g}from"./useOsdkClient-BJz82Q8V.js";import"./preload-helper-nrcicwIZ.js";import"./Table-D2BU-uGD.js";import"./index-BbeJO0tu.js";import"./Dialog-BMPFF_lX.js";import"./cross-Chqx1Vmd.js";import"./svgIconContainer-CvzqHx8a.js";import"./useBaseUiId-DTGQIw9V.js";import"./InternalBackdrop-UwFwjs-I.js";import"./composite-D3JFLD7k.js";import"./index-CjgLq_Ze.js";import"./index-BArD5hnh.js";import"./index-DaB6Rdj2.js";import"./useEventCallback-Cu0cHPi1.js";import"./SkeletonBar-DIcbo8Ai.js";import"./LoadingCell-qy913ZRO.js";import"./ColumnConfigDialog-DrnL98R1.js";import"./DraggableList-DPV2iFvD.js";import"./search-c-d9DWXs.js";import"./Input-DuCwdPfX.js";import"./useControlled-DLIRtZT-.js";import"./Button-Drmtw-7h.js";import"./small-cross-BaOf2IHH.js";import"./ActionButton-D4JZZuM3.js";import"./Checkbox-BEvItd_I.js";import"./useValueChanged-BXsv3vOm.js";import"./CollapsiblePanel-CB2lFGLk.js";import"./MultiColumnSortDialog-JI3aZi8H.js";import"./MenuTrigger-DnswiPxP.js";import"./CompositeItem-DJS21xnC.js";import"./ToolbarRootContext-hKDDy8Tn.js";import"./getDisabledMountTransitionStyles-BtCYo8Vw.js";import"./getPseudoElementBounds-Jh0Tlk_E.js";import"./chevron-down-DV-3X39-.js";import"./index-Dj7Gzmji.js";import"./error-BpN2G5nD.js";import"./BaseCbacBanner-gQ71dViq.js";import"./makeExternalStore-D3Nkh70z.js";import"./Tooltip-Bxo3fb0L.js";import"./PopoverPopup-C8jr-6dr.js";import"./debounce-qGwGM8IN.js";import"./tick-yYczsGE5.js";import"./DropdownField-DjUqQXA4.js";import"./isEqual-B7FXvL0y.js";import"./withOsdkMetrics-DAKfNXNY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
