import{j as r}from"./iframe-CNVlK6B5.js";import{O as b}from"./object-table-cMgtOXr7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMpUtWUU.js";import{u as g}from"./useOsdkClient-DSUKa8VK.js";import"./preload-helper-D6U9hvSn.js";import"./Table-BrEIPw8j.js";import"./index-BIcFjsCk.js";import"./Dialog-DQ8SwEYJ.js";import"./cross-Cd5yBkhc.js";import"./svgIconContainer-CkEgUKYH.js";import"./useBaseUiId-oIpQHClg.js";import"./InternalBackdrop-BLlX82gh.js";import"./composite-9AJkVSIl.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./index-bx27PV2G.js";import"./useEventCallback-BYr5JJCz.js";import"./SkeletonBar-C22W37Hx.js";import"./LoadingCell-BMwD9iUu.js";import"./ColumnConfigDialog-EM-7EP-h.js";import"./DraggableList-BlaJIbqd.js";import"./search-CqRM5I4x.js";import"./Input-BcMyy9hm.js";import"./useControlled-CIn-ajlC.js";import"./Button-BTD6ABzp.js";import"./small-cross-DbE0dAvf.js";import"./ActionButton-CeSKu1lp.js";import"./Checkbox-DfJtmB8Q.js";import"./useValueChanged-COVZ159z.js";import"./CollapsiblePanel-Di-Gvidl.js";import"./MultiColumnSortDialog-D5X3n1eV.js";import"./MenuTrigger-d-w37dUG.js";import"./CompositeItem-DhWvIZCc.js";import"./ToolbarRootContext-B65PxelA.js";import"./getDisabledMountTransitionStyles-BQG1c3sQ.js";import"./getPseudoElementBounds-DOWcaHQH.js";import"./chevron-down-D3H5NEc0.js";import"./index-_ZOs9p_u.js";import"./error-Cf_L3Bxv.js";import"./BaseCbacBanner-LGOURMWm.js";import"./makeExternalStore-AThIzlcn.js";import"./Tooltip-BydjewTb.js";import"./PopoverPopup-B9T3QljB.js";import"./debounce-LvB1QRts.js";import"./tick-hJyc2tqL.js";import"./DropdownField-JZsjxyDw.js";import"./isEqual-CT1fOhI5.js";import"./withOsdkMetrics-oHno8_nm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
