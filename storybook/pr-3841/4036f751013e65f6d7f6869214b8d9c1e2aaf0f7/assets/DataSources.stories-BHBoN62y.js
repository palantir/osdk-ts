import{j as r}from"./iframe-hkjMetp8.js";import{O as b}from"./object-table-BRxCfB_0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvpyCo_j.js";import{u as g}from"./useOsdkClient-BwTex2Oc.js";import"./preload-helper-BG3PwWgg.js";import"./Table-Dko8Upk3.js";import"./index-DGAVzjUG.js";import"./Dialog-BOBWfbkF.js";import"./cross-BtmO4_tP.js";import"./svgIconContainer-6MVX_yz2.js";import"./useBaseUiId-vPjg87EZ.js";import"./InternalBackdrop-nPd6HaQG.js";import"./composite-CH-gf1yj.js";import"./index-DekbtEE0.js";import"./index-Cdw40tlt.js";import"./index-CZwKy0_e.js";import"./useEventCallback-DrBTYvw2.js";import"./SkeletonBar-CiIjXZ8Z.js";import"./LoadingCell-fVbK0evv.js";import"./ColumnConfigDialog-Dck2Ojjg.js";import"./DraggableList--J9ne7rl.js";import"./search-CEBIaEbf.js";import"./Input-5tyvJsuV.js";import"./useControlled-BbG65MVX.js";import"./isEqual-DxFkj09B.js";import"./isObject-BQUFjSwU.js";import"./Button-Ca8Yrp0-.js";import"./ActionButton-B2oiBf7l.js";import"./Checkbox-CvNyspqG.js";import"./useValueChanged-pSSuPQN8.js";import"./CollapsiblePanel-Db6NbA8L.js";import"./MultiColumnSortDialog--efeFQie.js";import"./MenuTrigger-T7OTl7Yr.js";import"./CompositeItem-DF9NnpkL.js";import"./ToolbarRootContext-Dr07gjpJ.js";import"./getDisabledMountTransitionStyles-5QCsfeUs.js";import"./getPseudoElementBounds-wN4T0YrG.js";import"./chevron-down-C1qRhGfc.js";import"./index-D9iCbPpq.js";import"./error-BfCVgfZr.js";import"./BaseCbacBanner-DKZQG3ac.js";import"./makeExternalStore-BByL-sEm.js";import"./Tooltip-bjs24eg9.js";import"./PopoverPopup-CcVfATcq.js";import"./toNumber-BRsGC7Sk.js";import"./tick-D4T1Ni-K.js";import"./DropdownField-Bo90G8ai.js";import"./withOsdkMetrics-BAFcUBo2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
