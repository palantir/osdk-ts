import{j as r}from"./iframe-DXDjAXel.js";import{O as b}from"./object-table-BP82I6MO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cLwitpq6.js";import{u as g}from"./useOsdkClient-_rpTUpw6.js";import"./preload-helper-IpZxA0ro.js";import"./Table-C6a4keXk.js";import"./index-CpU5tjqP.js";import"./Dialog-Df0gqIAe.js";import"./cross-DEtWv0qy.js";import"./svgIconContainer-jCzC3C8h.js";import"./useBaseUiId-C45Ma1UV.js";import"./InternalBackdrop-CRUN8gyi.js";import"./composite--V8DJrbe.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./index-BacqsjHg.js";import"./useEventCallback-X2pfGQGy.js";import"./SkeletonBar-HdKrVA_I.js";import"./LoadingCell-CdRFLWJX.js";import"./ColumnConfigDialog-lhgh-FoD.js";import"./DraggableList-DhIqos5Q.js";import"./search-CiGMtB3E.js";import"./Input-Dpc4Iwso.js";import"./useControlled-KXVdK95E.js";import"./Button-B-4Jw48N.js";import"./small-cross-DbxwjyCU.js";import"./ActionButton-DBwaiG9o.js";import"./Checkbox-COH4j_qR.js";import"./useValueChanged-BmkI91ny.js";import"./CollapsiblePanel-BLnECc8-.js";import"./MultiColumnSortDialog-BqJnqOkd.js";import"./MenuTrigger-CWYE3ioj.js";import"./CompositeItem-CDBKBcu9.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./getDisabledMountTransitionStyles-Ccg_pvfR.js";import"./getPseudoElementBounds-BHQeyyd6.js";import"./chevron-down-KI9ROJP6.js";import"./index-BZKWr6fS.js";import"./error-Ba9KLhOx.js";import"./BaseCbacBanner-tj-1o0aL.js";import"./makeExternalStore-Dyu5lTE9.js";import"./Tooltip-_9vbGbii.js";import"./PopoverPopup-Tb6F7J3K.js";import"./debounce-BtAkR6Pi.js";import"./tick-BygXNrkI.js";import"./DropdownField-DkSwoN9D.js";import"./isEqual-CpA_oqdP.js";import"./withOsdkMetrics-B_T1pq9p.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
