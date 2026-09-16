import{j as r}from"./iframe-Q3lyvqpT.js";import{O as b}from"./object-table-DjUxPUAU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B0g9V6Gk.js";import{u as g}from"./useOsdkClient-DfbTHzVZ.js";import"./preload-helper-C1UOXpSy.js";import"./Table-v4htO3pV.js";import"./index-DeVeQfvD.js";import"./Dialog-C8KqO5c3.js";import"./cross-0utMfnpw.js";import"./svgIconContainer-_aeVyyfk.js";import"./useBaseUiId-TlHWJ25V.js";import"./InternalBackdrop-CRj-pdnm.js";import"./composite-BRlBDXOv.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./index-Bl6Opt5R.js";import"./useEventCallback-DnvC_ML6.js";import"./SkeletonBar-QK5le0jY.js";import"./LoadingCell-BAiUfDTv.js";import"./ColumnConfigDialog-BRjbHqVx.js";import"./DraggableList-ji0QiaRd.js";import"./search-DRlPV6Yf.js";import"./Input-DsdhnLi8.js";import"./useControlled-D3J0OrAn.js";import"./Button-7q-Awilo.js";import"./small-cross-BEYL-4rR.js";import"./ActionButton-OcicrXmk.js";import"./Checkbox-C4u4wGQ6.js";import"./useValueChanged-BQwBfP0w.js";import"./CollapsiblePanel-CFtMnobt.js";import"./MultiColumnSortDialog-iq_y_xkS.js";import"./MenuTrigger-CaBal1-u.js";import"./CompositeItem-BdfVH036.js";import"./ToolbarRootContext-bI52zd0O.js";import"./getDisabledMountTransitionStyles-CX6UYYQ4.js";import"./getPseudoElementBounds-Bb-Q1nBa.js";import"./chevron-down-CyTKzqpr.js";import"./index-CCtIAxk4.js";import"./error-CMb3oavi.js";import"./BaseCbacBanner-BhMHFvMV.js";import"./makeExternalStore-DEfXnagi.js";import"./Tooltip-C59Dncbu.js";import"./PopoverPopup-BMgvSen-.js";import"./debounce-Bsm6DEnd.js";import"./tick-CuCRS-A9.js";import"./DropdownField-D-IHjSdp.js";import"./isEqual-vx51G8vk.js";import"./withOsdkMetrics-PcCF_U4s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
