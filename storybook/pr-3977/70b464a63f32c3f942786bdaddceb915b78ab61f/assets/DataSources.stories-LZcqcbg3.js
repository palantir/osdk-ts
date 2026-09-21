import{j as r}from"./iframe-Dnd58nRU.js";import{O as b}from"./object-table-36X5EB7b.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DutGQIyU.js";import{u as g}from"./useOsdkClient-DeyorYS6.js";import"./preload-helper-Bacdch3y.js";import"./Table-odfQbrMk.js";import"./index-hYlZ2w7K.js";import"./Dialog-BNIro01J.js";import"./cross-DMNj6xwh.js";import"./svgIconContainer-BHVYL7Dt.js";import"./useBaseUiId-QDvzqdbv.js";import"./InternalBackdrop-BaUHehEq.js";import"./composite-Cv9S1-0v.js";import"./index-DlC_w9JR.js";import"./index-DuJ2F_r3.js";import"./index-DtRvjs5i.js";import"./useEventCallback-BVDE2vxg.js";import"./SkeletonBar-Drw_WsxT.js";import"./LoadingCell-DBUN3W3b.js";import"./ColumnConfigDialog-Bj6EY7Df.js";import"./DraggableList-BuXt7WoE.js";import"./search-CbjmGrOZ.js";import"./Input-C8T687yb.js";import"./useControlled-DMuhh4MF.js";import"./Button-DKxF8-HR.js";import"./small-cross-BY_zS1NT.js";import"./ActionButton-T9I7pXx-.js";import"./Checkbox-FUVkSfEp.js";import"./useValueChanged-8c_54rdl.js";import"./CollapsiblePanel-GO-pTe1W.js";import"./MultiColumnSortDialog-D_N1NvYX.js";import"./MenuTrigger-CTZ1Irxn.js";import"./CompositeItem-CHl5HG0C.js";import"./ToolbarRootContext-DfzKIhjA.js";import"./getDisabledMountTransitionStyles-Bh1xaRIU.js";import"./getPseudoElementBounds-In6m9mGL.js";import"./chevron-down-BXQTBdLk.js";import"./index-DIWs-l-i.js";import"./error-BmtsW4Hj.js";import"./BaseCbacBanner-DaEeqfC1.js";import"./makeExternalStore-CZWRqldg.js";import"./Tooltip-Cg9LbpYA.js";import"./PopoverPopup-DEFTS9RR.js";import"./debounce-Dw-OFY0_.js";import"./tick-Cx8bHHej.js";import"./DropdownField-BGwjtvIi.js";import"./isEqual-CVAqa5cj.js";import"./withOsdkMetrics-BOeNno_q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
