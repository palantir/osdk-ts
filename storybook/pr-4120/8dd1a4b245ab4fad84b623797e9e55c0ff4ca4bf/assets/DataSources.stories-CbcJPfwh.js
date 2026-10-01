import{j as r}from"./iframe-ixnzYDJA.js";import{O as b}from"./object-table-FxZET0rZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCg9GLZO.js";import{u as g}from"./useOsdkClient-BYHlAdtz.js";import"./preload-helper-DTj6niTD.js";import"./Table-DE-2Aep2.js";import"./index-CeyubrU3.js";import"./Dialog-BdjFtPMP.js";import"./cross-diJiZoAA.js";import"./svgIconContainer-CiY4wot1.js";import"./useBaseUiId-DzzMqJTn.js";import"./InternalBackdrop-Ck1Tk9Tq.js";import"./composite-CG-xrg6X.js";import"./index-DDQRM4oh.js";import"./index-Dha3uIo_.js";import"./index-EMWBONkK.js";import"./useEventCallback-PB3EUD-p.js";import"./SkeletonBar-DgekIIC1.js";import"./LoadingCell-Bt4RlXdb.js";import"./ColumnConfigDialog-BilUJCsd.js";import"./DraggableList-w52Xvsop.js";import"./search-BrEKKbX6.js";import"./Input-DVH5-_db.js";import"./useControlled-h88iCaOy.js";import"./Button-CvHMYUNQ.js";import"./small-cross-CeiH6pcZ.js";import"./ActionButton-Cht9C36-.js";import"./Checkbox-DeaULkFg.js";import"./useValueChanged-C2vQ6K14.js";import"./CollapsiblePanel-Df0hOccA.js";import"./MultiColumnSortDialog-BMQfLjDo.js";import"./MenuTrigger-ByZbYkPi.js";import"./CompositeItem-DpqiGqIY.js";import"./ToolbarRootContext-CnuOChH-.js";import"./getDisabledMountTransitionStyles-Bd-l4l0c.js";import"./getPseudoElementBounds-De5Rm4GT.js";import"./chevron-down-BsEexgTp.js";import"./index-DmvJAinh.js";import"./error-BPUNwXPy.js";import"./BaseCbacBanner-Bx1q06vG.js";import"./makeExternalStore-B3h5af1n.js";import"./Tooltip-DHz1HFpz.js";import"./PopoverPopup-p0xBFcZz.js";import"./debounce-CeVCi1dD.js";import"./tick-BZwA7raU.js";import"./DropdownField-Cr6FDOVB.js";import"./isEqual-B1OBGbvK.js";import"./withOsdkMetrics-6vyCE_R0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
