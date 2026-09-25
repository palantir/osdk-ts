import{j as r}from"./iframe-CdF0Fq9c.js";import{O as b}from"./object-table-DCTB_jFv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D92iwbjK.js";import{u as g}from"./useOsdkClient-B8BKhdw9.js";import"./preload-helper-Ct1oZRJx.js";import"./Table-47tQQ2gN.js";import"./index-C157L91v.js";import"./Dialog-C2Um4hjO.js";import"./cross-DSYmSTiz.js";import"./svgIconContainer-B4dKEY9f.js";import"./useBaseUiId-ONWuAW-H.js";import"./InternalBackdrop-BmiLCT5S.js";import"./composite-CLj3gTzn.js";import"./index-1mFMxabl.js";import"./index-C1-F-JKF.js";import"./index-DoBn_sDd.js";import"./useEventCallback-CdebAKnn.js";import"./SkeletonBar-Txh1lAT2.js";import"./LoadingCell-DVLyiZTo.js";import"./ColumnConfigDialog-DV3GZ88c.js";import"./DraggableList-Cslini3j.js";import"./search-DhvEixTQ.js";import"./Input-DtrPcu15.js";import"./useControlled-B9w800yx.js";import"./Button-BBUQ2vzx.js";import"./small-cross-Bkhxrwyf.js";import"./ActionButton-B0D-C4ck.js";import"./Checkbox-9tfyC6al.js";import"./useValueChanged-Ddn72qJ7.js";import"./CollapsiblePanel-CkXKbl9a.js";import"./MultiColumnSortDialog-BMJy-M2V.js";import"./MenuTrigger-CzIoZhik.js";import"./CompositeItem-D7LuxCQJ.js";import"./ToolbarRootContext-B-5g_cXd.js";import"./getDisabledMountTransitionStyles-TKnsNZOB.js";import"./getPseudoElementBounds-DjlHjzw2.js";import"./chevron-down-duFxKh1l.js";import"./index-DcWJRYHo.js";import"./error-1hy_7Gr5.js";import"./BaseCbacBanner-BoHDJ-9K.js";import"./makeExternalStore-DXEmCGwz.js";import"./Tooltip-IWrVwCEs.js";import"./PopoverPopup-D5M-MmVN.js";import"./debounce-DPATjUqM.js";import"./tick-BqfEES5I.js";import"./DropdownField-DHwNGiCR.js";import"./isEqual-kk6H38Ns.js";import"./withOsdkMetrics-6s0IiMkQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
