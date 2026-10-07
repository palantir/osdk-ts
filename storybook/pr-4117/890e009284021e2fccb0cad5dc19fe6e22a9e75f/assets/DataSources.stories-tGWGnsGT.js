import{j as r}from"./iframe-BNXnxiJa.js";import{O as b}from"./object-table-Cb1oSNVI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers--tbghuh_.js";import{u as g}from"./useOsdkClient-CKYOKSIJ.js";import"./preload-helper-CT8T0PJp.js";import"./Table-CH4uKdSM.js";import"./index-Ch-h42fp.js";import"./Dialog-CKvDjFCt.js";import"./cross-DNfPdLmM.js";import"./svgIconContainer-T3xea5l3.js";import"./useBaseUiId-BjmHkgmf.js";import"./InternalBackdrop-PmKOV69k.js";import"./composite-Cinouu0K.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./index-KZulTNIE.js";import"./useEventCallback-BmB9ehFQ.js";import"./SkeletonBar-C4SZgVA_.js";import"./LoadingCell-BfBhkylv.js";import"./ColumnConfigDialog-C9bO7pUK.js";import"./DraggableList-DKJFkDus.js";import"./search-DQwSGm2k.js";import"./Input-BQdVPwVd.js";import"./useControlled-DBRd_jSA.js";import"./Button-CDesYXNY.js";import"./small-cross-r42AjjlG.js";import"./ActionButton-CuFNzu9O.js";import"./Checkbox-1jAc03ff.js";import"./useValueChanged-BMp_-0Ka.js";import"./CollapsiblePanel-BKAENuDp.js";import"./MultiColumnSortDialog-D3Ok2AK3.js";import"./MenuTrigger-_gElmUn1.js";import"./CompositeItem-Ch_wyKgR.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./getDisabledMountTransitionStyles-TqKYti97.js";import"./getPseudoElementBounds-C28IzjDZ.js";import"./chevron-down-CLu6_2JJ.js";import"./index-Be-Y0iQr.js";import"./error-BMUe0AWc.js";import"./BaseCbacBanner-DWO6AJ4A.js";import"./makeExternalStore-C77jTvWN.js";import"./Tooltip-Depdrqez.js";import"./PopoverPopup-C9jn2tje.js";import"./debounce-Dw0w9syk.js";import"./tick-DtOuh9ys.js";import"./DropdownField-7JT5lhAG.js";import"./isEqual-BSNPV3Xn.js";import"./withOsdkMetrics-CGp4DYy1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
