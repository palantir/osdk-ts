import{j as r}from"./iframe-BRxXnNeA.js";import{O as b}from"./object-table-BWXmHScr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--fX218lq.js";import{u as g}from"./useOsdkClient-CTu4hncc.js";import"./preload-helper-ZwpNBDck.js";import"./Table-DjTRGd0n.js";import"./index-DnUdziE3.js";import"./Dialog-BGn3Kbow.js";import"./cross-p5C9R9_r.js";import"./svgIconContainer-BOuRuwJr.js";import"./useBaseUiId-iHLM7QjT.js";import"./InternalBackdrop-BwZQ0gYG.js";import"./composite-BmCm4IKS.js";import"./index-BMsxRPaK.js";import"./index-V95TsBfL.js";import"./index-DF9ZbJ2O.js";import"./useEventCallback-Dk8Q5KrO.js";import"./SkeletonBar-aCQi_r5v.js";import"./LoadingCell-DwHEwjqu.js";import"./ColumnConfigDialog-CTTwBk2B.js";import"./DraggableList-X9V4ye4K.js";import"./search-DKQ2rHbj.js";import"./Input-CGTuhK0d.js";import"./useControlled-StFrWOwS.js";import"./isEqual-ObeORAz7.js";import"./isObject-GLs1X9xy.js";import"./Button-CLHyeJxI.js";import"./ActionButton-ChbUphi7.js";import"./Checkbox-BWcBAjrk.js";import"./useValueChanged-DWJn24ga.js";import"./CollapsiblePanel-t1PtKIC8.js";import"./MultiColumnSortDialog-BwKtyIja.js";import"./MenuTrigger-o17AnMiN.js";import"./CompositeItem-01NlXsRP.js";import"./ToolbarRootContext-DTrfrJro.js";import"./getDisabledMountTransitionStyles-QcZ-leHz.js";import"./getPseudoElementBounds-Df0V2yLr.js";import"./chevron-down-DBKWZy9U.js";import"./index-CYoRdqfZ.js";import"./error-BFvdxdQn.js";import"./BaseCbacBanner-Dalh-T5O.js";import"./makeExternalStore-DmpDAepm.js";import"./Tooltip-p4FUIbO3.js";import"./PopoverPopup-Bhv815cX.js";import"./toNumber-rktqZQ-g.js";import"./tick-_elaQ7T9.js";import"./DropdownField-DLY5-bws.js";import"./withOsdkMetrics-DEkYj1jo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
