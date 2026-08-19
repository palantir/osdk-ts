import{j as r}from"./iframe-DzLmQzfL.js";import{O as b}from"./object-table-BEYWSqeH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-eMa7EJSz.js";import{u as g}from"./useOsdkClient-DbRHoimk.js";import"./preload-helper-DYuv-bf-.js";import"./Table-BENlvreU.js";import"./index-CdQpjacm.js";import"./Dialog-BiDgKXsL.js";import"./cross-DfDMn0pr.js";import"./svgIconContainer-Jv28MIw9.js";import"./useBaseUiId-Bmp5LN4j.js";import"./InternalBackdrop-pKagafuB.js";import"./composite-Cez-p8GT.js";import"./index-D0Om1NOm.js";import"./index-ByLiAsET.js";import"./index-fUD05Gsl.js";import"./useEventCallback-B8lpys4D.js";import"./SkeletonBar-Bs8J-8ST.js";import"./LoadingCell-BNNKrPRM.js";import"./ColumnConfigDialog-KwDlSvr0.js";import"./DraggableList-BINn4pAx.js";import"./search-tY_g51mG.js";import"./Input-ea8HxTa0.js";import"./useControlled-AhpadjFe.js";import"./Button-DyUjkQv3.js";import"./small-cross-CfZYje-b.js";import"./ActionButton-CC-w0u8p.js";import"./Checkbox-CuTCRk_I.js";import"./useValueChanged-DS7g6QS1.js";import"./CollapsiblePanel-UEe2R4Qd.js";import"./MultiColumnSortDialog-Cp37JhTS.js";import"./MenuTrigger-eQ7_Xffg.js";import"./CompositeItem-BgbTo1rM.js";import"./ToolbarRootContext-BM7iC6VN.js";import"./getDisabledMountTransitionStyles-brOSu3I-.js";import"./getPseudoElementBounds-DqBxNzDr.js";import"./chevron-down-B52Hmy6V.js";import"./index-CdaZRfws.js";import"./error-BFLeOIbO.js";import"./BaseCbacBanner-DN_VBjDp.js";import"./makeExternalStore-Bw6HJp50.js";import"./Tooltip-CbYJzNWg.js";import"./PopoverPopup-B3ZeXY53.js";import"./debounce-CfJ7O41a.js";import"./tick-qaJHrmvM.js";import"./DropdownField-CzUzhl01.js";import"./isEqual-1nX8sYVi.js";import"./withOsdkMetrics-lxs0PU1I.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
