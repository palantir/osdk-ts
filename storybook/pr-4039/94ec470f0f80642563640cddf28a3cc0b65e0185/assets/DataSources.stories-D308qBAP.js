import{j as r}from"./iframe-bRpqvs55.js";import{O as b}from"./object-table-DTJeYCjX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-tNB6VnYm.js";import{u as g}from"./useOsdkClient-BUIu772_.js";import"./preload-helper-C6x1Ezwe.js";import"./Table-pzOwgnpp.js";import"./index-BIhwktUh.js";import"./Dialog-BUuRiFkm.js";import"./cross-W-3E-IIi.js";import"./svgIconContainer-Bb8sMP7z.js";import"./useBaseUiId-DlF45aum.js";import"./InternalBackdrop-JgiXSQHJ.js";import"./composite-eCHjWiuj.js";import"./index-D6zU7-mJ.js";import"./index-D5Q_aXSH.js";import"./index-BOSpr031.js";import"./useEventCallback-6oyiY6oL.js";import"./SkeletonBar-DJvvFheA.js";import"./LoadingCell-ktQQDCh9.js";import"./ColumnConfigDialog-BuMSNPk8.js";import"./DraggableList-C-GVw4zx.js";import"./search-CyiikVap.js";import"./Input-prVuRYoh.js";import"./useControlled-Bp_OFH7Y.js";import"./Button-0l6_p_5m.js";import"./small-cross-DEvpNvc7.js";import"./ActionButton-Dy3mGQhY.js";import"./Checkbox-BUsUHpSL.js";import"./useValueChanged-5Fh0Mmuj.js";import"./CollapsiblePanel-_w77ihX2.js";import"./MultiColumnSortDialog-B3hai6Pi.js";import"./MenuTrigger-CvmpGqAN.js";import"./CompositeItem-Cz1caG-o.js";import"./ToolbarRootContext-BWkwcBK1.js";import"./getDisabledMountTransitionStyles-Cafoyzdu.js";import"./getPseudoElementBounds-CX56f88n.js";import"./chevron-down-hYv0Ya8W.js";import"./index-sU6oAp9b.js";import"./error-DYIwcxmR.js";import"./BaseCbacBanner-r5IeGzMT.js";import"./makeExternalStore-BuZjAFov.js";import"./Tooltip-BmDPAYhk.js";import"./PopoverPopup-DKbTsux3.js";import"./debounce-BIS8_Qcl.js";import"./tick-BJJF7W42.js";import"./DropdownField-BIZpi39T.js";import"./isEqual-BzRAwugt.js";import"./withOsdkMetrics-BMXSfQyV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
