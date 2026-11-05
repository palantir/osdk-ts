import{j as r}from"./iframe-Cvj3FNL2.js";import{O as b}from"./object-table-C2x3aq5k.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BKLFG7Z1.js";import{u as g}from"./useOsdkClient-BassWPUJ.js";import"./preload-helper-CetzPUwQ.js";import"./Table-CZPtcDN5.js";import"./index-DH-N1YV0.js";import"./Dialog-B5VMx6ZD.js";import"./cross-BgxfwZhF.js";import"./svgIconContainer-2e47raBd.js";import"./useBaseUiId-D4o_acv_.js";import"./InternalBackdrop-CATBYZKD.js";import"./composite-BeeOPu6q.js";import"./index-B2hgVlCo.js";import"./index-DV2RJSrY.js";import"./index-uxZgvSM2.js";import"./useEventCallback-Cqy7o6tW.js";import"./SkeletonBar-262DGPMI.js";import"./LoadingCell-lShAyMqT.js";import"./ColumnConfigDialog-k9C8QYRP.js";import"./DraggableList-Dwjgc3m4.js";import"./search-DUdBrB5_.js";import"./Input-RAe99RCN.js";import"./useControlled-0y2fy9QQ.js";import"./Button-BZDb9IOS.js";import"./small-cross-Cn1GfmeS.js";import"./ActionButton-CFdQScEP.js";import"./Checkbox-BhWtUvjh.js";import"./useValueChanged-D7CgbNdw.js";import"./CollapsiblePanel-BiKanzHS.js";import"./MultiColumnSortDialog-C_dEh5p8.js";import"./MenuTrigger-D8SwBsvq.js";import"./CompositeItem-BgbI3PXY.js";import"./ToolbarRootContext-C86500_m.js";import"./getDisabledMountTransitionStyles-8IEwLVYU.js";import"./getPseudoElementBounds-ebP8vgdz.js";import"./chevron-down-BLip4j8E.js";import"./index-BMbRZnNU.js";import"./error-QqbcWqTY.js";import"./BaseCbacBanner-B5JeFXpe.js";import"./makeExternalStore-Crm20JST.js";import"./Tooltip-wW5BdC1A.js";import"./isObject-FFGALRWz.js";import"./debounce-Yet_dmWM.js";import"./tick-D3nHgBg9.js";import"./DropdownField-_3D3jspy.js";import"./isEqual-uly-B5jb.js";import"./_baseIsEqual-uaL5sXdC.js";import"./withOsdkMetrics-ChCG3pJN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
