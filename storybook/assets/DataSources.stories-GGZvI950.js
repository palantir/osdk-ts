import{j as r}from"./iframe-MV3gBuhb.js";import{O as b}from"./object-table-BFzb71oN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DER-b4Op.js";import{u as g}from"./useOsdkClient-DGtMq_wB.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-c0smS1a0.js";import"./index-CPeLDKLC.js";import"./Dialog-lAXuBedk.js";import"./cross-D-dx7OQY.js";import"./svgIconContainer-C29zPRQZ.js";import"./useBaseUiId-DJc1IzLT.js";import"./InternalBackdrop-CqWsDzos.js";import"./composite-JnoI1v48.js";import"./index-DUyzW1cO.js";import"./index-DS4B-Z3C.js";import"./index-DixCBahy.js";import"./useEventCallback-CTXi7CF8.js";import"./SkeletonBar-BRlbBChd.js";import"./LoadingCell-CkEkP96h.js";import"./ColumnConfigDialog-BzgvzqRp.js";import"./DraggableList-BKEI068J.js";import"./search-Dx6v8zL9.js";import"./Input-CFAsB6-e.js";import"./useControlled-BAuu-oXX.js";import"./isEqual-BJwCsjI-.js";import"./isObject-BSAcuXqJ.js";import"./Button-BCOIsKOG.js";import"./ActionButton-6JWtFS74.js";import"./Checkbox-C3QVh5C1.js";import"./useValueChanged-DuPZkKLu.js";import"./CollapsiblePanel-0deNnNaL.js";import"./MultiColumnSortDialog-CCvPAeqZ.js";import"./MenuTrigger-DCv0W0ii.js";import"./CompositeItem-CqaTd4ET.js";import"./ToolbarRootContext-BV1tTkw1.js";import"./getDisabledMountTransitionStyles-D8sukNzL.js";import"./getPseudoElementBounds-bt3u7bQP.js";import"./chevron-down-Dq4ZWi7O.js";import"./index-CSUITZSY.js";import"./error-DZQYXIrZ.js";import"./BaseCbacBanner-Dngf4cbN.js";import"./makeExternalStore-BXBS29Jd.js";import"./Tooltip-vGIWKmaA.js";import"./PopoverPopup-_2BHXoEs.js";import"./toNumber-Dme5-GRS.js";import"./tick-CeYFwvYZ.js";import"./DropdownField-DL5_VC8k.js";import"./withOsdkMetrics-CCiJ9j-V.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
