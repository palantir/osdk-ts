import{j as r}from"./iframe-CRfkLV31.js";import{O as b}from"./object-table-Dq0vyH8t.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BCpalUUs.js";import{u as g}from"./useOsdkClient-BNC8fnuO.js";import"./preload-helper-YWkr71E4.js";import"./Table-C7gaOaO6.js";import"./index-DFmae8Ml.js";import"./Dialog-BE9C1eNO.js";import"./cross-2MhXpbG_.js";import"./svgIconContainer-Cv_5fobV.js";import"./useBaseUiId-CtBQzgSV.js";import"./InternalBackdrop-Hd16GtHK.js";import"./composite-Caz7Fjnj.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./index-D4xobDeS.js";import"./useEventCallback-BWqA8sXr.js";import"./SkeletonBar-h9eX593x.js";import"./LoadingCell-B9H0SnSs.js";import"./ColumnConfigDialog-DBWSmJ3l.js";import"./DraggableList-CjVbtBqm.js";import"./search-DgbssBMa.js";import"./Input-C9MxuagH.js";import"./useControlled-B56Cy6tA.js";import"./Button-COPRfQ9y.js";import"./small-cross-Bp20qFfY.js";import"./ActionButton-DCGdEOGa.js";import"./Checkbox-DM9Tz5iE.js";import"./useValueChanged-ojMWA7Lu.js";import"./CollapsiblePanel-BpxJ4S1Z.js";import"./MultiColumnSortDialog-BXhBUuFE.js";import"./MenuTrigger-DFdYgIUQ.js";import"./CompositeItem-BIX1YXND.js";import"./ToolbarRootContext-DesSIIiD.js";import"./getDisabledMountTransitionStyles-DL_MWW6U.js";import"./getPseudoElementBounds-CXdwiOru.js";import"./chevron-down-CQ908lz2.js";import"./index-BTr8Rb7H.js";import"./error-Bjl4tfNj.js";import"./BaseCbacBanner-wzZeSJV7.js";import"./makeExternalStore-DD66B2VR.js";import"./Tooltip-C3E-sj79.js";import"./PopoverPopup-qLtR5Yx9.js";import"./debounce-D-aRhyl3.js";import"./tick-DaS6FevP.js";import"./DropdownField-IPwkGfmB.js";import"./isEqual-BQ5yqGMv.js";import"./withOsdkMetrics-BXaEjRyq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
