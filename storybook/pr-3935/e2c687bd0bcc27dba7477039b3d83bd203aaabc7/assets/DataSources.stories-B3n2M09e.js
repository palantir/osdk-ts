import{j as r}from"./iframe-XrofcpbD.js";import{O as b}from"./object-table-CQUtluaU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3o2Uboy.js";import{u as g}from"./useOsdkClient-BWNNp0nW.js";import"./preload-helper-4aKSNE4Z.js";import"./Table-PyHbwIL1.js";import"./index-BpIQk31K.js";import"./Dialog-CK0ThOMi.js";import"./cross-xvFBNCq9.js";import"./svgIconContainer-BRYxzENj.js";import"./useBaseUiId-Pjnp1WCR.js";import"./InternalBackdrop-CS9GDJ0k.js";import"./composite-CVP2vWQr.js";import"./index-YIz0O6eI.js";import"./index-BiB6mgaY.js";import"./index-COS5oq6K.js";import"./useEventCallback-D-w8hKF8.js";import"./SkeletonBar-wEBtoQJI.js";import"./LoadingCell-7gmLP_EL.js";import"./ColumnConfigDialog-CLkIWZFy.js";import"./DraggableList-2ENQuMLR.js";import"./search-CpQHwDsV.js";import"./Input-DP0HZuep.js";import"./useControlled-DZJgL9vi.js";import"./Button-D93TIJdR.js";import"./small-cross-D5AmJrUy.js";import"./ActionButton-CvgtCG2W.js";import"./Checkbox-KLRIxs55.js";import"./useValueChanged-DMuoZqzV.js";import"./CollapsiblePanel-CrlLnisy.js";import"./MultiColumnSortDialog-BTDzGz_3.js";import"./MenuTrigger-B-_LgIM3.js";import"./CompositeItem-BEvI0D6E.js";import"./ToolbarRootContext-AhwQqi4V.js";import"./getDisabledMountTransitionStyles-BIi-_6hn.js";import"./getPseudoElementBounds-CMVTFGwo.js";import"./chevron-down-CD2YsHKM.js";import"./index-UBL3yvSp.js";import"./error-CCJEPyJx.js";import"./BaseCbacBanner-DLUQs4q_.js";import"./makeExternalStore-YYVkatD5.js";import"./Tooltip-Co0onlWy.js";import"./PopoverPopup-BlCB73eB.js";import"./debounce-DZml1LHx.js";import"./tick-CT2U49RP.js";import"./DropdownField-6GQjb6-H.js";import"./isEqual-ByMEfs2L.js";import"./withOsdkMetrics-BHkoZ0sq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
