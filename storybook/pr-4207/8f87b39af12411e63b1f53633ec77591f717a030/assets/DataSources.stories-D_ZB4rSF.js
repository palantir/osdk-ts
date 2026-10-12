import{j as r}from"./iframe-DDCC62mw.js";import{O as b}from"./object-table-OQexuOAk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CUbF4JHU.js";import{u as g}from"./useOsdkClient-B0m0YA5K.js";import"./preload-helper-TbI6pun2.js";import"./Table-Ec8kAuP5.js";import"./index-z6zT66iy.js";import"./Dialog-DmoyXpWO.js";import"./cross-CFNkWks7.js";import"./svgIconContainer-8NI9Pceg.js";import"./useBaseUiId-Cx54uMSy.js";import"./InternalBackdrop-DEeOk2qp.js";import"./composite-oUxuVDiC.js";import"./index-BtGfhpV-.js";import"./index-8Tq8e6Kq.js";import"./index-C68Nk8KR.js";import"./useEventCallback-B5u_qSmP.js";import"./SkeletonBar-RZyiWmdj.js";import"./LoadingCell-C27X0YWe.js";import"./ColumnConfigDialog-BFe0lJSs.js";import"./DraggableList-BpIVC8Oz.js";import"./search-BJP-HOO5.js";import"./Input-L9q-qGHh.js";import"./useControlled-CHZ6ZiHg.js";import"./Button-DreRcsv2.js";import"./small-cross-ZcATWl5F.js";import"./ActionButton-CCAWhnCb.js";import"./Checkbox-D1ridbKQ.js";import"./useValueChanged-R_tn0UMM.js";import"./CollapsiblePanel-D0jWvycX.js";import"./MultiColumnSortDialog-IUhDXqPY.js";import"./MenuTrigger-Bh4gyTRB.js";import"./CompositeItem-EdV_vQTm.js";import"./ToolbarRootContext-B4LwY6SC.js";import"./getDisabledMountTransitionStyles-BWc9hNjX.js";import"./getPseudoElementBounds-BxYMv3LN.js";import"./chevron-down-CKdPMFgU.js";import"./index-DNvyrcf-.js";import"./error-B0SCddV6.js";import"./BaseCbacBanner-lZ-L0DlF.js";import"./makeExternalStore-Bpmw5WPB.js";import"./Tooltip-C5trv4L9.js";import"./PopoverPopup-BChNR2Ib.js";import"./debounce-Dh0-cHXm.js";import"./tick-CQHTofux.js";import"./DropdownField-Be49_OLB.js";import"./isEqual-D9ZQ6BUD.js";import"./withOsdkMetrics-3tZAXSEA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
