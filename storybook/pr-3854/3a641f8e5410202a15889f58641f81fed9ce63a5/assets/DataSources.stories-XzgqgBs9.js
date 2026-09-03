import{j as r}from"./iframe-j4hxb_Xi.js";import{O as b}from"./object-table-BI4xWz0u.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3ikCcPv.js";import{u as g}from"./useOsdkClient-DpQS_r_L.js";import"./preload-helper-Do_lUb4H.js";import"./Table-BI73JjMi.js";import"./index-C2vlaWfk.js";import"./Dialog-C_3vuBpX.js";import"./cross-V5IOmaZQ.js";import"./svgIconContainer-ML2hE1ik.js";import"./useBaseUiId-D5s976C8.js";import"./InternalBackdrop-DGaRLsH3.js";import"./composite-8AKIVtYF.js";import"./index-BMB9qZtR.js";import"./index-C7oNg6UJ.js";import"./index-BsInuNtZ.js";import"./useEventCallback-BYH_LbXE.js";import"./SkeletonBar-B-YlJ_Tc.js";import"./LoadingCell-C_oDDOx4.js";import"./ColumnConfigDialog-Cr50Jo2W.js";import"./DraggableList-7T1t1X7E.js";import"./search-DCDkF9iN.js";import"./Input-D8fXhbo_.js";import"./useControlled-BmMzvKVf.js";import"./isEqual-Bfj0ieG6.js";import"./isObject-vOg4RMPu.js";import"./Button-GEQzl9-M.js";import"./ActionButton-CJmqd-UA.js";import"./Checkbox-DgnqXkSI.js";import"./useValueChanged-Bcv4gkmO.js";import"./CollapsiblePanel-BwNh9QZO.js";import"./MultiColumnSortDialog-BFva9vCq.js";import"./MenuTrigger-CR7CYImL.js";import"./CompositeItem-DUNLWbkZ.js";import"./ToolbarRootContext-DnOPaxZU.js";import"./getDisabledMountTransitionStyles-BgogkKAD.js";import"./getPseudoElementBounds-O7D4CDxi.js";import"./chevron-down-RSAghytU.js";import"./index-UqWZCDPB.js";import"./error-C23fB5PK.js";import"./BaseCbacBanner-CmEjL_8O.js";import"./makeExternalStore-BjQ810PL.js";import"./Tooltip-B9Z7ru36.js";import"./PopoverPopup-DZbQlYli.js";import"./toNumber-A7aHzW2i.js";import"./tick-G3Pq2ACj.js";import"./DropdownField-DqY3ktwA.js";import"./withOsdkMetrics-BYBtK9LJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
