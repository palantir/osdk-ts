import{j as r}from"./iframe-S84xAba9.js";import{O as b}from"./object-table-D7dqDn5I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DG9ygSi3.js";import{u as g}from"./useOsdkClient-CZfvkz-K.js";import"./preload-helper-DJNCezcd.js";import"./Table-BLwbniGI.js";import"./index-8j0T478k.js";import"./Dialog-H7IS3eOk.js";import"./cross-D931JdRi.js";import"./svgIconContainer-BlYa3pTV.js";import"./useBaseUiId-YpbERV6F.js";import"./InternalBackdrop-BIkzYyEP.js";import"./composite-BPZV-Yhr.js";import"./index-DUM3Z7TI.js";import"./index-DafAAkcf.js";import"./index-Wol--mzF.js";import"./useEventCallback-CvUbQ2M2.js";import"./SkeletonBar-T2RkLi5-.js";import"./LoadingCell-CQbw9zdB.js";import"./ColumnConfigDialog-DpxbPXfs.js";import"./DraggableList-CgdQnFi4.js";import"./search-DhFsI6Pf.js";import"./Input-Cif3XMX5.js";import"./useControlled-BfYdfQhZ.js";import"./Button-BASBXCLw.js";import"./small-cross-ClUWXpO2.js";import"./ActionButton-CWjWbtqS.js";import"./Checkbox-DevWlODG.js";import"./useValueChanged-Dr5883-C.js";import"./CollapsiblePanel-CxmwbUpy.js";import"./MultiColumnSortDialog-DVuF13K8.js";import"./MenuTrigger-DCnDZv66.js";import"./CompositeItem-D1oKuNmK.js";import"./ToolbarRootContext-Dx--qbfa.js";import"./getDisabledMountTransitionStyles-BSS3-xui.js";import"./getPseudoElementBounds-B4-e1zAI.js";import"./chevron-down-B21hEOy9.js";import"./index-7bPdWCKR.js";import"./error-CTVY3lwb.js";import"./BaseCbacBanner-CfO_PDbj.js";import"./makeExternalStore-CaEUyt0v.js";import"./Tooltip-C6MYNiME.js";import"./PopoverPopup-DT5g8jR4.js";import"./debounce-CR__6nn4.js";import"./tick-CGcvAYvI.js";import"./DropdownField-BpqWh6Kr.js";import"./isEqual-iyEPvtnE.js";import"./withOsdkMetrics-3ZtUgCqV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
