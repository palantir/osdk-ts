import{j as r}from"./iframe-MqLOwkyt.js";import{O as b}from"./object-table-BHkETUN5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-5bk0jNoR.js";import{u as g}from"./useOsdkClient-DyeTERCd.js";import"./preload-helper-BI4FsuTE.js";import"./Table-DqqKcIb5.js";import"./index-CYsLXWAq.js";import"./Dialog-_xEsZnGL.js";import"./cross-CrEHvwXy.js";import"./svgIconContainer-CpAJhJ6x.js";import"./useBaseUiId-xxBCoKYK.js";import"./InternalBackdrop-wUQuVyKv.js";import"./composite-NEozLeoL.js";import"./index-B53EBtE1.js";import"./index-DYFGinsg.js";import"./index-C3pKlSiY.js";import"./useEventCallback-Cw57MZdH.js";import"./SkeletonBar-BnG9_9qz.js";import"./LoadingCell-D1NCsd33.js";import"./ColumnConfigDialog-D2wyI7o0.js";import"./DraggableList-CWMagUrS.js";import"./search-CxS15Af3.js";import"./Input-CquXhMGI.js";import"./useControlled-DHUJWjTK.js";import"./Button-CBsI2feD.js";import"./small-cross-CvOnK5fR.js";import"./ActionButton-_HVLo196.js";import"./Checkbox-CCqzArHE.js";import"./useValueChanged-e8AMyRv1.js";import"./CollapsiblePanel-C5mk5Aup.js";import"./MultiColumnSortDialog-XR2vQqAi.js";import"./MenuTrigger-Dw8fe9Ph.js";import"./CompositeItem-cvG07j6P.js";import"./ToolbarRootContext-YqisKJxJ.js";import"./getDisabledMountTransitionStyles-B3gQ57ui.js";import"./getPseudoElementBounds-BRF46eiy.js";import"./chevron-down-CCwfXTdl.js";import"./index-D1QWFyFj.js";import"./error-CN-8K1J8.js";import"./BaseCbacBanner-BMffm3ay.js";import"./makeExternalStore-DNVCbBN4.js";import"./Tooltip-CMpFEXG9.js";import"./PopoverPopup-ixK-S_Jv.js";import"./debounce-DCOl06T4.js";import"./tick-3f1cvuZk.js";import"./DropdownField-BVO8q73p.js";import"./isEqual-ZdngOk8z.js";import"./withOsdkMetrics-D3nMdfcR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
