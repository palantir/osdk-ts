import{j as r}from"./iframe-D3RqEcTg.js";import{O as b}from"./object-table-CjXauAQL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BJ-Qb7mD.js";import{u as g}from"./useOsdkClient-CYgwmGPG.js";import"./preload-helper-DEJIs2kk.js";import"./Table-D7FfGSt7.js";import"./index-Cbcna1KE.js";import"./Dialog-BUBSwhuB.js";import"./cross-CX1s17MX.js";import"./svgIconContainer-BFc_5UUB.js";import"./useBaseUiId-DzPouJ0p.js";import"./InternalBackdrop-Pm2S-c0l.js";import"./composite-LUqhuSI5.js";import"./index-C44NzcrV.js";import"./index-C2bdh9HG.js";import"./index-M7M1iWSs.js";import"./useEventCallback-gPsZT7qj.js";import"./SkeletonBar-CfBbo7kP.js";import"./LoadingCell-Bowo7-Vs.js";import"./ColumnConfigDialog-B0leskOm.js";import"./DraggableList-CLZMZbcA.js";import"./search-CqjQ6sEq.js";import"./Input-D6dyl9HO.js";import"./useControlled-CImu19gq.js";import"./Button-BcgwRa4F.js";import"./small-cross-CQsBQ66b.js";import"./ActionButton-DZXFI6ev.js";import"./Checkbox-W7WDR_Ca.js";import"./useValueChanged-CnBcuDv8.js";import"./CollapsiblePanel-DATqTs4G.js";import"./MultiColumnSortDialog-CmIRUWaB.js";import"./MenuTrigger-QvRoMfa4.js";import"./CompositeItem-DtKWkFxx.js";import"./ToolbarRootContext-DAdYN5ZS.js";import"./getDisabledMountTransitionStyles-3vJ9NXW6.js";import"./getPseudoElementBounds-2PfQFQkg.js";import"./chevron-down-CejxcKWv.js";import"./index-B6gngHYt.js";import"./error-CTTKBYvP.js";import"./BaseCbacBanner-CL1MugFe.js";import"./makeExternalStore-DTiablUL.js";import"./Tooltip-DsSzQZ3B.js";import"./PopoverPopup-RBpjqEC9.js";import"./debounce-1JchkNCt.js";import"./tick-BwpcUkSk.js";import"./DropdownField-BItMWDAM.js";import"./isEqual-BI5ezawU.js";import"./withOsdkMetrics-CVWMc52B.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
