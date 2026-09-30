import{j as r}from"./iframe-BqOAaVYX.js";import{O as b}from"./object-table-CdmLVnB8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Du-lhB0A.js";import{u as g}from"./useOsdkClient-tsebv1JW.js";import"./preload-helper-DfAqa6Ns.js";import"./Table-Bq7Setty.js";import"./index-hhMnxhy8.js";import"./Dialog-6ojF_tnN.js";import"./cross-VDw2oJTP.js";import"./svgIconContainer-fHQR-WGO.js";import"./useBaseUiId-D8PXSJwD.js";import"./InternalBackdrop-BGIegr0x.js";import"./composite-FQnt6Ug_.js";import"./index-D2HyYCxp.js";import"./index-W1jvd9mH.js";import"./index-BV9JiV1x.js";import"./useEventCallback-B27Rxp7L.js";import"./SkeletonBar-CCrdDLAf.js";import"./LoadingCell-Blv0eHPn.js";import"./ColumnConfigDialog-Dl6KswGg.js";import"./DraggableList-CpcAfN-E.js";import"./search-BrbOR0sP.js";import"./Input-DGoYfUS_.js";import"./useControlled-Cw0rstUZ.js";import"./Button-DLn-Tp2Y.js";import"./small-cross-Ce9UNZ-K.js";import"./ActionButton-yXrzzXD9.js";import"./Checkbox-Bh-5Xf3l.js";import"./useValueChanged-DoWuflaR.js";import"./CollapsiblePanel-BoQbvN_j.js";import"./MultiColumnSortDialog-BxyxFa4e.js";import"./MenuTrigger-Db7tR9a4.js";import"./CompositeItem-lsMfNC7P.js";import"./ToolbarRootContext-Db3ZHaqK.js";import"./getDisabledMountTransitionStyles-BkrhF4eN.js";import"./getPseudoElementBounds-vNNMy6F8.js";import"./chevron-down-CWxaKaem.js";import"./index-l3AZM9tW.js";import"./error-BmfSiLn5.js";import"./BaseCbacBanner-dHAnJqLD.js";import"./makeExternalStore-BiBaRYea.js";import"./Tooltip-Dg7ObhIp.js";import"./PopoverPopup-CpsJz6b_.js";import"./debounce-ZhhJhx1c.js";import"./tick-CuisNnxV.js";import"./DropdownField-p3inN5wv.js";import"./isEqual-NGjzWzhK.js";import"./withOsdkMetrics-DCrwrvzV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
