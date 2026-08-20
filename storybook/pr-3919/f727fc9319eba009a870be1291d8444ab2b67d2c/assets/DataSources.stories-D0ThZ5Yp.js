import{j as r}from"./iframe-h16HHsM3.js";import{O as b}from"./object-table-xqURJh5c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6WG-mc8.js";import{u as g}from"./useOsdkClient-XH_I9KtB.js";import"./preload-helper-DaEiocuo.js";import"./Table-DfRyO5iW.js";import"./index-CrB-SZ6W.js";import"./Dialog-Cn9Xude-.js";import"./cross-C6l_8oJj.js";import"./svgIconContainer-2LoSh7EW.js";import"./useBaseUiId-DtIpLIKv.js";import"./InternalBackdrop-CZNkgGhI.js";import"./composite-BwI4rJIn.js";import"./index-CipRFOUY.js";import"./index-nhGpddHL.js";import"./index-tn1N1V8Y.js";import"./useEventCallback-BaRk7d5C.js";import"./SkeletonBar-CfkyuI7W.js";import"./LoadingCell-BjpZOFne.js";import"./ColumnConfigDialog-DKcGC0Ez.js";import"./DraggableList-C4-NVipL.js";import"./search-CZeSsUn4.js";import"./Input-ChQNdq7z.js";import"./useControlled-D3_Mgr2o.js";import"./Button-CjFV-Dce.js";import"./small-cross-BxYzY9qu.js";import"./ActionButton-DXWSGFwc.js";import"./Checkbox-D_ZBnArb.js";import"./useValueChanged-Cb7pRHYy.js";import"./CollapsiblePanel-NLrvE2ll.js";import"./MultiColumnSortDialog-CuZO7D6b.js";import"./MenuTrigger-Bo1EWOk3.js";import"./CompositeItem-CVw8v154.js";import"./ToolbarRootContext-C6_QoO8-.js";import"./getDisabledMountTransitionStyles-BKP-kwJh.js";import"./getPseudoElementBounds-BzrJDmxL.js";import"./chevron-down-DBNf4w5W.js";import"./index-B6f5OL8k.js";import"./error-BNk7qWdS.js";import"./BaseCbacBanner-C3VxDk8H.js";import"./makeExternalStore-CTbMnN4W.js";import"./Tooltip-81xTGUJp.js";import"./PopoverPopup-lU-t8jRv.js";import"./debounce-DC5xO3vV.js";import"./tick-DTeb65_f.js";import"./DropdownField-yuiTwcT9.js";import"./isEqual-D_gZtz0S.js";import"./withOsdkMetrics-CxgNfRWd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
