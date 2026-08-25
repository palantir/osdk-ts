import{j as r}from"./iframe-BBjL-F6y.js";import{O as b}from"./object-table-CXgEsSVL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BgBjOKpP.js";import{u as g}from"./useOsdkClient-DkAGOt-l.js";import"./preload-helper-DNVbAuUc.js";import"./Table-ZazoxAIc.js";import"./index-YgwbFw5i.js";import"./Dialog-BS7ILeGP.js";import"./cross-DmliyvQK.js";import"./svgIconContainer-CHtsuizn.js";import"./useBaseUiId-CMNBQkED.js";import"./InternalBackdrop-BLmLXoC_.js";import"./composite-CUtkN34M.js";import"./index-kvFmoSiE.js";import"./index-R2_PcSMY.js";import"./index-CcQENiZT.js";import"./useEventCallback-CtDlrGU2.js";import"./SkeletonBar-Ck_nxwmH.js";import"./LoadingCell-BPP60fFV.js";import"./ColumnConfigDialog-C8dtcxLo.js";import"./DraggableList-1onnzR4p.js";import"./search-DTU0lDb9.js";import"./Input-wfcqgvpx.js";import"./useControlled-B4FriTOA.js";import"./Button-BVwSTECw.js";import"./small-cross-BAdgYS23.js";import"./ActionButton-CMs-ukEC.js";import"./Checkbox-B6nUj6Bc.js";import"./useValueChanged-Br0cAu9s.js";import"./CollapsiblePanel-DBvswhTh.js";import"./MultiColumnSortDialog-D8jxgPqR.js";import"./MenuTrigger-DA08kItI.js";import"./CompositeItem-C0luX3iR.js";import"./ToolbarRootContext-YS97F8pO.js";import"./getDisabledMountTransitionStyles-CeDfIUP4.js";import"./getPseudoElementBounds-DK-NlwaQ.js";import"./chevron-down-6vd3dKBy.js";import"./index-Cc2JD9jP.js";import"./error-CjgVLvJc.js";import"./BaseCbacBanner-Cq6uSAZ4.js";import"./makeExternalStore-D1LPwt7p.js";import"./Tooltip-BT8w1i9z.js";import"./PopoverPopup-OgEMtoaP.js";import"./debounce-C2ZfHN3V.js";import"./tick-DQggEu_6.js";import"./DropdownField-BzShEg54.js";import"./isEqual-CwEb78fT.js";import"./withOsdkMetrics-B0Y7OQ6I.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
