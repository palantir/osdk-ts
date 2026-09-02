import{j as r}from"./iframe-gxyWVbj2.js";import{O as b}from"./object-table-BV9fTc-i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CKUfqdIs.js";import{u as g}from"./useOsdkClient-CUfX5Tns.js";import"./preload-helper-DE7utxpQ.js";import"./Table-B_dwHuEn.js";import"./index-QxbQkIyi.js";import"./Dialog-C3P5MjZq.js";import"./cross-VeIfZqt8.js";import"./svgIconContainer-DKbE6d31.js";import"./useBaseUiId-DviQ__RH.js";import"./InternalBackdrop-DwvYd_J6.js";import"./composite-iqOIimru.js";import"./index-BTPrH0w0.js";import"./index-NWW1BWCJ.js";import"./index-CEVBBPUN.js";import"./useEventCallback-26YzMxUe.js";import"./SkeletonBar-B50ZyoLs.js";import"./LoadingCell-CFBUM8ue.js";import"./ColumnConfigDialog-C5deL7Ed.js";import"./DraggableList-BW-vGzIl.js";import"./search-CyP3n12E.js";import"./Input-DTxeHNru.js";import"./useControlled-BNWlhOxQ.js";import"./Button-B4AYvQgI.js";import"./small-cross-D8cOGc_K.js";import"./ActionButton-DZr01Jaf.js";import"./Checkbox-C9sVYdhx.js";import"./useValueChanged-KXUkRbwe.js";import"./CollapsiblePanel-o-2jp67C.js";import"./MultiColumnSortDialog-DSmITdKp.js";import"./MenuTrigger-DsM6mbXw.js";import"./CompositeItem-CfmR6sON.js";import"./ToolbarRootContext-BbmcYQfJ.js";import"./getDisabledMountTransitionStyles-rpYg7a2m.js";import"./getPseudoElementBounds-BU1znkpG.js";import"./chevron-down-D0C-5aC_.js";import"./index-m96J0xcz.js";import"./error-Dq3CHQs2.js";import"./BaseCbacBanner-BgNW9o-N.js";import"./makeExternalStore-CU05zhJ7.js";import"./Tooltip-Cxy0TAi_.js";import"./PopoverPopup--JzGS9uQ.js";import"./debounce-CCj_OJPJ.js";import"./tick-CzmTrzOp.js";import"./DropdownField-DBl_-PYC.js";import"./isEqual-DgFl3X9R.js";import"./withOsdkMetrics-DtZ9khmC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
