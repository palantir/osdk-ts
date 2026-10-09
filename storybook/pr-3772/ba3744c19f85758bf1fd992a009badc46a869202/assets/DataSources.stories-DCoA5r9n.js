import{j as r}from"./iframe-DkUlyVAk.js";import{O as b}from"./object-table-wcCDtGcD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CNTewfKg.js";import{u as g}from"./useOsdkClient-DcaeD6xA.js";import"./preload-helper-Do3rx7tx.js";import"./Table-BuAXuDdk.js";import"./index-BKCxouDT.js";import"./Dialog-t8PP7gAK.js";import"./cross-NxNK5LVM.js";import"./svgIconContainer-DXdte7hC.js";import"./useBaseUiId-Ct2lb7hy.js";import"./InternalBackdrop-JtvBqmbW.js";import"./composite-DFkzp6xD.js";import"./index-C2qK1saS.js";import"./index-D2D5ykmi.js";import"./index-BHWhvKcH.js";import"./useEventCallback-Bfg-1dtD.js";import"./SkeletonBar-DrTF8jwx.js";import"./LoadingCell-CzBDsbnw.js";import"./ColumnConfigDialog-DzLhLwGL.js";import"./DraggableList-Zj2AdCb7.js";import"./search-BtZqzqFW.js";import"./Input-DEfnyfO2.js";import"./useControlled-DQwmvUO6.js";import"./Button-YTCf-lQa.js";import"./small-cross-CBmGUiw6.js";import"./ActionButton-CGCXefcq.js";import"./Checkbox-D-KL8GQC.js";import"./useValueChanged-Bwz98CW8.js";import"./CollapsiblePanel-CWIE3b7e.js";import"./MultiColumnSortDialog-CelZgdCc.js";import"./MenuTrigger-D-7KzGK2.js";import"./CompositeItem-C6x4Plfg.js";import"./ToolbarRootContext-H2xpDF0U.js";import"./getDisabledMountTransitionStyles-D2mnHFL5.js";import"./getPseudoElementBounds-DgjJtdNO.js";import"./chevron-down-C8H-X29U.js";import"./index-2N4Mch0O.js";import"./error-Cxkq3yoq.js";import"./BaseCbacBanner-CvVoV4NY.js";import"./makeExternalStore-CrMBheh9.js";import"./Tooltip-BZdoNmX1.js";import"./PopoverPopup-CjNS0jhO.js";import"./debounce-BrUJ1qZS.js";import"./tick-xV8dN8GT.js";import"./DropdownField-Bqc5sgH5.js";import"./isEqual-uuZQYH9j.js";import"./withOsdkMetrics-_-mYkqh_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
