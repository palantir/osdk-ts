import{j as r}from"./iframe-Ct3jhQ3b.js";import{O as b}from"./object-table-DcoD00Uh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zY1ssSVU.js";import{u as g}from"./useOsdkClient-DDGUV8GT.js";import"./preload-helper-COHmdbwf.js";import"./Table-DTuKtZkW.js";import"./index-CgPM3gA5.js";import"./Dialog-gEwPqwK4.js";import"./cross-He-PHYhY.js";import"./svgIconContainer-DvsmJFgi.js";import"./useBaseUiId-CJ7H8A6B.js";import"./InternalBackdrop-CUWmOGHP.js";import"./composite-vVcQOeOT.js";import"./index-CCZpef3e.js";import"./index-C89TlbH2.js";import"./index-CDi56eog.js";import"./useEventCallback-B6cGOJ6l.js";import"./SkeletonBar-xKpo9Z1Z.js";import"./LoadingCell-DOixDFMt.js";import"./ColumnConfigDialog-BGhaL0oB.js";import"./DraggableList-kARAxkem.js";import"./search-DmHt-KVR.js";import"./Input-hJWV4A37.js";import"./useControlled-CrEjWPz9.js";import"./isEqual-m4kELLk6.js";import"./isObject-BedEVD4j.js";import"./Button-BDlShN-U.js";import"./ActionButton-C4F15PRz.js";import"./Checkbox-4csc6eJV.js";import"./useValueChanged-BCXDfKlq.js";import"./CollapsiblePanel-9yNoItXE.js";import"./MultiColumnSortDialog-agoS4Ejo.js";import"./MenuTrigger-DsmfFaf8.js";import"./CompositeItem-B3RwG7sH.js";import"./ToolbarRootContext-CAsR0ulO.js";import"./getDisabledMountTransitionStyles-BGm_GsgA.js";import"./getPseudoElementBounds-BYnhVZJr.js";import"./chevron-down-Cr-g2sf1.js";import"./index-DyYuYiTt.js";import"./error-DbtsfcJt.js";import"./BaseCbacBanner-DvPWyofK.js";import"./makeExternalStore-B7M8VDNS.js";import"./Tooltip-BRvtEqVQ.js";import"./PopoverPopup-Xa7WFA5W.js";import"./toNumber-fhQmxxZE.js";import"./tick-Cr1zVoZU.js";import"./DropdownField-CqA69UfO.js";import"./withOsdkMetrics-fRAXYRw-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
