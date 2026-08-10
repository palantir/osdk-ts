import{j as r}from"./iframe-CxyWClRv.js";import{O as b}from"./object-table-DjapWFAp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wHLkYnbi.js";import{u as g}from"./useOsdkClient-B_sGV8aJ.js";import"./preload-helper-BD8IUSLW.js";import"./Table-LFRL-iJM.js";import"./index-CwkmsmKS.js";import"./Dialog-CDAWhPTY.js";import"./cross-sylIwqMp.js";import"./svgIconContainer-CfXklo5s.js";import"./useBaseUiId-jf4U9pqb.js";import"./InternalBackdrop-1JU8mXc7.js";import"./composite-BEt3pTCK.js";import"./index-B4nTVLHO.js";import"./index-CNEU6CxQ.js";import"./index-COeR_Zui.js";import"./useEventCallback-Cu9jQOIV.js";import"./SkeletonBar-jTUfV4y2.js";import"./LoadingCell-CNs-BVoo.js";import"./ColumnConfigDialog-DoMK0hYx.js";import"./DraggableList-DlXzCaYC.js";import"./search-BqpVCTT7.js";import"./Input-BOgrzWPu.js";import"./useControlled-BFAPGVYI.js";import"./isEqual-DzXVN9J1.js";import"./isObject-CjmG8_3M.js";import"./Button-DQ3MNO2y.js";import"./ActionButton-D42Xx6M4.js";import"./Checkbox-BI2toJ7y.js";import"./useValueChanged-Pbgao_0L.js";import"./CollapsiblePanel-DqJeQ-Ex.js";import"./MultiColumnSortDialog-Dzsz3GMa.js";import"./MenuTrigger-B6-3N9Zn.js";import"./CompositeItem-CgKzJJIm.js";import"./ToolbarRootContext-jpHryEcr.js";import"./getDisabledMountTransitionStyles-C6Bvh8ls.js";import"./getPseudoElementBounds-8WMM1t2O.js";import"./chevron-down-BiOQJ87i.js";import"./index-CVx7inSp.js";import"./error-CAKdt8h3.js";import"./BaseCbacBanner-65sbOJku.js";import"./makeExternalStore-Cy6TXmii.js";import"./Tooltip-BmNJMzwB.js";import"./PopoverPopup-Dn-gaywI.js";import"./toNumber-B8fujMJA.js";import"./tick-Bznk9fi8.js";import"./DropdownField-C9ghg4-_.js";import"./withOsdkMetrics-DJH-BeK5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
