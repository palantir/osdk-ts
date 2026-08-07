import{j as r}from"./iframe-DvSgORBk.js";import{O as b}from"./object-table-BcRX0Cmv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvYEC0H3.js";import{u as g}from"./useOsdkClient-CW496Pf_.js";import"./preload-helper-Bh3X1IZL.js";import"./Table-Dh5Aru4J.js";import"./index-ChyOFpSp.js";import"./Dialog-0XJ0SO-Q.js";import"./cross-BUEX2IGU.js";import"./svgIconContainer-QappFeg0.js";import"./useBaseUiId-DpoPO5jU.js";import"./InternalBackdrop-C3crqnkP.js";import"./composite-xFGPtc_t.js";import"./index-DbSXjThu.js";import"./index-BGZxf-A_.js";import"./index-BDSy7YKy.js";import"./useEventCallback-Crcc4UV6.js";import"./SkeletonBar-B_m0lEWJ.js";import"./LoadingCell-DSFLxCsS.js";import"./ColumnConfigDialog-C6yzQUu1.js";import"./DraggableList-B0hW1Fu2.js";import"./search-UUFCgVGZ.js";import"./Input-ax18PB6G.js";import"./useControlled-BB6bU1kQ.js";import"./isEqual-a-uCbEZ1.js";import"./isObject-BZyiDzdf.js";import"./Button-BvKdxg3d.js";import"./ActionButton-Dxaw-g98.js";import"./Checkbox-DxL4ZG_a.js";import"./useValueChanged-BRcf4k2H.js";import"./CollapsiblePanel-dNjLU5f9.js";import"./MultiColumnSortDialog-Cy4EqFDR.js";import"./MenuTrigger-B6XUcNMI.js";import"./CompositeItem-wIWKS7_g.js";import"./ToolbarRootContext-BskIkuOz.js";import"./getDisabledMountTransitionStyles-C56Ja1Aa.js";import"./getPseudoElementBounds-DqFjVP5N.js";import"./chevron-down-C5KpQgJ6.js";import"./index-De7UWdw5.js";import"./error-BqxbYOqB.js";import"./BaseCbacBanner-Ds0ufIuT.js";import"./makeExternalStore-Cpevbodx.js";import"./Tooltip-D6JbqPgC.js";import"./PopoverPopup-BlDf12vy.js";import"./toNumber-CF0CbTZU.js";import"./tick-BD1_G4-a.js";import"./DropdownField-By8_V6vH.js";import"./withOsdkMetrics-BKZ5oc9t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
