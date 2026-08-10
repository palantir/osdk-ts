import{j as r}from"./iframe-Dtwn1vaw.js";import{O as b}from"./object-table-CEI4N6Za.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CXGOzzMo.js";import{u as g}from"./useOsdkClient-B4zXXxsr.js";import"./preload-helper-EpvM9Ejn.js";import"./Table-CvnfGKlu.js";import"./index-CunnqZpb.js";import"./Dialog-j3K-chFS.js";import"./cross-BHQxszC7.js";import"./svgIconContainer-izBi4AJd.js";import"./useBaseUiId-Baeg5MQx.js";import"./InternalBackdrop-Bxd08zby.js";import"./composite-C7Srcoag.js";import"./index-ChzJykBZ.js";import"./index-aqrfc_zQ.js";import"./index-B423TLwj.js";import"./useEventCallback-DrxsS8K6.js";import"./SkeletonBar-CaDAhZV5.js";import"./LoadingCell-BNtsK6PU.js";import"./ColumnConfigDialog-ADtA4lCe.js";import"./DraggableList-06D9Mrsz.js";import"./search-CRFQi4jP.js";import"./Input-Cew0RWyc.js";import"./useControlled-Dazae9yM.js";import"./isEqual-BPqr3PbN.js";import"./isObject-DBe7k9DU.js";import"./Button-D7-EaGpa.js";import"./ActionButton-CxI_vRnD.js";import"./Checkbox-D7aMj2qB.js";import"./useValueChanged-QK2zgrTX.js";import"./CollapsiblePanel-B-7lwV-a.js";import"./MultiColumnSortDialog-DUyF4Tr3.js";import"./MenuTrigger-TOQmE5Pc.js";import"./CompositeItem-HRSe5nIw.js";import"./ToolbarRootContext-CQKzf5TQ.js";import"./getDisabledMountTransitionStyles-DMV058GO.js";import"./getPseudoElementBounds-DP8jlLgR.js";import"./chevron-down-C6NPTEnO.js";import"./index-B0n_Y7CH.js";import"./error-BogrZtpi.js";import"./BaseCbacBanner-CxcIFkR6.js";import"./makeExternalStore-B_XP8khw.js";import"./Tooltip-el26iOsi.js";import"./PopoverPopup-CDZymUnO.js";import"./toNumber-BI5qEEAa.js";import"./tick-DMpW6dCv.js";import"./DropdownField-DNtKIDLm.js";import"./withOsdkMetrics-BJmUIy28.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
