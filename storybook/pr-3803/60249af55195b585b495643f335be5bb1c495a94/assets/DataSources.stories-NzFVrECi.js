import{j as r}from"./iframe-Cc07Bjnw.js";import{O as b}from"./object-table-bO_L6pgX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CXL_u-u7.js";import{u as g}from"./useOsdkClient-Ba173g9u.js";import"./preload-helper-BZQmHc-4.js";import"./Table-D8Z1d91J.js";import"./index-DZvQ_Jrq.js";import"./Dialog-Ch4noVue.js";import"./cross-DA_hofl4.js";import"./svgIconContainer-CbLY47mb.js";import"./useBaseUiId-BR18Ojap.js";import"./InternalBackdrop-CkBJ-Htn.js";import"./composite-COFnfRRQ.js";import"./index-DApNf0Yd.js";import"./index-CfAZ234r.js";import"./index-EeisRTmQ.js";import"./useEventCallback-DU7S4oup.js";import"./SkeletonBar-B0XmnfEv.js";import"./LoadingCell-B03AHMLX.js";import"./ColumnConfigDialog-BNDjiFEz.js";import"./DraggableList-BeET4Qyh.js";import"./search-Qxa58yqX.js";import"./Input-Csl4g1fd.js";import"./useControlled-CVe0Wn-E.js";import"./isEqual-C0Q9kVIS.js";import"./isObject-Cz0XDPCN.js";import"./Button-DZ_IvYpL.js";import"./ActionButton-Dfx4NvI-.js";import"./Checkbox-NQv01Fdb.js";import"./useValueChanged-DN12ZBEx.js";import"./CollapsiblePanel-C5iMKM2r.js";import"./MultiColumnSortDialog-BeEbD0Qx.js";import"./MenuTrigger-B8nvmUF3.js";import"./CompositeItem-BxvAq6Sc.js";import"./ToolbarRootContext-BDV8ojGj.js";import"./getDisabledMountTransitionStyles-D66xx4r3.js";import"./getPseudoElementBounds-tq-1zKzz.js";import"./chevron-down-DB7BwQt8.js";import"./index-DC5x3408.js";import"./error-B-dp0ddC.js";import"./BaseCbacBanner-BDt8_o4X.js";import"./makeExternalStore-BOX2v8-h.js";import"./Tooltip-D4GSJRxv.js";import"./PopoverPopup-CcqtMrxa.js";import"./toNumber-CDE7M8WD.js";import"./tick-C0GbdlQD.js";import"./DropdownField-BMbh_wYZ.js";import"./withOsdkMetrics-CiZgMogi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
