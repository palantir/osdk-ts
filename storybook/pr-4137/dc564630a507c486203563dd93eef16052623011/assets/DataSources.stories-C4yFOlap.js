import{j as r}from"./iframe-HPloXe9j.js";import{O as b}from"./object-table-Dw0TlSIB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D43P7GM-.js";import{u as g}from"./useOsdkClient-BZavVCL8.js";import"./preload-helper-DScJgkz5.js";import"./Table-SpiJn5fd.js";import"./index-CYy51o6d.js";import"./Dialog-xwTFg4xc.js";import"./cross-9AkiFjIe.js";import"./svgIconContainer-DgH7XjE0.js";import"./useBaseUiId-CuSCou4B.js";import"./InternalBackdrop-CuN7aJKc.js";import"./composite-BKkRB1Ja.js";import"./index-CZ-MIMEA.js";import"./index-CLiETF6g.js";import"./index-BtQkTWRV.js";import"./useEventCallback-D7m3Yiiv.js";import"./SkeletonBar-BmlxW_EU.js";import"./LoadingCell-DYdNzb3Q.js";import"./ColumnConfigDialog-CW49yF_5.js";import"./DraggableList-HqZPos2A.js";import"./search-BtGEDCk0.js";import"./Input-BxTgEocG.js";import"./useControlled-8YOYv55u.js";import"./Button-6Q_hxnNq.js";import"./small-cross-Ccl3EiTU.js";import"./ActionButton-CzZ5C-jr.js";import"./Checkbox-Gx-UAF5W.js";import"./useValueChanged-D8dkL44z.js";import"./CollapsiblePanel-DgpfvzE6.js";import"./MultiColumnSortDialog-Ddk1Lns6.js";import"./MenuTrigger-BcanciK8.js";import"./CompositeItem-BeYsw0Rf.js";import"./ToolbarRootContext-C0mmD1Sp.js";import"./getDisabledMountTransitionStyles-I0fd0fDa.js";import"./getPseudoElementBounds-BzI7Zs8z.js";import"./chevron-down-BfaqTxAc.js";import"./index-WJ-o1DZ0.js";import"./error-CtWAgql8.js";import"./BaseCbacBanner-3MoHAqX4.js";import"./makeExternalStore-B18oZ143.js";import"./Tooltip-CXYD7mSj.js";import"./PopoverPopup-zlChUm0U.js";import"./debounce-3RrYA89K.js";import"./tick-COIkFqpx.js";import"./DropdownField-j8LPkCHX.js";import"./isEqual-C3KsvxK8.js";import"./withOsdkMetrics-C1kb3R25.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
