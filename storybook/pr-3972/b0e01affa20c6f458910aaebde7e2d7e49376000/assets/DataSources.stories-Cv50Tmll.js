import{j as r}from"./iframe-D5Tg4ktw.js";import{O as b}from"./object-table-B8JcGxgg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dm2YwGPR.js";import{u as g}from"./useOsdkClient-uKmKN20Y.js";import"./preload-helper-BaIqC2Pe.js";import"./Table-BPcBSQFu.js";import"./index-BEbB4IUm.js";import"./Dialog-DPIr7_Mp.js";import"./cross-DzUcTLFz.js";import"./svgIconContainer-C3wCuOXB.js";import"./useBaseUiId-BdvoItIk.js";import"./InternalBackdrop-DLYljigh.js";import"./composite-B1gx-sbX.js";import"./index-CFXN4yab.js";import"./index-DJsS0_Xm.js";import"./index-FQYOWNbs.js";import"./useEventCallback-Cxq3Ypn0.js";import"./SkeletonBar-Bm6lIBmj.js";import"./LoadingCell-POsDiFEK.js";import"./ColumnConfigDialog-DWjunH2C.js";import"./DraggableList-BSfbMhFR.js";import"./search-DeZTwCkl.js";import"./Input-CN7F7SIp.js";import"./useControlled-DObGwXHJ.js";import"./Button-DiryTlNK.js";import"./small-cross-tZnJs89K.js";import"./ActionButton-DdsvASl6.js";import"./Checkbox-DmnTpUu_.js";import"./useValueChanged-Dyb99FcC.js";import"./CollapsiblePanel-BIjDDqj4.js";import"./MultiColumnSortDialog-CE-NHI4-.js";import"./MenuTrigger-CW7zfuCG.js";import"./CompositeItem-C5_2nepJ.js";import"./ToolbarRootContext-0E-Oi6aL.js";import"./getDisabledMountTransitionStyles-DiO2Bw4N.js";import"./getPseudoElementBounds-BprlNR5S.js";import"./chevron-down-C1ACHifJ.js";import"./index-Deb3KNPH.js";import"./error-B5UKi7xe.js";import"./BaseCbacBanner-CqZxD00T.js";import"./makeExternalStore-kA_iXT4K.js";import"./Tooltip-DFNv6I-3.js";import"./PopoverPopup-Cl3OtvIp.js";import"./debounce-EQoAU-g_.js";import"./tick-_KNLE2bn.js";import"./DropdownField-BsQqxD2N.js";import"./isEqual-B8sfvD_4.js";import"./withOsdkMetrics-C-Pgn628.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
