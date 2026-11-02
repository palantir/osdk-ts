import{j as r}from"./iframe-Dwa8kb-W.js";import{O as b}from"./object-table-And6XUVx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dqusni70.js";import{u as g}from"./useOsdkClient-CG6gK-bj.js";import"./preload-helper-D2z1vNrl.js";import"./Table-Gl2RZb_7.js";import"./index-DKKHqoz1.js";import"./Dialog-CuOJryCw.js";import"./cross-CIVjhjpG.js";import"./svgIconContainer-C5FqMMES.js";import"./useBaseUiId-Cogt136Y.js";import"./InternalBackdrop-CZlKxJsn.js";import"./composite-BMbUWovQ.js";import"./index-D80Qi5t9.js";import"./index-tbTC1PtM.js";import"./index-Bauiu-f9.js";import"./useEventCallback-CI2Yqilq.js";import"./SkeletonBar-D4uZBgUb.js";import"./LoadingCell-DbJ6kDhU.js";import"./ColumnConfigDialog-BbGOm_Sh.js";import"./DraggableList-BEm1rpxs.js";import"./search-DYLtDscA.js";import"./Input-CTkf375J.js";import"./useControlled-BPd0y_Yh.js";import"./Button-DiDAQlp3.js";import"./small-cross-zptgYJgA.js";import"./ActionButton-BdryvxR5.js";import"./Checkbox-H6Wex56o.js";import"./useValueChanged-c32Z9LOm.js";import"./CollapsiblePanel-MRw3GiAv.js";import"./MultiColumnSortDialog-D1_6Gu4U.js";import"./MenuTrigger-Ceo_giiW.js";import"./CompositeItem-CAP2WO9N.js";import"./ToolbarRootContext-CiNKODrc.js";import"./getDisabledMountTransitionStyles-D3sYmu31.js";import"./getPseudoElementBounds-DWWOgiGX.js";import"./chevron-down-DohnCY6J.js";import"./index-CONAeC1u.js";import"./error-BCJLeCtt.js";import"./BaseCbacBanner-BHHpqku0.js";import"./makeExternalStore-CbJLTcnS.js";import"./Tooltip-BCgSNK3L.js";import"./PopoverPopup-BlCcOTs1.js";import"./debounce-SXfA0_jR.js";import"./tick-BoSZnUAn.js";import"./DropdownField-C53Ua_IU.js";import"./isEqual-DoRXiZQF.js";import"./withOsdkMetrics-C1tOk5Js.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
