import{j as r}from"./iframe-B34J-v6h.js";import{O as b}from"./object-table-DTjiON6u.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-k-IrQx3y.js";import{u as g}from"./useOsdkClient-BWaZJhGH.js";import"./preload-helper-DktNXW3g.js";import"./Table-Dfg77Bxb.js";import"./index-BszbKXdM.js";import"./Dialog-DqrZKH8L.js";import"./cross-pUUxARqk.js";import"./svgIconContainer-DmCHV_gw.js";import"./useBaseUiId-Do4jndxX.js";import"./InternalBackdrop-BhgSPtRS.js";import"./composite-DxIIqapU.js";import"./index-DAodypt3.js";import"./index-BqaRlPNX.js";import"./index-ClzzyEIK.js";import"./useEventCallback-DYWArs4W.js";import"./SkeletonBar-DgZTpj9n.js";import"./LoadingCell-KPodI4gW.js";import"./ColumnConfigDialog-B7uGR623.js";import"./DraggableList-DiF1ea2S.js";import"./search-CeKblNnA.js";import"./Input-C4Ex_DFO.js";import"./useControlled-Bg6sLlzu.js";import"./isEqual-Cx-kf-1u.js";import"./isObject-CnhZ3r5T.js";import"./Button-D_70nOKH.js";import"./ActionButton-DmUBsAeq.js";import"./Checkbox-VXc1ULhl.js";import"./useValueChanged-Dlm4ppkt.js";import"./CollapsiblePanel-nRmpIuct.js";import"./MultiColumnSortDialog-bwM4Ndeq.js";import"./MenuTrigger-CE0WI67H.js";import"./CompositeItem-ILlt-DFI.js";import"./ToolbarRootContext-CsJNA5yH.js";import"./getDisabledMountTransitionStyles-V0s781CD.js";import"./getPseudoElementBounds-CPaE4zmA.js";import"./chevron-down-ChHe2eij.js";import"./index-DFEBs7x6.js";import"./error-DhuwnDiJ.js";import"./BaseCbacBanner-ptnosBco.js";import"./makeExternalStore-DU96TFYm.js";import"./Tooltip-kFbAJLNY.js";import"./PopoverPopup-DlqTesz8.js";import"./toNumber-QrsZyUgq.js";import"./tick-CqgAuDLT.js";import"./DropdownField-BTqSbvCg.js";import"./withOsdkMetrics-CIjnlwhJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
