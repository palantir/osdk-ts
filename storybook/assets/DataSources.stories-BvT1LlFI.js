import{j as r}from"./iframe-D8OemlW9.js";import{O as b}from"./object-table-CijJklQ8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsGuK2Ev.js";import{u as g}from"./useOsdkClient-BpAeP9F7.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C63OMMoY.js";import"./index-CiF4zylQ.js";import"./Dialog-BjkAmFh4.js";import"./cross-DpXB_Ps1.js";import"./svgIconContainer-BU7OxppY.js";import"./useBaseUiId-Bh3moove.js";import"./InternalBackdrop-BF88OrKs.js";import"./composite-BBE6Lj1u.js";import"./index-CPBLZVtg.js";import"./index-tbQAWs3B.js";import"./index-BBRJlR8B.js";import"./useEventCallback-BbiqIkkJ.js";import"./SkeletonBar-CC0n8ZoQ.js";import"./LoadingCell-DzbbgWn1.js";import"./ColumnConfigDialog-ueTvAbkU.js";import"./DraggableList-CgKQoc-e.js";import"./search-7u3ddEhN.js";import"./Input-CGLEj01j.js";import"./useControlled-C4eqeGIw.js";import"./isEqual-B1bTncD3.js";import"./isObject-DNycWRhs.js";import"./Button-BaF7ht4j.js";import"./ActionButton-CkoeN1pa.js";import"./Checkbox-i_5tznLe.js";import"./useValueChanged-DUWzN1g_.js";import"./CollapsiblePanel-GdDFCM0d.js";import"./MultiColumnSortDialog-BJZGOxxf.js";import"./MenuTrigger-BPEoXRuf.js";import"./CompositeItem-DZtRWtLO.js";import"./ToolbarRootContext-FqIVkw-A.js";import"./getDisabledMountTransitionStyles-B4hVK4i0.js";import"./getPseudoElementBounds-W-ok6oZ5.js";import"./chevron-down-yj-Bk-PK.js";import"./index-DcTul6uP.js";import"./error-B7GqCXyt.js";import"./BaseCbacBanner-DF1DQmum.js";import"./makeExternalStore-DrpoL1n0.js";import"./Tooltip-j0H6DC9r.js";import"./PopoverPopup-DZ4-fkZw.js";import"./toNumber-JxYKBDCm.js";import"./tick-D6yWpjCG.js";import"./DropdownField-v9OtvE1M.js";import"./withOsdkMetrics-xS-Om8wD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
