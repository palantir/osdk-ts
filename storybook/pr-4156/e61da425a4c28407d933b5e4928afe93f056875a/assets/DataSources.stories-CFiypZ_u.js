import{j as r}from"./iframe-BPW75i9n.js";import{O as b}from"./object-table-B0ScVXu7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-8WFrmNXl.js";import{u as g}from"./useOsdkClient-B9pJ8mJX.js";import"./preload-helper-a9fOHNzQ.js";import"./Table-DfjLiupT.js";import"./index-CvyyfkHF.js";import"./Dialog-mut58aOg.js";import"./cross-pajyLa9G.js";import"./svgIconContainer-Dn5PDua5.js";import"./useBaseUiId-BskbZTX7.js";import"./InternalBackdrop-DkH7cpcS.js";import"./composite-DOgbsbPD.js";import"./index-CZgk2iR4.js";import"./index-CpaVcYAE.js";import"./index-DaSb3oWd.js";import"./useEventCallback-DY5lK-td.js";import"./SkeletonBar-DDJ2BNxZ.js";import"./LoadingCell-Cv8pkMeY.js";import"./ColumnConfigDialog-BULFEt8z.js";import"./DraggableList-DMbfFhQZ.js";import"./search-CE2Gzn1t.js";import"./Input-BS3fT59v.js";import"./useControlled-DpyeG9JO.js";import"./Button-BtJ38CWb.js";import"./small-cross-CU1xwLoD.js";import"./ActionButton-DDSIjAJm.js";import"./Checkbox-BmUiXmJW.js";import"./useValueChanged-Cn93vlbX.js";import"./CollapsiblePanel-BNZ-hzTi.js";import"./MultiColumnSortDialog-D9vkQpxm.js";import"./MenuTrigger-n4-uf8sJ.js";import"./CompositeItem-CF5_8-vA.js";import"./ToolbarRootContext-DTxcajEt.js";import"./getDisabledMountTransitionStyles-78X03ELi.js";import"./getPseudoElementBounds-DTCBrtzp.js";import"./chevron-down-BSmURfPK.js";import"./index-DXJbf77F.js";import"./error-BRhZWJA2.js";import"./BaseCbacBanner-y1T2wwQ7.js";import"./makeExternalStore-DcLh29q-.js";import"./Tooltip-CvhMlFuZ.js";import"./PopoverPopup-DY0LcGcs.js";import"./debounce-DaEjldS8.js";import"./tick-B92vo0mZ.js";import"./DropdownField-Doe0OcpJ.js";import"./isEqual-CaE8yrSi.js";import"./withOsdkMetrics-CPmfqFkZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
