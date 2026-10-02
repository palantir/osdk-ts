import{j as r}from"./iframe-CPz-wzhp.js";import{O as b}from"./object-table-Nhfkur6o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cs3F0jUS.js";import{u as g}from"./useOsdkClient-eahsPVnP.js";import"./preload-helper-B3PLv50W.js";import"./Table-CJIoNyJZ.js";import"./index-CtV6ZPdt.js";import"./Dialog-DZNqhh4A.js";import"./cross-DRBzl1mu.js";import"./svgIconContainer-B99gTCIO.js";import"./useBaseUiId-bEyq9hSb.js";import"./InternalBackdrop-BrVnOHT7.js";import"./composite-Dda615xV.js";import"./index-DzRVDHUw.js";import"./index-BRVvkZ9q.js";import"./index-q41jJGqb.js";import"./useEventCallback-D-a5Riu5.js";import"./SkeletonBar-CCqJKh0H.js";import"./LoadingCell-COTwWinn.js";import"./ColumnConfigDialog-C24FYH5u.js";import"./DraggableList-Drwzm63S.js";import"./search-CPfH1VP1.js";import"./Input-BO6jo4k5.js";import"./useControlled-7vp-sIj7.js";import"./Button-6LWfTNU-.js";import"./small-cross-CUpJa2rI.js";import"./ActionButton-DvbMI2E1.js";import"./Checkbox-CXS8nVFq.js";import"./useValueChanged-sLT7_-gz.js";import"./CollapsiblePanel-Bv-tJbaL.js";import"./MultiColumnSortDialog-ByJpRQ7x.js";import"./MenuTrigger-Ce4bdmjT.js";import"./CompositeItem-t2T-QHuZ.js";import"./ToolbarRootContext-ClJ_sUWs.js";import"./getDisabledMountTransitionStyles-Bznae3H_.js";import"./getPseudoElementBounds-zuJ-zqHd.js";import"./chevron-down-BNy5Nzph.js";import"./index-CbuVsfr5.js";import"./error-BD3e32HB.js";import"./BaseCbacBanner-BwcFXt-1.js";import"./makeExternalStore-Ba5nMm5U.js";import"./Tooltip-MzGB87hV.js";import"./PopoverPopup-Bh7nIoKv.js";import"./debounce-DaKFtC_V.js";import"./tick-C0JYyDJw.js";import"./DropdownField-BJnpWJam.js";import"./isEqual-DFPP44u1.js";import"./withOsdkMetrics-BXgZN6T2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
