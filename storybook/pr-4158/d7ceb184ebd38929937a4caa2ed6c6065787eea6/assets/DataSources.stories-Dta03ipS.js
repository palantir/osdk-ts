import{j as r}from"./iframe-DVVKVAtA.js";import{O as b}from"./object-table-xWTmSs7V.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BD9ZptkU.js";import{u as g}from"./useOsdkClient-CYarTsyR.js";import"./preload-helper-CiYdp8rh.js";import"./Table-C78I-7LN.js";import"./index-B7XCjnpr.js";import"./Dialog-BDTkA2ep.js";import"./cross-CjD5OAho.js";import"./svgIconContainer-CP95Aflu.js";import"./useBaseUiId-INTXcr8e.js";import"./InternalBackdrop-j5nDH9EK.js";import"./composite-BRLZiHQF.js";import"./index-ClEpMZhJ.js";import"./index-CWl4XwMi.js";import"./index-CX83dS7O.js";import"./useEventCallback-DbYW2vCo.js";import"./SkeletonBar-FP5PV7dU.js";import"./LoadingCell-BhcjrHHe.js";import"./ColumnConfigDialog-DSL6FH2C.js";import"./DraggableList-EfHVIhPv.js";import"./search-DlCF-cVw.js";import"./Input-CmJfNxcc.js";import"./useControlled-D1zZrG1z.js";import"./Button-Ckc4gi75.js";import"./small-cross-DSgENzFy.js";import"./ActionButton-DacVQn36.js";import"./Checkbox-CKZucCnm.js";import"./useValueChanged-Den7cLID.js";import"./CollapsiblePanel-Bndv3s1q.js";import"./MultiColumnSortDialog-CfNZTqlg.js";import"./MenuTrigger-CdsAS-kY.js";import"./CompositeItem-D9SUAP6f.js";import"./ToolbarRootContext-C9Nw85K8.js";import"./getDisabledMountTransitionStyles-t3inJXqq.js";import"./getPseudoElementBounds-3KQzg8f9.js";import"./chevron-down-D2RihN-5.js";import"./index-U6QV7dK2.js";import"./error-DNT5rqeV.js";import"./BaseCbacBanner-DpJOKB-n.js";import"./makeExternalStore-BOpkq9BC.js";import"./Tooltip-Cbb54XuP.js";import"./PopoverPopup-Ca-inkaL.js";import"./debounce-D2AF5q98.js";import"./tick-Br1MB05S.js";import"./DropdownField-BqTmBzOD.js";import"./isEqual-BkpzX1vQ.js";import"./withOsdkMetrics-DnEy29Gp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
