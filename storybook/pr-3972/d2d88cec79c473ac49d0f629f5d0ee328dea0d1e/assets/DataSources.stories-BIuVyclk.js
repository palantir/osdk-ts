import{j as r}from"./iframe-2o2kyJSw.js";import{O as b}from"./object-table-azDEgYl1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DsSJCard.js";import{u as g}from"./useOsdkClient-BuSNta0K.js";import"./preload-helper-CiJwpqMw.js";import"./Table-CmFdThQv.js";import"./index-CitRnrnM.js";import"./Dialog-BBfLfR--.js";import"./cross-B_lTfXfQ.js";import"./svgIconContainer-CuK8KMCF.js";import"./useBaseUiId-CpKlAOSJ.js";import"./InternalBackdrop-BikInMxN.js";import"./composite-BjSIx71V.js";import"./index-2rHOwy8w.js";import"./index-CiEsaZes.js";import"./index-DXtnwcW_.js";import"./useEventCallback-C5UTCvLQ.js";import"./SkeletonBar-DGXXhlfa.js";import"./LoadingCell-C2GrCxA_.js";import"./ColumnConfigDialog-CsuV_WmL.js";import"./DraggableList-DraN2KjT.js";import"./search-BjDFLGmu.js";import"./Input-DYGxrYIz.js";import"./useControlled-BXgT251S.js";import"./Button-BNZyyCXs.js";import"./small-cross-BjWdTVSE.js";import"./ActionButton-C6ImwtAS.js";import"./Checkbox-Dgyqqw4w.js";import"./useValueChanged-CBr85hPL.js";import"./CollapsiblePanel-B3UwMjFD.js";import"./MultiColumnSortDialog-3J1w479l.js";import"./MenuTrigger-DO2xD1uK.js";import"./CompositeItem-CeKYfb90.js";import"./ToolbarRootContext-VK9eZ2Nh.js";import"./getDisabledMountTransitionStyles-BI6VDTRC.js";import"./getPseudoElementBounds-e4sYnubV.js";import"./chevron-down-DzSskaX4.js";import"./index--X-EHlCl.js";import"./error-B6s9JUe9.js";import"./BaseCbacBanner-stKdaGYj.js";import"./makeExternalStore-D2otK5Vr.js";import"./Tooltip-CIdYWoah.js";import"./PopoverPopup-TKZ7g6pB.js";import"./debounce-BFnvX-XD.js";import"./tick-_kgMfq2D.js";import"./DropdownField-C_tiYhOd.js";import"./isEqual-DepNuDvP.js";import"./withOsdkMetrics-BmpmfXN7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
