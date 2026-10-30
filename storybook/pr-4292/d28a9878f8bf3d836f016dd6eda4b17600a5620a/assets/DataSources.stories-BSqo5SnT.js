import{j as r}from"./iframe-Bib3kGT6.js";import{O as b}from"./object-table-BGi71GLP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CiDxrrvf.js";import{u as g}from"./useOsdkClient-FvgP99Ie.js";import"./preload-helper-C51LGZ31.js";import"./Table-tNd1boHc.js";import"./index-VjAhrkKZ.js";import"./Dialog-fher5GbH.js";import"./cross-qIT4Mchn.js";import"./svgIconContainer-BZsDWIhS.js";import"./useBaseUiId-CnlY9UEZ.js";import"./InternalBackdrop-Bk9vvVbD.js";import"./composite--njzr7wG.js";import"./index-CYSDWPDR.js";import"./index-DGYgRGZ8.js";import"./index-BoAbROLn.js";import"./useEventCallback-DCT06OVg.js";import"./SkeletonBar-Csvi_hZx.js";import"./LoadingCell-kGwEUKgO.js";import"./ColumnConfigDialog-UqIBsJqh.js";import"./DraggableList-CdJZevuu.js";import"./search-P-oq-XW2.js";import"./Input-isV5Y8xL.js";import"./useControlled-Drh12MBC.js";import"./Button-D_pfSgnH.js";import"./small-cross-vP71PtUb.js";import"./ActionButton-ChBBZFUd.js";import"./Checkbox-CLh6Wqk-.js";import"./useValueChanged-wvMqhi3F.js";import"./CollapsiblePanel-lc_QiXgr.js";import"./MultiColumnSortDialog-m9U3Hgcc.js";import"./MenuTrigger-DniFjMpX.js";import"./CompositeItem-BS4Q5bgP.js";import"./ToolbarRootContext-DtzEjAjd.js";import"./getDisabledMountTransitionStyles-G-mSpcgO.js";import"./getPseudoElementBounds-CAYA-GnQ.js";import"./chevron-down-lJXkLqJI.js";import"./index-B7RnLU7r.js";import"./error-k1gRtmZa.js";import"./BaseCbacBanner-D2ms6TGX.js";import"./makeExternalStore-BO4M2yBP.js";import"./Tooltip-CK9OMmvF.js";import"./PopoverPopup-Dk_xDUPF.js";import"./debounce-BONFZmZ3.js";import"./tick-BQw9UkqU.js";import"./DropdownField-j-f9GReF.js";import"./isEqual-Cya0uAr9.js";import"./withOsdkMetrics-BuJy5uT4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
