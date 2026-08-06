import{j as r}from"./iframe-BfhfREBy.js";import{O as b}from"./object-table-BdEKKWyG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Br4GMZA4.js";import{u as g}from"./useOsdkClient-DJuT6gN4.js";import"./preload-helper--XKw4bmx.js";import"./Table-DN6hBFu4.js";import"./index-DytRM3DZ.js";import"./Dialog-B0Iyhd92.js";import"./cross-BeF5Hfc8.js";import"./svgIconContainer-DBAOF07n.js";import"./useBaseUiId-BFH0KUQX.js";import"./InternalBackdrop-1__YM29z.js";import"./composite-_2f5sVOd.js";import"./index-ynePoQ8g.js";import"./index-Dr01-4SU.js";import"./index-Due1erN9.js";import"./useEventCallback-5TxWd5hj.js";import"./SkeletonBar-oAugGI6e.js";import"./LoadingCell-vJXMX0HJ.js";import"./ColumnConfigDialog-CoAejl9e.js";import"./DraggableList-BxysQdA1.js";import"./search-6CMwLJx5.js";import"./Input-E-9p2WY9.js";import"./useControlled-B4Njh2P6.js";import"./isEqual-B2hwdr13.js";import"./isObject-tY7pGC-G.js";import"./Button-DfmbIkJw.js";import"./ActionButton-z6kXkFRx.js";import"./Checkbox-D9ToZicP.js";import"./useValueChanged-D1bvJZ5p.js";import"./CollapsiblePanel-BfxFWlSw.js";import"./MultiColumnSortDialog-D60zZ5t3.js";import"./MenuTrigger-Dr4UXyqw.js";import"./CompositeItem-BAnZg7F8.js";import"./ToolbarRootContext-CzwlFaUf.js";import"./getDisabledMountTransitionStyles-KI8Efmvq.js";import"./getPseudoElementBounds-BKuKIZFt.js";import"./chevron-down-CxBM7YTA.js";import"./index-kesKYPJD.js";import"./error-CzQ0trJH.js";import"./BaseCbacBanner-L0MLNs4l.js";import"./makeExternalStore-BxS-AXBE.js";import"./Tooltip-zehB6lqO.js";import"./PopoverPopup-CaH83dTo.js";import"./toNumber-B_6qp_vj.js";import"./tick-DMyW0avk.js";import"./DropdownField-BVt6Qs1V.js";import"./withOsdkMetrics-D87XtM7j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
