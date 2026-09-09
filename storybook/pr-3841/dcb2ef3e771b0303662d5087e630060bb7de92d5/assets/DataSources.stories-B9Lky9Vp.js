import{j as r}from"./iframe-BYf_OhJ0.js";import{O as b}from"./object-table-NEoJVSjw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BaE6Gf2c.js";import{u as g}from"./useOsdkClient-BLIl6zwO.js";import"./preload-helper-CMb40c8b.js";import"./Table-BNhjkCw_.js";import"./index-D24vcPYb.js";import"./Dialog-C2jKXI3g.js";import"./cross-937OAABn.js";import"./svgIconContainer-CLNhy3XP.js";import"./useBaseUiId-BV6TRjLb.js";import"./InternalBackdrop-C9IU7SA-.js";import"./composite-Czk5304D.js";import"./index-Cfn6IIi-.js";import"./index-C0REXx9G.js";import"./index-BUkZX9cq.js";import"./useEventCallback-B4MxpH1S.js";import"./SkeletonBar-hbjfgvT2.js";import"./LoadingCell-BSv2ov2l.js";import"./ColumnConfigDialog-JMRVff0D.js";import"./DraggableList-Dw0_e9Nv.js";import"./search-CG-g63hT.js";import"./Input-jGJDNg7d.js";import"./useControlled-D82M4IV8.js";import"./Button-HH_9r5OW.js";import"./small-cross-DiOHh5rF.js";import"./ActionButton-Deb6A0x0.js";import"./Checkbox-B8FrTbPR.js";import"./useValueChanged-D_qKRuH6.js";import"./CollapsiblePanel-BS-j2JIg.js";import"./MultiColumnSortDialog-CteiIVyV.js";import"./MenuTrigger-Bv0LSSPW.js";import"./CompositeItem-CptL6v0D.js";import"./ToolbarRootContext-U6rUTj3k.js";import"./getDisabledMountTransitionStyles-Dbvx_1LF.js";import"./getPseudoElementBounds-DTEyIocp.js";import"./chevron-down-BFyWQHOE.js";import"./index-DGCG5Etv.js";import"./error-IoYBerAI.js";import"./BaseCbacBanner-DBesyPHX.js";import"./makeExternalStore-xpSL_Msm.js";import"./Tooltip-C2Ov1JFy.js";import"./PopoverPopup-DKUxgHWp.js";import"./debounce-Cx3iNRX1.js";import"./tick-C0Y_aYcJ.js";import"./DropdownField-CKAAt-ca.js";import"./isEqual-BoWnJhtt.js";import"./withOsdkMetrics-D932jFv2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
