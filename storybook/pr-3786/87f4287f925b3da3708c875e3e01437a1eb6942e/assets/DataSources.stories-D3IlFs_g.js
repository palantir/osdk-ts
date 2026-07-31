import{j as r}from"./iframe-DDyklOqc.js";import{O as b}from"./object-table-plfjXVhz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B9cyJ737.js";import{u as g}from"./useOsdkClient-BNFTlwlc.js";import"./preload-helper-zGI7Yyr8.js";import"./Table-CHP-tiia.js";import"./index-Cq1GlceI.js";import"./Dialog-CYMrzqcv.js";import"./cross-cqgsxvxK.js";import"./svgIconContainer-DYYBsVyS.js";import"./useBaseUiId-CL2qao4v.js";import"./InternalBackdrop-Do63knsO.js";import"./composite-DjHmc_aQ.js";import"./index-Hm27E7QB.js";import"./index-NsWDHRkU.js";import"./index-DNqPsVHJ.js";import"./useEventCallback-CiM_Yr5w.js";import"./SkeletonBar-DcAh4PoS.js";import"./LoadingCell-Bi8NE8uS.js";import"./ColumnConfigDialog-BPb1WDDZ.js";import"./DraggableList-DxfKbIWf.js";import"./search-C4C3nIjd.js";import"./Input-D2DBw9lp.js";import"./useControlled-cTNIA0eo.js";import"./isEqual-BVfWVCyt.js";import"./isObject-DBoXRpxl.js";import"./Button-LADwC7On.js";import"./ActionButton-BrPzztGK.js";import"./Checkbox-BFbJNOg7.js";import"./useValueChanged-9WP7sBg-.js";import"./CollapsiblePanel-jsS8Tk9z.js";import"./MultiColumnSortDialog-BWVf6mZp.js";import"./MenuTrigger-RBmJHBav.js";import"./CompositeItem-5eebd8XY.js";import"./ToolbarRootContext-D_6EPlUH.js";import"./getDisabledMountTransitionStyles-Ccd2Ddlb.js";import"./getPseudoElementBounds-CaNVnY9n.js";import"./chevron-down-1ywypSY9.js";import"./index-BCJ7CEmI.js";import"./error-LXH3sKTV.js";import"./BaseCbacBanner-37-ItXHV.js";import"./makeExternalStore-CLRDsfbG.js";import"./Tooltip-CvX6YdpZ.js";import"./PopoverPopup-DoVtkP7T.js";import"./toNumber-Bru-kF0D.js";import"./tick-BWj2vwKM.js";import"./DropdownField-DwHIJNgc.js";import"./withOsdkMetrics-D9G2IFka.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
