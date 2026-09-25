import{j as r}from"./iframe-DUMXb5nI.js";import{O as b}from"./object-table-BDaQbe3w.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClSP_mm2.js";import{u as g}from"./useOsdkClient-Ce1WdpbO.js";import"./preload-helper-BJwXp4Q-.js";import"./Table-DKTu2e5B.js";import"./index-BbwFJ-ta.js";import"./Dialog-dT22cMHq.js";import"./cross-D_uZDyQx.js";import"./svgIconContainer-sVTzBKmW.js";import"./useBaseUiId-_e14ZC1l.js";import"./InternalBackdrop-CJNWsu2d.js";import"./composite-D-SRMe6j.js";import"./index-CNSnRqug.js";import"./index-DYmqgljQ.js";import"./index-7zI_gih7.js";import"./useEventCallback-ChqFaUAL.js";import"./SkeletonBar-CSPA62mF.js";import"./LoadingCell-D2OEMclx.js";import"./ColumnConfigDialog-DzXCaLxv.js";import"./DraggableList-BWkG-iJ_.js";import"./search-TGSQVeh_.js";import"./Input-DiFVGF-l.js";import"./useControlled-BDe8NiPs.js";import"./Button-BgjvY2h6.js";import"./small-cross-DAi9ABlY.js";import"./ActionButton-DBuZkuqt.js";import"./Checkbox-CpSDYiLA.js";import"./useValueChanged-B3sHWLjz.js";import"./CollapsiblePanel-BGXgYcLe.js";import"./MultiColumnSortDialog-BMg6PxrU.js";import"./MenuTrigger-Dm8pjmIz.js";import"./CompositeItem-HBdNGEyu.js";import"./ToolbarRootContext-LKaZxJnb.js";import"./getDisabledMountTransitionStyles-C0sSy9Tx.js";import"./getPseudoElementBounds-C-fSL_7l.js";import"./chevron-down-C-ZMpNeB.js";import"./index-CwUqs_yy.js";import"./error-Cm3UeO8R.js";import"./BaseCbacBanner-CKZAQPTu.js";import"./makeExternalStore-BwFxLGns.js";import"./Tooltip-PrnQ8hCt.js";import"./PopoverPopup-DQegoE5S.js";import"./debounce-Ct13Tnzu.js";import"./tick-CJMPUx9Y.js";import"./DropdownField-B_P7JzgN.js";import"./isEqual-25Tdwmwq.js";import"./withOsdkMetrics-pgg1h4tV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
