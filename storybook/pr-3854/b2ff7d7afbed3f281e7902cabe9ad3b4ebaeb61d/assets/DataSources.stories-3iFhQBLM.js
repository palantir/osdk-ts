import{j as r}from"./iframe-ChQS4fGd.js";import{O as b}from"./object-table-zqudqCYQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8nwcXIa.js";import{u as g}from"./useOsdkClient-CUanDJGQ.js";import"./preload-helper-o8EhEng-.js";import"./Table-q5PrbWBb.js";import"./index-DZsfYQUh.js";import"./Dialog-BW8XeS8J.js";import"./cross-BqJybnVy.js";import"./svgIconContainer-UT5S-Qtm.js";import"./useBaseUiId-Dg-otjCc.js";import"./InternalBackdrop-D1vznKvg.js";import"./composite-f13ydLOS.js";import"./index-9CgMei2H.js";import"./index-nt6OvndA.js";import"./index-DjVNIh5u.js";import"./useEventCallback-D8iwCbQb.js";import"./SkeletonBar-CgCL-n5s.js";import"./LoadingCell-CQlpsd7o.js";import"./ColumnConfigDialog-zp9qo-ui.js";import"./DraggableList-EMR8XNJV.js";import"./search-BFdafJgA.js";import"./Input-BFNpbac3.js";import"./useControlled-BniVA-EE.js";import"./isEqual-3YQY8-Ph.js";import"./isObject-J1OTBo5j.js";import"./Button-CYlIk1Nd.js";import"./ActionButton-ZYvQWeAY.js";import"./Checkbox-Bw8bJgiL.js";import"./useValueChanged-B1jygDYc.js";import"./CollapsiblePanel-7L4laSgA.js";import"./MultiColumnSortDialog-D4AFgP0w.js";import"./MenuTrigger-a0Yj9qq1.js";import"./CompositeItem-Bn7WLSGF.js";import"./ToolbarRootContext-BjBgCtBr.js";import"./getDisabledMountTransitionStyles-DSHiyr0R.js";import"./getPseudoElementBounds-Cd9WAzNR.js";import"./chevron-down-DFnbRAwR.js";import"./index-Bn32b-Uw.js";import"./error-eFbYOEWl.js";import"./BaseCbacBanner-D3DhFOw9.js";import"./makeExternalStore-CrnVNZp8.js";import"./Tooltip-DiI5K9Z3.js";import"./PopoverPopup-Dqc30zxS.js";import"./toNumber-CBsqbx8y.js";import"./tick-BlO92Q8N.js";import"./DropdownField-d2aICtJf.js";import"./withOsdkMetrics-BCsSlf5g.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
