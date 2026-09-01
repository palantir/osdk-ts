import{j as r}from"./iframe-CuEjl7Uz.js";import{O as b}from"./object-table-BITZzvFk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CZ76XEBK.js";import{u as g}from"./useOsdkClient-BeVXJa4E.js";import"./preload-helper-Bnv-TItm.js";import"./Table-CsgrbezX.js";import"./index-BYfl2w_f.js";import"./Dialog-KrYLboQj.js";import"./cross-CXL6d4Nc.js";import"./svgIconContainer-Dd92hyPw.js";import"./useBaseUiId-CvRriR4c.js";import"./InternalBackdrop-DcE5eYzx.js";import"./composite-kFUoCHQq.js";import"./index-Bx0fAKss.js";import"./index-CS1Bngb_.js";import"./index-B3zdRm73.js";import"./useEventCallback-C-EIfkX3.js";import"./SkeletonBar-B2aVF1IS.js";import"./LoadingCell-lVLricku.js";import"./ColumnConfigDialog-B9syA1Pp.js";import"./DraggableList-DR6kSV0E.js";import"./search-3wsQQ4iP.js";import"./Input-ZdxPnrAH.js";import"./useControlled-DBpnwX6L.js";import"./Button-DPfa27EA.js";import"./small-cross-DCrST3c9.js";import"./ActionButton-1-u7iqO6.js";import"./Checkbox-CUFcZVaU.js";import"./useValueChanged-BFSxxbsm.js";import"./CollapsiblePanel-at5Dj9bi.js";import"./MultiColumnSortDialog-BBjEkITd.js";import"./MenuTrigger-B3ks3gjl.js";import"./CompositeItem-BhUbIVeo.js";import"./ToolbarRootContext-BwI8s8FH.js";import"./getDisabledMountTransitionStyles-DoMAwNBT.js";import"./getPseudoElementBounds-DdEyzNDy.js";import"./chevron-down-CP7RGjpz.js";import"./index-DxunnI8U.js";import"./error-NZ5oWKud.js";import"./BaseCbacBanner-TiPMEh07.js";import"./makeExternalStore-oyLiubSi.js";import"./Tooltip-BPjWBB-n.js";import"./PopoverPopup-BpweqeTi.js";import"./debounce-CqTUPdUu.js";import"./tick-BgOklV5K.js";import"./DropdownField-BIOMSijU.js";import"./isEqual-CLN111pk.js";import"./withOsdkMetrics-B8uWkY4g.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
