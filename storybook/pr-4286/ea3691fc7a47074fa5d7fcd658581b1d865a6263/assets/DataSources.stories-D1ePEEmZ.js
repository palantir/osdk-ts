import{j as r}from"./iframe-4r61WmRz.js";import{O as b}from"./object-table-BsaeOGuC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3VAklZe.js";import{u as g}from"./useOsdkClient-D-iMASPG.js";import"./preload-helper-DDuQcRVJ.js";import"./Table-CUAjVu0c.js";import"./index-kkt68f5x.js";import"./Dialog-Dv_rcbVl.js";import"./cross-CNjOzwil.js";import"./svgIconContainer-EEsRKnTp.js";import"./useBaseUiId-B6Vv4jgV.js";import"./InternalBackdrop-Bzos0xM-.js";import"./composite-DlrParFv.js";import"./index-3UzI-GML.js";import"./index-Nju1pOqo.js";import"./index-YOStIHYQ.js";import"./useEventCallback-Mutezj7j.js";import"./SkeletonBar-qrhSNk5E.js";import"./LoadingCell-CRbSuUAx.js";import"./ColumnConfigDialog-B6dj10_o.js";import"./DraggableList-sEL7oibm.js";import"./search-D6jPfv1v.js";import"./Input-gOgOsLX3.js";import"./useControlled-586q8Cy3.js";import"./Button-gqFcTzpQ.js";import"./small-cross-DRIvZps7.js";import"./ActionButton-CjM_8QQ8.js";import"./Checkbox-BLKo8bIb.js";import"./useValueChanged-Bi7kMqvE.js";import"./CollapsiblePanel-C45NHvuI.js";import"./MultiColumnSortDialog-Cy7Vy43Z.js";import"./MenuTrigger-D1ofJi20.js";import"./CompositeItem-D0ha4eYX.js";import"./ToolbarRootContext-B5z6j76t.js";import"./getDisabledMountTransitionStyles-1j4GIo6j.js";import"./getPseudoElementBounds-DvDk6n8U.js";import"./chevron-down-fJwSRjPJ.js";import"./index-C1bohVU8.js";import"./error-DeL9Ip3k.js";import"./BaseCbacBanner-CP1WFrzm.js";import"./makeExternalStore-DOF5HV2v.js";import"./Tooltip-DaNbGCQf.js";import"./PopoverPopup-DIv3maom.js";import"./debounce-CXjzscB7.js";import"./tick-DLIe0J3Q.js";import"./DropdownField-TF8tLIy4.js";import"./isEqual-661UodeM.js";import"./withOsdkMetrics-B9hUZ7DO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
