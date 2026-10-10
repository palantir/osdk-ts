import{j as r}from"./iframe-CvUSgiu3.js";import{O as b}from"./object-table-BvJbDI1c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-wVP4GU6M.js";import{u as g}from"./useOsdkClient-BU6oB7cD.js";import"./preload-helper-B0zyaiwI.js";import"./Table-BqGL8juK.js";import"./index-DmcWe2qf.js";import"./Dialog-BHI0eyC8.js";import"./cross-DrZXwXEo.js";import"./svgIconContainer-CTy32Y-c.js";import"./useBaseUiId-DY1Z1crQ.js";import"./InternalBackdrop-BjeXf3nJ.js";import"./composite-2ofaKrdo.js";import"./index-Cn7kZwJh.js";import"./index-40gUd9cg.js";import"./index-CiZrWga3.js";import"./useEventCallback-giAqM-Ga.js";import"./SkeletonBar-Crq6VcI5.js";import"./LoadingCell-ZMp_upZg.js";import"./ColumnConfigDialog-BdgHmIoU.js";import"./DraggableList-CI68k6Xu.js";import"./search-BikN9LqI.js";import"./Input-Dqxb3pxV.js";import"./useControlled-DxVirw8z.js";import"./Button-BbMrXCM7.js";import"./small-cross-brkzixeZ.js";import"./ActionButton-cWvGC5Rr.js";import"./Checkbox-BnT_7Zv0.js";import"./useValueChanged-B7529PCr.js";import"./CollapsiblePanel-DD_1P7Ak.js";import"./MultiColumnSortDialog-seWZwaRj.js";import"./MenuTrigger-hLB_c1Oa.js";import"./CompositeItem-BekmKE9y.js";import"./ToolbarRootContext-BRgMGrEJ.js";import"./getDisabledMountTransitionStyles-YgtPIr1c.js";import"./getPseudoElementBounds-BGaSa-J5.js";import"./chevron-down-BJ7q-Z6f.js";import"./index-CSjUKw3W.js";import"./error-CFT8_0w_.js";import"./BaseCbacBanner-owDcSAdE.js";import"./makeExternalStore-BqQyfi25.js";import"./Tooltip-DpOcBxM1.js";import"./PopoverPopup-CKHxkUKN.js";import"./debounce-C7rA69Kq.js";import"./tick-DVXui722.js";import"./DropdownField-B3F6gD4V.js";import"./isEqual-B-ebV27u.js";import"./withOsdkMetrics-B2ewH9eG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
