import{j as r}from"./iframe-Bp6ykM_Q.js";import{O as b}from"./object-table-BCe6X2NZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfWGzt8u.js";import{u as g}from"./useOsdkClient-BXI0wDfp.js";import"./preload-helper-hhg-UuLO.js";import"./Table-cs7ZNKYh.js";import"./index-CkmqH5v_.js";import"./Dialog-B-jf4vpJ.js";import"./cross-C2XcpcwW.js";import"./svgIconContainer-Bbfw_TbJ.js";import"./useBaseUiId-B9JaL3lL.js";import"./InternalBackdrop-CUeGJ88S.js";import"./composite-CELT5bVY.js";import"./index-D7B9vPdC.js";import"./index-DPOB5ZLL.js";import"./index-6iOBoNLd.js";import"./useEventCallback-ZDpPV_9c.js";import"./SkeletonBar-CD8Roa0c.js";import"./LoadingCell-BcgU58AU.js";import"./ColumnConfigDialog-BlycZ3ES.js";import"./DraggableList-DVYLEZGt.js";import"./search-oCnrD3HI.js";import"./Input-8kWtUrGW.js";import"./useControlled-DfSSocWG.js";import"./Button-CqF-mJTx.js";import"./small-cross-DKRvvaJW.js";import"./ActionButton-CG_FRqzp.js";import"./Checkbox-aUL_Dhbs.js";import"./useValueChanged-BRLBb_6E.js";import"./CollapsiblePanel-DcU2Xohc.js";import"./MultiColumnSortDialog-BYOxy7Ur.js";import"./MenuTrigger-DaCREkC8.js";import"./CompositeItem-DEa3hl5L.js";import"./ToolbarRootContext-DvDyj9lB.js";import"./getDisabledMountTransitionStyles-BlFqDN7h.js";import"./getPseudoElementBounds-DT01MB08.js";import"./chevron-down-DzC25JPe.js";import"./index-KVwHojvU.js";import"./error-pcj4mGvq.js";import"./BaseCbacBanner-Ccn2hkyq.js";import"./makeExternalStore-D6cQ2Vrj.js";import"./Tooltip-CPA2WKzn.js";import"./PopoverPopup-DgjT7gOt.js";import"./debounce-DeyxfuXX.js";import"./tick-CwYSeXXI.js";import"./DropdownField-CHmFTRiZ.js";import"./isEqual-_49y5ZAW.js";import"./withOsdkMetrics-BuzXmon2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
