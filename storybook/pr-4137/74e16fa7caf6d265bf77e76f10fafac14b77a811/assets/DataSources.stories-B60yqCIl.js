import{j as r}from"./iframe-hU9JLApV.js";import{O as b}from"./object-table-B50JdQkR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsoinM0q.js";import{u as g}from"./useOsdkClient-BPIKz5PZ.js";import"./preload-helper-AOIAtsF4.js";import"./Table-4tKIzzPo.js";import"./index-hWpPzCns.js";import"./Dialog-U7hbNLwM.js";import"./cross-B2QeVIfm.js";import"./svgIconContainer-C2qhBo7T.js";import"./useBaseUiId-D4EPdJVo.js";import"./InternalBackdrop-DvZB-fzK.js";import"./composite-CG9ZuuKA.js";import"./index-B1eIq1Hb.js";import"./index-DQGyJzH9.js";import"./index-DbLRwfYB.js";import"./useEventCallback-XLlsNp-i.js";import"./SkeletonBar-WjiSPHnz.js";import"./LoadingCell-tB5pg5rq.js";import"./ColumnConfigDialog-Bqk-ioAY.js";import"./DraggableList-DbBUvzj3.js";import"./search-B_1m1rLM.js";import"./Input-BRXbodNm.js";import"./useControlled-Ee3F40Eh.js";import"./Button-DajEVgZJ.js";import"./small-cross-D-LS-vPt.js";import"./ActionButton-0n8OLKNq.js";import"./Checkbox-BnIM9uz-.js";import"./useValueChanged-ChtPqi2-.js";import"./CollapsiblePanel-Bs_-I03G.js";import"./MultiColumnSortDialog-DWhI25AZ.js";import"./MenuTrigger-DXB12-gq.js";import"./CompositeItem-D6B-PBPX.js";import"./ToolbarRootContext-CBnaAJo0.js";import"./getDisabledMountTransitionStyles-WyR546rw.js";import"./getPseudoElementBounds-DToXqBfP.js";import"./chevron-down--KZfqGJl.js";import"./index-DcEtsm11.js";import"./error-C7_JEIae.js";import"./BaseCbacBanner-DzeFUZ4e.js";import"./makeExternalStore-DI5XEFVo.js";import"./Tooltip-CunLwW9k.js";import"./PopoverPopup-DNRoc5pz.js";import"./debounce-DmZrR2IV.js";import"./tick-BovZGh7I.js";import"./DropdownField-DSjeR55H.js";import"./isEqual-DXIwE2uQ.js";import"./withOsdkMetrics-D81YUmhb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
