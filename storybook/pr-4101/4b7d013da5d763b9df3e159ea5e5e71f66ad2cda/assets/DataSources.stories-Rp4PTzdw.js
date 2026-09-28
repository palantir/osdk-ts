import{j as r}from"./iframe-CxXsZYaL.js";import{O as b}from"./object-table-zRXuZuYV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BC2XMko3.js";import{u as g}from"./useOsdkClient-B9HSbxHr.js";import"./preload-helper-Dt2THrkM.js";import"./Table-CE4R3ZP_.js";import"./index-DPiocoAy.js";import"./Dialog-43gVh9Z0.js";import"./cross-DyjS402Z.js";import"./svgIconContainer-B1eyjN3k.js";import"./useBaseUiId-Bv8MvEl3.js";import"./InternalBackdrop-BI6mC2qq.js";import"./composite-DTKgIMa8.js";import"./index-Cegb6wp-.js";import"./index-BIZErmx-.js";import"./index-Cw4rMGGb.js";import"./useEventCallback-D6R4tDnw.js";import"./SkeletonBar-DLXC3u_6.js";import"./LoadingCell-Dhr99XtA.js";import"./ColumnConfigDialog-BP9G56Gj.js";import"./DraggableList-C7BzcTVt.js";import"./search-DvGGeQU1.js";import"./Input-CWxuf688.js";import"./useControlled-CCbrWuYr.js";import"./Button-By61fxAS.js";import"./small-cross-DNpUAcLG.js";import"./ActionButton-IBcvUrIn.js";import"./Checkbox-AcH8WHBX.js";import"./useValueChanged-CHP3biT2.js";import"./CollapsiblePanel-DMmR_d8n.js";import"./MultiColumnSortDialog-D0OQTQVu.js";import"./MenuTrigger-CiXpMiQW.js";import"./CompositeItem-ltfNlpKQ.js";import"./ToolbarRootContext-DwwnRCz6.js";import"./getDisabledMountTransitionStyles-BR22wxCp.js";import"./getPseudoElementBounds-DpN1Og-q.js";import"./chevron-down-LKr_hJQt.js";import"./index-CvA8CM7Y.js";import"./error-D5twijSF.js";import"./BaseCbacBanner-BTgCkBtd.js";import"./makeExternalStore-C8dW_5p-.js";import"./Tooltip-64p6zcvU.js";import"./PopoverPopup-u7OHtDv1.js";import"./debounce-C7Sw8tZF.js";import"./tick-CMFb73FH.js";import"./DropdownField-BIToETMe.js";import"./isEqual-D8N_VdCJ.js";import"./withOsdkMetrics-BmsRu25F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
