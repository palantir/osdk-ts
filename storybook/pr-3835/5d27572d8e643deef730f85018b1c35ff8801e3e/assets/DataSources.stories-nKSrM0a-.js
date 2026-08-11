import{j as r}from"./iframe-Dz5rdWKc.js";import{O as b}from"./object-table-B2t2lye9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BiapNwBH.js";import{u as g}from"./useOsdkClient-BeXjkR9z.js";import"./preload-helper-XATaYvna.js";import"./Table-DGG580oZ.js";import"./index-CytlZwKK.js";import"./Dialog-0FDBmYfS.js";import"./cross-CWOW4qd9.js";import"./svgIconContainer-CUN1j48t.js";import"./useBaseUiId-CcJgBD_T.js";import"./InternalBackdrop-CIvTRqRL.js";import"./composite-uePQiAd3.js";import"./index-DbprldD0.js";import"./index-DwniMKUL.js";import"./index-BOSAzp12.js";import"./useEventCallback-w50J352W.js";import"./SkeletonBar-B734M0LM.js";import"./LoadingCell-Bv2ftvWI.js";import"./ColumnConfigDialog-C1tfFTej.js";import"./DraggableList-5iwPRV7s.js";import"./search-BFHO--qI.js";import"./Input-obGi4R-h.js";import"./useControlled-4Ksb8v8S.js";import"./isEqual-BZe_8M-T.js";import"./isObject-DVMtZYDp.js";import"./Button-Byc2y57h.js";import"./ActionButton-BHFskhzg.js";import"./Checkbox-Dh99OxeL.js";import"./useValueChanged-B4dQw5iP.js";import"./CollapsiblePanel-CvKAvnYp.js";import"./MultiColumnSortDialog-DNlQYhdv.js";import"./MenuTrigger-BpWiiVhn.js";import"./CompositeItem-C7V_Skuq.js";import"./ToolbarRootContext-MoW5PjEQ.js";import"./getDisabledMountTransitionStyles-xbZaHee-.js";import"./getPseudoElementBounds-BbNVJ4Mj.js";import"./chevron-down-DwfjrTJ-.js";import"./index-CEPBw93X.js";import"./error-CrVFNvEo.js";import"./BaseCbacBanner-Dm7GUcA8.js";import"./makeExternalStore-CHpDPlpc.js";import"./Tooltip-BvNkppRD.js";import"./PopoverPopup-BX_QYCS1.js";import"./toNumber-BG3B4_6W.js";import"./tick-CuiOgS51.js";import"./DropdownField-BaMjHWk4.js";import"./withOsdkMetrics-zHx2V0mr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
