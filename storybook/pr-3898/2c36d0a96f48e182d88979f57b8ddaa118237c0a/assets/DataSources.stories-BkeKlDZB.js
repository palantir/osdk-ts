import{j as r}from"./iframe-ZXzoHhiH.js";import{O as b}from"./object-table-h3QVGvVh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DymIp2kr.js";import{u as g}from"./useOsdkClient-D2I_PQU2.js";import"./preload-helper-DhsFpWsY.js";import"./Table-vQUskrri.js";import"./index-D6JbpjtM.js";import"./Dialog-Cu3J7VAN.js";import"./cross-BDa3Cqh0.js";import"./svgIconContainer-CyxxRlZb.js";import"./useBaseUiId-BEvQDTwS.js";import"./InternalBackdrop-DeqY8UDC.js";import"./composite-DpxxpdsF.js";import"./index-C4EsRBVV.js";import"./index-MwZjXXYU.js";import"./index-1Aj9HnSY.js";import"./useEventCallback-DCkbdGrD.js";import"./SkeletonBar-CHhHpHfc.js";import"./LoadingCell-CirgwqUn.js";import"./ColumnConfigDialog-D2TD4xxN.js";import"./DraggableList-BX3OO3XS.js";import"./search-DoYXdjWJ.js";import"./Input-CwIgSFvy.js";import"./useControlled-BJAlfQKj.js";import"./Button-DhRAKbLo.js";import"./small-cross-DDKBRSHE.js";import"./ActionButton-jSPKUpr6.js";import"./Checkbox-BpZRNZ7x.js";import"./useValueChanged-7gcukUj0.js";import"./CollapsiblePanel-qapOzJSJ.js";import"./MultiColumnSortDialog-Dmhecj6h.js";import"./MenuTrigger-ScWPsEpH.js";import"./CompositeItem-SvjwkO0W.js";import"./ToolbarRootContext-BChHSQ55.js";import"./getDisabledMountTransitionStyles-DIJ5QIdA.js";import"./getPseudoElementBounds-DLAzD5Nx.js";import"./chevron-down-CRmz9PAw.js";import"./index-BgW_HH62.js";import"./error-CcJwbQNy.js";import"./BaseCbacBanner-12BFGArk.js";import"./makeExternalStore-BvyDSClC.js";import"./Tooltip-CM4f-N71.js";import"./PopoverPopup-B2VPWRnQ.js";import"./debounce-BU8o5BOZ.js";import"./tick-DR-3NIno.js";import"./DropdownField-B6H9-I7k.js";import"./isEqual-D2I2WKSa.js";import"./withOsdkMetrics-rJG37D1j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
