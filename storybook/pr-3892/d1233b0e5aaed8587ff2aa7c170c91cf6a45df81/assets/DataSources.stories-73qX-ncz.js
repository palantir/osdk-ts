import{j as r}from"./iframe-GWtObrnm.js";import{O as b}from"./object-table--6l4vffZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_R3nHTE.js";import{u as g}from"./useOsdkClient-B2mvuLv0.js";import"./preload-helper-BWY60TXQ.js";import"./Table-BQ1zpx0E.js";import"./index-BwNH4hN0.js";import"./Dialog-CI0TQ-8F.js";import"./cross-_OeeVUkl.js";import"./svgIconContainer-C5I--NmN.js";import"./useBaseUiId-B5mFb3Gq.js";import"./InternalBackdrop-BqoliDVa.js";import"./composite-BX2E-JQE.js";import"./index-7rbFwBSi.js";import"./index-srDgigbb.js";import"./index-C9ELI341.js";import"./useEventCallback-DvN5zfj5.js";import"./SkeletonBar-Cqq0MjJu.js";import"./LoadingCell-DMnrFECH.js";import"./ColumnConfigDialog-lED6sxnh.js";import"./DraggableList-Bkow3cL7.js";import"./search-DFtnP2n3.js";import"./Input-DbTcmmlC.js";import"./useControlled-Db3BVUkn.js";import"./Button-D7JIFKo-.js";import"./small-cross-FyI5Yi6m.js";import"./ActionButton-D7UP0pVF.js";import"./Checkbox-Dd_lHm_2.js";import"./useValueChanged-DgPToUuL.js";import"./CollapsiblePanel-D9mWGcC-.js";import"./MultiColumnSortDialog-JawDtGLn.js";import"./MenuTrigger-BP8DmnEO.js";import"./CompositeItem-BEBiorcp.js";import"./ToolbarRootContext-BQ6mFAZw.js";import"./getDisabledMountTransitionStyles-CNOyEiwp.js";import"./getPseudoElementBounds-CgZ6AS5C.js";import"./chevron-down-RsutKJrE.js";import"./index-CTogg8xs.js";import"./error-DkSINVNd.js";import"./BaseCbacBanner-CCMLdPZ7.js";import"./makeExternalStore-DZ29l_q8.js";import"./Tooltip-CIXs1ydu.js";import"./PopoverPopup-CovUEKXy.js";import"./debounce-BWOeh154.js";import"./tick-DttPsE9p.js";import"./DropdownField-BqSWZGsk.js";import"./isEqual-DI_6kQdr.js";import"./withOsdkMetrics-BdpD7DOf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
