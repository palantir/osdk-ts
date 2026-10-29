import{j as r}from"./iframe-BO3JDeUy.js";import{O as b}from"./object-table-BZk0Lu8i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CReS5tUG.js";import{u as g}from"./useOsdkClient-B48UOwRR.js";import"./preload-helper-urwU0B1K.js";import"./Table-Npo51Eyl.js";import"./index-CEHZ1Lmc.js";import"./Dialog-x_VYxJbx.js";import"./cross-B4B_Rmmg.js";import"./svgIconContainer-B2x3jtn9.js";import"./useBaseUiId-BhX3QU_S.js";import"./InternalBackdrop-B9xuZ3X4.js";import"./composite-DkSbjExr.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./index-C1W664_h.js";import"./useEventCallback-DsZGsUBH.js";import"./SkeletonBar-BIEi9a0x.js";import"./LoadingCell-DDYsuin1.js";import"./ColumnConfigDialog-DWj93LnE.js";import"./DraggableList-Dpi7zkEQ.js";import"./search-BTnE45Hm.js";import"./Input-aywzIDzd.js";import"./useControlled-CFrWaOQK.js";import"./Button-HsgZWy4d.js";import"./small-cross-D5iZfcsS.js";import"./ActionButton-CjOnURl7.js";import"./Checkbox-BxlWuqsA.js";import"./useValueChanged-D73ikQgq.js";import"./CollapsiblePanel-fn9uuRmZ.js";import"./MultiColumnSortDialog-C_nTOm41.js";import"./MenuTrigger-DD1ibjA3.js";import"./CompositeItem-DeWDKhlH.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./getDisabledMountTransitionStyles-D2oz7XSg.js";import"./getPseudoElementBounds-C9NZ6w4c.js";import"./chevron-down-D8wRJ6gM.js";import"./index-_n59woxc.js";import"./error-COT9B3Hv.js";import"./BaseCbacBanner-CWSg8Ff3.js";import"./makeExternalStore-DdmSyb-E.js";import"./Tooltip-B6gO1E8K.js";import"./PopoverPopup-HQOEOoaE.js";import"./debounce-B2PKE0le.js";import"./tick-tswKzLaH.js";import"./DropdownField-CB_lS8X1.js";import"./isEqual-DQBhCu8Z.js";import"./withOsdkMetrics-C6_wMEah.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
