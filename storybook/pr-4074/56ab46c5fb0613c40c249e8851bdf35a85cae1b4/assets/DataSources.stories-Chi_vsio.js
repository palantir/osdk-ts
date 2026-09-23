import{j as r}from"./iframe-JE3hAilc.js";import{O as b}from"./object-table-hrGa_0ak.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DfvSPrLV.js";import{u as g}from"./useOsdkClient-CKMIbVIl.js";import"./preload-helper-D3m3uLck.js";import"./Table-CeS9vyxB.js";import"./index-BpOIoYeP.js";import"./Dialog-CexGaiKl.js";import"./cross-B3dok42m.js";import"./svgIconContainer-DxcHQg7k.js";import"./useBaseUiId-CU6aYJhX.js";import"./InternalBackdrop-CjLu4iri.js";import"./composite-OBLfyo_g.js";import"./index-NMATibBb.js";import"./index-D1wHMkU8.js";import"./index-luf3eNCk.js";import"./useEventCallback-F9ZlU1zk.js";import"./SkeletonBar-CjvHDxcU.js";import"./LoadingCell-BgVWpxmw.js";import"./ColumnConfigDialog-CIW1cRLO.js";import"./DraggableList-BNEusFP_.js";import"./search-CVE6ZsP3.js";import"./Input-BBWCNVeu.js";import"./useControlled-i7oJhE2J.js";import"./Button-C-mwssM2.js";import"./small-cross-CS_pcyMB.js";import"./ActionButton-BwTmZVPf.js";import"./Checkbox-axlnltUu.js";import"./useValueChanged-DBeldtQT.js";import"./CollapsiblePanel-CAxKVeuj.js";import"./MultiColumnSortDialog-BTO_FIqh.js";import"./MenuTrigger-Xjt9rGph.js";import"./CompositeItem-CBdxcvZ2.js";import"./ToolbarRootContext-BAaYeDZ8.js";import"./getDisabledMountTransitionStyles-Bt2v_bU6.js";import"./getPseudoElementBounds-BkfHxAL-.js";import"./chevron-down-CzaF57dY.js";import"./index-B4_-u_rP.js";import"./error-7AaWXBYs.js";import"./BaseCbacBanner-5xL76NQJ.js";import"./makeExternalStore-C3Po_h2x.js";import"./Tooltip-DWc2JDJZ.js";import"./PopoverPopup-BddRZ8jP.js";import"./debounce-DbnyHCyz.js";import"./tick-Bxa_ZUol.js";import"./DropdownField-BLfbhE54.js";import"./isEqual-Yt5EqnyY.js";import"./withOsdkMetrics-Dv_mGpze.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
