import{j as r}from"./iframe-DkbM6O-Q.js";import{O as b}from"./object-table-DHmd2aR4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-a7OkVpgD.js";import{u as g}from"./useOsdkClient-DwOlk4Zy.js";import"./preload-helper-DC9LUrcb.js";import"./Table-KTs77iKt.js";import"./index-5Xb7iy_v.js";import"./Dialog-DnU-CTU3.js";import"./cross-Bgds_EJl.js";import"./svgIconContainer-aUCWMueJ.js";import"./useBaseUiId-CbWoUVda.js";import"./InternalBackdrop-BGmRqVwl.js";import"./composite-CSTh2sUL.js";import"./index-DjV9sMAb.js";import"./index-CS7XaPdo.js";import"./index-cjbVZ1ML.js";import"./useEventCallback-BJqIL9gZ.js";import"./SkeletonBar-CAFl9YhT.js";import"./LoadingCell-Chb-3Smu.js";import"./ColumnConfigDialog-CVUFHh0t.js";import"./DraggableList-bnAn5Ddq.js";import"./search-eJ_oBGNG.js";import"./Input-BHgKvDQ1.js";import"./useControlled-TBJYjn-n.js";import"./Button-DDqxd8Ee.js";import"./small-cross-Co1nXvMN.js";import"./ActionButton-BAEkA_vW.js";import"./Checkbox-l_dFvsqW.js";import"./useValueChanged-BhBtEc7p.js";import"./CollapsiblePanel-b-Y0NgWl.js";import"./MultiColumnSortDialog-B2szPAwL.js";import"./MenuTrigger-Dm2Kzt8A.js";import"./CompositeItem-CIMhmz-B.js";import"./ToolbarRootContext-B5sg7AjV.js";import"./getDisabledMountTransitionStyles-DAwwnn7h.js";import"./getPseudoElementBounds-qBUrNeQK.js";import"./chevron-down-DwM4wuWt.js";import"./index-Cp7hW4d_.js";import"./error-Dg6O-1zt.js";import"./BaseCbacBanner-D1AaGfyq.js";import"./makeExternalStore-B4N8C8OH.js";import"./Tooltip-BKA5GfZS.js";import"./PopoverPopup-CvoeuWpF.js";import"./debounce-D8PxudOE.js";import"./tick-DWiyCXA2.js";import"./DropdownField-BWar8h-x.js";import"./isEqual-BzZXzLza.js";import"./withOsdkMetrics-BmIxPjSX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
