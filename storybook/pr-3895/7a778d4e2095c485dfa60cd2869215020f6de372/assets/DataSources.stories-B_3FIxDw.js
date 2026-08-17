import{j as r}from"./iframe-BoqxVsev.js";import{O as b}from"./object-table-CyoB5dNz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsCZgacg.js";import{u as g}from"./useOsdkClient-DUkaUEnF.js";import"./preload-helper-Aq8qnvWR.js";import"./Table-BokLmYX5.js";import"./index-hQXIiWom.js";import"./Dialog-C4tVVEXX.js";import"./cross-DvCT72yg.js";import"./svgIconContainer-CJ6zO_Yl.js";import"./useBaseUiId-yvSaUVvb.js";import"./InternalBackdrop-BNQvTeZL.js";import"./composite-BXQWKcxK.js";import"./index-DdyFNYe7.js";import"./index-BB1uKxMJ.js";import"./index-0PmjgZdw.js";import"./useEventCallback-_ANXD1nQ.js";import"./SkeletonBar-D0cKiQMm.js";import"./LoadingCell-C_8XhGmZ.js";import"./ColumnConfigDialog-BOMMTaXm.js";import"./DraggableList-D9_O0MtJ.js";import"./search-DFnmSjiz.js";import"./Input-DVgEeo3Y.js";import"./useControlled-ZG4JZg3B.js";import"./Button-D1EPyyjE.js";import"./small-cross-C8qCf42P.js";import"./ActionButton-DBEpcyJi.js";import"./Checkbox-DA73le-m.js";import"./useValueChanged-nzkPrcRN.js";import"./CollapsiblePanel-DSO7j4jK.js";import"./MultiColumnSortDialog-DSRugA-p.js";import"./MenuTrigger-BGLurAAz.js";import"./CompositeItem-BJ5PlAn8.js";import"./ToolbarRootContext-CoT6phAF.js";import"./getDisabledMountTransitionStyles-DVKQbCZp.js";import"./getPseudoElementBounds-ey_ll9I6.js";import"./chevron-down-BBGQdN8O.js";import"./index-DVhCuea2.js";import"./error-yoGLU_F1.js";import"./BaseCbacBanner-CTDZt5tg.js";import"./makeExternalStore-DUwv-hHr.js";import"./Tooltip-Sz9-sl-s.js";import"./PopoverPopup-BH7V2Ggx.js";import"./debounce-D-AvrQTr.js";import"./tick-8BKAFT85.js";import"./DropdownField-B_HGlYb7.js";import"./isEqual-DHwOBte8.js";import"./withOsdkMetrics-D2tjX_Ah.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
