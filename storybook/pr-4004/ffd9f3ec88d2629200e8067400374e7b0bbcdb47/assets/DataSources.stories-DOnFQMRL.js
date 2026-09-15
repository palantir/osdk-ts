import{j as r}from"./iframe-Ds1oJ6aB.js";import{O as b}from"./object-table-DxGk5C4S.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CvMyREqF.js";import{u as g}from"./useOsdkClient-Dx_YLbK3.js";import"./preload-helper-BuU6EXxB.js";import"./Table-B9BzzCYb.js";import"./index-DV-RsCBD.js";import"./Dialog-CtyGPeOn.js";import"./cross-GX9DzQOW.js";import"./svgIconContainer-DhoJ1wKf.js";import"./useBaseUiId-SveB9MiJ.js";import"./InternalBackdrop-dHXXhMSx.js";import"./composite-B685C7pj.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./index-DjBs4z29.js";import"./useEventCallback-BIuUY0VI.js";import"./SkeletonBar-CgiMkEwi.js";import"./LoadingCell-Cu7oZNVj.js";import"./ColumnConfigDialog-qhy8ZuqX.js";import"./DraggableList-CC_UvAAX.js";import"./search-C9RUzGD8.js";import"./Input-DCigff7H.js";import"./useControlled-Bb3j5PDR.js";import"./Button-DEZznyRx.js";import"./small-cross-OSqOWbbs.js";import"./ActionButton-y1-kR7HQ.js";import"./Checkbox-04oMgZo9.js";import"./useValueChanged-DiKNib74.js";import"./CollapsiblePanel-DJPu7lg7.js";import"./MultiColumnSortDialog-BLl7b0AQ.js";import"./MenuTrigger-SsRAk4WD.js";import"./CompositeItem-DRYBX4C7.js";import"./ToolbarRootContext-D5DhHef8.js";import"./getDisabledMountTransitionStyles-M6DMXfnH.js";import"./getPseudoElementBounds-BevdPYrx.js";import"./chevron-down-BTaheqba.js";import"./index-DBvZrrqp.js";import"./error-Cpa8ixp-.js";import"./BaseCbacBanner-D37f3xf5.js";import"./makeExternalStore-Bpmh1YoV.js";import"./Tooltip-CiCS2vte.js";import"./PopoverPopup-BW8M19fp.js";import"./debounce-CaEJ8DE5.js";import"./tick-4HEv4TzV.js";import"./DropdownField--RBhVTBF.js";import"./isEqual-B6VYb55l.js";import"./withOsdkMetrics-BWv1tGJm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
