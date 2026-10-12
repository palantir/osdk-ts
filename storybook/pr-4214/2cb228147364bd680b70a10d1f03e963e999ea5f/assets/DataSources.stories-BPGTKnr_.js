import{j as r}from"./iframe-Ch9GCQZw.js";import{O as b}from"./object-table-udIH3ti7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CfPVy2v6.js";import{u as g}from"./useOsdkClient-CbQE4lpc.js";import"./preload-helper-DnJKIcik.js";import"./Table-BO8sOs9i.js";import"./index-BWo0Chvm.js";import"./Dialog-Cti3TihL.js";import"./cross-BBG8uB8A.js";import"./svgIconContainer-DaQYNeFs.js";import"./useBaseUiId-BHSh6ZdF.js";import"./InternalBackdrop-DiQHfJed.js";import"./composite-B_lrLvaS.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./index-CooRRF-s.js";import"./useEventCallback-BmWtV1Ho.js";import"./SkeletonBar-Df6Ulzih.js";import"./LoadingCell-CmRzlKg4.js";import"./ColumnConfigDialog-BpaIJfKX.js";import"./DraggableList-Db-hzNij.js";import"./search-Bgjfk80F.js";import"./Input-M42Jtpmt.js";import"./useControlled-DlKs0eKw.js";import"./Button-lGY5omo3.js";import"./small-cross-Avc7MGqG.js";import"./ActionButton-Cb3Wx3py.js";import"./Checkbox-Bk0OPOIj.js";import"./useValueChanged-DuDVOcc4.js";import"./CollapsiblePanel-BXjVu9cP.js";import"./MultiColumnSortDialog-eX_F_Wyx.js";import"./MenuTrigger-D-ZULnhu.js";import"./CompositeItem-lOcuUhYq.js";import"./ToolbarRootContext-CxoySA_i.js";import"./getDisabledMountTransitionStyles-BRB-pv4J.js";import"./getPseudoElementBounds-DIP85sgc.js";import"./chevron-down-D219skL8.js";import"./index-BPwpWSia.js";import"./error-CMZUpiIv.js";import"./BaseCbacBanner-Bn0YyQ_S.js";import"./makeExternalStore-CXGYFkuo.js";import"./Tooltip-DC42mvHN.js";import"./PopoverPopup-C3k9he2s.js";import"./debounce-CoINGggm.js";import"./tick-n5pxQxar.js";import"./DropdownField-BkydTfoJ.js";import"./isEqual-DE8dU3SQ.js";import"./withOsdkMetrics-DaboQw0b.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
