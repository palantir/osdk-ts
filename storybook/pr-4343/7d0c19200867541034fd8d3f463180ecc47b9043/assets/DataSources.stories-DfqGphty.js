import{j as r}from"./iframe-DnJOFPSX.js";import{O as b}from"./object-table-gFqlJS5g.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DFKa7cOY.js";import{u as g}from"./useOsdkClient-B002ZQ1y.js";import"./preload-helper-DE0LB-In.js";import"./Table-BJcfBT_4.js";import"./index-BsrGUZmH.js";import"./Dialog--q8TWEco.js";import"./cross-RxTC7yT1.js";import"./svgIconContainer-C9e6psM5.js";import"./useBaseUiId-BmOtxMBQ.js";import"./InternalBackdrop-7uH3PXR7.js";import"./composite-ActYTO9Q.js";import"./index-C47JnOK2.js";import"./index-CN_nZvI2.js";import"./index-DQIivcku.js";import"./useEventCallback-C_WDvZGp.js";import"./SkeletonBar-BGTPHBC_.js";import"./LoadingCell-DJghmWTk.js";import"./ColumnConfigDialog-BJKPTxxk.js";import"./DraggableList-DiNHAcJn.js";import"./search-1uNTCuXG.js";import"./Input-DAAzhLOd.js";import"./useControlled-LZY0zNEU.js";import"./Button-cZ9KvtCU.js";import"./small-cross--HeoX71E.js";import"./ActionButton-CLFbgSEP.js";import"./Checkbox-9sBFzHkG.js";import"./useValueChanged-Dwzdf7-z.js";import"./CollapsiblePanel-ZSBWQMSx.js";import"./MultiColumnSortDialog-DrXRIxJ_.js";import"./MenuTrigger-C-pCHk80.js";import"./CompositeItem-C0xu2aal.js";import"./ToolbarRootContext-C0ive6C5.js";import"./getDisabledMountTransitionStyles-Dp_4ImaZ.js";import"./getPseudoElementBounds-CwjzgNQM.js";import"./chevron-down-DnnfJ5YY.js";import"./index-Dz6yRx1S.js";import"./error-BL2HC2Sp.js";import"./BaseCbacBanner-Dfw4KXDB.js";import"./makeExternalStore-CKgPh2OO.js";import"./Tooltip-DFNnZgP9.js";import"./PopoverPopup-DM0BfveY.js";import"./debounce-DbuR1tvL.js";import"./tick-DQ7wMG8T.js";import"./DropdownField-FHfvzp38.js";import"./isEqual-DzKwZRaR.js";import"./withOsdkMetrics-DbwiXd_V.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
