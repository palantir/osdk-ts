import{j as r}from"./iframe-Bm2xIDK5.js";import{O as b}from"./object-table-CFUxdN_r.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDJ2m_-D.js";import{u as g}from"./useOsdkClient-Czd0V4OL.js";import"./preload-helper-DjaAX_dd.js";import"./Table-4F6h1b3D.js";import"./index-CRCzPeKr.js";import"./Dialog-BZR8Cca8.js";import"./cross-CkbifLjz.js";import"./svgIconContainer-ZRcJnPU8.js";import"./useBaseUiId-BiVvMHjj.js";import"./InternalBackdrop-vr1BUsoL.js";import"./composite-CbVqY-fJ.js";import"./index-C4KdMwTz.js";import"./index-BPaiiW9-.js";import"./index-Bapk-oR-.js";import"./useEventCallback-RlciTi2w.js";import"./SkeletonBar-DfDeRVBU.js";import"./LoadingCell-DOimdUde.js";import"./ColumnConfigDialog-ChUa5nps.js";import"./DraggableList-C2BMGGxP.js";import"./search-BUI-KeZj.js";import"./Input-DAk1mrJi.js";import"./useControlled-ct5PUNgp.js";import"./Button-B6A5AFkI.js";import"./small-cross-PqOGkBCn.js";import"./ActionButton-C8EGQVdk.js";import"./Checkbox-YRFK2TzR.js";import"./useValueChanged-Cgt2JHZk.js";import"./CollapsiblePanel-DRsQEzKl.js";import"./MultiColumnSortDialog-BgpqHr6x.js";import"./MenuTrigger-Vj5KFc4x.js";import"./CompositeItem-C2KXSrkE.js";import"./ToolbarRootContext-BpHcU6MJ.js";import"./getDisabledMountTransitionStyles-DgA_rwoM.js";import"./getPseudoElementBounds-_BLc3f3_.js";import"./chevron-down-BWun0Vbz.js";import"./index-D54hbR-G.js";import"./error-DiQG4vMl.js";import"./BaseCbacBanner-swcONsxt.js";import"./makeExternalStore-B3tvKJjP.js";import"./Tooltip-CKLRVgEW.js";import"./PopoverPopup-DVgnt-uY.js";import"./debounce-BYjFGIK6.js";import"./tick-Dkou_i6S.js";import"./DropdownField-CsJ9gtlA.js";import"./isEqual-oln7N0D1.js";import"./withOsdkMetrics-YdolIAmM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
