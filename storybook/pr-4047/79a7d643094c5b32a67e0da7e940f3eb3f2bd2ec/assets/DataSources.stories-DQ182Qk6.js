import{j as r}from"./iframe-NBWgt9Kz.js";import{O as b}from"./object-table-C3ybEDQQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BIT2QMEH.js";import{u as g}from"./useOsdkClient-4hMfsXGF.js";import"./preload-helper-dD2tealv.js";import"./Table-BWGAnIn8.js";import"./index-CvVwqIuN.js";import"./Dialog-DjV469Rf.js";import"./cross-DT-CTOSO.js";import"./svgIconContainer-ClcvIiJ_.js";import"./useBaseUiId-CQ82DsVx.js";import"./InternalBackdrop-C_OBf41a.js";import"./composite-fJ5Lq9kI.js";import"./index-zqSU5Gel.js";import"./index-CGp-CZFX.js";import"./index-4CUL2nMU.js";import"./useEventCallback-C2WEzDGK.js";import"./SkeletonBar-CSguwWtT.js";import"./LoadingCell-BOqjOmxe.js";import"./ColumnConfigDialog-DlaGziiJ.js";import"./DraggableList-DkXeeuCx.js";import"./search-DE3aPm_j.js";import"./Input-CslBGOUO.js";import"./useControlled-CzU7BR2U.js";import"./Button-BFGOLVaf.js";import"./small-cross-DNAO4fiY.js";import"./ActionButton-CoxL5yHI.js";import"./Checkbox-J2H29pF_.js";import"./useValueChanged-dmynfG-H.js";import"./CollapsiblePanel-UmPQakJ4.js";import"./MultiColumnSortDialog-DsVf9VY-.js";import"./MenuTrigger-CHK6t9Th.js";import"./CompositeItem-C9UmmHfT.js";import"./ToolbarRootContext-Ds0fuH8S.js";import"./getDisabledMountTransitionStyles-CFAUpb7c.js";import"./getPseudoElementBounds-Ce9dJaFF.js";import"./chevron-down-BQb3Bdcv.js";import"./index-Cog39q-i.js";import"./error-EEVYrIXI.js";import"./BaseCbacBanner-C-7olJ7B.js";import"./makeExternalStore-Db1JM_b8.js";import"./Tooltip-DcFVb-7H.js";import"./PopoverPopup-C6XCNR8l.js";import"./debounce-Daxc9dxM.js";import"./tick-DEzFYdsE.js";import"./DropdownField-r_qJh2io.js";import"./isEqual-XEm0HNXL.js";import"./withOsdkMetrics-P_2UpnBY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
