import{j as r}from"./iframe-CSN8hPBK.js";import{O as b}from"./object-table-DbL69lyR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CTj8sOMP.js";import{u as g}from"./useOsdkClient-B6qKL_vp.js";import"./preload-helper-CgkWS9T4.js";import"./Table-DClyCIpE.js";import"./index-LA6eGdrx.js";import"./Dialog-FtEKHH1N.js";import"./cross-CLh64p0F.js";import"./svgIconContainer-COOyKoHH.js";import"./useBaseUiId-CST19_eI.js";import"./InternalBackdrop-CTXp7ef6.js";import"./composite-DSnE_YQk.js";import"./index-P9xxddcK.js";import"./index-DeMBNUsz.js";import"./index-BIKPmtBh.js";import"./useEventCallback-B81jpozq.js";import"./SkeletonBar-BGTpH663.js";import"./LoadingCell-A6O8gUu9.js";import"./ColumnConfigDialog-Cp-LNAQK.js";import"./DraggableList-BYRdoRfp.js";import"./search-By7vWzyC.js";import"./Input-BG0-cI5h.js";import"./useControlled-BD5V0Ccm.js";import"./Button-CTdUnl-9.js";import"./small-cross-DqRZZTHz.js";import"./ActionButton-iRrLnlXb.js";import"./Checkbox-B02p3FBc.js";import"./useValueChanged-DROKVxxL.js";import"./CollapsiblePanel-BxP2J2Dt.js";import"./MultiColumnSortDialog-mWaAjcZB.js";import"./MenuTrigger-5cpEf70X.js";import"./CompositeItem-BScttQtR.js";import"./ToolbarRootContext-CDg3nyHK.js";import"./getDisabledMountTransitionStyles-DhTy_FKz.js";import"./getPseudoElementBounds-CVxG5WR2.js";import"./chevron-down-BhdvQ1g6.js";import"./index-BuNpqgsl.js";import"./error-BtGej3op.js";import"./BaseCbacBanner-CJ7LF4Ac.js";import"./makeExternalStore-DS_EZCHg.js";import"./Tooltip-Bv17cXKg.js";import"./PopoverPopup-CQJhkZED.js";import"./debounce-ccFfTLWb.js";import"./tick-l3MhEpoD.js";import"./DropdownField-DUXRBZrT.js";import"./isEqual-CtNna9zA.js";import"./withOsdkMetrics-jlPvbe-f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
