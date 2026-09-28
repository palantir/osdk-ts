import{j as r}from"./iframe-BqJ-ZnBR.js";import{O as b}from"./object-table-CmgAeKsC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B5-JiS6z.js";import{u as g}from"./useOsdkClient-CIGN3ZFv.js";import"./preload-helper-JLrGau54.js";import"./Table-DkGWmtzq.js";import"./index-BK1P1voH.js";import"./Dialog-DI5SN71k.js";import"./cross-BDK7LG_e.js";import"./svgIconContainer-Dc4tWYI9.js";import"./useBaseUiId-BcNmiaah.js";import"./InternalBackdrop-BQv9yU4o.js";import"./composite-iKsnpVuz.js";import"./index-94n_hVW-.js";import"./index-By0VHStz.js";import"./index-BLIg07yZ.js";import"./useEventCallback-HXpemZPp.js";import"./SkeletonBar-BeQPr1Hf.js";import"./LoadingCell-DYGG6ST4.js";import"./ColumnConfigDialog-CeQ_Sw7r.js";import"./DraggableList-B50CmaiN.js";import"./search-BZek_B3M.js";import"./Input-Bgztm7qK.js";import"./useControlled-DrJztn-2.js";import"./Button-DxthHQUU.js";import"./small-cross-CeRG__Xs.js";import"./ActionButton-BRh8fnVZ.js";import"./Checkbox-D2gnaM-s.js";import"./useValueChanged-B9GECoed.js";import"./CollapsiblePanel-rA8Z4Ruz.js";import"./MultiColumnSortDialog-R23BzF34.js";import"./MenuTrigger-BG5uKeX8.js";import"./CompositeItem-COP7jkJm.js";import"./ToolbarRootContext-nuNuNDyh.js";import"./getDisabledMountTransitionStyles-BjNITUuJ.js";import"./getPseudoElementBounds-SdYgej76.js";import"./chevron-down-rJ0TahbK.js";import"./index-Dku47buH.js";import"./error-B0ep7kDm.js";import"./BaseCbacBanner-BGoHf3Yc.js";import"./makeExternalStore-DtB887rj.js";import"./Tooltip-ChG6KFaQ.js";import"./PopoverPopup-DklAn_WH.js";import"./debounce-DUBEN3SV.js";import"./tick-CvXUKs1d.js";import"./DropdownField-CLjpg3Un.js";import"./isEqual-CbTBsGdo.js";import"./withOsdkMetrics-CsoY-VD3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
