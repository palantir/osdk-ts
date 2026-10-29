import{j as r}from"./iframe-BwirHNbs.js";import{O as b}from"./object-table-4_pxRvzD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClYN-zJm.js";import{u as g}from"./useOsdkClient-BKRNMM3l.js";import"./preload-helper-BcRMcE6w.js";import"./Table-D-tZqhLK.js";import"./index-BmAPsQSt.js";import"./Dialog-JO_QRXHP.js";import"./cross-BGeKWzpP.js";import"./svgIconContainer-2pSHGQCS.js";import"./useBaseUiId-DmDKW149.js";import"./InternalBackdrop-D3Ls8fzN.js";import"./composite-B5RDHpm7.js";import"./index-IvU-D_vM.js";import"./index-EqsE1RFo.js";import"./index-PGrTwV1L.js";import"./useEventCallback-BDGr3X5U.js";import"./SkeletonBar-DYSS3rlU.js";import"./LoadingCell-BXP93Ivh.js";import"./ColumnConfigDialog-BLCSCtFt.js";import"./DraggableList-97N8w9-K.js";import"./search-DVE4XQYl.js";import"./Input-wSOSKhCX.js";import"./useControlled-KmS5bOnr.js";import"./Button-CN4mp3wI.js";import"./small-cross-SjNWyWub.js";import"./ActionButton-BeARaHOn.js";import"./Checkbox-BcJUUkXF.js";import"./useValueChanged-zp2A_D5s.js";import"./CollapsiblePanel-QaN6VVgw.js";import"./MultiColumnSortDialog-BJShujIq.js";import"./MenuTrigger-BXAqOG19.js";import"./CompositeItem-DM1dTjJL.js";import"./ToolbarRootContext-DHUZ3-w7.js";import"./getDisabledMountTransitionStyles-C8faNntK.js";import"./getPseudoElementBounds-D1fPl6ec.js";import"./chevron-down-D3Weizce.js";import"./index-pKQiofWN.js";import"./error-CL70nlEB.js";import"./BaseCbacBanner-DKq7ebkn.js";import"./makeExternalStore-CdNCMpqS.js";import"./Tooltip-BBPuwAdO.js";import"./PopoverPopup-DefD54Az.js";import"./debounce-Dxsepluv.js";import"./tick-DYr2OYVY.js";import"./DropdownField-DkfCApz5.js";import"./isEqual-OzYXQWRG.js";import"./withOsdkMetrics-CP7X3COO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
