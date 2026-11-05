import{j as r}from"./iframe-wedJSnud.js";import{O as b}from"./object-table-BajGG0to.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-JirmtnZj.js";import{u as g}from"./useOsdkClient-C_rjoUrX.js";import"./preload-helper-DcVHnV_i.js";import"./Table-BLY9Mong.js";import"./index-BsI8HLJz.js";import"./Dialog-J4Cd9_OE.js";import"./cross-CxbFlbaI.js";import"./svgIconContainer-CJJHSkNv.js";import"./useBaseUiId-BGqSil3r.js";import"./InternalBackdrop-CYExiY0H.js";import"./composite-CGFDwdnq.js";import"./index-Nf3FTUKP.js";import"./index-BCNEaR-3.js";import"./index-DaGnA4hb.js";import"./useEventCallback-CSpaNNY7.js";import"./SkeletonBar-mu4DFzMg.js";import"./LoadingCell-BT-nN-EI.js";import"./ColumnConfigDialog-Bmw7mdxZ.js";import"./DraggableList-xmn571DV.js";import"./search-B0U_YWQT.js";import"./Input-Z8OuidlN.js";import"./useControlled-RZ5VMgMB.js";import"./Button-UisMFP1d.js";import"./small-cross-Cn8qa5Sh.js";import"./ActionButton-DaNuKssk.js";import"./Checkbox-BY-XFwqd.js";import"./useValueChanged-Bb0TAKp4.js";import"./CollapsiblePanel-C69XGwDY.js";import"./MultiColumnSortDialog-M_bQCmOw.js";import"./MenuTrigger-COtuRsgu.js";import"./CompositeItem-DUPpieEN.js";import"./ToolbarRootContext-Bs5SB0fX.js";import"./getDisabledMountTransitionStyles-DGGlYbfe.js";import"./getPseudoElementBounds-C5lKtGGS.js";import"./chevron-down-DkT3Qzaa.js";import"./index-DWYfh9fQ.js";import"./error-BFWppJ2G.js";import"./BaseCbacBanner-BQwi4y0V.js";import"./makeExternalStore-cCCuNZuQ.js";import"./Tooltip-BnvTu1M2.js";import"./PopoverPopup-BS1FnNJF.js";import"./debounce-slxGNpXd.js";import"./tick-B3xCBs79.js";import"./DropdownField-DA0RqhyD.js";import"./isEqual-7xOAoX3N.js";import"./withOsdkMetrics-B2en0C3P.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
