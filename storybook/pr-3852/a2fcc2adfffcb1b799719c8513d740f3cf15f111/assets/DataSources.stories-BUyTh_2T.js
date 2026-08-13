import{j as r}from"./iframe-CR0jsk8T.js";import{O as b}from"./object-table-CbDQCRdf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_6XH8d4.js";import{u as g}from"./useOsdkClient-DnL3l3f_.js";import"./preload-helper-CLM-aN-8.js";import"./Table-D-GB8w9F.js";import"./index-BXDmefey.js";import"./Dialog-BDj_Pu-s.js";import"./cross-C_YRmPKj.js";import"./svgIconContainer-H7nQkb6n.js";import"./useBaseUiId-C44LpUZ_.js";import"./InternalBackdrop-DfOIlirh.js";import"./composite-NkcHW8Ts.js";import"./index-AF0HW_jU.js";import"./index-CviXfYOE.js";import"./index-C0xP1YRP.js";import"./useEventCallback-Dpm5I8hS.js";import"./SkeletonBar-COzcyyjY.js";import"./LoadingCell-2p8cREMA.js";import"./ColumnConfigDialog-C0J78ZfR.js";import"./DraggableList-DB4oE_ex.js";import"./search-CBxagsiD.js";import"./Input-BUfDw5Gv.js";import"./useControlled-BYmOvdgF.js";import"./Button-Cwqeh57g.js";import"./small-cross-87BZIShO.js";import"./ActionButton-D1872Zz6.js";import"./Checkbox-Dz3160i5.js";import"./useValueChanged-C26c-Dvh.js";import"./CollapsiblePanel-CsWiyBT2.js";import"./MultiColumnSortDialog-DPvLlybu.js";import"./MenuTrigger-CDrcjfD_.js";import"./CompositeItem-CYqCpyh6.js";import"./ToolbarRootContext-Dw5skxCs.js";import"./getDisabledMountTransitionStyles-BJl_BOkB.js";import"./getPseudoElementBounds-DYw0j0iR.js";import"./chevron-down-CgS2uuYi.js";import"./index-DeB2XC52.js";import"./error-Bqwx5_58.js";import"./BaseCbacBanner-ZqFqIYYB.js";import"./makeExternalStore-DmONQ8uz.js";import"./Tooltip-BzblDmOx.js";import"./PopoverPopup-DcPO1pup.js";import"./debounce-DglcdfXI.js";import"./tick-D2yfy9E4.js";import"./DropdownField-CZUcN7QE.js";import"./isEqual-DEwKDC01.js";import"./withOsdkMetrics-GDpEsgqr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
