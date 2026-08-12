import{j as r}from"./iframe-B4UcJlUn.js";import{O as b}from"./object-table-DiwpuMil.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1ctBV-O.js";import{u as g}from"./useOsdkClient-T3cVOfDt.js";import"./preload-helper-nCBdWicC.js";import"./Table-BHvLJsK4.js";import"./index-C8ef4t-Z.js";import"./Dialog-XW8pn7Pw.js";import"./cross-CDlzpv2a.js";import"./svgIconContainer-jV7YtvQC.js";import"./useBaseUiId-B5hZssna.js";import"./InternalBackdrop-Dv95WM47.js";import"./composite-C7ayO821.js";import"./index-9mx_yRh-.js";import"./index-B9KiQzXE.js";import"./index-Bxf9gMnl.js";import"./useEventCallback-Bg9KxLqK.js";import"./SkeletonBar-PtnMdiMD.js";import"./LoadingCell-CTHifDQa.js";import"./ColumnConfigDialog-BWIdVMWN.js";import"./DraggableList-DuKXnODV.js";import"./search-BUVwFVg8.js";import"./Input-eMNIp8tt.js";import"./useControlled-Bi9AY8b2.js";import"./isEqual-DxmTL_oR.js";import"./isObject-Dxu5HMS6.js";import"./Button-BadEAtWa.js";import"./ActionButton-D-tAnNy-.js";import"./Checkbox-BkS2Qobf.js";import"./useValueChanged-DNJ0cUmN.js";import"./CollapsiblePanel-uwjXlVCK.js";import"./MultiColumnSortDialog-CwZaJqvE.js";import"./MenuTrigger-Ck3CLacH.js";import"./CompositeItem-BH6AHNlU.js";import"./ToolbarRootContext-Dvnv9LkO.js";import"./getDisabledMountTransitionStyles-CZklATkN.js";import"./getPseudoElementBounds-CCO8HMN-.js";import"./chevron-down-CeZmVDL8.js";import"./index-CJtYrTIY.js";import"./error-CwHD_sRR.js";import"./BaseCbacBanner-B0N7992P.js";import"./makeExternalStore-CeFMygCV.js";import"./Tooltip-CsX77x6k.js";import"./PopoverPopup-kRZzR8O8.js";import"./toNumber-BnE3Hbyw.js";import"./tick-BOWGCcMw.js";import"./DropdownField-BimjaBga.js";import"./withOsdkMetrics-BsIweO9h.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
