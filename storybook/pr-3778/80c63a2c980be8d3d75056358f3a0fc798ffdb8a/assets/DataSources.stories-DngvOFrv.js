import{j as r}from"./iframe-DW5kExRz.js";import{O as b}from"./object-table-SK85HUFE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B90rbrUQ.js";import{u as g}from"./useOsdkClient-AsBqnP3o.js";import"./preload-helper-BnxWtWaG.js";import"./Table-2wiIUKM9.js";import"./index-CflAnjSB.js";import"./Dialog-B342EL_s.js";import"./cross-BXaETxpe.js";import"./svgIconContainer-dsPCmsB5.js";import"./useBaseUiId-CmNJn8Jo.js";import"./InternalBackdrop-BcvQGME1.js";import"./composite-BLexdKxo.js";import"./index-DH8-sclq.js";import"./index-Cf8c--ed.js";import"./index-7GZUwAeQ.js";import"./useEventCallback-BkGasbAR.js";import"./SkeletonBar-DeBe8Oqc.js";import"./LoadingCell-C_nW1YUY.js";import"./ColumnConfigDialog-RyYmBq-t.js";import"./DraggableList-BPMLG9CE.js";import"./search-BHsGOBSH.js";import"./Input-BFC96i5B.js";import"./useControlled-dYbeX3BT.js";import"./isEqual-CZ7L-i0h.js";import"./isObject-DHnfbCQR.js";import"./Button-D0EqJKRJ.js";import"./ActionButton-2GzyxNc0.js";import"./Checkbox-MhiyCNth.js";import"./useValueChanged-Db94IZxe.js";import"./CollapsiblePanel-GCGdmqV9.js";import"./MultiColumnSortDialog-CUN72OLB.js";import"./MenuTrigger-Bi_nQ-5H.js";import"./CompositeItem-CQlwhU_S.js";import"./ToolbarRootContext-BwqzssRh.js";import"./getDisabledMountTransitionStyles-DCRJEQNW.js";import"./getPseudoElementBounds-CSZF85ks.js";import"./chevron-down-D4OFZDT7.js";import"./index-Dy-i2J-X.js";import"./error-TNuapbIk.js";import"./BaseCbacBanner-CenzC8Iv.js";import"./makeExternalStore-D3UQvTf-.js";import"./Tooltip-DXsnCRfp.js";import"./PopoverPopup-CYRcWuYi.js";import"./toNumber-0-52reWh.js";import"./tick-C30IwoCd.js";import"./DropdownField-D1vWjaUE.js";import"./withOsdkMetrics-CBpR0MwW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
