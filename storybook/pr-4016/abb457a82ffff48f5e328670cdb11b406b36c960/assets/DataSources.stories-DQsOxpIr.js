import{j as r}from"./iframe-CaNMSJKR.js";import{O as b}from"./object-table-B4nUFTX-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B8OSzuzN.js";import{u as g}from"./useOsdkClient-Cyo_6-30.js";import"./preload-helper-CgAWU684.js";import"./Table-CXor-3n_.js";import"./index-BPdtXYwS.js";import"./Dialog-DZmI8oo7.js";import"./cross-B28N2oZp.js";import"./svgIconContainer-BGKrE44l.js";import"./useBaseUiId-PY7Joizm.js";import"./InternalBackdrop-D8_pjPZI.js";import"./composite-Dq7ZaU-F.js";import"./index-DwHiGc_W.js";import"./index-D7ympiaR.js";import"./index-B-0ROkdE.js";import"./useEventCallback-DELk9yi6.js";import"./SkeletonBar-DZW3AZk0.js";import"./LoadingCell-Bct2rEqt.js";import"./ColumnConfigDialog-CM4I9Zey.js";import"./DraggableList-BZrwHyPq.js";import"./search-DK5elQsW.js";import"./Input-D6a6LuGx.js";import"./useControlled-HJg4bzpt.js";import"./Button-BAJ6GAJV.js";import"./small-cross-BFWN5N2J.js";import"./ActionButton-CuPxYvfY.js";import"./Checkbox-DhBO-rGO.js";import"./useValueChanged-CuGKNkm7.js";import"./CollapsiblePanel-Deq-o9BK.js";import"./MultiColumnSortDialog-CPOHrKZz.js";import"./MenuTrigger-C0JMR4yg.js";import"./CompositeItem-BvVHH8oi.js";import"./ToolbarRootContext-D5kbM0o_.js";import"./getDisabledMountTransitionStyles-CpEFz5aF.js";import"./getPseudoElementBounds-B9dP_zSK.js";import"./chevron-down-QgUF0MKI.js";import"./index-A0dvdsuB.js";import"./error-B3rv2TKE.js";import"./BaseCbacBanner-DBsGqNjb.js";import"./makeExternalStore-CFwmhsDu.js";import"./Tooltip-DK9uzyUm.js";import"./PopoverPopup-te4Dxo5n.js";import"./debounce-BYEPsvAQ.js";import"./tick-DUxcYiue.js";import"./DropdownField-DhO1HYQh.js";import"./isEqual--yZjSA3R.js";import"./withOsdkMetrics-OgxjXoMv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
