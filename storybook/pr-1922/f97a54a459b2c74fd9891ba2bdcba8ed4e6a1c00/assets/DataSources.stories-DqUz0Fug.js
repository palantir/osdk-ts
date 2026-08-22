import{j as r}from"./iframe-1EZc9Vvz.js";import{O as b}from"./object-table-F4LOopU4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DPgd-ewe.js";import{u as g}from"./useOsdkClient-CT0P5DcQ.js";import"./preload-helper-CLuirsTV.js";import"./Table-CnSb0lhx.js";import"./index-BNjxneHe.js";import"./Dialog-CfNkR8cT.js";import"./cross-D233-9JU.js";import"./svgIconContainer-DddMQ667.js";import"./useBaseUiId-C0l4a2Ks.js";import"./InternalBackdrop-DC_5-L4z.js";import"./composite-DZuvf2CH.js";import"./index-wo0YcWBb.js";import"./index-GxQ4mgfe.js";import"./index-kMGF4pB_.js";import"./useEventCallback-CZdhbhrn.js";import"./SkeletonBar-Dp4ro8ef.js";import"./LoadingCell-zWNXnzaU.js";import"./ColumnConfigDialog-BmyLHU72.js";import"./DraggableList-DBWveP6P.js";import"./search-B7Z28YY3.js";import"./Input-CfmhHq2c.js";import"./useControlled-B4wso0gz.js";import"./Button-CyGBEuY5.js";import"./small-cross-C9WXcI7t.js";import"./ActionButton-0NE2jdyP.js";import"./Checkbox-DtYZgvl2.js";import"./useValueChanged-CpaHtHLE.js";import"./CollapsiblePanel-kRaCp6lQ.js";import"./MultiColumnSortDialog-C6n7GJqR.js";import"./MenuTrigger-D-uh_MYz.js";import"./CompositeItem-BEhpKQGd.js";import"./ToolbarRootContext-Dy97HIXP.js";import"./getDisabledMountTransitionStyles-CkQXgYap.js";import"./getPseudoElementBounds-BKtB6fyV.js";import"./chevron-down-x8-eEnGm.js";import"./index-yOGSpXNC.js";import"./error-DEyOyWdk.js";import"./BaseCbacBanner-C1xBi6T7.js";import"./makeExternalStore-QJC4cEbR.js";import"./Tooltip-DbozeTXw.js";import"./PopoverPopup-CM-aTsvn.js";import"./debounce-COI3MFvy.js";import"./tick-DfyQF2qS.js";import"./DropdownField-OVJum9EQ.js";import"./isEqual-BxB9S4Ii.js";import"./withOsdkMetrics-4lDw3Mk4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
