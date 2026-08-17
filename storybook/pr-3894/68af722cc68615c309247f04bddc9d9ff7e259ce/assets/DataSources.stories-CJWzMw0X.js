import{j as r}from"./iframe-_RccL5V-.js";import{O as b}from"./object-table-BWqXJxpP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DVkLYxD_.js";import{u as g}from"./useOsdkClient-C97lxKNX.js";import"./preload-helper-DD9OvIIK.js";import"./Table-DcC_Vlhh.js";import"./index-C6hccgOF.js";import"./Dialog-CFjdXxkD.js";import"./cross-CaF5yBdq.js";import"./svgIconContainer-Dkm7spTV.js";import"./useBaseUiId-DKx-HA2j.js";import"./InternalBackdrop-PGcyz6vF.js";import"./composite-DmZi_mQu.js";import"./index-C5klxPP6.js";import"./index-Cv-DuiVI.js";import"./index-DmEwvMYZ.js";import"./useEventCallback-BW47naCQ.js";import"./SkeletonBar-CujJHfJK.js";import"./LoadingCell-DyeBLpNq.js";import"./ColumnConfigDialog-Dx07fLmk.js";import"./DraggableList-a2VW3a69.js";import"./search-90zJh5kA.js";import"./Input-BrtWACOD.js";import"./useControlled-CcGBD7ay.js";import"./Button-CqbbN-n3.js";import"./small-cross-DkD11Lot.js";import"./ActionButton-BVQXVcb-.js";import"./Checkbox-DOqMBlHX.js";import"./useValueChanged-Dx-1nAgT.js";import"./CollapsiblePanel-DomQ1PEE.js";import"./MultiColumnSortDialog-XWI71dtA.js";import"./MenuTrigger-jxLgamJf.js";import"./CompositeItem-CyjZ1orr.js";import"./ToolbarRootContext-DPDAzzNp.js";import"./getDisabledMountTransitionStyles-B0EJhWbh.js";import"./getPseudoElementBounds-BxUCOJz2.js";import"./chevron-down-D0EZBNiO.js";import"./index-Bb5kSeb4.js";import"./error-DOBNWCIr.js";import"./BaseCbacBanner-gaJGghq7.js";import"./makeExternalStore-CPjz00Mq.js";import"./Tooltip-C8b9102L.js";import"./PopoverPopup-B0BKlT_Z.js";import"./debounce-DF3CmTOM.js";import"./tick-Bv56pu8Q.js";import"./DropdownField-CgP9cILT.js";import"./isEqual-C8R8n9Yv.js";import"./withOsdkMetrics-CTkC1llm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
