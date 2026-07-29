import{j as r}from"./iframe-CSumVy5B.js";import{O as b}from"./object-table-Bl8NxYhb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjGqYqlW.js";import{u as g}from"./useOsdkClient-7V-ddhhv.js";import"./preload-helper-CBombYiI.js";import"./Table-BLnnkm8J.js";import"./index-DQ45Rr9-.js";import"./Dialog-DkZ_yJmU.js";import"./cross-Db0Tmz8n.js";import"./svgIconContainer-CtPAyXoD.js";import"./useBaseUiId-DRFCB_IR.js";import"./InternalBackdrop-B7eXhqDx.js";import"./composite-Dw2E63KR.js";import"./index-ClUgQiOR.js";import"./index-Cqhmw3j4.js";import"./index-qO8uI0qZ.js";import"./useEventCallback-D_ATAylI.js";import"./SkeletonBar-BkpJk7mB.js";import"./LoadingCell-Ccz12-DM.js";import"./ColumnConfigDialog-BMtFrbjb.js";import"./DraggableList-D8qLNXOP.js";import"./search-CdDv8eEf.js";import"./Input-BDuVWvkz.js";import"./useControlled-CG83hz7Q.js";import"./isEqual-NDxDjbhg.js";import"./isObject-CeUm-6WI.js";import"./Button-bqCpVfIv.js";import"./ActionButton-B27y8uaN.js";import"./Checkbox-hIJ2dKTg.js";import"./useValueChanged-CoFQDzs-.js";import"./CollapsiblePanel-BtD1yVpg.js";import"./MultiColumnSortDialog-BSR7QXpa.js";import"./MenuTrigger-BJV1-YTX.js";import"./CompositeItem-Dn5e_dwj.js";import"./ToolbarRootContext-ByQ5hSPJ.js";import"./getDisabledMountTransitionStyles-Cc1k6J-a.js";import"./getPseudoElementBounds-Yza0u5Gv.js";import"./chevron-down-DgqRz-6y.js";import"./index-DKCFta18.js";import"./error-YEXOSncq.js";import"./BaseCbacBanner-CCmKu2-W.js";import"./makeExternalStore-CSPbLBzs.js";import"./Tooltip-fesy7LJ_.js";import"./PopoverPopup-4ar7d7vN.js";import"./toNumber-BS1D0Nfz.js";import"./tick-C-DdUab-.js";import"./DropdownField-CclbFd0n.js";import"./withOsdkMetrics-D03-ZDAS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
