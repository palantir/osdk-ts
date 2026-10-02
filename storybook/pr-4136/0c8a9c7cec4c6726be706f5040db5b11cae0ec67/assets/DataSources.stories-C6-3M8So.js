import{j as r}from"./iframe-CcC1m7dm.js";import{O as b}from"./object-table-z-o8Y4iJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Mobp_CdS.js";import{u as g}from"./useOsdkClient-DUcNDZWw.js";import"./preload-helper-DeCk53aw.js";import"./Table-XdRQ7Pf5.js";import"./index-0gvTVOTK.js";import"./Dialog-DPbZCooR.js";import"./cross-DV51ECIz.js";import"./svgIconContainer-yjiCwwqK.js";import"./useBaseUiId-CzCqcGop.js";import"./InternalBackdrop-9qsE-EbY.js";import"./composite-tUxKNezP.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./index-BxRkQYGY.js";import"./useEventCallback-Blu-LJRb.js";import"./SkeletonBar-DnFTb433.js";import"./LoadingCell-n5L8BfX4.js";import"./ColumnConfigDialog-CmQYy65e.js";import"./DraggableList-BWAET7wQ.js";import"./search-BXFqiFKZ.js";import"./Input-CPQRmcYd.js";import"./useControlled-SAzSAZAO.js";import"./Button-D0RNeWLg.js";import"./small-cross-DS174T3T.js";import"./ActionButton-BhdUY9pE.js";import"./Checkbox-C12Dz3AB.js";import"./useValueChanged-BstO879O.js";import"./CollapsiblePanel-vSa8PNib.js";import"./MultiColumnSortDialog-BoKeQuHw.js";import"./MenuTrigger-CxgA7hxA.js";import"./CompositeItem-BC1QTYXK.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./getDisabledMountTransitionStyles-1Tab1F_A.js";import"./getPseudoElementBounds-DJdribUH.js";import"./chevron-down-C2TUiN-F.js";import"./index-CNWy2Wzu.js";import"./error-hsPgizh-.js";import"./BaseCbacBanner-Cx9EGDV_.js";import"./makeExternalStore-cat_cA42.js";import"./Tooltip-B0OqTl9G.js";import"./PopoverPopup-C7-o66fe.js";import"./debounce-C2vAZ4aB.js";import"./tick-BhUO318A.js";import"./DropdownField-BHSw1oU1.js";import"./isEqual-vdF0S_a3.js";import"./withOsdkMetrics-Cqfc_v3H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
