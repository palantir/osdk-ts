import{j as r}from"./iframe-BA-BTX3-.js";import{O as b}from"./object-table-DJTS9wrk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ds7OGiCA.js";import{u as g}from"./useOsdkClient-DX1BaHYe.js";import"./preload-helper-C5CDmGBs.js";import"./Table-C_2lHXzU.js";import"./index-CLtmtywH.js";import"./Dialog-yKAqP5Qg.js";import"./cross-D4r7ZnVQ.js";import"./svgIconContainer-Dgy3GTZl.js";import"./useBaseUiId-BfS85IZC.js";import"./InternalBackdrop-BRtp06hW.js";import"./composite-CTuwrQcp.js";import"./index-CHEuFMH1.js";import"./index-PipwlUCm.js";import"./index-BwCVEmQa.js";import"./useEventCallback-LqHpjxlt.js";import"./SkeletonBar-BFsZEIKo.js";import"./LoadingCell-eIOm7TzJ.js";import"./ColumnConfigDialog-DvQseXxN.js";import"./DraggableList-DmkMX12O.js";import"./search-DGIpilYo.js";import"./Input-BeTQsBeq.js";import"./useControlled-UrjDpzSo.js";import"./Button-CYmxxZwT.js";import"./small-cross-CnxqgFjC.js";import"./ActionButton-D60qZq-8.js";import"./Checkbox-BMFNhNk5.js";import"./useValueChanged-DkO6q2A4.js";import"./CollapsiblePanel-CpPszFea.js";import"./MultiColumnSortDialog-BO-EQQbS.js";import"./MenuTrigger-B_xBsrpb.js";import"./CompositeItem-domKBhoO.js";import"./ToolbarRootContext-DhyEOAqU.js";import"./getDisabledMountTransitionStyles-Due7wGO5.js";import"./getPseudoElementBounds-COzzTRAU.js";import"./chevron-down-BhnESDG4.js";import"./index-BJs7nm0G.js";import"./error-rq6qiBRx.js";import"./BaseCbacBanner-rOVSJyTs.js";import"./makeExternalStore-BUw-VQ9F.js";import"./Tooltip-DtxlDfYK.js";import"./isObject-DKRs3Wgv.js";import"./debounce-DGT6__t6.js";import"./tick-_PKXPN2p.js";import"./DropdownField-ClRlB2T0.js";import"./isEqual-C5OEvHwJ.js";import"./_baseIsEqual-dQE-vf0U.js";import"./withOsdkMetrics-bastq8vC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
