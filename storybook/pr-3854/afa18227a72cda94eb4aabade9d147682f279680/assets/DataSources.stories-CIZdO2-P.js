import{j as r}from"./iframe-mgqf8OZi.js";import{O as b}from"./object-table-SJgzEJz4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cXgSduKI.js";import{u as g}from"./useOsdkClient-CIHn_x5t.js";import"./preload-helper-C6SQT8UT.js";import"./Table-g7yaJ1L-.js";import"./index-GTfiZUIM.js";import"./Dialog-Dsam8t3K.js";import"./cross-B_dcVm8T.js";import"./svgIconContainer-BQB9e_Z9.js";import"./useBaseUiId-rjNzDssU.js";import"./InternalBackdrop-DVxp9s1p.js";import"./composite-BsXSlU2S.js";import"./index-CgMXMemF.js";import"./index-DsvT80A6.js";import"./index-DJS_p_MX.js";import"./useEventCallback-xpfDomYZ.js";import"./SkeletonBar-CpPJCyI4.js";import"./LoadingCell-Bxhy2pMB.js";import"./ColumnConfigDialog-cORxpJRm.js";import"./DraggableList-DgeGxPXD.js";import"./search-fgyV2px-.js";import"./Input-Cm9G-_vw.js";import"./useControlled-DnmOZ-e1.js";import"./Button-CvdgIKvp.js";import"./small-cross-BNDbkZTe.js";import"./ActionButton-D1kCGHo0.js";import"./Checkbox-COC_tl74.js";import"./useValueChanged-BEUlp8B0.js";import"./CollapsiblePanel-rkq5PuPE.js";import"./MultiColumnSortDialog-6X1v5wAF.js";import"./MenuTrigger-0TxP9vJm.js";import"./CompositeItem-B5XhVs9k.js";import"./ToolbarRootContext-DXjHGJkz.js";import"./getDisabledMountTransitionStyles-CzJH416S.js";import"./getPseudoElementBounds-B5c6Myvw.js";import"./chevron-down-CvP42XCE.js";import"./index-CWWnTRcQ.js";import"./error-5K0NVF3b.js";import"./BaseCbacBanner-BlF52LTx.js";import"./makeExternalStore-BoIB8VtI.js";import"./Tooltip-CD6Ogyv5.js";import"./PopoverPopup-IFfb3EAK.js";import"./debounce-Cs3_KK6g.js";import"./tick-12a-8qSb.js";import"./DropdownField-BDV4nY7z.js";import"./isEqual-C3RpNQ5t.js";import"./withOsdkMetrics-CrZy2PZ2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
