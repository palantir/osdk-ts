import{j as r}from"./iframe-DlM-48cS.js";import{O as b}from"./object-table-6UYhzY7J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChV6GmpJ.js";import{u as g}from"./useOsdkClient-BufyZItZ.js";import"./preload-helper-DmLvY0Ro.js";import"./Table-DHNgN1mF.js";import"./index-DQySynAe.js";import"./Dialog-BMdGWId2.js";import"./cross-DwTMpwkP.js";import"./svgIconContainer-BSW0qWgw.js";import"./useBaseUiId-BL7ajxcr.js";import"./InternalBackdrop-g_U0vMMw.js";import"./composite-CCDJ76ow.js";import"./index-oiGtd9Nq.js";import"./index-DD03Ubzs.js";import"./index-BbcdD0et.js";import"./useEventCallback-C32mWVio.js";import"./SkeletonBar-Cxw_3ain.js";import"./LoadingCell-JC4LkPeL.js";import"./ColumnConfigDialog-lAlcW1DG.js";import"./DraggableList-BRnq7nnv.js";import"./search-CPnwrFbd.js";import"./Input-BgLmo8kc.js";import"./useControlled-Cds1c1L2.js";import"./Button-CS46bS-Y.js";import"./small-cross-ZWRWvs2M.js";import"./ActionButton-C_ljWeF0.js";import"./Checkbox-BAwY31E0.js";import"./useValueChanged-p3rsjtiE.js";import"./CollapsiblePanel-DaZOGvpp.js";import"./MultiColumnSortDialog-CLq9BdIb.js";import"./MenuTrigger-BmrmMcrE.js";import"./CompositeItem-DnzFCdD-.js";import"./ToolbarRootContext-DaIwolue.js";import"./getDisabledMountTransitionStyles-BKN0QXaR.js";import"./getPseudoElementBounds-DmT7azNk.js";import"./chevron-down-P2rFBgt2.js";import"./index-zmbIiHRb.js";import"./error-CpOA0Xju.js";import"./BaseCbacBanner-DY-b7WCK.js";import"./makeExternalStore-CFNSwXMM.js";import"./Tooltip-WnQo6xYr.js";import"./PopoverPopup-DSW4WQWE.js";import"./debounce-C3CDxvw2.js";import"./tick-D1rTjIGT.js";import"./DropdownField-BWVVH9kG.js";import"./isEqual-CCq2LSSh.js";import"./withOsdkMetrics-D-ub6zdF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
