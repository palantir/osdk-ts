import{j as r}from"./iframe-KzP54st8.js";import{O as b}from"./object-table-o0JZeDi0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CsgRnHjW.js";import{u as g}from"./useOsdkClient-DlRniYh9.js";import"./preload-helper-CZ0_peag.js";import"./Table-BMQRg0Zc.js";import"./index-B5nqBBWp.js";import"./Dialog-DFr5f9PO.js";import"./cross-lnMk7dXt.js";import"./svgIconContainer-B_IEjFSj.js";import"./useBaseUiId-BA1-4W3F.js";import"./InternalBackdrop-CzWxzLnJ.js";import"./composite-CfrzbkGj.js";import"./index-Br5P7C2V.js";import"./index-BMXD2udq.js";import"./index-BQoDxnvf.js";import"./useEventCallback-CHYc0JHW.js";import"./SkeletonBar-DFXSW7YC.js";import"./LoadingCell-C1IZYySw.js";import"./ColumnConfigDialog-BZ3zVyDl.js";import"./DraggableList-DYQUzo9M.js";import"./search-Cb-crZIr.js";import"./Input-C6qaftyN.js";import"./useControlled-DYaDm29f.js";import"./Button-DwGnaIDL.js";import"./small-cross-CSHoeFRw.js";import"./ActionButton-DBQ-TeBZ.js";import"./Checkbox-sEbby4bB.js";import"./useValueChanged-JwsuVPmt.js";import"./CollapsiblePanel-CYOujYEK.js";import"./MultiColumnSortDialog-CM3CueLO.js";import"./MenuTrigger-jL7t-XBm.js";import"./CompositeItem-5AIUt4bR.js";import"./ToolbarRootContext-xfunMS_N.js";import"./getDisabledMountTransitionStyles-D7SWM4VP.js";import"./getPseudoElementBounds-C-w8h5Fq.js";import"./chevron-down-C83fmB_G.js";import"./index-BRJV35Oa.js";import"./error-CnxGfdHo.js";import"./BaseCbacBanner-DHNG911r.js";import"./makeExternalStore-DSq9r9yQ.js";import"./Tooltip-BCepzJDL.js";import"./PopoverPopup-BCLXp0oS.js";import"./debounce-BGthoR0W.js";import"./tick-DIqBuVUT.js";import"./DropdownField-DBmNVyJA.js";import"./isEqual-CPVRUFPO.js";import"./withOsdkMetrics-DzdVKn4L.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
