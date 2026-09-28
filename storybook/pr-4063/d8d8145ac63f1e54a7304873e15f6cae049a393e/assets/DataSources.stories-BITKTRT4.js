import{j as r}from"./iframe-Bhffutgo.js";import{O as b}from"./object-table-C15_AY3f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D01whbP1.js";import{u as g}from"./useOsdkClient-25Kii0Nm.js";import"./preload-helper-CijB9Qe5.js";import"./Table-BReufemI.js";import"./index-Cy8HD2CD.js";import"./Dialog-BZ52wkJR.js";import"./cross-B-UQ3Jxc.js";import"./svgIconContainer-Cic0cef0.js";import"./useBaseUiId--v1O0VA1.js";import"./InternalBackdrop-BkF4CyJK.js";import"./composite-DtoUIyyt.js";import"./index-JMjhMIpk.js";import"./index-DRActumb.js";import"./index-D-zTWlPE.js";import"./useEventCallback-Bd38vKKP.js";import"./SkeletonBar-ZDVpKAdj.js";import"./LoadingCell-9Ct1dbft.js";import"./ColumnConfigDialog-DarnXWK2.js";import"./DraggableList-Cr7FMIsr.js";import"./search-IXw9ma12.js";import"./Input-OY1OZr6O.js";import"./useControlled-B1I8CTdR.js";import"./Button-_SLvpwek.js";import"./small-cross-DELXwmlb.js";import"./ActionButton-BsZDi0RP.js";import"./Checkbox-DWDBNL5s.js";import"./useValueChanged-CXt43HWH.js";import"./CollapsiblePanel-BdEsZMnJ.js";import"./MultiColumnSortDialog-BT0SOBVp.js";import"./MenuTrigger-SZzKg6Lr.js";import"./CompositeItem-BZDrB-0o.js";import"./ToolbarRootContext-CmYX2cG0.js";import"./getDisabledMountTransitionStyles-Bh7kTFsz.js";import"./getPseudoElementBounds-0bpQxymW.js";import"./chevron-down-BcqETG9N.js";import"./index-srbhg0-l.js";import"./error-IjGqGtmT.js";import"./BaseCbacBanner-B8Ba5V9l.js";import"./makeExternalStore-NyFQcR5i.js";import"./Tooltip-C-_NZOL1.js";import"./PopoverPopup-BVUMi5tg.js";import"./debounce-SIEms-6v.js";import"./tick-Cb1TF6t_.js";import"./DropdownField-CuxPlTct.js";import"./isEqual-D8xq866P.js";import"./withOsdkMetrics-DAy7jDWc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
