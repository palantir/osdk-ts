import{j as r}from"./iframe-BpL6s-zg.js";import{O as b}from"./object-table-CeM1EyR8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXJltOpy.js";import{u as g}from"./useOsdkClient-Dn3QR38F.js";import"./preload-helper-uTT7htns.js";import"./Table-CPLk5KIo.js";import"./index-6LlZ2BiN.js";import"./Dialog-BnqqV4Xt.js";import"./cross-B7Srqs_a.js";import"./svgIconContainer-9i-2F4mS.js";import"./useBaseUiId-1PhUK91a.js";import"./InternalBackdrop-D528jJZb.js";import"./composite-CCy_hQsH.js";import"./index-BQedclYz.js";import"./index-D0tUKd5l.js";import"./index-DZewdgmc.js";import"./useEventCallback-ByzE1gWY.js";import"./SkeletonBar-CxTajJtW.js";import"./LoadingCell-tgtZraSR.js";import"./ColumnConfigDialog-CnTCoQBV.js";import"./DraggableList-Dj9KUGrg.js";import"./search-RLZBnffN.js";import"./Input-CLHBBGaB.js";import"./useControlled-CkduZeJ8.js";import"./Button-D6y5uRFv.js";import"./small-cross-DGh8lQQj.js";import"./ActionButton-B-kPuu4e.js";import"./Checkbox-7-uF9yyr.js";import"./useValueChanged-DcvOcb0S.js";import"./CollapsiblePanel-BjVwkesV.js";import"./MultiColumnSortDialog-COTOGiLX.js";import"./MenuTrigger-2wNjABP5.js";import"./CompositeItem-Dr9l_3tm.js";import"./ToolbarRootContext-DExmINYo.js";import"./getDisabledMountTransitionStyles-BUZvxxVE.js";import"./getPseudoElementBounds-dW4anVUY.js";import"./chevron-down-CE2IRiE6.js";import"./index-DW6U2psz.js";import"./error-DthClOU-.js";import"./BaseCbacBanner-Bu34vBfd.js";import"./makeExternalStore-CYzPQh_a.js";import"./Tooltip-NF3ObYaS.js";import"./PopoverPopup-CfyCkjev.js";import"./debounce-h76tYODF.js";import"./tick-D39791G3.js";import"./DropdownField-Cg0VCTB8.js";import"./isEqual-UMI_cY1O.js";import"./withOsdkMetrics-BI3kiEc3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
