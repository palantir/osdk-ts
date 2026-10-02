import{j as r}from"./iframe-_pZ-OrnG.js";import{O as b}from"./object-table-r3WkwVVv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BAuljeY5.js";import{u as g}from"./useOsdkClient-CXug1a02.js";import"./preload-helper-CI2nkxYP.js";import"./Table-OtroCakx.js";import"./index-BzR1Js4P.js";import"./Dialog-BQJcGlPc.js";import"./cross-DHXoKhRr.js";import"./svgIconContainer-Df8znJbK.js";import"./useBaseUiId-sTNVvHGV.js";import"./InternalBackdrop-Bo6uJZfN.js";import"./composite-s_PtHBLY.js";import"./index-C7S3dsZZ.js";import"./index-fBaLvFhr.js";import"./index-BarU5QY7.js";import"./useEventCallback-ChWi4eCf.js";import"./SkeletonBar-BFdlYeDG.js";import"./LoadingCell-D1X8FIjN.js";import"./ColumnConfigDialog-BPSyj1CE.js";import"./DraggableList-BLYOh7Ub.js";import"./search-ChtcLVXZ.js";import"./Input-DDttcV3K.js";import"./useControlled-MIg91upF.js";import"./Button-HWVms3sL.js";import"./small-cross-cg-4l1k7.js";import"./ActionButton-CtdL7XCW.js";import"./Checkbox-xcdgEr09.js";import"./useValueChanged-BA_OyhSR.js";import"./CollapsiblePanel-D-pLoE7v.js";import"./MultiColumnSortDialog-C9MPFbPJ.js";import"./MenuTrigger-C6Iqz-rw.js";import"./CompositeItem-1-7kFxMp.js";import"./ToolbarRootContext-DDubgB6v.js";import"./getDisabledMountTransitionStyles-D1TqjFAj.js";import"./getPseudoElementBounds-CSJkhnGQ.js";import"./chevron-down-DaGWzrOS.js";import"./index-5qJDayCH.js";import"./error-CDa2ZV4b.js";import"./BaseCbacBanner-B5NHyS1X.js";import"./makeExternalStore-_KUFuRZc.js";import"./Tooltip-Cv-ahOg4.js";import"./PopoverPopup-CeDlnkfZ.js";import"./debounce-Cs0rV5XU.js";import"./tick-B25sgwJt.js";import"./DropdownField-Boodu9_n.js";import"./isEqual-DkHXmUl6.js";import"./withOsdkMetrics-CNAkmbs_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
