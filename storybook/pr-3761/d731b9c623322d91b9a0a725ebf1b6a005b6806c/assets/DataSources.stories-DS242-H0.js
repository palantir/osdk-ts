import{j as r}from"./iframe-CEXqwKDo.js";import{O as b}from"./object-table-x_chLxXQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BAbXGOBY.js";import{u as g}from"./useOsdkClient-2LcbhRGb.js";import"./preload-helper-DpdtVnp3.js";import"./Table-DgK313bN.js";import"./index-DJnSicRq.js";import"./Dialog-jxxWpWJH.js";import"./cross-I1-y4ayJ.js";import"./svgIconContainer-BLXhb9q0.js";import"./useBaseUiId-CWMGkfoD.js";import"./InternalBackdrop-DP_mDCtv.js";import"./composite-DJSIkC4h.js";import"./index-D2peK4FA.js";import"./index-DEmj-frH.js";import"./index-hvp9_h9c.js";import"./useEventCallback-DLzUPS9b.js";import"./SkeletonBar-CXJWrpg-.js";import"./LoadingCell-DsnzFvaV.js";import"./ColumnConfigDialog-xAksObsf.js";import"./DraggableList-DR9qtSRV.js";import"./search-DS8naRzK.js";import"./Input-C1mfdO-x.js";import"./useControlled-21P8hLcZ.js";import"./isEqual-B4DsWaQb.js";import"./isObject-DVDQHZSO.js";import"./Button-MZyF5CTL.js";import"./ActionButton-BxjwSRoH.js";import"./Checkbox-Cju0vHy8.js";import"./useValueChanged-ChWeTpFp.js";import"./CollapsiblePanel-CfwG2N-H.js";import"./MultiColumnSortDialog-DulxSL_i.js";import"./MenuTrigger-qPfJmrQn.js";import"./CompositeItem-M1EwA00W.js";import"./ToolbarRootContext-BT8GwrHL.js";import"./getDisabledMountTransitionStyles-CmRzzEKC.js";import"./getPseudoElementBounds-CnRAPfrn.js";import"./chevron-down-DGS9RK0n.js";import"./index-BlHia6Sj.js";import"./error-3ZtiZkhO.js";import"./BaseCbacBanner-pBmoNwBo.js";import"./makeExternalStore-DrF82NRc.js";import"./Tooltip-P7-drKpN.js";import"./PopoverPopup-jaIOrC4o.js";import"./toNumber-Bw9trI7C.js";import"./tick-CUCnjPHY.js";import"./DropdownField-88QghriF.js";import"./withOsdkMetrics--K3s2hUl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
