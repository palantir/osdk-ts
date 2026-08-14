import{j as r}from"./iframe-DPKjJbUl.js";import{O as b}from"./object-table-CiA2mgLE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-md54GR0_.js";import{u as g}from"./useOsdkClient-X3frRnwW.js";import"./preload-helper-jysXR-to.js";import"./Table-CkCIOkQc.js";import"./index-2SPkUawk.js";import"./Dialog-Bxoi34Wm.js";import"./cross-Bur9aTxF.js";import"./svgIconContainer-DcOBBk2S.js";import"./useBaseUiId-CpCoqI7r.js";import"./InternalBackdrop-CNupZRS_.js";import"./composite-4w9rumvd.js";import"./index-BJOf7s-T.js";import"./index-BHZ9rsvc.js";import"./index-BLTHUTFO.js";import"./useEventCallback-CfXNQR5R.js";import"./SkeletonBar-_y5I33tw.js";import"./LoadingCell-DcLgQ4Ug.js";import"./ColumnConfigDialog-BnUf7DkN.js";import"./DraggableList-UzQEUU7r.js";import"./search-CfvDmUdq.js";import"./Input-Cp0wF4SO.js";import"./useControlled-36BIvyhs.js";import"./Button-DhDj0z4t.js";import"./small-cross-jfjdmJHA.js";import"./ActionButton-CR2Evx-a.js";import"./Checkbox-C4uEDJZr.js";import"./useValueChanged-BPifwweb.js";import"./CollapsiblePanel-C7tnC6NS.js";import"./MultiColumnSortDialog-DGfaXG6u.js";import"./MenuTrigger-C-T3X_LR.js";import"./CompositeItem-C1vm5CBx.js";import"./ToolbarRootContext-BNVI8n48.js";import"./getDisabledMountTransitionStyles-BpxmMrDd.js";import"./getPseudoElementBounds-CH0myo6i.js";import"./chevron-down-CkO13R5T.js";import"./index-CazPboEE.js";import"./error-Cbkkosws.js";import"./BaseCbacBanner-D8PUVhgH.js";import"./makeExternalStore-BrJQqJjN.js";import"./Tooltip-Ct0waVPJ.js";import"./PopoverPopup-CqPpOpqV.js";import"./debounce-DSQ3zwts.js";import"./tick-BKzW071D.js";import"./DropdownField-BWhPjm6f.js";import"./isEqual-BcnxjguD.js";import"./withOsdkMetrics-V_4YWEt4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
