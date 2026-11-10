import{j as r}from"./iframe-50Cg_Ain.js";import{O as b}from"./object-table-BMqdBJge.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DLEkBNdB.js";import{u as g}from"./useOsdkClient-CSxkcmdq.js";import"./preload-helper-DMtB3Ytn.js";import"./Table-C5HnzxvU.js";import"./index-jwJr-CWL.js";import"./Dialog-Ct-gNA2Q.js";import"./cross-COS10AaY.js";import"./svgIconContainer-CcJ3Jv7r.js";import"./useBaseUiId-KVfK4IPD.js";import"./InternalBackdrop-BuJcJtL5.js";import"./composite-Dp3rlZDO.js";import"./index-pDWKxWtb.js";import"./index-Bnqsnheo.js";import"./index-beR5Qk5I.js";import"./useEventCallback--j9Bwo9R.js";import"./SkeletonBar-vCg5I0cB.js";import"./LoadingCell-DESO8adh.js";import"./ColumnConfigDialog-DWzi7-44.js";import"./DraggableList-BM6r3rgP.js";import"./search-BrkmnBZA.js";import"./Input-MpATsBua.js";import"./useControlled-BYCjMK_X.js";import"./Button-D1Gjjj1e.js";import"./small-cross-zbNUvU_s.js";import"./ActionButton-BOVhqgS3.js";import"./Checkbox-C7M83zVO.js";import"./useValueChanged-4L6Dzkoi.js";import"./CollapsiblePanel-DLDG4Y-F.js";import"./MultiColumnSortDialog-TRuvFkkZ.js";import"./MenuTrigger-BJe-69N1.js";import"./CompositeItem-PSBD5_9a.js";import"./ToolbarRootContext-wGzcHK2n.js";import"./getDisabledMountTransitionStyles-CcshyzIS.js";import"./getPseudoElementBounds-Cy_X7Dzd.js";import"./chevron-down-XrKrb8VS.js";import"./index-CKYD_SOl.js";import"./error-COSlANXI.js";import"./BaseCbacBanner-BbrXhr06.js";import"./makeExternalStore-mw5x5KPf.js";import"./Tooltip-CY7BNFvk.js";import"./isObject-DzKLNJWj.js";import"./debounce-ClHlqela.js";import"./tick-BHY7Momf.js";import"./DropdownField-Bu7usqGG.js";import"./isEqual-CO8gKk2r.js";import"./_baseIsEqual-CE8CWXW1.js";import"./withOsdkMetrics-DCjsjr3q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
