import{j as r}from"./iframe-D1j4WqtX.js";import{O as b}from"./object-table-D1E58D51.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BB9Ev8m6.js";import{u as g}from"./useOsdkClient-DKIRHYjG.js";import"./preload-helper-CIO_iRSv.js";import"./Table-CE1gQfSW.js";import"./index-CF3Sq86v.js";import"./Dialog-Bmt22dMU.js";import"./cross-Bu-eP3kR.js";import"./svgIconContainer-DQLh4QVM.js";import"./useBaseUiId-CvpmnQHF.js";import"./InternalBackdrop-BgpNPtgI.js";import"./composite-BY3OkPXB.js";import"./index-BVTY6Q3I.js";import"./index-CMSKaHd2.js";import"./index-DEbP6mAZ.js";import"./useEventCallback-BMLswSq8.js";import"./SkeletonBar-goStr7xk.js";import"./LoadingCell-hNuanuvj.js";import"./ColumnConfigDialog-B8gfsHk_.js";import"./DraggableList-iSyTQ6ue.js";import"./search-Ci42lqAV.js";import"./Input-aBbimhzA.js";import"./useControlled-Dvj50PQH.js";import"./Button-DfvOvfvD.js";import"./small-cross-4Og_SUqy.js";import"./ActionButton-DK01lYjB.js";import"./Checkbox-OD7wr22i.js";import"./useValueChanged-B-1W8pQZ.js";import"./CollapsiblePanel-CU0iKWn6.js";import"./MultiColumnSortDialog-Bd0-hbtk.js";import"./MenuTrigger-D-NO9sux.js";import"./CompositeItem-BjdsKKJr.js";import"./ToolbarRootContext-Bggxr9N9.js";import"./getDisabledMountTransitionStyles-D8w4jYHi.js";import"./getPseudoElementBounds-BvCK0FHD.js";import"./chevron-down-9_oXjY5S.js";import"./index-C_i7dQHN.js";import"./error-CSigbrmD.js";import"./BaseCbacBanner-Q_vrCcEx.js";import"./makeExternalStore-CpT-N4RM.js";import"./Tooltip-sztRiYUo.js";import"./PopoverPopup-DhqCBiK0.js";import"./debounce-7OJ_vS6c.js";import"./tick-CpAUDOtg.js";import"./DropdownField-CtIEk2rp.js";import"./isEqual-CV9p-CTi.js";import"./withOsdkMetrics-9ebMCx2K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
