import{j as r}from"./iframe-DlEUhHi7.js";import{O as b}from"./object-table-DzZUmoft.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CXX_8Bzc.js";import{u as g}from"./useOsdkClient-RXiRMbJA.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CBMbmU_2.js";import"./index-BdObmdSk.js";import"./Dialog-BRxuTM7c.js";import"./cross-qXDV-79n.js";import"./svgIconContainer-Bju_1rFh.js";import"./useBaseUiId-tb0rTi4h.js";import"./InternalBackdrop-Dj4rbrk1.js";import"./composite-C8IR1RxG.js";import"./index-BZc9O5Mh.js";import"./index-BetcjBuf.js";import"./index-LGLGISh5.js";import"./useEventCallback-qQtofjUs.js";import"./SkeletonBar-DVU3TCkY.js";import"./LoadingCell-D9sJxZss.js";import"./ColumnConfigDialog-BWyNlDY6.js";import"./DraggableList-Dofm2fFK.js";import"./search-DpAuH-Nq.js";import"./Input-LD__uDdD.js";import"./useControlled-DUY1KYlM.js";import"./Button-B-c1jfrq.js";import"./small-cross-CReZphMa.js";import"./ActionButton-DcjyntQn.js";import"./Checkbox-D0qtxLN5.js";import"./useValueChanged-D-FJ2lNx.js";import"./CollapsiblePanel-BGvjwfhf.js";import"./MultiColumnSortDialog-VYovGg0N.js";import"./MenuTrigger-DUnIRnsx.js";import"./CompositeItem-Ds-80rJN.js";import"./ToolbarRootContext-B2EyZNnQ.js";import"./getDisabledMountTransitionStyles-COXtAQgb.js";import"./getPseudoElementBounds-Ca9OCr_g.js";import"./chevron-down-DMneEgPP.js";import"./index-BpuBCpUI.js";import"./error-CpjEBkuC.js";import"./BaseCbacBanner-Cdn9GJ3S.js";import"./makeExternalStore-CQqAo0Kp.js";import"./Tooltip-B7ze2o3f.js";import"./PopoverPopup-CmFEZPXr.js";import"./Select-CRKcgbl8.js";import"./tick-554cqJa-.js";import"./DropdownField-Et1bzqkY.js";import"./useDebouncedCallback-1RUstQeW.js";import"./isEqual-CK8CnT9X.js";import"./_baseIsEqual-B3kSfXIp.js";import"./stableSerialize-5WUigpEg.js";import"./withOsdkMetrics-CgnK2w0k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};
