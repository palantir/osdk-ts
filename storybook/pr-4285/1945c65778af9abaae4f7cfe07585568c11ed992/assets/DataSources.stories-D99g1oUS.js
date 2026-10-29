import{j as r}from"./iframe-BVAvsfQX.js";import{O as b}from"./object-table-Dcp3caS0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BdVcP8tL.js";import{u as g}from"./useOsdkClient-DWFkG0k-.js";import"./preload-helper-BwI1TZkb.js";import"./Table-B8xS_JYn.js";import"./index-NhX7SFCA.js";import"./Dialog-BpMcAwvr.js";import"./cross-Blq0AAlZ.js";import"./svgIconContainer-DA2Ye4kw.js";import"./useBaseUiId-DNCMaGc4.js";import"./InternalBackdrop-g-81w1St.js";import"./composite-BKwa0sk2.js";import"./index-Pg5rWMVo.js";import"./index-CZLwJ3bI.js";import"./index-BJ2oEUUj.js";import"./useEventCallback-C4ornPn2.js";import"./SkeletonBar-DYwulvoN.js";import"./LoadingCell-4MxdDazL.js";import"./ColumnConfigDialog-Bg8vrAAB.js";import"./DraggableList-Bs_aQGMP.js";import"./search-YL3_raLw.js";import"./Input-BfbcPKto.js";import"./useControlled-DefMg-iO.js";import"./Button-D9hGt4n3.js";import"./small-cross-BrjbfiK5.js";import"./ActionButton-CMgl13ip.js";import"./Checkbox-AIFcaKS1.js";import"./useValueChanged-zCOkAJVd.js";import"./CollapsiblePanel-DwqNttW-.js";import"./MultiColumnSortDialog-CDHvLDDl.js";import"./MenuTrigger-BhaD-vDL.js";import"./CompositeItem-D1GzGip_.js";import"./ToolbarRootContext-mIzgtd8o.js";import"./getDisabledMountTransitionStyles-CdUsfYUG.js";import"./getPseudoElementBounds-Ck3Ae6Ob.js";import"./chevron-down-D9zeVubV.js";import"./index-CsgPrkQT.js";import"./error-CpL1Ts52.js";import"./BaseCbacBanner-DoSfNXki.js";import"./makeExternalStore-DKjKjidO.js";import"./Tooltip-BbaWMbEy.js";import"./PopoverPopup-Dz7DrwBi.js";import"./debounce-BC3Q5dHj.js";import"./tick-BntO4w-h.js";import"./DropdownField-C1-i9ZLz.js";import"./isEqual-4IX44eeH.js";import"./withOsdkMetrics-DEQFwLuz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
