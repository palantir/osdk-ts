import{j as r}from"./iframe-CyooYLyM.js";import{O as b}from"./object-table-D2vNArqQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6lw9nw3.js";import{u as g}from"./useOsdkClient-DaN5XCxO.js";import"./preload-helper-Bngm7-ol.js";import"./Table-z9goVWNW.js";import"./index-CIHNhV_V.js";import"./Dialog-EepA0i_O.js";import"./cross-ECBcZMsc.js";import"./svgIconContainer-BUB4CTcl.js";import"./useBaseUiId-B6QldWDF.js";import"./InternalBackdrop-CdJ1CYip.js";import"./composite-Ct2KL6gZ.js";import"./index-CeYxTKYZ.js";import"./index-CYfla4gt.js";import"./index-DJrmSdlL.js";import"./useEventCallback-BoCra72q.js";import"./SkeletonBar-DOUvjjDK.js";import"./LoadingCell-LsIhRtPF.js";import"./ColumnConfigDialog-CLqK_x10.js";import"./DraggableList-DPEz_ect.js";import"./search-B3kqtI7c.js";import"./Input-COiGAk6z.js";import"./useControlled-i1Ezl6Tl.js";import"./Button-BmMB6JHM.js";import"./small-cross-BC6HSGjl.js";import"./ActionButton-DMpxTXkE.js";import"./Checkbox-DPeuERNM.js";import"./useValueChanged-DMjW1Np8.js";import"./CollapsiblePanel-D8wSVDSv.js";import"./MultiColumnSortDialog-OC_EtbbE.js";import"./MenuTrigger-Tft-1JTt.js";import"./CompositeItem-Bl-YA0xX.js";import"./ToolbarRootContext-D7fAF7oZ.js";import"./getDisabledMountTransitionStyles-CtwlLgnw.js";import"./getPseudoElementBounds-BmACaDew.js";import"./chevron-down-B96rYcxD.js";import"./index-LrFKMTxg.js";import"./error-CQMuKd3b.js";import"./BaseCbacBanner-COsBoy9s.js";import"./makeExternalStore-DQfo9etd.js";import"./Tooltip-C4Nyw1my.js";import"./PopoverPopup-BV24RTcO.js";import"./debounce-BAPzRuvt.js";import"./tick-BvxF-FNa.js";import"./DropdownField-BNmEjlHT.js";import"./isEqual-CD-9D1bD.js";import"./withOsdkMetrics-D__EiDJX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
