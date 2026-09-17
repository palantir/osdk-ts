import{j as r}from"./iframe-CMm4N1y0.js";import{O as b}from"./object-table-_y8JQsVL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BihZ0QzW.js";import{u as g}from"./useOsdkClient-DhcRZ6oq.js";import"./preload-helper-DPdS5gYT.js";import"./Table-B-jh3DiY.js";import"./index-mc6WZDuQ.js";import"./Dialog-7hbNYFd7.js";import"./cross-w0K8LNSt.js";import"./svgIconContainer-zPF7HvxF.js";import"./useBaseUiId-DSNrt-U2.js";import"./InternalBackdrop-C3wXessL.js";import"./composite-BoQ1iNnl.js";import"./index-DgJDHTvw.js";import"./index-ULPzqRga.js";import"./index-TDPUwOnJ.js";import"./useEventCallback-C1kO7wJe.js";import"./SkeletonBar-BX6mbipF.js";import"./LoadingCell-BLjl_Xzy.js";import"./ColumnConfigDialog-CNZf5IfJ.js";import"./DraggableList-DhyTCalD.js";import"./search-CiZI6CH-.js";import"./Input-WLnnNcib.js";import"./useControlled-BNALToTQ.js";import"./Button-RJLOnGs4.js";import"./small-cross-Bzj4KzKP.js";import"./ActionButton-C1HDW1tb.js";import"./Checkbox-y1Ue4XXM.js";import"./useValueChanged-BAb8DN1s.js";import"./CollapsiblePanel-CKo7WZyd.js";import"./MultiColumnSortDialog-BhbhduM7.js";import"./MenuTrigger-BgJpdaXh.js";import"./CompositeItem-BwL5uNEu.js";import"./ToolbarRootContext-Dy9xQ5C5.js";import"./getDisabledMountTransitionStyles-WnHy71z6.js";import"./getPseudoElementBounds-CbILzRJ8.js";import"./chevron-down-BWoDSlPa.js";import"./index-DdpoA6j8.js";import"./error-BNe6vl6a.js";import"./BaseCbacBanner-CR1fj-E0.js";import"./makeExternalStore-C-_FdC6k.js";import"./Tooltip-B56bZ38u.js";import"./PopoverPopup-COua6oiQ.js";import"./debounce-e_CiYFMe.js";import"./tick-Blq7nSqP.js";import"./DropdownField-Dpg0H91Q.js";import"./isEqual-CGKBuTFm.js";import"./withOsdkMetrics-CWiHOjas.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
