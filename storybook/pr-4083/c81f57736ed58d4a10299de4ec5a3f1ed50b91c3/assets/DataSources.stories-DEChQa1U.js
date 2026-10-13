import{j as r}from"./iframe-C9OBkxCO.js";import{O as b}from"./object-table-DyBh1eIW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_3w9tI5.js";import{u as g}from"./useOsdkClient-BkQTDtpM.js";import"./preload-helper-DzUjaibC.js";import"./Table-GHPPppGw.js";import"./index-CFjFkJ-v.js";import"./Dialog-C6jklDg1.js";import"./cross-DLECAn5_.js";import"./svgIconContainer-BvHwqNKP.js";import"./useBaseUiId-DrS8qHSd.js";import"./InternalBackdrop-CTmndIKQ.js";import"./composite-BI-3SHGF.js";import"./index-Ddu0h4gv.js";import"./index-_alj9X0j.js";import"./index-Bz5VFwta.js";import"./useEventCallback-DMriD0tz.js";import"./SkeletonBar-B8LNf0OH.js";import"./LoadingCell-BNyFOuWS.js";import"./ColumnConfigDialog-CVP1LZzf.js";import"./DraggableList-mTF-cNUq.js";import"./search-Cdrrqif2.js";import"./Input-DCcVeBLD.js";import"./useControlled-B3h0MmL1.js";import"./Button-DNW3Z-M9.js";import"./small-cross-Bpi6NFfA.js";import"./ActionButton-CPbx2fv2.js";import"./Checkbox-B1X_Gn66.js";import"./useValueChanged-Cja-sQjh.js";import"./CollapsiblePanel-89P4kXtj.js";import"./MultiColumnSortDialog-DWLrTEOw.js";import"./MenuTrigger-CGFwpF3E.js";import"./CompositeItem-ByNf42qV.js";import"./ToolbarRootContext-BjF8crHV.js";import"./getDisabledMountTransitionStyles-BYJIZN46.js";import"./getPseudoElementBounds-ChGaSxDt.js";import"./chevron-down-CRsfqdiU.js";import"./index-N_Ci-Ahv.js";import"./error-uXY_ifTf.js";import"./BaseCbacBanner-D8iGPSUH.js";import"./makeExternalStore-C1NBDQik.js";import"./Tooltip-BCMNs8th.js";import"./PopoverPopup-DvMdOZuS.js";import"./debounce-QFWpzeYe.js";import"./tick-BLKcW3rj.js";import"./DropdownField-DMyThSPG.js";import"./isEqual-DXjNUwI4.js";import"./withOsdkMetrics-BMU2Z44Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
