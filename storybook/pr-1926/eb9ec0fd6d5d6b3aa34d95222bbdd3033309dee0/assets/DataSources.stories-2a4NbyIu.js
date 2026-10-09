import{j as r}from"./iframe-1dJaCYlm.js";import{O as b}from"./object-table-DHPjy5yk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJplF3t0.js";import{u as g}from"./useOsdkClient-DRXMsfLX.js";import"./preload-helper-DxSOn4L7.js";import"./Table-CBTIAnhX.js";import"./index-B5nbKv82.js";import"./Dialog-DR5BuBZq.js";import"./cross-YjWLpu8J.js";import"./svgIconContainer-BHSx6W0Z.js";import"./useBaseUiId-C4uZnOHm.js";import"./InternalBackdrop-Dgfuakv5.js";import"./composite-L8QPO2DT.js";import"./index-BTsOhHh-.js";import"./index-DWMe-xRS.js";import"./index-C7xGCqhv.js";import"./useEventCallback-DUPF2gzl.js";import"./SkeletonBar-D250oLk_.js";import"./LoadingCell-CRn8uGI3.js";import"./ColumnConfigDialog-CjGlgYSo.js";import"./DraggableList-DWAuUQtO.js";import"./search-BkPLkzDr.js";import"./Input-CIfB9akU.js";import"./useControlled-CHSiaIM9.js";import"./Button-C4vq1MKj.js";import"./small-cross-BJKO5x2i.js";import"./ActionButton-CAA2JXXL.js";import"./Checkbox-CpxF8gm9.js";import"./useValueChanged-mwlCE8cl.js";import"./CollapsiblePanel-Co1-lWcX.js";import"./MultiColumnSortDialog-Ci0pmQFw.js";import"./MenuTrigger-B9qIjPTc.js";import"./CompositeItem-C0Th2oHB.js";import"./ToolbarRootContext-Ztq9_6cI.js";import"./getDisabledMountTransitionStyles-DWnTx_mX.js";import"./getPseudoElementBounds-wNHBeRCJ.js";import"./chevron-down-CFBQ0zoB.js";import"./index-DIXb6m2-.js";import"./error-BHBv4jub.js";import"./BaseCbacBanner-hVlrMvZb.js";import"./makeExternalStore-P9a4XRGC.js";import"./Tooltip-B8lT1fcQ.js";import"./PopoverPopup-jAP8Jjj3.js";import"./debounce-D-qHnft_.js";import"./tick-CIW2Y4rB.js";import"./DropdownField-DPzSkJ64.js";import"./isEqual-B31_2uq-.js";import"./withOsdkMetrics-H4WNoQWX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
