import{j as r}from"./iframe-CjUdfJYr.js";import{O as b}from"./object-table-BsLoarMY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bkp0ZEU0.js";import{u as g}from"./useOsdkClient-BfDEIV2j.js";import"./preload-helper-fppZUlGt.js";import"./Table-CMc_66VF.js";import"./index-D5_XSG7N.js";import"./Dialog-D0lLlvcy.js";import"./cross-C-2XKRLb.js";import"./svgIconContainer-Bv0ouseb.js";import"./useBaseUiId-Cl5BRcl7.js";import"./InternalBackdrop-CB_lryOn.js";import"./composite-D5c9F9UH.js";import"./index-DGq9E2mF.js";import"./index-C7UqLEto.js";import"./index-wrcdIAZc.js";import"./useEventCallback-FFGsql-n.js";import"./SkeletonBar-DkL9MhMD.js";import"./LoadingCell-ensypk3k.js";import"./ColumnConfigDialog-BWqqzG7e.js";import"./DraggableList-CgRnSckD.js";import"./search-S_JNugMy.js";import"./Input--hS-Bx7-.js";import"./useControlled-DdCiVbr2.js";import"./isEqual-B_voQcQE.js";import"./isObject-BlBSfT88.js";import"./Button-DA4t73qH.js";import"./ActionButton-CNOVcJso.js";import"./Checkbox-BAoyXMag.js";import"./useValueChanged-DLsIrkiq.js";import"./CollapsiblePanel-CKTH3Dlz.js";import"./MultiColumnSortDialog-Bka4eeo1.js";import"./MenuTrigger-JKWHb7NT.js";import"./CompositeItem-CPH32fpX.js";import"./ToolbarRootContext-DghAl8DN.js";import"./getDisabledMountTransitionStyles-DxCDNDGH.js";import"./getPseudoElementBounds-BE0Z67VR.js";import"./chevron-down-f283P8c6.js";import"./index-lzGUL1BT.js";import"./error-sJaqfY2O.js";import"./BaseCbacBanner-BfxtPo8k.js";import"./makeExternalStore-D0Z6Qar9.js";import"./Tooltip-gs8ZNnWJ.js";import"./PopoverPopup-BxvUAPET.js";import"./toNumber-D-9WJOW9.js";import"./tick-BhEgViHf.js";import"./DropdownField-EM_RIB-N.js";import"./withOsdkMetrics-DK9Pjfpl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
