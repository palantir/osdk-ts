import{j as r}from"./iframe-gIP5vbeg.js";import{O as b}from"./object-table-BTUbDvfH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CMEC6KEv.js";import{u as g}from"./useOsdkClient-DkjZXsOx.js";import"./preload-helper-DCg2y8p9.js";import"./Table-BHUmFmlp.js";import"./index-Wi5AWfmM.js";import"./Dialog-DYoPLec3.js";import"./cross-B_HnIjdo.js";import"./svgIconContainer-DxHht3SG.js";import"./useBaseUiId-Dr1rdLlf.js";import"./InternalBackdrop-CCoswTJ_.js";import"./composite-DMSJBqo2.js";import"./index-Cj6M27jD.js";import"./index-Dq6-SYm_.js";import"./index-9oyPmpRn.js";import"./useEventCallback-N163Ubom.js";import"./SkeletonBar-jY_IAvUh.js";import"./LoadingCell-De1aeIAY.js";import"./ColumnConfigDialog-CC9aBHAY.js";import"./DraggableList-DzPDeTXj.js";import"./search-CUlcmVhj.js";import"./Input-BP15Y0-R.js";import"./useControlled-Ch-R23iR.js";import"./Button-CcxNlLiB.js";import"./small-cross-BtgfJF3w.js";import"./ActionButton-DOUTcJvC.js";import"./Checkbox-DamPzVbT.js";import"./useValueChanged-PwGMfD57.js";import"./CollapsiblePanel-DLO1bg9n.js";import"./MultiColumnSortDialog-JtDqanXj.js";import"./MenuTrigger-DIIl-KUX.js";import"./CompositeItem-GAdV3l7-.js";import"./ToolbarRootContext-B8olE9Qo.js";import"./getDisabledMountTransitionStyles-9Dn4HHWl.js";import"./getPseudoElementBounds-BNdUGtxd.js";import"./chevron-down-DCLBAa3z.js";import"./index-TRPDJKbO.js";import"./error-3Pj1FJ1e.js";import"./BaseCbacBanner-DvQO403k.js";import"./makeExternalStore-CwiGseBr.js";import"./Tooltip-xk86MvJJ.js";import"./PopoverPopup-BRrodumS.js";import"./debounce-I28cmmgy.js";import"./tick-Dx25vGYA.js";import"./DropdownField-B1srtEQF.js";import"./isEqual-DFNZxvw8.js";import"./withOsdkMetrics-CUsP9g0j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
