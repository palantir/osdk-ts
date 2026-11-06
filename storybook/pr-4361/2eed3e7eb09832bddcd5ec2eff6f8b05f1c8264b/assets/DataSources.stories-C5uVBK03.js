import{j as r}from"./iframe-gdP396qb.js";import{O as b}from"./object-table-BxXIpblp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BI41KdxZ.js";import{u as g}from"./useOsdkClient-B58tmibE.js";import"./preload-helper-C9uq-iVz.js";import"./Table-gA3Wz3zS.js";import"./index-ClCZ0Ati.js";import"./Dialog-BQKYYTBz.js";import"./cross-DtCUEBMv.js";import"./svgIconContainer-afKcLYb0.js";import"./useBaseUiId-C_ToupKC.js";import"./InternalBackdrop-Dq6m4vJr.js";import"./composite-BvrmChzz.js";import"./index-BNFLba0z.js";import"./index-mgQPQKNR.js";import"./index-BZUsCMPC.js";import"./useEventCallback-DCdboZtN.js";import"./SkeletonBar-Blsmqup6.js";import"./LoadingCell-CMIsHrqu.js";import"./ColumnConfigDialog-B4dsqwP-.js";import"./DraggableList-DUngJXQK.js";import"./search-CRn0JbZd.js";import"./Input-DWlBDhXd.js";import"./useControlled-D2ey04Mp.js";import"./Button-CTlmrId0.js";import"./small-cross-X3ECwxK6.js";import"./ActionButton-Ckf3gmBM.js";import"./Checkbox-D_JVC0Qk.js";import"./useValueChanged-DSiA270H.js";import"./CollapsiblePanel-DHW97HGw.js";import"./MultiColumnSortDialog-BqMGh898.js";import"./MenuTrigger-DXz0NnsQ.js";import"./CompositeItem-CmcqEdwc.js";import"./ToolbarRootContext-txczp7dw.js";import"./getDisabledMountTransitionStyles-tj4MPdJt.js";import"./getPseudoElementBounds-skNxDQry.js";import"./chevron-down-D4IdPQsy.js";import"./index-DchLPEO5.js";import"./error-CUjlToFo.js";import"./BaseCbacBanner-BDs_xxej.js";import"./makeExternalStore-Cq8wmohV.js";import"./Tooltip-DxHEdFsh.js";import"./isObject-CpaAk3bR.js";import"./debounce-dYJtqIeY.js";import"./tick-Cx1Dvj4u.js";import"./DropdownField-B2Q-_o7O.js";import"./isEqual-BfFU6RDj.js";import"./_baseIsEqual-C2jmvlYE.js";import"./withOsdkMetrics-CDl4GesU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
