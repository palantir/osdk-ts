import{j as r}from"./iframe-q8TqaLH3.js";import{O as b}from"./object-table-Du6BlrzP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CEHCYVjR.js";import{u as g}from"./useOsdkClient-Ci_ciLOY.js";import"./preload-helper-DW1Ev6LV.js";import"./Table-BYuHhB_Z.js";import"./index-BYCDoymk.js";import"./Dialog-7PnlGPiI.js";import"./cross-CC6OhIc-.js";import"./svgIconContainer-Dw59Q1hS.js";import"./useBaseUiId-CEQxwZKC.js";import"./InternalBackdrop--UCUdWww.js";import"./composite-DwvjAbMd.js";import"./index-CzfA3f8l.js";import"./index-BA8MKOgZ.js";import"./index-gnsaR6Uu.js";import"./useEventCallback-B4W_Onhb.js";import"./SkeletonBar-DqiAtf8L.js";import"./LoadingCell-DUy1iEUv.js";import"./ColumnConfigDialog-D4d7vU4L.js";import"./DraggableList-C-mgkqp0.js";import"./search-4HwTJMyt.js";import"./Input-DydicY3I.js";import"./useControlled-B4XgETbD.js";import"./Button-Cf0RXVA2.js";import"./small-cross-DvbT-Lty.js";import"./ActionButton-LZnsky5E.js";import"./Checkbox-b7LEJiYE.js";import"./useValueChanged-d_s2F3nd.js";import"./CollapsiblePanel-BS7S2lzj.js";import"./MultiColumnSortDialog-DJ1Kn_Ji.js";import"./MenuTrigger-BGwKkoMp.js";import"./CompositeItem-BoyD2Qd7.js";import"./ToolbarRootContext-BVkFyPPc.js";import"./getDisabledMountTransitionStyles-5oGVyyuS.js";import"./getPseudoElementBounds-BCT9ycAq.js";import"./chevron-down-DObWy-ia.js";import"./index-BiU-aGVE.js";import"./error-ClxxhlMY.js";import"./BaseCbacBanner-DTBo9MQF.js";import"./makeExternalStore-DCFTRovx.js";import"./Tooltip-AsdusrkJ.js";import"./PopoverPopup-B86RQsKi.js";import"./debounce-CCkbSKz6.js";import"./tick-Dip5FQjE.js";import"./DropdownField-BJ7jRxa-.js";import"./isEqual-DK8wF8M6.js";import"./withOsdkMetrics-CEeAFO7b.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
