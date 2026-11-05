import{j as r}from"./iframe-BRIJTziU.js";import{O as b}from"./object-table-BnpwgFJ4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DiJmx3Yp.js";import{u as g}from"./useOsdkClient-Cymu9CBz.js";import"./preload-helper-C7wNDItT.js";import"./Table-BMKrg_bY.js";import"./index-A6JnTqM7.js";import"./Dialog-CB9ow6MV.js";import"./cross-DvI1_HyP.js";import"./svgIconContainer-CIdhA9rp.js";import"./useBaseUiId-BsprSJc0.js";import"./InternalBackdrop-ZzoKlD0h.js";import"./composite-C9avNQ9h.js";import"./index-D9UptnGB.js";import"./index-B8iBQzP0.js";import"./index-CvbNR6cC.js";import"./useEventCallback-DeOB15hi.js";import"./SkeletonBar-BP_l8aax.js";import"./LoadingCell-CZnPc23n.js";import"./ColumnConfigDialog-Be3M2Fo7.js";import"./DraggableList-BuQkq18_.js";import"./search-BB6i5fl7.js";import"./Input-Boj06qte.js";import"./useControlled-C4JFDSuR.js";import"./Button-Dh4qqTQa.js";import"./small-cross-CsMKepR3.js";import"./ActionButton-BicTWFSp.js";import"./Checkbox-BNKjZK3u.js";import"./useValueChanged-CtSiK7PN.js";import"./CollapsiblePanel-D_KuOsno.js";import"./MultiColumnSortDialog-DueHaRDC.js";import"./MenuTrigger-Cbm7cQAI.js";import"./CompositeItem-CJpL3T-F.js";import"./ToolbarRootContext-BQGWwMmx.js";import"./getDisabledMountTransitionStyles-D5TfhzFv.js";import"./getPseudoElementBounds-DSda8EI-.js";import"./chevron-down-DQOobcC7.js";import"./index-D3hbdvY7.js";import"./error-D4dPzE3W.js";import"./BaseCbacBanner-DxgoC11R.js";import"./makeExternalStore-TKjWQKGl.js";import"./Tooltip-CVqCP8mT.js";import"./PopoverPopup-DDFXARkA.js";import"./debounce-C4CbbiU1.js";import"./tick-B-d2xjTM.js";import"./DropdownField-CzDLyAqa.js";import"./isEqual-Q3A5K1_W.js";import"./withOsdkMetrics-CS23iZYx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
