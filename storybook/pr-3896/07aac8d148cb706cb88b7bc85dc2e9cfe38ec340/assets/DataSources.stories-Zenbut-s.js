import{j as r}from"./iframe-CgO27IRu.js";import{O as b}from"./object-table-DXNAiDf6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CXHHHqsg.js";import{u as g}from"./useOsdkClient-B_-tZKM9.js";import"./preload-helper-BFaeybdJ.js";import"./Table-BIALEz5r.js";import"./index-BYcjpIix.js";import"./Dialog-CkwYR2xh.js";import"./cross-7f4N_TUE.js";import"./svgIconContainer-DhCCLzjj.js";import"./useBaseUiId-BO2BnfXi.js";import"./InternalBackdrop-Cz0WVhEG.js";import"./composite-p801Jdqa.js";import"./index-D2mMtCtu.js";import"./index-BUqQhE-Z.js";import"./index-mNj5KG8f.js";import"./useEventCallback-DFjx1zjN.js";import"./SkeletonBar-BX4lka8z.js";import"./LoadingCell-D3D5c3XV.js";import"./ColumnConfigDialog-1UCfeJwM.js";import"./DraggableList-WrqVXuVf.js";import"./search-BsJeG7XA.js";import"./Input-Dj3Aq0gE.js";import"./useControlled-DQw2ttEs.js";import"./Button-IqR8HyTq.js";import"./small-cross-CPs8amt9.js";import"./ActionButton-DOTNR6TX.js";import"./Checkbox-BbzMjnfd.js";import"./useValueChanged-BE8D05Iz.js";import"./CollapsiblePanel-PEWKdp4D.js";import"./MultiColumnSortDialog-CjR7xFOj.js";import"./MenuTrigger-SbjN_ntN.js";import"./CompositeItem-DM5Ux4XM.js";import"./ToolbarRootContext-Dk5396e8.js";import"./getDisabledMountTransitionStyles-DXJXIwd_.js";import"./getPseudoElementBounds-DowlDy4M.js";import"./chevron-down-BHGyaEjN.js";import"./index-D4Z8a6hC.js";import"./error-CvjVBbuk.js";import"./BaseCbacBanner-BAMy2tjK.js";import"./makeExternalStore-BWlpa4eR.js";import"./Tooltip-BUDoMBLR.js";import"./PopoverPopup-DwKTUNJI.js";import"./debounce-CKeaQRTn.js";import"./tick-BaoeG2cB.js";import"./DropdownField-Doi6icK-.js";import"./isEqual-BZS2mAgW.js";import"./withOsdkMetrics-DT_01Uro.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
