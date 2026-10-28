import{j as r}from"./iframe-Cbj36Vfl.js";import{O as b}from"./object-table-Ck_Gk-KX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7oJn_QO.js";import{u as g}from"./useOsdkClient-Z_Xvqm2q.js";import"./preload-helper-D9vtqHHo.js";import"./Table-CSAIsRfe.js";import"./index-CsY1LewD.js";import"./Dialog-B6LavUp4.js";import"./cross-BMM6M_v0.js";import"./svgIconContainer-hIUzSHkO.js";import"./useBaseUiId-Dm0BFRC6.js";import"./InternalBackdrop-BqigWIDb.js";import"./composite-BNLz_aLE.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./index-D7hW5oga.js";import"./useEventCallback-Dlret5nm.js";import"./SkeletonBar-SALMo7gf.js";import"./LoadingCell-xwoMoQxj.js";import"./ColumnConfigDialog-Br62xFzv.js";import"./DraggableList-hYn9rXPD.js";import"./search-B0cFd55B.js";import"./Input-bczR2KJT.js";import"./useControlled-BLkU7nYF.js";import"./Button-BvKlSQww.js";import"./small-cross-CPlaBkT_.js";import"./ActionButton-C-4-1sk9.js";import"./Checkbox-KclU3XSR.js";import"./useValueChanged-Be0rmsr7.js";import"./CollapsiblePanel-DTg3GoH2.js";import"./MultiColumnSortDialog-DDicJckq.js";import"./MenuTrigger-DtrhwXCR.js";import"./CompositeItem-DyJlzvO6.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./getDisabledMountTransitionStyles-DVNBPl0-.js";import"./getPseudoElementBounds-BzB85nEj.js";import"./chevron-down-b6fjz5-P.js";import"./index-DGMJzfmR.js";import"./error-B5SQU-7B.js";import"./BaseCbacBanner-i0Mk5qM4.js";import"./makeExternalStore-BQvhAloH.js";import"./Tooltip-DFxnzQIr.js";import"./PopoverPopup-DVJleO51.js";import"./debounce-C-I-lp5G.js";import"./tick-DrdzLXJS.js";import"./DropdownField-Bd5p68Fh.js";import"./isEqual-B4e635j3.js";import"./withOsdkMetrics-CvORwH-d.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
