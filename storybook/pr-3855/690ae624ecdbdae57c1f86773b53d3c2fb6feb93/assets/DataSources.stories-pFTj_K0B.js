import{j as r}from"./iframe-DmtH0n9a.js";import{O as b}from"./object-table-DSG3kUhS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CASFtvOK.js";import{u as g}from"./useOsdkClient-zwEH2FqK.js";import"./preload-helper-BVTRjjKw.js";import"./Table-DHAnAkAC.js";import"./index-BdFb3QwW.js";import"./Dialog-CkpOo05g.js";import"./cross-BCEjrsY6.js";import"./svgIconContainer-Pw6aLkay.js";import"./useBaseUiId-BBuvUIea.js";import"./InternalBackdrop-BwkCMvDX.js";import"./composite-BkzMbckt.js";import"./index-D5LxgD1e.js";import"./index-ChyY_H7T.js";import"./index-B1xGkMAT.js";import"./useEventCallback-Mg5l6TND.js";import"./SkeletonBar-DanhEJYD.js";import"./LoadingCell-bfoOoDnL.js";import"./ColumnConfigDialog-GmpwDDNL.js";import"./DraggableList-BsaXdUcd.js";import"./search-Dao56fJg.js";import"./Input-pGfNFQVP.js";import"./useControlled-CywIKAhB.js";import"./Button-B3WaeV_y.js";import"./small-cross-DMJDKcSR.js";import"./ActionButton-iSIRshBZ.js";import"./Checkbox-D38sos2N.js";import"./useValueChanged-BfNlh3cV.js";import"./CollapsiblePanel-Dj3mKq6F.js";import"./MultiColumnSortDialog-CU3kQ5VB.js";import"./MenuTrigger-Dr2dGFQr.js";import"./CompositeItem-BeRdWG_-.js";import"./ToolbarRootContext-BSo8gEvR.js";import"./getDisabledMountTransitionStyles-EmLAn1yb.js";import"./getPseudoElementBounds-BtDyGFcL.js";import"./chevron-down-Chw1fxBZ.js";import"./index-Dbxm_8DG.js";import"./error-CgFhqpwO.js";import"./BaseCbacBanner-CbMFrPLT.js";import"./makeExternalStore-Z-52Zdib.js";import"./Tooltip-CySQEz_z.js";import"./PopoverPopup-COnDHYtw.js";import"./toNumber-B5JyEZZZ.js";import"./tick-CJTjGk_1.js";import"./DropdownField-fSFBaBCr.js";import"./withOsdkMetrics-CY_Q9bgr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};
