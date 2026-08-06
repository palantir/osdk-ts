import{j as r}from"./iframe-C3I2vfo4.js";import{O as b}from"./object-table-CNxMFsoo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwRX9pag.js";import{u as g}from"./useOsdkClient-CT4GjcCh.js";import"./preload-helper-DLCNI-aM.js";import"./Table-BfEzPA-4.js";import"./index-CjlbFBQF.js";import"./Dialog-YEsiM-8i.js";import"./cross-Czwo4Gbj.js";import"./svgIconContainer-DC10GU3T.js";import"./useBaseUiId-BEnwlPrh.js";import"./InternalBackdrop-BE8jPQGl.js";import"./composite-B0oGrJq8.js";import"./index-g756CyT3.js";import"./index-BdMtjuPw.js";import"./index-DCn6TNXA.js";import"./useEventCallback-DTE4BUoj.js";import"./SkeletonBar-D1HLaHAx.js";import"./LoadingCell-DNrKW53T.js";import"./ColumnConfigDialog-xPB403Xf.js";import"./DraggableList-DefRhOtC.js";import"./search-BST2d1n0.js";import"./Input-6iR3oUXP.js";import"./useControlled-DjF4xmFn.js";import"./isEqual-BOzcltHn.js";import"./small-cross-DlHkqmW6.js";import"./Button-BnGX5kZd.js";import"./ActionButton-9YMIe5Rm.js";import"./Checkbox-g-lWn9kI.js";import"./useValueChanged-BM7O54FO.js";import"./CollapsiblePanel-3AzlWUtH.js";import"./MultiColumnSortDialog-ZovN2HB3.js";import"./MenuTrigger-DiTj_CD0.js";import"./CompositeItem-BgzFMOjc.js";import"./ToolbarRootContext-Cedd7atY.js";import"./getDisabledMountTransitionStyles-CMmxYxZy.js";import"./getPseudoElementBounds-BDRhvVpc.js";import"./chevron-down-CFoIf__9.js";import"./index-BxuSZPx5.js";import"./error-C5kvUQcl.js";import"./BaseCbacBanner-DS1c9Igb.js";import"./makeExternalStore-BuO4JxRk.js";import"./Tooltip-CqZsEekV.js";import"./PopoverPopup-vTDqpR3e.js";import"./Combobox-DZX4VZJC.js";import"./tick-CFrcd2vE.js";import"./DropdownField-B1W_-qOM.js";import"./withOsdkMetrics-CzsfC_Tx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
