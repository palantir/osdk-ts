import{j as r}from"./iframe-5lzZwYPj.js";import{O as b}from"./object-table-UygSo6Tb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BT6EvsjH.js";import{u as g}from"./useOsdkClient-i1o2THdE.js";import"./preload-helper-WKlZEuzV.js";import"./Table-CYxs-p7w.js";import"./index-DmpQA2dp.js";import"./Dialog-BL5ngvy_.js";import"./cross-Be5djBeG.js";import"./svgIconContainer-gxAyVnRe.js";import"./useBaseUiId-DfIUF55c.js";import"./InternalBackdrop-CSogwMiw.js";import"./composite-PZIUxoU6.js";import"./index-D7xhtA4Z.js";import"./index-CSotxX4i.js";import"./index-BynFqe0V.js";import"./useEventCallback-DFkI_Wkj.js";import"./SkeletonBar-CZuPbSrW.js";import"./LoadingCell-BOW6pmfZ.js";import"./ColumnConfigDialog-B_3yF-P2.js";import"./DraggableList-DWnYbq_V.js";import"./search-XZcqoY-Q.js";import"./Input-DcJ3J1h2.js";import"./useControlled-DHTN_Qw2.js";import"./Button-bfW4GHY6.js";import"./small-cross-Bb7OStik.js";import"./ActionButton-DgVQ6zLW.js";import"./Checkbox-Bc7vho6e.js";import"./useValueChanged-CtekWBgz.js";import"./CollapsiblePanel-Dc0aGLPo.js";import"./MultiColumnSortDialog-CxFWgp3k.js";import"./MenuTrigger-Bim_vt8i.js";import"./CompositeItem-DJOIGuOW.js";import"./ToolbarRootContext-BU433tXf.js";import"./getDisabledMountTransitionStyles-D1fP0s8e.js";import"./getPseudoElementBounds-B4sKXzPK.js";import"./chevron-down-Djuiqxwk.js";import"./index-Dle2g3lV.js";import"./error-BAoHpMsF.js";import"./BaseCbacBanner-Vc8jap16.js";import"./makeExternalStore-DzXze8D7.js";import"./Tooltip-eiDm927K.js";import"./PopoverPopup-BvZ2qG_8.js";import"./debounce-CCS3RbBn.js";import"./tick-CdsCMYrr.js";import"./DropdownField-CNBl1CJk.js";import"./isEqual-BPkIwUmR.js";import"./withOsdkMetrics-DzXqb59o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
