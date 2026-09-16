import{j as r}from"./iframe-cfVHShSW.js";import{O as b}from"./object-table-h-pD-D9U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4YmfeOM6.js";import{u as g}from"./useOsdkClient-DhV-YBPx.js";import"./preload-helper-DIuXOY3G.js";import"./Table-BkLnj2tw.js";import"./index-Dh0_pJy1.js";import"./Dialog-fvTgsksn.js";import"./cross-CQMpStFn.js";import"./svgIconContainer-shdj6Qbw.js";import"./useBaseUiId-Dx0z8IdG.js";import"./InternalBackdrop-D8f4nw96.js";import"./composite-DGFet_96.js";import"./index-DyU-H2ls.js";import"./index-B1nRcBho.js";import"./index-4e4CIFBu.js";import"./useEventCallback-BEjjrUNS.js";import"./SkeletonBar-B7tEemlu.js";import"./LoadingCell-BQwKQHLp.js";import"./ColumnConfigDialog-BxFvYZit.js";import"./DraggableList-B-boOlGO.js";import"./search-HP5frDaz.js";import"./Input-CRQW49QU.js";import"./useControlled-DRr_lzX9.js";import"./Button-2DUkL7w7.js";import"./small-cross-CMcRrXYz.js";import"./ActionButton-CQj94TDP.js";import"./Checkbox-B5DEItIX.js";import"./useValueChanged-B7R09HF5.js";import"./CollapsiblePanel-CHOxQQMz.js";import"./MultiColumnSortDialog-DoGW72Du.js";import"./MenuTrigger-DgHMNTY4.js";import"./CompositeItem-BNd8aIDX.js";import"./ToolbarRootContext-rTwoUfWD.js";import"./getDisabledMountTransitionStyles-Q1E4gOTQ.js";import"./getPseudoElementBounds-DNOwWkqq.js";import"./chevron-down-SG4gwSm2.js";import"./index-C9sGbhZ7.js";import"./error-DFzqEfiP.js";import"./BaseCbacBanner-CAItOWNI.js";import"./makeExternalStore-ClpC--FM.js";import"./Tooltip-dXIOIOnO.js";import"./PopoverPopup-Ra0J62dt.js";import"./debounce-l3cliQfv.js";import"./tick-Clw3DVoZ.js";import"./DropdownField-qj0jYiEp.js";import"./isEqual-C3ehgu6v.js";import"./withOsdkMetrics-C8YqvKiy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
