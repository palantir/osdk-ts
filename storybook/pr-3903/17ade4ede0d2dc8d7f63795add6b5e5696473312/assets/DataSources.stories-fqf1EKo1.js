import{j as r}from"./iframe-Co4qWrtI.js";import{O as b}from"./object-table-BMTteqB4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CC7X7T3_.js";import{u as g}from"./useOsdkClient-gLFbYCUi.js";import"./preload-helper-CLLjQro7.js";import"./Table-BjVcsb4-.js";import"./index-DEzmk0WZ.js";import"./Dialog-CxRahfUX.js";import"./cross-SEs1k_Kd.js";import"./svgIconContainer-DaajecJ9.js";import"./useBaseUiId-BAgt3F1o.js";import"./InternalBackdrop-BwGu3z4c.js";import"./composite-DHfKBQ5i.js";import"./index-C2z4NjHs.js";import"./index-CqKJ3sPz.js";import"./index-C_-wbz46.js";import"./useEventCallback-OwSlM4ZE.js";import"./SkeletonBar-DfHQ4TSe.js";import"./LoadingCell-C1t0UbO6.js";import"./ColumnConfigDialog-5bij5Oc4.js";import"./DraggableList-WMBuZ8JT.js";import"./search-DLItUO9A.js";import"./Input-oSQlsB7a.js";import"./useControlled-BInZf-2P.js";import"./Button-sQ3dXKZH.js";import"./small-cross-iZ4ErZEa.js";import"./ActionButton-BLbkXCDW.js";import"./Checkbox-BaktbOjr.js";import"./useValueChanged-XMocqPgo.js";import"./CollapsiblePanel-DO0IOgEL.js";import"./MultiColumnSortDialog-tQ5ixUGv.js";import"./MenuTrigger-HYmZnr0U.js";import"./CompositeItem-DaLiwHmB.js";import"./ToolbarRootContext-DBPxppp8.js";import"./getDisabledMountTransitionStyles-BNu5cLid.js";import"./getPseudoElementBounds-DiLEPQDo.js";import"./chevron-down-CqSMzTaF.js";import"./index-C0XVZZRD.js";import"./error-DAul4oNM.js";import"./BaseCbacBanner-aSfqa7u8.js";import"./makeExternalStore-BVlyj7sn.js";import"./Tooltip-DQKyQxoY.js";import"./PopoverPopup-D4KihDvW.js";import"./debounce-DOmcCNrq.js";import"./tick-D00iMxE3.js";import"./DropdownField-D_sH1kdW.js";import"./isEqual-CNxbKZsb.js";import"./withOsdkMetrics-CtjXLxVF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
