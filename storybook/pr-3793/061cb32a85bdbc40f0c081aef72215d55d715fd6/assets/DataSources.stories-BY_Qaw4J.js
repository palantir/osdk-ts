import{j as r}from"./iframe-BNkEWG9a.js";import{O as b}from"./object-table-Qs3gwRh7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BhpLQ7--.js";import{u as g}from"./useOsdkClient-BRiSPEVp.js";import"./preload-helper-COpsNFvL.js";import"./Table-BRo60hrW.js";import"./index-72yVnFn9.js";import"./Dialog-CEGWLd6J.js";import"./cross-DtXpSNop.js";import"./svgIconContainer-CP_7SCsh.js";import"./useBaseUiId-C2SIyrP4.js";import"./InternalBackdrop-DL1FTzrx.js";import"./composite-av1GhyDs.js";import"./index-Cggvd78O.js";import"./index-DEfY7O8R.js";import"./index-CEgJZuuG.js";import"./useEventCallback-D1Rxj0yz.js";import"./SkeletonBar-D-eSS5Nh.js";import"./LoadingCell-DQeoykhl.js";import"./ColumnConfigDialog-BWqRTolx.js";import"./DraggableList-xtF1Hp-l.js";import"./search-C5-ZQPA-.js";import"./Input-DWIMVPa2.js";import"./useControlled-DvYSYpF5.js";import"./isEqual-DrE4eLTE.js";import"./isObject-BwMKN0BU.js";import"./Button-DgpDNDJ9.js";import"./ActionButton-DIAFsp8c.js";import"./Checkbox-CWbEwXRu.js";import"./useValueChanged-NeM28dcY.js";import"./CollapsiblePanel-B0ffwjNO.js";import"./MultiColumnSortDialog-CqnbLiDB.js";import"./MenuTrigger-BhbSLNHY.js";import"./CompositeItem-DeRlHXsU.js";import"./ToolbarRootContext-BBdWlzqo.js";import"./getDisabledMountTransitionStyles-DN_b7Zsd.js";import"./getPseudoElementBounds-BMm8O3oC.js";import"./chevron-down-7Toxqoqn.js";import"./index-wuM_JjP7.js";import"./error-DiVMU7Ev.js";import"./BaseCbacBanner-z6rnorq_.js";import"./makeExternalStore-ByHargtT.js";import"./Tooltip-DYtmttXC.js";import"./PopoverPopup-qYbyIH6Y.js";import"./toNumber-ClNDy-wj.js";import"./tick-BoaWBw1L.js";import"./DropdownField-iGQ191qz.js";import"./withOsdkMetrics-CR8laU5K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
