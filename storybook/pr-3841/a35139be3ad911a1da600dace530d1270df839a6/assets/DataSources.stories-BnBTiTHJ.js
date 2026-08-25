import{j as r}from"./iframe-BXnew5By.js";import{O as b}from"./object-table-BN25w3m8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-LAgHEpio.js";import{u as g}from"./useOsdkClient-Dv-ty224.js";import"./preload-helper-BgFOTMV1.js";import"./Table-DKeEq1LX.js";import"./index-DJpoqriT.js";import"./Dialog-BJNOd716.js";import"./cross-CeycVR7t.js";import"./svgIconContainer-BOoSLwOJ.js";import"./useBaseUiId-Co3zeB_F.js";import"./InternalBackdrop-huoQMuNZ.js";import"./composite-BAOjtMlw.js";import"./index-ytG0jJ_D.js";import"./index-Db3xMcrp.js";import"./index-By4f0Urp.js";import"./useEventCallback-Dsd6TDvm.js";import"./SkeletonBar-DCvGLNk1.js";import"./LoadingCell-BL4XcoMT.js";import"./ColumnConfigDialog-fgbl5wpm.js";import"./DraggableList-CceqTZsM.js";import"./search-hra39GH9.js";import"./Input-CvomcPkC.js";import"./useControlled-ClYOKgQs.js";import"./Button-TEbldry0.js";import"./small-cross-BNPCi4md.js";import"./ActionButton-D24YaycG.js";import"./Checkbox-D73LO1C5.js";import"./useValueChanged-7SKRVsQE.js";import"./CollapsiblePanel-DKOlS72j.js";import"./MultiColumnSortDialog-B5_Au34U.js";import"./MenuTrigger-eQ2rWHau.js";import"./CompositeItem-W1wcrO0a.js";import"./ToolbarRootContext-DobZfpb_.js";import"./getDisabledMountTransitionStyles-BPAsAy4r.js";import"./getPseudoElementBounds-yDzXL7xl.js";import"./chevron-down-BWrlC_BY.js";import"./index-Bopk1NCu.js";import"./error-5wYybOyD.js";import"./BaseCbacBanner-ln0Atg9L.js";import"./makeExternalStore-rqkc6KEp.js";import"./Tooltip-DFS9Zaq4.js";import"./PopoverPopup-myoJjBlp.js";import"./debounce-4CN7S1Vp.js";import"./tick-DUV4yo-s.js";import"./DropdownField-Bxvwi2SR.js";import"./isEqual-D61AOONF.js";import"./withOsdkMetrics-XvAUFTIm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
