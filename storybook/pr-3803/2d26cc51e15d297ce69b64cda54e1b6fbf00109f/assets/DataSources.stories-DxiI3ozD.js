import{j as r}from"./iframe-BHGDbtGe.js";import{O as b}from"./object-table-PLsUGZhh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DWZKLkOd.js";import{u as g}from"./useOsdkClient-Ckca3cDS.js";import"./preload-helper-D5OaizyV.js";import"./Table-qmoBiGzY.js";import"./index-BGbjnL0r.js";import"./Dialog-DBvGyyq5.js";import"./cross-DV8hBvU3.js";import"./svgIconContainer-CZX0yke1.js";import"./useBaseUiId-BxePW4ZZ.js";import"./InternalBackdrop-DcMO0k_5.js";import"./composite-DLWXPmjE.js";import"./index-Q7uht_3R.js";import"./index-DOkphcqk.js";import"./index-CIyc8_0F.js";import"./useEventCallback-D9XTGJn3.js";import"./SkeletonBar-D49d_fWs.js";import"./LoadingCell-BJv2-NGK.js";import"./ColumnConfigDialog-BUcZT3_2.js";import"./DraggableList-D4cXgHW3.js";import"./search-D5NN5dep.js";import"./Input-CI0ds8FO.js";import"./useControlled-CIItNp9c.js";import"./isEqual-DuvxfOEa.js";import"./isObject-DmYI6OMl.js";import"./Button-CWnsWqv5.js";import"./ActionButton-BVvCW9xD.js";import"./Checkbox-CzEGHWa7.js";import"./useValueChanged-BbD1lFs3.js";import"./CollapsiblePanel-Dpzjda5A.js";import"./MultiColumnSortDialog-BhFY8IBd.js";import"./MenuTrigger-8djQiS6H.js";import"./CompositeItem-C05Q1deB.js";import"./ToolbarRootContext-Dd8UM72f.js";import"./getDisabledMountTransitionStyles-B6WkCrv_.js";import"./getPseudoElementBounds-ZMPNX3ba.js";import"./chevron-down-Ddfl__cg.js";import"./index-BIC30L0-.js";import"./error-DTLowD9G.js";import"./BaseCbacBanner-q8yPTdnN.js";import"./makeExternalStore-BcDoXpGE.js";import"./Tooltip-C2epuRfV.js";import"./PopoverPopup-Da7vYhnj.js";import"./toNumber-CbxdLfR-.js";import"./tick-DA3-zK9O.js";import"./DropdownField-DO_St2lf.js";import"./withOsdkMetrics-BNlgOp0v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
