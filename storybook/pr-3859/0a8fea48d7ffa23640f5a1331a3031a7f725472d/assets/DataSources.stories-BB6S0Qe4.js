import{j as r}from"./iframe-DMEeR_A6.js";import{O as b}from"./object-table-DpPdg6rC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DF9_ob2s.js";import{u as g}from"./useOsdkClient-CGfWHfWZ.js";import"./preload-helper-CSwxJ2Qu.js";import"./Table-BVtLGRs-.js";import"./index-BqSwH6BS.js";import"./Dialog-Bmg5t_Rv.js";import"./cross-D1DQ-gsn.js";import"./svgIconContainer-BjNsgw11.js";import"./useBaseUiId-C_keuJD_.js";import"./InternalBackdrop-Du4XsI-F.js";import"./composite-c9YX8hZx.js";import"./index-DfbVa9Ua.js";import"./index-BNsZDNUv.js";import"./index-D8V__r46.js";import"./useEventCallback-jLitOrjn.js";import"./SkeletonBar-fcVlNLZ8.js";import"./LoadingCell-Cz--n1SX.js";import"./ColumnConfigDialog-Cx9qj5Wo.js";import"./DraggableList-CYLi03tu.js";import"./search-C4awjolY.js";import"./Input-DNu0XTv_.js";import"./useControlled-JgK447yP.js";import"./isEqual-C5BtzEHg.js";import"./isObject-BwRGfctU.js";import"./Button-D8YP-W_J.js";import"./ActionButton-DBLagc9K.js";import"./Checkbox-BbDJ4RQ9.js";import"./useValueChanged-Snwakmnu.js";import"./CollapsiblePanel-k2iQjFFp.js";import"./MultiColumnSortDialog-Yn5zCMWH.js";import"./MenuTrigger-B1D8mTKr.js";import"./CompositeItem-BjD7sfVu.js";import"./ToolbarRootContext-DUcwU7Eq.js";import"./getDisabledMountTransitionStyles-CbEoBQbW.js";import"./getPseudoElementBounds-CSLBYaMJ.js";import"./chevron-down-CQJ4c2jJ.js";import"./index-BDKCNXPL.js";import"./error-B_Co1YFo.js";import"./BaseCbacBanner-BxYeTs4u.js";import"./makeExternalStore-lRhVC4OU.js";import"./Tooltip-CbgggMzF.js";import"./PopoverPopup-DprMQeHB.js";import"./debounce-D3f1Scy_.js";import"./tick-BROod1D6.js";import"./DropdownField-CGgIhePw.js";import"./withOsdkMetrics-CPkWaZWg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
