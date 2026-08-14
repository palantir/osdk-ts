import{j as r}from"./iframe-Dgz81_4K.js";import{O as b}from"./object-table-XVXvflBu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C7_-UiVW.js";import{u as g}from"./useOsdkClient-CFPwPtkE.js";import"./preload-helper-BGuNlUqA.js";import"./Table-C06ByMGO.js";import"./index-F2L_OuM-.js";import"./Dialog-CDp-Veg8.js";import"./cross-HWG3bUDk.js";import"./svgIconContainer-25pdXJKu.js";import"./useBaseUiId-BncAuZS9.js";import"./InternalBackdrop-BPQNGpAG.js";import"./composite-CBrybvSL.js";import"./index-CiBmfd_G.js";import"./index-47H69AQZ.js";import"./index-Ds6p27lf.js";import"./useEventCallback-BnOv6IzA.js";import"./SkeletonBar-VEjFGD4t.js";import"./LoadingCell-K6JSKvyl.js";import"./ColumnConfigDialog-pjMNDJdp.js";import"./DraggableList-D7gqpHuT.js";import"./search-z0PitH45.js";import"./Input-Bd0_Le58.js";import"./useControlled-pvz7JI6x.js";import"./Button-Bs7uQYUi.js";import"./small-cross-B70ETe3L.js";import"./ActionButton-CIeAXwRJ.js";import"./Checkbox-CeDeYt1s.js";import"./useValueChanged-CuNdENEf.js";import"./CollapsiblePanel-C6cIco7o.js";import"./MultiColumnSortDialog-cIk4biXZ.js";import"./MenuTrigger-6x1oizp8.js";import"./CompositeItem-Do6kqd5-.js";import"./ToolbarRootContext-mBIzMDya.js";import"./getDisabledMountTransitionStyles-O1nph41t.js";import"./getPseudoElementBounds-F0fN0QBG.js";import"./chevron-down-Cgs_d-_t.js";import"./index-htBElXvT.js";import"./error-nIlnw04t.js";import"./BaseCbacBanner-DMJ_hAQ0.js";import"./makeExternalStore-B9Noz3DE.js";import"./Tooltip-AKcFu8Jq.js";import"./PopoverPopup-dwsqpii7.js";import"./debounce-D5ysvOol.js";import"./tick-GG7597jc.js";import"./DropdownField-rCUt7nOE.js";import"./isEqual-UVul4Goj.js";import"./withOsdkMetrics-tYv3puyU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
