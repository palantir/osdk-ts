import{j as r}from"./iframe-BK0RufGl.js";import{O as b}from"./object-table-t3beq0jM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B15k4T0g.js";import{u as g}from"./useOsdkClient-Bp4Do1pN.js";import"./preload-helper-B1x3XWjh.js";import"./Table-b9fWb8-J.js";import"./index-BC49ZXOf.js";import"./Dialog-CbB9yRpZ.js";import"./cross-fqPA6CW1.js";import"./svgIconContainer-BlFMB5mu.js";import"./useBaseUiId-frLuJhJZ.js";import"./InternalBackdrop-CCU68TOf.js";import"./composite-DlFm6szC.js";import"./index-zkQRtd-f.js";import"./index-DkQ29aQ-.js";import"./index-BGA0Seny.js";import"./useEventCallback-D-WAZtwW.js";import"./SkeletonBar-B3ZfYzgc.js";import"./LoadingCell-CHCWipwZ.js";import"./ColumnConfigDialog-COKkJ2pr.js";import"./DraggableList-CygnTHuy.js";import"./search-DuhXtbsI.js";import"./Input-BEeAXmcy.js";import"./useControlled-unttFX2J.js";import"./Button-DvmwcYmH.js";import"./small-cross-LgLYRP96.js";import"./ActionButton-balBVwMY.js";import"./Checkbox-DTs0zrQe.js";import"./useValueChanged-CepPqKH_.js";import"./CollapsiblePanel-LAagTPh8.js";import"./MultiColumnSortDialog-CC4yow6c.js";import"./MenuTrigger-ByOTJWGh.js";import"./CompositeItem-BbIk1WEG.js";import"./ToolbarRootContext-qtgBfN3j.js";import"./getDisabledMountTransitionStyles-B5ZQPzmi.js";import"./getPseudoElementBounds-CUox1hQw.js";import"./chevron-down-RflKAGzX.js";import"./index-CHiFjEhv.js";import"./error-0TFzhvIK.js";import"./BaseCbacBanner-BLULDpAD.js";import"./makeExternalStore-h_6mTVKe.js";import"./Tooltip-i56DZZjj.js";import"./PopoverPopup-Dmd4Fc1j.js";import"./debounce-Ay-ce3CA.js";import"./tick-H75vELII.js";import"./DropdownField-XRnSzaZr.js";import"./isEqual-xJAxAgWV.js";import"./withOsdkMetrics-CflMk9Ld.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
