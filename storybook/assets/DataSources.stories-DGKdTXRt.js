import{j as r}from"./iframe-Bu669Pxz.js";import{O as b}from"./object-table-DK52PO3J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlMmQNOX.js";import{u as g}from"./useOsdkClient-DffLg-Qv.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BsSow9E-.js";import"./index-DKHlcWi3.js";import"./Dialog-BwCvlknS.js";import"./cross-6sB-IXgJ.js";import"./svgIconContainer-zdH7oio0.js";import"./useBaseUiId-B-sZe3p-.js";import"./InternalBackdrop-DFCC9SF7.js";import"./composite-C8rBSBTd.js";import"./index-Qt20q_8J.js";import"./index-DtY732wl.js";import"./index-ZPPDUEEy.js";import"./useEventCallback-Dh0fuerp.js";import"./SkeletonBar-B6C4eUYl.js";import"./LoadingCell-CA52xOUo.js";import"./ColumnConfigDialog-BHyVuCmw.js";import"./DraggableList-CA70q-wM.js";import"./search-083fpx5Y.js";import"./Input-bVe5DU0v.js";import"./useControlled-DxXQTGIF.js";import"./Button-qSnmCYaa.js";import"./small-cross-B8RPZtO3.js";import"./ActionButton-D6nzOa4u.js";import"./Checkbox-BCCb0-f8.js";import"./useValueChanged-B3n0Qzyy.js";import"./CollapsiblePanel-D21pB3lg.js";import"./MultiColumnSortDialog-BP0oqUUy.js";import"./MenuTrigger-C6YgD8em.js";import"./CompositeItem-BEsWan-K.js";import"./ToolbarRootContext-BLCkh9_F.js";import"./getDisabledMountTransitionStyles-D16icKYZ.js";import"./getPseudoElementBounds-D1iyZfNX.js";import"./chevron-down-Cy5tfknz.js";import"./index-DEkRoDzJ.js";import"./error-BWta7cvF.js";import"./BaseCbacBanner-BlFOx_qQ.js";import"./makeExternalStore-BcdadG9D.js";import"./Tooltip-D205HYzH.js";import"./PopoverPopup-rL_9M6MP.js";import"./debounce-DACEF8BV.js";import"./tick-CYydrRhB.js";import"./DropdownField-DaafnRcr.js";import"./isEqual-BlD-tDfk.js";import"./withOsdkMetrics-DgxQm_Yv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
