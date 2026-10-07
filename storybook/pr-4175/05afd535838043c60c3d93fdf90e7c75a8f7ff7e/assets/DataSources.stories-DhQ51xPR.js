import{j as r}from"./iframe-BuDnfqKQ.js";import{O as b}from"./object-table-C29Cpgw-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9JC6gsuI.js";import{u as g}from"./useOsdkClient-W2M41dpd.js";import"./preload-helper-B6J6BeBc.js";import"./Table-CZu0_kzA.js";import"./index-B6xFqDwW.js";import"./Dialog-ClOQevqP.js";import"./cross-FLwBoLKf.js";import"./svgIconContainer-DN1WNNEt.js";import"./useBaseUiId-Cy8x85cF.js";import"./InternalBackdrop-DkXtTuDL.js";import"./composite-DOI6fCuf.js";import"./index-VpAGjtCA.js";import"./index-Bcup2US4.js";import"./index-DNpn1j7J.js";import"./useEventCallback-D_AQe9Gp.js";import"./SkeletonBar-D9mhSkMY.js";import"./LoadingCell-Bnzn1we7.js";import"./ColumnConfigDialog-77MIy4UO.js";import"./DraggableList-DCJMvK_P.js";import"./search-CoDCGLUE.js";import"./Input-fZvrHimm.js";import"./useControlled-BWRXH__P.js";import"./Button-Ckrw6oVp.js";import"./small-cross-CDW2_ykz.js";import"./ActionButton-Dsev2y4b.js";import"./Checkbox-B3uIo4CQ.js";import"./useValueChanged-B0zicMaZ.js";import"./CollapsiblePanel-DY0hwdGx.js";import"./MultiColumnSortDialog-DYraEMIQ.js";import"./MenuTrigger-D2IDN6Ne.js";import"./CompositeItem-Dc19RcBz.js";import"./ToolbarRootContext-DTTMwqZv.js";import"./getDisabledMountTransitionStyles-C7ybyuH6.js";import"./getPseudoElementBounds-DcYnu62v.js";import"./chevron-down-C4fOxkM5.js";import"./index-zf1BCIO_.js";import"./error-DtRlIBmm.js";import"./BaseCbacBanner-DV5GW8yv.js";import"./makeExternalStore-CDWi_CU5.js";import"./Tooltip-vIT7M_iB.js";import"./PopoverPopup-WRtj1oNl.js";import"./debounce-hk0kLUMs.js";import"./tick-DGYqdZi_.js";import"./DropdownField-Cn3SsOCQ.js";import"./isEqual-YCz6Riny.js";import"./withOsdkMetrics-cl6CbOTk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
