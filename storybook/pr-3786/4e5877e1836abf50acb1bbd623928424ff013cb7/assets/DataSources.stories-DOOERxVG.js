import{j as r}from"./iframe-MF63RCUZ.js";import{O as b}from"./object-table-B1Ypexgb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZLon0-o.js";import{u as g}from"./useOsdkClient-BEI3rOfS.js";import"./preload-helper-DvQeEzbA.js";import"./Table-BWL-PW0S.js";import"./index-BsS8Ad6v.js";import"./Dialog-CBu8QmP7.js";import"./cross-C5H7VazR.js";import"./svgIconContainer-CzxYuxa2.js";import"./useBaseUiId-D7wMMgsQ.js";import"./InternalBackdrop-qC9vW87x.js";import"./composite-CBfzCsM2.js";import"./index-B1tq7kv6.js";import"./index-B06jfM7c.js";import"./index-BrI0R_vY.js";import"./useEventCallback-DOmeJx8A.js";import"./SkeletonBar-DU19Vxbe.js";import"./LoadingCell-DyARQyNi.js";import"./ColumnConfigDialog-HoXD5K7J.js";import"./DraggableList-CIawcaEC.js";import"./search-4dF9BFi8.js";import"./Input-B6hVPh5g.js";import"./useControlled-TaG5JPxa.js";import"./isEqual-LCBqTXxA.js";import"./isObject-1fyQf0iO.js";import"./Button-Bzl-gWe6.js";import"./ActionButton-Bjwv3Unh.js";import"./Checkbox-Bj0ZVhBK.js";import"./useValueChanged-DTIerqn2.js";import"./CollapsiblePanel-DpUXh9Ij.js";import"./MultiColumnSortDialog-Cxua4UI-.js";import"./MenuTrigger-DSBNJCan.js";import"./CompositeItem-ChERQduX.js";import"./ToolbarRootContext-BoLp0fCS.js";import"./getDisabledMountTransitionStyles-BqGXZg34.js";import"./getPseudoElementBounds-CFon9szC.js";import"./chevron-down-qOKU7sUg.js";import"./index-HZptSSoa.js";import"./error-CctGQP8r.js";import"./BaseCbacBanner-DF0iWHIL.js";import"./makeExternalStore-wceSjJpr.js";import"./Tooltip-Bdp1aQB1.js";import"./PopoverPopup-AmaOsHTk.js";import"./toNumber-Bn5OpuVG.js";import"./tick-6v28SiNQ.js";import"./DropdownField-C5RPpEqs.js";import"./withOsdkMetrics-Bxcv8v2w.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
