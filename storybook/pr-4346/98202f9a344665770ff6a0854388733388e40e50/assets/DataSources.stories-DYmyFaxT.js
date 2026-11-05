import{j as r}from"./iframe-Cr2bpw19.js";import{O as b}from"./object-table-DCOccJp2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDF_01dY.js";import{u as g}from"./useOsdkClient-ClyAxHlq.js";import"./preload-helper-C_Wd2tIW.js";import"./Table-BjXngxCh.js";import"./index-HKSeYDtX.js";import"./Dialog-DgTafkr7.js";import"./cross-DerUaPtE.js";import"./svgIconContainer-BdwTWCXC.js";import"./useBaseUiId-BsHSNQc2.js";import"./InternalBackdrop-D4g3oYCc.js";import"./composite-Cktz544g.js";import"./index-tVKD-Epk.js";import"./index-BWlzJ_-u.js";import"./index-Bk25D5KY.js";import"./useEventCallback-0Un1rJGa.js";import"./SkeletonBar-CeIQhfQy.js";import"./LoadingCell-BxDMRyGf.js";import"./ColumnConfigDialog-B5IDj2oc.js";import"./DraggableList-CYS1PCg6.js";import"./search-aGII2Iab.js";import"./Input-D8iQjGaO.js";import"./useControlled-CtsC-hEl.js";import"./Button-wtCP8XMP.js";import"./small-cross-d4ra4Um-.js";import"./ActionButton-HPB4ADKq.js";import"./Checkbox-Cjhd7iqA.js";import"./useValueChanged-D31dGWaR.js";import"./CollapsiblePanel-DNu3bG03.js";import"./MultiColumnSortDialog-CkvUreHh.js";import"./MenuTrigger-1ulPFAHS.js";import"./CompositeItem-DiUvRjmE.js";import"./ToolbarRootContext-CivexTIu.js";import"./getDisabledMountTransitionStyles-DZln-1Iq.js";import"./getPseudoElementBounds-BCxYLTqf.js";import"./chevron-down-CPF_RvK3.js";import"./index-qHL-28bq.js";import"./error-s73FCl63.js";import"./BaseCbacBanner-Dw8piuko.js";import"./makeExternalStore-BO-peT-K.js";import"./Tooltip-VnOrH8hU.js";import"./isObject-srhcKzzy.js";import"./debounce-B3GzHEdf.js";import"./tick-BRyPHZ4_.js";import"./DropdownField-BfaMBsWj.js";import"./isEqual-eKau0Myf.js";import"./_baseIsEqual-tNXrt5IF.js";import"./withOsdkMetrics-Ceo_vgdr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
