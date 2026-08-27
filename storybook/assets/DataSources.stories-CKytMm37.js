import{j as r}from"./iframe-DtbzkEzs.js";import{O as b}from"./object-table-K5GTM802.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-6yfJ5hR0.js";import{u as g}from"./useOsdkClient-B9lCYv0I.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CL2kdIiG.js";import"./index-Cdl7LtxY.js";import"./Dialog-DXYzGD4Z.js";import"./cross-CkY96ER9.js";import"./svgIconContainer-B1X0MJ2V.js";import"./useBaseUiId-D9GVHSAs.js";import"./InternalBackdrop-uFAfuBcA.js";import"./composite-BCd6_VbD.js";import"./index-CAGi0i5x.js";import"./index-BuXzcc8v.js";import"./index-CQLgKLql.js";import"./useEventCallback-hJNWOq4v.js";import"./SkeletonBar-DurJhUjh.js";import"./LoadingCell-C0RXbiXJ.js";import"./ColumnConfigDialog-BDreHfee.js";import"./DraggableList-D2NHg1n7.js";import"./search-tpVGv-bq.js";import"./Input-CLvZmI34.js";import"./useControlled-D6veSbC8.js";import"./Button-wQYjXV7W.js";import"./small-cross-DcWkxxec.js";import"./ActionButton-DzPIBKy7.js";import"./Checkbox-_PeJjaQL.js";import"./useValueChanged-BzIGSXmS.js";import"./CollapsiblePanel-BQz4jwXH.js";import"./MultiColumnSortDialog-Z7WhS9Nf.js";import"./MenuTrigger-BLzPHP1n.js";import"./CompositeItem-CrrqQtnx.js";import"./ToolbarRootContext-jyIYtAkE.js";import"./getDisabledMountTransitionStyles-Bxj-okW1.js";import"./getPseudoElementBounds-BAZhnTL4.js";import"./chevron-down-BkbtkYMp.js";import"./index-CvbQmAxO.js";import"./error-DdI77Vqv.js";import"./BaseCbacBanner-Cd7_oS2n.js";import"./makeExternalStore-BZkRjIzK.js";import"./Tooltip-DvyWT7G6.js";import"./PopoverPopup-DXMZwimF.js";import"./debounce-DDPZphKn.js";import"./tick-COKHk2-s.js";import"./DropdownField-CFYYtDEI.js";import"./isEqual-FgnwAmNG.js";import"./withOsdkMetrics-Ad1iX_N9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
