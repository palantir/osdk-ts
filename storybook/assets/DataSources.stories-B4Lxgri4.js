import{j as r}from"./iframe-bDlOvzCD.js";import{O as b}from"./object-table-Dl2lCGNZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B60k5ed4.js";import{u as g}from"./useOsdkClient-DqxOv284.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BAmM5hSy.js";import"./index-VT2sHwDI.js";import"./Dialog-BzJJmA8W.js";import"./cross-TUS4Q6Ao.js";import"./svgIconContainer-Bqi1VJi0.js";import"./useBaseUiId-B2slyOHM.js";import"./InternalBackdrop-CRh9Bcm2.js";import"./composite-Dfe6WZ9B.js";import"./index-DP9iJ9Qp.js";import"./index-CGDkVQ7s.js";import"./index-_S-PXd8B.js";import"./useEventCallback-DZd0sCPQ.js";import"./SkeletonBar-DXXr_uD3.js";import"./LoadingCell-DwSKG4eX.js";import"./ColumnConfigDialog-deoJ9G1I.js";import"./DraggableList--_2oR74E.js";import"./search-Dh1zBfzB.js";import"./Input-CNxZ13Ar.js";import"./useControlled-5EwHNZlm.js";import"./Button-LYMOgFpv.js";import"./small-cross-iJKFa-ZD.js";import"./ActionButton-BXC4EPx5.js";import"./Checkbox-ilOHd6bp.js";import"./useValueChanged-DzFKc6r-.js";import"./CollapsiblePanel-ClrnquSS.js";import"./MultiColumnSortDialog-juD7Sd67.js";import"./MenuTrigger-CsbizqWt.js";import"./CompositeItem-I6D1Ck1D.js";import"./ToolbarRootContext-BvOSFjrz.js";import"./getDisabledMountTransitionStyles-CwJ-KzBN.js";import"./getPseudoElementBounds-BUF_kUes.js";import"./chevron-down-G50mjwg6.js";import"./index-DjjoI3KK.js";import"./error-DgyisaaS.js";import"./BaseCbacBanner-DqA6kCfr.js";import"./makeExternalStore-Oc969Yyb.js";import"./Tooltip-Cst3xVOs.js";import"./PopoverPopup-jWpQQnI7.js";import"./debounce-DjjsE8t-.js";import"./tick-DLToHhDG.js";import"./DropdownField-CeLtBIVJ.js";import"./isEqual-C7rAeOqh.js";import"./withOsdkMetrics-BflEGh-H.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
