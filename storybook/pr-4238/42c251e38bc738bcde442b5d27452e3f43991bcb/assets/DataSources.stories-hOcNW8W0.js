import{j as r}from"./iframe-D2f1Nzwk.js";import{O as b}from"./object-table-CIIsCPIu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cqeeFijg.js";import{u as g}from"./useOsdkClient-DHeuZpzO.js";import"./preload-helper-oV1Eeolq.js";import"./Table-DPxHFvSR.js";import"./index-DLHsiDYZ.js";import"./Dialog-uAL31SBn.js";import"./cross-DkwiluwT.js";import"./svgIconContainer-CmuFo95M.js";import"./useBaseUiId-C1fFwhw7.js";import"./InternalBackdrop-lpGOYkEJ.js";import"./composite-CiG9-8W_.js";import"./index-QYMyWYDY.js";import"./index-BojiIOfH.js";import"./index-BmDZuti5.js";import"./useEventCallback-tMcy_YiL.js";import"./SkeletonBar-nGMBXhyP.js";import"./LoadingCell-8BQAcXDu.js";import"./ColumnConfigDialog-BW_W77MG.js";import"./DraggableList-B3svYvPz.js";import"./search-Cf99U-Bj.js";import"./Input-DGocKpsh.js";import"./useControlled-CNjTn84h.js";import"./Button-D6z8871L.js";import"./small-cross-BPAsCQGt.js";import"./ActionButton-B_L3rwG4.js";import"./Checkbox-B3Qq5NtY.js";import"./useValueChanged-CUcJG0Bt.js";import"./CollapsiblePanel-BwmdKoWP.js";import"./MultiColumnSortDialog-B_NtWYuQ.js";import"./MenuTrigger-BC-gZs2H.js";import"./CompositeItem-C741riYb.js";import"./ToolbarRootContext-Dx7XJj5N.js";import"./getDisabledMountTransitionStyles-BNKxtgYL.js";import"./getPseudoElementBounds-kPdI6WhS.js";import"./chevron-down-DJdsQouz.js";import"./index-D02xz1tz.js";import"./error-BeTADbMo.js";import"./BaseCbacBanner-DrIYCssB.js";import"./makeExternalStore-DTw3LndD.js";import"./Tooltip-CDYk2b3D.js";import"./PopoverPopup-CsHrtQTv.js";import"./debounce-C9b86hHB.js";import"./tick-Bl3uL3bd.js";import"./DropdownField-D65WFOp_.js";import"./isEqual-CnaQZLDl.js";import"./withOsdkMetrics-BCs1456K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
