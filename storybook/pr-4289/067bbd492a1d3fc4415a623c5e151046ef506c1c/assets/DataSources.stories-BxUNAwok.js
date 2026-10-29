import{j as r}from"./iframe-BxJiroe5.js";import{O as b}from"./object-table-w9yz1IDQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BWZTBvdQ.js";import{u as g}from"./useOsdkClient-DDpZHt2c.js";import"./preload-helper-DLdhLncI.js";import"./Table-CrHDgyUk.js";import"./index-D3_UFpM5.js";import"./Dialog-Bl6vHuaN.js";import"./cross-Bw3wvyRT.js";import"./svgIconContainer-C-ufoPHL.js";import"./useBaseUiId-CsOPh1qV.js";import"./InternalBackdrop-AN7PHPbY.js";import"./composite-BKj-HEYH.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./index-C_1QgYte.js";import"./useEventCallback-D4kZLjoj.js";import"./SkeletonBar-CGOwo2DD.js";import"./LoadingCell-CvdNH18k.js";import"./ColumnConfigDialog-DOlJ8-4o.js";import"./DraggableList-CD2xfPmV.js";import"./search-JlbJ_F58.js";import"./Input-DEdpGx6f.js";import"./useControlled-DfqnBr2w.js";import"./Button-Bo57TzJg.js";import"./small-cross-CYWa9OHl.js";import"./ActionButton-DQczrpII.js";import"./Checkbox-CePSClb6.js";import"./useValueChanged-Cp5QQiYs.js";import"./CollapsiblePanel-7oLCwys7.js";import"./MultiColumnSortDialog-Cirx4nz-.js";import"./MenuTrigger-VFGNWgnV.js";import"./CompositeItem-BT8yR1a5.js";import"./ToolbarRootContext--suhwR1X.js";import"./getDisabledMountTransitionStyles-DsPFGkAu.js";import"./getPseudoElementBounds-xDGWCFZp.js";import"./chevron-down-DjbhW8-h.js";import"./index-hrPqGcKI.js";import"./error-CmKYwFXp.js";import"./BaseCbacBanner-B2hkiRDH.js";import"./makeExternalStore-CSiVCh7w.js";import"./Tooltip-DMWyzbQ6.js";import"./PopoverPopup-BhS3yPpf.js";import"./debounce-ZBq--l-M.js";import"./tick-D-qLi4Dk.js";import"./DropdownField-DIb0z1YE.js";import"./isEqual-B9PqxiUA.js";import"./withOsdkMetrics-BDE5PqUj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
