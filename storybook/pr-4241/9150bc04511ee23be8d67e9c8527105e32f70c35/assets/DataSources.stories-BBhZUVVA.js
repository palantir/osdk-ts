import{j as r}from"./iframe-81je18Ik.js";import{O as b}from"./object-table-BvQWIhZK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DHwI9FkS.js";import{u as g}from"./useOsdkClient-DOUL53LR.js";import"./preload-helper-CRAEXExV.js";import"./Table-CATOd2mE.js";import"./index-Ch4IN5aI.js";import"./Dialog-bzSxmtfs.js";import"./cross-Cc4GvHBG.js";import"./svgIconContainer-CkaRT57i.js";import"./useBaseUiId-BZJB2Tlb.js";import"./InternalBackdrop-C65WwkrS.js";import"./composite-B4jPeedW.js";import"./index-F2YzzidU.js";import"./index-CJX1bs1L.js";import"./index-CbMHVh08.js";import"./useEventCallback-DQ9am-6U.js";import"./SkeletonBar-Dw-ewOea.js";import"./LoadingCell-D0Zburhd.js";import"./ColumnConfigDialog-Cet9ZvNQ.js";import"./DraggableList-5Ave0405.js";import"./search-DL20J9IV.js";import"./Input-Dw0afNfi.js";import"./useControlled-B3eKfZiB.js";import"./Button-DMrFAQQL.js";import"./small-cross-Bkj0uCyB.js";import"./ActionButton-B6EeJUTi.js";import"./Checkbox-BvqadCb6.js";import"./useValueChanged-CSH2H_LU.js";import"./CollapsiblePanel-BZXNDPDr.js";import"./MultiColumnSortDialog-C9gRh8VL.js";import"./MenuTrigger-BtxN9ewG.js";import"./CompositeItem-CGRjueKi.js";import"./ToolbarRootContext-Bevviuy2.js";import"./getDisabledMountTransitionStyles-Baxpj6ZK.js";import"./getPseudoElementBounds-CsA6tpz4.js";import"./chevron-down-ea9DRGVa.js";import"./index-BZr2ycyZ.js";import"./error-v2_eLjNd.js";import"./BaseCbacBanner-DH9rtQ5g.js";import"./makeExternalStore-C42KheMu.js";import"./Tooltip-ZUJ8p7GH.js";import"./PopoverPopup-CJ53N5Gn.js";import"./debounce-C0dFA0mS.js";import"./tick-C3zDCHaR.js";import"./DropdownField-_ZfRXRml.js";import"./isEqual-DOga7zoS.js";import"./withOsdkMetrics-DpvfaYrl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
