import{j as r}from"./iframe-CpvsyndC.js";import{O as b}from"./object-table-wDn8u1NQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-fcyDeA4c.js";import{u as g}from"./useOsdkClient-C7Ga7ftv.js";import"./preload-helper-v1ULc-zT.js";import"./Table-D8DVt9rQ.js";import"./index-OXZTet4E.js";import"./Dialog-B4LKyPNu.js";import"./cross-Bcfh6JZM.js";import"./svgIconContainer-Msyl1KBc.js";import"./useBaseUiId-CYqXXgOS.js";import"./InternalBackdrop-CRstaiGF.js";import"./composite-Bs9G8wyi.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./index-C9kvG9bI.js";import"./useEventCallback-TcvyV0P6.js";import"./SkeletonBar-CBAJCw1t.js";import"./LoadingCell-NGN7xI4A.js";import"./ColumnConfigDialog-DSpgaopW.js";import"./DraggableList-BYHWAua5.js";import"./search-CKGbca0G.js";import"./Input-D6DNjjz9.js";import"./useControlled-D-CxRUi2.js";import"./Button-CCew8i_i.js";import"./small-cross-D3J472u7.js";import"./ActionButton-BfYiSCcv.js";import"./Checkbox-k22hzlYz.js";import"./useValueChanged-CfxM7xWl.js";import"./CollapsiblePanel-CI8PgSve.js";import"./MultiColumnSortDialog-D6yyxhCn.js";import"./MenuTrigger-Dy0Pp6pd.js";import"./CompositeItem-DpS-WC5l.js";import"./ToolbarRootContext-Bn57AYug.js";import"./getDisabledMountTransitionStyles-CD-yuuJB.js";import"./getPseudoElementBounds-OuRRLSTT.js";import"./chevron-down-AhYvmllp.js";import"./index-4rhUuJvO.js";import"./error-o4jN_MzE.js";import"./BaseCbacBanner-Decf3pyE.js";import"./makeExternalStore-BjYOVJLR.js";import"./Tooltip-BS2jpkpK.js";import"./PopoverPopup-BfQ70eOn.js";import"./debounce-CzKUTwhW.js";import"./tick-B3tE0rZT.js";import"./DropdownField--U9fCIxx.js";import"./isEqual-qnNML_NE.js";import"./withOsdkMetrics-BrjOXXvf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
