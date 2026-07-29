import{j as r}from"./iframe-Da42tfo0.js";import{O as b}from"./object-table-btuI5mIo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DFdfIY3q.js";import{u as g}from"./useOsdkClient-BxBRpG4B.js";import"./preload-helper-DAikJXZa.js";import"./Table-BVmL8K-n.js";import"./index-Bomen_f9.js";import"./Dialog-n-frkQpt.js";import"./cross-DG6Fu1MX.js";import"./svgIconContainer-C1uFDFQ-.js";import"./useBaseUiId-BeAjw0Pz.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./index-Dneb3Ic8.js";import"./useEventCallback-DQIdBA5X.js";import"./SkeletonBar-BqNP19Zt.js";import"./LoadingCell-CTpBTWdO.js";import"./ColumnConfigDialog-CnzK0MCb.js";import"./DraggableList-DW5qQcgn.js";import"./search-CMGFB0Gl.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./isEqual-CldZjGbQ.js";import"./isObject-GrzurbJg.js";import"./Button-DNGlddJW.js";import"./ActionButton-BvqT7-oi.js";import"./Checkbox-DBtl7JMw.js";import"./useValueChanged-Cr9sCKBo.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./MultiColumnSortDialog-Dyqnc-DK.js";import"./MenuTrigger-DELKHcn5.js";import"./CompositeItem-BgwdEem5.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./chevron-down-B9ztHwbJ.js";import"./index-CUDqNzSs.js";import"./error-C20szSnY.js";import"./BaseCbacBanner-C-QMNaaF.js";import"./makeExternalStore-DY6l4t0Z.js";import"./Tooltip-s5Zvo8l1.js";import"./PopoverPopup-B2KF4r0_.js";import"./toNumber-B2CaCxn8.js";import"./tick-Djt3HCnR.js";import"./DropdownField-lD6ZutwA.js";import"./withOsdkMetrics-DcVf3U6k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
