import{j as r}from"./iframe-t8JLfFrV.js";import{O as b}from"./object-table-BuoQ4XMI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D42LPRRV.js";import{u as g}from"./useOsdkClient-HL8ITlR_.js";import"./preload-helper-CpG0vhNh.js";import"./Table-DURgDP2Q.js";import"./index-BKF13I8U.js";import"./Dialog-Bq-PmYd-.js";import"./cross-DHcY-_Dr.js";import"./svgIconContainer-qWhULtlh.js";import"./useBaseUiId-D6QmQGbw.js";import"./InternalBackdrop-sT7DDCmz.js";import"./composite-DucXBgYZ.js";import"./index-FDv4gW4k.js";import"./index-CdIm4hCh.js";import"./index-DLb_P0fQ.js";import"./useEventCallback-CczZi8pM.js";import"./SkeletonBar-DDHpySGk.js";import"./LoadingCell-Y5z6Phez.js";import"./ColumnConfigDialog-BqSwPurl.js";import"./DraggableList-DMmER9ew.js";import"./search-4QP789O7.js";import"./Input-xRhXFxI5.js";import"./useControlled-BPo532GT.js";import"./Button-CsTwwOik.js";import"./small-cross-Cq-qnBfO.js";import"./ActionButton-CfpX88bl.js";import"./Checkbox-C6JHvvQ7.js";import"./useValueChanged-_KxSVJeX.js";import"./CollapsiblePanel-C-KMkQTO.js";import"./MultiColumnSortDialog-BTO4Xqfd.js";import"./MenuTrigger-wBePDtxt.js";import"./CompositeItem-DoQHaS8J.js";import"./ToolbarRootContext-Dlh09ihf.js";import"./getDisabledMountTransitionStyles-CYo2lWMe.js";import"./getPseudoElementBounds-tmZ9Ox8K.js";import"./chevron-down-Dnk4XBCN.js";import"./index-z9AQc1g7.js";import"./error-DjVNd1sK.js";import"./BaseCbacBanner-C8FtSuLa.js";import"./makeExternalStore-BN9bUK5B.js";import"./Tooltip-BsGdcpyA.js";import"./PopoverPopup-DqWhBpxm.js";import"./debounce-CCJFyWuV.js";import"./tick-v-ZyLIBY.js";import"./DropdownField-DXE-I7FT.js";import"./isEqual-B-6PSi29.js";import"./withOsdkMetrics-CJGbJg3y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
