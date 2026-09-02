import{j as r}from"./iframe-DT3Pq7Dk.js";import{O as b}from"./object-table-g1XMDFd-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PYQ0SFzv.js";import{u as g}from"./useOsdkClient-CGIMjlzr.js";import"./preload-helper-D2GrK1CJ.js";import"./Table-Bh-9mYaq.js";import"./index-AT_VLJBX.js";import"./Dialog-l-bas76Q.js";import"./cross-CW5vZ7KQ.js";import"./svgIconContainer-TdCO8fzr.js";import"./useBaseUiId-Laeorjq3.js";import"./InternalBackdrop--c_GjfBN.js";import"./composite-BLTBB5ty.js";import"./index-DzCFWbuW.js";import"./index-fPrU9AoD.js";import"./index-CN1cNOfe.js";import"./useEventCallback-BxHIphzr.js";import"./SkeletonBar-fo9N7Mio.js";import"./LoadingCell-i4o0PZ76.js";import"./ColumnConfigDialog-DCZ2hIsl.js";import"./DraggableList-CyEH8jAj.js";import"./search-riKbdAfC.js";import"./Input-Bb6sqNmB.js";import"./useControlled-CytQjpOe.js";import"./Button-DyNME9ua.js";import"./small-cross-DVimoYxF.js";import"./ActionButton-CB14cvAW.js";import"./Checkbox-BYlPaTiv.js";import"./useValueChanged-DaOIj_Om.js";import"./CollapsiblePanel-DKE9kt7B.js";import"./MultiColumnSortDialog-V1bLreRv.js";import"./MenuTrigger-DRejejB5.js";import"./CompositeItem-DwUvkpMk.js";import"./ToolbarRootContext-BXZtSj06.js";import"./getDisabledMountTransitionStyles-sPoOQ_E8.js";import"./getPseudoElementBounds-yDZ97H6Z.js";import"./chevron-down-puCe9vK2.js";import"./index-Cm0FOdoZ.js";import"./error-CJNV9pQn.js";import"./BaseCbacBanner-VqYtHkBJ.js";import"./makeExternalStore-Do_G056M.js";import"./Tooltip-DCOTkgJf.js";import"./PopoverPopup-qAtb92MM.js";import"./debounce-CfPojQAv.js";import"./tick-Dt4R6xeY.js";import"./DropdownField-C5cLUDqt.js";import"./isEqual-DHwQUV_q.js";import"./withOsdkMetrics-Bxhj5aXe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
