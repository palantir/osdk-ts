import{j as r}from"./iframe-BqwIL6HW.js";import{O as b}from"./object-table-DMbi1Pvy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D06RQXMH.js";import{u as g}from"./useOsdkClient-D1PnuLrI.js";import"./preload-helper-C2aBQR0i.js";import"./Table-bpA5xtcE.js";import"./index-Cae-eAYf.js";import"./Dialog-DuCy0N3k.js";import"./cross-BT2F3WaS.js";import"./svgIconContainer-COFarK7B.js";import"./useBaseUiId-BrjtMHRo.js";import"./InternalBackdrop-CgHzff8o.js";import"./composite-ByfMjDoy.js";import"./index-B_ClGvof.js";import"./index-D80ub2hK.js";import"./index-CNDTMQ3q.js";import"./useEventCallback-DCC9o1g_.js";import"./SkeletonBar-Cjqtl2vi.js";import"./LoadingCell-q9zY1XLH.js";import"./ColumnConfigDialog-GrepuD1S.js";import"./DraggableList-aOzgfBps.js";import"./search-B46OZpsx.js";import"./Input-5dPcAYXy.js";import"./useControlled-Cn8olvRX.js";import"./Button-DY9YVtH3.js";import"./small-cross-CrN3j_m1.js";import"./ActionButton-D68kU6Ew.js";import"./Checkbox-OHzaDy7X.js";import"./useValueChanged-CQ0JMvBl.js";import"./CollapsiblePanel-C-zhrpZe.js";import"./MultiColumnSortDialog-J1D7KJHQ.js";import"./MenuTrigger-B6yCrZ6W.js";import"./CompositeItem-CbgN92a5.js";import"./ToolbarRootContext-DUNP2109.js";import"./getDisabledMountTransitionStyles-Og5LYC2n.js";import"./getPseudoElementBounds-BNlxAt2r.js";import"./chevron-down-S5K5GEQg.js";import"./index-BkbUCulf.js";import"./error-rHIfSgQZ.js";import"./BaseCbacBanner-CTgoipjB.js";import"./makeExternalStore-CWQKdOgP.js";import"./Tooltip-BHtmGDUn.js";import"./PopoverPopup-Mlz_yO9l.js";import"./debounce-CjNb2h4-.js";import"./tick-gHUj1QgS.js";import"./DropdownField-DPc-zral.js";import"./isEqual-qyY3U0dF.js";import"./withOsdkMetrics-BCVV0LnC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
