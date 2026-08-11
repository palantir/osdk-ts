import{j as r}from"./iframe-tdx6Uf_P.js";import{O as b}from"./object-table-DHeWuMA8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DftIQPZl.js";import{u as g}from"./useOsdkClient-BP4MbY_l.js";import"./preload-helper-B_he2lyp.js";import"./Table-BYXBBz9o.js";import"./index-4qw7cdU-.js";import"./Dialog-CUkV8qFD.js";import"./cross-DO9nY1S8.js";import"./svgIconContainer-CU1572n2.js";import"./useBaseUiId-9iypYP_V.js";import"./InternalBackdrop-CR1SvO8_.js";import"./composite-CabNVbdx.js";import"./index-CGb-0Bhb.js";import"./index-Bc3aW3nV.js";import"./index-BnKrk6WD.js";import"./useEventCallback-DoBhpKEA.js";import"./SkeletonBar-BZ1jBHo3.js";import"./LoadingCell-La2HjgyQ.js";import"./ColumnConfigDialog-bNRn2_O-.js";import"./DraggableList-BDUQEPvE.js";import"./search-CH-DUc6I.js";import"./Input-xHgbyYEO.js";import"./useControlled-xMZoIalt.js";import"./isEqual-BL3R25LQ.js";import"./isObject-DOPtMIte.js";import"./Button-CSckS2t3.js";import"./ActionButton-1geeM6m0.js";import"./Checkbox-t4d1GJa_.js";import"./useValueChanged-D499xU-W.js";import"./CollapsiblePanel-CmIpp0lz.js";import"./MultiColumnSortDialog-BXMkEVl7.js";import"./MenuTrigger-B8OWZr-x.js";import"./CompositeItem-CgbzO3VR.js";import"./ToolbarRootContext-DgAPui9g.js";import"./getDisabledMountTransitionStyles-CErxBYlz.js";import"./getPseudoElementBounds-C3DaOYsK.js";import"./chevron-down-BnN32e5h.js";import"./index-D33Cjobj.js";import"./error-Cf_wRazy.js";import"./BaseCbacBanner-DpC99ZeZ.js";import"./makeExternalStore-DGM9c3Eo.js";import"./Tooltip-CtEvZAbn.js";import"./PopoverPopup-CWjY2Em3.js";import"./toNumber-Cf7LvuoM.js";import"./tick-Hf6xU6HT.js";import"./DropdownField-D21OwRip.js";import"./withOsdkMetrics-ycYz0MI_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
