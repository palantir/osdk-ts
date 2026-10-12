import{j as r}from"./iframe-DmE1XkBG.js";import{O as b}from"./object-table-BBDX0JK-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0KsnQRI.js";import{u as g}from"./useOsdkClient-COMtbyLT.js";import"./preload-helper-CXlVQXKb.js";import"./Table-3USI4T48.js";import"./index-kStVVneq.js";import"./Dialog-U7sno35Q.js";import"./cross-DJt4HA-N.js";import"./svgIconContainer-BYLHbmus.js";import"./useBaseUiId-BBFoTCwh.js";import"./InternalBackdrop-CiHjM1hr.js";import"./composite-Dj1kIl2K.js";import"./index-ks1cIWqU.js";import"./index-DXBXi0eZ.js";import"./index-BSV59ZpO.js";import"./useEventCallback-vgEMvYMu.js";import"./SkeletonBar-CEiG_Olh.js";import"./LoadingCell-DDr20pG6.js";import"./ColumnConfigDialog-Ce0P5zkg.js";import"./DraggableList-IbXSuFDv.js";import"./search-DLAneuKN.js";import"./Input-BwNWBTCC.js";import"./useControlled-Ceu9BId1.js";import"./Button-CjFhiXn4.js";import"./small-cross-CdTrWr6f.js";import"./ActionButton-D7gNEyrg.js";import"./Checkbox-BS40cc6q.js";import"./useValueChanged-CEMHgm4B.js";import"./CollapsiblePanel-F_JsFxPB.js";import"./MultiColumnSortDialog-DljV5krj.js";import"./MenuTrigger-_nCOMuwK.js";import"./CompositeItem-C3J_zDNM.js";import"./ToolbarRootContext-CmqDJjBa.js";import"./getDisabledMountTransitionStyles-C0PIglyQ.js";import"./getPseudoElementBounds-BdUsSKfU.js";import"./chevron-down-Dg6DJkU-.js";import"./index-BVlwO6Du.js";import"./error-B3TY1Brr.js";import"./BaseCbacBanner-7AxfkGHq.js";import"./makeExternalStore-C84QYiDy.js";import"./Tooltip-Bn2W5oJX.js";import"./PopoverPopup-D4DXdieW.js";import"./debounce-DVfO0w3J.js";import"./tick-BV927XEn.js";import"./DropdownField-DYMCaG07.js";import"./isEqual-WGLF_XWC.js";import"./withOsdkMetrics-DXKPSTbY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
