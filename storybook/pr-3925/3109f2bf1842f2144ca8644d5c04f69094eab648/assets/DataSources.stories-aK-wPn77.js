import{j as r}from"./iframe-CXrz77U6.js";import{O as b}from"./object-table-DPD_mU3I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXcbB_mX.js";import{u as g}from"./useOsdkClient-Dzvd5JFF.js";import"./preload-helper-CKbgkQtS.js";import"./Table-CB5UJxLD.js";import"./index-X106RkLU.js";import"./Dialog-Zioc4Ynx.js";import"./cross-C0HgBeNT.js";import"./svgIconContainer-C1hoWfOl.js";import"./useBaseUiId-DEWnkFns.js";import"./InternalBackdrop-Dvnlt0Xs.js";import"./composite-ggnTBoJz.js";import"./index-CR04-v9m.js";import"./index-OCshk7-x.js";import"./index-DK9FtqpR.js";import"./useEventCallback-Cx73pa4B.js";import"./SkeletonBar-vVgaks7f.js";import"./LoadingCell-1PcNBJ1K.js";import"./ColumnConfigDialog-D3VP_nkk.js";import"./DraggableList-Bq0K0Mzh.js";import"./search-x_EEQ8qK.js";import"./Input-BytGuL1G.js";import"./useControlled-TnVqlNU3.js";import"./Button-p_Ia-Jx9.js";import"./small-cross-BQ-QsIs6.js";import"./ActionButton-1FqISt18.js";import"./Checkbox-BphtvbA1.js";import"./useValueChanged-BJhA6HMo.js";import"./CollapsiblePanel-DoujH5kJ.js";import"./MultiColumnSortDialog-CWk2ds_5.js";import"./MenuTrigger-Cye0wvZ3.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./getDisabledMountTransitionStyles-C9lNrf-I.js";import"./getPseudoElementBounds-BF8pv6bh.js";import"./chevron-down-CJJaofKQ.js";import"./index-CIyfLN4v.js";import"./error-CjxcPcQH.js";import"./BaseCbacBanner-DITYJcfv.js";import"./makeExternalStore-odtlqelb.js";import"./Tooltip-B6A970Dl.js";import"./PopoverPopup-DBp_YwzX.js";import"./debounce-BnootL-T.js";import"./tick-jaAesBj2.js";import"./DropdownField-CipAhaef.js";import"./isEqual-lu6Kov14.js";import"./withOsdkMetrics-gTbfWxlK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
