import{j as r}from"./iframe-B9NaG1GB.js";import{O as b}from"./object-table-CFjdwvCD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hiyi_SgV.js";import{u as g}from"./useOsdkClient-B2RCpAbM.js";import"./preload-helper-udZSqlM2.js";import"./Table-sD7nNFbd.js";import"./index-yUq6Iven.js";import"./Dialog-Dh198Xyv.js";import"./cross-BaJlm1ee.js";import"./svgIconContainer-Ch9sOYGG.js";import"./useBaseUiId-DgxXXPsW.js";import"./InternalBackdrop-C2K99UQF.js";import"./composite-B_1l4wbr.js";import"./index-DqyKTsev.js";import"./index-oAe2VpPP.js";import"./index-C7m4ZQHb.js";import"./useEventCallback-C-nAfNT0.js";import"./SkeletonBar-B3WZD8B_.js";import"./LoadingCell-BBqhAMOp.js";import"./ColumnConfigDialog-BlX-RA7F.js";import"./DraggableList-Dl23X7WD.js";import"./search-C7EjfmAX.js";import"./Input-BjAUxC1s.js";import"./useControlled-CxdGo8Ww.js";import"./Button-D3MlS94Q.js";import"./small-cross-DoygMeI4.js";import"./ActionButton-D6kiLQVM.js";import"./Checkbox-D3SSwq1g.js";import"./useValueChanged-C_9cZZ-H.js";import"./CollapsiblePanel-CwGD0sZF.js";import"./MultiColumnSortDialog-BFYe3cLr.js";import"./MenuTrigger-yzH0xIvu.js";import"./CompositeItem-D9-3_2mb.js";import"./ToolbarRootContext-Dkc8a9C0.js";import"./getDisabledMountTransitionStyles-B67W8wHq.js";import"./getPseudoElementBounds-EQT2lv3A.js";import"./chevron-down-CsyXd9Xe.js";import"./index-bgsc7zUx.js";import"./error-BcUNHOKh.js";import"./BaseCbacBanner-WR0woElR.js";import"./makeExternalStore-Ct-9sVSe.js";import"./Tooltip-DuqyUHxp.js";import"./PopoverPopup-BR9ZiCCw.js";import"./debounce-CI4bJKTw.js";import"./tick-CPo9xZcx.js";import"./DropdownField-DqeXn4qa.js";import"./isEqual-prfPAvtl.js";import"./withOsdkMetrics-1M7RvxJT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
