import{j as r}from"./iframe-CBLGayoe.js";import{O as b}from"./object-table-Dfnb9q2S.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B8zxrheH.js";import{u as g}from"./useOsdkClient-C4j--X5m.js";import"./preload-helper-iqQbXwPR.js";import"./Table-3tUBpcgb.js";import"./index-WWQs816-.js";import"./Dialog-DDIWOZ7A.js";import"./cross-BsTZCMZo.js";import"./svgIconContainer-C6h86pFp.js";import"./useBaseUiId-1t0yXeWR.js";import"./InternalBackdrop-D-1bVe6k.js";import"./composite-B0OuyU4e.js";import"./index-DRnkv5ky.js";import"./index-cNWLnacK.js";import"./index-CJYhDRX8.js";import"./useEventCallback-Vi0Pn5Sv.js";import"./SkeletonBar-BnJ1P5Dc.js";import"./LoadingCell-joRgzu6e.js";import"./ColumnConfigDialog-DGG2zCSJ.js";import"./DraggableList-YSyn2lX_.js";import"./search-fj4r3aII.js";import"./Input-B3gcQSCO.js";import"./useControlled-aG0yjyc1.js";import"./Button-CjUTiVzv.js";import"./small-cross-1A3qDgIz.js";import"./ActionButton-k24uyueG.js";import"./Checkbox-Bl8YlgaC.js";import"./useValueChanged-DUE2Yivj.js";import"./CollapsiblePanel-NhOksXv9.js";import"./MultiColumnSortDialog-C3XrF8TS.js";import"./MenuTrigger-BxU3BSa9.js";import"./CompositeItem-DM2eqzsD.js";import"./ToolbarRootContext-DXoHeFWe.js";import"./getDisabledMountTransitionStyles-DjkeLEx-.js";import"./getPseudoElementBounds-O8sM1SFz.js";import"./chevron-down-fvU8e7Xa.js";import"./index-BlgAqsZh.js";import"./error-pMIF5hcF.js";import"./BaseCbacBanner-CTxjuNnU.js";import"./makeExternalStore-C4cF0z0U.js";import"./Tooltip-D0gzo0UL.js";import"./PopoverPopup-B6LNoEH2.js";import"./debounce-D5ZCw2WL.js";import"./tick-CN0oe-d-.js";import"./DropdownField-BahT1QHv.js";import"./isEqual-BaMniWjI.js";import"./withOsdkMetrics-BgHhPSx8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
