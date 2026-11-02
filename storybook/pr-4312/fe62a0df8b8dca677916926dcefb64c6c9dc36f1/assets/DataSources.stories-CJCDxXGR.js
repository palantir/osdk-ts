import{j as r}from"./iframe-Yw9TZb4u.js";import{O as b}from"./object-table-DaX2y8Ir.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-v-2OFQr2.js";import{u as g}from"./useOsdkClient-ClnO36Ir.js";import"./preload-helper-D_xjOrEt.js";import"./Table-CpavOXJj.js";import"./index-8aWnL4Lo.js";import"./Dialog-D2wMKlyn.js";import"./cross-DTT8xN_V.js";import"./svgIconContainer-BIiUvxcP.js";import"./useBaseUiId-BO9crViw.js";import"./InternalBackdrop-B1PWndwc.js";import"./composite-BNHMrFyE.js";import"./index-kxnQI0Cl.js";import"./index-DC5PMXgz.js";import"./index-CJnR7cM_.js";import"./useEventCallback-BiHOi3SY.js";import"./SkeletonBar-3dZxATgt.js";import"./LoadingCell-3c9bVrHn.js";import"./ColumnConfigDialog-BtuzXin0.js";import"./DraggableList-Cmwd3_Yn.js";import"./search-BQQODEli.js";import"./Input-CSG_diAL.js";import"./useControlled-BzIkjd0M.js";import"./Button-C1MrjwiB.js";import"./small-cross-DkpqNIrR.js";import"./ActionButton-wy0NESyC.js";import"./Checkbox-DJL0SHLK.js";import"./useValueChanged-CulitGOu.js";import"./CollapsiblePanel-DTI6vdFY.js";import"./MultiColumnSortDialog-mkWalreF.js";import"./MenuTrigger-DKA7SRF7.js";import"./CompositeItem-BD6lDA45.js";import"./ToolbarRootContext-BU6uR7dz.js";import"./getDisabledMountTransitionStyles-8x2Gf4ix.js";import"./getPseudoElementBounds-DuGEZlai.js";import"./chevron-down-oj878TNR.js";import"./index-CibthTqO.js";import"./error-BrfIeh_k.js";import"./BaseCbacBanner-BLH2XH0j.js";import"./makeExternalStore-C9-V4S7e.js";import"./Tooltip-DMJgRtRS.js";import"./PopoverPopup-5dJ4xSYR.js";import"./debounce-BfGqlc0J.js";import"./tick-8C35Ay4D.js";import"./DropdownField-Dzx1y_MO.js";import"./isEqual-D6Dds2Xo.js";import"./withOsdkMetrics-ChgDZqBx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
