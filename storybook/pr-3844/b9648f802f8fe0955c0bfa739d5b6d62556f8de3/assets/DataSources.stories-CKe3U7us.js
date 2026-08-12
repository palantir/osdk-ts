import{j as r}from"./iframe-DJNQVBhP.js";import{O as b}from"./object-table-B9t8qM78.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CToSzW8j.js";import{u as g}from"./useOsdkClient-2kF2kDK1.js";import"./preload-helper-Dd3_dQYh.js";import"./Table-Dx6f_VuV.js";import"./index-CphRLvVE.js";import"./Dialog-B9ctGsOx.js";import"./cross-DsRxB_p3.js";import"./svgIconContainer-DCiAh43S.js";import"./useBaseUiId-Cz2X2F5p.js";import"./InternalBackdrop-BZQ8c9pm.js";import"./composite-Ct6qnndE.js";import"./index-CmyN3uxX.js";import"./index-a7advLwQ.js";import"./index-D4qLI3jW.js";import"./useEventCallback-BM4mhydT.js";import"./SkeletonBar-DQOnWFIQ.js";import"./LoadingCell--U8WogEj.js";import"./ColumnConfigDialog-DMIwDHBp.js";import"./DraggableList-_Q-j7IUZ.js";import"./search-C_y30h_d.js";import"./Input-FTUus8ay.js";import"./useControlled-BkxsgPSI.js";import"./isEqual-ByhWP8Lo.js";import"./isObject-BhdOJrex.js";import"./Button-AHG0YTUa.js";import"./ActionButton-1kHfimgg.js";import"./Checkbox-jo06geF9.js";import"./useValueChanged-DYk1G5aa.js";import"./CollapsiblePanel-DPgiaCtq.js";import"./MultiColumnSortDialog-Dn3bXmK_.js";import"./MenuTrigger-D6_84Az4.js";import"./CompositeItem-BYt7z6Mp.js";import"./ToolbarRootContext-80wFuusO.js";import"./getDisabledMountTransitionStyles-DmO6f7A1.js";import"./getPseudoElementBounds-BXqYkt3j.js";import"./chevron-down-Cy7vDLtZ.js";import"./index-hfdoxJDN.js";import"./error-CeYxwre0.js";import"./BaseCbacBanner-CbOoO5AE.js";import"./makeExternalStore-DnBSFN8S.js";import"./Tooltip-C7rbNABY.js";import"./PopoverPopup-D7FpibGO.js";import"./toNumber-BRyyrH-m.js";import"./tick-D908gNrJ.js";import"./DropdownField-Drk0XneQ.js";import"./withOsdkMetrics-zXitcxEN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
