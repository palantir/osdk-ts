import{j as r}from"./iframe-DMLeRer3.js";import{O as b}from"./object-table-BK8IY9k2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BU0Wccu3.js";import{u as g}from"./useOsdkClient-Fs_RpKoY.js";import"./preload-helper-CgrwvKPK.js";import"./Table-DJVdytYB.js";import"./index-uCsQBnfO.js";import"./Dialog-C1PQDsNj.js";import"./cross-BxDqlCZv.js";import"./svgIconContainer-COt-rC22.js";import"./useBaseUiId-C4s8ZVxT.js";import"./InternalBackdrop-CyDdu3ej.js";import"./composite-Cge9zcMx.js";import"./index-XhF3-Ii5.js";import"./index-vxfuwNf-.js";import"./index-Ch7aUkCf.js";import"./useEventCallback-D_QVHtF8.js";import"./SkeletonBar-DCA00Bpr.js";import"./LoadingCell-DnHeKuMK.js";import"./ColumnConfigDialog-_mRyyu4y.js";import"./DraggableList-CSWRiJQo.js";import"./search-C183X4Rd.js";import"./Input-LP4KcDLo.js";import"./useControlled-DG760Vv3.js";import"./Button-DPPusxtK.js";import"./small-cross-gPJdhXBg.js";import"./ActionButton-Dom-ym7d.js";import"./Checkbox-D8cF9L1H.js";import"./useValueChanged-hJ0IWPXR.js";import"./CollapsiblePanel-B-bD3HOB.js";import"./MultiColumnSortDialog-BcIkmaGf.js";import"./MenuTrigger-DKaRJM5B.js";import"./CompositeItem-BKFtY3yw.js";import"./ToolbarRootContext-DJJ5b_fP.js";import"./getDisabledMountTransitionStyles-HfDH4vRh.js";import"./getPseudoElementBounds-V4Y4w-GJ.js";import"./chevron-down-Cn9rULd1.js";import"./index-C9zE8P46.js";import"./error-CtIw9Q7f.js";import"./BaseCbacBanner-7dqz0vdK.js";import"./makeExternalStore-DV-LpRK9.js";import"./Tooltip-C0h78S3t.js";import"./PopoverPopup-C-e8gtkY.js";import"./debounce-DJvA31U4.js";import"./tick-CvPk6d_r.js";import"./DropdownField-ajA85Z4P.js";import"./isEqual-BUchmOWF.js";import"./withOsdkMetrics-DV6FYw-u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
