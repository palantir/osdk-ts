import{j as r}from"./iframe-CoFJxwHv.js";import{O as b}from"./object-table-BqrQ0y8E.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxajDRp0.js";import{u as g}from"./useOsdkClient-u5ILwDJn.js";import"./preload-helper-D-SgnzBV.js";import"./Table-BYQbvbey.js";import"./index--Ea47wZq.js";import"./Dialog-WY18wqP5.js";import"./cross-OzyUyhBS.js";import"./svgIconContainer-DEFqmnfP.js";import"./useBaseUiId-2pTyOHN-.js";import"./InternalBackdrop-CW-JCB6u.js";import"./composite-D_cfAskA.js";import"./index-Cisz4sZL.js";import"./index-DB_u2R0T.js";import"./index-Bm20SrpM.js";import"./useEventCallback-S_u0-aCp.js";import"./SkeletonBar-qgco6YeA.js";import"./LoadingCell-CsadYx2G.js";import"./ColumnConfigDialog-Cul_FFgo.js";import"./DraggableList-BW_0kdA5.js";import"./search-XDurstN3.js";import"./Input-DKwzPwJ8.js";import"./useControlled-BYI1O7tr.js";import"./Button-2n8pstyv.js";import"./small-cross-CkY1R3ge.js";import"./ActionButton-NKKyQGHP.js";import"./Checkbox-Dt5HZSzU.js";import"./useValueChanged-Bzeit28k.js";import"./CollapsiblePanel-0TCT3zQ_.js";import"./MultiColumnSortDialog-B8a_YiXG.js";import"./MenuTrigger-CGyqBT_S.js";import"./CompositeItem-Ca1TKgPn.js";import"./ToolbarRootContext-wMltP8Ko.js";import"./getDisabledMountTransitionStyles-5g03uBQa.js";import"./getPseudoElementBounds-C6R4Oz02.js";import"./chevron-down-BlDOgSlD.js";import"./index-DqO9YIyX.js";import"./error-D5A6w5ju.js";import"./BaseCbacBanner-Dxfw8WWQ.js";import"./makeExternalStore-w2_wLIak.js";import"./Tooltip-U-nAk7Io.js";import"./PopoverPopup-B30sWIBx.js";import"./debounce-OWWmpWc0.js";import"./tick-BeCAXAuB.js";import"./DropdownField-CBHpKdZq.js";import"./isEqual-DVlAt4ne.js";import"./withOsdkMetrics-CWJx0Uh8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
