import{j as r}from"./iframe-DOW2bXFs.js";import{O as b}from"./object-table-BNlthN64.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wD6ebFAs.js";import{u as g}from"./useOsdkClient-BERGKa3D.js";import"./preload-helper-BHuniwci.js";import"./Table-BXikgICs.js";import"./index-4oJsk_tB.js";import"./Dialog-CQdhf3N7.js";import"./cross-COlHBJoz.js";import"./svgIconContainer-CT_KO30M.js";import"./useBaseUiId-B_0mQGPv.js";import"./InternalBackdrop-lPwjztDu.js";import"./composite-CqPSq466.js";import"./index-Bn8LPSeX.js";import"./index-GSo9ng3g.js";import"./index-C6M1k-et.js";import"./useEventCallback-B3VaIBrg.js";import"./SkeletonBar-DxdJn7gH.js";import"./LoadingCell-DJ0lzlCl.js";import"./ColumnConfigDialog-C04281-e.js";import"./DraggableList-DStVGJZI.js";import"./search-BWbB-AxZ.js";import"./Input-CSOHEyA0.js";import"./useControlled-NJi6VJOf.js";import"./Button-DZdYaU0k.js";import"./small-cross-iF7SW867.js";import"./ActionButton-CM1odkW5.js";import"./Checkbox-08T_vGQ7.js";import"./useValueChanged-TiwULohc.js";import"./CollapsiblePanel-BALGGoSD.js";import"./MultiColumnSortDialog-BO8WXNUG.js";import"./MenuTrigger-DtqoUMjg.js";import"./CompositeItem-CPRbyJMO.js";import"./ToolbarRootContext-C3gCOQD7.js";import"./getDisabledMountTransitionStyles-D-1ZYwTn.js";import"./getPseudoElementBounds-BdV0GJWh.js";import"./chevron-down-CRcrwjTm.js";import"./index-DPfBrSuZ.js";import"./error-D3fDFL5e.js";import"./BaseCbacBanner-CBDVw-BP.js";import"./makeExternalStore-4Ndi4CXn.js";import"./Tooltip-M05NfHCp.js";import"./PopoverPopup-DgBZbaSS.js";import"./debounce-1fRjCSLx.js";import"./tick-uSlpKgY-.js";import"./DropdownField-C9Cbl0hv.js";import"./isEqual-Dhn6_kDg.js";import"./withOsdkMetrics-XWnXG2iZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
