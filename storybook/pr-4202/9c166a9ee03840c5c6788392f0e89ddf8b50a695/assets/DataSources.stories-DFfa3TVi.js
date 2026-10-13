import{j as r}from"./iframe-Cnqo8JoO.js";import{O as b}from"./object-table-BjTN_yj-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BQy-MBg-.js";import{u as g}from"./useOsdkClient-6VKDxm1Q.js";import"./preload-helper-DB7HrsLr.js";import"./Table-BsL0om5s.js";import"./index-DPLneUTO.js";import"./Dialog-DGZCWUEd.js";import"./cross-L-SNvRGg.js";import"./svgIconContainer-CSxRudGe.js";import"./useBaseUiId-CMntNwg3.js";import"./InternalBackdrop-CJ-eceSN.js";import"./composite-DaaqoGoy.js";import"./index-CwsDo0MO.js";import"./index-CKI4qvj-.js";import"./index-BJ_GXgk1.js";import"./useEventCallback-B62oHhCV.js";import"./SkeletonBar-Bxqkbprw.js";import"./LoadingCell-NEkiFIgV.js";import"./ColumnConfigDialog-OplMWAkK.js";import"./DraggableList-B-dJ0pBW.js";import"./search-Bfy7kx1g.js";import"./Input-DB0BU6v_.js";import"./useControlled-D7Uij8uU.js";import"./Button-ChrgAtHr.js";import"./small-cross-CHaVBd3F.js";import"./ActionButton-CwRBsdhk.js";import"./Checkbox-aisDczTH.js";import"./useValueChanged-Bs1dvRlB.js";import"./CollapsiblePanel-fS7hUv8f.js";import"./MultiColumnSortDialog-DRMLHk2T.js";import"./MenuTrigger-BgvD7W9R.js";import"./CompositeItem-Cx-1EMH-.js";import"./ToolbarRootContext-BP77INzo.js";import"./getDisabledMountTransitionStyles-FfoApt6d.js";import"./getPseudoElementBounds-C015kcjA.js";import"./chevron-down-T8AVx82S.js";import"./index-BDFdu6IJ.js";import"./error-DWCGh03E.js";import"./BaseCbacBanner-BhbOlb4V.js";import"./makeExternalStore-BgRsNlcL.js";import"./Tooltip-CHepNGwK.js";import"./PopoverPopup-CAsTwxkG.js";import"./debounce-DdinpU2x.js";import"./tick-BdumFRCq.js";import"./DropdownField-DRUiHbSz.js";import"./isEqual-DKp7-gCn.js";import"./withOsdkMetrics-C2CbSeLM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
