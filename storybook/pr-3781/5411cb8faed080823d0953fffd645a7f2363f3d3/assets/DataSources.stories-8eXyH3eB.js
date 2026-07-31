import{j as r}from"./iframe-DywKiRJ4.js";import{O as b}from"./object-table-BPc3eFSX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-daVSn-M2.js";import{u as g}from"./useOsdkClient-BGVCYVYl.js";import"./preload-helper-DnISu9SO.js";import"./Table-TcAaYlP2.js";import"./index-sdvv-Vmx.js";import"./Dialog-Bf55-VY4.js";import"./cross-CQksztLC.js";import"./svgIconContainer-BcOW5YRH.js";import"./useBaseUiId-C48Qv8Zq.js";import"./InternalBackdrop-Cpxyg-Ky.js";import"./composite-ZtNMv5XC.js";import"./index-DPwii3iK.js";import"./index-DqrMsXLY.js";import"./index-dA00YQm8.js";import"./useEventCallback-CppQh8Tw.js";import"./SkeletonBar-IiCmFQe8.js";import"./LoadingCell-CGfJC6P-.js";import"./ColumnConfigDialog-DEjm_EY6.js";import"./DraggableList-BHZ55AyS.js";import"./search-BqXYSkFu.js";import"./Input-C0MsgEOV.js";import"./useControlled-IjJG5oHn.js";import"./isEqual-CMqPJSO6.js";import"./isObject-C5jPAKNO.js";import"./Button-CDqHXNFi.js";import"./ActionButton-DZ3T_Hts.js";import"./Checkbox-C_Hoe2CZ.js";import"./useValueChanged-CzSHuwPy.js";import"./CollapsiblePanel-DvuaVJxN.js";import"./MultiColumnSortDialog-CFSzAgHA.js";import"./MenuTrigger-CSGpp6_f.js";import"./CompositeItem-BHZTQbjb.js";import"./ToolbarRootContext-BdKTbPdV.js";import"./getDisabledMountTransitionStyles-Do5D0uth.js";import"./getPseudoElementBounds-CH2A8lCF.js";import"./chevron-down-DFkNi3fh.js";import"./index-Bi9mx1Ld.js";import"./error-CTO_HqOG.js";import"./BaseCbacBanner-DDIvxm3S.js";import"./makeExternalStore-CVHUFZOf.js";import"./Tooltip-DWQ3NBX-.js";import"./PopoverPopup-kSQR-f1B.js";import"./toNumber-oB5ILiEz.js";import"./tick-CHvQk3IN.js";import"./DropdownField-fsCjlWHf.js";import"./withOsdkMetrics-mz9t4H8j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
