import{j as r}from"./iframe-DsCzZXCk.js";import{O as b}from"./object-table-Bi3gkbRH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-2WQhVO35.js";import{u as g}from"./useOsdkClient-DNGLR9mN.js";import"./preload-helper-CXwWoCmC.js";import"./Table-DzAMBcZK.js";import"./index-Ci1-NLXL.js";import"./Dialog-WY8kOd8I.js";import"./cross-nUvl9WFP.js";import"./svgIconContainer-D37GNyYn.js";import"./useBaseUiId-3kQUveob.js";import"./InternalBackdrop-CwQed051.js";import"./composite-DHYMAbDg.js";import"./index-CdAzhd0H.js";import"./index-z1UHak1d.js";import"./index-x55rnuch.js";import"./useEventCallback-BCVvlhOQ.js";import"./SkeletonBar-vf1a1dAS.js";import"./LoadingCell-DrcEWbQQ.js";import"./ColumnConfigDialog-Bthqd0BS.js";import"./DraggableList-Ktye02ex.js";import"./search-Bol42X7R.js";import"./Input-B3Vnu-1d.js";import"./useControlled-DUHKt09G.js";import"./Button-BddFDihs.js";import"./small-cross-CTvq5HsT.js";import"./ActionButton-DD385ZrQ.js";import"./Checkbox-GmGZJnCk.js";import"./useValueChanged-B2VG6ome.js";import"./CollapsiblePanel-xaQ9gFVs.js";import"./MultiColumnSortDialog-CFfB5Mvl.js";import"./MenuTrigger-C6DHAWRk.js";import"./CompositeItem-D3-VN1Pw.js";import"./ToolbarRootContext-CrYLTP3H.js";import"./getDisabledMountTransitionStyles-hsS0T9Gj.js";import"./getPseudoElementBounds-PBZ-34d2.js";import"./chevron-down-Bpd_KI7a.js";import"./index-ClGHa1nk.js";import"./error-BfS-h5nJ.js";import"./BaseCbacBanner-CT9ucVkZ.js";import"./makeExternalStore-BJqmp2PE.js";import"./Tooltip-Vr2SVT2r.js";import"./PopoverPopup-C1a_kqTV.js";import"./debounce-D7PdVnfF.js";import"./tick-G-bMGJF4.js";import"./DropdownField-CoaNucHE.js";import"./isEqual-B2uZlYTn.js";import"./withOsdkMetrics-rktOS5NE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
