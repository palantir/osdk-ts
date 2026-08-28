import{j as r}from"./iframe-DWvzDoTE.js";import{O as b}from"./object-table-8nYiaszu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DEsPu1cy.js";import{u as g}from"./useOsdkClient-s2lA0VPO.js";import"./preload-helper-ByL0Uuda.js";import"./Table-D0j1LDAV.js";import"./index-BBS1h8cn.js";import"./Dialog-CSZr3sQl.js";import"./cross--Y2f0GiD.js";import"./svgIconContainer-BhadlONA.js";import"./useBaseUiId-CMlf_How.js";import"./InternalBackdrop-Cf-iMcVw.js";import"./composite-BIHrvkj3.js";import"./index-BQWPPGSx.js";import"./index-q_1-gxWd.js";import"./index-cn8ZGUe5.js";import"./useEventCallback-CLbs7kRX.js";import"./SkeletonBar-Dh1OEZAF.js";import"./LoadingCell-BezJaplu.js";import"./ColumnConfigDialog-DAotHv7w.js";import"./DraggableList-BTEdgyZX.js";import"./search-BObskws0.js";import"./Input-DiGaV4rJ.js";import"./useControlled-DfUZjtJU.js";import"./Button-DwyCCUCH.js";import"./small-cross-Ci3vpnc1.js";import"./ActionButton-CgSZK0K1.js";import"./Checkbox-CSrcKRpx.js";import"./useValueChanged-Cub_cMIY.js";import"./CollapsiblePanel-CFHmzmB0.js";import"./MultiColumnSortDialog-B01Dc84v.js";import"./MenuTrigger-Df2Y7rGo.js";import"./CompositeItem-DeeOISel.js";import"./ToolbarRootContext-B7EsbN7p.js";import"./getDisabledMountTransitionStyles-C1rCgQf8.js";import"./getPseudoElementBounds-B5N3m30C.js";import"./chevron-down-BZ6p4J3G.js";import"./index-Bu_tjXun.js";import"./error-DJSg9FwQ.js";import"./BaseCbacBanner-B_OmK-25.js";import"./makeExternalStore-BresugQV.js";import"./Tooltip-DoT3m1bO.js";import"./PopoverPopup-CbJaaqPE.js";import"./debounce-DNUqOVJ3.js";import"./tick-BiKiKjho.js";import"./DropdownField-CDx_h5d6.js";import"./isEqual-CO1MvszY.js";import"./withOsdkMetrics-5t1Ggpdt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
