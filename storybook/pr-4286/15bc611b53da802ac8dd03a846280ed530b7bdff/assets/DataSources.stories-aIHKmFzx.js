import{j as r}from"./iframe-C5CLXfWS.js";import{O as b}from"./object-table-B8Yj1udP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dabh4yzE.js";import{u as g}from"./useOsdkClient-lAi3FL1U.js";import"./preload-helper-CmQDAWyb.js";import"./Table-BRmy04Uy.js";import"./index-DtGlOU-M.js";import"./Dialog-Danu4XaP.js";import"./cross-B3o49gy1.js";import"./svgIconContainer-BIzzh223.js";import"./useBaseUiId-CqeeK3OI.js";import"./InternalBackdrop-KXNey9yS.js";import"./composite-B3s1Z_B-.js";import"./index-BXJypcxy.js";import"./index-DGZrjFba.js";import"./index-Bj1EDllN.js";import"./useEventCallback-CYKoO3bJ.js";import"./SkeletonBar-DJb7Lu6W.js";import"./LoadingCell-C8UIseRW.js";import"./ColumnConfigDialog-Cvjl-BoI.js";import"./DraggableList-CyvyTj6Q.js";import"./search-aAg3Ft0P.js";import"./Input-D-cxIIFp.js";import"./useControlled-CzKtgw0j.js";import"./Button-W3Mp6JlA.js";import"./small-cross-B2iIdYeI.js";import"./ActionButton-DJweMjUH.js";import"./Checkbox-BcjmR6da.js";import"./useValueChanged-CJyGnTsK.js";import"./CollapsiblePanel-SGmn3J0J.js";import"./MultiColumnSortDialog-jnhFZAk_.js";import"./MenuTrigger-BdAsiuB8.js";import"./CompositeItem-Dx1-4fNK.js";import"./ToolbarRootContext-Bvt9zfPy.js";import"./getDisabledMountTransitionStyles-CS5zUVVl.js";import"./getPseudoElementBounds-DjH8mNuQ.js";import"./chevron-down-k0OiGtOZ.js";import"./index-CaADRcIm.js";import"./error-aTWH99uz.js";import"./BaseCbacBanner-DFCES3sy.js";import"./makeExternalStore-BfuCy0xW.js";import"./Tooltip-ClnzFWaz.js";import"./PopoverPopup-Dll2LQIE.js";import"./debounce-CAC4DZOe.js";import"./tick-BDZpZu1S.js";import"./DropdownField-DaRMR6LA.js";import"./isEqual-ZgcjThM9.js";import"./withOsdkMetrics-BjF1sUNW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
