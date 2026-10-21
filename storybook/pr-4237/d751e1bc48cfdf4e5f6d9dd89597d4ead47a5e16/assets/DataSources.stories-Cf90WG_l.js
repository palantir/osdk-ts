import{j as r}from"./iframe-DFHLrRxy.js";import{O as b}from"./object-table-D4G82KrZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrEvod4N.js";import{u as g}from"./useOsdkClient-CEmmd5-D.js";import"./preload-helper-D3OFW4Wp.js";import"./Table-D-QUNYES.js";import"./index-lMBTNEhC.js";import"./Dialog-DXYHXN26.js";import"./cross-CvONLWGq.js";import"./svgIconContainer-CWuGvQcW.js";import"./useBaseUiId-D2rxFRGv.js";import"./InternalBackdrop-DWPCMmWX.js";import"./composite-nDV_ik1F.js";import"./index-CWojmVv7.js";import"./index-DCHHusj_.js";import"./index-DO2q5FSh.js";import"./useEventCallback-DMNzBcY_.js";import"./SkeletonBar-7Q4DLrdr.js";import"./LoadingCell-D5c1JBqa.js";import"./ColumnConfigDialog-9FkD48W3.js";import"./DraggableList-BrCUlwbj.js";import"./search-DQslwNpY.js";import"./Input-CI74CICo.js";import"./useControlled-DfjEV_zy.js";import"./Button-yx5bONTn.js";import"./small-cross-CtE4NcWg.js";import"./ActionButton-njAVZN5A.js";import"./Checkbox-DXwFG2JQ.js";import"./useValueChanged-BakNeGfp.js";import"./CollapsiblePanel-DAe7qxxF.js";import"./MultiColumnSortDialog-Do2k26Dx.js";import"./MenuTrigger-B1pp25EB.js";import"./CompositeItem-BYZr26cD.js";import"./ToolbarRootContext-BjfNF6P-.js";import"./getDisabledMountTransitionStyles-Dk_YrDen.js";import"./getPseudoElementBounds-O3DfICBX.js";import"./chevron-down-DoelWXMj.js";import"./index-DPVYsjbh.js";import"./error-C-yk3J4q.js";import"./BaseCbacBanner-BonkgzmJ.js";import"./makeExternalStore-D-LxbjRt.js";import"./Tooltip-XUDsdyce.js";import"./PopoverPopup-hcZaO1Rb.js";import"./debounce-Bd8h-BFs.js";import"./tick-D7elqOw7.js";import"./DropdownField-Dh5_GV1H.js";import"./isEqual-C1QUTfWi.js";import"./withOsdkMetrics-BEBmRKsA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
