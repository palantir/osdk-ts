import{j as r}from"./iframe-DfZQ9M6i.js";import{O as b}from"./object-table-BABzrNHh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CkhPDZVV.js";import{u as g}from"./useOsdkClient-BVS0pOON.js";import"./preload-helper-E2urLAES.js";import"./Table-Bg05vyrB.js";import"./index-B0k0bEti.js";import"./Dialog-D-zHP0iR.js";import"./cross-BioDKNkS.js";import"./svgIconContainer-eylyBn5f.js";import"./useBaseUiId-Chm1jq62.js";import"./InternalBackdrop-vRXRm5Ri.js";import"./composite-C2Pj8gPK.js";import"./index-DMZF7jCE.js";import"./index-DLq5Bkcx.js";import"./index-BrA1DhLb.js";import"./useEventCallback-CuX5Jevb.js";import"./SkeletonBar-xgByqOHn.js";import"./LoadingCell-I-rE57sz.js";import"./ColumnConfigDialog-1IK2KiyF.js";import"./DraggableList-CdDP_B-e.js";import"./search-g1T2rl--.js";import"./Input-CYJZLefv.js";import"./useControlled-CftsWT9B.js";import"./Button-B2R87CaB.js";import"./small-cross-DlqkxE_Y.js";import"./ActionButton-DWlru8XN.js";import"./Checkbox-Cu7Fqy3D.js";import"./useValueChanged-BssawWRm.js";import"./CollapsiblePanel-DfOA0fLb.js";import"./MultiColumnSortDialog-CzIRJYTz.js";import"./MenuTrigger-CSm448TL.js";import"./CompositeItem-Hd7LuzxE.js";import"./ToolbarRootContext-CfFBsMXS.js";import"./getDisabledMountTransitionStyles-CSW-SIFW.js";import"./getPseudoElementBounds-C9x04IRz.js";import"./chevron-down-tsxmIRBn.js";import"./index-kN-BpEU5.js";import"./error-BTFoLABS.js";import"./BaseCbacBanner-qA1XbymC.js";import"./makeExternalStore-ChnBYuE7.js";import"./Tooltip-BJ0dhB1V.js";import"./PopoverPopup-BcGfAJQo.js";import"./debounce-BFxxFhvU.js";import"./tick-BTiK-OOO.js";import"./DropdownField-cD4Mi-ZJ.js";import"./isEqual-r-L37Ccs.js";import"./withOsdkMetrics-lGVwuAms.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
