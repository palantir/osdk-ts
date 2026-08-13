import{j as r}from"./iframe-bNAYk0hy.js";import{O as b}from"./object-table-CSZxQBve.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B77ku5Zo.js";import{u as g}from"./useOsdkClient-gxN5dHTy.js";import"./preload-helper-CQ5U1hQl.js";import"./Table-DVRs9qlP.js";import"./index-eix3MTjz.js";import"./Dialog-DLZpRsoq.js";import"./cross-DSIbsL7t.js";import"./svgIconContainer-DJx5jlT5.js";import"./useBaseUiId-CikYSBzo.js";import"./InternalBackdrop-CAXB0gyq.js";import"./composite-C7-i_V8V.js";import"./index-IAiWYuzu.js";import"./index-BwgJiaXn.js";import"./index-BpDyLH-S.js";import"./useEventCallback-BldKbH1U.js";import"./SkeletonBar-CCifESnd.js";import"./LoadingCell-vMwLQa_p.js";import"./ColumnConfigDialog-DKStTV1K.js";import"./DraggableList-kmfbOYxS.js";import"./search-CvDdJ2-k.js";import"./Input-D9AajCS5.js";import"./useControlled-hDIfys90.js";import"./isEqual-CtDhx2lU.js";import"./isObject-By5jPSwj.js";import"./Button-VKmMP51o.js";import"./ActionButton-BHUPjqLL.js";import"./Checkbox-Dh435iFc.js";import"./useValueChanged-CvnHJGQT.js";import"./CollapsiblePanel-C6CSWqsF.js";import"./MultiColumnSortDialog-Jrkquew0.js";import"./MenuTrigger-DRrPLYuS.js";import"./CompositeItem-Bpfmjo39.js";import"./ToolbarRootContext-D9woatH8.js";import"./getDisabledMountTransitionStyles-CUjNZds2.js";import"./getPseudoElementBounds-DSHcjyVN.js";import"./chevron-down-CxlO7014.js";import"./index-Djn4JDgp.js";import"./error-B2PTJyqI.js";import"./BaseCbacBanner-C8OdJ0hg.js";import"./makeExternalStore-BlpmVTTs.js";import"./Tooltip-D7LvMzap.js";import"./PopoverPopup-DcP9tdE3.js";import"./toNumber-DMOXJ5Go.js";import"./tick-DRCq7k-D.js";import"./DropdownField-CEqU3eXX.js";import"./withOsdkMetrics-DtPiNcid.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
