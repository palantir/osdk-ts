import{j as r}from"./iframe-5xumy2lC.js";import{O as b}from"./object-table-BoICPgng.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bd4MRcdu.js";import{u as g}from"./useOsdkClient-BvYrFbaa.js";import"./preload-helper-Dnp5J3ho.js";import"./Table-B-ZJ6RyM.js";import"./index-OGeocGA5.js";import"./Dialog-2O1iW9tl.js";import"./cross-Bww8SGey.js";import"./svgIconContainer-DKJstnRa.js";import"./useBaseUiId-CR8wF2TF.js";import"./InternalBackdrop-C2jSgbPR.js";import"./composite-Dn6Zzxac.js";import"./index-B83pdUrW.js";import"./index-11qWnEer.js";import"./index-HxIZUXDP.js";import"./useEventCallback-CxEaj7x3.js";import"./SkeletonBar-DBfsc1dV.js";import"./LoadingCell-BFn-JqZ5.js";import"./ColumnConfigDialog-C52LWu4a.js";import"./DraggableList-BnpaVKas.js";import"./search-CRyjUtCH.js";import"./Input-Cpl3LxFn.js";import"./useControlled-DMTvVf4P.js";import"./Button-DIwfO1Nk.js";import"./small-cross-CsEkOEx1.js";import"./ActionButton-DZ1xi4Ao.js";import"./Checkbox--1EfxJcT.js";import"./useValueChanged-CQXaTK7m.js";import"./CollapsiblePanel-B1WD2ZBX.js";import"./MultiColumnSortDialog-JTsYSu8n.js";import"./MenuTrigger-CSz-O7Ps.js";import"./CompositeItem-FF3KNmJW.js";import"./ToolbarRootContext-D1AghJYR.js";import"./getDisabledMountTransitionStyles-SCV6Vods.js";import"./getPseudoElementBounds-CPzGORpb.js";import"./chevron-down-De5_JPFZ.js";import"./index-BqDaJCNF.js";import"./error-Dp5nV5lf.js";import"./BaseCbacBanner-U1_86rYd.js";import"./makeExternalStore-BV9yhKos.js";import"./Tooltip-BH0oVEvo.js";import"./PopoverPopup-lyWlzaf2.js";import"./debounce-DZdiCLET.js";import"./tick-DnbT_4uE.js";import"./DropdownField-XtSPv3vQ.js";import"./isEqual-DAf5nCSq.js";import"./withOsdkMetrics-CN3Oviww.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
