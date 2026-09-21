import{j as r}from"./iframe-rrq8MZm7.js";import{O as b}from"./object-table-BmLGW4nF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DSRVkOuK.js";import{u as g}from"./useOsdkClient-vYsi5oFr.js";import"./preload-helper-g_e3lUw3.js";import"./Table-ykH1l2J2.js";import"./index-DgF7SkuQ.js";import"./Dialog-DYdOiXPb.js";import"./cross-Dx39xAnI.js";import"./svgIconContainer-DzRNCFzx.js";import"./useBaseUiId-Ck0oWSaP.js";import"./InternalBackdrop-wSSvokvJ.js";import"./composite-Dz23lKV_.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./index-BHKoX9xi.js";import"./useEventCallback-BHSzBPQv.js";import"./SkeletonBar-DbqU4wRS.js";import"./LoadingCell-BaeHdVOg.js";import"./ColumnConfigDialog-Cul644FJ.js";import"./DraggableList-DltL4lih.js";import"./search-HS8jOdU9.js";import"./Input-DomtRdeE.js";import"./useControlled-CFE1onYy.js";import"./Button-CR0VLtCt.js";import"./small-cross-Db8ph2CD.js";import"./ActionButton-CGA8JUAJ.js";import"./Checkbox-DhFF_qGg.js";import"./useValueChanged-ClOYFuvx.js";import"./CollapsiblePanel-Rs1qW30d.js";import"./MultiColumnSortDialog-BsojGLd-.js";import"./MenuTrigger-DXzaVxIY.js";import"./CompositeItem-CfvMX9u5.js";import"./ToolbarRootContext-BX6aviUc.js";import"./getDisabledMountTransitionStyles-DeyZi_sY.js";import"./getPseudoElementBounds-Xt__cUKT.js";import"./chevron-down-wVslH90M.js";import"./index-Bf3ZsPEb.js";import"./error-Bcjq0Lff.js";import"./BaseCbacBanner-D6iTWpAb.js";import"./makeExternalStore-Ce8SSisl.js";import"./Tooltip-CWYgwcpt.js";import"./PopoverPopup-BjrmRx1j.js";import"./debounce-Dx1hyhVT.js";import"./tick-DUzn1Cvr.js";import"./DropdownField-Bn4EfPzq.js";import"./isEqual-rKX8viav.js";import"./withOsdkMetrics-CkwBt4Ou.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
