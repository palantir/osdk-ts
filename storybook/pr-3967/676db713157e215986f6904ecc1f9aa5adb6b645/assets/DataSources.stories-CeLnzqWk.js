import{j as r}from"./iframe-Bosp4Kfk.js";import{O as b}from"./object-table-CIvJAmm_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cn8_b7SQ.js";import{u as g}from"./useOsdkClient-Bz0UU2Hd.js";import"./preload-helper-ClWiB6VL.js";import"./Table-C6h5Imx9.js";import"./index-C6XIr_j0.js";import"./Dialog-BdMUVq1d.js";import"./cross-Dp0rkMBN.js";import"./svgIconContainer-Qe3SZPH2.js";import"./useBaseUiId-CYPagWj7.js";import"./InternalBackdrop-CcdE1zeW.js";import"./composite-C0RZtlqO.js";import"./index-D_IOkl0_.js";import"./index-Cq35IRn6.js";import"./index-CrFnkiFr.js";import"./useEventCallback-BmUH0wYY.js";import"./SkeletonBar-DjkVJCj3.js";import"./LoadingCell-7pUl9puK.js";import"./ColumnConfigDialog-DJssRAan.js";import"./DraggableList-vV-YW89g.js";import"./search-BiUx3u5j.js";import"./Input-CGDWreR8.js";import"./useControlled-DTohw9V1.js";import"./Button-CieAMe_p.js";import"./small-cross-CrYiAO_J.js";import"./ActionButton-Dr97457V.js";import"./Checkbox-BLQiWWKW.js";import"./useValueChanged-Ch87rtp2.js";import"./CollapsiblePanel-B3vcSNej.js";import"./MultiColumnSortDialog-BZXXkkZR.js";import"./MenuTrigger-DlFlzUl5.js";import"./CompositeItem-BU4XWpDF.js";import"./ToolbarRootContext-Bz28bgEE.js";import"./getDisabledMountTransitionStyles-BGeKaQZr.js";import"./getPseudoElementBounds-D1VPFEDe.js";import"./chevron-down-BmQ0fXj1.js";import"./index-Dez8kNJl.js";import"./error-7C0gNJGe.js";import"./BaseCbacBanner-De58Nn1x.js";import"./makeExternalStore-KCU4dCkA.js";import"./Tooltip-9q3J9nO5.js";import"./PopoverPopup-M52DYMvO.js";import"./debounce-b8voU-g_.js";import"./tick-2lM_ezsG.js";import"./DropdownField-45SlxEfM.js";import"./isEqual-BfE8QgFE.js";import"./withOsdkMetrics-DRBPjASM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
