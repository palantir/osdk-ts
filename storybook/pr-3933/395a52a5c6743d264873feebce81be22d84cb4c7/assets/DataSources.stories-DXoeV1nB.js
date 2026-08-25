import{j as r}from"./iframe-rlv3mUdt.js";import{O as b}from"./object-table-COoiKLv3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAdz_YdZ.js";import{u as g}from"./useOsdkClient-2HxN2tp2.js";import"./preload-helper-C8E9pHov.js";import"./Table-C05mHoNZ.js";import"./index-BwKgkhoJ.js";import"./Dialog-B2IC515a.js";import"./cross-cAPyHYLw.js";import"./svgIconContainer-BR20IK9W.js";import"./useBaseUiId-Dp7FKVfu.js";import"./InternalBackdrop-BVk7F7mw.js";import"./composite-cntM3euM.js";import"./index-DJ9-JExy.js";import"./index-BUfObnx_.js";import"./index-D6BXegGx.js";import"./useEventCallback-BFMrrB-m.js";import"./SkeletonBar-CBQRqDjl.js";import"./LoadingCell-vM5EQXcf.js";import"./ColumnConfigDialog-BKrlOu4J.js";import"./DraggableList-DaCSV-rj.js";import"./search-B6WH-E2J.js";import"./Input-DPtkjq4w.js";import"./useControlled-CsmgIjgz.js";import"./Button-DOX6KGuK.js";import"./small-cross-DtUNssPx.js";import"./ActionButton-fANDhFNh.js";import"./Checkbox-D4z1W9S5.js";import"./useValueChanged-BVFeiYrm.js";import"./CollapsiblePanel-DvRmCPuz.js";import"./MultiColumnSortDialog-DJAQcPH0.js";import"./MenuTrigger-zjnZIaoC.js";import"./CompositeItem-BwBfuGb4.js";import"./ToolbarRootContext-Dj6pA1B5.js";import"./getDisabledMountTransitionStyles-CKZngXvA.js";import"./getPseudoElementBounds-DBZ1MDoi.js";import"./chevron-down-ByAn-ifv.js";import"./index-Bj0ChkFd.js";import"./error-D3VLZxq_.js";import"./BaseCbacBanner-Cy5SHU8y.js";import"./makeExternalStore-B2qXKEyL.js";import"./Tooltip-DF5SsG7G.js";import"./PopoverPopup-CZ1Ki-Oj.js";import"./debounce-H1Lzwb9c.js";import"./tick-D7E73dGL.js";import"./DropdownField-pYTN63rb.js";import"./isEqual-ua0Q190L.js";import"./withOsdkMetrics-Bay5Qfh_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
