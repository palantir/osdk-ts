import{j as r}from"./iframe-BFVvXCDn.js";import{O as b}from"./object-table-D3-elgUM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ed5iTM86.js";import{u as g}from"./useOsdkClient-Cl7GKeeY.js";import"./preload-helper-50_WzFUV.js";import"./Table-CrnkCGgg.js";import"./index-QM5k4kGb.js";import"./Dialog-ChCe0ln8.js";import"./cross-BFaVqKHr.js";import"./svgIconContainer-BV-Z1JXi.js";import"./useBaseUiId-B694u7eA.js";import"./InternalBackdrop-DBCVqNCu.js";import"./composite-CzVxjBsa.js";import"./index-iRevsRnR.js";import"./index-BOeHgaJB.js";import"./index-CqQv2dpe.js";import"./useEventCallback-mJtTvRIv.js";import"./SkeletonBar-Bmfk3osh.js";import"./LoadingCell-BCQcznuJ.js";import"./ColumnConfigDialog-B4G1AxcS.js";import"./DraggableList-DsdqaVxR.js";import"./search-CW9s8WSc.js";import"./Input-Dtig63-B.js";import"./useControlled-DyhWa7C1.js";import"./Button-Dcbnl--f.js";import"./small-cross-BxlAPzIk.js";import"./ActionButton-1gMKJ2dZ.js";import"./Checkbox-BtI0IIOe.js";import"./useValueChanged-BGrg1pf-.js";import"./CollapsiblePanel-5KoLIkeE.js";import"./MultiColumnSortDialog-C7gZDRiC.js";import"./MenuTrigger-P7WZCQyo.js";import"./CompositeItem-f5g69QxK.js";import"./ToolbarRootContext-CrlmdYIj.js";import"./getDisabledMountTransitionStyles-BOSuCcSN.js";import"./getPseudoElementBounds-D-HLiNmi.js";import"./chevron-down-BOFD2Flq.js";import"./index-BMCmLaDr.js";import"./error-DOU--p1t.js";import"./BaseCbacBanner-DO3fHETM.js";import"./makeExternalStore-BWSWF8JC.js";import"./Tooltip-CALPreUU.js";import"./isObject-C2c9eo6X.js";import"./debounce-DWkSOkQq.js";import"./tick-CoqVexrK.js";import"./DropdownField-DspSlDyP.js";import"./isEqual-B-ghy4pr.js";import"./_baseIsEqual-Cw0xf_Tt.js";import"./withOsdkMetrics-NltFnboY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
