import{j as r}from"./iframe-B9FGe5wd.js";import{O as b}from"./object-table-D7wbIGVv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BL038Lyu.js";import{u as g}from"./useOsdkClient-usrWCKIw.js";import"./preload-helper-BIve45PS.js";import"./Table-DyFAXF09.js";import"./index-B6Sv1VZS.js";import"./Dialog-DUZOcpTK.js";import"./cross-D3t_et5l.js";import"./svgIconContainer-CaF_wsik.js";import"./useBaseUiId-DfSj_XIi.js";import"./InternalBackdrop--zuPxYtX.js";import"./composite-DHxnLj2Y.js";import"./index-BkBeEw9r.js";import"./index-DrrLP325.js";import"./index-Dxjh7rRf.js";import"./useEventCallback-688mizLg.js";import"./SkeletonBar-D8XdUgSi.js";import"./LoadingCell-DBYmKom2.js";import"./ColumnConfigDialog-B1pRd-4k.js";import"./DraggableList-CZJp3ZhS.js";import"./search-oVgFpE2T.js";import"./Input-Dxr70xfD.js";import"./useControlled-c-18TxdJ.js";import"./Button-D3RbxwJA.js";import"./small-cross-DRTTYj7_.js";import"./ActionButton-CL2cla4Q.js";import"./Checkbox-1J4ATAQU.js";import"./useValueChanged-CBKkH70d.js";import"./CollapsiblePanel-mSdRRs77.js";import"./MultiColumnSortDialog-B9WlQiaA.js";import"./MenuTrigger-DLPyf9Xp.js";import"./CompositeItem-D_joThID.js";import"./ToolbarRootContext-ClYwCpcv.js";import"./getDisabledMountTransitionStyles-CRl0TcRY.js";import"./getPseudoElementBounds-DuNPvi2X.js";import"./chevron-down-BJC3N-Xj.js";import"./index-BT_l51Su.js";import"./error-DJQGwxmj.js";import"./BaseCbacBanner-CG6vFuER.js";import"./makeExternalStore-hUZ9hqeg.js";import"./Tooltip-CpDuLI7V.js";import"./PopoverPopup-C_VmHiZ7.js";import"./debounce-m12bCzvP.js";import"./tick-B7eZKbT-.js";import"./DropdownField-COR0BXwM.js";import"./isEqual-D-W0erT-.js";import"./withOsdkMetrics-Bxy0f18Y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
