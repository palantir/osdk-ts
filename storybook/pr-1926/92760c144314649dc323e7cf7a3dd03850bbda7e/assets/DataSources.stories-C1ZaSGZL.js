import{j as r}from"./iframe-KleQ2Wf3.js";import{O as b}from"./object-table-Bx8oOL2G.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-VjVGIHiW.js";import{u as g}from"./useOsdkClient-CRK30zOr.js";import"./preload-helper-7Uf-e0eF.js";import"./Table-hcn36HGs.js";import"./index-BJGsi2ln.js";import"./Dialog-Dp-GkQmB.js";import"./cross-dN9-xF_6.js";import"./svgIconContainer-BRTcYuz-.js";import"./useBaseUiId-au1tBZKr.js";import"./InternalBackdrop-CxSD8Cp2.js";import"./composite-DXCTc0LD.js";import"./index-CqzN1gLv.js";import"./index-5raUfGTA.js";import"./index-5W9kt8-3.js";import"./useEventCallback-DCx7Asvu.js";import"./SkeletonBar-BP_ZKoCI.js";import"./LoadingCell-BXlsInkE.js";import"./ColumnConfigDialog-DmRYufux.js";import"./DraggableList-Cfdg10M-.js";import"./search-DGONQjtR.js";import"./Input-DYtYd9SI.js";import"./useControlled-C5WbbxG6.js";import"./Button-HfVvjBaX.js";import"./small-cross-DUBOsE9B.js";import"./ActionButton-CqPXhUsj.js";import"./Checkbox-bJToUmmm.js";import"./useValueChanged-BgChR_tQ.js";import"./CollapsiblePanel-knqe2lyk.js";import"./MultiColumnSortDialog-CiEpuWMX.js";import"./MenuTrigger-BoSDKcem.js";import"./CompositeItem-CQkoTI-y.js";import"./ToolbarRootContext-o5mBsyGt.js";import"./getDisabledMountTransitionStyles-BGkmtecQ.js";import"./getPseudoElementBounds-CHfh_GUi.js";import"./chevron-down-jigIVwbX.js";import"./index-C028rklK.js";import"./error-C4IozNy9.js";import"./BaseCbacBanner-BRyFvx0Z.js";import"./makeExternalStore-CdYrFgJd.js";import"./Tooltip-D9lRyGCh.js";import"./PopoverPopup-Bt84O_KM.js";import"./debounce-CQ4liA-9.js";import"./tick-DywDZCoT.js";import"./DropdownField-gq5cNdSx.js";import"./isEqual-DZH5xjV7.js";import"./withOsdkMetrics-_1QqcoW6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
