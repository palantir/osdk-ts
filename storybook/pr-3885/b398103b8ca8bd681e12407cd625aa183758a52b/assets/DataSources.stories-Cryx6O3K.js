import{j as r}from"./iframe-DfZGSEnK.js";import{O as b}from"./object-table-BhFBxuuq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Jk7vH_eB.js";import{u as g}from"./useOsdkClient-COnSdOcv.js";import"./preload-helper-JSyPDtRL.js";import"./Table-DCHQ9DIl.js";import"./index-BtmgN424.js";import"./Dialog-BQK0uf89.js";import"./cross-Beh92vlp.js";import"./svgIconContainer-Df807jxI.js";import"./useBaseUiId-DywIzSMt.js";import"./InternalBackdrop-BrU3GtDz.js";import"./composite-CaYLCY3w.js";import"./index-DCIaOmvZ.js";import"./index-Bgh8wCNB.js";import"./index-BrCUh-Ra.js";import"./useEventCallback-ByrMJoxA.js";import"./SkeletonBar-C-t_-bWa.js";import"./LoadingCell-DVdW8-R0.js";import"./ColumnConfigDialog-fET7wgaA.js";import"./DraggableList-DwhS7pi1.js";import"./search-BwusOqn1.js";import"./Input-DFmCPLco.js";import"./useControlled-CIgmgNK9.js";import"./Button-B1pKZshi.js";import"./small-cross-Bc1839it.js";import"./ActionButton-BFRD3DcD.js";import"./Checkbox-CwNHEUFs.js";import"./useValueChanged-BoS3X9CQ.js";import"./CollapsiblePanel-CkOQ0TcF.js";import"./MultiColumnSortDialog-BTPWsaqG.js";import"./MenuTrigger-BV7h9uJl.js";import"./CompositeItem-BdMjAmQ6.js";import"./ToolbarRootContext-C7WEHba5.js";import"./getDisabledMountTransitionStyles-DJCiV1E5.js";import"./getPseudoElementBounds-B5f8znMc.js";import"./chevron-down-qE8TvtrC.js";import"./index-CgBWG5tj.js";import"./error-C02d4v5E.js";import"./BaseCbacBanner-DOZyeA5C.js";import"./makeExternalStore-BNurq7kY.js";import"./Tooltip-BHkZYyMQ.js";import"./PopoverPopup-BvvL2cGT.js";import"./debounce-CuIu4aks.js";import"./tick-B2x0tHQ4.js";import"./DropdownField-BXW94eU-.js";import"./isEqual-BLC8r3fK.js";import"./withOsdkMetrics-BVC9GIYX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
