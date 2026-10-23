import{j as r}from"./iframe-DKFdWtvL.js";import{O as b}from"./object-table-CwQF-Dvg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D90RKTxQ.js";import{u as g}from"./useOsdkClient-oJ76J3S4.js";import"./preload-helper-CE0EJEax.js";import"./Table-Cnic_cB3.js";import"./index-Zr7MzFSe.js";import"./Dialog-DJMUGRQJ.js";import"./cross-DwMbeucq.js";import"./svgIconContainer-mDDpTeTZ.js";import"./useBaseUiId-wiNmPbxB.js";import"./InternalBackdrop-CKISU8v0.js";import"./composite-Cu9id-g4.js";import"./index-CKHkcl8C.js";import"./index-BEWpIeZQ.js";import"./index-CMS4oCXy.js";import"./useEventCallback-CdZBxG17.js";import"./SkeletonBar-DudztDAH.js";import"./LoadingCell-0Z0FWm_3.js";import"./ColumnConfigDialog-CuArSFKY.js";import"./DraggableList-i9-ph0PR.js";import"./search-DRLDRoqN.js";import"./Input-veW-XqjJ.js";import"./useControlled-xNoP3k9v.js";import"./Button-DqI2Ud1s.js";import"./small-cross-DbCXQWOu.js";import"./ActionButton-Hgu8HEXX.js";import"./Checkbox-DOdBL_E2.js";import"./useValueChanged-DNoCn35O.js";import"./CollapsiblePanel-DFGZ9fUj.js";import"./MultiColumnSortDialog-Dug9W_Lj.js";import"./MenuTrigger-BV8zLsAt.js";import"./CompositeItem-BafBUoyW.js";import"./ToolbarRootContext-CrA7gaTE.js";import"./getDisabledMountTransitionStyles-DN20IWb_.js";import"./getPseudoElementBounds-Brijrk7L.js";import"./chevron-down-BKXttnNC.js";import"./index-Esiyv4F3.js";import"./error-D3OaIHY1.js";import"./BaseCbacBanner-BpbKfsaD.js";import"./makeExternalStore-De86ji-X.js";import"./Tooltip-tuRx1ZD5.js";import"./PopoverPopup-BZY02nqM.js";import"./debounce-BET9pivF.js";import"./tick-DJb0ub8N.js";import"./DropdownField-BJbaqXN1.js";import"./isEqual-CLy-jAf8.js";import"./withOsdkMetrics-DUGrXPH7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
