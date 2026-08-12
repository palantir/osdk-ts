import{j as r}from"./iframe-q4S2v8GD.js";import{O as b}from"./object-table-BvRSzjb-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BU4c0POY.js";import{u as g}from"./useOsdkClient-f_xWKxSr.js";import"./preload-helper-Dpp2lQ4d.js";import"./Table-Drtwulh9.js";import"./index-BRFgZsWh.js";import"./Dialog-DL6vx7cQ.js";import"./cross-CN4Kceog.js";import"./svgIconContainer-DFZA-Fi_.js";import"./useBaseUiId-D3OPJG_I.js";import"./InternalBackdrop-Bld_ME41.js";import"./composite-DOJ73mma.js";import"./index-BWxwkoVm.js";import"./index-B40hmhNC.js";import"./index-Bk_rrwjS.js";import"./useEventCallback-De6jZjPl.js";import"./SkeletonBar-Byu2pDu2.js";import"./LoadingCell-CKL4pqco.js";import"./ColumnConfigDialog-CblCdaMB.js";import"./DraggableList-BTGvR-Bu.js";import"./search-YAd7k3do.js";import"./Input-DwFaTt_h.js";import"./useControlled-D8LdPNhB.js";import"./isEqual-DGTzVpqZ.js";import"./isObject-CgjyPitK.js";import"./Button-Cxxa8caB.js";import"./ActionButton-BiXIiqha.js";import"./Checkbox-CUw5mc94.js";import"./useValueChanged-BuKbmg_i.js";import"./CollapsiblePanel-DcijGtz2.js";import"./MultiColumnSortDialog-9_tVI5Wa.js";import"./MenuTrigger-BZarWjlz.js";import"./CompositeItem-D_tBcLdd.js";import"./ToolbarRootContext-DRR8g4NM.js";import"./getDisabledMountTransitionStyles-BeQTEcPy.js";import"./getPseudoElementBounds-CRkiwrFu.js";import"./chevron-down-DRJe7j9S.js";import"./index-BAqD6s8z.js";import"./error-BqxlTXt7.js";import"./BaseCbacBanner-BF-mF9lT.js";import"./makeExternalStore-B1AqrHO7.js";import"./Tooltip-DROwBxlR.js";import"./PopoverPopup-ChsXcYzN.js";import"./toNumber-CdKQpFiI.js";import"./tick-BdVu04v7.js";import"./DropdownField-DjGfuLt1.js";import"./withOsdkMetrics-DyNmWK8l.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
