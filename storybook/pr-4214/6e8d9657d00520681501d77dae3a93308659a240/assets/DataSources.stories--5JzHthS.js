import{j as r}from"./iframe-C9SuZ1RJ.js";import{O as b}from"./object-table-B7ycQ6BE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bfn16pKH.js";import{u as g}from"./useOsdkClient-es3CZ3SD.js";import"./preload-helper-DMSK6AnV.js";import"./Table-CF0LDgDy.js";import"./index-DT_ukoYl.js";import"./Dialog-D1IV12yc.js";import"./cross-Itynl6FX.js";import"./svgIconContainer-D69sxdT1.js";import"./useBaseUiId-7WRirspl.js";import"./InternalBackdrop-CMb1PVBv.js";import"./composite-CLRoo5Je.js";import"./index-DSlBaHfK.js";import"./index-BHS-eS1n.js";import"./index-CbbSTcJP.js";import"./useEventCallback-BATy1042.js";import"./SkeletonBar-B5kYBk_d.js";import"./LoadingCell-BCwvJEAw.js";import"./ColumnConfigDialog-CWF5ZNIo.js";import"./DraggableList-3rM2js5S.js";import"./search-N0RiDnX8.js";import"./Input-D0BDhaw_.js";import"./useControlled-DGoyddZA.js";import"./Button-DPVeNaPl.js";import"./small-cross-CVj6zxAy.js";import"./ActionButton-CFuC9l1R.js";import"./Checkbox-DlQe_mGI.js";import"./useValueChanged-DcttfwPd.js";import"./CollapsiblePanel-BYWPcYrr.js";import"./MultiColumnSortDialog-DaPBsJDS.js";import"./MenuTrigger-7tikn6Hn.js";import"./CompositeItem-y2AxCYkL.js";import"./ToolbarRootContext-IeBvAErZ.js";import"./getDisabledMountTransitionStyles-D61a-Amc.js";import"./getPseudoElementBounds-C0ASFWoG.js";import"./chevron-down-BSUO84z0.js";import"./index-tNEhjfv0.js";import"./error-JN7vVG19.js";import"./BaseCbacBanner-Bk40eYrU.js";import"./makeExternalStore-BkAl_UIS.js";import"./Tooltip-CDDNzZxm.js";import"./PopoverPopup-iUPwntF5.js";import"./debounce-Bhm2oAnY.js";import"./tick-Bfjhhadh.js";import"./DropdownField-Bh7g_Xnj.js";import"./isEqual-Bya2yiBi.js";import"./withOsdkMetrics-FfcvjHUd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
