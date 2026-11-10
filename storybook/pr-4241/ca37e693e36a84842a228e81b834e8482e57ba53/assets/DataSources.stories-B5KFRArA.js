import{j as r}from"./iframe-A4y6o7Ie.js";import{O as b}from"./object-table-BoO0elNM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfX14x5L.js";import{u as g}from"./useOsdkClient-eRrz4tDs.js";import"./preload-helper-BzztgknT.js";import"./Table-BjqeXaVf.js";import"./index-u7v7sD8l.js";import"./Dialog-KCxjFTm-.js";import"./cross-BiOP9WPq.js";import"./svgIconContainer-hodslvqS.js";import"./useBaseUiId-DE1tY3Ft.js";import"./InternalBackdrop-CFKIYKn-.js";import"./composite-Cae9SV4u.js";import"./index-C8GSd3VQ.js";import"./index-Coz2by3h.js";import"./index-2Ob0EkkI.js";import"./useEventCallback-jK9BYgZA.js";import"./SkeletonBar-DGU8QXrV.js";import"./LoadingCell-B0YAlYY-.js";import"./ColumnConfigDialog-BBObW5dm.js";import"./DraggableList-Bg5EEBkU.js";import"./search-BJw96kDe.js";import"./Input-8Z1nJkFY.js";import"./useControlled-C-FlvKxX.js";import"./Button-CpcDAbH0.js";import"./small-cross-9cmVXTN9.js";import"./ActionButton-D8kAp191.js";import"./Checkbox-KGoh-z4o.js";import"./useValueChanged-GBBSiWne.js";import"./CollapsiblePanel-5jZaWXpI.js";import"./MultiColumnSortDialog-BtOW583w.js";import"./MenuTrigger-CVg7cQJz.js";import"./CompositeItem-1bj7m8dY.js";import"./ToolbarRootContext-BQWxRNLz.js";import"./getDisabledMountTransitionStyles-Yf-KGouk.js";import"./getPseudoElementBounds-WLqzanIA.js";import"./chevron-down-DaeYHOS7.js";import"./index-CVD25b_z.js";import"./error-D67R2Dnx.js";import"./BaseCbacBanner-BWE-0JdB.js";import"./makeExternalStore-i5MDKYGm.js";import"./Tooltip-BAM2O2Bl.js";import"./isObject-CFZ51c-t.js";import"./debounce-k7ATts_Q.js";import"./tick-BY6ZJkTy.js";import"./DropdownField-CmRhweZ6.js";import"./isEqual-CGvBDAE8.js";import"./_baseIsEqual-B3DtqFtF.js";import"./withOsdkMetrics-DS1Us_TM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
