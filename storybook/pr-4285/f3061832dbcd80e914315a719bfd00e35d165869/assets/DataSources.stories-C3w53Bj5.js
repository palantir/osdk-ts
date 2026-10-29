import{j as r}from"./iframe-97p3M09u.js";import{O as b}from"./object-table-D01AYNwF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-qsr3hS9e.js";import{u as g}from"./useOsdkClient-Db8XiLDB.js";import"./preload-helper-CxVBxFAW.js";import"./Table-_uA8jK5o.js";import"./index-DVPCIdd3.js";import"./Dialog-beHxH1X-.js";import"./cross-CaR0F6Vj.js";import"./svgIconContainer-BmP4bwRX.js";import"./useBaseUiId-DuQvLNdl.js";import"./InternalBackdrop-DgKNXgWX.js";import"./composite-B7fVO-VQ.js";import"./index-mZLyQtJX.js";import"./index-DxXJGm8P.js";import"./index-WmjPk0xi.js";import"./useEventCallback-DsROmeik.js";import"./SkeletonBar-scZGsopT.js";import"./LoadingCell-BNaB6DR_.js";import"./ColumnConfigDialog-YnquIy3P.js";import"./DraggableList-BrDMHZmf.js";import"./search-C9oUUQa_.js";import"./Input-CM6A8_jN.js";import"./useControlled-BVQhU86y.js";import"./Button-D31kv467.js";import"./small-cross-D6oSifG2.js";import"./ActionButton-Cp3aDaBn.js";import"./Checkbox-Uu7inM8S.js";import"./useValueChanged-DmJ879ms.js";import"./CollapsiblePanel-DfVnlVp0.js";import"./MultiColumnSortDialog-DVSTR6wV.js";import"./MenuTrigger-DSwrR03C.js";import"./CompositeItem-goXUaz1O.js";import"./ToolbarRootContext-BkrLDfAz.js";import"./getDisabledMountTransitionStyles-D7gTNN3D.js";import"./getPseudoElementBounds-C3vtCcOF.js";import"./chevron-down-BW9trwrB.js";import"./index-CpQuftWe.js";import"./error-DutCoEmF.js";import"./BaseCbacBanner-2J4T5KAr.js";import"./makeExternalStore-hGx-yTqS.js";import"./Tooltip-DCQRgWv6.js";import"./PopoverPopup-Cv-T7MGp.js";import"./debounce-byeXsieX.js";import"./tick-CtNHx9U0.js";import"./DropdownField-CLkxqAQ8.js";import"./isEqual-COZEKq5T.js";import"./withOsdkMetrics-vNphc_NN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
