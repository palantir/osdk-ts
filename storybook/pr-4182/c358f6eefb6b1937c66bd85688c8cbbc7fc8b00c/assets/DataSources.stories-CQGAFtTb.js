import{j as r}from"./iframe-7g13v2jN.js";import{O as b}from"./object-table-C_lh3bVp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BRe1r5Bi.js";import{u as g}from"./useOsdkClient-UG4YR_Hh.js";import"./preload-helper-CclsuuMH.js";import"./Table-CNrYfnyS.js";import"./index-BgJ1FFdq.js";import"./Dialog-B8lGpi4M.js";import"./cross-OMCp2mi_.js";import"./svgIconContainer-DukTjdz5.js";import"./useBaseUiId-C7XxkQYq.js";import"./InternalBackdrop-DWiXKM0G.js";import"./composite-B2zIsJ0R.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./index-SelFJin-.js";import"./useEventCallback-5D6oIoIr.js";import"./SkeletonBar-DtbFqHqp.js";import"./LoadingCell-ziqIUc6u.js";import"./ColumnConfigDialog-CbLCeqM4.js";import"./DraggableList-P95jNEJk.js";import"./search-sAV5xLcY.js";import"./Input-CaqMv5Lb.js";import"./useControlled-B23KZW1l.js";import"./Button-Apw5WzKr.js";import"./small-cross-DO2vuBir.js";import"./ActionButton-BIcuEm-R.js";import"./Checkbox-Bf-1hh15.js";import"./useValueChanged-D9FXoZkK.js";import"./CollapsiblePanel-DdzzFDVY.js";import"./MultiColumnSortDialog-B3gYDQCx.js";import"./MenuTrigger-Aj7zB13g.js";import"./CompositeItem-B-yStqfF.js";import"./ToolbarRootContext-CE2CALLi.js";import"./getDisabledMountTransitionStyles-CW70_K2g.js";import"./getPseudoElementBounds-CunRcIqO.js";import"./chevron-down-CFQZfM99.js";import"./index-BfjN1GaO.js";import"./error-D4UXhq88.js";import"./BaseCbacBanner-DuFi7CbY.js";import"./makeExternalStore-Bri8hEZ2.js";import"./Tooltip-Dnj9fxoM.js";import"./PopoverPopup-BXniSYAa.js";import"./debounce-BEFTFyoa.js";import"./tick-CRrNOkiB.js";import"./DropdownField-D0tQzFI8.js";import"./isEqual-CQ1Vajmu.js";import"./withOsdkMetrics-CxyFHZKX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
