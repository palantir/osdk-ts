import{j as r}from"./iframe-C9dvvK0s.js";import{O as b}from"./object-table-DaHHjOXS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-rv0P9oFW.js";import{u as g}from"./useOsdkClient-Cyoc-pgH.js";import"./preload-helper-iV6YG4Aw.js";import"./Table-BLfd7O6r.js";import"./index-CCl1SyK9.js";import"./Dialog-0kQYGq6h.js";import"./cross-DoooZe2s.js";import"./svgIconContainer-DzOculqA.js";import"./useBaseUiId-Br_MFpl1.js";import"./InternalBackdrop-CY6nwryu.js";import"./composite-C5a4BBeY.js";import"./index-R2ywC05c.js";import"./index-CkMTtaTO.js";import"./index-BPDZ_eNv.js";import"./useEventCallback-nJzbHflb.js";import"./SkeletonBar-BMLWORuN.js";import"./LoadingCell-CoPu1qnX.js";import"./ColumnConfigDialog-468qWQtg.js";import"./DraggableList-Dr7qvY_0.js";import"./search-t3Hkw5qC.js";import"./Input-VMFQEfqY.js";import"./useControlled-N1u5Cna7.js";import"./Button-yjOlms4F.js";import"./small-cross-Ci6IDqJ5.js";import"./ActionButton-DTtodqv-.js";import"./Checkbox-Blnnfp9K.js";import"./useValueChanged-DmetHvwJ.js";import"./CollapsiblePanel-ND7ZCoK2.js";import"./MultiColumnSortDialog-ED6hIEfv.js";import"./MenuTrigger-eYIaD5Ue.js";import"./CompositeItem-Bcug-Hhc.js";import"./ToolbarRootContext-B-a5UJLi.js";import"./getDisabledMountTransitionStyles-Ozj0mzgv.js";import"./getPseudoElementBounds-Bdrnt6aT.js";import"./chevron-down-Cc5gCW9T.js";import"./index-DdkJNkIB.js";import"./error-QUoX6T23.js";import"./BaseCbacBanner-B4CqUt8g.js";import"./makeExternalStore-DRTRnKjE.js";import"./Tooltip-CZkWbmpg.js";import"./PopoverPopup-Cj3n7Ars.js";import"./debounce-Z8v5BBST.js";import"./tick-B8uN_Iao.js";import"./DropdownField-DOA4KkgG.js";import"./isEqual-Cpll-d8H.js";import"./withOsdkMetrics-dCYtoeio.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
