import{j as r}from"./iframe-CpMx7Aup.js";import{O as b}from"./object-table-CQ9NHIze.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDfJOnW_.js";import{u as g}from"./useOsdkClient-B61ahtGb.js";import"./preload-helper-CoTSq2F1.js";import"./Table-D070iMiq.js";import"./index-CxmY32cc.js";import"./Dialog-CKQoeaGr.js";import"./cross-TTsfy-0d.js";import"./svgIconContainer-CuSLG6cZ.js";import"./useBaseUiId-BekKaTSH.js";import"./InternalBackdrop-BxzT_GXx.js";import"./composite-BGRmFTC1.js";import"./index-CwBRzy5n.js";import"./index-DLO22dOn.js";import"./index-Bo6mI2yo.js";import"./useEventCallback-BONFFk7M.js";import"./SkeletonBar-CHgFWFkJ.js";import"./LoadingCell-Ba5LJYpB.js";import"./ColumnConfigDialog-Dj6kTDTV.js";import"./DraggableList-CJSICoS0.js";import"./search-DT0Xyteo.js";import"./Input-DsbvGidK.js";import"./useControlled-wTvX_DQ4.js";import"./Button-BDW79Pmx.js";import"./small-cross-Cu-Pzvda.js";import"./ActionButton-hedLhO3x.js";import"./Checkbox-BxJY3Vfd.js";import"./useValueChanged-KVTl21Rk.js";import"./CollapsiblePanel-DYNCNbyF.js";import"./MultiColumnSortDialog-5fG9yuAQ.js";import"./MenuTrigger-BMZyb9jf.js";import"./CompositeItem-Bh3v2N_o.js";import"./ToolbarRootContext-BxbNKn3r.js";import"./getDisabledMountTransitionStyles-CuE4vLcj.js";import"./getPseudoElementBounds-C2W2CV61.js";import"./chevron-down-Dvd8o3b0.js";import"./index-B9i6lMRF.js";import"./error-Cj7z7_gc.js";import"./BaseCbacBanner-DgjfwfFe.js";import"./makeExternalStore-BjX6ObK7.js";import"./Tooltip-BbITICOb.js";import"./PopoverPopup-B8EGxqrk.js";import"./debounce-DD2I4-Hh.js";import"./tick-B27PtLKc.js";import"./DropdownField-ZSaIODjv.js";import"./isEqual-BekYRNr0.js";import"./withOsdkMetrics-DmITN5ju.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
