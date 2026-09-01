import{j as r}from"./iframe-DkOKI-zj.js";import{O as b}from"./object-table-Di8DTL1R.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-_DfnU4LD.js";import{u as g}from"./useOsdkClient-B8P8_Y82.js";import"./preload-helper-BedFcYWj.js";import"./Table-DQhPss-2.js";import"./index-D48E-jGx.js";import"./Dialog-T66-hdi9.js";import"./cross-BAQJRB0k.js";import"./svgIconContainer-DdqlG__h.js";import"./useBaseUiId-hIsI1Ivz.js";import"./InternalBackdrop-PNkMbD5Q.js";import"./composite-D6LFofvV.js";import"./index-Cul3U-EW.js";import"./index-BzBoChRE.js";import"./index-l61FzHwI.js";import"./useEventCallback-Df5LXRIF.js";import"./SkeletonBar-Pcg0vYVl.js";import"./LoadingCell-ThFH2l6e.js";import"./ColumnConfigDialog-CBr_DJW6.js";import"./DraggableList-DR8UDqzR.js";import"./search-C0Wwv3jH.js";import"./Input-CkTh5rVe.js";import"./useControlled-B-VxAfVU.js";import"./Button-BECGNN6S.js";import"./small-cross-K0beemaL.js";import"./ActionButton-DpOgAirr.js";import"./Checkbox-DbkOBHsF.js";import"./useValueChanged-DVDHy3eE.js";import"./CollapsiblePanel-Bx0mz0GR.js";import"./MultiColumnSortDialog-DCHCGVHa.js";import"./MenuTrigger-CeucYaYG.js";import"./CompositeItem-B4iJlHXi.js";import"./ToolbarRootContext-CK3JrOY-.js";import"./getDisabledMountTransitionStyles-CXRfGTML.js";import"./getPseudoElementBounds-D8_q1n_o.js";import"./chevron-down-CL9C1vsy.js";import"./index-i7VgI47A.js";import"./error-CK17bhMI.js";import"./BaseCbacBanner-ByZyDHoK.js";import"./makeExternalStore-AOqR8Y_j.js";import"./Tooltip-COXqoDJj.js";import"./PopoverPopup-rIEBcJLw.js";import"./debounce-BAkRCUwV.js";import"./tick-B4YOxSUu.js";import"./DropdownField-C2YB8IHz.js";import"./isEqual-C3EiRbqw.js";import"./withOsdkMetrics-CQ-W79bx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
