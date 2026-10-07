import{j as r}from"./iframe-DTvoIH2r.js";import{O as b}from"./object-table-DcBRKP2Z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-5Q52-Vk0.js";import{u as g}from"./useOsdkClient-DgEbhQnl.js";import"./preload-helper-Bl5BDaS_.js";import"./Table-B5BM-1ts.js";import"./index-Cm5sGWxJ.js";import"./Dialog-DOwUxWz4.js";import"./cross-dEikKBUB.js";import"./svgIconContainer-TNOoFETa.js";import"./useBaseUiId-DFuLIzAR.js";import"./InternalBackdrop-BtTRXxuq.js";import"./composite-u0e-F1rW.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./index-BJuMumhG.js";import"./useEventCallback-ClE8dN3c.js";import"./SkeletonBar-B_QvOAKR.js";import"./LoadingCell-Db0NAIaK.js";import"./ColumnConfigDialog-DFcvH2Ry.js";import"./DraggableList-BhFAB-0e.js";import"./search-CkOB4LMx.js";import"./Input-C-tth6vb.js";import"./useControlled-0uh_9m14.js";import"./Button-Eyz2dERQ.js";import"./small-cross-b1Gc4au3.js";import"./ActionButton-DvyFEALd.js";import"./Checkbox-DD7fo72m.js";import"./useValueChanged-C0F3L9Dh.js";import"./CollapsiblePanel-CmQJ5gXg.js";import"./MultiColumnSortDialog-C1nSqxJj.js";import"./MenuTrigger-BvK8OaRd.js";import"./CompositeItem-OtQFnxkB.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./getDisabledMountTransitionStyles-jYzEuXLs.js";import"./getPseudoElementBounds-DP6PNIaO.js";import"./chevron-down-Kc2WAjaE.js";import"./index-C_BS0Bod.js";import"./error-CAqUL9Mb.js";import"./BaseCbacBanner-Dgtv0AkD.js";import"./makeExternalStore-B3yQfg4Y.js";import"./Tooltip-D8UVCGwD.js";import"./PopoverPopup-BTvzJrlx.js";import"./debounce-Kfo2TjOI.js";import"./tick-xV1uMXxC.js";import"./DropdownField-_nnCiIcu.js";import"./isEqual-osHTpoDt.js";import"./withOsdkMetrics-iCsj3SqR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
