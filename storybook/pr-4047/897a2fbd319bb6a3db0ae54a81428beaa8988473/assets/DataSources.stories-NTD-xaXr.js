import{j as r}from"./iframe-DiEonpI4.js";import{O as b}from"./object-table-Cj3vTSS3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cw__XVRm.js";import{u as g}from"./useOsdkClient-BTBjVGr0.js";import"./preload-helper-CK-k_2Vt.js";import"./Table-CQYEccso.js";import"./index-emI1jrST.js";import"./Dialog-BOrLCAdB.js";import"./cross-Dk3kDcDy.js";import"./svgIconContainer-HP-rjnIi.js";import"./useBaseUiId-vTxFcR1B.js";import"./InternalBackdrop-EQ6LpJI_.js";import"./composite-CGrPsAxE.js";import"./index-CLd9qPG2.js";import"./index-Ds0MF9yD.js";import"./index-CiZmf62M.js";import"./useEventCallback-CdNjUNof.js";import"./SkeletonBar-z7idkCKw.js";import"./LoadingCell-Dw44iy_M.js";import"./ColumnConfigDialog-CusMm4zO.js";import"./DraggableList-BV6fb_vM.js";import"./search-BguN7d-l.js";import"./Input-DeBBkK_j.js";import"./useControlled-BXxbQ2_H.js";import"./Button-DUYCFQGz.js";import"./small-cross-CJHxZfcv.js";import"./ActionButton-xlIYdZYB.js";import"./Checkbox-BmZi08nF.js";import"./useValueChanged-BUX6j6jW.js";import"./CollapsiblePanel-D8lZXkVz.js";import"./MultiColumnSortDialog-DdzeV36a.js";import"./MenuTrigger-5Ts7mkeP.js";import"./CompositeItem-Cogr6rzU.js";import"./ToolbarRootContext-D-kjOzEz.js";import"./getDisabledMountTransitionStyles-CYLa5ttS.js";import"./getPseudoElementBounds-BF-DLRq1.js";import"./chevron-down-C-r7fv-U.js";import"./index-DL9fAFGC.js";import"./error-DiLLCp_W.js";import"./BaseCbacBanner-BHqjCXez.js";import"./makeExternalStore-BUkIaKmg.js";import"./Tooltip-DbBb7fon.js";import"./PopoverPopup-DYIt5v_N.js";import"./debounce-Cm2KkAbL.js";import"./tick-8-vebs0z.js";import"./DropdownField-KRyqpjup.js";import"./isEqual-D3P-_--k.js";import"./withOsdkMetrics-CSqvl8Bo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
