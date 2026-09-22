import{j as r}from"./iframe-DIhVLHWR.js";import{O as b}from"./object-table-Piy1vJFo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Wjjn1vnK.js";import{u as g}from"./useOsdkClient-ClSS8h4g.js";import"./preload-helper-DLYQvN5u.js";import"./Table-zCJrk9ZQ.js";import"./index-yKNrR2B4.js";import"./Dialog-V_m9DHPA.js";import"./cross-B1cvRkvv.js";import"./svgIconContainer-D0TTrVxE.js";import"./useBaseUiId-CNPP6ho2.js";import"./InternalBackdrop-lEVTZFj9.js";import"./composite-tiXb7rK6.js";import"./index-C5TdACSr.js";import"./index-CHn3e9nX.js";import"./index-CFb_KvGD.js";import"./useEventCallback-CFvkhzPc.js";import"./SkeletonBar-Bp3S-nOd.js";import"./LoadingCell-QagvA0gR.js";import"./ColumnConfigDialog-Cu5LvsFr.js";import"./DraggableList-VpWo4eap.js";import"./search-Cy5B3T22.js";import"./Input-BMTQDxuL.js";import"./useControlled-BGD6VLnv.js";import"./Button-vhJFIUHZ.js";import"./small-cross-C-n_IULq.js";import"./ActionButton-D4GpRNPK.js";import"./Checkbox-9qKXQZJs.js";import"./useValueChanged-BEZkKn0s.js";import"./CollapsiblePanel-hd58x1Xj.js";import"./MultiColumnSortDialog-HRXWxEOk.js";import"./MenuTrigger-imVGxdxT.js";import"./CompositeItem-oXJFfhwO.js";import"./ToolbarRootContext-DPTQ5YE4.js";import"./getDisabledMountTransitionStyles-BhOQM4-k.js";import"./getPseudoElementBounds-BvEiaKTW.js";import"./chevron-down-Cs6sjnv7.js";import"./index-CbR9L2SG.js";import"./error-BbBgUwm_.js";import"./BaseCbacBanner-gcBA-v35.js";import"./makeExternalStore-JpSfp1kg.js";import"./Tooltip-BrGNKtK_.js";import"./PopoverPopup-ZRsy0L-w.js";import"./debounce-BVO9QG61.js";import"./tick-BYc1w6Qb.js";import"./DropdownField-Cs1bE49h.js";import"./isEqual-DzjmoF6P.js";import"./withOsdkMetrics-Cal4vLIC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
