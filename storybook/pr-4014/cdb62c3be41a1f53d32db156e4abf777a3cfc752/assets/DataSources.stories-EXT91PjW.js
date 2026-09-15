import{j as r}from"./iframe-BYyS3cG-.js";import{O as b}from"./object-table-BdAQglbf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CU7D85MR.js";import{u as g}from"./useOsdkClient-CZiykm71.js";import"./preload-helper-BXbEnpda.js";import"./Table-DdldgeZT.js";import"./index-BXxvc4Z_.js";import"./Dialog-DSUrjl3E.js";import"./cross-K2cagqs8.js";import"./svgIconContainer-Dk59z4vq.js";import"./useBaseUiId-CGKSvxjI.js";import"./InternalBackdrop-80Nj_94O.js";import"./composite-ZjlJlMFO.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./index-2l1FSn_M.js";import"./useEventCallback-CVm-QX4M.js";import"./SkeletonBar-BaIiRjVZ.js";import"./LoadingCell-DnoRe_V7.js";import"./ColumnConfigDialog-DbGm1Quk.js";import"./DraggableList-DPCdR4Np.js";import"./search-Can7HIrw.js";import"./Input-C27Z_igv.js";import"./useControlled-Br7xWf3M.js";import"./Button-DO8jDkqh.js";import"./small-cross-j0KzCO-W.js";import"./ActionButton-DudpqNmL.js";import"./Checkbox-Cw0OjqdD.js";import"./useValueChanged-R62FXs_N.js";import"./CollapsiblePanel-74GeumXY.js";import"./MultiColumnSortDialog--YgHyIyy.js";import"./MenuTrigger-gGiqxUYZ.js";import"./CompositeItem-GKFr0mZp.js";import"./ToolbarRootContext-dI5H3gst.js";import"./getDisabledMountTransitionStyles-Dqbr5jIl.js";import"./getPseudoElementBounds-Do85zsEf.js";import"./chevron-down-QowdN_dJ.js";import"./index-Bi1g2iim.js";import"./error-BijATQGq.js";import"./BaseCbacBanner-VgUAaZoc.js";import"./makeExternalStore-DxNQWYP7.js";import"./Tooltip-BB4biWHU.js";import"./PopoverPopup-Zw1VqF60.js";import"./debounce-BSTm8Z6M.js";import"./tick-D6fAtfPQ.js";import"./DropdownField-DMszTIIw.js";import"./isEqual-CPsrx-FY.js";import"./withOsdkMetrics-DhZ_7yXB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
