import{j as r}from"./iframe-CWg4NKfU.js";import{O as b}from"./object-table-CUaJVOeo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCgOI7bL.js";import{u as g}from"./useOsdkClient-DkhSPEoO.js";import"./preload-helper-CbUGxpFK.js";import"./Table-DGz9J2_I.js";import"./index-BqvDfMBr.js";import"./Dialog-C5eQeW5b.js";import"./cross-C4B5H0O1.js";import"./svgIconContainer-CfhV0gWc.js";import"./useBaseUiId-DspZ6BgH.js";import"./InternalBackdrop-DmUAlLlN.js";import"./composite-BZR9RT0J.js";import"./index-BwmCKmIG.js";import"./index-Dcq7c99I.js";import"./index-Du_LEjCQ.js";import"./useEventCallback-DypMXnSj.js";import"./SkeletonBar-CQQLBMCI.js";import"./LoadingCell-C225-QxH.js";import"./ColumnConfigDialog-DSdc2ZQ0.js";import"./DraggableList-B4wpIJV9.js";import"./search-Csa8UJRl.js";import"./Input-CkLJO43y.js";import"./useControlled-CxeE38RI.js";import"./Button-BMAG39_Z.js";import"./small-cross-BOD3G0f7.js";import"./ActionButton-B764oDl2.js";import"./Checkbox-DHMyW384.js";import"./useValueChanged-BTUZT3Bs.js";import"./CollapsiblePanel-BTrc7yy9.js";import"./MultiColumnSortDialog-Dx3bgxMC.js";import"./MenuTrigger-CxYsElt9.js";import"./CompositeItem-B-7NNP1P.js";import"./ToolbarRootContext-DB3lOv4Z.js";import"./getDisabledMountTransitionStyles-CEpea57p.js";import"./getPseudoElementBounds-gNG5aSRj.js";import"./chevron-down-GiI9wTRT.js";import"./index-BRlDD1gT.js";import"./error-DpR2m3gK.js";import"./BaseCbacBanner-Bqfi7D06.js";import"./makeExternalStore-PjLZ2rt4.js";import"./Tooltip-Dc8Bmckm.js";import"./PopoverPopup-DhNWwJ6-.js";import"./debounce-gYlsUq6V.js";import"./tick-CXe62fkm.js";import"./DropdownField-D5fuGTjd.js";import"./isEqual-Baxfuxdj.js";import"./withOsdkMetrics-Cl-t5p_W.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
